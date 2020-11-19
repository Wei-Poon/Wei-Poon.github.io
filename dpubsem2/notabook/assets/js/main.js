$(document).ready(function(){
	console.log('wattup');

	$('.nav').click(function(){
		$('.slide').toggleClass('active');
	});

	$('.button').click(function(){
		$('.play').toggleClass('hide');
		$('.howdoes').toggleClass('paused');
		$('.ilike').toggleClass('paused');
		$('.therest').toggleClass('paused');
		$('.therest2').toggleClass('paused');
		$('.landingsub').toggleClass('paused');
	});

});