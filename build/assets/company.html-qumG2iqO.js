import{H as d}from"./header-cLDDKn0F.js";import{g as m,a as l,c as y}from"./index.esm2017-18LFGzeh.js";import{i as u}from"./index.esm-dgJgNtkA.js";const g={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},p=document.querySelector(".company-company__wrapper");class f{app;db;productsArray;constructor(){this.app=u(g),this.db=m(this.app),this.productsArray=[]}async loadCards(){(await l(y(this.db,"hotels"))).forEach(r=>{const c=r.data();this.productsArray.push(c)}),this.renderProducts()}renderProducts(){this.productsArray.forEach(r=>{const c=r,{name:t,price:e,img:a}=c;if(a&&Array.isArray(a)&&a.length>0){const{url:i,urlWebp:n}=a[0];let s=`
        <div class="company-company__card">
        <div class="company-company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${n} type="image/webp" />
            <img src=${i} alt="bg" />
          </picture>
          `;e[1]&&(s+=`
            <div class="company-company__card-line">
            <svg>
              <use xlink:href="./src/images/sprite.svg#company-line"></use>
            </svg>
            <div class="company-company__card-line-wrapper">
              <p class="company-company__card-line-price">от ${e[1]}€</p>
            </div>
          </div>
            `),s+=`
          <div class="company-company__card-data-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="company-company__card-data">22.11.2020</p>
          </div>
        </div>
        <p class="company-company__card-text">${t}</p>
      </div>
        `,p&&p.insertAdjacentHTML("beforeend",s)}})}}new d;const h=new f;await h.loadCards();
