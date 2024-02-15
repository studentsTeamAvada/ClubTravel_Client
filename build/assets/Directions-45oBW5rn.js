import{H as n}from"./header-9Fuft6xP.js";import{g as l,a as _,c as u}from"./index.esm2017-9WYfP4j3.js";import{i as f}from"./index.esm-RQMDg1fI.js";const h={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},t=document.querySelector(".directions__wrapper");class b{app;db;productsArray;constructor(){this.app=f(h),this.db=l(this.app),this.productsArray=[]}async loadCards(){(await _(u(this.db,"hotels"))).forEach(e=>{const c=e.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(e=>{const c=e,{img:s,country:o,region:a}=c;if(s&&Array.isArray(s)&&s.length>0){const{url:d,urlWebp:p}=s[0];let r=`
        <div class="directions__card">
        <div class="directions__card-img">
          <picture class="hero__bg-img">
            <source srcset=${p} type="image/webp" />
            <img src=${d} alt="bg" />
          </picture>
        </div>
        <div class="directions__card-place-wrapper">
            <div class="directions__card-place">
            `;a.length<10?r+=`
                    <p class="directions__card-place-town">${a}</p>
                `:r+=`
                    <p class="directions__card-place-town">${a.slice(0,10)+"..."}</p>
                `,r+=`
                <p class="directions__card-place-country">${o}</p>
            </div>
            <div class="directions__card-price">
                <p class="directions__card-price-person">от <span>319,00€</span>/чел</p>
                <p class="directions__card-price-offer">214 предложения</p>
            </div>
        </div>
        <div class="directions__card-season-wrapper">
            <div class="directions__card-season">
                <p class="directions__card-season-start-end">19 июня 2020 - 30 сентября 2020</p>
                <p class="directions__card-season-start-end">08 июля 2020 - 05 апреля 2021</p>
            </div>
            <svg>
              <use xlink:href="#directions-calendar"></use>
            </svg>
        </div>
        <a href="#" class="directions__btn btn">Выбрать тур</a>
      </div>
        `,t&&t.insertAdjacentHTML("beforeend",r)}})}}new n;const g=new b;await g.loadCards();
