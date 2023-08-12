<?php require_once('header.php'); ?>
		<div style="width:100%;display:table;padding:0px;margin:0px;">
			<section class="tableRow">
				<div class="leftOne"><span><span class="overviewSmallText">SEARCHING FOR...</span></span></div>
				<div class="rightOne"><h1 style="margin-bottom:0px;"><?php echo $saveSearch; ?></h1><?php echo $displayAbove; ?></div>
			</section>
			<?php
				while($row = mysqli_fetch_assoc($sql)) {
					$newPost = '<p>' . substr(strip_tags($row['post']),0,50) . '...</p>';
					$cat = $row['cat'];
					$myStyle = getTheStyle($cat);
					$subCat = $row['subcat'];

					$insertCat = '<a href="' . $cat . '">' . $cat . '</a>';
					$subCat = $row['subcat'];
					if($subCat == '') {
						$subCat = '<em>Standalone Article</em>';
						$path = 'icon/NONE.svg';
					} else {
						$subCatDash = implode("-",explode(" ",$subCat));
						$path = 'icon/' . $subCatDash . '.svg';
						$subCatDash = str_replace("&","%26", $subCatDash);
						$subCat = '<a href="' . $cat . '/overview/' . $subCatDash . '">' . $subCat . '</a>';
					}
					$diff = getTheDiff($row['diff']);
					$diff = '<a href="difficulty/' . $row['diff'] . '">' . $diff . '</a>';

					$myLink = $cat . '/' . $row['slur'];

					$addIcon = '';
					if(file_exists($path)) {
						$addIcon = '<div class="subCatCircle" style="background-image:url( ' . $path . ')"></div><div class="subCatLine"></div>';
					}

					$addVideo = '';
					if($row['video'] != '') {
						$addVideo = '<span>ALSO IN VIDEO</span>';
					}

					echo '<section class="tableRow"><div class="leftOne ' . $myStyle . '">' . $addIcon . '<div class="hexSmall" data-heading="heading' . $counter . '" style="background-image:url(icon/' . $cat . '.svg)"></div><span style="margin-top:120px;">' . $insertCat . '</span><br/><span>' . $subCat .'</span><br/><span>' . $diff . '</span><br/><span style="margin-top:60px;">' . $addVideo . '</span></div><div class="rightOne ' . $myStyle . '"><h1 style="margin-bottom:0px;" id="heading' . $counter . '"><a href="' . $myLink . '">' . $row['title'] . '</a></h1>' . $newPost . '<div class="readMore"><a href="' . $myLink . '">MORE</a></div></div></section>';
					echo '<section class="tableRow" style="opacity:0.7;"><div class="leftOne ' . $myStyle . '"></div><div class="rightOne ' . $myStyle . '"></div></section>';
					$counter++;
				}
				//For page navigation
				$sql = mysqli_query($conn,$chosenSQL);
			?>
			<?php require_once('pageNav.php'); ?>
		</div>
	</article>
<?php require_once('footer.php'); ?>