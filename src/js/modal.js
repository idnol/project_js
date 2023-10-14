export const listenerEventsModal = () => {
    console.log('click');
        document.querySelector("[data-modal='open']").addEventListener("click", toggleModal);
        document.querySelector(".module-close-btn").addEventListener("click", toggleModal);
};

function toggleModal() {
    document.querySelector(".js-modal").classList.toggle("hidden");
    document.body.classList.toggle("no-scroll");
    document.body.classList.toggle("color-body");
};

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        toggleModal()
    }}
    );

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