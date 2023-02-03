// eslint-disable-next-line no-undef
const swiper = new Swiper(".swiper", {
  spaceBetween: 50,
  navigation: {
    prevEl: ".reviews-slider__prev",
    nextEl: ".reviews-slider__next",
  },
  pagination: {
    el: ".reviews-slider__pagination",
    type: "bullets",
    clickable: true,
  },
  // mousewheel: true,
  keyboard: true,
  loop: true,
});
export default swiper;
