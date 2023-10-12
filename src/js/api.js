import axios from 'axios';
//npm i axios - for all
import { createMarkup } from './markup';
async function getCategoryList() {}

async function getCategoryList() {}

async function getTopBooks() {}

async function getBooksForCategory(searchQuery) {
  try {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${searchQuery}`
    );
    return response.data;
  } catch (error) {
    console.log(error, 'error');
  }
}

async function getTopBooks() {}

async function getBooksForCategory() {
  const API_TOP_BOOKS = 'https://books-backend.p.goit.global/books/top-books';
  try {
    const apiInstance = await axios.get(`${API_TOP_BOOKS}`);
    createMarkup(apiInstance.data);
  } catch (error) {
    console.error(error);
  }
}

async function getBook() {}

export { getBook, getBooksForCategory, getCategoryList, getTopBooks };
