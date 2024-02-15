import{H as T}from"./header-9Fuft6xP.js";import{H as q,C as x,a as W,W as k,S as C}from"./swiper-8s-Bbwav.js";import{a as u}from"./firebase-WXR3vcUU.js";import{g as l,a as _,c as m,q as w,w as v}from"./index.esm2017-9WYfP4j3.js";import"./index.esm-RQMDg1fI.js";const g=document.querySelector(".main-company__swiper-wrapper");class H{app;db;productsArray;constructor(){this.app=u,this.db=l(this.app),this.productsArray=[]}async loadCards(){(await _(m(this.db,"hotels"))).forEach(e=>{const s=e.data();this.productsArray.push(s)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const s=e,{name:a,price:r,img:c,date:i}=s;if(c&&Array.isArray(c)&&c.length>0){const{url:p,urlWebp:o}=c[0];let d=`
      <div class="swiper-slide main-company__swiper-slide">
        <div class="main-company__card">
        <div class="main-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${o} type="image/webp" />
            <img src=${p} alt="bg" />
          </picture>
          `;r[1]&&(d+=`
            <div class="main-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="main-company__card-line-wrapper">
              <p class="main-company__card-line-price">от ${r[1]}€</p>
            </div>
          </div>
            `),d+=`
          <div class="main-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="main-company__card-data">${i}</p>
          </div>
        </div>
        <p class="main-company__card-text">${a}</p>
      </div>
      </div>
        `,g&&g.insertAdjacentHTML("beforeend",d)}})}}const f=document.querySelector(".hot-deals__swiper-wrapper");class P{app;db;productsArray;constructor(){this.app=u,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("hotTour","==",!0));(await _(t)).forEach(s=>{const a=s.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const s=e,{name:a,price:r,country:c,region:i,star:p,img:o,date:d}=s;if(o&&Array.isArray(o)&&o.length>0){const{url:S,urlWebp:$}=o[0];let n=`
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
            <p class="hot-deals__card-data">${d}</p>
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
            <p class="hot-deals__card-text">${a}</p>
            <div class="hot-deals__card-stars-wrapper">
            `;for(let y=0;y<p;y++)n+=`
              <svg>
                <use xlink:href="#star"></use>
              </svg>
              `;n+=`
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>${r[1]}€</span>/чел</p>
              <p class="hot-deals__card-price-old">${r[0]} €/чел</p>
            </div>
            `,r&&(n+=`
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-${((r[0]-r[1])/r[0]*100).toFixed(0)}%</p>
                  </div>
                </div>
                </div>
                  `),n+=`
            </div>
            </div>
            </div>
        `,f&&f.insertAdjacentHTML("beforeend",n)}})}}const b=document.querySelector(".winter-tour__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=u,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("isWinterTour","==",!0));(await _(t)).forEach(s=>{const a=s.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const s=e,{country:a,img:r,price:c}=s;if(r&&Array.isArray(r)&&r.length>0){const{url:i,urlWebp:p}=r[0];let o=`
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
                <p class="winter-tour__card-place">${a}</p>
            </div>  
            <p class="winter-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="#" class="winter-tour__btn btn">Выбрать тур</a>
        `;b&&b.insertAdjacentHTML("beforeend",o)}})}}const A=document.querySelector(".summer-tour__swiper-wrapper");class D{app;db;productsArray;constructor(){this.app=u,this.db=l(this.app),this.productsArray=[]}async loadCards(){const t=w(m(this.db,"hotels"),v("isSummerTour","==",!0));(await _(t)).forEach(s=>{const a=s.data();this.productsArray.push(a)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const s=e,{country:a,img:r,price:c}=s;if(r&&Array.isArray(r)&&r.length>0){const{url:i,urlWebp:p}=r[0];let o=`
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
                <p class="summer-tour__card-place">${a}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>${c[0]}€</span>/чел</p>
            
        </div>
        <a href="#" class="summer-tour__btn btn">Выбрать тур</a>
        `;A&&A.insertAdjacentHTML("beforeend",o)}})}}new T;const j=new H,L=new P,M=new E,F=new D;new q;new x;new W;new k;new C;await j.loadCards();await L.loadCards();await M.loadCards();await F.loadCards();
