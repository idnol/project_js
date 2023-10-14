import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory, getTopBooks } from './js/api';
import { bookSlider } from './js/slider';

renderAllBooksInCategory();
getBooksForCategory();
getTopBooks();
bookSlider();

// console.log(window.outerWidth);
