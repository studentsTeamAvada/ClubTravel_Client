import{a as A,g as h,o as L,H as S}from"./header-l2PKyRFo.js";import{g as $,a as f,c as m}from"./index.esm2017-nCL31Hf9.js";import{I as q}from"./isAuthorization-tapUnK14.js";import{a as x}from"./justValidate-ywqcVI2V.js";const _=document.querySelector(".account__order"),g=document.querySelector(".account__table-bottom-left"),b=document.querySelector(".account__table-bottom-left-mobile"),y=document.querySelector(".account-mobile__table"),v=document.querySelector(".account__left");class E{app;db;usersArray;currentUser;constructor(){this.app=A,this.db=$(this.app),this.usersArray=[],this.currentUser=null,this.initAuth(),this.renderAccountLeft()}initAuth(){const e=h();L(e,t=>{this.currentUser=t,t?this.loadCards():(this.usersArray=[],this.renderUsers())})}exitAccount(){console.log("Пользователь вышел из аккаунта"),h().signOut().then(()=>{console.log("Пользователь вышел из аккаунта")}).catch(t=>{console.error("Ошибка при выходе из аккаунта:",t)})}async renderAccountLeft(){const e=await f(m(this.db,"users"));if(!this.currentUser)return;const t=this.currentUser.email;e.forEach(n=>{const r=n.data();if(r.email===t){const{email:a,name:o,photo:s}=r;console.log(a);let c=`
            <div class="account__left-photo">
            
            <img src="${s}" alt="bg" />
            
          </div>
          <p class="account__left-name">${o||"Пользователь"}</p>
          <button class="account__left-order active">
            <svg><use xlink:href="#order"></use></svg>
            <p>Мои заказы</p>
          </button>
          <button class="account__left-history-order">
            <svg><use xlink:href="#history-order"></use></svg>
            <p>История платежей</p>
          </button>
          <button class="account__left-settings">
            <svg><use xlink:href="#account-settings"></use></svg>
            <p>Настройки</p>
          </button>
          <a href="#" class="account__left-exit">
            <svg><use xlink:href="#exit"></use></svg>
            <p>Выход</p>
          </a>
        `;v&&v.insertAdjacentHTML("beforeend",c)}}),this.settings()}settings(){const e=document.querySelector(".account__left-settings"),t=document.querySelector(".account__left-order"),n=document.querySelector(".account__right"),r=document.querySelector(".account__settings");document.querySelector(".account__left-wrapper")?.addEventListener("click",o=>{const s=o.target;if(s){const c=s.textContent;c&&c.includes("Настройки")?(e?.classList.add("active"),t?.classList.remove("active"),n?.classList.add("active"),r?.classList.remove("active")):c&&c.includes("Мои заказы")&&(t?.classList.add("active"),e?.classList.remove("active"),n?.classList.remove("active"),r?.classList.add("active"))}})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await f(m(this.db,"users"))).forEach(n=>{n.data().orders.forEach(a=>{a.email===e&&this.usersArray.push(a)})}),this.renderUsers()}renderUsers(){this.usersArray.forEach(r=>{const a=r,{date:o,email:s,idOrder:c,payStatus:d,price:p}=a;let i=`
        <td>${c}</td>
        <td>${p}</td>
        `;s.length<23?i+=`
              <td>${s}</td>
          `:i+=`
          <td>${s.slice(0,23)+"..."}</td>
      `,i+=`
        <td>
        ${d==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
      </td>
        <td>${o}</td>
        `,_&&_.insertAdjacentHTML("beforeend",i);let u=`
          <div class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${c}</p>
              <p>${p}</p>
              `;s.length<23?u+=`
                    <p>${s}</p>
                  `:u+=`
                  <p>${s.slice(0,23)+"..."}</p>
              `,u+=`
              ${d==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
              <p>${o}</p>
            </div>
          </div>
          `,y&&y.insertAdjacentHTML("beforeend",u)});let t=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;g&&g.insertAdjacentHTML("beforeend",t);let n=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;b&&b.insertAdjacentHTML("beforeend",n)}}document.addEventListener("DOMContentLoaded",async function(){new q;const l=new E;await l.loadCards(),x(),document.querySelector(".account__left-exit")?.addEventListener("click",t=>{t.preventDefault(),l.exitAccount()}),new S});
