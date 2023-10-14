function renderMarkup(markup) {
  document
    .querySelector('.js-book-categories')
    .insertAdjacentHTML('beforeend', markup);
}

export { renderMarkup };
