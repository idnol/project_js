const toStartButton = document.querySelector('.pagination_btn-to-start');
const toPrevButton = document.querySelector('.pagination_btn-to-prev');
const toNextButton = document.querySelector('.pagination_btn-to-next');
const toEndButton = document.querySelector('.pagination_btn-to-end');

function updateStaticButtons(currentPage, totalPages) {
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


  function updatePagination(totalPages, currentPage) {
    let paginationMarkup = '';

    for (let i = 1; i <= totalPages; i++) {
      const isActive = i === currentPage ? 'active' : '';
      paginationMarkup += `<button class="page-btn ${isActive}" data-page="${i}">${i}</button>`;
    }

    return paginationMarkup;
  }

export{updateStaticButtons,updatePagination}