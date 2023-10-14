import { renderAllBooksInCategory } from './js/all-category-books';
import { refs, toggleMenu } from './js/header';
import { getBooksForCategory, getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';

renderAllBooksInCategory();
getBooksForCategory();
getTopBooks();
bookSlider();
getCategoryList();

// console.log(window.outerWidth);
