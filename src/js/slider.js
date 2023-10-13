import Swiper from 'swiper';
import 'swiper/css';


//npm install swiper
//https://swiperjs.com/get-started

function getSLider() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      spaceBetween: 20,
      direction: "vertical",
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  
  export {getSLider}