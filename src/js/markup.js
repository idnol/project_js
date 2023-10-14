import { renderMarkup } from './books';
import { renderBookCard } from './book-markup';
function createMarkup(apiResponse) {
  const markup = apiResponse
    .map(({ books, list_name }) => {
      console.log(books);
      const book = renderBookCard(books, 'swiper-slide');
      return `<ul class="category-books">
          <h2 class="category-books">${list_name}</h2>
          <div class=" swiper mySwiper books-gallery-wrapp ">
            <ul class="swiper-wrapper books-gallery list ">
              ${book}
            </ul>
          </div>
          <button class="category-button" type="button" data-name="${list_name}">see more</button>
      </ul>`;
    })
    .join('');
  renderMarkup(markup);
}

export { createMarkup };
