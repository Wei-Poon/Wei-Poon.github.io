$(document).ready(function(){
	console.log('WATUPPP');

	$('.about').click(function(){
		$('.about').addClass('hide');
	});

	$('.btn-short').click(function(){
		$('.item').addClass('hide');
		$('.item.short').removeClass('hide');
		$('.item.short').removeClass('half');
		$('.item.short').removeClass('th');
		$('.item.short').removeClass('qua');
	});

	$('.btn-oldold').click(function(){
		$('.item').addClass('hide');
		$('.item.oldold').removeClass('hide');
		$('.item.oldold').addClass('half');
	});

	$('.btn-old').click(function(){
		$('.item').addClass('hide');
		$('.item.old').removeClass('hide');
	});

	$('.btn-tall').click(function(){
		$('.item').addClass('hide');
		$('.item.tall').removeClass('hide');
		$('.item.tall').removeClass('th');
		$('.item.tall').addClass('half');
	});

	$('.btn-new').click(function(){
		$('.item').addClass('hide');
		$('.item.new').removeClass('hide');
		$('.item.new').removeClass('qua');
		$('.item.new').removeClass('half');
		$('.item.new').addClass('th');
	});

	$('.btn-robot').click(function(){
		$('.item').addClass('hide');
		$('.item.robot').removeClass('hide');
		$('.item.robot').addClass('qua');
	});

	$('.btn-res').click(function refreshPage(){
    	window.location.reload();
    	window.scrollTo(0,0);
	});

	$(function(){
		$(".container .item").draggable();
	});

	$(function(){
		$(".container .item").resizable();
	});

});