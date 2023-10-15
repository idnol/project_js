import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { clickToCategory } from './js/handlers';
import { listenerEventsModal } from './js/modal';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);


getTopBooks();
getCategoryList();
listenerEventsModal();
