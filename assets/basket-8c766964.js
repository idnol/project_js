import{r as i,s as w}from"./header-04f901f6.js";function h(o){return o.length===0?`<li class="block-not-book">
            <h3 class="block-not-book_title">This page is empty, add some books and proceed to order.</h3>
            <picture class="block-not-book_img">
  <source
    srcset="
      ./src/img/bg.png 1x,
      ./src/img/bg@2x.png 2x
    "
    media="(min-width: 768px)"
    width="322"
    height="241"
  />
            <source
              srcset="
                ./src/img/shopping-list.bg.png 1x,
                ./src/img/shopping-list.bg@2x.png 2x
              "
              media="(max-width: 767px)"
              width="265"
              height="172"
            />
  <img src="./src/img/shopping-list.bg.png" alt="books not found" width="265" />
</picture>
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
            `).join("")}function v(o,t,e){const n=JSON.parse(localStorage.getItem(o))||[],s=(t-1)*e,r=s+e;return n.slice(s,r)}document.querySelector(".pagination_btn-to-start");document.querySelector(".pagination_btn-to-prev");document.querySelector(".pagination_btn-to-next");document.querySelector(".pagination_btn-to-end");function B(o,t){}function d(o,t){let e="";for(let n=1;n<=o;n++)e+=`<button class="page-btn ${n===t?"active":""}" data-page="${n}">${n}</button>`;return e}const $=document.querySelector(".pagination");function x(o,t,e,n,s,r,k){const m=(JSON.parse(localStorage.getItem("basket"))||[]).filter(a=>a._id!==o),l=Math.ceil(m.length/e);if(l<s){t>1?t--:(s=l,s===0&&($.style.display="none"));const a=n[t-1];n.forEach(q=>q.classList.remove("active")),a.classList.add("active"),console.log(s);const g=s;g>=0&&g<n.length?n[g].remove():s=l}if(s>l){const a=s-1;a>=0&&a<n.length&&n[a+1].remove()}s=l,localStorage.setItem("basket",JSON.stringify(m)),r(s,t);let _=v("basket",t,e),S=h(_);k.innerHTML=S}function O(o,t,e,n,s,r,k,y){o.forEach(m=>{m.addEventListener("click",l=>{const _=parseInt(l.target.dataset.page);o.forEach(g=>{g.classList.remove("active")}),l.target.classList.add("active"),t=_;let S=v(n,t,s),a=h(S);e.innerHTML=a,k(r,t),y()})})}function f(o,t,e){const n=v(t.KEY_BOOK,o,t.booksPerPage),s=h(n);t.shoppingList.innerHTML=s,e.forEach(r=>{r.classList.remove("active")})}function T(o,t,e){o<t&&(K(),o=t,f(o,i,e),e[e.length-1].classList.add("active"),L(t,page))}function I(o,t){let e=b();e<o&&(E(),M(),e++,f(e,i,t),t[e-1].classList.add("active"),L(o,e))}function A(o,t){let e=b();e>1&&(E(),M(),e--,f(e,i,t),t[e-1].classList.add("active"),L(o,e))}function D(o,t){let e=b();e>1&&(H(),e=1,f(1,i,t),t[0].classList.add("active"),L(o,e))}function N(o,t,e){if(o.target.classList.contains("book_delete-btn")){const n=o.target.dataset.id;x(n,b(),i.booksPerPage,t,e,d,i.shoppingList)}else if(o.target.closest(".book_delete-btn")){const n=o.target.closest(".book_delete-btn").dataset.id;x(n,b(),i.booksPerPage,t,e,d,i.shoppingList)}}function b(){let o=0;return document.querySelectorAll(".page-btn").forEach(t=>{t.classList.contains("active")&&(o=+t.dataset.page)}),o}function L(o,t){d(o,t)}function E(){document.querySelector(".pagination_btn-to-start").classList.remove("disabled"),document.querySelector(".pagination_btn-to-prev").classList.remove("disabled")}function H(){document.querySelector(".pagination_btn-to-start").classList.add("disabled"),document.querySelector(".pagination_btn-to-prev").classList.add("disabled")}function M(){document.querySelector(".pagination_btn-to-end").classList.remove("disabled"),document.querySelector(".pagination_btn-to-next").classList.remove("disabled")}function K(){document.querySelector(".pagination_btn-to-end").classList.add("disabled"),document.querySelector(".pagination_btn-to-next").classList.add("disabled")}w();const C=i.pagination.querySelectorAll("span"),F=C[1],j=JSON.parse(localStorage.getItem(i.KEY_BOOK))||[];let u=1,J=j.length,c=Math.ceil(J/i.booksPerPage);c>0&&(i.pagination.style.display="flex");let Y=v(i.KEY_BOOK,u,i.booksPerPage),z=h(Y);i.shoppingList.innerHTML=z;d(c,u);F.insertAdjacentHTML("afterend",d(c,u));let p=i.pagination.querySelectorAll(".page-btn");O(p,u,i.shoppingList,i.KEY_BOOK,i.booksPerPage,c,d,B);i.toStartButton.addEventListener("click",()=>{D(c,p)});i.toPrevButton.addEventListener("click",()=>{A(c,p)});i.toNextButton.addEventListener("click",()=>{I(c,p)});i.toEndButton.addEventListener("click",()=>{T(u,c,p)});i.shoppingList.addEventListener("click",function(o){N(o,p,c)});
