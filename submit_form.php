<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Fetch form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_post['subject'];

    // Perform any necessary validation on the data
    // ...

    // Send email
    $to = 'simba703@gmail.com';
    $subject = "Subject: $subject";
    $body = "Name: $name\nEmail: $email\n\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        $response = 'Thank you for your message! We will get back to you soon.';
    } else {
        $response = 'An error occurred while sending the message. Please try again later.';
    }

    // Return a response
    echo $response;
}
