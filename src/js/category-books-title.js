const booksCategoryTitle = document.querySelector('.books-category-title');

function categoryTitle(categoryTitle) {
  const titleWords = categoryTitle.split(' ');

  titleWords.forEach((word, index) => {
    const createSpan = document.createElement('span');

    if (index === 0 && titleWords.length === 2) {
      createSpan.style.color = 'black';
    } else {
      createSpan.style.color = 'blue';
    }

    if (index < 2 && titleWords.length > 2) {
      createSpan.style.color = 'black';
    }

    createSpan.textContent = word + ' ';
    booksCategoryTitle.appendChild(createSpan);
  });
}

export { categoryTitle };
