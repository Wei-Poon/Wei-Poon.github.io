// $(document).ready(function () {
//   console.log("ready!");

//   // This is the toggle click function, dont change
//   (function ($) {
//     $.fn.clickToggle = function (func1, func2) {
//       var funcs = [func1, func2];
//       this.data("toggleclicked", 0);
//       this.click(function () {
//         var data = $(this).data();
//         var tc = data.toggleclicked;
//         $.proxy(funcs[tc], this)();
//         data.toggleclicked = (tc + 1) % 2;
//       });
//       return this;
//     };
//   })(jQuery);

//   //  Add your click toggles here

//   $(".switch").clickToggle(
//     function () {
//       $(".bio").html("<div class='red'>To Sexual <br> Misconduct</div>");
//     },
//     function () {
//       $(".bio").html("<div>From Humble <br> Beginnings</div>");
//     }
//   );

//   //
// });

$(document).ready(function(){
	console.log('wattup');

	$('.switch').click(function(){
		$('.container').toggleClass('hide');
		$('.container2').toggleClass('show');
		$('.header').toggleClass('hide');
		$('.header2').toggleClass('show');
		$('.blank').toggleClass('hide');
		$('.blank2').toggleClass('show');
		$('.land').toggleClass('gray');
	});

});
