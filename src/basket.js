import { createBookFromSLocalStorageMarkup } from './js/shoppingListBookMarkup.js';
import { refs, toggleMenu, matchMedia } from './js/header';
import { getBooksFromLocalStorage } from './js/getBooksFromLocalStorage.js';
import { updatePagination,updateStaticButtons} from './js/updatePagination.js';
import { handlePageButtonClick, handlerEnd, handlerStart, handlerPrev, handlerNext, handlerDelete } from './js/paginationHandlers.js';
import { supportListSlider } from './js/slider';

supportListSlider();

const spanElements = refs.pagination.querySelectorAll('span');
const firstSpan = spanElements[1];
const localStorageBooks = JSON.parse(localStorage.getItem(refs.KEY_BOOK)) || [];

let currentPage = 1;
let totalBooks = localStorageBooks.length;
let totalPages = Math.ceil(totalBooks / refs.booksPerPage);

if (currentPage > 1) {
  refs.toStartButton.classList.remove('disabled');
}
if (totalPages > 0) {
  refs.pagination.style.display = 'flex';
}

let bookToDisplay = getBooksFromLocalStorage(refs.KEY_BOOK, currentPage, refs.booksPerPage);
let createMarkupFromLocal = createBookFromSLocalStorageMarkup(bookToDisplay)
refs.shoppingList.innerHTML = createMarkupFromLocal;
updateStaticButtons(currentPage,totalPages);
updatePagination(totalPages,currentPage)
firstSpan.insertAdjacentHTML('afterend', updatePagination(totalPages, currentPage));

let pageButtons = refs.pagination.querySelectorAll('.page-btn');

handlePageButtonClick(pageButtons, currentPage, refs.shoppingList, refs.KEY_BOOK, refs.booksPerPage, totalPages, updatePagination, updateStaticButtons);

refs.toStartButton.addEventListener('click', () => {
  handlerStart(totalPages, pageButtons);
});
refs.toPrevButton.addEventListener('click', () => {
  handlerPrev(totalPages, pageButtons);
});
refs.toNextButton.addEventListener('click', () => {
  handlerNext(totalPages, pageButtons)
});
refs.toEndButton.addEventListener('click', () => {
  handlerEnd(currentPage, totalPages, pageButtons);
});
refs.shoppingList.addEventListener('click', function (event) {
  handlerDelete(event, pageButtons, totalPages);
});