import {refs} from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';

async function clickedIntoTopBooks(e) {
  if (e.target.classList.contains('js-category-button')) {
    await renderBooks(e);
  }
}


async function renderBooks(e) {
  refs.bookCategories.remove();
  await renderAllBooksInCategory(e.target.dataset.name);
}


export {clickedIntoTopBooks}