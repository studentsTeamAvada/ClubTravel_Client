import{c as x,_ as Ee,d as ve,e as ke,f as Ue,C as Le,r as W,h as Oe,S as Ie,F as Se,a as Pe,g as I,o as re,H as Ne}from"./header-wf8HbVZh.js";import{g as Ce,b as X,c as K,d as xe,u as De}from"./index.esm2017-CVpEnNBY.js";import{a as Be}from"./justValidate-ywqcVI2V.js";/**
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
 */const ie="firebasestorage.googleapis.com",ae="storageBucket",Me=2*60*1e3,Fe=10*60*1e3;/**
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
 */class h extends Se{constructor(e,n,s=0){super(M(e),`Firebase Storage: ${n} (${M(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return M(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function M(t){return"storage/"+t}function q(){const t="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,t)}function $e(t){return new h(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function qe(t){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function He(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,t)}function je(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ze(t){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ve(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function We(){return new h(d.CANCELED,"User canceled the upload/download.")}function Xe(t){return new h(d.INVALID_URL,"Invalid URL '"+t+"'.")}function Ke(t){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ge(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ae+"' property when initializing the app?")}function Ye(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ze(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Je(t){return new h(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $(t){return new h(d.INVALID_ARGUMENT,t)}function ce(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function Qe(t){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(t,e){return new h(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function O(t){throw new h(d.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class R{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=R.makeFromUrl(e,n)}catch{return new R(e,"")}if(s.path==="")return s;throw Ke(e)}static makeFromUrl(e,n){let s=null;const o="([A-Za-z0-9.\\-_]+)";function r(u){u.path.charAt(u.path.length-1)==="/"&&(u.path_=u.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+o+i,"i"),c={bucket:1,path:3};function l(u){u.path_=decodeURIComponent(u.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${g}/${f}/b/${o}/o${p}`,"i"),_={bucket:1,path:3},E=n===ie?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${E}/${o}/${b}`,"i"),y=[{regex:a,indices:c,postModify:r},{regex:m,indices:_,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let u=0;u<y.length;u++){const P=y[u],D=P.regex.exec(e);if(D){const Ae=D[P.indices.bucket];let B=D[P.indices.path];B||(B=""),s=new R(Ae,B),P.postModify(s);break}}if(s==null)throw Xe(e);return s}}class et{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function tt(t,e,n){let s=1,o=null,r=null,i=!1,a=0;function c(){return a===2}let l=!1;function f(...b){l||(l=!0,e.apply(null,b))}function g(b){o=setTimeout(()=>{o=null,t(m,c())},b)}function p(){r&&clearTimeout(r)}function m(b,...v){if(l){p();return}if(b){p(),f.call(null,b,...v);return}if(c()||i){p(),f.call(null,b,...v);return}s<64&&(s*=2);let y;a===1?(a=2,y=0):y=(s+Math.random())*1e3,g(y)}let _=!1;function E(b){_||(_=!0,p(),!l&&(o!==null?(b||(a=2),clearTimeout(o),g(0)):b||(a=1)))}return g(0),r=setTimeout(()=>{i=!0,E(!0)},n),E}function nt(t){t(!1)}/**
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
 */function st(t){return t!==void 0}function ot(t){return typeof t=="object"&&!Array.isArray(t)}function H(t){return typeof t=="string"||t instanceof String}function G(t){return j()&&t instanceof Blob}function j(){return typeof Blob<"u"}function Y(t,e,n,s){if(s<e)throw $(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw $(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function z(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function le(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const o=e(s)+"="+e(t[s]);n=n+o+"&"}return n=n.slice(0,-1),n}/**
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
 */var U;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(U||(U={}));/**
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
 */function rt(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||o||r}/**
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
 */class it{constructor(e,n,s,o,r,i,a,c,l,f,g,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=o,this.successCodes_=r,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=f,this.connectionFactory_=g,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(s,o)=>{if(o){s(!1,new N(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(i),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(i),this.pendingConnection_=null;const a=r.getErrorCode()===U.NO_ERROR,c=r.getStatus();if(!a||rt(c,this.additionalRetryCodes_)&&this.retry){const f=r.getErrorCode()===U.ABORT;s(!1,new N(!1,null,f));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new N(l,r))})},n=(s,o)=>{const r=this.resolve_,i=this.reject_,a=o.connection;if(o.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());st(c)?r(c):r()}catch(c){i(c)}else if(a!==null){const c=q();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(o.canceled){const c=this.appDelete_?ce():We();i(c)}else{const c=Ve();i(c)}};this.canceled_?n(!1,new N(!1,null,!0)):this.backoffId_=tt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&nt(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class N{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function at(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ct(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ut(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function dt(t,e,n,s,o,r,i=!0){const a=le(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return lt(l,e),at(l,n),ct(l,r),ut(l,s),new it(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,i)}/**
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
 */function ht(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function ft(...t){const e=ht();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(j())return new Blob(t);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function pt(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _t(t){if(typeof atob>"u")throw Je("base-64");return atob(t)}/**
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
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,n){this.data=e,this.contentType=n||null}}function gt(t,e){switch(t){case A.RAW:return new F(ue(e));case A.BASE64:case A.BASE64URL:return new F(de(t,e));case A.DATA_URL:return new F(bt(e),wt(e))}throw q()}function ue(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,i=t.charCodeAt(++n);s=65536|(r&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function mt(t){let e;try{e=decodeURIComponent(t)}catch{throw S(A.DATA_URL,"Malformed data URL.")}return ue(e)}function de(t,e){switch(t){case A.BASE64:{const o=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(o||r)throw S(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const o=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(o||r)throw S(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_t(e)}catch(o){throw o.message.includes("polyfill")?o:S(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}class he{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw S(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=yt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function bt(t){const e=new he(t);return e.base64?de(A.BASE64,e.rest):mt(e.rest)}function wt(t){return new he(t).contentType}function yt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class k{constructor(e,n){let s=0,o="";G(e)?(this.data_=e,s=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(G(this.data_)){const s=this.data_,o=pt(s,e,n);return o===null?null:new k(o)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new k(s,!0)}}static getBlob(...e){if(j()){const n=e.map(s=>s instanceof k?s.data_:s);return new k(ft.apply(null,n))}else{const n=e.map(i=>H(i)?gt(A.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const o=new Uint8Array(s);let r=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)o[r++]=i[a]}),new k(o,!0)}}uploadData(){return this.data_}}/**
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
 */function fe(t){let e;try{e=JSON.parse(t)}catch{return null}return ot(e)?e:null}/**
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
 */function Rt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Tt(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function pe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function At(t,e){return e}class w{constructor(e,n,s,o){this.server=e,this.local=n||e,this.writable=!!s,this.xform=o||At}}let C=null;function Et(t){return!H(t)||t.length<2?t:pe(t)}function _e(){if(C)return C;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(r,i){return Et(i)}const n=new w("name");n.xform=e,t.push(n);function s(r,i){return i!==void 0?Number(i):i}const o=new w("size");return o.xform=s,t.push(o),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),C=t,C}function vt(t,e){function n(){const s=t.bucket,o=t.fullPath,r=new R(s,o);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function kt(t,e,n){const s={};s.type="file";const o=n.length;for(let r=0;r<o;r++){const i=n[r];s[i.local]=i.xform(s,e[i.server])}return vt(s,t),s}function ge(t,e,n){const s=fe(e);return s===null?null:kt(t,s,n)}function Ut(t,e,n,s){const o=fe(e);if(o===null||!H(o.downloadTokens))return null;const r=o.downloadTokens;if(r.length===0)return null;const i=encodeURIComponent;return r.split(",").map(l=>{const f=t.bucket,g=t.fullPath,p="/b/"+i(f)+"/o/"+i(g),m=z(p,n,s),_=le({alt:"media",token:l});return m+_})[0]}function Lt(t,e){const n={},s=e.length;for(let o=0;o<s;o++){const r=e[o];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class me{constructor(e,n,s,o){this.url=e,this.method=n,this.handler=s,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function be(t){if(!t)throw q()}function Ot(t,e){function n(s,o){const r=ge(t,o,e);return be(r!==null),r}return n}function It(t,e){function n(s,o){const r=ge(t,o,e);return be(r!==null),Ut(r,o,t.host,t._protocol)}return n}function we(t){function e(n,s){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=je():o=He():n.getStatus()===402?o=qe(t.bucket):n.getStatus()===403?o=ze(t.path):o=s,o.status=n.getStatus(),o.serverResponse=s.serverResponse,o}return e}function St(t){const e=we(t);function n(s,o){let r=e(s,o);return s.getStatus()===404&&(r=$e(t.path)),r.serverResponse=o.serverResponse,r}return n}function Pt(t,e,n){const s=e.fullServerUrl(),o=z(s,t.host,t._protocol),r="GET",i=t.maxOperationRetryTime,a=new me(o,r,It(t,n),i);return a.errorHandler=St(e),a}function Nt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ct(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Nt(null,e)),s}function xt(t,e,n,s,o){const r=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let u=0;u<2;u++)y=y+Math.random().toString().slice(2);return y}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const l=Ct(e,s,o),f=Lt(l,n),g="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",m=k.getBlob(g,s,p);if(m===null)throw Ye();const _={name:l.fullPath},E=z(r,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,T=new me(E,b,Ot(t,n),v);return T.urlParams=_,T.headers=i,T.body=m.uploadData(),T.errorHandler=we(e),T}class Dt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,o){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),o!==void 0)for(const r in o)o.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,o[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Bt extends Dt{initXhr(){this.xhr_.responseType="text"}}function ye(){return new Bt}/**
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
 */class L{constructor(e,n){this._service=e,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=Rt(this._location.path);if(e===null)return null;const n=new R(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Qe(e)}}function Mt(t,e,n){t._throwIfRoot("uploadBytes");const s=xt(t.storage,t._location,_e(),new k(e,!0),n);return t.storage.makeRequestWithTokens(s,ye).then(o=>({metadata:o,ref:t}))}function Ft(t){t._throwIfRoot("getDownloadURL");const e=Pt(t.storage,t._location,_e());return t.storage.makeRequestWithTokens(e,ye).then(n=>{if(n===null)throw Ze();return n})}function $t(t,e){const n=Tt(t._location.path,e),s=new R(t._location.bucket,n);return new L(t.storage,s)}/**
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
 */function qt(t){return/^[A-Za-z]+:\/\//.test(t)}function Ht(t,e){return new L(t,e)}function Re(t,e){if(t instanceof V){const n=t;if(n._bucket==null)throw Ge();const s=new L(n,n._bucket);return e!=null?Re(s,e):s}else return e!==void 0?$t(t,e):t}function jt(t,e){if(e&&qt(e)){if(t instanceof V)return Ht(t,e);throw $("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(t,e)}function Z(t,e){const n=e?.[ae];return n==null?null:R.makeFromBucketSpec(n,t)}function zt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:o}=s;o&&(t._overrideAuthToken=typeof o=="string"?o:Oe(o,t.app.options.projectId))}class V{constructor(e,n,s,o,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=o,this._firebaseVersion=r,this._bucket=null,this._host=ie,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Me,this._maxUploadRetryTime=Fe,this._requests=new Set,o!=null?this._bucket=R.makeFromBucketSpec(o,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Z(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,o,r=!0){if(this._deleted)return new et(ce());{const i=dt(e,this._appId,s,o,n,this._firebaseVersion,r);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,o).getPromise()}}const J="@firebase/storage",Q="0.12.0";/**
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
 */const Te="storage";function Vt(t,e,n){return t=x(t),Mt(t,e,n)}function Wt(t){return t=x(t),Ft(t)}function Xt(t,e){return t=x(t),jt(t,e)}function Kt(t=ke(),e){t=x(t);const s=Ee(t,Te).getImmediate({identifier:e}),o=ve("storage");return o&&Gt(s,...o),s}function Gt(t,e,n,s={}){zt(t,e,n,s)}function Yt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new V(n,s,o,e,Ie)}function Zt(){Ue(new Le(Te,Yt,"PUBLIC").setMultipleInstances(!0)),W(J,Q,""),W(J,Q,"esm2017")}Zt();const Jt=Kt();async function Qt(t){try{if(!["image/jpeg","image/webp","image/png"].includes(t.type))throw new Error("Invalid image format. Only JPEG, WEBP, and PNG are allowed.");const n=Xt(Jt,"images/"+t.name),s=await Vt(n,t);return console.log(s),await Wt(n)}catch(e){throw console.error("Failed to upload image to Firebase Storage:",e),e}}class en{currentPage;usersLength;constructor(e){this.currentPage=1,this.usersLength=e,this.init()}init(){this.pagination()}pagination(){const e=this,n=document.getElementById("account-button-prev"),s=document.getElementById("account-button-next"),o=document.getElementById("account-button-prev-mob"),r=document.getElementById("account-button-next-mob"),i=document.getElementById("current-page"),a=document.getElementById("all-pages"),c=document.getElementById("current-page-mob"),l=document.getElementById("all-pages-mob"),f=Math.ceil(this.usersLength/9);a&&(a.textContent=String(f)),l&&(l.textContent=String(f)),n?.addEventListener("click",()=>{g()}),o?.addEventListener("click",()=>{g()}),s?.addEventListener("click",()=>{p()}),r?.addEventListener("click",()=>{p()});function g(){e.currentPage>1&&(e.currentPage--,_(),m())}function p(){e.currentPage<f&&(e.currentPage++,_(),m())}function m(){const E=e.currentPage,b=document.querySelectorAll(".order"),v=document.querySelectorAll(".account-mobile__table-wrapper"),T=e.currentPage*9-1,y=T-8;v.forEach(u=>{+u.id>=y&&+u.id<=T?u.classList.add("account-mobile__table-wrapper_active"):u.classList.remove("account-mobile__table-wrapper_active")}),b.forEach(u=>{+u.id>=y&&+u.id<=T?u.classList.add("order_active"):u.classList.remove("order_active")}),E===1?(n?.classList.remove("account__table-bottom-button_active"),o?.classList.remove("account__table-bottom-button_active")):(n?.classList.add("account__table-bottom-button_active"),o?.classList.add("account__table-bottom-button_active")),E===f?(s?.classList.remove("account__table-bottom-button_active"),r?.classList.remove("account__table-bottom-button_active")):(s?.classList.add("account__table-bottom-button_active"),r?.classList.add("account__table-bottom-button_active"))}function _(){i&&(i.innerHTML=String(e.currentPage)),c&&(c.innerHTML=String(e.currentPage))}m()}}const ee=document.querySelector(".account__order"),te=document.querySelector(".account__table-bottom-left"),ne=document.querySelector(".account__table-bottom-left-mobile"),se=document.querySelector(".account-mobile__table"),oe=document.querySelector(".account__left");class tn{app;db;usersArray;currentUser;constructor(){this.app=Pe,this.db=Ce(this.app),this.usersArray=[],this.currentUser=null,this.initAuth(),this.renderAccountLeft()}initAuth(){const e=I();re(e,n=>{this.currentUser=n,n?this.loadCards():(this.usersArray=[],this.renderUsers())})}exitAccount(){I().signOut().then(()=>{console.log("Пользователь вышел из аккаунта")}).catch(n=>{console.error("Ошибка при выходе из аккаунта:",n)})}async renderAccountLeft(){const e=await X(K(this.db,"users"));if(!this.currentUser)return;const n=this.currentUser.email;e.forEach(o=>{const r=o.data();if(r.email===n){const{name:i,photo:a}=r;let c=`
            <div class="account__left-photo">
            
            <img src="${a}" alt="bg" />
            
          </div>
          <p class="account__left-name">${i||"Пользователь"}</p>
          <button class="account__left-order active">
            <svg><use xlink:href="#order"></use></svg>
            <p>Мои заказы</p>
          </button>
          <button class="account__left-history-order">
            <svg><use xlink:href="#history-order"></use></svg>
            <p>История платежей</p>
          </button>
          <button class="account__left-settings">
            <svg><use xlink:href="#account-settings"></use></svg>
            <p>Настройки</p>
          </button>
          <a href="#" class="account__left-exit">
            <svg><use xlink:href="#exit"></use></svg>
            <p>Выход</p>
          </a>
        `;oe&&oe.insertAdjacentHTML("beforeend",c)}}),this.settings(),document.querySelector(".account__left-exit")?.addEventListener("click",o=>{o.preventDefault(),this.exitAccount()})}settings(){const e=document.querySelector(".account__left-settings"),n=document.querySelector(".account__left-order"),s=document.querySelector(".account__right"),o=document.querySelector(".account__settings"),r=document.querySelector(".account__left-wrapper"),i=a=>{a==="settings"?(e?.classList.add("active"),n?.classList.remove("active"),s?.classList.add("active"),o?.classList.remove("active")):a==="orders"&&(n?.classList.add("active"),e?.classList.remove("active"),s?.classList.remove("active"),o?.classList.add("active"))};r?.addEventListener("click",a=>{const c=a.target;if(c){const l=c.textContent;l&&l.includes("Настройки")?(i("settings"),localStorage.setItem("selectedTab","settings"),console.log(localStorage)):l&&l.includes("Мои заказы")&&(i("orders"),localStorage.setItem("selectedTab","orders"),console.log(localStorage))}}),document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("selectedTab");console.log(localStorage),console.log("da"),a&&i(a)})}isChangeInput(){const e=document.querySelector(".account__settings-input input"),n=document.querySelector(".account__settings-button");e.value===""&&(n.disabled=!0),e?.addEventListener("input",()=>{e.value===""||e.value.length<3||e.value.length>20?n.disabled=!0:n.disabled=!1})}async updateUserProfile(e,n){try{if(!this.currentUser)throw new Error("No user is currently signed in.");const s=xe(this.db,"users",this.currentUser.uid);await De(s,{name:e,photo:n}),console.log("User profile updated successfully!"),window.location.href="account.html"}catch(s){console.error("Failed to update user profile:",s)}}async getFormData(){const e=document.querySelector("#settingsForm");e?.addEventListener("submit",async n=>{n.preventDefault();const s=new FormData(e),o=s.get("name"),r=s.get("photo");let i;if(r&&r.size>0)try{i=await Qt(r)}catch(a){console.error("Failed to upload image to Firebase Storage:",a)}else i=document.querySelector(".account__left-photo img").src;await this.updateUserProfile(o,i)})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await X(K(this.db,"users"))).forEach(s=>{s.data().orders.forEach(r=>{r.email===e&&this.usersArray.push(r)})}),this.renderUsers(),new en(this.usersArray.length)}renderUsers(){this.usersArray.forEach((o,r)=>{const i=o,{date:a,email:c,idOrder:l,payStatus:f,price:g}=i;let p=`
        <td>${l}</td>
        <td>${g}</td>
        `;c.length<23?p+=`
                <td>${c}</td>
            `:p+=`
            <td>${c.slice(0,23)+"..."}</td>
        `,p+=`
        <td>
          ${f==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
        </td>
        <td>${a}</td>
        `;const m=`<tr class="order" id=${r} >${p}</tr>`;ee&&ee.insertAdjacentHTML("beforeend",m);let _=`
          <div id=${r} class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${l}</p>
              <p>${g}</p>
              `;c.length<23?_+=`
                    <p>${c}</p>
                  `:_+=`
                  <p>${c.slice(0,23)+"..."}</p>
              `,_+=`
              ${f==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
              <p>${a}</p>
            </div>
          </div>
        `,se&&se.insertAdjacentHTML("beforeend",_)});let n=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;te&&te.insertAdjacentHTML("beforeend",n);let s=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;ne&&ne.insertAdjacentHTML("beforeend",s)}}class nn{constructor(){this.initializeButton(),this.watchAuthState()}async checkAuthorizationAvatar(){const e=await I().currentUser;e?(console.log("Пользователь авторизован:",e.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}async checkAuthorizationUser(){const e=await I().currentUser;e?(console.log("Пользователь авторизован:",e.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}watchAuthState(){re(I(),e=>{e?console.log("Пользователь авторизован:",e.uid):(console.log("Пользователь не авторизован"),window.location.href.includes("authorization.html")||(window.location.href="authorization.html"))})}initializeButton(){const e=document.querySelector(".top-list__link-avatar"),n=document.querySelector(".top-list__link-user");e?e.addEventListener("click",s=>{s.preventDefault(),this.checkAuthorizationAvatar()}):console.error("Кнопка не найдена"),n?n.addEventListener("click",s=>{s.preventDefault(),this.checkAuthorizationUser()}):console.error("Кнопка не найдена")}}document.addEventListener("DOMContentLoaded",async function(){new nn;const t=new tn;t.isChangeInput(),await t.loadCards(),Be(),document.querySelector(".account__settings-button")?.addEventListener("click",()=>{t.getFormData()}),new Ne});
