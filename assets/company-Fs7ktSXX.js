import"./jquery-DgZYk2H_.js";import{H as y}from"./header-ARewE4Ia.js";import{g as l,b as u,c as _}from"./index.esm2017-bVxcYj8v.js";import{a as h}from"./firebase-vKibixlN.js";import{P as g}from"./preloader-995_IHTn.js";import{I as v}from"./isAuthorization-wZk79ahV.js";import"./index.esm2017-ZxaceZ0h.js";import"./index-dd468b12-T5X4n-5H.js";const t=document.querySelector(".company-company__wrapper");class f{app;db;productsArray;constructor(){this.app=h,this.db=l(this.app),this.productsArray=[]}async loadCards(){(await u(_(this.db,"hotels"))).forEach(r=>{const c=r.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const c=r,{name:n,price:s,img:a,date:i}=c;if(a&&Array.isArray(a)&&a.length>0){const{url:d,urlWebp:m}=a[0];let o=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${m} type="image/webp" />
            <img src=${d} alt="bg" />
          </picture>
          `;s[1]&&(o+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${s[1]}€</p>
            </div>
          </div>
            `),o+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="company-company__card-data">${i}</p>
          </div>
        </div>
        <p class="company-company__card-text">${n}</p>
      </div>
        `,t&&t.insertAdjacentHTML("beforeend",o)}})}}document.addEventListener("DOMContentLoaded",async function(){await new f().loadCards(),new y,new g,new v});
