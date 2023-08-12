<?php require_once('header.php'); ?>
		<div style="width:100%;display:table;padding:0px;margin:0px;">
			<?php
			if(isset($_GET['type'])) {
				$what = $_GET['type'];				
			} else {
				$what = 'contact';
			}
			if(isset($_COOKIE['mailSent'])) {
				if($_COOKIE['mailSent'] == "5") {
					echo '<section class="tableRow"><div class="leftOne style0"><span><span>MESSAGE</span></span></div><div class="rightOne style0"><span style="color:green;">Mail was succesfully sent!</span></div></section>';
				} else if($_COOKIE['mailSent'] == "4") {
					echo '<section class="tableRow"><div class="leftOne style0"><span><span>MESSAGE</span></span></div><div class="rightOne style0"><span style="color:red;">Oh noes, something went wrong with the email system :( </span></div></section>';
				}
				setcookie("mailSent", "", time() - 3600);
			}

			if($what == 'about') {
				echo '<section class="tableRow"><div class="leftOne style8"><span><span>YOU WANTED TO KNOW...</span></span></div><div class="rightOne style8"><h1>About Us</h1></div></section>';
				echo '<section class="tableRow"><div class="leftOne"></div><div class="rightOne"><p>Hello, I am Pandaqi, a guy trying to bring you free tutorials on anything. I am located in the Netherlands, and love to learn new stuff.</p><p>That is why I started this website to keep a database of my knowledge and that of geniusses around me. You can provide feedback on what you would like to know or what isn\'t exactly clear, and I will update the tutorials for you as quickly as possible.</p><p>I am currently a student at TU/e (Technical University Eindhoven), trying to absorb knowledge related to Applied Mathematics.</p><p>That means that I won\'t always be able to quickly react on your feedback, and that it sometimes takes some time for a new course to be added, but I try to produce high-quality content at a high rate. First of all for myself, but I always optimize it before I put it on this website.</p><p>Anyway, I would love it if you use this website and get inspired by it, and you are free to talk to me about subjects any time you want. Visit the contact page for that!</p></section>';
			} else if($what == 'contact') {
				echo '<section class="tableRow"><div class="leftOne style8"><span><span>YOU WANTED TO GET THE DETAILS ON...</span></span></div><div class="rightOne style8"><h1>Contact/Feedback</h1></div></section>';
				echo '<section class="tableRow"><div class="leftOne"></div><div class="rightOne"><p>I would love to hear from you! If you do not understand something completely, want to request a specific course or tutorial, or just want to provide comments on something - get in touch!</p><p>You can send an email to <a href="http://scr.im/3e8d">http://scr.im/3e8d</a> (click to view, to avoid spam) or use this contact form:</p></section>';
				echo '<section class="tableRow"><div class="leftOne style8"><span><span>EMAIL CONTACT FORM</span></span></div><div class="rightOne style8"><form style="font-family:Lato;font-size:28px;" action="sendMail.php" method="post"><table width="100%" class="styleLessTable"><tr><td>Subject</td><td><input style="width:100%;font-size:28px;font-family:Lato;" name="subject" type="text" /></td></tr><tr><td>Your Email Address</td><td><input style="width:100%;font-size:28px;font-family:Lato;" name="sender" type="email" /></td></tr><tr><td style="vertical-align:top;">Message</td><td><textarea name="message" style="width:100%;height:300px;font-size:16px;font-family:Lato;"></textarea></td></tr><tr><td colspan="2"><input style="width:100%;font-family:HalloSans;font-size:40px;background-color:#fff;border:2px solid gray;cursor:pointer;color:#333;" type="submit" value="SEND"/></td></tr></table></form><p>*I am open to criticism, feedback, comments, requests and personal stories about using the tutorials. I do not read spam, self-promotion or hate mails.</p></div></section>';
			} else if($what == 'faq') {
				echo '<section class="tableRow"><div class="leftOne style8"><span><span>YOU WANTED TO READ THE...</span></span></div><div class="rightOne style8"><h1>Frequently Asked Questions</h1><p>If you have any questions regarding how this website is set up or how to use it, this is the page to read.</p></div></section>';
				echo '<section class="tableRow"><div class="leftOne"></div><div class="rightOne"><p><strong>There are no comments, social media buttons or required accounts?</strong></p><p>Yep. I\'ve thought about this a long time, but eventually decided against it. Anybody who wants to bring something to the table can mail me and I will talk about it. This way I can make sure the people who actually add value get the attention they deserve, while haters or spammers are ignored and never to be seen again. Also, I\'ve decided to use only email for communication - it is the most universally adopted communication channel, and I already use it a lot, so there\'s a greater chance I will catch your mail early.</p><p><strong>How do I use this website?</strong></p><p>Everything on this website is presented in the form of courses, chopped up into sections or several sorta standalone tutorials. This means that if you want to know something specific, you can visit the (sub)category it belongs to and search for the tutorial you want (or use the search bar). If you want to learn a new skill and don\'t know anything about it yet, you can just start with the first article of the course and use the buttons at the bottom of every tutorial to automatically go to the next (or previous) parts.</p><p><strong>How often is content added or updated?</strong></p><p>As often as is possible. I try to mostly write complete courses on a skill or subject, which means I work on it for a few weeks before it is finished &ndash; and only then do I upload the whole thing. Sometimes I will post a (bunch of) standalone tutorials shortly after each other, but not often. Tutorials are updated all the time - if there is a mistake, something I missed, something I want to add, etcetera I just update it without notice.</p></section>';
			}
			?>
		</div>
	</article>
<?php require_once('footer.php'); ?>
