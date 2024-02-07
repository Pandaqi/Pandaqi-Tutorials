<?php
$didWeSucceed = false;
if(isset($_POST['subject']) && isset($_POST['message']) && isset($_POST['sender'])) {
	$sub = $_POST['subject'];
	$msg = $_POST['message'];
	$sender = $_POST['sender'];
	$headers = "From:  " . $sender;
	if($sub != "" && $msg != "" && $sender != "" && filter_var($sender, FILTER_VALIDATE_EMAIL)) {
		$sendMail = mail ("schoolofpanda@gmail.com", $sub, $msg, $headers);	
		if($sendMail) {
			$didWeSucceed = true;
		}		
	}
} 
if(!$didWeSucceed) {
	setcookie("mailSent","4");
} else {
	setcookie("mailSent","5");
}
header("Location: action/contact");
?>