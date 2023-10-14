import { Swiper } from 'swiper/core';

function sliderBook() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1440: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    },
  });
}

export { sliderBook };
