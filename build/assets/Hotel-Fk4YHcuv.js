import{$ as s}from"./jquery-eLIhC4UN.js";import{H as p}from"./header-4uj2AVG8.js";import{F as u}from"./footer-RPwhMWUh.js";import{b as _,c as m}from"./swiper-G_k_SzQb.js";import{P as f}from"./preloader-hw-o7nAZ.js";import{a as g}from"./firebase-WXR3vcUU.js";import{g as w,d as v,b}from"./index.esm2017-LJKvdAav.js";import{g as y,o as S}from"./index-dd468b12-VWmag0GQ.js";import"./index.esm-RQMDg1fI.js";import"./autoplay-3nwb4p1k.js";class D{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(t){this.dropDown=s(t).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=s(".tour__quantity-tegs"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const t=this;s(document).on("click",function(r){t.dropDown.has(r.target).length==0&&t.dropDown.removeClass("dropdown_active")})}counter(t,r=!1){const e=t.find(".dropdown__count-add"),o=t.find(".dropdown__count-remove"),i=t.find(".dropdown__count-current"),n=this;function c(){let l=+i.text();if(l<9){const d=l+1;i.html(String(d)),r?n.timeout(d,1):n.currentAbdul=d}}function h(){let l=+i.text();if(l>1){const d=l-1;i.html(String(d)),r?(n.timeout(d,2),s(".dropdown__error").removeClass("dropdown__error_active-kids")):n.currentAbdul=d}}e.on("click",c),o.on("click",h)}addAgeSelect(t,r=!1){const o=this.dropDown.find(".children__drop").length;if(console.log(o),r){const i=this.kids();console.log(i),this.children.html("");let n=0;for(const c in i)for(let h=0;h<+i[c];h++){this.children.append(`
            <div id="drop-${n}" class="children__drop">
                <button class="children__btn">
                    <span class="children__current">${c}</span>
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
        `);const l=s("<script>").attr("type","text/javascript").text(`
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
          `);s("body").append(l),n++}}else for(let i=0;i<t;i++)if(i>o-1){this.children.append(`
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
        `);const n=s("<script>").attr("type","text/javascript").text(`
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
          `);s("body").append(n)}}removeAgeSelect(t){this.dropDown.find(".children__drop").each((e,o)=>{e>t-1&&(o.classList.remove("children__drop_opacity"),setTimeout(()=>{o.remove()},150))})}removeTag(){this.tegContainer.on("click",t=>{const r=t.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),e=this.dropDown.find(".children__drop"),o=s(".dropdown__count-two").find(".dropdown__count-current");t.target.innerHTML==="+"&&(e.each((i,n)=>{const c=n.querySelector(".children__current")?.textContent;r===c&&(t.target.parentElement?.remove(),n.style.display="none",n.remove())}),this.addAgeSelect(1,!0),o.html(String(this.currentKids)),this.kids(),s("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(t,r){function e(){const o=Math.ceil(t/2);let i=0;return o===1?i=40:o>1&&(i=o*45-5),i}r===1?(t%2!==0&&this.children.css("height",`${e()}px`),this.addAgeSelect(t)):r===2?(t%2===0&&this.children.css("height",`${e()}px`),this.removeAgeSelect(t)):this.children.css("height",`${e()}px`)}kids(){const t=this.dropDown.find(".children__drop"),r=this,e={};return t.each(function(o,i){const n=String(i.querySelector(".children__current")?.textContent);n==="Укажите возраст"?(i.classList.add("children__drop_error"),r.error.addClass("dropdown__error_active-kids")):e.hasOwnProperty(n)?e[n]++:e[n]=1}),this.currentKids=Object.keys(e).reduce((o,i)=>(o+=+e[i],o),0),e}addPeople(){this.addBtn.on("click",()=>{const t=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const o in t)this.tegContainer.append(`
            <li>${o} x${t[o]} <span>+</span></li>
          `);const e=new CustomEvent("myCustomEvent");document.dispatchEvent(e)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class x{priceOnePerson;totalPrice;dropDown;constructor(){this.priceOnePerson=s(".tour__price-sum").data("price"),this.totalPrice=s(".tour__total-price"),this.dropDown=new D(".tour__quantity-drop"),this.priceCalculator()}priceCalculator(){document.addEventListener("myCustomEvent",()=>{const t=this.dropDown.getKids()+this.dropDown.getAbduls(),r=String(+this.priceOnePerson*t);let e="";if(r.length>3){let o=0;for(let i=r.length-1;i>=0;i--)o++,e+=r[i],o===3&&(e+=" ");e=e.split("").reverse().join("")}else e=r;this.totalPrice.html(e),console.log(r)})}}class k{app;currentUrl;id;auth;constructor(){this.app=g,this.currentUrl=new URL(window.location.href),this.id=this.currentUrl.searchParams.get("id")||null,this.auth=y(),this.init()}async init(){this.addQuery(),this.getData(),this.getSing().then(t=>console.log(t))}getSing(){return new Promise(t=>{S(this.auth,r=>{t(!!r)})})}addQuery(){this.currentUrl.search="",this.currentUrl.searchParams.append("id","2xvc7W065aSKXG4o5mw7"),history.replaceState({},"",this.currentUrl),console.log(this.id)}async getData(){const t=w(this.app),r=v(t,"hotels",String(this.id)),e=await b(r);e.exists()?console.log("Document data:",e.data()):console.log("No such document!")}}document.addEventListener("DOMContentLoaded",()=>{class a{swiper;bottomSlider;infoBlock;header;footer;pullData;constructor(){this.swiper=new _,this.bottomSlider=new m,this.infoBlock=new x,this.header=new p,this.footer=new u,this.pullData=new k,this.init()}init(){}}new a,new f});
