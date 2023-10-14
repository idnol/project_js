import { renderMarkup } from './books';
import { renderBookCard } from './book-markup';
function createMarkup(apiResponse) {
  const markup = apiResponse
    .map(({ books, list_name }) => {
<<<<<<< Updated upstream
      console.log(books);
      const book = renderBookCard(books, 'swiper-slide');
      return `<ul class="category-books">
          <h2 class="category-books">${list_name}</h2>
          <div class=" swiper mySwiper books-gallery-wrapp ">
            <ul class="swiper-wrapper books-gallery list ">
              ${book}
            </ul>
          </div>
=======
      const test = renderBookCard(books);
      return `<ul class="category-books">
          <h2 class="category-name">${list_name}</h2>
          <ul class="book-list">
              ${test}
          </ul>
>>>>>>> Stashed changes
          <button class="category-button" type="button" data-name="${list_name}">see more</button>
      </ul>`;
    })
    .join('');
  renderMarkup(markup);
}

export { createMarkup };
// function createMarkup(apiResponse) {
//   const markup = apiResponse
//     .map(({ books, list_name }) => {
//       const bookList = books
//         .map(({ list_name, book_image, title, author }) => {
//           return `
//         <li class="book " data-name="${list_name}">
//           <img class="book-img" src="${book_image}" alt="${title}" />
//           <h3 class="book-name">${title}</h3>
//           <p class="book-author">${author}</p>
//         </li>`;
//         })
//         .join('');
//       return `<ul class="category-books">
//           <h2 class="category-name">${list_name}</h2>
//           <ul class="book-list">
//               ${bookList}
//           </ul>
//           <button class="category-button" type="button" data-name="${list_name}">see more</button>
//       </ul>`;
//     })
//     .join('');
//   renderMarkup(markup);
// }
