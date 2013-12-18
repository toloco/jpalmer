<?php

	$error = array();
	if (! isset($_REQUEST['form_email']))
	{
		array_push($error, 'email');
	}
	if (! isset($_REQUEST['form_name']))
	{
		array_push($error, 'name');
	}
	if (! isset($_REQUEST['form_text']))
	{
		array_push($error, 'text');
	}

	if ( count($error) > 0 )
	{
		$status = array( 'status' => 'ERROR', 'fields' => $error );
		echo json_encode($status);
	}
	else
	{
		$to = "toloco@gmail.com";
		$subject = "Formulario de contacto";
		$message = "Un tal " .  $_REQUEST['form_name'] . "(" . $_REQUEST['form_email'] . ") dice : <p>" .  $_REQUEST['form_text'] . "</p>";
		$headers = "From:" . $_REQUEST['form_email'];

		try {
			mail($to,$subject,$message,$headers);	
			$status = array( 'status' => 'OK');
		} catch (Exception $e) {
			$status = array( 'status' => 'ERROR-MAIL', 'message' => 'Can\'t send email' );
		}
		echo json_encode($status);

	}

?> 
