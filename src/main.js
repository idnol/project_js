import { renderAllBooksInCategory } from './js/all-category-books';
import { getBooksForCategory, getTopBooks } from './js/api';
import { listenerEventsModal } from './js/modal';

listenerEventsModal();
renderAllBooksInCategory();
getBooksForCategory();
getTopBooks();
