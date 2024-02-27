import{a as h,H as v}from"./header-Z2glgHCi.js";import{g as y,a as g,c as f}from"./index.esm2017-WtQYLMdA.js";const i=document.querySelector(".directions__wrapper");class m{app;db;productsArray;constructor(){this.app=h,this.db=y(this.app),this.productsArray=[]}async loadCards(){(await g(f(this.db,"hotels"))).forEach(s=>{const r=s.data();r.id=s.id,this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(s=>{const r=s,{img:c,country:n,region:e,price:p,work:a,id:l}=r;if(c&&Array.isArray(c)&&c.length>0){const{url:_,urlWebp:u}=c[0];let t=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${u} type="image/webp" />
            <img src=${_} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;e.length<8?t+=`
                    <p class="directions__card-place-town">${e}</p>
                `:t+=`
                    <p class="directions__card-place-town">${e.slice(0,8)+"..."}</p>
                `,t+=`
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
        <a href="https://club-travel.netlify.app/hotel.html?id=${l}" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,i&&i.insertAdjacentHTML("beforeend",t)}})}}document.addEventListener("DOMContentLoaded",async function(){await new m().loadCards(),new v});
