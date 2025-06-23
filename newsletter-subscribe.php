<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Debug: log POST data
    // file_put_contents('newsletter_debug.log', print_r($_POST, true), FILE_APPEND);
    $subscriber = trim(isset($_POST['email']) ? $_POST['email'] : '');
    if ($subscriber && filter_var($subscriber, FILTER_VALIDATE_EMAIL)) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'prossienabbona20@gmail.com';
            $mail->Password   = 'ucxojpcllesdvuze';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;
            $mail->setFrom('prossienabbona20@gmail.com', 'Newsletter Subscription');
            $mail->addAddress('prossienabbona20@gmail.com');
            $mail->Subject = 'New Newsletter Subscription';
            $mail->Body    = "A new user has subscribed to the newsletter.\nSubscriber Email: $subscriber";
            $mail->send();
            echo 'Thank you for subscribing!';
        } catch (Exception $e) {
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
    } else {
        echo 'Please enter a valid email address.';
    }
    exit;
}
?>
