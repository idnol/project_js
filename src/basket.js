import { createBookFromSLocalStorageMarkup } from './js/shoppingListBookMarkup.js';
import { refs, toggleMenu, matchMedia } from './js/header';
import { getBooksFromLocalStorage } from './js/getBooksFromLocalStorage.js';
import { updatePagination,updateStaticButtons} from './js/updatePagination.js';
import {handlePageButtonClick} from './js/paginationHandlers.js';
import { deleteBookFromLocalStorage } from './js/deleteBookFRomLocalStorage.js';
import { supportListSlider } from './js/slider';
supportListSlider();
const KEY_BOOK = 'basket';
const booksPerPage = 3;
const spanElements = refs.pagination.querySelectorAll('span');
const firstSpan = spanElements[1];
const localStorageBooks = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];


let currentPage = 1;
let totalBooks = localStorageBooks.length;
let totalPages = Math.ceil(totalBooks / booksPerPage);


if (currentPage > 1) {
  refs.toStartButton.classList.remove('disabled');
}
if (totalPages > 0) {
  refs.pagination.style.display = 'flex';
}


let bookToDisplay = getBooksFromLocalStorage(KEY_BOOK, currentPage, booksPerPage);
let createMarkupFromLocal = createBookFromSLocalStorageMarkup(bookToDisplay)
refs.shoppingList.innerHTML = createMarkupFromLocal;
updateStaticButtons(currentPage,totalPages);
updatePagination(totalPages,currentPage)
firstSpan.insertAdjacentHTML('afterend', updatePagination(totalPages, currentPage));

let pageButtons = refs.pagination.querySelectorAll('.page-btn');

handlePageButtonClick(pageButtons, currentPage, refs.shoppingList, KEY_BOOK, booksPerPage, totalPages, updatePagination, updateStaticButtons);

function updateShoppingListAndPagination(KEY_BOOK, currentPage, booksPerPage, refs, pageButtons) {
  const bookToDisplay = getBooksFromLocalStorage(KEY_BOOK, currentPage, booksPerPage);
  const createMarkupFromLocal = createBookFromSLocalStorageMarkup(bookToDisplay);
  refs.shoppingList.innerHTML = createMarkupFromLocal;
  pageButtons.forEach(btn => {
    btn.classList.remove('active');
  });
}
refs.toStartButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    updateShoppingListAndPagination(KEY_BOOK, currentPage, booksPerPage, refs, pageButtons);

    pageButtons[0].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  }
});
refs.toPrevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateShoppingListAndPagination(KEY_BOOK, currentPage, booksPerPage, refs, pageButtons);

    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  }
});
refs.toNextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;

    updateShoppingListAndPagination(KEY_BOOK, currentPage, booksPerPage, refs, pageButtons);

    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  }
});
refs.toEndButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage = totalPages;
    updateShoppingListAndPagination(KEY_BOOK, currentPage, booksPerPage, refs, pageButtons);
    
    pageButtons[pageButtons.length - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  }
});


refs.shoppingList.addEventListener('click', function (event) {
  if (event.target.classList.contains('book_delete-btn')) {
    const bookId = event.target.dataset.id;
    deleteBookFromLocalStorage(bookId, currentPage, booksPerPage, pageButtons,totalPages,updatePagination,refs.shoppingList);
  } else if (event.target.closest('.book_delete-btn')) {
    const bookId = event.target.closest('.book_delete-btn').dataset.id;
    deleteBookFromLocalStorage(bookId, currentPage, booksPerPage, pageButtons,totalPages,updatePagination,refs.shoppingList);
  }
});