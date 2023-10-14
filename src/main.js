import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';
import {clickedIntoTopBooks} from './js/handlers'

refs.bookCategories.addEventListener('click', clickedIntoTopBooks)


// toggleMenu();
getTopBooks();
bookSlider();
getCategoryList();


