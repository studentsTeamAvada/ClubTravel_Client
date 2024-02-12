import{H as T}from"./header-o5Nvgfqe.js";import{H as $,C as q,a as x,W,S as k}from"./swiper-8s-Bbwav.js";import{a as n}from"./firebase-WXR3vcUU.js";import{g as l,a as u,c as _,q as m,w}from"./index.esm2017-9WYfP4j3.js";import"./index.esm-RQMDg1fI.js";const y=document.querySelector(".main-company__swiper-wrapper");class C{app;db;productsArray;constructor(){this.app=n,this.db=l(this.app),this.productsArray=[]}async loadCards(){(await u(_(this.db,"hotels"))).forEach(e=>{const r=e.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{name:a,price:s,img:c}=r;if(c&&Array.isArray(c)&&c.length>0){const{url:p,urlWebp:i}=c[0];let o=`
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${i} type="image/webp" />
            <img src=${p} alt="bg" />
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
            <p class="main-company__card-data">22.11.2020</p>
          </div>
        </div>
        <p class="main-company__card-text">${a}</p>
      </div>
      </div>
        `,y&&y.insertAdjacentHTML("beforeend",o)}})}}const g=document.querySelector(".hot-deals__swiper-wrapper");class H{app;db;productsArray;constructor(){this.app=n,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=m(_(this.db,"hotels"),w("hotTour","==",!0));(await u(t)).forEach(r=>{const a=r.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{name:a,price:s,country:c,region:p,star:i,img:o}=r;if(o&&Array.isArray(o)&&o.length>0){const{url:A,urlWebp:S}=o[0];let d=`
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${S} type="image/webp" />
            <img src=${A} alt="bg" />
          </picture>
          <div class="hot-deals__card-data-wrapper hot-deals__card-data-top">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="hot-deals__card-data">22.11.2020</p>
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
            `;for(let v=0;v<i;v++)d+=`
              <svg>
                <use xlink:href="#star"></use>
              </svg>
              `;d+=`
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>509€</span>/чел</p>
              <p class="hot-deals__card-price-old">779 €/чел</p>
            </div>
            `,s&&(d+=`
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-30%</p>
                  </div>
                </div>
                </div>
                  `),d+=`
            </div>
            </div>
            </div>
        `,g&&g.insertAdjacentHTML("beforeend",d)}})}}const f=document.querySelector(".winter-tour__swiper-wrapper");class P{app;db;productsArray;constructor(){this.app=n,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=m(_(this.db,"hotels"),w("hotTour","==",!0));(await u(t)).forEach(r=>{const a=r.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{country:a,img:s}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:c,urlWebp:p}=s[0];let i=`
      <div class="swiper-slide winter-tour__swiper-slide">
        <div class="winter-tour__card">
        <div class="winter-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${p} type="image/webp" />
            <img src=${c} alt="bg" />
          </picture>
        </div>
        <div class="winter-tour__card-text-wrapper">
            <div class="winter-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="winter-tour__card-place">${a}</p>
            </div>  
            <p class="winter-tour__card-price-new">от <span>509€</span>/чел</p>
            
        </div>
        <a href="#" class="winter-tour__btn btn">Выбрать тур</a>
        `;f&&f.insertAdjacentHTML("beforeend",i)}})}}const b=document.querySelector(".summer-tour__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=n,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=m(_(this.db,"hotels"),w("hotTour","==",!0));(await u(t)).forEach(r=>{const a=r.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const r=e,{country:a,img:s}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:c,urlWebp:p}=s[0];let i=`
      <div class="swiper-slide summer-tour__swiper-slide">
        <div class="summer-tour__card">
        <div class="summer-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${p} type="image/webp" />
            <img src=${c} alt="bg" />
          </picture>
        </div>
        <div class="summer-tour__card-text-wrapper">
            <div class="summer-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="#map-marker"></use>
                </svg>
                <p class="summer-tour__card-place">${a}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>509€</span>/чел</p>
            
        </div>
        <a href="#" class="summer-tour__btn btn">Выбрать тур</a>
        `;b&&b.insertAdjacentHTML("beforeend",i)}})}}new T;const D=new C,j=new H,L=new P,M=new E;new $;new q;new x;new W;new k;await D.loadCards();await j.loadCards();await L.loadCards();await M.loadCards();
