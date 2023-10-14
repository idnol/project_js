import Swiper from 'swiper';

function renderMarkup(markup) {
  document.querySelector('.js-book-categories').insertAdjacentHTML('beforeend', markup);
  test();
  // widthWindow();
}

// function widthWindow() {
//   window.addEventListener('resize', function () {
//     test(this.width);
//   });
// }

export { renderMarkup };
