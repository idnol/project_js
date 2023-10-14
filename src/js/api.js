import axios from 'axios';
import { loadOn, loadOff } from './loader';
import { getCategoryMarkup, createMarkup } from './markup';
import { refs } from './refs.js';
async function getBooksForCategory(searchQuery) {
  try {
    const response = await axios.get(
      `${refs.API}/books/category?category=${searchQuery}`
    );
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
  loadOn();
  try {
    const apiInstance = await axios.get(`${refs.API}/books/top-books`);
    createMarkup(apiInstance.data);
    // return apiInstance.data;
  } catch (error) {
    console.error(error);
  } finally {
  }
}

async function getBook() {}

export { getBook, getBooksForCategory, getCategoryList, getTopBooks };
