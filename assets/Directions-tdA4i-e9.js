import"./jquery-DgZYk2H_.js";import{H as _}from"./header-ARewE4Ia.js";import{g as f,a as m,c as h}from"./index.esm2017-tAtnvxN7.js";import{i as b}from"./index.esm-RQMDg1fI.js";import{P as g}from"./preloader-995_IHTn.js";const v={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},i=document.querySelector(".directions__wrapper");class y{app;db;productsArray;constructor(){this.app=b(v),this.db=f(this.app),this.productsArray=[]}async loadCards(){(await m(h(this.db,"hotels"))).forEach(e=>{const c=e.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const c=e,{img:r,country:n,region:a,price:p,work:t}=c;if(r&&Array.isArray(r)&&r.length>0){const{url:l,urlWebp:u}=r[0];let s=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${u} type="image/webp" />
            <img src=${l} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;a.length<8?s+=`
                    <p class="directions__card-place-town">${a}</p>
                `:s+=`
                    <p class="directions__card-place-town">${a.slice(0,8)+"..."}</p>
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
                <p class="directions__card-season-start-end">${t[0]}</p>
                <p class="directions__card-season-start-end">${t[1]}</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,i&&i.insertAdjacentHTML("beforeend",s)}})}}document.addEventListener("DOMContentLoaded",async function(){await new y().loadCards(),new _,new g});
