<?php
if($_POST)
{ 

    $to_Email   	= "info@newuniverse.ca"; //Replace with recipient email address
	$subject        = 'Contact Us'; //Subject line for emails
	
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["userName"]) || !isset($_POST["userSubject"]) || !isset($_POST["userEmail"]) || !isset($_POST["userPhone"]) || !isset($_POST["userMessage"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$user_Phone       = filter_var($_POST["userPhone"], FILTER_SANITIZE_STRING);
	$user_Subject    = filter_var($_POST["userSubject"], FILTER_SANITIZE_STRING);
	$user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
	
	
	
	//additional php validation
	if(strlen($user_Name)<4) // If length is less than 4 it will throw an HTTP error.
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
		die($output);
	}
	if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL)) //email validation
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
		die($output);
	}
	if(!is_numeric($user_Phone)) //check entered data is numbers
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Only numbers allowed in phone field'));
		die($output);
	}
	if(strlen($user_Message)<5) //check emtpy message
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
		die($output);
	}
	
	if(strlen($user_Subject)<3) //check emtpy message
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Please enter something.'));
		die($output);
	}
	
	//proceed with PHP email.
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: '.$user_Name.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	$msg = "<h3>Contact Form</h3>
	<b>Name : </b>".$user_Name."<br>
	<b>Email : </b>".$user_Email."<br>
	<b>Phone Number : </b>".$user_Phone."<br>
	<b>Subject  : </b>".$user_Subject."<br>
	<b>Message : </b>".$user_Message;
	
	$sentMail = @mail($to_Email, $subject, $msg, $headers);
	
	if(!$sentMail)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_Name .' Your Information Saved Successfully'));
		die($output);
	}
}
?>