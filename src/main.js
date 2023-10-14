import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory, getTopBooks } from './js/api';
import { refs, toggleMenu } from './js/header';

renderAllBooksInCategory();
getBooksForCategory();
getTopBooks();
