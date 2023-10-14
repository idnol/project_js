import {refs} from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';
import { getTopBooks } from './api.js';

async function clickToCategory(e) {
  if (e.target.classList.contains('js-category-button') || e.target.classList.contains('js-category')) {
    await renderBooks(e);
    if (e.target.classList.contains('js-category')) {
      document.querySelectorAll('.js-category').forEach(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  }

  if (e.target.classList.contains('js-all')) {
    document.querySelector('.js-category-list').remove();
    const wrapper = document.createElement("div");
    wrapper.classList.add('books-wrapper', 'js-book-categories');
    refs.books.appendChild(wrapper);
    await getTopBooks();
  }
}


async function renderBooks(e) {
  refs.bookCategories.remove();
  await renderAllBooksInCategory(e.target.dataset.name);
}


export {clickToCategory}