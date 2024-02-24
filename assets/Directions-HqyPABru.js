import{H as u}from"./header-9Fuft6xP.js";import{g as h,a as m,c as v}from"./index.esm2017-HY_ETrW2.js";import{a as f}from"./firebase-F47n0dmT.js";import{P as g}from"./preloader-U3P-yeaR.js";const i=document.querySelector(".directions__wrapper");class y{app;db;productsArray;constructor(){this.app=f,this.db=h(this.app),this.productsArray=[]}async loadCards(){(await m(v(this.db,"hotels"))).forEach(c=>{const e=c.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const e=c,{img:r,country:n,region:t,price:p,work:a}=e;if(r&&Array.isArray(r)&&r.length>0){const{url:l,urlWebp:_}=r[0];let s=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${_} type="image/webp" />
            <img src=${l} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;t.length<8?s+=`
                    <p class="directions__card-place-town">${t}</p>
                `:s+=`
                    <p class="directions__card-place-town">${t.slice(0,8)+"..."}</p>
                `,s+=`
                <p class="directions__card-place-country">${n}</p>
            </div>
            <div class="directions__card-price">
                <p class="directions__card-price-person">от <span>${p[0]}€</span>/чел</p>
                <p class="directions__card-price-offer">214 предложения</p>
            </div>
        </div>
        <div class="directions__card-season-wrapper">
            <div class="directions__card-season">
                <p class="directions__card-season-start-end">${a[0]}</p>
                <p class="directions__card-season-start-end">${a[1]}</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,i&&i.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async function(){await new y().loadCards(),new u,new g});
