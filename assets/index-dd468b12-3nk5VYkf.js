import{k as gt,l as Qt,m as ei,_ as Ke,C as Be,r as Je,n as ti,S as X,g as U,E as Ae,o as ii,b as mt,p as ri,a as si,L as vt,h as m,q as ni,s as Z,d as oi,F as Le,t as G,u as z,v as ai,w as li,x as ci}from"./index.esm-RQMDg1fI.js";var di=Object.defineProperty,ui=(r,e,t)=>e in r?di(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,p=(r,e,t)=>(ui(r,typeof e!="symbol"?e+"":e,t),t);const hi=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,fi=/^-?[0-9]\d*$/,pi=/^(?=.*[A-Za-z])(?=.*\d).{8,}$/,gi=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,mi=r=>{let e=r;return typeof r=="string"&&(e=r.trim()),!e},vi=r=>hi.test(r),_i=(r,e)=>r.length>e,bi=(r,e)=>r.length<e,yi=r=>typeof r!="string"?!1:!isNaN(+r)&&!isNaN(parseFloat(r)),Ii=r=>fi.test(r),wi=r=>pi.test(r),Ei=r=>gi.test(r),Ti=(r,e)=>r>e,Si=(r,e)=>r<e,I=r=>typeof r!="string"||r==="";var f=(r=>(r.Required="required",r.Email="email",r.MinLength="minLength",r.MaxLength="maxLength",r.Password="password",r.Number="number",r.Integer="integer",r.MaxNumber="maxNumber",r.MinNumber="minNumber",r.StrongPassword="strongPassword",r.CustomRegexp="customRegexp",r.MinFilesCount="minFilesCount",r.MaxFilesCount="maxFilesCount",r.Files="files",r))(f||{}),Ce=(r=>(r.Required="required",r))(Ce||{}),_t=(r=>(r.Label="label",r.LabelArrow="labelArrow",r))(_t||{});const Ye=[{key:f.Required,dict:{en:"The field is required"}},{key:f.Email,dict:{en:"Email has invalid format"}},{key:f.MaxLength,dict:{en:"The field must contain a maximum of :value characters"}},{key:f.MinLength,dict:{en:"The field must contain a minimum of :value characters"}},{key:f.Password,dict:{en:"Password must contain minimum eight characters, at least one letter and one number"}},{key:f.StrongPassword,dict:{en:"Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"}},{key:f.Number,dict:{en:"Value should be a number"}},{key:f.MaxNumber,dict:{en:"Number should be less or equal than :value"}},{key:f.MinNumber,dict:{en:"Number should be more or equal than :value"}},{key:f.MinFilesCount,dict:{en:"Files count should be more or equal than :value"}},{key:f.MaxFilesCount,dict:{en:"Files count should be less or equal than :value"}},{key:f.Files,dict:{en:"Uploaded files have one or several invalid properties (extension/size/type etc)."}}],Ci="Value is incorrect",q=r=>typeof r=="object"&&r!==null&&"then"in r&&typeof r.then=="function",ki=r=>{let e=r;const t=[];for(;e;)t.unshift(e),e=e.parentNode;return t},Pi=(r,e)=>{const t=[...e].reverse();for(let i=0,s=t.length;i<s;++i){const n=t[i];for(const o in r){const a=r[o];if(a.groupElem===n)return[o,a]}}return null},_=r=>Array.isArray(r)?r.filter(e=>e.length>0):typeof r=="string"&&r.trim()?[...r.split(" ").filter(e=>e.length>0)]:[],H=r=>r instanceof Element||r instanceof HTMLDocument,Ai=".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}",se=5,Ee={errorFieldStyle:{color:"#b81111",border:"1px solid #B81111"},errorFieldCssClass:"just-validate-error-field",successFieldCssClass:"just-validate-success-field",errorLabelStyle:{color:"#b81111"},errorLabelCssClass:"just-validate-error-label",successLabelCssClass:"just-validate-success-label",focusInvalidField:!0,lockForm:!0,testingMode:!1,validateBeforeSubmitting:!1,submitFormAutomatically:!1};class Oe{constructor(e,t,i){p(this,"form",null),p(this,"fields",{}),p(this,"groupFields",{}),p(this,"errors",{}),p(this,"isValid",!1),p(this,"isSubmitted",!1),p(this,"globalConfig",Ee),p(this,"errorLabels",{}),p(this,"successLabels",{}),p(this,"eventListeners",[]),p(this,"dictLocale",Ye),p(this,"currentLocale","en"),p(this,"customStyleTags",{}),p(this,"onSuccessCallback"),p(this,"onFailCallback"),p(this,"onValidateCallback"),p(this,"tooltips",[]),p(this,"lastScrollPosition"),p(this,"isScrollTick"),p(this,"fieldIds",new Map),p(this,"getKeyByFieldSelector",s=>this.fieldIds.get(s)),p(this,"getFieldSelectorByKey",s=>{for(const[n,o]of this.fieldIds)if(s===o)return n}),p(this,"getCompatibleFields",()=>{const s={};return Object.keys(this.fields).forEach(n=>{let o=n;const a=this.getFieldSelectorByKey(n);typeof a=="string"&&(o=a),s[o]={...this.fields[n]}}),s}),p(this,"setKeyByFieldSelector",s=>{if(this.fieldIds.has(s))return this.fieldIds.get(s);const n=String(this.fieldIds.size+1);return this.fieldIds.set(s,n),n}),p(this,"refreshAllTooltips",()=>{this.tooltips.forEach(s=>{s.refresh()})}),p(this,"handleDocumentScroll",()=>{this.lastScrollPosition=window.scrollY,this.isScrollTick||(window.requestAnimationFrame(()=>{this.refreshAllTooltips(),this.isScrollTick=!1}),this.isScrollTick=!0)}),p(this,"formSubmitHandler",s=>{s.preventDefault(),this.isSubmitted=!0,this.validateHandler(s)}),p(this,"handleFieldChange",s=>{let n;for(const o in this.fields)if(this.fields[o].elem===s){n=o;break}n&&(this.fields[n].touched=!0,this.validateField(n,!0))}),p(this,"handleGroupChange",s=>{let n;for(const o in this.groupFields)if(this.groupFields[o].elems.find(l=>l===s)){n=o;break}n&&(this.groupFields[n].touched=!0,this.validateGroup(n,!0))}),p(this,"handlerChange",s=>{s.target&&(this.handleFieldChange(s.target),this.handleGroupChange(s.target),this.renderErrors())}),this.initialize(e,t,i)}initialize(e,t,i){if(this.form=null,this.errors={},this.isValid=!1,this.isSubmitted=!1,this.globalConfig=Ee,this.errorLabels={},this.successLabels={},this.eventListeners=[],this.customStyleTags={},this.tooltips=[],this.currentLocale="en",typeof e=="string"){const s=document.querySelector(e);if(!s)throw Error(`Form with ${e} selector not found! Please check the form selector`);this.setForm(s)}else if(e instanceof HTMLFormElement)this.setForm(e);else throw Error("Form selector is not valid. Please specify a string selector or a DOM element.");if(this.globalConfig={...Ee,...t},i&&(this.dictLocale=[...i,...Ye]),this.isTooltip()){const s=document.createElement("style");s.textContent=Ai,this.customStyleTags[_t.Label]=document.head.appendChild(s),this.addListener("scroll",document,this.handleDocumentScroll)}}getLocalisedString(e,t,i){var s;const n=i??e;let o=(s=this.dictLocale.find(a=>a.key===n))==null?void 0:s.dict[this.currentLocale];if(o||i&&(o=i),o&&t!==void 0)switch(e){case f.MaxLength:case f.MinLength:case f.MaxNumber:case f.MinNumber:case f.MinFilesCount:case f.MaxFilesCount:o=o.replace(":value",String(t))}return o||i||Ci}getFieldErrorMessage(e,t){const i=typeof e.errorMessage=="function"?e.errorMessage(this.getElemValue(t),this.fields):e.errorMessage;return this.getLocalisedString(e.rule,e.value,i)}getFieldSuccessMessage(e,t){const i=typeof e=="function"?e(this.getElemValue(t),this.fields):e;return this.getLocalisedString(void 0,void 0,i)}getGroupErrorMessage(e){return this.getLocalisedString(e.rule,void 0,e.errorMessage)}getGroupSuccessMessage(e){if(e.successMessage)return this.getLocalisedString(void 0,void 0,e.successMessage)}setFieldInvalid(e,t){this.fields[e].isValid=!1,this.fields[e].errorMessage=this.getFieldErrorMessage(t,this.fields[e].elem)}setFieldValid(e,t){this.fields[e].isValid=!0,t!==void 0&&(this.fields[e].successMessage=this.getFieldSuccessMessage(t,this.fields[e].elem))}setGroupInvalid(e,t){this.groupFields[e].isValid=!1,this.groupFields[e].errorMessage=this.getGroupErrorMessage(t)}setGroupValid(e,t){this.groupFields[e].isValid=!0,this.groupFields[e].successMessage=this.getGroupSuccessMessage(t)}getElemValue(e){switch(e.type){case"checkbox":return e.checked;case"file":return e.files;default:return e.value}}validateGroupRule(e,t,i){switch(i.rule){case Ce.Required:t.every(s=>!s.checked)?this.setGroupInvalid(e,i):this.setGroupValid(e,i)}}validateFieldRule(e,t,i,s=!1){const n=i.value,o=this.getElemValue(t);if(i.plugin){i.plugin(o,this.getCompatibleFields())||this.setFieldInvalid(e,i);return}switch(i.rule){case f.Required:{mi(o)&&this.setFieldInvalid(e,i);break}case f.Email:{if(I(o))break;vi(o)||this.setFieldInvalid(e,i);break}case f.MaxLength:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(I(o))break;_i(o,n)&&this.setFieldInvalid(e,i);break}case f.MinLength:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(I(o))break;bi(o,n)&&this.setFieldInvalid(e,i);break}case f.Password:{if(I(o))break;wi(o)||this.setFieldInvalid(e,i);break}case f.StrongPassword:{if(I(o))break;Ei(o)||this.setFieldInvalid(e,i);break}case f.Number:{if(I(o))break;yi(o)||this.setFieldInvalid(e,i);break}case f.Integer:{if(I(o))break;Ii(o)||this.setFieldInvalid(e,i);break}case f.MaxNumber:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(I(o))break;const a=+o;(Number.isNaN(a)||Ti(a,n))&&this.setFieldInvalid(e,i);break}case f.MinNumber:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(I(o))break;const a=+o;(Number.isNaN(a)||Si(a,n))&&this.setFieldInvalid(e,i);break}case f.CustomRegexp:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);return}let a;try{a=new RegExp(n)}catch{console.error(`Value for ${i.rule} rule for [${e}] should be a valid regexp. This field will be always invalid.`),this.setFieldInvalid(e,i);break}const l=String(o);l!==""&&!a.test(l)&&this.setFieldInvalid(e,i);break}case f.MinFilesCount:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(Number.isFinite(o?.length)&&o.length<n){this.setFieldInvalid(e,i);break}break}case f.MaxFilesCount:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);break}if(typeof n!="number"){console.error(`Value for ${i.rule} rule for [${e}] field should be a number. The field will be always invalid.`),this.setFieldInvalid(e,i);break}if(Number.isFinite(o?.length)&&o.length>n){this.setFieldInvalid(e,i);break}break}case f.Files:{if(n===void 0){console.error(`Value for ${i.rule} rule for [${e}] field is not defined. This field will be always invalid.`),this.setFieldInvalid(e,i);return}if(typeof n!="object"){console.error(`Value for ${i.rule} rule for [${e}] field should be an object. This field will be always invalid.`),this.setFieldInvalid(e,i);return}const a=n.files;if(typeof a!="object"){console.error(`Value for ${i.rule} rule for [${e}] field should be an object with files array. This field will be always invalid.`),this.setFieldInvalid(e,i);return}const l=(c,d)=>{const h=Number.isFinite(d.minSize)&&c.size<d.minSize,g=Number.isFinite(d.maxSize)&&c.size>d.maxSize,V=Array.isArray(d.names)&&!d.names.includes(c.name),x=Array.isArray(d.extensions)&&!d.extensions.includes(c.name.split(".")[c.name.split(".").length-1]),re=Array.isArray(d.types)&&!d.types.includes(c.type);return h||g||V||x||re};if(typeof o=="object"&&o!==null)for(let c=0,d=o.length;c<d;++c){const h=o.item(c);if(!h){this.setFieldInvalid(e,i);break}if(l(h,a)){this.setFieldInvalid(e,i);break}}break}default:{if(typeof i.validator!="function"){console.error(`Validator for custom rule for [${e}] field should be a function. This field will be always invalid.`),this.setFieldInvalid(e,i);return}const a=i.validator(o,this.getCompatibleFields());if(typeof a!="boolean"&&typeof a!="function"&&console.error(`Validator return value for [${e}] field should be boolean or function. It will be cast to boolean.`),typeof a=="function")if(s)this.fields[e].asyncCheckPending=!0;else{this.fields[e].asyncCheckPending=!1;const l=a();if(!q(l)){console.error(`Validator function for custom rule for [${e}] field should return a Promise. This field will be always invalid.`),this.setFieldInvalid(e,i);return}return l.then(c=>{c||this.setFieldInvalid(e,i)}).catch(()=>{this.setFieldInvalid(e,i)})}a||this.setFieldInvalid(e,i)}}}isFormValid(){let e=!0;for(let t=0,i=Object.values(this.fields).length;t<i;++t){const s=Object.values(this.fields)[t];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}for(let t=0,i=Object.values(this.groupFields).length;t<i;++t){const s=Object.values(this.groupFields)[t];if(s.isValid===void 0){e=void 0;break}if(s.isValid===!1){e=!1;break}}return e}validateField(e,t=!1){var i;const s=this.fields[e];s.isValid=!0;const n=[];return[...s.rules].reverse().forEach(o=>{const a=this.validateFieldRule(e,s.elem,o,t);q(a)&&n.push(a)}),s.isValid&&this.setFieldValid(e,(i=s.config)==null?void 0:i.successMessage),Promise.allSettled(n).finally(()=>{var o;t&&((o=this.onValidateCallback)==null||o.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}revalidateField(e){if(typeof e!="string"&&!H(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.fields[t]?(console.error("Field not found. Check the field selector."),Promise.reject()):new Promise(i=>{this.validateField(t,!0).finally(()=>{this.clearFieldStyle(t),this.clearFieldLabel(t),this.renderFieldError(t,!0),i(!!this.fields[t].isValid)})})}revalidateGroup(e){if(typeof e!="string"&&!H(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),Promise.reject()):new Promise(i=>{this.validateGroup(t).finally(()=>{this.clearFieldLabel(t),this.renderGroupError(t,!0),i(!!this.groupFields[t].isValid)})})}validateGroup(e,t=!1){const i=this.groupFields[e],s=[];return[...i.rules].reverse().forEach(n=>{const o=this.validateGroupRule(e,i.elems,n);q(o)&&s.push(o)}),Promise.allSettled(s).finally(()=>{var n;t&&((n=this.onValidateCallback)==null||n.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}))})}focusInvalidField(){for(const e in this.fields){const t=this.fields[e];if(!t.isValid){setTimeout(()=>t.elem.focus(),0);break}}}afterSubmitValidation(e=!1){this.renderErrors(e),this.globalConfig.focusInvalidField&&this.focusInvalidField()}validate(e=!1){return new Promise(t=>{const i=[];Object.keys(this.fields).forEach(s=>{const n=this.validateField(s);q(n)&&i.push(n)}),Object.keys(this.groupFields).forEach(s=>{const n=this.validateGroup(s);q(n)&&i.push(n)}),Promise.allSettled(i).then(()=>{var s;this.afterSubmitValidation(e),(s=this.onValidateCallback)==null||s.call(this,{isValid:this.isFormValid(),isSubmitted:this.isSubmitted,fields:this.getCompatibleFields(),groups:{...this.groupFields}}),t(!!i.length)})})}revalidate(){return new Promise(e=>{this.validateHandler(void 0,!0).finally(()=>{this.globalConfig.focusInvalidField&&this.focusInvalidField(),e(this.isValid)})})}validateHandler(e,t=!1){return this.globalConfig.lockForm&&this.lockForm(),this.validate(t).finally(()=>{var i,s,n;this.globalConfig.lockForm&&this.unlockForm(),this.isValid?((i=this.onSuccessCallback)==null||i.call(this,e),this.globalConfig.submitFormAutomatically&&((s=e?.currentTarget)==null||s.submit())):(n=this.onFailCallback)==null||n.call(this,this.getCompatibleFields(),this.groupFields)})}setForm(e){this.form=e,this.form.setAttribute("novalidate","novalidate"),this.removeListener("submit",this.form,this.formSubmitHandler),this.addListener("submit",this.form,this.formSubmitHandler)}addListener(e,t,i){t.addEventListener(e,i),this.eventListeners.push({type:e,elem:t,func:i})}removeListener(e,t,i){t.removeEventListener(e,i),this.eventListeners=this.eventListeners.filter(s=>s.type!==e||s.elem!==t)}addField(e,t,i){if(typeof e!="string"&&!H(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");let s;if(typeof e=="string"?s=this.form.querySelector(e):s=e,!s)throw Error("Field doesn't exist in the DOM! Please check the field selector.");if(!Array.isArray(t)||!t.length)throw Error("Rules argument should be an array and should contain at least 1 element.");t.forEach(o=>{if(!("rule"in o||"validator"in o||"plugin"in o))throw Error("Rules argument must contain at least one rule or validator property.");if(!o.validator&&!o.plugin&&(!o.rule||!Object.values(f).includes(o.rule)))throw Error(`Rule should be one of these types: ${Object.values(f).join(", ")}. Provided value: ${o.rule}`)});const n=this.setKeyByFieldSelector(e);return this.fields[n]={elem:s,rules:t,isValid:void 0,touched:!1,config:i},this.setListeners(s),(this.isSubmitted||this.globalConfig.validateBeforeSubmitting)&&this.validateField(n),this}removeField(e){if(typeof e!="string"&&!H(e))throw Error("Field selector is not valid. Please specify a string selector or a valid DOM element.");const t=this.getKeyByFieldSelector(e);if(!t||!this.fields[t])return console.error("Field not found. Check the field selector."),this;const i=this.getListenerType(this.fields[t].elem.type);return this.removeListener(i,this.fields[t].elem,this.handlerChange),this.clearErrors(),delete this.fields[t],this}removeGroup(e){if(typeof e!="string")throw Error("Group selector is not valid. Please specify a string selector.");const t=this.getKeyByFieldSelector(e);return!t||!this.groupFields[t]?(console.error("Group not found. Check the group selector."),this):(this.groupFields[t].elems.forEach(i=>{const s=this.getListenerType(i.type);this.removeListener(s,i,this.handlerChange)}),this.clearErrors(),delete this.groupFields[t],this)}addRequiredGroup(e,t,i,s){if(typeof e!="string"&&!H(e))throw Error("Group selector is not valid. Please specify a string selector or a valid DOM element.");let n;if(typeof e=="string"?n=this.form.querySelector(e):n=e,!n)throw Error("Group selector not found! Please check the group selector.");const o=n.querySelectorAll("input"),a=Array.from(o).filter(c=>{const d=Pi(this.groupFields,ki(c));return d?d[1].elems.find(h=>h!==c):!0}),l=this.setKeyByFieldSelector(e);return this.groupFields[l]={rules:[{rule:Ce.Required,errorMessage:t,successMessage:s}],groupElem:n,elems:a,touched:!1,isValid:void 0,config:i},o.forEach(c=>{this.setListeners(c)}),this}getListenerType(e){switch(e){case"checkbox":case"select-one":case"file":case"radio":return"change";default:return"input"}}setListeners(e){const t=this.getListenerType(e.type);this.removeListener(t,e,this.handlerChange),this.addListener(t,e,this.handlerChange)}clearFieldLabel(e){var t,i;(t=this.errorLabels[e])==null||t.remove(),(i=this.successLabels[e])==null||i.remove()}clearFieldStyle(e){var t,i,s,n;const o=this.fields[e],a=((t=o.config)==null?void 0:t.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(a).forEach(c=>{o.elem.style[c]=""});const l=((i=o.config)==null?void 0:i.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(l).forEach(c=>{o.elem.style[c]=""}),o.elem.classList.remove(..._(((s=o.config)==null?void 0:s.errorFieldCssClass)||this.globalConfig.errorFieldCssClass),..._(((n=o.config)==null?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))}clearErrors(){var e,t;Object.keys(this.errorLabels).forEach(i=>this.errorLabels[i].remove()),Object.keys(this.successLabels).forEach(i=>this.successLabels[i].remove());for(const i in this.fields)this.clearFieldStyle(i);for(const i in this.groupFields){const s=this.groupFields[i],n=((e=s.config)==null?void 0:e.errorFieldStyle)||this.globalConfig.errorFieldStyle;Object.keys(n).forEach(a=>{s.elems.forEach(l=>{var c;l.style[a]="",l.classList.remove(..._(((c=s.config)==null?void 0:c.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))})});const o=((t=s.config)==null?void 0:t.successFieldStyle)||this.globalConfig.successFieldStyle||{};Object.keys(o).forEach(a=>{s.elems.forEach(l=>{var c;l.style[a]="",l.classList.remove(..._(((c=s.config)==null?void 0:c.successFieldCssClass)||this.globalConfig.successFieldCssClass))})})}this.tooltips=[]}isTooltip(){return!!this.globalConfig.tooltip}lockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)e[t].setAttribute("data-just-validate-fallback-disabled",e[t].disabled?"true":"false"),e[t].setAttribute("disabled","disabled"),e[t].style.pointerEvents="none",e[t].style.webkitFilter="grayscale(100%)",e[t].style.filter="grayscale(100%)"}unlockForm(){const e=this.form.querySelectorAll("input, textarea, button, select");for(let t=0,i=e.length;t<i;++t)e[t].getAttribute("data-just-validate-fallback-disabled")!=="true"&&e[t].removeAttribute("disabled"),e[t].style.pointerEvents="",e[t].style.webkitFilter="",e[t].style.filter=""}renderTooltip(e,t,i){var s;const{top:n,left:o,width:a,height:l}=e.getBoundingClientRect(),c=t.getBoundingClientRect(),d=i||((s=this.globalConfig.tooltip)==null?void 0:s.position);switch(d){case"left":{t.style.top=`${n+l/2-c.height/2}px`,t.style.left=`${o-c.width-se}px`;break}case"top":{t.style.top=`${n-c.height-se}px`,t.style.left=`${o+a/2-c.width/2}px`;break}case"right":{t.style.top=`${n+l/2-c.height/2}px`,t.style.left=`${o+a+se}px`;break}case"bottom":{t.style.top=`${n+l+se}px`,t.style.left=`${o+a/2-c.width/2}px`;break}}return t.dataset.direction=d,{refresh:()=>{this.renderTooltip(e,t,i)}}}createErrorLabelElem(e,t,i){const s=document.createElement("div");s.innerHTML=t;const n=this.isTooltip()?i?.errorLabelStyle:i?.errorLabelStyle||this.globalConfig.errorLabelStyle;return Object.assign(s.style,n),s.classList.add(..._(i?.errorLabelCssClass||this.globalConfig.errorLabelCssClass),"just-validate-error-label"),this.isTooltip()&&(s.dataset.tooltip="true"),this.globalConfig.testingMode&&(s.dataset.testId=`error-label-${e}`),this.errorLabels[e]=s,s}createSuccessLabelElem(e,t,i){if(t===void 0)return null;const s=document.createElement("div");s.innerHTML=t;const n=i?.successLabelStyle||this.globalConfig.successLabelStyle;return Object.assign(s.style,n),s.classList.add(..._(i?.successLabelCssClass||this.globalConfig.successLabelCssClass),"just-validate-success-label"),this.globalConfig.testingMode&&(s.dataset.testId=`success-label-${e}`),this.successLabels[e]=s,s}renderErrorsContainer(e,t){const i=t||this.globalConfig.errorsContainer;if(typeof i=="string"){const s=this.form.querySelector(i);if(s)return s.appendChild(e),!0;console.error(`Error container with ${i} selector not found. Errors will be rendered as usual`)}return i instanceof Element?(i.appendChild(e),!0):(i!==void 0&&console.error("Error container not found. It should be a string or existing Element. Errors will be rendered as usual"),!1)}renderGroupLabel(e,t,i,s){!s&&this.renderErrorsContainer(t,i)||e.appendChild(t)}renderFieldLabel(e,t,i,s){var n,o,a,l,c,d,h;if(!(!s&&this.renderErrorsContainer(t,i)))if(e.type==="checkbox"||e.type==="radio"){const g=document.querySelector(`label[for="${e.getAttribute("id")}"]`);((o=(n=e.parentElement)==null?void 0:n.tagName)==null?void 0:o.toLowerCase())==="label"?(l=(a=e.parentElement)==null?void 0:a.parentElement)==null||l.appendChild(t):g?(c=g.parentElement)==null||c.appendChild(t):(d=e.parentElement)==null||d.appendChild(t)}else(h=e.parentElement)==null||h.appendChild(t)}showLabels(e,t){Object.keys(e).forEach((i,s)=>{const n=e[i],o=this.getKeyByFieldSelector(i);if(!o||!this.fields[o]){console.error("Field not found. Check the field selector.");return}const a=this.fields[o];a.isValid=!t,this.clearFieldStyle(o),this.clearFieldLabel(o),this.renderFieldError(o,!1,n),s===0&&this.globalConfig.focusInvalidField&&setTimeout(()=>a.elem.focus(),0)})}showErrors(e){if(typeof e!="object")throw Error("[showErrors]: Errors should be an object with key: value format");this.showLabels(e,!0)}showSuccessLabels(e){if(typeof e!="object")throw Error("[showSuccessLabels]: Labels should be an object with key: value format");this.showLabels(e,!1)}renderFieldError(e,t=!1,i){var s,n,o,a,l,c;const d=this.fields[e];if(d.isValid===!1&&(this.isValid=!1),d.isValid===void 0||!t&&!this.isSubmitted&&!d.touched&&i===void 0)return;if(d.isValid){if(!d.asyncCheckPending){const g=this.createSuccessLabelElem(e,i!==void 0?i:d.successMessage,d.config);g&&this.renderFieldLabel(d.elem,g,(s=d.config)==null?void 0:s.errorsContainer,!0),d.elem.classList.add(..._(((n=d.config)==null?void 0:n.successFieldCssClass)||this.globalConfig.successFieldCssClass))}return}d.elem.classList.add(..._(((o=d.config)==null?void 0:o.errorFieldCssClass)||this.globalConfig.errorFieldCssClass));const h=this.createErrorLabelElem(e,i!==void 0?i:d.errorMessage,d.config);this.renderFieldLabel(d.elem,h,(a=d.config)==null?void 0:a.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(d.elem,h,(c=(l=d.config)==null?void 0:l.tooltip)==null?void 0:c.position))}renderGroupError(e,t=!0){var i,s,n,o;const a=this.groupFields[e];if(a.isValid===!1&&(this.isValid=!1),a.isValid===void 0||!t&&!this.isSubmitted&&!a.touched)return;if(a.isValid){a.elems.forEach(d=>{var h,g;Object.assign(d.style,((h=a.config)==null?void 0:h.successFieldStyle)||this.globalConfig.successFieldStyle),d.classList.add(..._(((g=a.config)==null?void 0:g.successFieldCssClass)||this.globalConfig.successFieldCssClass))});const c=this.createSuccessLabelElem(e,a.successMessage,a.config);c&&this.renderGroupLabel(a.groupElem,c,(i=a.config)==null?void 0:i.errorsContainer,!0);return}this.isValid=!1,a.elems.forEach(c=>{var d,h;Object.assign(c.style,((d=a.config)==null?void 0:d.errorFieldStyle)||this.globalConfig.errorFieldStyle),c.classList.add(..._(((h=a.config)==null?void 0:h.errorFieldCssClass)||this.globalConfig.errorFieldCssClass))});const l=this.createErrorLabelElem(e,a.errorMessage,a.config);this.renderGroupLabel(a.groupElem,l,(s=a.config)==null?void 0:s.errorsContainer),this.isTooltip()&&this.tooltips.push(this.renderTooltip(a.groupElem,l,(o=(n=a.config)==null?void 0:n.tooltip)==null?void 0:o.position))}renderErrors(e=!1){if(!(!this.isSubmitted&&!e&&!this.globalConfig.validateBeforeSubmitting)){this.clearErrors(),this.isValid=!0;for(const t in this.groupFields)this.renderGroupError(t);for(const t in this.fields)this.renderFieldError(t)}}destroy(){this.eventListeners.forEach(e=>{this.removeListener(e.type,e.elem,e.func)}),Object.keys(this.customStyleTags).forEach(e=>{this.customStyleTags[e].remove()}),this.clearErrors(),this.globalConfig.lockForm&&this.unlockForm()}refresh(){this.destroy(),this.form?(this.initialize(this.form,this.globalConfig),Object.keys(this.fields).forEach(e=>{const t=this.getFieldSelectorByKey(e);t&&this.addField(t,[...this.fields[e].rules],this.fields[e].config)})):console.error("Cannot initialize the library! Form is not defined")}setCurrentLocale(e){if(typeof e!="string"&&e!==void 0){console.error("Current locale should be a string");return}this.currentLocale=e,this.isSubmitted&&this.validate()}onSuccess(e){return this.onSuccessCallback=e,this}onFail(e){return this.onFailCallback=e,this}onValidate(e){return this.onValidateCallback=e,this}}function Gs(){document.querySelector("#registrationForm")&&new Oe("#registrationForm").addField("#registrationMail",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9.-]+@[^\s@]+\.[\p{L}]{2,}$/u}]).addField("#registrationPassword",[{rule:"required",errorMessage:"Password is required"},{rule:"minLength",value:6},{rule:"maxLength",value:15}]).addField("#registrationRepeatPassword",[{rule:"required"},{rule:"minLength",value:6},{rule:"maxLength",value:15},{validator:(t,i)=>{if(i["#registrationPassword"]&&i["#registrationPassword"].elem){const s=i["#registrationPassword"].elem.value;return t===s}return!0},errorMessage:"Passwords should be the same"}])}function zs(){document.querySelector("#authorizationForm")&&new Oe("#authorizationForm").addField("#authorizationMail",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9.-]+@[^\s@]+\.[\p{L}]{2,}$/u}]).addField("#authorizationPassword",[{rule:"required",errorMessage:"Password is required"},{rule:"minLength",value:6},{rule:"maxLength",value:15}])}function Ks(){document.querySelector("#passwordRecoveryForm")&&new Oe("#passwordRecoveryForm").addField("#passwordRecoveryMail",[{rule:"required",errorMessage:"Email is required"},{rule:"customRegexp",value:/^[a-zA-Z0-9.-]+@[^\s@]+\.[\p{L}]{2,}$/u}])}function Re(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(r);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(r,i[s])&&(t[i[s]]=r[i[s]]);return t}function bt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Li=bt,yt=new Ae("auth","Firebase",bt());/**
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
 */const de=new oi("@firebase/auth");function Oi(r,...e){de.logLevel<=vt.WARN&&de.warn(`Auth (${X}): ${r}`,...e)}function oe(r,...e){de.logLevel<=vt.ERROR&&de.error(`Auth (${X}): ${r}`,...e)}/**
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
 */function v(r,...e){throw Fe(r,...e)}function b(r,...e){return Fe(r,...e)}function It(r,e,t){const i=Object.assign(Object.assign({},Li()),{[e]:t});return new Ae("auth","Firebase",i).create(e,{appName:r.name})}function Ri(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&v(r,"argument-error"),It(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Fe(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return yt.create(r,...e)}function u(r,e,...t){if(!r)throw Fe(e,...t)}function w(r){const e="INTERNAL ASSERTION FAILED: "+r;throw oe(e),new Error(e)}function T(r,e){r||w(e)}/**
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
 */function ke(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Fi(){return Xe()==="http:"||Xe()==="https:"}function Xe(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Ni(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fi()||ti()||"connection"in navigator)?navigator.onLine:!0}function Mi(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Q{constructor(e,t){this.shortDelay=e,this.longDelay=t,T(t>e,"Short delay should be less than long delay!"),this.isMobile=Qt()||ei()}get(){return Ni()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ne(r,e){T(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;w("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;w("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;w("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Di={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Ui=new Q(3e4,6e4);function S(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function C(r,e,t,i,s={}){return Et(r,s,async()=>{let n={},o={};i&&(e==="GET"?o=i:n={body:JSON.stringify(i)});const a=Z(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();return l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),wt.fetch()(Tt(r,r.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},n))})}async function Et(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},Di),e);try{const s=new xi(r),n=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await n.json();if("needConfirmation"in o)throw ne(r,"account-exists-with-different-credential",o);if(n.ok&&!("errorMessage"in o))return o;{const a=n.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ne(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ne(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw ne(r,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw It(r,d,c);v(r,d)}}catch(s){if(s instanceof Le)throw s;v(r,"network-request-failed",{message:String(s)})}}async function ee(r,e,t,i,s={}){const n=await C(r,e,t,i,s);return"mfaPendingCredential"in n&&v(r,"multi-factor-auth-required",{_serverResponse:n}),n}function Tt(r,e,t,i){const s=`${e}${t}?${i}`;return r.config.emulator?Ne(r.config,s):`${r.config.apiScheme}://${s}`}function Vi(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xi{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(b(this.auth,"network-request-failed")),Ui.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ne(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=b(r,e,i);return s.customData._tokenResponse=t,s}function Ze(r){return r!==void 0&&r.enterprise!==void 0}class $i{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vi(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ji(r,e){return C(r,"GET","/v2/recaptchaConfig",S(r,e))}/**
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
 */async function Wi(r,e){return C(r,"POST","/v1/accounts:delete",e)}async function qi(r,e){return C(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function K(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Hi(r,e=!1){const t=U(r),i=await t.getIdToken(e),s=Me(i);u(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const n=typeof s.firebase=="object"?s.firebase:void 0,o=n?.sign_in_provider;return{claims:s,token:i,authTime:K(Te(s.auth_time)),issuedAtTime:K(Te(s.iat)),expirationTime:K(Te(s.exp)),signInProvider:o||null,signInSecondFactor:n?.sign_in_second_factor||null}}function Te(r){return Number(r)*1e3}function Me(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return oe("JWT malformed, contained fewer than 3 sections"),null;try{const s=ai(t);return s?JSON.parse(s):(oe("Failed to decode base64 JWT payload"),null)}catch(s){return oe("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Gi(r){const e=Me(r);return u(e,"internal-error"),u(typeof e.exp<"u","internal-error"),u(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function B(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Le&&zi(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function zi({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class Ki{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class St{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=K(this.lastLoginAt),this.creationTime=K(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ue(r){var e;const t=r.auth,i=await r.getIdToken(),s=await B(r,qi(t,{idToken:i}));u(s?.users.length,t,"internal-error");const n=s.users[0];r._notifyReloadListener(n);const o=!((e=n.providerUserInfo)===null||e===void 0)&&e.length?Yi(n.providerUserInfo):[],a=Ji(r.providerData,o),l=r.isAnonymous,c=!(r.email&&n.passwordHash)&&!a?.length,d=l?c:!1,h={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:a,metadata:new St(n.createdAt,n.lastLoginAt),isAnonymous:d};Object.assign(r,h)}async function Bi(r){const e=U(r);await ue(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ji(r,e){return[...r.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Yi(r){return r.map(e=>{var{providerId:t}=e,i=Re(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Xi(r,e){const t=await Et(r,{},async()=>{const i=Z({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:n}=r.config,o=Tt(r,s,"/v1/token",`key=${n}`),a=await r._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",wt.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Zi(r,e){return C(r,"POST","/v2/accounts:revokeToken",S(r,e))}/**
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
 */class J{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){u(e.idToken,"internal-error"),u(typeof e.idToken<"u","internal-error"),u(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return u(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:n}=await Xi(e,t);this.updateTokensAndExpiration(i,s,Number(n))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:n}=t,o=new J;return i&&(u(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(u(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),n&&(u(typeof n=="number","internal-error",{appName:e}),o.expirationTime=n),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new J,this.toJSON())}_performRefresh(){return w("not implemented")}}/**
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
 */function P(r,e){u(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class N{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,n=Re(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ki(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new St(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await B(this,this.stsTokenManager.getToken(this.auth,e));return u(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Hi(this,e)}reload(){return Bi(this)}_assign(e){this!==e&&(u(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new N(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){u(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ue(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await B(this,Wi(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,n,o,a,l,c,d;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,V=(n=t.phoneNumber)!==null&&n!==void 0?n:void 0,x=(o=t.photoURL)!==null&&o!==void 0?o:void 0,re=(a=t.tenantId)!==null&&a!==void 0?a:void 0,be=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,We=(c=t.createdAt)!==null&&c!==void 0?c:void 0,qe=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:ye,emailVerified:He,isAnonymous:Ge,providerData:Ie,stsTokenManager:ze}=t;u(ye&&ze,e,"internal-error");const Xt=J.fromJSON(this.name,ze);u(typeof ye=="string",e,"internal-error"),P(h,e.name),P(g,e.name),u(typeof He=="boolean",e,"internal-error"),u(typeof Ge=="boolean",e,"internal-error"),P(V,e.name),P(x,e.name),P(re,e.name),P(be,e.name),P(We,e.name),P(qe,e.name);const we=new N({uid:ye,auth:e,email:g,emailVerified:He,displayName:h,isAnonymous:Ge,photoURL:x,phoneNumber:V,tenantId:re,stsTokenManager:Xt,createdAt:We,lastLoginAt:qe});return Ie&&Array.isArray(Ie)&&(we.providerData=Ie.map(Zt=>Object.assign({},Zt))),be&&(we._redirectEventId=be),we}static async _fromIdTokenResponse(e,t,i=!1){const s=new J;s.updateFromServerResponse(t);const n=new N({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ue(n),n}}/**
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
 */const Qe=new Map;function E(r){T(r instanceof Function,"Expected a class definition");let e=Qe.get(r);return e?(T(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Qe.set(r,e),e)}/**
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
 */class Ct{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ct.type="NONE";const et=Ct;/**
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
 */function ae(r,e,t){return`firebase:${r}:${e}:${t}`}class ${constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:n}=this.auth;this.fullUserKey=ae(this.userKey,s.apiKey,n),this.fullPersistenceKey=ae("persistence",s.apiKey,n),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?N._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new $(E(et),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let n=s[0]||E(et);const o=ae(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const h=N._fromJSON(e,d);c!==n&&(a=h),n=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!n._shouldAllowMigration||!l.length?new $(n,e,i):(n=l[0],a&&await n._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==n)try{await c._remove(o)}catch{}})),new $(n,e,i))}}/**
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
 */function tt(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(At(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ot(e))return"Blackberry";if(Rt(e))return"Webos";if(De(e))return"Safari";if((e.includes("chrome/")||Pt(e))&&!e.includes("edge/"))return"Chrome";if(Lt(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function kt(r=m()){return/firefox\//i.test(r)}function De(r=m()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pt(r=m()){return/crios\//i.test(r)}function At(r=m()){return/iemobile/i.test(r)}function Lt(r=m()){return/android/i.test(r)}function Ot(r=m()){return/blackberry/i.test(r)}function Rt(r=m()){return/webos/i.test(r)}function me(r=m()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Qi(r=m()){var e;return me(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function er(){return li()&&document.documentMode===10}function Ft(r=m()){return me(r)||Lt(r)||Rt(r)||Ot(r)||/windows phone/i.test(r)||At(r)}function tr(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Nt(r,e=[]){let t;switch(r){case"Browser":t=tt(m());break;case"Worker":t=`${tt(m())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${X}/${i}`}/**
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
 */class ir{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=n=>new Promise((o,a)=>{try{const l=e(n);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
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
 */async function rr(r,e={}){return C(r,"GET","/v2/passwordPolicy",S(r,e))}/**
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
 */const sr=6;class nr{constructor(e){var t,i,s,n;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:sr,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(n=e.forceUpgradeOnSignin)!==null&&n!==void 0?n:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,n,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(n=l.containsUppercaseLetter)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,n){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=n))}}/**
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
 */class or{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new it(this),this.idTokenSubscription=new it(this),this.beforeStateQueue=new ir(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=E(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await $.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s?._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&l?.user&&(s=l.user,n=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return u(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ue(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Mi()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?U(e):null;return t&&u(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&u(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(E(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await rr(this),t=new nr(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ae("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Zi(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&E(e)||this._popupRedirectResolver;u(t,this,"argument-error"),this.redirectPersistenceManager=await $.create(this,[E(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const n=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(u(a,this,"internal-error"),a.then(()=>{o||n(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return u(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&Oi(`Error while retrieving App Check token: ${t.error}`),t?.token}}function k(r){return U(r)}class it{constructor(e){this.auth=e,this.observer=null,this.addObserver=ii(t=>this.observer=t)}get next(){return u(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ar(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}function Mt(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=s=>{const n=b("internal-error");n.customData=s,t(n)},i.type="text/javascript",i.charset="UTF-8",ar().appendChild(i)})}function lr(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const cr="https://www.google.com/recaptcha/enterprise.js?render=",dr="recaptcha-enterprise",ur="NO_RECAPTCHA";class hr{constructor(e){this.type=dr,this.auth=k(e)}async verify(e="verify",t=!1){async function i(n){if(!t){if(n.tenantId==null&&n._agentRecaptchaConfig!=null)return n._agentRecaptchaConfig.siteKey;if(n.tenantId!=null&&n._tenantRecaptchaConfigs[n.tenantId]!==void 0)return n._tenantRecaptchaConfigs[n.tenantId].siteKey}return new Promise(async(o,a)=>{ji(n,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new $i(l);return n.tenantId==null?n._agentRecaptchaConfig=c:n._tenantRecaptchaConfigs[n.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(n,o,a){const l=window.grecaptcha;Ze(l)?l.enterprise.ready(()=>{l.enterprise.execute(n,{action:e}).then(c=>{o(c)}).catch(()=>{o(ur)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((n,o)=>{i(this.auth).then(a=>{if(!t&&Ze(window.grecaptcha))s(a,n,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Mt(cr+a).then(()=>{s(a,n,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function rt(r,e,t,i=!1){const s=new hr(r);let n;try{n=await s.verify(t)}catch{n=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:n}):Object.assign(o,{captchaResponse:n}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function he(r,e,t,i){var s;if(!((s=r._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const n=await rt(r,e,t,t==="getOobCode");return i(r,n)}else return i(r,e).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await rt(r,e,t,t==="getOobCode");return i(r,o)}else return Promise.reject(n)})}/**
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
 */function fr(r,e){const t=mt(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),n=t.getOptions();if(ni(n,e??{}))return s;v(s,"already-initialized")}return t.initialize({options:e})}function pr(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(E);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function gr(r,e,t){const i=k(r);u(i._canInitEmulator,i,"emulator-config-failed"),u(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!t?.disableWarnings,n=Dt(e),{host:o,port:a}=mr(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${n}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:n.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||vr()}function Dt(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function mr(r){const e=Dt(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const n=s[1];return{host:n,port:st(i.substr(n.length+1))}}else{const[n,o]=i.split(":");return{host:n,port:st(o)}}}function st(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function vr(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Ue{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return w("not implemented")}_getIdTokenResponse(e){return w("not implemented")}_linkToIdToken(e,t){return w("not implemented")}_getReauthenticationResolver(e){return w("not implemented")}}async function _r(r,e){return C(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function br(r,e){return ee(r,"POST","/v1/accounts:signInWithPassword",S(r,e))}async function yr(r,e){return C(r,"POST","/v1/accounts:sendOobCode",S(r,e))}async function Ir(r,e){return yr(r,e)}/**
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
 */async function wr(r,e){return ee(r,"POST","/v1/accounts:signInWithEmailLink",S(r,e))}async function Er(r,e){return ee(r,"POST","/v1/accounts:signInWithEmailLink",S(r,e))}/**
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
 */class Y extends Ue{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Y(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Y(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return he(e,t,"signInWithPassword",br);case"emailLink":return wr(e,{email:this._email,oobCode:this._password});default:v(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return he(e,i,"signUpPassword",_r);case"emailLink":return Er(e,{idToken:t,email:this._email,oobCode:this._password});default:v(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function j(r,e){return ee(r,"POST","/v1/accounts:signInWithIdp",S(r,e))}/**
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
 */const Tr="http://localhost";class M extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new M(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):v("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,n=Re(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new M(i,s);return o.idToken=n.idToken||void 0,o.accessToken=n.accessToken||void 0,o.secret=n.secret,o.nonce=n.nonce,o.pendingToken=n.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return j(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,j(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,j(e,t)}buildRequest(){const e={requestUri:Tr,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Z(t)}return e}}/**
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
 */function Sr(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Cr(r){const e=G(z(r)).link,t=e?G(z(e)).deep_link_id:null,i=G(z(r)).deep_link_id;return(i?G(z(i)).link:null)||i||t||e||r}class Ve{constructor(e){var t,i,s,n,o,a;const l=G(z(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,d=(i=l.oobCode)!==null&&i!==void 0?i:null,h=Sr((s=l.mode)!==null&&s!==void 0?s:null);u(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(n=l.continueUrl)!==null&&n!==void 0?n:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Cr(e);try{return new Ve(t)}catch{return null}}}/**
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
 */class W{constructor(){this.providerId=W.PROVIDER_ID}static credential(e,t){return Y._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ve.parseLink(t);return u(i,"argument-error"),Y._fromEmailAndCode(e,i.code,i.tenantId)}}W.PROVIDER_ID="password";W.EMAIL_PASSWORD_SIGN_IN_METHOD="password";W.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xe{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class te extends xe{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class A extends te{constructor(){super("facebook.com")}static credential(e){return M._fromParams({providerId:A.PROVIDER_ID,signInMethod:A.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return A.credentialFromTaggedObject(e)}static credentialFromError(e){return A.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return A.credential(e.oauthAccessToken)}catch{return null}}}A.FACEBOOK_SIGN_IN_METHOD="facebook.com";A.PROVIDER_ID="facebook.com";/**
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
 */class L extends te{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return M._fromParams({providerId:L.PROVIDER_ID,signInMethod:L.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return L.credentialFromTaggedObject(e)}static credentialFromError(e){return L.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return L.credential(t,i)}catch{return null}}}L.GOOGLE_SIGN_IN_METHOD="google.com";L.PROVIDER_ID="google.com";/**
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
 */class O extends te{constructor(){super("github.com")}static credential(e){return M._fromParams({providerId:O.PROVIDER_ID,signInMethod:O.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return O.credentialFromTaggedObject(e)}static credentialFromError(e){return O.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return O.credential(e.oauthAccessToken)}catch{return null}}}O.GITHUB_SIGN_IN_METHOD="github.com";O.PROVIDER_ID="github.com";/**
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
 */class R extends te{constructor(){super("twitter.com")}static credential(e,t){return M._fromParams({providerId:R.PROVIDER_ID,signInMethod:R.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return R.credentialFromTaggedObject(e)}static credentialFromError(e){return R.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return R.credential(t,i)}catch{return null}}}R.TWITTER_SIGN_IN_METHOD="twitter.com";R.PROVIDER_ID="twitter.com";/**
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
 */async function kr(r,e){return ee(r,"POST","/v1/accounts:signUp",S(r,e))}/**
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
 */class D{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const n=await N._fromIdTokenResponse(e,i,s),o=nt(i);return new D({user:n,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=nt(i);return new D({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function nt(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class fe extends Le{constructor(e,t,i,s){var n;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,fe.prototype),this.customData={appName:e.name,tenantId:(n=e.tenantId)!==null&&n!==void 0?n:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new fe(e,t,i,s)}}function Ut(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(n=>{throw n.code==="auth/multi-factor-auth-required"?fe._fromErrorAndOperation(r,n,e,i):n})}async function Pr(r,e,t=!1){const i=await B(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return D._forOperation(r,"link",i)}/**
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
 */async function Ar(r,e,t=!1){const{auth:i}=r,s="reauthenticate";try{const n=await B(r,Ut(i,s,e,r),t);u(n.idToken,i,"internal-error");const o=Me(n.idToken);u(o,i,"internal-error");const{sub:a}=o;return u(r.uid===a,i,"user-mismatch"),D._forOperation(r,s,n)}catch(n){throw n?.code==="auth/user-not-found"&&v(i,"user-mismatch"),n}}/**
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
 */async function Vt(r,e,t=!1){const i="signIn",s=await Ut(r,i,e),n=await D._fromIdTokenResponse(r,i,s);return t||await r._updateCurrentUser(n.user),n}async function Lr(r,e){return Vt(k(r),e)}/**
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
 */function Or(r,e,t){var i;u(((i=t.url)===null||i===void 0?void 0:i.length)>0,r,"invalid-continue-uri"),u(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(u(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(u(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function xt(r){const e=k(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Bs(r,e,t){const i=k(r),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Or(i,s,t),await he(i,s,"getOobCode",Ir)}async function Js(r,e,t){const i=k(r),o=await he(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kr).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&xt(r),l}),a=await D._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Ys(r,e,t){return Lr(U(r),W.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&xt(r),i})}function Rr(r,e,t,i){return U(r).onIdTokenChanged(e,t,i)}function Fr(r,e,t){return U(r).beforeAuthStateChanged(e,t)}const pe="__sak";/**
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
 */class $t{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pe,"1"),this.storage.removeItem(pe),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Nr(){const r=m();return De(r)||me(r)}const Mr=1e3,Dr=10;class jt extends $t{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nr()&&tr(),this.fallbackToPolling=Ft(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},n=this.storage.getItem(i);er()&&n!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Dr):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Mr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jt.type="LOCAL";const Ur=jt;/**
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
 */class Wt extends $t{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Wt.type="SESSION";const qt=Wt;/**
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
 */function Vr(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ve{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new ve(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:n}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,n)),l=await Vr(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ve.receivers=[];/**
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
 */function $e(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class xr{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let n,o;return new Promise((a,l)=>{const c=$e("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),n=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(g.data.response);break;default:clearTimeout(d),clearTimeout(n),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function y(){return window}function $r(r){y().location.href=r}/**
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
 */function Ht(){return typeof y().WorkerGlobalScope<"u"&&typeof y().importScripts=="function"}async function jr(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wr(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function qr(){return Ht()?self:null}/**
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
 */const Gt="firebaseLocalStorageDb",Hr=1,ge="firebaseLocalStorage",zt="fbase_key";class ie{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function _e(r,e){return r.transaction([ge],e?"readwrite":"readonly").objectStore(ge)}function Gr(){const r=indexedDB.deleteDatabase(Gt);return new ie(r).toPromise()}function Pe(){const r=indexedDB.open(Gt,Hr);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(ge,{keyPath:zt})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(ge)?e(i):(i.close(),await Gr(),e(await Pe()))})})}async function ot(r,e,t){const i=_e(r,!0).put({[zt]:e,value:t});return new ie(i).toPromise()}async function zr(r,e){const t=_e(r,!1).get(e),i=await new ie(t).toPromise();return i===void 0?null:i.value}function at(r,e){const t=_e(r,!0).delete(e);return new ie(t).toPromise()}const Kr=800,Br=3;class Kt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Pe(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Br)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ht()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ve._getInstance(qr()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jr(),!this.activeServiceWorker)return;this.sender=new xr(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wr()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Pe();return await ot(e,pe,"1"),await at(e,pe),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ot(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>zr(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>at(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const n=_e(s,!1).getAll();return new ie(n).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:n}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(n)&&(this.notifyListeners(s,n),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kr)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kt.type="LOCAL";const Jr=Kt;new Q(3e4,6e4);/**
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
 */function Bt(r,e){return e?E(e):(u(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class je extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return j(e,this._buildIdpRequest())}_linkToIdToken(e,t){return j(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return j(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yr(r){return Vt(r.auth,new je(r),r.bypassAuthState)}function Xr(r){const{auth:e,user:t}=r;return u(t,e,"internal-error"),Ar(t,new je(r),r.bypassAuthState)}async function Zr(r){const{auth:e,user:t}=r;return u(t,e,"internal-error"),Pr(t,new je(r),r.bypassAuthState)}/**
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
 */class Jt{constructor(e,t,i,s,n=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=n,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:n,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:n||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yr;case"linkViaPopup":case"linkViaRedirect":return Zr;case"reauthViaPopup":case"reauthViaRedirect":return Xr;default:v(this.auth,"internal-error")}}resolve(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){T(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Qr=new Q(2e3,1e4);async function Xs(r,e,t){const i=k(r);Ri(r,e,xe);const s=Bt(i,t);return new F(i,"signInViaPopup",e,s).executeNotNull()}class F extends Jt{constructor(e,t,i,s,n){super(e,t,s,n),this.provider=i,this.authWindow=null,this.pollId=null,F.currentPopupAction&&F.currentPopupAction.cancel(),F.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return u(e,this.auth,"internal-error"),e}async onExecution(){T(this.filter.length===1,"Popup operations only handle one event");const e=$e();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(b(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,F.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Qr.get())};e()}}F.currentPopupAction=null;/**
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
 */const es="pendingRedirect",le=new Map;class ts extends Jt{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=le.get(this.auth._key());if(!e){try{const i=await is(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}le.set(this.auth._key(),e)}return this.bypassAuthState||le.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function is(r,e){const t=ns(e),i=ss(r);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function rs(r,e){le.set(r._key(),e)}function ss(r){return E(r._redirectPersistence)}function ns(r){return ae(es,r.config.apiKey,r.name)}async function os(r,e,t=!1){const i=k(r),s=Bt(i,e),o=await new ts(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const as=10*60*1e3;class ls{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cs(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Yt(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(b(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=as&&this.cachedEventUids.clear(),this.cachedEventUids.has(lt(e))}saveEventToCache(e){this.cachedEventUids.add(lt(e)),this.lastProcessedEventTime=Date.now()}}function lt(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Yt({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function cs(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yt(r);default:return!1}}/**
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
 */async function ds(r,e={}){return C(r,"GET","/v1/projects",e)}/**
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
 */const us=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hs=/^https?/;async function fs(r){if(r.config.emulator)return;const{authorizedDomains:e}=await ds(r);for(const t of e)try{if(ps(t))return}catch{}v(r,"unauthorized-domain")}function ps(r){const e=ke(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!hs.test(t))return!1;if(us.test(r))return i===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const gs=new Q(3e4,6e4);function ct(){const r=y().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function ms(r){return new Promise((e,t)=>{var i,s,n;function o(){ct(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ct(),t(b(r,"network-request-failed"))},timeout:gs.get()})}if(!((s=(i=y().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((n=y().gapi)===null||n===void 0)&&n.load)o();else{const a=lr("iframefcb");return y()[a]=()=>{gapi.load?o():t(b(r,"network-request-failed"))},Mt(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw ce=null,e})}let ce=null;function vs(r){return ce=ce||ms(r),ce}/**
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
 */const _s=new Q(5e3,15e3),bs="__/auth/iframe",ys="emulator/auth/iframe",Is={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ws=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Es(r){const e=r.config;u(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Ne(e,ys):`https://${r.config.authDomain}/${bs}`,i={apiKey:e.apiKey,appName:r.name,v:X},s=ws.get(r.config.apiHost);s&&(i.eid=s);const n=r._getFrameworks();return n.length&&(i.fw=n.join(",")),`${t}?${Z(i).slice(1)}`}async function Ts(r){const e=await vs(r),t=y().gapi;return u(t,r,"internal-error"),e.open({where:document.body,url:Es(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Is,dontclear:!0},i=>new Promise(async(s,n)=>{await i.restyle({setHideOnLeave:!1});const o=b(r,"network-request-failed"),a=y().setTimeout(()=>{n(o)},_s.get());function l(){y().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{n(o)})}))}/**
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
 */const Ss={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Cs=500,ks=600,Ps="_blank",As="http://localhost";class dt{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ls(r,e,t,i=Cs,s=ks){const n=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ss),{width:i.toString(),height:s.toString(),top:n,left:o}),c=m().toLowerCase();t&&(a=Pt(c)?Ps:t),kt(c)&&(e=e||As,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[V,x])=>`${g}${V}=${x},`,"");if(Qi(c)&&a!=="_self")return Os(e||"",a),new dt(null);const h=window.open(e||"",a,d);u(h,r,"popup-blocked");try{h.focus()}catch{}return new dt(h)}function Os(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Rs="__/auth/handler",Fs="emulator/auth/handler",Ns=encodeURIComponent("fac");async function ut(r,e,t,i,s,n){u(r.config.authDomain,r,"auth-domain-config-required"),u(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:X,eventId:s};if(e instanceof xe){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",ci(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(n||{}))o[d]=h}if(e instanceof te){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}r.tenantId&&(o.tid=r.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await r._getAppCheckToken(),c=l?`#${Ns}=${encodeURIComponent(l)}`:"";return`${Ms(r)}?${Z(a).slice(1)}${c}`}function Ms({config:r}){return r.emulator?Ne(r,Fs):`https://${r.authDomain}/${Rs}`}/**
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
 */const Se="webStorageSupport";class Ds{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qt,this._completeRedirectFn=os,this._overrideRedirectResult=rs}async _openPopup(e,t,i,s){var n;T((n=this.eventManagers[e._key()])===null||n===void 0?void 0:n.manager,"_initialize() not called before _openPopup()");const o=await ut(e,t,i,ke(),s);return Ls(e,o,$e())}async _openRedirect(e,t,i,s){await this._originValidation(e);const n=await ut(e,t,i,ke(),s);return $r(n),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:n}=this.eventManagers[t];return s?Promise.resolve(s):(T(n,"If manager is not set, promise should be"),n)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Ts(e),i=new ls(e);return t.register("authEvent",s=>(u(s?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Se,{type:Se},s=>{var n;const o=(n=s?.[0])===null||n===void 0?void 0:n[Se];o!==void 0&&t(!!o),v(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ft()||De()||me()}}const Us=Ds;var ht="@firebase/auth",ft="1.5.1";/**
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
 */class Vs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){u(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xs(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function $s(r){Ke(new Be("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),n=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;u(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nt(r)},c=new or(i,s,n,l);return pr(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Ke(new Be("auth-internal",e=>{const t=k(e.getProvider("auth").getImmediate());return(i=>new Vs(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Je(ht,ft,xs(r)),Je(ht,ft,"esm2017")}/**
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
 */const js=5*60,Ws=gt("authIdTokenMaxAge")||js;let pt=null;const qs=r=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Ws)return;const s=t?.token;pt!==s&&(pt=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zs(r=si()){const e=mt(r,"auth");if(e.isInitialized())return e.getImmediate();const t=fr(r,{popupRedirectResolver:Us,persistence:[Jr,Ur,qt]}),i=gt("authTokenSyncURL");if(i){const n=qs(i);Fr(t,n,()=>n(t.currentUser)),Rr(t,o=>n(o))}const s=ri("auth");return s&&gr(t,`http://${s}`),t}$s("Browser");export{L as G,Xs as a,Bs as b,Ks as c,Js as d,Gs as e,Zs as g,zs as j,Ys as s};
