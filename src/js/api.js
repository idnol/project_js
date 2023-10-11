import axios from 'axios';

//npm i axios - for all

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

async function getBook() {}

export { getBook, getBooksForCategory, getCategoryList, getTopBooks };
