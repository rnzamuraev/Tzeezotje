<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require 'PHPMailer/src/SMTP.php';
require "PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;
  $mail->IsHTML(true); 

  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Настройка поч
  $mail->Host = "smtp.gmail.com"; 
  $mail->Username = "rnzamuraev@gmail.com";
  $mail->Password = "................";
  $mail->SMTPSecure = "ssl";
  $mail->Port = 465;  

  $mail->setFrom("rnzamuraev@gmail.com"); 

  // Получатель письма
  $mail->addAddress("admin@rnzamuraev.ru");
  $mail->addAddress($email);

  // Тема письма
  $theme = "[Questions]";

  // Текст письма
  $body = ' 
    <h3>Form message</h3> <br/> 
    Name: ' . $name . ' <br/> 
    E-mail: ' . $email . ' <br/> 
    Message: ' . $message . '';

  $mail->Subject = $theme;
  $mail->Body = $body;
  $mail->send();

  echo $message = "Данные отправлены!";
}
catch (Exception $e) {
  echo $message = "Сообщение не отправлено. Причина ошибки: {$mail->ErrorInfo}";
  $status = "Сообщение не отправлено. Причина ошибки: {$mail->ErrorInfo}";
}



