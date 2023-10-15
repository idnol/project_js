import { createBookFromSLocalStorageMarkup } from './js/shoppingListBookMarkup.js';
import { refs, toggleMenu, matchMedia } from './js/header';

const shoppingList = document.querySelector('.shopping-list');
const pagination = document.querySelector('.pagination');
const KEY_BOOK = 'basket';
const booksPerPage = 3;
const toStartButton = document.querySelector('.pagination_btn-to-start');
const toPrevButton = document.querySelector('.pagination_btn-to-prev');
const toNextButton = document.querySelector('.pagination_btn-to-next');
const toEndButton = document.querySelector('.pagination_btn-to-end');
const localStorageBooks = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
const spanElements = pagination.querySelectorAll('span');

const firstSpan = spanElements[1];

let currentPage = 1;
let totalBooks = localStorageBooks.length;
let totalPages = Math.ceil(totalBooks / booksPerPage);
let paginationMarkup = '';
  if (currentPage > 1) {
  toStartButton.classList.remove('disabled');
}
function getBooksFromLocalStorage(key, currentPage, booksPerPage) {
  const localStorageBooks = JSON.parse(localStorage.getItem(key)) || [];
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = localStorageBooks.slice(startIndex, endIndex);
  return createBookFromSLocalStorageMarkup(booksToDisplay);
}
shoppingList.innerHTML = getBooksFromLocalStorage(
  KEY_BOOK,
  currentPage,
  booksPerPage
);

function updateStaticButtons() {
  if (currentPage === 1) {
    toStartButton.classList.add('disabled');
    toPrevButton.classList.add('disabled');
  } else {
    toStartButton.classList.remove('disabled');
    toPrevButton.classList.remove('disabled');
  }
  if (currentPage === totalPages) {
    toNextButton.classList.add('disabled');
    toEndButton.classList.add('disabled');
  } else {
    toNextButton.classList.remove('disabled');
    toEndButton.classList.remove('disabled');
  }
}
updateStaticButtons();
function updatePagination(totalPages, currentPage) {
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage ? 'active' : '';
    paginationMarkup += `<button class="page-btn ${isActive}" data-page="${i}">${i}</button>`;
  }

}
updatePagination(totalPages,currentPage)
firstSpan.insertAdjacentHTML('afterend', paginationMarkup);
let pageButtons = pagination.querySelectorAll('.page-btn');
console.log(pageButtons)
pageButtons.forEach(button => {
  button.addEventListener("click", event => {
    const page = parseInt(event.target.dataset.page);
    pageButtons.forEach(btn => {
      btn.classList.remove("active");
    });
    event.target.classList.add("active");
    currentPage = page;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      page,
      booksPerPage
    );
    console.log(totalPages, currentPage);
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  });
});


updatePagination(totalPages, currentPage);

toStartButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    pageButtons[0].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});
toPrevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});
toNextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    pageButtons = pagination.querySelectorAll('.page-btn');
    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});
toEndButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage = totalPages;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    pageButtons[pageButtons.length - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});
function deleteBookFromLocalStorage(bookId) {
  const localStorageBooks = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
  const updatedBooks = localStorageBooks.filter(book => book._id !== bookId);
  const newTotalPages = Math.ceil(updatedBooks.length / booksPerPage);
  console.log(newTotalPages)
  localStorage.setItem(KEY_BOOK, JSON.stringify(updatedBooks));
  shoppingList.innerHTML = getBooksFromLocalStorage(KEY_BOOK);
  if (updatedBooks.length === 0) {
    shoppingList.innerHTML = createBookFromSLocalStorageMarkup(updatedBooks);
  }
  totalPages = Math.ceil(updatedBooks.length / booksPerPage);
  console.log(totalPages)
  if (newTotalPages < totalPages) {
    if (currentPage > 1) {
      currentPage--;
      const prevPageButton = pageButtons[currentPage - 1];
      pageButtons.forEach(btn => btn.classList.remove('active'));
      prevPageButton.classList.add('active');
    } else {
        totalPages = newTotalPages;
        if (totalPages === 0) {
          pagination.style.display = 'none';
        }
    }
    console.log(totalPages)
    const buttonIndex = totalPages - 1;
    if (buttonIndex >= 0 && buttonIndex < pageButtons.length) {
      pageButtons[buttonIndex].remove();
    }
    else {
      totalPages = newTotalPages;
    }
  }
  totalPages = newTotalPages;
localStorage.setItem(KEY_BOOK, JSON.stringify(updatedBooks));
updatePagination(totalPages, currentPage);
shoppingList.innerHTML = getBooksFromLocalStorage(
  KEY_BOOK,
  currentPage,
  booksPerPage
);
updateStaticButtons();
}
shoppingList.addEventListener('click', function (event) {
  if (event.target.classList.contains('book_delete-btn')) {
    const bookId = event.target.dataset.id;
    deleteBookFromLocalStorage(bookId);
  } else if (event.target.closest('.book_delete-btn')) {
    const bookId = event.target.closest('.book_delete-btn').dataset.id;
    deleteBookFromLocalStorage(bookId);
  }
});