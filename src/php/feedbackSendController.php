<?php

require 'PHPMailer-master/PHPMailerAutoload.php';

//function for sanitating text
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//checks if request is valid
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    //Gets Data that was sent from webpage
    $feedbackName = $_POST['feedbackName'];
    $feedbackEmail = $_POST['feedbackEmail'];
    $feedbackContent = $_POST['feedbackContent'];

    //Validates if Actual email was written
    if(filter_var($feedbackEmail, FILTER_VALIDATE_EMAIL)){

        //Sanitates the input
        $feedbackName = test_input($feedbackName);
        $feedbackContent = test_input($feedbackContent);

        $mail = new PHPMailer;

        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        //Set SMTP host name (Do not need to change yet)
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;
        //Provide the username and the password of the account from which the emails will be sent
        //Change before using
        $mail->Username = "test@gmail.com";
        $mail->Password = "testtest";
        $mail->SMTPSecure = "tls";
        $mail->Port = 587;

        $mail->From = $feedbackEmail;
        $mail->FromName = $feedbackName;

        $mail->smtpConnect(
            array(
                "ssl" => array(
                    "verify_peer" => false,
                    "verify_peer_name" => false,
                    "allow_self_signed" => true
                )
            )
        );

        //Provide the mail address that will recieve email's
        $mail->addAddress("recieverTest@gmail.com", "Test Test");

        $mail->isHTML(true);

        $mail->Subject = "Feedback from Go_Student";
        $mail->Body = $feedbackContent;

        if(!$mail->send())
        {
            echo "Something went wrong. Please try again later";
        }
        else
        {
            echo "Message has been sent successfully";
        }
    }
    else{
        echo 'You entered invalid email';
    }

}
else{
    echo 'Something went wrong. Please try again later';
}

