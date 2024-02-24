import{H as A}from"./header-9Fuft6xP.js";import{g as $,a as h,c as m}from"./index.esm2017-HY_ETrW2.js";import{a as U,g as f,o as S}from"./firebase-F47n0dmT.js";import{I as v}from"./isAuthorization-ymm8FW1M.js";const b=document.querySelector(".account__order"),y=document.querySelector(".account__table-bottom-left"),_=document.querySelector(".account__table-bottom-left-mobile"),g=document.querySelector(".account-mobile__table");class E{app;db;usersArray;currentUser;constructor(){this.app=U,this.db=$(this.app),this.usersArray=[],this.currentUser=null,this.initAuth(),this.renderUserName()}initAuth(){const t=f();S(t,e=>{this.currentUser=e,e?this.loadCards():(this.usersArray=[],this.renderUsers())})}exitAccount(){console.log("yes"),f().signOut().then(()=>{console.log("Пользователь вышел из аккаунта")}).catch(e=>{console.error("Ошибка при выходе из аккаунта:",e)})}async renderUserName(){const t=await h(m(this.db,"users"));if(!this.currentUser)return;const e=this.currentUser.email;t.forEach(a=>{const n=a.data();if(n.email===e){const{email:s}=n;console.log(s)}})}async loadCards(){if(!this.currentUser)return;const t=this.currentUser.email;(await h(m(this.db,"users"))).forEach(a=>{a.data().orders.forEach(s=>{s.email===t&&this.usersArray.push(s)})}),this.renderUsers()}renderUsers(){console.log("da");const t=this.usersArray;console.log(t),t.forEach(n=>{const s=n,{date:l,email:r,idOrder:u,payStatus:p,price:d}=s;let o=`
        <td>${u}</td>
        <td>${d}</td>
        `;r.length<23?o+=`
              <td>${r}</td>
          `:o+=`
          <td>${r.slice(0,23)+"..."}</td>
      `,o+=`
        <td>
        ${p==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
      </td>
        <td>${l}</td>
        `,b&&b.insertAdjacentHTML("beforeend",o);let c=`
          <div class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${u}</p>
              <p>${d}</p>
              `;r.length<23?c+=`
                    <p>${r}</p>
                  `:c+=`
                  <p>${r.slice(0,23)+"..."}</p>
              `,c+=`
              ${p==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
              <p>${l}</p>
            </div>
          </div>
          `,g&&g.insertAdjacentHTML("beforeend",c)});let e=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;y&&y.insertAdjacentHTML("beforeend",e);let a=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;_&&_.insertAdjacentHTML("beforeend",a)}}document.addEventListener("DOMContentLoaded",async function(){new A,new v;const i=new E;await i.loadCards(),document.querySelector(".account__left-exit")?.addEventListener("click",e=>{e.preventDefault(),i.exitAccount()})});
