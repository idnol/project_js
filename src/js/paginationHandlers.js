import { getBooksFromLocalStorage } from './getBooksFromLocalStorage.js';
import { createBookFromSLocalStorageMarkup } from './shoppingListBookMarkup.js';

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
  

  export { handlePageButtonClick };
  