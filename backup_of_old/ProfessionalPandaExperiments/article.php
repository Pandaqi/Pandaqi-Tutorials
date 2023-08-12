<?php require_once('header.php'); ?>

		<script type="text/javascript">
		            Hyphenator_Loader.init(
		                {
		                    "en": "automatically",
		                },
		                "./Hypher/Hyphenator.js"
		            );
		 </script>
		 
		<div style="width:100%;display:table;padding:0px;margin:0px;" class="hyphenate">
			<?php 
					$gifCounter = -1;
					function replaceGif($matches) {
						global $gifCounter;
						$gifCounter += 1;
						$tempM = explode("/",$matches[1]);
						return '<img class="aGif" id="gifNumber' . $gifCounter . '" src="" rel:animated_src="http://res.cloudinary.com/dno0vkynk/image/upload/v1475392871/' . $tempM[1] . '.gif" rel:auto_play="0" /><div class="gifControls"><span onmousedown="gifs[' . $gifCounter . '].load();document.getElementById(\'containGif' . $gifCounter . '\').style.display = \'initial\';return false;">Open Video</span><containerTag style="display:none;" id="containGif' . $gifCounter . '"><span onmousedown="gifs[' . $gifCounter . '].pause();return false;">Pause</span><span onmousedown="gifs[' . $gifCounter . '].play();return false;">Play</span><span onmousedown="gifs[' . $gifCounter . '].move_to(0);return false;">Restart</span><span onmousedown="gifs[' . $gifCounter . '].pause();gifs[' . $gifCounter . '].move_relative(1);return false;">Step Forward</span><span onmousedown="gifs[' . $gifCounter . '].pause();gifs[' . $gifCounter . '].move_relative(-1);return false;">Step Backward</span></containerTag></div>';
					}
					function replaceIMG($matches) {
						$tempM = explode("/",$matches[1]);
						return '<img src="http://res.cloudinary.com/dno0vkynk/image/upload/v1475392871/' . $tempM[1] . '.png" title="' . $tempM[1] . '" alt="' . $tempM[1] . '" />';
					}
					function replaceSmallCaps($matches) {
						if(ctype_alnum(str_replace(' ', '', $matches[2])) && strlen(str_replace(' ', '', $matches[2])) > 1) {
							return $matches[1] . '<span class="smallCaps">' . $matches[2] . '</span>' . $matches[3];
						} else {
							return $matches[0];
						}
					}

					$counter++;

					$newPost = str_replace("<p>NOTE:","<p class='remarkBox'>",$newPost);
					$newPost = str_replace("<p>NOTE 2:","<p class='remarkBox'>",$newPost);

					$newPost = preg_replace_callback('/<img.*src="(.+)\.gif"\s*\/>/', "replaceGif", $newPost);
					$newPost = preg_replace_callback('/<img.*src="(.+)\.png"\s*\/>/', "replaceIMG", $newPost);
					$newPost = preg_replace_callback('/([\s|>|\.|\,|\(])([A-Z|\s|\'|\-]+)([\s|<|\.|\,|\?|\!|\)|\:|\'])/', 'replaceSmallCaps', $newPost);


					$cat = $row['cat'];
					$myStyle = getTheStyle($cat);
					$insertCat = '<a href="' . $cat . '">' . $cat . '</a>';
					$mobileCatVersion = '<span>category: </span>' . $insertCat;
					$subCat = $row['subcat'];
					if($subCat == '') {
						$subCat = '<a href="#"><em>Standalone Article</em></a>';
						$path = 'icon/NONE.svg';
					} else {
						$subCatDash = implode("-",explode(" ",$subCat));
						$path = 'icon/' . $subCatDash . '.svg';
						$subCatDash = str_replace("&","%26", $subCatDash);
						$subCat = '<a id="articleSubCat" href="' . $cat . '/overview/' . $subCatDash . '">' . $subCat . '</a>';
						$mobileCatVersion .= ' |<span> course: </span>' . $subCat;
					}
					$diff = getTheDiff($row['diff']);
					$catDiff = '<a href="difficulty/' . $row['diff'] . '" style="transform: rotateY(180deg);">' . $diff . '</a>';
					$diff = '<a href="difficulty/' . $row['diff'] . '"  title="Difficulty">' . $diff . '</a>';
					$mobileCatVersion .= ' |<span> difficulty: </span>' . $catDiff;

					/***EXTRA ICON only IF CORRESPONDING FILE EXISTS***/
					$addIcon = '';
					if(file_exists($path)) {
						$addIcon = '<div class="subCatCircle" style="background-image:url( ' . $path . ')"></div><div class="subCatLine"></div>';
					}

					/****ADD HEADING WITH INFO AND TITLE****/
					echo '<section class="tableRow"><div class="leftOne ' . $myStyle . '">' . $addIcon . '<div class="hexSmall" data-heading="heading0" style="background-image:url(icon/' . $cat . '.svg)"></div><span style="margin-top:120px;">' . $insertCat . '</span><br/><span>' . $subCat .'</span><br/><span>' . $diff . '</span></div><div class="rightOne ' . $myStyle . '"><h1>' . $row['title'] . '</h1><span id="mobileMetadata">' . $mobileCatVersion . '</span></div></section>';
					
					/****ADD VIDEO IF THERE IS AN ID****/
					$getVideo = $row['video'];
					if($getVideo != '') {
						$addVideo = '<section class="tableRow"><div class="leftOne videoStyle"><span style="color:rgba(250,100,50,0.8);"><span>IN VIDEO</span></span></div><div class="rightOne videoStyle"><div id="player" data-id="' . $getVideo . '"></div></div></section>';
						echo $addVideo;
					}

					/** BUILD TABLE OF CONTENTS **/
					//Also, here the post actually gets inserted. This line is by far the most important :p
					$newPost = '<a name="anchor0" style="display:block;position:relative;top:-600px;visibility:hidden;"></a><p id="firstPara">' . substr($newPost,3);

					$splitPost = explode("<h2>",$newPost);
					$tableOfContents = '<span id="quickContentContainer" ><span>QUICK CONTENTS:</span></span>';

					$tableOfContents .= '<container id="quickContentFullContainer" style="position:relative;"><span class="quickContentLinks"><a style="font-family:Lato;word-wrap:break-word;" data-href="#anchor0">Intro</a></span><br/>';

					$rebuildPost = $splitPost[0];

					for($i=1;$i<count($splitPost);$i++) {
						$tempSplit = explode("</h2>",$splitPost[$i]);
						$rebuildPost .= '<a name="anchor' . $i . '" style="display:block;position:relative;top:-250px;visibility:hidden;"></a><h2>' . $splitPost[$i];
						$tempSplit[0] = strip_tags($tempSplit[0]);
						$result = strlen($tempSplit[0]) > 20 ? substr($tempSplit[0],0,20)."..." : $tempSplit[0];
						$tableOfContents .= '<span class="quickContentLinks"><a style="font-family:Lato;word-wrap:break-word;" data-href="#anchor' . $i . '">' . $i . '. ' . $result . '</a></span><br/>';
					}
					$tableOfContents .= '</container>';


					/**ADD ACTUAL ARTICLE/BDOY TEXT****/
					echo '<section class="tableRow"><div class="leftOne style0"><span style="margin-top:20px;"><span title="Text & Image Based Tutorial">IN PRINT</span></span><hr style="border:0;height:1px;background-color:#AAA;"/>' . $tableOfContents . '</div><div class="rightOne style0"  style="position:relative;">' . $rebuildPost . '</div></section>';

					/***ADDING FOOTER NAVIGATION LINKS TO NEXT AND PREVIOUS POST******/
					$addLeft = '<em style="margin-top: 16px;display: inline-block;">No previous post :( </em>';
					$addRight = '<em style="margin-top: 16px;display: inline-block;float:right;">No next post :( </em>';
					$sql3 = mysqli_query($conn, "SELECT * FROM `articles` WHERE id = (SELECT MAX(id) FROM `articles` WHERE id < " . $row['id'] . " AND subcat = '" . $row['subcat'] . "')");
					if(mysqli_num_rows($sql3) == 1) {
						$sql3 = mysqli_fetch_assoc($sql3);
						$theLink = '' . $sql3['cat'] . '/' . $sql3['slur'];
						$addLeft = '<a href="' . $theLink . '" id="articleFooterLeft">' . $sql3['title'] . '</a>';
					}
					$sql4 = mysqli_query($conn, "SELECT * FROM `articles` WHERE id = (SELECT MIN(id) FROM `articles` WHERE id > " . $row['id'] . " AND subcat = '" . $row['subcat'] . "')");
					if(mysqli_num_rows($sql4) == 1) {
						$sql4 = mysqli_fetch_assoc($sql4);
						$theLink = '' . $sql4['cat'] . '/' . $sql4['slur'];
						$addRight = '<a href="' . $theLink . '" id="articleFooterRight" style="float:right;margin-right:30px;">' . $sql4['title'] . '</a>';
					}

					/*** Navigation ***/
					if($row['subcat'] == '') {
						$sideText = 'OTHER GREAT STANDALONE ARTICLES';
					} else {
						$sideText = 'CONTINUE WITH THIS COURSE';
					}

					echo '<section class="tableRow"><div class="leftOne ' . $myStyle . '"><span><span>' . $sideText . '</span></span></div><div class="rightOne ' . $myStyle . '"><span id="articleFooter">' . $addLeft . $addRight . '</span></div></section>';

					/** QUIZ **/
					if($row['quiz'] != '') {
						$rawQuizData = explode("@",$row['quiz']);
						for($i=0;$i<count($rawQuizData);$i++) {
							$rawQuizData[$i] = explode("?",$rawQuizData[$i]);
						}
						//print_r($rawQuizData);
						$data = $rawQuizData;
						$questType = mt_rand(0,2);
						$entry = round(mt_rand(0,count($data)-1));
						$entryType = $data[$entry][0];
						$useWhat = ($questType<1) ? 2 : 1;
						$prefix = '';
						if($entryType == 0) {
							if($questType < 1) {
								$question = "What does the term <em>" . $data[$entry][1] . "</em> mean?"; 
							} else {
								$question = "What is the definition for <em>" . lcfirst($data[$entry][2]) . "</em>?";
							}
						} else if($entryType == 1) {
							if($questType < 1) {
								$question = "How do you <em>" . lcfirst($data[$entry][1]) . "</em>?"; 
							} else {
								$question = "What happens when you <em>" . lcfirst($data[$entry][2]) . "</em>?";
								$prefix = 'You';
							}
						} else if($entryType == 2) {
							if($questType < 1) {
								$question = "What do you use to <em>" . lcfirst($data[$entry][1]) . "</em>?"; 
							} else {
								$question = "What happens when you use <em>" . lcfirst($data[$entry][2]) . "</em>?";
								$prefix = 'You';
							}
						} else if($entryType == 3) {
							if($questType < 1) {
								$question = "What are the properties of <em>" . $data[$entry][1] . "</em>?"; 
							} else {
								$question = "What has the property/properties <em>" . lcfirst($data[$entry][2]) . "</em>?";
							}
						}

						$numAnswers = 3;

						$generateQuestion = "<div id='quizSection'><span id='quizQuestion'>" . $question . "</span><div>";
						$letters = ['A','B','C','D','E','F'];
						$pickOne = round(mt_rand(0,$numAnswers-1));
						$categorizedData = [$data[$entry]];
						for($i=0;$i<count($data);$i++) {
							if($data[$i][0] == $entryType && $i != $entry) {
								array_push($categorizedData, $data[$i]);
							}
						}

						$entriesUsed = [0];
						for($i = 0;$i<$numAnswers;$i++) {
							if($i == $pickOne) {
								$answer = $categorizedData[0][$useWhat];
								$insert = "data-correct='true'";
							} else {
								$newEntry = 1;
								do {
									$newEntry = round(mt_rand(1,count($categorizedData)-1));
									$answer = $categorizedData[$newEntry][$useWhat];
								} while (in_array($newEntry, $entriesUsed));
								array_push($entriesUsed, $newEntry);
								$insert = "data-correct='false'";
							}
							$buildAnswer = $answer;
							if($prefix != '') {
								$buildAnswer = $prefix . ' ' . lcfirst($answer);
							}
							$generateQuestion .= '<div class="quizButton" ' . $insert . '>' . $letters[$i] . '</div><div class="quizAnswer">' . $buildAnswer . '</div>';
						}
						$generateQuestion .= "</div";

						echo '<section class="tableRow"><div class="leftOne quizStyle"><span><span>Test your knowledge with the quiz!</span></span></div><div class="rightOne quizStyle">' . $generateQuestion . '</div></section>';
					}

					/*** Donations ***/
					$getAd = retrieveAd($subCat);
					if($getAd != false) {
						echo '<section class="tableRow"><div class="leftOne donationStyle"><span><span>Want to know more?</span></span></div><div class="rightOne donationStyle"></div></section>';
					} else if(mt_rand(0,2) >= 0) {
						echo '<section class="tableRow"><div class="leftOne donationStyle"><span><span>Do you like my tutorials?</span></span></div><div class="rightOne donationStyle" style="text-align:center;"><span style="margin-top:10px;display:inline-block;">To keep this site running, donate some motivational food!</span>
							<div id="articleFooterDonation" style="height:300px;"><div style="background-image:url(\'icon/IconCrisps.png\');"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="MX6HRTT7UBDXW"> <input type="submit"  name="submit" alt="PayPal – The safer, easier way to pay online."></form></div><div style="background-image:url(\'icon/IconChocomel.png\');"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="6C2YJHYMJ7QE2"> <input type="submit"  name="submit" alt="PayPal – The safer, easier way to pay online."></form></div><div style="background-image:url(\'icon/IconPizza.png\');"><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="4KSSPCYBKNW9J"> <input type="submit"  name="submit" alt="PayPal – The safer, easier way to pay online."></form></div></div>
							<div id="articleFooterDonation" class="prices" style="margin-top:-50px;">
								<div>Crisps<br/>(&euro;2.00)</div>
								<div>Chocolate Milk<br/>(&euro;3.50)</div>
								<div>Pizza<br/>(&euro;5.00)</div>
							</div>
							</div></section>';
					}
			?>
		</div>
	</article>
	<?php 
		/***ONLY LOAD YOUTUBE API IF THERE ACTUALLY IS A VIDEO****/
		if($counter >= 0 && $getVideo != '') {
			echo '<script src="http://www.youtube.com/player_api"></script>';
		}
	?>
<?php require_once('footer.php'); ?>