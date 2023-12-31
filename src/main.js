import { toggleMenu, matchMedia } from './js/header';
import { getTopBooks, getCategoryList, getBooksForCategory } from './js/api';
import { sliderBook, supportListSlider } from './js/slider';
import { refs } from './js/refs.js';
import {
  clickToCategory,
  handlerBookClick,
  handlerBookScroll,
  closeModal,
  toggleModal,
} from './js/handlers';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);
refs.books.addEventListener('click', handlerBookClick);
document.addEventListener('keydown', closeModal);
refs.modalClose.addEventListener('click', toggleModal);
window.addEventListener('scroll', handlerBookScroll);

getTopBooks().then(r => {});
getCategoryList().then(r => {});
supportListSlider();
toggleMenu();
matchMedia();
sliderBook();