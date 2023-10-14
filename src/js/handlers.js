import {refs} from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';

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
    console.log(123);
  }
}


async function renderBooks(e) {
  refs.bookCategories.remove();
  await renderAllBooksInCategory(e.target.dataset.name);
}


export {clickToCategory}