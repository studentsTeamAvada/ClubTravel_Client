import"./jquery-DgZYk2H_.js";import{H as l}from"./header-ARewE4Ia.js";import{g as m,b as f,c as A}from"./index.esm2017-bVxcYj8v.js";import{a as y}from"./firebase-vKibixlN.js";import{g,o as b}from"./index-dd468b12-T5X4n-5H.js";import"./index.esm2017-ZxaceZ0h.js";import{I as U}from"./isAuthorization-wZk79ahV.js";const o=document.querySelector(".account__order"),c=document.querySelector(".account__table-bottom-left");class _{app;db;usersArray;currentUser;constructor(){this.app=y,this.db=m(this.app),this.usersArray=[],this.currentUser=null,this.initAuth()}initAuth(){const e=g();b(e,t=>{this.currentUser=t,t?this.loadCards():(this.usersArray=[],this.renderUsers())})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await f(A(this.db,"users"))).forEach(a=>{const s=a.data().orders;console.log(s.email),s.email===e&&this.usersArray.push(s)}),this.renderUsers()}renderUsers(){this.usersArray.forEach(a=>{const s=a,{date:d,email:n,idOrder:u,payStatus:p,price:h}=s;let r=`
        <td>${u}</td>
        <td>${h}</td>
        `;n.length<23?r+=`
              <td>${n}</td>
          `:r+=`
          <td>${n.slice(0,23)+"..."}</td>
      `,r+=`
        <td>
        ${p==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
      </td>
        <td>${d}</td>
        `,o&&o.insertAdjacentHTML("beforeend",r)});let t=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;c&&c.insertAdjacentHTML("beforeend",t)}}document.addEventListener("DOMContentLoaded",async function(){new l,new U,await new _().loadCards()});
