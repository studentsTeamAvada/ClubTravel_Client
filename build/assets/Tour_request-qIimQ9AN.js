import{$ as r}from"./jquery-DgZYk2H_.js";import{H as u}from"./header-ARewE4Ia.js";import{F as p}from"./footer-QL4Ufj9G.js";import{A as _}from"./air-datepicker-D2xVSEhC.js";import{P as f}from"./preloader-995_IHTn.js";import{v as m,A as v}from"./AsYouType-EoxT6__x.js";class b{dropDown;dropMain;btn;allAccordions;countryMainDrop;tourMainDrop;constructor(){this.dropDown=r(".drop-country"),this.dropMain=r(".drop-country__accordions"),this.btn=r(".drop-country__btn"),this.allAccordions=r(".accordion"),this.countryMainDrop=r(".drop-country__county"),this.tourMainDrop=r(".drop-country__tour"),this.init()}init(){this.open(),this.observer(),this.accordion()}checkTour(){return this.countryMainDrop.html()==="Страна"?(console.log(1),!1):(console.log(2),!0)}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("drop-country_active")});const o=this;r(document).on("click",function(t){o.dropDown.has(t.target).length==0&&o.dropDown.removeClass("drop-country_active")})}observer(){const o=Number(this.dropMain.height()),t=this;r(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function e(l){l.forEach(c=>{const a=Number(r(window).height()),d=Number(c.boundingClientRect.top);a>700&&d>0&&(c.isIntersecting?(t.dropDown.addClass("drop-country_bottom"),t.dropDown.removeClass("drop-country_top")):(t.dropDown.addClass("drop-country_top"),t.dropDown.removeClass("drop-country_bottom")))})}const n=r(".drop-country__btn"),s=new IntersectionObserver(e,i);n.each(function(l,c){s.observe(c)})})}accordion(){const o=this;this.allAccordions.each((e,n)=>{i(n),t(n)});function t(e){const n=e.querySelectorAll("li"),s=String(e.querySelector(".accordion__country")?.textContent);n.forEach(l=>{l.addEventListener("click",()=>{o.countryMainDrop.html(s),o.tourMainDrop.html(String(l.textContent)),o.dropDown.removeClass("drop-country_active"),r(".drop-country").removeClass("drop-country_error")})})}function i(e){document.addEventListener("click",n=>{e.contains(n.target)?e.classList.toggle("accordion_active"):e.classList.remove("accordion_active")})}}}class g{calendar;calendarMain;btn;form;currentSelDate;currentNextDate;datepicker;between;constructor(){this.form=r(".form"),this.calendar=r(".calendar"),this.calendarMain=r(".calendar__main"),this.btn=r(".calendar__btn"),this.currentSelDate=new Date,this.currentNextDate=new Date,this.between=0,this.init()}init(){this.open(),this.observer(),this.airDatepicker(),this.counter()}newDate(o=!0,t=!1){o?r("#start-date").html(this.formatDate(this.currentSelDate)):r("#start-date").html(""),t?r("#final-date").html(this.formatDate(this.currentNextDate)):r("#final-date").html("")}airDatepicker(){const o=this,t=new Date().setDate(new Date().getDate()+1),i=new Date().setDate(new Date().getFullYear()+5);this.datepicker=new _("#el",{range:!0,toggleSelected:!0,multipleDatesSeparator:" -",minDate:t,onSelect({date:e}){const n=e;n[1]?(o.currentNextDate=new Date(n[1]),o.newDate(!0,!0),o.datepicker?.update({minDate:t,maxDate:i}),o.selectCount()):n[0]?(o.currentSelDate=new Date(n[0]),o.newDate(),o.datepicker?.update({minDate:new Date(n[0]),maxDate:new Date(n[0]).setDate(n[0].getDate()+18)})):(o.datepicker?.update({minDate:t,maxDate:i}),o.newDate(!1,!1))}})}selectCount(){const o=this.currentNextDate.getTime()-this.currentSelDate.getTime(),t=Math.floor(o/(1e3*60*60*24));console.log(t),r(".form__counter-count").html(String(t))}counter(){const o=r(".form__counter-add"),t=r(".form__counter-remove"),i=r(".form__counter-count"),e=this;function n(){let c=+i.text();if(c<100){const a=c+1;l(String(a))}}function s(){let c=+i.text();if(c>1){const a=c-1;l(String(a))}}function l(c){i.html(c),e.selectFinishDate(+c)}o.on("click",n),t.on("click",s)}selectFinishDate(o=1){const t=new Date(new Date().setDate(this.currentSelDate.getDate()+o));this.datepicker?.clear(),this.datepicker?.selectDate(this.currentSelDate),this.datepicker?.selectDate(t),console.log(this.currentSelDate),console.log(this.currentNextDate)}formatDate(o){const t=o.getDate(),i=o.getMonth()+1,e=o.getFullYear(),n=t<10?"0"+t:t,s=i<10?"0"+i:i;return`${n}.${s}.${e}`}open(){this.btn.on("click",()=>{this.calendar.toggleClass("calendar_active")});const o=this;r(document).on("click",function(t){o.calendar.has(t.target).length==0&&o.calendar.removeClass("calendar_active")})}observer(){const o=Number(this.calendarMain.height()),t=this;r(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function e(l){l.forEach(c=>{const a=Number(r(window).height()),d=Number(c.boundingClientRect.top);a>700&&d>0&&(c.isIntersecting?(t.calendar.addClass("calendar_bottom"),t.calendar.removeClass("calendar_top")):(t.calendar.addClass("calendar_top"),t.calendar.removeClass("calendar_bottom")))})}const n=r(".calendar__btn"),s=new IntersectionObserver(e,i);n.each(function(l,c){s.observe(c)})})}}class w{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(o){this.dropDown=r(o).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=r(".form__drop-tags"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const o=this;r(document).on("click",function(t){o.dropDown.has(t.target).length==0&&o.dropDown.removeClass("dropdown_active")})}counter(o,t=!1){const i=o.find(".dropdown__count-add"),e=o.find(".dropdown__count-remove"),n=o.find(".dropdown__count-current"),s=this;function l(){let a=+n.text();if(a<9){const d=a+1;n.html(String(d)),t?s.timeout(d,1):s.currentAbdul=d}}function c(){let a=+n.text();if(a>1){const d=a-1;n.html(String(d)),t?(s.timeout(d,2),r(".dropdown__error").removeClass("dropdown__error_active-kids")):s.currentAbdul=d}}i.on("click",l),e.on("click",c)}addAgeSelect(o,t=!1){const e=this.dropDown.find(".children__drop").length;if(console.log(e),t){const n=this.kids();console.log(n),this.children.html("");let s=0;for(const l in n)for(let c=0;c<+n[l];c++){this.children.append(`
            <div id="drop-${s}" class="children__drop">
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
        `);const a=r("<script>").attr("type","text/javascript").text(`
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
              dropDown('#drop-${s}')
          `);r("body").append(a),s++}}else for(let n=0;n<o;n++)if(n>e-1){this.children.append(`
            <div id="drop-${n}" class="children__drop">
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
        `);const s=r("<script>").attr("type","text/javascript").text(`
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
          `);r("body").append(s)}}removeAgeSelect(o){this.dropDown.find(".children__drop").each((i,e)=>{i>o-1&&(e.classList.remove("children__drop_opacity"),setTimeout(()=>{e.remove()},150))})}removeTag(){this.tegContainer.on("click",o=>{const t=o.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),i=this.dropDown.find(".children__drop"),e=r(".dropdown__count-two").find(".dropdown__count-current");o.target.innerHTML==="+"&&(i.each((n,s)=>{const l=s.querySelector(".children__current")?.textContent;t===l&&(o.target.parentElement?.remove(),s.style.display="none",s.remove())}),this.addAgeSelect(1,!0),e.html(String(this.currentKids)),this.kids(),r("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(o,t){function i(){const e=Math.ceil(o/2);let n=0;return e===1?n=40:e>1&&(n=e*45-5),n}t===1?(o%2!==0&&this.children.css("height",`${i()}px`),this.addAgeSelect(o)):t===2?(o%2===0&&this.children.css("height",`${i()}px`),this.removeAgeSelect(o)):this.children.css("height",`${i()}px`)}kids(){const o=this.dropDown.find(".children__drop"),t=this,i={};return o.each(function(e,n){const s=String(n.querySelector(".children__current")?.textContent);s==="Укажите возраст"?(n.classList.add("children__drop_error"),t.error.addClass("dropdown__error_active-kids")):i.hasOwnProperty(s)?i[s]++:i[s]=1}),this.currentKids=Object.keys(i).reduce((e,n)=>(e+=+i[n],e),0),i}addPeople(){this.addBtn.on("click",()=>{const o=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const e in o)this.tegContainer.append(`
            <li>${e} x${o[e]} <span>+</span></li>
          `);const i=new CustomEvent("myCustomEvent");document.dispatchEvent(i)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class D{food;foodMain;btn;allLi;currentSelect;errorFood;constructor(){this.food=r(".food"),this.foodMain=r(".food__list"),this.btn=r(".food__btn"),this.allLi=this.food.find("li"),this.currentSelect=r(".food__btn-info"),this.errorFood=r(".form__error-food"),this.init()}init(){this.open(),this.observer(),this.select()}select(){this.allLi.each((o,t)=>{t.addEventListener("click",()=>{this.currentSelect.html(String(t.textContent)),this.errorFood.removeClass("form__error-food_active")})})}checkInput(){return this.currentSelect.html()=="Выбрать"?(this.errorFood.addClass("form__error-food_active"),!1):(this.errorFood.removeClass("form__error-food_active"),!0)}open(){this.food.on("click",()=>{this.food.toggleClass("food_active")});const o=this;r(document).on("click",function(t){o.food.has(t.target).length==0&&o.food.removeClass("food_active")})}observer(){const o=Number(this.foodMain.height()),t=this;r(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function e(l){l.forEach(c=>{const a=Number(r(window).height()),d=Number(c.boundingClientRect.top);a>700&&d>0&&(c.isIntersecting?(t.food.addClass("food_bottom"),t.food.removeClass("food_top")):(t.food.addClass("food_top"),t.food.removeClass("food_bottom")))})}const n=r(".food__btn"),s=new IntersectionObserver(e,i);n.each(function(l,c){s.observe(c)})})}}document.addEventListener("DOMContentLoaded",()=>{class h{header;footer;food;input;inputBtn;tabsBtn;form;tabsSlider;dropDown;calendar;DropPeople;formBtn;stars;inputForm;constructor(){this.header=new u,this.footer=new p,this.food=new D,this.dropDown=new b,this.calendar=new g,this.DropPeople=new w(".form__drop-guests"),this.stars=r(".form__stars-one-star"),this.input=r("#adviser-inp"),this.inputBtn=r(".adviser__btn"),this.inputForm=r("#adviser__form"),this.tabsBtn=r(".form__tabs"),this.form=r(".form"),this.formBtn=this.form.find(".form__btn"),this.tabsSlider=r(".form__tabs-slider"),this.validateTel("#adviser__form"),this.tabs(),this.points(),this.stopReload(),this.clickFormBtn(),this.inputMask(),this.SelectStars(),this.validateMainFormOne()}SelectStars(){const t=this;this.stars.each((e,n)=>{n.addEventListener("click",()=>{i(Number(n.getAttribute("data-num")))})});function i(e){t.stars.each((n,s)=>{n<e?s.classList.add("form__stars-one-star_active"):s.classList.remove("form__stars-one-star_active")})}}stopReload(){this.form.on("submit",t=>{t.preventDefault()})}tabs(){const t=document.querySelector(".form__tab-one"),i=document.querySelector(".form__tab-two"),e=document.querySelector(".form__tab-three");this.tabsBtn.each((n,s)=>{s.addEventListener("click",l=>{t?.contains(l.target)?this.points(1):i?.contains(l.target)?this.points(2):e?.contains(l.target)&&this.points(3)})})}points(t=1){console.log(t);const i=document.querySelector(".form__tab-one"),e=document.querySelector(".form__tab-two"),n=document.querySelector(".form__tab-three"),s=!r(".form").is(".form_erroe-one"),l=!r(".form").is(".form_erroe-two");t===1?(n?.classList.remove("form__tab_active"),e?.classList.remove("form__tab_active"),i?.classList.add("form__tab_active"),this.form.removeClass("form_state-two form_state-three"),this.form.addClass("form_state-one"),this.tabsSlider.css({left:"0"})):t===2&&s?(n?.classList.remove("form__tab_active"),i?.classList.remove("form__tab_active"),e?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-three"),this.form.addClass("form_state-two"),this.tabsSlider.css({left:"33.3%"})):t===3&&s&&l&&(i?.classList.remove("form__tab_active"),e?.classList.remove("form__tab_active"),n?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-two"),this.form.addClass("form_state-three"),this.tabsSlider.css({left:"68%"}))}clickFormBtn(){this.formBtn.on("click",()=>{const t=r(".form").is(".form_state-one"),i=r(".form").is(".form_state-two"),e=r(".form").is(".form_state-three");t||(i?this.points(3):e&&this.points(1))})}addError(t){}clickBtn(){alert("В скором времени вам позвонят."),this.input.val(""),r(".adviser__input").removeClass("adviser__input_active")}inputMask(){document.querySelectorAll("input[name='phone']").forEach(i=>{const e=i;e.addEventListener("input",()=>{e.value.length===1&&(e.value="+"+e.value,e.value==="+0"&&(e.value="+380")),m(e.value+"0")==="TOO_LONG"&&(e.value=e.value.slice(0,-1)),e.value=new v().input(e.value)})})}validateTel(t){const i=r(t);r.validator.addMethod("min",function(e){return/\+380/.test(e)?e.replace(/ |\+/g,"").length>=12:e.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),i.validate({rules:{phone:{min:!0,required:!0}},messages:{phone:{required:"Введите номер"}},highlight:function(e,n,s){r(e).addClass("border-error").removeClass(s)},unhighlight:function(e,n,s){r(e).addClass(s).removeClass("border-error")},submitHandler(e){r(t).find(".input-row").removeClass("input_active"),console.log(r(t)),alert("Мы скоро с вами свяжемся"),r(e).trigger("reset")}})}validateMainFormOne(){function t(){console.log(12),r(".drop-country__county").html()==="Страна"&&r(".drop-country").addClass("drop-country_error")}r(".form__btn-first-state").on("click",t)}}new h,new f});
