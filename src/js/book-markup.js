import { wrapLastWordTitle } from './category-books-title.js';

function renderBookCard(data, className) {
  const classSlider = className ?? '';
  const list = data
    .map(card => {
      return `  <li class="book-card ${classSlider}">
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

  return `<div class="books-gallery-wrapper">
            ${wrapLastWordTitle(data[0].list_name)}
            <div class='books-gallery list'>
              ${list}
            </div>
          </div>`;
}

export { renderBookCard };
