import{H as u,P as l}from"./preloader-IQBbSx6n.js";import{g as h,s as d,G as g,a as s,F as m,j as z}from"./index-dd468b12-ZD5C6yO3.js";import{a as p}from"./firebase-WXR3vcUU.js";import"./index.esm-RQMDg1fI.js";class b{app;auth;constructor(){this.app=p,this.auth=h()}authorizationWithEmail(){const e=document.querySelector("#authorizationMail"),o=e.value,t=document.querySelector("#authorizationPassword"),a=t.value;d(this.auth,o,a).then(r=>{const i=r.user;alert("Пользователь вошел"),e.value="",t.value="",console.log("User signed in:",i)}).catch(r=>{const i=r.code,c=r.message;alert("Почта или пароль введены неверно"),console.error("Login failed:",i,c)})}authorizationWithGoogle(){const e=new g;s(this.auth,e).then(o=>{const t=o.user;alert("Пользователь вошел с помощью Google"),console.log("User signed in:",t)}).catch(o=>{const t=o.code,a=o.message;alert("Не удалось войти с помощью Google"),console.error("Login failed:",t,a)})}authorizationFacebook(){const e=new m;s(this.auth,e).then(o=>{const t=o.user;alert("Пользователь вошел с помощью Facebook"),console.log("User signed in:",t)}).catch(o=>{const t=o.code,a=o.message;alert("Не удалось войти с помощью Facebook"),console.error("Login failed:",t,a)})}}document.addEventListener("DOMContentLoaded",()=>{new u,z();const n=new b;document.querySelector(".authorization__btn-registration").addEventListener("click",()=>{n.authorizationWithEmail()}),document.querySelector(".authorization__form-btn-google").addEventListener("click",()=>{n.authorizationWithGoogle()}),document.querySelector(".authorization__form-btn-facebook").addEventListener("click",()=>{n.authorizationFacebook()}),new l});
