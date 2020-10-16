$(document).ready(function(){
	console.log('WATUPPP');

	$('.about').click(function(){
		$('.about').addClass('hide');
	});

	$('.btn-short').click(function(){
		$('.item').addClass('hide');
		$('.item.short').removeClass('hide');
	});

	$('.btn-oldold').click(function(){
		$('.item').addClass('hide');
		$('.item.oldold').removeClass('hide');
	});

	$('.btn-old').click(function(){
		$('.item').addClass('hide');
		$('.item.old').removeClass('hide');
	});

	$('.btn-tall').click(function(){
		$('.item').addClass('hide');
		$('.item.tall').removeClass('hide');
	});

	$('.btn-new').click(function(){
		$('.item').addClass('hide');
		$('.item.new').removeClass('hide');
	});

	$('.btn-robot').click(function(){
		$('.item').addClass('hide');
		$('.item.robot').removeClass('hide');
	});

	$('.btn-res').click(function(){
		$('.item').removeClass('hide');
	});

	$(function(){
		$(".container .item").draggable();
	});

	
	$(".container .item").resizable();
	

});