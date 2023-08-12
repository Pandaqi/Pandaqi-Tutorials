<?php 
ob_start();
require_once('db.php');

$NAME = rawurldecode($_GET['name']);
$CAT = rawurldecode($_GET['cat']);
$SUBCAT = rawurldecode($_GET['subcat']);

$NAME = str_replace('­', '', $NAME);
$NAME = strtr($NAME, array("\xAD" => ""));
$NAME = addcslashes(mysqli_real_escape_string($conn, $NAME), '%_');

$CAT = str_replace('­', '', $CAT);
$CAT = strtr($CAT, array("\xAD" => ""));
$CAT = addcslashes(mysqli_real_escape_string($conn, $CAT), '%_');

$SUBCAT = str_replace('­', '', $SUBCAT);
$SUBCAT = strtr($SUBCAT, array("\xAD" => ""));
$SUBCAT = addcslashes(mysqli_real_escape_string($conn, $SUBCAT), '%_');

$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `title` LIKE '%$NAME%' AND `cat`='$CAT' AND `subcat`='$SUBCAT' ORDER BY id ASC LIMIT 1");
$row = mysqli_fetch_assoc($sql);

header("location: " . $row['cat'] . "/" . $row['slur']);	
?>