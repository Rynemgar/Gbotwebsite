<?php 
$errors = '';
$myemail = 'dom@infinityws.co.uk';//<-----Put Your email address here.
if(empty($_POST['Rep ID'])  || 
   empty($_POST['Account Number']) || 
   empty($_POST['Address Line']))
{
    $errors .= "\n Error: all fields are required";
}

$rep = $_POST['Rep ID']; 
$account = $_POST['Account Number']; 
$address = $_POST['Address Line']; 

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "Contact form submission: Rep ID: $rep";
	$email_body = "You have received a new order through the Mercado Big Show website. ".
	" Here are the details:\n Rep: $rep \n Account Number: $account \n Address Line \n $address"; 
	
	$headers = "From: $myemail\n"; 
	$headers .= "Reply-To: $myemail";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: contact-form-thank-you.html');
} 
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> 
<html>
<head>
	<title>Contact form handler</title>
</head>

<body>
<!-- This page is displayed only if there is some error -->
<?php
echo nl2br($errors);
?>


</body>
</html>