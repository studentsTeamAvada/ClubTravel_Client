import{$ as s,P as p,H as u}from"./preloader-IQBbSx6n.js";import{F as _}from"./footer-5Z_-RnYv.js";import{b as f,c as m}from"./swiper-G_k_SzQb.js";import"./autoplay-3nwb4p1k.js";class v{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(t){this.dropDown=s(t).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=s(".tour__quantity-tegs"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const t=this;s(document).on("click",function(o){t.dropDown.has(o.target).length==0&&t.dropDown.removeClass("dropdown_active")})}counter(t,o=!1){const i=t.find(".dropdown__count-add"),r=t.find(".dropdown__count-remove"),e=t.find(".dropdown__count-current"),n=this;function c(){let l=+e.text();if(l<9){const d=l+1;e.html(String(d)),o?n.timeout(d,1):n.currentAbdul=d}}function a(){let l=+e.text();if(l>1){const d=l-1;e.html(String(d)),o?(n.timeout(d,2),s(".dropdown__error").removeClass("dropdown__error_active-kids")):n.currentAbdul=d}}i.on("click",c),r.on("click",a)}addAgeSelect(t,o=!1){const r=this.dropDown.find(".children__drop").length;if(console.log(r),o){const e=this.kids();console.log(e),this.children.html("");let n=0;for(const c in e)for(let a=0;a<+e[c];a++){this.children.append(`
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
          `);s("body").append(l),n++}}else for(let e=0;e<t;e++)if(e>r-1){this.children.append(`
            <div id="drop-${e}" class="children__drop">
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
              dropDown('#drop-${e}')
          `);s("body").append(n)}}removeAgeSelect(t){this.dropDown.find(".children__drop").each((i,r)=>{i>t-1&&(r.classList.remove("children__drop_opacity"),setTimeout(()=>{r.remove()},150))})}removeTag(){this.tegContainer.on("click",t=>{const o=t.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),i=this.dropDown.find(".children__drop"),r=s(".dropdown__count-two").find(".dropdown__count-current");t.target.innerHTML==="+"&&(i.each((e,n)=>{const c=n.querySelector(".children__current")?.textContent;o===c&&(t.target.parentElement?.remove(),n.style.display="none",n.remove())}),this.addAgeSelect(1,!0),r.html(String(this.currentKids)),this.kids(),s("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(t,o){function i(){const r=Math.ceil(t/2);let e=0;return r===1?e=40:r>1&&(e=r*45-5),e}o===1?(t%2!==0&&this.children.css("height",`${i()}px`),this.addAgeSelect(t)):o===2?(t%2===0&&this.children.css("height",`${i()}px`),this.removeAgeSelect(t)):this.children.css("height",`${i()}px`)}kids(){const t=this.dropDown.find(".children__drop"),o=this,i={};return t.each(function(r,e){const n=String(e.querySelector(".children__current")?.textContent);n==="Укажите возраст"?(e.classList.add("children__drop_error"),o.error.addClass("dropdown__error_active-kids")):i.hasOwnProperty(n)?i[n]++:i[n]=1}),this.currentKids=Object.keys(i).reduce((r,e)=>(r+=+i[e],r),0),i}addPeople(){this.addBtn.on("click",()=>{const t=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const r in t)this.tegContainer.append(`
            <li>${r} x${t[r]} <span>+</span></li>
          `);const i=new CustomEvent("myCustomEvent");document.dispatchEvent(i)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class w{priceOnePerson;totalPrice;dropDown;constructor(){this.priceOnePerson=s(".tour__price-sum").data("price"),this.totalPrice=s(".tour__total-price"),this.dropDown=new v(".tour__quantity-drop"),this.priceCalculator()}priceCalculator(){document.addEventListener("myCustomEvent",()=>{const t=this.dropDown.getKids()+this.dropDown.getAbduls(),o=String(+this.priceOnePerson*t);let i="";if(o.length>3){let r=0;for(let e=o.length-1;e>=0;e--)r++,i+=o[e],r===3&&(i+=" ");i=i.split("").reverse().join("")}else i=o;this.totalPrice.html(i),console.log(o)})}}document.addEventListener("DOMContentLoaded",()=>{class h{swiper;bottomSlider;infoBlock;header;footer;constructor(){this.swiper=new f,this.bottomSlider=new m,this.infoBlock=new w,this.header=new u,this.footer=new _,this.init()}init(){}}new h,new p});
