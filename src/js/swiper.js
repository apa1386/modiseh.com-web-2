var swiper = new Swiper(".Swiper-fullscreen", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".Swiper-res-1", {
  slidesPerView: 3.5,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 9,
      spaceBetween: 10,
    },
  },
});
var swiper = new Swiper(".Swiper-res-2", {
  slidesPerView: 1.7,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    425: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1020: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
  },
});
var swiper = new Swiper(".Swiper-res-3", {
  slidesPerView: 2.5,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    980: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});
