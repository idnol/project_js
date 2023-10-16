function createBookFromSLocalStorageMarkup(arr) {
  if (arr.length === 0) {
    return `<li class="block-not-book">
            <h3 class="block-not-book_title">This page is empty, add some books and proceed to order.</h3>
            <picture class="block-not-book_img">
  <source
    srcset="
      ./src/img/bg.png 1x,
      ./src/img/bg@2x.png 2x
    "
    media="(min-width: 768px)"
    width="322"
    height="241"
  />
            <source
              srcset="
                ./src/img/shopping-list.bg.png 1x,
                ./src/img/shopping-list.bg@2x.png 2x
              "
              media="(max-width: 767px)"
              width="265"
              height="172"
            />
  <img src="./src/img/shopping-list.bg.png" alt="books not found" width="265" />
</picture>
        </li>`;
  } else {
    return arr
      .map(book => {
        return `<li class="shopping-list_book-item book">
         <div class="book_image-block">   <img class="book_image" src="${
           book.book_image
         }"/></div>
            <div class="book_content">
            <div class="book_content-header">
            <div> <h2 class="book_title">${book.title}</h2>
            <p class="book_category">${book.list_name}</p></div>
            <button class="book_delete-btn"  data-id="${book._id}">
            <svg class="book_delete-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
            </div>
     ${
       book.description === ''
         ? '<p class="book_description">This book have not description,sorry</p>'
         : `<p class="book_description">${book.description}</p>`
     }
            <div class="book_content-footer">
            <p class="book_author">${book.author}</p>
            <ul class="book_buy-links">
             ${book.buy_links
               .slice(0, 2)
               .map(
                 link => `
            <li class="book_buy-links_item">
                        <a target="_blank" href="${link.url}">
                            ${
                              link.name === 'Amazon'
                                ? '<img class="book_buy-links-svg amazon" src="./src/img/amazon.png" />'
                                : '<img class="book_buy-links-svg ibook" src="./src/img/ibook.png" />'
                            }
                        </a>
                    </li>
                `
               )
               .join('')}</ul>
            </div>
            </div>
            </li>
            `;
      })
      .join('');
  }
}
export { createBookFromSLocalStorageMarkup };
