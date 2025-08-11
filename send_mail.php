<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Load .env variables
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();
} else {
    // Fallback: parse .env manually if vlucas/phpdotenv is not available
    $env = parse_ini_file(__DIR__ . '/.env');
    $_ENV['MAIL_USERNAME'] = $env['MAIL_USERNAME'] ?? '';
    $_ENV['MAIL_PASSWORD'] = $env['MAIL_PASSWORD'] ?? '';
}

$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$message = $_POST['message'] ?? '';

$mail = new PHPMailer(true);

try {
    // SMTP Configuration
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';  // Use Hostinger's SMTP server
    $mail->SMTPAuth = true;
    $mail->Username = $_ENV['MAIL_USERNAME']; // Loaded from .env
    $mail->Password = $_ENV['MAIL_PASSWORD']; // Loaded from .env
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email Headers
    $mail->setFrom($_ENV['MAIL_USERNAME'], 'Website Contact Form');
    $mail->addAddress('you@yourdomain.com'); // Where you want to receive messages
    $mail->addReplyTo($email, $name);

    // Email Content
    $mail->isHTML(true);
    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "<b>Name:</b> $name<br><b>Email:</b> $email<br><b>Message:</b><br>" . nl2br($message);
    $mail->AltBody = "Name: $name\nEmail: $email\nMessage:\n$message";

    $mail->send();
    echo 'Message has been sent successfully!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
