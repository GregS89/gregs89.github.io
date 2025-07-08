<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $subject = htmlspecialchars(trim($_POST["subject"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format.");
    }

    $to = "enquiries@buildcompliance360.com";
    $body = "
    Name: $name\n
    Email: $email\n
    Subject: $subject\n
    Message:\n$message
    ";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        // Success message + redirect with snackbar
        echo '
        <html><head>
        <meta charset="utf-8" />
        <style>
            #snackbar {
                visibility: hidden;
                min-width: 250px;
                background-color: #4CAF50;
                color: white;
                text-align: center;
                border-radius: 4px;
                padding: 16px;
                position: fixed;
                z-index: 1;
                left: 50%;
                bottom: 30px;
                transform: translateX(-50%);
                font-size: 17px;
            }
            #snackbar.show {
                visibility: visible;
                animation: fadein 0.5s, fadeout 0.5s 2.5s;
            }
            @keyframes fadein {
                from {bottom: 0; opacity: 0;} to {bottom: 30px; opacity: 1;}
            }
            @keyframes fadeout {
                from {bottom: 30px; opacity: 1;} to {bottom: 0; opacity: 0;}
            }
        </style>
        </head><body>
        <div id="snackbar">Message successfully sent!</div>
        <script>
            const snackbar = document.getElementById("snackbar");
            snackbar.className = "show";
            setTimeout(() => {
                window.location.href = "/";
            }, 3000);
        </script>
        </body></html>';
    } else {
        echo "Sorry, message failed to send.";
    }
} else {
    echo "Invalid request.";
}
