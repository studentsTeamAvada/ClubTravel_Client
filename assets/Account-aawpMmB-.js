import{H as l}from"./header-9Fuft6xP.js";import{g as m,a as f,c as A}from"./index.esm2017-wHUIDPvp.js";import{a as y}from"./firebase-IW9Y5CYr.js";import{g,o as U}from"./index-e24386e7-jS-Ti_7U.js";import"./index.esm2017-NEpo2ibe.js";import{I as _}from"./isAuthorization-Z2v30n0e.js";const o=document.querySelector(".account__order"),c=document.querySelector(".account__table-bottom-left");class ${app;db;usersArray;currentUser;constructor(){this.app=y,this.db=m(this.app),this.usersArray=[],this.currentUser=null,this.initAuth()}initAuth(){const e=g();U(e,t=>{this.currentUser=t,t?this.loadCards():(this.usersArray=[],this.renderUsers())})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await f(A(this.db,"users"))).forEach(a=>{const s=a.data().orders;console.log(s.email),s.email===e&&this.usersArray.push(s)}),this.renderUsers()}renderUsers(){this.usersArray.forEach(a=>{const s=a,{date:d,email:n,idOrder:u,payStatus:h,price:p}=s;let r=`
        <td>${u}</td>
        <td>${p}</td>
        `;n.length<23?r+=`
              <td>${n}</td>
          `:r+=`
          <td>${n.slice(0,23)+"..."}</td>
      `,r+=`
        <td>
        ${h==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
      </td>
        <td>${d}</td>
        `,o&&o.insertAdjacentHTML("beforeend",r)});let t=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;c&&c.insertAdjacentHTML("beforeend",t)}}document.addEventListener("DOMContentLoaded",async function(){new l,new _,await new $().loadCards()});
