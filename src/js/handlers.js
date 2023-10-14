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
    const title = document.createElement("h1");
    title.classList.add('books-title');
    title.innerHTML = 'Best Sellers <span>Books</span>';
    const wrapper = document.createElement("div");
    wrapper.classList.add('books-wrapper', 'js-book-categories');
    refs.books.appendChild(title);
    refs.books.appendChild(wrapper);
    await getTopBooks();
  }
}


async function renderBooks(e) {
  refs.bookCategories.remove();
  await renderAllBooksInCategory(e.target.dataset.name);
}
 
async function handlerBookClick(e) {
  const target = e.target.closest('li')
  target.addEventListener('click', toggleModal)
}

function toggleModal() {
  document.querySelector(".js-modal").classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
  document.body.classList.toggle("color-body");
};

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
      toggleModal()
  }}
  );

  refs.modalClose.addEventListener("click", toggleModal)

export {clickToCategory, handlerBookClick}