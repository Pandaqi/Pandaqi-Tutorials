<?php require_once('header.php'); ?>
		<div style="width:100%;display:table;padding:0px;margin:0px;">
			<section class="tableRow">
				<div class="leftOne"><span><span class="overviewSmallText">ALL POSTS IN...</span></span></div>
				<div class="rightOne"><h1 style="margin-bottom:0px;"><?php echo $displayAbove; ?></h1><p><?php echo $sql2['desc']; ?></p><p class="overviewSmallText"><em>Prerequisites: <?php echo $preReq ?></em></p>
				</div>
			</section>
			<?php if($SLUR == "") { ?>
			<section style="display:table-row;">
				<div class="leftOne"><span><span class="overviewSmallText">OPTIONS...</span></span></div>
				<div class="rightOne" id="overviewOptionText">
				<?php if($indexStructureType == 0) { 
					echo "Switch to <em><strong onClick=\"document.cookie='indexStructure=1; path=/';window.location.reload(false);\">display tutorials</strong></em> (instead of complete courses)";
				} else if($indexStructureType == 1) {
					echo "Switch to <em><strong onClick=\"document.cookie='indexStructure=0; path=/';window.location.reload(false);\">display courses</strong></em> (instead of seperate tutorials)";
				} ?> 
				</div>
			</section>
			<?php } else {
				// if there IS a slur, we're looking at an overview of a single course, so we always look at individual tutorials
				$indexStructureType = 1;
			}

			if($indexStructureType == 0) { ?>
			<?php
				$lowBound = ($page-1)*12;
				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT' AND `subcat` !='' GROUP BY `subcat` ORDER BY `id` DESC LIMIT $lowBound,12");
				echo '</div><div style="width:100%;"><div class="indexTable">';
				while($row = mysqli_fetch_assoc($sql)) {

					$subCatDash = implode("-",explode(" ",$row['subcat']));
					$path = 'icon/' . $subCatDash . '.svg';
					$myStyle = getTheStyle($row['cat']);
					$subCatDash = str_replace("&","%26", $subCatDash);

					$theLink = $row['cat'] . '/overview/' . $subCatDash;

					echo '<div style="background-image:url(' . $path . ');" class="' . $myStyle . '"><a style="display:block;width:100%;height:100%;" href="' . $theLink . '"><span class="insideIndexTable">' . $row['subcat'] . '</span></a></div>';
				}

				echo '</div></div>';

				$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT' AND `subcat` !='' GROUP BY `subcat` ");
				$useIndexPaging = true;
				require_once('pageNav.php');
			?>
			<?php } else if($indexStructureType == 1) { ?>
			<?php
				while($row = mysqli_fetch_assoc($sql)) {
					$newPost = '<p>' . substr(strip_tags($row['post']),0,50) . '...</p>';
					$cat = $row['cat'];
					$myStyle = getTheStyle($cat);
					$subCat = $row['subcat'];

					$insertCat = '<a href="' . $cat . '" title="Category">' . $cat . '</a>';
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
					$diff = '<a href="difficulty/' . $row['diff'] . '" title="Difficulty">' . $diff . '</a>';

					$myLink = '' . $cat . '/' . $row['slur'];

					$addIcon = '';
					if(file_exists($path)) {
						$addIcon = '<div class="subCatCircle" style="background-image:url( ' . $path . ')"></div><div class="subCatLine"></div>';
					}

					if($SLUR == 'sub') {
						$leftInfo = '<span style="margin-top:120px;">' . $insertCat . '</span><br/><span>' . $diff . '</span>';
					} else if($SLUR == 'diff') {
						$leftInfo = '<span style="margin-top:120px;">' . $insertCat . '</span><br/><span>' . $subCat . '</span>';
					} else {
						$leftInfo = '<span style="margin-top:120px;">' . $subCat .'</span><br/><span>' . $diff . '</span>';
					}

					echo '<section class="tableRow"><div class="leftOne ' . $myStyle . '">' . $addIcon . '<div class="hexSmall" data-heading="heading' . $counter . '" style="background-image:url(icon/' . $cat . '.svg)"></div>' . $leftInfo . '</div><div class="rightOne ' . $myStyle . '"><h1 style="margin-bottom:0px;font-size:60px;margin-top:16px;" id="heading' . $counter . '"><a href="' . $myLink . '">' . $row['title'] . '</a></h1>' . $newPost . '<div class="readMore"><a href="' . $myLink . '">MORE</a></div></div></section>';
					echo '<section class="tableRow" style="opacity:0.7;"><div class="leftOne ' . $myStyle . '"></div><div class="rightOne ' . $myStyle . '"></div></section>';
					$counter++;
				}
				//For the page navigation
				if($SLUR == 'sub') {
					$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `subcat`='$CAT'");
				} else if($SLUR == 'diff') {
					$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `diff`='$CAT'");
				} else {
					$sql = mysqli_query($conn, "SELECT * FROM `articles` WHERE `cat`='$CAT'");		
				}
			?>
			<?php require_once('pageNav.php'); ?>
					</div>
			<?php } ?>
	</article>
<?php require_once('footer.php'); ?>