<?php


    $email = $_POST['email'];
    $telefone = $_POST['telefone'];


    require 'PHPMailerAutoload.php';

    function sendMail($destino, $mensagem){
        $mail = new PHPMailer;
        $mail->isSMTP();
        $mail->IsHTML(true);
        $mail->SMTPDebug = 0;
        $mail->CharSet = 'utf-8';
        $mail->Debugoutput = 'html';
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 587;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Username = "seuemail@gmail.com";
        $mail->Password = "suasenha";
        $mail->setFrom('seuemail@gmail.com', 'Dashboard - Contato');
        $mail->addAddress($destino, 'Dashboard - Contato');
        $mail->Subject  = "Dashboard - Contato";
        $mail->Body = $mensagem;

        if (!$mail->send()) {
            return $mail->ErrorInfo;
        } else {
            return true;
        }
    }
    $contentMensagem = "<div style=\"width:100%;\">
                        <p>chambra</p>
                        </div>";

    $enviaEmail = sendMail('seuemail@gmail.com', $contentMensagem);

    if ($enviaEmail != true) {
        echo '<script type="text/javascript">alert("Erro ao enviar mensagem, tente novamente mais tarde.");</script>';
    } else {
        // echo '<script type="text/javascript">window.location.href = "/success.php"; </script>';
        var_dump($mail); die;
    }

?>
