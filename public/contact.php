<?php
/**
 * Contact form mail handler.
 * Receives a POST (application/x-www-form-urlencoded or multipart/form-data)
 * from src/components/contact-form.tsx and sends it via PHP's mail().
 */

header('Content-Type: application/json; charset=utf-8');

$to = "info@webandadssolution.com";

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_field($value) {
    $value = trim((string) ($value ?? ''));
    // Strip header-injection attempts (CR/LF and their URL-encoded forms).
    return preg_replace('/(\r\n|\r|\n|%0a|%0d)/i', '', $value);
}

function client_ip(): string {
    foreach (['HTTP_CF_CONNECTING_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_REAL_IP', 'REMOTE_ADDR'] as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = trim(explode(',', $_SERVER[$key])[0]);
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
                return $ip;
            }
        }
    }
    return 'Unknown';
}

function client_location(string $ip): array {
    $location = ['city' => 'Unknown', 'country' => 'Unknown'];

    // Cloudflare (or similar CDN) already resolves the country on every request — free and instant.
    if (!empty($_SERVER['HTTP_CF_IPCOUNTRY']) && $_SERVER['HTTP_CF_IPCOUNTRY'] !== 'XX') {
        $location['country'] = clean_field($_SERVER['HTTP_CF_IPCOUNTRY']);
    }

    // Best-effort lookup for city (and a country fallback). Must never block or break form submission.
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
        $ctx = stream_context_create(['http' => ['timeout' => 2]]);
        $resp = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,country,city", false, $ctx);
        if ($resp) {
            $data = json_decode($resp, true);
            if (($data['status'] ?? '') === 'success') {
                if (!empty($data['city'])) {
                    $location['city'] = $data['city'];
                }
                if ($location['country'] === 'Unknown' && !empty($data['country'])) {
                    $location['country'] = $data['country'];
                }
            }
        }
    }

    return $location;
}

function submitted_at(string $tzName): string {
    try {
        $tz = new DateTimeZone($tzName !== '' ? $tzName : 'UTC');
    } catch (Exception $e) {
        $tz = new DateTimeZone('UTC');
    }
    $dt = new DateTime('now', $tz);
    return $dt->format('d M Y, h:i A') . ' (' . $tz->getName() . ', UTC' . $dt->format('P') . ')';
}

function parse_user_agent(string $ua): array {
    if ($ua === '') {
        return ['browser' => 'Unknown', 'os' => 'Unknown', 'device' => 'Unknown'];
    }

    if (preg_match('/Edg(?:A|iOS)?\/[\d.]+/i', $ua)) {
        $browser = 'Edge';
    } elseif (preg_match('/OPR\/[\d.]+|Opera/i', $ua)) {
        $browser = 'Opera';
    } elseif (preg_match('/SamsungBrowser\/[\d.]+/i', $ua)) {
        $browser = 'Samsung Internet';
    } elseif (preg_match('/Firefox\/[\d.]+/i', $ua) && !preg_match('/Seamonkey/i', $ua)) {
        $browser = 'Firefox';
    } elseif (preg_match('/Chrome\/[\d.]+|CriOS\/[\d.]+/i', $ua)) {
        $browser = 'Chrome';
    } elseif (preg_match('/Version\/[\d.]+.*Safari\//i', $ua)) {
        $browser = 'Safari';
    } else {
        $browser = 'Unknown';
    }

    if (preg_match('/iPad/i', $ua)) {
        $os = 'iOS';
        $device = 'Tablet (iPad)';
    } elseif (preg_match('/iPhone/i', $ua)) {
        $os = 'iOS';
        // Apple's browsers do not expose the specific iPhone model in the user agent.
        $device = 'Mobile (iPhone)';
    } elseif (preg_match('/Android\s[\d.]+;\s*([^;)]+)\)/i', $ua, $m)) {
        $os = 'Android';
        $model = trim(preg_replace('/\s+Build\/.*/i', '', $m[1]));
        $device = ($model !== '' && strcasecmp($model, 'Android') !== 0)
            ? "Mobile (Android \xE2\x80\x93 {$model})"
            : 'Mobile (Android)';
    } elseif (preg_match('/Windows NT/i', $ua)) {
        $os = 'Windows';
        $device = 'Desktop (Windows)';
    } elseif (preg_match('/Macintosh|Mac OS X/i', $ua)) {
        $os = 'macOS';
        // Browsers don't distinguish MacBook from iMac/Mac mini in the user agent.
        $device = 'Desktop (Mac)';
    } elseif (preg_match('/CrOS/i', $ua)) {
        $os = 'ChromeOS';
        $device = 'Desktop (Chromebook)';
    } elseif (preg_match('/Linux/i', $ua)) {
        $os = 'Linux';
        $device = 'Desktop (Linux)';
    } else {
        $os = 'Unknown';
        $device = 'Unknown';
    }

    return ['browser' => $browser, 'os' => $os, 'device' => $device];
}

function contact_email_text(array $lead, array $meta): string {
    $body  = "You have a new message from the website contact form:\n\n";
    $body .= "Name: {$lead['name']}\n";
    $body .= "Email: {$lead['email']}\n";
    $body .= "Phone: " . ($lead['phone'] !== '' ? $lead['phone'] : '-') . "\n";
    $body .= "Service: {$lead['service']}\n";
    $body .= "Budget: " . ($lead['budget'] !== '' ? $lead['budget'] : '-') . "\n\n";
    $body .= "Page URL: {$meta['pageUrl']}\n";
    $body .= "Submitted At: {$meta['submittedAt']}\n";
    $body .= "Location: {$meta['city']}, {$meta['country']}\n";
    $body .= "Browser: {$meta['browserLine']}\n";
    $body .= "Device: {$meta['device']}\n";
    $body .= "IP Address: {$meta['ip']}\n\n";
    $body .= "Message:\n{$lead['message']}\n";
    return $body;
}

function contact_email_html(array $lead, array $meta): string {
    $n = htmlspecialchars($lead['name']);
    $e = htmlspecialchars($lead['email']);
    $p = htmlspecialchars($lead['phone'] !== '' ? $lead['phone'] : '-');
    $s = htmlspecialchars($lead['service']);
    $b = htmlspecialchars($lead['budget'] !== '' ? $lead['budget'] : '-');
    $m = nl2br(htmlspecialchars($lead['message']));

    $pageUrl = htmlspecialchars($meta['pageUrl']);
    $submittedAt = htmlspecialchars($meta['submittedAt']);
    $location = htmlspecialchars(trim("{$meta['city']}, {$meta['country']}", ', '));
    $browserLine = htmlspecialchars($meta['browserLine']);
    $device = htmlspecialchars($meta['device']);
    $ipEsc = htmlspecialchars($meta['ip']);
    $year = date('Y');

    $rows = [
        ['Name', $n],
        ['Email', "<a href=\"mailto:{$e}\" style=\"color:#F37021;text-decoration:none;\">{$e}</a>"],
        ['Phone', $p],
        ['Service Interested In', $s],
        ['Monthly Budget', $b],
        ['Page URL', $pageUrl],
        ['Submitted At', $submittedAt],
        ['Approximate Location', $location],
        ['Browser', $browserLine],
        ['Device', $device],
        ['IP Address', $ipEsc],
    ];

    $rowsHtml = '';
    $last = count($rows) - 1;
    foreach ($rows as $i => [$label, $value]) {
        $border = $i === $last ? '' : 'border-bottom:1px solid #e5e7eb;';
        $rowsHtml .= <<<ROW
                    <tr>
                      <td style="padding:14px 22px;{$border}">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">{$label}</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$value}</div>
                      </td>
                    </tr>
ROW;
    }

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:48px 16px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">

        <tr>
          <td style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 4px 32px rgba(0,0,0,.10);">

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:linear-gradient(135deg,#141C3D 0%,#1E2957 55%,#F37021 100%);padding:36px 40px;text-align:center;">
                  <div style="display:inline-block;width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.15);margin-bottom:14px;line-height:56px;font-size:26px;">&#9993;</div>
                  <h1 style="margin:0;color:#fff;font-size:21px;font-weight:700;">New Contact Form Submission</h1>
                  <p style="margin:6px 0 0;color:rgba(255,255,255,.75);font-size:13px;">Web &amp; Ads Solutions website</p>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:28px 40px 0;">
                  <p style="margin:0;color:#374151;font-size:14.5px;line-height:1.7;">
                    You have a new message from <strong style="color:#141C3D;">{$n}</strong>. Details below.
                  </p>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:20px 40px 0;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border:1.5px solid #e5e7eb;border-radius:14px;overflow:hidden;">
{$rowsHtml}
                  </table>
                </td>
              </tr>
            </table>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:20px 40px 36px;">
                  <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:8px;">Message</div>
                  <div style="background:#fff7ed;border:1px solid #fde6d2;border-radius:12px;padding:16px 18px;color:#374151;font-size:14px;line-height:1.7;">
                    {$m}
                  </div>
                </td>
              </tr>
            </table>

          </td>
        </tr>

        <tr>
          <td style="padding:24px 0;text-align:center;">
            <p style="margin:0;color:#9ca3af;font-size:12px;line-height:1.8;">
              &copy; {$year} Web &amp; Ads Solutions &middot; Reply directly to this email to respond to {$n}.
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
HTML;
}

$lead = [
    'name'    => clean_field($_POST['name'] ?? ''),
    'email'   => clean_field($_POST['email'] ?? ''),
    'phone'   => clean_field($_POST['phone'] ?? ''),
    'service' => clean_field($_POST['service'] ?? ''),
    'budget'  => clean_field($_POST['budget'] ?? ''),
    'message' => trim((string) ($_POST['message'] ?? '')),
];

if ($lead['name'] === '' || $lead['email'] === '' || $lead['service'] === '' || $lead['message'] === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$ip = client_ip();
$location = client_location($ip);
$ua = parse_user_agent((string) ($_SERVER['HTTP_USER_AGENT'] ?? ''));

$meta = [
    'ip'           => $ip,
    'city'         => $location['city'],
    'country'      => $location['country'],
    'pageUrl'      => clean_field($_POST['page_url'] ?? ($_SERVER['HTTP_REFERER'] ?? 'Unknown')),
    'submittedAt'  => submitted_at(clean_field($_POST['timezone'] ?? '')),
    'browserLine'  => $ua['browser'] !== 'Unknown' && $ua['os'] !== 'Unknown'
        ? "{$ua['browser']} on {$ua['os']}"
        : $ua['browser'],
    'device'       => $ua['device'],
];

$subject = "New Contact Form Submission from {$lead['name']}";

$textBody = contact_email_text($lead, $meta);
$htmlBody = contact_email_html($lead, $meta);

$boundary = md5(uniqid((string) time()));

$body  = "--{$boundary}\r\n";
$body .= "Content-Type: text/plain; charset=UTF-8\r\n\r\n";
$body .= "{$textBody}\r\n";
$body .= "--{$boundary}\r\n";
$body .= "Content-Type: text/html; charset=UTF-8\r\n\r\n";
$body .= "{$htmlBody}\r\n";
$body .= "--{$boundary}--";

$fromDomain = $_SERVER['SERVER_NAME'] ?? 'webandadssolution.com';
$headers   = "From: Website Contact Form <no-reply@{$fromDomain}>\r\n";
$headers  .= "Reply-To: {$lead['email']}\r\n";
$headers  .= "MIME-Version: 1.0\r\n";
$headers  .= "Content-Type: multipart/alternative; boundary=\"{$boundary}\"\r\n";

// $headers  .= "Cc: cc-address@example.com\r\n";
// $headers  .= "Bcc: bcc-address@example.com\r\n";



$sent = mail($to, $subject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Could not send message. Please try again later.']);
}
