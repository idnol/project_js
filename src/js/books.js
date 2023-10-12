const topBooksList = document.querySelector('.books-wrapper');

function renderMarkup(markup) {
  topBooksList.insertAdjacentHTML('beforeend', markup);
}

export { renderMarkup };
