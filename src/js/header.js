// Mob-menu

import { refs } from './refs';

const refs = {
  mobileMenu: document.querySelector('.js-mob-menu'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),

  changeThemeBtn: document.querySelector('.switch-input'),
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

export { toggleMenu };

window.addEventListener('resize', matchMedia);

function matchMedia(event) {
  if (window.innerWidth > 768) {
    // закрити меню
    refs.mobileMenu.classList.remove('is-open');
    refs.closeMenuBtn.classList.add('visually-hidden');
    refs.openMenuBtn.classList.remove('visually-hidden');
  }
}

export { refs, toggleMenu, matchMedia };

// Current-page

let currentURL = window.location.href;
let links = document.getElementsByTagName('a');
const itemList = document.querySelector('.menu-item');

// console.log(currentURL);
// console.log(links);

for (let link of links) {
  if (link.href === currentURL) {
    link.classList.add('current-page');
  } else {
    link.classList.remove('current-page');
  }
}

// dark-theme
