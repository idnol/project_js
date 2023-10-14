import Swiper from 'swiper';
// import 'swiper/css';

const topBooksList = document.querySelector('.books-wrapper');

function renderMarkup(markup) {
  topBooksList.insertAdjacentHTML('beforeend', markup);
  test();
  // widthWindow();
}

// function widthWindow() {
//   window.addEventListener('resize', function () {
//     test(this.width);
//   });
// }

export { renderMarkup };
