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

    // Send email
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
        // Show snackbar and redirect
        echo '
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                #snackbar {
                    visibility: hidden;
                    min-width: 250px;
                    margin-left: -125px;
                    background-color: #4CAF50;
                    color: #fff;
                    text-align: center;
                    border-radius: 4px;
                    padding: 16px;
                    position: fixed;
                    z-index: 1;
                    left: 50%;
                    bottom: 30px;
                    font-size: 17px;
                }
                #snackbar.show {
                    visibility: visible;
                    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
                    animation: fadein 0.5s, fadeout 0.5s 2.5s;
                }
                @-webkit-keyframes fadein {
                    from {bottom: 0; opacity: 0;} 
                    to {bottom: 30px; opacity: 1;}
                }
                @keyframes fadein {
                    from {bottom: 0; opacity: 0;}
                    to {bottom: 30px; opacity: 1;}
                }
                @-webkit-keyframes fadeout {
                    from {bottom: 30px; opacity: 1;} 
                    to {bottom: 0; opacity: 0;}
                }
                @keyframes fadeout {
                    from {bottom: 30px; opacity: 1;}
                    to {bottom: 0; opacity: 0;}
                }
            </style>
        </head>
        <body>
            <div id="snackbar">Message successfully sent! We will get back</div>

            <script>
                var snackbar = document.getElementById("snackbar");
                snackbar.className = "show";
                setTimeout(function() {
                    snackbar.className = snackbar.className.replace("show", "");
                    window.location.href = "index.html"; // Redirect to homepage
                }, 3000); // 3 seconds
            </script>
        </body>
        </html>';
    } else {
        echo "<h3>Sorry, something went wrong. Please try again later.</h3>";
    }
} else {
    echo "<h3>Invalid request</h3>";
}
