<<<<<<< HEAD:build/assets/Hotel-OJBEiSOZ.js
import{$ as d,H as p}from"./header-o5Nvgfqe.js";import{F as u}from"./footer-FxxaSssw.js";import{H as _,b as f}from"./swiper-CIf3Z10M.js";class w{dropDown;dropMain;quatityAdults;quatityKids;addBtn;btn;children;tegContainer;error;currentAbdul;currentKids;constructor(t){this.dropDown=d(t).find(".dropdown"),this.dropMain=this.dropDown.find(".dropdown__main"),this.quatityAdults=this.dropDown.find("#adults-quantity"),this.quatityKids=this.dropDown.find("#kids-quantity"),this.addBtn=this.dropDown.find(".dropdown__button-add"),this.error=this.dropDown.find(".dropdown__error"),this.btn=this.dropDown.find(".dropdown__btn"),this.children=this.dropDown.find(".dropdown__children"),this.tegContainer=d(".tour__quantity-tegs"),this.currentAbdul=0,this.currentKids=0,this.init()}init(){this.open(),this.counter(this.dropDown.find(".dropdown__count-one")),this.counter(this.dropDown.find(".dropdown__count-two"),!0),this.removeAgeSelect(1),this.addPeople()}open(){this.btn.on("click",()=>{this.dropDown.toggleClass("dropdown_active")});const t=this;d(document).on("click",function(r){t.dropDown.has(r.target).length==0&&t.dropDown.removeClass("dropdown_active")})}counter(t,r=!1){const e=t.find(".dropdown__count-add"),i=t.find(".dropdown__count-remove"),o=t.find(".dropdown__count-current"),n=this;function l(){let c=+o.text();if(c<9){const s=c+1;o.html(String(s)),r?n.timeout(s,!0):(n.currentAbdul=s,n.error.removeClass("dropdown__error_active-abduls"))}}function a(){let c=+o.text();if(c>0){const s=c-1;o.html(String(s)),r?n.timeout(s,!1):n.currentAbdul=s}}e.on("click",l),i.on("click",a)}addAgeSelect(t){const e=this.dropDown.find(".children__drop").length;for(let i=0;i<t;i++)if(i>e-1){this.children.append(`
=======
import "./modulepreload-polyfill-9p4a8sJU.js";
import { $ as s, H as p } from "./header-qNeuh3vS.js";
import { H as u, b as _ } from "./swiper-tmW5VEKu.js";
class f {
  fb;
  constructor() {
    (this.fb = s(".pictures__social-window")), this.fbPluginReload();
  }
  fbPluginReload() {
    window.addEventListener("resize", () => {});
  }
}
class w {
  dropDown;
  dropMain;
  quatityAdults;
  quatityKids;
  addBtn;
  btn;
  children;
  tegContainer;
  error;
  currentAbdul;
  currentKids;
  constructor(t) {
    (this.dropDown = s(t).find(".dropdown")),
      (this.dropMain = this.dropDown.find(".dropdown__main")),
      (this.quatityAdults = this.dropDown.find("#adults-quantity")),
      (this.quatityKids = this.dropDown.find("#kids-quantity")),
      (this.addBtn = this.dropDown.find(".dropdown__button-add")),
      (this.error = this.dropDown.find(".dropdown__error")),
      (this.btn = this.dropDown.find(".dropdown__btn")),
      (this.children = this.dropDown.find(".dropdown__children")),
      (this.tegContainer = s(".tour__quantity-tegs")),
      (this.currentAbdul = 0),
      (this.currentKids = 0),
      this.init();
  }
  init() {
    this.open(),
      this.counter(this.dropDown.find(".dropdown__count-one")),
      this.counter(this.dropDown.find(".dropdown__count-two"), !0),
      this.removeAgeSelect(1),
      this.addPeople();
  }
  open() {
    this.btn.on("click", () => {
      this.dropDown.toggleClass("dropdown_active");
    });
    const t = this;
    s(document).on("click", function (r) {
      t.dropDown.has(r.target).length == 0 &&
        t.dropDown.removeClass("dropdown_active");
    });
  }
  counter(t, r = !1) {
    const e = t.find(".dropdown__count-add"),
      i = t.find(".dropdown__count-remove"),
      o = t.find(".dropdown__count-current"),
      n = this;
    function l() {
      let c = +o.text();
      if (c < 9) {
        const d = c + 1;
        o.html(String(d)),
          r
            ? n.timeout(d, !0)
            : ((n.currentAbdul = d),
              n.error.removeClass("dropdown__error_active-abduls"));
      }
    }
    function a() {
      let c = +o.text();
      if (c > 0) {
        const d = c - 1;
        o.html(String(d)), r ? n.timeout(d, !1) : (n.currentAbdul = d);
      }
    }
    e.on("click", l), i.on("click", a);
  }
  addAgeSelect(t) {
    const e = this.dropDown.find(".children__drop").length;
    for (let i = 0; i < t; i++)
      if (i > e - 1) {
        this.children.append(`
>>>>>>> 256605da1f8988e3449cc2efacc4e58c4294350b:build/assets/Hotel-BaBGGlpn.js
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
<<<<<<< HEAD:build/assets/Hotel-OJBEiSOZ.js
                `);const o=d("<script>").attr("type","text/javascript").text(`
=======
                `);
        const o = s("<script>").attr("type", "text/javascript").text(`
>>>>>>> 256605da1f8988e3449cc2efacc4e58c4294350b:build/assets/Hotel-BaBGGlpn.js
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
<<<<<<< HEAD:build/assets/Hotel-OJBEiSOZ.js
                `);d("body").append(o)}}removeAgeSelect(t){this.dropDown.find(".children__drop").each((e,i)=>{e>t-1&&(i.classList.remove("children__drop_opacity"),setTimeout(()=>{i.remove()},150))})}timeout(t,r){function e(){const i=Math.ceil(t/2);let o=0;return i===1?o=40:i>1&&(o=i*45-5),o}r?(t%2!==0&&this.children.css("height",`${e()}px`),this.addAgeSelect(t)):(t%2===0&&this.children.css("height",`${e()}px`),this.removeAgeSelect(t))}addPeople(){this.addBtn.on("click",()=>{const t=this.dropDown.find(".children__drop"),r=this,e={};if(t.each(function(o,n){const l=String(n.querySelector(".children__current")?.textContent);l==="Укажите возраст"?(n.classList.add("children__drop_error"),r.error.addClass("dropdown__error_active-kids")):e.hasOwnProperty(l)?e[l]++:e[l]=1}),this.dropDown.find(".children__drop_error").length===0)if(this.currentAbdul<1)this.error.addClass("dropdown__error_active-abduls");else{this.quatityAdults.html(String(this.currentAbdul)),this.currentKids=Object.keys(e).length,this.quatityKids.html(String(this.currentKids)),this.dropDown.removeClass("dropdown_active"),this.tegContainer.html(`
=======
                `);
        s("body").append(o);
      }
  }
  removeAgeSelect(t) {
    this.dropDown.find(".children__drop").each((e, i) => {
      e > t - 1 &&
        (i.classList.remove("children__drop_opacity"),
        setTimeout(() => {
          i.remove();
        }, 150));
    });
  }
  timeout(t, r) {
    function e() {
      const i = Math.ceil(t / 2);
      let o = 0;
      return i === 1 ? (o = 40) : i > 1 && (o = i * 45 - 5), o;
    }
    r
      ? (t % 2 !== 0 && this.children.css("height", `${e()}px`),
        this.addAgeSelect(t))
      : (t % 2 === 0 && this.children.css("height", `${e()}px`),
        this.removeAgeSelect(t));
  }
  addPeople() {
    this.addBtn.on("click", () => {
      const t = this.dropDown.find(".children__drop"),
        r = this,
        e = {};
      if (
        (t.each(function (o, n) {
          const l = String(n.querySelector(".children__current")?.textContent);
          l === "Укажите возраст"
            ? (n.classList.add("children__drop_error"),
              r.error.addClass("dropdown__error_active-kids"))
            : e.hasOwnProperty(l)
              ? e[l]++
              : (e[l] = 1);
        }),
        this.dropDown.find(".children__drop_error").length === 0)
      )
        if (this.currentAbdul < 1)
          this.error.addClass("dropdown__error_active-abduls");
        else {
          this.quatityAdults.html(String(this.currentAbdul)),
            (this.currentKids = Object.keys(e).length),
            this.quatityKids.html(String(this.currentKids)),
            this.dropDown.removeClass("dropdown_active"),
            this.tegContainer.html(`
>>>>>>> 256605da1f8988e3449cc2efacc4e58c4294350b:build/assets/Hotel-BaBGGlpn.js
                        <li>Взрослых x${this.currentAbdul}</li>
                    `);
          for (const n in e)
            this.tegContainer.append(`
                            <li>${n} x${e[n]}</li>
<<<<<<< HEAD:build/assets/Hotel-OJBEiSOZ.js
                        `);const o=new CustomEvent("myCustomEvent");document.dispatchEvent(o)}})}getAbduls(){return this.currentAbdul}getKids(){return this.currentKids}}class m{priceOnePerson;totalPrice;dropDown;constructor(){this.priceOnePerson=d(".tour__price-sum").data("price"),this.totalPrice=d(".tour__total-price"),this.dropDown=new w(".tour__quantity-drop"),this.priceCalculator()}priceCalculator(){document.addEventListener("myCustomEvent",()=>{const t=this.dropDown.getKids()+this.dropDown.getAbduls(),r=String(+this.priceOnePerson*t);let e="";if(r.length>3){let i=0;for(let o=r.length-1;o>=0;o--)i++,e+=r[o],i===3&&(e+=" ");e=e.split("").reverse().join("")}else e=r;this.totalPrice.html(e),console.log(r)})}}document.addEventListener("DOMContentLoaded",()=>{class h{swiper;bottomSlider;infoBlock;header;footer;constructor(){this.swiper=new _,this.bottomSlider=new f,this.infoBlock=new m,this.header=new p,this.footer=new u,this.init()}init(){}}new h});
=======
                        `);
          const o = new CustomEvent("myCustomEvent");
          document.dispatchEvent(o);
        }
    });
  }
  getAbduls() {
    return this.currentAbdul;
  }
  getKids() {
    return this.currentKids;
  }
}
class m {
  priceOnePerson;
  totalPrice;
  dropDown;
  constructor() {
    (this.priceOnePerson = s(".tour__price-sum").data("price")),
      (this.totalPrice = s(".tour__total-price")),
      (this.dropDown = new w(".tour__quantity-drop")),
      this.priceCalculator();
  }
  priceCalculator() {
    document.addEventListener("myCustomEvent", () => {
      const t = this.dropDown.getKids() + this.dropDown.getAbduls(),
        r = String(+this.priceOnePerson * t);
      let e = "";
      if (r.length > 3) {
        let i = 0;
        for (let o = r.length - 1; o >= 0; o--)
          i++, (e += r[o]), i === 3 && (e += " ");
        e = e.split("").reverse().join("");
      } else e = r;
      this.totalPrice.html(e), console.log(r);
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  class h {
    swiper;
    bottomSlider;
    infoBlock;
    header;
    footer;
    constructor() {
      (this.swiper = new u()),
        (this.bottomSlider = new _()),
        (this.infoBlock = new m()),
        (this.header = new p()),
        (this.footer = new f()),
        this.init();
    }
    init() {}
  }
  new h();
});
>>>>>>> 256605da1f8988e3449cc2efacc4e58c4294350b:build/assets/Hotel-BaBGGlpn.js
