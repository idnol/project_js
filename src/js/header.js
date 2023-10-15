import { refs } from './refs.js';
// Mob-menu

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

window.addEventListener('resize', matchMedia);

function matchMedia(event) {
  if (window.innerWidth > 768) {
    // закрити меню
    refs.mobileMenu.classList.remove('is-open');
    refs.closeMenuBtn.classList.add('visually-hidden');
    refs.openMenuBtn.classList.remove('visually-hidden');
  }
}

// Current-page

let currentURL = window.location.href;
let links = document.getElementsByTagName('a');

for (let link of links) {
  if (link.href === currentURL) {
    link.classList.add('current-page');
  } else {
    link.classList.remove('current-page');
  }
}

// dark theme

const theme = localStorage.getItem('theme') || 'light-theme';

refs.checkbox.addEventListener('change', toggleTheme);

if (theme === 'dark-theme') {
  refs.body.classList.add('dark-theme');
  refs.checkbox.checked = true;
}

function toggleTheme() {
  if (this.checked) {
    refs.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
    // refs.checkbox.checked = true;
  } else {
    refs.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
    // refs.checkbox.checked = false;
  }
}

export { refs, toggleMenu, matchMedia };
