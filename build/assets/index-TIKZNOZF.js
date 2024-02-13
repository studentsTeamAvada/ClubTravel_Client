import{H as k}from"./header-9Fuft6xP.js";import{h as $,c as x,a as T,w as I,s as q}from"./swiper-CIf3Z10M.js";import{g as n,a as l,c as u,q as _,w as f}from"./index.esm2017-6EBzZu0o.js";import{i as m}from"./index.esm-f6w6U5a0.js";const C={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},w=document.querySelector(".main-company__swiper-wrapper");class D{app;db;productsArray;constructor(){this.app=m(C),this.db=n(this.app),this.productsArray=[]}async loadCards(){(await l(u(this.db,"hotels"))).forEach(a=>{const r=a.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const r=a,{name:e,price:s,img:c}=r;if(c&&Array.isArray(c)&&c.length>0){const{url:p,urlWebp:i}=c[0];let o=`
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
        <p class="main-company__card-text">${e}</p>
      </div>
      </div>
        `,w&&w.insertAdjacentHTML("beforeend",o)}})}}const j={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},b=document.querySelector(".hot-deals__swiper-wrapper");class E{app;db;productsArray;constructor(){this.app=m(j),this.db=n(this.app),this.productsArray=[]}async loadCards(){const t=_(u(this.db,"hotels"),f("hotTour","==",!0));(await l(t)).forEach(r=>{const e=r.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const r=a,{name:e,price:s,country:c,region:p,star:i,img:o}=r;if(o&&Array.isArray(o)&&o.length>0){const{url:A,urlWebp:S}=o[0];let d=`
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
            <p class="hot-deals__card-text">${e}</p>
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
        `,b&&b.insertAdjacentHTML("beforeend",d)}})}}const P={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},y=document.querySelector(".winter-tour__swiper-wrapper");class W{app;db;productsArray;constructor(){this.app=m(P),this.db=n(this.app),this.productsArray=[]}async loadCards(){const t=_(u(this.db,"hotels"),f("hotTour","==",!0));(await l(t)).forEach(r=>{const e=r.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const r=a,{country:e,img:s}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:c,urlWebp:p}=s[0];let i=`
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
                <p class="winter-tour__card-place">${e}</p>
            </div>  
            <p class="winter-tour__card-price-new">от <span>509€</span>/чел</p>
            
        </div>
        <a href="#" class="winter-tour__btn btn">Выбрать тур</a>
        `;y&&y.insertAdjacentHTML("beforeend",i)}})}}const z={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},g=document.querySelector(".summer-tour__swiper-wrapper");class H{app;db;productsArray;constructor(){this.app=m(z),this.db=n(this.app),this.productsArray=[]}async loadCards(){const t=_(u(this.db,"hotels"),f("hotTour","==",!0));(await l(t)).forEach(r=>{const e=r.data();this.productsArray.push(e)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(a=>{const r=a,{country:e,img:s}=r;if(s&&Array.isArray(s)&&s.length>0){const{url:c,urlWebp:p}=s[0];let i=`
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
                <p class="summer-tour__card-place">${e}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>509€</span>/чел</p>
            
        </div>
        <a href="#" class="summer-tour__btn btn">Выбрать тур</a>
        `;g&&g.insertAdjacentHTML("beforeend",i)}})}}new k;const L=new D,F=new E,B=new W,J=new H;$();x();T();I();q();await L.loadCards();await F.loadCards();await B.loadCards();await J.loadCards();
