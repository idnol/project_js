import { renderMarkup } from './books';

function getCategoryMarkup(listResult) {
  const categoriesList = listResult
    .map(item => {
      return `<li class='categories-item js-category list' data-name='${item.list_name}'>${item.list_name}</li>`;
    })
    .join('');

  const markup = `

        <ul class='categories'>
        <li class="categories-item js-all list">All categories</li>
            ${categoriesList}
        </ul>`;

  return markup;
}

function createMarkup(apiResponse) {
  const markup = apiResponse
    .map(({ books, list_name }) => {
      const bookList = books
        .map(({ _id, book_image, title, author }) => {
          return `  <li class="book-card swiper-slide" data-id='${_id}'>
                  <div class="book-action">
                    <img
                      class="book-image"
                      src="${book_image}"
                      alt="${title}"
                      loading="lazy"
                    />
                    <div class="book-overlay">
                      <p class="overlay-text">quick view</p>
                    </div>
                    ;
                  </div>
                  <div class="info">
                    <p class="book-title">${title}</p>
                    <p class="book-author">${author}</p>
                  </div>
                </li>`;
        })
        .join('');
      return `<ul class="category-books">
              <h2 class="category-name">${list_name}</h2>
              <div class="books-gallery list swiper mySwiper">
              <ul class="swiper-wrapper">
                  ${bookList}
                  </ul>
              </div>
              <button class="category-button js-category-button" type="button" data-name="${list_name}">see more</button>
          </ul>`;
    })
    .join('');
  renderMarkup(markup);
}

async function renderCardModal(idBook) {
  const book = await idBook;

  return  `<img class="modal-book-image" src="${book.book_image}">
          <div class="block-info">
          <h2>${book.title}</h2>
          <p class="author">${book.author}</p>
          <p class="module-description">${book.description}</p>
          <a class="amazon" href="${book.amazon_product_url}"><img class="amazon-m" src="../img/amazon-img-m.png"></a>
          <a class="book" href=""><img class="book-link-m" src="../img/book-image-m.png"></a>
          </div>`
}

export { createMarkup, getCategoryMarkup, renderCardModal };
