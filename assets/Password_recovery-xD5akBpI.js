import"./jquery-DgZYk2H_.js";import{H as n}from"./header-ARewE4Ia.js";import{a as c}from"./justValidate-34YEjKMs.js";import{a as d}from"./firebase-vKibixlN.js";import{g as i,b as l}from"./index-dd468b12-T5X4n-5H.js";import"./index.esm2017-ZxaceZ0h.js";import{P as m}from"./preloader-995_IHTn.js";class p{app;auth;constructor(){this.app=d,this.auth=i()}passwordRecovery(){const e=document.querySelector("#passwordRecoveryMail"),o=e.value;l(this.auth,o).then(()=>{alert("Password reset email sent. Please check your inbox."),e.value=""}).catch(s=>{const t=s.code,a=s.message;console.error("Password reset failed:",t,a),alert("Password reset failed. Please try again later.")})}}document.addEventListener("DOMContentLoaded",()=>{new n,c();const r=new p;document.querySelector(".password-recovery__btn-registration").addEventListener("click",()=>{r.passwordRecovery()}),new m});