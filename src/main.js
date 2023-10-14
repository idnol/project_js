import { toggleMenu } from './js/header';
import { refs } from './js/refs.js';
import { getTopBooks, getCategoryList } from './js/api';
import { bookSlider } from './js/slider';

import { createMarkup } from './js/markup';

import { clickToCategory } from './js/handlers';
import { listenerEventsModal } from './js/modal';

refs.bookCategories.addEventListener('click', clickToCategory);
refs.sidebarCategories.addEventListener('click', clickToCategory);

bookSlider();
getTopBooks();
bookSlider();
getCategoryList();
listenerEventsModal();
