import"./jquery-DgZYk2H_.js";import{H as u}from"./header-ARewE4Ia.js";import{b as g}from"./justValidate-34YEjKMs.js";import{a as l}from"./firebase-vKibixlN.js";import{g as h,c as m,G as p,a as d,F as b}from"./index-dd468b12-T5X4n-5H.js";import"./index.esm2017-ZxaceZ0h.js";import{g as w,a as f,c as R}from"./index.esm2017-bVxcYj8v.js";import{P as v}from"./preloader-995_IHTn.js";class F{app;auth;constructor(){this.app=l,this.auth=h()}registrationWithEmail(){const r=document.querySelector("#registrationMail"),o=r.value,e=document.querySelector("#registrationPassword"),t=e.value,c=document.querySelector("#registrationRepeatPassword");t===c.value&&m(this.auth,o,t).then(a=>{const i=a.user,n={email:i.email||"",name:"",photo:"",orders:[]};this.addUserToFirebase(n),r.value="",e.value="",c.value="",alert("Вы зарегистрированы!"),console.log("Registration with email successful:",i)}).catch(a=>{const i=a.code,n=a.message;console.error("Registration with email failed:",i,n)})}registrationWithGoogle(){const r=new p;d(this.auth,r).then(o=>{const e=o.user,t={email:e.email||"",name:e.displayName||"",photo:e.photoURL||"",orders:[]};this.addUserToFirebase(t),console.log("Registration with Google successful:",e)}).catch(o=>{const e=o.code,t=o.message;console.error("Registration with Google failed:",e,t)})}registrationWithFacebook(){const r=new b;d(this.auth,r).then(o=>{const e=o.user,t={email:e.email||"",name:e.displayName||"",photo:e.photoURL||"",orders:[]};this.addUserToFirebase(t),console.log("Registration with Facebook successful:",e)}).catch(o=>{const e=o.code,t=o.message;console.error("Registration with Facebook failed:",e,t)})}addUserToFirebase(r){const o=w(l);f(R(o,"users"),r).then(e=>{console.log("Document written with ID: ",e.id)}).catch(e=>{console.error("Error adding document: ",e)})}}document.addEventListener("DOMContentLoaded",()=>{new u,g();const s=new F;document.querySelector(".registration__btn-registration").addEventListener("click",()=>{s.registrationWithEmail()}),document.querySelector(".registration__form-btn-google").addEventListener("click",()=>{s.registrationWithGoogle()}),document.querySelector(".registration__form-btn-facebook").addEventListener("click",()=>{s.registrationWithFacebook()}),new v});
