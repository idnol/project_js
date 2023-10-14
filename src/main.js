import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';
import { clickToCategory } from './js/handlers';
import { listenerEventsModal } from './js/modal';

import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory, getTopBooks } from './js/api';
import { refs, toggleMenu, matchMedia } from './js/header';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

// toggleMenu();
getTopBooks();
bookSlider();
getCategoryList();
listenerEventsModal();
