import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';
import {clickToCategory, handlerBookClick} from './js/handlers'

refs.bookCategories.addEventListener('click', clickToCategory)
refs.sidebarCategories.addEventListener('click', clickToCategory)

refs.books.addEventListener('click', handlerBookClick)

// toggleMenu();
getTopBooks();
bookSlider();
getCategoryList();


