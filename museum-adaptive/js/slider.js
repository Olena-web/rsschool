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

  $(".video-main").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".video-slider",
  });
  $(".video-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".video-main",
    draggable: true,
    swipe: true,
    dots: true,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: $(".video-slider-panel #video-btn-prev"),
    nextArrow: $(".video-slider-panel #video-btn-next"),
    appendDots: $(".video-slider-panel .video-dots-wrapper"),
    responsive: [{ breakpoint: 769, settings: { slidesToShow: 2 } }],
    onAfterChange: function () {
      player.stopVideo();
    },
  });
  $(".video-main").on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      var current = $(slick.$slides[currentSlide]);
      current.html(current.html());
    }
  );
});
// youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
//Чтобы сработало надо в конец ссылки iframe добавить "?enablejsapi=1
