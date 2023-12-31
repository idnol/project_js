function wrapLastWordTitle(categoryTitle) {
  const titleWords = categoryTitle.trim().split(' ');
  const lastTitleWord = titleWords[titleWords.length - 1];
  const addSpanToLastWord = document.createElement('span');
  addSpanToLastWord.textContent = lastTitleWord;
  titleWords[titleWords.length - 1] = addSpanToLastWord.outerHTML;
  return  titleWords.join(' ');
}

export { wrapLastWordTitle };
