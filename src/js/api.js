import axios from 'axios';
// npm i axios - for all

import { createMarkup } from './markup';
import { getCategoryMarkup } from './markup';


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


async function getCategoryList() {
    try {
        const div = document.querySelector('.categories-wrapper')
        const result = await axios.get('https://books-backend.p.goit.global/books/category-list');
        const categoriesMarkup = getCategoryMarkup(result.data);
        div.insertAdjacentHTML('beforebegin', categoriesMarkup);
    } catch (error) {
        console.log(error, 'error');
    }
}

getCategoryList();











async function getTopBooks() {
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
