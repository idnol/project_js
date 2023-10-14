
import { renderMarkup } from './books';
import { renderBookCard } from './book-markup';
function createMarkup(apiResponse) {
  const markup = apiResponse
    .map(({ books, list_name }) => {
      const book = renderBookCard(books, 'swiper-slide');
      return `<ul class="category-books">
          <h2 class="category-books">${list_name}</h2>
          <div class=" swiper mySwiper books-gallery-wrapp ">
            <ul class="swiper-wrapper books-gallery list ">
              ${book}
            </ul>
          </div>
      const test = renderBookCard(books);
      return `<ul class="category-books">
          <h2 class="category-name">${list_name}</h2>
          <ul class="book-list">
              ${test}
          </ul>
          <button class="category-button" type="button" data-name="${list_name}">see more</button>
      </ul>`;
    })
    .join('');
  renderMarkup(markup);
}

export { createMarkup };
    import { renderMarkup } from './books';
 
function getCategoryMarkup(listResult) {
    const categoriesList = listResult.map(item => {
        return `<li class='categories-item js-category list'>${item.list_name}</li>`;
    }).join('');

    const markup = `
        
        <ul class='categories'>
        <li class="categories-item js-category list">All categories</li>
            ${categoriesList}
        </ul>`;
    
    return markup;
}

    export { createMarkup, getCategoryMarkup };

