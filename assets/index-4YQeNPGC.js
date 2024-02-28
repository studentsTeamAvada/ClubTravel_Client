import{a as u,H as x}from"./header-Z2glgHCi.js";import{H as T,C as q,a as C,W,S as k}from"./swiper-C_y-mjEI.js";import{g as _,b as h,c as m,q as w,w as y}from"./index.esm2017-VUyrWc--.js";import{A as H}from"./allImportFile-WMiIs3zy.js";import"./air-datepicker-M0nQTO3P.js";const g=document.querySelector(".main-company__swiper-wrapper");class P{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){(await h(m(this.db,"hotels"))).forEach(r=>{const s=r.data();this.productsArray.push(s)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const s=r,{name:a,price:e,img:c,date:d}=s;if(c&&Array.isArray(c)&&c.length>0){const{url:p,urlWebp:o}=c[0];let i=`
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${o} type="image/webp" />
            <img src=${p} alt="bg" />
          </picture>
          `;e[1]&&(i+=`
            <div class="main-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="main-company__card-line-wrapper">
              <p class="main-company__card-line-price">от ${e[1]}€</p>
            </div>
          </div>
            `),i+=`
          <div class="main-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="main-company__card-data">${d}</p>
          </div>
        </div>
        <p class="main-company__card-text">${a}</p>
      </div>
      </div>
        `,g&&g.insertAdjacentHTML("beforeend",i)}})}}const f=document.querySelector(".hot-deals__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),y("hotTour","==",!0));(await h(t)).forEach(s=>{const a=s.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const s=r,{name:a,price:e,country:c,region:d,star:p,img:o,date:i}=s;if(o&&Array.isArray(o)&&o.length>0){const{url:S,urlWebp:$}=o[0];let l=`
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${$} type="image/webp" />
            <img src=${S} alt="bg" />
          </picture>
          <div class="hot-deals__card-data-wrapper hot-deals__card-data-top">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="hot-deals__card-data">${i}</p>
          </div>
          <div class="hot-deals__card-place-wrapper">
            <svg>
              <use xlink:href="#place"></use>
            </svg>
            <p class="hot-deals__card-place">${c}, ${d}</p>
          </div>
        </div>
        <div class="hot-deals__card-wrappers">
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${a}</p>
            <div class="hot-deals__card-stars-wrapper">
            `;for(let v=0;v<p;v++)l+=`
              <svg>
                <use xlink:href="#star"></use>
              </svg>
              `;l+=`
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>${e[1]}€</span>/чел</p>
              <p class="hot-deals__card-price-old">${e[0]} €/чел</p>
            </div>
            `,e&&(l+=`
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-${((e[0]-e[1])/e[0]*100).toFixed(0)}%</p>
                  </div>
                </div>
                </div>
                  `),l+=`
            </div>
            </div>
            </div>
        `,f&&f.insertAdjacentHTML("beforeend",l)}})}}const b=document.querySelector(".winter-tour__swiper-wrapper");class D{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),y("isWinterTour","==",!0));(await h(t)).forEach(s=>{const a=s.data();a.id=s.id,this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const s=r,{country:a,img:e,price:c,id:d}=s;if(e&&Array.isArray(e)&&e.length>0){const{url:p,urlWebp:o}=e[0];let i=`
      <div class="swiper-slide winter-tour__swiper-slide">
        <div class="winter-tour__card">
        <div class="winter-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${o} type="image/webp" />
            <img src=${p} alt="bg" />
          </picture>
        </div>
        <div class="winter-tour__card-text-wrapper">
            <div class="winter-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="winter-tour__card-place">${a}</p>
            </div>  
            <p class="winter-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="https://club-travel.netlify.app/hotel.html?id=${d}" class="winter-tour__btn btn">Выбрать тур</a>
        `;b&&b.insertAdjacentHTML("beforeend",i)}}),this.getYearsSeason()}getYearsSeason(){const t=document.querySelector(".winter-tour__text");if(t){const r=+this.productsArray[0].date.slice(6);t.textContent+=`Зима ${r-1} - ${r}`}}}const A=document.querySelector(".summer-tour__swiper-wrapper");class L{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),y("isSummerTour","==",!0));(await h(t)).forEach(s=>{const a=s.data();a.id=s.id,this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const s=r,{country:a,img:e,price:c,id:d}=s;if(e&&Array.isArray(e)&&e.length>0){const{url:p,urlWebp:o}=e[0];let i=`
      <div class="swiper-slide summer-tour__swiper-slide">
        <div class="summer-tour__card">
        <div class="summer-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${o} type="image/webp" />
            <img src=${p} alt="bg" />
          </picture>
        </div>
        <div class="summer-tour__card-text-wrapper">
            <div class="summer-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="summer-tour__card-place">${a}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="https://club-travel.netlify.app/hotel.html?id=${d}" class="summer-tour__btn btn">Выбрать тур</a>
        `;A&&A.insertAdjacentHTML("beforeend",i)}}),this.getYearsSeason()}getYearsSeason(){const t=document.querySelector(".summer-tour__text");if(t){const r=+this.productsArray[0].date.slice(6);t.textContent+=`Лето ${r-1} - ${r}`}}}document.addEventListener("DOMContentLoaded",async function(){const n=new P,t=new E,r=new D,s=new L;new T,new q,new C,new W,new k,new H,await n.loadCards(),await t.loadCards(),await r.loadCards(),await s.loadCards(),new x});
