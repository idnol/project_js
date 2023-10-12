import axios from 'axios';
// npm i axios - for all

import { createMarkup } from './markup';


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







const refs = {
    ul: document.querySelector('.categories'),

}
async function getCategoryList() {
    try {
        const result = await axios.get('https://books-backend.p.goit.global/books/category-list');
        console.log(result.data);
        return result.data;
    }
    catch (error) {
        console.log(error, 'error');
    }
}
getCategoryList()















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
