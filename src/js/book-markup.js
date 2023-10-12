function renderBookCard(data) {
  return data
    .map(card => {
      return `  <li class="book-card">
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
}

export { renderBookCard };
