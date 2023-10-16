import { Swiper } from 'swiper/core';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
  const homeSlider = new Swiper('.support-swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 7,
    spaceBetween: 20,
    direction: "vertical",
    navigation: {
      nextEl: '.swiper-button-down',
      prevEl: '.swiper-button-up',
    },
  });
}

export { sliderBook, supportListSlider };
