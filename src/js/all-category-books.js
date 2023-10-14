import { getBooksForCategory } from './api';
import { renderBookCard } from './book-markup';
import { wrapLastWordTitle } from './category-books-title';
import { listenerEventsModal } from './modal';
import { refs } from './refs.js';


function renderAllBooksInCategory(title) {
  return getBooksForCategory(title)
    .then(result => {
      refs.books.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
