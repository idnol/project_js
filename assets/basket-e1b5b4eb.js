import{r as n,s as O}from"./header-1755a57b.js";function v(o){return o.length===0?`<li class="block-not-book">
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
            `).join("")}function f(o,t,e){const i=JSON.parse(localStorage.getItem(o))||[],a=(t-1)*e,r=a+e;return i.slice(a,r)}document.querySelector(".pagination_btn-to-start");document.querySelector(".pagination_btn-to-prev");document.querySelector(".pagination_btn-to-next");document.querySelector(".pagination_btn-to-end");function T(o,t){}function d(o,t){let e="";for(let i=1;i<=o;i++)e+=`<button class="page-btn ${i===t?"active":""}" data-page="${i}">${i}</button>`;return e}const I=document.querySelector(".pagination");function M(o,t,e,i,a,r,k){const m=(JSON.parse(localStorage.getItem("basket"))||[]).filter(s=>s._id!==o),l=Math.ceil(m.length/e);if(l<a){t>1?t--:(a=l,a===0&&(I.style.display="none"));const s=i[t-1];i.forEach($=>$.classList.remove("active")),s.classList.add("active"),console.log(a);const b=a;b>=0&&b<i.length?i[b].remove():a=l}if(a>l){const s=a-1;s>=0&&s<i.length&&i[s+1].remove()}a=l,localStorage.setItem("basket",JSON.stringify(m)),r(a,t);let S=f("basket",t,e),y=v(S);k.innerHTML=y}function A(o,t,e,i,a,r,k,E){o.forEach(m=>{m.addEventListener("click",l=>{const S=parseInt(l.target.dataset.page);o.forEach(b=>{b.classList.remove("active")}),l.target.classList.add("active"),t=S;let y=f(i,t,a),s=v(y);e.innerHTML=s,k(r,t),E()})})}function _(o,t,e){const i=f(t.KEY_BOOK,o,t.booksPerPage),a=v(i);t.shoppingList.innerHTML=a,e.forEach(r=>{r.classList.remove("active")})}function w(o,t,e){o<t&&(B(),q(),o=t,_(o,n,e),e[e.length-1].classList.add("active"),L(t,page))}function D(o,t){let e=u();e<o&&(e+1<o?(q(),h()):B(),e++,_(e,n,t),t[e-1].classList.add("active"),L(o,e))}function N(o,t){let e=u();e>1&&(e-1>1?(q(),h()):x(),e--,_(e,n,t),t[e-1].classList.add("active"),L(o,e))}function H(o,t){let e=u();e>1&&(x(),h(),e=1,_(1,n,t),t[0].classList.add("active"),L(o,e))}function K(o,t,e){if(o.target.classList.contains("book_delete-btn")){const i=o.target.dataset.id;M(i,u(),n.booksPerPage,t,e,d,n.shoppingList)}else if(o.target.closest(".book_delete-btn")){const i=o.target.closest(".book_delete-btn").dataset.id;M(i,u(),n.booksPerPage,t,e,d,n.shoppingList)}}function u(){let o=0;return document.querySelectorAll(".page-btn").forEach(t=>{t.classList.contains("active")&&(o=+t.dataset.page)}),o}function L(o,t){d(o,t)}function q(){document.querySelector(".pagination_btn-to-start").classList.remove("disabled"),document.querySelector(".pagination_btn-to-prev").classList.remove("disabled")}function x(){document.querySelector(".pagination_btn-to-start").classList.add("disabled"),document.querySelector(".pagination_btn-to-prev").classList.add("disabled")}function h(){console.log(document.querySelector(".pagination_btn-to-end")),console.log(document.querySelector(".pagination_btn-to-next")),document.querySelector(".pagination_btn-to-end").classList.remove("disabled"),document.querySelector(".pagination_btn-to-next").classList.remove("disabled")}function B(){document.querySelector(".pagination_btn-to-end").classList.add("disabled"),document.querySelector(".pagination_btn-to-next").classList.add("disabled")}O();const C=n.pagination.querySelectorAll("span"),F=C[1],j=JSON.parse(localStorage.getItem(n.KEY_BOOK))||[];let g=1,J=j.length,c=Math.ceil(J/n.booksPerPage);c>0&&(n.pagination.style.display="flex",h());let Y=f(n.KEY_BOOK,g,n.booksPerPage),z=v(Y);n.shoppingList.innerHTML=z;d(c,g);F.insertAdjacentHTML("afterend",d(c,g));let p=n.pagination.querySelectorAll(".page-btn");A(p,g,n.shoppingList,n.KEY_BOOK,n.booksPerPage,c,d,T);n.toStartButton.addEventListener("click",()=>{H(c,p)});n.toPrevButton.addEventListener("click",()=>{N(c,p)});n.toNextButton.addEventListener("click",()=>{D(c,p)});n.toEndButton.addEventListener("click",()=>{w(g,c,p)});n.shoppingList.addEventListener("click",function(o){K(o,p,c)});
