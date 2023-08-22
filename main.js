var owl = $(".owl-carousel");
owl.owlCarousel({
  autoplay: true,
  loop: true,
  margin: 25,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 1500,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});
