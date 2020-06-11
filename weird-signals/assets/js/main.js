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
});