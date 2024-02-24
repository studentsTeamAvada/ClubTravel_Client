import{$ as e,H as u}from"./header-9Fuft6xP.js";import{F as p}from"./footer-pXvuOvyE.js";import{A as m}from"./air-datepicker-qFfkxUFE.js";import{P as _}from"./preloader-a9ovPH_o.js";import{a as f}from"./firebase-F47n0dmT.js";import{g as v,f as b,c as g}from"./index.esm2017-HY_ETrW2.js";import{v as w,A as D}from"./AsYouType-wvV6Yh-b.js";class y{dropDown;dropMain;btn;allAccordions;countryMainDrop;tourMainDrop;constructor(){this.dropDown=e(".drop-country"),this.dropMain=e(".drop-country__accordions"),this.btn=e(".drop-country__btn"),this.allAccordions=e(".accordion"),this.countryMainDrop=e(".drop-country__county"),this.tourMainDrop=e(".drop-country__tour"),this.init()}init(){this.open(),this.observer(),this.accordion()}checkTour(){return this.countryMainDrop.html()==="Страна"?(console.log(1),!1):(console.log(2),!0)}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("drop-country_active")});const r=this;e(document).on("click",function(t){r.dropDown.has(t.target).length==0&&r.dropDown.removeClass("drop-country_active")})}observer(){const r=Number(this.dropMain.height()),t=this;e(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${r+30}px 0px`,threshold:1};function o(c){c.forEach(a=>{const d=Number(e(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(t.dropDown.addClass("drop-country_bottom"),t.dropDown.removeClass("drop-country_top")):(t.dropDown.addClass("drop-country_top"),t.dropDown.removeClass("drop-country_bottom")))})}const n=e(".drop-country__btn"),s=new IntersectionObserver(o,i);n.each(function(c,a){s.observe(a)})})}accordion(){const r=this;this.allAccordions.each((o,n)=>{i(n),t(n)});function t(o){const n=o.querySelectorAll("li"),s=String(o.querySelector(".accordion__country")?.textContent);n.forEach(c=>{c.addEventListener("click",()=>{r.countryMainDrop.html(s),r.tourMainDrop.html(String(c.textContent)),r.dropDown.removeClass("drop-country_active"),document.dispatchEvent(new Event("selectTour"))})})}function i(o){document.addEventListener("click",n=>{o.contains(n.target)?o.classList.toggle("accordion_active"):o.classList.remove("accordion_active")})}}}class x{calendar;calendarMain;btn;form;currentSelDate;currentNextDate;datepicker;between;constructor(){this.form=e(".form"),this.calendar=e(".calendar"),this.calendarMain=e(".calendar__main"),this.btn=e(".calendar__btn"),this.currentSelDate=new Date,this.currentNextDate=new Date,this.between=0,this.init()}init(){this.open(),this.observer(),this.airDatepicker(),this.counter()}newDate(r=!0,t=!1){r?(e("#start-date").html(this.formatDate(this.currentSelDate)),document.dispatchEvent(new Event("startDate"))):e("#start-date").html(""),t?(e("#final-date").html(this.formatDate(this.currentNextDate)),document.dispatchEvent(new Event("finalDate"))):e("#final-date").html("")}airDatepicker(){const r=this,t=new Date().setDate(new Date().getDate()+1),i=new Date().setDate(new Date().getFullYear()+5);this.datepicker=new m("#el",{range:!0,toggleSelected:!0,multipleDatesSeparator:" -",minDate:t,onSelect({date:o}){const n=o;n[1]?(r.currentNextDate=new Date(n[1]),r.newDate(!0,!0),r.datepicker?.update({minDate:t,maxDate:i}),r.selectCount(),r.calendar.removeClass("calendar_active")):n[0]?(r.currentSelDate=new Date(n[0]),r.newDate(),r.datepicker?.update({minDate:new Date(n[0]),maxDate:new Date(n[0]).setDate(n[0].getDate()+18)})):(r.datepicker?.update({minDate:t,maxDate:i}),r.newDate(!1,!1))}})}selectCount(){const r=this.currentNextDate.getTime()-this.currentSelDate.getTime(),t=Math.floor(r/(1e3*60*60*24));console.log(t),e(".form__counter-count").html(String(t))}counter(){const r=e(".form__counter-add"),t=e(".form__counter-remove"),i=e(".form__counter-count"),o=this;function n(){let a=+i.text();if(a<21){const d=a+1;c(String(d))}}function s(){let a=+i.text();if(a>1){const d=a-1;c(String(d))}}function c(a){i.html(a),o.selectFinishDate(+a)}r.on("click",n),t.on("click",s)}selectFinishDate(r=1){const t=new Date(this.currentSelDate);t.setDate(this.currentSelDate.getDate()+r),this.datepicker?.clear(),this.datepicker?.selectDate(this.currentSelDate),this.datepicker?.selectDate(t)}formatDate(r){const t=r.getDate(),i=r.getMonth()+1,o=r.getFullYear(),n=t<10?"0"+t:t,s=i<10?"0"+i:i;return`${n}.${s}.${o}`}open(){this.btn.on("click",()=>{this.calendar.toggleClass("calendar_active")});const r=this;e(document).on("click",function(t){r.calendar.has(t.target).length==0&&r.calendar.removeClass("calendar_active")})}observer(){const r=Number(this.calendarMain.height()),t=this;e(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${r+30}px 0px`,threshold:1};function o(c){c.forEach(a=>{const d=Number(e(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(t.calendar.addClass("calendar_bottom"),t.calendar.removeClass("calendar_top")):(t.calendar.addClass("calendar_top"),t.calendar.removeClass("calendar_bottom")))})}const n=e(".calendar__btn"),s=new IntersectionObserver(o,i);n.each(function(c,a){s.observe(a)})})}}class S{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(r){this.dropDown=e(r).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=e(".form__drop-tags"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const r=this;e(document).on("click",function(t){r.dropDown.has(t.target).length==0&&r.dropDown.removeClass("dropdown_active")})}counter(r,t=!1){const i=r.find(".dropdown__count-add"),o=r.find(".dropdown__count-remove"),n=r.find(".dropdown__count-current"),s=this;function c(){let d=+n.text();if(d<9){const l=d+1;n.html(String(l)),t?s.timeout(l,1):s.currentAbdul=l}}function a(){let d=+n.text();if(d>1||t&&d>0){const l=d-1;n.html(String(l)),t?(s.timeout(l,2),e(".dropdown__error").removeClass("dropdown__error_active-kids")):s.currentAbdul=l}}i.on("click",c),o.on("click",a)}addAgeSelect(r,t=!1){const o=this.dropDown.find(".children__drop").length;if(console.log(o),t){const n=this.kids();console.log(n),this.children.html("");let s=0;for(const c in n)for(let a=0;a<+n[c];a++){this.children.append(`
            <div id="drop-${s}" class="children__drop">
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
        `);const d=e("<script>").attr("type","text/javascript").text(`
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
          `);e("body").append(d),s++}}else for(let n=0;n<r;n++)if(n>o-1){this.children.append(`
            <div id="drop-${n}" class="children__drop">
                <div class="children__btn">
                    <span class="children__current">Укажите возраст</span>
                    <svg><use xlink:href="#chevron-left"></use></svg> 
                </div>
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
              dropDown('#drop-${n}')
          `);e("body").append(s)}}removeAgeSelect(r){this.dropDown.find(".children__drop").each((i,o)=>{i>r-1&&(o.classList.remove("children__drop_opacity"),setTimeout(()=>{o.remove()},150))})}removeTag(){this.tegContainer.on("click",r=>{const t=r.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),i=this.dropDown.find(".children__drop"),o=e(".dropdown__count-two").find(".dropdown__count-current");r.target.innerHTML==="+"&&(i.each((n,s)=>{const c=s.querySelector(".children__current")?.textContent;t===c&&(r.target.parentElement?.remove(),s.style.display="none",s.remove())}),this.addAgeSelect(1,!0),o.html(String(this.currentKids)),this.kids(),e("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(r,t){function i(){const o=Math.ceil(r/2);let n=0;return o===1?n=40:o>1&&(n=o*45-5),n}t===1?(r%2!==0&&this.children.css("height",`${i()}px`),this.addAgeSelect(r)):t===2?(r%2===0&&this.children.css("height",`${i()}px`),this.removeAgeSelect(r)):this.children.css("height",`${i()}px`)}kids(){const r=this.dropDown.find(".children__drop"),t=this,i={};return r.each(function(o,n){const s=String(n.querySelector(".children__current")?.textContent);s==="Укажите возраст"?(n.classList.add("children__drop_error"),t.error.addClass("dropdown__error_active-kids")):i.hasOwnProperty(s)?i[s]++:i[s]=1}),this.currentKids=Object.keys(i).reduce((o,n)=>(o+=+i[n],o),0),i}addPeople(){this.addBtn.on("click",()=>{const r=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const o in r)this.tegContainer.append(`
            <li>${o} x${r[o]} <span>+</span></li>
          `);const i=new CustomEvent("myCustomEvent",{detail:{kids:this.currentKids,abduls:this.currentAbdul}});document.dispatchEvent(i)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class C{food;foodMain;btn;allLi;currentSelect;errorFood;constructor(){this.food=e(".food"),this.foodMain=e(".food__list"),this.btn=e(".food__btn"),this.allLi=this.food.find("li"),this.currentSelect=e(".food__btn-info"),this.errorFood=e(".form__error-food"),this.init()}init(){this.open(),this.observer(),this.select()}select(){this.allLi.each((r,t)=>{t.addEventListener("click",()=>{this.currentSelect.html(String(t.textContent)),this.errorFood.removeClass("form__error-food_active"),document.dispatchEvent(new Event("selectFood"))})})}checkInput(){return this.currentSelect.html()=="Выбрать"?(this.errorFood.addClass("form__error-food_active"),!1):(this.errorFood.removeClass("form__error-food_active"),!0)}open(){this.food.on("click",()=>{this.food.toggleClass("food_active")});const r=this;e(document).on("click",function(t){r.food.has(t.target).length==0&&r.food.removeClass("food_active")})}observer(){const r=Number(this.foodMain.height()),t=this;e(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${r+30}px 0px`,threshold:1};function o(c){c.forEach(a=>{const d=Number(e(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(t.food.addClass("food_bottom"),t.food.removeClass("food_top")):(t.food.addClass("food_top"),t.food.removeClass("food_bottom")))})}const n=e(".food__btn"),s=new IntersectionObserver(o,i);n.each(function(c,a){s.observe(a)})})}}class k{dateObj;constructor(){this.dateObj={},this.dateObj.people={kids:0,abduls:1},this.init()}init(){this.selecDate()}selecDate(){console.log(this.dateObj,1),document.addEventListener("selectTour",()=>{this.dateObj.counrty=e(".drop-country__county").html(),this.dateObj.region=e(".drop-country__tour").html()}),document.addEventListener("finalDate",()=>{this.dateObj.dataStart=e("#start-date").html(),this.dateObj.dataFinish=e("#final-date").html()}),document.addEventListener("myCustomEvent",r=>{const t=r;console.log(t.detail),this.dateObj.people=t.detail}),document.addEventListener("selectFood",()=>{this.dateObj.food=e(".food__btn-info").html()}),e("#input-price").on("input",()=>{this.dateObj.price=String(e("#input-price").val())})}async sendDate(){const r=v(f),t=await b(g(r,"callYouForm"),this.dateObj);console.log("Document written with ID: ",t.id)}}document.addEventListener("DOMContentLoaded",()=>{class h{header;footer;food;sendDate;input;inputBtn;tabsBtn;form;tabsSlider;dropDown;calendar;DropPeople;formBtn;stars;inputForm;formInfo;constructor(){this.header=new u,this.footer=new p,this.food=new C,this.dropDown=new y,this.sendDate=new k,this.calendar=new x,this.DropPeople=new S(".form__drop-guests"),this.stars=e(".form__stars-one-star"),this.formInfo={},this.input=e("#adviser-inp"),this.inputBtn=e(".adviser__btn"),this.inputForm=e("#adviser__form"),this.tabsBtn=e(".form__tabs"),this.form=e(".form"),this.formBtn=this.form.find(".form__btn"),this.tabsSlider=e(".form__tabs-slider"),this.validateTel("#adviser__form"),this.tabs(),this.points(),this.stopReload(),this.clickFormBtn(),this.inputMask(),this.selectStars(),this.validateMainFormOne(),this.validateMainFormThree()}selectStars(){const t=this;this.stars.each((o,n)=>{n.addEventListener("click",()=>{i(Number(n.getAttribute("data-num")))})});function i(o){t.stars.each((n,s)=>{n<o?s.classList.add("form__stars-one-star_active"):s.classList.remove("form__stars-one-star_active")})}}stopReload(){this.form.on("submit",t=>{t.preventDefault()})}tabs(){const t=document.querySelector(".form__tab-one"),i=document.querySelector(".form__tab-two"),o=document.querySelector(".form__tab-three");this.tabsBtn.each((n,s)=>{s.addEventListener("click",c=>{t?.contains(c.target)?this.points(1):i?.contains(c.target)?this.points(2):o?.contains(c.target)&&this.points(3)})})}points(t=1){const i=document.querySelector(".form__tab-one"),o=document.querySelector(".form__tab-two"),n=document.querySelector(".form__tab-three"),s=!e(".form").is(".form_error");t===1&&s?(n?.classList.remove("form__tab_active"),o?.classList.remove("form__tab_active"),i?.classList.add("form__tab_active"),this.form.removeClass("form_state-two form_state-three"),this.form.addClass("form_state-one"),this.tabsSlider.css({left:"0"})):t===2&&s?(n?.classList.remove("form__tab_active"),i?.classList.remove("form__tab_active"),o?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-three"),this.form.addClass("form_state-two"),this.tabsSlider.css({left:"33.3%"})):t===3&&s&&(i?.classList.remove("form__tab_active"),o?.classList.remove("form__tab_active"),n?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-two"),this.form.addClass("form_state-three"),this.tabsSlider.css({left:"68%"}))}clickFormBtn(){this.formBtn.on("click",()=>{e(".form").is(".form_state-two")&&this.points(3)})}addError(t){}clickBtn(){alert("В скором времени вам позвонят."),this.input.val(""),e(".adviser__input").removeClass("adviser__input_active")}inputMask(){document.querySelectorAll("input[name='phone']").forEach(i=>{const o=i;o.addEventListener("input",()=>{o.value.length===1&&(o.value="+"+o.value,o.value==="+0"&&(o.value="+380")),w(o.value+"0")==="TOO_LONG"&&(o.value=o.value.slice(0,-1)),o.value=new D().input(o.value)})})}validateTel(t){const i=e(t);e.validator.addMethod("min",function(o){return/\+380/.test(o)?o.replace(/ |\+/g,"").length>=12:o.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),i.validate({rules:{phone:{min:!0,required:!0}},messages:{phone:{required:"Введите номер"}},submitHandler(o){e(t).find(".input-row").removeClass("input_active"),console.log(e(t)),alert("Мы скоро с вами свяжемся"),e(o).trigger("reset")}})}validateMainFormOne(){const t=this,i=e("#form-state-one");document.addEventListener("selectTour",()=>{e("#drop-country").valid()}),document.addEventListener("startDate",()=>{e("#drop-calendar").valid()}),document.addEventListener("finalDate",()=>{e("#drop-calendar").valid()}),e.validator.addMethod("dropCountry",function(){return e(".drop-country__county").html()!=="Страна"},"Выбирите тур"),e.validator.addMethod("departure",function(){return e("#start-date").html().length>0},"Выберите дату вылета"),e.validator.addMethod("arrived",function(){return e("#final-date").html().length>0},"Выберите дату возвращения"),i.validate({rules:{dropCalendar:{departure:!0,arrived:!0},dropCountry:{dropCountry:!0}},submitHandler(){e(".form").removeClass("form_error"),t.points(2)}})}validateMainFormThree(){const t=this,i=e("#form-state-three");e.validator.addMethod("laxEmail",function(o){return/^(?!.*\.\.)[\w.-]{3,20}@[\wа-я.][\wа-я.-]{3,20}[\wа-я.]\.[a-z]{2,10}/.test(o)},"Введите корректный email"),e.validator.addMethod("min",function(o){return/\+380/.test(o)?o.replace(/ |\+/g,"").length>=12:o.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),i.validate({rules:{phone:{min:!0},email:{laxEmail:!0},name:{required:!0,minlength:3}},messages:{name:{required:"Введите ваше имя",minlength:"Минимум три символа"}},submitHandler(o){alert("Мы скоро с вами свяжемся2"),e(o).trigger("reset"),t.sendDate.sendDate()}})}}new h,new _});
