import{c as D,_ as Ee,d as ke,e as Ue,f as ve,C as Le,r as W,h as Oe,S as Ie,F as Se,i as Pe,a as Ne,g as C,o as oe,H as Ce}from"./header-u1vxfMaN.js";import{g as De,b as X,c as K,d as xe,u as Be}from"./index.esm2017-WC45BDwc.js";import{a as Fe}from"./justValidate-ywqcVI2V.js";/**
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
 */const ie="firebasestorage.googleapis.com",ae="storageBucket",Me=2*60*1e3,$e=10*60*1e3;/**
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
 */class h extends Se{constructor(e,n,s=0){super(F(e),`Firebase Storage: ${n} (${F(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,h.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return F(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var d;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(d||(d={}));function F(t){return"storage/"+t}function q(){const t="An unknown error occurred, please check the error payload for server response.";return new h(d.UNKNOWN,t)}function qe(t){return new h(d.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function He(t){return new h(d.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function je(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new h(d.UNAUTHENTICATED,t)}function ze(){return new h(d.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Ve(t){return new h(d.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function We(){return new h(d.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xe(){return new h(d.CANCELED,"User canceled the upload/download.")}function Ke(t){return new h(d.INVALID_URL,"Invalid URL '"+t+"'.")}function Ge(t){return new h(d.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Ye(){return new h(d.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ae+"' property when initializing the app?")}function Ze(){return new h(d.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Je(){return new h(d.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Qe(t){return new h(d.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $(t){return new h(d.INVALID_ARGUMENT,t)}function ce(){return new h(d.APP_DELETED,"The Firebase app was deleted.")}function et(t){return new h(d.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function S(t,e){return new h(d.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function I(t){throw new h(d.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class R{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=R.makeFromUrl(e,n)}catch{return new R(e,"")}if(s.path==="")return s;throw Ge(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function o(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+r+i,"i"),c={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const l="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",T=new RegExp(`^https?://${p}/${l}/b/${r}/o${f}`,"i"),b={bucket:1,path:3},E=n===ie?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",U=new RegExp(`^https?://${E}/${r}/${_}`,"i"),w=[{regex:a,indices:c,postModify:o},{regex:T,indices:b,postModify:u},{regex:U,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<w.length;g++){const y=w[g],x=y.regex.exec(e);if(x){const Ae=x[y.indices.bucket];let B=x[y.indices.path];B||(B=""),s=new R(Ae,B),y.postModify(s);break}}if(s==null)throw Ke(e);return s}}class tt{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nt(t,e,n){let s=1,r=null,o=null,i=!1,a=0;function c(){return a===2}let u=!1;function l(..._){u||(u=!0,e.apply(null,_))}function p(_){r=setTimeout(()=>{r=null,t(T,c())},_)}function f(){o&&clearTimeout(o)}function T(_,...U){if(u){f();return}if(_){f(),l.call(null,_,...U);return}if(c()||i){f(),l.call(null,_,...U);return}s<64&&(s*=2);let w;a===1?(a=2,w=0):w=(s+Math.random())*1e3,p(w)}let b=!1;function E(_){b||(b=!0,f(),!u&&(r!==null?(_||(a=2),clearTimeout(r),p(0)):_||(a=1)))}return p(0),o=setTimeout(()=>{i=!0,E(!0)},n),E}function st(t){t(!1)}/**
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
 */function rt(t){return t!==void 0}function ot(t){return typeof t=="object"&&!Array.isArray(t)}function H(t){return typeof t=="string"||t instanceof String}function G(t){return j()&&t instanceof Blob}function j(){return typeof Blob<"u"&&!Pe()}function Y(t,e,n,s){if(s<e)throw $(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw $(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */var L;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(L||(L={}));/**
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
 */class at{constructor(e,n,s,r,o,i,a,c,u,l,p,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=l,this.connectionFactory_=p,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,b)=>{this.resolve_=T,this.reject_=b,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new P(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const i=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&o.addUploadProgressListener(i),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(i),this.pendingConnection_=null;const a=o.getErrorCode()===L.NO_ERROR,c=o.getStatus();if(!a||it(c,this.additionalRetryCodes_)&&this.retry){const l=o.getErrorCode()===L.ABORT;s(!1,new P(!1,null,l));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new P(u,o))})},n=(s,r)=>{const o=this.resolve_,i=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());rt(c)?o(c):o()}catch(c){i(c)}else if(a!==null){const c=q();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(r.canceled){const c=this.appDelete_?ce():Xe();i(c)}else{const c=We();i(c)}};this.canceled_?n(!1,new P(!1,null,!0)):this.backoffId_=nt(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&st(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class P{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function ct(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ut(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lt(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dt(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ht(t,e,n,s,r,o,i=!0){const a=ue(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return lt(u,e),ct(u,n),ut(u,o),dt(u,s),new at(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,i)}/**
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
 */const A={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class M{constructor(e,n){this.data=e,this.contentType=n||null}}function mt(t,e){switch(t){case A.RAW:return new M(le(e));case A.BASE64:case A.BASE64URL:return new M(de(t,e));case A.DATA_URL:return new M(wt(e),yt(e))}throw q()}function le(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const o=s,i=t.charCodeAt(++n);s=65536|(o&1023)<<10|i&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function bt(t){let e;try{e=decodeURIComponent(t)}catch{throw S(A.DATA_URL,"Malformed data URL.")}return le(e)}function de(t,e){switch(t){case A.BASE64:{const r=e.indexOf("-")!==-1,o=e.indexOf("_")!==-1;if(r||o)throw S(t,"Invalid character '"+(r?"-":"_")+"' found: is it base64url encoded?");break}case A.BASE64URL:{const r=e.indexOf("+")!==-1,o=e.indexOf("/")!==-1;if(r||o)throw S(t,"Invalid character '"+(r?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gt(e)}catch(r){throw r.message.includes("polyfill")?r:S(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}class he{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw S(A.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=Rt(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function wt(t){const e=new he(t);return e.base64?de(A.BASE64,e.rest):bt(e.rest)}function yt(t){return new he(t).contentType}function Rt(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class v{constructor(e,n){let s=0,r="";G(e)?(this.data_=e,s=e.size,r=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,n){if(G(this.data_)){const s=this.data_,r=_t(s,e,n);return r===null?null:new v(r)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new v(s,!0)}}static getBlob(...e){if(j()){const n=e.map(s=>s instanceof v?s.data_:s);return new v(pt.apply(null,n))}else{const n=e.map(i=>H(i)?mt(A.RAW,i).data:i.data_);let s=0;n.forEach(i=>{s+=i.byteLength});const r=new Uint8Array(s);let o=0;return n.forEach(i=>{for(let a=0;a<i.length;a++)r[o++]=i[a]}),new v(r,!0)}}uploadData(){return this.data_}}/**
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
 */function Et(t,e){return e}class m{constructor(e,n,s,r){this.server=e,this.local=n||e,this.writable=!!s,this.xform=r||Et}}let N=null;function kt(t){return!H(t)||t.length<2?t:pe(t)}function _e(){if(N)return N;const t=[];t.push(new m("bucket")),t.push(new m("generation")),t.push(new m("metageneration")),t.push(new m("name","fullPath",!0));function e(o,i){return kt(i)}const n=new m("name");n.xform=e,t.push(n);function s(o,i){return i!==void 0?Number(i):i}const r=new m("size");return r.xform=s,t.push(r),t.push(new m("timeCreated")),t.push(new m("updated")),t.push(new m("md5Hash",null,!0)),t.push(new m("cacheControl",null,!0)),t.push(new m("contentDisposition",null,!0)),t.push(new m("contentEncoding",null,!0)),t.push(new m("contentLanguage",null,!0)),t.push(new m("contentType",null,!0)),t.push(new m("metadata","customMetadata",!0)),N=t,N}function Ut(t,e){function n(){const s=t.bucket,r=t.fullPath,o=new R(s,r);return e._makeStorageReference(o)}Object.defineProperty(t,"ref",{get:n})}function vt(t,e,n){const s={};s.type="file";const r=n.length;for(let o=0;o<r;o++){const i=n[o];s[i.local]=i.xform(s,e[i.server])}return Ut(s,t),s}function ge(t,e,n){const s=fe(e);return s===null?null:vt(t,s,n)}function Lt(t,e,n,s){const r=fe(e);if(r===null||!H(r.downloadTokens))return null;const o=r.downloadTokens;if(o.length===0)return null;const i=encodeURIComponent;return o.split(",").map(u=>{const l=t.bucket,p=t.fullPath,f="/b/"+i(l)+"/o/"+i(p),T=z(f,n,s),b=ue({alt:"media",token:u});return T+b})[0]}function Ot(t,e){const n={},s=e.length;for(let r=0;r<s;r++){const o=e[r];o.writable&&(n[o.server]=t[o.local])}return JSON.stringify(n)}class me{constructor(e,n,s,r){this.url=e,this.method=n,this.handler=s,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function be(t){if(!t)throw q()}function It(t,e){function n(s,r){const o=ge(t,r,e);return be(o!==null),o}return n}function St(t,e){function n(s,r){const o=ge(t,r,e);return be(o!==null),Lt(o,r,t.host,t._protocol)}return n}function we(t){function e(n,s){let r;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?r=ze():r=je():n.getStatus()===402?r=He(t.bucket):n.getStatus()===403?r=Ve(t.path):r=s,r.status=n.getStatus(),r.serverResponse=s.serverResponse,r}return e}function Pt(t){const e=we(t);function n(s,r){let o=e(s,r);return s.getStatus()===404&&(o=qe(t.path)),o.serverResponse=r.serverResponse,o}return n}function Nt(t,e,n){const s=e.fullServerUrl(),r=z(s,t.host,t._protocol),o="GET",i=t.maxOperationRetryTime,a=new me(r,o,St(t,n),i);return a.errorHandler=Pt(e),a}function Ct(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Dt(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=Ct(null,e)),s}function xt(t,e,n,s,r){const o=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let g=0;g<2;g++)w=w+Math.random().toString().slice(2);return w}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const u=Dt(e,s,r),l=Ot(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+l+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+c+"--",T=v.getBlob(p,s,f);if(T===null)throw Ze();const b={name:u.fullPath},E=z(o,t.host,t._protocol),_="POST",U=t.maxUploadRetryTime,k=new me(E,_,It(t,n),U);return k.urlParams=b,k.headers=i,k.body=T.uploadData(),k.errorHandler=we(e),k}class Bt{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=L.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=L.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=L.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,r){if(this.sent_)throw I("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),r!==void 0)for(const o in r)r.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,r[o].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw I("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw I("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw I("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw I("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Ft extends Bt{initXhr(){this.xhr_.responseType="text"}}function ye(){return new Ft}/**
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
 */class O{constructor(e,n){this._service=e,n instanceof R?this._location=n:this._location=R.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new O(e,n)}get root(){const e=new R(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pe(this._location.path)}get storage(){return this._service}get parent(){const e=Tt(this._location.path);if(e===null)return null;const n=new R(this._location.bucket,e);return new O(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw et(e)}}function Mt(t,e,n){t._throwIfRoot("uploadBytes");const s=xt(t.storage,t._location,_e(),new v(e,!0),n);return t.storage.makeRequestWithTokens(s,ye).then(r=>({metadata:r,ref:t}))}function $t(t){t._throwIfRoot("getDownloadURL");const e=Nt(t.storage,t._location,_e());return t.storage.makeRequestWithTokens(e,ye).then(n=>{if(n===null)throw Je();return n})}function qt(t,e){const n=At(t._location.path,e),s=new R(t._location.bucket,n);return new O(t.storage,s)}/**
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
 */function Ht(t){return/^[A-Za-z]+:\/\//.test(t)}function jt(t,e){return new O(t,e)}function Re(t,e){if(t instanceof V){const n=t;if(n._bucket==null)throw Ye();const s=new O(n,n._bucket);return e!=null?Re(s,e):s}else return e!==void 0?qt(t,e):t}function zt(t,e){if(e&&Ht(e)){if(t instanceof V)return jt(t,e);throw $("To use ref(service, url), the first argument must be a Storage instance.")}else return Re(t,e)}function Z(t,e){const n=e?.[ae];return n==null?null:R.makeFromBucketSpec(n,t)}function Vt(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:r}=s;r&&(t._overrideAuthToken=typeof r=="string"?r:Oe(r,t.app.options.projectId))}class V{constructor(e,n,s,r,o){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=ie,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Me,this._maxUploadRetryTime=$e,this._requests=new Set,r!=null?this._bucket=R.makeFromBucketSpec(r,this._host):this._bucket=Z(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=R.makeFromBucketSpec(this._url,e):this._bucket=Z(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Y("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new O(this,e)}_makeRequest(e,n,s,r,o=!0){if(this._deleted)return new tt(ce());{const i=ht(e,this._appId,s,r,n,this._firebaseVersion,o);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const J="@firebase/storage",Q="0.11.2";/**
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
 */const Te="storage";function Wt(t,e,n){return t=D(t),Mt(t,e,n)}function Xt(t){return t=D(t),$t(t)}function Kt(t,e){return t=D(t),zt(t,e)}function Gt(t=Ue(),e){t=D(t);const s=Ee(t,Te).getImmediate({identifier:e}),r=ke("storage");return r&&Yt(s,...r),s}function Yt(t,e,n,s={}){Vt(t,e,n,s)}function Zt(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new V(n,s,r,e,Ie)}function Jt(){ve(new Le(Te,Zt,"PUBLIC").setMultipleInstances(!0)),W(J,Q,""),W(J,Q,"esm2017")}Jt();const Qt=Gt();async function en(t){try{if(!["image/jpeg","image/webp","image/png"].includes(t.type))throw new Error("Invalid image format. Only JPEG, WEBP, and PNG are allowed.");const n=Kt(Qt,"images/"+t.name),s=await Wt(n,t);return console.log(s),await Xt(n)}catch(e){throw console.error("Failed to upload image to Firebase Storage:",e),e}}class tn{currentPage;usersLength;constructor(e){this.currentPage=1,this.usersLength=e,this.init()}init(){this.pagination("account-button-prev","account-button-next","current-page","all-pages"),this.pagination("account-button-prev-mob","account-button-next-mob","current-page-mob","all-pages-mob")}pagination(e,n,s,r){const o=this,i=document.getElementById(e),a=document.getElementById(n),c=document.getElementById(s),u=document.getElementById(r),l=Math.ceil(this.usersLength/9),p=l!=0?l:1;u&&(u.textContent=String(p)),i?.addEventListener("click",()=>{f()}),a?.addEventListener("click",()=>{T()});function f(){o.currentPage>1&&(o.currentPage--,E(),b())}function T(){o.currentPage<p&&(o.currentPage++,E(),b())}function b(){const _=o.currentPage,U=document.querySelectorAll(".order"),k=document.querySelectorAll(".account-mobile__table-wrapper"),w=o.currentPage*9-1,g=w-8;k.forEach(y=>{+y.id>=g&&+y.id<=w?y.classList.add("account-mobile__table-wrapper_active"):y.classList.remove("account-mobile__table-wrapper_active")}),U.forEach(y=>{+y.id>=g&&+y.id<=w?y.classList.add("order_active"):y.classList.remove("order_active")}),_===1?i?.classList.remove("account__table-bottom-button_active"):i?.classList.add("account__table-bottom-button_active"),_===p?a?.classList.remove("account__table-bottom-button_active"):a?.classList.add("account__table-bottom-button_active")}function E(){c&&(c.innerHTML=String(o.currentPage))}b()}}const ee=document.querySelector(".account__order"),te=document.querySelector(".account__table-bottom-left"),ne=document.querySelector(".account__table-bottom-left-mobile"),se=document.querySelector(".account-mobile__table"),re=document.querySelector(".account__left");class nn{app;db;usersArray;currentUser;constructor(){this.app=Ne,this.db=De(this.app),this.usersArray=[],this.currentUser=null,this.initAuth(),this.renderAccountLeft()}initAuth(){const e=C();oe(e,n=>{this.currentUser=n,n?this.loadCards():(this.usersArray=[],this.renderUsers())})}exitAccount(){C().signOut().then(()=>{console.log("Пользователь вышел из аккаунта")}).catch(n=>{console.error("Ошибка при выходе из аккаунта:",n)})}async renderAccountLeft(){const e=document.querySelector(".account__left-skeleton"),n=await X(K(this.db,"users"));if(!this.currentUser)return;const s=this.currentUser.email;n.forEach(o=>{const i=o.data();if(i.email===s){const{name:a,photo:c}=i;let u=`
            <div class="account__left-photo">
            
            <img src="${c}" alt="bg" />
            
          </div>
          <p class="account__left-name">${a||"Пользователь"}</p>
        `;re&&(re.insertAdjacentHTML("afterbegin",u),e?.classList.add("active"))}}),this.settings(),document.querySelector(".account__left-exit")?.addEventListener("click",o=>{o.preventDefault(),this.exitAccount()})}settings(){const e=document.querySelector(".account__left-settings"),n=document.querySelector(".account__left-order"),s=document.querySelector(".account__right"),r=document.querySelector(".account__settings"),o=document.querySelector(".account__left-wrapper"),i=c=>{c==="settings"?(e?.classList.add("active"),n?.classList.remove("active"),s?.classList.add("active"),r?.classList.remove("active")):c==="orders"&&(n?.classList.add("active"),e?.classList.remove("active"),s?.classList.remove("active"),r?.classList.add("active"))};o?.addEventListener("click",c=>{const u=c.target;if(u){const l=u.textContent;l&&l.includes("Настройки")?(i("settings"),localStorage.setItem("selectedTab","settings")):l&&l.includes("Мои заказы")&&(i("orders"),localStorage.setItem("selectedTab","orders"))}});const a=localStorage.getItem("selectedTab");a&&i(a)}isChangeInput(){const e=document.querySelector(".account__settings-input input"),n=document.querySelector(".account__settings-button");e.value===""&&(n.disabled=!0),e?.addEventListener("input",()=>{e.value===""||e.value.length<3||e.value.length>20?n.disabled=!0:n.disabled=!1})}async updateUserProfile(e,n){try{if(!this.currentUser)throw new Error("No user is currently signed in.");const s=xe(this.db,"users",this.currentUser.uid);await Be(s,{name:e,photo:n}),console.log("User profile updated successfully!"),window.location.href="account.html"}catch(s){console.error("Failed to update user profile:",s)}}async getFormData(){const e=document.querySelector("#settingsForm");e?.addEventListener("submit",async n=>{n.preventDefault();const s=new FormData(e),r=s.get("name"),o=s.get("photo");let i;if(o&&o.size>0)try{i=await en(o)}catch(a){console.error("Failed to upload image to Firebase Storage:",a)}else i=document.querySelector(".account__left-photo img").src;await this.updateUserProfile(r,i)})}async loadCards(){if(!this.currentUser)return;const e=this.currentUser.email;(await X(K(this.db,"users"))).forEach(s=>{s.data().orders.forEach(o=>{o.email===e&&this.usersArray.push(o)})}),this.renderUsers(),new tn(this.usersArray.length)}renderUsers(){this.usersArray.forEach((s,r)=>{const{date:o,email:i,idOrder:a,payStatus:c,price:u}=s;let l=`
        <td>${a}</td>
        <td>${u}</td>
        `;i.length<23?l+=`
                <td>${i}</td>
            `:l+=`
            <td>${i.slice(0,23)+"..."}</td>
        `,l+=`
        <td>
          ${c==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
        </td>
        <td>${o}</td>
        `;const p=`<tr class="order" id=${r} >${l}</tr>`;ee&&ee.insertAdjacentHTML("beforeend",p);let f=`
          <div id=${r} class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${a}</p>
              <p>${u}</p>
              `;i.length<23?f+=`
                    <p>${i}</p>
                  `:f+=`
                  <p>${i.slice(0,23)+"..."}</p>
              `,f+=`
              ${c==!1?'<p class="account__payment-processing">В обработке</p>':'<p class="account__payment-success">Оплачено</p>'}
              <p>${o}</p>
            </div>
          </div>
        `,se&&se.insertAdjacentHTML("beforeend",f)});let e=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;te&&te.insertAdjacentHTML("beforeend",e);let n=`
      <p>Показано <span>${this.usersArray.length>9?9:this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;ne&&ne.insertAdjacentHTML("beforeend",n)}}class sn{constructor(){this.initializeButton(),this.watchAuthState()}async checkAuthorizationUser(){const e=await C().currentUser;e?(console.log("Пользователь авторизован:",e.uid),window.location.href="account.html"):(console.log("Пользователь не авторизован"),window.location.href="authorization.html")}watchAuthState(){oe(C(),e=>{e?console.log("Пользователь авторизован:",e.uid):(console.log("Пользователь не авторизован"),window.location.href.includes("authorization.html")||(window.location.href="authorization.html"))})}initializeButton(){const e=document.querySelector(".top-list__link-user");e?e.addEventListener("click",n=>{n.preventDefault(),this.checkAuthorizationUser()}):console.error("Кнопка не найдена")}}document.addEventListener("DOMContentLoaded",async function(){new sn;const t=new nn;t.isChangeInput(),await t.loadCards(),Fe(),document.querySelector(".account__settings-button")?.addEventListener("click",()=>{t.getFormData()}),new Ce});
