import{g as e,o as n}from"./index-e24386e7-IBhCI8Y3.js";import"./firebase-IcnoC1y6.js";class l{constructor(){this.initializeButton(),this.watchAuthState()}async checkAuthorizationAvatar(){const t=await e().currentUser;t?(console.log("Пользователь авторизован:",t.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}async checkAuthorizationUser(){const t=await e().currentUser;t?(console.log("Пользователь авторизован:",t.uid),window.location.href="index.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}watchAuthState(){n(e(),t=>{t?console.log("Пользователь авторизован:",t.uid):(console.log("Пользователь не авторизован"),window.location.href.includes("authorization.html")||(window.location.href="authorization.html"))})}initializeButton(){const t=document.querySelector(".top-list__link-avatar"),i=document.querySelector(".top-list__link-user");t?t.addEventListener("click",o=>{o.preventDefault(),this.checkAuthorizationAvatar()}):console.error("Кнопка не найдена"),i?i.addEventListener("click",o=>{o.preventDefault(),this.checkAuthorizationUser()}):console.error("Кнопка не найдена")}}export{l as I};
