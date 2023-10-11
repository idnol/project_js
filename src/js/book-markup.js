function renderBookCard(data) {
  return data
    .map(card => {
      return `<div class="book-card">
                <img class="book-image" src="${card.book_image}" alt="${card.title}" loading="lazy" />
                <div class="info">
    <p class="book-title">
      <b>${card.title}</b>
    </p>
    <p class="book-author">${card.author}</p>
  </div>
</div>`;
    })
    .join('');
}

export { renderBookCard };
