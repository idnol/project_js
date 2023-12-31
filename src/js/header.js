import { refs } from './refs.js';
import { closeMobileMenuToDesktop, toggleMenu } from './handlers.js';
// Mob-menu
refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);
window.addEventListener('resize', closeMobileMenuToDesktop);
refs.checkbox.addEventListener('change', toggleTheme);

let isMenuOpen = false;

refs.openMenuBtn.classList.remove('visually-hidden');

function matchMedia(event) {
  refs.mobileMenu.classList.remove('is-open');
  refs.closeMenuBtn.classList.add('visually-hidden');
  refs.openMenuBtn.classList.remove('visually-hidden');
}

// Current-page
let currentURL = window.location.href;
let links = document.getElementsByTagName('a');
const liHome = document.querySelector('.js-menu-item-home');
const liShop = document.querySelector('.js-menu-item-shop');

for (let link of links) {
  if (link.href === currentURL) {
    link.classList.add('current-page');
  } else {
    link.classList.remove('current-page');
  }
}

// let currentPath = window.location.pathname;
// let links = document.getElementsByTagName('a');

// for (let i = 0; i < links.length; i++) {
//   console.log(i);
//   if (links[i].pathname === currentPath) {
//     links[i].parentNode.classList.add('current');
//   } else {
//     links[i].parentNode.classList.remove('current');
//   }
// }

// dark theme
const theme = localStorage.getItem('theme') || 'light-theme';

if (theme === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.checkbox.checked = true;
}

function toggleTheme() {
  if (this.checked) {
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
  }
}

export { refs, toggleMenu, matchMedia, isMenuOpen };
