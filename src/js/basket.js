import { getBook } from './api.js';
import { refs } from './refs.js';
import { renderCardModal } from './markup.js';
import { onModalBtnAddClick } from './handlers.js';

async function addToBasket(e, target) {
  const book = await getBook(target.dataset.id);
  refs.modalBtnAdd.dataset.id = book.data._id;
  refs.modalInfo.innerHTML = await renderCardModal(book.data);
  await getBooksFromBasket(book.data);
  refs.modalBtnAdd.removeEventListener('click', onModalBtnAddClick);
  refs.modalBtnAdd.addEventListener('click', onModalBtnAddClick);
}

async function setStorage(item) {
  const book = await item;
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  if (!basket.some(item => item._id === book._id)) {
    basket.push(book);
    setupRemove();
  }
  localStorage.setItem('basket', JSON.stringify(basket));
}

async function removeItemFromStorage(item) {
  const book = await item;
  const basket = JSON.parse(localStorage.getItem('basket'));
  const arr = basket.filter(item => item._id !== book._id);
  localStorage.setItem('basket', JSON.stringify(arr));
  setupAdd();
}

async function getBooksFromBasket(item) {
  const book = await item;
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  if (basket.some(item => item._id === book._id)) {
    setupRemove();
  } else {
    setupAdd();
  }
}

function setupRemove() {
  refs.modalBtnAdd.textContent = 'remove from the shopping list';
  refs.modalBtnAdd.classList.add('remove');
}

function setupAdd() {
  refs.modalBtnAdd.textContent = 'Add to shopping list';
  refs.modalBtnAdd.classList.remove('remove');
}

export { addToBasket, onModalBtnAddClick, setStorage, removeItemFromStorage };
