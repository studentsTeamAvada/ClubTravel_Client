import{H as w}from"./header-cLDDKn0F.js";import{h as f,c as y,a as b}from"./swiper-a0AxuwFz.js";async function P(){const a=document.querySelector(".company__swiper-wrapper");(async()=>{(await(await fetch("http://localhost:1337/api/tours?populate=deep")).json()).data.forEach(i=>{const p=i.attributes,{title:l,data:d,price:t,img:n,webP:u}=p;let c=null,r=null;n.data.forEach(e=>{c=e.attributes.url}),u.data.forEach(e=>{r=e.attributes.url});let s=`
      <div class="swiper-slide company__swiper-slide">
        <div class="company__card">
        <div class="company__card-img">
          <picture class="hero__bg-img">
            <source srcset=${r} type="image/webp" />
            <img src=${c} alt="bg" />
          </picture>
          `;t&&(s+=`
            <div class="company__card-line">
            <svg>
              <use xlink:href="./src/images/sprite.svg#company-line"></use>
            </svg>
            <div class="company__card-line-wrapper">
              <p class="company__card-line-price">от ${t}€</p>
            </div>
          </div>
            `),s+=`
          <div class="company__card-data-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="company__card-data">${d}</p>
          </div>
        </div>
        <p class="company__card-text">${l}</p>
      </div>
      </div>
        `,a&&a.insertAdjacentHTML("beforeend",s)})})()}async function $(){const a=document.querySelector(".hot-deals__swiper-wrapper");(async()=>{const o=await(await fetch("http://localhost:1337/api/hot-dealses?populate=deep")).json();console.log(o),o.data.forEach(i=>{const p=i.attributes,{title:l,data:d,price:t,img:n,webP:u}=p;let c=null,r=null;n.data.forEach(e=>{c=e.attributes.url}),u.data.forEach(e=>{r=e.attributes.url});let s=`
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${r} type="image/webp" />
            <img src=${c} alt="bg" />
          </picture>
          `;t&&(s+=`
            <div class="hot-deals__card-line">
            <svg>
              <use xlink:href="./src/images/sprite.svg#company-line"></use>
            </svg>
            <div class="hot-deals__card-line-wrapper">
              <p class="hot-deals__card-line-price">от ${t}€</p>
            </div>
          </div>
            `),s+=`
          <div class="hot-deals__card-data-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="hot-deals__card-data">${d}</p>
          </div>
        </div>
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${l}</p>
            <div class="hot-deals__card-stars-wrapper">
                <svg>
                    <use xlink:href="./src/images/sprite.svg#star"></use>
                </svg>
            </div>
        </div>
        
      </div>
      </div>
        `,a&&a.insertAdjacentHTML("beforeend",s)})})()}new w;f();y();b();await P();await $();
