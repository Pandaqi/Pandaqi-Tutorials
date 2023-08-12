<?php require_once('db.php'); ?>
<?php 
	$sql = mysqli_query($conn, "SELECT * FROM `articles` GROUP BY `subcat` ORDER BY `id` DESC LIMIT 0,10");
	while($row = mysqli_fetch_assoc($sql)) {
		echo $row['subcat'] . '<br/>';
	}
?>