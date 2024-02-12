<?php

$json = file_get_contents('php://input');

// Decodificar el JSON en un objeto PHP
$data = json_decode($json);

// Obtener los datos del destinatario, nombre y teléfono del objeto PHP
$email_comprador = $data->email_comprador;
$name = $data->name;
$tel = $data->tel;
$mensaje = $data->menj;


// Datos de configuración del servidor SMTP
$smtpHost = "smtp.hostinger.com";
$username = "test@atypical.website";
$password = "Aqaqaqaq123#";

// Datos del correo
$to = $email_comprador;
$from = "test@atypical.website";
$subject = "Text de correo";
$body = $_POST["mensaje"];

// Configuración del encabezado del correo
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: $from" . "\r\n";

// Configuración del servidor SMTP
ini_set("SMTP", $smtpHost);
ini_set("smtp_port", "587");
ini_set("auth_username", $username);
ini_set("auth_password", $password);

// Envío del correo
if (mail($to, $subject, $body, $headers)) {
    echo "El correo se envió correctamente.";
    echo $json;
} else {
    echo "Hubo un error al enviar el correo.";
}
