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
$to = "christian_medina_92@hotmail.com";
$from = "test@atypical.website";
$subject = "Solicitud de cotizacion de cojinería";
$body = "
<html style='background-color: #f5f5f5;'>
    
<body style='background: #f5f5f5;'>
    <table  style='margin: auto; background-color: #f5f5f5; font-family: Arial;padding-top: 60px; padding-bottom: 60px; '>
        <tbody>
            <tr>
                <td>
                    <div style='background-color: #f5f5f5; margin: auto'>
                    <div style='background: #fff; border: 1px solid; margin: auto'>
                        <div style='background: #000;padding: 20px;text-align: center;'>
                            <img src='https://simulador-autoplus.atypical.website/imagenes/SIMULADOR-png.png' alt=''>
                        </div>
                        <h2 style='font-size: 24px; color: #000; margin-bottom: 16px; text-align: center; '>Solicitud de cotización de cojinería</h2>
                        <div style='padding: 20px; '>
                            <table style='border-collapse: collapse; width: 100%;'>
                                <tr>
                                <td style='border: 1px solid #000; padding: 8px; background: #FFC200; font-weight: 600;''>Cliente:</td>
                                <td style='border: 1px solid #000; padding: 8px; width: 70%; background: #fff; '>$name</td>
                                </tr>
                                <tr>
                                <td style='border: 1px solid #000; padding: 8px;background: #FFC200; font-weight: 600;'>Email:</td>
                                <td style='border: 1px solid #000; padding: 8px; width: 70%; background: #fff;'>$email_comprador</td>
                                </tr>
                                <tr>
                                <td style='border: 1px solid #000; padding: 8px;background: #FFC200; font-weight: 600;'>Teléfono:</td>
                                <td style='border: 1px solid #000; padding: 8px; width: 70%; background: #fff;'>$tel</td>
                                </tr>
                                <tr>
                                <td style='border: 1px solid #000; padding: 8px;background: #FFC200; font-weight: 600;'>Marca:</td>
                                <td style='border: 1px solid #000; padding: 8px; width: 70%; background: #fff;'>$mensaje</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
";

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
