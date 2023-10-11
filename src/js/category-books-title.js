const booksCategoryTitle = document.querySelector('.books-category-title');

function categoryTitle(categoryTitle) {
  const titleWords = categoryTitle.split(' ');

  titleWords.forEach((word, index) => {
    const createSpan = document.createElement('span');

    if (index === titleWords.length - 1) {
      createSpan.style.color = 'blue';
    }

    createSpan.textContent = word + ' ';
    booksCategoryTitle.appendChild(createSpan);
  });
}

export { categoryTitle };
