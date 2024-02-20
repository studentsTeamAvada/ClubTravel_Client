import"./jquery-DgZYk2H_.js";import{H as T}from"./header-ARewE4Ia.js";import{H as q,C as x,a as P,W,S as C}from"./swiper-6MPslvsj.js";import{a as l}from"./firebase-WXR3vcUU.js";import{g as m,a as _,c as h,q as w,w as v}from"./index.esm2017-tAtnvxN7.js";import{P as k}from"./preloader-995_IHTn.js";import"./autoplay-3nwb4p1k.js";import"./index.esm-RQMDg1fI.js";const g=document.querySelector(".main-company__swiper-wrapper");class H{app;db;productsArray;constructor(){this.app=l,this.db=m(this.app),this.productsArray=[]}async loadCards(){(await _(h(this.db,"hotels"))).forEach(a=>{const s=a.data();this.productsArray.push(s)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const s=a,{name:e,price:r,img:c,date:i}=s;if(c&&Array.isArray(c)&&c.length>0){const{url:p,urlWebp:o}=c[0];let n=`
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${o} type="image/webp" />
            <img src=${p} alt="bg" />
          </picture>
          `;r[1]&&(n+=`
            <div class="main-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="main-company__card-line-wrapper">
              <p class="main-company__card-line-price">от ${r[1]}€</p>
            </div>
          </div>
            `),n+=`
          <div class="main-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="main-company__card-data">${i}</p>
          </div>
        </div>
        <p class="main-company__card-text">${e}</p>
      </div>
      </div>
        `,g&&g.insertAdjacentHTML("beforeend",n)}})}}const f=document.querySelector(".hot-deals__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=l,this.db=m(this.app),this.productsArray=[]}async loadCards(){const t=w(h(this.db,"hotels"),v("hotTour","==",!0));(await _(t)).forEach(s=>{const e=s.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const s=a,{name:e,price:r,country:c,region:i,star:p,img:o,date:n}=s;if(o&&Array.isArray(o)&&o.length>0){const{url:S,urlWebp:$}=o[0];let u=`
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
            <p class="hot-deals__card-data">${n}</p>
          </div>
          <div class="hot-deals__card-place-wrapper">
            <svg>
              <use xlink:href="#place"></use>
            </svg>
            <p class="hot-deals__card-place">${c}, ${i}</p>
          </div>
        </div>
        <div class="hot-deals__card-wrappers">
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${e}</p>
            <div class="hot-deals__card-stars-wrapper">
            `;for(let y=0;y<p;y++)u+=`
              <svg>
                <use xlink:href="#star"></use>
              </svg>
              `;u+=`
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>${r[1]}€</span>/чел</p>
              <p class="hot-deals__card-price-old">${r[0]} €/чел</p>
            </div>
            `,r&&(u+=`
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-${((r[0]-r[1])/r[0]*100).toFixed(0)}%</p>
                  </div>
                </div>
                </div>
                  `),u+=`
            </div>
            </div>
            </div>
        `,f&&f.insertAdjacentHTML("beforeend",u)}})}}const b=document.querySelector(".winter-tour__swiper-wrapper");class D{app;db;productsArray;constructor(){this.app=l,this.db=m(this.app),this.productsArray=[]}async loadCards(){const t=w(h(this.db,"hotels"),v("isWinterTour","==",!0));(await _(t)).forEach(s=>{const e=s.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const s=a,{country:e,img:r,price:c}=s;if(r&&Array.isArray(r)&&r.length>0){const{url:i,urlWebp:p}=r[0];let o=`
      <div class="swiper-slide winter-tour__swiper-slide">
        <div class="winter-tour__card">
        <div class="winter-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${p} type="image/webp" />
            <img src=${i} alt="bg" />
          </picture>
        </div>
        <div class="winter-tour__card-text-wrapper">
            <div class="winter-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="winter-tour__card-place">${e}</p>
            </div>  
            <p class="winter-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="#" class="winter-tour__btn btn">Выбрать тур</a>
        `;b&&b.insertAdjacentHTML("beforeend",o)}})}}const A=document.querySelector(".summer-tour__swiper-wrapper");class L{app;db;productsArray;constructor(){this.app=l,this.db=m(this.app),this.productsArray=[]}async loadCards(){const t=w(h(this.db,"hotels"),v("isSummerTour","==",!0));(await _(t)).forEach(s=>{const e=s.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const s=a,{country:e,img:r,price:c}=s;if(r&&Array.isArray(r)&&r.length>0){const{url:i,urlWebp:p}=r[0];let o=`
      <div class="swiper-slide summer-tour__swiper-slide">
        <div class="summer-tour__card">
        <div class="summer-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${p} type="image/webp" />
            <img src=${i} alt="bg" />
          </picture>
        </div>
        <div class="summer-tour__card-text-wrapper">
            <div class="summer-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="summer-tour__card-place">${e}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="#" class="summer-tour__btn btn">Выбрать тур</a>
        `;A&&A.insertAdjacentHTML("beforeend",o)}})}}document.addEventListener("DOMContentLoaded",async function(){const d=new H,t=new E,a=new D,s=new L;new q,new x,new P,new W,new C,await d.loadCards(),await t.loadCards(),await a.loadCards(),await s.loadCards(),new T,new k});
