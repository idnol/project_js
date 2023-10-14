import Swiper from 'swiper';
// import 'swiper/css';

const topBooksList = document.querySelector('.books-wrapper');

function renderMarkup(markup) {
  topBooksList.insertAdjacentHTML('beforeend', markup);
  test();
  widthWindow();
}

function widthWindow() {
  window.addEventListener('resize', function () {
    test(this.width);
  });
}
function test(width) {
  let windowWidth = width ?? window.innerWidth;
  console.log(windowWidth);
  if (windowWidth < 769) {
    console.log(5);
    const test = document.querySelectorAll('.mySwiper');
    // console.log(test);

    const swiper = new Swiper('.mySwiper', {
      initialSlide: 0,
      spaceBetween: 10,
      slidesPerView: 1,
      breakpoints: {
        // when window width is >= 320px
        768: {
          slidesPerView: 3,
          // spaceBetween: 20,
        },
        // when window width is >= 480px
        1440: {
          // swiper.off();
          // slidesPerView: 5,
          // spaceBetween: 30,
        },
        // when window width is >= 640px
      },
    });
  }
}
export { renderMarkup };
