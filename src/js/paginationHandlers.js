import { getBooksFromLocalStorage } from './getBooksFromLocalStorage.js';
import { createBookFromSLocalStorageMarkup } from './shoppingListBookMarkup.js';
import { refs } from './refs.js';
import { updatePagination, updateStaticButtons } from './updatePagination.js';
import { deleteBookFromLocalStorage } from './deleteBookFRomLocalStorage.js';

function handlePageButtonClick(pageButtons, currentPage, shoppingList, KEY_BOOK, booksPerPage, totalPages, updatePagination, updateStaticButtons) {
    pageButtons.forEach(button => {
      button.addEventListener("click", event => {
        const page = parseInt(event.target.dataset.page);
        pageButtons.forEach(btn => {
          btn.classList.remove("active");
        });
        event.target.classList.add("active");
        currentPage = page;
        let updatedBooks = getBooksFromLocalStorage(KEY_BOOK, currentPage, booksPerPage);
        let createUpdatedMarkup = createBookFromSLocalStorageMarkup(updatedBooks)
        shoppingList.innerHTML = createUpdatedMarkup;
        updatePagination(totalPages, currentPage);
        updateStaticButtons();
      });
    });
  }

function updateShoppingListAndPagination(currentPage, refs, pageButtons) {
  const bookToDisplay = getBooksFromLocalStorage(refs.KEY_BOOK, currentPage, refs.booksPerPage);
  const createMarkupFromLocal = createBookFromSLocalStorageMarkup(bookToDisplay);
  refs.shoppingList.innerHTML = createMarkupFromLocal;
  pageButtons.forEach(btn => {
    btn.classList.remove('active');
  });
}

function handlerEnd(currentPage, totalPages, pageButtons) {
  if (currentPage < totalPages) {
    currentPage = totalPages;
    updateShoppingListAndPagination(currentPage, refs, pageButtons);
    pageButtons[pageButtons.length - 1].classList.add('active');
    updateAllPaginationBtn(totalPages, page)
  }
}

function handlerNext(totalPages, pageButtons) {
  let page = getPage();
  if (page < totalPages) {
    page++;
    updateShoppingListAndPagination(page, refs, pageButtons);
    pageButtons[page - 1].classList.add('active');
    updateAllPaginationBtn(totalPages, page)
  }
}

function handlerPrev(totalPages, pageButtons) {
  let page = getPage();
  if (page > 1) {
    page--;
    updateShoppingListAndPagination(page, refs, pageButtons);
    pageButtons[page - 1].classList.add('active');
    updateAllPaginationBtn(totalPages, page)
  }
}
function handlerStart(totalPages, pageButtons) {
  let page = getPage();
  if (page > 1) {
    page = 1;
    updateShoppingListAndPagination(1, refs, pageButtons);
    pageButtons[0].classList.add('active');
    updateAllPaginationBtn(totalPages, page)
  }
}

function handlerDelete(event, pageButtons, totalPages) {
  if (event.target.classList.contains('book_delete-btn')) {
    const bookId = event.target.dataset.id;
    deleteBookFromLocalStorage(bookId, getPage(), refs.booksPerPage, pageButtons, totalPages, updatePagination, refs.shoppingList);
  } else if (event.target.closest('.book_delete-btn')) {
    const bookId = event.target.closest('.book_delete-btn').dataset.id;
    deleteBookFromLocalStorage(bookId, getPage(), refs.booksPerPage, pageButtons, totalPages, updatePagination,refs.shoppingList);
  }
}

function getPage() {
  let page = 0;
  document.querySelectorAll('.page-btn').forEach(item => {
    if (item.classList.contains('active')) {
      page = +item.dataset.page;
    }
  })
  return page;
}

function updateAllPaginationBtn(totalPages, page) {
  updatePagination(totalPages, page);
  updateStaticButtons();
}

export { handlePageButtonClick, updateShoppingListAndPagination, handlerEnd, handlerNext, handlerPrev, handlerStart, handlerDelete };
