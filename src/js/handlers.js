import { refs } from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';
import { getTopBooks, getBook } from './api.js';
import { addToBasket } from './basket.js';

async function clickToCategory(e) {
  if (
    e.target.classList.contains('js-category-button') ||
    e.target.classList.contains('js-category')
  ) {
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
    const title = document.createElement('h1');
    title.classList.add('books-title');
    title.innerHTML = 'Best Sellers <span>Books</span>';
    const wrapper = document.createElement('div');
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

// MODAL WINDOW

async function handlerBookClick(e) {
  if (refs.modal) {
    refs.modal.innerHTML = '';
  }
  const target = e.target.closest('li.book-card');
  if (target) {
    await addToBasket(e, target);
    toggleModal();
  }
}

function closeModal() {
  if (event.key === 'Escape') {
    toggleModal();
    window.removeEventListener('keydown', closeModal);
  }
}

function toggleModal() {
  document.querySelector('.js-modal').classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  document.body.classList.toggle('color-body');
}

function addToShoppingList(basket, value) {
  const bookState = JSON.stringify(value);
  localStorage.setItem(basket, bookState);
}

function handlerBookScroll() {
  if (window.pageYOffset > 100) {
    refs.scroll.classList.add('active');
  } else {
    refs.scroll.classList.remove('active');
  }
}

export {
  clickToCategory,
  handlerBookClick,
  closeModal,
  toggleModal,
  handlerBookScroll,
};
