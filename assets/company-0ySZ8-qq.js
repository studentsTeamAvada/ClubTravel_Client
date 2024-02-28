import{a as y,H as u}from"./header-wf8HbVZh.js";import{g as h,b as _,c as v}from"./index.esm2017-CVpEnNBY.js";const n=document.querySelector(".company-company__wrapper");class g{app;db;productsArray;constructor(){this.app=y,this.db=h(this.app),this.productsArray=[]}async loadCards(){(await _(v(this.db,"hotels"))).forEach(c=>{const a=c.data();a.id=c.id,this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const a=c,{name:r,price:e,img:t,date:p,id:i}=a;if(t&&Array.isArray(t)&&t.length>0){const{url:m,urlWebp:l}=t[0];let s=`
        <div class="company-company__card" data-id="${i}">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${l} type="image/webp" />
            <img src=${m} alt="bg" />
          </picture>
          `;e[1]&&(s+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${e[1]}€</p>
            </div>
          </div>
            `),s+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="company-company__card-data">${p}</p>
          </div>
        </div>
        <p class="company-company__card-text">${r}</p>
      </div>
        `,n&&n.insertAdjacentHTML("beforeend",s)}}),this.getTourId()}getTourId(){document.querySelectorAll(".company-company__card").forEach(c=>{const a=c;a.dataset.id&&a.addEventListener("click",()=>{const r=a.dataset.id;window.location.href=`https://club-travel.netlify.app/hotel.html?id=${r}`})})}}document.addEventListener("DOMContentLoaded",async function(){await new g().loadCards(),new u});
