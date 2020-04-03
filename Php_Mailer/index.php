<?php 

//llamo a las funciones que voya necesitar
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;                                       // Enable verbose debug output//ver errores//desactiviar pongo cero (0)
    $mail->isSMTP();                                            // Set mailer to use SMTP
    $mail->Host       = 'smtp.live.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'jhonnymichaeldj2011@hotmail.com';                     // SMTP username
    $mail->Password   = 'jhonnydj';                               // SMTP password
    $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
    $mail->Port       = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('jhonnymichaeldj2011@hotmail.com', 'ProEditsClub');// se envia desde mi correo
    $mail->addAddress('jmmorochoa@unl.edu.ec', 'Prueba Usuario');     // Add a recipient //al q se lo voy a enviar
   /* $mail->addAddress('ellen@example.com');               // Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');*/

    // Attachments agregar archivos de imagenes o ago asi
   /* $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
*/
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Comprobante de adquision de Edits';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
/*    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';*/

    $mail->send();
    echo 'El mensaje de enviio correctamente';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
     
 ?>
