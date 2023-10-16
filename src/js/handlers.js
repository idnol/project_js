import { refs } from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';
import { getTopBooks, getBook } from './api.js';
import { addToBasket, removeItemFromStorage, setStorage } from './basket.js';
import { isMenuOpen } from './header.js';

async function clickToCategory(e) {
  if ( e.target.classList.contains('js-category-button') || e.target.classList.contains('js-category') ) {
    await renderBooks(e);
    if (e.target.classList.contains('js-category')) {
      document.querySelector('.js-all').classList.remove('active')
      document.querySelectorAll('.js-category').forEach(item => {
        item.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  }

  if (e.target.classList.contains('js-all')) {
    document.querySelectorAll('.js-category').forEach(item => {
      item.classList.remove('active');
    });
    e.target.classList.add('active')
    document.querySelector('.js-category-list').remove();
    const title = document.createElement('h1');
    title.classList.add('books-title');
    title.innerHTML = 'Best Sellers <span>Books</span>';
    const wrapper = document.createElement('div');
    wrapper.classList.add('books-wrapper', 'js-book-categories');
    refs.books.appendChild(title);
    refs.books.appendChild(wrapper);
    await getTopBooks();
    document.querySelector('.js-book-categories').addEventListener('click', clickToCategory);
  }
}

async function renderBooks(e) {
  refs.bookCategories.remove();
  await renderAllBooksInCategory(e.target.dataset.name);
}

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

async function onModalBtnAddClick(e) {
  const book = await getBook(e.target.dataset.id);
  if (!refs.modalBtnAdd.classList.contains('remove')) {
    await setStorage(book.data);
  } else {
    await removeItemFromStorage(book.data);
  }
}

function closeMobileMenuToDesktop(e) {
  if (window.innerWidth > 768) {
    matchMedia(e);
  }
}

function toggleMenu() {
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');
  refs.closeMenuBtn.classList.toggle('visually-hidden');
  refs.openMenuBtn.classList.toggle('visually-hidden');
}


export {clickToCategory, handlerBookClick, handlerBookScroll, closeModal, toggleModal, onModalBtnAddClick, closeMobileMenuToDesktop, toggleMenu}