import { getBooksForCategory } from './api';
import { renderBookCard } from './book-markup';
import { wrapLastWordTitle } from './category-books-title';

const gallery = document.querySelector('.books-gallery');

function renderAllBooksInCategory() {
  // вместо 'Picture Books' шаблонную строку с запросом пользователя
  return getBooksForCategory('Picture Books')
    .then(result => {
      // вместо 'Picture Books' шаблонную строку с запросом пользователя
      wrapLastWordTitle('Picture Books');
      gallery.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
