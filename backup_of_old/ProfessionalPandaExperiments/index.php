<?php require_once('header.php'); ?>
		<div id="aboveIndexText">
		<?php if(!isset($_COOKIE['indexStructure']) || $_COOKIE['indexStructure'] == 0) { ?>
			Pick any course you like. Or use the navigation to browse main and sub categories. Or use the search bar.<br/>Don't like this structure? Switch to <em><strong onClick="document.cookie='indexStructure=1';location.href='';">display tutorials</strong></em> (instead of complete courses)
		<?php } else { ?>
			Pick any tutorial you like. Or use the navigation to browse main and sub categories. Or use the search bar.<br/>Don't like this structure? Switch to <em><strong onClick="document.cookie='indexStructure=0';location.href='';">display courses</strong></em> (instead of seperate tutorials)
		<?php } ?> 
		</div>
		<div style="width:100%;display:table;padding:0px;margin:0px;">
			<?php if(!isset($_COOKIE['indexStructure']) || $_COOKIE['indexStructure'] == 0) { ?>
			<?php
				/** Find a better algorithm for that? Just update when we reach over 50? **/
				function randOrder() {
					return mt_rand(0,12);
				}

				$lowBound = ($page-1)*12;
				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `subcat` !='' GROUP BY `subcat` ORDER BY `id` DESC LIMIT $lowBound,12");
				echo '<div style="display:table-row;width:100%;"><div class="indexTable">';
				$myOrder = randOrder();
				$ordersUsed = [$myOrder];
				while($row = mysqli_fetch_assoc($sql)) {

					$subCatDash = implode("-",explode(" ",$row['subcat']));
					$path = 'icon/' . $subCatDash . '.svg';
					$myStyle = getTheStyle($row['cat']);
					$subCatDash = str_replace("&","%26", $subCatDash);
					do {
						$myOrder = randOrder();
					} while(array_search($myOrder,$ordersUsed) > -1);
					array_push($ordersUsed, $myOrder);

					$theLink = $row['cat'] . '/overview/' . $subCatDash;

					echo '<div style="background-image:url(' . $path . ');order:' . $myOrder . ';" class="' . $myStyle . '"><a style="display:block;width:100%;height:100%;" href="' . $theLink . '"><span class="insideIndexTable">' . $row['subcat'] . '</span></a></div>';
				}

				echo '</div></div>';

				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `subcat` !='' GROUP BY `subcat` ");
				$useIndexPaging = true;
				require_once('pageNav.php');
			?>
			<?php } else { ?>
			<?php 
				$lowBound = ($page-1)*10;
				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `diff` != 0 ORDER BY `id` DESC LIMIT $lowBound,10");
				$counter = 0;
				while($row = mysqli_fetch_assoc($sql)) {
					$newPost = $row['post'];
					$cat = $row['cat'];
					$myLink = $cat . '/' . $row['slur'];

					$newPost = '<div class="readMore"><a href="' . $myLink . '">MORE</a></div>';

					$myStyle = getTheStyle($cat);
					$insertCat = '<a href="' . $cat . '">' . $cat . '</a>';
					$subCat = $row['subcat'];
					if($subCat == '') {
						$subCat = '<span><em>Standalone Article</em></span>';
						$path = 'icon/NONE.svg';
					} else {
						$subCatDash = implode("-",explode(" ",$subCat));
						$path = 'icon/' . $subCatDash . '.svg';
						$subCatDash = str_replace("&","%26", $subCatDash);
						$subCat = '<a href="' . $cat . '/overview/' . $subCatDash . '">' . $subCat . '</a>';
					}
					$diff = getTheDiff($row['diff']);
					$diff = '<a href="difficulty/' . $row['diff'] . '">' . $diff . '</a>';

					$addIcon = '';
					if(file_exists($path)) {
						$addIcon = '<div class="subCatCircle" style="background-image:url( ' . $path . ')"></div><div class="subCatLine"></div>';
					}

					$addVideo = '';
					if($row['video'] != '') {
						$addVideo = '<span>ALSO IN VIDEO</span>';
					}

					echo '<section class="tableRow"><div class="leftOne ' . $myStyle . '">' . $addIcon . '<div class="hexSmall" style="background-image:url(icon/' . $cat . '.svg)" data-heading="heading' . $counter . '"></div><span style="margin-top:120px;">' . $insertCat . '</span><br/><span>' . $subCat .'</span><br/><span>' . $diff . '</span><br/><span style="margin-top:60px;">' . $addVideo . '</span></div><div class="rightOne ' . $myStyle . '"><h1 id="heading' . $counter . '"><a href="' . $myLink . '">' . $row['title'] . '</a></h1>' . $newPost . '</div></section>';
					echo '<section class="tableRow" style="opacity:0.7;"><div class="leftOne ' . $myStyle . '"></div><div class="rightOne ' . $myStyle . '"></div></section>';
					$counter++;
				}
				//For the page navigation
				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `diff` != 0");
				/*echo mysqli_num_rows($sql);*/
			?>
			<?php require_once('pageNav.php'); ?>
			<?php } ?>
		</div>
	</article>
<?php require_once('footer.php'); ?>
