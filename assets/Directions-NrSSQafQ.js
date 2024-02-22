import{H as u}from"./header-9Fuft6xP.js";import{g as m,a as h,c as v}from"./index.esm2017-wHUIDPvp.js";import{a as f}from"./firebase-IW9Y5CYr.js";import{P as g}from"./preloader-a9ovPH_o.js";import{I as y}from"./isAuthorization-Z2v30n0e.js";import"./index.esm2017-NEpo2ibe.js";import"./index-e24386e7-jS-Ti_7U.js";const i=document.querySelector(".directions__wrapper");class w{app;db;productsArray;constructor(){this.app=f,this.db=m(this.app),this.productsArray=[]}async loadCards(){(await h(v(this.db,"hotels"))).forEach(c=>{const t=c.data();this.productsArray.push(t)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const t=c,{img:r,country:n,region:e,price:p,work:a}=t;if(r&&Array.isArray(r)&&r.length>0){const{url:l,urlWebp:_}=r[0];let s=`
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
                <p class="directions__card-season-start-end">${a[0]}</p>
                <p class="directions__card-season-start-end">${a[1]}</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,i&&i.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async function(){await new w().loadCards(),new u,new g,new y});
