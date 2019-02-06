<?php

$to = 'driemmastr@gmail.com';
$subject = 'Potential Client Inquiry';
$from = $_POST['contact_email'];
$firstName = 'First Name: ' . $_POST['contact_firstName'] . "\r\n\r\n";
$lastName = 'Last Name: ' . $_POST['contact_lastName'] . "\r\n\r\n";
$email = 'Email: ' . $_POST['contact_email'] . "\r\n\r\n";
$phone = 'Phone: ' . $_POST['contact_phone'] . "\r\n\r\n";
$insuarance = 'Insuarance: ' . $_POST['contact_insuarance'] . "\r\n\r\n";
$seeking = 'Looking For: ' . $_POST['contact_seeking'] . "\r\n\r\n";
$history = 'Hospital History: ' . $_POST['hospital_radio'] . "\r\n\r\n";
$body = "$firstName\n $lastName\n $email\n $phone\n $insuarance\n $seeking\n $history";

if (isset($_POST['contact_submit'])) {
    mail($to, $subject, $body, $from);
    echo '<p>Your message has been sent!</p>';
} else {
    echo '<p>Well shucks, that didn\'t work!</p>';
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Thank You</h1>
    <p>Your message has been sent.</p>
    <h1>Oops!</h1>
    <p>Sorry, your message did not send!</p>
</body>
</html>