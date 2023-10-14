import { getBooksForCategory } from './api';
import { renderBookCard } from './book-markup';
import { wrapLastWordTitle } from './category-books-title';

const gallery = document.querySelector('.books-gallery');

function renderAllBooksInCategory(title) {
  // вместо 'Picture Books' шаблонную строку с запросом пользователя
  return getBooksForCategory(title)
    .then(result => {
      // вместо 'Hardcover Fiction' шаблонную строку с запросом пользователя
      wrapLastWordTitle(title);
      gallery.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
