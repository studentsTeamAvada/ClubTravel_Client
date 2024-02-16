import{$ as o,H as u}from"./header-hiQeVM5C.js";import{F as f}from"./footer-MmTiPZRL.js";import{A as _}from"./air-datepicker-nZugeT86.js";import"./jquery.validate-K0FBTwEN.js";class p{dropDown;dropMain;btn;allAccordions;countryMainDrop;tourMainDrop;constructor(){this.dropDown=o(".drop-country"),this.dropMain=o(".drop-country__accordions"),this.btn=o(".drop-country__btn"),this.allAccordions=o(".accordion"),this.countryMainDrop=o(".drop-country__county"),this.tourMainDrop=o(".drop-country__tour"),this.init()}init(){this.open(),this.observer(),this.accordion()}checkTour(){return this.countryMainDrop.html()==="Страна"?(console.log(1),!1):(console.log(2),!0)}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("drop-country_active")});const e=this;o(document).on("click",function(t){e.dropDown.has(t.target).length==0&&e.dropDown.removeClass("drop-country_active")})}observer(){const e=Number(this.dropMain.height()),t=this;o(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${e+30}px 0px`,threshold:1};function r(c){c.forEach(a=>{const l=Number(o(window).height()),d=Number(a.boundingClientRect.top);l>700&&d>0&&(a.isIntersecting?(t.dropDown.addClass("drop-country_bottom"),t.dropDown.removeClass("drop-country_top")):(t.dropDown.addClass("drop-country_top"),t.dropDown.removeClass("drop-country_bottom")))})}const n=o(".drop-country__btn"),s=new IntersectionObserver(r,i);n.each(function(c,a){s.observe(a)})})}accordion(){const e=this;this.allAccordions.each((r,n)=>{i(n),t(n)});function t(r){const n=r.querySelectorAll("li"),s=String(r.querySelector(".accordion__country")?.textContent);n.forEach(c=>{c.addEventListener("click",()=>{e.countryMainDrop.html(s),e.tourMainDrop.html(String(c.textContent)),e.dropDown.removeClass("drop-country_active"),o(".drop-country").removeClass("drop-country_error")})})}function i(r){document.addEventListener("click",n=>{r.contains(n.target)?r.classList.toggle("accordion_active"):r.classList.remove("accordion_active")})}}}class m{calendar;calendarMain;btn;form;currentSelDate;currentNextDate;datepicker;between;constructor(){this.form=o(".form"),this.calendar=o(".calendar"),this.calendarMain=o(".calendar__main"),this.btn=o(".calendar__btn"),this.currentSelDate=new Date,this.currentNextDate=new Date,this.between=0,this.init()}init(){this.open(),this.observer(),this.airDatepicker(),this.counter()}newDate(e=!0,t=!1){e?o("#start-date").html(this.formatDate(this.currentSelDate)):o("#start-date").html(""),t?o("#final-date").html(this.formatDate(this.currentNextDate)):o("#final-date").html("")}airDatepicker(){const e=this,t=new Date().setDate(new Date().getDate()+1),i=new Date().setDate(new Date().getFullYear()+5);this.datepicker=new _("#el",{range:!0,toggleSelected:!0,multipleDatesSeparator:" -",minDate:t,onSelect({date:r}){const n=r;n[1]?(e.currentNextDate=new Date(n[1]),e.newDate(!0,!0),e.datepicker?.update({minDate:t,maxDate:i}),e.selectCount()):n[0]?(e.currentSelDate=new Date(n[0]),e.newDate(),e.datepicker?.update({minDate:new Date(n[0]),maxDate:new Date(n[0]).setDate(n[0].getDate()+18)})):(e.datepicker?.update({minDate:t,maxDate:i}),e.newDate(!1,!1))}})}selectCount(){const e=this.currentNextDate.getTime()-this.currentSelDate.getTime(),t=Math.floor(e/(1e3*60*60*24));console.log(t),o(".form__counter-count").html(String(t))}counter(){const e=o(".form__counter-add"),t=o(".form__counter-remove"),i=o(".form__counter-count"),r=this;function n(){let a=+i.text();if(a<100){const l=a+1;c(String(l))}}function s(){let a=+i.text();if(a>1){const l=a-1;c(String(l))}}function c(a){i.html(a),r.selectFinishDate(+a)}e.on("click",n),t.on("click",s)}selectFinishDate(e=1){const t=new Date(new Date().setDate(this.currentSelDate.getDate()+e));this.datepicker?.clear(),this.datepicker?.selectDate(this.currentSelDate),this.datepicker?.selectDate(t),console.log(this.currentSelDate),console.log(this.currentNextDate)}formatDate(e){const t=e.getDate(),i=e.getMonth()+1,r=e.getFullYear(),n=t<10?"0"+t:t,s=i<10?"0"+i:i;return`${n}.${s}.${r}`}open(){this.btn.on("click",()=>{this.calendar.toggleClass("calendar_active")});const e=this;o(document).on("click",function(t){e.calendar.has(t.target).length==0&&e.calendar.removeClass("calendar_active")})}observer(){const e=Number(this.calendarMain.height()),t=this;o(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${e+30}px 0px`,threshold:1};function r(c){c.forEach(a=>{const l=Number(o(window).height()),d=Number(a.boundingClientRect.top);l>700&&d>0&&(a.isIntersecting?(t.calendar.addClass("calendar_bottom"),t.calendar.removeClass("calendar_top")):(t.calendar.addClass("calendar_top"),t.calendar.removeClass("calendar_bottom")))})}const n=o(".calendar__btn"),s=new IntersectionObserver(r,i);n.each(function(c,a){s.observe(a)})})}}class v{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;objKidsYears;constructor(e){this.dropDown=o(e).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=o(".form__drop-tags"),this.currentAbdul=1,this.currentKids=0,this.objKidsYears={},this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const e=this;o(document).on("click",function(t){e.dropDown.has(t.target).length==0&&e.dropDown.removeClass("dropdown_active")})}counter(e,t=!1){const i=e.find(".dropdown__count-add"),r=e.find(".dropdown__count-remove"),n=e.find(".dropdown__count-current"),s=this;function c(){let l=+n.text();if(l<9){const d=l+1;n.html(String(d)),t?s.timeout(d,!0):(s.currentAbdul=d,s.error.removeClass("dropdown__error_active-abduls"))}}function a(){let l=+n.text();if(l>0){const d=l-1;n.html(String(d)),t?s.timeout(d,!1):s.currentAbdul=d}}i.on("click",c),r.on("click",a)}addAgeSelect(e,t=!1){const r=this.dropDown.find(".children__drop").length;console.log(r);const n=[];for(const s in this.objKidsYears)for(let c=0;c<this.objKidsYears[s];c++)n.push(s);console.log(n);for(let s=0;s<e;s++)if(s>r-1){this.children.append(`
                    <div id="drop-${s}" class="children__drop">
                        <button class="children__btn">
                            <span class="children__current">${t?n[s]:"Укажите возраст"}</span>
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
                    dropDown('#drop-${s}')
                `);o("body").append(c)}}removeAgeSelect(e){this.dropDown.find(".children__drop").each((i,r)=>{i>e-1&&(r.classList.remove("children__drop_opacity"),setTimeout(()=>{r.remove()},150))})}timeout(e,t,i=!1){function r(){const n=Math.ceil(e/2);let s=0;return n===1?s=40:n>1&&(s=n*45-5),s}i?(this.children.css("height",`${r()}px`),this.addAgeSelect(e,!0)):t?(e%2!==0&&this.children.css("height",`${r()}px`),this.addAgeSelect(e)):(e%2===0&&this.children.css("height",`${r()}px`),this.removeAgeSelect(e))}addPeople(){this.addBtn.on("click",()=>{const e=this.dropDown.find(".children__drop"),t=this,i={};if(e.each(function(n,s){const c=String(s.querySelector(".children__current")?.textContent);c==="Укажите возраст"?(s.classList.add("children__drop_error"),t.error.addClass("dropdown__error_active-kids")):i.hasOwnProperty(c)?i[c]++:i[c]=1}),this.dropDown.find(".children__drop_error").length===0)if(this.currentAbdul<1)this.error.addClass("dropdown__error_active-abduls");else{this.quatityAdults.html(String(this.currentAbdul)),sessionStorage.setItem("abduls",String(this.currentAbdul)),this.currentKids=Object.keys(i).reduce((s,c)=>(s+=+i[c],s),0),console.log(this.currentKids),this.quatityKids.html(String(this.currentKids)),sessionStorage.setItem("kids",JSON.stringify(i)),this.dropDown.removeClass("dropdown_active"),this.getTegs(i);const n=new CustomEvent("myCustomEvent");document.dispatchEvent(n)}})}getTegs(e={}){this.tegContainer.html(`
    <li>Взрослых x${this.currentAbdul}</li>
  `);for(const t in e)this.tegContainer.append(`
        <li>${t} x${e[t]}</li>
    `)}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class b{food;foodMain;btn;allLi;currentSelect;errorFood;constructor(){this.food=o(".food"),this.foodMain=o(".food__list"),this.btn=o(".food__btn"),this.allLi=this.food.find("li"),this.currentSelect=o(".food__btn-info"),this.errorFood=o(".form__error-food"),this.init()}init(){this.open(),this.observer(),this.select()}select(){this.allLi.each((e,t)=>{t.addEventListener("click",()=>{this.currentSelect.html(String(t.textContent)),this.errorFood.removeClass("form__error-food_active")})})}checkInput(){return this.currentSelect.html()=="Выбрать"?(this.errorFood.addClass("form__error-food_active"),!1):(this.errorFood.removeClass("form__error-food_active"),!0)}open(){this.food.on("click",()=>{this.food.toggleClass("food_active")});const e=this;o(document).on("click",function(t){e.food.has(t.target).length==0&&e.food.removeClass("food_active")})}observer(){const e=Number(this.foodMain.height()),t=this;o(document).ready(function(){const i={root:null,rootMargin:`0px 0px -${e+30}px 0px`,threshold:1};function r(c){c.forEach(a=>{const l=Number(o(window).height()),d=Number(a.boundingClientRect.top);l>700&&d>0&&(a.isIntersecting?(t.food.addClass("food_bottom"),t.food.removeClass("food_top")):(t.food.addClass("food_top"),t.food.removeClass("food_bottom")))})}const n=o(".food__btn"),s=new IntersectionObserver(r,i);n.each(function(c,a){s.observe(a)})})}}document.addEventListener("DOMContentLoaded",()=>{class h{header;footer;food;input;inputBtn;tabsBtn;form;tabsSlider;dropDown;calendar;DropPeople;formBtn;stars;inputForm;constructor(){this.header=new u,this.footer=new f,this.food=new b,this.dropDown=new p,this.calendar=new m,this.DropPeople=new v(".form__drop-guests"),this.stars=o(".form__stars-one-star"),this.input=o("#adviser-inp"),this.inputBtn=o(".adviser__btn"),this.inputForm=o("#adviser__form"),this.tabsBtn=o(".form__tabs"),this.form=o(".form"),this.formBtn=this.form.find(".form__btn"),this.tabsSlider=o(".form__tabs-slider"),this.inputMask(".adviser__input"),this.inputMask(".form__phone"),this.validateTel("#adviser__form"),this.tabs(),this.points(),this.stopReload(),this.clickFormBtn(),this.SelectStars(),this.validateMainFormOne()}SelectStars(){const t=this;this.stars.each((r,n)=>{n.addEventListener("click",()=>{i(Number(n.getAttribute("data-num")))})});function i(r){t.stars.each((n,s)=>{n<r?s.classList.add("form__stars-one-star_active"):s.classList.remove("form__stars-one-star_active")})}}stopReload(){this.form.on("submit",t=>{t.preventDefault()})}tabs(){const t=document.querySelector(".form__tab-one"),i=document.querySelector(".form__tab-two"),r=document.querySelector(".form__tab-three");this.tabsBtn.each((n,s)=>{s.addEventListener("click",c=>{t?.contains(c.target)?this.points(1):i?.contains(c.target)?this.points(2):r?.contains(c.target)&&this.points(3)})})}points(t=1){console.log(t);const i=document.querySelector(".form__tab-one"),r=document.querySelector(".form__tab-two"),n=document.querySelector(".form__tab-three"),s=!o(".form").is(".form_erroe-one"),c=!o(".form").is(".form_erroe-two");t===1?(n?.classList.remove("form__tab_active"),r?.classList.remove("form__tab_active"),i?.classList.add("form__tab_active"),this.form.removeClass("form_state-two form_state-three"),this.form.addClass("form_state-one"),this.tabsSlider.css({left:"0"})):t===2&&s?(n?.classList.remove("form__tab_active"),i?.classList.remove("form__tab_active"),r?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-three"),this.form.addClass("form_state-two"),this.tabsSlider.css({left:"33.3%"})):t===3&&s&&c&&(i?.classList.remove("form__tab_active"),r?.classList.remove("form__tab_active"),n?.classList.add("form__tab_active"),this.form.removeClass("form_state-one form_state-two"),this.form.addClass("form_state-three"),this.tabsSlider.css({left:"68%"}))}clickFormBtn(){this.formBtn.on("click",()=>{const t=o(".form").is(".form_state-one"),i=o(".form").is(".form_state-two"),r=o(".form").is(".form_state-three");t||(i?this.points(3):r&&this.points(1))})}addError(t){}clickBtn(){alert("В скором времени вам позвонят."),this.input.val(""),o(".adviser__input").removeClass("adviser__input_active")}inputMask(t){const i=o(t),r=i.find("input");function n(){const c=r.val()?.length;c&&c>0?i.addClass("input_active"):i.removeClass("input_active")}function s(){const c=String(r.val()).replace(/\s/g,""),a=c.length,l=a-1,d=c[l];!/[0-9]/.test(d)||a>10?r.val(String(r.val()).slice(0,-1)):a<3?r.val(c):a>=3&&a<10&&r.val(`${c.slice(0,3)} ${c.slice(3,6)} ${c.slice(6,8)} ${c.slice(8,10)}`.trim())}r.on("input",()=>{s(),n()})}validateTel(t){o(t).validate({rules:{tel:{minlength:13}},messages:{tel:{minlength:"Номер должен состоять из 10 цифр"}},highlight:function(r,n,s){o(r).addClass("border-error").removeClass(s)},unhighlight:function(r,n,s){o(r).addClass(s).removeClass("border-error")},submitHandler(r){o(t).find(".input-row").removeClass("input_active"),console.log(o(t)),alert("Мы скоро с вами свяжемся"),o(r).trigger("reset")}})}validateMainFormOne(){function t(){console.log(12),o(".drop-country__county").html()==="Страна"&&o(".drop-country").addClass("drop-country_error")}o(".form__btn-first-state").on("click",t)}}new h});
