import Swiper from 'swiper';
import 'swiper/css';

function bookSlider() {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 320px
      768: {
        slidesPerView: 3,
        // spaceBetween: 20,
      },
      // when window width is >= 480px
      1440: {
        // slidesPerView: 5,
        // spaceBetween: 30,
      },
    },
  });
}
export { bookSlider };

// function test(width) {
//   let windowWidth = width ?? window.innerWidth;
//   console.log(windowWidth);
//   if (windowWidth < 769) {
//     console.log(5);
//     const test = document.querySelectorAll('.mySwiper');
//     // console.log(test);

//     const swiper = new Swiper('.mySwiper', {
//       initialSlide: 0,
//       spaceBetween: 10,
//       slidesPerView: 1,
// breakpoints: {
//   // when window width is >= 320px
//   768: {
//     slidesPerView: 3,
//     // spaceBetween: 20,
//   },
//   // when window width is >= 480px
//   1440: {
//     // swiper.off();
//     // slidesPerView: 5,
//     // spaceBetween: 30,
//   },
//         // when window width is >= 640px
//       },
//     });
//   }
// }
