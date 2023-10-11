import { getBooksForCategory } from './api';
import { renderBookCard } from './book-markup';
import { categoryTitle } from './category-books-title';

const gallery = document.querySelector('.books-gallery');
const booksCategoryTitle = document.querySelector('.books-category-title');

function renderAllBooksInCategory() {
  // вместо 'Picture Books' шаблонную строку с запросом пользователя
  return getBooksForCategory('Picture Books')
    .then(result => {
      // вместо 'Picture Books' шаблонную строку с запросом пользователя
      categoryTitle('Picture Books');

      gallery.innerHTML = renderBookCard(result);
    })
    .catch(console.error());
}

export { renderAllBooksInCategory };
