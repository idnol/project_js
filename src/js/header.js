// Mob-menu

const refs = {
  mobileMenu: document.querySelector('.js-mob-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),
};

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
let isMenuOpen = false;

refs.openMenuBtn.classList.remove('visually-hidden');

function toggleMenu() {
  refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  refs.mobileMenu.classList.toggle('is-open');
  refs.closeMenuBtn.classList.toggle('visually-hidden');
  refs.openMenuBtn.classList.toggle('visually-hidden');
}

export { toggleMenu, refs };

// Current-page

let currentURL = window.location.href;
let links = document.getElementsByTagName('a');

// function currentPage(e) {
//   e.preventDefault();

for (let link of links) {
  if (link.href === currentURL) {
    link.classList.add('current-page');
  } else {
    link.classList.remove('current-page');
  }
}
// }
