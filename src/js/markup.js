    import { renderMarkup } from './books';
 
function getCategoryMarkup(listResult) {
    const categoriesList = listResult.map(item => {
        return `<li class='categories-item js-category list'>${item.list_name}</li>`;
    }).join('');

    const markup = `
        <p class="all-category-link">All categories</p>
        <ul class='categories'>
            ${categoriesList}
        </ul>`;
    
    return markup;
}
















function createMarkup(apiResponse) {
      const markup = apiResponse
        .map(({ books, list_name }) => {
          const bookList = books
            .map(({ list_name, book_image, title, author }) => {
              return `
            <li class="book" data-name="${list_name}">
              <img class="book-img" src="${book_image}" alt="${title}" />
              <h3 class="book-name">${title}</h3>
              <p class="book-author">${author}</p>
            </li>`;
            })
            .join('');
          return `<ul class="category-books">
              <h2 class="category-name">${list_name}</h2>
              <ul class="book-list">
                  ${bookList}
              </ul>
              <button class="category-button" type="button" data-name="${list_name}">see more</button>
          </ul>`;
        })
        .join('');
      renderMarkup(markup);
    }

    export { createMarkup, getCategoryMarkup };
