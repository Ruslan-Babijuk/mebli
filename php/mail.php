<?php
    $tel = $_POST['tel'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта")."?=";



    $success = mail("ruslan1999bab@gmail.com", $subject, $tel);
    echo $success;

?>