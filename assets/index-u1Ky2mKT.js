import{a as u,H as T}from"./header-Z2glgHCi.js";import{H as q,C as x,a as W,W as C,S as k}from"./swiper-LJiYZK07.js";import{g as _,a as h,c as m,q as w,w as v}from"./index.esm2017-WtQYLMdA.js";import{A as H}from"./allImportFile-QcVIGtXl.js";import"./air-datepicker-M0nQTO3P.js";const g=document.querySelector(".main-company__swiper-wrapper");class P{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){(await h(m(this.db,"hotels"))).forEach(e=>{const r=e.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{name:a,price:s,img:c,date:p}=r;if(c&&Array.isArray(c)&&c.length>0){const{url:d,urlWebp:i}=c[0];let o=`
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${i} type="image/webp" />
            <img src=${d} alt="bg" />
          </picture>
          `;s[1]&&(o+=`
            <div class="main-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="main-company__card-line-wrapper">
              <p class="main-company__card-line-price">от ${s[1]}€</p>
            </div>
          </div>
            `),o+=`
          <div class="main-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="main-company__card-data">${p}</p>
          </div>
        </div>
        <p class="main-company__card-text">${a}</p>
      </div>
      </div>
        `,g&&g.insertAdjacentHTML("beforeend",o)}})}}const f=document.querySelector(".hot-deals__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("hotTour","==",!0));(await h(t)).forEach(r=>{const a=r.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{name:a,price:s,country:c,region:p,star:d,img:i,date:o}=r;if(i&&Array.isArray(i)&&i.length>0){const{url:$,urlWebp:S}=i[0];let l=`
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${S} type="image/webp" />
            <img src=${$} alt="bg" />
          </picture>
          <div class="hot-deals__card-data-wrapper hot-deals__card-data-top">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="hot-deals__card-data">${o}</p>
          </div>
          <div class="hot-deals__card-place-wrapper">
            <svg>
              <use xlink:href="#place"></use>
            </svg>
            <p class="hot-deals__card-place">${c}, ${p}</p>
          </div>
        </div>
        <div class="hot-deals__card-wrappers">
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${a}</p>
            <div class="hot-deals__card-stars-wrapper">
            `;for(let y=0;y<d;y++)l+=`
              <svg>
                <use xlink:href="#star"></use>
              </svg>
              `;l+=`
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>${s[1]}€</span>/чел</p>
              <p class="hot-deals__card-price-old">${s[0]} €/чел</p>
            </div>
            `,s&&(l+=`
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-${((s[0]-s[1])/s[0]*100).toFixed(0)}%</p>
                  </div>
                </div>
                </div>
                  `),l+=`
            </div>
            </div>
            </div>
        `,f&&f.insertAdjacentHTML("beforeend",l)}})}}const b=document.querySelector(".winter-tour__swiper-wrapper");class D{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("isWinterTour","==",!0));(await h(t)).forEach(r=>{const a=r.data();a.id=r.id,this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{country:a,img:s,price:c,id:p}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:d,urlWebp:i}=s[0];let o=`
      <div class="swiper-slide winter-tour__swiper-slide">
        <div class="winter-tour__card">
        <div class="winter-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${i} type="image/webp" />
            <img src=${d} alt="bg" />
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
        <a href="https://club-travel.netlify.app/hotel.html?id=${p}" class="winter-tour__btn btn">Выбрать тур</a>
        `;b&&b.insertAdjacentHTML("beforeend",o)}})}}const A=document.querySelector(".summer-tour__swiper-wrapper");class L{app;db;productsArray;constructor(){this.app=u,this.db=_(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("isSummerTour","==",!0));(await h(t)).forEach(r=>{const a=r.data();a.id=r.id,this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{country:a,img:s,price:c,id:p}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:d,urlWebp:i}=s[0];let o=`
      <div class="swiper-slide summer-tour__swiper-slide">
        <div class="summer-tour__card">
        <div class="summer-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${i} type="image/webp" />
            <img src=${d} alt="bg" />
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
        <a href="https://club-travel.netlify.app/hotel.html?id=${p}" class="summer-tour__btn btn">Выбрать тур</a>
        `;A&&A.insertAdjacentHTML("beforeend",o)}})}}document.addEventListener("DOMContentLoaded",async function(){const n=new P,t=new E,e=new D,r=new L;new q,new x,new W,new C,new k,new H,await n.loadCards(),await t.loadCards(),await e.loadCards(),await r.loadCards(),new T});
