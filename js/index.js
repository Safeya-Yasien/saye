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

let span = document.querySelector(".backToTop");
window.onscroll = function () {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
