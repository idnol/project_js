import { getBooksFromLocalStorage } from "./getBooksFromLocalStorage";
import { createBookFromSLocalStorageMarkup } from "./shoppingListBookMarkup";
import { updateStaticButtons } from "./updatePagination";
const pagination = document.querySelector('.pagination');

function deleteBookFromLocalStorage(bookId, currentPage, booksPerPage, pageButtons,totalPages,updatePagination,shoppingList) {
    const localStorageBooks = JSON.parse(localStorage.getItem('basket')) || [];
    const updatedBooks = localStorageBooks.filter(book => book._id !== bookId);
    const newTotalPages = Math.ceil(updatedBooks.length / booksPerPage);
    
  if (newTotalPages < totalPages) {
    if (currentPage > 1) {
        currentPage--;

      } else {
        totalPages = newTotalPages;
        if (totalPages === 0) {
          pagination.style.display = 'none';
        }
      }
      const prevPageButton = pageButtons[currentPage - 1];
      pageButtons.forEach(btn => btn.classList.remove('active'));
      prevPageButton.classList.add('active');
      console.log(totalPages)
      const buttonIndex = totalPages ;
      if (buttonIndex >= 0 && buttonIndex < pageButtons.length) {
        pageButtons[buttonIndex].remove();
          }
      else {
        totalPages = newTotalPages;
        
      }
    }
    if (totalPages > newTotalPages) {
        const buttonIndex = totalPages - 1;
        if (buttonIndex >= 0 && buttonIndex < pageButtons.length) {
          pageButtons[buttonIndex+1].remove();
        }
      }
      
      totalPages = newTotalPages;

  localStorage.setItem('basket', JSON.stringify(updatedBooks));
    updatePagination(totalPages, currentPage);
    let updatedBookArr = getBooksFromLocalStorage(
        "basket",
        currentPage,
        booksPerPage
      );
      let createNewMarkupBook = createBookFromSLocalStorageMarkup(updatedBookArr)
    shoppingList.innerHTML = createNewMarkupBook;
    updateStaticButtons();
}
  
  export { deleteBookFromLocalStorage };
  