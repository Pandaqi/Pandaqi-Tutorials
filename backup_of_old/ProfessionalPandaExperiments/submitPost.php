<?php
if(gethostname() == 's148698') {
	$title = $_POST['title'];
	$post = $_POST['post'];
	$slur = $_POST['slur'];
	$cat= $_POST['cat'];
	$subcat= $_POST['subcat'];
	$video = $_POST['video'];
	$diff = $_POST['diff'];

	$mysql_host = "localhost:3306";
	$mysql_database = "profpanda";
	$mysql_user = "root";
	$mysql_password = "";

	$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_database);
	$sql2 = mysqli_query($conn,"INSERT INTO `articles` (id, title, post, slur, cat, subcat, video, diff) VALUES ('', '$title', '$post','$slur', '$cat','$subcat', '$video','$diff')");
	echo 'You have submitted a post! Yay! Woohoo! Hurray! You go girl.';
} else {
	header("Location: youdonthaveaccess.php");
}
?>