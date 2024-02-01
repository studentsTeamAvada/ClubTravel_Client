import{$ as p,a as l,H as u}from"./header-cLDDKn0F.js";import{H as _,b as f}from"./swiper-10gZNCD3.js";import"./autoplay-3nwb4p1k.js";class w{fb;constructor(){this.fb=p(".pictures__social-window"),this.fbPluginReload()}fbPluginReload(){window.addEventListener("resize",()=>{})}}class m{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(e){this.dropDown=l(e).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=l(".tour__quantity-tegs"),this.currentAbdul=0,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const e=this;l(document).on("click",function(r){e.dropDown.has(r.target).length==0&&e.dropDown.removeClass("dropdown_active")})}counter(e,r=!1){const t=e.find(".dropdown__count-add"),i=e.find(".dropdown__count-remove"),o=e.find(".dropdown__count-current"),n=this;function s(){let c=+o.text();if(c<9){const d=c+1;o.html(String(d)),r?n.timeout(d,!0):(n.currentAbdul=d,n.error.removeClass("dropdown__error_active-abduls"))}}function h(){let c=+o.text();if(c>0){const d=c-1;o.html(String(d)),r?n.timeout(d,!1):n.currentAbdul=d}}t.on("click",s),i.on("click",h)}addAgeSelect(e){const t=this.dropDown.find(".children__drop").length;for(let i=0;i<e;i++)if(i>t-1){this.children.append(`
                    <div id="drop-${i}" class="children__drop">
                        <button class="children__btn">
                            <span class="children__current">Укажите возраст</span>
                            <svg><use xlink:href="./src/images/sprite.svg#chevron-left"></use></svg> 
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
                `);const o=l("<script>").attr("type","text/javascript").text(`
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
                `);l("body").append(o)}}removeAgeSelect(e){this.dropDown.find(".children__drop").each((t,i)=>{t>e-1&&(i.classList.remove("children__drop_opacity"),setTimeout(()=>{i.remove()},150))})}timeout(e,r){function t(){const i=Math.ceil(e/2);let o=0;return i===1?o=40:i>1&&(o=i*45-5),o}r?(e%2!==0&&this.children.css("height",`${t()}px`),this.addAgeSelect(e)):(e%2===0&&this.children.css("height",`${t()}px`),this.removeAgeSelect(e))}addPeople(){this.addBtn.on("click",()=>{const e=this.dropDown.find(".children__drop"),r=this,t={};if(e.each(function(o,n){const s=String(n.querySelector(".children__current")?.textContent);s==="Укажите возраст"?(n.classList.add("children__drop_error"),r.error.addClass("dropdown__error_active-kids")):t.hasOwnProperty(s)?t[s]+=1:t[s]=1}),this.dropDown.find(".children__drop_error").length===0)if(this.currentAbdul<1)this.error.addClass("dropdown__error_active-abduls");else{this.quatityAdults.html(String(this.currentAbdul)),this.currentKids=Object.keys(t).reduce((n,s)=>(n+=t[s],n),0),this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
                        <li>Взрослых x${this.currentAbdul}</li>
                    `);for(const n in t)this.tegContainer.append(`
                            <li>${n} x${t[n]}</li>
                        `);const o=new CustomEvent("myCustomEvent");document.dispatchEvent(o)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class v{priceOnePerson;totalPrice;dropDown;constructor(){this.priceOnePerson=l(".tour__price-sum").data("price"),this.totalPrice=l(".tour__total-price"),this.dropDown=new m(".tour__quantity-drop"),this.priceCalculator()}priceCalculator(){document.addEventListener("myCustomEvent",()=>{const e=this.dropDown.getKids()+this.dropDown.getAbduls(),r=String(+this.priceOnePerson*e);let t="";if(r.length>3){let i=0;for(let o=r.length-1;o>=0;o--)i++,t+=r[o],i===3&&(t+=" ");t=t.split("").reverse().join("")}else t=r;this.totalPrice.html(t),console.log(r)})}}class g{swiper;bottomSlider;infoBlock;constructor(){this.swiper=new _,this.bottomSlider=new f,this.infoBlock=new v,this.init()}init(){}}document.addEventListener("DOMContentLoaded",()=>{new w,new u,new g});
