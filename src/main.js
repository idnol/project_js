import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';
import { clickToCategory } from './js/handlers';
import { createMarkup } from './js/markup';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

// toggleMenu();
// createMarkup();
getTopBooks();
bookSlider();
getCategoryList();
