<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Simple contact form handler
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    header('Content-Type: application/json');
    $name = trim(isset($_POST['name']) ? $_POST['name'] : '');
    $email = trim(isset($_POST['email']) ? $_POST['email'] : '');
    $message = trim(isset($_POST['message']) ? $_POST['message'] : '');

    if ($name && $email && $message) {
        $mail = new PHPMailer(true);
        try {
            //Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'prossienabbona20@gmail.com'; // Your Gmail address
            $mail->Password   = 'ucxojpcllesdvuze';   // Your Gmail app password (no spaces)
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;

            //Recipients
            $mail->setFrom('prossienabbona20@gmail.com', $name); // Set from your Gmail, reply-to user
            $mail->addReplyTo($email, $name); // User's email as reply-to
            $mail->addAddress('prossienabbona20@gmail.com'); // Your Gmail address

            //Content
            $mail->Subject = 'Feyti Medical Group Message';
            $mail->Body    = "Name: $name\nEmail: $email\nMessage:\n$message";

            $mail->send();
            echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
        } catch (Exception $e) {
            echo json_encode(['success' => false, 'message' => 'Mailer Error: ' . $mail->ErrorInfo]);
        }
    } else {
        echo json_encode(['success' => false, 'message' => 'Please fill in all fields.']);
    }
    exit;
}
?>
