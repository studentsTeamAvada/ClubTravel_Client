import{a as u,H as h}from"./header-CGHlbq-5.js";import{g as v,a as g,c as m}from"./index.esm2017-Kikq7U2_.js";import{P as y}from"./preloader-t9H2ZNYp.js";const i=document.querySelector(".directions__wrapper");class f{app;db;productsArray;constructor(){this.app=u,this.db=v(this.app),this.productsArray=[]}async loadCards(){(await g(m(this.db,"hotels"))).forEach(c=>{const e=c.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const e=c,{img:s,country:n,region:a,price:p,work:t}=e;if(s&&Array.isArray(s)&&s.length>0){const{url:l,urlWebp:_}=s[0];let r=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${_} type="image/webp" />
            <img src=${l} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;a.length<8?r+=`
                    <p class="directions__card-place-town">${a}</p>
                `:r+=`
                    <p class="directions__card-place-town">${a.slice(0,8)+"..."}</p>
                `,r+=`
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
        `,i&&i.insertAdjacentHTML("beforeend",r)}})}}document.addEventListener("DOMContentLoaded",async function(){await new f().loadCards(),new h,new y});
