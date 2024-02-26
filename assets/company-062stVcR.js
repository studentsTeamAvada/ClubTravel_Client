import{a as y,H as l}from"./header-l2PKyRFo.js";import{g as u,a as _,c as h}from"./index.esm2017-nCL31Hf9.js";const t=document.querySelector(".company-company__wrapper");class g{app;db;productsArray;constructor(){this.app=y,this.db=u(this.app),this.productsArray=[]}async loadCards(){(await _(h(this.db,"hotels"))).forEach(c=>{const r=c.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const r=c,{name:n,price:o,img:a,date:d}=r;if(a&&Array.isArray(a)&&a.length>0){const{url:i,urlWebp:m}=a[0];let s=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${m} type="image/webp" />
            <img src=${i} alt="bg" />
          </picture>
          `;o[1]&&(s+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${o[1]}€</p>
            </div>
          </div>
            `),s+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="company-company__card-data">${d}</p>
          </div>
        </div>
        <p class="company-company__card-text">${n}</p>
      </div>
        `,t&&t.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async function(){await new g().loadCards(),new l});
