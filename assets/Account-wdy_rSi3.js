import{c as C,_ as Ee,d as ve,e as ke,f as Ue,C as Le,r as W,h as Oe,S as Ie,F as Pe,i as Se,a as Ne,g as I,o as oe,H as xe}from"./header-Z2glgHCi.js";import{g as Ce,a as X,c as K,d as De,u as Be}from"./index.esm2017-WtQYLMdA.js";import{a as Me}from"./justValidate-ywqcVI2V.js";/**
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
 */const ie="firebasestorage.googleapis.com",ae="storageBucket",Fe=2*60*1e3,$e=10*60*1e3;/**
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
 */class h extends Pe{constructor(e,n,s=0){super(M(e),`Firebase Storage: ${n} (${M(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return M(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function M(t){return"storage/"+t}function q(){const t="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,t)}function qe(t){return new h(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function He(t){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function je(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,t)}function ze(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ve(t){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function We(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xe(){return new h(d.CANCELED,"User canceled the upload/download.")}function Ke(t){return new h(d.INVALID_URL,"Invalid URL '"+t+"'.")}function Ge(t){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ye(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ae+"' property when initializing the app?")}function Ze(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Je(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Qe(t){return new h(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $(t){return new h(d.INVALID_ARGUMENT,t)}function ce(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function et(t){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function P(t,e){return new h(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function O(t){throw new h(d.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class R{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=R.makeFromUrl(e,n)}catch{return new R(e,"")}if(s.path==="")return s;throw Ge(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(l){l.path.charAt(l.path.length-1)==="/"&&(l.path_=l.path_.slice(0,-1))}const i="(/(.*))?$",c=new RegExp("^gs://"+r+i,"i"),a={bucket:1,path:3};function u(l){l.path_=decodeURIComponent(l.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${g}/${f}/b/${r}/o${p}`,"i"),_={bucket:1,path:3},E=n===ie?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",v=new RegExp(`^https?://${E}/${r}/${b}`,"i"),y=[{regex:c,indices:a,postModify:o},{regex:m,indices:_,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let l=0;l<y.length;l++){const S=y[l],D=S.regex.exec(e);if(D){const Ae=D[S.indices.bucket];let B=D[S.indices.path];B||(B=""),s=new R(Ae,B),S.postModify(s);break}}if(s==null)throw Ke(e);return s}}class tt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nt(t,e,n){let s=1,r=null,o=null,i=!1,c=0;function a(){return c===2}let u=!1;function f(...b){u||(u=!0,e.apply(null,b))}function g(b){r=setTimeout(()=>{r=null,t(m,a())},b)}function p(){o&&clearTimeout(o)}function m(b,...v){if(u){p();return}if(b){p(),f.call(null,b,...v);return}if(a()||i){p(),f.call(null,b,...v);return}s<64&&(s*=2);let y;c===1?(c=2,y=0):y=(s+Math.random())*1e3,g(y)}let _=!1;function E(b){_||(_=!0,p(),!u&&(r!==null?(b||(c=2),clearTimeout(r),g(0)):b||(c=1)))}return g(0),o=setTimeout(()=>{i=!0,E(!0)},n),E}function st(t){t(!1)}/**
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
 */function rt(t){return t!==void 0}function ot(t){return typeof t=="object"&&!Array.isArray(t)}function H(t){return typeof t=="string"||t instanceof String}function G(t){return j()&&t instanceof Blob}function j(){return typeof Blob<"u"&&!Se()}function Y(t,e,n,s){if(s<e)throw $(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw $(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function z(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ue(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */function it(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,o=e.indexOf(t)!==-1;return n||r||o}/**
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
 */class at{constructor(e,n,s,r,o,i,c,a,u,f,g,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=c,this.errorCallback_=a,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=g,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new N(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=c=>{const a=c.loaded,u=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(a,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const c=o.getErrorCode()===U.NO_ERROR,a=o.getStatus();if(!c||it(a,this.additionalRetryCodes_)&&this.retry){const f=o.getErrorCode()===U.ABORT;s(!1,new N(!1,null,f));return}const u=this.successCodes_.indexOf(a)!==-1;s(!0,new N(u,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,c=r.connection;if(r.wasSuccessCode)try{const a=this.callback_(c,c.getResponse());rt(a)?o(a):o()}catch(a){i(a)}else if(c!==null){const a=q();a.serverResponse=c.getErrorText(),this.errorCallback_?i(this.errorCallback_(c,a)):i(a)}else if(r.canceled){const a=this.appDelete_?ce():Xe();i(a)}else{const a=We();i(a)}};this.canceled_?n(!1,new N(!1,null,!0)):this.backoffId_=nt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&st(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class N{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ct(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ut(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ht(t,e,n,s,r,o,i=!0){const c=ue(t.urlParams),a=t.url+c,u=Object.assign({},t.headers);return lt(u,e),ct(u,n),ut(u,o),dt(u,s),new at(a,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */function ft(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pt(...t){const e=ft();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(j())return new Blob(t);throw new h(d.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function _t(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gt(t){if(typeof atob>"u")throw Qe("base-64");return atob(t)}/**
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
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(e,n){this.data=e,this.contentType=n||null}}function mt(t,e){switch(t){case A.RAW:return new F(le(e));case A.BASE64:case A.BASE64URL:return new F(de(t,e));case A.DATA_URL:return new F(wt(e),yt(e))}throw q()}function le(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bt(t){let e;try{e=decodeURIComponent(t)}catch{throw P(A.DATA_URL,"Malformed data URL.")}return le(e)}function de(t,e){switch(t){case A.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw P(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw P(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gt(e)}catch(r){throw r.message.includes("polyfill")?r:P(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class he{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw P(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Rt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wt(t){const e=new he(t);return e.base64?de(A.BASE64,e.rest):bt(e.rest)}function yt(t){return new he(t).contentType}function Rt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class k{constructor(e,n){let s=0,r="";G(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(G(this.data_)){const s=this.data_,r=_t(s,e,n);return r===null?null:new k(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new k(s,!0)}}static getBlob(...e){if(j()){const n=e.map(s=>s instanceof k?s.data_:s);return new k(pt.apply(null,n))}else{const n=e.map(i=>H(i)?mt(A.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let c=0;c<i.length;c++)r[o++]=i[c]}),new k(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Tt(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function At(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function pe(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Et(t,e){return e}class w{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Et}}let x=null;function vt(t){return!H(t)||t.length<2?t:pe(t)}function _e(){if(x)return x;const t=[];t.push(new w("bucket")),t.push(new w("generation")),t.push(new w("metageneration")),t.push(new w("name","fullPath",!0));function e(o,i){return vt(i)}const n=new w("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new w("size");return r.xform=s,t.push(r),t.push(new w("timeCreated")),t.push(new w("updated")),t.push(new w("md5Hash",null,!0)),t.push(new w("cacheControl",null,!0)),t.push(new w("contentDisposition",null,!0)),t.push(new w("contentEncoding",null,!0)),t.push(new w("contentLanguage",null,!0)),t.push(new w("contentType",null,!0)),t.push(new w("metadata","customMetadata",!0)),x=t,x}function kt(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new R(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function Ut(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return kt(s,t),s}function ge(t,e,n){const s=fe(e);return s===null?null:Ut(t,s,n)}function Lt(t,e,n,s){const r=fe(e);if(r===null||!H(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const f=t.bucket,g=t.fullPath,p="/b/"+i(f)+"/o/"+i(g),m=z(p,n,s),_=ue({alt:"media",token:u});return m+_})[0]}function Ot(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class me{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function be(t){if(!t)throw q()}function It(t,e){function n(s,r){const o=ge(t,r,e);return be(o!==null),o}return n}function Pt(t,e){function n(s,r){const o=ge(t,r,e);return be(o!==null),Lt(o,r,t.host,t._protocol)}return n}function we(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ze():r=je():n.getStatus()===402?r=He(t.bucket):n.getStatus()===403?r=Ve(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function St(t){const e=we(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=qe(t.path)),o.serverResponse=r.serverResponse,o}return n}function Nt(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,c=new me(r,o,Pt(t,n),i);return c.errorHandler=St(e),c}function xt(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Ct(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=xt(null,e)),s}function Dt(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function c(){let y="";for(let l=0;l<2;l++)y=y+Math.random().toString().slice(2);return y}const a=c();i["Content-Type"]="multipart/related; boundary="+a;const u=Ct(e,s,r),f=Ot(u,n),g="--"+a+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+a+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+a+"--",m=k.getBlob(g,s,p);if(m===null)throw Ze();const _={name:u.fullPath},E=z(o,t.host,t._protocol),b="POST",v=t.maxUploadRetryTime,T=new me(E,b,It(t,n),v);return T.urlParams=_,T.headers=i,T.body=m.uploadData(),T.errorHandler=we(e),T}class Bt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=U.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=U.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=U.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw O("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw O("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw O("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw O("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw O("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Mt extends Bt{initXhr(){this.xhr_.responseType="text"}}function ye(){return new Mt}/**
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
 */class L{constructor(e,n){this._service=e,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new L(e,n)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=Tt(this._location.path);if(e===null)return null;const n=new R(this._location.bucket,e);return new L(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw et(e)}}function Ft(t,e,n){t._throwIfRoot("uploadBytes");const s=Dt(t.storage,t._location,_e(),new k(e,!0),n);return t.storage.makeRequestWithTokens(s,ye).then(r=>({metadata:r,ref:t}))}function $t(t){t._throwIfRoot("getDownloadURL");const e=Nt(t.storage,t._location,_e());return t.storage.makeRequestWithTokens(e,ye).then(n=>{if(n===null)throw Je();return n})}function qt(t,e){const n=At(t._location.path,e),s=new R(t._location.bucket,n);return new L(t.storage,s)}/**
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
 */function Ht(t){return/^[A-Za-z]+:\/\//.test(t)}function jt(t,e){return new L(t,e)}function Re(t,e){if(t instanceof V){const n=t;if(n._bucket==null)throw Ye();const s=new L(n,n._bucket);return e!=null?Re(s,e):s}else return e!==void 0?qt(t,e):t}function zt(t,e){if(e&&Ht(e)){if(t instanceof V)return jt(t,e);throw $("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(t,e)}function Z(t,e){const n=e?.[ae];return n==null?null:R.makeFromBucketSpec(n,t)}function Vt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Oe(r,t.app.options.projectId))}class V{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ie,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Fe,this._maxUploadRetryTime=$e,this._requests=new Set,r!=null?this._bucket=R.makeFromBucketSpec(r,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Z(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new L(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new tt(ce());{const i=ht(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const J="@firebase/storage",Q="0.11.2";/**
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
 */const Te="storage";function Wt(t,e,n){return t=C(t),Ft(t,e,n)}function Xt(t){return t=C(t),$t(t)}function Kt(t,e){return t=C(t),zt(t,e)}function Gt(t=ke(),e){t=C(t);const s=Ee(t,Te).getImmediate({identifier:e}),r=ve("storage");return r&&Yt(s,...r),s}function Yt(t,e,n,s={}){Vt(t,e,n,s)}function Zt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new V(n,s,r,e,Ie)}function Jt(){Ue(new Le(Te,Zt,"PUBLIC").setMultipleInstances(!0)),W(J,Q,""),W(J,Q,"esm2017")}Jt();const Qt=Gt();async function en(t){try{const e=Kt(Qt,"images/"+t.name),n=await Wt(e,t);return console.log(n),await Xt(e)}catch(e){throw console.error("Failed to upload image to Firebase Storage:",e),e}}class tn{currentPage;usersLength;constructor(e){this.currentPage=1,this.usersLength=e,this.init()}init(){this.pagination()}pagination(){const e=this,n=document.getElementById("account-button-prev"),s=document.getElementById("account-button-next"),r=document.getElementById("account-button-prev-mob"),o=document.getElementById("account-button-next-mob"),i=document.getElementById("current-page"),c=document.getElementById("all-pages"),a=document.getElementById("current-page-mob"),u=document.getElementById("all-pages-mob"),f=Math.ceil(this.usersLength/9);c&&(c.textContent=String(f)),u&&(u.textContent=String(f)),n?.addEventListener("click",()=>{g()}),r?.addEventListener("click",()=>{g()}),s?.addEventListener("click",()=>{p()}),o?.addEventListener("click",()=>{p()});function g(){e.currentPage>1&&(e.currentPage--,_(),m())}function p(){e.currentPage<f&&(e.currentPage++,_(),m())}function m(){const E=e.currentPage,b=document.querySelectorAll(".order"),v=document.querySelectorAll(".account-mobile__table-wrapper"),T=e.currentPage*9-1,y=T-8;v.forEach(l=>{+l.id>=y&&+l.id<=T?l.classList.add("account-mobile__table-wrapper_active"):l.classList.remove("account-mobile__table-wrapper_active")}),b.forEach(l=>{+l.id>=y&&+l.id<=T?l.classList.add("order_active"):l.classList.remove("order_active")}),E===1?(n?.classList.remove("account__table-bottom-button_active"),r?.classList.remove("account__table-bottom-button_active")):(n?.classList.add("account__table-bottom-button_active"),r?.classList.add("account__table-bottom-button_active")),E===f?(s?.classList.remove("account__table-bottom-button_active"),o?.classList.remove("account__table-bottom-button_active")):(s?.classList.add("account__table-bottom-button_active"),o?.classList.add("account__table-bottom-button_active"))}function _(){i&&(i.innerHTML=String(e.currentPage)),a&&(a.innerHTML=String(e.currentPage))}m()}}const ee=document.querySelector(".account__order"),te=document.querySelector(".account__table-bottom-left"),ne=document.querySelector(".account__table-bottom-left-mobile"),se=document.querySelector(".account-mobile__table"),re=document.querySelector(".account__left");class nn{app;db;usersArray;currentUser;constructor(){this.app=Ne,this.db=Ce(this.app),this.usersArray=[],this.currentUser=null,this.initAuth(),this.renderAccountLeft()}initAuth(){const e=I();oe(e,n=>{this.currentUser=n,n?this.loadCards():(this.usersArray=[],this.renderUsers())})}exitAccount(){I().signOut().then(()=>{console.log("Пользователь вышел из аккаунта")}).catch(n=>{console.error("Ошибка при выходе из аккаунта:",n)})}async renderAccountLeft(){const e=await X(K(this.db,"users"));if(!this.currentUser)return;const n=this.currentUser.email;e.forEach(r=>{const o=r.data();if(o.email===n){const{name:i,photo:c}=o;let a=`
            <div class="account__left-photo">
            
            <img src="${c}" alt="bg" />
            
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
        `;re&&re.insertAdjacentHTML("beforeend",a)}}),this.settings(),document.querySelector(".account__left-exit")?.addEventListener("click",r=>{r.preventDefault(),this.exitAccount()})}settings(){const e=document.querySelector(".account__left-settings"),n=document.querySelector(".account__left-order"),s=document.querySelector(".account__right"),r=document.querySelector(".account__settings");document.querySelector(".account__left-wrapper")?.addEventListener("click",i=>{const c=i.target;if(c){const a=c.textContent;a&&a.includes("Настройки")?(e?.classList.add("active"),n?.classList.remove("active"),s?.classList.add("active"),r?.classList.remove("active")):a&&a.includes("Мои заказы")&&(n?.classList.add("active"),e?.classList.remove("active"),s?.classList.remove("active"),r?.classList.add("active"))}})}isChangeInput(){const e=document.querySelector(".account__settings-input input"),n=document.querySelector(".account__settings-button");e.value===""&&(n.disabled=!0),e?.addEventListener("input",()=>{e.value===""||e.value.length<3||e.value.length>20?n.disabled=!0:n.disabled=!1})}async updateUserProfile(e,n){try{if(!this.currentUser)throw new Error("No user is currently signed in.");const s=De(this.db,"users",this.currentUser.uid);await Be(s,{name:e,photo:n}),console.log("User profile updated successfully!"),window.location.href="account.html"}catch(s){console.error("Failed to update user profile:",s)}}async getFormData(){const e=document.querySelector("#settingsForm");e?.addEventListener("submit",async n=>{n.preventDefault();const s=new FormData(e),r=s.get("name"),o=s.get("photo");let i;if(o&&o.size>0)try{i=await en(o)}catch(c){console.error("Failed to upload image to Firebase Storage:",c)}else i=document.querySelector(".account__left-photo img").src;await this.updateUserProfile(r,i)})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await X(K(this.db,"users"))).forEach(s=>{s.data().orders.forEach(o=>{o.email===e&&this.usersArray.push(o)})}),this.renderUsers(),new tn(this.usersArray.length)}renderUsers(){this.usersArray.forEach((r,o)=>{const i=r,{date:c,email:a,idOrder:u,payStatus:f,price:g}=i;let p=`
        <td>${u}</td>
        <td>${g}</td>
        `;a.length<23?p+=`
                <td>${a}</td>
            `:p+=`
            <td>${a.slice(0,23)+"..."}</td>
        `,p+=`
        <td>
          ${f==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
        </td>
        <td>${c}</td>
        `;const m=`<tr class="order" id=${o} >${p}</tr>`;ee&&ee.insertAdjacentHTML("beforeend",m);let _=`
          <div id=${o} class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${u}</p>
              <p>${g}</p>
              `;a.length<23?_+=`
                    <p>${a}</p>
                  `:_+=`
                  <p>${a.slice(0,23)+"..."}</p>
              `,_+=`
              ${f==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
              <p>${c}</p>
            </div>
          </div>
        `,se&&se.insertAdjacentHTML("beforeend",_)});let n=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;te&&te.insertAdjacentHTML("beforeend",n);let s=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;ne&&ne.insertAdjacentHTML("beforeend",s)}}class sn{constructor(){this.initializeButton(),this.watchAuthState()}async checkAuthorizationAvatar(){const e=await I().currentUser;e?(console.log("Пользователь авторизован:",e.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}async checkAuthorizationUser(){const e=await I().currentUser;e?(console.log("Пользователь авторизован:",e.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}watchAuthState(){oe(I(),e=>{e?console.log("Пользователь авторизован:",e.uid):(console.log("Пользователь не авторизован"),window.location.href.includes("authorization.html")||(window.location.href="authorization.html"))})}initializeButton(){const e=document.querySelector(".top-list__link-avatar"),n=document.querySelector(".top-list__link-user");e?e.addEventListener("click",s=>{s.preventDefault(),this.checkAuthorizationAvatar()}):console.error("Кнопка не найдена"),n?n.addEventListener("click",s=>{s.preventDefault(),this.checkAuthorizationUser()}):console.error("Кнопка не найдена")}}document.addEventListener("DOMContentLoaded",async function(){new sn;const t=new nn;t.isChangeInput(),await t.loadCards(),Me(),document.querySelector(".account__settings-button")?.addEventListener("click",()=>{t.getFormData()}),new xe});
