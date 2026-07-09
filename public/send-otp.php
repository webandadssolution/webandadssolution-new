<?php
/**
 * Step 1 of the OTP-protected contact form: generate a 6-digit code,
 * store it in the session against the submitted email, and mail it out.
 */

header('Content-Type: application/json; charset=utf-8');
session_start([
    'cookie_httponly' => true,
    'cookie_samesite' => 'Lax',
]);

require_once __DIR__ . '/mailer.php';

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
$name  = clean_field($_POST['name'] ?? '');

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address first.']);
    exit;
}

// Throttle resends so the inbox doesn't get spammed.
if (isset($_SESSION['otp_sent_at']) && (time() - $_SESSION['otp_sent_at']) < 45) {
    $wait = 45 - (time() - $_SESSION['otp_sent_at']);
    echo json_encode(['success' => false, 'message' => "Please wait {$wait}s before requesting a new code."]);
    exit;
}

$otp = (string) random_int(100000, 999999);

$_SESSION['otp_code']    = $otp;
$_SESSION['otp_email']   = $email;
$_SESSION['otp_sent_at'] = time();
$_SESSION['otp_attempts'] = 0;
unset($_SESSION['otp_verified_email']);

$greeting = $name !== '' ? $name : 'there';
$subject  = "Your verification code: {$otp}";
$body     = "Hi {$greeting},\n\nYour verification code is: {$otp}\n\nThis code expires in 10 minutes. If you didn't request this, you can safely ignore this email.\n";

$sent = send_smtp_mail($email, $subject, $body);

if ($sent === true) {
    echo json_encode(['success' => true, 'message' => 'Verification code sent. Please check your inbox.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Could not send verification code: {$sent}"]);
}
