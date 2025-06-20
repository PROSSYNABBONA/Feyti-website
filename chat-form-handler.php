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
    // Debug: output POST and FILES arrays for troubleshooting
    echo '<pre>$_POST: ' . print_r($_POST, true) . "\n\n" . '$_FILES: ' . print_r($_FILES, true) . '</pre>';

    $message = trim(isset($_POST['chatMessage']) ? $_POST['chatMessage'] : '');
    $email = trim(isset($_POST['email']) ? $_POST['email'] : '');
    if ($message) {
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'prossienabbona20@gmail.com';
            $mail->Password   = 'ucxojpcllesdvuze';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port       = 587;
            $mail->setFrom('prossienabbona20@gmail.com', 'Website Chat');
            if ($email) {
                $mail->addReplyTo($email);
            }
            $mail->addAddress('prossienabbona20@gmail.com');
            $mail->Subject = 'New Chat Inquiry from Website';
            $mail->Body    = "Chat Message: $message\nReply Email: $email";
            $mail->send();
            echo 'Thank you! Your chat message has been sent.';
        } catch (Exception $e) {
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        }
    } else {
        // Debug: log missing message
        file_put_contents('chat_debug.log', "Missing chatMessage. POST: " . print_r($_POST, true), FILE_APPEND);
        echo 'Please enter a message.';
    }
    exit;
}
?>
