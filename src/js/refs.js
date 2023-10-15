const refs = {
  API: 'https://books-backend.p.goit.global',
  mobileMenu: document.querySelector('.js-mob-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
  books: document.querySelector('.js-books'),
  bookCategories: document.querySelector('.js-book-categories'),
  sidebarCategories: document.querySelector('.js-categories'),
  checkbox: document.querySelector('input[type="checkbox"]'),
  body: document.querySelector('body'),
  modalClose: document.querySelector('.module-close-btn'),
  modalBtnAdd: document.querySelector('.btn-module-add'),
  modal: document.querySelector('.block-module-info'),
  modalInfo: document.querySelector('.js-modal-info'),
  moduleBtnAdd: document.querySelector('.btn-module-add'),
  scroll: document.getElementById('scroll'),
  supportSwiper: document.querySelector('.mySupportBlockSwiper'),
};

export { refs };

//  <div class="swiper mySwiper">
//    <div class="swiper-wrapper">
//      <div class="swiper-slide">Slide 1</div>
//      <div class="swiper-slide">Slide 2</div>
//      <div class="swiper-slide">Slide 3</div>
//      <div class="swiper-slide">Slide 4</div>
//      <div class="swiper-slide">Slide 5</div>
//      <div class="swiper-slide">Slide 6</div>
//      <div class="swiper-slide">Slide 7</div>
//      <div class="swiper-slide">Slide 8</div>
//      <div class="swiper-slide">Slide 9</div>
//    </div>
//    <div class="swiper-button-next"></div>
//    <div class="swiper-button-prev"></div>
//  </div>;
