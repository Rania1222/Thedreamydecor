<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $data = json_decode(file_get_contents("php://input"));

    $name = $data->name;
    $email = $data->email;
    $phone = $data->phone;
    $message = $data->message;

    // You can customize the email message as needed
    $to = "raniaidforsamsung@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $mailSuccess = mail($to, $subject, $message, $headers);

    if ($mailSuccess) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong, and we couldn't send your message.";
    }
} else {
    // Invalid request
    echo "Invalid request";
}
?>
