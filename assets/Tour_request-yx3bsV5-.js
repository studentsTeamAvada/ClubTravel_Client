import{$ as e}from"./jquery-DgZYk2H_.js";import{H as u}from"./header-ARewE4Ia.js";import{F as p}from"./footer-QL4Ufj9G.js";import{A as _}from"./air-datepicker-D2xVSEhC.js";import{P as m}from"./preloader-995_IHTn.js";import{I as f}from"./isAuthorization-wZk79ahV.js";import{v,A as g}from"./AsYouType-EoxT6__x.js";import"./index-dd468b12-T5X4n-5H.js";import"./index.esm2017-ZxaceZ0h.js";class b{dropDown;dropMain;btn;allAccordions;countryMainDrop;tourMainDrop;constructor(){this.dropDown=e(".drop-country"),this.dropMain=e(".drop-country__accordions"),this.btn=e(".drop-country__btn"),this.allAccordions=e(".accordion"),this.countryMainDrop=e(".drop-country__county"),this.tourMainDrop=e(".drop-country__tour"),this.init()}init(){this.open(),this.observer(),this.accordion()}checkTour(){return this.countryMainDrop.html()==="Страна"?(console.log(1),!1):(console.log(2),!0)}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("drop-country_active")});const o=this;e(document).on("click",function(t){o.dropDown.has(t.target).length==0&&o.dropDown.removeClass("drop-country_active")})}observer(){const o=Number(this.dropMain.height()),t=this;e(document).ready(function(){const n={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function r(a){a.forEach(c=>{const l=Number(e(window).height()),d=Number(c.boundingClientRect.top);l>700&&d>0&&(c.isIntersecting?(t.dropDown.addClass("drop-country_bottom"),t.dropDown.removeClass("drop-country_top")):(t.dropDown.addClass("drop-country_top"),t.dropDown.removeClass("drop-country_bottom")))})}const i=e(".drop-country__btn"),s=new IntersectionObserver(r,n);i.each(function(a,c){s.observe(c)})})}accordion(){const o=this;this.allAccordions.each((r,i)=>{n(i),t(i)});function t(r){const i=r.querySelectorAll("li"),s=String(r.querySelector(".accordion__country")?.textContent);i.forEach(a=>{a.addEventListener("click",()=>{o.countryMainDrop.html(s),o.tourMainDrop.html(String(a.textContent)),o.dropDown.removeClass("drop-country_active"),document.dispatchEvent(new Event("selectTour"))})})}function n(r){document.addEventListener("click",i=>{r.contains(i.target)?r.classList.toggle("accordion_active"):r.classList.remove("accordion_active")})}}}class w{calendar;calendarMain;btn;form;currentSelDate;currentNextDate;datepicker;between;constructor(){this.form=e(".form"),this.calendar=e(".calendar"),this.calendarMain=e(".calendar__main"),this.btn=e(".calendar__btn"),this.currentSelDate=new Date,this.currentNextDate=new Date,this.between=0,this.init()}init(){this.open(),this.observer(),this.airDatepicker(),this.counter()}newDate(o=!0,t=!1){o?(e("#start-date").html(this.formatDate(this.currentSelDate)),document.dispatchEvent(new Event("startDate"))):e("#start-date").html(""),t?(e("#final-date").html(this.formatDate(this.currentNextDate)),document.dispatchEvent(new Event("finalDate"))):e("#final-date").html("")}airDatepicker(){const o=this,t=new Date().setDate(new Date().getDate()+1),n=new Date().setDate(new Date().getFullYear()+5);this.datepicker=new _("#el",{range:!0,toggleSelected:!0,multipleDatesSeparator:" -",minDate:t,onSelect({date:r}){const i=r;i[1]?(o.currentNextDate=new Date(i[1]),o.newDate(!0,!0),o.datepicker?.update({minDate:t,maxDate:n}),o.selectCount()):i[0]?(o.currentSelDate=new Date(i[0]),o.newDate(),o.datepicker?.update({minDate:new Date(i[0]),maxDate:new Date(i[0]).setDate(i[0].getDate()+18)})):(o.datepicker?.update({minDate:t,maxDate:n}),o.newDate(!1,!1))}})}selectCount(){const o=this.currentNextDate.getTime()-this.currentSelDate.getTime(),t=Math.floor(o/(1e3*60*60*24));console.log(t),e(".form__counter-count").html(String(t))}counter(){const o=e(".form__counter-add"),t=e(".form__counter-remove"),n=e(".form__counter-count"),r=this;function i(){let c=+n.text();if(c<100){const l=c+1;a(String(l))}}function s(){let c=+n.text();if(c>1){const l=c-1;a(String(l))}}function a(c){n.html(c),r.selectFinishDate(+c)}o.on("click",i),t.on("click",s)}selectFinishDate(o=1){const t=new Date(new Date().setDate(this.currentSelDate.getDate()+o));this.datepicker?.clear(),this.datepicker?.selectDate(this.currentSelDate),this.datepicker?.selectDate(t),console.log(this.currentSelDate),console.log(this.currentNextDate)}formatDate(o){const t=o.getDate(),n=o.getMonth()+1,r=o.getFullYear(),i=t<10?"0"+t:t,s=n<10?"0"+n:n;return`${i}.${s}.${r}`}open(){this.btn.on("click",()=>{this.calendar.toggleClass("calendar_active")});const o=this;e(document).on("click",function(t){o.calendar.has(t.target).length==0&&o.calendar.removeClass("calendar_active")})}observer(){const o=Number(this.calendarMain.height()),t=this;e(document).ready(function(){const n={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function r(a){a.forEach(c=>{const l=Number(e(window).height()),d=Number(c.boundingClientRect.top);l>700&&d>0&&(c.isIntersecting?(t.calendar.addClass("calendar_bottom"),t.calendar.removeClass("calendar_top")):(t.calendar.addClass("calendar_top"),t.calendar.removeClass("calendar_bottom")))})}const i=e(".calendar__btn"),s=new IntersectionObserver(r,n);i.each(function(a,c){s.observe(c)})})}}class D{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(o){this.dropDown=e(o).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=e(".form__drop-tags"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const o=this;e(document).on("click",function(t){o.dropDown.has(t.target).length==0&&o.dropDown.removeClass("dropdown_active")})}counter(o,t=!1){const n=o.find(".dropdown__count-add"),r=o.find(".dropdown__count-remove"),i=o.find(".dropdown__count-current"),s=this;function a(){let l=+i.text();if(l<9){const d=l+1;i.html(String(d)),t?s.timeout(d,1):s.currentAbdul=d}}function c(){let l=+i.text();if(l>1){const d=l-1;i.html(String(d)),t?(s.timeout(d,2),e(".dropdown__error").removeClass("dropdown__error_active-kids")):s.currentAbdul=d}}n.on("click",a),r.on("click",c)}addAgeSelect(o,t=!1){const r=this.dropDown.find(".children__drop").length;if(console.log(r),t){const i=this.kids();console.log(i),this.children.html("");let s=0;for(const a in i)for(let c=0;c<+i[a];c++){this.children.append(`
            <div id="drop-${s}" class="children__drop">
                <button class="children__btn">
                    <span class="children__current">${a}</span>
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
        `);const l=e("<script>").attr("type","text/javascript").text(`
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
          `);e("body").append(l),s++}}else for(let i=0;i<o;i++)if(i>r-1){this.children.append(`
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
        `);const s=e("<script>").attr("type","text/javascript").text(`
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
          `);e("body").append(s)}}removeAgeSelect(o){this.dropDown.find(".children__drop").each((n,r)=>{n>o-1&&(r.classList.remove("children__drop_opacity"),setTimeout(()=>{r.remove()},150))})}removeTag(){this.tegContainer.on("click",o=>{const t=o.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),n=this.dropDown.find(".children__drop"),r=e(".dropdown__count-two").find(".dropdown__count-current");o.target.innerHTML==="+"&&(n.each((i,s)=>{const a=s.querySelector(".children__current")?.textContent;t===a&&(o.target.parentElement?.remove(),s.style.display="none",s.remove())}),this.addAgeSelect(1,!0),r.html(String(this.currentKids)),this.kids(),e("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(o,t){function n(){const r=Math.ceil(o/2);let i=0;return r===1?i=40:r>1&&(i=r*45-5),i}t===1?(o%2!==0&&this.children.css("height",`${n()}px`),this.addAgeSelect(o)):t===2?(o%2===0&&this.children.css("height",`${n()}px`),this.removeAgeSelect(o)):this.children.css("height",`${n()}px`)}kids(){const o=this.dropDown.find(".children__drop"),t=this,n={};return o.each(function(r,i){const s=String(i.querySelector(".children__current")?.textContent);s==="Укажите возраст"?(i.classList.add("children__drop_error"),t.error.addClass("dropdown__error_active-kids")):n.hasOwnProperty(s)?n[s]++:n[s]=1}),this.currentKids=Object.keys(n).reduce((r,i)=>(r+=+n[i],r),0),n}addPeople(){this.addBtn.on("click",()=>{const o=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const r in o)this.tegContainer.append(`
            <li>${r} x${o[r]} <span>+</span></li>
          `);const n=new CustomEvent("myCustomEvent");document.dispatchEvent(n)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class y{food;foodMain;btn;allLi;currentSelect;errorFood;constructor(){this.food=e(".food"),this.foodMain=e(".food__list"),this.btn=e(".food__btn"),this.allLi=this.food.find("li"),this.currentSelect=e(".food__btn-info"),this.errorFood=e(".form__error-food"),this.init()}init(){this.open(),this.observer(),this.select()}select(){this.allLi.each((o,t)=>{t.addEventListener("click",()=>{this.currentSelect.html(String(t.textContent)),this.errorFood.removeClass("form__error-food_active")})})}checkInput(){return this.currentSelect.html()=="Выбрать"?(this.errorFood.addClass("form__error-food_active"),!1):(this.errorFood.removeClass("form__error-food_active"),!0)}open(){this.food.on("click",()=>{this.food.toggleClass("food_active")});const o=this;e(document).on("click",function(t){o.food.has(t.target).length==0&&o.food.removeClass("food_active")})}observer(){const o=Number(this.foodMain.height()),t=this;e(document).ready(function(){const n={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function r(a){a.forEach(c=>{const l=Number(e(window).height()),d=Number(c.boundingClientRect.top);l>700&&d>0&&(c.isIntersecting?(t.food.addClass("food_bottom"),t.food.removeClass("food_top")):(t.food.addClass("food_top"),t.food.removeClass("food_bottom")))})}const i=e(".food__btn"),s=new IntersectionObserver(r,n);i.each(function(a,c){s.observe(c)})})}}document.addEventListener("DOMContentLoaded",()=>{class h{header;footer;food;input;inputBtn;tabsBtn;form;tabsSlider;dropDown;calendar;DropPeople;formBtn;stars;inputForm;constructor(){this.header=new u,this.footer=new p,this.food=new y,this.dropDown=new b,this.calendar=new w,this.DropPeople=new D(".form__drop-guests"),this.stars=e(".form__stars-one-star"),this.input=e("#adviser-inp"),this.inputBtn=e(".adviser__btn"),this.inputForm=e("#adviser__form"),this.tabsBtn=e(".form__tabs"),this.form=e(".form"),this.formBtn=this.form.find(".form__btn"),this.tabsSlider=e(".form__tabs-slider"),this.validateTel("#adviser__form"),this.tabs(),this.points(),this.stopReload(),this.clickFormBtn(),this.inputMask(),this.SelectStars(),this.validateMainFormOne(),this.validateMainFormThree()}SelectStars(){const t=this;this.stars.each((r,i)=>{i.addEventListener("click",()=>{n(Number(i.getAttribute("data-num")))})});function n(r){t.stars.each((i,s)=>{i<r?s.classList.add("form__stars-one-star_active"):s.classList.remove("form__stars-one-star_active")})}}stopReload(){this.form.on("submit",t=>{t.preventDefault()})}tabs(){const t=document.querySelector(".form__tab-one"),n=document.querySelector(".form__tab-two"),r=document.querySelector(".form__tab-three");this.tabsBtn.each((i,s)=>{s.addEventListener("click",a=>{t?.contains(a.target)?this.points(1):n?.contains(a.target)?this.points(2):r?.contains(a.target)&&this.points(3)})})}points(t=1){const n=document.querySelector(".form__tab-one"),r=document.querySelector(".form__tab-two"),i=document.querySelector(".form__tab-three"),s=!e(".form").is(".form_erroe-one"),a=!e(".form").is(".form_erroe-two");t===1?(i?.classList.remove("form__tab_active"),r?.classList.remove("form__tab_active"),n?.classList.add("form__tab_active"),this.form.removeClass("form_state-two form_state-three"),this.form.addClass("form_state-one"),this.tabsSlider.css({left:"0"})):t===2&&s?(i?.classList.remove("form__tab_active"),n?.classList.remove("form__tab_active"),r?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-three"),this.form.addClass("form_state-two"),this.tabsSlider.css({left:"33.3%"})):t===3&&s&&a&&(n?.classList.remove("form__tab_active"),r?.classList.remove("form__tab_active"),i?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-two"),this.form.addClass("form_state-three"),this.tabsSlider.css({left:"68%"}))}clickFormBtn(){this.formBtn.on("click",()=>{})}addError(t){}clickBtn(){alert("В скором времени вам позвонят."),this.input.val(""),e(".adviser__input").removeClass("adviser__input_active")}inputMask(){document.querySelectorAll("input[name='phone']").forEach(n=>{const r=n;r.addEventListener("input",()=>{r.value.length===1&&(r.value="+"+r.value,r.value==="+0"&&(r.value="+380")),v(r.value+"0")==="TOO_LONG"&&(r.value=r.value.slice(0,-1)),r.value=new g().input(r.value)})})}validateTel(t){const n=e(t);e.validator.addMethod("min",function(r){return/\+380/.test(r)?r.replace(/ |\+/g,"").length>=12:r.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),n.validate({rules:{phone:{min:!0,required:!0}},messages:{phone:{required:"Введите номер"}},submitHandler(r){e(t).find(".input-row").removeClass("input_active"),console.log(e(t)),alert("Мы скоро с вами свяжемся"),e(r).trigger("reset")}})}validateMainFormOne(){const t=e("#form-state-one");document.addEventListener("selectTour",()=>{e("#drop-country").valid()}),document.addEventListener("startDate",()=>{e("#drop-calendar").valid()}),document.addEventListener("finalDate",()=>{e("#drop-calendar").valid()}),e.validator.addMethod("dropCountry",function(){return e(".drop-country__county").html()!=="Страна"},"Выбирите тур"),e.validator.addMethod("departure",function(){return e("#start-date").html().length>0},"Выберите дату вылета"),e.validator.addMethod("arrived",function(){return e("#final-date").html().length>0},"Выберите дату возвращения"),t.validate({rules:{dropCalendar:{departure:!0,arrived:!0},dropCountry:{dropCountry:!0}},submitHandler(){alert("Мы скоро с вами свяжемся")}})}validateMainFormThree(){const t=e("#form-state-three");e.validator.addMethod("laxEmail",function(n){return/^(?!.*\.\.)[\w.-]{3,20}@[\wа-я.][\wа-я.-]{3,20}[\wа-я.]\.[a-z]{2,10}/.test(n)},"Введите корректный email"),e.validator.addMethod("min",function(n){return/\+380/.test(n)?n.replace(/ |\+/g,"").length>=12:n.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),t.validate({rules:{phone:{min:!0},email:{laxEmail:!0},name:{required:!0,minlength:3}},messages:{name:{required:"Введите ваше имя",minlength:"Минимум три символа"}},submitHandler(n){alert("Мы скоро с вами свяжемся2"),e(n).trigger("reset")}})}}new h,new m,new f});
