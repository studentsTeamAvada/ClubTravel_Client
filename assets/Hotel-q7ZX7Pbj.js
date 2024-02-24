import{$ as o,H as S}from"./header-9Fuft6xP.js";import{F as $}from"./footer-pXvuOvyE.js";import{a as w,c as x}from"./firebase-F47n0dmT.js";import{g as v,a as k,c as L,d as g,b as q,u as E,e as C,s as A}from"./index.esm2017-HY_ETrW2.js";import{b as j,c as H}from"./swiper-cPm6rBfW.js";import{P as O}from"./preloader-a9ovPH_o.js";class P{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;customEvent;constructor(t){this.dropDown=o(t).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=o(".tour__quantity-tegs"),this.customEvent=new CustomEvent("myCustomEvent"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const t=this;o(document).on("click",function(r){t.dropDown.has(r.target).length==0&&t.dropDown.removeClass("dropdown_active")})}counter(t,r=!1){const s=t.find(".dropdown__count-add"),e=t.find(".dropdown__count-remove"),i=t.find(".dropdown__count-current"),n=this;function l(){let c=+i.text();if(c<9){const a=c+1;i.html(String(a)),r?n.timeout(a,1):n.currentAbdul=a}}function d(){let c=+i.text();if(c>1||r&&c>0){const a=c-1;i.html(String(a)),r?(n.timeout(a,2),o(".dropdown__error").removeClass("dropdown__error_active-kids")):n.currentAbdul=a}}s.on("click",l),e.on("click",d)}addAgeSelect(t,r=!1){const e=this.dropDown.find(".children__drop").length;if(console.log(e),r){const i=this.kids();console.log(i),this.children.html("");let n=0;for(const l in i)for(let d=0;d<+i[l];d++){this.children.append(`
            <div id="drop-${n}" class="children__drop">
                <button class="children__btn">
                    <span class="children__current">${l}</span>
                    <svg><use xlink:href="#chevron-left"></use></svg> 
                </button>
                <ul class="children__list">
                    <li>Укажите возраст</li>
                    <li>&lt; 1 год</li>
                    <li>1 год</li>
                    <li>2 года</li>
                    <li>3 года</li>
                    <li>4 года</li>
                    <li>5 лет</li>
                    <li>6 лет</li>
                    <li>7 лет</li>
                    <li>8 лет</li>
                    <li>9 лет</li>
                    <li>10 лет</li>
                    <li>11 лет</li>
                    <li>12 лет</li>
                    <li>13 лет</li>
                    <li>14 лет</li>
                    <li>15 лет</li>
                    <li>16 лет</li>
                    <li>17 лет</li>
                </ul>
            </div>
        `);const c=o("<script>").attr("type","text/javascript").text(`
              function dropDown(id){
                  const drop = document.querySelector(id)
                  const li = drop.querySelectorAll('li');
                  const current = drop.querySelector('.children__current');
                  const btn  = drop.querySelector('.children__btn');
                  const listHeight = drop.querySelector('.children__list').offsetHeight;
  
                  li.forEach(item => {
                      item.addEventListener('click', () => {
                          current.textContent = item.textContent
                          if(item.textContent !== 'Укажите возраст'){
                              drop.classList.remove('children__drop_error')
                              document.querySelector('.dropdown__error').classList.remove('dropdown__error_active-kids')
                          }
                      })
                  });
  
                  
                  drop.addEventListener('click', () => {
                      drop.classList.toggle('children__drop_active')
                  })
  
                  document.addEventListener('click', (e) => {
                      if (!drop.contains(e.target)) {
                          drop.classList.remove('children__drop_active');
                      }
                  });
  
                  function observer(){
                      const options = {
                          rootMargin: '0px 0px -' + (listHeight? listHeight + 30 : 300 ) + 'px 0px',
                          threshold: 1 
                      };  
                      const observer = new IntersectionObserver(callback, options);  
                      if(btn){
                          observer.observe(btn);
                      }
          
                      function callback(entries) {
                          entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                      drop.classList.add('children_top');
                                      drop.classList.remove('children_bottom');
                              } else {
                                  if(window.innerHeight > 700 ){
                                      drop.classList.add('children_bottom');
                                      drop.classList.remove('children_top');
                                  }
                              }
                          });
                      }
                  }
                  observer()
                  drop.classList.add('children__drop_opacity')
              }
              dropDown('#drop-${n}')
          `);o("body").append(c),n++}}else for(let i=0;i<t;i++)if(i>e-1){this.children.append(`
            <div id="drop-${i}" class="children__drop">
                <button class="children__btn">
                    <span class="children__current">Укажите возраст</span>
                    <svg><use xlink:href="#chevron-left"></use></svg> 
                </button>
                <ul class="children__list">
                    <li>Укажите возраст</li>
                    <li>&lt; 1 год</li>
                    <li>1 год</li>
                    <li>2 года</li>
                    <li>3 года</li>
                    <li>4 года</li>
                    <li>5 лет</li>
                    <li>6 лет</li>
                    <li>7 лет</li>
                    <li>8 лет</li>
                    <li>9 лет</li>
                    <li>10 лет</li>
                    <li>11 лет</li>
                    <li>12 лет</li>
                    <li>13 лет</li>
                    <li>14 лет</li>
                    <li>15 лет</li>
                    <li>16 лет</li>
                    <li>17 лет</li>
                </ul>
            </div>
        `);const n=o("<script>").attr("type","text/javascript").text(`
              function dropDown(id){
                  const drop = document.querySelector(id)
                  const li = drop.querySelectorAll('li');
                  const current = drop.querySelector('.children__current');
                  const btn  = drop.querySelector('.children__btn');
                  const listHeight = drop.querySelector('.children__list').offsetHeight;
  
                  li.forEach(item => {
                      item.addEventListener('click', () => {
                          current.textContent = item.textContent
                          if(item.textContent !== 'Укажите возраст'){
                              drop.classList.remove('children__drop_error')
                              document.querySelector('.dropdown__error').classList.remove('dropdown__error_active-kids')
                          }
                      })
                  });
  
                  
                  drop.addEventListener('click', () => {
                      drop.classList.toggle('children__drop_active')
                  })
  
                  document.addEventListener('click', (e) => {
                      if (!drop.contains(e.target)) {
                          drop.classList.remove('children__drop_active');
                      }
                  });
  
                  function observer(){
                      const options = {
                          rootMargin: '0px 0px -' + (listHeight? listHeight + 30 : 300 ) + 'px 0px',
                          threshold: 1 
                      };  
                      const observer = new IntersectionObserver(callback, options);  
                      if(btn){
                          observer.observe(btn);
                      }
          
                      function callback(entries) {
                          entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                      drop.classList.add('children_top');
                                      drop.classList.remove('children_bottom');
                              } else {
                                  if(window.innerHeight > 700 ){
                                      drop.classList.add('children_bottom');
                                      drop.classList.remove('children_top');
                                  }
                              }
                          });
                      }
                  }
                  observer()
                  drop.classList.add('children__drop_opacity')
              }
              dropDown('#drop-${i}')
          `);o("body").append(n)}}removeAgeSelect(t){this.dropDown.find(".children__drop").each((s,e)=>{s>t-1&&(e.classList.remove("children__drop_opacity"),setTimeout(()=>{e.remove()},150))})}removeTag(){this.tegContainer.on("click",t=>{const r=t.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),s=this.dropDown.find(".children__drop"),e=o(".dropdown__count-two").find(".dropdown__count-current");t.target.innerHTML==="+"&&(s.each((i,n)=>{const l=n.querySelector(".children__current")?.textContent;r===l&&(t.target.parentElement?.remove(),n.style.display="none",n.remove())}),this.addAgeSelect(1,!0),e.html(String(this.currentKids)),this.kids(),o("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3)),document.dispatchEvent(this.customEvent)})}timeout(t,r){function s(){const e=Math.ceil(t/2);let i=0;return e===1?i=40:e>1&&(i=e*45-5),i}r===1?(t%2!==0&&this.children.css("height",`${s()}px`),this.addAgeSelect(t)):r===2?(t%2===0&&this.children.css("height",`${s()}px`),this.removeAgeSelect(t)):this.children.css("height",`${s()}px`)}kids(){const t=this.dropDown.find(".children__drop"),r=this,s={};return t.each(function(e,i){const n=String(i.querySelector(".children__current")?.textContent);n==="Укажите возраст"?(i.classList.add("children__drop_error"),r.error.addClass("dropdown__error_active-kids")):s.hasOwnProperty(n)?s[n]++:s[n]=1}),this.currentKids=Object.keys(s).reduce((e,i)=>(e+=+s[i],e),0),s}addPeople(){this.addBtn.on("click",()=>{const t=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const s in t)this.tegContainer.append(`
            <li>${s} x${t[s]} <span>+</span></li>
          `);document.dispatchEvent(this.customEvent)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class K{totalPrice;dropDown;constructor(){this.totalPrice=o(".tour__total-price"),this.dropDown=new P(".tour__quantity-drop"),this.priceCalculator()}priceCalculator(){document.addEventListener("myCustomEvent",()=>{const t=o(".tour__price-sum").data("price"),r=this.dropDown.getKids()+this.dropDown.getAbduls(),s=String(+t*r);let e="";if(s.length>3){let i=0;for(let n=s.length-1;n>=0;n--)i++,e+=s[n],i===3&&(e+=" ");e=e.split("").reverse().join("")}else e=s;this.totalPrice.html(e),console.log(s)})}}class I{app;currentUrl;id;constructor(){this.app=w,this.currentUrl=new URL(window.location.href),this.id=this.currentUrl.searchParams.get("id")||null,this.init()}async init(){this.addQuery(),this.getData()}map(t,r){const i=o(".top-img__hotel-info").attr("href")?.replace(/query=/,`query=${t}, ${r}`);i&&o(".top-img__hotel-info").attr("href",i)}addQuery(){this.currentUrl.search="",this.currentUrl.searchParams.append("id","2xvc7W065aSKXG4o5mw7"),history.replaceState({},"",this.currentUrl)}async getData(){const t=v(this.app),r=await k(L(t,"hotels"));let s=0;const e=r.docs.length-1;r.forEach(i=>{const n=+(Math.random()*e).toFixed();i.id===this.id?this.changeInfo(i.data()):i.id!==this.id&&s<4&&(s++,this.bottomSlide(r.docs[n].data(),r.docs[n].id))}),new j,new O}bottomSlide(t,r){const s=o("#bottom-slider"),e=t,i=e.name,n=this.dateFormat(e.date).replace(" г.",""),l=e.country,d=e.beach,c=e.star,a=e.img[0],p=+e.price[0],_=+e.price[1],u=_?+((p-+_)/p*100).toFixed():!1,b=()=>{let m="";for(let f=0;f<c;f++)m+='<svg><use xlink:href="#start"></use></svg>';return m},y=`
            <div class="slide__old-price"><span id="old-price">${p}</span> €/чел</div>
        `,D=`
            <div class="slide__sale">
                <svg><use xlink:href="#sale-bg"></use></svg>
                <span>-<span id="sale">${u}</span>%</span>
            </div>
        `;s.append(`
            <div class="swiper-slide slide">
                <div class="slide__image">
                    <div class="slide__img">
                        <picture>
                        <source srcset="${a.urlWebp}"/>
                        <img src="${a.url}" width="1366" height="550" loading="lazy" alt="hotel-image"/>
                        </picture>
                    </div>
                
                    <div class="slide__tag slide__tag-date">
                        <svg><use xlink:href="#clock"></use></svg>
                
                        <span>${n}</span>
                    </div>
                
                    <a class="slide__tag slide__tag-location" href="https://www.google.com/maps/search/?api=1&query=${l}${d===""?"":","+d}" target="_blank">
                        <svg><use xlink:href="#point"></use></svg>
                        <span>${l}${d===""?"":","+d}</span>
                    </a>
                    </div>
                
                    <div class="slide__info">
                    <div class="slide__row slide__row-one">
                        <a class="slide__title" href="/hotel.html?id=${r}">${i}</a>
                        <div class="slide__stars">${b()}</div>
                    </div>
                
                    <div class="slide__row slide__row-two">
                        <div class="slide__price"><span><span id="price">${u?_:p}</span>€</span>/чел</div>
                
                        ${u?y:""}
                
                        ${u?D:""}
                    </div>
                </div>
            </div>
        `)}dateFormat(t){const r=t.replace(/.{6}/,""),s=t.replace(/.{3}/,"").replace(/\.[0-9]{4}/,""),e=t.replace(/\.\w{2}\.\w{4}/,""),i=new Date(`${r}-${s}-${e}`),n=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],l=i.getDate(),d=n[i.getMonth()],c=i.getFullYear();return`${l} ${d} ${c} г.`}changeInfo(t){o(".top-img__hotel-name").html(t.name),o("#country").html(t.country),o("#local").html(t.region),o("#date-flight").html(this.dateFormat(t.date)),o("#days").html(t.duration),o("#departure").html(t.departureIn),o("#foods").html(t.meals),o("#rooms").html(t.room.join(", ")),o(".tour__price-sum").html(t.price[0]).attr("data-price",t.price),o(".tour__total-price").html(t.price[0]),o(".text-block__main-text").html(t.hotelInfo.description),o("#location").html(t.hotelInfo.location),this.stars(t.star),this.renderPhotoSlide(t.img),this.renderList(o("#forKids"),t.hotelInfo.forKids),this.renderList(o("#beach"),t.hotelInfo.beach),this.renderList(o("#allRooms"),t.hotelInfo.rooms),this.renderList(o("#restaurants"),t.hotelInfo.restaurants),this.renderList(o("#sports"),t.hotelInfo.sport),this.renderList(o("#service"),t.hotelInfo.service),this.map(t.country,t.region)}stars(t){for(let r=0;r<t;r++)o(".top-img__hotel-stars").append(`
                <svg><use xlink:href="#start"></use></svg>
            `)}renderList(t,r){r.forEach(s=>{t.append(`
                <li>${s}</li>
            `)})}renderPhotoSlide(t){const r=o("#swiper-image-two"),s=o("#swiper-image-one");t.forEach((e,i)=>{r.append(`
                <div class="swiper-slide">
                <picture>
                    <source srcset="${e.urlWebp}"/>
                    <img src="${e.url}" alt="Description of the image" ${i!==0?'loading="lazy"':""} width="730" height="499"/>
                </picture>
                </div>
            `),s.append(`
            <div class="swiper-slide">
            <picture>
                <source srcset="${e.urlWebp}"/>
                <img src="${e.url}" alt="Description of the image" ${i>3?'loading="lazy"':""} width="730" height="499"/>
            </picture>
            </div>
        `)}),new H}}class F{objData;orderBtn;user;currentUrl;constructor(){this.currentUrl=new URL(window.location.href),this.objData={},this.objData.id=this.currentUrl.searchParams.get("id")||null,this.orderBtn=o(".tour__btn"),this.user=!1,this.init()}init(){this.getSing(),this.setOrder(),this.dateOrder()}async getSing(){const t=await new x().promise();t&&(this.user=t,this.objData.email=t.email?t.email:null)}dateOrder(){const t=new Date,r=t.getTime();this.objData.idOrder=+String(r).slice(3),this.objData.date=this.dateFormat(t)}setOrder(){this.orderBtn.on("click",async()=>{if(typeof this.user!="boolean"){const t=this.user.uid,r=v(w);this.objData.price=+o(".tour__total-price").html().replace(" ",""),this.objData.payStatus=!1;const s=g(r,"users",t);(await q(s)).exists()?await E(s,{orders:C(this.objData)}):await A(g(r,"users",t),{orders:[this.objData]}),confirm("Тур добавлен и ожидает оплаты, перейти в личный кабинет?")&&(window.location.href="Account.html")}else confirm("Чтобы забронировать тур необходимо авторизоваться, перейти на страницу авторизации?")&&(window.location.href="authorization.html")})}dateFormat(t){const r=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],s=t.getDate(),e=r[t.getMonth()],i=t.getFullYear(),n=t.getHours(),l=t.getMinutes();return`${s} ${e} ${i} ${n}:${l}`}}document.addEventListener("DOMContentLoaded",()=>{class h{infoBlock;header;footer;pullData;order;constructor(){this.infoBlock=new K,this.header=new S,this.footer=new $,this.pullData=new I,this.order=new F,this.init()}init(){}}new h});
