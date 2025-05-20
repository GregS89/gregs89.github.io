<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input data
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $mobile = htmlspecialchars(trim($_POST["mobile"]));
    $service = htmlspecialchars(trim($_POST["service"]));
    $appointment_date = htmlspecialchars(trim($_POST["appointment_date"]));
    $appointment_time = htmlspecialchars(trim($_POST["appointment_time"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // OPTIONAL: Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    // Save to database (optional) OR send email
    $to = "enquiries@buildcompliance360.com";
    $subject = "New Appointment Request";
    $body = "
    Name: $name\n
    Email: $email\n
    Mobile: $mobile\n
    Service: $service\n
    Appointment Date: $appointment_date\n
    Appointment Time: $appointment_time\n
    Message:\n$message
  ";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h3>Thank you, your appointment request has been sent successfully.</h3>";
    } else {
        echo "<h3>Sorry, something went wrong. Please try again later.</h3>";
    }
} else {
    echo "<h3>Invalid request</h3>";
}
