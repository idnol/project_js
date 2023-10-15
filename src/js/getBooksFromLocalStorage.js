
function getBooksFromLocalStorage(key, currentPage, booksPerPage,) {
    const localStorageBooks = JSON.parse(localStorage.getItem(key)) || [];
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = localStorageBooks.slice(startIndex, endIndex);

    return booksToDisplay;
  }


  
  export { getBooksFromLocalStorage };
  