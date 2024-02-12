import{_ as Fa,C as ba,r as xi,F as Ua,L as Et,g as ln,a as qa,b as ja,c as Ba,S as $a,d as za,e as Ka,f as Ga,h as cn,j as Qa}from"./index.esm-RQMDg1fI.js";var Wa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},p,Lr=Lr||{},v=Wa||self;function wn(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Le(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function Ha(n){return Object.prototype.hasOwnProperty.call(n,Hn)&&n[Hn]||(n[Hn]=++Xa)}var Hn="closure_uid_"+(1e9*Math.random()>>>0),Xa=0;function Ya(n,t,e){return n.call.apply(n.bind,arguments)}function Ja(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Y(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Y=Ya:Y=Ja,Y.apply(null,arguments)}function Ye(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function B(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Pt(){this.s=this.s,this.o=this.o}var Za=0;Pt.prototype.s=!1;Pt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Za!=0)&&Ha(this)};Pt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ns=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function Mr(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function Oi(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(wn(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function J(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var tu=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{const e=()=>{};v.addEventListener("test",e,t),v.removeEventListener("test",e,t)}catch{}return n}();function we(n){return/^[\s\xa0]*$/.test(n)}function An(){var n=v.navigator;return n&&(n=n.userAgent)?n:""}function at(n){return An().indexOf(n)!=-1}function Fr(n){return Fr[" "](n),n}Fr[" "]=function(){};function eu(n,t){var e=Qu;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var nu=at("Opera"),Xt=at("Trident")||at("MSIE"),ks=at("Edge"),ur=ks||Xt,xs=at("Gecko")&&!(An().toLowerCase().indexOf("webkit")!=-1&&!at("Edge"))&&!(at("Trident")||at("MSIE"))&&!at("Edge"),ru=An().toLowerCase().indexOf("webkit")!=-1&&!at("Edge");function Os(){var n=v.document;return n?n.documentMode:void 0}var hr;t:{var Xn="",Yn=function(){var n=An();if(xs)return/rv:([^\);]+)(\)|;)/.exec(n);if(ks)return/Edge\/([\d\.]+)/.exec(n);if(Xt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(ru)return/WebKit\/(\S+)/.exec(n);if(nu)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Yn&&(Xn=Yn?Yn[1]:""),Xt){var Jn=Os();if(Jn!=null&&Jn>parseFloat(Xn)){hr=String(Jn);break t}}hr=Xn}var lr;if(v.document&&Xt){var Li=Os();lr=Li||parseInt(hr,10)||void 0}else lr=void 0;var iu=lr;function Ae(n,t){if(J.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(xs){t:{try{Fr(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:su[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Ae.$.h.call(this)}}B(Ae,J);var su={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),ou=0;function au(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++ou,this.fa=this.ia=!1}function Rn(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function br(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function uu(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Ls(n){const t={};for(const e in n)t[e]=n[e];return t}const Mi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ms(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<Mi.length;s++)e=Mi[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Pn(n){this.src=n,this.g={},this.h=0}Pn.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=dr(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new au(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function cr(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Ns(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Rn(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function dr(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Ur="closure_lm_"+(1e6*Math.random()|0),Zn={};function Fs(n,t,e,r,i){if(r&&r.once)return Us(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Fs(n,t[s],e,r,i);return null}return e=Br(e),n&&n[Me]?n.O(t,e,Le(r)?!!r.capture:!!r,i):bs(n,t,e,!1,r,i)}function bs(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Le(i)?!!i.capture:!!i,a=jr(n);if(a||(n[Ur]=a=new Pn(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=hu(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)tu||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(js(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function hu(){function n(e){return t.call(n.src,n.listener,e)}const t=lu;return n}function Us(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Us(n,t[s],e,r,i);return null}return e=Br(e),n&&n[Me]?n.P(t,e,Le(r)?!!r.capture:!!r,i):bs(n,t,e,!0,r,i)}function qs(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)qs(n,t[s],e,r,i);else r=Le(r)?!!r.capture:!!r,e=Br(e),n&&n[Me]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=dr(s,e,r,i),-1<e&&(Rn(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=jr(n))&&(t=n.g[t.toString()],n=-1,t&&(n=dr(t,e,r,i)),(e=-1<n?t[n]:null)&&qr(e))}function qr(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Me])cr(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(js(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=jr(t))?(cr(e,n),e.h==0&&(e.src=null,t[Ur]=null)):Rn(n)}}}function js(n){return n in Zn?Zn[n]:Zn[n]="on"+n}function lu(n,t){if(n.fa)n=!0;else{t=new Ae(t,this);var e=n.listener,r=n.la||n.src;n.ia&&qr(n),n=e.call(r,t)}return n}function jr(n){return n=n[Ur],n instanceof Pn?n:null}var tr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Br(n){return typeof n=="function"?n:(n[tr]||(n[tr]=function(t){return n.handleEvent(t)}),n[tr])}function j(){Pt.call(this),this.i=new Pn(this),this.S=this,this.J=null}B(j,Pt);j.prototype[Me]=!0;j.prototype.removeEventListener=function(n,t,e,r){qs(this,n,t,e,r)};function K(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new J(t,n);else if(t instanceof J)t.target=t.target||n;else{var i=t;t=new J(r,n),Ms(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Je(o,r,!0,t)&&i}if(o=t.g=n,i=Je(o,r,!0,t)&&i,i=Je(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Je(o,r,!1,t)&&i}j.prototype.N=function(){if(j.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Rn(e[r]);delete n.g[t],n.h--}}this.J=null};j.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};j.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Je(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&cr(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var $r=v.JSON.stringify;class cu{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function du(){var n=zr;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class fu{constructor(){this.h=this.g=null}add(t,e){const r=Bs.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var Bs=new cu(()=>new gu,n=>n.reset());class gu{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function pu(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function mu(n){v.setTimeout(()=>{throw n},0)}let Re,Pe=!1,zr=new fu,$s=()=>{const n=v.Promise.resolve(void 0);Re=()=>{n.then(_u)}};var _u=()=>{for(var n;n=du();){try{n.h.call(n.g)}catch(e){mu(e)}var t=Bs;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}Pe=!1};function Vn(n,t){j.call(this),this.h=n||1,this.g=t||v,this.j=Y(this.qb,this),this.l=Date.now()}B(Vn,j);p=Vn.prototype;p.ga=!1;p.T=null;p.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),K(this,"tick"),this.ga&&(Kr(this),this.start()))}};p.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kr(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}p.N=function(){Vn.$.N.call(this),Kr(this),delete this.g};function Gr(n,t,e){if(typeof n=="function")e&&(n=Y(n,e));else if(n&&typeof n.handleEvent=="function")n=Y(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:v.setTimeout(n,t||0)}function zs(n){n.g=Gr(()=>{n.g=null,n.i&&(n.i=!1,zs(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class yu extends Pt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:zs(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ve(n){Pt.call(this),this.h=n,this.g={}}B(Ve,Pt);var Fi=[];function Ks(n,t,e,r){Array.isArray(e)||(e&&(Fi[0]=e.toString()),e=Fi);for(var i=0;i<e.length;i++){var s=Fs(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function Gs(n){br(n.g,function(t,e){this.g.hasOwnProperty(e)&&qr(t)},n),n.g={}}Ve.prototype.N=function(){Ve.$.N.call(this),Gs(this)};Ve.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sn(){this.g=!0}Sn.prototype.Ea=function(){this.g=!1};function Eu(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var l=h[0];h=h[1];var c=l.split("_");o=2<=c.length&&c[1]=="type"?o+(l+"="+h+"&"):o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function vu(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function zt(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Iu(n,e)+(r?" "+r:"")})}function Tu(n,t){n.info(function(){return"TIMEOUT: "+t})}Sn.prototype.info=function(){};function Iu(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $r(e)}catch{return t}}var bt={},bi=null;function Cn(){return bi=bi||new j}bt.Ta="serverreachability";function Qs(n){J.call(this,bt.Ta,n)}B(Qs,J);function Se(n){const t=Cn();K(t,new Qs(t))}bt.STAT_EVENT="statevent";function Ws(n,t){J.call(this,bt.STAT_EVENT,n),this.stat=t}B(Ws,J);function tt(n){const t=Cn();K(t,new Ws(t,n))}bt.Ua="timingevent";function Hs(n,t){J.call(this,bt.Ua,n),this.size=t}B(Hs,J);function Fe(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){n()},t)}var Dn={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Xs={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qr(){}Qr.prototype.h=null;function Ui(n){return n.h||(n.h=n.i())}function Ys(){}var be={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wr(){J.call(this,"d")}B(Wr,J);function Hr(){J.call(this,"c")}B(Hr,J);var fr;function Nn(){}B(Nn,Qr);Nn.prototype.g=function(){return new XMLHttpRequest};Nn.prototype.i=function(){return{}};fr=new Nn;function Ue(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new Ve(this),this.P=wu,n=ur?125:void 0,this.V=new Vn(n),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Js}function Js(){this.i=null,this.g="",this.h=!1}var wu=45e3,Zs={},gr={};p=Ue.prototype;p.setTimeout=function(n){this.P=n};function pr(n,t,e){n.L=1,n.A=xn(_t(t)),n.u=e,n.S=!0,to(n,null)}function to(n,t){n.G=Date.now(),qe(n),n.B=_t(n.A);var e=n.B,r=n.W;Array.isArray(r)||(r=[String(r)]),uo(e.i,"t",r),n.o=0,e=n.l.J,n.h=new Js,n.g=Do(n.l,e?t:null,!n.u),0<n.O&&(n.M=new yu(Y(n.Pa,n,n.g),n.O)),Ks(n.U,n.g,"readystatechange",n.nb),t=n.I?Ls(n.I):{},n.u?(n.v||(n.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.B,n.v,n.u,t)):(n.v="GET",n.g.ha(n.B,n.v,null,t)),Se(),Eu(n.j,n.v,n.B,n.m,n.W,n.u)}p.nb=function(n){n=n.target;const t=this.M;t&&ht(n)==3?t.l():this.Pa(n)};p.Pa=function(n){try{if(n==this.g)t:{const l=ht(this.g);var t=this.g.Ia();const c=this.g.da();if(!(3>l)&&(l!=3||ur||this.g&&(this.h.h||this.g.ja()||$i(this.g)))){this.J||l!=4||t==7||(t==8||0>=c?Se(3):Se(2)),kn(this);var e=this.g.da();this.ca=e;e:if(eo(this)){var r=$i(this.g);n="";var i=r.length,s=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ct(this),_e(this);var o="";break e}this.h.i=new v.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=n,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,vu(this.j,this.v,this.B,this.m,this.W,l,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!we(a)){var h=a;break e}}h=null}if(e=h)zt(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,mr(this,e);else{this.i=!1,this.s=3,tt(12),Ct(this),_e(this);break t}}this.S?(no(this,l,o),ur&&this.i&&l==3&&(Ks(this.U,this.V,"tick",this.mb),this.V.start())):(zt(this.j,this.m,o,null),mr(this,o)),l==4&&Ct(this),this.i&&!this.J&&(l==4?Po(this.l,this):(this.i=!1,qe(this)))}else zu(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Ct(this),_e(this)}}}catch{}finally{}};function eo(n){return n.g?n.v=="GET"&&n.L!=2&&n.l.Ha:!1}function no(n,t,e){let r=!0,i;for(;!n.J&&n.o<e.length;)if(i=Au(n,e),i==gr){t==4&&(n.s=4,tt(14),r=!1),zt(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Zs){n.s=4,tt(15),zt(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else zt(n.j,n.m,i,null),mr(n,i);eo(n)&&n.o!=0&&(n.h.g=n.h.g.slice(n.o),n.o=0),t!=4||e.length!=0||n.h.h||(n.s=1,tt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),ei(t),t.M=!0,tt(11))):(zt(n.j,n.m,e,"[Invalid Chunked Response]"),Ct(n),_e(n))}p.mb=function(){if(this.g){var n=ht(this.g),t=this.g.ja();this.o<t.length&&(kn(this),no(this,n,t),this.i&&n!=4&&qe(this))}};function Au(n,t){var e=n.o,r=t.indexOf(`
`,e);return r==-1?gr:(e=Number(t.substring(e,r)),isNaN(e)?Zs:(r+=1,r+e>t.length?gr:(t=t.slice(r,r+e),n.o=r+e,t)))}p.cancel=function(){this.J=!0,Ct(this)};function qe(n){n.Y=Date.now()+n.P,ro(n,n.P)}function ro(n,t){if(n.C!=null)throw Error("WatchDog timer not null");n.C=Fe(Y(n.lb,n),t)}function kn(n){n.C&&(v.clearTimeout(n.C),n.C=null)}p.lb=function(){this.C=null;const n=Date.now();0<=n-this.Y?(Tu(this.j,this.B),this.L!=2&&(Se(),tt(17)),Ct(this),this.s=2,_e(this)):ro(this,this.Y-n)};function _e(n){n.l.H==0||n.J||Po(n.l,n)}function Ct(n){kn(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Kr(n.V),Gs(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function mr(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||_r(e.i,n))){if(!n.K&&_r(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)gn(e),Fn(e);else break t;ti(e),tt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Fe(Y(e.ib,e),6e3));if(1>=co(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else Dt(e,11)}else if((n.K||e.g==n)&&gn(e),!we(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(e.V=h[0],h=h[1],e.H==2)if(h[0]=="c"){e.K=h[1],e.pa=h[2];const l=h[3];l!=null&&(e.ra=l,e.l.info("VER="+e.ra));const c=h[4];c!=null&&(e.Ga=c,e.l.info("SVER="+e.Ga));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(r=1.5*g,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const _=n.g;if(_){const C=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(C){var s=r.i;s.g||C.indexOf("spdy")==-1&&C.indexOf("quic")==-1&&C.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xr(s,s.h),s.h=null))}if(r.F){const D=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(r.Da=D,N(r.I,r.F,D))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Co(r,r.J?r.pa:null,r.Y),o.K){fo(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.C&&(kn(a),qe(a)),r.g=o}else Ao(r);0<e.j.length&&bn(e)}else h[0]!="stop"&&h[0]!="close"||Dt(e,7);else e.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Dt(e,7):Zr(e):h[0]!="noop"&&e.h&&e.h.Aa(h),e.A=0)}}Se(4)}catch{}}function Ru(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(wn(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Pu(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(wn(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function io(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(wn(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Pu(n),r=Ru(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var so=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vu(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function xt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof xt){this.h=n.h,dn(this,n.j),this.s=n.s,this.g=n.g,fn(this,n.m),this.l=n.l;var t=n.i,e=new Ce;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),qi(this,e),this.o=n.o}else n&&(t=String(n).match(so))?(this.h=!1,dn(this,t[1]||"",!0),this.s=fe(t[2]||""),this.g=fe(t[3]||"",!0),fn(this,t[4]),this.l=fe(t[5]||"",!0),qi(this,t[6]||"",!0),this.o=fe(t[7]||"")):(this.h=!1,this.i=new Ce(null,this.h))}xt.prototype.toString=function(){var n=[],t=this.j;t&&n.push(ge(t,ji,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(ge(t,ji,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(ge(e,e.charAt(0)=="/"?Du:Cu,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",ge(e,ku)),n.join("")};function _t(n){return new xt(n)}function dn(n,t,e){n.j=e?fe(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function fn(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function qi(n,t,e){t instanceof Ce?(n.i=t,xu(n.i,n.h)):(e||(t=ge(t,Nu)),n.i=new Ce(t,n.h))}function N(n,t,e){n.i.set(t,e)}function xn(n){return N(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function fe(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function ge(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Su),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Su(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ji=/[#\/\?@]/g,Cu=/[#\?:]/g,Du=/[#\?]/g,Nu=/[#\?@]/g,ku=/#/g;function Ce(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function Vt(n){n.g||(n.g=new Map,n.h=0,n.i&&Vu(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}p=Ce.prototype;p.add=function(n,t){Vt(this),this.i=null,n=ie(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function oo(n,t){Vt(n),t=ie(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function ao(n,t){return Vt(n),t=ie(n,t),n.g.has(t)}p.forEach=function(n,t){Vt(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};p.ta=function(){Vt(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};p.Z=function(n){Vt(this);let t=[];if(typeof n=="string")ao(this,n)&&(t=t.concat(this.g.get(ie(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};p.set=function(n,t){return Vt(this),this.i=null,n=ie(this,n),ao(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};p.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function uo(n,t,e){oo(n,t),0<e.length&&(n.i=null,n.g.set(ie(n,t),Mr(e)),n.h+=e.length)}p.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function ie(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function xu(n,t){t&&!n.j&&(Vt(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(oo(this,r),uo(this,i,e))},n)),n.j=t}var Ou=class{constructor(n,t){this.g=n,this.map=t}};function ho(n){this.l=n||Lu,v.PerformanceNavigationTiming?(n=v.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(v.g&&v.g.Ka&&v.g.Ka()&&v.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lu=10;function lo(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function co(n){return n.h?1:n.g?n.g.size:0}function _r(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Xr(n,t){n.g?n.g.add(t):n.h=t}function fo(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}ho.prototype.cancel=function(){if(this.i=go(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function go(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return Mr(n.i)}var Mu=class{stringify(n){return v.JSON.stringify(n,void 0)}parse(n){return v.JSON.parse(n,void 0)}};function Fu(){this.g=new Mu}function bu(n,t,e){const r=e||"";try{io(n,function(i,s){let o=i;Le(i)&&(o=$r(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Uu(n,t){const e=new Sn;if(v.Image){const r=new Image;r.onload=Ye(Ze,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Ye(Ze,e,r,"TestLoadImage: error",!1,t),r.onabort=Ye(Ze,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ye(Ze,e,r,"TestLoadImage: timeout",!1,t),v.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Ze(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function On(n){this.l=n.ec||null,this.j=n.ob||!1}B(On,Qr);On.prototype.g=function(){return new Ln(this.l,this.j)};On.prototype.i=function(n){return function(){return n}}({});function Ln(n,t){j.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Yr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}B(Ln,j);var Yr=0;p=Ln.prototype;p.open=function(n,t){if(this.readyState!=Yr)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,De(this)};p.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||v).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};p.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,je(this)),this.readyState=Yr};p.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,De(this)),this.g&&(this.readyState=3,De(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;po(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function po(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}p.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?je(this):De(this),this.readyState==3&&po(this)}};p.Za=function(n){this.g&&(this.response=this.responseText=n,je(this))};p.Ya=function(n){this.g&&(this.response=n,je(this))};p.ka=function(){this.g&&je(this)};function je(n){n.readyState=4,n.l=null,n.j=null,n.A=null,De(n)}p.setRequestHeader=function(n,t){this.v.append(n,t)};p.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};p.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function De(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ln.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var qu=v.JSON.parse;function x(n){j.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=mo,this.L=this.M=!1}B(x,j);var mo="",ju=/^https?$/i,Bu=["POST","PUT"];p=x.prototype;p.Oa=function(n){this.M=n};p.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fr.g(),this.C=this.u?Ui(this.u):Ui(fr),this.g.onreadystatechange=Y(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Bi(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=v.FormData&&n instanceof v.FormData,!(0<=Ns(Bu,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Eo(this),0<this.B&&((this.L=$u(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Y(this.ua,this)):this.A=Gr(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Bi(this,s)}};function $u(n){return Xt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}p.ua=function(){typeof Lr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,K(this,"timeout"),this.abort(8))};function Bi(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,_o(n),Mn(n)}function _o(n){n.F||(n.F=!0,K(n,"complete"),K(n,"error"))}p.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,K(this,"complete"),K(this,"abort"),Mn(this))};p.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mn(this,!0)),x.$.N.call(this)};p.La=function(){this.s||(this.G||this.v||this.l?yo(this):this.kb())};p.kb=function(){yo(this)};function yo(n){if(n.h&&typeof Lr<"u"&&(!n.C[1]||ht(n)!=4||n.da()!=2)){if(n.v&&ht(n)==4)Gr(n.La,0,n);else if(K(n,"readystatechange"),ht(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(so)[1]||null;!i&&v.self&&v.self.location&&(i=v.self.location.protocol.slice(0,-1)),r=!ju.test(i?i.toLowerCase():"")}e=r}if(e)K(n,"complete"),K(n,"success");else{n.m=6;try{var s=2<ht(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",_o(n)}}finally{Mn(n)}}}}function Mn(n,t){if(n.g){Eo(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||K(n,"ready");try{e.onreadystatechange=r}catch{}}}function Eo(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(v.clearTimeout(n.A),n.A=null)}p.isActive=function(){return!!this.g};function ht(n){return n.g?n.g.readyState:0}p.da=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}};p.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};p.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),qu(t)}};function $i(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case mo:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function zu(n){const t={};n=(n.g&&2<=ht(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(we(n[r]))continue;var e=pu(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}uu(t,function(r){return r.join(", ")})}p.Ia=function(){return this.m};p.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function vo(n){let t="";return br(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Jr(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=vo(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):N(n,t,e))}function le(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function To(n){this.Ga=0,this.j=[],this.l=new Sn,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=le("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=le("baseRetryDelayMs",5e3,n),this.hb=le("retryDelaySeedMs",1e4,n),this.eb=le("forwardChannelMaxRetries",2,n),this.xa=le("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new ho(n&&n.concurrentRequestLimit),this.Ja=new Fu,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}p=To.prototype;p.ra=8;p.H=1;function Zr(n){if(Io(n),n.H==3){var t=n.W++,e=_t(n.I);if(N(e,"SID",n.K),N(e,"RID",t),N(e,"TYPE","terminate"),Be(n,e),t=new Ue(n,n.l,t),t.L=2,t.A=xn(_t(e)),e=!1,v.navigator&&v.navigator.sendBeacon)try{e=v.navigator.sendBeacon(t.A.toString(),"")}catch{}!e&&v.Image&&(new Image().src=t.A,e=!0),e||(t.g=Do(t.l,null),t.g.ha(t.A)),t.G=Date.now(),qe(t)}So(n)}function Fn(n){n.g&&(ei(n),n.g.cancel(),n.g=null)}function Io(n){Fn(n),n.u&&(v.clearTimeout(n.u),n.u=null),gn(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&v.clearTimeout(n.m),n.m=null)}function bn(n){if(!lo(n.i)&&!n.m){n.m=!0;var t=n.Na;Re||$s(),Pe||(Re(),Pe=!0),zr.add(t,n),n.C=0}}function Ku(n,t){return co(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Fe(Y(n.Na,n,t),Vo(n,n.C)),n.C++,!0)}p.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Ue(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Ls(s),Ms(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=wo(this,i,t),e=_t(this.I),N(e,"RID",n),N(e,"CVER",22),this.F&&N(e,"X-HTTP-Session-Id",this.F),Be(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(vo(s)))+"&"+t:this.o&&Jr(e,this.o,s)),Xr(this.i,i),this.bb&&N(e,"TYPE","init"),this.P?(N(e,"$req",t),N(e,"SID","null"),i.aa=!0,pr(i,e,null)):pr(i,e,t),this.H=2}}else this.H==3&&(n?zi(this,n):this.j.length==0||lo(this.i)||zi(this))};function zi(n,t){var e;t?e=t.m:e=n.W++;const r=_t(n.I);N(r,"SID",n.K),N(r,"RID",e),N(r,"AID",n.V),Be(n,r),n.o&&n.s&&Jr(r,n.o,n.s),e=new Ue(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=wo(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Xr(n.i,e),pr(e,r,t)}function Be(n,t){n.na&&br(n.na,function(e,r){N(t,r,e)}),n.h&&io({},function(e,r){N(t,r,e)})}function wo(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Y(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let h=i[u].g;const l=i[u].map;if(h-=s,0>h)s=Math.max(0,i[u].g-100),a=!1;else try{bu(l,o,"req"+h+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Ao(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;Re||$s(),Pe||(Re(),Pe=!0),zr.add(t,n),n.A=0}}function ti(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Fe(Y(n.Ma,n),Vo(n,n.A)),n.A++,!0)}p.Ma=function(){if(this.u=null,Ro(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Fe(Y(this.jb,this),n)}};p.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tt(10),Fn(this),Ro(this))};function ei(n){n.B!=null&&(v.clearTimeout(n.B),n.B=null)}function Ro(n){n.g=new Ue(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=_t(n.wa);N(t,"RID","rpc"),N(t,"SID",n.K),N(t,"AID",n.V),N(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&N(t,"TO",n.qa),N(t,"TYPE","xmlhttp"),Be(n,t),n.o&&n.s&&Jr(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.A=xn(_t(t)),e.u=null,e.S=!0,to(e,n)}p.ib=function(){this.v!=null&&(this.v=null,Fn(this),ti(this),tt(19))};function gn(n){n.v!=null&&(v.clearTimeout(n.v),n.v=null)}function Po(n,t){var e=null;if(n.g==t){gn(n),ei(n),n.g=null;var r=2}else if(_r(n.i,t))e=t.F,fo(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.u?t.u.length:0,t=Date.now()-t.G;var i=n.C;r=Cn(),K(r,new Hs(r,e)),bn(n)}else Ao(n);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Ku(n,t)||r==2&&ti(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:Dt(n,5);break;case 4:Dt(n,10);break;case 3:Dt(n,6);break;default:Dt(n,2)}}}function Vo(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function Dt(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Y(n.pb,n);e||(e=new xt("//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||dn(e,"https"),xn(e)),Uu(e.toString(),r)}else tt(2);n.H=0,n.h&&n.h.za(t),So(n),Io(n)}p.pb=function(n){n?(this.l.info("Successfully pinged google.com"),tt(2)):(this.l.info("Failed to ping google.com"),tt(1))};function So(n){if(n.H=0,n.ma=[],n.h){const t=go(n.i);(t.length!=0||n.j.length!=0)&&(Oi(n.ma,t),Oi(n.ma,n.j),n.i.i.length=0,Mr(n.j),n.j.length=0),n.h.ya()}}function Co(n,t,e){var r=e instanceof xt?_t(e):new xt(e);if(r.g!="")t&&(r.g=t+"."+r.g),fn(r,r.m);else{var i=v.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new xt(null);r&&dn(s,r),t&&(s.g=t),i&&fn(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&N(r,e,t),N(r,"VER",n.ra),Be(n,r),r}function Do(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=n.Ha&&!n.va?new x(new On({ob:e})):new x(n.va),t.Oa(n.J),t}p.isActive=function(){return!!this.h&&this.h.isActive(this)};function No(){}p=No.prototype;p.Ba=function(){};p.Aa=function(){};p.za=function(){};p.ya=function(){};p.isActive=function(){return!0};p.Va=function(){};function pn(){if(Xt&&!(10<=Number(iu)))throw Error("Environmental error: no available transport.")}pn.prototype.g=function(n,t){return new nt(n,t)};function nt(n,t){j.call(this),this.g=new To(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!we(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!we(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new se(this)}B(nt,j);nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;tt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Co(n,null,n.Y),bn(n)};nt.prototype.close=function(){Zr(this.g)};nt.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=$r(n),n=e);t.j.push(new Ou(t.fb++,n)),t.H==3&&bn(t)};nt.prototype.N=function(){this.g.h=null,delete this.j,Zr(this.g),delete this.g,nt.$.N.call(this)};function ko(n){Wr.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}B(ko,Wr);function xo(){Hr.call(this),this.status=1}B(xo,Hr);function se(n){this.g=n}B(se,No);se.prototype.Ba=function(){K(this.g,"a")};se.prototype.Aa=function(n){K(this.g,new ko(n))};se.prototype.za=function(n){K(this.g,new xo)};se.prototype.ya=function(){K(this.g,"b")};function Gu(){this.blockSize=-1}function st(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}B(st,Gu);st.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function er(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}st.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)er(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){er(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){er(this,r),i=0;break}}this.h=i,this.i+=t};st.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function S(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var Qu={};function ni(n){return-128<=n&&128>n?eu(n,function(t){return new S([t|0],0>t?-1:0)}):new S([n|0],0>n?-1:0)}function lt(n){if(isNaN(n)||!isFinite(n))return Kt;if(0>n)return z(lt(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=yr;return new S(t,0)}function Oo(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return z(Oo(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=lt(Math.pow(t,8)),r=Kt,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=lt(Math.pow(t,s)),r=r.R(s).add(lt(o))):(r=r.R(e),r=r.add(lt(o)))}return r}var yr=4294967296,Kt=ni(0),Er=ni(1),Ki=ni(16777216);p=S.prototype;p.ea=function(){if(rt(this))return-z(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:yr+r)*t,t*=yr}return n};p.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(mt(this))return"0";if(rt(this))return"-"+z(this).toString(n);for(var t=lt(Math.pow(n,6)),e=this,r="";;){var i=_n(e,t).g;e=mn(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,mt(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};p.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function mt(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function rt(n){return n.h==-1}p.X=function(n){return n=mn(this,n),rt(n)?-1:mt(n)?0:1};function z(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new S(e,~n.h).add(Er)}p.abs=function(){return rt(this)?z(this):this};p.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new S(e,e[e.length-1]&-2147483648?-1:0)};function mn(n,t){return n.add(z(t))}p.R=function(n){if(mt(this)||mt(n))return Kt;if(rt(this))return rt(n)?z(this).R(z(n)):z(z(this).R(n));if(rt(n))return z(this.R(z(n)));if(0>this.X(Ki)&&0>n.X(Ki))return lt(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,tn(e,2*r+2*i),e[2*r+2*i+1]+=s*u,tn(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,tn(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,tn(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new S(e,0)};function tn(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function ce(n,t){this.g=n,this.h=t}function _n(n,t){if(mt(t))throw Error("division by zero");if(mt(n))return new ce(Kt,Kt);if(rt(n))return t=_n(z(n),t),new ce(z(t.g),z(t.h));if(rt(t))return t=_n(n,z(t)),new ce(z(t.g),t.h);if(30<n.g.length){if(rt(n)||rt(t))throw Error("slowDivide_ only works with positive integers.");for(var e=Er,r=t;0>=r.X(n);)e=Gi(e),r=Gi(r);var i=qt(e,1),s=qt(r,1);for(r=qt(r,2),e=qt(e,2);!mt(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=qt(r,1),e=qt(e,1)}return t=mn(n,i.R(t)),new ce(i,t)}for(i=Kt;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lt(e),o=s.R(t);rt(o)||0<o.X(n);)e-=r,s=lt(e),o=s.R(t);mt(s)&&(s=Er),i=i.add(s),n=mn(n,o)}return new ce(i,n)}p.gb=function(n){return _n(this,n).h};p.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new S(e,this.h&n.h)};p.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new S(e,this.h|n.h)};p.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new S(e,this.h^n.h)};function Gi(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new S(e,n.h)}function qt(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new S(i,n.h)}pn.prototype.createWebChannel=pn.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Dn.NO_ERROR=0;Dn.TIMEOUT=8;Dn.HTTP_ERROR=6;Xs.COMPLETE="complete";Ys.EventType=be;be.OPEN="a";be.CLOSE="b";be.ERROR="c";be.MESSAGE="d";j.prototype.listen=j.prototype.O;x.prototype.listenOnce=x.prototype.P;x.prototype.getLastError=x.prototype.Sa;x.prototype.getLastErrorCode=x.prototype.Ia;x.prototype.getStatus=x.prototype.da;x.prototype.getResponseJson=x.prototype.Wa;x.prototype.getResponseText=x.prototype.ja;x.prototype.send=x.prototype.ha;x.prototype.setWithCredentials=x.prototype.Oa;st.prototype.digest=st.prototype.l;st.prototype.reset=st.prototype.reset;st.prototype.update=st.prototype.j;S.prototype.add=S.prototype.add;S.prototype.multiply=S.prototype.R;S.prototype.modulo=S.prototype.gb;S.prototype.compare=S.prototype.X;S.prototype.toNumber=S.prototype.ea;S.prototype.toString=S.prototype.toString;S.prototype.getBits=S.prototype.D;S.fromNumber=lt;S.fromString=Oo;var Wu=function(){return new pn},Hu=function(){return Cn()},nr=Dn,Xu=Xs,Yu=bt,Qi={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},en=Ys,Ju=x,Zu=st,Gt=S;const Wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe="10.7.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new za("@firebase/firestore");function de(){return Lt.logLevel}function m(n,...t){if(Lt.logLevel<=Et.DEBUG){const e=t.map(ri);Lt.debug(`Firestore (${oe}): ${n}`,...e)}}function dt(n,...t){if(Lt.logLevel<=Et.ERROR){const e=t.map(ri);Lt.error(`Firestore (${oe}): ${n}`,...e)}}function Yt(n,...t){if(Lt.logLevel<=Et.WARN){const e=t.map(ri);Lt.warn(`Firestore (${oe}): ${n}`,...e)}}function ri(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(n="Unexpected state"){const t=`FIRESTORE (${oe}) INTERNAL ASSERTION FAILED: `+n;throw dt(t),new Error(t)}function b(n,t){n||I()}function P(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ua{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class th{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(W.UNAUTHENTICATED))}shutdown(){}}class eh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class nh{constructor(t){this.t=t,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new It;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new It,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new It)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(b(typeof r.accessToken=="string"),new Lo(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return b(t===null||typeof t=="string"),new W(t)}}class rh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=W.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ih{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new rh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oh{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(b(typeof e.token=="string"),this.R=e.token,new sh(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=ah(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function V(n,t){return n<t?-1:n>t?1:0}function Jt(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return q.fromMillis(Date.now())}static fromDate(t){return q.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new q(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?V(this.nanoseconds,t.nanoseconds):V(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t){this.timestamp=t}static fromTimestamp(t){return new T(t)}static min(){return new T(new q(0,0))}static max(){return new T(new q(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e,r){e===void 0?e=0:e>t.length&&I(),r===void 0?r=t.length-e:r>t.length-e&&I(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ne.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ne?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class k extends Ne{construct(t,e,r){return new k(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new k(e)}static emptyPath(){return new k([])}}const hh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends Ne{construct(t,e,r){return new X(t,e,r)}static isValidIdentifier(t){return hh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new X(e)}static emptyPath(){return new X([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return k.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function lh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=T.fromTimestamp(r===1e9?new q(e+1,0):new q(e,r));return new wt(i,E.empty(),t)}function ch(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new wt(T.min(),E.empty(),-1)}static max(){return new wt(T.max(),E.empty(),-1)}}function dh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=E.comparator(n.documentKey,t.documentKey),e!==0?e:V(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==fh)throw n;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new d((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof d?e:d.resolve(e)}catch(e){return d.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):d.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):d.reject(e)}static resolve(t){return new d((e,r)=>{e(t)})}static reject(t){return new d((e,r)=>{r(t)})}static waitFor(t){return new d((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=d.resolve(!1);for(const r of t)e=e.next(i=>i?d.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new d((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const h=u;e(t[h]).next(l=>{o[h]=l,++a,a===s&&r(o)},l=>i(l))}})}static doWhile(t,e){return new d((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new It,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new ye(t,e.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=oi(r.target.error);this.V.reject(new ye(t,i))}}static open(t,e,r,i){try{return new si(e,t.transaction(i,r))}catch(s){throw new ye(e,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(m("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new mh(e)}}class Nt{constructor(t,e,r){this.name=t,this.version=e,this.p=r,Nt.S(cn())===12.2&&dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return m("SimpleDb","Removing database:",t),St(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Qa())return!1;if(Nt.C())return!0;const t=cn(),e=Nt.S(t),r=0<e&&e<10,i=Nt.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const e=t.match(/Android ([\d.]+)/i),r=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(m("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;e(o)},i.onblocked=()=>{r(new ye(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ye(t,o))},i.onupgradeneeded=s=>{m("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{m("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=e=>this.B(e)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,r,i){const s=e==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=si.open(this.db,t,s?"readonly":"readwrite",r),u=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),d.reject(h))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,h=u.name!=="FirebaseError"&&o<3;if(m("SimpleDb","Transaction failed with error:",u.message,"Retrying:",h),this.close(),!h)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class ph{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return St(this.k.delete())}}class ye extends y{constructor(t,e){super(f.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function $e(n){return n.name==="IndexedDbTransactionError"}class mh{constructor(t){this.store=t}put(t,e){let r;return e!==void 0?(m("SimpleDb","PUT",this.store.name,t,e),r=this.store.put(e,t)):(m("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),St(r)}add(t){return m("SimpleDb","ADD",this.store.name,t,t),St(this.store.add(t))}get(t){return St(this.store.get(t)).next(e=>(e===void 0&&(e=null),m("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return m("SimpleDb","DELETE",this.store.name,t),St(this.store.delete(t))}count(){return m("SimpleDb","COUNT",this.store.name),St(this.store.count())}W(t,e){const r=this.options(t,e),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new d((o,a)=>{s.onerror=u=>{a(u.target.error)},s.onsuccess=u=>{o(u.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,u)=>{o.push(u)}).next(()=>o)}}j(t,e){const r=this.store.getAll(t,e===null?void 0:e);return new d((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,e){m("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,e);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,e){let r;e?r=t:(r={},e=t);const i=this.cursor(r);return this.G(i,e)}Z(t){const e=this.cursor({});return new d((r,i)=>{e.onerror=s=>{const o=oi(s.target.error);i(o)},e.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,e){const r=[];return new d((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new ph(a),h=e(a.primaryKey,a.value,u);if(h instanceof d){const l=h.catch(c=>(u.done(),d.reject(c)));r.push(l)}u.isDone?i():u.$===null?a.continue():a.continue(u.$)}}).next(()=>d.waitFor(r))}options(t,e){let r;return t!==void 0&&(typeof t=="string"?r=t:e=t),{index:r,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,e):r.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function St(n){return new d((t,e)=>{n.onsuccess=r=>{const i=r.target.result;t(i)},n.onerror=r=>{const i=oi(r.target.error);e(i)}})}let Hi=!1;function oi(n){const t=Nt.S(cn());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(e)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Hi||(Hi=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ai._e=-1;function Un(n){return n==null}function yn(n){return n===0&&1/n==-1/0}function _h(n){return typeof n=="number"&&Number.isInteger(n)&&!yn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ze(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Mo(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.comparator=t,this.root=e||$.EMPTY}insert(t,e){return new O(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,$.BLACK,null,null))}remove(t){return new O(this.comparator,this.root.remove(t,this.comparator).copy(null,null,$.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new nn(this.root,t,this.comparator,!0)}}class nn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ${constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??$.RED,this.left=i??$.EMPTY,this.right=s??$.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new $(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return $.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}$.EMPTY=null,$.RED=!0,$.BLACK=!1;$.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(t,e,r,i,s){return this}insert(t,e,r){return new $(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.comparator=t,this.data=new O(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Yi(this.data.getIterator())}getIteratorFrom(t){return new Yi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof G)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new G(this.comparator);return e.data=t,e}}class Yi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.fields=t,t.sort(X.comparator)}static empty(){return new vt([])}unionWith(t){let e=new G(X.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Jt(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Fo("Invalid base64 string: "+s):s}}(t);return new Z(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new Z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return V(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const yh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function At(n){if(b(!!n),typeof n=="string"){let t=0;const e=yh.exec(n);if(b(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:M(n.seconds),nanos:M(n.nanos)}}function M(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Mt(n){return typeof n=="string"?Z.fromBase64String(n):Z.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function hi(n){const t=n.mapValue.fields.__previous_value__;return ui(t)?hi(t):t}function ke(n){const t=At(n.mapValue.fields.__local_write_time__.timestampValue);return new q(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e,r,i,s,o,a,u,h){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class xe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new xe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof xe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ui(n)?4:vh(n)?9007199254740991:10:I()}function ft(n,t){if(n===t)return!0;const e=Ft(n);if(e!==Ft(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ke(n).isEqual(ke(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=At(i.timestampValue),a=At(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return Mt(i.bytesValue).isEqual(Mt(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return M(i.geoPointValue.latitude)===M(s.geoPointValue.latitude)&&M(i.geoPointValue.longitude)===M(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return M(i.integerValue)===M(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=M(i.doubleValue),a=M(s.doubleValue);return o===a?yn(o)===yn(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Jt(n.arrayValue.values||[],t.arrayValue.values||[],ft);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Xi(o)!==Xi(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ft(o[u],a[u])))return!1;return!0}(n,t);default:return I()}}function Oe(n,t){return(n.values||[]).find(e=>ft(e,t))!==void 0}function Zt(n,t){if(n===t)return 0;const e=Ft(n),r=Ft(t);if(e!==r)return V(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return V(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=M(s.integerValue||s.doubleValue),u=M(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Ji(n.timestampValue,t.timestampValue);case 4:return Ji(ke(n),ke(t));case 5:return V(n.stringValue,t.stringValue);case 6:return function(s,o){const a=Mt(s),u=Mt(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let h=0;h<a.length&&h<u.length;h++){const l=V(a[h],u[h]);if(l!==0)return l}return V(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=V(M(s.latitude),M(o.latitude));return a!==0?a:V(M(s.longitude),M(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let h=0;h<a.length&&h<u.length;++h){const l=Zt(a[h],u[h]);if(l)return l}return V(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===rn.mapValue&&o===rn.mapValue)return 0;if(s===rn.mapValue)return 1;if(o===rn.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),h=o.fields||{},l=Object.keys(h);u.sort(),l.sort();for(let c=0;c<u.length&&c<l.length;++c){const g=V(u[c],l[c]);if(g!==0)return g;const _=Zt(a[u[c]],h[l[c]]);if(_!==0)return _}return V(u.length,l.length)}(n.mapValue,t.mapValue);default:throw I()}}function Ji(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return V(n,t);const e=At(n),r=At(t),i=V(e.seconds,r.seconds);return i!==0?i:V(e.nanos,r.nanos)}function te(n){return vr(n)}function vr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=At(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Mt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return E.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=vr(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${vr(e.fields[o])}`;return i+"}"}(n.mapValue):I()}function Zi(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Tr(n){return!!n&&"integerValue"in n}function li(n){return!!n&&"arrayValue"in n}function ts(n){return!!n&&"nullValue"in n}function es(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function Ee(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ze(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Ee(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Ee(n.arrayValue.values[e]);return t}return Object.assign({},n)}function vh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.value=t}static empty(){return new ut({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ee(e)}setAll(t){let e=X.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=Ee(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ft(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];rr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){ze(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new ut(Ee(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new H(t,0,T.min(),T.min(),T.min(),ut.empty(),0)}static newFoundDocument(t,e,r,i){return new H(t,1,e,T.min(),r,i,0)}static newNoDocument(t,e){return new H(t,2,e,T.min(),T.min(),ut.empty(),0)}static newUnknownDocument(t,e){return new H(t,3,e,T.min(),T.min(),ut.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(T.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=T.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof H&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new H(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.position=t,this.inclusive=e}}function ns(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=E.comparator(E.fromName(o.referenceValue),e.key):r=Zt(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function rs(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ft(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Th(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{}class F extends bo{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new wh(t,e,r):e==="array-contains"?new Ph(t,r):e==="in"?new Vh(t,r):e==="not-in"?new Sh(t,r):e==="array-contains-any"?new Ch(t,r):new F(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Ah(t,r):new Rh(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Zt(e,this.value)):e!==null&&Ft(this.value)===Ft(e)&&this.matchesComparison(Zt(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends bo{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ot(t,e)}matches(t){return Uo(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Uo(n){return n.op==="and"}function qo(n){return Ih(n)&&Uo(n)}function Ih(n){for(const t of n.filters)if(t instanceof ot)return!1;return!0}function Ir(n){if(n instanceof F)return n.field.canonicalString()+n.op.toString()+te(n.value);if(qo(n))return n.filters.map(t=>Ir(t)).join(",");{const t=n.filters.map(e=>Ir(e)).join(",");return`${n.op}(${t})`}}function jo(n,t){return n instanceof F?function(r,i){return i instanceof F&&r.op===i.op&&r.field.isEqual(i.field)&&ft(r.value,i.value)}(n,t):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&jo(o,i.filters[a]),!0):!1}(n,t):void I()}function Bo(n){return n instanceof F?function(e){return`${e.field.canonicalString()} ${e.op} ${te(e.value)}`}(n):n instanceof ot?function(e){return e.op.toString()+" {"+e.getFilters().map(Bo).join(" ,")+"}"}(n):"Filter"}class wh extends F{constructor(t,e,r){super(t,e,r),this.key=E.fromName(r.referenceValue)}matches(t){const e=E.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ah extends F{constructor(t,e){super(t,"in",e),this.keys=$o("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Rh extends F{constructor(t,e){super(t,"not-in",e),this.keys=$o("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function $o(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>E.fromName(r.referenceValue))}class Ph extends F{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return li(e)&&Oe(e.arrayValue,this.value)}}class Vh extends F{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Oe(this.value.arrayValue,e)}}class Sh extends F{constructor(t,e){super(t,"not-in",e)}matches(t){if(Oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Oe(this.value.arrayValue,e)}}class Ch extends F{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!li(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Oe(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function is(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Dh(n,t,e,r,i,s,o)}function ci(n){const t=P(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ir(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Un(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>te(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>te(r)).join(",")),t.ce=e}return t.ce}function di(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Th(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!jo(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!rs(n.startAt,t.startAt)&&rs(n.endAt,t.endAt)}function wr(n){return E.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Nh(n,t,e,r,i,s,o,a){return new Ke(n,t,e,r,i,s,o,a)}function zo(n){return new Ke(n)}function ss(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ko(n){return n.collectionGroup!==null}function ve(n){const t=P(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new G(X.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new vn(s,r))}),e.has(X.keyField().canonicalString())||t.le.push(new vn(X.keyField(),r))}return t.le}function ct(n){const t=P(n);return t.he||(t.he=kh(t,ve(n))),t.he}function kh(n,t){if(n.limitType==="F")return is(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new vn(i.field,s)});const e=n.endAt?new En(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new En(n.startAt.position,n.startAt.inclusive):null;return is(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ar(n,t){const e=n.filters.concat([t]);return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Rr(n,t,e){return new Ke(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function qn(n,t){return di(ct(n),ct(t))&&n.limitType===t.limitType}function Go(n){return`${ci(ct(n))}|lt:${n.limitType}`}function jt(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>Bo(i)).join(", ")}]`),Un(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>te(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>te(i)).join(",")),`Target(${r})`}(ct(n))}; limitType=${n.limitType})`}function jn(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):E.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of ve(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const h=ns(o,a,u);return o.inclusive?h<=0:h<0}(r.startAt,ve(r),i)||r.endAt&&!function(o,a,u){const h=ns(o,a,u);return o.inclusive?h>=0:h>0}(r.endAt,ve(r),i))}(n,t)}function xh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Qo(n){return(t,e)=>{let r=!1;for(const i of ve(n)){const s=Oh(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Oh(n,t,e){const r=n.field.isKeyField()?E.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),h=a.data.field(s);return u!==null&&h!==null?Zt(u,h):I()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return I()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ze(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Mo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh=new O(E.comparator);function Rt(){return Lh}const Wo=new O(E.comparator);function pe(...n){let t=Wo;for(const e of n)t=t.insert(e.key,e);return t}function Mh(n){let t=Wo;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function kt(){return Te()}function Ho(){return Te()}function Te(){return new ae(n=>n.toString(),(n,t)=>n.isEqual(t))}const Fh=new G(E.comparator);function R(...n){let t=Fh;for(const e of n)t=t.add(e);return t}const bh=new G(V);function Uh(){return bh}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yn(t)?"-0":t}}function Yo(n){return{integerValue:""+n}}function qh(n,t){return _h(t)?Yo(t):Xo(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this._=void 0}}function jh(n,t,e){return n instanceof Pr?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ui(s)&&(s=hi(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Tn?Jo(n,t):n instanceof In?Zo(n,t):function(i,s){const o=$h(i,s),a=os(o)+os(i.Ie);return Tr(o)&&Tr(i.Ie)?Yo(a):Xo(i.serializer,a)}(n,t)}function Bh(n,t,e){return n instanceof Tn?Jo(n,t):n instanceof In?Zo(n,t):e}function $h(n,t){return n instanceof Vr?function(r){return Tr(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Pr extends Bn{}class Tn extends Bn{constructor(t){super(),this.elements=t}}function Jo(n,t){const e=ta(t);for(const r of n.elements)e.some(i=>ft(i,r))||e.push(r);return{arrayValue:{values:e}}}class In extends Bn{constructor(t){super(),this.elements=t}}function Zo(n,t){let e=ta(t);for(const r of n.elements)e=e.filter(i=>!ft(i,r));return{arrayValue:{values:e}}}class Vr extends Bn{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function os(n){return M(n.integerValue||n.doubleValue)}function ta(n){return li(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function zh(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Tn&&i instanceof Tn||r instanceof In&&i instanceof In?Jt(r.elements,i.elements,ft):r instanceof Vr&&i instanceof Vr?ft(r.Ie,i.Ie):r instanceof Pr&&i instanceof Pr}(n.transform,t.transform)}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function an(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class fi{}function ea(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Gh(n.key,Ot.none()):new gi(n.key,n.data,Ot.none());{const e=n.data,r=ut.empty();let i=new G(X.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new $n(n.key,r,new vt(i.toArray()),Ot.none())}}function Kh(n,t,e){n instanceof gi?function(i,s,o){const a=i.value.clone(),u=us(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof $n?function(i,s,o){if(!an(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=us(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(na(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ie(n,t,e,r){return n instanceof gi?function(s,o,a,u){if(!an(s.precondition,o))return a;const h=s.value.clone(),l=hs(s.fieldTransforms,u,o);return h.setAll(l),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,t,e,r):n instanceof $n?function(s,o,a,u){if(!an(s.precondition,o))return a;const h=hs(s.fieldTransforms,u,o),l=o.data;return l.setAll(na(s)),l.setAll(h),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(n,t,e,r):function(s,o,a){return an(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function as(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Jt(r,i,(s,o)=>zh(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class gi extends fi{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $n extends fi{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function na(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function us(n,t,e){const r=new Map;b(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Bh(o,a,e[i]))}return r}function hs(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,jh(s,o,t))}return r}class Gh extends fi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Kh(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=Ie(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=Ie(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Ho();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=ea(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(T.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),R())}isEqual(t){return this.batchId===t.batchId&&Jt(this.mutations,t.mutations,(e,r)=>as(e,r))&&Jt(this.baseMutations,t.baseMutations,(e,r)=>as(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,A;function ra(n){if(n===void 0)return dt("GRPC error has no .code"),f.UNKNOWN;switch(n){case L.OK:return f.OK;case L.CANCELLED:return f.CANCELLED;case L.UNKNOWN:return f.UNKNOWN;case L.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case L.INTERNAL:return f.INTERNAL;case L.UNAVAILABLE:return f.UNAVAILABLE;case L.UNAUTHENTICATED:return f.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case L.NOT_FOUND:return f.NOT_FOUND;case L.ALREADY_EXISTS:return f.ALREADY_EXISTS;case L.PERMISSION_DENIED:return f.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case L.ABORTED:return f.ABORTED;case L.OUT_OF_RANGE:return f.OUT_OF_RANGE;case L.UNIMPLEMENTED:return f.UNIMPLEMENTED;case L.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(A=L||(L={}))[A.OK=0]="OK",A[A.CANCELLED=1]="CANCELLED",A[A.UNKNOWN=2]="UNKNOWN",A[A.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",A[A.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",A[A.NOT_FOUND=5]="NOT_FOUND",A[A.ALREADY_EXISTS=6]="ALREADY_EXISTS",A[A.PERMISSION_DENIED=7]="PERMISSION_DENIED",A[A.UNAUTHENTICATED=16]="UNAUTHENTICATED",A[A.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",A[A.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",A[A.ABORTED=10]="ABORTED",A[A.OUT_OF_RANGE=11]="OUT_OF_RANGE",A[A.UNIMPLEMENTED=12]="UNIMPLEMENTED",A[A.INTERNAL=13]="INTERNAL",A[A.UNAVAILABLE=14]="UNAVAILABLE",A[A.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Gt([4294967295,4294967295],0);function ls(n){const t=Xh().encode(n),e=new Zu;return e.update(t),new Uint8Array(e.digest())}function cs(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Gt([e,r],0),new Gt([i,s],0)]}class pi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new me(`Invalid padding: ${e}`);if(r<0)throw new me(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new me(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new me(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Gt.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Gt.fromNumber(r)));return i.compare(Yh)===1&&(i=new Gt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=ls(t),[r,i]=cs(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new pi(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=ls(t),[r,i]=cs(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class me extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Ge.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new zn(T.min(),i,new O(V),Rt(),R())}}class Ge{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Ge(r,e,R(),R(),R())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class ia{constructor(t,e){this.targetId=t,this.fe=e}}class sa{constructor(t,e,r=Z.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ds{constructor(){this.ge=0,this.pe=gs(),this.ye=Z.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=R(),e=R(),r=R();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:I()}}),new Ge(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=gs()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,b(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class Jh{constructor(t){this.Le=t,this.ke=new Map,this.qe=Rt(),this.Qe=fs(),this.Ke=new O(V)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:I()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(wr(s))if(r===0){const o=new E(s.path);this.We(e,o,H.newNoDocument(o,T.min()))}else b(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,h)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=Mt(r).toUint8Array()}catch(u){if(u instanceof Fo)return Yt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new pi(o,i,s)}catch(u){return Yt(u instanceof me?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&wr(a.target)){const u=new E(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,H.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=R();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const h=this.Ye(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new zn(t,e,this.Ke,this.qe,r);return this.qe=Rt(),this.Qe=fs(),this.Ke=new O(V),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new ds,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new G(V),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||m("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ds),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function fs(){return new O(E.comparator)}function gs(){return new O(E.comparator)}const Zh={asc:"ASCENDING",desc:"DESCENDING"},tl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},el={and:"AND",or:"OR"};class nl{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Sr(n,t){return n.useProto3Json||Un(t)?t:{value:t}}function Cr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function oa(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Qt(n){return b(!!n),T.fromTimestamp(function(e){const r=At(e);return new q(r.seconds,r.nanos)}(n))}function aa(n,t){return Dr(n,t).canonicalString()}function Dr(n,t){const e=function(i){return new k(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function ua(n){const t=k.fromString(n);return b(fa(t)),t}function ir(n,t){const e=ua(t);if(e.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new E(la(e))}function ha(n,t){return aa(n.databaseId,t)}function rl(n){const t=ua(n);return t.length===4?k.emptyPath():la(t)}function ps(n){return new k(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function la(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function il(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,l){return h.useProto3Json?(b(l===void 0||typeof l=="string"),Z.fromBase64String(l||"")):(b(l===void 0||l instanceof Uint8Array),Z.fromUint8Array(l||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const l=h.code===void 0?f.UNKNOWN:ra(h.code);return new y(l,h.message||"")}(o);e=new sa(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ir(n,r.document.name),s=Qt(r.document.updateTime),o=r.document.createTime?Qt(r.document.createTime):T.min(),a=new ut({mapValue:{fields:r.document.fields}}),u=H.newFoundDocument(i,s,o,a),h=r.targetIds||[],l=r.removedTargetIds||[];e=new un(h,l,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ir(n,r.document),s=r.readTime?Qt(r.readTime):T.min(),o=H.newNoDocument(i,s),a=r.removedTargetIds||[];e=new un([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ir(n,r.document),s=r.removedTargetIds||[];e=new un([],s,i,null)}else{if(!("filter"in t))return I();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Hh(i,s),a=r.targetId;e=new ia(a,o)}}return e}function sl(n,t){return{documents:[ha(n,t.path)]}}function ol(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=ha(n,i);const s=function(h){if(h.length!==0)return da(ot.create(h,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(l=>function(g){return{field:Bt(g.field),direction:hl(g.dir)}}(l))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Sr(n,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:e,parent:i}}function al(n){let t=rl(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){b(r===1);const l=e.from[0];l.allDescendants?i=l.collectionId:t=t.child(l.collectionId)}let s=[];e.where&&(s=function(c){const g=ca(c);return g instanceof ot&&qo(g)?g.getFilters():[g]}(e.where));let o=[];e.orderBy&&(o=function(c){return c.map(g=>function(C){return new vn($t(C.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(e.orderBy));let a=null;e.limit&&(a=function(c){let g;return g=typeof c=="object"?c.value:c,Un(g)?null:g}(e.limit));let u=null;e.startAt&&(u=function(c){const g=!!c.before,_=c.values||[];return new En(_,g)}(e.startAt));let h=null;return e.endAt&&(h=function(c){const g=!c.before,_=c.values||[];return new En(_,g)}(e.endAt)),Nh(t,i,o,s,a,"F",u,h)}function ul(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return I()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function ca(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=$t(e.unaryFilter.field);return F.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=$t(e.unaryFilter.field);return F.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=$t(e.unaryFilter.field);return F.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=$t(e.unaryFilter.field);return F.create(o,"!=",{nullValue:"NULL_VALUE"});default:return I()}}(n):n.fieldFilter!==void 0?function(e){return F.create($t(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ot.create(e.compositeFilter.filters.map(r=>ca(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return I()}}(e.compositeFilter.op))}(n):I()}function hl(n){return Zh[n]}function ll(n){return tl[n]}function cl(n){return el[n]}function Bt(n){return{fieldPath:n.canonicalString()}}function $t(n){return X.fromServerFormat(n.fieldPath)}function da(n){return n instanceof F?function(e){if(e.op==="=="){if(es(e.value))return{unaryFilter:{field:Bt(e.field),op:"IS_NAN"}};if(ts(e.value))return{unaryFilter:{field:Bt(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(es(e.value))return{unaryFilter:{field:Bt(e.field),op:"IS_NOT_NAN"}};if(ts(e.value))return{unaryFilter:{field:Bt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bt(e.field),op:ll(e.op),value:e.value}}}(n):n instanceof ot?function(e){const r=e.getFilters().map(i=>da(i));return r.length===1?r[0]:{compositeFilter:{op:cl(e.op),filters:r}}}(n):I()}function fa(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,i,s=T.min(),o=T.min(),a=Z.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Tt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Tt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this.ct=t}}function fl(n){const t=al({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Rr(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(){this._n=new pl}addToCollectionParentIndex(t,e){return this._n.add(e),d.resolve()}getCollectionParents(t,e){return d.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return d.resolve()}deleteFieldIndex(t,e){return d.resolve()}deleteAllFieldIndexes(t){return d.resolve()}createTargetIndexes(t,e){return d.resolve()}getDocumentsMatchingTarget(t,e){return d.resolve(null)}getIndexType(t,e){return d.resolve(0)}getFieldIndexes(t,e){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}getMinOffset(t,e){return d.resolve(wt.min())}getMinOffsetFromCollectionGroup(t,e){return d.resolve(wt.min())}updateCollectionGroup(t,e,r){return d.resolve()}updateIndexEntries(t,e){return d.resolve()}}class pl{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new G(k.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new G(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new ee(0)}static Bn(){return new ee(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.changes=new ae(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,H.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?d.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&Ie(r.mutation,i,vt.empty(),q.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,R()).next(()=>r))}getLocalViewOfDocuments(t,e,r=R()){const i=kt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=pe();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=kt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,R()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Rt();const o=Te(),a=function(){return Te()}();return e.forEach((u,h)=>{const l=r.get(h.key);i.has(h.key)&&(l===void 0||l.mutation instanceof $n)?s=s.insert(h.key,h):l!==void 0?(o.set(h.key,l.mutation.getFieldMask()),Ie(l.mutation,h,l.mutation.getFieldMask(),q.now())):o.set(h.key,vt.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((h,l)=>o.set(h,l)),e.forEach((h,l)=>{var c;return a.set(h,new _l(l,(c=o.get(h))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(t,e){const r=Te();let i=new O((o,a)=>o-a),s=R();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const h=e.get(u);if(h===null)return;let l=r.get(u)||vt.empty();l=a.applyToLocalView(h,l),r.set(u,l);const c=(i.get(a.batchId)||R()).add(u);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),h=u.key,l=u.value,c=Ho();l.forEach(g=>{if(!s.has(g)){const _=ea(e.get(g),r.get(g));_!==null&&c.set(g,_),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,c))}return d.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return E.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ko(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):d.resolve(kt());let a=-1,u=s;return o.next(h=>d.forEach(h,(l,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(l)?d.resolve():this.remoteDocumentCache.getEntry(t,l).next(g=>{u=u.insert(l,g)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,u,h,R())).next(l=>({batchId:a,changes:Mh(l)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new E(e)).next(r=>{let i=pe();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=pe();return this.indexManager.getCollectionParents(t,s).next(a=>d.forEach(a,u=>{const h=function(c,g){return new Ke(g,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(l=>{l.forEach((c,g)=>{o=o.insert(c,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,h)=>{const l=h.getKey();o.get(l)===null&&(o=o.insert(l,H.newInvalidDocument(l)))});let a=pe();return o.forEach((u,h)=>{const l=s.get(u);l!==void 0&&Ie(l.mutation,h,vt.empty(),q.now()),jn(e,h)&&(a=a.insert(u,h))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return d.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:Qt(i.createTime)}}(e)),d.resolve()}getNamedQuery(t,e){return d.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(i){return{name:i.name,query:fl(i.bundledQuery),readTime:Qt(i.readTime)}}(e)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(){this.overlays=new O(E.comparator),this.hr=new Map}getOverlay(t,e){return d.resolve(this.overlays.get(e))}getOverlays(t,e){const r=kt();return d.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.ht(t,e,s)}),d.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),d.resolve()}getOverlaysForCollection(t,e,r){const i=kt(),s=e.length+1,o=new E(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,h=u.getKey();if(!e.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return d.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new O((h,l)=>h-l);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===e&&h.largestBatchId>r){let l=s.get(h.largestBatchId);l===null&&(l=kt(),s=s.insert(h.largestBatchId,l)),l.set(h.getKey(),h)}}const a=kt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,l)=>a.set(h,l)),!(a.size()>=i)););return d.resolve(a)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Wh(e,r));let s=this.hr.get(e);s===void 0&&(s=R(),this.hr.set(e,s)),this.hr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.Pr=new G(U.Ir),this.Tr=new G(U.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new U(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new U(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new E(new k([])),r=new U(e,t),i=new U(e,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new E(new k([])),r=new U(e,t),i=new U(e,t+1);let s=R();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new U(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class U{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return E.comparator(t.key,e.key)||V(t.pr,e.pr)}static Er(t,e){return V(t.pr,e.pr)||E.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new G(U.Ir)}checkEmpty(t){return d.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qh(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new U(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,e){return d.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.br(r),s=i<0?0:i;return d.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return d.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new U(e,0),i=new U(e,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),d.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new G(V);return e.forEach(i=>{const s=new U(i,0),o=new U(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),d.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;E.isDocumentKey(s)||(s=s.child(""));const o=new U(new E(s),0);let a=new G(V);return this.wr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(u.pr)),!0)},o),d.resolve(this.Dr(a))}Dr(t){const e=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){b(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return d.forEach(e.mutations,i=>{const s=new U(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new U(e,0),i=this.wr.firstAfterOrEqual(r);return d.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,d.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t){this.vr=t,this.docs=function(){return new O(E.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return d.resolve(r?r.document.mutableCopy():H.newInvalidDocument(e))}getEntries(t,e){let r=Rt();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():H.newInvalidDocument(i))}),d.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Rt();const o=e.path,a=new E(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:h,value:{document:l}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||dh(ch(l),r)<=0||(i.has(l.key)||jn(e,l))&&(s=s.insert(l.key,l.mutableCopy()))}return d.resolve(s)}getAllFromCollectionGroup(t,e,r,i){I()}Fr(t,e){return d.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new wl(this)}getSize(t){return d.resolve(this.size)}}class wl extends ml{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),d.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(t){this.persistence=t,this.Mr=new ae(e=>ci(e),di),this.lastRemoteSnapshotVersion=T.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mi,this.targetCount=0,this.Br=ee.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,i)=>e(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),d.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ee(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,d.resolve()}updateTargetData(t,e){return this.qn(e),d.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(s).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return d.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),d.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),d.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return d.resolve(r)}containsKey(t,e){return d.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.Lr={},this.overlays={},this.kr=new ai(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new Al(this),this.indexManager=new gl,this.remoteDocumentCache=function(i){return new Il(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new dl(e),this.$r=new El(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vl,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Lr[t.toKey()];return r||(r=new Tl(e,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){m("MemoryPersistence","Starting transaction:",t);const i=new Pl(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,e){return d.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,e)))}}class Pl extends gh{constructor(t){super(),this.currentSequenceNumber=t}}class _i{constructor(t){this.persistence=t,this.zr=new mi,this.jr=null}static Hr(t){return new _i(t)}get Jr(){if(this.jr)return this.jr;throw I()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),d.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),d.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),d.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Jr,r=>{const i=E.fromPath(r);return this.Yr(t,i).next(s=>{s||e.removeEntry(i,T.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return d.or([()=>d.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=i}static Ki(t,e){let r=R(),i=R();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new yi(t,e.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Ga()?8:Nt.v(cn())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Vl;return this.Ji(t,e,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,e,o,a.size)})}).next(()=>s.result)}Yi(t,e,r,i){return r.documentReadCount<this.Wi?(de()<=Et.DEBUG&&m("QueryEngine","SDK will not create cache indexes for query:",jt(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),d.resolve()):(de()<=Et.DEBUG&&m("QueryEngine","Query:",jt(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(de()<=Et.DEBUG&&m("QueryEngine","The SDK decides to create cache indexes for query:",jt(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ct(e))):d.resolve())}ji(t,e){if(ss(e))return d.resolve(null);let r=ct(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Rr(e,null,"F"),r=ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=R(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const h=this.Zi(e,a);return this.Xi(e,h,o,u.readTime)?this.ji(t,Rr(e,null,"F")):this.es(t,h,e,u)}))})))}Hi(t,e,r,i){return ss(e)||i.isEqual(T.min())?d.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(e,s);return this.Xi(e,o,r,i)?d.resolve(null):(de()<=Et.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),jt(e)),this.es(t,o,e,lh(i,-1)).next(a=>a))})}Zi(t,e){let r=new G(Qo(t));return e.forEach((i,s)=>{jn(t,s)&&(r=r.add(s))}),r}Xi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,e,r){return de()<=Et.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",jt(e)),this.zi.getDocumentsMatchingQuery(t,e,wt.min(),r)}es(t,e,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(t,e,r,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new O(V),this.rs=new ae(s=>ci(s),di),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function Dl(n,t,e,r){return new Cl(n,t,e,r)}async function ga(n,t){const e=P(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=R();for(const h of i){o.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}for(const h of s){a.push(h.batchId);for(const l of h.mutations)u=u.add(l.key)}return e.localDocuments.getDocuments(r,u).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function pa(n){const t=P(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Nl(n,t){const e=P(n),r=t.snapshotVersion;let i=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.os.newChangeBuffer({trackRemovals:!0});i=e.ns;const a=[];t.targetChanges.forEach((l,c)=>{const g=i.get(c);if(!g)return;a.push(e.Qr.removeMatchingKeys(s,l.removedDocuments,c).next(()=>e.Qr.addMatchingKeys(s,l.addedDocuments,c)));let _=g.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(c)!==null?_=_.withResumeToken(Z.EMPTY_BYTE_STRING,T.min()).withLastLimboFreeSnapshotVersion(T.min()):l.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(l.resumeToken,r)),i=i.insert(c,_),function(D,w,et){return D.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:et.addedDocuments.size+et.modifiedDocuments.size+et.removedDocuments.size>0}(g,_,l)&&a.push(e.Qr.updateTargetData(s,_))});let u=Rt(),h=R();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(kl(s,o,t.documentUpdates).next(l=>{u=l.cs,h=l.ls})),!r.isEqual(T.min())){const l=e.Qr.getLastRemoteSnapshotVersion(s).next(c=>e.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return d.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(e.ns=i,s))}function kl(n,t,e){let r=R(),i=R();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Rt();return e.forEach((a,u)=>{const h=s.get(a);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(T.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):m("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",u.version)}),{cs:o,ls:i}})}function xl(n,t){const e=P(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.Qr.getTargetData(r,t).next(s=>s?(i=s,d.resolve(i)):e.Qr.allocateTargetId(r).next(o=>(i=new Tt(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function Nr(n,t,e){const r=P(n),i=r.ns.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$e(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function ms(n,t,e){const r=P(n);let i=T.min(),s=R();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,l){const c=P(u),g=c.rs.get(l);return g!==void 0?d.resolve(c.ns.get(g)):c.Qr.getTargetData(h,l)}(r,o,ct(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,e?i:T.min(),e?s:R())).next(a=>(Ol(r,xh(t),a),{documents:a,hs:s})))}function Ol(n,t,e){let r=n.ss.get(t)||T.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.ss.set(t,r)}class _s{constructor(){this.activeTargetIds=Uh()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ll{constructor(){this.no=new _s,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new _s,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sn=null;function sr(){return sn===null?sn=function(){return 268435456+Math.round(2147483648*Math.random())}():sn++,"0x"+sn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="WebChannelConnection";class Ul extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+e.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(e,r,i,s,o){const a=sr(),u=this.bo(e,r.toUriEncodedString());m("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,s,o),this.Co(e,u,h,i).then(l=>(m("RestConnection",`Received RPC '${e}' ${a}: `,l),l),l=>{throw Yt("RestConnection",`RPC '${e}' ${a} failed with error: `,l,"url: ",u,"request:",i),l})}vo(e,r,i,s,o,a){return this.So(e,r,i,s,o)}Do(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oe}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}bo(e,r){const i=Fl[e];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,e,r,i){const s=sr();return new Promise((o,a)=>{const u=new Ju;u.setWithCredentials(!0),u.listenOnce(Xu.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case nr.NO_ERROR:const l=u.getResponseJson();m(Q,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(l)),o(l);break;case nr.TIMEOUT:m(Q,`RPC '${t}' ${s} timed out`),a(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const c=u.getStatus();if(m(Q,`RPC '${t}' ${s} failed with status:`,c,"response text:",u.getResponseText()),c>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g?.error;if(_&&_.status&&_.message){const C=function(w){const et=w.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(et)>=0?et:f.UNKNOWN}(_.status);a(new y(C,_.message))}else a(new y(f.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new y(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{m(Q,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);m(Q,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",h,r,15)})}Fo(t,e,r){const i=sr(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Wu(),a=Hu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Do(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const l=s.join("");m(Q,`Creating RPC '${t}' stream ${i}: ${l}`,u);const c=o.createWebChannel(l,u);let g=!1,_=!1;const C=new bl({lo:w=>{_?m(Q,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(g||(m(Q,`Opening RPC '${t}' stream ${i} transport.`),c.open(),g=!0),m(Q,`RPC '${t}' stream ${i} sending:`,w),c.send(w))},ho:()=>c.close()}),D=(w,et,it)=>{w.listen(et,gt=>{try{it(gt)}catch(pt){setTimeout(()=>{throw pt},0)}})};return D(c,en.EventType.OPEN,()=>{_||m(Q,`RPC '${t}' stream ${i} transport opened.`)}),D(c,en.EventType.CLOSE,()=>{_||(_=!0,m(Q,`RPC '${t}' stream ${i} transport closed`),C.Vo())}),D(c,en.EventType.ERROR,w=>{_||(_=!0,Yt(Q,`RPC '${t}' stream ${i} transport errored:`,w),C.Vo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),D(c,en.EventType.MESSAGE,w=>{var et;if(!_){const it=w.data[0];b(!!it);const gt=it,pt=gt.error||((et=gt[0])===null||et===void 0?void 0:et.error);if(pt){m(Q,`RPC '${t}' stream ${i} received error:`,pt);const He=pt.status;let Ut=function(Ma){const ki=L[Ma];if(ki!==void 0)return ra(ki)}(He),Xe=pt.message;Ut===void 0&&(Ut=f.INTERNAL,Xe="Unknown error status: "+He+" with message "+pt.message),_=!0,C.Vo(new y(Ut,Xe)),c.close()}else m(Q,`RPC '${t}' stream ${i} received:`,it),C.mo(it)}}),D(a,Yu.STAT_EVENT,w=>{w.stat===Qi.PROXY?m(Q,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===Qi.NOPROXY&&m(Q,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.Ro()},0),C}}function or(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n){return new nl(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=e,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const e=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,e-r);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(t,e,r,i,s,o,a,u){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new ma(t,e)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,e){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(dt(e.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):e&&e.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(e)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),e=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===e&&this.o_(r,i)},r=>{t(()=>{const i=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,e){const r=this.s_(this.Wo);this.stream=this.a_(t,e),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return e=>{this.oi.enqueueAndForget(()=>this.Wo===t?e():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jl extends ql{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}a_(t,e){return this.connection.Fo("Listen",t,e)}onMessage(t){this.jo.reset();const e=il(this.serializer,t),r=function(s){if(!("targetChange"in s))return T.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?T.min():o.readTime?Qt(o.readTime):T.min()}(t);return this.listener.u_(e,r)}c_(t){const e={};e.database=ps(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=wr(u)?{documents:sl(s,u)}:{query:ol(s,u).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=oa(s,o.resumeToken);const h=Sr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(T.min())>0){a.readTime=Cr(s,o.snapshotVersion.toTimestamp());const h=Sr(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=ul(this.serializer,t);r&&(e.labels=r),this.t_(e)}l_(t){const e={};e.database=ps(this.serializer),e.removeTarget=t,this.t_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,Dr(e,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}vo(t,e,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Dr(e,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new y(f.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class $l{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(dt(e),this.g_=!1):m("OnlineStateTracker",e)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{We(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=P(u);h.v_.add(4),await Qe(h),h.x_.set("Unknown"),h.v_.delete(4),await Gn(h)}(this))})}),this.x_=new $l(r,i)}}async function Gn(n){if(We(n))for(const t of n.F_)await t(!0)}async function Qe(n){for(const t of n.F_)await t(!1)}function _a(n,t){const e=P(n);e.C_.has(t.targetId)||(e.C_.set(t.targetId,t),Ti(e)?vi(e):ue(e).Jo()&&Ei(e,t))}function ya(n,t){const e=P(n),r=ue(e);e.C_.delete(t),r.Jo()&&Ea(e,t),e.C_.size===0&&(r.Jo()?r.Xo():We(e)&&e.x_.set("Unknown"))}function Ei(n,t){if(n.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(T.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}ue(n).c_(t)}function Ea(n,t){n.O_.Oe(t),ue(n).l_(t)}function vi(n){n.O_=new Jh({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.C_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),ue(n).start(),n.x_.p_()}function Ti(n){return We(n)&&!ue(n).Ho()&&n.C_.size>0}function We(n){return P(n).v_.size===0}function va(n){n.O_=void 0}async function Kl(n){n.C_.forEach((t,e)=>{Ei(n,t)})}async function Gl(n,t){va(n),Ti(n)?(n.x_.S_(t),vi(n)):n.x_.set("Unknown")}async function Ql(n,t,e){if(n.x_.set("Online"),t instanceof sa&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(n,t)}catch(r){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Es(n,r)}else if(t instanceof un?n.O_.$e(t):t instanceof ia?n.O_.Je(t):n.O_.Ge(t),!e.isEqual(T.min()))try{const r=await pa(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const l=s.C_.get(h);l&&s.C_.set(h,l.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,h)=>{const l=s.C_.get(u);if(!l)return;s.C_.set(u,l.withResumeToken(Z.EMPTY_BYTE_STRING,l.snapshotVersion)),Ea(s,u);const c=new Tt(l.target,u,h,l.sequenceNumber);Ei(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){m("RemoteStore","Failed to raise snapshot:",r),await Es(n,r)}}async function Es(n,t,e){if(!$e(t))throw t;n.v_.add(1),await Qe(n),n.x_.set("Offline"),e||(e=()=>pa(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await e(),n.v_.delete(1),await Gn(n)})}async function vs(n,t){const e=P(n);e.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const r=We(e);e.v_.add(3),await Qe(e),r&&e.x_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.v_.delete(3),await Gn(e)}async function Wl(n,t){const e=P(n);t?(e.v_.delete(2),await Gn(e)):t||(e.v_.add(2),await Qe(e),e.x_.set("Unknown"))}function ue(n){return n.N_||(n.N_=function(e,r,i){const s=P(e);return s.R_(),new jl(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{Po:Kl.bind(null,n),To:Gl.bind(null,n),u_:Ql.bind(null,n)}),n.F_.push(async t=>{t?(n.N_.Zo(),Ti(n)?vi(n):n.x_.set("Unknown")):(await n.N_.stop(),va(n))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new Ii(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ta(n,t){if(dt("AsyncQueue",`${t}: ${n}`),$e(n))return new y(f.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.comparator=t?(e,r)=>t(e,r)||E.comparator(e.key,r.key):(e,r)=>E.comparator(e.key,r.key),this.keyedMap=pe(),this.sortedSet=new O(this.comparator)}static emptySet(t){return new Wt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Wt)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Wt;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.L_=new O(E.comparator)}track(t){const e=t.doc.key,r=this.L_.get(e);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(e,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(e):t.type===1&&r.type===2?this.L_=this.L_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(e,{type:2,doc:t.doc}):I():this.L_=this.L_.insert(e,t)}k_(){const t=[];return this.L_.inorderTraversal((e,r)=>{t.push(r)}),t}}class ne{constructor(t,e,r,i,s,o,a,u,h){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new ne(t,e,Wt.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&qn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.q_=void 0,this.Q_=[]}}class Xl{constructor(){this.queries=new ae(t=>Go(t),qn),this.onlineState="Unknown",this.K_=new Set}}async function Yl(n,t){const e=P(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new Hl),i)try{s.q_=await e.onListen(r)}catch(o){const a=Ta(o,`Initialization of query '${jt(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.Q_.push(t),t.U_(e.onlineState),s.q_&&t.W_(s.q_)&&wi(e)}async function Jl(n,t){const e=P(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Zl(n,t){const e=P(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&wi(e)}function tc(n,t,e){const r=P(n),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(e);r.queries.delete(t)}function wi(n){n.K_.forEach(t=>{t.next()})}class ec{constructor(t,e,r){this.query=t,this.G_=e,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new ne(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.z_?this.H_(t)&&(this.G_.next(t),e=!0):this.J_(t,this.onlineState)&&(this.Y_(t),e=!0),this.j_=t,e}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let e=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),e=!0),e}J_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const e=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Y_(t){t=ne.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t){this.key=t}}class wa{constructor(t){this.key=t}}class nc{constructor(t,e){this.query=t,this.oa=e,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=R(),this.mutatedKeys=R(),this.ua=Qo(t),this.ca=new Wt(this.ua)}get la(){return this.oa}ha(t,e){const r=e?e.Pa:new Ts,i=e?e.ca:this.ca;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((l,c)=>{const g=i.get(l),_=jn(this.query,c)?c:null,C=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let w=!1;g&&_?g.data.isEqual(_.data)?C!==D&&(r.track({type:3,doc:_}),w=!0):this.Ia(g,_)||(r.track({type:2,doc:_}),w=!0,(u&&this.ua(_,u)>0||h&&this.ua(_,h)<0)&&(a=!0)):!g&&_?(r.track({type:0,doc:_}),w=!0):g&&!_&&(r.track({type:1,doc:g}),w=!0,(u||h)&&(a=!0)),w&&(_?(o=o.add(_),s=D?s.add(l):s.delete(l)):(o=o.delete(l),s=s.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),s=s.delete(l.key),r.track({type:1,doc:l})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((l,c)=>function(_,C){const D=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return D(_)-D(C)}(l.type,c.type)||this.ua(l.doc,c.doc)),this.Ta(r),i=i!=null&&i;const a=e&&!i?this.Ea():[],u=this.aa.size===0&&this.current&&!i?1:0,h=u!==this._a;return this._a=u,o.length!==0||h?{snapshot:new ne(this.query,t.ca,s,o,t.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ts,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=R(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const e=[];return t.forEach(r=>{this.aa.has(r)||e.push(new wa(r))}),this.aa.forEach(r=>{t.has(r)||e.push(new Ia(r))}),e}Ra(t){this.oa=t.hs,this.aa=R();const e=this.ha(t.documents);return this.applyChanges(e,!0)}Va(){return ne.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class rc{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class ic{constructor(t){this.key=t,this.ma=!1}}class sc{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new ae(a=>Go(a),qn),this.pa=new Map,this.ya=new Set,this.wa=new O(E.comparator),this.Sa=new Map,this.ba=new mi,this.Da={},this.Ca=new Map,this.va=ee.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function oc(n,t){const e=fc(n);let r,i;const s=e.ga.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await xl(e.localStore,ct(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ac(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&_a(e.remoteStore,o)}return i}async function ac(n,t,e,r,i){n.Ma=(c,g,_)=>async function(D,w,et,it){let gt=w.view.ha(et);gt.Xi&&(gt=await ms(D.localStore,w.query,!1).then(({documents:Xe})=>w.view.ha(Xe,gt)));const pt=it&&it.targetChanges.get(w.targetId),He=it&&it.targetMismatches.get(w.targetId)!=null,Ut=w.view.applyChanges(gt,D.isPrimaryClient,pt,He);return ws(D,w.targetId,Ut.da),Ut.snapshot}(n,c,g,_);const s=await ms(n.localStore,t,!0),o=new nc(t,s.hs),a=o.ha(s.documents),u=Ge.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),h=o.applyChanges(a,n.isPrimaryClient,u);ws(n,e,h.da);const l=new rc(t,e,o);return n.ga.set(t,l),n.pa.has(e)?n.pa.get(e).push(t):n.pa.set(e,[t]),h.snapshot}async function uc(n,t){const e=P(n),r=e.ga.get(t),i=e.pa.get(r.targetId);if(i.length>1)return e.pa.set(r.targetId,i.filter(s=>!qn(s,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await Nr(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),ya(e.remoteStore,r.targetId),kr(e,r.targetId)}).catch(ii)):(kr(e,r.targetId),await Nr(e.localStore,r.targetId,!0))}async function Aa(n,t){const e=P(n);try{const r=await Nl(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.Sa.get(s);o&&(b(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?b(o.ma):i.removedDocuments.size>0&&(b(o.ma),o.ma=!1))}),await Pa(e,r,t)}catch(r){await ii(r)}}function Is(n,t,e){const r=P(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=P(o);u.onlineState=a;let h=!1;u.queries.forEach((l,c)=>{for(const g of c.Q_)g.U_(a)&&(h=!0)}),h&&wi(u)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function hc(n,t,e){const r=P(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new O(E.comparator);o=o.insert(s,H.newNoDocument(s,T.min()));const a=R().add(s),u=new zn(T.min(),new Map,new O(V),o,a);await Aa(r,u),r.wa=r.wa.remove(s),r.Sa.delete(t),Ai(r)}else await Nr(r.localStore,t,!1).then(()=>kr(r,t,e)).catch(ii)}function kr(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.pa.get(t))n.ga.delete(r),e&&n.fa.xa(r,e);n.pa.delete(t),n.isPrimaryClient&&n.ba.Vr(t).forEach(r=>{n.ba.containsKey(r)||Ra(n,r)})}function Ra(n,t){n.ya.delete(t.path.canonicalString());const e=n.wa.get(t);e!==null&&(ya(n.remoteStore,e),n.wa=n.wa.remove(t),n.Sa.delete(e),Ai(n))}function ws(n,t,e){for(const r of e)r instanceof Ia?(n.ba.addReference(r.key,t),lc(n,r)):r instanceof wa?(m("SyncEngine","Document no longer in limbo: "+r.key),n.ba.removeReference(r.key,t),n.ba.containsKey(r.key)||Ra(n,r.key)):I()}function lc(n,t){const e=t.key,r=e.path.canonicalString();n.wa.get(e)||n.ya.has(r)||(m("SyncEngine","New document in limbo: "+e),n.ya.add(r),Ai(n))}function Ai(n){for(;n.ya.size>0&&n.wa.size<n.maxConcurrentLimboResolutions;){const t=n.ya.values().next().value;n.ya.delete(t);const e=new E(k.fromString(t)),r=n.va.next();n.Sa.set(r,new ic(e)),n.wa=n.wa.insert(e,r),_a(n.remoteStore,new Tt(ct(zo(e.path)),r,"TargetPurposeLimboResolution",ai._e))}}async function Pa(n,t,e){const r=P(n),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,u)=>{o.push(r.Ma(u,t,e).then(h=>{if((h||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,h?.fromCache?"not-current":"current"),h){i.push(h);const l=yi.Ki(u.targetId,h);s.push(l)}}))}),await Promise.all(o),r.fa.u_(i),await async function(u,h){const l=P(u);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>d.forEach(h,g=>d.forEach(g.qi,_=>l.persistence.referenceDelegate.addReference(c,g.targetId,_)).next(()=>d.forEach(g.Qi,_=>l.persistence.referenceDelegate.removeReference(c,g.targetId,_)))))}catch(c){if(!$e(c))throw c;m("LocalStore","Failed to update sequence numbers: "+c)}for(const c of h){const g=c.targetId;if(!c.fromCache){const _=l.ns.get(g),C=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(C);l.ns=l.ns.insert(g,D)}}}(r.localStore,s))}async function cc(n,t){const e=P(n);if(!e.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const r=await ga(e.localStore,t);e.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(u=>{u.reject(new y(f.CANCELLED,o))})}),s.Ca.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Pa(e,r.us)}}function dc(n,t){const e=P(n),r=e.Sa.get(t);if(r&&r.ma)return R().add(r.key);{let i=R();const s=e.pa.get(t);if(!s)return i;for(const o of s){const a=e.ga.get(o);i=i.unionWith(a.view.la)}return i}}function fc(n){const t=P(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Aa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=hc.bind(null,t),t.fa.u_=Zl.bind(null,t.eventManager),t.fa.xa=tc.bind(null,t.eventManager),t}class As{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Kn(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return Dl(this.persistence,new Sl,t.initialUser,this.serializer)}createPersistence(t){return new Rl(_i.Hr,this.serializer)}createSharedClientState(t){return new Ll}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class gc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Is(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cc.bind(null,this.syncEngine),await Wl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Xl}()}createDatastore(t){const e=Kn(t.databaseInfo.databaseId),r=function(s){return new Ul(s)}(t.databaseInfo);return function(s,o,a,u){return new Bl(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new zl(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Is(this.syncEngine,e,0),function(){return ys.D()?new ys:new Ml}())}createSyncEngine(t,e){return function(i,s,o,a,u,h,l){const c=new sc(i,s,o,a,u,h);return l&&(c.Fa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const i=P(r);m("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await Qe(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=W.UNAUTHENTICATED,this.clientId=uh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{m("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(m("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ta(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ar(n,t){n.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ga(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Rs(n,t){n.asyncQueue.verifyOperationInProgress();const e=await yc(n);m("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>vs(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vs(t.remoteStore,i)),n._onlineComponents=t}function _c(n){return n.name==="FirebaseError"?n.code===f.FAILED_PRECONDITION||n.code===f.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function yc(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await ar(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!_c(e))throw e;Yt("Error using user provided cache. Falling back to memory cache: "+e),await ar(n,new As)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await ar(n,new As);return n._offlineComponents}async function Ec(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await Rs(n,n._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await Rs(n,new gc))),n._onlineComponents}async function vc(n){const t=await Ec(n),e=t.eventManager;return e.onListen=oc.bind(null,t.syncEngine),e.onUnlisten=uc.bind(null,t.syncEngine),e}function Tc(n,t,e={}){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,h){const l=new pc({next:g=>{o.enqueueAndForget(()=>Jl(s,c)),g.fromCache&&u.source==="server"?h.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),c=new ec(a,l,{includeMetadataChanges:!0,Z_:!0});return Yl(s,c)}(await vc(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(n,t,e){if(!e)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function wc(n,t,e,r){if(t===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vs(n){if(E.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Qn(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":I()}function xr(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Qn(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}wc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Va((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new y(f.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ri{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ss({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ss(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new th;switch(r.type){case"firstParty":return new ih(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ps.get(e);r&&(m("ComponentProvider","Removing Datastore"),Ps.delete(e),r.terminate())}(this),Promise.resolve()}}function Ac(n,t,e,r={}){var i;const s=(n=xr(n,Ri))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Yt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=W.MOCK_USER;else{a=Ka(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new W(h)}n._authCredentials=new eh(new Lo(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new he(this.firestore,t,this._query)}}class yt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new yt(this.firestore,t,this._key)}}class Ht extends he{constructor(t,e,r){super(t,e,zo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new yt(this.firestore,null,new E(t))}withConverter(t){return new Ht(this.firestore,t,this._path)}}function Wc(n,t,...e){if(n=ln(n),Ic("collection","path",t),n instanceof Ri){const r=k.fromString(t,...e);return Vs(r),new Ht(n,null,r)}{if(!(n instanceof yt||n instanceof Ht))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(k.fromString(t,...e));return Vs(r),new Ht(n.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new ma(this,"async_queue_retry"),this._u=()=>{const e=or();e&&m("AsyncQueue","Visibility state changed to "+e.visibilityState),this.jo.Ko()};const t=or();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const e=or();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const e=new It;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!$e(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const e=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw dt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=e,e}enqueueAfterDelay(t,e,r){this.au(),this.ou.indexOf(t)>-1&&(e=0);const i=Ii.createAndSchedule(this,t,e,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&I()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const e of this.nu)if(e.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.nu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const e=this.nu.indexOf(t);this.nu.splice(e,1)}}class Sa extends Ri{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Rc}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ca(this),this._firestoreClient.terminate()}}function Hc(n,t){const e=typeof n=="object"?n:qa(),r=typeof n=="string"?n:t||"(default)",i=ja(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ba("firestore");s&&Ac(i,...s)}return i}function Pc(n){return n._firestoreClient||Ca(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ca(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,h,l){return new Eh(a,u,h,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Va(l.experimentalLongPollingOptions),l.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new mc(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this._byteString=t}static fromBase64String(t){try{return new re(Z.fromBase64String(t))}catch(e){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new re(Z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return V(this._lat,t._lat)||V(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=/^__.*__$/;function ka(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw I()}}class Vi{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Vi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return Or(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(ka(this.du)&&Vc.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class Sc{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Kn(t)}Su(t,e,r,i=!1){return new Vi({du:t,methodName:e,wu:r,path:X.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Cc(n){const t=n._freezeSettings(),e=Kn(n._databaseId);return new Sc(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Dc(n,t,e,r=!1){return Si(e,n.Su(r?4:3,t))}function Si(n,t){if(xa(n=ln(n)))return kc("Unsupported field value:",t,n),Nc(n,t);if(n instanceof Na)return function(r,i){if(!ka(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Si(a,i.gu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=ln(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qh(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=q.fromDate(r);return{timestampValue:Cr(i.serializer,s)}}if(r instanceof q){const s=new q(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cr(i.serializer,s)}}if(r instanceof Pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof re)return{bytesValue:oa(i.serializer,r._byteString)};if(r instanceof yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:aa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Qn(r)}`)}(n,t)}function Nc(n,t){const e={};return Mo(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ze(n,(r,i)=>{const s=Si(i,t.Ru(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function xa(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof q||n instanceof Pi||n instanceof re||n instanceof yt||n instanceof Na)}function kc(n,t,e){if(!xa(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Qn(e);throw r==="an object"?t.pu(n+" a custom object"):t.pu(n+" "+r)}}const xc=new RegExp("[~\\*/\\[\\]]");function Oc(n,t,e){if(t.search(xc)>=0)throw Or(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Da(...t.split("."))._internalPath}catch{throw Or(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Or(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new y(f.INVALID_ARGUMENT,a+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Lc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ci("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Lc extends Oa{data(){return super.data()}}function Ci(n,t){return typeof t=="string"?Oc(n,t):t instanceof Da?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Di{}class Fc extends Di{}function Xc(n,t,...e){let r=[];t instanceof Di&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof Ni).length,a=s.filter(u=>u instanceof Wn).length;if(o>1||o>0&&a>0)throw new y(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Wn extends Fc{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Wn(t,e,r)}_apply(t){const e=this._parse(t);return La(t._query,e),new he(t.firestore,t.converter,Ar(t._query,e))}_parse(t){const e=Cc(t.firestore);return function(s,o,a,u,h,l,c){let g;if(h.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){Ds(c,l);const _=[];for(const C of c)_.push(Cs(u,s,C));g={arrayValue:{values:_}}}else g=Cs(u,s,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||Ds(c,l),g=Dc(a,o,c,l==="in"||l==="not-in");return F.create(h,l,g)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Yc(n,t,e){const r=t,i=Ci("where",n);return Wn._create(i,r,e)}class Ni extends Di{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ni(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ot.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)La(o,u),o=Ar(o,u)}(t._query,e),new he(t.firestore,t.converter,Ar(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cs(n,t,e){if(typeof(e=ln(e))=="string"){if(e==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ko(t)&&e.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(k.fromString(e));if(!E.isDocumentKey(r))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Zi(n,new E(r))}if(e instanceof yt)return Zi(n,e._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qn(e)}.`)}function Ds(n,t){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function La(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class bc{convertValue(t,e="none"){switch(Ft(t)){case 0:return null;case 1:return t.booleanValue;case 2:return M(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Mt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw I()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ze(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Pi(M(t.latitude),M(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=hi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(ke(t));default:return null}}convertTimestamp(t){const e=At(t);return new q(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=k.fromString(t);b(fa(r));const i=new xe(r.get(1),r.get(3)),s=new E(r.popFirst(5));return i.isEqual(e)||dt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uc extends Oa{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ci("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class hn extends Uc{data(t={}){return super.data(t)}}class qc{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new on(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new hn(this._firestore,this._userDataWriter,r.key,r,new on(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new hn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new on(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new hn(i._firestore,i._userDataWriter,a.doc.key,a.doc,new on(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,l=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:jc(a.type),doc:u,oldIndex:h,newIndex:l}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function jc(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}class Bc extends bc{constructor(t){super(),this.firestore=t}convertBytes(t){return new re(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new yt(this.firestore,null,e)}}function Jc(n){n=xr(n,he);const t=xr(n.firestore,Sa),e=Pc(t),r=new Bc(t);return Mc(n._query),Tc(e,n._query).then(i=>new qc(t,r,n,i))}(function(t,e=!0){(function(i){oe=i})($a),Fa(new ba("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Sa(new nh(r.getProvider("auth-internal")),new oh(r.getProvider("app-check-internal")),function(h,l){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xe(h.options.projectId,l)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),xi(Wi,"4.4.1",t),xi(Wi,"4.4.1","esm2017")})();export{Jc as a,Wc as c,Hc as g,Xc as q,Yc as w};
