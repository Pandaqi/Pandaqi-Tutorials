
$(document).ready(function() {
	/*** CREATE DYNAMIC LINKS FOR TABLE OF CONTENTS***/
	//var curCat = <?php echo json_encode($row['cat']); ?>;
	var tempCurCat = window.location.href.split("/");
	var curCat = tempCurCat[tempCurCat.length-2];
	var curSubCat = $("#articleSubCat").text();
	$(".toc li").click(function() {
		var targetName = $(this).html();
		targetName = targetName.replace('&amp;','&'); //%26 is the URI variant, but it will be encoded later
		targetName = targetName.replace(/(<([^>]+)>)/ig,"");

		location.href = "dynamicLink.php?name=" + encodeURIComponent(targetName) + "&cat=" + encodeURIComponent(curCat) + "&subcat=" + encodeURIComponent(curSubCat);
	});

	var editors = [];

	/*** POPULATE HIGHLIGHTERS ***/
	$("pre").each(function(i, e) {
		// For the see-in-action button
		var txt = document.createElement("textarea");
	    txt.innerHTML = e.innerHTML;
		editors.push(txt.value);
		var theLang = e.getAttribute('class');
	    if(theLang == 'html' || theLang == 'css') {
	    	var saveParentID = $(this).closest("div").attr("class");
	    	if(saveParentID == "sideImagePreview") {
				$("<span class='seeInAction' style='margin-top:0px;'><a data-id='" + (editors.length-1) + "' data-lang='" + theLang + "'>Try code in Editor!</a></span>").insertAfter($(this).closest("div"));
	    	} else {
			    $("<span class='seeInAction'><a data-id='" + (editors.length-1) + "' data-lang='" + theLang + "'>Try code in Editor!</a></span>").insertAfter($(this));
	    	}
	    }
	    //Actual higlighting action
	    hljs.highlightBlock(e);
	});

	var maxWidth = $("#firstPara").outerWidth();
	$(".aGif").each(function() {
		var newG = new SuperGif({ gif: $(this)[0], max_width: maxWidth } );
		//newG.load();
		gifs.push(newG);
	});

	$(".seeInAction a").click(function() {
		var myID = $(this).attr('data-id');
		localStorage.setItem("transferCodeLang",$(this).attr('data-lang'));
		localStorage.setItem("transferCodeBlock",editors[myID]);
		location.href = 'liveEditor.html';
	});

	$("img").click(function() {
		var mySRC = $(this).attr('src');
		$("#overlayLargeImageSRC").attr('src',mySRC);
		$("#overlayLargeImage").css('display','block');
		console.log("CLICKED ME");
	});

	$("#overlayLargeImage").click(function() {
		if($(this).css('display') == 'block') {
			$("#overlayLargeImage").css('display','none');
		}
	});

	$(".quizButton").click(function() {
		$(".quizButton").each(function() {
			if($(this).attr('data-correct') == "false") {
				$(this).html('&#10008;');
				$(this).css('border-color','#892a24');
			} else {
				$(this).html('&#10004;');
				$(this).css('border-color','#518924');
			}
		});
	});

	/***SMOOTH SCROLL FOR ANCHOR POINTS, fallback on their regular way of working, nice! *****/
    $(".quickContentLinks a").click(function (event) {
      var target = $(this).attr('data-href');
      target = $('[name=' + target.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    });

    /**** STUFF I MIGHT NEED IN THE FUTURE
    
    $(".sideImagePreview > pre").each(function() {
   		var findTable = $(this).next();
	    var wantedHeight = findTable.outerHeight(true);
	    console.log(wantedHeight);
	    if($(this).height() <= wantedHeight) {
	    	findTable.css('align-self', 'initial');
		    $(this).height(wantedHeight);    	
	    }
    });

    //Add div with id 'player', and youtube vid will be inserted there
	var player;
	function onYouTubePlayerAPIReady() {
		var getIt = $("#player").attr("data-id");
	    player = new YT.Player('player', {
	      height: '550',
	      width: '960',
	      videoId: getIt,
	      events: {
	        //'onReady': onPlayerReady,
	        'onStateChange': onPlayerStateChange
	      }
	    });
	}

	// autoplay video
	function onPlayerReady(event) {
	    event.target.playVideo();
	}

	// when video ends
	function onPlayerStateChange(event) {        
	    if(event.data === 0) {          
	        alert('done');
	    }
	}

	 ****/
});