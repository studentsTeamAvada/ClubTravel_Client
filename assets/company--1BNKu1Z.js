import{H as y}from"./header-9Fuft6xP.js";import{g as l,a as u,c as _}from"./index.esm2017-HY_ETrW2.js";import{a as h}from"./firebase-F47n0dmT.js";import{P as g}from"./preloader-U3P-yeaR.js";const t=document.querySelector(".company-company__wrapper");class v{app;db;productsArray;constructor(){this.app=h,this.db=l(this.app),this.productsArray=[]}async loadCards(){(await u(_(this.db,"hotels"))).forEach(c=>{const r=c.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const r=c,{name:n,price:s,img:a,date:d}=r;if(a&&Array.isArray(a)&&a.length>0){const{url:i,urlWebp:m}=a[0];let o=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${m} type="image/webp" />
            <img src=${i} alt="bg" />
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
            <p class="company-company__card-data">${d}</p>
          </div>
        </div>
        <p class="company-company__card-text">${n}</p>
      </div>
        `,t&&t.insertAdjacentHTML("beforeend",o)}})}}document.addEventListener("DOMContentLoaded",async function(){await new v().loadCards(),new y,new g});
