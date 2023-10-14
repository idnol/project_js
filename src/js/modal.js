export const listenerEventsModal = () => {
    [].forEach(li => {
        document.querySelectorAll(".js-modal").addEventListener("click", toggleModal);
    });

    [].forEach (x => {
        document.querySelectorAll("[data-modal='close']").addEventListener("click", toggleModal);
    });
};

function toggleModal() {
    document.querySelectorAll(".js-modal")[0].classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
    document.body.classList.toggle("color-body");
};

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        toggleModal()
    }}
    );

//   function renderMarkup(markup) {
//     refs.closeModalBtn.insertAdjacentHTML("afterend", markup);
//   }

//   const modal = renderCardModal()

//   renderMarkup(modal)


//   function renderCardModal(idBook) {
//     return idBook.map(({ list_name, author, book_image, amazon_product_url}) => {
//         return  `<div class="block-module-info">
//         <img src="${book_image}">
//         <h2></h2>
//         <p></p>
//         <p class="module-description"></p>
//         <a href=""></a>
//         </div>`
//     }).join('');
//   };