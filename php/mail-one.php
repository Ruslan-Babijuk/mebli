<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
   

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";



    $success = mail("ruslan1999bab@gmail.com", $subject, $name, $phone);
    echo $success;

?>