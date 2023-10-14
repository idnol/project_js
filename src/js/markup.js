    import { renderMarkup } from './books';

function getCategoryMarkup(listResult) {
    const categoriesList = listResult.map(item => {
        return `<li class='categories-item js-category list' data-name='${item.list_name}'>${item.list_name}</li>`;
    }).join('');

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
          console.log(books);
          const bookList = books
            .map(({_id, list_name, book_image, title, author }) => {
              return `
                      <li class="book book-card" data-name="${list_name}" data-id='${_id}'>
                        <div class="book-action">
                          <img
                            class="book-image"
                            src="${book_image}"
                            alt="${title}"
                            loading="lazy"
                          />
                          <div class="book-card-overlay">
                            <p class="overlay-text">quick view</p>
                          </div>
                        </div>
                        <div class="info">
                          <p class="book-title">${title}</p>
                          <p class="book-author">${author}</p>
                        </div>
                      </li>`
            }).join('');
          return `<ul class="category-books">
              <h2 class="category-name">${list_name}</h2>
              <ul class="book-list list">
                  ${bookList}
              </ul>
              <button class="category-button js-category-button" type="button" data-name="${list_name}">see more</button>
          </ul>`;
        })
        .join('');
      renderMarkup(markup);
    }

    export { createMarkup, getCategoryMarkup };
