<?php
	$name 		= $_POST['want__name'];
	$email 		= $_POST['want__email'];
	$msg 		= $_POST['want__message'];
	$company 	= $_POST['want__company'];
	$tel 		= $_POST['want__phone'];
	$interest 	= $_POST['want__interest'];
	$course 	= $_POST['want__company-course'];
	$employees 	= $_POST['want__company-employees'];

	require 'PHPMailerAutoload.php';

	function sendMail($destino, $mensagem){
		$mail = new PHPMailer;
		$mail->isSMTP();
		$mail->IsHTML(true);
		$mail->SMTPDebug = 1;
		$mail->CharSet = 'utf-8';
		$mail->Debugoutput = 'html';
		$mail->Host = 'smtp.gmail.com';
		$mail->Port = 587;
		$mail->SMTPSecure = 'tls';
		$mail->SMTPAuth = true;
		$mail->Username = "seuemail@gmail.com";
		$mail->Password = "suasenha";
		$mail->setFrom('seuemail@gmail.com', 'Deseja anunciar?');
		$mail->addAddress($destino, 'Deseja anunciar?');
		$mail->Subject = "Digital Favela - Deseja anunciar?";
		$mail->Body = $mensagem;
		// $mail->AddAttachment($_FILES['attach']['tmp_name'],$_FILES['attach']['name']); 

		if (!$mail->send()) {
			return $mail->ErrorInfo;
		} else {
		    return true;
		}
	}
	
	$contentMensagem = "<div style=\"width:100%;\">
							<p>Nome: {$name}</p>
							<p>Telefone: {$tel}</p>
							<p>E-mail: {$email}</p>
							<p>Empresa: {$company}</p>
							<p>Interesse: {$interest}</p>
							<p>Ramo da empresa: {$course}</p>
							<p>Nº de funcionário: {$employees}</p>
							<p>Mensagem: {$msg}</p>
						</div>";

	$enviaEmail = sendMail('email@email.com.br', $contentMensagem);
	
	if ($enviaEmail != true) {
		echo 'Erro ao enviar mensagem, tente novamente mais tarde.';
	} else {
		echo 'Enviado.';
	}

?>
