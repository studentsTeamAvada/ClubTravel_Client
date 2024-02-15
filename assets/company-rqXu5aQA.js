import{H as m}from"./header-hiQeVM5C.js";import{g as l,a as y,c as u}from"./index.esm2017-9WYfP4j3.js";import{i as f}from"./index.esm-RQMDg1fI.js";const g={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},o=document.querySelector(".company-company__wrapper");class h{app;db;productsArray;constructor(){this.app=f(g),this.db=l(this.app),this.productsArray=[]}async loadCards(){(await y(u(this.db,"hotels"))).forEach(c=>{const r=c.data();this.productsArray.push(r)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(c=>{const r=c,{name:t,price:e,img:a,date:n}=r;if(a&&Array.isArray(a)&&a.length>0){const{url:i,urlWebp:d}=a[0];let s=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${d} type="image/webp" />
            <img src=${i} alt="bg" />
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
            <p class="company-company__card-data">${n}</p>
          </div>
        </div>
        <p class="company-company__card-text">${t}</p>
      </div>
        `,o&&o.insertAdjacentHTML("beforeend",s)}})}}new m;const _=new h;await _.loadCards();
