<?php
/**
 * Step 2 of the OTP-protected contact form: check the code the visitor
 * typed against the one stored in the session by send-otp.php.
 * On success, marks the email as verified for contact.php to trust.
 */

header('Content-Type: application/json; charset=utf-8');
session_start([
    'cookie_httponly' => true,
    'cookie_samesite' => 'Lax',
]);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

function clean_field($value) {
    $value = trim((string) ($value ?? ''));
    return preg_replace('/(\r\n|\r|\n|%0a|%0d)/i', '', $value);
}

$email = clean_field($_POST['email'] ?? '');
$otp   = clean_field($_POST['otp'] ?? '');

if (empty($_SESSION['otp_code']) || empty($_SESSION['otp_email'])) {
    echo json_encode(['success' => false, 'message' => 'No verification code was requested. Please request a new code.']);
    exit;
}

if ($_SESSION['otp_email'] !== $email) {
    echo json_encode(['success' => false, 'message' => 'Email does not match the one the code was sent to.']);
    exit;
}

// Expire codes after 10 minutes.
if ((time() - $_SESSION['otp_sent_at']) > 600) {
    unset($_SESSION['otp_code'], $_SESSION['otp_email'], $_SESSION['otp_sent_at'], $_SESSION['otp_attempts']);
    echo json_encode(['success' => false, 'message' => 'Code expired. Please request a new one.']);
    exit;
}

$_SESSION['otp_attempts'] = ($_SESSION['otp_attempts'] ?? 0) + 1;
if ($_SESSION['otp_attempts'] > 5) {
    unset($_SESSION['otp_code'], $_SESSION['otp_email'], $_SESSION['otp_sent_at'], $_SESSION['otp_attempts']);
    echo json_encode(['success' => false, 'message' => 'Too many incorrect attempts. Please request a new code.']);
    exit;
}

if ($otp === '' || !hash_equals($_SESSION['otp_code'], $otp)) {
    $left = max(0, 5 - $_SESSION['otp_attempts']);
    echo json_encode(['success' => false, 'message' => "Incorrect code. {$left} attempt(s) left."]);
    exit;
}

// Verified — let contact.php know this email is trusted, single-use.
$_SESSION['otp_verified_email'] = $email;
unset($_SESSION['otp_code'], $_SESSION['otp_sent_at'], $_SESSION['otp_attempts']);

echo json_encode(['success' => true, 'message' => 'Email verified.']);
