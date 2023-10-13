import { getBooksForCategory } from './api';
import { renderBookCard } from './book-markup';
import { wrapLastWordTitle } from './category-books-title';

const gallery = document.querySelector('.books-gallery');

function renderAllBooksInCategory() {
  // вместо 'Picture Books' шаблонную строку с запросом пользователя
  return getBooksForCategory('Picture Books')
    .then(result => {
      // вместо 'Hardcover Fiction' шаблонную строку с запросом пользователя
      wrapLastWordTitle('Hardcover Fiction');
      gallery.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
