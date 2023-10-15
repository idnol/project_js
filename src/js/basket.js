import { getBook } from './api.js';
import { refs } from './refs.js';
import { renderCardModal } from './markup.js';

async function addToBasket(e, target) {
    const book = await getBook(target.dataset.id)
    refs.modalInfo.innerHTML = await renderCardModal(book.data);
    refs.modalBtnAdd.addEventListener('click', async function(e) {
      await setStorage(book.data, e);
    })
}

async function setStorage(item, e) {
  console.log(e.target);
  const book = await item;
  const basket = JSON.parse(localStorage.getItem('basket')) || [];
  if (!basket.some(item => item._id === book._id)) {
    basket.push(book);
  }
  localStorage.setItem('basket', JSON.stringify(basket));

}


export {addToBasket}