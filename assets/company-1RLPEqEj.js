import"./jquery-DgZYk2H_.js";import{H as y}from"./header-ARewE4Ia.js";import{g as l,a as u,c as f}from"./index.esm2017-tAtnvxN7.js";import{i as g}from"./index.esm-RQMDg1fI.js";import{P as h}from"./preloader-995_IHTn.js";const _={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},s=document.querySelector(".company-company__wrapper");class b{app;db;productsArray;constructor(){this.app=g(_),this.db=l(this.app),this.productsArray=[]}async loadCards(){(await u(f(this.db,"hotels"))).forEach(r=>{const c=r.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const c=r,{name:n,price:o,img:a,date:d}=c;if(a&&Array.isArray(a)&&a.length>0){const{url:i,urlWebp:m}=a[0];let e=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${m} type="image/webp" />
            <img src=${i} alt="bg" />
          </picture>
          `;o[1]&&(e+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${o[1]}€</p>
            </div>
          </div>
            `),e+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="company-company__card-data">${d}</p>
          </div>
        </div>
        <p class="company-company__card-text">${n}</p>
      </div>
        `,s&&s.insertAdjacentHTML("beforeend",e)}})}}document.addEventListener("DOMContentLoaded",async function(){await new b().loadCards(),new y,new h});
