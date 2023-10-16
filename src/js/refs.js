const refs = {
  API: 'https://books-backend.p.goit.global',
  KEY_BOOK: 'basket',
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
  shoppingList : document.querySelector('.shopping-list'),
  pagination :document.querySelector('.pagination'),
  toStartButton :document.querySelector('.pagination_btn-to-start'),
  toPrevButton :document.querySelector('.pagination_btn-to-prev'),
  toNextButton :document.querySelector('.pagination_btn-to-next'),
  toEndButton :document.querySelector('.pagination_btn-to-end'),
  supportSwiper: document.querySelector('.mySupportBlockSwiper'),
  booksPerPage: 3,

};

export { refs };