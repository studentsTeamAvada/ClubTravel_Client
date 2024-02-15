import{H as _}from"./header-hiQeVM5C.js";import{g as u,a as f,c as h}from"./index.esm2017-9WYfP4j3.js";import{i as b}from"./index.esm-RQMDg1fI.js";const g={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},i=document.querySelector(".directions__wrapper");class v{app;db;productsArray;constructor(){this.app=b(g),this.db=u(this.app),this.productsArray=[]}async loadCards(){(await f(h(this.db,"hotels"))).forEach(e=>{const c=e.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const c=e,{img:r,country:d,region:a,price:p,work:t}=c;if(r&&Array.isArray(r)&&r.length>0){const{url:n,urlWebp:l}=r[0];let s=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${l} type="image/webp" />
            <img src=${n} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;a.length<10?s+=`
                    <p class="directions__card-place-town">${a}</p>
                `:s+=`
                    <p class="directions__card-place-town">${a.slice(0,10)+"..."}</p>
                `,s+=`
                <p class="directions__card-place-country">${d}</p>
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
        `,i&&i.insertAdjacentHTML("beforeend",s)}})}}new _;const m=new v;await m.loadCards();
