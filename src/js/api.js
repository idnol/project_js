import axios from 'axios';
import { getCategoryMarkup, createMarkup } from './markup';
import { sliderBook } from './slider';
import { refs } from './refs.js';
import { Spinner } from 'spin.js';
import { opts } from './spinner.js';
async function getBooksForCategory(searchQuery) {
  try {
    var spinner = new Spinner(opts).spin(refs.books);
    const response = await axios.get(
      `${refs.API}/books/category?category=${searchQuery}`
    );
    spinner.stop();
    return response.data;
  } catch (error) {
    console.log(error, 'error');
  }
}

async function getCategoryList() {
  try {
    const result = await axios.get(`${refs.API}/books/category-list`);
    refs.sidebarCategories.insertAdjacentHTML(
      'beforeend',
      getCategoryMarkup(result.data)
    );
  } catch (error) {
    console.log(error, 'error');
  }
}

async function getTopBooks() {
  try {
    var spinner = new Spinner(opts).spin(refs.books);
    const apiInstance = await axios.get(`${refs.API}/books/top-books`);
    createMarkup(apiInstance.data);
    sliderBook();
    spinner.stop();
  } catch (error) {
    console.error(error);
  }
}

async function getBook(bookId) {
    try {
        const GET_BOOK_ID = `https://books-backend.p.goit.global/books/${bookId}`;
        return await axios.get(GET_BOOK_ID);
    } catch (error) {
        console.log(error);
    };
}

export { getBook, getBooksForCategory, getCategoryList, getTopBooks };
