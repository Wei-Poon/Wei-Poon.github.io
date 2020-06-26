$(document).ready(function () {
  $(".menu1").click(function () {
    $(".essay1").addClass("slide");
    $(".essay2").removeClass("slide");
    $(".essay3").removeClass("slide");
    $(".close").addClass("show");
  });

  $(".menu2").click(function () {
    $(".essay2").addClass("slide");
    $(".essay1").removeClass("slide");
    $(".essay3").removeClass("slide");
    $(".close").addClass("show");
  });

  $(".menu3").click(function () {
    $(".essay3").addClass("slide");
    $(".essay1").removeClass("slide");
    $(".essay2").removeClass("slide");
    $(".close").addClass("show");
  });

  $(".close").click(function () {
    $(".essay1").removeClass("slide");
    $(".essay2").removeClass("slide");
    $(".essay3").removeClass("slide");
    $(".close").removeClass("show");
  });

  $.when( scrollTop() ).done(function() {
       setTimeout(scrollHeight, 1200);
  });

  function scrollTop() {
    $('html,body').scrollTop(0);
   }  

  $(window).on("resize", function () {
    scrollHeight();
  });

  function scrollHeight() {
    var div = $(".auto");
    var bottom = div.offset().top + div.height();
    console.log(bottom);
    $("body,html").animate({ scrollTop: bottom }, 66000);
  }

});