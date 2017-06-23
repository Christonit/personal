<?php

    $email = 'christopher.alesan@gmail.com';
    $subject = $_POST['subject'];

    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];

    $subject = str_replace('[name]', $name, $subject);
    $headers = 'From: '.$name.' <'.$from.'>';
    mail($email, $subject, $message, $headers);
    /*if ( ! mail($email, $subject, $message, $headers))
        {
            echo"Ha Ocurrido un error trate Nuevamente."; 
        } else {
            echo"Gracias por escribir lo mas pronto posible tendra su respuesta.";
        }*/
?>
