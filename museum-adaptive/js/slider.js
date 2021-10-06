$(document).ready(function () {
  $(".welcome-slider").slick({
    dots: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    swipe: true,
    prevArrow: $(".control-arrows .prev"),
    nextArrow: $(".control-arrows .next"),
    appendDots: $(".control-dots"),
  });
  $(".welcome-slider").on("init reInit afterChange", function (event, slick) {
    $(".current").html("0" + (1 + slick.slickCurrentSlide()));
  });
});
