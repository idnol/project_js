import {refs} from './refs.js';
import { renderAllBooksInCategory } from './all-category-books.js';
import { getTopBooks, getBook } from './api.js';

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

// MODAL WINDOW
 
async function handlerBookClick(e) {
  const blockRender = document.querySelector('.block-module-info');

  if (blockRender) {
   blockRender.innerHTML = '';
  };

  const target = await e.target.closest('li')

    target.addEventListener('click', toggleModal)
    const dynamicBookId = await getBook(target.dataset.id)
    const title = dynamicBookId.data.title

    const readyRender = await renderCardModal([dynamicBookId]);
    refs.moduleBtnAdd.insertAdjacentHTML('afterend', readyRender);
   };

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
      toggleModal()
  }
  window.removeEventListener('keydown');
});


function toggleModal() {
  document.querySelector(".js-modal").classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
  document.body.classList.toggle("color-body");
};
refs.modalClose.addEventListener("click", toggleModal)

function renderCardModal(idBook) {
    return idBook.map(({ data:{ book_image, author, amazon_product_url, description, title, } }) => {
        return  `<div class="block-module-info">
        <img class="modal-book-image" src="${book_image}">
        <ul class="block-info">
        <h2>${title}</h2>
        <p class="author">${author}</p>
        <p class="module-description">${description}</p>
        <a class="amazon" href="${amazon_product_url}"><svg class="svg-amazon"><use class="styles-amazon" href='../img/image-amazon.svg'></use> </svg></a>
        <a class="book" href=""><svg class="svg-amazon"><use class="styles-amazon" href='../img/book-image.svg'></use> </svg></a>
        </ul>
        </div>`
    }).join('');
  };


export {clickToCategory, handlerBookClick}