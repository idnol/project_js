import { toggleMenu, matchMedia } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';

import { bookSlider } from './js/slider';
import { clickToCategory } from './js/handlers';
import { listenerEventsModal } from './js/modal';

import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory } from './js/api';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

getTopBooks();
getCategoryList();
listenerEventsModal();