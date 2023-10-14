import { wrapLastWordTitle } from './category-books-title.js';

function renderBookCard(data, className) {
  const classSlider = className ?? '';
  const list = data
    .map(card => {
      return `  <li class="book-card ${classSlider}" data-modal='open'>
                  <div class="book-action">
                    <img
                      class="book-image"
                      src="${card.book_image}"
                      alt="${card.title}"
                      loading="lazy"
                    />
                    <div class="book-card-overlay">
                      <p class="overlay-text">quick view</p>
                    </div>
                    ;
                  </div>
                  <div class="info">
                    <p class="book-title">${card.title}</p>
                    <p class="book-author">${card.author}</p>
                  </div>
                </li>`;
    })
    .join('');
  const title = wrapLastWordTitle(data[0].list_name);

  return  `<div class="books-gallery-wrapper js-category-list">
            <h2 class='books-category-title'>${title}</h2>
            <div class='books-gallery list'>
              ${list}
            </div>
          </div>`;
}

export { renderBookCard };
