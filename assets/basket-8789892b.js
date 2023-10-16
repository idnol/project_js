import{r as i,s as B}from"./header-b4ffb857.js";function v(o){return o.length===0?`<li class="block-not-book">
            <h3 class="block-not-book_title">This page is empty, add some books and proceed to order.</h3>
            <div class='img'></div>
        </li>`:o.map(t=>`<li class="shopping-list_book-item book">
         <div class="book_image-block">   <img class="book_image" src="${t.book_image}"/></div>
            <div class="book_content">
            <div class="book_content-header">
            <div> <h2 class="book_title">${t.title}</h2>
            <p class="book_category">${t.list_name}</p></div>
            <button class="book_delete-btn"  data-id="${t._id}">
            <svg class="book_delete-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
            </div>
     ${t.description===""?'<p class="book_description">This book have not description,sorry</p>':`<p class="book_description">${t.description}</p>`}
            <div class="book_content-footer">
            <p class="book_author">${t.author}</p>
            <ul class="book_buy-links">
             ${t.buy_links.slice(0,2).map(e=>`
            <li class="book_buy-links_item">
                        <a target="_blank" href="${e.url}">
                            ${e.name==="Amazon"?'<img class="book_buy-links-svg amazon" src="./src/img/amazon.png" />':'<img class="book_buy-links-svg ibook" src="./src/img/ibook.png" />'}
                        </a>
                    </li>
                `).join("")}</ul>
            </div>
            </div>
            </li>
            `).join("")}function f(o,t,e){const n=JSON.parse(localStorage.getItem(o))||[],a=(t-1)*e,r=a+e;return n.slice(a,r)}document.querySelector(".pagination_btn-to-start");document.querySelector(".pagination_btn-to-prev");document.querySelector(".pagination_btn-to-next");document.querySelector(".pagination_btn-to-end");function $(o,t){}function d(o,t){let e="";for(let n=1;n<=o;n++)e+=`<button class="page-btn ${n===t?"active":""}" data-page="${n}">${n}</button>`;return e}const O=document.querySelector(".pagination");function E(o,t,e,n,a,r,k){const m=(JSON.parse(localStorage.getItem("basket"))||[]).filter(s=>s._id!==o),l=Math.ceil(m.length/e);if(l<a){t>1?t--:(a=l,a===0&&(O.style.display="none"));const s=n[t-1];n.forEach(x=>x.classList.remove("active")),s.classList.add("active"),console.log(a);const b=a;b>=0&&b<n.length?n[b].remove():a=l}if(a>l){const s=a-1;s>=0&&s<n.length&&n[s+1].remove()}a=l,localStorage.setItem("basket",JSON.stringify(m)),r(a,t);let _=f("basket",t,e),S=v(_);k.innerHTML=S}function T(o,t,e,n,a,r,k,y){o.forEach(m=>{m.addEventListener("click",l=>{const _=parseInt(l.target.dataset.page);o.forEach(b=>{b.classList.remove("active")}),l.target.classList.add("active"),t=_;let S=f(n,t,a),s=v(S);e.innerHTML=s,k(r,t),y()})})}function L(o,t,e){const n=f(t.KEY_BOOK,o,t.booksPerPage),a=v(n);t.shoppingList.innerHTML=a,e.forEach(r=>{r.classList.remove("active")})}function I(o,t,e){o<t&&(K(),o=t,L(o,i,e),e[e.length-1].classList.add("active"),h(t,page))}function A(o,t){let e=u();e<o&&(M(),q(),e++,L(e,i,t),t[e-1].classList.add("active"),h(o,e))}function w(o,t){let e=u();e>1&&(M(),q(),e--,L(e,i,t),t[e-1].classList.add("active"),h(o,e))}function D(o,t){let e=u();e>1&&(H(),e=1,L(1,i,t),t[0].classList.add("active"),h(o,e))}function N(o,t,e){if(o.target.classList.contains("book_delete-btn")){const n=o.target.dataset.id;E(n,u(),i.booksPerPage,t,e,d,i.shoppingList)}else if(o.target.closest(".book_delete-btn")){const n=o.target.closest(".book_delete-btn").dataset.id;E(n,u(),i.booksPerPage,t,e,d,i.shoppingList)}}function u(){let o=0;return document.querySelectorAll(".page-btn").forEach(t=>{t.classList.contains("active")&&(o=+t.dataset.page)}),o}function h(o,t){d(o,t)}function M(){document.querySelector(".pagination_btn-to-start").classList.remove("disabled"),document.querySelector(".pagination_btn-to-prev").classList.remove("disabled")}function H(){document.querySelector(".pagination_btn-to-start").classList.add("disabled"),document.querySelector(".pagination_btn-to-prev").classList.add("disabled")}function q(){document.querySelector(".pagination_btn-to-end").classList.remove("disabled"),document.querySelector(".pagination_btn-to-next").classList.remove("disabled")}function K(){document.querySelector(".pagination_btn-to-end").classList.add("disabled"),document.querySelector(".pagination_btn-to-next").classList.add("disabled")}B();const C=i.pagination.querySelectorAll("span"),F=C[1],j=JSON.parse(localStorage.getItem(i.KEY_BOOK))||[];let g=1,J=j.length,c=Math.ceil(J/i.booksPerPage);c>0&&(i.pagination.style.display="flex");let Y=f(i.KEY_BOOK,g,i.booksPerPage),z=v(Y);i.shoppingList.innerHTML=z;d(c,g);F.insertAdjacentHTML("afterend",d(c,g));let p=i.pagination.querySelectorAll(".page-btn");T(p,g,i.shoppingList,i.KEY_BOOK,i.booksPerPage,c,d,$);i.toStartButton.addEventListener("click",()=>{D(c,p)});i.toPrevButton.addEventListener("click",()=>{w(c,p)});i.toNextButton.addEventListener("click",()=>{A(c,p)});i.toEndButton.addEventListener("click",()=>{I(g,c,p)});i.shoppingList.addEventListener("click",function(o){N(o,p,c)});
