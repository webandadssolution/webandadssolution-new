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

function client_country(string $ip): string {
    // Cloudflare (or similar CDN) already resolves this on every request — free and instant.
    if (!empty($_SERVER['HTTP_CF_IPCOUNTRY'])) {
        return clean_field($_SERVER['HTTP_CF_IPCOUNTRY']);
    }
    // Best-effort fallback lookup. Must never block or break form submission.
    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE)) {
        $ctx = stream_context_create(['http' => ['timeout' => 2]]);
        $resp = @file_get_contents("http://ip-api.com/json/{$ip}?fields=status,country", false, $ctx);
        if ($resp) {
            $data = json_decode($resp, true);
            if (($data['status'] ?? '') === 'success' && !empty($data['country'])) {
                return $data['country'];
            }
        }
    }
    return 'Unknown';
}

function contact_email_text(string $name, string $email, string $phone, string $service, string $budget, string $message, string $ip, string $country): string {
    $body  = "You have a new message from the website contact form:\n\n";
    $body .= "Name: {$name}\n";
    $body .= "Email: {$email}\n";
    $body .= "Phone: " . ($phone !== '' ? $phone : '-') . "\n";
    $body .= "Service: {$service}\n";
    $body .= "Budget: " . ($budget !== '' ? $budget : '-') . "\n";
    $body .= "IP Address: {$ip}\n";
    $body .= "Country: {$country}\n";
    $body .= "Message:\n{$message}\n";
    return $body;
}

function contact_email_html(string $name, string $email, string $phone, string $service, string $budget, string $message, string $ip, string $country): string {
    $n = htmlspecialchars($name);
    $e = htmlspecialchars($email);
    $p = htmlspecialchars($phone !== '' ? $phone : '-');
    $s = htmlspecialchars($service);
    $b = htmlspecialchars($budget !== '' ? $budget : '-');
    $ipEsc = htmlspecialchars($ip);
    $cEsc = htmlspecialchars($country);
    $m = nl2br(htmlspecialchars($message));
    $year = date('Y');

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

                    <tr>
                      <td style="padding:14px 22px;border-bottom:1px solid #e5e7eb;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">Name</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$n}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 22px;border-bottom:1px solid #e5e7eb;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">Email</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;"><a href="mailto:{$e}" style="color:#F37021;text-decoration:none;">{$e}</a></div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 22px;border-bottom:1px solid #e5e7eb;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">Phone</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$p}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 22px;border-bottom:1px solid #e5e7eb;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">Service Interested In</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$s}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 22px;border-bottom:1px solid #e5e7eb;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">Monthly Budget</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$b}</div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:14px 22px;">
                        <div style="color:#9ca3af;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.7px;margin-bottom:3px;">IP Address / Country</div>
                        <div style="color:#111827;font-size:14.5px;font-weight:600;">{$ipEsc} &middot; {$cEsc}</div>
                      </td>
                    </tr>

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

$name    = clean_field($_POST['name'] ?? '');
$email   = clean_field($_POST['email'] ?? '');
$phone   = clean_field($_POST['phone'] ?? '');
$service = clean_field($_POST['service'] ?? '');
$budget  = clean_field($_POST['budget'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $service === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

$ip = client_ip();
$country = client_country($ip);

$subject = "New Contact Form Submission from {$name}";

$textBody = contact_email_text($name, $email, $phone, $service, $budget, $message, $ip, $country);
$htmlBody = contact_email_html($name, $email, $phone, $service, $budget, $message, $ip, $country);

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
$headers  .= "Reply-To: {$email}\r\n";
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
