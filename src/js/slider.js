import { Swiper } from 'swiper/core';
// import 'swiper/css';
import 'swiper/css/navigation';

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

function supportListSlider() {
  const swiper = new Swiper('.support-swiper', {
    slidesPerView: 6,
    spaceBetween: 20,
    direction: 'vertical',
    navigation: {
      nextEl: '.swiper-button-down',
      prevEl: '.swiper-button-up',
    },
  });
}

export { sliderBook, supportListSlider };
