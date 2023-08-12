<!DOCTYPE html>
<html lang="en-UK">
<?php require_once('db.php'); ?>
<?php
function getTheStyle($cat) {
	$myStyle = 'style0';
	switch($cat) {
		case 'Website':
			$myStyle = 'style1';
			break;
		case 'Design':
			$myStyle = 'style2';
			break;
		case 'Writing':
			$myStyle = 'style3';
			break;
		case 'Sports':
			$myStyle = 'style4';
			break;
		case 'Games':
			$myStyle = 'style5';
			break;
		case 'Music':
			$myStyle = 'style6';
			break;
		case 'Film':
			$myStyle = 'style7';
			break;
		case 'Programming':
			$myStyle = 'style8';
			break;
		case 'Scientific':
			$myStyle = 'style9';
			break;
		case 'Lifehacks':
			$myStyle = 'style10';
			break;
		case 'Miscellaneous':
			$myStyle = 'style11';
			break;
	}
	return $myStyle;
}
function getTheDiff($diff) {
	$text = '';
	for($i=0;$i<5;$i++) {
		if($i >= 5-$diff) {
			$text .= '<i class="fa fa-star"></i>';
		} else {
			$text .= '<i class="fa fa-star-o"></i>';
		}
	}
	return $text;
}
function getTheDiffText($diff) {
	switch($diff) {
		case 1:
			$diff = 'Beginner';
			break;
		case 2:
			$diff = 'Amateur';
			break;
		case 3:
			$diff = 'Intermediate';
			break;
		case 4:
			$diff = 'Advanced';
			break;
		case 5:
			$diff = 'Expert';
			break;
	}
	return $diff;
}
function retrieveAd($course) {
	return false;
}

if(isset($_GET['page'])) {
	$page = $_GET['page'];
} else {
	$page = 1;
}
$useIndexPaging = false;

// Get canonical URL
$temp_url = $_SERVER['REQUEST_URI'];
$temp_url = explode("/", $temp_url);
foreach($temp_url as $url_bit) {
    $url_bit = rawurlencode($url_bit);
}
$temp_url = implode("/", $temp_url);
$full_canonical_url = "http://pandaqi.com" . $temp_url;


?>
<head>
	<base href="/" />
	<!-- <base href="/ProfessionalPandaExperiments/" /> -->
	<meta name="HandheldFriendly" content="True" />
	<meta name="viewport" content="width=device-width, height=device-height, target-densitydpi=device-dpi, user-scalable=yes, initial-scale=1.0" />
	<link rel="canonical" href="<?php echo $full_canonical_url; ?>" />

	<meta http-equiv="content-type" content="text/html, charset=UTF-8" />
	<meta http-equiv="Cache-control" content="public" />
	<script src="Hypher/Hyphenator_Loader.js" type="text/javascript"></script>
<?php 
$currentPageName = basename($_SERVER['PHP_SELF']);
$preferredTitle = 'Pandaqi - Tutorials';
if($currentPageName == 'article.php') {
	if(isset($_GET['cat']) && isset($_GET['name'])) {
		$CAT = $_GET['cat'];
		$SLUR = $_GET['name'];
		$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT' AND `slur`='$SLUR' ");	
		$row = mysqli_fetch_assoc($sql);	
	} else {
		$randNum = mt_rand(1,440);
		//$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE id >= (SELECT FLOOR( MAX(id) * RAND() ) FROM `articles`) ORDER BY id LIMIT 1");
		$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE id >= $randNum ORDER BY id LIMIT 1");
		$row = mysqli_fetch_assoc($sql);
		$CAT = $row['cat'];
		$SLUR = $row['slur'];
	}
	$counter = -1;
	$preferredTitle = $row['title'];
} else if($currentPageName == 'overview.php') {
	$CAT = $_GET['cat'];
	if(isset($_GET['name'])) {
		$SLUR = $_GET['name'];				
	} else {
		$SLUR = '';
	}

	$displayAbove = $CAT;
	if($SLUR == 'diff') {
		$displayAbove = getTheDiffText($CAT);
	} else if($SLUR == 'sub') {
		$displayAbove = implode(" ",explode("-",$CAT));
		$CAT = $displayAbove;
	}

	$sql2 = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM `categories` WHERE `cat`='$displayAbove' "));	
	$preReq = $sql2['pre'];
	if($preReq == '') {
		$preReq = 'None';
	}

	$lowBound = ($page-1)*10;
	$indexStructureType = 0;
	if($SLUR == 'sub') {
		$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `subcat`='$CAT' ORDER BY `id` ASC LIMIT $lowBound,10");
	} else if($SLUR == 'diff') {
		$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `diff`='$CAT' LIMIT $lowBound,10 ");
	} else {
		if(!isset($_COOKIE['indexStructure']) || $_COOKIE['indexStructure'] == 0) {
			$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT' LIMIT $lowBound,10 ");
			$indexStructureType = 0;
		} else if($_COOKIE['indexStructure'] == 1) {
			$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT' ORDER BY `id` DESC ");		
			$indexStructureType = 1;		
		}
	}
	$counter = 0;
	$preferredTitle = "Tutorials in " . $displayAbove;
} else if($currentPageName == 'search.php') {
	$search = str_replace('"','',str_replace("'", '', strip_tags($_GET['searchTerms'])));
	$saveSearch = $search;
	$search = strtolower($search);
	$search = str_replace("how to ","",$search);
	$searchSpecial = "+" . str_replace(" "," +",$search);

	$lowBound = ($page-1)*10;
	$chosenSQL = '';

	$theQuery = "SELECT * FROM `articles` WHERE MATCH(post) AGAINST('$searchSpecial' IN BOOLEAN MODE)";
	$theQuery .= "OR LOWER(REPLACE(title, ' ', '')) = LOWER(REPLACE('$search', ' ', '')) ";
	$theQuery .= "OR LOWER(REPLACE(cat, ' ', '')) = LOWER(REPLACE('$search', ' ', '')) ";
	$theQuery .= "OR LOWER(REPLACE(subcat, ' ', '')) = LOWER(REPLACE('$search', ' ', '')) ";
	$theQuery .= " ORDER BY MATCH(post) AGAINST('$searchSpecial' IN BOOLEAN MODE) DESC";
	$chosenSQL = $theQuery;
	$theQuery .= " LIMIT $lowBound,10";
	$sql = mysqli_query($conn,$theQuery);
	$displayAbove = '';
	if(mysqli_num_rows($sql) == 0) {
		$theQuery = "SELECT * FROM `articles` WHERE MATCH(post) AGAINST('$search' IN BOOLEAN MODE) ";
		$theQuery .= " ORDER BY MATCH(post) AGAINST('$searchSpecial' IN BOOLEAN MODE) DESC";
		$chosenSQL = $theQuery;
		$theQuery .= " LIMIT $lowBound,10";
		$sql = mysqli_query($conn,$theQuery);
		$displayAbove = '<p class="overviewSmallText"><em>Could not find exact results, displaying what we think you meant.</em></p>';
	}				
	$counter = 0;
	$preferredTitle = 'Search Results for ' . $saveSearch;
} else if($currentPageName == 'action.php') {
	if(isset($_GET['type'])) {
		if($_GET['type'] == 'faq') {
			$preferredTitle = 'F.A.Q';
		} else {
			$preferredTitle = ucfirst($_GET['type']);			
		}
	} else {
		$preferredTitle = 'Donate';
	}
}
?>
<title><?php echo $preferredTitle; ?></title>
<link rel="stylesheet" type="text/css" href="mainStyles.css" />
<link rel="shortcut icon" type="image/png" href="ProfPandaExp-01.png"/>
<link rel="apple-touch-icon" type="image/png" href="ProfPandaExp-01.png"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<?php
if($currentPageName == 'article.php') { 
	$newPost = $row['post'];
	$amountMatches = 0;
	function findCodeExamples($matches) {
		global $amountMatches;
		$amountMatches++;
		return 'class="' . $matches[1] . '" data-lang="' . $matches[1] . '"';
	}
	$newPost = preg_replace_callback('/data\-lang="(.+)"/', "findCodeExamples", $newPost);

	if($amountMatches > 0) {
		echo '<script src="highlightjs/highlight.pack.js" defer type="text/javascript" charset="utf-8"></script>';
		echo '<link rel="stylesheet" type="text/css" href="highlightjs/railscasts.css"/>';
	}
?>
	<script src="articleScript.js" defer></script>
	<script src="gifPlayer/libgif.js" defer></script>
<?php
}
?>
<script src="mainScript.js" defer></script>
<script src="analyticsScript.js" async></script>
</head>
<body>
	<div id="overlayLargeImage"><img id="overlayLargeImageSRC"/><div>(click anywhere to close)</div></div>
	<div id="searchForm"><form action="search.php" style="margin:0px;padding:0px;"><input type="text" id="searchText" name="searchTerms" placeholder="search..."/><input type="submit" value="" id="searchSubmit"/></form></div>
	<div id="mobileBlackener"></div>
	<header id="headerContainer">
		<div id="header"></div>
		<div id="smallHeader"></div>
		<div id="mobileHeader" style="text-align:center;font-size:28px !important;">
			<span id="openMenuBtn"><span></span> OPEN MENU</span>
		</div>
		<div id="mobileHeaderPopout"></div>
	</header>
	<article id="main">