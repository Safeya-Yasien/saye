$(document).ready(function () {
  $(".slick").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: true,
    centerMode: false,
    arrows: false,
  });

  $(".landing-slick").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    arrows: true,
  });
});
