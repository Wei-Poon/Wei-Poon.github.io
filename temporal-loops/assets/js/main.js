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

	// $(".menu1").click(function () {
 //    	$(".essay1").addClass("slide");
 //    	$(".essay2").removeClass("slide");
 //    	$(".essay3").removeClass("slide");
 //    	$(".close").addClass("show");
 //  	});


});