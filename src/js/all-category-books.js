import { getBooksForCategory } from './api';
import { renderBookCard } from './markup';
import { refs } from './refs.js';

function renderAllBooksInCategory(title) {
  return getBooksForCategory(title)
    .then(result => {
      refs.books.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
