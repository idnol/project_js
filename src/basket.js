import { createBookFromSLocalStorageMarkup } from './js/shoppingListBookMarkup.js';
import { refs, toggleMenu, matchMedia } from './js/header';

const dataLocalarr = [
  {
    _id: '642fd89ac8cf5ee957f12361',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH - 1',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '6666y',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH -2 ',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '6665656',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH - 3',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '666роапрп6',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH -4',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '6666',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH - 5',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '6666тимбмти',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '666677',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH - 6',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
  {
    _id: '6666тьимьбтб',
    list_name: 'Middle Grade Paperback Monthly',
    date: '2023-04-07T08:46:57.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: "Barbara O'Connor",
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg',
    book_image_width: 330,
    book_image_height: 485,
    book_review_link: '',
    book_uri: 'nyt://book/46604242-8624-57d1-bdd4-424c21cde273',
    contributor: "by Barbara O'Connor",
    contributor_note: '',
    created_date: '2023-04-05 23:10:17',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '1250144051',
    primary_isbn13: '9781250144058',
    publisher: 'Square Fish',
    rank: 1,
    rank_last_week: 0,
    sunday_review_link: '',
    title: 'WISH - 7',
    updated_date: '2023-04-05 23:10:17',
    weeks_on_list: 0,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9781250144058?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT',
      },
    ],
    __v: 0,
  },
];

const shoppingList = document.querySelector('.shopping-list');
const pagination = document.querySelector('.pagination');
const KEY_BOOK = 'basket';
const booksPerPage = 3;
const toStartButton = document.querySelector('.pagination_btn-to-start');
const toPrevButton = document.querySelector('.pagination_btn-to-prev');
const toNextButton = document.querySelector('.pagination_btn-to-next');
const toEndButton = document.querySelector('.pagination_btn-to-end');
const localStorageBooks = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
const spanElements = pagination.querySelectorAll('span');
const firstSpan = spanElements[1];

let pageButtons = pagination.querySelectorAll('.page-btn');
let currentPage = 1;
let totalBooks = localStorageBooks.length;
let totalPages = Math.ceil(totalBooks / booksPerPage);
let paginationMarkup = '';

  if (currentPage > 1) {
  toStartButton.classList.remove('disabled');
}
  // localStorage.setItem(KEY_BOOK, JSON.stringify(dataLocalarr)); //test

function getBooksFromLocalStorage(key, currentPage, booksPerPage) {
  const localStorageBooks = JSON.parse(localStorage.getItem(key)) || [];
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = localStorageBooks.slice(startIndex, endIndex);
  return createBookFromSLocalStorageMarkup(booksToDisplay);
}

shoppingList.innerHTML = getBooksFromLocalStorage(
  KEY_BOOK,
  currentPage,
  booksPerPage
);
function updateStaticButtons() {
  if (currentPage === 1) {
    toStartButton.classList.add('disabled');
    toPrevButton.classList.add('disabled');
  } else {
    toStartButton.classList.remove('disabled');
    toPrevButton.classList.remove('disabled');
  }

  if (currentPage === totalPages) {
    toNextButton.classList.add('disabled');
    toEndButton.classList.add('disabled');
  } else {
    toNextButton.classList.remove('disabled');
    toEndButton.classList.remove('disabled');
  }
}
updateStaticButtons();
function updatePagination(totalPages, currentPage) {
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage ? 'active' : '';
    paginationMarkup += `<button class="page-btn ${isActive}" data-page="${i}">${i}</button>`;
  }
}
updatePagination(totalPages, currentPage);



//&    функція що отримує книги з локального сховища і створює розмітку
function getBooksFromLocalStorage(key) {
  const localStorageBooks = JSON.parse(localStorage.getItem(key)) ?? [];
  return createBookFromSLocalStorageMarkup(localStorageBooks);

  pagination.innerHTML = paginationMarkup;



firstSpan.insertAdjacentHTML('afterend', paginationMarkup);


pageButtons.forEach(button => {
  button.addEventListener('click', event => {
    const page = parseInt(event.target.dataset.page);
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    event.target.classList.add('active');
    currentPage = page;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      page,
      booksPerPage
    );
    console.log(totalPages, currentPage);
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
  });
});

}
updatePagination(totalPages,currentPage);


toStartButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage = 1;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );

    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    pageButtons[0].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});

toPrevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});
toNextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );
    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    pageButtons = pagination.querySelectorAll('.page-btn');
    pageButtons[currentPage - 1].classList.add('active');
    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});

toEndButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage = totalPages;
    shoppingList.innerHTML = getBooksFromLocalStorage(
      KEY_BOOK,
      currentPage,
      booksPerPage
    );

    pageButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    pageButtons[pageButtons.length - 1].classList.add('active');

    updatePagination(totalPages, currentPage);
    updateStaticButtons();
    currentPage = currentPage;
  }
});

function deleteBookFromLocalStorage(bookId) {
  const localStorageBooks = JSON.parse(localStorage.getItem(KEY_BOOK)) || [];
  const updatedBooks = localStorageBooks.filter(book => book._id !== bookId);
  const newTotalPages = Math.ceil(updatedBooks.length / booksPerPage);
  console.log(newTotalPages)

  localStorage.setItem(KEY_BOOK, JSON.stringify(updatedBooks));
  shoppingList.innerHTML = getBooksFromLocalStorage(KEY_BOOK);
  if (updatedBooks.length === 0) {
    shoppingList.innerHTML = createBookFromSLocalStorageMarkup(updatedBooks);
  }

  totalPages = Math.ceil(updatedBooks.length / booksPerPage);
  console.log(totalPages)

  if (newTotalPages < totalPages) {
    if (currentPage > 1) {
      currentPage--;
      const prevPageButton = pageButtons[currentPage - 1];
      
      pageButtons.forEach(btn => btn.classList.remove('active'));
      
      prevPageButton.classList.add('active');
    } else {
        totalPages = newTotalPages;

        if (totalPages === 0) {
          pagination.style.display = 'none';
        }
    }
    console.log(totalPages)
    const buttonIndex = totalPages - 1;
    if (buttonIndex >= 0 && buttonIndex < pageButtons.length) {
      pageButtons[buttonIndex].remove();
    }
    else {
      totalPages = newTotalPages;
    }
  
    
  }
  totalPages = newTotalPages; 
localStorage.setItem(KEY_BOOK, JSON.stringify(updatedBooks));
updatePagination(totalPages, currentPage);
shoppingList.innerHTML = getBooksFromLocalStorage(
  KEY_BOOK,
  currentPage,
  booksPerPage
);

updateStaticButtons();


}

shoppingList.addEventListener('click', function (event) {
  if (event.target.classList.contains('book_delete-btn')) {
    const bookId = event.target.dataset.id;
    deleteBookFromLocalStorage(bookId);
  } else if (event.target.closest('.book_delete-btn')) {
    const bookId = event.target.closest('.book_delete-btn').dataset.id;
    deleteBookFromLocalStorage(bookId);
  }
});
