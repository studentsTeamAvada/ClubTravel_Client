import"./modulepreload-polyfill-9p4a8sJU.js";import{c as Ch,g as Dh,$ as W,H as bh}from"./header-msV6j5kN.js";import{S as Za,N as Rh,P as Vh,A as Ph,a as kh}from"./autoplay-3nwb4p1k.js";var tl={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Ch,function(){return function(){var n={d:function(T,u){for(var p in u)n.o(u,p)&&!n.o(T,p)&&Object.defineProperty(T,p,{enumerable:!0,get:u[p]})},o:function(T,u){return Object.prototype.hasOwnProperty.call(T,u)}},r={};n.d(r,{default:function(){return Yt}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function o(T){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:document;return typeof T=="string"?u.querySelector(T):T}function a(){let{tagName:T="div",className:u="",innerHtml:p="",id:c="",attrs:_={}}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=document.createElement(T);return u&&m.classList.add(...u.split(" ")),c&&(m.id=c),p&&(m.innerHTML=p),_&&l(m,_),m}function l(T,u){for(let[p,c]of Object.entries(u))c!==void 0&&T.setAttribute(p,c);return T}function h(T){return new Date(T.getFullYear(),T.getMonth()+1,0).getDate()}function d(T){let u=T.getHours(),{hours:p,dayPeriod:c}=E(u);return{year:T.getFullYear(),month:T.getMonth(),fullMonth:T.getMonth()+1<10?"0"+(T.getMonth()+1):T.getMonth()+1,date:T.getDate(),fullDate:T.getDate()<10?"0"+T.getDate():T.getDate(),day:T.getDay(),hours:u,fullHours:I(u),hours12:p,dayPeriod:c,fullHours12:I(p),minutes:T.getMinutes(),fullMinutes:T.getMinutes()<10?"0"+T.getMinutes():T.getMinutes()}}function E(T){return{dayPeriod:T>11?"pm":"am",hours:T%12==0?12:T%12}}function I(T){return T<10?"0"+T:T}function D(T){let u=10*Math.floor(T.getFullYear()/10);return[u,u+9]}function F(){let T=[];for(var u=arguments.length,p=new Array(u),c=0;c<u;c++)p[c]=arguments[c];return p.forEach(_=>{if(typeof _=="object")for(let m in _)_[m]&&T.push(m);else _&&T.push(_)}),T.join(" ")}function $(T,u){let p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:i.days;if(!T||!u)return!1;let c=d(T),_=d(u);return{[i.days]:c.date===_.date&&c.month===_.month&&c.year===_.year,[i.months]:c.month===_.month&&c.year===_.year,[i.years]:c.year===_.year}[p]}function j(T,u,p){let c=ct(T,!1).getTime(),_=ct(u,!1).getTime();return p?c>=_:c>_}function Z(T,u){return!j(T,u,!0)}function ct(T){let u=!(arguments.length>1&&arguments[1]!==void 0)||arguments[1],p=new Date(T.getTime());return typeof u!="boolean"||u||function(c){c.setHours(0,0,0,0)}(p),p}function rt(T,u,p){T.length?T.forEach(c=>{c.addEventListener(u,p)}):T.addEventListener(u,p)}function gt(T,u){return!(!T||T===document||T instanceof DocumentFragment)&&(T.matches(u)?T:gt(T.parentNode,u))}function Gt(T,u,p){return T>p?p:T<u?u:T}function ft(T){for(var u=arguments.length,p=new Array(u>1?u-1:0),c=1;c<u;c++)p[c-1]=arguments[c];return p.filter(_=>_).forEach(_=>{for(let[m,g]of Object.entries(_))if(g!==void 0&&g.toString()==="[object Object]"){let v=T[m]!==void 0?T[m].toString():void 0,A=g.toString(),M=Array.isArray(g)?[]:{};T[m]=T[m]?v!==A?M:T[m]:M,ft(T[m],g)}else T[m]=g}),T}function Ct(T){let u=T;return T instanceof Date||(u=new Date(T)),isNaN(u.getTime())&&(console.log(`Unable to convert value "${T}" to Date object`),u=!1),u}function xe(T){let u="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+u+")("+T+")($|<|"+u+")","g")}function Zt(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}class Qe{constructor(){let{type:u,date:p,dp:c,opts:_,body:m}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Zt(this,"focus",()=>{this.$cell.classList.add("-focus-"),this.focused=!0}),Zt(this,"removeFocus",()=>{this.$cell.classList.remove("-focus-"),this.focused=!1}),Zt(this,"select",()=>{this.$cell.classList.add("-selected-"),this.selected=!0}),Zt(this,"removeSelect",()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1}),Zt(this,"onChangeSelectedDate",()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())}),Zt(this,"onChangeFocusDate",g=>{if(!g)return void(this.focused&&this.removeFocus());let v=$(g,this.date,this.type);v?this.focus():!v&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()}),Zt(this,"render",()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell)),this.type=u,this.singleType=this.type.slice(0,-1),this.date=p,this.dp=c,this.opts=_,this.body=m,this.customData=!1,this.init()}init(){let{range:u,onRenderCell:p}=this.opts;p&&(this.customData=p({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),u&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var u;let{year:p,month:c,date:_}=d(this.date),m=((u=this.customData)===null||u===void 0?void 0:u.attrs)||{};this.$cell=a({className:this._getClassName(),attrs:{"data-year":p,"data-month":c,"data-date":_,...m}})}_getClassName(){var u,p;let c=new Date,{selectOtherMonths:_,selectOtherYears:m}=this.opts,{minDate:g,maxDate:v}=this.dp,{day:A}=d(this.date),M=this._isOutOfMinMaxRange(),N=(u=this.customData)===null||u===void 0?void 0:u.disabled,x=F("air-datepicker-cell",`-${this.singleType}-`,{"-current-":$(c,this.date,this.type),"-min-date-":g&&$(g,this.date,this.type),"-max-date-":v&&$(v,this.date,this.type)}),U="";switch(this.type){case i.days:U=F({"-weekend-":this.dp.isWeekend(A),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!_||M||N});break;case i.months:U=F({"-disabled-":M||N});break;case i.years:U=F({"-other-decade-":this.isOtherDecade,"-disabled-":M||this.isOtherDecade&&!m||N})}return F(x,U,(p=this.customData)===null||p===void 0?void 0:p.classes)}_getHtml(){var u;let{year:p,month:c,date:_}=d(this.date),{showOtherMonths:m,showOtherYears:g}=this.opts;if((u=this.customData)!==null&&u!==void 0&&u.html)return this.customData.html;switch(this.type){case i.days:return!m&&this.isOtherMonth?"":_;case i.months:return this.dp.locale[this.opts.monthsField][c];case i.years:return!g&&this.isOtherDecade?"":p}}_isOutOfMinMaxRange(){let{minDate:u,maxDate:p}=this.dp,{type:c,date:_}=this,{month:m,year:g,date:v}=d(_),A=c===i.days,M=c===i.years,N=!!u&&new Date(g,M?u.getMonth():m,A?v:u.getDate()),x=!!p&&new Date(g,M?p.getMonth():m,A?v:p.getDate());return u&&p?Z(N,u)||j(x,p):u?Z(N,u):p?j(x,p):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:u,rangeDateTo:p}=this.dp,c=F({"-in-range-":u&&p&&(_=this.date,m=u,g=p,j(_,m)&&Z(_,g)),"-range-from-":u&&$(this.date,u,this.type),"-range-to-":p&&$(this.date,p,this.type)});var _,m,g;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),c&&this.$cell.classList.add(...c.split(" "))}_handleSelectedStatus(){let u=this.dp._checkIfDateIsSelected(this.date,this.type);u?this.select():!u&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){$(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function Qt(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}let mr={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const de=".air-datepicker-cell";class ie{constructor(u){let{dp:p,type:c,opts:_}=u;Qt(this,"handleClick",m=>{let g=m.target.closest(de).adpCell;if(g.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let v=this.dp._checkIfDateIsSelected(g.date,g.type);v?this.dp._handleAlreadySelectedDates(v,g.date):this.dp.selectDate(g.date)}),Qt(this,"handleDayNameClick",m=>{let g=m.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(g),datepicker:this.dp})}),Qt(this,"onChangeCurrentView",m=>{m!==this.type?this.hide():(this.show(),this.render())}),Qt(this,"onMouseOverCell",m=>{let g=gt(m.target,de);this.dp.setFocusDate(!!g&&g.adpCell.date)}),Qt(this,"onMouseOutCell",()=>{this.dp.setFocusDate(!1)}),Qt(this,"onClickBody",m=>{let{onClickDayName:g}=this.opts,v=m.target;v.closest(de)&&this.handleClick(m),g&&v.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(m)}),Qt(this,"onMouseDown",m=>{this.pressed=!0;let g=gt(m.target,de),v=g&&g.adpCell;$(v.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),$(v.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)}),Qt(this,"onMouseMove",m=>{if(!this.pressed||!this.dp.isMinViewReached)return;m.preventDefault();let g=gt(m.target,de),v=g&&g.adpCell,{selectedDates:A,rangeDateTo:M,rangeDateFrom:N}=this.dp;if(!v||v.isDisabled)return;let{date:x}=v;if(A.length===2){if(this.rangeFromFocused&&!j(x,M)){let{hours:U,minutes:it}=d(N);x.setHours(U),x.setMinutes(it),this.dp.rangeDateFrom=x,this.dp.replaceDate(N,x)}if(this.rangeToFocused&&!Z(x,N)){let{hours:U,minutes:it}=d(M);x.setHours(U),x.setMinutes(it),this.dp.rangeDateTo=x,this.dp.replaceDate(M,x)}}}),Qt(this,"onMouseUp",()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1}),Qt(this,"onChangeViewDate",(m,g)=>{if(!this.isVisible)return;let v=D(m),A=D(g);switch(this.dp.currentView){case i.days:if($(m,g,i.months))return;break;case i.months:if($(m,g,i.years))return;break;case i.years:if(v[0]===A[0]&&v[1]===A[1])return}this.render()}),Qt(this,"render",()=>{this.destroyCells(),this._generateCells(),this.cells.forEach(m=>{this.$cells.appendChild(m.render())})}),this.dp=p,this.type=c,this.opts=_,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:u,dynamicRange:p}=this.opts;rt(this.$el,"mouseover",this.onMouseOverCell),rt(this.$el,"mouseout",this.onMouseOutCell),rt(this.$el,"click",this.onClickBody),u&&p&&(rt(this.$el,"mousedown",this.onMouseDown),rt(this.$el,"mousemove",this.onMouseMove),rt(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=a({className:`air-datepicker-body -${this.type}-`,innerHtml:mr[this.type]}),this.$names=o(".air-datepicker-body--day-names",this.$el),this.$cells=o(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.dp.locale.firstDay,p="",c=this.dp.isWeekend,{onClickDayName:_}=this.opts,m=u,g=0;for(;g<7;){let v=m%7;p+=`<div class="${F("air-datepicker-body--day-name",{[i.cssClassWeekend]:c(v),"-clickable-":!!_})}" data-day-index='${v}'>${this.dp.locale.daysMin[v]}</div>`,g++,m++}return p}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCell(u){let{type:p,dp:c,opts:_}=this;return new Qe({type:p,dp:c,opts:_,date:u,body:this})}_generateCells(){ie.getDatesFunction(this.type)(this.dp,u=>{this.cells.push(this._generateCell(u))})}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach(u=>u.destroy()),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}static getDaysDates(u,p){let{viewDate:c,locale:{firstDay:_}}=u,m=h(c),{year:g,month:v}=d(c),A=new Date(g,v,1),M=new Date(g,v,m),N=A.getDay()-_,x=6-M.getDay()+_;N=N<0?N+7:N,x=x>6?x-7:x;let U=function(Xt,Me){let{year:we,month:Ye,date:bi}=d(Xt);return new Date(we,Ye,bi-Me)}(A,N),it=m+N+x,zt=U.getDate(),{year:bt,month:We}=d(U),te=0;const Kt=[];for(;te<it;){let Xt=new Date(bt,We,zt+te);p&&p(Xt),Kt.push(Xt),te++}return Kt}static getMonthsDates(u,p){let{year:c}=u.parsedViewDate,_=0,m=[];for(;_<12;){const g=new Date(c,_);m.push(g),p&&p(g),_++}return m}static getYearsDates(u,p){let c=D(u.viewDate),_=c[0]-1,m=c[1]+1,g=_,v=[];for(;g<=m;){const A=new Date(g,0);v.push(A),p&&p(A),g++}return v}static getDatesFunction(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i.days;return{[i.days]:ie.getDaysDates,[i.months]:ie.getMonthsDates,[i.years]:ie.getYearsDates}[u]}}function fe(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}class An{constructor(u){let{dp:p,opts:c}=u;fe(this,"onClickNav",_=>{let m=gt(_.target,".air-datepicker-nav--action");if(!m)return;let g=m.dataset.action;this.dp[g]()}),fe(this,"onChangeViewDate",()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()}),fe(this,"onChangeCurrentView",()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()}),fe(this,"onClickNavTitle",()=>{this.dp.isFinalView||this.dp.up()}),fe(this,"update",()=>{let{prevHtml:_,nextHtml:m}=this.opts;this.$prev.innerHTML=_,this.$next.innerHTML=m,this._resetNavStatus(),this.render(),this.handleNavStatus()}),fe(this,"renderDelay",()=>{setTimeout(this.render)}),fe(this,"render",()=>{this.$title.innerHTML=this._getTitle(),function(_,m){for(let g in m)m[g]?_.classList.add(g):_.classList.remove(g)}(this.$title,{"-disabled-":this.dp.isFinalView})}),this.dp=p,this.opts=c,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=o(".air-datepicker-nav--title",this.$el),this.$prev=o('[data-action="prev"]',this.$el),this.$next=o('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=a({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:u,opts:p}=this,c=p.navTitles[u.currentView];return typeof c=="function"?c(u):u.formatDate(u.viewDate,c)}handleNavStatus(){let{disableNavWhenOutOfRange:u}=this.opts,{minDate:p,maxDate:c}=this.dp;if(!p&&!c||!u)return;let{year:_,month:m}=this.dp.parsedViewDate,g=!!p&&d(p),v=!!c&&d(c);switch(this.dp.currentView){case i.days:p&&g.month>=m&&g.year>=_&&this._disableNav("prev"),c&&v.month<=m&&v.year<=_&&this._disableNav("next");break;case i.months:p&&g.year>=_&&this._disableNav("prev"),c&&v.year<=_&&this._disableNav("next");break;case i.years:{let A=D(this.dp.viewDate);p&&g.year>=A[0]&&this._disableNav("prev"),c&&v.year<=A[1]&&this._disableNav("next");break}}}_disableNav(u){o('[data-action="'+u+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){(function(u){for(var p=arguments.length,c=new Array(p>1?p-1:0),_=1;_<p;_++)c[_-1]=arguments[_];u.length?u.forEach(m=>{m.classList.remove(...c)}):u.classList.remove(...c)})(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:u,nextHtml:p}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${u}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${p}</div>`}get isNavIsFunction(){let{navTitles:u}=this.opts;return Object.keys(u).find(p=>typeof u[p]=="function")}}var Sn={today:{content:T=>T.locale.today,onClick:T=>T.setViewDate(new Date)},clear:{content:T=>T.locale.clear,onClick:T=>T.clear()}};class Ci{constructor(u){let{dp:p,opts:c}=u;this.dp=p,this.opts=c,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=a({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:u}=this.opts;Array.isArray(u)||(u=[u]),u.forEach(p=>{let c=p;typeof p=="string"&&Sn[p]&&(c=Sn[p]);let _=this.createButton(c);c.onClick&&this.attachEventToButton(_,c.onClick),this.$el.appendChild(_)})}attachEventToButton(u,p){u.addEventListener("click",()=>{p(this.dp)})}createButton(u){let{content:p,className:c,tagName:_="button",attrs:m={}}=u;return a({tagName:_,innerHtml:`<span tabindex='-1'>${typeof p=="function"?p(this.dp):p}</span>`,className:F("air-datepicker-button",c),attrs:m})}render(){this.generateButtons()}}function pe(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}class _r{constructor(){let{opts:u,dp:p}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pe(this,"toggleTimepickerIsActive",_=>{this.dp.timepickerIsActive=_}),pe(this,"onChangeSelectedDate",_=>{let{date:m,updateTime:g=!1}=_;m&&(this.setMinMaxTime(m),this.setCurrentTime(!!g&&m),this.addTimeToDate(m))}),pe(this,"onChangeLastSelectedDate",_=>{_&&(this.setTime(_),this.render())}),pe(this,"onChangeInputRange",_=>{let m=_.target;this[m.getAttribute("name")]=m.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})}),pe(this,"onMouseEnterLeave",_=>{let m=_.target.getAttribute("name"),g=this.$minutesText;m==="hours"&&(g=this.$hoursText),g.classList.toggle("-focus-")}),pe(this,"onFocus",()=>{this.toggleTimepickerIsActive(!0)}),pe(this,"onBlur",()=>{this.toggleTimepickerIsActive(!1)}),this.opts=u,this.dp=p;let{timeFormat:c}=this.dp.locale;c&&(c.match(xe("h"))||c.match(xe("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let u="input";navigator.userAgent.match(/trident/gi)&&(u="change"),rt(this.$ranges,u,this.onChangeInputRange),rt(this.$ranges,"mouseenter",this.onMouseEnterLeave),rt(this.$ranges,"mouseleave",this.onMouseEnterLeave),rt(this.$ranges,"focus",this.onFocus),rt(this.$ranges,"mousedown",this.onFocus),rt(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=a({className:F("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:u,hours:p,displayHours:c,minutes:_,minHours:m,minMinutes:g,maxHours:v,maxMinutes:A,dayPeriod:M,opts:{hoursStep:N,minutesStep:x}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${I(c)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${I(_)}</span>   `+(u?`<span class='air-datepicker-time--current-ampm'>${M}</span>`:"")+`</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">      <input type="range" name="hours" value="${p}" min="${m}" max="${v}" step="${N}"/>   </div>   <div class="air-datepicker-time--row">      <input type="range" name="minutes" value="${_}" min="${g}" max="${A}" step="${x}"/>   </div></div>`}defineDOM(){let u=p=>o(p,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=u('[name="hours"]'),this.$minutes=u('[name="minutes"]'),this.$hoursText=u(".air-datepicker-time--current-hours"),this.$minutesText=u(".air-datepicker-time--current-minutes"),this.$ampm=u(".air-datepicker-time--current-ampm")}setTime(u){this.setMinMaxTime(u),this.setCurrentTime(u)}addTimeToDate(u){u&&(u.setHours(this.hours),u.setMinutes(this.minutes))}setMinMaxTime(u){if(this.setMinMaxTimeFromOptions(),u){let{minDate:p,maxDate:c}=this.dp;p&&$(u,p)&&this.setMinTimeFromMinDate(p),c&&$(u,c)&&this.setMaxTimeFromMaxDate(c)}}setCurrentTime(u){let{hours:p,minutes:c}=u?d(u):this;this.hours=Gt(p,this.minHours,this.maxHours),this.minutes=Gt(c,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:u,minMinutes:p,maxHours:c,maxMinutes:_}=this.opts;this.minHours=Gt(u,0,23),this.minMinutes=Gt(p,0,59),this.maxHours=Gt(c,0,23),this.maxMinutes=Gt(_,0,59)}setMinTimeFromMinDate(u){let{lastSelectedDate:p}=this.dp;this.minHours=u.getHours(),p&&p.getHours()>u.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=u.getMinutes()}setMaxTimeFromMaxDate(u){let{lastSelectedDate:p}=this.dp;this.maxHours=u.getHours(),p&&p.getHours()<u.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=u.getMinutes()}updateSliders(){l(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,l(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=I(this.displayHours),this.$minutesText.innerHTML=I(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(u){this._hours=u;let{hours:p,dayPeriod:c}=E(u);this.displayHours=this.ampm?p:u,this.dayPeriod=c}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function ge(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}class Di{constructor(u){let{dp:p,opts:c}=u;ge(this,"pressedKeys",new Set),ge(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],_=>_.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],_=>_.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],_=>_.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],_=>_.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],_=>_.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],_=>_.year-=10],[["Control","Shift","ArrowUp"],(_,m)=>m.up()]])),ge(this,"handleHotKey",_=>{let m=this.hotKeys.get(_),g=d(this.getInitialFocusDate());m(g,this.dp);let{year:v,month:A,date:M}=g,N=h(new Date(v,A));N<M&&(M=N);let x=this.dp.getClampedDate(new Date(v,A,M));this.dp.setFocusDate(x,{viewDateTransition:!0})}),ge(this,"isHotKeyPressed",()=>{let _=!1,m=this.pressedKeys.size,g=v=>this.pressedKeys.has(v);for(let[v]of this.hotKeys){if(_)break;if(Array.isArray(v[0]))v.forEach(A=>{_||m!==A.length||(_=A.every(g)&&v)});else{if(m!==v.length)continue;_=v.every(g)&&v}}return _}),ge(this,"isArrow",_=>_>=37&&_<=40),ge(this,"onKeyDown",_=>{let{key:m,which:g}=_,{dp:v,dp:{focusDate:A},opts:M}=this;this.registerKey(m);let N=this.isHotKeyPressed();if(N)return _.preventDefault(),void this.handleHotKey(N);if(this.isArrow(g))return _.preventDefault(),void this.focusNextCell(m);if(m==="Enter"){if(v.currentView!==M.minView)return void v.down();if(A){let x=v._checkIfDateIsSelected(A);return void(x?v._handleAlreadySelectedDates(x,A):v.selectDate(A))}}m==="Escape"&&this.dp.hide()}),ge(this,"onKeyUp",_=>{this.removeKey(_.key)}),this.dp=p,this.opts=c,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:u}=this.dp;u.addEventListener("keydown",this.onKeyDown),u.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:u}=this.dp;u.removeEventListener("keydown",this.onKeyDown),u.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:u,currentView:p,selectedDates:c,parsedViewDate:{year:_,month:m}}=this.dp,g=u||c[c.length-1];if(!g)switch(p){case i.days:g=new Date(_,m,new Date().getDate());break;case i.months:g=new Date(_,m,1);break;case i.years:g=new Date(_,0,1)}return g}focusNextCell(u){let p=this.getInitialFocusDate(),{currentView:c}=this.dp,{days:_,months:m,years:g}=i,v=d(p),A=v.year,M=v.month,N=v.date;switch(u){case"ArrowLeft":c===_&&(N-=1),c===m&&(M-=1),c===g&&(A-=1);break;case"ArrowUp":c===_&&(N-=7),c===m&&(M-=3),c===g&&(A-=4);break;case"ArrowRight":c===_&&(N+=1),c===m&&(M+=1),c===g&&(A+=1);break;case"ArrowDown":c===_&&(N+=7),c===m&&(M+=3),c===g&&(A+=4)}let x=this.dp.getClampedDate(new Date(A,M,N));this.dp.setFocusDate(x,{viewDateTransition:!0})}registerKey(u){this.pressedKeys.add(u)}removeKey(u){this.pressedKeys.delete(u)}}let Cn={on(T,u){this.__events||(this.__events={}),this.__events[T]?this.__events[T].push(u):this.__events[T]=[u]},off(T,u){this.__events&&this.__events[T]&&(this.__events[T]=this.__events[T].filter(p=>p!==u))},removeAllEvents(){this.__events={}},trigger(T){for(var u=arguments.length,p=new Array(u>1?u-1:0),c=1;c<u;c++)p[c-1]=arguments[c];this.__events&&this.__events[T]&&this.__events[T].forEach(_=>{_(...p)})}};function G(T,u,p){return(u=function(c){var _=function(m,g){if(typeof m!="object"||m===null)return m;var v=m[Symbol.toPrimitive];if(v!==void 0){var A=v.call(m,"string");if(typeof A!="object")return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(m)}(c);return typeof _=="symbol"?_:String(_)}(u))in T?Object.defineProperty(T,u,{value:p,enumerable:!0,configurable:!0,writable:!0}):T[u]=p,T}let me="",Dt="",Dn=!1;class Yt{static buildGlobalContainer(u){Dn=!0,me=a({className:u,id:u}),o("body").appendChild(me)}constructor(u,p){var c=this;if(G(this,"viewIndexes",[i.days,i.months,i.years]),G(this,"next",()=>{let{year:g,month:v}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(g,v+1,1));break;case i.months:this.setViewDate(new Date(g+1,v,1));break;case i.years:this.setViewDate(new Date(g+10,0,1))}}),G(this,"prev",()=>{let{year:g,month:v}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(g,v-1,1));break;case i.months:this.setViewDate(new Date(g-1,v,1));break;case i.years:this.setViewDate(new Date(g-10,0,1))}}),G(this,"_finishHide",()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)}),G(this,"setPosition",function(g){let v=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(typeof(g=g||c.opts.position)=="function")return void(c.customHide=g({$datepicker:c.$datepicker,$target:c.$el,$pointer:c.$pointer,isViewChange:v,done:c._finishHide}));let A,M,{isMobile:N}=c.opts,x=c.$el.getBoundingClientRect(),U=c.$el.getBoundingClientRect(),it=c.$datepicker.offsetParent,zt=c.$el.offsetParent,bt=c.$datepicker.getBoundingClientRect(),We=g.split(" "),te=window.scrollY,Kt=window.scrollX,Xt=c.opts.offset,Me=We[0],we=We[1];if(N)c.$datepicker.style.cssText="left: 50%; top: 50%";else{if(it===zt&&it!==document.body&&(U={top:c.$el.offsetTop,left:c.$el.offsetLeft,width:x.width,height:c.$el.offsetHeight},te=0,Kt=0),it!==zt&&it!==document.body){let Ye=it.getBoundingClientRect();U={top:x.top-Ye.top,left:x.left-Ye.left,width:x.width,height:x.height},te=0,Kt=0}switch(Me){case"top":A=U.top-bt.height-Xt;break;case"right":M=U.left+U.width+Xt;break;case"bottom":A=U.top+U.height+Xt;break;case"left":M=U.left-bt.width-Xt}switch(we){case"top":A=U.top;break;case"right":M=U.left+U.width-bt.width;break;case"bottom":A=U.top+U.height-bt.height;break;case"left":M=U.left;break;case"center":/left|right/.test(Me)?A=U.top+U.height/2-bt.height/2:M=U.left+U.width/2-bt.width/2}c.$datepicker.style.cssText=`left: ${M+Kt}px; top: ${A+te}px`}}),G(this,"_setInputValue",()=>{let{opts:g,$altField:v,locale:{dateFormat:A}}=this,{altFieldDateFormat:M,altField:N}=g;N&&v&&(v.value=this._getInputValue(M)),this.$el.value=this._getInputValue(A)}),G(this,"_getInputValue",g=>{let{selectedDates:v,opts:A}=this,{multipleDates:M,multipleDatesSeparator:N}=A;if(!v.length)return"";let x=typeof g=="function",U=x?g(M?v:v[0]):v.map(it=>this.formatDate(it,g));return U=x?U:U.join(N),U}),G(this,"_checkIfDateIsSelected",function(g){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i.days,A=!1;return c.selectedDates.some(M=>{let N=$(g,M,v);return A=N&&M,N}),A}),G(this,"_scheduleCallAfterTransition",g=>{this._cancelScheduledCall(),g&&g(!1),this._onTransitionEnd=()=>{g&&g(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})}),G(this,"_cancelScheduledCall",()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)}),G(this,"setViewDate",g=>{if(!((g=Ct(g))instanceof Date)||$(g,this.viewDate))return;let v=this.viewDate;this.viewDate=g;let{onChangeViewDate:A}=this.opts;if(A){let{month:M,year:N}=this.parsedViewDate;A({month:M,year:N,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,g,v)}),G(this,"setFocusDate",function(g){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};(!g||(g=Ct(g))instanceof Date)&&(c.focusDate=g,c.opts.range&&g&&c._handleRangeOnFocus(),c.trigger(i.eventChangeFocusDate,g,v))}),G(this,"setCurrentView",g=>{if(this.viewIndexes.includes(g)){if(this.currentView=g,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(i.eventChangeCurrentView,g),!this.views[g]){let v=this.views[g]=new ie({dp:this,opts:this.opts,type:g});this.shouldUpdateDOM&&this.$content.appendChild(v.$el)}this.opts.onChangeView&&this.opts.onChangeView(g)}}),G(this,"_updateLastSelectedDate",g=>{this.lastSelectedDate=g,this.trigger(i.eventChangeLastSelectedDate,g)}),G(this,"destroy",()=>{let{showEvent:g,isMobile:v}=this.opts,A=this.$datepicker.parentNode;A&&A.removeChild(this.$datepicker),this.$el.removeEventListener(g,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),v&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null}),G(this,"update",function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=ft({},c.opts);ft(c.opts,g);let{timepicker:A,buttons:M,range:N,selectedDates:x,isMobile:U}=c.opts,it=c.visible||c.treatAsInline;c._createMinMaxDates(),c._limitViewDateByMaxMinDates(),c._handleLocale(),!v.selectedDates&&x&&c.selectDate(x),g.view&&c.setCurrentView(g.view),c._setInputValue(),v.range&&!N?(c.rangeDateTo=!1,c.rangeDateFrom=!1):!v.range&&N&&c.selectedDates.length&&(c.rangeDateFrom=c.selectedDates[0],c.rangeDateTo=c.selectedDates[1]),v.timepicker&&!A?(it&&c.timepicker.destroy(),c.timepicker=!1,c.$timepicker.parentNode.removeChild(c.$timepicker)):!v.timepicker&&A&&c._addTimepicker(),!v.buttons&&M?c._addButtons():v.buttons&&!M?(c.buttons.destroy(),c.$buttons.parentNode.removeChild(c.$buttons)):it&&v.buttons&&M&&c.buttons.clearHtml().render(),!v.isMobile&&U?(c.treatAsInline||Dt||c._createMobileOverlay(),c._addMobileAttributes(),c.visible&&c._showMobileOverlay()):v.isMobile&&!U&&(c._removeMobileAttributes(),c.visible&&(Dt.classList.remove("-active-"),typeof c.opts.position!="function"&&c.setPosition())),it&&(c.nav.update(),c.views[c.currentView].render(),c.currentView===i.days&&c.views[c.currentView].renderDayNames())}),G(this,"isOtherMonth",g=>{let{month:v}=d(g);return v!==this.parsedViewDate.month}),G(this,"isOtherYear",g=>{let{year:v}=d(g);return v!==this.parsedViewDate.year}),G(this,"isOtherDecade",g=>{let{year:v}=d(g),[A,M]=D(this.viewDate);return v<A||v>M}),G(this,"_onChangeSelectedDate",g=>{let{silent:v}=g;setTimeout(()=>{this._setInputValue(),this.opts.onSelect&&!v&&this._triggerOnSelect()})}),G(this,"_onChangeFocusedDate",function(g){let{viewDateTransition:v}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!g)return;let A=!1;v&&(A=c.isOtherMonth(g)||c.isOtherYear(g)||c.isOtherDecade(g)),A&&c.setViewDate(g),c.opts.onFocus&&c.opts.onFocus({datepicker:c,date:g})}),G(this,"_onChangeTime",g=>{let{hours:v,minutes:A}=g,M=new Date,{lastSelectedDate:N,opts:{onSelect:x}}=this,U=N;N||(U=M);let it=this.getCell(U,this.currentViewSingular),zt=it&&it.adpCell;zt&&zt.isDisabled||(U.setHours(v),U.setMinutes(A),N?(this._setInputValue(),x&&this._triggerOnSelect()):this.selectDate(U))}),G(this,"_onFocus",g=>{this.visible||this.show()}),G(this,"_onBlur",g=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()}),G(this,"_onMouseDown",g=>{this.inFocus=!0}),G(this,"_onMouseUp",g=>{this.inFocus=!1,this.$el.focus()}),G(this,"_onResize",()=>{this.visible&&typeof this.opts.position!="function"&&this.setPosition()}),G(this,"_onClickOverlay",()=>{this.visible&&this.hide()}),G(this,"getViewDates",function(){let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i.days;return ie.getDatesFunction(g)(c)}),G(this,"isWeekend",g=>this.opts.weekends.includes(g)),G(this,"getClampedDate",g=>{let{minDate:v,maxDate:A}=this,M=g;return A&&j(g,A)?M=A:v&&Z(g,v)&&(M=v),M}),this.$el=o(u),!this.$el)return;this.$datepicker=a({className:"air-datepicker"}),this.opts=ft({},s,p),this.$customContainer=!!this.opts.container&&o(this.opts.container),this.$altField=o(this.opts.altField||!1);let{view:_,startDate:m}=this.opts;m||(this.opts.startDate=new Date),this.$el.nodeName==="INPUT"&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=Ct(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=_,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:u,treatAsInline:p,opts:{inline:c,isMobile:_,selectedDates:m,keyboardNav:g,onlyTimepicker:v}}=this,A=o("body");(!Dn||Dn&&me&&!A.contains(me))&&!c&&this.elIsInput&&!this.$customContainer&&Yt.buildGlobalContainer(Yt.defaultGlobalContainerId),!_||Dt||p||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(c||this._bindEvents(),g&&!v&&(this.keyboardNav=new Di({dp:this,opts:u}))),m&&this.selectDate(m,{silent:!0}),this.opts.visible&&!p&&this.show(),_&&!p&&this.$el.setAttribute("readonly",!0),p&&this._createComponents()}_createMobileOverlay(){Dt=a({className:"air-datepicker-overlay"}),me.appendChild(Dt)}_createComponents(){let{opts:u,treatAsInline:p,opts:{inline:c,buttons:_,timepicker:m,position:g,classes:v,onlyTimepicker:A,isMobile:M}}=this;this._buildBaseHtml(),this.elIsInput&&(c||this._setPositionClasses(g)),!c&&this.elIsInput||this.$datepicker.classList.add("-inline-"),v&&this.$datepicker.classList.add(...v.split(" ")),A&&this.$datepicker.classList.add("-only-timepicker-"),M&&!p&&this._addMobileAttributes(),this.views[this.currentView]=new ie({dp:this,type:this.currentView,opts:u}),this.nav=new An({dp:this,opts:u}),m&&this._addTimepicker(),_&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let u in this.views)this.views[u].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){Dt.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){Dt.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||this.initialReadonly===""||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:u,maxDate:p}=this.opts;this.minDate=!!u&&Ct(u),this.maxDate=!!p&&Ct(p)}_addTimepicker(){this.$timepicker=a({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new _r({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=a({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new Ci({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:u}=this.opts;var p,c;this.elIsInput?u?(p=this.$datepicker,(c=this.$el).parentNode.insertBefore(p,c.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=o(".air-datepicker--content",this.$datepicker),this.$pointer=o(".air-datepicker--pointer",this.$datepicker),this.$nav=o(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:u,dateFormat:p,firstDay:c,timepicker:_,onlyTimepicker:m,timeFormat:g,dateTimeSeparator:v}=this.opts;var A;this.locale=(A=u,JSON.parse(JSON.stringify(A))),p&&(this.locale.dateFormat=p),g!==void 0&&g!==""&&(this.locale.timeFormat=g);let{timeFormat:M}=this.locale;if(c!==""&&(this.locale.firstDay=c),_&&typeof p!="function"){let N=M?v:"";this.locale.dateFormat=[this.locale.dateFormat,M||""].join(N)}m&&typeof p!="function"&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(u){if(typeof u=="function")return void this.$datepicker.classList.add("-custom-position-");let p=(u=u.split(" "))[0],c=`air-datepicker -${p}-${u[1]}- -from-${p}-`;this.$datepicker.classList.add(...c.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:u,minDate:p,maxDate:c}=this;c&&j(u,c)&&this.setViewDate(c),p&&Z(u,p)&&this.setViewDate(p)}formatDate(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.viewDate,p=arguments.length>1?arguments[1]:void 0;if(u=Ct(u),!(u instanceof Date))return;let c=p,_=this.locale,m=d(u),g=m.dayPeriod,v=D(u),A=Yt.replacer,M={T:u.getTime(),m:m.minutes,mm:m.fullMinutes,h:m.hours12,hh:m.fullHours12,H:m.hours,HH:m.fullHours,aa:g,AA:g.toUpperCase(),E:_.daysShort[m.day],EEEE:_.days[m.day],d:m.date,dd:m.fullDate,M:m.month+1,MM:m.fullMonth,MMM:_.monthsShort[m.month],MMMM:_.months[m.month],yy:m.year.toString().slice(-2),yyyy:m.year,yyyy1:v[0],yyyy2:v[1]};for(let[N,x]of Object.entries(M))c=A(c,xe(N),x);return c}down(u){this._handleUpDownActions(u,"down")}up(u){this._handleUpDownActions(u,"up")}selectDate(u){let p,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{currentView:_,parsedViewDate:m,selectedDates:g}=this,{updateTime:v}=c,{moveToOtherMonthsOnSelect:A,moveToOtherYearsOnSelect:M,multipleDates:N,range:x,autoClose:U,onBeforeSelect:it}=this.opts,zt=g.length;if(Array.isArray(u))return u.forEach(bt=>{this.selectDate(bt,c)}),new Promise(bt=>{setTimeout(bt)});if((u=Ct(u))instanceof Date){if(it&&!it({date:u,datepicker:this}))return Promise.resolve();if(_===i.days&&u.getMonth()!==m.month&&A&&(p=new Date(u.getFullYear(),u.getMonth(),1)),_===i.years&&u.getFullYear()!==m.year&&M&&(p=new Date(u.getFullYear(),0,1)),p&&this.setViewDate(p),N&&!x){if(zt===N)return;this._checkIfDateIsSelected(u)||g.push(u)}else if(x)switch(zt){case 1:g.push(u),this.rangeDateTo||(this.rangeDateTo=u),j(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=u),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[u],this.rangeDateFrom=u,this.rangeDateTo="";break;default:this.selectedDates=[u],this.rangeDateFrom=u}else this.selectedDates=[u];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:c?.silent,date:u,updateTime:v}),this._updateLastSelectedDate(u),U&&!this.timepickerIsActive&&this.visible&&(N||x?x&&zt===1&&this.hide():this.hide()),new Promise(bt=>{setTimeout(bt)})}}unselectDate(u){let p=this.selectedDates,c=this;if((u=Ct(u))instanceof Date)return p.some((_,m)=>{if($(_,u))return p.splice(m,1),c.selectedDates.length?c._updateLastSelectedDate(c.selectedDates[c.selectedDates.length-1]):(c.rangeDateFrom="",c.rangeDateTo="",c._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:u}),!0})}replaceDate(u,p){let c=this.selectedDates.find(m=>$(m,u,this.currentView)),_=this.selectedDates.indexOf(c);_<0||$(this.selectedDates[_],p,this.currentView)||(this.selectedDates[_]=p,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:p,updateTime:!0}),this._updateLastSelectedDate(p))}clear(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.lastSelectedDate=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:u.silent}),new Promise(p=>{setTimeout(p)})}show(){let{onShow:u,isMobile:p}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,u&&this._scheduleCallAfterTransition(u),p&&this._showMobileOverlay()}hide(){let{onHide:u,isMobile:p}=this.opts,c=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition(_=>{!this.customHide&&(_&&c||!_&&!c)&&this._finishHide(),u&&u(_)}),p&&Dt.classList.remove("-active-")}_triggerOnSelect(){let u=[],p=[],{selectedDates:c,locale:_,opts:{onSelect:m,multipleDates:g,range:v}}=this,A=g||v,M=typeof _.dateFormat=="function";c.length&&(u=c.map(ct),p=M?g?_.dateFormat(u):u.map(N=>_.dateFormat(N)):u.map(N=>this.formatDate(N,_.dateFormat))),m({date:A?u:u[0],formattedDate:A?p:p[0],datepicker:this})}_handleAlreadySelectedDates(u,p){const{range:c,toggleSelected:_}=this.opts;let m=typeof _=="function"?_({datepicker:this,date:p}):_;c&&(m||this.selectedDates.length!==2&&this.selectDate(p)),m?this.unselectDate(p):this._updateLastSelectedDate(u)}_handleUpDownActions(u,p){if(!((u=Ct(u||this.focusDate||this.viewDate))instanceof Date))return;let c=p==="up"?this.viewIndex+1:this.viewIndex-1;c>2&&(c=2),c<0&&(c=0),this.setViewDate(new Date(u.getFullYear(),u.getMonth(),1)),this.setCurrentView(this.viewIndexes[c])}_handleRangeOnFocus(){this.selectedDates.length===1&&(j(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(u){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:i.day;if(!((u=Ct(u))instanceof Date))return;let{year:c,month:_,date:m}=d(u),g=`[data-year="${c}"]`,v=`[data-month="${_}"]`,A={[i.day]:`${g}${v}[data-date="${m}"]`,[i.month]:`${g}${v}`,[i.year]:`${g}`};return this.views[this.currentView].$el.querySelector(A[p])}_showMobileOverlay(){Dt.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((u,p)=>parseFloat(p)+u,0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return d(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return D(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||me}static replacer(u,p,c){return u.replace(p,function(_,m,g,v){return m+c+v})}}var yr;return G(Yt,"defaults",s),G(Yt,"version","3.4.0"),G(Yt,"defaultGlobalContainerId","air-datepicker-global-container"),yr=Yt.prototype,Object.assign(yr,Cn),r.default}()})})(tl);var xh=tl.exports;const Mh=Dh(xh),Nh="/assets/sprite-KSFqgNb7.svg";var Te;(function(e){e.Range="range",e.Steps="steps",e.Positions="positions",e.Count="count",e.Values="values"})(Te||(Te={}));var Ht;(function(e){e[e.None=-1]="None",e[e.NoValue=0]="NoValue",e[e.LargeValue=1]="LargeValue",e[e.SmallValue=2]="SmallValue"})(Ht||(Ht={}));function Oh(e){return Nr(e)&&typeof e.from=="function"}function Nr(e){return typeof e=="object"&&typeof e.to=="function"}function $o(e){e.parentElement.removeChild(e)}function Ji(e){return e!=null}function Uo(e){e.preventDefault()}function Lh(e){return e.filter(function(t){return this[t]?!1:this[t]=!0},{})}function Fh(e,t){return Math.round(e/t)*t}function $h(e,t){var n=e.getBoundingClientRect(),r=e.ownerDocument,i=r.documentElement,s=el(r);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),t?n.top+s.y-i.clientTop:n.left+s.x-i.clientLeft}function ee(e){return typeof e=="number"&&!isNaN(e)&&isFinite(e)}function Bo(e,t,n){n>0&&(Ot(e,t),setTimeout(function(){Vr(e,t)},n))}function jo(e){return Math.max(Math.min(e,100),0)}function Jr(e){return Array.isArray(e)?e:[e]}function Uh(e){e=String(e);var t=e.split(".");return t.length>1?t[1].length:0}function Ot(e,t){e.classList&&!/\s/.test(t)?e.classList.add(t):e.className+=" "+t}function Vr(e,t){e.classList&&!/\s/.test(t)?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}function Bh(e,t){return e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className)}function el(e){var t=window.pageXOffset!==void 0,n=(e.compatMode||"")==="CSS1Compat",r=t?window.pageXOffset:n?e.documentElement.scrollLeft:e.body.scrollLeft,i=t?window.pageYOffset:n?e.documentElement.scrollTop:e.body.scrollTop;return{x:r,y:i}}function jh(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function Hh(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch{}return e}function qh(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function xs(e,t){return 100/(t-e)}function Zi(e,t,n){return t*100/(e[n+1]-e[n])}function zh(e,t){return Zi(e,e[0]<0?t+Math.abs(e[0]):t-e[0],0)}function Kh(e,t){return t*(e[1]-e[0])/100+e[0]}function Bn(e,t){for(var n=1;e>=t[n];)n+=1;return n}function Gh(e,t,n){if(n>=e.slice(-1)[0])return 100;var r=Bn(n,e),i=e[r-1],s=e[r],o=t[r-1],a=t[r];return o+zh([i,s],n)/xs(o,a)}function Qh(e,t,n){if(n>=100)return e.slice(-1)[0];var r=Bn(n,t),i=e[r-1],s=e[r],o=t[r-1],a=t[r];return Kh([i,s],(n-o)*xs(o,a))}function Wh(e,t,n,r){if(r===100)return r;var i=Bn(r,e),s=e[i-1],o=e[i];return n?r-s>(o-s)/2?o:s:t[i-1]?e[i-1]+Fh(r-e[i-1],t[i-1]):r}var nl=function(){function e(t,n,r){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=n;var i,s=[];for(Object.keys(t).forEach(function(o){s.push([Jr(t[o]),o])}),s.sort(function(o,a){return o[0][0]-a[0][0]}),i=0;i<s.length;i++)this.handleEntryPoint(s[i][1],s[i][0]);for(this.xNumSteps=this.xSteps.slice(0),i=0;i<this.xNumSteps.length;i++)this.handleStepPoint(i,this.xNumSteps[i])}return e.prototype.getDistance=function(t){for(var n=[],r=0;r<this.xNumSteps.length-1;r++)n[r]=Zi(this.xVal,t,r);return n},e.prototype.getAbsoluteDistance=function(t,n,r){var i=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[i+1];)i++;else t===this.xPct[this.xPct.length-1]&&(i=this.xPct.length-2);!r&&t===this.xPct[i+1]&&i++,n===null&&(n=[]);var s,o=1,a=n[i],l=0,h=0,d=0,E=0;for(r?s=(t-this.xPct[i])/(this.xPct[i+1]-this.xPct[i]):s=(this.xPct[i+1]-t)/(this.xPct[i+1]-this.xPct[i]);a>0;)l=this.xPct[i+1+E]-this.xPct[i+E],n[i+E]*o+100-s*100>100?(h=l*s,o=(a-100*s)/n[i+E],s=1):(h=n[i+E]*l/100*o,o=0),r?(d=d-h,this.xPct.length+E>=1&&E--):(d=d+h,this.xPct.length-E>=1&&E++),a=n[i+E]*o;return t+d},e.prototype.toStepping=function(t){return t=Gh(this.xVal,this.xPct,t),t},e.prototype.fromStepping=function(t){return Qh(this.xVal,this.xPct,t)},e.prototype.getStep=function(t){return t=Wh(this.xPct,this.xSteps,this.snap,t),t},e.prototype.getDefaultStep=function(t,n,r){var i=Bn(t,this.xPct);return(t===100||n&&t===this.xPct[i-1])&&(i=Math.max(i-1,1)),(this.xVal[i]-this.xVal[i-1])/r},e.prototype.getNearbySteps=function(t){var n=Bn(t,this.xPct);return{stepBefore:{startValue:this.xVal[n-2],step:this.xNumSteps[n-2],highestStep:this.xHighestCompleteStep[n-2]},thisStep:{startValue:this.xVal[n-1],step:this.xNumSteps[n-1],highestStep:this.xHighestCompleteStep[n-1]},stepAfter:{startValue:this.xVal[n],step:this.xNumSteps[n],highestStep:this.xHighestCompleteStep[n]}}},e.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(Uh);return Math.max.apply(null,t)},e.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},e.prototype.convert=function(t){return this.getStep(this.toStepping(t))},e.prototype.handleEntryPoint=function(t,n){var r;if(t==="min"?r=0:t==="max"?r=100:r=parseFloat(t),!ee(r)||!ee(n[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(r),this.xVal.push(n[0]);var i=Number(n[1]);r?this.xSteps.push(isNaN(i)?!1:i):isNaN(i)||(this.xSteps[0]=i),this.xHighestCompleteStep.push(0)},e.prototype.handleStepPoint=function(t,n){if(n){if(this.xVal[t]===this.xVal[t+1]){this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t];return}this.xSteps[t]=Zi([this.xVal[t],this.xVal[t+1]],n,0)/xs(this.xPct[t],this.xPct[t+1]);var r=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],i=Math.ceil(Number(r.toFixed(3))-1),s=this.xVal[t]+this.xNumSteps[t]*i;this.xHighestCompleteStep[t]=s}},e}(),Ho={to:function(e){return e===void 0?"":e.toFixed(2)},from:Number},rl={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},Ee={tooltips:".__tooltips",aria:".__aria"};function Yh(e,t){if(!ee(t))throw new Error("noUiSlider: 'step' is not numeric.");e.singleStep=t}function Xh(e,t){if(!ee(t))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");e.keyboardPageMultiplier=t}function Jh(e,t){if(!ee(t))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");e.keyboardMultiplier=t}function Zh(e,t){if(!ee(t))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");e.keyboardDefaultStep=t}function tc(e,t){if(typeof t!="object"||Array.isArray(t))throw new Error("noUiSlider: 'range' is not an object.");if(t.min===void 0||t.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");e.spectrum=new nl(t,e.snap||!1,e.singleStep)}function ec(e,t){if(t=Jr(t),!Array.isArray(t)||!t.length)throw new Error("noUiSlider: 'start' option is incorrect.");e.handles=t.length,e.start=t}function nc(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");e.snap=t}function rc(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");e.animate=t}function ic(e,t){if(typeof t!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");e.animationDuration=t}function sc(e,t){var n=[!1],r;if(t==="lower"?t=[!0,!1]:t==="upper"&&(t=[!1,!0]),t===!0||t===!1){for(r=1;r<e.handles;r++)n.push(t);n.push(!1)}else{if(!Array.isArray(t)||!t.length||t.length!==e.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=t}e.connect=n}function oc(e,t){switch(t){case"horizontal":e.ort=0;break;case"vertical":e.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function il(e,t){if(!ee(t))throw new Error("noUiSlider: 'margin' option must be numeric.");t!==0&&(e.margin=e.spectrum.getDistance(t))}function ac(e,t){if(!ee(t))throw new Error("noUiSlider: 'limit' option must be numeric.");if(e.limit=e.spectrum.getDistance(t),!e.limit||e.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function lc(e,t){var n;if(!ee(t)&&!Array.isArray(t))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(t)&&!(t.length===2||ee(t[0])||ee(t[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(t!==0){for(Array.isArray(t)||(t=[t,t]),e.padding=[e.spectrum.getDistance(t[0]),e.spectrum.getDistance(t[1])],n=0;n<e.spectrum.xNumSteps.length-1;n++)if(e.padding[0][n]<0||e.padding[1][n]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var r=t[0]+t[1],i=e.spectrum.xVal[0],s=e.spectrum.xVal[e.spectrum.xVal.length-1];if(r/(s-i)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function uc(e,t){switch(t){case"ltr":e.dir=0;break;case"rtl":e.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function hc(e,t){if(typeof t!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var n=t.indexOf("tap")>=0,r=t.indexOf("drag")>=0,i=t.indexOf("fixed")>=0,s=t.indexOf("snap")>=0,o=t.indexOf("hover")>=0,a=t.indexOf("unconstrained")>=0,l=t.indexOf("drag-all")>=0,h=t.indexOf("smooth-steps")>=0;if(i){if(e.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");il(e,e.start[1]-e.start[0])}if(a&&(e.margin||e.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");e.events={tap:n||s,drag:r,dragAll:l,smoothSteps:h,fixed:i,snap:s,hover:o,unconstrained:a}}function cc(e,t){if(t!==!1)if(t===!0||Nr(t)){e.tooltips=[];for(var n=0;n<e.handles;n++)e.tooltips.push(t)}else{if(t=Jr(t),t.length!==e.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");t.forEach(function(r){if(typeof r!="boolean"&&!Nr(r))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),e.tooltips=t}}function dc(e,t){if(t.length!==e.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");e.handleAttributes=t}function fc(e,t){if(!Nr(t))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");e.ariaFormat=t}function pc(e,t){if(!Oh(t))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");e.format=t}function gc(e,t){if(typeof t!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");e.keyboardSupport=t}function mc(e,t){e.documentElement=t}function _c(e,t){if(typeof t!="string"&&t!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");e.cssPrefix=t}function yc(e,t){if(typeof t!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof e.cssPrefix=="string"?(e.cssClasses={},Object.keys(t).forEach(function(n){e.cssClasses[n]=e.cssPrefix+t[n]})):e.cssClasses=t}function sl(e){var t={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Ho,format:Ho},n={step:{r:!1,t:Yh},keyboardPageMultiplier:{r:!1,t:Xh},keyboardMultiplier:{r:!1,t:Jh},keyboardDefaultStep:{r:!1,t:Zh},start:{r:!0,t:ec},connect:{r:!0,t:sc},direction:{r:!0,t:uc},snap:{r:!1,t:nc},animate:{r:!1,t:rc},animationDuration:{r:!1,t:ic},range:{r:!0,t:tc},orientation:{r:!1,t:oc},margin:{r:!1,t:il},limit:{r:!1,t:ac},padding:{r:!1,t:lc},behaviour:{r:!0,t:hc},ariaFormat:{r:!1,t:fc},format:{r:!1,t:pc},tooltips:{r:!1,t:cc},keyboardSupport:{r:!0,t:gc},documentElement:{r:!1,t:mc},cssPrefix:{r:!0,t:_c},cssClasses:{r:!0,t:yc},handleAttributes:{r:!1,t:dc}},r={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:rl,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(l){if(!Ji(e[l])&&r[l]===void 0){if(n[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}n[l].t(t,Ji(e[l])?e[l]:r[l])}),t.pips=e.pips;var i=document.createElement("div"),s=i.style.msTransform!==void 0,o=i.style.transform!==void 0;t.transformRule=o?"transform":s?"msTransform":"webkitTransform";var a=[["left","top"],["right","bottom"]];return t.style=a[t.dir][t.ort],t}function vc(e,t,n){var r=jh(),i=qh(),s=i&&Hh(),o=e,a,l,h,d,E,I=t.spectrum,D=[],F=[],$=[],j=0,Z={},ct=e.ownerDocument,rt=t.documentElement||ct.documentElement,gt=ct.body,Gt=ct.dir==="rtl"||t.ort===1?0:100;function ft(f,y){var w=ct.createElement("div");return y&&Ot(w,y),f.appendChild(w),w}function Ct(f,y){var w=ft(f,t.cssClasses.origin),C=ft(w,t.cssClasses.handle);if(ft(C,t.cssClasses.touchArea),C.setAttribute("data-handle",String(y)),t.keyboardSupport&&(C.setAttribute("tabindex","0"),C.addEventListener("keydown",function(R){return g(R,y)})),t.handleAttributes!==void 0){var V=t.handleAttributes[y];Object.keys(V).forEach(function(R){C.setAttribute(R,V[R])})}return C.setAttribute("role","slider"),C.setAttribute("aria-orientation",t.ort?"vertical":"horizontal"),y===0?Ot(C,t.cssClasses.handleLower):y===t.handles-1&&Ot(C,t.cssClasses.handleUpper),w.handle=C,w}function xe(f,y){return y?ft(f,t.cssClasses.connect):!1}function Zt(f,y){var w=ft(y,t.cssClasses.connects);l=[],h=[],h.push(xe(w,f[0]));for(var C=0;C<t.handles;C++)l.push(Ct(y,C)),$[C]=C,h.push(xe(w,f[C+1]))}function Qe(f){Ot(f,t.cssClasses.target),t.dir===0?Ot(f,t.cssClasses.ltr):Ot(f,t.cssClasses.rtl),t.ort===0?Ot(f,t.cssClasses.horizontal):Ot(f,t.cssClasses.vertical);var y=getComputedStyle(f).direction;return y==="rtl"?Ot(f,t.cssClasses.textDirectionRtl):Ot(f,t.cssClasses.textDirectionLtr),ft(f,t.cssClasses.base)}function Qt(f,y){return!t.tooltips||!t.tooltips[y]?!1:ft(f.firstChild,t.cssClasses.tooltip)}function mr(){return o.hasAttribute("disabled")}function de(f){var y=l[f];return y.hasAttribute("disabled")}function ie(f){f!=null?(l[f].setAttribute("disabled",""),l[f].handle.removeAttribute("tabindex")):(o.setAttribute("disabled",""),l.forEach(function(y){y.handle.removeAttribute("tabindex")}))}function fe(f){f!=null?(l[f].removeAttribute("disabled"),l[f].handle.setAttribute("tabindex","0")):(o.removeAttribute("disabled"),l.forEach(function(y){y.removeAttribute("disabled"),y.handle.setAttribute("tabindex","0")}))}function An(){E&&(N("update"+Ee.tooltips),E.forEach(function(f){f&&$o(f)}),E=null)}function Sn(){An(),E=l.map(Qt),A("update"+Ee.tooltips,function(f,y,w){if(!(!E||!t.tooltips)&&E[y]!==!1){var C=f[y];t.tooltips[y]!==!0&&(C=t.tooltips[y].to(w[y])),E[y].innerHTML=C}})}function Ci(){N("update"+Ee.aria),A("update"+Ee.aria,function(f,y,w,C,V){$.forEach(function(R){var H=l[R],L=U(F,R,0,!0,!0,!0),ot=U(F,R,100,!0,!0,!0),st=V[R],lt=String(t.ariaFormat.to(w[R]));L=I.fromStepping(L).toFixed(1),ot=I.fromStepping(ot).toFixed(1),st=I.fromStepping(st).toFixed(1),H.children[0].setAttribute("aria-valuemin",L),H.children[0].setAttribute("aria-valuemax",ot),H.children[0].setAttribute("aria-valuenow",st),H.children[0].setAttribute("aria-valuetext",lt)})})}function pe(f){if(f.mode===Te.Range||f.mode===Te.Steps)return I.xVal;if(f.mode===Te.Count){if(f.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var y=f.values-1,w=100/y,C=[];y--;)C[y]=y*w;return C.push(100),_r(C,f.stepped)}return f.mode===Te.Positions?_r(f.values,f.stepped):f.mode===Te.Values?f.stepped?f.values.map(function(V){return I.fromStepping(I.getStep(I.toStepping(V)))}):f.values:[]}function _r(f,y){return f.map(function(w){return I.fromStepping(y?I.getStep(w):w)})}function ge(f){function y(st,lt){return Number((st+lt).toFixed(7))}var w=pe(f),C={},V=I.xVal[0],R=I.xVal[I.xVal.length-1],H=!1,L=!1,ot=0;return w=Lh(w.slice().sort(function(st,lt){return st-lt})),w[0]!==V&&(w.unshift(V),H=!0),w[w.length-1]!==R&&(w.push(R),L=!0),w.forEach(function(st,lt){var ut,tt,mt,Mt=st,Et=w[lt+1],Rt,Ri,Vi,Pi,Oo,ki,Lo,Fo=f.mode===Te.Steps;for(Fo&&(ut=I.xNumSteps[lt]),ut||(ut=Et-Mt),Et===void 0&&(Et=Mt),ut=Math.max(ut,1e-7),tt=Mt;tt<=Et;tt=y(tt,ut)){for(Rt=I.toStepping(tt),Ri=Rt-ot,Oo=Ri/(f.density||1),ki=Math.round(Oo),Lo=Ri/ki,mt=1;mt<=ki;mt+=1)Vi=ot+mt*Lo,C[Vi.toFixed(5)]=[I.fromStepping(Vi),0];Pi=w.indexOf(tt)>-1?Ht.LargeValue:Fo?Ht.SmallValue:Ht.NoValue,!lt&&H&&tt!==Et&&(Pi=0),tt===Et&&L||(C[Rt.toFixed(5)]=[tt,Pi]),ot=Rt}}),C}function Di(f,y,w){var C,V,R=ct.createElement("div"),H=(C={},C[Ht.None]="",C[Ht.NoValue]=t.cssClasses.valueNormal,C[Ht.LargeValue]=t.cssClasses.valueLarge,C[Ht.SmallValue]=t.cssClasses.valueSub,C),L=(V={},V[Ht.None]="",V[Ht.NoValue]=t.cssClasses.markerNormal,V[Ht.LargeValue]=t.cssClasses.markerLarge,V[Ht.SmallValue]=t.cssClasses.markerSub,V),ot=[t.cssClasses.valueHorizontal,t.cssClasses.valueVertical],st=[t.cssClasses.markerHorizontal,t.cssClasses.markerVertical];Ot(R,t.cssClasses.pips),Ot(R,t.ort===0?t.cssClasses.pipsHorizontal:t.cssClasses.pipsVertical);function lt(tt,mt){var Mt=mt===t.cssClasses.value,Et=Mt?ot:st,Rt=Mt?H:L;return mt+" "+Et[t.ort]+" "+Rt[tt]}function ut(tt,mt,Mt){if(Mt=y?y(mt,Mt):Mt,Mt!==Ht.None){var Et=ft(R,!1);Et.className=lt(Mt,t.cssClasses.marker),Et.style[t.style]=tt+"%",Mt>Ht.NoValue&&(Et=ft(R,!1),Et.className=lt(Mt,t.cssClasses.value),Et.setAttribute("data-value",String(mt)),Et.style[t.style]=tt+"%",Et.innerHTML=String(w.to(mt)))}}return Object.keys(f).forEach(function(tt){ut(tt,f[tt][0],f[tt][1])}),R}function Cn(){d&&($o(d),d=null)}function G(f){Cn();var y=ge(f),w=f.filter,C=f.format||{to:function(V){return String(Math.round(V))}};return d=o.appendChild(Di(y,w,C)),d}function me(){var f=a.getBoundingClientRect(),y="offset"+["Width","Height"][t.ort];return t.ort===0?f.width||a[y]:f.height||a[y]}function Dt(f,y,w,C){var V=function(H){var L=Dn(H,C.pageOffset,C.target||y);if(!L||mr()&&!C.doNotReject||Bh(o,t.cssClasses.tap)&&!C.doNotReject||f===r.start&&L.buttons!==void 0&&L.buttons>1||C.hover&&L.buttons)return!1;s||L.preventDefault(),L.calcPoint=L.points[t.ort],w(L,C)},R=[];return f.split(" ").forEach(function(H){y.addEventListener(H,V,s?{passive:!0}:!1),R.push([H,V])}),R}function Dn(f,y,w){var C=f.type.indexOf("touch")===0,V=f.type.indexOf("mouse")===0,R=f.type.indexOf("pointer")===0,H=0,L=0;if(f.type.indexOf("MSPointer")===0&&(R=!0),f.type==="mousedown"&&!f.buttons&&!f.touches)return!1;if(C){var ot=function(ut){var tt=ut.target;return tt===w||w.contains(tt)||f.composed&&f.composedPath().shift()===w};if(f.type==="touchstart"){var st=Array.prototype.filter.call(f.touches,ot);if(st.length>1)return!1;H=st[0].pageX,L=st[0].pageY}else{var lt=Array.prototype.find.call(f.changedTouches,ot);if(!lt)return!1;H=lt.pageX,L=lt.pageY}}return y=y||el(ct),(V||R)&&(H=f.clientX+y.x,L=f.clientY+y.y),f.pageOffset=y,f.points=[H,L],f.cursor=V||R,f}function Yt(f){var y=f-$h(a,t.ort),w=y*100/me();return w=jo(w),t.dir?100-w:w}function yr(f){var y=100,w=!1;return l.forEach(function(C,V){if(!de(V)){var R=F[V],H=Math.abs(R-f),L=H===100&&y===100,ot=H<y,st=H<=y&&f>R;(ot||st||L)&&(w=V,y=H)}}),w}function T(f,y){f.type==="mouseout"&&f.target.nodeName==="HTML"&&f.relatedTarget===null&&p(f,y)}function u(f,y){if(navigator.appVersion.indexOf("MSIE 9")===-1&&f.buttons===0&&y.buttonsProperty!==0)return p(f,y);var w=(t.dir?-1:1)*(f.calcPoint-y.startCalcPoint),C=w*100/y.baseSize;zt(w>0,C,y.locations,y.handleNumbers,y.connect)}function p(f,y){y.handle&&(Vr(y.handle,t.cssClasses.active),j-=1),y.listeners.forEach(function(w){rt.removeEventListener(w[0],w[1])}),j===0&&(Vr(o,t.cssClasses.drag),te(),f.cursor&&(gt.style.cursor="",gt.removeEventListener("selectstart",Uo))),t.events.smoothSteps&&(y.handleNumbers.forEach(function(w){Kt(w,F[w],!0,!0,!1,!1)}),y.handleNumbers.forEach(function(w){x("update",w)})),y.handleNumbers.forEach(function(w){x("change",w),x("set",w),x("end",w)})}function c(f,y){if(!y.handleNumbers.some(de)){var w;if(y.handleNumbers.length===1){var C=l[y.handleNumbers[0]];w=C.children[0],j+=1,Ot(w,t.cssClasses.active)}f.stopPropagation();var V=[],R=Dt(r.move,rt,u,{target:f.target,handle:w,connect:y.connect,listeners:V,startCalcPoint:f.calcPoint,baseSize:me(),pageOffset:f.pageOffset,handleNumbers:y.handleNumbers,buttonsProperty:f.buttons,locations:F.slice()}),H=Dt(r.end,rt,p,{target:f.target,handle:w,listeners:V,doNotReject:!0,handleNumbers:y.handleNumbers}),L=Dt("mouseout",rt,T,{target:f.target,handle:w,listeners:V,doNotReject:!0,handleNumbers:y.handleNumbers});V.push.apply(V,R.concat(H,L)),f.cursor&&(gt.style.cursor=getComputedStyle(f.target).cursor,l.length>1&&Ot(o,t.cssClasses.drag),gt.addEventListener("selectstart",Uo,!1)),y.handleNumbers.forEach(function(ot){x("start",ot)})}}function _(f){f.stopPropagation();var y=Yt(f.calcPoint),w=yr(y);w!==!1&&(t.events.snap||Bo(o,t.cssClasses.tap,t.animationDuration),Kt(w,y,!0,!0),te(),x("slide",w,!0),x("update",w,!0),t.events.snap?c(f,{handleNumbers:[w]}):(x("change",w,!0),x("set",w,!0)))}function m(f){var y=Yt(f.calcPoint),w=I.getStep(y),C=I.fromStepping(w);Object.keys(Z).forEach(function(V){V.split(".")[0]==="hover"&&Z[V].forEach(function(R){R.call(vr,C)})})}function g(f,y){if(mr()||de(y))return!1;var w=["Left","Right"],C=["Down","Up"],V=["PageDown","PageUp"],R=["Home","End"];t.dir&&!t.ort?w.reverse():t.ort&&!t.dir&&(C.reverse(),V.reverse());var H=f.key.replace("Arrow",""),L=H===V[0],ot=H===V[1],st=H===C[0]||H===w[0]||L,lt=H===C[1]||H===w[1]||ot,ut=H===R[0],tt=H===R[1];if(!st&&!lt&&!ut&&!tt)return!0;f.preventDefault();var mt;if(lt||st){var Mt=st?0:1,Et=No(y),Rt=Et[Mt];if(Rt===null)return!1;Rt===!1&&(Rt=I.getDefaultStep(F[y],st,t.keyboardDefaultStep)),ot||L?Rt*=t.keyboardPageMultiplier:Rt*=t.keyboardMultiplier,Rt=Math.max(Rt,1e-7),Rt=(st?-1:1)*Rt,mt=D[y]+Rt}else tt?mt=t.spectrum.xVal[t.spectrum.xVal.length-1]:mt=t.spectrum.xVal[0];return Kt(y,I.toStepping(mt),!0,!0),x("slide",y),x("update",y),x("change",y),x("set",y),!1}function v(f){f.fixed||l.forEach(function(y,w){Dt(r.start,y.children[0],c,{handleNumbers:[w]})}),f.tap&&Dt(r.start,a,_,{}),f.hover&&Dt(r.move,a,m,{hover:!0}),f.drag&&h.forEach(function(y,w){if(!(y===!1||w===0||w===h.length-1)){var C=l[w-1],V=l[w],R=[y],H=[C,V],L=[w-1,w];Ot(y,t.cssClasses.draggable),f.fixed&&(R.push(C.children[0]),R.push(V.children[0])),f.dragAll&&(H=l,L=$),R.forEach(function(ot){Dt(r.start,ot,c,{handles:H,handleNumbers:L,connect:y})})}})}function A(f,y){Z[f]=Z[f]||[],Z[f].push(y),f.split(".")[0]==="update"&&l.forEach(function(w,C){x("update",C)})}function M(f){return f===Ee.aria||f===Ee.tooltips}function N(f){var y=f&&f.split(".")[0],w=y?f.substring(y.length):f;Object.keys(Z).forEach(function(C){var V=C.split(".")[0],R=C.substring(V.length);(!y||y===V)&&(!w||w===R)&&(!M(R)||w===R)&&delete Z[C]})}function x(f,y,w){Object.keys(Z).forEach(function(C){var V=C.split(".")[0];f===V&&Z[C].forEach(function(R){R.call(vr,D.map(t.format.to),y,D.slice(),w||!1,F.slice(),vr)})})}function U(f,y,w,C,V,R,H){var L;return l.length>1&&!t.events.unconstrained&&(C&&y>0&&(L=I.getAbsoluteDistance(f[y-1],t.margin,!1),w=Math.max(w,L)),V&&y<l.length-1&&(L=I.getAbsoluteDistance(f[y+1],t.margin,!0),w=Math.min(w,L))),l.length>1&&t.limit&&(C&&y>0&&(L=I.getAbsoluteDistance(f[y-1],t.limit,!1),w=Math.min(w,L)),V&&y<l.length-1&&(L=I.getAbsoluteDistance(f[y+1],t.limit,!0),w=Math.max(w,L))),t.padding&&(y===0&&(L=I.getAbsoluteDistance(0,t.padding[0],!1),w=Math.max(w,L)),y===l.length-1&&(L=I.getAbsoluteDistance(100,t.padding[1],!0),w=Math.min(w,L))),H||(w=I.getStep(w)),w=jo(w),w===f[y]&&!R?!1:w}function it(f,y){var w=t.ort;return(w?y:f)+", "+(w?f:y)}function zt(f,y,w,C,V){var R=w.slice(),H=C[0],L=t.events.smoothSteps,ot=[!f,f],st=[f,!f];C=C.slice(),f&&C.reverse(),C.length>1?C.forEach(function(ut,tt){var mt=U(R,ut,R[ut]+y,ot[tt],st[tt],!1,L);mt===!1?y=0:(y=mt-R[ut],R[ut]=mt)}):ot=st=[!0];var lt=!1;C.forEach(function(ut,tt){lt=Kt(ut,w[ut]+y,ot[tt],st[tt],!1,L)||lt}),lt&&(C.forEach(function(ut){x("update",ut),x("slide",ut)}),V!=null&&x("drag",H))}function bt(f,y){return t.dir?100-f-y:f}function We(f,y){F[f]=y,D[f]=I.fromStepping(y);var w=bt(y,0)-Gt,C="translate("+it(w+"%","0")+")";l[f].style[t.transformRule]=C,Xt(f),Xt(f+1)}function te(){$.forEach(function(f){var y=F[f]>50?-1:1,w=3+(l.length+y*f);l[f].style.zIndex=String(w)})}function Kt(f,y,w,C,V,R){return V||(y=U(F,f,y,w,C,!1,R)),y===!1?!1:(We(f,y),!0)}function Xt(f){if(h[f]){var y=0,w=100;f!==0&&(y=F[f-1]),f!==h.length-1&&(w=F[f]);var C=w-y,V="translate("+it(bt(y,C)+"%","0")+")",R="scale("+it(C/100,"1")+")";h[f].style[t.transformRule]=V+" "+R}}function Me(f,y){return f===null||f===!1||f===void 0||(typeof f=="number"&&(f=String(f)),f=t.format.from(f),f!==!1&&(f=I.toStepping(f)),f===!1||isNaN(f))?F[y]:f}function we(f,y,w){var C=Jr(f),V=F[0]===void 0;y=y===void 0?!0:y,t.animate&&!V&&Bo(o,t.cssClasses.tap,t.animationDuration),$.forEach(function(L){Kt(L,Me(C[L],L),!0,!1,w)});var R=$.length===1?0:1;if(V&&I.hasNoSize()&&(w=!0,F[0]=0,$.length>1)){var H=100/($.length-1);$.forEach(function(L){F[L]=L*H})}for(;R<$.length;++R)$.forEach(function(L){Kt(L,F[L],!0,!0,w)});te(),$.forEach(function(L){x("update",L),C[L]!==null&&y&&x("set",L)})}function Ye(f){we(t.start,f)}function bi(f,y,w,C){if(f=Number(f),!(f>=0&&f<$.length))throw new Error("noUiSlider: invalid handle number, got: "+f);Kt(f,Me(y,f),!0,!0,C),x("update",f),w&&x("set",f)}function Mo(f){if(f===void 0&&(f=!1),f)return D.length===1?D[0]:D.slice(0);var y=D.map(t.format.to);return y.length===1?y[0]:y}function Th(){for(N(Ee.aria),N(Ee.tooltips),Object.keys(t.cssClasses).forEach(function(f){Vr(o,t.cssClasses[f])});o.firstChild;)o.removeChild(o.firstChild);delete o.noUiSlider}function No(f){var y=F[f],w=I.getNearbySteps(y),C=D[f],V=w.thisStep.step,R=null;if(t.snap)return[C-w.stepBefore.startValue||null,w.stepAfter.startValue-C||null];V!==!1&&C+V>w.stepAfter.startValue&&(V=w.stepAfter.startValue-C),C>w.thisStep.startValue?R=w.thisStep.step:w.stepBefore.step===!1?R=!1:R=C-w.stepBefore.highestStep,y===100?V=null:y===0&&(R=null);var H=I.countStepDecimals();return V!==null&&V!==!1&&(V=Number(V.toFixed(H))),R!==null&&R!==!1&&(R=Number(R.toFixed(H))),[R,V]}function Ih(){return $.map(No)}function Ah(f,y){var w=Mo(),C=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];C.forEach(function(R){f[R]!==void 0&&(n[R]=f[R])});var V=sl(n);C.forEach(function(R){f[R]!==void 0&&(t[R]=V[R])}),I=V.spectrum,t.margin=V.margin,t.limit=V.limit,t.padding=V.padding,t.pips?G(t.pips):Cn(),t.tooltips?Sn():An(),F=[],we(Ji(f.start)?f.start:w,y)}function Sh(){a=Qe(o),Zt(t.connect,a),v(t.events),we(t.start),t.pips&&G(t.pips),t.tooltips&&Sn(),Ci()}Sh();var vr={destroy:Th,steps:Ih,on:A,off:N,get:Mo,set:we,setHandle:bi,reset:Ye,disable:ie,enable:fe,__moveHandles:function(f,y,w){zt(f,y,F,w)},options:n,updateOptions:Ah,target:o,removePips:Cn,removeTooltips:An,getPositions:function(){return F.slice()},getTooltips:function(){return E},getOrigins:function(){return l},pips:G};return vr}function wc(e,t){if(!e||!e.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+e);if(e.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var n=sl(t),r=vc(e,n,t);return e.noUiSlider=r,r}const Ec={__spectrum:nl,cssClasses:rl,create:wc};var qo={};/**
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
 */const ol=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Tc=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},al={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,h=l?e[i+2]:0,d=s>>2,E=(s&3)<<4|a>>4;let I=(a&15)<<2|h>>6,D=h&63;l||(D=64,o||(I=64)),r.push(n[d],n[E],n[I],n[D])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ol(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Tc(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const h=i<e.length?n[e.charAt(i)]:64;++i;const E=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||h==null||E==null)throw new Ic;const I=s<<2|a>>4;if(r.push(I),h!==64){const D=a<<4&240|h>>2;if(r.push(D),E!==64){const F=h<<6&192|E;r.push(F)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ic extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ac=function(e){const t=ol(e);return al.encodeByteArray(t,!0)},Or=function(e){return Ac(e).replace(/\./g,"")},Sc=function(e){try{return al.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Cc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dc=()=>Cc().__FIREBASE_DEFAULTS__,bc=()=>{if(typeof process>"u"||typeof qo>"u")return;const e=qo.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rc=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Sc(e[1]);return t&&JSON.parse(t)},Ms=()=>{try{return Dc()||bc()||Rc()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Vc=e=>{var t,n;return(n=(t=Ms())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Pc=e=>{const t=Vc(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},ll=()=>{var e;return(e=Ms())===null||e===void 0?void 0:e.config};/**
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
 */class kc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function xc(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Or(JSON.stringify(n)),Or(JSON.stringify(o)),""].join(".")}/**
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
 */function Lr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){var e;const t=(e=Ms())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nc(){return!Mc()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ul(){try{return typeof indexedDB=="object"}catch{return!1}}function Oc(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Lc="FirebaseError";class _n extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Lc,Object.setPrototypeOf(this,_n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hl.prototype.create)}}class hl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?Fc(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _n(i,a,r)}}function Fc(e,t){return e.replace($c,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const $c=/\{\$([^}]+)}/g;function ts(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(zo(s)&&zo(o)){if(!ts(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zo(e){return e!==null&&typeof e=="object"}/**
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
 */function Fr(e){return e&&e._delegate?e._delegate:e}class jn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Ne="[DEFAULT]";/**
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
 */class Uc{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new kc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t?.identifier),i=(n=t?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jc(t))try{this.getOrInitializeService({instanceIdentifier:Ne})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Ne){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ne){return this.instances.has(t)}getOptions(t=Ne){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Ne){return this.component?this.component.multipleInstances?t:Ne:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(e){return e===Ne?void 0:e}function jc(e){return e.instantiationMode==="EAGER"}/**
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
 */class Hc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Uc(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const qc={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},zc=Y.INFO,Kc={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Gc=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Kc[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class cl{constructor(t){this.name=t,this._logLevel=zc,this._logHandler=Gc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Qc=(e,t)=>t.some(n=>e instanceof n);let Ko,Go;function Wc(){return Ko||(Ko=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yc(){return Go||(Go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dl=new WeakMap,es=new WeakMap,fl=new WeakMap,xi=new WeakMap,Ns=new WeakMap;function Xc(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Se(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&dl.set(n,e)}).catch(()=>{}),Ns.set(t,e),t}function Jc(e){if(es.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});es.set(e,t)}let ns={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return es.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fl.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Se(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zc(e){ns=e(ns)}function td(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Mi(this),t,...n);return fl.set(r,t.sort?t.sort():[t]),Se(r)}:Yc().includes(e)?function(...t){return e.apply(Mi(this),t),Se(dl.get(this))}:function(...t){return Se(e.apply(Mi(this),t))}}function ed(e){return typeof e=="function"?td(e):(e instanceof IDBTransaction&&Jc(e),Qc(e,Wc())?new Proxy(e,ns):e)}function Se(e){if(e instanceof IDBRequest)return Xc(e);if(xi.has(e))return xi.get(e);const t=ed(e);return t!==e&&(xi.set(e,t),Ns.set(t,e)),t}const Mi=e=>Ns.get(e);function nd(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Se(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Se(o.result),l.oldVersion,l.newVersion,Se(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const rd=["get","getKey","getAll","getAllKeys","count"],id=["put","add","delete","clear"],Ni=new Map;function Qo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ni.get(t))return Ni.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=id.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rd.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&l.done]))[0]};return Ni.set(t,s),s}Zc(e=>({...e,get:(t,n,r)=>Qo(t,n)||e.get(t,n,r),has:(t,n)=>!!Qo(t,n)||e.has(t,n)}));/**
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
 */class sd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(od(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function od(e){const t=e.getComponent();return t?.type==="VERSION"}const rs="@firebase/app",Wo="0.9.26";/**
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
 */const He=new cl("@firebase/app"),ad="@firebase/app-compat",ld="@firebase/analytics-compat",ud="@firebase/analytics",hd="@firebase/app-check-compat",cd="@firebase/app-check",dd="@firebase/auth",fd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/database-compat",md="@firebase/functions",_d="@firebase/functions-compat",yd="@firebase/installations",vd="@firebase/installations-compat",wd="@firebase/messaging",Ed="@firebase/messaging-compat",Td="@firebase/performance",Id="@firebase/performance-compat",Ad="@firebase/remote-config",Sd="@firebase/remote-config-compat",Cd="@firebase/storage",Dd="@firebase/storage-compat",bd="@firebase/firestore",Rd="@firebase/firestore-compat",Vd="firebase",Pd="10.7.2";/**
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
 */const is="[DEFAULT]",kd={[rs]:"fire-core",[ad]:"fire-core-compat",[ud]:"fire-analytics",[ld]:"fire-analytics-compat",[cd]:"fire-app-check",[hd]:"fire-app-check-compat",[dd]:"fire-auth",[fd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-rtdb-compat",[md]:"fire-fn",[_d]:"fire-fn-compat",[yd]:"fire-iid",[vd]:"fire-iid-compat",[wd]:"fire-fcm",[Ed]:"fire-fcm-compat",[Td]:"fire-perf",[Id]:"fire-perf-compat",[Ad]:"fire-rc",[Sd]:"fire-rc-compat",[Cd]:"fire-gcs",[Dd]:"fire-gcs-compat",[bd]:"fire-fst",[Rd]:"fire-fst-compat","fire-js":"fire-js",[Vd]:"fire-js-all"};/**
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
 */const $r=new Map,ss=new Map;function xd(e,t){try{e.container.addComponent(t)}catch(n){He.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ur(e){const t=e.name;if(ss.has(t))return He.debug(`There were multiple attempts to register component ${t}.`),!1;ss.set(t,e);for(const n of $r.values())xd(n,e);return!0}function Md(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Nd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new hl("app","Firebase",Nd);/**
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
 */class Od{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const Ld=Pd;function pl(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:is,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(n||(n=ll()),!n)throw Ce.create("no-options");const s=$r.get(i);if(s){if(ts(n,s.options)&&ts(r,s.config))return s;throw Ce.create("duplicate-app",{appName:i})}const o=new Hc(i);for(const l of ss.values())o.addComponent(l);const a=new Od(n,r,o);return $r.set(i,a),a}function Fd(e=is){const t=$r.get(e);if(!t&&e===is&&ll())return pl();if(!t)throw Ce.create("no-app",{appName:e});return t}function nn(e,t,n){var r;let i=(r=kd[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),He.warn(a.join(" "));return}Ur(new jn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const $d="firebase-heartbeat-database",Ud=1,Hn="firebase-heartbeat-store";let Oi=null;function gl(){return Oi||(Oi=nd($d,Ud,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Hn)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ce.create("idb-open",{originalErrorMessage:e.message})})),Oi}async function Bd(e){try{return await(await gl()).transaction(Hn).objectStore(Hn).get(ml(e))}catch(t){if(t instanceof _n)He.warn(t.message);else{const n=Ce.create("idb-get",{originalErrorMessage:t?.message});He.warn(n.message)}}}async function Yo(e,t){try{const r=(await gl()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(t,ml(e)),await r.done}catch(n){if(n instanceof _n)He.warn(n.message);else{const r=Ce.create("idb-set",{originalErrorMessage:n?.message});He.warn(r.message)}}}function ml(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jd=1024,Hd=30*24*60*60*1e3;class qd{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kd(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xo();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Hd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xo(),{heartbeatsToSend:r,unsentEntries:i}=zd(this._heartbeatsCache.heartbeats),s=Or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Xo(){return new Date().toISOString().substring(0,10)}function zd(e,t=jd){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Jo(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Jo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ul()?Oc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bd(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Yo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Jo(e){return Or(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Gd(e){Ur(new jn("platform-logger",t=>new sd(t),"PRIVATE")),Ur(new jn("heartbeat",t=>new qd(t),"PRIVATE")),nn(rs,Wo,e),nn(rs,Wo,"esm2017"),nn("fire-js","")}Gd("");var Qd="firebase",Wd="10.7.2";/**
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
 */nn(Qd,Wd,"app");const Yd={apiKey:"AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",authDomain:"clubtravel-6eff6.firebaseapp.com",projectId:"clubtravel-6eff6",storageBucket:"clubtravel-6eff6.appspot.com",messagingSenderId:"883499742498",appId:"1:883499742498:web:b0bf6b06d8073d249a217b"},Zo=pl(Yd);var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Os=Os||{},q=Xd||self;function Zr(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function nr(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function Jd(e){return Object.prototype.hasOwnProperty.call(e,Li)&&e[Li]||(e[Li]=++Zd)}var Li="closure_uid_"+(1e9*Math.random()>>>0),Zd=0;function tf(e,t,n){return e.call.apply(e.bind,arguments)}function ef(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function Ut(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=tf:Ut=ef,Ut.apply(null,arguments)}function wr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function St(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Pe(){this.s=this.s,this.o=this.o}var nf=0;Pe.prototype.s=!1;Pe.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),nf!=0)&&Jd(this)};Pe.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const _l=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ls(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function ta(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Zr(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function Bt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var rf=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};q.addEventListener("test",n,t),q.removeEventListener("test",n,t)}catch{}return e}();function qn(e){return/^[\s\xa0]*$/.test(e)}function ti(){var e=q.navigator;return e&&(e=e.userAgent)?e:""}function se(e){return ti().indexOf(e)!=-1}function Fs(e){return Fs[" "](e),e}Fs[" "]=function(){};function sf(e,t){var n=Xf;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var of=se("Opera"),un=se("Trident")||se("MSIE"),yl=se("Edge"),os=yl||un,vl=se("Gecko")&&!(ti().toLowerCase().indexOf("webkit")!=-1&&!se("Edge"))&&!(se("Trident")||se("MSIE"))&&!se("Edge"),af=ti().toLowerCase().indexOf("webkit")!=-1&&!se("Edge");function wl(){var e=q.document;return e?e.documentMode:void 0}var as;t:{var Fi="",$i=function(){var e=ti();if(vl)return/rv:([^\);]+)(\)|;)/.exec(e);if(yl)return/Edge\/([\d\.]+)/.exec(e);if(un)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(af)return/WebKit\/(\S+)/.exec(e);if(of)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if($i&&(Fi=$i?$i[1]:""),un){var Ui=wl();if(Ui!=null&&Ui>parseFloat(Fi)){as=String(Ui);break t}}as=Fi}var ls;if(q.document&&un){var ea=wl();ls=ea||parseInt(as,10)||void 0}else ls=void 0;var lf=ls;function zn(e,t){if(Bt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(vl){t:{try{Fs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:uf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&zn.$.h.call(this)}}St(zn,Bt);var uf={2:"touch",3:"pen",4:"mouse"};zn.prototype.h=function(){zn.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var rr="closure_listenable_"+(1e6*Math.random()|0),hf=0;function cf(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++hf,this.fa=this.ia=!1}function ei(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function $s(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function df(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function El(e){const t={};for(const n in e)t[n]=e[n];return t}const na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Tl(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<na.length;s++)n=na[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ni(e){this.src=e,this.g={},this.h=0}ni.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=hs(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new cf(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function us(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=_l(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ei(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function hs(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var Us="closure_lm_"+(1e6*Math.random()|0),Bi={};function Il(e,t,n,r,i){if(r&&r.once)return Sl(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Il(e,t[s],n,r,i);return null}return n=Hs(n),e&&e[rr]?e.O(t,n,nr(r)?!!r.capture:!!r,i):Al(e,t,n,!1,r,i)}function Al(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=nr(i)?!!i.capture:!!i,a=js(e);if(a||(e[Us]=a=new ni(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=ff(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)rf||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Dl(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function ff(){function e(n){return t.call(e.src,e.listener,n)}const t=pf;return e}function Sl(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Sl(e,t[s],n,r,i);return null}return n=Hs(n),e&&e[rr]?e.P(t,n,nr(r)?!!r.capture:!!r,i):Al(e,t,n,!0,r,i)}function Cl(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Cl(e,t[s],n,r,i);else r=nr(r)?!!r.capture:!!r,n=Hs(n),e&&e[rr]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=hs(s,n,r,i),-1<n&&(ei(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=js(e))&&(t=e.g[t.toString()],e=-1,t&&(e=hs(t,n,r,i)),(n=-1<e?t[e]:null)&&Bs(n))}function Bs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[rr])us(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Dl(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=js(t))?(us(n,e),n.h==0&&(n.src=null,t[Us]=null)):ei(e)}}}function Dl(e){return e in Bi?Bi[e]:Bi[e]="on"+e}function pf(e,t){if(e.fa)e=!0;else{t=new zn(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Bs(e),e=n.call(r,t)}return e}function js(e){return e=e[Us],e instanceof ni?e:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hs(e){return typeof e=="function"?e:(e[ji]||(e[ji]=function(t){return e.handleEvent(t)}),e[ji])}function At(){Pe.call(this),this.i=new ni(this),this.S=this,this.J=null}St(At,Pe);At.prototype[rr]=!0;At.prototype.removeEventListener=function(e,t,n,r){Cl(this,e,t,n,r)};function kt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Bt(t,e);else if(t instanceof Bt)t.target=t.target||e;else{var i=t;t=new Bt(r,e),Tl(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Er(o,r,!0,t)&&i}if(o=t.g=e,i=Er(o,r,!0,t)&&i,i=Er(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Er(o,r,!1,t)&&i}At.prototype.N=function(){if(At.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ei(n[r]);delete e.g[t],e.h--}}this.J=null};At.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};At.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Er(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&us(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var qs=q.JSON.stringify;class gf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function mf(){var e=zs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class _f{constructor(){this.h=this.g=null}add(t,n){const r=bl.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var bl=new gf(()=>new yf,e=>e.reset());class yf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function vf(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function wf(e){q.setTimeout(()=>{throw e},0)}let Kn,Gn=!1,zs=new _f,Rl=()=>{const e=q.Promise.resolve(void 0);Kn=()=>{e.then(Ef)}};var Ef=()=>{for(var e;e=mf();){try{e.h.call(e.g)}catch(n){wf(n)}var t=bl;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Gn=!1};function ri(e,t){At.call(this),this.h=e||1,this.g=t||q,this.j=Ut(this.qb,this),this.l=Date.now()}St(ri,At);P=ri.prototype;P.ga=!1;P.T=null;P.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),kt(this,"tick"),this.ga&&(Ks(this),this.start()))}};P.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ks(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}P.N=function(){ri.$.N.call(this),Ks(this),delete this.g};function Gs(e,t,n){if(typeof e=="function")n&&(e=Ut(e,n));else if(e&&typeof e.handleEvent=="function")e=Ut(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:q.setTimeout(e,t||0)}function Vl(e){e.g=Gs(()=>{e.g=null,e.i&&(e.i=!1,Vl(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Tf extends Pe{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vl(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qn(e){Pe.call(this),this.h=e,this.g={}}St(Qn,Pe);var ra=[];function Pl(e,t,n,r){Array.isArray(n)||(n&&(ra[0]=n.toString()),n=ra);for(var i=0;i<n.length;i++){var s=Il(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function kl(e){$s(e.g,function(t,n){this.g.hasOwnProperty(n)&&Bs(t)},e),e.g={}}Qn.prototype.N=function(){Qn.$.N.call(this),kl(this)};Qn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ii(){this.g=!0}ii.prototype.Ea=function(){this.g=!1};function If(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var d=h[0];h=h[1];var E=d.split("_");o=2<=E.length&&E[1]=="type"?o+(d+"="+h+"&"):o+(d+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Af(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function en(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Cf(e,n)+(r?" "+r:"")})}function Sf(e,t){e.info(function(){return"TIMEOUT: "+t})}ii.prototype.info=function(){};function Cf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return qs(n)}catch{return t}}var Ge={},ia=null;function si(){return ia=ia||new At}Ge.Ta="serverreachability";function xl(e){Bt.call(this,Ge.Ta,e)}St(xl,Bt);function Wn(e){const t=si();kt(t,new xl(t))}Ge.STAT_EVENT="statevent";function Ml(e,t){Bt.call(this,Ge.STAT_EVENT,e),this.stat=t}St(Ml,Bt);function qt(e){const t=si();kt(t,new Ml(t,e))}Ge.Ua="timingevent";function Nl(e,t){Bt.call(this,Ge.Ua,e),this.size=t}St(Nl,Bt);function ir(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){e()},t)}var oi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Ol={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Qs(){}Qs.prototype.h=null;function sa(e){return e.h||(e.h=e.i())}function Ll(){}var sr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ws(){Bt.call(this,"d")}St(Ws,Bt);function Ys(){Bt.call(this,"c")}St(Ys,Bt);var cs;function ai(){}St(ai,Qs);ai.prototype.g=function(){return new XMLHttpRequest};ai.prototype.i=function(){return{}};cs=new ai;function or(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Qn(this),this.P=Df,e=os?125:void 0,this.V=new ri(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Fl}function Fl(){this.i=null,this.g="",this.h=!1}var Df=45e3,$l={},ds={};P=or.prototype;P.setTimeout=function(e){this.P=e};function fs(e,t,n){e.L=1,e.A=ui(ye(t)),e.u=n,e.S=!0,Ul(e,null)}function Ul(e,t){e.G=Date.now(),ar(e),e.B=ye(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Ql(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Fl,e.g=gu(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Tf(Ut(e.Pa,e,e.g),e.O)),Pl(e.U,e.g,"readystatechange",e.nb),t=e.I?El(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Wn(),If(e.j,e.v,e.B,e.m,e.W,e.u)}P.nb=function(e){e=e.target;const t=this.M;t&&ae(e)==3?t.l():this.Pa(e)};P.Pa=function(e){try{if(e==this.g)t:{const d=ae(this.g);var t=this.g.Ia();const E=this.g.da();if(!(3>d)&&(d!=3||os||this.g&&(this.h.h||this.g.ja()||ua(this.g)))){this.J||d!=4||t==7||(t==8||0>=E?Wn(3):Wn(2)),li(this);var n=this.g.da();this.ca=n;e:if(Bl(this)){var r=ua(this.g);e="";var i=r.length,s=ae(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Le(this),Nn(this);var o="";break e}this.h.i=new q.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Af(this.j,this.v,this.B,this.m,this.W,d,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qn(a)){var h=a;break e}}h=null}if(n=h)en(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ps(this,n);else{this.i=!1,this.s=3,qt(12),Le(this),Nn(this);break t}}this.S?(jl(this,d,o),os&&this.i&&d==3&&(Pl(this.U,this.V,"tick",this.mb),this.V.start())):(en(this.j,this.m,o,null),ps(this,o)),d==4&&Le(this),this.i&&!this.J&&(d==4?cu(this.l,this):(this.i=!1,ar(this)))}else Qf(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,qt(12)):(this.s=0,qt(13)),Le(this),Nn(this)}}}catch{}finally{}};function Bl(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function jl(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=bf(e,n),i==ds){t==4&&(e.s=4,qt(14),r=!1),en(e.j,e.m,null,"[Incomplete Response]");break}else if(i==$l){e.s=4,qt(15),en(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else en(e.j,e.m,i,null),ps(e,i);Bl(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,qt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),no(t),t.M=!0,qt(11))):(en(e.j,e.m,n,"[Invalid Chunked Response]"),Le(e),Nn(e))}P.mb=function(){if(this.g){var e=ae(this.g),t=this.g.ja();this.o<t.length&&(li(this),jl(this,e,t),this.i&&e!=4&&ar(this))}};function bf(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ds:(n=Number(t.substring(n,r)),isNaN(n)?$l:(r+=1,r+n>t.length?ds:(t=t.slice(r,r+n),e.o=r+n,t)))}P.cancel=function(){this.J=!0,Le(this)};function ar(e){e.Y=Date.now()+e.P,Hl(e,e.P)}function Hl(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=ir(Ut(e.lb,e),t)}function li(e){e.C&&(q.clearTimeout(e.C),e.C=null)}P.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Sf(this.j,this.B),this.L!=2&&(Wn(),qt(17)),Le(this),this.s=2,Nn(this)):Hl(this,this.Y-e)};function Nn(e){e.l.H==0||e.J||cu(e.l,e)}function Le(e){li(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,Ks(e.V),kl(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ps(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||gs(n.i,e))){if(!e.K&&gs(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Hr(n),fi(n);else break t;eo(n),qt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=ir(Ut(n.ib,n),6e3));if(1>=Xl(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Fe(n,11)}else if((e.K||n.g==e)&&Hr(n),!qn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let h=i[t];if(n.V=h[0],h=h[1],n.H==2)if(h[0]=="c"){n.K=h[1],n.pa=h[2];const d=h[3];d!=null&&(n.ra=d,n.l.info("VER="+n.ra));const E=h[4];E!=null&&(n.Ga=E,n.l.info("SVER="+n.Ga));const I=h[5];I!=null&&typeof I=="number"&&0<I&&(r=1.5*I,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const D=e.g;if(D){const F=D.g?D.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(F){var s=r.i;s.g||F.indexOf("spdy")==-1&&F.indexOf("quic")==-1&&F.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Xs(s,s.h),s.h=null))}if(r.F){const $=D.g?D.g.getResponseHeader("X-HTTP-Session-Id"):null;$&&(r.Da=$,at(r.I,r.F,$))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=pu(r,r.J?r.pa:null,r.Y),o.K){Jl(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(li(a),ar(a)),r.g=o}else uu(r);0<n.j.length&&pi(n)}else h[0]!="stop"&&h[0]!="close"||Fe(n,7);else n.H==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Fe(n,7):to(n):h[0]!="noop"&&n.h&&n.h.Aa(h),n.A=0)}}Wn(4)}catch{}}function Rf(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Zr(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Vf(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Zr(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function ql(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Zr(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Vf(e),r=Rf(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var zl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Be(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Be){this.h=e.h,Br(this,e.j),this.s=e.s,this.g=e.g,jr(this,e.m),this.l=e.l;var t=e.i,n=new Yn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),oa(this,n),this.o=e.o}else e&&(t=String(e).match(zl))?(this.h=!1,Br(this,t[1]||"",!0),this.s=Pn(t[2]||""),this.g=Pn(t[3]||"",!0),jr(this,t[4]),this.l=Pn(t[5]||"",!0),oa(this,t[6]||"",!0),this.o=Pn(t[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}Be.prototype.toString=function(){var e=[],t=this.j;t&&e.push(kn(t,aa,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(kn(t,aa,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(kn(n,n.charAt(0)=="/"?Mf:xf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",kn(n,Of)),e.join("")};function ye(e){return new Be(e)}function Br(e,t,n){e.j=n?Pn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function jr(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function oa(e,t,n){t instanceof Yn?(e.i=t,Lf(e.i,e.h)):(n||(t=kn(t,Nf)),e.i=new Yn(t,e.h))}function at(e,t,n){e.i.set(t,n)}function ui(e){return at(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Pn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function kn(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,kf),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function kf(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var aa=/[#\/\?@]/g,xf=/[#\?:]/g,Mf=/[#\?]/g,Nf=/[#\?@]/g,Of=/#/g;function Yn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ke(e){e.g||(e.g=new Map,e.h=0,e.i&&Pf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=Yn.prototype;P.add=function(e,t){ke(this),this.i=null,e=yn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Kl(e,t){ke(e),t=yn(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Gl(e,t){return ke(e),t=yn(e,t),e.g.has(t)}P.forEach=function(e,t){ke(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};P.ta=function(){ke(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};P.Z=function(e){ke(this);let t=[];if(typeof e=="string")Gl(this,e)&&(t=t.concat(this.g.get(yn(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};P.set=function(e,t){return ke(this),this.i=null,e=yn(this,e),Gl(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Ql(e,t,n){Kl(e,t),0<n.length&&(e.i=null,e.g.set(yn(e,t),Ls(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function yn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Lf(e,t){t&&!e.j&&(ke(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Kl(this,r),Ql(this,i,n))},e)),e.j=t}var Ff=class{constructor(e,t){this.g=e,this.map=t}};function Wl(e){this.l=e||$f,q.PerformanceNavigationTiming?(e=q.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var $f=10;function Yl(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Xl(e){return e.h?1:e.g?e.g.size:0}function gs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Xs(e,t){e.g?e.g.add(t):e.h=t}function Jl(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}Wl.prototype.cancel=function(){if(this.i=Zl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Zl(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ls(e.i)}var Uf=class{stringify(e){return q.JSON.stringify(e,void 0)}parse(e){return q.JSON.parse(e,void 0)}};function Bf(){this.g=new Uf}function jf(e,t,n){const r=n||"";try{ql(e,function(i,s){let o=i;nr(i)&&(o=qs(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Hf(e,t){const n=new ii;if(q.Image){const r=new Image;r.onload=wr(Tr,n,r,"TestLoadImage: loaded",!0,t),r.onerror=wr(Tr,n,r,"TestLoadImage: error",!1,t),r.onabort=wr(Tr,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=wr(Tr,n,r,"TestLoadImage: timeout",!1,t),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Tr(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function hi(e){this.l=e.ec||null,this.j=e.ob||!1}St(hi,Qs);hi.prototype.g=function(){return new ci(this.l,this.j)};hi.prototype.i=function(e){return function(){return e}}({});function ci(e,t){At.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Js,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(ci,At);var Js=0;P=ci.prototype;P.open=function(e,t){if(this.readyState!=Js)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Xn(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||q).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=Js};P.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;tu(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function tu(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}P.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?lr(this):Xn(this),this.readyState==3&&tu(this)}};P.Za=function(e){this.g&&(this.response=this.responseText=e,lr(this))};P.Ya=function(e){this.g&&(this.response=e,lr(this))};P.ka=function(){this.g&&lr(this)};function lr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Xn(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Xn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var qf=q.JSON.parse;function dt(e){At.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eu,this.L=this.M=!1}St(dt,At);var eu="",zf=/^https?$/i,Kf=["POST","PUT"];P=dt.prototype;P.Oa=function(e){this.M=e};P.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():cs.g(),this.C=this.u?sa(this.u):sa(cs),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){la(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&e instanceof q.FormData,!(0<=_l(Kf,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{iu(this),0<this.B&&((this.L=Gf(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=Gs(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){la(this,s)}};function Gf(e){return un&&typeof e.timeout=="number"&&e.ontimeout!==void 0}P.ua=function(){typeof Os<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kt(this,"timeout"),this.abort(8))};function la(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,nu(e),di(e)}function nu(e){e.F||(e.F=!0,kt(e,"complete"),kt(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,kt(this,"complete"),kt(this,"abort"),di(this))};P.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),di(this,!0)),dt.$.N.call(this)};P.La=function(){this.s||(this.G||this.v||this.l?ru(this):this.kb())};P.kb=function(){ru(this)};function ru(e){if(e.h&&typeof Os<"u"&&(!e.C[1]||ae(e)!=4||e.da()!=2)){if(e.v&&ae(e)==4)Gs(e.La,0,e);else if(kt(e,"readystatechange"),ae(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(zl)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!zf.test(i?i.toLowerCase():"")}n=r}if(n)kt(e,"complete"),kt(e,"success");else{e.m=6;try{var s=2<ae(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",nu(e)}}finally{di(e)}}}}function di(e,t){if(e.g){iu(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||kt(e,"ready");try{n.onreadystatechange=r}catch{}}}function iu(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(q.clearTimeout(e.A),e.A=null)}P.isActive=function(){return!!this.g};function ae(e){return e.g?e.g.readyState:0}P.da=function(){try{return 2<ae(this)?this.g.status:-1}catch{return-1}};P.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),qf(t)}};function ua(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case eu:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Qf(e){const t={};e=(e.g&&2<=ae(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(qn(e[r]))continue;var n=vf(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}df(t,function(r){return r.join(", ")})}P.Ia=function(){return this.m};P.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function su(e){let t="";return $s(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Zs(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=su(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):at(e,t,n))}function bn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ou(e){this.Ga=0,this.j=[],this.l=new ii,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bn("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bn("baseRetryDelayMs",5e3,e),this.hb=bn("retryDelaySeedMs",1e4,e),this.eb=bn("forwardChannelMaxRetries",2,e),this.xa=bn("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Wl(e&&e.concurrentRequestLimit),this.Ja=new Bf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}P=ou.prototype;P.ra=8;P.H=1;function to(e){if(au(e),e.H==3){var t=e.W++,n=ye(e.I);if(at(n,"SID",e.K),at(n,"RID",t),at(n,"TYPE","terminate"),ur(e,n),t=new or(e,e.l,t),t.L=2,t.A=ui(ye(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=t.A,n=!0),n||(t.g=gu(t.l,null),t.g.ha(t.A)),t.G=Date.now(),ar(t)}fu(e)}function fi(e){e.g&&(no(e),e.g.cancel(),e.g=null)}function au(e){fi(e),e.u&&(q.clearTimeout(e.u),e.u=null),Hr(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&q.clearTimeout(e.m),e.m=null)}function pi(e){if(!Yl(e.i)&&!e.m){e.m=!0;var t=e.Na;Kn||Rl(),Gn||(Kn(),Gn=!0),zs.add(t,e),e.C=0}}function Wf(e,t){return Xl(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ir(Ut(e.Na,e,t),du(e,e.C)),e.C++,!0)}P.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new or(this,this.l,e);let s=this.s;if(this.U&&(s?(s=El(s),Tl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=lu(this,i,t),n=ye(this.I),at(n,"RID",e),at(n,"CVER",22),this.F&&at(n,"X-HTTP-Session-Id",this.F),ur(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(su(s)))+"&"+t:this.o&&Zs(n,this.o,s)),Xs(this.i,i),this.bb&&at(n,"TYPE","init"),this.P?(at(n,"$req",t),at(n,"SID","null"),i.aa=!0,fs(i,n,null)):fs(i,n,t),this.H=2}}else this.H==3&&(e?ha(this,e):this.j.length==0||Yl(this.i)||ha(this))};function ha(e,t){var n;t?n=t.m:n=e.W++;const r=ye(e.I);at(r,"SID",e.K),at(r,"RID",n),at(r,"AID",e.V),ur(e,r),e.o&&e.s&&Zs(r,e.o,e.s),n=new or(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=lu(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Xs(e.i,n),fs(n,r,t)}function ur(e,t){e.na&&$s(e.na,function(n,r){at(t,r,n)}),e.h&&ql({},function(n,r){at(t,r,n)})}function lu(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Ut(e.h.Va,e.h,e):null;t:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let h=i[l].g;const d=i[l].map;if(h-=s,0>h)s=Math.max(0,i[l].g-100),a=!1;else try{jf(d,o,"req"+h+"_")}catch{r&&r(d)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function uu(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Kn||Rl(),Gn||(Kn(),Gn=!0),zs.add(t,e),e.A=0}}function eo(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ir(Ut(e.Ma,e),du(e,e.A)),e.A++,!0)}P.Ma=function(){if(this.u=null,hu(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ir(Ut(this.jb,this),e)}};P.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,qt(10),fi(this),hu(this))};function no(e){e.B!=null&&(q.clearTimeout(e.B),e.B=null)}function hu(e){e.g=new or(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=ye(e.wa);at(t,"RID","rpc"),at(t,"SID",e.K),at(t,"AID",e.V),at(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&at(t,"TO",e.qa),at(t,"TYPE","xmlhttp"),ur(e,t),e.o&&e.s&&Zs(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=ui(ye(t)),n.u=null,n.S=!0,Ul(n,e)}P.ib=function(){this.v!=null&&(this.v=null,fi(this),eo(this),qt(19))};function Hr(e){e.v!=null&&(q.clearTimeout(e.v),e.v=null)}function cu(e,t){var n=null;if(e.g==t){Hr(e),no(e),e.g=null;var r=2}else if(gs(e.i,t))n=t.F,Jl(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=si(),kt(r,new Nl(r,n)),pi(e)}else uu(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Wf(e,t)||r==2&&eo(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Fe(e,5);break;case 4:Fe(e,10);break;case 3:Fe(e,6);break;default:Fe(e,2)}}}function du(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Fe(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Ut(e.pb,e);n||(n=new Be("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||Br(n,"https"),ui(n)),Hf(n.toString(),r)}else qt(2);e.H=0,e.h&&e.h.za(t),fu(e),au(e)}P.pb=function(e){e?(this.l.info("Successfully pinged google.com"),qt(2)):(this.l.info("Failed to ping google.com"),qt(1))};function fu(e){if(e.H=0,e.ma=[],e.h){const t=Zl(e.i);(t.length!=0||e.j.length!=0)&&(ta(e.ma,t),ta(e.ma,e.j),e.i.i.length=0,Ls(e.j),e.j.length=0),e.h.ya()}}function pu(e,t,n){var r=n instanceof Be?ye(n):new Be(n);if(r.g!="")t&&(r.g=t+"."+r.g),jr(r,r.m);else{var i=q.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new Be(null);r&&Br(s,r),t&&(s.g=t),i&&jr(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&at(r,n,t),at(r,"VER",e.ra),ur(e,r),r}function gu(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new dt(new hi({ob:n})):new dt(e.va),t.Oa(e.J),t}P.isActive=function(){return!!this.h&&this.h.isActive(this)};function mu(){}P=mu.prototype;P.Ba=function(){};P.Aa=function(){};P.za=function(){};P.ya=function(){};P.isActive=function(){return!0};P.Va=function(){};function qr(){if(un&&!(10<=Number(lf)))throw Error("Environmental error: no available transport.")}qr.prototype.g=function(e,t){return new Wt(e,t)};function Wt(e,t){At.call(this),this.g=new ou(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!qn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!qn(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new vn(this)}St(Wt,At);Wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;qt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=pu(e,null,e.Y),pi(e)};Wt.prototype.close=function(){to(this.g)};Wt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=qs(e),e=n);t.j.push(new Ff(t.fb++,e)),t.H==3&&pi(t)};Wt.prototype.N=function(){this.g.h=null,delete this.j,to(this.g),delete this.g,Wt.$.N.call(this)};function _u(e){Ws.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}St(_u,Ws);function yu(){Ys.call(this),this.status=1}St(yu,Ys);function vn(e){this.g=e}St(vn,mu);vn.prototype.Ba=function(){kt(this.g,"a")};vn.prototype.Aa=function(e){kt(this.g,new _u(e))};vn.prototype.za=function(e){kt(this.g,new yu)};vn.prototype.ya=function(){kt(this.g,"b")};function Yf(){this.blockSize=-1}function ne(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}St(ne,Yf);ne.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hi(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}ne.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Hi(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Hi(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Hi(this,r),i=0;break}}this.h=i,this.i+=t};ne.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function nt(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var Xf={};function ro(e){return-128<=e&&128>e?sf(e,function(t){return new nt([t|0],0>t?-1:0)}):new nt([e|0],0>e?-1:0)}function le(e){if(isNaN(e)||!isFinite(e))return rn;if(0>e)return Pt(le(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ms;return new nt(t,0)}function vu(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Pt(vu(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=le(Math.pow(t,8)),r=rn,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=le(Math.pow(t,s)),r=r.R(s).add(le(o))):(r=r.R(n),r=r.add(le(o)))}return r}var ms=4294967296,rn=ro(0),_s=ro(1),ca=ro(16777216);P=nt.prototype;P.ea=function(){if(Jt(this))return-Pt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ms+r)*t,t*=ms}return e};P.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(_e(this))return"0";if(Jt(this))return"-"+Pt(this).toString(e);for(var t=le(Math.pow(e,6)),n=this,r="";;){var i=Kr(n,t).g;n=zr(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,_e(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};P.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function _e(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Jt(e){return e.h==-1}P.X=function(e){return e=zr(this,e),Jt(e)?-1:_e(e)?0:1};function Pt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new nt(n,~e.h).add(_s)}P.abs=function(){return Jt(this)?Pt(this):this};P.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new nt(n,n[n.length-1]&-2147483648?-1:0)};function zr(e,t){return e.add(Pt(t))}P.R=function(e){if(_e(this)||_e(e))return rn;if(Jt(this))return Jt(e)?Pt(this).R(Pt(e)):Pt(Pt(this).R(e));if(Jt(e))return Pt(this.R(Pt(e)));if(0>this.X(ca)&&0>e.X(ca))return le(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Ir(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ir(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ir(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ir(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new nt(n,0)};function Ir(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Rn(e,t){this.g=e,this.h=t}function Kr(e,t){if(_e(t))throw Error("division by zero");if(_e(e))return new Rn(rn,rn);if(Jt(e))return t=Kr(Pt(e),t),new Rn(Pt(t.g),Pt(t.h));if(Jt(t))return t=Kr(e,Pt(t)),new Rn(Pt(t.g),t.h);if(30<e.g.length){if(Jt(e)||Jt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=_s,r=t;0>=r.X(e);)n=da(n),r=da(r);var i=Xe(n,1),s=Xe(r,1);for(r=Xe(r,2),n=Xe(n,2);!_e(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Xe(r,1),n=Xe(n,1)}return t=zr(e,i.R(t)),new Rn(i,t)}for(i=rn;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=le(n),o=s.R(t);Jt(o)||0<o.X(e);)n-=r,s=le(n),o=s.R(t);_e(s)&&(s=_s),i=i.add(s),e=zr(e,o)}return new Rn(i,e)}P.gb=function(e){return Kr(this,e).h};P.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new nt(n,this.h&e.h)};P.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new nt(n,this.h|e.h)};P.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new nt(n,this.h^e.h)};function da(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new nt(n,e.h)}function Xe(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new nt(i,e.h)}qr.prototype.createWebChannel=qr.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;oi.NO_ERROR=0;oi.TIMEOUT=8;oi.HTTP_ERROR=6;Ol.COMPLETE="complete";Ll.EventType=sr;sr.OPEN="a";sr.CLOSE="b";sr.ERROR="c";sr.MESSAGE="d";At.prototype.listen=At.prototype.O;dt.prototype.listenOnce=dt.prototype.P;dt.prototype.getLastError=dt.prototype.Sa;dt.prototype.getLastErrorCode=dt.prototype.Ia;dt.prototype.getStatus=dt.prototype.da;dt.prototype.getResponseJson=dt.prototype.Wa;dt.prototype.getResponseText=dt.prototype.ja;dt.prototype.send=dt.prototype.ha;dt.prototype.setWithCredentials=dt.prototype.Oa;ne.prototype.digest=ne.prototype.l;ne.prototype.reset=ne.prototype.reset;ne.prototype.update=ne.prototype.j;nt.prototype.add=nt.prototype.add;nt.prototype.multiply=nt.prototype.R;nt.prototype.modulo=nt.prototype.gb;nt.prototype.compare=nt.prototype.X;nt.prototype.toNumber=nt.prototype.ea;nt.prototype.toString=nt.prototype.toString;nt.prototype.getBits=nt.prototype.D;nt.fromNumber=le;nt.fromString=vu;var Jf=function(){return new qr},Zf=function(){return si()},qi=oi,tp=Ol,ep=Ge,fa={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ar=Ll,np=dt,rp=ne,sn=nt;const pa="@firebase/firestore";/**
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
 */class Lt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lt.UNAUTHENTICATED=new Lt(null),Lt.GOOGLE_CREDENTIALS=new Lt("google-credentials-uid"),Lt.FIRST_PARTY=new Lt("first-party-uid"),Lt.MOCK_USER=new Lt("mock-user");/**
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
 */let wn="10.7.2";/**
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
 */const qe=new cl("@firebase/firestore");function Vn(){return qe.logLevel}function k(e,...t){if(qe.logLevel<=Y.DEBUG){const n=t.map(io);qe.debug(`Firestore (${wn}): ${e}`,...n)}}function he(e,...t){if(qe.logLevel<=Y.ERROR){const n=t.map(io);qe.error(`Firestore (${wn}): ${e}`,...n)}}function hn(e,...t){if(qe.logLevel<=Y.WARN){const n=t.map(io);qe.warn(`Firestore (${wn}): ${e}`,...n)}}function io(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function K(e="Unexpected state"){const t=`FIRESTORE (${wn}) INTERNAL ASSERTION FAILED: `+e;throw he(t),new Error(t)}function wt(e,t){e||K()}function J(e,t){return e}/**
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
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends _n{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class De{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class wu{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ip{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Lt.UNAUTHENTICATED))}shutdown(){}}class sp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class op{constructor(t){this.t=t,this.currentUser=Lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new De;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new De,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new De)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(wt(typeof r.accessToken=="string"),new wu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return wt(t===null||typeof t=="string"),new Lt(t)}}class ap{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=Lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class lp{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new ap(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(Lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class up{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(wt(typeof n.token=="string"),this.R=n.token,new up(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function cp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class dp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=cp(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function et(e,t){return e<t?-1:e>t?1:0}function cn(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
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
 */class It{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new O(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new O(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return It.fromMillis(Date.now())}static fromDate(t){return It.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new It(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?et(this.nanoseconds,t.nanoseconds):et(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(t){this.timestamp=t}static fromTimestamp(t){return new z(t)}static min(){return new z(new It(0,0))}static max(){return new z(new It(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jn{constructor(t,n,r){n===void 0?n=0:n>t.length&&K(),r===void 0?r=t.length-n:r>t.length-n&&K(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Jn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Jn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class ht extends Jn{construct(t,n,r){return new ht(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new O(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ht(n)}static emptyPath(){return new ht([])}}const fp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends Jn{construct(t,n,r){return new $t(t,n,r)}static isValidIdentifier(t){return fp.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new O(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new O(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new O(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $t(n)}static emptyPath(){return new $t([])}}/**
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
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(ht.fromString(t))}static fromName(t){return new B(ht.fromString(t).popFirst(5))}static empty(){return new B(ht.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ht.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return ht.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new ht(t.slice()))}}function pp(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new It(n+1,0):new It(n,r));return new be(i,B.empty(),t)}function gp(e){return new be(e.readTime,e.key,-1)}class be{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new be(z.min(),B.empty(),-1)}static max(){return new be(z.max(),B.empty(),-1)}}function mp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=B.comparator(e.documentKey,t.documentKey),n!==0?n:et(e.largestBatchId,t.largestBatchId))}/**
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
 */const _p="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function so(e){if(e.code!==b.FAILED_PRECONDITION||e.message!==_p)throw e;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):S.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):S.reject(n)}static resolve(t){return new S((n,r)=>{n(t)})}static reject(t){return new S((n,r)=>{r(t)})}static waitFor(t){return new S((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=S.resolve(!1);for(const r of t)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new S((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const h=l;n(t[h]).next(d=>{o[h]=d,++a,a===s&&r(o)},d=>i(d))}})}static doWhile(t,n){return new S((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class oo{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new De,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new On(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=ao(r.target.error);this.V.reject(new On(t,i))}}static open(t,n,r,i){try{return new oo(n,t.transaction(i,r))}catch(s){throw new On(n,s)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(k("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new wp(n)}}class $e{constructor(t,n,r){this.name=t,this.version=n,this.p=r,$e.S(Lr())===12.2&&he("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return k("SimpleDb","Removing database:",t),Oe(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!ul())return!1;if($e.C())return!0;const t=Lr(),n=$e.S(t),r=0<n&&n<10,i=$e.v(t),s=0<i&&i<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||s)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(k("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new On(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new O(b.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new O(b.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new On(t,o))},i.onupgradeneeded=s=>{k("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{k("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(t){this.B=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=oo.open(this.db,t,s?"readonly":"readwrite",r),l=i(a).next(h=>(a.g(),h)).catch(h=>(a.abort(h),S.reject(h))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,h=l.name!=="FirebaseError"&&o<3;if(k("SimpleDb","Transaction failed with error:",l.message,"Retrying:",h),this.close(),!h)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class vp{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return Oe(this.k.delete())}}class On extends O{constructor(t,n){super(b.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function hr(e){return e.name==="IndexedDbTransactionError"}class wp{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(k("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(k("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),Oe(r)}add(t){return k("SimpleDb","ADD",this.store.name,t,t),Oe(this.store.add(t))}get(t){return Oe(this.store.get(t)).next(n=>(n===void 0&&(n=null),k("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return k("SimpleDb","DELETE",this.store.name,t),Oe(this.store.delete(t))}count(){return k("SimpleDb","COUNT",this.store.name),Oe(this.store.count())}W(t,n){const r=this.options(t,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new S((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new S((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(t,n){k("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const i=this.cursor(r);return this.G(i,n)}Z(t){const n=this.cursor({});return new S((r,i)=>{n.onerror=s=>{const o=ao(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new S((i,s)=>{t.onerror=o=>{s(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new vp(a),h=n(a.primaryKey,a.value,l);if(h instanceof S){const d=h.catch(E=>(l.done(),S.reject(E)));r.push(d)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>S.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function Oe(e){return new S((t,n)=>{e.onsuccess=r=>{const i=r.target.result;t(i)},e.onerror=r=>{const i=ao(r.target.error);n(i)}})}let ga=!1;function ao(e){const t=$e.S(Lr());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new O("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ga||(ga=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
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
 */class lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}lo._e=-1;function gi(e){return e==null}function Gr(e){return e===0&&1/e==-1/0}function Ep(e){return typeof e=="number"&&Number.isInteger(e)&&!Gr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function ma(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function cr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Eu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class pt{constructor(t,n){this.comparator=t,this.root=n||Vt.EMPTY}insert(t,n){return new pt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Vt.BLACK,null,null))}remove(t){return new pt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Vt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Sr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Sr(this.root,t,this.comparator,!0)}}class Sr{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Vt{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Vt.RED,this.left=i??Vt.EMPTY,this.right=s??Vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Vt(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Vt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const t=this.left.check();if(t!==this.right.check())throw K();return t+(this.isRed()?0:1)}}Vt.EMPTY=null,Vt.RED=!0,Vt.BLACK=!1;Vt.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Vt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class xt{constructor(t){this.comparator=t,this.data=new pt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _a(this.data.getIterator())}getIteratorFrom(t){return new _a(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof xt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new xt(this.comparator);return n.data=t,n}}class _a{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ie{constructor(t){this.fields=t,t.sort($t.comparator)}static empty(){return new Ie([])}unionWith(t){let n=new xt($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Ie(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return cn(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Tu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Tu("Invalid base64 string: "+s):s}}(t);return new jt(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return et(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Tp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Re(e){if(wt(!!e),typeof e=="string"){let t=0;const n=Tp.exec(e);if(wt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:yt(e.seconds),nanos:yt(e.nanos)}}function yt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function ze(e){return typeof e=="string"?jt.fromBase64String(e):jt.fromUint8Array(e)}/**
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
 */function uo(e){var t,n;return((n=(((t=e?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ho(e){const t=e.mapValue.fields.__previous_value__;return uo(t)?ho(t):t}function Zn(e){const t=Re(e.mapValue.fields.__local_write_time__.timestampValue);return new It(t.seconds,t.nanos)}/**
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
 */class Ip{constructor(t,n,r,i,s,o,a,l,h){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=h}}class tr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof tr&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Cr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ke(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?uo(e)?4:Ap(e)?9007199254740991:10:K()}function ce(e,t){if(e===t)return!0;const n=Ke(e);if(n!==Ke(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Zn(e).isEqual(Zn(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Re(i.timestampValue),a=Re(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return ze(i.bytesValue).isEqual(ze(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return yt(i.geoPointValue.latitude)===yt(s.geoPointValue.latitude)&&yt(i.geoPointValue.longitude)===yt(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return yt(i.integerValue)===yt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=yt(i.doubleValue),a=yt(s.doubleValue);return o===a?Gr(o)===Gr(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return cn(e.arrayValue.values||[],t.arrayValue.values||[],ce);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ma(o)!==ma(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!ce(o[l],a[l])))return!1;return!0}(e,t);default:return K()}}function er(e,t){return(e.values||[]).find(n=>ce(n,t))!==void 0}function dn(e,t){if(e===t)return 0;const n=Ke(e),r=Ke(t);if(n!==r)return et(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return et(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=yt(s.integerValue||s.doubleValue),l=yt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return ya(e.timestampValue,t.timestampValue);case 4:return ya(Zn(e),Zn(t));case 5:return et(e.stringValue,t.stringValue);case 6:return function(s,o){const a=ze(s),l=ze(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let h=0;h<a.length&&h<l.length;h++){const d=et(a[h],l[h]);if(d!==0)return d}return et(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=et(yt(s.latitude),yt(o.latitude));return a!==0?a:et(yt(s.longitude),yt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let h=0;h<a.length&&h<l.length;++h){const d=dn(a[h],l[h]);if(d)return d}return et(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Cr.mapValue&&o===Cr.mapValue)return 0;if(s===Cr.mapValue)return 1;if(o===Cr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),h=o.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let E=0;E<l.length&&E<d.length;++E){const I=et(l[E],d[E]);if(I!==0)return I;const D=dn(a[l[E]],h[d[E]]);if(D!==0)return D}return et(l.length,d.length)}(e.mapValue,t.mapValue);default:throw K()}}function ya(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return et(e,t);const n=Re(e),r=Re(t),i=et(n.seconds,r.seconds);return i!==0?i:et(n.nanos,r.nanos)}function fn(e){return ys(e)}function ys(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Re(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return ze(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return B.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ys(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ys(n.fields[o])}`;return i+"}"}(e.mapValue):K()}function va(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function vs(e){return!!e&&"integerValue"in e}function co(e){return!!e&&"arrayValue"in e}function wa(e){return!!e&&"nullValue"in e}function Ea(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zi(e){return!!e&&"mapValue"in e}function Ln(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return cr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ln(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ln(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Ap(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class oe{constructor(t){this.value=t}static empty(){return new oe({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!zi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ln(n)}setAll(t){let n=$t.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ln(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());zi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return ce(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];zi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){cr(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new oe(Ln(this.value))}}/**
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
 */class Ft{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ft(t,0,z.min(),z.min(),z.min(),oe.empty(),0)}static newFoundDocument(t,n,r,i){return new Ft(t,1,n,z.min(),r,i,0)}static newNoDocument(t,n){return new Ft(t,2,n,z.min(),z.min(),oe.empty(),0)}static newUnknownDocument(t,n){return new Ft(t,3,n,z.min(),z.min(),oe.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qr{constructor(t,n){this.position=t,this.inclusive=n}}function Ta(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=dn(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ia(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ce(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class Wr{constructor(t,n="asc"){this.field=t,this.dir=n}}function Sp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class Iu{}class vt extends Iu{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Dp(t,n,r):n==="array-contains"?new Vp(t,r):n==="in"?new Pp(t,r):n==="not-in"?new kp(t,r):n==="array-contains-any"?new xp(t,r):new vt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new bp(t,r):new Rp(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(dn(n,this.value)):n!==null&&Ke(this.value)===Ke(n)&&this.matchesComparison(dn(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class re extends Iu{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new re(t,n)}matches(t){return Au(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Au(e){return e.op==="and"}function Su(e){return Cp(e)&&Au(e)}function Cp(e){for(const t of e.filters)if(t instanceof re)return!1;return!0}function ws(e){if(e instanceof vt)return e.field.canonicalString()+e.op.toString()+fn(e.value);if(Su(e))return e.filters.map(t=>ws(t)).join(",");{const t=e.filters.map(n=>ws(n)).join(",");return`${e.op}(${t})`}}function Cu(e,t){return e instanceof vt?function(r,i){return i instanceof vt&&r.op===i.op&&r.field.isEqual(i.field)&&ce(r.value,i.value)}(e,t):e instanceof re?function(r,i){return i instanceof re&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&Cu(o,i.filters[a]),!0):!1}(e,t):void K()}function Du(e){return e instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${fn(n.value)}`}(e):e instanceof re?function(n){return n.op.toString()+" {"+n.getFilters().map(Du).join(" ,")+"}"}(e):"Filter"}class Dp extends vt{constructor(t,n,r){super(t,n,r),this.key=B.fromName(r.referenceValue)}matches(t){const n=B.comparator(t.key,this.key);return this.matchesComparison(n)}}class bp extends vt{constructor(t,n){super(t,"in",n),this.keys=bu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Rp extends vt{constructor(t,n){super(t,"not-in",n),this.keys=bu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function bu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class Vp extends vt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return co(n)&&er(n.arrayValue,this.value)}}class Pp extends vt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&er(this.value.arrayValue,n)}}class kp extends vt{constructor(t,n){super(t,"not-in",n)}matches(t){if(er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!er(this.value.arrayValue,n)}}class xp extends vt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!co(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>er(this.value.arrayValue,r))}}/**
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
 */class Mp{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Aa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Mp(e,t,n,r,i,s,o)}function fo(e){const t=J(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>ws(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),gi(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>fn(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>fn(r)).join(",")),t.ce=n}return t.ce}function po(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Sp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Cu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ia(e.startAt,t.startAt)&&Ia(e.endAt,t.endAt)}function Es(e){return B.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class dr{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Np(e,t,n,r,i,s,o,a){return new dr(e,t,n,r,i,s,o,a)}function Ru(e){return new dr(e)}function Sa(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Vu(e){return e.collectionGroup!==null}function Fn(e){const t=J(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new xt($t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(a=a.add(h.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new Wr(s,r))}),n.has($t.keyField().canonicalString())||t.le.push(new Wr($t.keyField(),r))}return t.le}function ue(e){const t=J(e);return t.he||(t.he=Op(t,Fn(e))),t.he}function Op(e,t){if(e.limitType==="F")return Aa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Wr(i.field,s)});const n=e.endAt?new Qr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qr(e.startAt.position,e.startAt.inclusive):null;return Aa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ts(e,t){const n=e.filters.concat([t]);return new dr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Is(e,t,n){return new dr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function mi(e,t){return po(ue(e),ue(t))&&e.limitType===t.limitType}function Pu(e){return`${fo(ue(e))}|lt:${e.limitType}`}function Je(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Du(i)).join(", ")}]`),gi(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>fn(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>fn(i)).join(",")),`Target(${r})`}(ue(e))}; limitType=${e.limitType})`}function _i(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):B.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of Fn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const h=Ta(o,a,l);return o.inclusive?h<=0:h<0}(r.startAt,Fn(r),i)||r.endAt&&!function(o,a,l){const h=Ta(o,a,l);return o.inclusive?h>=0:h>0}(r.endAt,Fn(r),i))}(e,t)}function Lp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ku(e){return(t,n)=>{let r=!1;for(const i of Fn(e)){const s=Fp(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Fp(e,t,n){const r=e.field.isKeyField()?B.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),h=a.data.field(s);return l!==null&&h!==null?dn(l,h):K()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class En{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){cr(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Eu(this.inner)}size(){return this.innerSize}}/**
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
 */const $p=new pt(B.comparator);function Ve(){return $p}const xu=new pt(B.comparator);function xn(...e){let t=xu;for(const n of e)t=t.insert(n.key,n);return t}function Up(e){let t=xu;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ue(){return $n()}function Mu(){return $n()}function $n(){return new En(e=>e.toString(),(e,t)=>e.isEqual(t))}const Bp=new xt(B.comparator);function X(...e){let t=Bp;for(const n of e)t=t.add(n);return t}const jp=new xt(et);function Hp(){return jp}/**
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
 */function Nu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gr(t)?"-0":t}}function Ou(e){return{integerValue:""+e}}function qp(e,t){return Ep(t)?Ou(t):Nu(e,t)}/**
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
 */class yi{constructor(){this._=void 0}}function zp(e,t,n){return e instanceof As?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&uo(s)&&(s=ho(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Yr?Lu(e,t):e instanceof Xr?Fu(e,t):function(i,s){const o=Gp(i,s),a=Ca(o)+Ca(i.Ie);return vs(o)&&vs(i.Ie)?Ou(a):Nu(i.serializer,a)}(e,t)}function Kp(e,t,n){return e instanceof Yr?Lu(e,t):e instanceof Xr?Fu(e,t):n}function Gp(e,t){return e instanceof Ss?function(r){return vs(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class As extends yi{}class Yr extends yi{constructor(t){super(),this.elements=t}}function Lu(e,t){const n=$u(t);for(const r of e.elements)n.some(i=>ce(i,r))||n.push(r);return{arrayValue:{values:n}}}class Xr extends yi{constructor(t){super(),this.elements=t}}function Fu(e,t){let n=$u(t);for(const r of e.elements)n=n.filter(i=>!ce(i,r));return{arrayValue:{values:n}}}class Ss extends yi{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Ca(e){return yt(e.integerValue||e.doubleValue)}function $u(e){return co(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Qp(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof Yr&&i instanceof Yr||r instanceof Xr&&i instanceof Xr?cn(r.elements,i.elements,ce):r instanceof Ss&&i instanceof Ss?ce(r.Ie,i.Ie):r instanceof As&&i instanceof As}(e.transform,t.transform)}class je{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new je}static exists(t){return new je(void 0,t)}static updateTime(t){return new je(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Pr(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class go{}function Uu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Yp(e.key,je.none()):new mo(e.key,e.data,je.none());{const n=e.data,r=oe.empty();let i=new xt($t.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new vi(e.key,r,new Ie(i.toArray()),je.none())}}function Wp(e,t,n){e instanceof mo?function(i,s,o){const a=i.value.clone(),l=ba(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof vi?function(i,s,o){if(!Pr(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=ba(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Bu(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function Un(e,t,n,r){return e instanceof mo?function(s,o,a,l){if(!Pr(s.precondition,o))return a;const h=s.value.clone(),d=Ra(s.fieldTransforms,l,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(e,t,n,r):e instanceof vi?function(s,o,a,l){if(!Pr(s.precondition,o))return a;const h=Ra(s.fieldTransforms,l,o),d=o.data;return d.setAll(Bu(s)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(E=>E.field))}(e,t,n,r):function(s,o,a){return Pr(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Da(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&cn(r,i,(s,o)=>Qp(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class mo extends go{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class vi extends go{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Bu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function ba(e,t,n){const r=new Map;wt(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Kp(o,a,n[i]))}return r}function Ra(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zp(s,o,t))}return r}class Yp extends go{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Xp{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Wp(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Un(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Un(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Mu();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Uu(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),X())}isEqual(t){return this.batchId===t.batchId&&cn(this.mutations,t.mutations,(n,r)=>Da(n,r))&&cn(this.baseMutations,t.baseMutations,(n,r)=>Da(n,r))}}/**
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
 */class Jp{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Zp{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var _t,Q;function ju(e){if(e===void 0)return he("GRPC error has no .code"),b.UNKNOWN;switch(e){case _t.OK:return b.OK;case _t.CANCELLED:return b.CANCELLED;case _t.UNKNOWN:return b.UNKNOWN;case _t.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case _t.INTERNAL:return b.INTERNAL;case _t.UNAVAILABLE:return b.UNAVAILABLE;case _t.UNAUTHENTICATED:return b.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case _t.NOT_FOUND:return b.NOT_FOUND;case _t.ALREADY_EXISTS:return b.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return b.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case _t.ABORTED:return b.ABORTED;case _t.OUT_OF_RANGE:return b.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return b.UNIMPLEMENTED;case _t.DATA_LOSS:return b.DATA_LOSS;default:return K()}}(Q=_t||(_t={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function tg(){return new TextEncoder}/**
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
 */const eg=new sn([4294967295,4294967295],0);function Va(e){const t=tg().encode(e),n=new rp;return n.update(t),new Uint8Array(n.digest())}function Pa(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new sn([n,r],0),new sn([i,s],0)]}class _o{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Mn(`Invalid padding: ${n}`);if(r<0)throw new Mn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=sn.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(sn.fromNumber(r)));return i.compare(eg)===1&&(i=new sn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Va(t),[r,i]=Pa(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new _o(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Va(t),[r,i]=Pa(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class wi{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,fr.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new wi(z.min(),i,new pt(et),Ve(),X())}}class fr{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new fr(r,n,X(),X(),X())}}/**
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
 */class kr{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class Hu{constructor(t,n){this.targetId=t,this.fe=n}}class qu{constructor(t,n,r=jt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ka{constructor(){this.ge=0,this.pe=Ma(),this.ye=jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=X(),n=X(),r=X();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new fr(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ma()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,wt(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class ng{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ve(),this.Qe=xa(),this.Ke=new pt(et)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:K()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Es(s))if(r===0){const o=new B(s.path);this.We(n,o,Ft.newNoDocument(o,z.min()))}else wt(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ze(r).toUint8Array()}catch(l){if(l instanceof Tu)return hn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new _o(o,i,s)}catch(l){return hn(l instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Es(a.target)){const l=new B(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ft.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=X();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Ye(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new wi(t,n,this.Ke,this.qe,r);return this.qe=Ve(),this.Qe=xa(),this.Ke=new pt(et),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new ka,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new xt(et),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||k("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new ka),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function xa(){return new pt(B.comparator)}function Ma(){return new pt(B.comparator)}const rg={asc:"ASCENDING",desc:"DESCENDING"},ig={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sg={and:"AND",or:"OR"};class og{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Cs(e,t){return e.useProto3Json||gi(t)?t:{value:t}}function Ds(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function on(e){return wt(!!e),z.fromTimestamp(function(n){const r=Re(n);return new It(r.seconds,r.nanos)}(e))}function Ku(e,t){return bs(e,t).canonicalString()}function bs(e,t){const n=function(i){return new ht(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?n:n.child(t)}function Gu(e){const t=ht.fromString(e);return wt(Ju(t)),t}function Ki(e,t){const n=Gu(t);if(n.get(1)!==e.databaseId.projectId)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new O(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new B(Wu(n))}function Qu(e,t){return Ku(e.databaseId,t)}function ag(e){const t=Gu(e);return t.length===4?ht.emptyPath():Wu(t)}function Na(e){return new ht(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wu(e){return wt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function lg(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(h,d){return h.useProto3Json?(wt(d===void 0||typeof d=="string"),jt.fromBase64String(d||"")):(wt(d===void 0||d instanceof Uint8Array),jt.fromUint8Array(d||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const d=h.code===void 0?b.UNKNOWN:ju(h.code);return new O(d,h.message||"")}(o);n=new qu(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ki(e,r.document.name),s=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):z.min(),a=new oe({mapValue:{fields:r.document.fields}}),l=Ft.newFoundDocument(i,s,o,a),h=r.targetIds||[],d=r.removedTargetIds||[];n=new kr(h,d,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ki(e,r.document),s=r.readTime?on(r.readTime):z.min(),o=Ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new kr([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ki(e,r.document),s=r.removedTargetIds||[];n=new kr([],s,i,null)}else{if(!("filter"in t))return K();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Zp(i,s),a=r.targetId;n=new Hu(a,o)}}return n}function ug(e,t){return{documents:[Qu(e,t.path)]}}function hg(e,t){const n={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qu(e,i);const s=function(h){if(h.length!==0)return Xu(re.create(h,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(d=>function(I){return{field:Ze(I.field),direction:fg(I.dir)}}(d))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Cs(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),{ut:n,parent:i}}function cg(e){let t=ag(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){wt(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:t=t.child(d.collectionId)}let s=[];n.where&&(s=function(E){const I=Yu(E);return I instanceof re&&Su(I)?I.getFilters():[I]}(n.where));let o=[];n.orderBy&&(o=function(E){return E.map(I=>function(F){return new Wr(tn(F.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(I))}(n.orderBy));let a=null;n.limit&&(a=function(E){let I;return I=typeof E=="object"?E.value:E,gi(I)?null:I}(n.limit));let l=null;n.startAt&&(l=function(E){const I=!!E.before,D=E.values||[];return new Qr(D,I)}(n.startAt));let h=null;return n.endAt&&(h=function(E){const I=!E.before,D=E.values||[];return new Qr(D,I)}(n.endAt)),Np(t,i,o,s,a,"F",l,h)}function dg(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function Yu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=tn(n.unaryFilter.field);return vt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=tn(n.unaryFilter.field);return vt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=tn(n.unaryFilter.field);return vt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=tn(n.unaryFilter.field);return vt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(e):e.fieldFilter!==void 0?function(n){return vt.create(tn(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return re.create(n.compositeFilter.filters.map(r=>Yu(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(e):K()}function fg(e){return rg[e]}function pg(e){return ig[e]}function gg(e){return sg[e]}function Ze(e){return{fieldPath:e.canonicalString()}}function tn(e){return $t.fromServerFormat(e.fieldPath)}function Xu(e){return e instanceof vt?function(n){if(n.op==="=="){if(Ea(n.value))return{unaryFilter:{field:Ze(n.field),op:"IS_NAN"}};if(wa(n.value))return{unaryFilter:{field:Ze(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ea(n.value))return{unaryFilter:{field:Ze(n.field),op:"IS_NOT_NAN"}};if(wa(n.value))return{unaryFilter:{field:Ze(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ze(n.field),op:pg(n.op),value:n.value}}}(e):e instanceof re?function(n){const r=n.getFilters().map(i=>Xu(i));return r.length===1?r[0]:{compositeFilter:{op:gg(n.op),filters:r}}}(e):K()}function Ju(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Ae{constructor(t,n,r,i,s=z.min(),o=z.min(),a=jt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ae(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ae(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class mg{constructor(t){this.ct=t}}function _g(e){const t=cg({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Is(t,t.limit,"L"):t}/**
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
 */class yg{constructor(){this._n=new vg}addToCollectionParentIndex(t,n){return this._n.add(n),S.resolve()}getCollectionParents(t,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return S.resolve()}deleteFieldIndex(t,n){return S.resolve()}deleteAllFieldIndexes(t){return S.resolve()}createTargetIndexes(t,n){return S.resolve()}getDocumentsMatchingTarget(t,n){return S.resolve(null)}getIndexType(t,n){return S.resolve(0)}getFieldIndexes(t,n){return S.resolve([])}getNextCollectionGroupToUpdate(t){return S.resolve(null)}getMinOffset(t,n){return S.resolve(be.min())}getMinOffsetFromCollectionGroup(t,n){return S.resolve(be.min())}updateCollectionGroup(t,n,r){return S.resolve()}updateIndexEntries(t,n){return S.resolve()}}class vg{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new xt(ht.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new xt(ht.comparator)).toArray()}}/**
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
 */class pn{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new pn(0)}static Bn(){return new pn(-1)}}/**
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
 */class wg{constructor(){this.changes=new En(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ft.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Eg{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class Tg{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&Un(r.mutation,i,Ie.empty(),It.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,X()).next(()=>r))}getLocalViewOfDocuments(t,n,r=X()){const i=Ue();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=xn();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ue();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,X()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Ve();const o=$n(),a=function(){return $n()}();return n.forEach((l,h)=>{const d=r.get(h.key);i.has(h.key)&&(d===void 0||d.mutation instanceof vi)?s=s.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Un(d.mutation,h,d.mutation.getFieldMask(),It.now())):o.set(h.key,Ie.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var E;return a.set(h,new Eg(d,(E=o.get(h))!==null&&E!==void 0?E:null))}),a))}recalculateAndSaveOverlays(t,n){const r=$n();let i=new pt((o,a)=>o-a),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=r.get(l)||Ie.empty();d=a.applyToLocalView(h,d),r.set(l,d);const E=(i.get(a.batchId)||X()).add(l);i=i.insert(a.batchId,E)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,d=l.value,E=Mu();d.forEach(I=>{if(!s.has(I)){const D=Uu(n.get(I),r.get(I));D!==null&&E.set(I,D),s=s.add(I)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,E))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return B.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Vu(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):S.resolve(Ue());let a=-1,l=s;return o.next(h=>S.forEach(h,(d,E)=>(a<E.largestBatchId&&(a=E.largestBatchId),s.get(d)?S.resolve():this.remoteDocumentCache.getEntry(t,d).next(I=>{l=l.insert(d,I)}))).next(()=>this.populateOverlays(t,h,s)).next(()=>this.computeViews(t,l,h,X())).next(d=>({batchId:a,changes:Up(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new B(n)).next(r=>{let i=xn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=xn();return this.indexManager.getCollectionParents(t,s).next(a=>S.forEach(a,l=>{const h=function(E,I){return new dr(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,h,r,i).next(d=>{d.forEach((E,I)=>{o=o.insert(E,I)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,Ft.newInvalidDocument(d)))});let a=xn();return o.forEach((l,h)=>{const d=s.get(l);d!==void 0&&Un(d.mutation,h,Ie.empty(),It.now()),_i(n,h)&&(a=a.insert(l,h))}),a})}}/**
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
 */class Ig{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:on(i.createTime)}}(n)),S.resolve()}getNamedQuery(t,n){return S.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(i){return{name:i.name,query:_g(i.bundledQuery),readTime:on(i.readTime)}}(n)),S.resolve()}}/**
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
 */class Ag{constructor(){this.overlays=new pt(B.comparator),this.hr=new Map}getOverlay(t,n){return S.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ue();return S.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.ht(t,n,s)}),S.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(t,n,r){const i=Ue(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new pt((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=s.get(h.largestBatchId);d===null&&(d=Ue(),s=s.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const a=Ue(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>a.set(h,d)),!(a.size()>=i)););return S.resolve(a)}ht(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Jp(n,r));let s=this.hr.get(n);s===void 0&&(s=X(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class yo{constructor(){this.Pr=new xt(Tt.Ir),this.Tr=new xt(Tt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Tt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Tt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new B(new ht([])),r=new Tt(n,t),i=new Tt(n,t+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new B(new ht([])),r=new Tt(n,t),i=new Tt(n,t+1);let s=X();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Tt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Tt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return B.comparator(t.key,n.key)||et(t.pr,n.pr)}static Er(t,n){return et(t.pr,n.pr)||B.comparator(t.key,n.key)}}/**
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
 */class Sg{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new xt(Tt.Ir)}checkEmpty(t){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Xp(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Tt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(t,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.br(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Tt(n,0),i=new Tt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new xt(et);return n.forEach(i=>{const s=new Tt(i,0),o=new Tt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Tt(new B(s),0);let a=new xt(et);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(a=a.add(l.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){wt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,i=>{const s=new Tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Tt(n,0),i=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,S.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Cg{constructor(t){this.vr=t,this.docs=function(){return new pt(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():Ft.newInvalidDocument(n))}getEntries(t,n){let r=Ve();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ft.newInvalidDocument(i))}),S.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Ve();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||mp(gp(d),r)<=0||(i.has(d.key)||_i(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return S.resolve(s)}getAllFromCollectionGroup(t,n,r,i){K()}Fr(t,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new Dg(this)}getSize(t){return S.resolve(this.size)}}class Dg extends wg{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(t,i)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class bg{constructor(t){this.persistence=t,this.Mr=new En(n=>fo(n),po),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new yo,this.targetCount=0,this.Br=pn.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(t){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return S.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Br=new pn(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(t,n){return this.qn(n),S.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(t){return S.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(t,n){return S.resolve(this.Nr.containsKey(n))}}/**
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
 */class Rg{constructor(t,n){this.Lr={},this.overlays={},this.kr=new lo(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new bg(this),this.indexManager=new yg,this.remoteDocumentCache=function(i){return new Cg(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new mg(n),this.$r=new Ig(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Ag,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Lr[t.toKey()];return r||(r=new Sg(n,this.referenceDelegate),this.Lr[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){k("MemoryPersistence","Starting transaction:",t);const i=new Vg(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(t,n){return S.or(Object.values(this.Lr).map(r=>()=>r.containsKey(t,n)))}}class Vg extends yp{constructor(t){super(),this.currentSequenceNumber=t}}class vo{constructor(t){this.persistence=t,this.zr=new yo,this.jr=null}static Hr(t){return new vo(t)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const i=B.fromPath(r);return this.Yr(t,i).next(s=>{s||n.removeEntry(i,z.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class wo{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(t,n){let r=X(),i=X();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wo(t,n.fromCache,r,i)}}/**
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
 */class Pg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class kg{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Nc()?8:$e.v(Lr())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Pg;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,r,i){return r.documentReadCount<this.Wi?(Vn()<=Y.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Je(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Vn()<=Y.DEBUG&&k("QueryEngine","Query:",Je(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Vn()<=Y.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Je(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,ue(n))):S.resolve())}ji(t,n){if(Sa(n))return S.resolve(null);let r=ue(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Is(n,null,"F"),r=ue(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=X(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const h=this.Zi(n,a);return this.Xi(n,h,o,l.readTime)?this.ji(t,Is(n,null,"F")):this.es(t,h,n,l)}))})))}Hi(t,n,r,i){return Sa(n)||i.isEqual(z.min())?S.resolve(null):this.zi.getDocuments(t,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?S.resolve(null):(Vn()<=Y.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Je(n)),this.es(t,o,n,pp(i,-1)).next(a=>a))})}Zi(t,n){let r=new xt(ku(t));return n.forEach((i,s)=>{_i(t,s)&&(r=r.add(s))}),r}Xi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(t,n,r){return Vn()<=Y.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Je(n)),this.zi.getDocumentsMatchingQuery(t,n,be.min(),r)}es(t,n,r,i){return this.zi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class xg{constructor(t,n,r,i){this.persistence=t,this.ts=n,this.serializer=i,this.ns=new pt(et),this.rs=new En(s=>fo(s),po),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Tg(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Mg(e,t,n,r){return new xg(e,t,n,r)}async function Zu(e,t){const n=J(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=X();for(const h of i){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:o,addedBatchIds:a}))})})}function th(e){const t=J(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Ng(e,t){const n=J(e),r=t.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];t.targetChanges.forEach((d,E)=>{const I=i.get(E);if(!I)return;a.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,E).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,E)));let D=I.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(E)!==null?D=D.withResumeToken(jt.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):d.resumeToken.approximateByteSize()>0&&(D=D.withResumeToken(d.resumeToken,r)),i=i.insert(E,D),function($,j,Z){return $.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(I,D,d)&&a.push(n.Qr.updateTargetData(s,D))});let l=Ve(),h=X();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),a.push(Og(s,o,t.documentUpdates).next(d=>{l=d.cs,h=d.ls})),!r.isEqual(z.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(E=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(d)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,h)).next(()=>l)}).then(s=>(n.ns=i,s))}function Og(e,t,n){let r=X(),i=X();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Ve();return n.forEach((a,l)=>{const h=s.get(a);l.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(z.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",l.version)}),{cs:o,ls:i}})}function Lg(e,t){const n=J(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,t).next(s=>s?(i=s,S.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Ae(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Rs(e,t,n){const r=J(e),i=r.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!hr(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(i.target)}function Oa(e,t,n){const r=J(e);let i=z.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,d){const E=J(l),I=E.rs.get(d);return I!==void 0?S.resolve(E.ns.get(I)):E.Qr.getTargetData(h,d)}(r,o,ue(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?i:z.min(),n?s:X())).next(a=>(Fg(r,Lp(t),a),{documents:a,hs:s})))}function Fg(e,t,n){let r=e.ss.get(t)||z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.ss.set(t,r)}class La{constructor(){this.activeTargetIds=Hp()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $g{constructor(){this.no=new La,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new La,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class Ug{io(t){}shutdown(){}}/**
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
 */class Fa{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dr=null;function Gi(){return Dr===null?Dr=function(){return 268435456+Math.round(2147483648*Math.random())}():Dr++,"0x"+Dr.toString(16)}/**
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
 */const Bg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class jg{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
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
 */const Nt="WebChannelConnection";class Hg extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=Gi(),l=this.bo(n,r.toUriEncodedString());k("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const h={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(h,s,o),this.Co(n,l,h,i).then(d=>(k("RestConnection",`Received RPC '${n}' ${a}: `,d),d),d=>{throw hn("RestConnection",`RPC '${n}' ${a} failed with error: `,d,"url: ",l,"request:",i),d})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wn}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=Bg[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,i){const s=Gi();return new Promise((o,a)=>{const l=new np;l.setWithCredentials(!0),l.listenOnce(tp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qi.NO_ERROR:const d=l.getResponseJson();k(Nt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(d)),o(d);break;case qi.TIMEOUT:k(Nt,`RPC '${t}' ${s} timed out`),a(new O(b.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const E=l.getStatus();if(k(Nt,`RPC '${t}' ${s} failed with status:`,E,"response text:",l.getResponseText()),E>0){let I=l.getResponseJson();Array.isArray(I)&&(I=I[0]);const D=I?.error;if(D&&D.status&&D.message){const F=function(j){const Z=j.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(Z)>=0?Z:b.UNKNOWN}(D.status);a(new O(F,D.message))}else a(new O(b.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new O(b.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{k(Nt,`RPC '${t}' ${s} completed.`)}});const h=JSON.stringify(i);k(Nt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",h,r,15)})}Fo(t,n,r){const i=Gi(),s=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=Jf(),a=Zf(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=s.join("");k(Nt,`Creating RPC '${t}' stream ${i}: ${d}`,l);const E=o.createWebChannel(d,l);let I=!1,D=!1;const F=new jg({lo:j=>{D?k(Nt,`Not sending because RPC '${t}' stream ${i} is closed:`,j):(I||(k(Nt,`Opening RPC '${t}' stream ${i} transport.`),E.open(),I=!0),k(Nt,`RPC '${t}' stream ${i} sending:`,j),E.send(j))},ho:()=>E.close()}),$=(j,Z,ct)=>{j.listen(Z,rt=>{try{ct(rt)}catch(gt){setTimeout(()=>{throw gt},0)}})};return $(E,Ar.EventType.OPEN,()=>{D||k(Nt,`RPC '${t}' stream ${i} transport opened.`)}),$(E,Ar.EventType.CLOSE,()=>{D||(D=!0,k(Nt,`RPC '${t}' stream ${i} transport closed`),F.Vo())}),$(E,Ar.EventType.ERROR,j=>{D||(D=!0,hn(Nt,`RPC '${t}' stream ${i} transport errored:`,j),F.Vo(new O(b.UNAVAILABLE,"The operation could not be completed")))}),$(E,Ar.EventType.MESSAGE,j=>{var Z;if(!D){const ct=j.data[0];wt(!!ct);const rt=ct,gt=rt.error||((Z=rt[0])===null||Z===void 0?void 0:Z.error);if(gt){k(Nt,`RPC '${t}' stream ${i} received error:`,gt);const Gt=gt.status;let ft=function(Zt){const Qe=_t[Zt];if(Qe!==void 0)return ju(Qe)}(Gt),Ct=gt.message;ft===void 0&&(ft=b.INTERNAL,Ct="Unknown error status: "+Gt+" with message "+gt.message),D=!0,F.Vo(new O(ft,Ct)),E.close()}else k(Nt,`RPC '${t}' stream ${i} received:`,ct),F.mo(ct)}}),$(a,ep.STAT_EVENT,j=>{j.stat===fa.PROXY?k(Nt,`RPC '${t}' stream ${i} detected buffering proxy`):j.stat===fa.NOPROXY&&k(Nt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{F.Ro()},0),F}}function Qi(){return typeof document<"u"?document:null}/**
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
 */function Ei(e){return new og(e,!0)}/**
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
 */class eh{constructor(t,n,r=1e3,i=1.5,s=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class qg{constructor(t,n,r,i,s,o,a,l){this.oi=t,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new eh(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(he(n.toString()),he("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{t(()=>{const i=new O(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return k("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zg extends qg{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=lg(this.serializer,t),r=function(s){if(!("targetChange"in s))return z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?z.min():o.readTime?on(o.readTime):z.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=Na(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Es(l)?{documents:ug(s,l)}:{query:hg(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=zu(s,o.resumeToken);const h=Cs(s,o.expectedCount);h!==null&&(a.expectedCount=h)}else if(o.snapshotVersion.compareTo(z.min())>0){a.readTime=Ds(s,o.snapshotVersion.toTimestamp());const h=Cs(s,o.expectedCount);h!==null&&(a.expectedCount=h)}return a}(this.serializer,t);const r=dg(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=Na(this.serializer),n.removeTarget=t,this.t_(n)}}/**
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
 */class Kg extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(t,bs(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new O(b.UNKNOWN,s.toString())})}vo(t,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,bs(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new O(b.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class Gg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(he(n),this.g_=!1):k("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class Qg{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{gr(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=J(l);h.v_.add(4),await pr(h),h.x_.set("Unknown"),h.v_.delete(4),await Ti(h)}(this))})}),this.x_=new Gg(r,i)}}async function Ti(e){if(gr(e))for(const t of e.F_)await t(!0)}async function pr(e){for(const t of e.F_)await t(!1)}function nh(e,t){const n=J(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),Io(n)?To(n):Tn(n).Jo()&&Eo(n,t))}function rh(e,t){const n=J(e),r=Tn(n);n.C_.delete(t),r.Jo()&&ih(n,t),n.C_.size===0&&(r.Jo()?r.Xo():gr(n)&&n.x_.set("Unknown"))}function Eo(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(z.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Tn(e).c_(t)}function ih(e,t){e.O_.Oe(t),Tn(e).l_(t)}function To(e){e.O_=new ng({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Tn(e).start(),e.x_.p_()}function Io(e){return gr(e)&&!Tn(e).Ho()&&e.C_.size>0}function gr(e){return J(e).v_.size===0}function sh(e){e.O_=void 0}async function Wg(e){e.C_.forEach((t,n)=>{Eo(e,t)})}async function Yg(e,t){sh(e),Io(e)?(e.x_.S_(t),To(e)):e.x_.set("Unknown")}async function Xg(e,t,n){if(e.x_.set("Online"),t instanceof qu&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(e,t)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $a(e,r)}else if(t instanceof kr?e.O_.$e(t):t instanceof Hu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(z.min()))try{const r=await th(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.C_.get(h);d&&s.C_.set(h,d.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,h)=>{const d=s.C_.get(l);if(!d)return;s.C_.set(l,d.withResumeToken(jt.EMPTY_BYTE_STRING,d.snapshotVersion)),ih(s,l);const E=new Ae(d.target,l,h,d.sequenceNumber);Eo(s,E)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await $a(e,r)}}async function $a(e,t,n){if(!hr(t))throw t;e.v_.add(1),await pr(e),e.x_.set("Offline"),n||(n=()=>th(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await Ti(e)})}async function Ua(e,t){const n=J(e);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=gr(n);n.v_.add(3),await pr(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await Ti(n)}async function Jg(e,t){const n=J(e);t?(n.v_.delete(2),await Ti(n)):t||(n.v_.add(2),await pr(n),n.x_.set("Unknown"))}function Tn(e){return e.N_||(e.N_=function(n,r,i){const s=J(n);return s.R_(),new zg(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{Po:Wg.bind(null,e),To:Yg.bind(null,e),u_:Xg.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),Io(e)?To(e):e.x_.set("Unknown")):(await e.N_.stop(),sh(e))})),e.N_}/**
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
 */class Ao{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new De,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new Ao(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oh(e,t){if(he("AsyncQueue",`${t}: ${e}`),hr(e))return new O(b.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class an{constructor(t){this.comparator=t?(n,r)=>t(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=xn(),this.sortedSet=new pt(this.comparator)}static emptySet(t){return new an(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof an)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new an;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
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
 */class Ba{constructor(){this.L_=new pt(B.comparator)}track(t){const n=t.doc.key,r=this.L_.get(n);r?t.type!==0&&r.type===3?this.L_=this.L_.insert(n,t):t.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.L_=this.L_.remove(n):t.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:t.doc}):K():this.L_=this.L_.insert(n,t)}k_(){const t=[];return this.L_.inorderTraversal((n,r)=>{t.push(r)}),t}}class gn{constructor(t,n,r,i,s,o,a,l,h){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new gn(t,n,an.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&mi(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Zg{constructor(){this.q_=void 0,this.Q_=[]}}class tm{constructor(){this.queries=new En(t=>Pu(t),mi),this.onlineState="Unknown",this.K_=new Set}}async function em(e,t){const n=J(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Zg),i)try{s.q_=await n.onListen(r)}catch(o){const a=oh(o,`Initialization of query '${Je(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.Q_.push(t),t.U_(n.onlineState),s.q_&&t.W_(s.q_)&&So(n)}async function nm(e,t){const n=J(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(t);o>=0&&(s.Q_.splice(o,1),i=s.Q_.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function rm(e,t){const n=J(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.W_(i)&&(r=!0);o.q_=i}}r&&So(n)}function im(e,t,n){const r=J(e),i=r.queries.get(t);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(t)}function So(e){e.K_.forEach(t=>{t.next()})}class sm{constructor(t,n,r){this.query=t,this.G_=n,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=r||{}}W_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new gn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.z_?this.H_(t)&&(this.G_.next(t),n=!0):this.J_(t,this.onlineState)&&(this.Y_(t),n=!0),this.j_=t,n}onError(t){this.G_.error(t)}U_(t){this.onlineState=t;let n=!1;return this.j_&&!this.z_&&this.J_(this.j_,t)&&(this.Y_(this.j_),n=!0),n}J_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.Z_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}H_(t){if(t.docChanges.length>0)return!0;const n=this.j_&&this.j_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Y_(t){t=gn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.z_=!0,this.G_.next(t)}}/**
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
 */class ah{constructor(t){this.key=t}}class lh{constructor(t){this.key=t}}class om{constructor(t,n){this.query=t,this.oa=n,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=X(),this.mutatedKeys=X(),this.ua=ku(t),this.ca=new an(this.ua)}get la(){return this.oa}ha(t,n){const r=n?n.Pa:new Ba,i=n?n.ca:this.ca;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((d,E)=>{const I=i.get(d),D=_i(this.query,E)?E:null,F=!!I&&this.mutatedKeys.has(I.key),$=!!D&&(D.hasLocalMutations||this.mutatedKeys.has(D.key)&&D.hasCommittedMutations);let j=!1;I&&D?I.data.isEqual(D.data)?F!==$&&(r.track({type:3,doc:D}),j=!0):this.Ia(I,D)||(r.track({type:2,doc:D}),j=!0,(l&&this.ua(D,l)>0||h&&this.ua(D,h)<0)&&(a=!0)):!I&&D?(r.track({type:0,doc:D}),j=!0):I&&!D&&(r.track({type:1,doc:I}),j=!0,(l||h)&&(a=!0)),j&&(D?(o=o.add(D),s=$?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ca:o,Pa:r,Xi:a,mutatedKeys:s}}Ia(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.ca;this.ca=t.ca,this.mutatedKeys=t.mutatedKeys;const o=t.Pa.k_();o.sort((d,E)=>function(D,F){const $=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return $(D)-$(F)}(d.type,E.type)||this.ua(d.doc,E.doc)),this.Ta(r),i=i!=null&&i;const a=n&&!i?this.Ea():[],l=this.aa.size===0&&this.current&&!i?1:0,h=l!==this._a;return this._a=l,o.length!==0||h?{snapshot:new gn(this.query,t.ca,s,o,t.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),da:a}:{da:a}}U_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new Ba,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{da:[]}}Aa(t){return!this.oa.has(t)&&!!this.ca.has(t)&&!this.ca.get(t).hasLocalMutations}Ta(t){t&&(t.addedDocuments.forEach(n=>this.oa=this.oa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.oa=this.oa.delete(n)),this.current=t.current)}Ea(){if(!this.current)return[];const t=this.aa;this.aa=X(),this.ca.forEach(r=>{this.Aa(r.key)&&(this.aa=this.aa.add(r.key))});const n=[];return t.forEach(r=>{this.aa.has(r)||n.push(new lh(r))}),this.aa.forEach(r=>{t.has(r)||n.push(new ah(r))}),n}Ra(t){this.oa=t.hs,this.aa=X();const n=this.ha(t.documents);return this.applyChanges(n,!0)}Va(){return gn.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,this._a===0,this.hasCachedResults)}}class am{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class lm{constructor(t){this.key=t,this.ma=!1}}class um{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.fa={},this.ga=new En(a=>Pu(a),mi),this.pa=new Map,this.ya=new Set,this.wa=new pt(B.comparator),this.Sa=new Map,this.ba=new yo,this.Da={},this.Ca=new Map,this.va=pn.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function hm(e,t){const n=_m(e);let r,i;const s=n.ga.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Va();else{const o=await Lg(n.localStore,ue(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await cm(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&nh(n.remoteStore,o)}return i}async function cm(e,t,n,r,i){e.Ma=(E,I,D)=>async function($,j,Z,ct){let rt=j.view.ha(Z);rt.Xi&&(rt=await Oa($.localStore,j.query,!1).then(({documents:Ct})=>j.view.ha(Ct,rt)));const gt=ct&&ct.targetChanges.get(j.targetId),Gt=ct&&ct.targetMismatches.get(j.targetId)!=null,ft=j.view.applyChanges(rt,$.isPrimaryClient,gt,Gt);return Ha($,j.targetId,ft.da),ft.snapshot}(e,E,I,D);const s=await Oa(e.localStore,t,!0),o=new om(t,s.hs),a=o.ha(s.documents),l=fr.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),h=o.applyChanges(a,e.isPrimaryClient,l);Ha(e,n,h.da);const d=new am(t,n,o);return e.ga.set(t,d),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),h.snapshot}async function dm(e,t){const n=J(e),r=n.ga.get(t),i=n.pa.get(r.targetId);if(i.length>1)return n.pa.set(r.targetId,i.filter(s=>!mi(s,t))),void n.ga.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Rs(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),rh(n.remoteStore,r.targetId),Vs(n,r.targetId)}).catch(so)):(Vs(n,r.targetId),await Rs(n.localStore,r.targetId,!0))}async function uh(e,t){const n=J(e);try{const r=await Ng(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.Sa.get(s);o&&(wt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ma=!0:i.modifiedDocuments.size>0?wt(o.ma):i.removedDocuments.size>0&&(wt(o.ma),o.ma=!1))}),await ch(n,r,t)}catch(r){await so(r)}}function ja(e,t,n){const r=J(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((s,o)=>{const a=o.view.U_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=J(o);l.onlineState=a;let h=!1;l.queries.forEach((d,E)=>{for(const I of E.Q_)I.U_(a)&&(h=!0)}),h&&So(l)}(r.eventManager,t),i.length&&r.fa.u_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function fm(e,t,n){const r=J(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Sa.get(t),s=i&&i.key;if(s){let o=new pt(B.comparator);o=o.insert(s,Ft.newNoDocument(s,z.min()));const a=X().add(s),l=new wi(z.min(),new Map,new pt(et),o,a);await uh(r,l),r.wa=r.wa.remove(s),r.Sa.delete(t),Co(r)}else await Rs(r.localStore,t,!1).then(()=>Vs(r,t,n)).catch(so)}function Vs(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.pa.get(t))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.Vr(t).forEach(r=>{e.ba.containsKey(r)||hh(e,r)})}function hh(e,t){e.ya.delete(t.path.canonicalString());const n=e.wa.get(t);n!==null&&(rh(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),Co(e))}function Ha(e,t,n){for(const r of n)r instanceof ah?(e.ba.addReference(r.key,t),pm(e,r)):r instanceof lh?(k("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||hh(e,r.key)):K()}function pm(e,t){const n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(k("SyncEngine","New document in limbo: "+n),e.ya.add(r),Co(e))}function Co(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){const t=e.ya.values().next().value;e.ya.delete(t);const n=new B(ht.fromString(t)),r=e.va.next();e.Sa.set(r,new lm(n)),e.wa=e.wa.insert(n,r),nh(e.remoteStore,new Ae(ue(Ru(n.path)),r,"TargetPurposeLimboResolution",lo._e))}}async function ch(e,t,n){const r=J(e),i=[],s=[],o=[];r.ga.isEmpty()||(r.ga.forEach((a,l)=>{o.push(r.Ma(l,t,n).then(h=>{if((h||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,h?.fromCache?"not-current":"current"),h){i.push(h);const d=wo.Ki(l.targetId,h);s.push(d)}}))}),await Promise.all(o),r.fa.u_(i),await async function(l,h){const d=J(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>S.forEach(h,I=>S.forEach(I.qi,D=>d.persistence.referenceDelegate.addReference(E,I.targetId,D)).next(()=>S.forEach(I.Qi,D=>d.persistence.referenceDelegate.removeReference(E,I.targetId,D)))))}catch(E){if(!hr(E))throw E;k("LocalStore","Failed to update sequence numbers: "+E)}for(const E of h){const I=E.targetId;if(!E.fromCache){const D=d.ns.get(I),F=D.snapshotVersion,$=D.withLastLimboFreeSnapshotVersion(F);d.ns=d.ns.insert(I,$)}}}(r.localStore,s))}async function gm(e,t){const n=J(e);if(!n.currentUser.isEqual(t)){k("SyncEngine","User change. New user:",t.toKey());const r=await Zu(n.localStore,t);n.currentUser=t,function(s,o){s.Ca.forEach(a=>{a.forEach(l=>{l.reject(new O(b.CANCELLED,o))})}),s.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ch(n,r.us)}}function mm(e,t){const n=J(e),r=n.Sa.get(t);if(r&&r.ma)return X().add(r.key);{let i=X();const s=n.pa.get(t);if(!s)return i;for(const o of s){const a=n.ga.get(o);i=i.unionWith(a.view.la)}return i}}function _m(e){const t=J(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=uh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=mm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=fm.bind(null,t),t.fa.u_=rm.bind(null,t.eventManager),t.fa.xa=im.bind(null,t.eventManager),t}class qa{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Ei(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Mg(this.persistence,new kg,t.initialUser,this.serializer)}createPersistence(t){return new Rg(vo.Hr,this.serializer)}createSharedClientState(t){return new $g}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ym{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ja(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gm.bind(null,this.syncEngine),await Jg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new tm}()}createDatastore(t){const n=Ei(t.databaseInfo.databaseId),r=function(s){return new Hg(s)}(t.databaseInfo);return function(s,o,a,l){return new Kg(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new Qg(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>ja(this.syncEngine,n,0),function(){return Fa.D()?new Fa:new Ug}())}createSyncEngine(t,n){return function(i,s,o,a,l,h,d){const E=new um(i,s,o,a,l,h);return d&&(E.Fa=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const i=J(r);k("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await pr(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class vm{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ba(this.observer.next,t)}error(t){this.observer.error?this.Ba(this.observer.error,t):he("Uncaught Error in snapshot listener:",t.toString())}La(){this.muted=!0}Ba(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class wm{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Lt.UNAUTHENTICATED,this.clientId=dp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new O(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new De;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=oh(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Wi(e,t){e.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Zu(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function za(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tm(e);k("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Ua(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Ua(t.remoteStore,i)),e._onlineComponents=t}function Em(e){return e.name==="FirebaseError"?e.code===b.FAILED_PRECONDITION||e.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Tm(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wi(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Em(n))throw n;hn("Error using user provided cache. Falling back to memory cache: "+n),await Wi(e,new qa)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Wi(e,new qa);return e._offlineComponents}async function Im(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await za(e,e._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await za(e,new ym))),e._onlineComponents}async function Am(e){const t=await Im(e),n=t.eventManager;return n.onListen=hm.bind(null,t.syncEngine),n.onUnlisten=dm.bind(null,t.syncEngine),n}function Sm(e,t,n={}){const r=new De;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,h){const d=new vm({next:I=>{o.enqueueAndForget(()=>nm(s,E)),I.fromCache&&l.source==="server"?h.reject(new O(b.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(I)},error:I=>h.reject(I)}),E=new sm(a,d,{includeMetadataChanges:!0,Z_:!0});return em(s,E)}(await Am(e),e.asyncQueue,t,n,r)),r.promise}/**
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
 */function dh(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const Ka=new Map;/**
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
 */function Cm(e,t,n){if(!n)throw new O(b.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Dm(e,t,n,r){if(t===!0&&r===!0)throw new O(b.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Ga(e){if(B.isDocumentKey(e))throw new O(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ii(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":K()}function Ps(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new O(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ii(e);throw new O(b.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Qa{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new O(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new O(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Dm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dh((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new O(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Do{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qa({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new O(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new O(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qa(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ip;switch(r.type){case"firstParty":return new lp(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ka.get(n);r&&(k("ComponentProvider","Removing Datastore"),Ka.delete(n),r.terminate())}(this),Promise.resolve()}}function bm(e,t,n,r={}){var i;const s=(e=Ps(e,Do))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Lt.MOCK_USER;else{a=xc(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new O(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Lt(h)}e._authCredentials=new sp(new wu(a,l))}}/**
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
 */class In{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new In(this.firestore,t,this._query)}}class ve{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ve(this.firestore,t,this._key)}}class ln extends In{constructor(t,n,r){super(t,n,Ru(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ve(this.firestore,null,new B(t))}withConverter(t){return new ln(this.firestore,t,this._path)}}function Yi(e,t,...n){if(e=Fr(e),Cm("collection","path",t),e instanceof Do){const r=ht.fromString(t,...n);return Ga(r),new ln(e,null,r)}{if(!(e instanceof ve||e instanceof ln))throw new O(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ht.fromString(t,...n));return Ga(r),new ln(e.firestore,null,r)}}/**
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
 */class Rm{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new eh(this,"async_queue_retry"),this._u=()=>{const n=Qi();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Qi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.au(),this.uu(t)}enterRestrictedMode(t){if(!this.tu){this.tu=!0,this.su=t||!1;const n=Qi();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(t){if(this.au(),this.tu)return new Promise(()=>{});const n=new De;return this.uu(()=>this.tu&&this.su?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.eu.push(t),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(t){if(!hr(t))throw t;k("AsyncQueue","Operation failed with retryable error: "+t)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(t){const n=this.Xa.then(()=>(this.iu=!0,t().catch(r=>{this.ru=r,this.iu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw he("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(t,n,r){this.au(),this.ou.indexOf(t)>-1&&(n=0);const i=Ao.createAndSchedule(this,t,n,r,s=>this.lu(s));return this.nu.push(i),i}au(){this.ru&&K()}verifyOperationInProgress(){}async hu(){let t;do t=this.Xa,await t;while(t!==this.Xa)}Pu(t){for(const n of this.nu)if(n.timerId===t)return!0;return!1}Iu(t){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.hu()})}Tu(t){this.ou.push(t)}lu(t){const n=this.nu.indexOf(t);this.nu.splice(n,1)}}class fh extends Do{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new Rm}(),this._persistenceKey=i?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||ph(this),this._firestoreClient.terminate()}}function Wa(e,t){const n=typeof e=="object"?e:Fd(),r=typeof e=="string"?e:t||"(default)",i=Md(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Pc("firestore");s&&bm(i,...s)}return i}function Vm(e){return e._firestoreClient||ph(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ph(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,h,d){return new Ip(a,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,dh(d.experimentalLongPollingOptions),d.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new wm(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class mn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new mn(jt.fromBase64String(t))}catch(n){throw new O(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new mn(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class gh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new O(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class mh{constructor(t){this._methodName=t}}/**
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
 */class bo{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new O(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new O(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return et(this._lat,t._lat)||et(this._long,t._long)}}/**
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
 */const Pm=/^__.*__$/;function _h(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ro{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Eu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(t){return new Ro(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.mu(t),i}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(t){return this.Au({path:void 0,Vu:!0})}pu(t){return ks(t,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let t=0;t<this.path.length;t++)this.mu(this.path.get(t))}mu(t){if(t.length===0)throw this.pu("Document fields must not be empty");if(_h(this.du)&&Pm.test(t))throw this.pu('Document fields cannot begin and end with "__"')}}class km{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ei(t)}Su(t,n,r,i=!1){return new Ro({du:t,methodName:n,wu:r,path:$t.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xm(e){const t=e._freezeSettings(),n=Ei(e._databaseId);return new km(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mm(e,t,n,r=!1){return Vo(n,e.Su(r?4:3,t))}function Vo(e,t){if(yh(e=Fr(e)))return Om("Unsupported field value:",t,e),Nm(e,t);if(e instanceof mh)return function(r,i){if(!_h(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Vu&&t.du!==4)throw t.pu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Vo(a,i.gu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Fr(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qp(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=It.fromDate(r);return{timestampValue:Ds(i.serializer,s)}}if(r instanceof It){const s=new It(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ds(i.serializer,s)}}if(r instanceof bo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof mn)return{bytesValue:zu(i.serializer,r._byteString)};if(r instanceof ve){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.pu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ku(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${Ii(r)}`)}(e,t)}function Nm(e,t){const n={};return Eu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):cr(e,(r,i)=>{const s=Vo(i,t.Ru(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function yh(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof It||e instanceof bo||e instanceof mn||e instanceof ve||e instanceof mh)}function Om(e,t,n){if(!yh(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ii(n);throw r==="an object"?t.pu(e+" a custom object"):t.pu(e+" "+r)}}const Lm=new RegExp("[~\\*/\\[\\]]");function Fm(e,t,n){if(t.search(Lm)>=0)throw ks(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new gh(...t.split("."))._internalPath}catch{throw ks(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ks(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new O(b.INVALID_ARGUMENT,a+e+l)}/**
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
 */class vh{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ve(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new $m(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Po("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class $m extends vh{data(){return super.data()}}function Po(e,t){return typeof t=="string"?Fm(e,t):t instanceof gh?t._internalPath:t._delegate._internalPath}/**
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
 */function Um(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new O(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ko{}class Bm extends ko{}function Xi(e,t,...n){let r=[];t instanceof ko&&r.push(t),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof xo).length,a=s.filter(l=>l instanceof Ai).length;if(o>1||o>0&&a>0)throw new O(b.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Ai extends Bm{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new Ai(t,n,r)}_apply(t){const n=this._parse(t);return wh(t._query,n),new In(t.firestore,t.converter,Ts(t._query,n))}_parse(t){const n=xm(t.firestore);return function(s,o,a,l,h,d,E){let I;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new O(b.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Xa(E,d);const D=[];for(const F of E)D.push(Ya(l,s,F));I={arrayValue:{values:D}}}else I=Ya(l,s,E)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Xa(E,d),I=Mm(a,o,E,d==="in"||d==="not-in");return vt.create(h,d,I)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function br(e,t,n){const r=t,i=Po("where",e);return Ai._create(i,r,n)}class xo extends ko{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new xo(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:re.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)wh(o,l),o=Ts(o,l)}(t._query,n),new In(t.firestore,t.converter,Ts(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ya(e,t,n){if(typeof(n=Fr(n))=="string"){if(n==="")throw new O(b.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Vu(t)&&n.indexOf("/")!==-1)throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ht.fromString(n));if(!B.isDocumentKey(r))throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return va(e,new B(r))}if(n instanceof ve)return va(e,n._key);throw new O(b.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ii(n)}.`)}function Xa(e,t){if(!Array.isArray(e)||e.length===0)throw new O(b.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wh(e,t){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new O(b.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class jm{convertValue(t,n="none"){switch(Ke(t)){case 0:return null;case 1:return t.booleanValue;case 2:return yt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(ze(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw K()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return cr(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new bo(yt(t.latitude),yt(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ho(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Zn(t));default:return null}}convertTimestamp(t){const n=Re(t);return new It(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=ht.fromString(t);wt(Ju(r));const i=new tr(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||he(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Rr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Hm extends vh{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new xr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Po("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xr extends Hm{data(t={}){return super.data(t)}}class qm{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new xr(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new O(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new xr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new xr(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Rr(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,d=-1;return a.type!==0&&(h=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:zm(a.type),doc:l,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function zm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}class Km extends jm{constructor(t){super(),this.firestore=t}convertBytes(t){return new mn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ve(this.firestore,null,n)}}function Ja(e){e=Ps(e,In);const t=Ps(e.firestore,fh),n=Vm(t),r=new Km(t);return Um(e._query),Sm(n,e._query).then(i=>new qm(t,r,e,i))}(function(t,n=!0){(function(i){wn=i})(Ld),Ur(new jn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new fh(new op(r.getProvider("auth-internal")),new hp(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new O(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tr(h.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),nn(pa,"4.4.1",t),nn(pa,"4.4.1","esm2017")})();Za.use([Rh,Vh,Ph,kh]);class Gm{constructor(){this.swiperResult()}swiperResult(){new Za(".result__swiper",{spaceBetween:10,loop:!0,navigation:{nextEl:".result__btn-next",prevEl:".result__btn-prev"}})}}class Si{dropdown;dropdownRow;dropdownList;dropdownItems;dropdownCurrent;dropdownIcon;urlParam;currentUrl;constructor(t){this.dropdown=W(t),this.dropdownRow=this.dropdown.find(".dropdown__row"),this.dropdownList=this.dropdown.find(".dropdown__list"),this.dropdownItems=this.dropdown.find(".dropdown__item"),this.dropdownCurrent=this.dropdown.find(".dropdown__current"),this.dropdownIcon=this.dropdown.find(".dropdown__icon"),this.init()}init(){switch(this.urlParam=new URLSearchParams(window.location.search),this.currentUrl=this.urlParam.get("isCountry"),this.currentVal(),this.toggleDropdown(),this.dropdownObserver(),this.currentUrl!==null&&this.changeCurrentVal(this.currentUrl),this.currentUrl){case"All":this.dropdownCurrent.text("Все направления");break;case"Egypt":this.dropdownCurrent.text("Египет");break;case"AOE":this.dropdownCurrent.text("АОЭ");break;case"Thailand":this.dropdownCurrent.text("Тайланд");break;case"Bulgaria":this.dropdownCurrent.text("Болгария");break;case"Chornogoria":this.dropdownCurrent.text("Чорногория");break;case"Indonesia":this.dropdownCurrent.text("Індонезия");break;case"Georgia":this.dropdownCurrent.text("Грузия");break;case"Greece":this.dropdownCurrent.text("Греция");break;case"Turkey":this.dropdownCurrent.text("Турция");break;case"Cyprus":this.dropdownCurrent.text("Кипр");break;case"Tunisia":this.dropdownCurrent.text("Тунис");break;case"Spain":this.dropdownCurrent.text("Испания");break;case"Ukraine":this.dropdownCurrent.text("Украина");break;default:this.dropdownCurrent.text("")}}currentVal(){this.dropdownCurrent.text("")}toggleDropdown(){this.dropdownRow.on("click",()=>{this.dropdownList.toggleClass("dropdown__list_show"),this.dropdownIcon.toggleClass("dropdown__icon_rotate")}),this.dropdownItems.on("click",t=>{this.dropdownCurrent.text(W(t.target).text()),this.dropdownList.removeClass("dropdown__list_show"),this.dropdownIcon.removeClass("dropdown__icon_rotate")}),W(document).on("click",t=>{const n=this.dropdown.is(t.target),r=this.dropdown.has(t.target).length===0;!n&&r&&(this.dropdownList.removeClass("dropdown__list_show"),this.dropdownIcon.removeClass("dropdown__icon_rotate"))})}dropdownObserver(){const t={rootMargin:`0px 0px -${this.dropdownList.outerHeight()}px 0px`,threshold:1};new IntersectionObserver(this.callback.bind(this),t).observe(this.dropdown[0])}callback(t){t.forEach(n=>{n.isIntersecting?this.dropdownList.css("top",`${this.dropdownRow.outerHeight()}px`):this.dropdownList.css("top",`-${this.dropdownList.outerHeight()}px`)})}changeCurrentVal(t){this.dropdownCurrent.text(t)}}new Si(".info__destination-select");new Si(".info__duration-select");new Si(".info__date-select");new Si(".info__guests-select");var Mr=(e=>(e[e.All=0]="All",e[e.Egypt=1]="Egypt",e[e.AOE=2]="AOE",e[e.Thailand=3]="Thailand",e[e.Bulgaria=4]="Bulgaria",e[e.Chornogoria=5]="Chornogoria",e[e.Indonesia=6]="Indonesia",e[e.Georgia=7]="Georgia",e[e.Greece=8]="Greece",e[e.Turkey=9]="Turkey",e[e.Cyprus=10]="Cyprus",e[e.Tunisia=11]="Tunisia",e[e.Spain=12]="Spain",e[e.Ukraine=13]="Ukraine",e))(Mr||{}),Eh=(e=>(e[e.One=1]="One",e[e.Seven=2]="Seven",e[e.Ten=3]="Ten",e[e.Fourteen=4]="Fourteen",e[e.TwentyOne=5]="TwentyOne",e))(Eh||{});class Qm{dropdown;dropdownRow;dropdownList;dropdownItem;dropdownHeight;urlParams;hotelCounry;hotelRegion;cardHotel;constructor(){this.dropdown=W(".dropdown"),this.dropdownRow=this.dropdown.find(".dropdown__row"),this.dropdownList=this.dropdown.find(".dropdown__list"),this.dropdownItem=this.dropdown.find(".dropdown__item"),this.dropdownHeight=this.dropdownList.height()??0,this.cardHotel=[],console.log(this.cardHotel),this.init()}init(){this.selectCountry(),this.selectDuration(),this.readDataUrl(),this.initCalendar(),this.updateCounterAdults(),this.updateCounterKids(),this.renderStars(),this.priceSlider()}readDataUrl(){if(this.urlParams=new URLSearchParams(window.location.search),this.hotelCounry=this.urlParams.get("isCountry"),this.hotelRegion=this.urlParams.get("isRegion"),this.hotelCounry&&this.hotelRegion){const t=Mr[this.hotelCounry],n=this.hotelRegion;this.clickDestination(t,n)}}clickDestination(t,n){this.getCountry(t,n)}clickDuration(t){this.getDuration(t)}selectCountry(){W(".dropdown__item[data-destination]").on("click",t=>{const n=W(t.currentTarget).data("destination");if(n){const r=Mr[n];this.clickDestination(r,"Шарм-эль-Шейх")}})}selectDuration(){W(".dropdown__item[data-duration]").on("click",t=>{const n=W(t.currentTarget).data("duration");if(n){const r=Eh[n];this.clickDuration(r)}})}async getCountry(t,n){const r=Wa(Zo);let i;const s=Mr[t],o=new URL(window.location.href);o.searchParams.set("isCountry",s.toString()),o.searchParams.set("isRegion",n),window.history.pushState({},"",o.toString()),this.cardHotel=[],t===0?i=Xi(Yi(r,"hotels"),br("isCountry","!=","")):i=Xi(Yi(r,"hotels"),br("isCountry","==",+t),br("isRegion","==",n));try{(await Ja(i)).forEach(l=>{this.cardHotel.push(l.data())}),this.renderHotels(this.cardHotel),new Gm,this.renderRegions(this.cardHotel)}catch(a){console.error(a)}}async getDuration(t){const n=Wa(Zo),r=Xi(Yi(n,"hotels"),br("isDuration","==",t));try{(await Ja(r)).forEach(s=>{const o=s.data();console.log(o)})}catch(i){console.error("Помилка при отриманні даних:",i)}}renderHotels(t){W(".result__content").html(""),t.length>0?t.forEach(n=>{const r=`
        <div class="result__hotel">

        <div class="result__slider">
          <div class="swiper result__swiper">
            <div class="swiper-wrapper result__wrapper">

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${n.img[0].urlWebp}" type="image/webp">
                  <img src="${n.img[0].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${n.img[1].urlWebp}" type="image/webp">
                  <img src="${n.img[1].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${n.img[2].urlWebp}" type="image/webp">
                  <img src="${n.img[2].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${n.img[3].urlWebp}" type="image/webp">
                  <img src="${n.img[3].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${n.img[4].urlWebp}" type="image/webp">
                  <img src="${n.img[4].url}" alt="photo">
                </picture>
              </div>

            </div>

            <div class="swiper-button-next result__btn-next">
              <svg>
                <use xlink:href="./src/images/sprite.svg#chevron-left"></use>
              </svg>
            </div>

            <div class="swiper-button-prev result__btn-prev">
              <svg>
                <use xlink:href="./src/images/sprite.svg#chevron-left"></use>
              </svg>
            </div>

          </div>
        </div>

        <div class="result__row">

          <div class="result__info">
            <h4 class="result__info-title">${n.name}</h4>

            <div class="result__info-location">
              <svg>
                <use xlink:href="./src/images/sprite.svg#point"></use>
              </svg>
              <p class="result__info-country">${n.country}</p>
              <p class="result__info-region">${n.region}</p>
            </div>

            <p class="result__info-descript">${n.description[0].main}</p>
            <a class="result__info-link"  href="hotel.html">
              Подробнее об отеле
              <svg>
                <use xlink:href="./src/images/sprite.svg#arrow-right"></use>
              </svg>
            </a>
          </div>

          <div class="result__rating">
            <div class="result__rating-star">

            </div>

            <p class="result__rating-duration">
              <svg>
                <use xlink:href="./src/images/sprite.svg#clock"></use>
              </svg>
              ${n.duration}
            </p>

            <p class="result__rating-meal">
              <svg>
                <use xlink:href="./src/images/sprite.svg#food"></use>
              </svg>
              ${n.meals}
            </p>

            <p class="result__rating-room">
              <svg>
                <use xlink:href="./src/images/sprite.svg#house"></use>
              </svg>
              ${n.room[0]}
            </p>

            <p class="result__rating-beach">
              <svg>
                <use xlink:href="./src/images/sprite.svg#sun"></use>
              </svg>
              ${n.beach}
            </p>
          </div>

          <div class="result__price">
            <p class="result__price-num"> ${n.price[0]}</p>
          </div>

        </div>

      </div>`;W(".result__content").append(r)}):W(".result__content").html(`
      <div class="result__not-found">
        <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
        <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
      </div>
      `)}initCalendar(){new Mh("#calendar")}updateCounterAdults(){let t=W(".info__guests-counter");W(".info__guests-item_adults").each(function(){let n=W(this).find(".info__guests-minus_adults"),r=W(this).find(".info__guests-plus_adults"),i=W(this).find(".info__guests-counters_adults");n.on("click",function(){let s=+i.text();s>0&&(i.text(s-1),t.text(s-1))}),r.on("click",function(){let s=+i.text();s<9&&(i.text(s+1),t.text(s+1))})})}updateCounterKids(){let t=W(".info__guests-subcounter");W(".info__guests-item_kids").each(function(){let n=W(this).find(".info__guests-minus_kids"),r=W(this).find(".info__guests-plus_kids"),i=W(this).find(".info__guests-counters_kids");n.on("click",function(){let s=+i.text();s>0&&(i.text(s-1),t.text(s-1),W(".info__guests-item").last().remove()),s===1&&r.prop("disabled",!1)}),r.on("click",function(){let s=+i.text();if(s<9&&(i.text(s+1),t.text(s+1)),s+1===9&&r.prop("disabled",!0),t.text().length>0){W(".info__guests-list").append(`
            <li class="info__guests-item guests__item_years">
            <label for="age">Ребёнок: <span class="guests__num"></span></label>
            <select class="guests__selects"  id="age" name="age">
                <option value="0">Возраст</option>
                <option value="1">1 год</option>
                <option value="2">2 года</option>
                <option value="3">3 года</option>
                <option value="4">4 года</option>
                <option value="5">5 лет</option>
                <option value="6">6 лет</option>
                <option value="7">7 лет</option>
                <option value="8">8 лет</option>
                <option value="9">9 лет</option>
                <option value="10">10 лет</option>
                <option value="11">11 лет</option>
                <option value="12">12 лет</option>
                <option value="13">13 лет</option>
                <option value="14">14 лет</option>
                <option value="15">15 лет</option>
                <option value="16">16 лет</option>
                <option value="17">17 лет</option>
            </select>
            </li>`);for(let a=0;a<W(".guests__item_years").length;a++)W(".guests__num").eq(a).text(a+1)}})})}renderStars(){const n=[2,3,4,5].map(r=>Array.from({length:r},()=>`
        <svg>
            <use xlink:href="./src/images/sprite.svg#start"></use>
        </svg>`).join(""));W(".category__btns-stars").each((r,i)=>{W(i).html(n[r])})}priceSlider(){const t=document.querySelector(".category__slider");Ec.create(t,{start:[600,3700],connect:!0,range:{min:400,max:4e3},tooltips:!0,format:{to:function(n){return Math.round(+n)+"€"},from:function(n){return Math.round(+n)}},step:200,pips:{mode:"range",density:10}}),W(".noUi-value").each(function(){W(this).text(W(this).text()+"€")})}renderRegions(t){t.forEach(n=>{const r=`
        <button data-region="${n.region}" class="category__btns category__btns-regions">
          <svg>
            <use xlink:href="${Nh}#check-circle"></use>
          </svg>
          ${n.region}
        </button>`;W(".category__regions-item").append(r)}),W(".category__btns-regions").on("click",n=>{const r=W(n.currentTarget).data("region");r&&console.log(r)})}}document.addEventListener("DOMContentLoaded",async()=>{new bh,new Qm});
