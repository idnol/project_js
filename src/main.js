import { toggleMenu, matchMedia } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';

import { sliderBook } from './js/slider';
import { clickToCategory, handlerBookClick, handlerBookScroll } from './js/handlers';


import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory } from './js/api';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

getTopBooks();
getCategoryList();
// refs.books.addEventListener('click', handlerBookClick)
 document.addEventListener('scroll', handlerBookScroll);
// toggleMenu();