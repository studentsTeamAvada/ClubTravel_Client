import{H as d}from"./header-o5Nvgfqe.js";import{g as m,a as l,c as y}from"./index.esm2017-6EBzZu0o.js";import{i as u}from"./index.esm-f6w6U5a0.js";const f={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},o=document.querySelector(".company-company__wrapper");class g{app;db;productsArray;constructor(){this.app=u(f),this.db=m(this.app),this.productsArray=[]}async loadCards(){(await l(y(this.db,"hotels"))).forEach(c=>{const r=c.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const r=c,{name:t,price:e,img:a}=r;if(a&&Array.isArray(a)&&a.length>0){const{url:n,urlWebp:i}=a[0];let s=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${i} type="image/webp" />
            <img src=${n} alt="bg" />
          </picture>
          `;e[1]&&(s+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${e[1]}€</p>
            </div>
          </div>
            `),s+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="#clock"></use>
            </svg>
            <p class="company-company__card-data">22.11.2020</p>
          </div>
        </div>
        <p class="company-company__card-text">${t}</p>
      </div>
        `,o&&o.insertAdjacentHTML("beforeend",s)}})}}new d;const h=new g;await h.loadCards();
