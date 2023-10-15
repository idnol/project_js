import { toggleMenu } from './js/header';
import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory } from './js/api';
import { sliderBook } from './js/slider';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { clickToCategory, handlerBookClick, closeModal, toggleModal } from './js/handlers'

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);
refs.books.addEventListener('click', handlerBookClick)
document.addEventListener("keydown", closeModal);
refs.modalClose.addEventListener("click", toggleModal)

getTopBooks().then(r => {});
sliderBook();
getCategoryList().then(r => {});

// toggleMenu();