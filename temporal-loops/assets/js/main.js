$(document).ready(function(){
	console.log("im ready bruh");

	// floor slide out

	$('.lv5Ext').click(function(){
		$('.lv5Ext').addClass("slide");
	});

	$('.lv4Ext').click(function(){
		$('.lv4Ext').addClass("slide");
	});

	$('.lv3Ext').click(function(){
		$('.lv3Ext').addClass("slide");
	});

	$('.lv2Ext').click(function(){
		$('.lv2Ext').addClass("slide");
	});

	$('.lv1Ext').click(function(){
		$(".lv1Ext").addClass("slide");
	});

	// end floor slide out

	

	// floor slide in

	$('.lv5Int').click(function(){
		$(".lv5Ext").removeClass("slide");
	});

	$('.lv4Int').click(function(){
		$(".lv4Ext").removeClass("slide");
	});

	$('.lv3Int').click(function(){
		$(".lv3Ext").removeClass("slide");
	});

	$('.lv2Int').click(function(){
		$(".lv2Ext").removeClass("slide");
	});

	$('.lv1Int').click(function(){
		$(".lv1Ext").removeClass("slide");
	});

	// end floor slide in

	// click to scroll (floating sidebar)

  	$('div.flv5').click(function() {
  		$('html, body').animate({
    scrollTop: 
   	$("div.lv5").offset().top - 125
  		}, 1000)
	}), 
 	
 	$('div.flv4').click(function (){
   		$('html, body').animate({
    scrollTop:
    $("div.lv4").offset().top - 125
    	}, 1000)
  	}),
  		
  	$('div.flv3').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv3").offset().top - 125
    	}, 1000)
  	})

  	$('div.flv2').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv2").offset().top - 125
    	}, 1000)
  	})

  	$('div.flv1').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv1").offset().top
    	}, 1000)
  	})

  	// end click to scroll

});