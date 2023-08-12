<?php
	if($useIndexPaging) {
		$amountPages = ceil(mysqli_num_rows($sql)/12);
	} else {
		$amountPages = ceil(mysqli_num_rows($sql)/10);		
	}

	$url = $_SERVER['REQUEST_URI'];

	$searchURL = explode("/",$url);
	if(!ctype_digit($searchURL[sizeof($searchURL) - 1])) {
		array_push($searchURL,1);
	}

	$searchURL[sizeof($searchURL) - 1] -= 1;
	$backwardURL = implode("/", $searchURL);
	$searchURL[sizeof($searchURL) - 1] += 2;
	$forwardURL = implode("/", $searchURL);

	$forwardURL = str_replace("//","/",$forwardURL);
	$backwardURL = str_replace("//","/",$backwardURL);

	$addLeft = '';
	$addRight = '';
	if($page > 1) {		
		/*if($page == 2) {
			$theLink = str_replace("?page=" . $page,"", $url);
			$theLink = str_replace("&page=" . $page,"", $theLink);
		} else {
			$theLink = str_replace("page=" . $page,"page=" . ($page-1), $url);			
		}*/
		$addLeft = '<a href="' . $backwardURL . '" id="articleFooterLeft" style="margin-left:30px;">Previous page</a>';
	}
	if($amountPages > $page) {
		// Returns a string if the URL has parameters or NULL if not
		/*$theLink = str_replace("page=" . $page,"page=" . ($page+1), $url);
		if($page == 1) {
			$query = parse_url($url, PHP_URL_QUERY);
			if ($query) {
			    $theLink .= '&page=2';
			} else {
			    $theLink .= '?page=2';
			}
		}*/
		$addRight = '<a href="' . $forwardURL. '" id="articleFooterRight" style="float:right;margin-right:30px;">Next Page</a>';
	}

	if($amountPages > 1) {
		if($useIndexPaging) {
			echo '<div style="display:table-row;"><span id="articleFooter">' . $addLeft . $addRight . '</span></div><div style="height:15px;display:block;"></div>';
		} else {
			echo '<section class="tableRow"><div class="leftOne"><span><span>CONTINUE LEARNING</span></span></div><div class="rightOne"><span id="articleFooter">' . $addLeft . $addRight . '</span></div></section>';
		}
		
	}
?>