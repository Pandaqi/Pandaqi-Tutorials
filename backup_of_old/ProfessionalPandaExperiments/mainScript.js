var selectedAction = -1;


var subMenus = [];
subMenus[0] = ["HOMEPAGE","About Us","Contact","F.A.Q."];
subMenus[1] = ["OVERVIEW","HTML5","CSS3","JavaScript", "PHP", "SQL"];
subMenus[2] = ["OVERVIEW","Drawing", "Graphic Design", "Typography","Colours"];
subMenus[3] = ["OVERVIEW","Writing","English", "LaTeX"];
subMenus[4] = ["OVERVIEW","Soccer","Foosball"];
subMenus[5] = ["OVERVIEW","Phaser","Three.js"];
subMenus[6] = ["OVERVIEW","Singing","Mixing"];
subMenus[7] = ["OVERVIEW"];
subMenus[8] = ["OVERVIEW"];
subMenus[9] = ["OVERVIEW"];
subMenus[10] = ["OVERVIEW","Hygiene","Fit & Healthy"];
subMenus[11] = ["OVERVIEW","Chess"];

var subLinks = [];
subLinks[0] = ["","action/about","action/contact","action/faq"];
subLinks[1] = ["Website","Website/overview/HTML5","Website/overview/CSS3","Website/overview/JavaScript", "Website/overview/PHP", "Website/overview/SQL"];
subLinks[2] = ["Design", "Design/overview/Drawing", "Design/overview/Graphic-Design", "Design/overview/Typography","Design/overview/Colour-Theory"];
subLinks[3] = ["Writing","Writing/overview/Writing with Style","Writing/overview/English","Writing/overview/LaTeX"];
subLinks[4] = ["Sports","Sports/overview/Soccer","Sports/overview/Foosball"];
subLinks[5] = ["Games","Games/overview/Phaser","Games/overview/Threejs"];
subLinks[6] = ["Music","Music/overview/Singing","Music/overview/Music-Mixing"];
subLinks[7] = ["Film","",""];
subLinks[8] = ["Programming","",""];
subLinks[9] = ["Scientific","",""];
subLinks[10] = ["Lifehacks","Lifehacks/overview/Personal Hygiene","Lifehacks/overview/Fitness-%26-Health"];
subLinks[11] = ["Miscellaneous","Miscellaneous/overview/Chess"];

var subIcons = [];
subIcons[0] = ["ProfPanda.svg","ABOUTUS.svg","CONTACT.svg","FAQ.svg"];
subIcons[1] = ["OVERVIEW.svg","HTML5.svg","CSS3.svg","JavaScript.svg","PHP.svg","MYSQL.svg","JQUERY.svg"];
subIcons[2] = ["OVERVIEW.svg","Drawing.svg", "Graphic-Design.svg","Typography.svg","Colour-Theory.svg"];
subIcons[3] = ["OVERVIEW.svg","Writing-with-Style.svg","English.svg","LaTeX.svg"];
subIcons[4] = ["OVERVIEW.svg","Soccer.svg","Foosball.svg"];
subIcons[5] = ["OVERVIEW.svg","Phaser.svg","Threejs.svg"];
subIcons[6] = ["OVERVIEW.svg","Singing.svg","Music-Mixing.svg"];
subIcons[7] = ["OVERVIEW.svg"];
subIcons[8] = ["OVERVIEW.svg"];
subIcons[9] = ["OVERVIEW.svg"];
subIcons[10] = ["OVERVIEW.svg","Personal-Hygiene.svg","Fitness-&-Health.svg"];
subIcons[11] = ["OVERVIEW.svg","Chess.svg"];

var gifs = [];

$(document).ready(function() {
	var titles = ["HOME","Website","Design","Writing","Sports","Games","Music","Film","Programming","Scientific","Lifehacks","Miscellaneous","LOGIN"];
	var icons = ["ProfPanda.svg","Website.svg","Design.svg","Writing.svg","Sports.svg","Games.svg","Music.svg","Film.svg","Programming.svg","Scientific.svg","Lifehacks.svg","Miscellaneous.svg"];
	for(var i=0;i<36;i++) {
		if(i < 12) {
			document.getElementById("header").innerHTML += '<div class="hexagon" id="fadedOut"></div>';
		} else if(i >= 24) {
			document.getElementById("header").innerHTML += '<div class="hexagon turnOver" id="fadedOut"></div>';
		} else {
			
			document.getElementById("header").innerHTML += '<div class="hexagon menuHexagon" data-title=' + titles[i-12] + ' style="background-image:url(icon/' + icons[i-12] + ')" data-needed="' + (i-12) + '"></div>';
			/*document.getElementById("mobileHeaderRow" + Math.floor((i-12)/6)).innerHTML += "<td style='position:relative;background-image:url(icons/" + icons[i-12] + "'><a style='position:absolute;top:0;width:100%;height:100%;display:block;min-height:78px;' href=''><span style='text-align:center;width:100%;position:absolute;bottom:0;display:inline-block;'>" + titles[i-12] + "</span></a></td>";*/
			var link = titles[i-12];
			if(titles[i-12] == 'HOME') {
				link = "/";
			}
			document.getElementById("smallHeader").innerHTML += "<div class='tinyHexagon' data-needed='"+ i +"'><a href='" + link + "' style='background-image:url(icon/" + icons[i-12] + ");'><br/>" + titles[i-12] + "</a></div>";
			document.getElementById("mobileHeaderPopout").innerHTML += '<div id="mobileHeaderPopoutLink"><a style="padding:7px 20%;display:inline-block;width:100%;" href="' + link + '"><span style="background-image:url(icon/' + icons[i-12] + ');display:inline-block;"></span>&nbsp;&nbsp;&nbsp;<span style="vertical-align:top;">' + titles[i-12] + '</span></a></div>';
		}

	}
	/****** SPECIAL CLICK EVENTS for MENU HEXAGONS ******/
	$(".menuHexagon").click(function() {
		var chosen = parseInt($(this).attr('data-needed'));
		if(selectedAction == chosen) {
			$(this).removeClass("selected");
			turnAround(1);
			selectedAction = -1;
		} else {
			$(".hexagon").removeClass("selected");
			$(this).addClass("selected");
			selectedAction = chosen;
			turnAround(0);
		}
	});

	$("#openMenuBtn").click(function() {
		var a = $("#mobileHeaderPopout");
		if(a.css('display') == 'none') {
			$("#openMenuBtn").html('<span></span> CLOSE MENU');		
			a.css('display','block');
			$("#mobileBlackener").css('display','block');
		} else {
			$("#openMenuBtn").html('<span></span> OPEN MENU');
			a.css('display','none');
			$("#mobileBlackener").css('display','none');
		}
	});

	$('#searchForm form').submit(function (event) { 
	    var tag = $('#searchText').val();
	    window.location='search/'+encodeURIComponent(tag);
	    return false;
	});

	/***Add scrolling event to window***/
	window.onscroll = scrolling;
});

function turnAround(a) {
	var counter = -1;
	$(".turnOver").each(function() {
		counter++;
		//Empty everything just to be sure
		$(this).css('background-image','none');
		$(this).removeClass("menuHexagon");
		//Turn them over, turn them on!
		if(a == 0) {
			$(this).addClass('rotated');
			if(counter < subMenus[selectedAction].length) {
				$(this).attr('data-title',subMenus[selectedAction][counter]);
				$(this).addClass("menuHexagon");
				$(this).css('background-image','url(icon/' + subIcons[selectedAction][counter] + ')');
				var saveIt = counter;
				$(this).click(function() {
					window.location.href = subLinks[selectedAction][saveIt];
				});
			}
		} else if(a==1) {
			$(this).removeClass('rotated');
			$(this).removeClass("menuHexagon");
			$(this).css('background-image','none');
		}
		$(this).css('animation-delay',Math.round((counter/36)*100)/100+'s');
	});
}
function scrolling() {
	var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
	if(top > 200) {
		document.getElementById('header').style.display = 'none';
		document.getElementById('smallHeader').style.display = 'block';
	} else {
		document.getElementById('smallHeader').style.display = 'none';
		document.getElementById('header').style.display = 'block';
	}
	//Try something with fixed position? Remove container and revert back to original system if everything breaks down?
	/*if($("#quickContentFullContainer").length) {
		if(top >= 440) {
			$("#quickContentFullContainer").css('top',top-460);
		} else {
			$("#quickContentFullContainer").css('top','initial');
		}
	}*/
}