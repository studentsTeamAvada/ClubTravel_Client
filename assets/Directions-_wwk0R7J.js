import"./jquery-DgZYk2H_.js";import{H as u}from"./header-ARewE4Ia.js";import{g as m,b as h,c as v}from"./index.esm2017-bVxcYj8v.js";import{a as f}from"./firebase-vKibixlN.js";import{P as g}from"./preloader-995_IHTn.js";import{I as y}from"./isAuthorization-wZk79ahV.js";import"./index.esm2017-ZxaceZ0h.js";import"./index-dd468b12-T5X4n-5H.js";const a=document.querySelector(".directions__wrapper");class w{app;db;productsArray;constructor(){this.app=f,this.db=m(this.app),this.productsArray=[]}async loadCards(){(await h(v(this.db,"hotels"))).forEach(c=>{const t=c.data();this.productsArray.push(t)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const t=c,{img:r,country:n,region:e,price:p,work:i}=t;if(r&&Array.isArray(r)&&r.length>0){const{url:l,urlWebp:_}=r[0];let s=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${_} type="image/webp" />
            <img src=${l} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;e.length<8?s+=`
                    <p class="directions__card-place-town">${e}</p>
                `:s+=`
                    <p class="directions__card-place-town">${e.slice(0,8)+"..."}</p>
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
                <p class="directions__card-season-start-end">${i[0]}</p>
                <p class="directions__card-season-start-end">${i[1]}</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,a&&a.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async function(){await new w().loadCards(),new u,new g,new y});