<?php
/**
 * Shared SMTP mailer for the contact form (send-otp.php, contact.php).
 * Uses PHPMailer over Hostinger SMTP instead of PHP's mail(), which is
 * commonly blocked/marked as spam on shared hosting.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/PHPMailer/src/Exception.php';
require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
require_once __DIR__ . '/PHPMailer/src/SMTP.php';

define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_USER', 'test@webandadssolution.net');
define('SMTP_PASS', 'Ou9#QxLmzLnd');
define('SMTP_PORT', 465);
define('SMTP_FROM_NAME', 'Web & Ads Solution');

/**
 * Sends a plain-text email over SMTP.
 * Returns true on success, or the PHPMailer error string on failure.
 */
function send_smtp_mail(string $to, string $subject, string $body, ?string $replyTo = null) {
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host       = SMTP_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = SMTP_USER;
        $mail->Password   = SMTP_PASS;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = SMTP_PORT;

        $mail->setFrom(SMTP_USER, SMTP_FROM_NAME);
        $mail->addAddress($to);
        if ($replyTo !== null && $replyTo !== '') {
            $mail->addReplyTo($replyTo);
        }

        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body    = $body;

        $mail->send();
        return true;
    } catch (Exception $e) {
        return $mail->ErrorInfo;
    }
}
