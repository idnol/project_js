import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


//npm install swiper
//https://swiperjs.com/get-started

function getSLider() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      spaceBetween: 20,
      mousewheel: true,
      direction: "vertical",
      navigation: {
        
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
  
  export {getSLider}


  