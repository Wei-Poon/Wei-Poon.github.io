$(document).ready(function(){
	console.log("im ready bruh");

	$('.lv1Ext').click(function(){
		$('.lv1Ext').addClass("slide");
	});

	$('.lv2').click(function(){
		$('.lv2').addClass("slide");
	});

	$('.lv3').click(function(){
		$('.lv3').addClass("slide");
	});

	$('.lv4').click(function(){
		$('.lv4').addClass("slide");
	});


	$('.lv5').click(function(){
		$(".lv5").addClass("slide");
	});

	$('.floorInt').click(function(){
		$(".lv1Ext").removeClass("slide");
	});

  	$('div.flv5').click(function() {
  		$('html, body').animate({
    scrollTop: 
   	$("div.lv5").offset().top
  		}, 1000)
	}), 
 	
 	$('div.flv4').click(function (){
   		$('html, body').animate({
    scrollTop:
    $("div.lv4").offset().top
    	}, 1000)
  	}),
  		
  	$('div.flv3').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv3").offset().top
    	}, 1000)
  	})

  	$('div.flv2').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv2").offset().top
    	}, 1000)
  	})

  	$('div.flv1').click(function (){
    	$('html, body').animate({
    scrollTop:
    $("div.lv1").offset().top
    	}, 1000)
  	})
	

	// $(".menu1").click(function () {
 //    	$(".essay1").addClass("slide");
 //    	$(".essay2").removeClass("slide");
 //    	$(".essay3").removeClass("slide");
 //    	$(".close").addClass("show");
 //  	});


});