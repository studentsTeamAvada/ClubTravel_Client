(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))a(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function r(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function a(f){if(f.ep)return;f.ep=!0;const h=r(f);fetch(f.href,h)}})();var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jo(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var sr={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Ti;function Xo(){return Ti||(Ti=1,function(i){(function(e,r){i.exports=e.document?r(e,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return r(a)}})(typeof window<"u"?window:Ko,function(e,r){var a=[],f=Object.getPrototypeOf,h=a.slice,v=a.flat?function(t){return a.flat.call(t)}:function(t){return a.concat.apply([],t)},S=a.push,A=a.indexOf,x={},q=x.toString,X=x.hasOwnProperty,ie=X.toString,ye=ie.call(Object),U={},$=function(n){return typeof n=="function"&&typeof n.nodeType!="number"&&typeof n.item!="function"},_e=function(n){return n!=null&&n===n.window},H=e.document,sn={type:!0,src:!0,nonce:!0,noModule:!0};function ft(t,n,s){s=s||H;var o,u,l=s.createElement("script");if(l.text=t,n)for(o in sn)u=n[o]||n.getAttribute&&n.getAttribute(o),u&&l.setAttribute(o,u);s.head.appendChild(l).parentNode.removeChild(l)}function xe(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?x[q.call(t)]||"object":typeof t}var kt="3.7.1",Rt=/HTML$/i,c=function(t,n){return new c.fn.init(t,n)};c.fn=c.prototype={jquery:kt,constructor:c,length:0,toArray:function(){return h.call(this)},get:function(t){return t==null?h.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var n=c.merge(this.constructor(),t);return n.prevObject=this,n},each:function(t){return c.each(this,t)},map:function(t){return this.pushStack(c.map(this,function(n,s){return t.call(n,s,n)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(c.grep(this,function(t,n){return(n+1)%2}))},odd:function(){return this.pushStack(c.grep(this,function(t,n){return n%2}))},eq:function(t){var n=this.length,s=+t+(t<0?n:0);return this.pushStack(s>=0&&s<n?[this[s]]:[])},end:function(){return this.prevObject||this.constructor()},push:S,sort:a.sort,splice:a.splice},c.extend=c.fn.extend=function(){var t,n,s,o,u,l,d=arguments[0]||{},m=1,g=arguments.length,b=!1;for(typeof d=="boolean"&&(b=d,d=arguments[m]||{},m++),typeof d!="object"&&!$(d)&&(d={}),m===g&&(d=this,m--);m<g;m++)if((t=arguments[m])!=null)for(n in t)o=t[n],!(n==="__proto__"||d===o)&&(b&&o&&(c.isPlainObject(o)||(u=Array.isArray(o)))?(s=d[n],u&&!Array.isArray(s)?l=[]:!u&&!c.isPlainObject(s)?l={}:l=s,u=!1,d[n]=c.extend(b,l,o)):o!==void 0&&(d[n]=o));return d},c.extend({expando:"jQuery"+(kt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var n,s;return!t||q.call(t)!=="[object Object]"?!1:(n=f(t),n?(s=X.call(n,"constructor")&&n.constructor,typeof s=="function"&&ie.call(s)===ye):!0)},isEmptyObject:function(t){var n;for(n in t)return!1;return!0},globalEval:function(t,n,s){ft(t,{nonce:n&&n.nonce},s)},each:function(t,n){var s,o=0;if(xt(t))for(s=t.length;o<s&&n.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(n.call(t[o],o,t[o])===!1)break;return t},text:function(t){var n,s="",o=0,u=t.nodeType;if(!u)for(;n=t[o++];)s+=c.text(n);return u===1||u===11?t.textContent:u===9?t.documentElement.textContent:u===3||u===4?t.nodeValue:s},makeArray:function(t,n){var s=n||[];return t!=null&&(xt(Object(t))?c.merge(s,typeof t=="string"?[t]:t):S.call(s,t)),s},inArray:function(t,n,s){return n==null?-1:A.call(n,t,s)},isXMLDoc:function(t){var n=t&&t.namespaceURI,s=t&&(t.ownerDocument||t).documentElement;return!Rt.test(n||s&&s.nodeName||"HTML")},merge:function(t,n){for(var s=+n.length,o=0,u=t.length;o<s;o++)t[u++]=n[o];return t.length=u,t},grep:function(t,n,s){for(var o,u=[],l=0,d=t.length,m=!s;l<d;l++)o=!n(t[l],l),o!==m&&u.push(t[l]);return u},map:function(t,n,s){var o,u,l=0,d=[];if(xt(t))for(o=t.length;l<o;l++)u=n(t[l],l,s),u!=null&&d.push(u);else for(l in t)u=n(t[l],l,s),u!=null&&d.push(u);return v(d)},guid:1,support:U}),typeof Symbol=="function"&&(c.fn[Symbol.iterator]=a[Symbol.iterator]),c.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,n){x["[object "+n+"]"]=n.toLowerCase()});function xt(t){var n=!!t&&"length"in t&&t.length,s=xe(t);return $(t)||_e(t)?!1:s==="array"||n===0||typeof n=="number"&&n>0&&n-1 in t}function Y(t,n){return t.nodeName&&t.nodeName.toLowerCase()===n.toLowerCase()}var Pn=a.pop,$s=a.sort,Ws=a.splice,Z="[\\x20\\t\\r\\n\\f]",Dt=new RegExp("^"+Z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Z+"+$","g");c.contains=function(t,n){var s=n&&n.parentNode;return t===s||!!(s&&s.nodeType===1&&(t.contains?t.contains(s):t.compareDocumentPosition&&t.compareDocumentPosition(s)&16))};var qs=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Vs(t,n){return n?t==="\0"?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}c.escapeSelector=function(t){return(t+"").replace(qs,Vs)};var De=H,Ln=S;(function(){var t,n,s,o,u,l=Ln,d,m,g,b,I,C=c.expando,w=0,k=0,B=hn(),K=hn(),W=hn(),se=hn(),re=function(p,y){return p===y&&(u=!0),0},Ie="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ee="(?:\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",G="\\["+Z+"*("+Ee+")(?:"+Z+"*([*^$|!~]?=)"+Z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ee+"))|)"+Z+"*\\]",tt=":("+Ee+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+G+")*)|.*)\\)|)",J=new RegExp(Z+"+","g"),ne=new RegExp("^"+Z+"*,"+Z+"*"),Bt=new RegExp("^"+Z+"*([>+~]|"+Z+")"+Z+"*"),Qn=new RegExp(Z+"|>"),Ce=new RegExp(tt),Ft=new RegExp("^"+Ee+"$"),Se={ID:new RegExp("^#("+Ee+")"),CLASS:new RegExp("^\\.("+Ee+")"),TAG:new RegExp("^("+Ee+"|[*])"),ATTR:new RegExp("^"+G),PSEUDO:new RegExp("^"+tt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Z+"*(even|odd|(([+-]|)(\\d*)n|)"+Z+"*(?:([+-]|)"+Z+"*(\\d+)|))"+Z+"*\\)|)","i"),bool:new RegExp("^(?:"+Ie+")$","i"),needsContext:new RegExp("^"+Z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Z+"*((?:-\\d)?\\d*)"+Z+"*\\)|)(?=[^-]|$)","i")},He=/^(?:input|select|textarea|button)$/i,Be=/^h\d$/i,pe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Zn=/[+~]/,Pe=new RegExp("\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\([^\\r\\n\\f])","g"),Le=function(p,y){var _="0x"+p.slice(1)-65536;return y||(_<0?String.fromCharCode(_+65536):String.fromCharCode(_>>10|55296,_&1023|56320))},Fo=function(){Fe()},$o=gn(function(p){return p.disabled===!0&&Y(p,"fieldset")},{dir:"parentNode",next:"legend"});function Wo(){try{return d.activeElement}catch{}}try{l.apply(a=h.call(De.childNodes),De.childNodes),a[De.childNodes.length].nodeType}catch{l={apply:function(y,_){Ln.apply(y,h.call(_))},call:function(y){Ln.apply(y,h.call(arguments,1))}}}function Q(p,y,_,T){var E,R,D,N,O,V,j,F=y&&y.ownerDocument,z=y?y.nodeType:9;if(_=_||[],typeof p!="string"||!p||z!==1&&z!==9&&z!==11)return _;if(!T&&(Fe(y),y=y||d,g)){if(z!==11&&(O=pe.exec(p)))if(E=O[1]){if(z===9)if(D=y.getElementById(E)){if(D.id===E)return l.call(_,D),_}else return _;else if(F&&(D=F.getElementById(E))&&Q.contains(y,D)&&D.id===E)return l.call(_,D),_}else{if(O[2])return l.apply(_,y.getElementsByTagName(p)),_;if((E=O[3])&&y.getElementsByClassName)return l.apply(_,y.getElementsByClassName(E)),_}if(!se[p+" "]&&(!b||!b.test(p))){if(j=p,F=y,z===1&&(Qn.test(p)||Bt.test(p))){for(F=Zn.test(p)&&er(y.parentNode)||y,(F!=y||!U.scope)&&((N=y.getAttribute("id"))?N=c.escapeSelector(N):y.setAttribute("id",N=C)),V=$t(p),R=V.length;R--;)V[R]=(N?"#"+N:":scope")+" "+pn(V[R]);j=V.join(",")}try{return l.apply(_,F.querySelectorAll(j)),_}catch{se(p,!0)}finally{N===C&&y.removeAttribute("id")}}}return wi(p.replace(Dt,"$1"),y,_,T)}function hn(){var p=[];function y(_,T){return p.push(_+" ")>n.cacheLength&&delete y[p.shift()],y[_+" "]=T}return y}function be(p){return p[C]=!0,p}function _t(p){var y=d.createElement("fieldset");try{return!!p(y)}catch{return!1}finally{y.parentNode&&y.parentNode.removeChild(y),y=null}}function qo(p){return function(y){return Y(y,"input")&&y.type===p}}function Vo(p){return function(y){return(Y(y,"input")||Y(y,"button"))&&y.type===p}}function bi(p){return function(y){return"form"in y?y.parentNode&&y.disabled===!1?"label"in y?"label"in y.parentNode?y.parentNode.disabled===p:y.disabled===p:y.isDisabled===p||y.isDisabled!==!p&&$o(y)===p:y.disabled===p:"label"in y?y.disabled===p:!1}}function nt(p){return be(function(y){return y=+y,be(function(_,T){for(var E,R=p([],_.length,y),D=R.length;D--;)_[E=R[D]]&&(_[E]=!(T[E]=_[E]))})})}function er(p){return p&&typeof p.getElementsByTagName<"u"&&p}function Fe(p){var y,_=p?p.ownerDocument||p:De;return _==d||_.nodeType!==9||!_.documentElement||(d=_,m=d.documentElement,g=!c.isXMLDoc(d),I=m.matches||m.webkitMatchesSelector||m.msMatchesSelector,m.msMatchesSelector&&De!=d&&(y=d.defaultView)&&y.top!==y&&y.addEventListener("unload",Fo),U.getById=_t(function(T){return m.appendChild(T).id=c.expando,!d.getElementsByName||!d.getElementsByName(c.expando).length}),U.disconnectedMatch=_t(function(T){return I.call(T,"*")}),U.scope=_t(function(){return d.querySelectorAll(":scope")}),U.cssHas=_t(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),U.getById?(n.filter.ID=function(T){var E=T.replace(Pe,Le);return function(R){return R.getAttribute("id")===E}},n.find.ID=function(T,E){if(typeof E.getElementById<"u"&&g){var R=E.getElementById(T);return R?[R]:[]}}):(n.filter.ID=function(T){var E=T.replace(Pe,Le);return function(R){var D=typeof R.getAttributeNode<"u"&&R.getAttributeNode("id");return D&&D.value===E}},n.find.ID=function(T,E){if(typeof E.getElementById<"u"&&g){var R,D,N,O=E.getElementById(T);if(O){if(R=O.getAttributeNode("id"),R&&R.value===T)return[O];for(N=E.getElementsByName(T),D=0;O=N[D++];)if(R=O.getAttributeNode("id"),R&&R.value===T)return[O]}return[]}}),n.find.TAG=function(T,E){return typeof E.getElementsByTagName<"u"?E.getElementsByTagName(T):E.querySelectorAll(T)},n.find.CLASS=function(T,E){if(typeof E.getElementsByClassName<"u"&&g)return E.getElementsByClassName(T)},b=[],_t(function(T){var E;m.appendChild(T).innerHTML="<a id='"+C+"' href='' disabled='disabled'></a><select id='"+C+"-\r\\' disabled='disabled'><option selected=''></option></select>",T.querySelectorAll("[selected]").length||b.push("\\["+Z+"*(?:value|"+Ie+")"),T.querySelectorAll("[id~="+C+"-]").length||b.push("~="),T.querySelectorAll("a#"+C+"+*").length||b.push(".#.+[+~]"),T.querySelectorAll(":checked").length||b.push(":checked"),E=d.createElement("input"),E.setAttribute("type","hidden"),T.appendChild(E).setAttribute("name","D"),m.appendChild(T).disabled=!0,T.querySelectorAll(":disabled").length!==2&&b.push(":enabled",":disabled"),E=d.createElement("input"),E.setAttribute("name",""),T.appendChild(E),T.querySelectorAll("[name='']").length||b.push("\\["+Z+"*name"+Z+"*="+Z+`*(?:''|"")`)}),U.cssHas||b.push(":has"),b=b.length&&new RegExp(b.join("|")),re=function(T,E){if(T===E)return u=!0,0;var R=!T.compareDocumentPosition-!E.compareDocumentPosition;return R||(R=(T.ownerDocument||T)==(E.ownerDocument||E)?T.compareDocumentPosition(E):1,R&1||!U.sortDetached&&E.compareDocumentPosition(T)===R?T===d||T.ownerDocument==De&&Q.contains(De,T)?-1:E===d||E.ownerDocument==De&&Q.contains(De,E)?1:o?A.call(o,T)-A.call(o,E):0:R&4?-1:1)}),d}Q.matches=function(p,y){return Q(p,null,null,y)},Q.matchesSelector=function(p,y){if(Fe(p),g&&!se[y+" "]&&(!b||!b.test(y)))try{var _=I.call(p,y);if(_||U.disconnectedMatch||p.document&&p.document.nodeType!==11)return _}catch{se(y,!0)}return Q(y,d,null,[p]).length>0},Q.contains=function(p,y){return(p.ownerDocument||p)!=d&&Fe(p),c.contains(p,y)},Q.attr=function(p,y){(p.ownerDocument||p)!=d&&Fe(p);var _=n.attrHandle[y.toLowerCase()],T=_&&X.call(n.attrHandle,y.toLowerCase())?_(p,y,!g):void 0;return T!==void 0?T:p.getAttribute(y)},Q.error=function(p){throw new Error("Syntax error, unrecognized expression: "+p)},c.uniqueSort=function(p){var y,_=[],T=0,E=0;if(u=!U.sortStable,o=!U.sortStable&&h.call(p,0),$s.call(p,re),u){for(;y=p[E++];)y===p[E]&&(T=_.push(E));for(;T--;)Ws.call(p,_[T],1)}return o=null,p},c.fn.uniqueSort=function(){return this.pushStack(c.uniqueSort(h.apply(this)))},n=c.expr={cacheLength:50,createPseudo:be,match:Se,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(p){return p[1]=p[1].replace(Pe,Le),p[3]=(p[3]||p[4]||p[5]||"").replace(Pe,Le),p[2]==="~="&&(p[3]=" "+p[3]+" "),p.slice(0,4)},CHILD:function(p){return p[1]=p[1].toLowerCase(),p[1].slice(0,3)==="nth"?(p[3]||Q.error(p[0]),p[4]=+(p[4]?p[5]+(p[6]||1):2*(p[3]==="even"||p[3]==="odd")),p[5]=+(p[7]+p[8]||p[3]==="odd")):p[3]&&Q.error(p[0]),p},PSEUDO:function(p){var y,_=!p[6]&&p[2];return Se.CHILD.test(p[0])?null:(p[3]?p[2]=p[4]||p[5]||"":_&&Ce.test(_)&&(y=$t(_,!0))&&(y=_.indexOf(")",_.length-y)-_.length)&&(p[0]=p[0].slice(0,y),p[2]=_.slice(0,y)),p.slice(0,3))}},filter:{TAG:function(p){var y=p.replace(Pe,Le).toLowerCase();return p==="*"?function(){return!0}:function(_){return Y(_,y)}},CLASS:function(p){var y=B[p+" "];return y||(y=new RegExp("(^|"+Z+")"+p+"("+Z+"|$)"))&&B(p,function(_){return y.test(typeof _.className=="string"&&_.className||typeof _.getAttribute<"u"&&_.getAttribute("class")||"")})},ATTR:function(p,y,_){return function(T){var E=Q.attr(T,p);return E==null?y==="!=":y?(E+="",y==="="?E===_:y==="!="?E!==_:y==="^="?_&&E.indexOf(_)===0:y==="*="?_&&E.indexOf(_)>-1:y==="$="?_&&E.slice(-_.length)===_:y==="~="?(" "+E.replace(J," ")+" ").indexOf(_)>-1:y==="|="?E===_||E.slice(0,_.length+1)===_+"-":!1):!0}},CHILD:function(p,y,_,T,E){var R=p.slice(0,3)!=="nth",D=p.slice(-4)!=="last",N=y==="of-type";return T===1&&E===0?function(O){return!!O.parentNode}:function(O,V,j){var F,z,L,te,de,oe=R!==D?"nextSibling":"previousSibling",ge=O.parentNode,Ae=N&&O.nodeName.toLowerCase(),wt=!j&&!N,ce=!1;if(ge){if(R){for(;oe;){for(L=O;L=L[oe];)if(N?Y(L,Ae):L.nodeType===1)return!1;de=oe=p==="only"&&!de&&"nextSibling"}return!0}if(de=[D?ge.firstChild:ge.lastChild],D&&wt){for(z=ge[C]||(ge[C]={}),F=z[p]||[],te=F[0]===w&&F[1],ce=te&&F[2],L=te&&ge.childNodes[te];L=++te&&L&&L[oe]||(ce=te=0)||de.pop();)if(L.nodeType===1&&++ce&&L===O){z[p]=[w,te,ce];break}}else if(wt&&(z=O[C]||(O[C]={}),F=z[p]||[],te=F[0]===w&&F[1],ce=te),ce===!1)for(;(L=++te&&L&&L[oe]||(ce=te=0)||de.pop())&&!((N?Y(L,Ae):L.nodeType===1)&&++ce&&(wt&&(z=L[C]||(L[C]={}),z[p]=[w,ce]),L===O)););return ce-=E,ce===T||ce%T===0&&ce/T>=0}}},PSEUDO:function(p,y){var _,T=n.pseudos[p]||n.setFilters[p.toLowerCase()]||Q.error("unsupported pseudo: "+p);return T[C]?T(y):T.length>1?(_=[p,p,"",y],n.setFilters.hasOwnProperty(p.toLowerCase())?be(function(E,R){for(var D,N=T(E,y),O=N.length;O--;)D=A.call(E,N[O]),E[D]=!(R[D]=N[O])}):function(E){return T(E,0,_)}):T}},pseudos:{not:be(function(p){var y=[],_=[],T=ir(p.replace(Dt,"$1"));return T[C]?be(function(E,R,D,N){for(var O,V=T(E,null,N,[]),j=E.length;j--;)(O=V[j])&&(E[j]=!(R[j]=O))}):function(E,R,D){return y[0]=E,T(y,null,D,_),y[0]=null,!_.pop()}}),has:be(function(p){return function(y){return Q(p,y).length>0}}),contains:be(function(p){return p=p.replace(Pe,Le),function(y){return(y.textContent||c.text(y)).indexOf(p)>-1}}),lang:be(function(p){return Ft.test(p||"")||Q.error("unsupported lang: "+p),p=p.replace(Pe,Le).toLowerCase(),function(y){var _;do if(_=g?y.lang:y.getAttribute("xml:lang")||y.getAttribute("lang"))return _=_.toLowerCase(),_===p||_.indexOf(p+"-")===0;while((y=y.parentNode)&&y.nodeType===1);return!1}}),target:function(p){var y=e.location&&e.location.hash;return y&&y.slice(1)===p.id},root:function(p){return p===m},focus:function(p){return p===Wo()&&d.hasFocus()&&!!(p.type||p.href||~p.tabIndex)},enabled:bi(!1),disabled:bi(!0),checked:function(p){return Y(p,"input")&&!!p.checked||Y(p,"option")&&!!p.selected},selected:function(p){return p.parentNode&&p.parentNode.selectedIndex,p.selected===!0},empty:function(p){for(p=p.firstChild;p;p=p.nextSibling)if(p.nodeType<6)return!1;return!0},parent:function(p){return!n.pseudos.empty(p)},header:function(p){return Be.test(p.nodeName)},input:function(p){return He.test(p.nodeName)},button:function(p){return Y(p,"input")&&p.type==="button"||Y(p,"button")},text:function(p){var y;return Y(p,"input")&&p.type==="text"&&((y=p.getAttribute("type"))==null||y.toLowerCase()==="text")},first:nt(function(){return[0]}),last:nt(function(p,y){return[y-1]}),eq:nt(function(p,y,_){return[_<0?_+y:_]}),even:nt(function(p,y){for(var _=0;_<y;_+=2)p.push(_);return p}),odd:nt(function(p,y){for(var _=1;_<y;_+=2)p.push(_);return p}),lt:nt(function(p,y,_){var T;for(_<0?T=_+y:_>y?T=y:T=_;--T>=0;)p.push(T);return p}),gt:nt(function(p,y,_){for(var T=_<0?_+y:_;++T<y;)p.push(T);return p})}},n.pseudos.nth=n.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})n.pseudos[t]=qo(t);for(t in{submit:!0,reset:!0})n.pseudos[t]=Vo(t);function _i(){}_i.prototype=n.filters=n.pseudos,n.setFilters=new _i;function $t(p,y){var _,T,E,R,D,N,O,V=K[p+" "];if(V)return y?0:V.slice(0);for(D=p,N=[],O=n.preFilter;D;){(!_||(T=ne.exec(D)))&&(T&&(D=D.slice(T[0].length)||D),N.push(E=[])),_=!1,(T=Bt.exec(D))&&(_=T.shift(),E.push({value:_,type:T[0].replace(Dt," ")}),D=D.slice(_.length));for(R in n.filter)(T=Se[R].exec(D))&&(!O[R]||(T=O[R](T)))&&(_=T.shift(),E.push({value:_,type:R,matches:T}),D=D.slice(_.length));if(!_)break}return y?D.length:D?Q.error(p):K(p,N).slice(0)}function pn(p){for(var y=0,_=p.length,T="";y<_;y++)T+=p[y].value;return T}function gn(p,y,_){var T=y.dir,E=y.next,R=E||T,D=_&&R==="parentNode",N=k++;return y.first?function(O,V,j){for(;O=O[T];)if(O.nodeType===1||D)return p(O,V,j);return!1}:function(O,V,j){var F,z,L=[w,N];if(j){for(;O=O[T];)if((O.nodeType===1||D)&&p(O,V,j))return!0}else for(;O=O[T];)if(O.nodeType===1||D)if(z=O[C]||(O[C]={}),E&&Y(O,E))O=O[T]||O;else{if((F=z[R])&&F[0]===w&&F[1]===N)return L[2]=F[2];if(z[R]=L,L[2]=p(O,V,j))return!0}return!1}}function tr(p){return p.length>1?function(y,_,T){for(var E=p.length;E--;)if(!p[E](y,_,T))return!1;return!0}:p[0]}function zo(p,y,_){for(var T=0,E=y.length;T<E;T++)Q(p,y[T],_);return _}function mn(p,y,_,T,E){for(var R,D=[],N=0,O=p.length,V=y!=null;N<O;N++)(R=p[N])&&(!_||_(R,T,E))&&(D.push(R),V&&y.push(N));return D}function nr(p,y,_,T,E,R){return T&&!T[C]&&(T=nr(T)),E&&!E[C]&&(E=nr(E,R)),be(function(D,N,O,V){var j,F,z,L,te=[],de=[],oe=N.length,ge=D||zo(y||"*",O.nodeType?[O]:O,[]),Ae=p&&(D||!y)?mn(ge,te,p,O,V):ge;if(_?(L=E||(D?p:oe||T)?[]:N,_(Ae,L,O,V)):L=Ae,T)for(j=mn(L,de),T(j,[],O,V),F=j.length;F--;)(z=j[F])&&(L[de[F]]=!(Ae[de[F]]=z));if(D){if(E||p){if(E){for(j=[],F=L.length;F--;)(z=L[F])&&j.push(Ae[F]=z);E(null,L=[],j,V)}for(F=L.length;F--;)(z=L[F])&&(j=E?A.call(D,z):te[F])>-1&&(D[j]=!(N[j]=z))}}else L=mn(L===N?L.splice(oe,L.length):L),E?E(null,N,L,V):l.apply(N,L)})}function rr(p){for(var y,_,T,E=p.length,R=n.relative[p[0].type],D=R||n.relative[" "],N=R?1:0,O=gn(function(F){return F===y},D,!0),V=gn(function(F){return A.call(y,F)>-1},D,!0),j=[function(F,z,L){var te=!R&&(L||z!=s)||((y=z).nodeType?O(F,z,L):V(F,z,L));return y=null,te}];N<E;N++)if(_=n.relative[p[N].type])j=[gn(tr(j),_)];else{if(_=n.filter[p[N].type].apply(null,p[N].matches),_[C]){for(T=++N;T<E&&!n.relative[p[T].type];T++);return nr(N>1&&tr(j),N>1&&pn(p.slice(0,N-1).concat({value:p[N-2].type===" "?"*":""})).replace(Dt,"$1"),_,N<T&&rr(p.slice(N,T)),T<E&&rr(p=p.slice(T)),T<E&&pn(p))}j.push(_)}return tr(j)}function Go(p,y){var _=y.length>0,T=p.length>0,E=function(R,D,N,O,V){var j,F,z,L=0,te="0",de=R&&[],oe=[],ge=s,Ae=R||T&&n.find.TAG("*",V),wt=w+=ge==null?1:Math.random()||.1,ce=Ae.length;for(V&&(s=D==d||D||V);te!==ce&&(j=Ae[te])!=null;te++){if(T&&j){for(F=0,!D&&j.ownerDocument!=d&&(Fe(j),N=!g);z=p[F++];)if(z(j,D||d,N)){l.call(O,j);break}V&&(w=wt)}_&&((j=!z&&j)&&L--,R&&de.push(j))}if(L+=te,_&&te!==L){for(F=0;z=y[F++];)z(de,oe,D,N);if(R){if(L>0)for(;te--;)de[te]||oe[te]||(oe[te]=Pn.call(O));oe=mn(oe)}l.apply(O,oe),V&&!R&&oe.length>0&&L+y.length>1&&c.uniqueSort(O)}return V&&(w=wt,s=ge),de};return _?be(E):E}function ir(p,y){var _,T=[],E=[],R=W[p+" "];if(!R){for(y||(y=$t(p)),_=y.length;_--;)R=rr(y[_]),R[C]?T.push(R):E.push(R);R=W(p,Go(E,T)),R.selector=p}return R}function wi(p,y,_,T){var E,R,D,N,O,V=typeof p=="function"&&p,j=!T&&$t(p=V.selector||p);if(_=_||[],j.length===1){if(R=j[0]=j[0].slice(0),R.length>2&&(D=R[0]).type==="ID"&&y.nodeType===9&&g&&n.relative[R[1].type]){if(y=(n.find.ID(D.matches[0].replace(Pe,Le),y)||[])[0],y)V&&(y=y.parentNode);else return _;p=p.slice(R.shift().value.length)}for(E=Se.needsContext.test(p)?0:R.length;E--&&(D=R[E],!n.relative[N=D.type]);)if((O=n.find[N])&&(T=O(D.matches[0].replace(Pe,Le),Zn.test(R[0].type)&&er(y.parentNode)||y))){if(R.splice(E,1),p=T.length&&pn(R),!p)return l.apply(_,T),_;break}}return(V||ir(p,j))(T,y,!g,_,!y||Zn.test(p)&&er(y.parentNode)||y),_}U.sortStable=C.split("").sort(re).join("")===C,Fe(),U.sortDetached=_t(function(p){return p.compareDocumentPosition(d.createElement("fieldset"))&1}),c.find=Q,c.expr[":"]=c.expr.pseudos,c.unique=c.uniqueSort,Q.compile=ir,Q.select=wi,Q.setDocument=Fe,Q.tokenize=$t,Q.escape=c.escapeSelector,Q.getText=c.text,Q.isXML=c.isXMLDoc,Q.selectors=c.expr,Q.support=c.support,Q.uniqueSort=c.uniqueSort})();var dt=function(t,n,s){for(var o=[],u=s!==void 0;(t=t[n])&&t.nodeType!==9;)if(t.nodeType===1){if(u&&c(t).is(s))break;o.push(t)}return o},Mr=function(t,n){for(var s=[];t;t=t.nextSibling)t.nodeType===1&&t!==n&&s.push(t);return s},Ur=c.expr.match.needsContext,jr=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Mn(t,n,s){return $(n)?c.grep(t,function(o,u){return!!n.call(o,u,o)!==s}):n.nodeType?c.grep(t,function(o){return o===n!==s}):typeof n!="string"?c.grep(t,function(o){return A.call(n,o)>-1!==s}):c.filter(n,t,s)}c.filter=function(t,n,s){var o=n[0];return s&&(t=":not("+t+")"),n.length===1&&o.nodeType===1?c.find.matchesSelector(o,t)?[o]:[]:c.find.matches(t,c.grep(n,function(u){return u.nodeType===1}))},c.fn.extend({find:function(t){var n,s,o=this.length,u=this;if(typeof t!="string")return this.pushStack(c(t).filter(function(){for(n=0;n<o;n++)if(c.contains(u[n],this))return!0}));for(s=this.pushStack([]),n=0;n<o;n++)c.find(t,u[n],s);return o>1?c.uniqueSort(s):s},filter:function(t){return this.pushStack(Mn(this,t||[],!1))},not:function(t){return this.pushStack(Mn(this,t||[],!0))},is:function(t){return!!Mn(this,typeof t=="string"&&Ur.test(t)?c(t):t||[],!1).length}});var Hr,zs=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Gs=c.fn.init=function(t,n,s){var o,u;if(!t)return this;if(s=s||Hr,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?o=[null,t,null]:o=zs.exec(t),o&&(o[1]||!n))if(o[1]){if(n=n instanceof c?n[0]:n,c.merge(this,c.parseHTML(o[1],n&&n.nodeType?n.ownerDocument||n:H,!0)),jr.test(o[1])&&c.isPlainObject(n))for(o in n)$(this[o])?this[o](n[o]):this.attr(o,n[o]);return this}else return u=H.getElementById(o[2]),u&&(this[0]=u,this.length=1),this;else return!n||n.jquery?(n||s).find(t):this.constructor(n).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if($(t))return s.ready!==void 0?s.ready(t):t(c)}return c.makeArray(t,this)};Gs.prototype=c.fn,Hr=c(H);var Ks=/^(?:parents|prev(?:Until|All))/,Js={children:!0,contents:!0,next:!0,prev:!0};c.fn.extend({has:function(t){var n=c(t,this),s=n.length;return this.filter(function(){for(var o=0;o<s;o++)if(c.contains(this,n[o]))return!0})},closest:function(t,n){var s,o=0,u=this.length,l=[],d=typeof t!="string"&&c(t);if(!Ur.test(t)){for(;o<u;o++)for(s=this[o];s&&s!==n;s=s.parentNode)if(s.nodeType<11&&(d?d.index(s)>-1:s.nodeType===1&&c.find.matchesSelector(s,t))){l.push(s);break}}return this.pushStack(l.length>1?c.uniqueSort(l):l)},index:function(t){return t?typeof t=="string"?A.call(c(t),this[0]):A.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,n){return this.pushStack(c.uniqueSort(c.merge(this.get(),c(t,n))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function Br(t,n){for(;(t=t[n])&&t.nodeType!==1;);return t}c.each({parent:function(t){var n=t.parentNode;return n&&n.nodeType!==11?n:null},parents:function(t){return dt(t,"parentNode")},parentsUntil:function(t,n,s){return dt(t,"parentNode",s)},next:function(t){return Br(t,"nextSibling")},prev:function(t){return Br(t,"previousSibling")},nextAll:function(t){return dt(t,"nextSibling")},prevAll:function(t){return dt(t,"previousSibling")},nextUntil:function(t,n,s){return dt(t,"nextSibling",s)},prevUntil:function(t,n,s){return dt(t,"previousSibling",s)},siblings:function(t){return Mr((t.parentNode||{}).firstChild,t)},children:function(t){return Mr(t.firstChild)},contents:function(t){return t.contentDocument!=null&&f(t.contentDocument)?t.contentDocument:(Y(t,"template")&&(t=t.content||t),c.merge([],t.childNodes))}},function(t,n){c.fn[t]=function(s,o){var u=c.map(this,n,s);return t.slice(-5)!=="Until"&&(o=s),o&&typeof o=="string"&&(u=c.filter(o,u)),this.length>1&&(Js[t]||c.uniqueSort(u),Ks.test(t)&&u.reverse()),this.pushStack(u)}});var we=/[^\x20\t\r\n\f]+/g;function Xs(t){var n={};return c.each(t.match(we)||[],function(s,o){n[o]=!0}),n}c.Callbacks=function(t){t=typeof t=="string"?Xs(t):c.extend({},t);var n,s,o,u,l=[],d=[],m=-1,g=function(){for(u=u||t.once,o=n=!0;d.length;m=-1)for(s=d.shift();++m<l.length;)l[m].apply(s[0],s[1])===!1&&t.stopOnFalse&&(m=l.length,s=!1);t.memory||(s=!1),n=!1,u&&(s?l=[]:l="")},b={add:function(){return l&&(s&&!n&&(m=l.length-1,d.push(s)),function I(C){c.each(C,function(w,k){$(k)?(!t.unique||!b.has(k))&&l.push(k):k&&k.length&&xe(k)!=="string"&&I(k)})}(arguments),s&&!n&&g()),this},remove:function(){return c.each(arguments,function(I,C){for(var w;(w=c.inArray(C,l,w))>-1;)l.splice(w,1),w<=m&&m--}),this},has:function(I){return I?c.inArray(I,l)>-1:l.length>0},empty:function(){return l&&(l=[]),this},disable:function(){return u=d=[],l=s="",this},disabled:function(){return!l},lock:function(){return u=d=[],!s&&!n&&(l=s=""),this},locked:function(){return!!u},fireWith:function(I,C){return u||(C=C||[],C=[I,C.slice?C.slice():C],d.push(C),n||g()),this},fire:function(){return b.fireWith(this,arguments),this},fired:function(){return!!o}};return b};function ht(t){return t}function on(t){throw t}function Fr(t,n,s,o){var u;try{t&&$(u=t.promise)?u.call(t).done(n).fail(s):t&&$(u=t.then)?u.call(t,n,s):n.apply(void 0,[t].slice(o))}catch(l){s.apply(void 0,[l])}}c.extend({Deferred:function(t){var n=[["notify","progress",c.Callbacks("memory"),c.Callbacks("memory"),2],["resolve","done",c.Callbacks("once memory"),c.Callbacks("once memory"),0,"resolved"],["reject","fail",c.Callbacks("once memory"),c.Callbacks("once memory"),1,"rejected"]],s="pending",o={state:function(){return s},always:function(){return u.done(arguments).fail(arguments),this},catch:function(l){return o.then(null,l)},pipe:function(){var l=arguments;return c.Deferred(function(d){c.each(n,function(m,g){var b=$(l[g[4]])&&l[g[4]];u[g[1]](function(){var I=b&&b.apply(this,arguments);I&&$(I.promise)?I.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[g[0]+"With"](this,b?[I]:arguments)})}),l=null}).promise()},then:function(l,d,m){var g=0;function b(I,C,w,k){return function(){var B=this,K=arguments,W=function(){var re,Ie;if(!(I<g)){if(re=w.apply(B,K),re===C.promise())throw new TypeError("Thenable self-resolution");Ie=re&&(typeof re=="object"||typeof re=="function")&&re.then,$(Ie)?k?Ie.call(re,b(g,C,ht,k),b(g,C,on,k)):(g++,Ie.call(re,b(g,C,ht,k),b(g,C,on,k),b(g,C,ht,C.notifyWith))):(w!==ht&&(B=void 0,K=[re]),(k||C.resolveWith)(B,K))}},se=k?W:function(){try{W()}catch(re){c.Deferred.exceptionHook&&c.Deferred.exceptionHook(re,se.error),I+1>=g&&(w!==on&&(B=void 0,K=[re]),C.rejectWith(B,K))}};I?se():(c.Deferred.getErrorHook?se.error=c.Deferred.getErrorHook():c.Deferred.getStackHook&&(se.error=c.Deferred.getStackHook()),e.setTimeout(se))}}return c.Deferred(function(I){n[0][3].add(b(0,I,$(m)?m:ht,I.notifyWith)),n[1][3].add(b(0,I,$(l)?l:ht)),n[2][3].add(b(0,I,$(d)?d:on))}).promise()},promise:function(l){return l!=null?c.extend(l,o):o}},u={};return c.each(n,function(l,d){var m=d[2],g=d[5];o[d[1]]=m.add,g&&m.add(function(){s=g},n[3-l][2].disable,n[3-l][3].disable,n[0][2].lock,n[0][3].lock),m.add(d[3].fire),u[d[0]]=function(){return u[d[0]+"With"](this===u?void 0:this,arguments),this},u[d[0]+"With"]=m.fireWith}),o.promise(u),t&&t.call(u,u),u},when:function(t){var n=arguments.length,s=n,o=Array(s),u=h.call(arguments),l=c.Deferred(),d=function(m){return function(g){o[m]=this,u[m]=arguments.length>1?h.call(arguments):g,--n||l.resolveWith(o,u)}};if(n<=1&&(Fr(t,l.done(d(s)).resolve,l.reject,!n),l.state()==="pending"||$(u[s]&&u[s].then)))return l.then();for(;s--;)Fr(u[s],d(s),l.reject);return l.promise()}});var Ys=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;c.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Ys.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},c.readyException=function(t){e.setTimeout(function(){throw t})};var Un=c.Deferred();c.fn.ready=function(t){return Un.then(t).catch(function(n){c.readyException(n)}),this},c.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--c.readyWait:c.isReady)||(c.isReady=!0,!(t!==!0&&--c.readyWait>0)&&Un.resolveWith(H,[c]))}}),c.ready.then=Un.then;function an(){H.removeEventListener("DOMContentLoaded",an),e.removeEventListener("load",an),c.ready()}H.readyState==="complete"||H.readyState!=="loading"&&!H.documentElement.doScroll?e.setTimeout(c.ready):(H.addEventListener("DOMContentLoaded",an),e.addEventListener("load",an));var Oe=function(t,n,s,o,u,l,d){var m=0,g=t.length,b=s==null;if(xe(s)==="object"){u=!0;for(m in s)Oe(t,n,m,s[m],!0,l,d)}else if(o!==void 0&&(u=!0,$(o)||(d=!0),b&&(d?(n.call(t,o),n=null):(b=n,n=function(I,C,w){return b.call(c(I),w)})),n))for(;m<g;m++)n(t[m],s,d?o:o.call(t[m],m,n(t[m],s)));return u?t:b?n.call(t):g?n(t[0],s):l},Qs=/^-ms-/,Zs=/-([a-z])/g;function eo(t,n){return n.toUpperCase()}function Te(t){return t.replace(Qs,"ms-").replace(Zs,eo)}var Ot=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function Nt(){this.expando=c.expando+Nt.uid++}Nt.uid=1,Nt.prototype={cache:function(t){var n=t[this.expando];return n||(n={},Ot(t)&&(t.nodeType?t[this.expando]=n:Object.defineProperty(t,this.expando,{value:n,configurable:!0}))),n},set:function(t,n,s){var o,u=this.cache(t);if(typeof n=="string")u[Te(n)]=s;else for(o in n)u[Te(o)]=n[o];return u},get:function(t,n){return n===void 0?this.cache(t):t[this.expando]&&t[this.expando][Te(n)]},access:function(t,n,s){return n===void 0||n&&typeof n=="string"&&s===void 0?this.get(t,n):(this.set(t,n,s),s!==void 0?s:n)},remove:function(t,n){var s,o=t[this.expando];if(o!==void 0){if(n!==void 0)for(Array.isArray(n)?n=n.map(Te):(n=Te(n),n=n in o?[n]:n.match(we)||[]),s=n.length;s--;)delete o[n[s]];(n===void 0||c.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var n=t[this.expando];return n!==void 0&&!c.isEmptyObject(n)}};var P=new Nt,ue=new Nt,to=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,no=/[A-Z]/g;function ro(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:to.test(t)?JSON.parse(t):t}function $r(t,n,s){var o;if(s===void 0&&t.nodeType===1)if(o="data-"+n.replace(no,"-$&").toLowerCase(),s=t.getAttribute(o),typeof s=="string"){try{s=ro(s)}catch{}ue.set(t,n,s)}else s=void 0;return s}c.extend({hasData:function(t){return ue.hasData(t)||P.hasData(t)},data:function(t,n,s){return ue.access(t,n,s)},removeData:function(t,n){ue.remove(t,n)},_data:function(t,n,s){return P.access(t,n,s)},_removeData:function(t,n){P.remove(t,n)}}),c.fn.extend({data:function(t,n){var s,o,u,l=this[0],d=l&&l.attributes;if(t===void 0){if(this.length&&(u=ue.get(l),l.nodeType===1&&!P.get(l,"hasDataAttrs"))){for(s=d.length;s--;)d[s]&&(o=d[s].name,o.indexOf("data-")===0&&(o=Te(o.slice(5)),$r(l,o,u[o])));P.set(l,"hasDataAttrs",!0)}return u}return typeof t=="object"?this.each(function(){ue.set(this,t)}):Oe(this,function(m){var g;if(l&&m===void 0)return g=ue.get(l,t),g!==void 0||(g=$r(l,t),g!==void 0)?g:void 0;this.each(function(){ue.set(this,t,m)})},null,n,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){ue.remove(this,t)})}}),c.extend({queue:function(t,n,s){var o;if(t)return n=(n||"fx")+"queue",o=P.get(t,n),s&&(!o||Array.isArray(s)?o=P.access(t,n,c.makeArray(s)):o.push(s)),o||[]},dequeue:function(t,n){n=n||"fx";var s=c.queue(t,n),o=s.length,u=s.shift(),l=c._queueHooks(t,n),d=function(){c.dequeue(t,n)};u==="inprogress"&&(u=s.shift(),o--),u&&(n==="fx"&&s.unshift("inprogress"),delete l.stop,u.call(t,d,l)),!o&&l&&l.empty.fire()},_queueHooks:function(t,n){var s=n+"queueHooks";return P.get(t,s)||P.access(t,s,{empty:c.Callbacks("once memory").add(function(){P.remove(t,[n+"queue",s])})})}}),c.fn.extend({queue:function(t,n){var s=2;return typeof t!="string"&&(n=t,t="fx",s--),arguments.length<s?c.queue(this[0],t):n===void 0?this:this.each(function(){var o=c.queue(this,t,n);c._queueHooks(this,t),t==="fx"&&o[0]!=="inprogress"&&c.dequeue(this,t)})},dequeue:function(t){return this.each(function(){c.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,n){var s,o=1,u=c.Deferred(),l=this,d=this.length,m=function(){--o||u.resolveWith(l,[l])};for(typeof t!="string"&&(n=t,t=void 0),t=t||"fx";d--;)s=P.get(l[d],t+"queueHooks"),s&&s.empty&&(o++,s.empty.add(m));return m(),u.promise(n)}});var Wr=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Pt=new RegExp("^(?:([+-])=|)("+Wr+")([a-z%]*)$","i"),Ne=["Top","Right","Bottom","Left"],Qe=H.documentElement,pt=function(t){return c.contains(t.ownerDocument,t)},io={composed:!0};Qe.getRootNode&&(pt=function(t){return c.contains(t.ownerDocument,t)||t.getRootNode(io)===t.ownerDocument});var cn=function(t,n){return t=n||t,t.style.display==="none"||t.style.display===""&&pt(t)&&c.css(t,"display")==="none"};function qr(t,n,s,o){var u,l,d=20,m=o?function(){return o.cur()}:function(){return c.css(t,n,"")},g=m(),b=s&&s[3]||(c.cssNumber[n]?"":"px"),I=t.nodeType&&(c.cssNumber[n]||b!=="px"&&+g)&&Pt.exec(c.css(t,n));if(I&&I[3]!==b){for(g=g/2,b=b||I[3],I=+g||1;d--;)c.style(t,n,I+b),(1-l)*(1-(l=m()/g||.5))<=0&&(d=0),I=I/l;I=I*2,c.style(t,n,I+b),s=s||[]}return s&&(I=+I||+g||0,u=s[1]?I+(s[1]+1)*s[2]:+s[2],o&&(o.unit=b,o.start=I,o.end=u)),u}var Vr={};function so(t){var n,s=t.ownerDocument,o=t.nodeName,u=Vr[o];return u||(n=s.body.appendChild(s.createElement(o)),u=c.css(n,"display"),n.parentNode.removeChild(n),u==="none"&&(u="block"),Vr[o]=u,u)}function gt(t,n){for(var s,o,u=[],l=0,d=t.length;l<d;l++)o=t[l],o.style&&(s=o.style.display,n?(s==="none"&&(u[l]=P.get(o,"display")||null,u[l]||(o.style.display="")),o.style.display===""&&cn(o)&&(u[l]=so(o))):s!=="none"&&(u[l]="none",P.set(o,"display",s)));for(l=0;l<d;l++)u[l]!=null&&(t[l].style.display=u[l]);return t}c.fn.extend({show:function(){return gt(this,!0)},hide:function(){return gt(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){cn(this)?c(this).show():c(this).hide()})}});var Lt=/^(?:checkbox|radio)$/i,zr=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Gr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=H.createDocumentFragment(),n=t.appendChild(H.createElement("div")),s=H.createElement("input");s.setAttribute("type","radio"),s.setAttribute("checked","checked"),s.setAttribute("name","t"),n.appendChild(s),U.checkClone=n.cloneNode(!0).cloneNode(!0).lastChild.checked,n.innerHTML="<textarea>x</textarea>",U.noCloneChecked=!!n.cloneNode(!0).lastChild.defaultValue,n.innerHTML="<option></option>",U.option=!!n.lastChild})();var he={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td,U.option||(he.optgroup=he.option=[1,"<select multiple='multiple'>","</select>"]);function le(t,n){var s;return typeof t.getElementsByTagName<"u"?s=t.getElementsByTagName(n||"*"):typeof t.querySelectorAll<"u"?s=t.querySelectorAll(n||"*"):s=[],n===void 0||n&&Y(t,n)?c.merge([t],s):s}function jn(t,n){for(var s=0,o=t.length;s<o;s++)P.set(t[s],"globalEval",!n||P.get(n[s],"globalEval"))}var oo=/<|&#?\w+;/;function Kr(t,n,s,o,u){for(var l,d,m,g,b,I,C=n.createDocumentFragment(),w=[],k=0,B=t.length;k<B;k++)if(l=t[k],l||l===0)if(xe(l)==="object")c.merge(w,l.nodeType?[l]:l);else if(!oo.test(l))w.push(n.createTextNode(l));else{for(d=d||C.appendChild(n.createElement("div")),m=(zr.exec(l)||["",""])[1].toLowerCase(),g=he[m]||he._default,d.innerHTML=g[1]+c.htmlPrefilter(l)+g[2],I=g[0];I--;)d=d.lastChild;c.merge(w,d.childNodes),d=C.firstChild,d.textContent=""}for(C.textContent="",k=0;l=w[k++];){if(o&&c.inArray(l,o)>-1){u&&u.push(l);continue}if(b=pt(l),d=le(C.appendChild(l),"script"),b&&jn(d),s)for(I=0;l=d[I++];)Gr.test(l.type||"")&&s.push(l)}return C}var Jr=/^([^.]*)(?:\.(.+)|)/;function mt(){return!0}function yt(){return!1}function Hn(t,n,s,o,u,l){var d,m;if(typeof n=="object"){typeof s!="string"&&(o=o||s,s=void 0);for(m in n)Hn(t,m,s,o,n[m],l);return t}if(o==null&&u==null?(u=s,o=s=void 0):u==null&&(typeof s=="string"?(u=o,o=void 0):(u=o,o=s,s=void 0)),u===!1)u=yt;else if(!u)return t;return l===1&&(d=u,u=function(g){return c().off(g),d.apply(this,arguments)},u.guid=d.guid||(d.guid=c.guid++)),t.each(function(){c.event.add(this,n,u,o,s)})}c.event={global:{},add:function(t,n,s,o,u){var l,d,m,g,b,I,C,w,k,B,K,W=P.get(t);if(Ot(t))for(s.handler&&(l=s,s=l.handler,u=l.selector),u&&c.find.matchesSelector(Qe,u),s.guid||(s.guid=c.guid++),(g=W.events)||(g=W.events=Object.create(null)),(d=W.handle)||(d=W.handle=function(se){return typeof c<"u"&&c.event.triggered!==se.type?c.event.dispatch.apply(t,arguments):void 0}),n=(n||"").match(we)||[""],b=n.length;b--;)m=Jr.exec(n[b])||[],k=K=m[1],B=(m[2]||"").split(".").sort(),k&&(C=c.event.special[k]||{},k=(u?C.delegateType:C.bindType)||k,C=c.event.special[k]||{},I=c.extend({type:k,origType:K,data:o,handler:s,guid:s.guid,selector:u,needsContext:u&&c.expr.match.needsContext.test(u),namespace:B.join(".")},l),(w=g[k])||(w=g[k]=[],w.delegateCount=0,(!C.setup||C.setup.call(t,o,B,d)===!1)&&t.addEventListener&&t.addEventListener(k,d)),C.add&&(C.add.call(t,I),I.handler.guid||(I.handler.guid=s.guid)),u?w.splice(w.delegateCount++,0,I):w.push(I),c.event.global[k]=!0)},remove:function(t,n,s,o,u){var l,d,m,g,b,I,C,w,k,B,K,W=P.hasData(t)&&P.get(t);if(!(!W||!(g=W.events))){for(n=(n||"").match(we)||[""],b=n.length;b--;){if(m=Jr.exec(n[b])||[],k=K=m[1],B=(m[2]||"").split(".").sort(),!k){for(k in g)c.event.remove(t,k+n[b],s,o,!0);continue}for(C=c.event.special[k]||{},k=(o?C.delegateType:C.bindType)||k,w=g[k]||[],m=m[2]&&new RegExp("(^|\\.)"+B.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=l=w.length;l--;)I=w[l],(u||K===I.origType)&&(!s||s.guid===I.guid)&&(!m||m.test(I.namespace))&&(!o||o===I.selector||o==="**"&&I.selector)&&(w.splice(l,1),I.selector&&w.delegateCount--,C.remove&&C.remove.call(t,I));d&&!w.length&&((!C.teardown||C.teardown.call(t,B,W.handle)===!1)&&c.removeEvent(t,k,W.handle),delete g[k])}c.isEmptyObject(g)&&P.remove(t,"handle events")}},dispatch:function(t){var n,s,o,u,l,d,m=new Array(arguments.length),g=c.event.fix(t),b=(P.get(this,"events")||Object.create(null))[g.type]||[],I=c.event.special[g.type]||{};for(m[0]=g,n=1;n<arguments.length;n++)m[n]=arguments[n];if(g.delegateTarget=this,!(I.preDispatch&&I.preDispatch.call(this,g)===!1)){for(d=c.event.handlers.call(this,g,b),n=0;(u=d[n++])&&!g.isPropagationStopped();)for(g.currentTarget=u.elem,s=0;(l=u.handlers[s++])&&!g.isImmediatePropagationStopped();)(!g.rnamespace||l.namespace===!1||g.rnamespace.test(l.namespace))&&(g.handleObj=l,g.data=l.data,o=((c.event.special[l.origType]||{}).handle||l.handler).apply(u.elem,m),o!==void 0&&(g.result=o)===!1&&(g.preventDefault(),g.stopPropagation()));return I.postDispatch&&I.postDispatch.call(this,g),g.result}},handlers:function(t,n){var s,o,u,l,d,m=[],g=n.delegateCount,b=t.target;if(g&&b.nodeType&&!(t.type==="click"&&t.button>=1)){for(;b!==this;b=b.parentNode||this)if(b.nodeType===1&&!(t.type==="click"&&b.disabled===!0)){for(l=[],d={},s=0;s<g;s++)o=n[s],u=o.selector+" ",d[u]===void 0&&(d[u]=o.needsContext?c(u,this).index(b)>-1:c.find(u,this,null,[b]).length),d[u]&&l.push(o);l.length&&m.push({elem:b,handlers:l})}}return b=this,g<n.length&&m.push({elem:b,handlers:n.slice(g)}),m},addProp:function(t,n){Object.defineProperty(c.Event.prototype,t,{enumerable:!0,configurable:!0,get:$(n)?function(){if(this.originalEvent)return n(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(s){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:s})}})},fix:function(t){return t[c.expando]?t:new c.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var n=this||t;return Lt.test(n.type)&&n.click&&Y(n,"input")&&un(n,"click",!0),!1},trigger:function(t){var n=this||t;return Lt.test(n.type)&&n.click&&Y(n,"input")&&un(n,"click"),!0},_default:function(t){var n=t.target;return Lt.test(n.type)&&n.click&&Y(n,"input")&&P.get(n,"click")||Y(n,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function un(t,n,s){if(!s){P.get(t,n)===void 0&&c.event.add(t,n,mt);return}P.set(t,n,!1),c.event.add(t,n,{namespace:!1,handler:function(o){var u,l=P.get(this,n);if(o.isTrigger&1&&this[n]){if(l)(c.event.special[n]||{}).delegateType&&o.stopPropagation();else if(l=h.call(arguments),P.set(this,n,l),this[n](),u=P.get(this,n),P.set(this,n,!1),l!==u)return o.stopImmediatePropagation(),o.preventDefault(),u}else l&&(P.set(this,n,c.event.trigger(l[0],l.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=mt)}})}c.removeEvent=function(t,n,s){t.removeEventListener&&t.removeEventListener(n,s)},c.Event=function(t,n){if(!(this instanceof c.Event))return new c.Event(t,n);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?mt:yt,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,n&&c.extend(this,n),this.timeStamp=t&&t.timeStamp||Date.now(),this[c.expando]=!0},c.Event.prototype={constructor:c.Event,isDefaultPrevented:yt,isPropagationStopped:yt,isImmediatePropagationStopped:yt,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=mt,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=mt,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=mt,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},c.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},c.event.addProp),c.each({focus:"focusin",blur:"focusout"},function(t,n){function s(o){if(H.documentMode){var u=P.get(this,"handle"),l=c.event.fix(o);l.type=o.type==="focusin"?"focus":"blur",l.isSimulated=!0,u(o),l.target===l.currentTarget&&u(l)}else c.event.simulate(n,o.target,c.event.fix(o))}c.event.special[t]={setup:function(){var o;if(un(this,t,!0),H.documentMode)o=P.get(this,n),o||this.addEventListener(n,s),P.set(this,n,(o||0)+1);else return!1},trigger:function(){return un(this,t),!0},teardown:function(){var o;if(H.documentMode)o=P.get(this,n)-1,o?P.set(this,n,o):(this.removeEventListener(n,s),P.remove(this,n));else return!1},_default:function(o){return P.get(o.target,t)},delegateType:n},c.event.special[n]={setup:function(){var o=this.ownerDocument||this.document||this,u=H.documentMode?this:o,l=P.get(u,n);l||(H.documentMode?this.addEventListener(n,s):o.addEventListener(t,s,!0)),P.set(u,n,(l||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=H.documentMode?this:o,l=P.get(u,n)-1;l?P.set(u,n,l):(H.documentMode?this.removeEventListener(n,s):o.removeEventListener(t,s,!0),P.remove(u,n))}}}),c.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,n){c.event.special[t]={delegateType:n,bindType:n,handle:function(s){var o,u=this,l=s.relatedTarget,d=s.handleObj;return(!l||l!==u&&!c.contains(u,l))&&(s.type=d.origType,o=d.handler.apply(this,arguments),s.type=n),o}}}),c.fn.extend({on:function(t,n,s,o){return Hn(this,t,n,s,o)},one:function(t,n,s,o){return Hn(this,t,n,s,o,1)},off:function(t,n,s){var o,u;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,c(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof t=="object"){for(u in t)this.off(u,n,t[u]);return this}return(n===!1||typeof n=="function")&&(s=n,n=void 0),s===!1&&(s=yt),this.each(function(){c.event.remove(this,t,s,n)})}});var ao=/<script|<style|<link/i,co=/checked\s*(?:[^=]|=\s*.checked.)/i,uo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Xr(t,n){return Y(t,"table")&&Y(n.nodeType!==11?n:n.firstChild,"tr")&&c(t).children("tbody")[0]||t}function lo(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function fo(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function Yr(t,n){var s,o,u,l,d,m,g;if(n.nodeType===1){if(P.hasData(t)&&(l=P.get(t),g=l.events,g)){P.remove(n,"handle events");for(u in g)for(s=0,o=g[u].length;s<o;s++)c.event.add(n,u,g[u][s])}ue.hasData(t)&&(d=ue.access(t),m=c.extend({},d),ue.set(n,m))}}function ho(t,n){var s=n.nodeName.toLowerCase();s==="input"&&Lt.test(t.type)?n.checked=t.checked:(s==="input"||s==="textarea")&&(n.defaultValue=t.defaultValue)}function vt(t,n,s,o){n=v(n);var u,l,d,m,g,b,I=0,C=t.length,w=C-1,k=n[0],B=$(k);if(B||C>1&&typeof k=="string"&&!U.checkClone&&co.test(k))return t.each(function(K){var W=t.eq(K);B&&(n[0]=k.call(this,K,W.html())),vt(W,n,s,o)});if(C&&(u=Kr(n,t[0].ownerDocument,!1,t,o),l=u.firstChild,u.childNodes.length===1&&(u=l),l||o)){for(d=c.map(le(u,"script"),lo),m=d.length;I<C;I++)g=u,I!==w&&(g=c.clone(g,!0,!0),m&&c.merge(d,le(g,"script"))),s.call(t[I],g,I);if(m)for(b=d[d.length-1].ownerDocument,c.map(d,fo),I=0;I<m;I++)g=d[I],Gr.test(g.type||"")&&!P.access(g,"globalEval")&&c.contains(b,g)&&(g.src&&(g.type||"").toLowerCase()!=="module"?c._evalUrl&&!g.noModule&&c._evalUrl(g.src,{nonce:g.nonce||g.getAttribute("nonce")},b):ft(g.textContent.replace(uo,""),g,b))}return t}function Qr(t,n,s){for(var o,u=n?c.filter(n,t):t,l=0;(o=u[l])!=null;l++)!s&&o.nodeType===1&&c.cleanData(le(o)),o.parentNode&&(s&&pt(o)&&jn(le(o,"script")),o.parentNode.removeChild(o));return t}c.extend({htmlPrefilter:function(t){return t},clone:function(t,n,s){var o,u,l,d,m=t.cloneNode(!0),g=pt(t);if(!U.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!c.isXMLDoc(t))for(d=le(m),l=le(t),o=0,u=l.length;o<u;o++)ho(l[o],d[o]);if(n)if(s)for(l=l||le(t),d=d||le(m),o=0,u=l.length;o<u;o++)Yr(l[o],d[o]);else Yr(t,m);return d=le(m,"script"),d.length>0&&jn(d,!g&&le(t,"script")),m},cleanData:function(t){for(var n,s,o,u=c.event.special,l=0;(s=t[l])!==void 0;l++)if(Ot(s)){if(n=s[P.expando]){if(n.events)for(o in n.events)u[o]?c.event.remove(s,o):c.removeEvent(s,o,n.handle);s[P.expando]=void 0}s[ue.expando]&&(s[ue.expando]=void 0)}}}),c.fn.extend({detach:function(t){return Qr(this,t,!0)},remove:function(t){return Qr(this,t)},text:function(t){return Oe(this,function(n){return n===void 0?c.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=n)})},null,t,arguments.length)},append:function(){return vt(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Xr(this,t);n.appendChild(t)}})},prepend:function(){return vt(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var n=Xr(this,t);n.insertBefore(t,n.firstChild)}})},before:function(){return vt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return vt(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,n=0;(t=this[n])!=null;n++)t.nodeType===1&&(c.cleanData(le(t,!1)),t.textContent="");return this},clone:function(t,n){return t=t??!1,n=n??t,this.map(function(){return c.clone(this,t,n)})},html:function(t){return Oe(this,function(n){var s=this[0]||{},o=0,u=this.length;if(n===void 0&&s.nodeType===1)return s.innerHTML;if(typeof n=="string"&&!ao.test(n)&&!he[(zr.exec(n)||["",""])[1].toLowerCase()]){n=c.htmlPrefilter(n);try{for(;o<u;o++)s=this[o]||{},s.nodeType===1&&(c.cleanData(le(s,!1)),s.innerHTML=n);s=0}catch{}}s&&this.empty().append(n)},null,t,arguments.length)},replaceWith:function(){var t=[];return vt(this,arguments,function(n){var s=this.parentNode;c.inArray(this,t)<0&&(c.cleanData(le(this)),s&&s.replaceChild(n,this))},t)}}),c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,n){c.fn[t]=function(s){for(var o,u=[],l=c(s),d=l.length-1,m=0;m<=d;m++)o=m===d?this:this.clone(!0),c(l[m])[n](o),S.apply(u,o.get());return this.pushStack(u)}});var Bn=new RegExp("^("+Wr+")(?!px)[a-z%]+$","i"),Fn=/^--/,ln=function(t){var n=t.ownerDocument.defaultView;return(!n||!n.opener)&&(n=e),n.getComputedStyle(t)},Zr=function(t,n,s){var o,u,l={};for(u in n)l[u]=t.style[u],t.style[u]=n[u];o=s.call(t);for(u in n)t.style[u]=l[u];return o},po=new RegExp(Ne.join("|"),"i");(function(){function t(){if(b){g.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",b.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Qe.appendChild(g).appendChild(b);var I=e.getComputedStyle(b);s=I.top!=="1%",m=n(I.marginLeft)===12,b.style.right="60%",l=n(I.right)===36,o=n(I.width)===36,b.style.position="absolute",u=n(b.offsetWidth/3)===12,Qe.removeChild(g),b=null}}function n(I){return Math.round(parseFloat(I))}var s,o,u,l,d,m,g=H.createElement("div"),b=H.createElement("div");b.style&&(b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",U.clearCloneStyle=b.style.backgroundClip==="content-box",c.extend(U,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),l},pixelPosition:function(){return t(),s},reliableMarginLeft:function(){return t(),m},scrollboxSize:function(){return t(),u},reliableTrDimensions:function(){var I,C,w,k;return d==null&&(I=H.createElement("table"),C=H.createElement("tr"),w=H.createElement("div"),I.style.cssText="position:absolute;left:-11111px;border-collapse:separate",C.style.cssText="box-sizing:content-box;border:1px solid",C.style.height="1px",w.style.height="9px",w.style.display="block",Qe.appendChild(I).appendChild(C).appendChild(w),k=e.getComputedStyle(C),d=parseInt(k.height,10)+parseInt(k.borderTopWidth,10)+parseInt(k.borderBottomWidth,10)===C.offsetHeight,Qe.removeChild(I)),d}}))})();function Mt(t,n,s){var o,u,l,d,m=Fn.test(n),g=t.style;return s=s||ln(t),s&&(d=s.getPropertyValue(n)||s[n],m&&d&&(d=d.replace(Dt,"$1")||void 0),d===""&&!pt(t)&&(d=c.style(t,n)),!U.pixelBoxStyles()&&Bn.test(d)&&po.test(n)&&(o=g.width,u=g.minWidth,l=g.maxWidth,g.minWidth=g.maxWidth=g.width=d,d=s.width,g.width=o,g.minWidth=u,g.maxWidth=l)),d!==void 0?d+"":d}function ei(t,n){return{get:function(){if(t()){delete this.get;return}return(this.get=n).apply(this,arguments)}}}var ti=["Webkit","Moz","ms"],ni=H.createElement("div").style,ri={};function go(t){for(var n=t[0].toUpperCase()+t.slice(1),s=ti.length;s--;)if(t=ti[s]+n,t in ni)return t}function $n(t){var n=c.cssProps[t]||ri[t];return n||(t in ni?t:ri[t]=go(t)||t)}var mo=/^(none|table(?!-c[ea]).+)/,yo={position:"absolute",visibility:"hidden",display:"block"},ii={letterSpacing:"0",fontWeight:"400"};function si(t,n,s){var o=Pt.exec(n);return o?Math.max(0,o[2]-(s||0))+(o[3]||"px"):n}function Wn(t,n,s,o,u,l){var d=n==="width"?1:0,m=0,g=0,b=0;if(s===(o?"border":"content"))return 0;for(;d<4;d+=2)s==="margin"&&(b+=c.css(t,s+Ne[d],!0,u)),o?(s==="content"&&(g-=c.css(t,"padding"+Ne[d],!0,u)),s!=="margin"&&(g-=c.css(t,"border"+Ne[d]+"Width",!0,u))):(g+=c.css(t,"padding"+Ne[d],!0,u),s!=="padding"?g+=c.css(t,"border"+Ne[d]+"Width",!0,u):m+=c.css(t,"border"+Ne[d]+"Width",!0,u));return!o&&l>=0&&(g+=Math.max(0,Math.ceil(t["offset"+n[0].toUpperCase()+n.slice(1)]-l-g-m-.5))||0),g+b}function oi(t,n,s){var o=ln(t),u=!U.boxSizingReliable()||s,l=u&&c.css(t,"boxSizing",!1,o)==="border-box",d=l,m=Mt(t,n,o),g="offset"+n[0].toUpperCase()+n.slice(1);if(Bn.test(m)){if(!s)return m;m="auto"}return(!U.boxSizingReliable()&&l||!U.reliableTrDimensions()&&Y(t,"tr")||m==="auto"||!parseFloat(m)&&c.css(t,"display",!1,o)==="inline")&&t.getClientRects().length&&(l=c.css(t,"boxSizing",!1,o)==="border-box",d=g in t,d&&(m=t[g])),m=parseFloat(m)||0,m+Wn(t,n,s||(l?"border":"content"),d,o,m)+"px"}c.extend({cssHooks:{opacity:{get:function(t,n){if(n){var s=Mt(t,"opacity");return s===""?"1":s}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,n,s,o){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var u,l,d,m=Te(n),g=Fn.test(n),b=t.style;if(g||(n=$n(m)),d=c.cssHooks[n]||c.cssHooks[m],s!==void 0){if(l=typeof s,l==="string"&&(u=Pt.exec(s))&&u[1]&&(s=qr(t,n,u),l="number"),s==null||s!==s)return;l==="number"&&!g&&(s+=u&&u[3]||(c.cssNumber[m]?"":"px")),!U.clearCloneStyle&&s===""&&n.indexOf("background")===0&&(b[n]="inherit"),(!d||!("set"in d)||(s=d.set(t,s,o))!==void 0)&&(g?b.setProperty(n,s):b[n]=s)}else return d&&"get"in d&&(u=d.get(t,!1,o))!==void 0?u:b[n]}},css:function(t,n,s,o){var u,l,d,m=Te(n),g=Fn.test(n);return g||(n=$n(m)),d=c.cssHooks[n]||c.cssHooks[m],d&&"get"in d&&(u=d.get(t,!0,s)),u===void 0&&(u=Mt(t,n,o)),u==="normal"&&n in ii&&(u=ii[n]),s===""||s?(l=parseFloat(u),s===!0||isFinite(l)?l||0:u):u}}),c.each(["height","width"],function(t,n){c.cssHooks[n]={get:function(s,o,u){if(o)return mo.test(c.css(s,"display"))&&(!s.getClientRects().length||!s.getBoundingClientRect().width)?Zr(s,yo,function(){return oi(s,n,u)}):oi(s,n,u)},set:function(s,o,u){var l,d=ln(s),m=!U.scrollboxSize()&&d.position==="absolute",g=m||u,b=g&&c.css(s,"boxSizing",!1,d)==="border-box",I=u?Wn(s,n,u,b,d):0;return b&&m&&(I-=Math.ceil(s["offset"+n[0].toUpperCase()+n.slice(1)]-parseFloat(d[n])-Wn(s,n,"border",!1,d)-.5)),I&&(l=Pt.exec(o))&&(l[3]||"px")!=="px"&&(s.style[n]=o,o=c.css(s,n)),si(s,o,I)}}}),c.cssHooks.marginLeft=ei(U.reliableMarginLeft,function(t,n){if(n)return(parseFloat(Mt(t,"marginLeft"))||t.getBoundingClientRect().left-Zr(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),c.each({margin:"",padding:"",border:"Width"},function(t,n){c.cssHooks[t+n]={expand:function(s){for(var o=0,u={},l=typeof s=="string"?s.split(" "):[s];o<4;o++)u[t+Ne[o]+n]=l[o]||l[o-2]||l[0];return u}},t!=="margin"&&(c.cssHooks[t+n].set=si)}),c.fn.extend({css:function(t,n){return Oe(this,function(s,o,u){var l,d,m={},g=0;if(Array.isArray(o)){for(l=ln(s),d=o.length;g<d;g++)m[o[g]]=c.css(s,o[g],!1,l);return m}return u!==void 0?c.style(s,o,u):c.css(s,o)},t,n,arguments.length>1)}});function fe(t,n,s,o,u){return new fe.prototype.init(t,n,s,o,u)}c.Tween=fe,fe.prototype={constructor:fe,init:function(t,n,s,o,u,l){this.elem=t,this.prop=s,this.easing=u||c.easing._default,this.options=n,this.start=this.now=this.cur(),this.end=o,this.unit=l||(c.cssNumber[s]?"":"px")},cur:function(){var t=fe.propHooks[this.prop];return t&&t.get?t.get(this):fe.propHooks._default.get(this)},run:function(t){var n,s=fe.propHooks[this.prop];return this.options.duration?this.pos=n=c.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=n=t,this.now=(this.end-this.start)*n+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),s&&s.set?s.set(this):fe.propHooks._default.set(this),this}},fe.prototype.init.prototype=fe.prototype,fe.propHooks={_default:{get:function(t){var n;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(n=c.css(t.elem,t.prop,""),!n||n==="auto"?0:n)},set:function(t){c.fx.step[t.prop]?c.fx.step[t.prop](t):t.elem.nodeType===1&&(c.cssHooks[t.prop]||t.elem.style[$n(t.prop)]!=null)?c.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},fe.propHooks.scrollTop=fe.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},c.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},c.fx=fe.prototype.init,c.fx.step={};var bt,fn,vo=/^(?:toggle|show|hide)$/,bo=/queueHooks$/;function qn(){fn&&(H.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(qn):e.setTimeout(qn,c.fx.interval),c.fx.tick())}function ai(){return e.setTimeout(function(){bt=void 0}),bt=Date.now()}function dn(t,n){var s,o=0,u={height:t};for(n=n?1:0;o<4;o+=2-n)s=Ne[o],u["margin"+s]=u["padding"+s]=t;return n&&(u.opacity=u.width=t),u}function ci(t,n,s){for(var o,u=(ve.tweeners[n]||[]).concat(ve.tweeners["*"]),l=0,d=u.length;l<d;l++)if(o=u[l].call(s,n,t))return o}function _o(t,n,s){var o,u,l,d,m,g,b,I,C="width"in n||"height"in n,w=this,k={},B=t.style,K=t.nodeType&&cn(t),W=P.get(t,"fxshow");s.queue||(d=c._queueHooks(t,"fx"),d.unqueued==null&&(d.unqueued=0,m=d.empty.fire,d.empty.fire=function(){d.unqueued||m()}),d.unqueued++,w.always(function(){w.always(function(){d.unqueued--,c.queue(t,"fx").length||d.empty.fire()})}));for(o in n)if(u=n[o],vo.test(u)){if(delete n[o],l=l||u==="toggle",u===(K?"hide":"show"))if(u==="show"&&W&&W[o]!==void 0)K=!0;else continue;k[o]=W&&W[o]||c.style(t,o)}if(g=!c.isEmptyObject(n),!(!g&&c.isEmptyObject(k))){C&&t.nodeType===1&&(s.overflow=[B.overflow,B.overflowX,B.overflowY],b=W&&W.display,b==null&&(b=P.get(t,"display")),I=c.css(t,"display"),I==="none"&&(b?I=b:(gt([t],!0),b=t.style.display||b,I=c.css(t,"display"),gt([t]))),(I==="inline"||I==="inline-block"&&b!=null)&&c.css(t,"float")==="none"&&(g||(w.done(function(){B.display=b}),b==null&&(I=B.display,b=I==="none"?"":I)),B.display="inline-block")),s.overflow&&(B.overflow="hidden",w.always(function(){B.overflow=s.overflow[0],B.overflowX=s.overflow[1],B.overflowY=s.overflow[2]})),g=!1;for(o in k)g||(W?"hidden"in W&&(K=W.hidden):W=P.access(t,"fxshow",{display:b}),l&&(W.hidden=!K),K&&gt([t],!0),w.done(function(){K||gt([t]),P.remove(t,"fxshow");for(o in k)c.style(t,o,k[o])})),g=ci(K?W[o]:0,o,w),o in W||(W[o]=g.start,K&&(g.end=g.start,g.start=0))}}function wo(t,n){var s,o,u,l,d;for(s in t)if(o=Te(s),u=n[o],l=t[s],Array.isArray(l)&&(u=l[1],l=t[s]=l[0]),s!==o&&(t[o]=l,delete t[s]),d=c.cssHooks[o],d&&"expand"in d){l=d.expand(l),delete t[o];for(s in l)s in t||(t[s]=l[s],n[s]=u)}else n[o]=u}function ve(t,n,s){var o,u,l=0,d=ve.prefilters.length,m=c.Deferred().always(function(){delete g.elem}),g=function(){if(u)return!1;for(var C=bt||ai(),w=Math.max(0,b.startTime+b.duration-C),k=w/b.duration||0,B=1-k,K=0,W=b.tweens.length;K<W;K++)b.tweens[K].run(B);return m.notifyWith(t,[b,B,w]),B<1&&W?w:(W||m.notifyWith(t,[b,1,0]),m.resolveWith(t,[b]),!1)},b=m.promise({elem:t,props:c.extend({},n),opts:c.extend(!0,{specialEasing:{},easing:c.easing._default},s),originalProperties:n,originalOptions:s,startTime:bt||ai(),duration:s.duration,tweens:[],createTween:function(C,w){var k=c.Tween(t,b.opts,C,w,b.opts.specialEasing[C]||b.opts.easing);return b.tweens.push(k),k},stop:function(C){var w=0,k=C?b.tweens.length:0;if(u)return this;for(u=!0;w<k;w++)b.tweens[w].run(1);return C?(m.notifyWith(t,[b,1,0]),m.resolveWith(t,[b,C])):m.rejectWith(t,[b,C]),this}}),I=b.props;for(wo(I,b.opts.specialEasing);l<d;l++)if(o=ve.prefilters[l].call(b,t,I,b.opts),o)return $(o.stop)&&(c._queueHooks(b.elem,b.opts.queue).stop=o.stop.bind(o)),o;return c.map(I,ci,b),$(b.opts.start)&&b.opts.start.call(t,b),b.progress(b.opts.progress).done(b.opts.done,b.opts.complete).fail(b.opts.fail).always(b.opts.always),c.fx.timer(c.extend(g,{elem:t,anim:b,queue:b.opts.queue})),b}c.Animation=c.extend(ve,{tweeners:{"*":[function(t,n){var s=this.createTween(t,n);return qr(s.elem,t,Pt.exec(n),s),s}]},tweener:function(t,n){$(t)?(n=t,t=["*"]):t=t.match(we);for(var s,o=0,u=t.length;o<u;o++)s=t[o],ve.tweeners[s]=ve.tweeners[s]||[],ve.tweeners[s].unshift(n)},prefilters:[_o],prefilter:function(t,n){n?ve.prefilters.unshift(t):ve.prefilters.push(t)}}),c.speed=function(t,n,s){var o=t&&typeof t=="object"?c.extend({},t):{complete:s||!s&&n||$(t)&&t,duration:t,easing:s&&n||n&&!$(n)&&n};return c.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in c.fx.speeds?o.duration=c.fx.speeds[o.duration]:o.duration=c.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){$(o.old)&&o.old.call(this),o.queue&&c.dequeue(this,o.queue)},o},c.fn.extend({fadeTo:function(t,n,s,o){return this.filter(cn).css("opacity",0).show().end().animate({opacity:n},t,s,o)},animate:function(t,n,s,o){var u=c.isEmptyObject(t),l=c.speed(n,s,o),d=function(){var m=ve(this,c.extend({},t),l);(u||P.get(this,"finish"))&&m.stop(!0)};return d.finish=d,u||l.queue===!1?this.each(d):this.queue(l.queue,d)},stop:function(t,n,s){var o=function(u){var l=u.stop;delete u.stop,l(s)};return typeof t!="string"&&(s=n,n=t,t=void 0),n&&this.queue(t||"fx",[]),this.each(function(){var u=!0,l=t!=null&&t+"queueHooks",d=c.timers,m=P.get(this);if(l)m[l]&&m[l].stop&&o(m[l]);else for(l in m)m[l]&&m[l].stop&&bo.test(l)&&o(m[l]);for(l=d.length;l--;)d[l].elem===this&&(t==null||d[l].queue===t)&&(d[l].anim.stop(s),u=!1,d.splice(l,1));(u||!s)&&c.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var n,s=P.get(this),o=s[t+"queue"],u=s[t+"queueHooks"],l=c.timers,d=o?o.length:0;for(s.finish=!0,c.queue(this,t,[]),u&&u.stop&&u.stop.call(this,!0),n=l.length;n--;)l[n].elem===this&&l[n].queue===t&&(l[n].anim.stop(!0),l.splice(n,1));for(n=0;n<d;n++)o[n]&&o[n].finish&&o[n].finish.call(this);delete s.finish})}}),c.each(["toggle","show","hide"],function(t,n){var s=c.fn[n];c.fn[n]=function(o,u,l){return o==null||typeof o=="boolean"?s.apply(this,arguments):this.animate(dn(n,!0),o,u,l)}}),c.each({slideDown:dn("show"),slideUp:dn("hide"),slideToggle:dn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,n){c.fn[t]=function(s,o,u){return this.animate(n,s,o,u)}}),c.timers=[],c.fx.tick=function(){var t,n=0,s=c.timers;for(bt=Date.now();n<s.length;n++)t=s[n],!t()&&s[n]===t&&s.splice(n--,1);s.length||c.fx.stop(),bt=void 0},c.fx.timer=function(t){c.timers.push(t),c.fx.start()},c.fx.interval=13,c.fx.start=function(){fn||(fn=!0,qn())},c.fx.stop=function(){fn=null},c.fx.speeds={slow:600,fast:200,_default:400},c.fn.delay=function(t,n){return t=c.fx&&c.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(s,o){var u=e.setTimeout(s,t);o.stop=function(){e.clearTimeout(u)}})},function(){var t=H.createElement("input"),n=H.createElement("select"),s=n.appendChild(H.createElement("option"));t.type="checkbox",U.checkOn=t.value!=="",U.optSelected=s.selected,t=H.createElement("input"),t.value="t",t.type="radio",U.radioValue=t.value==="t"}();var ui,Ut=c.expr.attrHandle;c.fn.extend({attr:function(t,n){return Oe(this,c.attr,t,n,arguments.length>1)},removeAttr:function(t){return this.each(function(){c.removeAttr(this,t)})}}),c.extend({attr:function(t,n,s){var o,u,l=t.nodeType;if(!(l===3||l===8||l===2)){if(typeof t.getAttribute>"u")return c.prop(t,n,s);if((l!==1||!c.isXMLDoc(t))&&(u=c.attrHooks[n.toLowerCase()]||(c.expr.match.bool.test(n)?ui:void 0)),s!==void 0){if(s===null){c.removeAttr(t,n);return}return u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:(t.setAttribute(n,s+""),s)}return u&&"get"in u&&(o=u.get(t,n))!==null?o:(o=c.find.attr(t,n),o??void 0)}},attrHooks:{type:{set:function(t,n){if(!U.radioValue&&n==="radio"&&Y(t,"input")){var s=t.value;return t.setAttribute("type",n),s&&(t.value=s),n}}}},removeAttr:function(t,n){var s,o=0,u=n&&n.match(we);if(u&&t.nodeType===1)for(;s=u[o++];)t.removeAttribute(s)}}),ui={set:function(t,n,s){return n===!1?c.removeAttr(t,s):t.setAttribute(s,s),s}},c.each(c.expr.match.bool.source.match(/\w+/g),function(t,n){var s=Ut[n]||c.find.attr;Ut[n]=function(o,u,l){var d,m,g=u.toLowerCase();return l||(m=Ut[g],Ut[g]=d,d=s(o,u,l)!=null?g:null,Ut[g]=m),d}});var To=/^(?:input|select|textarea|button)$/i,Io=/^(?:a|area)$/i;c.fn.extend({prop:function(t,n){return Oe(this,c.prop,t,n,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[c.propFix[t]||t]})}}),c.extend({prop:function(t,n,s){var o,u,l=t.nodeType;if(!(l===3||l===8||l===2))return(l!==1||!c.isXMLDoc(t))&&(n=c.propFix[n]||n,u=c.propHooks[n]),s!==void 0?u&&"set"in u&&(o=u.set(t,s,n))!==void 0?o:t[n]=s:u&&"get"in u&&(o=u.get(t,n))!==null?o:t[n]},propHooks:{tabIndex:{get:function(t){var n=c.find.attr(t,"tabindex");return n?parseInt(n,10):To.test(t.nodeName)||Io.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),U.optSelected||(c.propHooks.selected={get:function(t){var n=t.parentNode;return n&&n.parentNode&&n.parentNode.selectedIndex,null},set:function(t){var n=t.parentNode;n&&(n.selectedIndex,n.parentNode&&n.parentNode.selectedIndex)}}),c.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){c.propFix[this.toLowerCase()]=this});function Ze(t){var n=t.match(we)||[];return n.join(" ")}function et(t){return t.getAttribute&&t.getAttribute("class")||""}function Vn(t){return Array.isArray(t)?t:typeof t=="string"?t.match(we)||[]:[]}c.fn.extend({addClass:function(t){var n,s,o,u,l,d;return $(t)?this.each(function(m){c(this).addClass(t.call(this,m,et(this)))}):(n=Vn(t),n.length?this.each(function(){if(o=et(this),s=this.nodeType===1&&" "+Ze(o)+" ",s){for(l=0;l<n.length;l++)u=n[l],s.indexOf(" "+u+" ")<0&&(s+=u+" ");d=Ze(s),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(t){var n,s,o,u,l,d;return $(t)?this.each(function(m){c(this).removeClass(t.call(this,m,et(this)))}):arguments.length?(n=Vn(t),n.length?this.each(function(){if(o=et(this),s=this.nodeType===1&&" "+Ze(o)+" ",s){for(l=0;l<n.length;l++)for(u=n[l];s.indexOf(" "+u+" ")>-1;)s=s.replace(" "+u+" "," ");d=Ze(s),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(t,n){var s,o,u,l,d=typeof t,m=d==="string"||Array.isArray(t);return $(t)?this.each(function(g){c(this).toggleClass(t.call(this,g,et(this),n),n)}):typeof n=="boolean"&&m?n?this.addClass(t):this.removeClass(t):(s=Vn(t),this.each(function(){if(m)for(l=c(this),u=0;u<s.length;u++)o=s[u],l.hasClass(o)?l.removeClass(o):l.addClass(o);else(t===void 0||d==="boolean")&&(o=et(this),o&&P.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||t===!1?"":P.get(this,"__className__")||""))}))},hasClass:function(t){var n,s,o=0;for(n=" "+t+" ";s=this[o++];)if(s.nodeType===1&&(" "+Ze(et(s))+" ").indexOf(n)>-1)return!0;return!1}});var Eo=/\r/g;c.fn.extend({val:function(t){var n,s,o,u=this[0];return arguments.length?(o=$(t),this.each(function(l){var d;this.nodeType===1&&(o?d=t.call(this,l,c(this).val()):d=t,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=c.map(d,function(m){return m==null?"":m+""})),n=c.valHooks[this.type]||c.valHooks[this.nodeName.toLowerCase()],(!n||!("set"in n)||n.set(this,d,"value")===void 0)&&(this.value=d))})):u?(n=c.valHooks[u.type]||c.valHooks[u.nodeName.toLowerCase()],n&&"get"in n&&(s=n.get(u,"value"))!==void 0?s:(s=u.value,typeof s=="string"?s.replace(Eo,""):s??"")):void 0}}),c.extend({valHooks:{option:{get:function(t){var n=c.find.attr(t,"value");return n??Ze(c.text(t))}},select:{get:function(t){var n,s,o,u=t.options,l=t.selectedIndex,d=t.type==="select-one",m=d?null:[],g=d?l+1:u.length;for(l<0?o=g:o=d?l:0;o<g;o++)if(s=u[o],(s.selected||o===l)&&!s.disabled&&(!s.parentNode.disabled||!Y(s.parentNode,"optgroup"))){if(n=c(s).val(),d)return n;m.push(n)}return m},set:function(t,n){for(var s,o,u=t.options,l=c.makeArray(n),d=u.length;d--;)o=u[d],(o.selected=c.inArray(c.valHooks.option.get(o),l)>-1)&&(s=!0);return s||(t.selectedIndex=-1),l}}}}),c.each(["radio","checkbox"],function(){c.valHooks[this]={set:function(t,n){if(Array.isArray(n))return t.checked=c.inArray(c(t).val(),n)>-1}},U.checkOn||(c.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var jt=e.location,li={guid:Date.now()},zn=/\?/;c.parseXML=function(t){var n,s;if(!t||typeof t!="string")return null;try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch{}return s=n&&n.getElementsByTagName("parsererror")[0],(!n||s)&&c.error("Invalid XML: "+(s?c.map(s.childNodes,function(o){return o.textContent}).join(`
`):t)),n};var fi=/^(?:focusinfocus|focusoutblur)$/,di=function(t){t.stopPropagation()};c.extend(c.event,{trigger:function(t,n,s,o){var u,l,d,m,g,b,I,C,w=[s||H],k=X.call(t,"type")?t.type:t,B=X.call(t,"namespace")?t.namespace.split("."):[];if(l=C=d=s=s||H,!(s.nodeType===3||s.nodeType===8)&&!fi.test(k+c.event.triggered)&&(k.indexOf(".")>-1&&(B=k.split("."),k=B.shift(),B.sort()),g=k.indexOf(":")<0&&"on"+k,t=t[c.expando]?t:new c.Event(k,typeof t=="object"&&t),t.isTrigger=o?2:3,t.namespace=B.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+B.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=s),n=n==null?[t]:c.makeArray(n,[t]),I=c.event.special[k]||{},!(!o&&I.trigger&&I.trigger.apply(s,n)===!1))){if(!o&&!I.noBubble&&!_e(s)){for(m=I.delegateType||k,fi.test(m+k)||(l=l.parentNode);l;l=l.parentNode)w.push(l),d=l;d===(s.ownerDocument||H)&&w.push(d.defaultView||d.parentWindow||e)}for(u=0;(l=w[u++])&&!t.isPropagationStopped();)C=l,t.type=u>1?m:I.bindType||k,b=(P.get(l,"events")||Object.create(null))[t.type]&&P.get(l,"handle"),b&&b.apply(l,n),b=g&&l[g],b&&b.apply&&Ot(l)&&(t.result=b.apply(l,n),t.result===!1&&t.preventDefault());return t.type=k,!o&&!t.isDefaultPrevented()&&(!I._default||I._default.apply(w.pop(),n)===!1)&&Ot(s)&&g&&$(s[k])&&!_e(s)&&(d=s[g],d&&(s[g]=null),c.event.triggered=k,t.isPropagationStopped()&&C.addEventListener(k,di),s[k](),t.isPropagationStopped()&&C.removeEventListener(k,di),c.event.triggered=void 0,d&&(s[g]=d)),t.result}},simulate:function(t,n,s){var o=c.extend(new c.Event,s,{type:t,isSimulated:!0});c.event.trigger(o,null,n)}}),c.fn.extend({trigger:function(t,n){return this.each(function(){c.event.trigger(t,n,this)})},triggerHandler:function(t,n){var s=this[0];if(s)return c.event.trigger(t,n,s,!0)}});var Co=/\[\]$/,hi=/\r?\n/g,So=/^(?:submit|button|image|reset|file)$/i,Ao=/^(?:input|select|textarea|keygen)/i;function Gn(t,n,s,o){var u;if(Array.isArray(n))c.each(n,function(l,d){s||Co.test(t)?o(t,d):Gn(t+"["+(typeof d=="object"&&d!=null?l:"")+"]",d,s,o)});else if(!s&&xe(n)==="object")for(u in n)Gn(t+"["+u+"]",n[u],s,o);else o(t,n)}c.param=function(t,n){var s,o=[],u=function(l,d){var m=$(d)?d():d;o[o.length]=encodeURIComponent(l)+"="+encodeURIComponent(m??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!c.isPlainObject(t))c.each(t,function(){u(this.name,this.value)});else for(s in t)Gn(s,t[s],n,u);return o.join("&")},c.fn.extend({serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=c.prop(this,"elements");return t?c.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!c(this).is(":disabled")&&Ao.test(this.nodeName)&&!So.test(t)&&(this.checked||!Lt.test(t))}).map(function(t,n){var s=c(this).val();return s==null?null:Array.isArray(s)?c.map(s,function(o){return{name:n.name,value:o.replace(hi,`\r
`)}}):{name:n.name,value:s.replace(hi,`\r
`)}}).get()}});var ko=/%20/g,Ro=/#.*$/,xo=/([?&])_=[^&]*/,Do=/^(.*?):[ \t]*([^\r\n]*)$/mg,Oo=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,No=/^(?:GET|HEAD)$/,Po=/^\/\//,pi={},Kn={},gi="*/".concat("*"),Jn=H.createElement("a");Jn.href=jt.href;function mi(t){return function(n,s){typeof n!="string"&&(s=n,n="*");var o,u=0,l=n.toLowerCase().match(we)||[];if($(s))for(;o=l[u++];)o[0]==="+"?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(s)):(t[o]=t[o]||[]).push(s)}}function yi(t,n,s,o){var u={},l=t===Kn;function d(m){var g;return u[m]=!0,c.each(t[m]||[],function(b,I){var C=I(n,s,o);if(typeof C=="string"&&!l&&!u[C])return n.dataTypes.unshift(C),d(C),!1;if(l)return!(g=C)}),g}return d(n.dataTypes[0])||!u["*"]&&d("*")}function Xn(t,n){var s,o,u=c.ajaxSettings.flatOptions||{};for(s in n)n[s]!==void 0&&((u[s]?t:o||(o={}))[s]=n[s]);return o&&c.extend(!0,t,o),t}function Lo(t,n,s){for(var o,u,l,d,m=t.contents,g=t.dataTypes;g[0]==="*";)g.shift(),o===void 0&&(o=t.mimeType||n.getResponseHeader("Content-Type"));if(o){for(u in m)if(m[u]&&m[u].test(o)){g.unshift(u);break}}if(g[0]in s)l=g[0];else{for(u in s){if(!g[0]||t.converters[u+" "+g[0]]){l=u;break}d||(d=u)}l=l||d}if(l)return l!==g[0]&&g.unshift(l),s[l]}function Mo(t,n,s,o){var u,l,d,m,g,b={},I=t.dataTypes.slice();if(I[1])for(d in t.converters)b[d.toLowerCase()]=t.converters[d];for(l=I.shift();l;)if(t.responseFields[l]&&(s[t.responseFields[l]]=n),!g&&o&&t.dataFilter&&(n=t.dataFilter(n,t.dataType)),g=l,l=I.shift(),l){if(l==="*")l=g;else if(g!=="*"&&g!==l){if(d=b[g+" "+l]||b["* "+l],!d){for(u in b)if(m=u.split(" "),m[1]===l&&(d=b[g+" "+m[0]]||b["* "+m[0]],d)){d===!0?d=b[u]:b[u]!==!0&&(l=m[0],I.unshift(m[1]));break}}if(d!==!0)if(d&&t.throws)n=d(n);else try{n=d(n)}catch(C){return{state:"parsererror",error:d?C:"No conversion from "+g+" to "+l}}}}return{state:"success",data:n}}c.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jt.href,type:"GET",isLocal:Oo.test(jt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":gi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":c.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,n){return n?Xn(Xn(t,c.ajaxSettings),n):Xn(c.ajaxSettings,t)},ajaxPrefilter:mi(pi),ajaxTransport:mi(Kn),ajax:function(t,n){typeof t=="object"&&(n=t,t=void 0),n=n||{};var s,o,u,l,d,m,g,b,I,C,w=c.ajaxSetup({},n),k=w.context||w,B=w.context&&(k.nodeType||k.jquery)?c(k):c.event,K=c.Deferred(),W=c.Callbacks("once memory"),se=w.statusCode||{},re={},Ie={},Ee="canceled",G={readyState:0,getResponseHeader:function(J){var ne;if(g){if(!l)for(l={};ne=Do.exec(u);)l[ne[1].toLowerCase()+" "]=(l[ne[1].toLowerCase()+" "]||[]).concat(ne[2]);ne=l[J.toLowerCase()+" "]}return ne==null?null:ne.join(", ")},getAllResponseHeaders:function(){return g?u:null},setRequestHeader:function(J,ne){return g==null&&(J=Ie[J.toLowerCase()]=Ie[J.toLowerCase()]||J,re[J]=ne),this},overrideMimeType:function(J){return g==null&&(w.mimeType=J),this},statusCode:function(J){var ne;if(J)if(g)G.always(J[G.status]);else for(ne in J)se[ne]=[se[ne],J[ne]];return this},abort:function(J){var ne=J||Ee;return s&&s.abort(ne),tt(0,ne),this}};if(K.promise(G),w.url=((t||w.url||jt.href)+"").replace(Po,jt.protocol+"//"),w.type=n.method||n.type||w.method||w.type,w.dataTypes=(w.dataType||"*").toLowerCase().match(we)||[""],w.crossDomain==null){m=H.createElement("a");try{m.href=w.url,m.href=m.href,w.crossDomain=Jn.protocol+"//"+Jn.host!=m.protocol+"//"+m.host}catch{w.crossDomain=!0}}if(w.data&&w.processData&&typeof w.data!="string"&&(w.data=c.param(w.data,w.traditional)),yi(pi,w,n,G),g)return G;b=c.event&&w.global,b&&c.active++===0&&c.event.trigger("ajaxStart"),w.type=w.type.toUpperCase(),w.hasContent=!No.test(w.type),o=w.url.replace(Ro,""),w.hasContent?w.data&&w.processData&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(w.data=w.data.replace(ko,"+")):(C=w.url.slice(o.length),w.data&&(w.processData||typeof w.data=="string")&&(o+=(zn.test(o)?"&":"?")+w.data,delete w.data),w.cache===!1&&(o=o.replace(xo,"$1"),C=(zn.test(o)?"&":"?")+"_="+li.guid+++C),w.url=o+C),w.ifModified&&(c.lastModified[o]&&G.setRequestHeader("If-Modified-Since",c.lastModified[o]),c.etag[o]&&G.setRequestHeader("If-None-Match",c.etag[o])),(w.data&&w.hasContent&&w.contentType!==!1||n.contentType)&&G.setRequestHeader("Content-Type",w.contentType),G.setRequestHeader("Accept",w.dataTypes[0]&&w.accepts[w.dataTypes[0]]?w.accepts[w.dataTypes[0]]+(w.dataTypes[0]!=="*"?", "+gi+"; q=0.01":""):w.accepts["*"]);for(I in w.headers)G.setRequestHeader(I,w.headers[I]);if(w.beforeSend&&(w.beforeSend.call(k,G,w)===!1||g))return G.abort();if(Ee="abort",W.add(w.complete),G.done(w.success),G.fail(w.error),s=yi(Kn,w,n,G),!s)tt(-1,"No Transport");else{if(G.readyState=1,b&&B.trigger("ajaxSend",[G,w]),g)return G;w.async&&w.timeout>0&&(d=e.setTimeout(function(){G.abort("timeout")},w.timeout));try{g=!1,s.send(re,tt)}catch(J){if(g)throw J;tt(-1,J)}}function tt(J,ne,Bt,Qn){var Ce,Ft,Se,He,Be,pe=ne;g||(g=!0,d&&e.clearTimeout(d),s=void 0,u=Qn||"",G.readyState=J>0?4:0,Ce=J>=200&&J<300||J===304,Bt&&(He=Lo(w,G,Bt)),!Ce&&c.inArray("script",w.dataTypes)>-1&&c.inArray("json",w.dataTypes)<0&&(w.converters["text script"]=function(){}),He=Mo(w,He,G,Ce),Ce?(w.ifModified&&(Be=G.getResponseHeader("Last-Modified"),Be&&(c.lastModified[o]=Be),Be=G.getResponseHeader("etag"),Be&&(c.etag[o]=Be)),J===204||w.type==="HEAD"?pe="nocontent":J===304?pe="notmodified":(pe=He.state,Ft=He.data,Se=He.error,Ce=!Se)):(Se=pe,(J||!pe)&&(pe="error",J<0&&(J=0))),G.status=J,G.statusText=(ne||pe)+"",Ce?K.resolveWith(k,[Ft,pe,G]):K.rejectWith(k,[G,pe,Se]),G.statusCode(se),se=void 0,b&&B.trigger(Ce?"ajaxSuccess":"ajaxError",[G,w,Ce?Ft:Se]),W.fireWith(k,[G,pe]),b&&(B.trigger("ajaxComplete",[G,w]),--c.active||c.event.trigger("ajaxStop")))}return G},getJSON:function(t,n,s){return c.get(t,n,s,"json")},getScript:function(t,n){return c.get(t,void 0,n,"script")}}),c.each(["get","post"],function(t,n){c[n]=function(s,o,u,l){return $(o)&&(l=l||u,u=o,o=void 0),c.ajax(c.extend({url:s,type:n,dataType:l,data:o,success:u},c.isPlainObject(s)&&s))}}),c.ajaxPrefilter(function(t){var n;for(n in t.headers)n.toLowerCase()==="content-type"&&(t.contentType=t.headers[n]||"")}),c._evalUrl=function(t,n,s){return c.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){c.globalEval(o,n,s)}})},c.fn.extend({wrapAll:function(t){var n;return this[0]&&($(t)&&(t=t.call(this[0])),n=c(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&n.insertBefore(this[0]),n.map(function(){for(var s=this;s.firstElementChild;)s=s.firstElementChild;return s}).append(this)),this},wrapInner:function(t){return $(t)?this.each(function(n){c(this).wrapInner(t.call(this,n))}):this.each(function(){var n=c(this),s=n.contents();s.length?s.wrapAll(t):n.append(t)})},wrap:function(t){var n=$(t);return this.each(function(s){c(this).wrapAll(n?t.call(this,s):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){c(this).replaceWith(this.childNodes)}),this}}),c.expr.pseudos.hidden=function(t){return!c.expr.pseudos.visible(t)},c.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},c.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Uo={0:200,1223:204},Ht=c.ajaxSettings.xhr();U.cors=!!Ht&&"withCredentials"in Ht,U.ajax=Ht=!!Ht,c.ajaxTransport(function(t){var n,s;if(U.cors||Ht&&!t.crossDomain)return{send:function(o,u){var l,d=t.xhr();if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(l in t.xhrFields)d[l]=t.xhrFields[l];t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),!t.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(l in o)d.setRequestHeader(l,o[l]);n=function(m){return function(){n&&(n=s=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,m==="abort"?d.abort():m==="error"?typeof d.status!="number"?u(0,"error"):u(d.status,d.statusText):u(Uo[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=n(),s=d.onerror=d.ontimeout=n("error"),d.onabort!==void 0?d.onabort=s:d.onreadystatechange=function(){d.readyState===4&&e.setTimeout(function(){n&&s()})},n=n("abort");try{d.send(t.hasContent&&t.data||null)}catch(m){if(n)throw m}},abort:function(){n&&n()}}}),c.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),c.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return c.globalEval(t),t}}}),c.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),c.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var n,s;return{send:function(o,u){n=c("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",s=function(l){n.remove(),s=null,l&&u(l.type==="error"?404:200,l.type)}),H.head.appendChild(n[0])},abort:function(){s&&s()}}}});var vi=[],Yn=/(=)\?(?=&|$)|\?\?/;c.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=vi.pop()||c.expando+"_"+li.guid++;return this[t]=!0,t}}),c.ajaxPrefilter("json jsonp",function(t,n,s){var o,u,l,d=t.jsonp!==!1&&(Yn.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Yn.test(t.data)&&"data");if(d||t.dataTypes[0]==="jsonp")return o=t.jsonpCallback=$(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,d?t[d]=t[d].replace(Yn,"$1"+o):t.jsonp!==!1&&(t.url+=(zn.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return l||c.error(o+" was not called"),l[0]},t.dataTypes[0]="json",u=e[o],e[o]=function(){l=arguments},s.always(function(){u===void 0?c(e).removeProp(o):e[o]=u,t[o]&&(t.jsonpCallback=n.jsonpCallback,vi.push(o)),l&&$(u)&&u(l[0]),l=u=void 0}),"script"}),U.createHTMLDocument=function(){var t=H.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2}(),c.parseHTML=function(t,n,s){if(typeof t!="string")return[];typeof n=="boolean"&&(s=n,n=!1);var o,u,l;return n||(U.createHTMLDocument?(n=H.implementation.createHTMLDocument(""),o=n.createElement("base"),o.href=H.location.href,n.head.appendChild(o)):n=H),u=jr.exec(t),l=!s&&[],u?[n.createElement(u[1])]:(u=Kr([t],n,l),l&&l.length&&c(l).remove(),c.merge([],u.childNodes))},c.fn.load=function(t,n,s){var o,u,l,d=this,m=t.indexOf(" ");return m>-1&&(o=Ze(t.slice(m)),t=t.slice(0,m)),$(n)?(s=n,n=void 0):n&&typeof n=="object"&&(u="POST"),d.length>0&&c.ajax({url:t,type:u||"GET",dataType:"html",data:n}).done(function(g){l=arguments,d.html(o?c("<div>").append(c.parseHTML(g)).find(o):g)}).always(s&&function(g,b){d.each(function(){s.apply(this,l||[g.responseText,b,g])})}),this},c.expr.pseudos.animated=function(t){return c.grep(c.timers,function(n){return t===n.elem}).length},c.offset={setOffset:function(t,n,s){var o,u,l,d,m,g,b,I=c.css(t,"position"),C=c(t),w={};I==="static"&&(t.style.position="relative"),m=C.offset(),l=c.css(t,"top"),g=c.css(t,"left"),b=(I==="absolute"||I==="fixed")&&(l+g).indexOf("auto")>-1,b?(o=C.position(),d=o.top,u=o.left):(d=parseFloat(l)||0,u=parseFloat(g)||0),$(n)&&(n=n.call(t,s,c.extend({},m))),n.top!=null&&(w.top=n.top-m.top+d),n.left!=null&&(w.left=n.left-m.left+u),"using"in n?n.using.call(t,w):C.css(w)}},c.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(u){c.offset.setOffset(this,t,u)});var n,s,o=this[0];if(o)return o.getClientRects().length?(n=o.getBoundingClientRect(),s=o.ownerDocument.defaultView,{top:n.top+s.pageYOffset,left:n.left+s.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,n,s,o=this[0],u={top:0,left:0};if(c.css(o,"position")==="fixed")n=o.getBoundingClientRect();else{for(n=this.offset(),s=o.ownerDocument,t=o.offsetParent||s.documentElement;t&&(t===s.body||t===s.documentElement)&&c.css(t,"position")==="static";)t=t.parentNode;t&&t!==o&&t.nodeType===1&&(u=c(t).offset(),u.top+=c.css(t,"borderTopWidth",!0),u.left+=c.css(t,"borderLeftWidth",!0))}return{top:n.top-u.top-c.css(o,"marginTop",!0),left:n.left-u.left-c.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&c.css(t,"position")==="static";)t=t.offsetParent;return t||Qe})}}),c.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var s=n==="pageYOffset";c.fn[t]=function(o){return Oe(this,function(u,l,d){var m;if(_e(u)?m=u:u.nodeType===9&&(m=u.defaultView),d===void 0)return m?m[n]:u[l];m?m.scrollTo(s?m.pageXOffset:d,s?d:m.pageYOffset):u[l]=d},t,o,arguments.length)}}),c.each(["top","left"],function(t,n){c.cssHooks[n]=ei(U.pixelPosition,function(s,o){if(o)return o=Mt(s,n),Bn.test(o)?c(s).position()[n]+"px":o})}),c.each({Height:"height",Width:"width"},function(t,n){c.each({padding:"inner"+t,content:n,"":"outer"+t},function(s,o){c.fn[o]=function(u,l){var d=arguments.length&&(s||typeof u!="boolean"),m=s||(u===!0||l===!0?"margin":"border");return Oe(this,function(g,b,I){var C;return _e(g)?o.indexOf("outer")===0?g["inner"+t]:g.document.documentElement["client"+t]:g.nodeType===9?(C=g.documentElement,Math.max(g.body["scroll"+t],C["scroll"+t],g.body["offset"+t],C["offset"+t],C["client"+t])):I===void 0?c.css(g,b,m):c.style(g,b,I,m)},n,d?u:void 0,d)}})}),c.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,n){c.fn[n]=function(s){return this.on(n,s)}}),c.fn.extend({bind:function(t,n,s){return this.on(t,null,n,s)},unbind:function(t,n){return this.off(t,null,n)},delegate:function(t,n,s,o){return this.on(n,t,s,o)},undelegate:function(t,n,s){return arguments.length===1?this.off(t,"**"):this.off(n,t||"**",s)},hover:function(t,n){return this.on("mouseenter",t).on("mouseleave",n||t)}}),c.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,n){c.fn[n]=function(s,o){return arguments.length>0?this.on(n,null,s,o):this.trigger(n)}});var jo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;c.proxy=function(t,n){var s,o,u;if(typeof n=="string"&&(s=t[n],n=t,t=s),!!$(t))return o=h.call(arguments,2),u=function(){return t.apply(n||this,o.concat(h.call(arguments)))},u.guid=t.guid=t.guid||c.guid++,u},c.holdReady=function(t){t?c.readyWait++:c.ready(!0)},c.isArray=Array.isArray,c.parseJSON=JSON.parse,c.nodeName=Y,c.isFunction=$,c.isWindow=_e,c.camelCase=Te,c.type=xe,c.now=Date.now,c.isNumeric=function(t){var n=c.type(t);return(n==="number"||n==="string")&&!isNaN(t-parseFloat(t))},c.trim=function(t){return t==null?"":(t+"").replace(jo,"$1")};var Ho=e.jQuery,Bo=e.$;return c.noConflict=function(t){return e.$===c&&(e.$=Bo),t&&e.jQuery===c&&(e.jQuery=Ho),c},typeof r>"u"&&(e.jQuery=e.$=c),c})}(sr)),sr.exports}var Yo=Xo();const yn=Jo(Yo);var Ii={};/**
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
 */const Ji=function(i){const e=[];let r=0;for(let a=0;a<i.length;a++){let f=i.charCodeAt(a);f<128?e[r++]=f:f<2048?(e[r++]=f>>6|192,e[r++]=f&63|128):(f&64512)===55296&&a+1<i.length&&(i.charCodeAt(a+1)&64512)===56320?(f=65536+((f&1023)<<10)+(i.charCodeAt(++a)&1023),e[r++]=f>>18|240,e[r++]=f>>12&63|128,e[r++]=f>>6&63|128,e[r++]=f&63|128):(e[r++]=f>>12|224,e[r++]=f>>6&63|128,e[r++]=f&63|128)}return e},Qo=function(i){const e=[];let r=0,a=0;for(;r<i.length;){const f=i[r++];if(f<128)e[a++]=String.fromCharCode(f);else if(f>191&&f<224){const h=i[r++];e[a++]=String.fromCharCode((f&31)<<6|h&63)}else if(f>239&&f<365){const h=i[r++],v=i[r++],S=i[r++],A=((f&7)<<18|(h&63)<<12|(v&63)<<6|S&63)-65536;e[a++]=String.fromCharCode(55296+(A>>10)),e[a++]=String.fromCharCode(56320+(A&1023))}else{const h=i[r++],v=i[r++];e[a++]=String.fromCharCode((f&15)<<12|(h&63)<<6|v&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let f=0;f<i.length;f+=3){const h=i[f],v=f+1<i.length,S=v?i[f+1]:0,A=f+2<i.length,x=A?i[f+2]:0,q=h>>2,X=(h&3)<<4|S>>4;let ie=(S&15)<<2|x>>6,ye=x&63;A||(ye=64,v||(ie=64)),a.push(r[q],r[X],r[ie],r[ye])}return a.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ji(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):Qo(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let f=0;f<i.length;){const h=r[i.charAt(f++)],S=f<i.length?r[i.charAt(f)]:0;++f;const x=f<i.length?r[i.charAt(f)]:64;++f;const X=f<i.length?r[i.charAt(f)]:64;if(++f,h==null||S==null||x==null||X==null)throw new Zo;const ie=h<<2|S>>4;if(a.push(ie),x!==64){const ye=S<<4&240|x>>2;if(a.push(ye),X!==64){const U=x<<6&192|X;a.push(U)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Zo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ea=function(i){const e=Ji(i);return Xi.encodeByteArray(e,!0)},In=function(i){return ea(i).replace(/\./g,"")},Yi=function(i){try{return Xi.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const na=()=>ta().__FIREBASE_DEFAULTS__,ra=()=>{if(typeof process>"u"||typeof Ii>"u")return;const i=Ii.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ia=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Yi(i[1]);return e&&JSON.parse(e)},Er=()=>{try{return na()||ra()||ia()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Qi=i=>{var e,r;return(r=(e=Er())===null||e===void 0?void 0:e.emulatorHosts)===null||r===void 0?void 0:r[i]},Nl=i=>{const e=Qi(i);if(!e)return;const r=e.lastIndexOf(":");if(r<=0||r+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(r+1),10);return e[0]==="["?[e.substring(1,r-1),a]:[e.substring(0,r),a]},Zi=()=>{var i;return(i=Er())===null||i===void 0?void 0:i.config},es=i=>{var e;return(e=Er())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,r)=>{this.resolve=e,this.reject=r})}wrapCallback(e){return(r,a)=>{r?this.reject(r):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(r):e(r,a))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Pl(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},a=e||"demo-project",f=i.iat||0,h=i.sub||i.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const v=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:f,exp:f+3600,auth_time:f,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}}},i);return[In(JSON.stringify(r)),In(JSON.stringify(v)),""].join(".")}/**
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
 */function ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ae())}function aa(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function ca(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ua(){const i=ae();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function la(){try{return typeof indexedDB=="object"}catch{return!1}}function fa(){return new Promise((i,e)=>{try{let r=!0;const a="validate-browser-context-for-indexeddb-analytics-module",f=self.indexedDB.open(a);f.onsuccess=()=>{f.result.close(),r||self.indexedDB.deleteDatabase(a),i(!0)},f.onupgradeneeded=()=>{r=!1},f.onerror=()=>{var h;e(((h=f.error)===null||h===void 0?void 0:h.message)||"")}}catch(r){e(r)}})}/**
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
 */const da="FirebaseError";class Je extends Error{constructor(e,r,a){super(r),this.code=e,this.customData=a,this.name=da,Object.setPrototypeOf(this,Je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(e,r,a){this.service=e,this.serviceName=r,this.errors=a}create(e,...r){const a=r[0]||{},f=`${this.service}/${e}`,h=this.errors[e],v=h?ha(h,a):"Error",S=`${this.serviceName}: ${v} (${f}).`;return new Je(f,S,a)}}function ha(i,e){return i.replace(pa,(r,a)=>{const f=e[a];return f!=null?String(f):`<${a}?>`})}const pa=/\{\$([^}]+)}/g;function ga(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function En(i,e){if(i===e)return!0;const r=Object.keys(i),a=Object.keys(e);for(const f of r){if(!a.includes(f))return!1;const h=i[f],v=e[f];if(Ei(h)&&Ei(v)){if(!En(h,v))return!1}else if(h!==v)return!1}for(const f of a)if(!r.includes(f))return!1;return!0}function Ei(i){return i!==null&&typeof i=="object"}/**
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
 */function Qt(i){const e=[];for(const[r,a]of Object.entries(i))Array.isArray(a)?a.forEach(f=>{e.push(encodeURIComponent(r)+"="+encodeURIComponent(f))}):e.push(encodeURIComponent(r)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function Wt(i){const e={};return i.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[f,h]=a.split("=");e[decodeURIComponent(f)]=decodeURIComponent(h)}}),e}function qt(i){const e=i.indexOf("?");if(!e)return"";const r=i.indexOf("#",e);return i.substring(e,r>0?r:void 0)}function ma(i,e){const r=new ya(i,e);return r.subscribe.bind(r)}class ya{constructor(e,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(r=>{r.next(e)})}error(e){this.forEachObserver(r=>{r.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,r,a){let f;if(e===void 0&&r===void 0&&a===void 0)throw new Error("Missing Observer.");va(e,["next","error","complete"])?f=e:f={next:e,error:r,complete:a},f.next===void 0&&(f.next=or),f.error===void 0&&(f.error=or),f.complete===void 0&&(f.complete=or);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?f.error(this.finalError):f.complete()}catch{}}),this.observers.push(f),h}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,e)}sendOne(e,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{r(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function va(i,e){if(typeof i!="object"||i===null)return!1;for(const r of e)if(r in i&&typeof i[r]=="function")return!0;return!1}function or(){}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Xe(i){return i&&i._delegate?i._delegate:i}class Ct{constructor(e,r,a){this.name=e,this.instanceFactory=r,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rt="[DEFAULT]";/**
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
 */class ba{constructor(e,r){this.name=e,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const r=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(r)){const a=new sa;if(this.instancesDeferred.set(r,a),this.isInitialized(r)||this.shouldAutoInitialize())try{const f=this.getOrInitializeService({instanceIdentifier:r});f&&a.resolve(f)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(e){var r;const a=this.normalizeInstanceIdentifier(e?.identifier),f=(r=e?.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(h){if(f)return null;throw h}else{if(f)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wa(e))try{this.getOrInitializeService({instanceIdentifier:rt})}catch{}for(const[r,a]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(r);try{const h=this.getOrInitializeService({instanceIdentifier:f});a.resolve(h)}catch{}}}}clearInstance(e=rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...e.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rt){return this.instances.has(e)}getOptions(e=rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:r={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const f=this.getOrInitializeService({instanceIdentifier:a,options:r});for(const[h,v]of this.instancesDeferred.entries()){const S=this.normalizeInstanceIdentifier(h);a===S&&v.resolve(f)}return f}onInit(e,r){var a;const f=this.normalizeInstanceIdentifier(r),h=(a=this.onInitCallbacks.get(f))!==null&&a!==void 0?a:new Set;h.add(e),this.onInitCallbacks.set(f,h);const v=this.instances.get(f);return v&&e(v,f),()=>{h.delete(e)}}invokeOnInitCallbacks(e,r){const a=this.onInitCallbacks.get(r);if(a)for(const f of a)try{f(e,r)}catch{}}getOrInitializeService({instanceIdentifier:e,options:r={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:_a(e),options:r}),this.instances.set(e,a),this.instancesOptions.set(e,r),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=rt){return this.component?this.component.multipleInstances?e:rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _a(i){return i===rt?void 0:i}function wa(i){return i.instantiationMode==="EAGER"}/**
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
 */class Ta{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const r=this.getProvider(e.name);if(r.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);r.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const r=new ba(e,this);return this.providers.set(e,r),r}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ee||(ee={}));const Ia={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},Ea=ee.INFO,Ca={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},Sa=(i,e,...r)=>{if(e<i.logLevel)return;const a=new Date().toISOString(),f=Ca[e];if(f)console[f](`[${a}]  ${i.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ts{constructor(e){this.name=e,this._logLevel=Ea,this._logHandler=Sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ia[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const Aa=(i,e)=>e.some(r=>i instanceof r);let Ci,Si;function ka(){return Ci||(Ci=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ra(){return Si||(Si=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ns=new WeakMap,yr=new WeakMap,rs=new WeakMap,ar=new WeakMap,Cr=new WeakMap;function xa(i){const e=new Promise((r,a)=>{const f=()=>{i.removeEventListener("success",h),i.removeEventListener("error",v)},h=()=>{r(Ge(i.result)),f()},v=()=>{a(i.error),f()};i.addEventListener("success",h),i.addEventListener("error",v)});return e.then(r=>{r instanceof IDBCursor&&ns.set(r,i)}).catch(()=>{}),Cr.set(e,i),e}function Da(i){if(yr.has(i))return;const e=new Promise((r,a)=>{const f=()=>{i.removeEventListener("complete",h),i.removeEventListener("error",v),i.removeEventListener("abort",v)},h=()=>{r(),f()},v=()=>{a(i.error||new DOMException("AbortError","AbortError")),f()};i.addEventListener("complete",h),i.addEventListener("error",v),i.addEventListener("abort",v)});yr.set(i,e)}let vr={get(i,e,r){if(i instanceof IDBTransaction){if(e==="done")return yr.get(i);if(e==="objectStoreNames")return i.objectStoreNames||rs.get(i);if(e==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return Ge(i[e])},set(i,e,r){return i[e]=r,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function Oa(i){vr=i(vr)}function Na(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...r){const a=i.call(cr(this),e,...r);return rs.set(a,e.sort?e.sort():[e]),Ge(a)}:Ra().includes(i)?function(...e){return i.apply(cr(this),e),Ge(ns.get(this))}:function(...e){return Ge(i.apply(cr(this),e))}}function Pa(i){return typeof i=="function"?Na(i):(i instanceof IDBTransaction&&Da(i),Aa(i,ka())?new Proxy(i,vr):i)}function Ge(i){if(i instanceof IDBRequest)return xa(i);if(ar.has(i))return ar.get(i);const e=Pa(i);return e!==i&&(ar.set(i,e),Cr.set(e,i)),e}const cr=i=>Cr.get(i);function La(i,e,{blocked:r,upgrade:a,blocking:f,terminated:h}={}){const v=indexedDB.open(i,e),S=Ge(v);return a&&v.addEventListener("upgradeneeded",A=>{a(Ge(v.result),A.oldVersion,A.newVersion,Ge(v.transaction),A)}),r&&v.addEventListener("blocked",A=>r(A.oldVersion,A.newVersion,A)),S.then(A=>{h&&A.addEventListener("close",()=>h()),f&&A.addEventListener("versionchange",x=>f(x.oldVersion,x.newVersion,x))}).catch(()=>{}),S}const Ma=["get","getKey","getAll","getAllKeys","count"],Ua=["put","add","delete","clear"],ur=new Map;function Ai(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(ur.get(e))return ur.get(e);const r=e.replace(/FromIndex$/,""),a=e!==r,f=Ua.includes(r);if(!(r in(a?IDBIndex:IDBObjectStore).prototype)||!(f||Ma.includes(r)))return;const h=async function(v,...S){const A=this.transaction(v,f?"readwrite":"readonly");let x=A.store;return a&&(x=x.index(S.shift())),(await Promise.all([x[r](...S),f&&A.done]))[0]};return ur.set(e,h),h}Oa(i=>({...i,get:(e,r,a)=>Ai(e,r)||i.get(e,r,a),has:(e,r)=>!!Ai(e,r)||i.has(e,r)}));/**
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
 */class ja{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Ha(r)){const a=r.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(r=>r).join(" ")}}function Ha(i){const e=i.getComponent();return e?.type==="VERSION"}const br="@firebase/app",ki="0.9.15";/**
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
 */const ot=new ts("@firebase/app"),Ba="@firebase/app-compat",Fa="@firebase/analytics-compat",$a="@firebase/analytics",Wa="@firebase/app-check-compat",qa="@firebase/app-check",Va="@firebase/auth",za="@firebase/auth-compat",Ga="@firebase/database",Ka="@firebase/database-compat",Ja="@firebase/functions",Xa="@firebase/functions-compat",Ya="@firebase/installations",Qa="@firebase/installations-compat",Za="@firebase/messaging",ec="@firebase/messaging-compat",tc="@firebase/performance",nc="@firebase/performance-compat",rc="@firebase/remote-config",ic="@firebase/remote-config-compat",sc="@firebase/storage",oc="@firebase/storage-compat",ac="@firebase/firestore",cc="@firebase/firestore-compat",uc="firebase",lc="10.1.0";/**
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
 */const _r="[DEFAULT]",fc={[br]:"fire-core",[Ba]:"fire-core-compat",[$a]:"fire-analytics",[Fa]:"fire-analytics-compat",[qa]:"fire-app-check",[Wa]:"fire-app-check-compat",[Va]:"fire-auth",[za]:"fire-auth-compat",[Ga]:"fire-rtdb",[Ka]:"fire-rtdb-compat",[Ja]:"fire-fn",[Xa]:"fire-fn-compat",[Ya]:"fire-iid",[Qa]:"fire-iid-compat",[Za]:"fire-fcm",[ec]:"fire-fcm-compat",[tc]:"fire-perf",[nc]:"fire-perf-compat",[rc]:"fire-rc",[ic]:"fire-rc-compat",[sc]:"fire-gcs",[oc]:"fire-gcs-compat",[ac]:"fire-fst",[cc]:"fire-fst-compat","fire-js":"fire-js",[uc]:"fire-js-all"};/**
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
 */const Cn=new Map,wr=new Map;function dc(i,e){try{i.container.addComponent(e)}catch(r){ot.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,r)}}function zt(i){const e=i.name;if(wr.has(e))return ot.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,i);for(const r of Cn.values())dc(r,i);return!0}function is(i,e){const r=i.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),i.container.getProvider(e)}/**
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
 */const hc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ke=new Yt("app","Firebase",hc);/**
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
 */class pc{constructor(e,r,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Ct("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ke.create("app-deleted",{appName:this._name})}}/**
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
 */const Zt=lc;function ss(i,e={}){let r=i;typeof e!="object"&&(e={name:e});const a=Object.assign({name:_r,automaticDataCollectionEnabled:!1},e),f=a.name;if(typeof f!="string"||!f)throw Ke.create("bad-app-name",{appName:String(f)});if(r||(r=Zi()),!r)throw Ke.create("no-options");const h=Cn.get(f);if(h){if(En(r,h.options)&&En(a,h.config))return h;throw Ke.create("duplicate-app",{appName:f})}const v=new Ta(f);for(const A of wr.values())v.addComponent(A);const S=new pc(r,a,v);return Cn.set(f,S),S}function gc(i=_r){const e=Cn.get(i);if(!e&&i===_r&&Zi())return ss();if(!e)throw Ke.create("no-app",{appName:i});return e}function Tt(i,e,r){var a;let f=(a=fc[i])!==null&&a!==void 0?a:i;r&&(f+=`-${r}`);const h=f.match(/\s|\//),v=e.match(/\s|\//);if(h||v){const S=[`Unable to register library "${f}" with version "${e}":`];h&&S.push(`library name "${f}" contains illegal characters (whitespace or "/")`),h&&v&&S.push("and"),v&&S.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ot.warn(S.join(" "));return}zt(new Ct(`${f}-version`,()=>({library:f,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const mc="firebase-heartbeat-database",yc=1,Gt="firebase-heartbeat-store";let lr=null;function os(){return lr||(lr=La(mc,yc,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(Gt)}}}).catch(i=>{throw Ke.create("idb-open",{originalErrorMessage:i.message})})),lr}async function vc(i){try{return await(await os()).transaction(Gt).objectStore(Gt).get(as(i))}catch(e){if(e instanceof Je)ot.warn(e.message);else{const r=Ke.create("idb-get",{originalErrorMessage:e?.message});ot.warn(r.message)}}}async function Ri(i,e){try{const a=(await os()).transaction(Gt,"readwrite");await a.objectStore(Gt).put(e,as(i)),await a.done}catch(r){if(r instanceof Je)ot.warn(r.message);else{const a=Ke.create("idb-set",{originalErrorMessage:r?.message});ot.warn(a.message)}}}function as(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const bc=1024,_c=30*24*60*60*1e3;class wc{constructor(e){this.container=e,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Ic(r),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=xi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(f=>f.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const h=new Date(f.date).valueOf();return Date.now()-h<=_c}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xi(),{heartbeatsToSend:r,unsentEntries:a}=Tc(this._heartbeatsCache.heartbeats),f=In(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),f}}function xi(){return new Date().toISOString().substring(0,10)}function Tc(i,e=bc){const r=[];let a=i.slice();for(const f of i){const h=r.find(v=>v.agent===f.agent);if(h){if(h.dates.push(f.date),Di(r)>e){h.dates.pop();break}}else if(r.push({agent:f.agent,dates:[f.date]}),Di(r)>e){r.pop();break}a=a.slice(1)}return{heartbeatsToSend:r,unsentEntries:a}}class Ic{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return la()?fa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const f=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:f.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const f=await this.read();return Ri(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!==null&&r!==void 0?r:f.lastSentHeartbeatDate,heartbeats:[...f.heartbeats,...e.heartbeats]})}else return}}function Di(i){return In(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function Ec(i){zt(new Ct("platform-logger",e=>new ja(e),"PRIVATE")),zt(new Ct("heartbeat",e=>new wc(e),"PRIVATE")),Tt(br,ki,i),Tt(br,ki,"esm2017"),Tt("fire-js","")}Ec("");var Cc="firebase",Sc="10.1.0";/**
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
 */Tt(Cc,Sc,"app");function Sr(i,e){var r={};for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&e.indexOf(a)<0&&(r[a]=i[a]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,a=Object.getOwnPropertySymbols(i);f<a.length;f++)e.indexOf(a[f])<0&&Object.prototype.propertyIsEnumerable.call(i,a[f])&&(r[a[f]]=i[a[f]]);return r}function cs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ac=cs,us=new Yt("auth","Firebase",cs());/**
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
 */const Sn=new ts("@firebase/auth");function kc(i,...e){Sn.logLevel<=ee.WARN&&Sn.warn(`Auth (${Zt}): ${i}`,...e)}function bn(i,...e){Sn.logLevel<=ee.ERROR&&Sn.error(`Auth (${Zt}): ${i}`,...e)}/**
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
 */function me(i,...e){throw Ar(i,...e)}function ke(i,...e){return Ar(i,...e)}function ls(i,e,r){const a=Object.assign(Object.assign({},Ac()),{[e]:r});return new Yt("auth","Firebase",a).create(e,{appName:i.name})}function Rc(i,e,r){const a=r;if(!(e instanceof a))throw a.name!==e.constructor.name&&me(i,"argument-error"),ls(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ar(i,...e){if(typeof i!="string"){const r=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=i.name),i._errorFactory.create(r,...a)}return us.create(i,...e)}function M(i,e,...r){if(!i)throw Ar(e,...r)}function Me(i){const e="INTERNAL ASSERTION FAILED: "+i;throw bn(e),new Error(e)}function je(i,e){i||Me(e)}/**
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
 */function Tr(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function xc(){return Oi()==="http:"||Oi()==="https:"}function Oi(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function Dc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xc()||aa()||"connection"in navigator)?navigator.onLine:!0}function Oc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class en{constructor(e,r){this.shortDelay=e,this.longDelay=r,je(r>e,"Short delay should be less than long delay!"),this.isMobile=oa()||ca()}get(){return Dc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function kr(i,e){je(i.emulator,"Emulator should always be set here");const{url:r}=i.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class fs{static initialize(e,r,a){this.fetchImpl=e,r&&(this.headersImpl=r),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Me("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Me("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Me("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Nc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Pc=new en(3e4,6e4);function ut(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function lt(i,e,r,a,f={}){return ds(i,f,async()=>{let h={},v={};a&&(e==="GET"?v=a:h={body:JSON.stringify(a)});const S=Qt(Object.assign({key:i.config.apiKey},v)).slice(1),A=await i._getAdditionalHeaders();return A["Content-Type"]="application/json",i.languageCode&&(A["X-Firebase-Locale"]=i.languageCode),fs.fetch()(hs(i,i.config.apiHost,r,S),Object.assign({method:e,headers:A,referrerPolicy:"no-referrer"},h))})}async function ds(i,e,r){i._canInitEmulator=!1;const a=Object.assign(Object.assign({},Nc),e);try{const f=new Lc(i),h=await Promise.race([r(),f.promise]);f.clearNetworkTimeout();const v=await h.json();if("needConfirmation"in v)throw vn(i,"account-exists-with-different-credential",v);if(h.ok&&!("errorMessage"in v))return v;{const S=h.ok?v.errorMessage:v.error.message,[A,x]=S.split(" : ");if(A==="FEDERATED_USER_ID_ALREADY_LINKED")throw vn(i,"credential-already-in-use",v);if(A==="EMAIL_EXISTS")throw vn(i,"email-already-in-use",v);if(A==="USER_DISABLED")throw vn(i,"user-disabled",v);const q=a[A]||A.toLowerCase().replace(/[_\s]+/g,"-");if(x)throw ls(i,q,x);me(i,q)}}catch(f){if(f instanceof Je)throw f;me(i,"network-request-failed",{message:String(f)})}}async function tn(i,e,r,a,f={}){const h=await lt(i,e,r,a,f);return"mfaPendingCredential"in h&&me(i,"multi-factor-auth-required",{_serverResponse:h}),h}function hs(i,e,r,a){const f=`${e}${r}?${a}`;return i.config.emulator?kr(i.config,f):`${i.config.apiScheme}://${f}`}class Lc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,a)=>{this.timer=setTimeout(()=>a(ke(this.auth,"network-request-failed")),Pc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function vn(i,e,r){const a={appName:i.name};r.email&&(a.email=r.email),r.phoneNumber&&(a.phoneNumber=r.phoneNumber);const f=ke(i,e,a);return f.customData._tokenResponse=r,f}/**
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
 */async function Mc(i,e){return lt(i,"POST","/v1/accounts:delete",e)}async function Uc(i,e){return lt(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vt(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jc(i,e=!1){const r=Xe(i),a=await r.getIdToken(e),f=Rr(a);M(f&&f.exp&&f.auth_time&&f.iat,r.auth,"internal-error");const h=typeof f.firebase=="object"?f.firebase:void 0,v=h?.sign_in_provider;return{claims:f,token:a,authTime:Vt(fr(f.auth_time)),issuedAtTime:Vt(fr(f.iat)),expirationTime:Vt(fr(f.exp)),signInProvider:v||null,signInSecondFactor:h?.sign_in_second_factor||null}}function fr(i){return Number(i)*1e3}function Rr(i){const[e,r,a]=i.split(".");if(e===void 0||r===void 0||a===void 0)return bn("JWT malformed, contained fewer than 3 sections"),null;try{const f=Yi(r);return f?JSON.parse(f):(bn("Failed to decode base64 JWT payload"),null)}catch(f){return bn("Caught error parsing JWT payload as JSON",f?.toString()),null}}function Hc(i){const e=Rr(i);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Kt(i,e,r=!1){if(r)return e;try{return await e}catch(a){throw a instanceof Je&&Bc(a)&&i.auth.currentUser===i&&await i.auth.signOut(),a}}function Bc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class Fc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const f=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,f)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ps{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function An(i){var e;const r=i.auth,a=await i.getIdToken(),f=await Kt(i,Uc(r,{idToken:a}));M(f?.users.length,r,"internal-error");const h=f.users[0];i._notifyReloadListener(h);const v=!((e=h.providerUserInfo)===null||e===void 0)&&e.length?qc(h.providerUserInfo):[],S=Wc(i.providerData,v),A=i.isAnonymous,x=!(i.email&&h.passwordHash)&&!S?.length,q=A?x:!1,X={uid:h.localId,displayName:h.displayName||null,photoURL:h.photoUrl||null,email:h.email||null,emailVerified:h.emailVerified||!1,phoneNumber:h.phoneNumber||null,tenantId:h.tenantId||null,providerData:S,metadata:new ps(h.createdAt,h.lastLoginAt),isAnonymous:q};Object.assign(i,X)}async function $c(i){const e=Xe(i);await An(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Wc(i,e){return[...i.filter(a=>!e.some(f=>f.providerId===a.providerId)),...e]}function qc(i){return i.map(e=>{var{providerId:r}=e,a=Sr(e,["providerId"]);return{providerId:r,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function Vc(i,e){const r=await ds(i,{},async()=>{const a=Qt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:f,apiKey:h}=i.config,v=hs(i,f,"/v1/token",`key=${h}`),S=await i._getAdditionalHeaders();return S["Content-Type"]="application/x-www-form-urlencoded",fs.fetch()(v,{method:"POST",headers:S,body:a})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return M(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:a,refreshToken:f,expiresIn:h}=await Vc(e,r);this.updateTokensAndExpiration(a,f,Number(h))}updateTokensAndExpiration(e,r,a){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,r){const{refreshToken:a,accessToken:f,expirationTime:h}=r,v=new Jt;return a&&(M(typeof a=="string","internal-error",{appName:e}),v.refreshToken=a),f&&(M(typeof f=="string","internal-error",{appName:e}),v.accessToken=f),h&&(M(typeof h=="number","internal-error",{appName:e}),v.expirationTime=h),v}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return Me("not implemented")}}/**
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
 */function $e(i,e){M(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class st{constructor(e){var{uid:r,auth:a,stsTokenManager:f}=e,h=Sr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=a,this.stsTokenManager=f,this.accessToken=f.accessToken,this.displayName=h.displayName||null,this.email=h.email||null,this.emailVerified=h.emailVerified||!1,this.phoneNumber=h.phoneNumber||null,this.photoURL=h.photoURL||null,this.isAnonymous=h.isAnonymous||!1,this.tenantId=h.tenantId||null,this.providerData=h.providerData?[...h.providerData]:[],this.metadata=new ps(h.createdAt||void 0,h.lastLoginAt||void 0)}async getIdToken(e){const r=await Kt(this,this.stsTokenManager.getToken(this.auth,e));return M(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return jc(this,e)}reload(){return $c(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new st(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),r&&await An(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Kt(this,Mc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var a,f,h,v,S,A,x,q;const X=(a=r.displayName)!==null&&a!==void 0?a:void 0,ie=(f=r.email)!==null&&f!==void 0?f:void 0,ye=(h=r.phoneNumber)!==null&&h!==void 0?h:void 0,U=(v=r.photoURL)!==null&&v!==void 0?v:void 0,$=(S=r.tenantId)!==null&&S!==void 0?S:void 0,_e=(A=r._redirectEventId)!==null&&A!==void 0?A:void 0,H=(x=r.createdAt)!==null&&x!==void 0?x:void 0,sn=(q=r.lastLoginAt)!==null&&q!==void 0?q:void 0,{uid:ft,emailVerified:xe,isAnonymous:kt,providerData:Rt,stsTokenManager:c}=r;M(ft&&c,e,"internal-error");const xt=Jt.fromJSON(this.name,c);M(typeof ft=="string",e,"internal-error"),$e(X,e.name),$e(ie,e.name),M(typeof xe=="boolean",e,"internal-error"),M(typeof kt=="boolean",e,"internal-error"),$e(ye,e.name),$e(U,e.name),$e($,e.name),$e(_e,e.name),$e(H,e.name),$e(sn,e.name);const Y=new st({uid:ft,auth:e,email:ie,emailVerified:xe,displayName:X,isAnonymous:kt,photoURL:U,phoneNumber:ye,tenantId:$,stsTokenManager:xt,createdAt:H,lastLoginAt:sn});return Rt&&Array.isArray(Rt)&&(Y.providerData=Rt.map(Pn=>Object.assign({},Pn))),_e&&(Y._redirectEventId=_e),Y}static async _fromIdTokenResponse(e,r,a=!1){const f=new Jt;f.updateFromServerResponse(r);const h=new st({uid:r.localId,auth:e,stsTokenManager:f,isAnonymous:a});return await An(h),h}}/**
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
 */const Ni=new Map;function Ue(i){je(i instanceof Function,"Expected a class definition");let e=Ni.get(i);return e?(je(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ni.set(i,e),e)}/**
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
 */class gs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}gs.type="NONE";const Pi=gs;/**
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
 */function _n(i,e,r){return`firebase:${i}:${e}:${r}`}class It{constructor(e,r,a){this.persistence=e,this.auth=r,this.userKey=a;const{config:f,name:h}=this.auth;this.fullUserKey=_n(this.userKey,f.apiKey,h),this.fullPersistenceKey=_n("persistence",f.apiKey,h),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?st._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,a="authUser"){if(!r.length)return new It(Ue(Pi),e,a);const f=(await Promise.all(r.map(async x=>{if(await x._isAvailable())return x}))).filter(x=>x);let h=f[0]||Ue(Pi);const v=_n(a,e.config.apiKey,e.name);let S=null;for(const x of r)try{const q=await x._get(v);if(q){const X=st._fromJSON(e,q);x!==h&&(S=X),h=x;break}}catch{}const A=f.filter(x=>x._shouldAllowMigration);return!h._shouldAllowMigration||!A.length?new It(h,e,a):(h=A[0],S&&await h._set(v,S.toJSON()),await Promise.all(r.map(async x=>{if(x!==h)try{await x._remove(v)}catch{}})),new It(h,e,a))}}/**
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
 */function Li(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ms(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_s(e))return"Blackberry";if(ws(e))return"Webos";if(xr(e))return"Safari";if((e.includes("chrome/")||ys(e))&&!e.includes("edge/"))return"Chrome";if(bs(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=i.match(r);if(a?.length===2)return a[1]}return"Other"}function ms(i=ae()){return/firefox\//i.test(i)}function xr(i=ae()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ys(i=ae()){return/crios\//i.test(i)}function vs(i=ae()){return/iemobile/i.test(i)}function bs(i=ae()){return/android/i.test(i)}function _s(i=ae()){return/blackberry/i.test(i)}function ws(i=ae()){return/webos/i.test(i)}function Dn(i=ae()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function zc(i=ae()){var e;return Dn(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Gc(){return ua()&&document.documentMode===10}function Ts(i=ae()){return Dn(i)||bs(i)||ws(i)||_s(i)||/windows phone/i.test(i)||vs(i)}function Kc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Is(i,e=[]){let r;switch(i){case"Browser":r=Li(ae());break;case"Worker":r=`${Li(ae())}-${i}`;break;default:r=i}const a=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${Zt}/${a}`}async function Es(i,e){return lt(i,"GET","/v2/recaptchaConfig",ut(i,e))}function Mi(i){return i!==void 0&&i.enterprise!==void 0}class Cs{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(r=>r.provider==="EMAIL_PASSWORD_PROVIDER"&&r.enforcementState!=="OFF")}}/**
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
 */function Jc(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}function Ss(i){return new Promise((e,r)=>{const a=document.createElement("script");a.setAttribute("src",i),a.onload=e,a.onerror=f=>{const h=ke("internal-error");h.customData=f,r(h)},a.type="text/javascript",a.charset="UTF-8",Jc().appendChild(a)})}function Xc(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const Yc="https://www.google.com/recaptcha/enterprise.js?render=",Qc="recaptcha-enterprise",Zc="NO_RECAPTCHA";class As{constructor(e){this.type=Qc,this.auth=Ye(e)}async verify(e="verify",r=!1){async function a(h){if(!r){if(h.tenantId==null&&h._agentRecaptchaConfig!=null)return h._agentRecaptchaConfig.siteKey;if(h.tenantId!=null&&h._tenantRecaptchaConfigs[h.tenantId]!==void 0)return h._tenantRecaptchaConfigs[h.tenantId].siteKey}return new Promise(async(v,S)=>{Es(h,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(A=>{if(A.recaptchaKey===void 0)S(new Error("recaptcha Enterprise site key undefined"));else{const x=new Cs(A);return h.tenantId==null?h._agentRecaptchaConfig=x:h._tenantRecaptchaConfigs[h.tenantId]=x,v(x.siteKey)}}).catch(A=>{S(A)})})}function f(h,v,S){const A=window.grecaptcha;Mi(A)?A.enterprise.ready(()=>{A.enterprise.execute(h,{action:e}).then(x=>{v(x)}).catch(()=>{v(Zc)})}):S(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((h,v)=>{a(this.auth).then(S=>{if(!r&&Mi(window.grecaptcha))f(S,h,v);else{if(typeof window>"u"){v(new Error("RecaptchaVerifier is only supported in browser"));return}Ss(Yc+S).then(()=>{f(S,h,v)}).catch(A=>{v(A)})}}).catch(S=>{v(S)})})}}async function St(i,e,r,a=!1){const f=new As(i);let h;try{h=await f.verify(r)}catch{h=await f.verify(r,!0)}const v=Object.assign({},e);return a?Object.assign(v,{captchaResp:h}):Object.assign(v,{captchaResponse:h}),Object.assign(v,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(v,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),v}/**
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
 */class eu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const a=h=>new Promise((v,S)=>{try{const A=e(h);v(A)}catch(A){S(A)}});a.onAbort=r,this.queue.push(a);const f=this.queue.length-1;return()=>{this.queue[f]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const a of this.queue)await a(e),a.onAbort&&r.push(a.onAbort)}catch(a){r.reverse();for(const f of r)try{f()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a?.message})}}}/**
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
 */class tu{constructor(e,r,a,f){this.app=e,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=a,this.config=f,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ui(this),this.idTokenSubscription=new Ui(this),this.beforeStateQueue=new eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=us,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=f.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=Ue(r)),this._initializationPromise=this.queue(async()=>{var a,f;if(!this._deleted&&(this.persistenceManager=await It.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((f=this.currentUser)===null||f===void 0?void 0:f.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const a=await this.assertedPersistence.getCurrentUser();let f=a,h=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const v=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,S=f?._redirectEventId,A=await this.tryRedirectSignIn(e);(!v||v===S)&&A?.user&&(f=A.user,h=!0)}if(!f)return this.directlySetCurrentUser(null);if(!f._redirectEventId){if(h)try{await this.beforeStateQueue.runMiddleware(f)}catch(v){f=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(v))}return f?this.reloadAndSetCurrentUserOrClear(f):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===f._redirectEventId?this.directlySetCurrentUser(f):this.reloadAndSetCurrentUserOrClear(f)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await An(e)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?Xe(e):null;return r&&M(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ue(e))})}async initializeRecaptchaConfig(){const e=await Es(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new Cs(e);this.tenantId==null?this._agentRecaptchaConfig=r:this._tenantRecaptchaConfigs[this.tenantId]=r,r.emailPasswordEnabled&&new As(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yt("auth","Firebase",e())}onAuthStateChanged(e,r,a){return this.registerStateListener(this.authStateSubscription,e,r,a)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,a){return this.registerStateListener(this.idTokenSubscription,e,r,a)}authStateReady(){return new Promise((e,r)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const a=await this.getOrInitRedirectPersistenceManager(r);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&Ue(e)||this._popupRedirectResolver;M(r,this,"argument-error"),this.redirectPersistenceManager=await It.create(this,[Ue(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,a;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,a,f){if(this._deleted)return()=>{};const h=typeof r=="function"?r:r.next.bind(r),v=this._isInitialized?Promise.resolve():this._initializationPromise;return M(v,this,"internal-error"),v.then(()=>h(this.currentUser)),typeof r=="function"?e.addObserver(r,a,f):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Is(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(r["X-Firebase-Client"]=a);const f=await this._getAppCheckToken();return f&&(r["X-Firebase-AppCheck"]=f),r}async _getAppCheckToken(){var e;const r=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return r?.error&&kc(`Error while retrieving App Check token: ${r.error}`),r?.token}}function Ye(i){return Xe(i)}class Ui{constructor(e){this.auth=e,this.observer=null,this.addObserver=ma(r=>this.observer=r)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function nu(i,e){const r=is(i,"auth");if(r.isInitialized()){const f=r.getImmediate(),h=r.getOptions();if(En(h,e??{}))return f;me(f,"already-initialized")}return r.initialize({options:e})}function ru(i,e){const r=e?.persistence||[],a=(Array.isArray(r)?r:[r]).map(Ue);e?.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(a,e?.popupRedirectResolver)}function iu(i,e,r){const a=Ye(i);M(a._canInitEmulator,a,"emulator-config-failed"),M(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const f=!!r?.disableWarnings,h=ks(e),{host:v,port:S}=su(e),A=S===null?"":`:${S}`;a.config.emulator={url:`${h}//${v}${A}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:v,port:S,protocol:h.replace(":",""),options:Object.freeze({disableWarnings:f})}),f||ou()}function ks(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function su(i){const e=ks(i),r=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!r)return{host:"",port:null};const a=r[2].split("@").pop()||"",f=/^(\[[^\]]+\])(:|$)/.exec(a);if(f){const h=f[1];return{host:h,port:ji(a.substr(h.length+1))}}else{const[h,v]=a.split(":");return{host:h,port:ji(v)}}}function ji(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function ou(){function i(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Dr{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return Me("not implemented")}_getIdTokenResponse(e){return Me("not implemented")}_linkToIdToken(e,r){return Me("not implemented")}_getReauthenticationResolver(e){return Me("not implemented")}}async function au(i,e){return lt(i,"POST","/v1/accounts:update",e)}/**
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
 */async function dr(i,e){return tn(i,"POST","/v1/accounts:signInWithPassword",ut(i,e))}async function cu(i,e){return lt(i,"POST","/v1/accounts:sendOobCode",ut(i,e))}async function hr(i,e){return cu(i,e)}/**
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
 */async function uu(i,e){return tn(i,"POST","/v1/accounts:signInWithEmailLink",ut(i,e))}async function lu(i,e){return tn(i,"POST","/v1/accounts:signInWithEmailLink",ut(i,e))}/**
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
 */class Xt extends Dr{constructor(e,r,a,f=null){super("password",a),this._email=e,this._password=r,this._tenantId=f}static _fromEmailAndPassword(e,r){return new Xt(e,r,"password")}static _fromEmailAndCode(e,r,a=null){return new Xt(e,r,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){var r;switch(this.signInMethod){case"password":const a={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const f=await St(e,a,"signInWithPassword");return dr(e,f)}else return dr(e,a).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const h=await St(e,a,"signInWithPassword");return dr(e,h)}else return Promise.reject(f)});case"emailLink":return uu(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return au(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lu(e,{idToken:r,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Et(i,e){return tn(i,"POST","/v1/accounts:signInWithIdp",ut(i,e))}/**
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
 */const fu="http://localhost";class at extends Dr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new at(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):me("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:f}=r,h=Sr(r,["providerId","signInMethod"]);if(!a||!f)return null;const v=new at(a,f);return v.idToken=h.idToken||void 0,v.accessToken=h.accessToken||void 0,v.secret=h.secret,v.nonce=h.nonce,v.pendingToken=h.pendingToken||null,v}_getIdTokenResponse(e){const r=this.buildRequest();return Et(e,r)}_linkToIdToken(e,r){const a=this.buildRequest();return a.idToken=r,Et(e,a)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Et(e,r)}buildRequest(){const e={requestUri:fu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=Qt(r)}return e}}/**
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
 */function du(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hu(i){const e=Wt(qt(i)).link,r=e?Wt(qt(e)).deep_link_id:null,a=Wt(qt(i)).deep_link_id;return(a?Wt(qt(a)).link:null)||a||r||e||i}class Or{constructor(e){var r,a,f,h,v,S;const A=Wt(qt(e)),x=(r=A.apiKey)!==null&&r!==void 0?r:null,q=(a=A.oobCode)!==null&&a!==void 0?a:null,X=du((f=A.mode)!==null&&f!==void 0?f:null);M(x&&q&&X,"argument-error"),this.apiKey=x,this.operation=X,this.code=q,this.continueUrl=(h=A.continueUrl)!==null&&h!==void 0?h:null,this.languageCode=(v=A.languageCode)!==null&&v!==void 0?v:null,this.tenantId=(S=A.tenantId)!==null&&S!==void 0?S:null}static parseLink(e){const r=hu(e);try{return new Or(r)}catch{return null}}}/**
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
 */class At{constructor(){this.providerId=At.PROVIDER_ID}static credential(e,r){return Xt._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const a=Or.parseLink(r);return M(a,"argument-error"),Xt._fromEmailAndCode(e,a.code,a.tenantId)}}At.PROVIDER_ID="password";At.EMAIL_PASSWORD_SIGN_IN_METHOD="password";At.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nn extends Nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class We extends nn{constructor(){super("facebook.com")}static credential(e){return at._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return We.credential(e.oauthAccessToken)}catch{return null}}}We.FACEBOOK_SIGN_IN_METHOD="facebook.com";We.PROVIDER_ID="facebook.com";/**
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
 */class qe extends nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return at._fromParams({providerId:qe.PROVIDER_ID,signInMethod:qe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return qe.credentialFromTaggedObject(e)}static credentialFromError(e){return qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:a}=e;if(!r&&!a)return null;try{return qe.credential(r,a)}catch{return null}}}qe.GOOGLE_SIGN_IN_METHOD="google.com";qe.PROVIDER_ID="google.com";/**
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
 */class Ve extends nn{constructor(){super("github.com")}static credential(e){return at._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
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
 */class ze extends nn{constructor(){super("twitter.com")}static credential(e,r){return at._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return ze.credentialFromTaggedObject(e)}static credentialFromError(e){return ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:a}=e;if(!r||!a)return null;try{return ze.credential(r,a)}catch{return null}}}ze.TWITTER_SIGN_IN_METHOD="twitter.com";ze.PROVIDER_ID="twitter.com";/**
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
 */async function pr(i,e){return tn(i,"POST","/v1/accounts:signUp",ut(i,e))}/**
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
 */class ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,a,f=!1){const h=await st._fromIdTokenResponse(e,a,f),v=Hi(a);return new ct({user:h,providerId:v,_tokenResponse:a,operationType:r})}static async _forOperation(e,r,a){await e._updateTokensIfNecessary(a,!0);const f=Hi(a);return new ct({user:e,providerId:f,_tokenResponse:a,operationType:r})}}function Hi(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */class kn extends Je{constructor(e,r,a,f){var h;super(r.code,r.message),this.operationType=a,this.user=f,Object.setPrototypeOf(this,kn.prototype),this.customData={appName:e.name,tenantId:(h=e.tenantId)!==null&&h!==void 0?h:void 0,_serverResponse:r.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,r,a,f){return new kn(e,r,a,f)}}function Rs(i,e,r,a){return(e==="reauthenticate"?r._getReauthenticationResolver(i):r._getIdTokenResponse(i)).catch(h=>{throw h.code==="auth/multi-factor-auth-required"?kn._fromErrorAndOperation(i,h,e,a):h})}async function pu(i,e,r=!1){const a=await Kt(i,e._linkToIdToken(i.auth,await i.getIdToken()),r);return ct._forOperation(i,"link",a)}/**
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
 */async function gu(i,e,r=!1){const{auth:a}=i,f="reauthenticate";try{const h=await Kt(i,Rs(a,f,e,i),r);M(h.idToken,a,"internal-error");const v=Rr(h.idToken);M(v,a,"internal-error");const{sub:S}=v;return M(i.uid===S,a,"user-mismatch"),ct._forOperation(i,f,h)}catch(h){throw h?.code==="auth/user-not-found"&&me(a,"user-mismatch"),h}}/**
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
 */async function xs(i,e,r=!1){const a="signIn",f=await Rs(i,a,e),h=await ct._fromIdTokenResponse(i,a,f);return r||await i._updateCurrentUser(h.user),h}async function mu(i,e){return xs(Ye(i),e)}/**
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
 */function gr(i,e,r){var a;M(((a=r.url)===null||a===void 0?void 0:a.length)>0,i,"invalid-continue-uri"),M(typeof r.dynamicLinkDomain>"u"||r.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=r.url,e.dynamicLinkDomain=r.dynamicLinkDomain,e.canHandleCodeInApp=r.handleCodeInApp,r.iOS&&(M(r.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=r.iOS.bundleId),r.android&&(M(r.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=r.android.installApp,e.androidMinimumVersionCode=r.android.minimumVersion,e.androidPackageName=r.android.packageName)}/**
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
 */async function Ll(i,e,r){var a;const f=Ye(i),h={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((a=f._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const v=await St(f,h,"getOobCode",!0);r&&gr(f,v,r),await hr(f,v)}else r&&gr(f,h,r),await hr(f,h).catch(async v=>{if(v.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const S=await St(f,h,"getOobCode",!0);r&&gr(f,S,r),await hr(f,S)}else return Promise.reject(v)})}async function Ml(i,e,r){var a;const f=Ye(i),h={returnSecureToken:!0,email:e,password:r,clientType:"CLIENT_TYPE_WEB"};let v;if(!((a=f._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const x=await St(f,h,"signUpPassword");v=pr(f,x)}else v=pr(f,h).catch(async x=>{if(x.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const q=await St(f,h,"signUpPassword");return pr(f,q)}else return Promise.reject(x)});const S=await v.catch(x=>Promise.reject(x)),A=await ct._fromIdTokenResponse(f,"signIn",S);return await f._updateCurrentUser(A.user),A}function Ul(i,e,r){return mu(Xe(i),At.credential(e,r))}function yu(i,e,r,a){return Xe(i).onIdTokenChanged(e,r,a)}function vu(i,e,r){return Xe(i).beforeAuthStateChanged(e,r)}function bu(i,e,r,a){return Xe(i).onAuthStateChanged(e,r,a)}const Rn="__sak";/**
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
 */class Ds{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(Rn,"1"),this.storage.removeItem(Rn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _u(){const i=ae();return xr(i)||Dn(i)}const wu=1e3,Tu=10;class Os extends Ds{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_u()&&Kc(),this.fallbackToPolling=Ts(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const a=this.storage.getItem(r),f=this.localCache[r];a!==f&&e(r,f,a)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((v,S,A)=>{this.notifyListeners(v,A)});return}const a=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const v=this.storage.getItem(a);if(e.newValue!==v)e.newValue!==null?this.storage.setItem(a,e.newValue):this.storage.removeItem(a);else if(this.localCache[a]===e.newValue&&!r)return}const f=()=>{const v=this.storage.getItem(a);!r&&this.localCache[a]===v||this.notifyListeners(a,v)},h=this.storage.getItem(a);Gc()&&h!==e.newValue&&e.newValue!==e.oldValue?setTimeout(f,Tu):f()}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const f of Array.from(a))f(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:a}),!0)})},wu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Os.type="LOCAL";const Iu=Os;/**
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
 */class Ns extends Ds{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Ns.type="SESSION";const Ps=Ns;/**
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
 */function Eu(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class On{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(f=>f.isListeningto(e));if(r)return r;const a=new On(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:a,eventType:f,data:h}=r.data,v=this.handlersMap[f];if(!v?.size)return;r.ports[0].postMessage({status:"ack",eventId:a,eventType:f});const S=Array.from(v).map(async x=>x(r.origin,h)),A=await Eu(S);r.ports[0].postMessage({status:"done",eventId:a,eventType:f,response:A})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}On.receivers=[];/**
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
 */function Pr(i="",e=10){let r="";for(let a=0;a<e;a++)r+=Math.floor(Math.random()*10);return i+r}/**
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
 */class Cu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,a=50){const f=typeof MessageChannel<"u"?new MessageChannel:null;if(!f)throw new Error("connection_unavailable");let h,v;return new Promise((S,A)=>{const x=Pr("",20);f.port1.start();const q=setTimeout(()=>{A(new Error("unsupported_event"))},a);v={messageChannel:f,onMessage(X){const ie=X;if(ie.data.eventId===x)switch(ie.data.status){case"ack":clearTimeout(q),h=setTimeout(()=>{A(new Error("timeout"))},3e3);break;case"done":clearTimeout(h),S(ie.data.response);break;default:clearTimeout(q),clearTimeout(h),A(new Error("invalid_response"));break}}},this.handlers.add(v),f.port1.addEventListener("message",v.onMessage),this.target.postMessage({eventType:e,eventId:x,data:r},[f.port2])}).finally(()=>{v&&this.removeMessageHandler(v)})}}/**
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
 */function Re(){return window}function Su(i){Re().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Ls(){return typeof Re().WorkerGlobalScope<"u"&&typeof Re().importScripts=="function"}async function Au(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ku(){var i;return((i=navigator?.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Ru(){return Ls()?self:null}/**
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
 */const Ms="firebaseLocalStorageDb",xu=1,xn="firebaseLocalStorage",Us="fbase_key";class rn{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Nn(i,e){return i.transaction([xn],e?"readwrite":"readonly").objectStore(xn)}function Du(){const i=indexedDB.deleteDatabase(Ms);return new rn(i).toPromise()}function Ir(){const i=indexedDB.open(Ms,xu);return new Promise((e,r)=>{i.addEventListener("error",()=>{r(i.error)}),i.addEventListener("upgradeneeded",()=>{const a=i.result;try{a.createObjectStore(xn,{keyPath:Us})}catch(f){r(f)}}),i.addEventListener("success",async()=>{const a=i.result;a.objectStoreNames.contains(xn)?e(a):(a.close(),await Du(),e(await Ir()))})})}async function Bi(i,e,r){const a=Nn(i,!0).put({[Us]:e,value:r});return new rn(a).toPromise()}async function Ou(i,e){const r=Nn(i,!1).get(e),a=await new rn(r).toPromise();return a===void 0?null:a.value}function Fi(i,e){const r=Nn(i,!0).delete(e);return new rn(r).toPromise()}const Nu=800,Pu=3;class js{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ir(),this.db)}async _withRetries(e){let r=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(r++>Pu)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ls()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=On._getInstance(Ru()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Au(),!this.activeServiceWorker)return;this.sender=new Cu(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((r=a[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ku()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ir();return await Bi(e,Rn,"1"),await Fi(e,Rn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(a=>Bi(a,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(a=>Ou(a,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>Fi(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(f=>{const h=Nn(f,!1).getAll();return new rn(h).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],a=new Set;for(const{fbase_key:f,value:h}of e)a.add(f),JSON.stringify(this.localCache[f])!==JSON.stringify(h)&&(this.notifyListeners(f,h),r.push(f));for(const f of Object.keys(this.localCache))this.localCache[f]&&!a.has(f)&&(this.notifyListeners(f,null),r.push(f));return r}notifyListeners(e,r){this.localCache[e]=r;const a=this.listeners[e];if(a)for(const f of Array.from(a))f(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}js.type="LOCAL";const Lu=js;new en(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Hs(i,e){return e?Ue(e):(M(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Lr extends Dr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Et(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Et(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Et(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Mu(i){return xs(i.auth,new Lr(i),i.bypassAuthState)}function Uu(i){const{auth:e,user:r}=i;return M(r,e,"internal-error"),gu(r,new Lr(i),i.bypassAuthState)}async function ju(i){const{auth:e,user:r}=i;return M(r,e,"internal-error"),pu(r,new Lr(i),i.bypassAuthState)}/**
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
 */class Bs{constructor(e,r,a,f,h=!1){this.auth=e,this.resolver=a,this.user=f,this.bypassAuthState=h,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:a,postBody:f,tenantId:h,error:v,type:S}=e;if(v){this.reject(v);return}const A={auth:this.auth,requestUri:r,sessionId:a,tenantId:h||void 0,postBody:f||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(S)(A))}catch(x){this.reject(x)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Mu;case"linkViaPopup":case"linkViaRedirect":return ju;case"reauthViaPopup":case"reauthViaRedirect":return Uu;default:me(this.auth,"internal-error")}}resolve(e){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Hu=new en(2e3,1e4);async function jl(i,e,r){const a=Ye(i);Rc(i,e,Nr);const f=Hs(a,r);return new it(a,"signInViaPopup",e,f).executeNotNull()}class it extends Bs{constructor(e,r,a,f,h){super(e,r,f,h),this.provider=a,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){je(this.filter.length===1,"Popup operations only handle one event");const e=Pr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,a;if(!((a=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Hu.get())};e()}}it.currentPopupAction=null;/**
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
 */const Bu="pendingRedirect",wn=new Map;class Fu extends Bs{constructor(e,r,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,a),this.eventId=null}async execute(){let e=wn.get(this.auth._key());if(!e){try{const a=await $u(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(r){e=()=>Promise.reject(r)}wn.set(this.auth._key(),e)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $u(i,e){const r=Vu(e),a=qu(i);if(!await a._isAvailable())return!1;const f=await a._get(r)==="true";return await a._remove(r),f}function Wu(i,e){wn.set(i._key(),e)}function qu(i){return Ue(i._redirectPersistence)}function Vu(i){return _n(Bu,i.config.apiKey,i.name)}async function zu(i,e,r=!1){const a=Ye(i),f=Hs(a,e),v=await new Fu(a,f,r).execute();return v&&!r&&(delete v.user._redirectEventId,await a._persistUserIfCurrent(v.user),await a._setRedirectUser(null,e)),v}/**
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
 */const Gu=10*60*1e3;class Ku{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(r=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ju(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var a;if(e.error&&!Fs(e)){const f=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";r.onError(ke(this.auth,f))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const a=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gu&&this.cachedEventUids.clear(),this.cachedEventUids.has($i(e))}saveEventToCache(e){this.cachedEventUids.add($i(e)),this.lastProcessedEventTime=Date.now()}}function $i(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Fs({type:i,error:e}){return i==="unknown"&&e?.code==="auth/no-auth-event"}function Ju(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fs(i);default:return!1}}/**
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
 */async function Xu(i,e={}){return lt(i,"GET","/v1/projects",e)}/**
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
 */const Yu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qu=/^https?/;async function Zu(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Xu(i);for(const r of e)try{if(el(r))return}catch{}me(i,"unauthorized-domain")}function el(i){const e=Tr(),{protocol:r,hostname:a}=new URL(e);if(i.startsWith("chrome-extension://")){const v=new URL(i);return v.hostname===""&&a===""?r==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&v.hostname===a}if(!Qu.test(r))return!1;if(Yu.test(i))return a===i;const f=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+f+"|"+f+")$","i").test(a)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const tl=new en(3e4,6e4);function Wi(){const i=Re().___jsl;if(i?.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let r=0;r<i.CP.length;r++)i.CP[r]=null}}function nl(i){return new Promise((e,r)=>{var a,f,h;function v(){Wi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wi(),r(ke(i,"network-request-failed"))},timeout:tl.get()})}if(!((f=(a=Re().gapi)===null||a===void 0?void 0:a.iframes)===null||f===void 0)&&f.Iframe)e(gapi.iframes.getContext());else if(!((h=Re().gapi)===null||h===void 0)&&h.load)v();else{const S=Xc("iframefcb");return Re()[S]=()=>{gapi.load?v():r(ke(i,"network-request-failed"))},Ss(`https://apis.google.com/js/api.js?onload=${S}`).catch(A=>r(A))}}).catch(e=>{throw Tn=null,e})}let Tn=null;function rl(i){return Tn=Tn||nl(i),Tn}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const il=new en(5e3,15e3),sl="__/auth/iframe",ol="emulator/auth/iframe",al={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ul(i){const e=i.config;M(e.authDomain,i,"auth-domain-config-required");const r=e.emulator?kr(e,ol):`https://${i.config.authDomain}/${sl}`,a={apiKey:e.apiKey,appName:i.name,v:Zt},f=cl.get(i.config.apiHost);f&&(a.eid=f);const h=i._getFrameworks();return h.length&&(a.fw=h.join(",")),`${r}?${Qt(a).slice(1)}`}async function ll(i){const e=await rl(i),r=Re().gapi;return M(r,i,"internal-error"),e.open({where:document.body,url:ul(i),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:al,dontclear:!0},a=>new Promise(async(f,h)=>{await a.restyle({setHideOnLeave:!1});const v=ke(i,"network-request-failed"),S=Re().setTimeout(()=>{h(v)},il.get());function A(){Re().clearTimeout(S),f(a)}a.ping(A).then(A,()=>{h(v)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const fl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dl=500,hl=600,pl="_blank",gl="http://localhost";class qi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ml(i,e,r,a=dl,f=hl){const h=Math.max((window.screen.availHeight-f)/2,0).toString(),v=Math.max((window.screen.availWidth-a)/2,0).toString();let S="";const A=Object.assign(Object.assign({},fl),{width:a.toString(),height:f.toString(),top:h,left:v}),x=ae().toLowerCase();r&&(S=ys(x)?pl:r),ms(x)&&(e=e||gl,A.scrollbars="yes");const q=Object.entries(A).reduce((ie,[ye,U])=>`${ie}${ye}=${U},`,"");if(zc(x)&&S!=="_self")return yl(e||"",S),new qi(null);const X=window.open(e||"",S,q);M(X,i,"popup-blocked");try{X.focus()}catch{}return new qi(X)}function yl(i,e){const r=document.createElement("a");r.href=i,r.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(a)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const vl="__/auth/handler",bl="emulator/auth/handler",_l=encodeURIComponent("fac");async function Vi(i,e,r,a,f,h){M(i.config.authDomain,i,"auth-domain-config-required"),M(i.config.apiKey,i,"invalid-api-key");const v={apiKey:i.config.apiKey,appName:i.name,authType:r,redirectUrl:a,v:Zt,eventId:f};if(e instanceof Nr){e.setDefaultLanguage(i.languageCode),v.providerId=e.providerId||"",ga(e.getCustomParameters())||(v.customParameters=JSON.stringify(e.getCustomParameters()));for(const[q,X]of Object.entries(h||{}))v[q]=X}if(e instanceof nn){const q=e.getScopes().filter(X=>X!=="");q.length>0&&(v.scopes=q.join(","))}i.tenantId&&(v.tid=i.tenantId);const S=v;for(const q of Object.keys(S))S[q]===void 0&&delete S[q];const A=await i._getAppCheckToken(),x=A?`#${_l}=${encodeURIComponent(A)}`:"";return`${wl(i)}?${Qt(S).slice(1)}${x}`}function wl({config:i}){return i.emulator?kr(i,bl):`https://${i.authDomain}/${vl}`}/**
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
 */const mr="webStorageSupport";class Tl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ps,this._completeRedirectFn=zu,this._overrideRedirectResult=Wu}async _openPopup(e,r,a,f){var h;je((h=this.eventManagers[e._key()])===null||h===void 0?void 0:h.manager,"_initialize() not called before _openPopup()");const v=await Vi(e,r,a,Tr(),f);return ml(e,v,Pr())}async _openRedirect(e,r,a,f){await this._originValidation(e);const h=await Vi(e,r,a,Tr(),f);return Su(h),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:f,promise:h}=this.eventManagers[r];return f?Promise.resolve(f):(je(h,"If manager is not set, promise should be"),h)}const a=this.initAndGetManager(e);return this.eventManagers[r]={promise:a},a.catch(()=>{delete this.eventManagers[r]}),a}async initAndGetManager(e){const r=await ll(e),a=new Ku(e);return r.register("authEvent",f=>(M(f?.authEvent,e,"invalid-auth-event"),{status:a.onEvent(f.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=r,a}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(mr,{type:mr},f=>{var h;const v=(h=f?.[0])===null||h===void 0?void 0:h[mr];v!==void 0&&r(!!v),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=Zu(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return Ts()||xr()||Dn()}}const Il=Tl;var zi="@firebase/auth",Gi="1.1.0";/**
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
 */class El{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(a=>{e(a?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Cl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Sl(i){zt(new Ct("auth",(e,{options:r})=>{const a=e.getProvider("app").getImmediate(),f=e.getProvider("heartbeat"),h=e.getProvider("app-check-internal"),{apiKey:v,authDomain:S}=a.options;M(v&&!v.includes(":"),"invalid-api-key",{appName:a.name});const A={apiKey:v,authDomain:S,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Is(i)},x=new tu(a,f,h,A);return ru(x,r),x},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,a)=>{e.getProvider("auth-internal").initialize()})),zt(new Ct("auth-internal",e=>{const r=Ye(e.getProvider("auth").getImmediate());return(a=>new El(a))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tt(zi,Gi,Cl(i)),Tt(zi,Gi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const Al=5*60,kl=es("authIdTokenMaxAge")||Al;let Ki=null;const Rl=i=>async e=>{const r=e&&await e.getIdTokenResult(),a=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(a&&a>kl)return;const f=r?.token;Ki!==f&&(Ki=f,await fetch(i,{method:f?"POST":"DELETE",headers:f?{Authorization:`Bearer ${f}`}:{}}))};function xl(i=gc()){const e=is(i,"auth");if(e.isInitialized())return e.getImmediate();const r=nu(i,{popupRedirectResolver:Il,persistence:[Lu,Iu,Ps]}),a=es("authTokenSyncURL");if(a){const h=Rl(a);vu(r,h,()=>h(r.currentUser)),yu(r,v=>h(v))}const f=Qi("auth");return f&&iu(r,`http://${f}`),r}Sl("Browser");const Dl={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},Hl=ss(Dl);class Ol{promise(){return new Promise(e=>{bu(xl(),r=>{e(r||!1)})})}}class Bl{burgerBtn;body;constructor(){this.burgerBtn=yn(".menu__icon"),this.body=yn("body"),this.init()}init(){this.burger(),this.scroll(),this.getSing(),this.resize()}burger(){const e=this;this.burgerBtn.on("click",function(){e.body.toggleClass("burger-active")})}scroll(){window.addEventListener("scroll",()=>{window.scrollY>70||window.pageYOffset>70?this.body.addClass("scroll"):this.body.removeClass("scroll")})}resize(){const e=this;function r(){navigator.maxTouchPoints?e.body.addClass("touch-screen"):e.body.removeClass("touch-screen")}r(),window.addEventListener("resize",r)}async getSing(){const e=await new Ol().promise(),r=yn(".top-list__link-user"),a=yn(".menu__user-mobile-link");e?(r.html('<svg id="icon-account"><use xlink:href="#user"></use></svg>'),r.removeClass("top-list__not-sing"),r.attr("href","Account.html"),a.attr("href","Account.html"),a.html('<svg id="icon-account"><use xlink:href="#user"></use></svg>'),console.log("Пользователь авторизирован")):(r.html('<svg id="icon-account"><use xlink:href="#sing"></use></svg>'),r.addClass("top-list__not-sing"),r.attr("href","authorization.html"),a.attr("href","authorization.html"),a.html('<svg id="icon-account"><use xlink:href="#sing"></use></svg>'),console.log("Пользователь авторизирован"))}}export{yn as $,Ct as C,We as F,qe as G,Bl as H,ee as L,Zt as S,zt as _,Hl as a,jl as b,Ol as c,Ko as d,Jo as e,Ll as f,xl as g,Ml as h,Tt as i,Je as j,Xe as k,gc as l,is as m,Nl as n,bu as o,ts as p,Pl as q,Xo as r,Ul as s};
