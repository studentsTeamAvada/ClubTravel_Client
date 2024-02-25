import{$ as t,a as m,H as _}from"./header-CGHlbq-5.js";import{F as f}from"./footer-VS86fKzv.js";import{A as v}from"./air-datepicker-URHyHg9Y.js";import{P as b}from"./preloader-t9H2ZNYp.js";import{g,f as u,c as p}from"./index.esm2017-Kikq7U2_.js";import{v as w,A as D}from"./AsYouType-c4mmo_pY.js";class y{dropDown;dropMain;btn;allAccordions;countryMainDrop;tourMainDrop;constructor(){this.dropDown=t(".drop-country"),this.dropMain=t(".drop-country__accordions"),this.btn=t(".drop-country__btn"),this.allAccordions=t(".accordion"),this.countryMainDrop=t(".drop-country__county"),this.tourMainDrop=t(".drop-country__tour"),this.init()}init(){this.open(),this.observer(),this.accordion()}checkTour(){return this.countryMainDrop.html()==="Страна"?(console.log(1),!1):(console.log(2),!0)}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("drop-country_active")});const o=this;t(document).on("click",function(e){o.dropDown.has(e.target).length==0&&o.dropDown.removeClass("drop-country_active")})}observer(){const o=Number(this.dropMain.height()),e=this;t(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function n(c){c.forEach(a=>{const d=Number(t(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(e.dropDown.addClass("drop-country_bottom"),e.dropDown.removeClass("drop-country_top")):(e.dropDown.addClass("drop-country_top"),e.dropDown.removeClass("drop-country_bottom")))})}const r=t(".drop-country__btn"),s=new IntersectionObserver(n,i);r.each(function(c,a){s.observe(a)})})}accordion(){const o=this;this.allAccordions.each((n,r)=>{i(r),e(r)});function e(n){const r=n.querySelectorAll("li"),s=String(n.querySelector(".accordion__country")?.textContent);r.forEach(c=>{c.addEventListener("click",()=>{o.countryMainDrop.html(s),o.tourMainDrop.html(String(c.textContent)),o.dropDown.removeClass("drop-country_active"),document.dispatchEvent(new Event("selectTour"))})})}function i(n){document.addEventListener("click",r=>{n.contains(r.target)?n.classList.toggle("accordion_active"):n.classList.remove("accordion_active")})}}}class x{calendar;calendarMain;btn;form;currentSelDate;currentNextDate;datepicker;between;constructor(){this.form=t(".form"),this.calendar=t(".calendar"),this.calendarMain=t(".calendar__main"),this.btn=t(".calendar__btn"),this.currentSelDate=new Date,this.currentNextDate=new Date,this.between=0,this.init()}init(){this.open(),this.observer(),this.airDatepicker(),this.counter()}newDate(o=!0,e=!1){o?(t("#start-date").html(this.formatDate(this.currentSelDate)),document.dispatchEvent(new Event("startDate"))):t("#start-date").html(""),e?(t("#final-date").html(this.formatDate(this.currentNextDate)),document.dispatchEvent(new Event("finalDate"))):t("#final-date").html("")}airDatepicker(){const o=this,e=new Date().setDate(new Date().getFullYear()+5);this.datepicker=new v("#el",{range:!0,toggleSelected:!0,multipleDatesSeparator:" -",minDate:new Date,onSelect({date:i}){const n=i;n[1]?(o.currentNextDate=new Date(n[1]),o.newDate(!0,!0),o.datepicker?.update({minDate:new Date,maxDate:e}),o.selectCount(),o.calendar.removeClass("calendar_active")):n[0]?(o.currentSelDate=new Date(n[0]),o.newDate(),o.datepicker?.update({minDate:new Date(n[0]),maxDate:new Date(n[0]).setDate(n[0].getDate()+18)})):(o.datepicker?.update({minDate:new Date,maxDate:e}),o.newDate(!1,!1))}})}selectCount(){const o=this.currentNextDate.getTime()-this.currentSelDate.getTime(),e=Math.floor(o/(1e3*60*60*24));console.log(e),t(".form__counter-count").html(String(e))}counter(){const o=t(".form__counter-add"),e=t(".form__counter-remove"),i=t(".form__counter-count"),n=this;function r(){let a=+i.text();if(a<21){const d=a+1;c(String(d))}}function s(){let a=+i.text();if(a>1){const d=a-1;c(String(d))}}function c(a){i.html(a),n.selectFinishDate(+a)}o.on("click",r),e.on("click",s)}selectFinishDate(o=1){const e=new Date(this.currentSelDate);e.setDate(this.currentSelDate.getDate()+o),this.datepicker?.clear(),this.datepicker?.selectDate(this.currentSelDate),this.datepicker?.selectDate(e)}formatDate(o){const e=o.getDate(),i=o.getMonth()+1,n=o.getFullYear(),r=e<10?"0"+e:e,s=i<10?"0"+i:i;return`${r}.${s}.${n}`}open(){this.btn.on("click",()=>{this.calendar.toggleClass("calendar_active")});const o=this;t(document).on("click",function(e){o.calendar.has(e.target).length==0&&o.calendar.removeClass("calendar_active")})}observer(){const o=Number(this.calendarMain.height()),e=this;t(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function n(c){c.forEach(a=>{const d=Number(t(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(e.calendar.addClass("calendar_bottom"),e.calendar.removeClass("calendar_top")):(e.calendar.addClass("calendar_top"),e.calendar.removeClass("calendar_bottom")))})}const r=t(".calendar__btn"),s=new IntersectionObserver(n,i);r.each(function(c,a){s.observe(a)})})}}class S{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(o){this.dropDown=t(o).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=t(".form__drop-tags"),this.currentAbdul=1,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeTag(),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const o=this;t(document).on("click",function(e){o.dropDown.has(e.target).length==0&&o.dropDown.removeClass("dropdown_active")})}counter(o,e=!1){const i=o.find(".dropdown__count-add"),n=o.find(".dropdown__count-remove"),r=o.find(".dropdown__count-current"),s=this;function c(){let d=+r.text();if(d<9){const l=d+1;r.html(String(l)),e?s.timeout(l,1):s.currentAbdul=l}}function a(){let d=+r.text();if(d>1||e&&d>0){const l=d-1;r.html(String(l)),e?(s.timeout(l,2),t(".dropdown__error").removeClass("dropdown__error_active-kids")):s.currentAbdul=l}}i.on("click",c),n.on("click",a)}addAgeSelect(o,e=!1){const n=this.dropDown.find(".children__drop").length;if(console.log(n),e){const r=this.kids();console.log(r),this.children.html("");let s=0;for(const c in r)for(let a=0;a<+r[c];a++){this.children.append(`
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
        `);const d=t("<script>").attr("type","text/javascript").text(`
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
          `);t("body").append(d),s++}}else for(let r=0;r<o;r++)if(r>n-1){this.children.append(`
            <div id="drop-${r}" class="children__drop">
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
        `);const s=t("<script>").attr("type","text/javascript").text(`
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
              dropDown('#drop-${r}')
          `);t("body").append(s)}}removeAgeSelect(o){this.dropDown.find(".children__drop").each((i,n)=>{i>o-1&&(n.classList.remove("children__drop_opacity"),setTimeout(()=>{n.remove()},150))})}removeTag(){this.tegContainer.on("click",o=>{const e=o.target.parentElement?.textContent?.replace(/(x[0-9])\s\+/,"").trim(),i=this.dropDown.find(".children__drop"),n=t(".dropdown__count-two").find(".dropdown__count-current");o.target.innerHTML==="+"&&(i.each((r,s)=>{const c=s.querySelector(".children__current")?.textContent;e===c&&(o.target.parentElement?.remove(),s.style.display="none",s.remove())}),this.addAgeSelect(1,!0),n.html(String(this.currentKids)),this.kids(),t("#kids-quantity").html(String(this.currentKids)),this.timeout(this.currentKids,3))})}timeout(o,e){function i(){const n=Math.ceil(o/2);let r=0;return n===1?r=40:n>1&&(r=n*45-5),r}e===1?(o%2!==0&&this.children.css("height",`${i()}px`),this.addAgeSelect(o)):e===2?(o%2===0&&this.children.css("height",`${i()}px`),this.removeAgeSelect(o)):this.children.css("height",`${i()}px`)}kids(){const o=this.dropDown.find(".children__drop"),e=this,i={};return o.each(function(n,r){const s=String(r.querySelector(".children__current")?.textContent);s==="Укажите возраст"?(r.classList.add("children__drop_error"),e.error.addClass("dropdown__error_active-kids")):i.hasOwnProperty(s)?i[s]++:i[s]=1}),this.currentKids=Object.keys(i).reduce((n,r)=>(n+=+i[r],n),0),i}addPeople(){this.addBtn.on("click",()=>{const o=this.kids();if(this.dropDown.find(".children__drop_error").length===0){this.quatityAdults.html(String(this.currentAbdul)),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
            <li>Взрослых x${this.currentAbdul}</li>
        `);for(const n in o)this.tegContainer.append(`
            <li>${n} x${o[n]} <span>+</span></li>
          `);const i=new CustomEvent("myCustomEvent",{detail:{kids:this.currentKids,abduls:this.currentAbdul}});document.dispatchEvent(i)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class C{food;foodMain;btn;allLi;currentSelect;errorFood;constructor(){this.food=t(".food"),this.foodMain=t(".food__list"),this.btn=t(".food__btn"),this.allLi=this.food.find("li"),this.currentSelect=t(".food__btn-info"),this.errorFood=t(".form__error-food"),this.init()}init(){this.open(),this.observer(),this.select()}select(){this.allLi.each((o,e)=>{e.addEventListener("click",()=>{this.currentSelect.html(String(e.textContent)),this.errorFood.removeClass("form__error-food_active"),document.dispatchEvent(new Event("selectFood"))})})}checkInput(){return this.currentSelect.html()=="Выбрать"?(this.errorFood.addClass("form__error-food_active"),!1):(this.errorFood.removeClass("form__error-food_active"),!0)}open(){this.food.on("click",()=>{this.food.toggleClass("food_active")});const o=this;t(document).on("click",function(e){o.food.has(e.target).length==0&&o.food.removeClass("food_active")})}observer(){const o=Number(this.foodMain.height()),e=this;t(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${o+30}px 0px`,threshold:1};function n(c){c.forEach(a=>{const d=Number(t(window).height()),l=Number(a.boundingClientRect.top);d>700&&l>0&&(a.isIntersecting?(e.food.addClass("food_bottom"),e.food.removeClass("food_top")):(e.food.addClass("food_top"),e.food.removeClass("food_bottom")))})}const r=t(".food__btn"),s=new IntersectionObserver(n,i);r.each(function(c,a){s.observe(a)})})}}class k{dateObj;constructor(){this.dateObj={},this.dateObj.people={kids:0,abduls:1},this.init()}init(){this.selecDate()}selecDate(){console.log(this.dateObj,1),document.addEventListener("selectTour",()=>{this.dateObj.counrty=t(".drop-country__county").html(),this.dateObj.region=t(".drop-country__tour").html()}),document.addEventListener("finalDate",()=>{this.dateObj.dataStart=t("#start-date").html(),this.dateObj.dataFinish=t("#final-date").html()}),document.addEventListener("myCustomEvent",o=>{const e=o;this.dateObj.people=e.detail}),document.addEventListener("selectFood",()=>{this.dateObj.food=t(".food__btn-info").html()}),document.addEventListener("selectStars",o=>{const e=o;this.dateObj.stars=e.detail.stars}),t("#input-price").on("input",()=>{this.dateObj.price=String(t("#input-price").val())}),t(".form__textarea").on("input",()=>{this.dateObj.wouldLike=String(t(".form__textarea").val())}),t("#input-name").on("input",()=>{this.dateObj.name=String(t("#input-name").val())}),t("#input-tel").on("input",()=>{this.dateObj.tel=String(t("#input-tel").val())}),t("#input-mail").on("input",()=>{this.dateObj.email=String(t("#input-mail").val())}),t("#adviser-inp").on("input",()=>{this.dateObj.tel=String(t("#adviser-inp").val())})}async sendDate(o=!0){const e=g(m);o?await u(p(e,"callYouForm"),this.dateObj):await u(p(e,"callYouForm"),{phone:this.dateObj.tel}),this.clearFormTwo()}clearFormTwo(){t("#input-price").val(""),t(".form__textarea").val(""),t(".food__btn-info").html("Выбрать"),t(".form__stars-one-star").each((o,e)=>{e.classList.remove("form__stars-one-star_active")})}}document.addEventListener("DOMContentLoaded",()=>{class h{header;footer;food;sendDate;input;inputBtn;tabsBtn;form;tabsSlider;dropDown;calendar;DropPeople;formBtn;stars;inputForm;formInfo;constructor(){this.header=new _,this.footer=new f,this.food=new C,this.dropDown=new y,this.sendDate=new k,this.calendar=new x,this.DropPeople=new S(".form__drop-guests"),this.stars=t(".form__stars-one-star"),this.formInfo={},this.input=t("#adviser-inp"),this.inputBtn=t(".adviser__btn"),this.inputForm=t("#adviser__form"),this.tabsBtn=t(".form__tabs"),this.form=t(".form"),this.formBtn=this.form.find(".form__btn"),this.tabsSlider=t(".form__tabs-slider"),this.validateTel("#adviser__form"),this.tabs(),this.points(),this.stopReload(),this.clickFormBtn(),this.inputMask(),this.selectStars(),this.validateMainFormOne(),this.validateMainFormThree()}selectStars(){const e=this;this.stars.each((n,r)=>{r.addEventListener("click",()=>{i(Number(r.getAttribute("data-num")));const s=new CustomEvent("selectStars",{detail:{stars:r.getAttribute("data-num")}});document.dispatchEvent(s)})});function i(n){e.stars.each((r,s)=>{r<n?s.classList.add("form__stars-one-star_active"):s.classList.remove("form__stars-one-star_active")})}}stopReload(){this.form.on("submit",e=>{e.preventDefault()})}tabs(){const e=document.querySelector(".form__tab-one"),i=document.querySelector(".form__tab-two"),n=document.querySelector(".form__tab-three");this.tabsBtn.each((r,s)=>{s.addEventListener("click",c=>{e?.contains(c.target)?this.points(1):i?.contains(c.target)?this.points(2):n?.contains(c.target)&&this.points(3)})})}points(e=1){const i=document.querySelector(".form__tab-one"),n=document.querySelector(".form__tab-two"),r=document.querySelector(".form__tab-three"),s=!t(".form").is(".form_error");e===1&&s?(r?.classList.remove("form__tab_active"),n?.classList.remove("form__tab_active"),i?.classList.add("form__tab_active"),this.form.removeClass("form_state-two form_state-three"),this.form.addClass("form_state-one"),this.tabsSlider.css({left:"0"})):e===2&&s?(r?.classList.remove("form__tab_active"),i?.classList.remove("form__tab_active"),n?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-three"),this.form.addClass("form_state-two"),this.tabsSlider.css({left:"33.3%"})):e===3&&s&&(i?.classList.remove("form__tab_active"),n?.classList.remove("form__tab_active"),r?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-two"),this.form.addClass("form_state-three"),this.tabsSlider.css({left:"68%"}))}clickFormBtn(){this.formBtn.on("click",()=>{t(".form").is(".form_state-two")&&this.points(3)})}addError(e){}clickBtn(){alert("В скором времени вам позвонят."),this.input.val(""),t(".adviser__input").removeClass("adviser__input_active")}inputMask(){document.querySelectorAll("input[name='phone']").forEach(i=>{const n=i;n.addEventListener("input",()=>{n.value.length===1&&(n.value="+"+n.value,n.value==="+0"&&(n.value="+380")),w(n.value+"0")==="TOO_LONG"&&(n.value=n.value.slice(0,-1)),n.value=new D().input(n.value)})})}validateTel(e){const i=this,n=t(e);t.validator.addMethod("min",function(r){return/\+380/.test(r)?r.replace(/ |\+/g,"").length>=12:r.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),n.validate({rules:{phone:{min:!0,required:!0}},messages:{phone:{required:"Введите номер"}},submitHandler(r){t(e).find(".input-row").removeClass("input_active"),console.log(t(e)),i.sendDate.sendDate(!1),alert("Мы скоро с вами свяжемся"),t(r).trigger("reset")}})}validateMainFormOne(){const e=this,i=t("#form-state-one");document.addEventListener("selectTour",()=>{t("#drop-country").valid()}),document.addEventListener("startDate",()=>{t("#drop-calendar").valid()}),document.addEventListener("finalDate",()=>{t("#drop-calendar").valid()}),t.validator.addMethod("dropCountry",function(){return t(".drop-country__county").html()!=="Страна"},"Выбирите тур"),t.validator.addMethod("departure",function(){return t("#start-date").html().length>0},"Выберите дату вылета"),t.validator.addMethod("arrived",function(){return t("#final-date").html().length>0},"Выберите дату возвращения"),i.validate({rules:{dropCalendar:{departure:!0,arrived:!0},dropCountry:{dropCountry:!0}},submitHandler(){t(".form").removeClass("form_error"),e.points(2)}})}validateMainFormThree(){const e=this,i=t("#form-state-three");t.validator.addMethod("laxEmail",function(n){return/^(?!.*\.\.)[\w.-]{3,20}@[\wа-я.][\wа-я.-]{1,20}[\wа-я.]\.[a-z]{2,10}/.test(n)},"Введите корректный email"),t.validator.addMethod("min",function(n){return/\+380/.test(n)?n.replace(/ |\+/g,"").length>=12:n.replace(/ |\+/g,"").length>=10},"Номер должен состоять из 10 цифр"),i.validate({rules:{phone:{min:!0},email:{laxEmail:!0},name:{required:!0,minlength:3}},messages:{name:{required:"Введите ваше имя",minlength:"Минимум три символа"}},submitHandler(n){alert("Мы скоро с вами свяжемся2"),t(n).trigger("reset"),e.sendDate.sendDate(),e.points(1)}})}}new h,new b});
