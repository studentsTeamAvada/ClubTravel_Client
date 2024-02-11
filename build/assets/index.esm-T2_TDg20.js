var ni = {};
/**
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
 */ const uo = function (n) {
    const t = [];
    let e = 0;
    for (let r = 0; r < n.length; r++) {
      let s = n.charCodeAt(r);
      s < 128
        ? (t[e++] = s)
        : s < 2048
          ? ((t[e++] = (s >> 6) | 192), (t[e++] = (s & 63) | 128))
          : (s & 64512) === 55296 &&
              r + 1 < n.length &&
              (n.charCodeAt(r + 1) & 64512) === 56320
            ? ((s = 65536 + ((s & 1023) << 10) + (n.charCodeAt(++r) & 1023)),
              (t[e++] = (s >> 18) | 240),
              (t[e++] = ((s >> 12) & 63) | 128),
              (t[e++] = ((s >> 6) & 63) | 128),
              (t[e++] = (s & 63) | 128))
            : ((t[e++] = (s >> 12) | 224),
              (t[e++] = ((s >> 6) & 63) | 128),
              (t[e++] = (s & 63) | 128));
    }
    return t;
  },
  Au = function (n) {
    const t = [];
    let e = 0,
      r = 0;
    for (; e < n.length; ) {
      const s = n[e++];
      if (s < 128) t[r++] = String.fromCharCode(s);
      else if (s > 191 && s < 224) {
        const i = n[e++];
        t[r++] = String.fromCharCode(((s & 31) << 6) | (i & 63));
      } else if (s > 239 && s < 365) {
        const i = n[e++],
          o = n[e++],
          a = n[e++],
          u =
            (((s & 7) << 18) | ((i & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (t[r++] = String.fromCharCode(55296 + (u >> 10))),
          (t[r++] = String.fromCharCode(56320 + (u & 1023)));
      } else {
        const i = n[e++],
          o = n[e++];
        t[r++] = String.fromCharCode(
          ((s & 15) << 12) | ((i & 63) << 6) | (o & 63),
        );
      }
    }
    return t.join("");
  },
  ho = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(n, t) {
      if (!Array.isArray(n))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const e = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        r = [];
      for (let s = 0; s < n.length; s += 3) {
        const i = n[s],
          o = s + 1 < n.length,
          a = o ? n[s + 1] : 0,
          u = s + 2 < n.length,
          h = u ? n[s + 2] : 0,
          c = i >> 2,
          l = ((i & 3) << 4) | (a >> 4);
        let f = ((a & 15) << 2) | (h >> 6),
          g = h & 63;
        u || ((g = 64), o || (f = 64)), r.push(e[c], e[l], e[f], e[g]);
      }
      return r.join("");
    },
    encodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? btoa(n)
        : this.encodeByteArray(uo(n), t);
    },
    decodeString(n, t) {
      return this.HAS_NATIVE_SUPPORT && !t
        ? atob(n)
        : Au(this.decodeStringToByteArray(n, t));
    },
    decodeStringToByteArray(n, t) {
      this.init_();
      const e = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        r = [];
      for (let s = 0; s < n.length; ) {
        const i = e[n.charAt(s++)],
          a = s < n.length ? e[n.charAt(s)] : 0;
        ++s;
        const h = s < n.length ? e[n.charAt(s)] : 64;
        ++s;
        const l = s < n.length ? e[n.charAt(s)] : 64;
        if ((++s, i == null || a == null || h == null || l == null))
          throw new Ru();
        const f = (i << 2) | (a >> 4);
        if ((r.push(f), h !== 64)) {
          const g = ((a << 4) & 240) | (h >> 2);
          if ((r.push(g), l !== 64)) {
            const D = ((h << 6) & 192) | l;
            r.push(D);
          }
        }
      }
      return r;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let n = 0; n < this.ENCODED_VALS.length; n++)
          (this.byteToCharMap_[n] = this.ENCODED_VALS.charAt(n)),
            (this.charToByteMap_[this.byteToCharMap_[n]] = n),
            (this.byteToCharMapWebSafe_[n] =
              this.ENCODED_VALS_WEBSAFE.charAt(n)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]] = n),
            n >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)] = n),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)] = n));
      }
    },
  };
class Ru extends Error {
  constructor() {
    super(...arguments), (this.name = "DecodeBase64StringError");
  }
}
const Su = function (n) {
    const t = uo(n);
    return ho.encodeByteArray(t, !0);
  },
  yn = function (n) {
    return Su(n).replace(/\./g, "");
  },
  Cu = function (n) {
    try {
      return ho.decodeString(n, !0);
    } catch (t) {
      console.error("base64Decode failed: ", t);
    }
    return null;
  };
/**
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
 */ function Pu() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
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
 */ const Vu = () => Pu().__FIREBASE_DEFAULTS__,
  Du = () => {
    if (typeof process > "u" || typeof ni > "u") return;
    const n = ni.__FIREBASE_DEFAULTS__;
    if (n) return JSON.parse(n);
  },
  bu = () => {
    if (typeof document > "u") return;
    let n;
    try {
      n = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const t = n && Cu(n[1]);
    return t && JSON.parse(t);
  },
  ns = () => {
    try {
      return Vu() || Du() || bu();
    } catch (n) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);
      return;
    }
  },
  Nu = (n) => {
    var t, e;
    return (e =
      (t = ns()) === null || t === void 0 ? void 0 : t.emulatorHosts) ===
      null || e === void 0
      ? void 0
      : e[n];
  },
  ku = (n) => {
    const t = Nu(n);
    if (!t) return;
    const e = t.lastIndexOf(":");
    if (e <= 0 || e + 1 === t.length)
      throw new Error(`Invalid host ${t} with no separate hostname and port!`);
    const r = parseInt(t.substring(e + 1), 10);
    return t[0] === "[" ? [t.substring(1, e - 1), r] : [t.substring(0, e), r];
  },
  co = () => {
    var n;
    return (n = ns()) === null || n === void 0 ? void 0 : n.config;
  };
/**
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
 */ class Ou {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((t, e) => {
        (this.resolve = t), (this.reject = e);
      }));
  }
  wrapCallback(t) {
    return (e, r) => {
      e ? this.reject(e) : this.resolve(r),
        typeof t == "function" &&
          (this.promise.catch(() => {}), t.length === 1 ? t(e) : t(e, r));
    };
  }
}
/**
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
 */ function xu(n, t) {
  if (n.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.',
    );
  const e = { alg: "none", type: "JWT" },
    r = t || "demo-project",
    s = n.iat || 0,
    i = n.sub || n.user_id;
  if (!i)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
    {
      iss: `https://securetoken.google.com/${r}`,
      aud: r,
      iat: s,
      exp: s + 3600,
      auth_time: s,
      sub: i,
      user_id: i,
      firebase: { sign_in_provider: "custom", identities: {} },
    },
    n,
  );
  return [yn(JSON.stringify(e)), yn(JSON.stringify(o)), ""].join(".");
}
/**
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
 */ function En() {
  return typeof navigator < "u" && typeof navigator.userAgent == "string"
    ? navigator.userAgent
    : "";
}
function Mu() {
  var n;
  const t = (n = ns()) === null || n === void 0 ? void 0 : n.forceEnvironment;
  if (t === "node") return !0;
  if (t === "browser") return !1;
  try {
    return (
      Object.prototype.toString.call(global.process) === "[object process]"
    );
  } catch {
    return !1;
  }
}
function Lu() {
  return (
    !Mu() &&
    navigator.userAgent.includes("Safari") &&
    !navigator.userAgent.includes("Chrome")
  );
}
function lo() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function Fu() {
  return new Promise((n, t) => {
    try {
      let e = !0;
      const r = "validate-browser-context-for-indexeddb-analytics-module",
        s = self.indexedDB.open(r);
      (s.onsuccess = () => {
        s.result.close(), e || self.indexedDB.deleteDatabase(r), n(!0);
      }),
        (s.onupgradeneeded = () => {
          e = !1;
        }),
        (s.onerror = () => {
          var i;
          t(
            ((i = s.error) === null || i === void 0 ? void 0 : i.message) || "",
          );
        });
    } catch (e) {
      t(e);
    }
  });
}
/**
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
 */ const Uu = "FirebaseError";
class he extends Error {
  constructor(t, e, r) {
    super(e),
      (this.code = t),
      (this.customData = r),
      (this.name = Uu),
      Object.setPrototypeOf(this, he.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, fo.prototype.create);
  }
}
class fo {
  constructor(t, e, r) {
    (this.service = t), (this.serviceName = e), (this.errors = r);
  }
  create(t, ...e) {
    const r = e[0] || {},
      s = `${this.service}/${t}`,
      i = this.errors[t],
      o = i ? Bu(i, r) : "Error",
      a = `${this.serviceName}: ${o} (${s}).`;
    return new he(s, a, r);
  }
}
function Bu(n, t) {
  return n.replace(qu, (e, r) => {
    const s = t[r];
    return s != null ? String(s) : `<${r}?>`;
  });
}
const qu = /\{\$([^}]+)}/g;
function wr(n, t) {
  if (n === t) return !0;
  const e = Object.keys(n),
    r = Object.keys(t);
  for (const s of e) {
    if (!r.includes(s)) return !1;
    const i = n[s],
      o = t[s];
    if (ri(i) && ri(o)) {
      if (!wr(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const s of r) if (!e.includes(s)) return !1;
  return !0;
}
function ri(n) {
  return n !== null && typeof n == "object";
}
/**
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
 */ function vn(n) {
  return n && n._delegate ? n._delegate : n;
}
class Ve {
  constructor(t, e, r) {
    (this.name = t),
      (this.instanceFactory = e),
      (this.type = r),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(t) {
    return (this.instantiationMode = t), this;
  }
  setMultipleInstances(t) {
    return (this.multipleInstances = t), this;
  }
  setServiceProps(t) {
    return (this.serviceProps = t), this;
  }
  setInstanceCreatedCallback(t) {
    return (this.onInstanceCreated = t), this;
  }
}
/**
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
 */ const Dt = "[DEFAULT]";
/**
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
 */ class ju {
  constructor(t, e) {
    (this.name = t),
      (this.container = e),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(t) {
    const e = this.normalizeInstanceIdentifier(t);
    if (!this.instancesDeferred.has(e)) {
      const r = new Ou();
      if (
        (this.instancesDeferred.set(e, r),
        this.isInitialized(e) || this.shouldAutoInitialize())
      )
        try {
          const s = this.getOrInitializeService({ instanceIdentifier: e });
          s && r.resolve(s);
        } catch {}
    }
    return this.instancesDeferred.get(e).promise;
  }
  getImmediate(t) {
    var e;
    const r = this.normalizeInstanceIdentifier(t?.identifier),
      s = (e = t?.optional) !== null && e !== void 0 ? e : !1;
    if (this.isInitialized(r) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: r });
      } catch (i) {
        if (s) return null;
        throw i;
      }
    else {
      if (s) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(t) {
    if (t.name !== this.name)
      throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = t), !!this.shouldAutoInitialize())) {
      if (zu(t))
        try {
          this.getOrInitializeService({ instanceIdentifier: Dt });
        } catch {}
      for (const [e, r] of this.instancesDeferred.entries()) {
        const s = this.normalizeInstanceIdentifier(e);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: s });
          r.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(t = Dt) {
    this.instancesDeferred.delete(t),
      this.instancesOptions.delete(t),
      this.instances.delete(t);
  }
  async delete() {
    const t = Array.from(this.instances.values());
    await Promise.all([
      ...t.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
      ...t.filter((e) => "_delete" in e).map((e) => e._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(t = Dt) {
    return this.instances.has(t);
  }
  getOptions(t = Dt) {
    return this.instancesOptions.get(t) || {};
  }
  initialize(t = {}) {
    const { options: e = {} } = t,
      r = this.normalizeInstanceIdentifier(t.instanceIdentifier);
    if (this.isInitialized(r))
      throw Error(`${this.name}(${r}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const s = this.getOrInitializeService({
      instanceIdentifier: r,
      options: e,
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(i);
      r === a && o.resolve(s);
    }
    return s;
  }
  onInit(t, e) {
    var r;
    const s = this.normalizeInstanceIdentifier(e),
      i =
        (r = this.onInitCallbacks.get(s)) !== null && r !== void 0
          ? r
          : new Set();
    i.add(t), this.onInitCallbacks.set(s, i);
    const o = this.instances.get(s);
    return (
      o && t(o, s),
      () => {
        i.delete(t);
      }
    );
  }
  invokeOnInitCallbacks(t, e) {
    const r = this.onInitCallbacks.get(e);
    if (r)
      for (const s of r)
        try {
          s(t, e);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: t, options: e = {} }) {
    let r = this.instances.get(t);
    if (
      !r &&
      this.component &&
      ((r = this.component.instanceFactory(this.container, {
        instanceIdentifier: $u(t),
        options: e,
      })),
      this.instances.set(t, r),
      this.instancesOptions.set(t, e),
      this.invokeOnInitCallbacks(r, t),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, t, r);
      } catch {}
    return r || null;
  }
  normalizeInstanceIdentifier(t = Dt) {
    return this.component ? (this.component.multipleInstances ? t : Dt) : t;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function $u(n) {
  return n === Dt ? void 0 : n;
}
function zu(n) {
  return n.instantiationMode === "EAGER";
}
/**
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
 */ class Ku {
  constructor(t) {
    (this.name = t), (this.providers = new Map());
  }
  addComponent(t) {
    const e = this.getProvider(t.name);
    if (e.isComponentSet())
      throw new Error(
        `Component ${t.name} has already been registered with ${this.name}`,
      );
    e.setComponent(t);
  }
  addOrOverwriteComponent(t) {
    this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name),
      this.addComponent(t);
  }
  getProvider(t) {
    if (this.providers.has(t)) return this.providers.get(t);
    const e = new ju(t, this);
    return this.providers.set(t, e), e;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
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
 */ var R;
(function (n) {
  (n[(n.DEBUG = 0)] = "DEBUG"),
    (n[(n.VERBOSE = 1)] = "VERBOSE"),
    (n[(n.INFO = 2)] = "INFO"),
    (n[(n.WARN = 3)] = "WARN"),
    (n[(n.ERROR = 4)] = "ERROR"),
    (n[(n.SILENT = 5)] = "SILENT");
})(R || (R = {}));
const Gu = {
    debug: R.DEBUG,
    verbose: R.VERBOSE,
    info: R.INFO,
    warn: R.WARN,
    error: R.ERROR,
    silent: R.SILENT,
  },
  Qu = R.INFO,
  Hu = {
    [R.DEBUG]: "log",
    [R.VERBOSE]: "log",
    [R.INFO]: "info",
    [R.WARN]: "warn",
    [R.ERROR]: "error",
  },
  Wu = (n, t, ...e) => {
    if (t < n.logLevel) return;
    const r = new Date().toISOString(),
      s = Hu[t];
    if (s) console[s](`[${r}]  ${n.name}:`, ...e);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${t})`,
      );
  };
class po {
  constructor(t) {
    (this.name = t),
      (this._logLevel = Qu),
      (this._logHandler = Wu),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(t) {
    if (!(t in R))
      throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);
    this._logLevel = t;
  }
  setLogLevel(t) {
    this._logLevel = typeof t == "string" ? Gu[t] : t;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(t) {
    if (typeof t != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = t;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(t) {
    this._userLogHandler = t;
  }
  debug(...t) {
    this._userLogHandler && this._userLogHandler(this, R.DEBUG, ...t),
      this._logHandler(this, R.DEBUG, ...t);
  }
  log(...t) {
    this._userLogHandler && this._userLogHandler(this, R.VERBOSE, ...t),
      this._logHandler(this, R.VERBOSE, ...t);
  }
  info(...t) {
    this._userLogHandler && this._userLogHandler(this, R.INFO, ...t),
      this._logHandler(this, R.INFO, ...t);
  }
  warn(...t) {
    this._userLogHandler && this._userLogHandler(this, R.WARN, ...t),
      this._logHandler(this, R.WARN, ...t);
  }
  error(...t) {
    this._userLogHandler && this._userLogHandler(this, R.ERROR, ...t),
      this._logHandler(this, R.ERROR, ...t);
  }
}
const Yu = (n, t) => t.some((e) => n instanceof e);
let si, ii;
function Xu() {
  return (
    si ||
    (si = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function Ju() {
  return (
    ii ||
    (ii = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const go = new WeakMap(),
  Ar = new WeakMap(),
  mo = new WeakMap(),
  or = new WeakMap(),
  rs = new WeakMap();
function Zu(n) {
  const t = new Promise((e, r) => {
    const s = () => {
        n.removeEventListener("success", i), n.removeEventListener("error", o);
      },
      i = () => {
        e(It(n.result)), s();
      },
      o = () => {
        r(n.error), s();
      };
    n.addEventListener("success", i), n.addEventListener("error", o);
  });
  return (
    t
      .then((e) => {
        e instanceof IDBCursor && go.set(e, n);
      })
      .catch(() => {}),
    rs.set(t, n),
    t
  );
}
function th(n) {
  if (Ar.has(n)) return;
  const t = new Promise((e, r) => {
    const s = () => {
        n.removeEventListener("complete", i),
          n.removeEventListener("error", o),
          n.removeEventListener("abort", o);
      },
      i = () => {
        e(), s();
      },
      o = () => {
        r(n.error || new DOMException("AbortError", "AbortError")), s();
      };
    n.addEventListener("complete", i),
      n.addEventListener("error", o),
      n.addEventListener("abort", o);
  });
  Ar.set(n, t);
}
let Rr = {
  get(n, t, e) {
    if (n instanceof IDBTransaction) {
      if (t === "done") return Ar.get(n);
      if (t === "objectStoreNames") return n.objectStoreNames || mo.get(n);
      if (t === "store")
        return e.objectStoreNames[1]
          ? void 0
          : e.objectStore(e.objectStoreNames[0]);
    }
    return It(n[t]);
  },
  set(n, t, e) {
    return (n[t] = e), !0;
  },
  has(n, t) {
    return n instanceof IDBTransaction && (t === "done" || t === "store")
      ? !0
      : t in n;
  },
};
function eh(n) {
  Rr = n(Rr);
}
function nh(n) {
  return n === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (t, ...e) {
        const r = n.call(ar(this), t, ...e);
        return mo.set(r, t.sort ? t.sort() : [t]), It(r);
      }
    : Ju().includes(n)
      ? function (...t) {
          return n.apply(ar(this), t), It(go.get(this));
        }
      : function (...t) {
          return It(n.apply(ar(this), t));
        };
}
function rh(n) {
  return typeof n == "function"
    ? nh(n)
    : (n instanceof IDBTransaction && th(n),
      Yu(n, Xu()) ? new Proxy(n, Rr) : n);
}
function It(n) {
  if (n instanceof IDBRequest) return Zu(n);
  if (or.has(n)) return or.get(n);
  const t = rh(n);
  return t !== n && (or.set(n, t), rs.set(t, n)), t;
}
const ar = (n) => rs.get(n);
function sh(n, t, { blocked: e, upgrade: r, blocking: s, terminated: i } = {}) {
  const o = indexedDB.open(n, t),
    a = It(o);
  return (
    r &&
      o.addEventListener("upgradeneeded", (u) => {
        r(It(o.result), u.oldVersion, u.newVersion, It(o.transaction), u);
      }),
    e && o.addEventListener("blocked", (u) => e(u.oldVersion, u.newVersion, u)),
    a
      .then((u) => {
        i && u.addEventListener("close", () => i()),
          s &&
            u.addEventListener("versionchange", (h) =>
              s(h.oldVersion, h.newVersion, h),
            );
      })
      .catch(() => {}),
    a
  );
}
const ih = ["get", "getKey", "getAll", "getAllKeys", "count"],
  oh = ["put", "add", "delete", "clear"],
  ur = new Map();
function oi(n, t) {
  if (!(n instanceof IDBDatabase && !(t in n) && typeof t == "string")) return;
  if (ur.get(t)) return ur.get(t);
  const e = t.replace(/FromIndex$/, ""),
    r = t !== e,
    s = oh.includes(e);
  if (
    !(e in (r ? IDBIndex : IDBObjectStore).prototype) ||
    !(s || ih.includes(e))
  )
    return;
  const i = async function (o, ...a) {
    const u = this.transaction(o, s ? "readwrite" : "readonly");
    let h = u.store;
    return (
      r && (h = h.index(a.shift())),
      (await Promise.all([h[e](...a), s && u.done]))[0]
    );
  };
  return ur.set(t, i), i;
}
eh((n) => ({
  ...n,
  get: (t, e, r) => oi(t, e) || n.get(t, e, r),
  has: (t, e) => !!oi(t, e) || n.has(t, e),
}));
/**
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
 */ class ah {
  constructor(t) {
    this.container = t;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((e) => {
        if (uh(e)) {
          const r = e.getImmediate();
          return `${r.library}/${r.version}`;
        } else return null;
      })
      .filter((e) => e)
      .join(" ");
  }
}
function uh(n) {
  const t = n.getComponent();
  return t?.type === "VERSION";
}
const Sr = "@firebase/app",
  ai = "0.9.26";
/**
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
 */ const Ft = new po("@firebase/app"),
  hh = "@firebase/app-compat",
  ch = "@firebase/analytics-compat",
  lh = "@firebase/analytics",
  dh = "@firebase/app-check-compat",
  fh = "@firebase/app-check",
  ph = "@firebase/auth",
  gh = "@firebase/auth-compat",
  mh = "@firebase/database",
  _h = "@firebase/database-compat",
  yh = "@firebase/functions",
  Eh = "@firebase/functions-compat",
  vh = "@firebase/installations",
  Th = "@firebase/installations-compat",
  Ih = "@firebase/messaging",
  wh = "@firebase/messaging-compat",
  Ah = "@firebase/performance",
  Rh = "@firebase/performance-compat",
  Sh = "@firebase/remote-config",
  Ch = "@firebase/remote-config-compat",
  Ph = "@firebase/storage",
  Vh = "@firebase/storage-compat",
  Dh = "@firebase/firestore",
  bh = "@firebase/firestore-compat",
  Nh = "firebase",
  kh = "10.7.2";
/**
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
 */ const Cr = "[DEFAULT]",
  Oh = {
    [Sr]: "fire-core",
    [hh]: "fire-core-compat",
    [lh]: "fire-analytics",
    [ch]: "fire-analytics-compat",
    [fh]: "fire-app-check",
    [dh]: "fire-app-check-compat",
    [ph]: "fire-auth",
    [gh]: "fire-auth-compat",
    [mh]: "fire-rtdb",
    [_h]: "fire-rtdb-compat",
    [yh]: "fire-fn",
    [Eh]: "fire-fn-compat",
    [vh]: "fire-iid",
    [Th]: "fire-iid-compat",
    [Ih]: "fire-fcm",
    [wh]: "fire-fcm-compat",
    [Ah]: "fire-perf",
    [Rh]: "fire-perf-compat",
    [Sh]: "fire-rc",
    [Ch]: "fire-rc-compat",
    [Ph]: "fire-gcs",
    [Vh]: "fire-gcs-compat",
    [Dh]: "fire-fst",
    [bh]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Nh]: "fire-js-all",
  };
/**
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
 */ const Tn = new Map(),
  Pr = new Map();
function xh(n, t) {
  try {
    n.container.addComponent(t);
  } catch (e) {
    Ft.debug(
      `Component ${t.name} failed to register with FirebaseApp ${n.name}`,
      e,
    );
  }
}
function In(n) {
  const t = n.name;
  if (Pr.has(t))
    return (
      Ft.debug(`There were multiple attempts to register component ${t}.`), !1
    );
  Pr.set(t, n);
  for (const e of Tn.values()) xh(e, n);
  return !0;
}
function Mh(n, t) {
  const e = n.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return e && e.triggerHeartbeat(), n.container.getProvider(t);
}
/**
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
 */ const Lh = {
    "no-app":
      "No Firebase App '{$appName}' has been created - call initializeApp() first",
    "bad-app-name": "Illegal App name: '{$appName}",
    "duplicate-app":
      "Firebase App named '{$appName}' already exists with different options or config",
    "app-deleted": "Firebase App named '{$appName}' already deleted",
    "no-options":
      "Need to provide options, when not being deployed to hosting via source.",
    "invalid-app-argument":
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    "invalid-log-argument":
      "First argument to `onLog` must be null or a function.",
    "idb-open":
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-get":
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-set":
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    "idb-delete":
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  wt = new fo("app", "Firebase", Lh);
/**
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
 */ class Fh {
  constructor(t, e, r) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, t)),
      (this._config = Object.assign({}, e)),
      (this._name = e.name),
      (this._automaticDataCollectionEnabled = e.automaticDataCollectionEnabled),
      (this._container = r),
      this.container.addComponent(new Ve("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(t) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = t);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(t) {
    this._isDeleted = t;
  }
  checkDestroyed() {
    if (this.isDeleted) throw wt.create("app-deleted", { appName: this._name });
  }
}
/**
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
 */ const Uh = kh;
function Bh(n, t = {}) {
  let e = n;
  typeof t != "object" && (t = { name: t });
  const r = Object.assign({ name: Cr, automaticDataCollectionEnabled: !1 }, t),
    s = r.name;
  if (typeof s != "string" || !s)
    throw wt.create("bad-app-name", { appName: String(s) });
  if ((e || (e = co()), !e)) throw wt.create("no-options");
  const i = Tn.get(s);
  if (i) {
    if (wr(e, i.options) && wr(r, i.config)) return i;
    throw wt.create("duplicate-app", { appName: s });
  }
  const o = new Ku(s);
  for (const u of Pr.values()) o.addComponent(u);
  const a = new Fh(e, r, o);
  return Tn.set(s, a), a;
}
function qh(n = Cr) {
  const t = Tn.get(n);
  if (!t && n === Cr && co()) return Bh();
  if (!t) throw wt.create("no-app", { appName: n });
  return t;
}
function Wt(n, t, e) {
  var r;
  let s = (r = Oh[n]) !== null && r !== void 0 ? r : n;
  e && (s += `-${e}`);
  const i = s.match(/\s|\//),
    o = t.match(/\s|\//);
  if (i || o) {
    const a = [`Unable to register library "${s}" with version "${t}":`];
    i &&
      a.push(
        `library name "${s}" contains illegal characters (whitespace or "/")`,
      ),
      i && o && a.push("and"),
      o &&
        a.push(
          `version name "${t}" contains illegal characters (whitespace or "/")`,
        ),
      Ft.warn(a.join(" "));
    return;
  }
  In(new Ve(`${s}-version`, () => ({ library: s, version: t }), "VERSION"));
}
/**
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
 */ const jh = "firebase-heartbeat-database",
  $h = 1,
  De = "firebase-heartbeat-store";
let hr = null;
function _o() {
  return (
    hr ||
      (hr = sh(jh, $h, {
        upgrade: (n, t) => {
          switch (t) {
            case 0:
              try {
                n.createObjectStore(De);
              } catch (e) {
                console.warn(e);
              }
          }
        },
      }).catch((n) => {
        throw wt.create("idb-open", { originalErrorMessage: n.message });
      })),
    hr
  );
}
async function zh(n) {
  try {
    return await (await _o()).transaction(De).objectStore(De).get(yo(n));
  } catch (t) {
    if (t instanceof he) Ft.warn(t.message);
    else {
      const e = wt.create("idb-get", { originalErrorMessage: t?.message });
      Ft.warn(e.message);
    }
  }
}
async function ui(n, t) {
  try {
    const r = (await _o()).transaction(De, "readwrite");
    await r.objectStore(De).put(t, yo(n)), await r.done;
  } catch (e) {
    if (e instanceof he) Ft.warn(e.message);
    else {
      const r = wt.create("idb-set", { originalErrorMessage: e?.message });
      Ft.warn(r.message);
    }
  }
}
function yo(n) {
  return `${n.name}!${n.options.appId}`;
}
/**
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
 */ const Kh = 1024,
  Gh = 30 * 24 * 60 * 60 * 1e3;
class Qh {
  constructor(t) {
    (this.container = t), (this._heartbeatsCache = null);
    const e = this.container.getProvider("app").getImmediate();
    (this._storage = new Wh(e)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((r) => ((this._heartbeatsCache = r), r)));
  }
  async triggerHeartbeat() {
    var t, e;
    const s = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      i = hi();
    if (
      !(
        ((t = this._heartbeatsCache) === null || t === void 0
          ? void 0
          : t.heartbeats) == null &&
        ((this._heartbeatsCache = await this._heartbeatsCachePromise),
        ((e = this._heartbeatsCache) === null || e === void 0
          ? void 0
          : e.heartbeats) == null)
      ) &&
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === i ||
        this._heartbeatsCache.heartbeats.some((o) => o.date === i)
      )
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: i, agent: s }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((o) => {
            const a = new Date(o.date).valueOf();
            return Date.now() - a <= Gh;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    var t;
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      ((t = this._heartbeatsCache) === null || t === void 0
        ? void 0
        : t.heartbeats) == null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = hi(),
      { heartbeatsToSend: r, unsentEntries: s } = Hh(
        this._heartbeatsCache.heartbeats,
      ),
      i = yn(JSON.stringify({ version: 2, heartbeats: r }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      s.length > 0
        ? ((this._heartbeatsCache.heartbeats = s),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      i
    );
  }
}
function hi() {
  return new Date().toISOString().substring(0, 10);
}
function Hh(n, t = Kh) {
  const e = [];
  let r = n.slice();
  for (const s of n) {
    const i = e.find((o) => o.agent === s.agent);
    if (i) {
      if ((i.dates.push(s.date), ci(e) > t)) {
        i.dates.pop();
        break;
      }
    } else if ((e.push({ agent: s.agent, dates: [s.date] }), ci(e) > t)) {
      e.pop();
      break;
    }
    r = r.slice(1);
  }
  return { heartbeatsToSend: e, unsentEntries: r };
}
class Wh {
  constructor(t) {
    (this.app = t),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return lo()
      ? Fu()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    if (await this._canUseIndexedDBPromise) {
      const e = await zh(this.app);
      return e?.heartbeats ? e : { heartbeats: [] };
    } else return { heartbeats: [] };
  }
  async overwrite(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return ui(this.app, {
        lastSentHeartbeatDate:
          (e = t.lastSentHeartbeatDate) !== null && e !== void 0
            ? e
            : s.lastSentHeartbeatDate,
        heartbeats: t.heartbeats,
      });
    } else return;
  }
  async add(t) {
    var e;
    if (await this._canUseIndexedDBPromise) {
      const s = await this.read();
      return ui(this.app, {
        lastSentHeartbeatDate:
          (e = t.lastSentHeartbeatDate) !== null && e !== void 0
            ? e
            : s.lastSentHeartbeatDate,
        heartbeats: [...s.heartbeats, ...t.heartbeats],
      });
    } else return;
  }
}
function ci(n) {
  return yn(JSON.stringify({ version: 2, heartbeats: n })).length;
}
/**
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
 */ function Yh(n) {
  In(new Ve("platform-logger", (t) => new ah(t), "PRIVATE")),
    In(new Ve("heartbeat", (t) => new Qh(t), "PRIVATE")),
    Wt(Sr, ai, n),
    Wt(Sr, ai, "esm2017"),
    Wt("fire-js", "");
}
Yh("");
var Xh =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
        ? window
        : typeof global < "u"
          ? global
          : typeof self < "u"
            ? self
            : {},
  m,
  ss = ss || {},
  v = Xh || self;
function On(n) {
  var t = typeof n;
  return (
    (t = t != "object" ? t : n ? (Array.isArray(n) ? "array" : t) : "null"),
    t == "array" || (t == "object" && typeof n.length == "number")
  );
}
function $e(n) {
  var t = typeof n;
  return (t == "object" && n != null) || t == "function";
}
function Jh(n) {
  return (
    (Object.prototype.hasOwnProperty.call(n, cr) && n[cr]) || (n[cr] = ++Zh)
  );
}
var cr = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Zh = 0;
function tc(n, t, e) {
  return n.call.apply(n.bind, arguments);
}
function ec(n, t, e) {
  if (!n) throw Error();
  if (2 < arguments.length) {
    var r = Array.prototype.slice.call(arguments, 2);
    return function () {
      var s = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(s, r), n.apply(t, s);
    };
  }
  return function () {
    return n.apply(t, arguments);
  };
}
function J(n, t, e) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (J = tc)
      : (J = ec),
    J.apply(null, arguments)
  );
}
function on(n, t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return function () {
    var r = e.slice();
    return r.push.apply(r, arguments), n.apply(this, r);
  };
}
function $(n, t) {
  function e() {}
  (e.prototype = t.prototype),
    (n.$ = t.prototype),
    (n.prototype = new e()),
    (n.prototype.constructor = n),
    (n.ac = function (r, s, i) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return t.prototype[s].apply(r, o);
    });
}
function Pt() {
  (this.s = this.s), (this.o = this.o);
}
var nc = 0;
Pt.prototype.s = !1;
Pt.prototype.sa = function () {
  !this.s && ((this.s = !0), this.N(), nc != 0) && Jh(this);
};
Pt.prototype.N = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const Eo = Array.prototype.indexOf
  ? function (n, t) {
      return Array.prototype.indexOf.call(n, t, void 0);
    }
  : function (n, t) {
      if (typeof n == "string")
        return typeof t != "string" || t.length != 1 ? -1 : n.indexOf(t, 0);
      for (let e = 0; e < n.length; e++) if (e in n && n[e] === t) return e;
      return -1;
    };
function is(n) {
  const t = n.length;
  if (0 < t) {
    const e = Array(t);
    for (let r = 0; r < t; r++) e[r] = n[r];
    return e;
  }
  return [];
}
function li(n, t) {
  for (let e = 1; e < arguments.length; e++) {
    const r = arguments[e];
    if (On(r)) {
      const s = n.length || 0,
        i = r.length || 0;
      n.length = s + i;
      for (let o = 0; o < i; o++) n[s + o] = r[o];
    } else n.push(r);
  }
}
function Z(n, t) {
  (this.type = n), (this.g = this.target = t), (this.defaultPrevented = !1);
}
Z.prototype.h = function () {
  this.defaultPrevented = !0;
};
var rc = (function () {
  if (!v.addEventListener || !Object.defineProperty) return !1;
  var n = !1,
    t = Object.defineProperty({}, "passive", {
      get: function () {
        n = !0;
      },
    });
  try {
    const e = () => {};
    v.addEventListener("test", e, t), v.removeEventListener("test", e, t);
  } catch {}
  return n;
})();
function be(n) {
  return /^[\s\xa0]*$/.test(n);
}
function xn() {
  var n = v.navigator;
  return n && (n = n.userAgent) ? n : "";
}
function ut(n) {
  return xn().indexOf(n) != -1;
}
function os(n) {
  return os[" "](n), n;
}
os[" "] = function () {};
function sc(n, t) {
  var e = Yc;
  return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : (e[n] = t(n));
}
var ic = ut("Opera"),
  ee = ut("Trident") || ut("MSIE"),
  vo = ut("Edge"),
  Vr = vo || ee,
  To =
    ut("Gecko") &&
    !(xn().toLowerCase().indexOf("webkit") != -1 && !ut("Edge")) &&
    !(ut("Trident") || ut("MSIE")) &&
    !ut("Edge"),
  oc = xn().toLowerCase().indexOf("webkit") != -1 && !ut("Edge");
function Io() {
  var n = v.document;
  return n ? n.documentMode : void 0;
}
var Dr;
t: {
  var lr = "",
    dr = (function () {
      var n = xn();
      if (To) return /rv:([^\);]+)(\)|;)/.exec(n);
      if (vo) return /Edge\/([\d\.]+)/.exec(n);
      if (ee) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);
      if (oc) return /WebKit\/(\S+)/.exec(n);
      if (ic) return /(?:Version)[ \/]?(\S+)/.exec(n);
    })();
  if ((dr && (lr = dr ? dr[1] : ""), ee)) {
    var fr = Io();
    if (fr != null && fr > parseFloat(lr)) {
      Dr = String(fr);
      break t;
    }
  }
  Dr = lr;
}
var br;
if (v.document && ee) {
  var di = Io();
  br = di || parseInt(Dr, 10) || void 0;
} else br = void 0;
var ac = br;
function Ne(n, t) {
  if (
    (Z.call(this, n ? n.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    n)
  ) {
    var e = (this.type = n.type),
      r =
        n.changedTouches && n.changedTouches.length
          ? n.changedTouches[0]
          : null;
    if (
      ((this.target = n.target || n.srcElement),
      (this.g = t),
      (t = n.relatedTarget))
    ) {
      if (To) {
        t: {
          try {
            os(t.nodeName);
            var s = !0;
            break t;
          } catch {}
          s = !1;
        }
        s || (t = null);
      }
    } else
      e == "mouseover"
        ? (t = n.fromElement)
        : e == "mouseout" && (t = n.toElement);
    (this.relatedTarget = t),
      r
        ? ((this.clientX = r.clientX !== void 0 ? r.clientX : r.pageX),
          (this.clientY = r.clientY !== void 0 ? r.clientY : r.pageY),
          (this.screenX = r.screenX || 0),
          (this.screenY = r.screenY || 0))
        : ((this.clientX = n.clientX !== void 0 ? n.clientX : n.pageX),
          (this.clientY = n.clientY !== void 0 ? n.clientY : n.pageY),
          (this.screenX = n.screenX || 0),
          (this.screenY = n.screenY || 0)),
      (this.button = n.button),
      (this.key = n.key || ""),
      (this.ctrlKey = n.ctrlKey),
      (this.altKey = n.altKey),
      (this.shiftKey = n.shiftKey),
      (this.metaKey = n.metaKey),
      (this.pointerId = n.pointerId || 0),
      (this.pointerType =
        typeof n.pointerType == "string"
          ? n.pointerType
          : uc[n.pointerType] || ""),
      (this.state = n.state),
      (this.i = n),
      n.defaultPrevented && Ne.$.h.call(this);
  }
}
$(Ne, Z);
var uc = { 2: "touch", 3: "pen", 4: "mouse" };
Ne.prototype.h = function () {
  Ne.$.h.call(this);
  var n = this.i;
  n.preventDefault ? n.preventDefault() : (n.returnValue = !1);
};
var ze = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  hc = 0;
function cc(n, t, e, r, s) {
  (this.listener = n),
    (this.proxy = null),
    (this.src = t),
    (this.type = e),
    (this.capture = !!r),
    (this.la = s),
    (this.key = ++hc),
    (this.fa = this.ia = !1);
}
function Mn(n) {
  (n.fa = !0),
    (n.listener = null),
    (n.proxy = null),
    (n.src = null),
    (n.la = null);
}
function as(n, t, e) {
  for (const r in n) t.call(e, n[r], r, n);
}
function lc(n, t) {
  for (const e in n) t.call(void 0, n[e], e, n);
}
function wo(n) {
  const t = {};
  for (const e in n) t[e] = n[e];
  return t;
}
const fi =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " ",
  );
function Ao(n, t) {
  let e, r;
  for (let s = 1; s < arguments.length; s++) {
    r = arguments[s];
    for (e in r) n[e] = r[e];
    for (let i = 0; i < fi.length; i++)
      (e = fi[i]), Object.prototype.hasOwnProperty.call(r, e) && (n[e] = r[e]);
  }
}
function Ln(n) {
  (this.src = n), (this.g = {}), (this.h = 0);
}
Ln.prototype.add = function (n, t, e, r, s) {
  var i = n.toString();
  (n = this.g[i]), n || ((n = this.g[i] = []), this.h++);
  var o = kr(n, t, r, s);
  return (
    -1 < o
      ? ((t = n[o]), e || (t.ia = !1))
      : ((t = new cc(t, this.src, i, !!r, s)), (t.ia = e), n.push(t)),
    t
  );
};
function Nr(n, t) {
  var e = t.type;
  if (e in n.g) {
    var r = n.g[e],
      s = Eo(r, t),
      i;
    (i = 0 <= s) && Array.prototype.splice.call(r, s, 1),
      i && (Mn(t), n.g[e].length == 0 && (delete n.g[e], n.h--));
  }
}
function kr(n, t, e, r) {
  for (var s = 0; s < n.length; ++s) {
    var i = n[s];
    if (!i.fa && i.listener == t && i.capture == !!e && i.la == r) return s;
  }
  return -1;
}
var us = "closure_lm_" + ((1e6 * Math.random()) | 0),
  pr = {};
function Ro(n, t, e, r, s) {
  if (r && r.once) return Co(n, t, e, r, s);
  if (Array.isArray(t)) {
    for (var i = 0; i < t.length; i++) Ro(n, t[i], e, r, s);
    return null;
  }
  return (
    (e = ls(e)),
    n && n[ze] ? n.O(t, e, $e(r) ? !!r.capture : !!r, s) : So(n, t, e, !1, r, s)
  );
}
function So(n, t, e, r, s, i) {
  if (!t) throw Error("Invalid event type");
  var o = $e(s) ? !!s.capture : !!s,
    a = cs(n);
  if ((a || (n[us] = a = new Ln(n)), (e = a.add(t, e, r, o, i)), e.proxy))
    return e;
  if (
    ((r = dc()),
    (e.proxy = r),
    (r.src = n),
    (r.listener = e),
    n.addEventListener)
  )
    rc || (s = o),
      s === void 0 && (s = !1),
      n.addEventListener(t.toString(), r, s);
  else if (n.attachEvent) n.attachEvent(Vo(t.toString()), r);
  else if (n.addListener && n.removeListener) n.addListener(r);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return e;
}
function dc() {
  function n(e) {
    return t.call(n.src, n.listener, e);
  }
  const t = fc;
  return n;
}
function Co(n, t, e, r, s) {
  if (Array.isArray(t)) {
    for (var i = 0; i < t.length; i++) Co(n, t[i], e, r, s);
    return null;
  }
  return (
    (e = ls(e)),
    n && n[ze] ? n.P(t, e, $e(r) ? !!r.capture : !!r, s) : So(n, t, e, !0, r, s)
  );
}
function Po(n, t, e, r, s) {
  if (Array.isArray(t)) for (var i = 0; i < t.length; i++) Po(n, t[i], e, r, s);
  else
    (r = $e(r) ? !!r.capture : !!r),
      (e = ls(e)),
      n && n[ze]
        ? ((n = n.i),
          (t = String(t).toString()),
          t in n.g &&
            ((i = n.g[t]),
            (e = kr(i, e, r, s)),
            -1 < e &&
              (Mn(i[e]),
              Array.prototype.splice.call(i, e, 1),
              i.length == 0 && (delete n.g[t], n.h--))))
        : n &&
          (n = cs(n)) &&
          ((t = n.g[t.toString()]),
          (n = -1),
          t && (n = kr(t, e, r, s)),
          (e = -1 < n ? t[n] : null) && hs(e));
}
function hs(n) {
  if (typeof n != "number" && n && !n.fa) {
    var t = n.src;
    if (t && t[ze]) Nr(t.i, n);
    else {
      var e = n.type,
        r = n.proxy;
      t.removeEventListener
        ? t.removeEventListener(e, r, n.capture)
        : t.detachEvent
          ? t.detachEvent(Vo(e), r)
          : t.addListener && t.removeListener && t.removeListener(r),
        (e = cs(t))
          ? (Nr(e, n), e.h == 0 && ((e.src = null), (t[us] = null)))
          : Mn(n);
    }
  }
}
function Vo(n) {
  return n in pr ? pr[n] : (pr[n] = "on" + n);
}
function fc(n, t) {
  if (n.fa) n = !0;
  else {
    t = new Ne(t, this);
    var e = n.listener,
      r = n.la || n.src;
    n.ia && hs(n), (n = e.call(r, t));
  }
  return n;
}
function cs(n) {
  return (n = n[us]), n instanceof Ln ? n : null;
}
var gr = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function ls(n) {
  return typeof n == "function"
    ? n
    : (n[gr] ||
        (n[gr] = function (t) {
          return n.handleEvent(t);
        }),
      n[gr]);
}
function j() {
  Pt.call(this), (this.i = new Ln(this)), (this.S = this), (this.J = null);
}
$(j, Pt);
j.prototype[ze] = !0;
j.prototype.removeEventListener = function (n, t, e, r) {
  Po(this, n, t, e, r);
};
function G(n, t) {
  var e,
    r = n.J;
  if (r) for (e = []; r; r = r.J) e.push(r);
  if (((n = n.S), (r = t.type || t), typeof t == "string")) t = new Z(t, n);
  else if (t instanceof Z) t.target = t.target || n;
  else {
    var s = t;
    (t = new Z(r, n)), Ao(t, s);
  }
  if (((s = !0), e))
    for (var i = e.length - 1; 0 <= i; i--) {
      var o = (t.g = e[i]);
      s = an(o, r, !0, t) && s;
    }
  if (
    ((o = t.g = n), (s = an(o, r, !0, t) && s), (s = an(o, r, !1, t) && s), e)
  )
    for (i = 0; i < e.length; i++) (o = t.g = e[i]), (s = an(o, r, !1, t) && s);
}
j.prototype.N = function () {
  if ((j.$.N.call(this), this.i)) {
    var n = this.i,
      t;
    for (t in n.g) {
      for (var e = n.g[t], r = 0; r < e.length; r++) Mn(e[r]);
      delete n.g[t], n.h--;
    }
  }
  this.J = null;
};
j.prototype.O = function (n, t, e, r) {
  return this.i.add(String(n), t, !1, e, r);
};
j.prototype.P = function (n, t, e, r) {
  return this.i.add(String(n), t, !0, e, r);
};
function an(n, t, e, r) {
  if (((t = n.i.g[String(t)]), !t)) return !0;
  t = t.concat();
  for (var s = !0, i = 0; i < t.length; ++i) {
    var o = t[i];
    if (o && !o.fa && o.capture == e) {
      var a = o.listener,
        u = o.la || o.src;
      o.ia && Nr(n.i, o), (s = a.call(u, r) !== !1 && s);
    }
  }
  return s && !r.defaultPrevented;
}
var ds = v.JSON.stringify;
class pc {
  constructor(t, e) {
    (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
}
function gc() {
  var n = fs;
  let t = null;
  return (
    n.g && ((t = n.g), (n.g = n.g.next), n.g || (n.h = null), (t.next = null)),
    t
  );
}
class mc {
  constructor() {
    this.h = this.g = null;
  }
  add(t, e) {
    const r = Do.get();
    r.set(t, e), this.h ? (this.h.next = r) : (this.g = r), (this.h = r);
  }
}
var Do = new pc(
  () => new _c(),
  (n) => n.reset(),
);
class _c {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(t, e) {
    (this.h = t), (this.g = e), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function yc(n) {
  var t = 1;
  n = n.split(":");
  const e = [];
  for (; 0 < t && n.length; ) e.push(n.shift()), t--;
  return n.length && e.push(n.join(":")), e;
}
function Ec(n) {
  v.setTimeout(() => {
    throw n;
  }, 0);
}
let ke,
  Oe = !1,
  fs = new mc(),
  bo = () => {
    const n = v.Promise.resolve(void 0);
    ke = () => {
      n.then(vc);
    };
  };
var vc = () => {
  for (var n; (n = gc()); ) {
    try {
      n.h.call(n.g);
    } catch (e) {
      Ec(e);
    }
    var t = Do;
    t.j(n), 100 > t.h && (t.h++, (n.next = t.g), (t.g = n));
  }
  Oe = !1;
};
function Fn(n, t) {
  j.call(this),
    (this.h = n || 1),
    (this.g = t || v),
    (this.j = J(this.qb, this)),
    (this.l = Date.now());
}
$(Fn, j);
m = Fn.prototype;
m.ga = !1;
m.T = null;
m.qb = function () {
  if (this.ga) {
    var n = Date.now() - this.l;
    0 < n && n < 0.8 * this.h
      ? (this.T = this.g.setTimeout(this.j, this.h - n))
      : (this.T && (this.g.clearTimeout(this.T), (this.T = null)),
        G(this, "tick"),
        this.ga && (ps(this), this.start()));
  }
};
m.start = function () {
  (this.ga = !0),
    this.T ||
      ((this.T = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function ps(n) {
  (n.ga = !1), n.T && (n.g.clearTimeout(n.T), (n.T = null));
}
m.N = function () {
  Fn.$.N.call(this), ps(this), delete this.g;
};
function gs(n, t, e) {
  if (typeof n == "function") e && (n = J(n, e));
  else if (n && typeof n.handleEvent == "function") n = J(n.handleEvent, n);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(t) ? -1 : v.setTimeout(n, t || 0);
}
function No(n) {
  n.g = gs(() => {
    (n.g = null), n.i && ((n.i = !1), No(n));
  }, n.j);
  const t = n.h;
  (n.h = null), n.m.apply(null, t);
}
class Tc extends Pt {
  constructor(t, e) {
    super(),
      (this.m = t),
      (this.j = e),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(t) {
    (this.h = arguments), this.g ? (this.i = !0) : No(this);
  }
  N() {
    super.N(),
      this.g &&
        (v.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function xe(n) {
  Pt.call(this), (this.h = n), (this.g = {});
}
$(xe, Pt);
var pi = [];
function ko(n, t, e, r) {
  Array.isArray(e) || (e && (pi[0] = e.toString()), (e = pi));
  for (var s = 0; s < e.length; s++) {
    var i = Ro(t, e[s], r || n.handleEvent, !1, n.h || n);
    if (!i) break;
    n.g[i.key] = i;
  }
}
function Oo(n) {
  as(
    n.g,
    function (t, e) {
      this.g.hasOwnProperty(e) && hs(t);
    },
    n,
  ),
    (n.g = {});
}
xe.prototype.N = function () {
  xe.$.N.call(this), Oo(this);
};
xe.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function Un() {
  this.g = !0;
}
Un.prototype.Ea = function () {
  this.g = !1;
};
function Ic(n, t, e, r, s, i) {
  n.info(function () {
    if (n.g)
      if (i)
        for (var o = "", a = i.split("&"), u = 0; u < a.length; u++) {
          var h = a[u].split("=");
          if (1 < h.length) {
            var c = h[0];
            h = h[1];
            var l = c.split("_");
            o =
              2 <= l.length && l[1] == "type"
                ? o + (c + "=" + h + "&")
                : o + (c + "=redacted&");
          }
        }
      else o = null;
    else o = i;
    return (
      "XMLHTTP REQ (" +
      r +
      ") [attempt " +
      s +
      "]: " +
      t +
      `
` +
      e +
      `
` +
      o
    );
  });
}
function wc(n, t, e, r, s, i, o) {
  n.info(function () {
    return (
      "XMLHTTP RESP (" +
      r +
      ") [ attempt " +
      s +
      "]: " +
      t +
      `
` +
      e +
      `
` +
      i +
      " " +
      o
    );
  });
}
function Ht(n, t, e, r) {
  n.info(function () {
    return "XMLHTTP TEXT (" + t + "): " + Rc(n, e) + (r ? " " + r : "");
  });
}
function Ac(n, t) {
  n.info(function () {
    return "TIMEOUT: " + t;
  });
}
Un.prototype.info = function () {};
function Rc(n, t) {
  if (!n.g) return t;
  if (!t) return null;
  try {
    var e = JSON.parse(t);
    if (e) {
      for (n = 0; n < e.length; n++)
        if (Array.isArray(e[n])) {
          var r = e[n];
          if (!(2 > r.length)) {
            var s = r[1];
            if (Array.isArray(s) && !(1 > s.length)) {
              var i = s[0];
              if (i != "noop" && i != "stop" && i != "close")
                for (var o = 1; o < s.length; o++) s[o] = "";
            }
          }
        }
    }
    return ds(e);
  } catch {
    return t;
  }
}
var jt = {},
  gi = null;
function Bn() {
  return (gi = gi || new j());
}
jt.Ta = "serverreachability";
function xo(n) {
  Z.call(this, jt.Ta, n);
}
$(xo, Z);
function Me(n) {
  const t = Bn();
  G(t, new xo(t));
}
jt.STAT_EVENT = "statevent";
function Mo(n, t) {
  Z.call(this, jt.STAT_EVENT, n), (this.stat = t);
}
$(Mo, Z);
function et(n) {
  const t = Bn();
  G(t, new Mo(t, n));
}
jt.Ua = "timingevent";
function Lo(n, t) {
  Z.call(this, jt.Ua, n), (this.size = t);
}
$(Lo, Z);
function Ke(n, t) {
  if (typeof n != "function")
    throw Error("Fn must not be null and must be a function");
  return v.setTimeout(function () {
    n();
  }, t);
}
var qn = {
    NO_ERROR: 0,
    rb: 1,
    Eb: 2,
    Db: 3,
    yb: 4,
    Cb: 5,
    Fb: 6,
    Qa: 7,
    TIMEOUT: 8,
    Ib: 9,
  },
  Fo = {
    wb: "complete",
    Sb: "success",
    Ra: "error",
    Qa: "abort",
    Kb: "ready",
    Lb: "readystatechange",
    TIMEOUT: "timeout",
    Gb: "incrementaldata",
    Jb: "progress",
    zb: "downloadprogress",
    $b: "uploadprogress",
  };
function ms() {}
ms.prototype.h = null;
function mi(n) {
  return n.h || (n.h = n.i());
}
function Uo() {}
var Ge = { OPEN: "a", vb: "b", Ra: "c", Hb: "d" };
function _s() {
  Z.call(this, "d");
}
$(_s, Z);
function ys() {
  Z.call(this, "c");
}
$(ys, Z);
var Or;
function jn() {}
$(jn, ms);
jn.prototype.g = function () {
  return new XMLHttpRequest();
};
jn.prototype.i = function () {
  return {};
};
Or = new jn();
function Qe(n, t, e, r) {
  (this.l = n),
    (this.j = t),
    (this.m = e),
    (this.W = r || 1),
    (this.U = new xe(this)),
    (this.P = Sc),
    (n = Vr ? 125 : void 0),
    (this.V = new Fn(n)),
    (this.I = null),
    (this.i = !1),
    (this.u = this.B = this.A = this.L = this.G = this.Y = this.C = null),
    (this.F = []),
    (this.g = null),
    (this.o = 0),
    (this.s = this.v = null),
    (this.ca = -1),
    (this.J = !1),
    (this.O = 0),
    (this.M = null),
    (this.ba = this.K = this.aa = this.S = !1),
    (this.h = new Bo());
}
function Bo() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var Sc = 45e3,
  qo = {},
  xr = {};
m = Qe.prototype;
m.setTimeout = function (n) {
  this.P = n;
};
function Mr(n, t, e) {
  (n.L = 1), (n.A = zn(yt(t))), (n.u = e), (n.S = !0), jo(n, null);
}
function jo(n, t) {
  (n.G = Date.now()), He(n), (n.B = yt(n.A));
  var e = n.B,
    r = n.W;
  Array.isArray(r) || (r = [String(r)]),
    Yo(e.i, "t", r),
    (n.o = 0),
    (e = n.l.J),
    (n.h = new Bo()),
    (n.g = _a(n.l, e ? t : null, !n.u)),
    0 < n.O && (n.M = new Tc(J(n.Pa, n, n.g), n.O)),
    ko(n.U, n.g, "readystatechange", n.nb),
    (t = n.I ? wo(n.I) : {}),
    n.u
      ? (n.v || (n.v = "POST"),
        (t["Content-Type"] = "application/x-www-form-urlencoded"),
        n.g.ha(n.B, n.v, n.u, t))
      : ((n.v = "GET"), n.g.ha(n.B, n.v, null, t)),
    Me(),
    Ic(n.j, n.v, n.B, n.m, n.W, n.u);
}
m.nb = function (n) {
  n = n.target;
  const t = this.M;
  t && ct(n) == 3 ? t.l() : this.Pa(n);
};
m.Pa = function (n) {
  try {
    if (n == this.g)
      t: {
        const c = ct(this.g);
        var t = this.g.Ia();
        const l = this.g.da();
        if (
          !(3 > c) &&
          (c != 3 || Vr || (this.g && (this.h.h || this.g.ja() || vi(this.g))))
        ) {
          this.J || c != 4 || t == 7 || (t == 8 || 0 >= l ? Me(3) : Me(2)),
            $n(this);
          var e = this.g.da();
          this.ca = e;
          e: if ($o(this)) {
            var r = vi(this.g);
            n = "";
            var s = r.length,
              i = ct(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Nt(this), we(this);
                var o = "";
                break e;
              }
              this.h.i = new v.TextDecoder();
            }
            for (t = 0; t < s; t++)
              (this.h.h = !0),
                (n += this.h.i.decode(r[t], { stream: i && t == s - 1 }));
            (r.length = 0), (this.h.g += n), (this.o = 0), (o = this.h.g);
          } else o = this.g.ja();
          if (
            ((this.i = e == 200),
            wc(this.j, this.v, this.B, this.m, this.W, c, e),
            this.i)
          ) {
            if (this.aa && !this.K) {
              e: {
                if (this.g) {
                  var a,
                    u = this.g;
                  if (
                    (a = u.g
                      ? u.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !be(a)
                  ) {
                    var h = a;
                    break e;
                  }
                }
                h = null;
              }
              if ((e = h))
                Ht(
                  this.j,
                  this.m,
                  e,
                  "Initial handshake response via X-HTTP-Initial-Response",
                ),
                  (this.K = !0),
                  Lr(this, e);
              else {
                (this.i = !1), (this.s = 3), et(12), Nt(this), we(this);
                break t;
              }
            }
            this.S
              ? (zo(this, c, o),
                Vr &&
                  this.i &&
                  c == 3 &&
                  (ko(this.U, this.V, "tick", this.mb), this.V.start()))
              : (Ht(this.j, this.m, o, null), Lr(this, o)),
              c == 4 && Nt(this),
              this.i &&
                !this.J &&
                (c == 4 ? fa(this.l, this) : ((this.i = !1), He(this)));
          } else
            Qc(this.g),
              e == 400 && 0 < o.indexOf("Unknown SID")
                ? ((this.s = 3), et(12))
                : ((this.s = 0), et(13)),
              Nt(this),
              we(this);
        }
      }
  } catch {
  } finally {
  }
};
function $o(n) {
  return n.g ? n.v == "GET" && n.L != 2 && n.l.Ha : !1;
}
function zo(n, t, e) {
  let r = !0,
    s;
  for (; !n.J && n.o < e.length; )
    if (((s = Cc(n, e)), s == xr)) {
      t == 4 && ((n.s = 4), et(14), (r = !1)),
        Ht(n.j, n.m, null, "[Incomplete Response]");
      break;
    } else if (s == qo) {
      (n.s = 4), et(15), Ht(n.j, n.m, e, "[Invalid Chunk]"), (r = !1);
      break;
    } else Ht(n.j, n.m, s, null), Lr(n, s);
  $o(n) && n.o != 0 && ((n.h.g = n.h.g.slice(n.o)), (n.o = 0)),
    t != 4 || e.length != 0 || n.h.h || ((n.s = 1), et(16), (r = !1)),
    (n.i = n.i && r),
    r
      ? 0 < e.length &&
        !n.ba &&
        ((n.ba = !0),
        (t = n.l),
        t.g == n &&
          t.ca &&
          !t.M &&
          (t.l.info(
            "Great, no buffering proxy detected. Bytes received: " + e.length,
          ),
          As(t),
          (t.M = !0),
          et(11)))
      : (Ht(n.j, n.m, e, "[Invalid Chunked Response]"), Nt(n), we(n));
}
m.mb = function () {
  if (this.g) {
    var n = ct(this.g),
      t = this.g.ja();
    this.o < t.length &&
      ($n(this), zo(this, n, t), this.i && n != 4 && He(this));
  }
};
function Cc(n, t) {
  var e = n.o,
    r = t.indexOf(
      `
`,
      e,
    );
  return r == -1
    ? xr
    : ((e = Number(t.substring(e, r))),
      isNaN(e)
        ? qo
        : ((r += 1),
          r + e > t.length ? xr : ((t = t.slice(r, r + e)), (n.o = r + e), t)));
}
m.cancel = function () {
  (this.J = !0), Nt(this);
};
function He(n) {
  (n.Y = Date.now() + n.P), Ko(n, n.P);
}
function Ko(n, t) {
  if (n.C != null) throw Error("WatchDog timer not null");
  n.C = Ke(J(n.lb, n), t);
}
function $n(n) {
  n.C && (v.clearTimeout(n.C), (n.C = null));
}
m.lb = function () {
  this.C = null;
  const n = Date.now();
  0 <= n - this.Y
    ? (Ac(this.j, this.B),
      this.L != 2 && (Me(), et(17)),
      Nt(this),
      (this.s = 2),
      we(this))
    : Ko(this, this.Y - n);
};
function we(n) {
  n.l.H == 0 || n.J || fa(n.l, n);
}
function Nt(n) {
  $n(n);
  var t = n.M;
  t && typeof t.sa == "function" && t.sa(),
    (n.M = null),
    ps(n.V),
    Oo(n.U),
    n.g && ((t = n.g), (n.g = null), t.abort(), t.sa());
}
function Lr(n, t) {
  try {
    var e = n.l;
    if (e.H != 0 && (e.g == n || Fr(e.i, n))) {
      if (!n.K && Fr(e.i, n) && e.H == 3) {
        try {
          var r = e.Ja.g.parse(t);
        } catch {
          r = null;
        }
        if (Array.isArray(r) && r.length == 3) {
          var s = r;
          if (s[0] == 0) {
            t: if (!e.u) {
              if (e.g)
                if (e.g.G + 3e3 < n.G) Rn(e), Hn(e);
                else break t;
              ws(e), et(18);
            }
          } else
            (e.Fa = s[1]),
              0 < e.Fa - e.V &&
                37500 > s[2] &&
                e.G &&
                e.A == 0 &&
                !e.v &&
                (e.v = Ke(J(e.ib, e), 6e3));
          if (1 >= Zo(e.i) && e.oa) {
            try {
              e.oa();
            } catch {}
            e.oa = void 0;
          }
        } else kt(e, 11);
      } else if (((n.K || e.g == n) && Rn(e), !be(t)))
        for (s = e.Ja.g.parse(t), t = 0; t < s.length; t++) {
          let h = s[t];
          if (((e.V = h[0]), (h = h[1]), e.H == 2))
            if (h[0] == "c") {
              (e.K = h[1]), (e.pa = h[2]);
              const c = h[3];
              c != null && ((e.ra = c), e.l.info("VER=" + e.ra));
              const l = h[4];
              l != null && ((e.Ga = l), e.l.info("SVER=" + e.Ga));
              const f = h[5];
              f != null &&
                typeof f == "number" &&
                0 < f &&
                ((r = 1.5 * f),
                (e.L = r),
                e.l.info("backChannelRequestTimeoutMs_=" + r)),
                (r = e);
              const g = n.g;
              if (g) {
                const D = g.g
                  ? g.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (D) {
                  var i = r.i;
                  i.g ||
                    (D.indexOf("spdy") == -1 &&
                      D.indexOf("quic") == -1 &&
                      D.indexOf("h2") == -1) ||
                    ((i.j = i.l),
                    (i.g = new Set()),
                    i.h && (Es(i, i.h), (i.h = null)));
                }
                if (r.F) {
                  const b = g.g
                    ? g.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  b && ((r.Da = b), N(r.I, r.F, b));
                }
              }
              (e.H = 3),
                e.h && e.h.Ba(),
                e.ca &&
                  ((e.S = Date.now() - n.G),
                  e.l.info("Handshake RTT: " + e.S + "ms")),
                (r = e);
              var o = n;
              if (((r.wa = ma(r, r.J ? r.pa : null, r.Y)), o.K)) {
                ta(r.i, o);
                var a = o,
                  u = r.L;
                u && a.setTimeout(u), a.C && ($n(a), He(a)), (r.g = o);
              } else la(r);
              0 < e.j.length && Wn(e);
            } else (h[0] != "stop" && h[0] != "close") || kt(e, 7);
          else
            e.H == 3 &&
              (h[0] == "stop" || h[0] == "close"
                ? h[0] == "stop"
                  ? kt(e, 7)
                  : Is(e)
                : h[0] != "noop" && e.h && e.h.Aa(h),
              (e.A = 0));
        }
    }
    Me(4);
  } catch {}
}
function Pc(n) {
  if (n.Z && typeof n.Z == "function") return n.Z();
  if (
    (typeof Map < "u" && n instanceof Map) ||
    (typeof Set < "u" && n instanceof Set)
  )
    return Array.from(n.values());
  if (typeof n == "string") return n.split("");
  if (On(n)) {
    for (var t = [], e = n.length, r = 0; r < e; r++) t.push(n[r]);
    return t;
  }
  (t = []), (e = 0);
  for (r in n) t[e++] = n[r];
  return t;
}
function Vc(n) {
  if (n.ta && typeof n.ta == "function") return n.ta();
  if (!n.Z || typeof n.Z != "function") {
    if (typeof Map < "u" && n instanceof Map) return Array.from(n.keys());
    if (!(typeof Set < "u" && n instanceof Set)) {
      if (On(n) || typeof n == "string") {
        var t = [];
        n = n.length;
        for (var e = 0; e < n; e++) t.push(e);
        return t;
      }
      (t = []), (e = 0);
      for (const r in n) t[e++] = r;
      return t;
    }
  }
}
function Go(n, t) {
  if (n.forEach && typeof n.forEach == "function") n.forEach(t, void 0);
  else if (On(n) || typeof n == "string")
    Array.prototype.forEach.call(n, t, void 0);
  else
    for (var e = Vc(n), r = Pc(n), s = r.length, i = 0; i < s; i++)
      t.call(void 0, r[i], e && e[i], n);
}
var Qo = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$",
);
function Dc(n, t) {
  if (n) {
    n = n.split("&");
    for (var e = 0; e < n.length; e++) {
      var r = n[e].indexOf("="),
        s = null;
      if (0 <= r) {
        var i = n[e].substring(0, r);
        s = n[e].substring(r + 1);
      } else i = n[e];
      t(i, s ? decodeURIComponent(s.replace(/\+/g, " ")) : "");
    }
  }
}
function Mt(n) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    n instanceof Mt)
  ) {
    (this.h = n.h),
      wn(this, n.j),
      (this.s = n.s),
      (this.g = n.g),
      An(this, n.m),
      (this.l = n.l);
    var t = n.i,
      e = new Le();
    (e.i = t.i),
      t.g && ((e.g = new Map(t.g)), (e.h = t.h)),
      _i(this, e),
      (this.o = n.o);
  } else
    n && (t = String(n).match(Qo))
      ? ((this.h = !1),
        wn(this, t[1] || "", !0),
        (this.s = Ee(t[2] || "")),
        (this.g = Ee(t[3] || "", !0)),
        An(this, t[4]),
        (this.l = Ee(t[5] || "", !0)),
        _i(this, t[6] || "", !0),
        (this.o = Ee(t[7] || "")))
      : ((this.h = !1), (this.i = new Le(null, this.h)));
}
Mt.prototype.toString = function () {
  var n = [],
    t = this.j;
  t && n.push(ve(t, yi, !0), ":");
  var e = this.g;
  return (
    (e || t == "file") &&
      (n.push("//"),
      (t = this.s) && n.push(ve(t, yi, !0), "@"),
      n.push(
        encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g, "%$1"),
      ),
      (e = this.m),
      e != null && n.push(":", String(e))),
    (e = this.l) &&
      (this.g && e.charAt(0) != "/" && n.push("/"),
      n.push(ve(e, e.charAt(0) == "/" ? kc : Nc, !0))),
    (e = this.i.toString()) && n.push("?", e),
    (e = this.o) && n.push("#", ve(e, xc)),
    n.join("")
  );
};
function yt(n) {
  return new Mt(n);
}
function wn(n, t, e) {
  (n.j = e ? Ee(t, !0) : t), n.j && (n.j = n.j.replace(/:$/, ""));
}
function An(n, t) {
  if (t) {
    if (((t = Number(t)), isNaN(t) || 0 > t))
      throw Error("Bad port number " + t);
    n.m = t;
  } else n.m = null;
}
function _i(n, t, e) {
  t instanceof Le
    ? ((n.i = t), Mc(n.i, n.h))
    : (e || (t = ve(t, Oc)), (n.i = new Le(t, n.h)));
}
function N(n, t, e) {
  n.i.set(t, e);
}
function zn(n) {
  return (
    N(
      n,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36,
        ),
    ),
    n
  );
}
function Ee(n, t) {
  return n
    ? t
      ? decodeURI(n.replace(/%25/g, "%2525"))
      : decodeURIComponent(n)
    : "";
}
function ve(n, t, e) {
  return typeof n == "string"
    ? ((n = encodeURI(n).replace(t, bc)),
      e && (n = n.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      n)
    : null;
}
function bc(n) {
  return (
    (n = n.charCodeAt(0)),
    "%" + ((n >> 4) & 15).toString(16) + (n & 15).toString(16)
  );
}
var yi = /[#\/\?@]/g,
  Nc = /[#\?:]/g,
  kc = /[#\?]/g,
  Oc = /[#\?@]/g,
  xc = /#/g;
function Le(n, t) {
  (this.h = this.g = null), (this.i = n || null), (this.j = !!t);
}
function Vt(n) {
  n.g ||
    ((n.g = new Map()),
    (n.h = 0),
    n.i &&
      Dc(n.i, function (t, e) {
        n.add(decodeURIComponent(t.replace(/\+/g, " ")), e);
      }));
}
m = Le.prototype;
m.add = function (n, t) {
  Vt(this), (this.i = null), (n = ce(this, n));
  var e = this.g.get(n);
  return e || this.g.set(n, (e = [])), e.push(t), (this.h += 1), this;
};
function Ho(n, t) {
  Vt(n),
    (t = ce(n, t)),
    n.g.has(t) && ((n.i = null), (n.h -= n.g.get(t).length), n.g.delete(t));
}
function Wo(n, t) {
  return Vt(n), (t = ce(n, t)), n.g.has(t);
}
m.forEach = function (n, t) {
  Vt(this),
    this.g.forEach(function (e, r) {
      e.forEach(function (s) {
        n.call(t, s, r, this);
      }, this);
    }, this);
};
m.ta = function () {
  Vt(this);
  const n = Array.from(this.g.values()),
    t = Array.from(this.g.keys()),
    e = [];
  for (let r = 0; r < t.length; r++) {
    const s = n[r];
    for (let i = 0; i < s.length; i++) e.push(t[r]);
  }
  return e;
};
m.Z = function (n) {
  Vt(this);
  let t = [];
  if (typeof n == "string")
    Wo(this, n) && (t = t.concat(this.g.get(ce(this, n))));
  else {
    n = Array.from(this.g.values());
    for (let e = 0; e < n.length; e++) t = t.concat(n[e]);
  }
  return t;
};
m.set = function (n, t) {
  return (
    Vt(this),
    (this.i = null),
    (n = ce(this, n)),
    Wo(this, n) && (this.h -= this.g.get(n).length),
    this.g.set(n, [t]),
    (this.h += 1),
    this
  );
};
m.get = function (n, t) {
  return n ? ((n = this.Z(n)), 0 < n.length ? String(n[0]) : t) : t;
};
function Yo(n, t, e) {
  Ho(n, t),
    0 < e.length && ((n.i = null), n.g.set(ce(n, t), is(e)), (n.h += e.length));
}
m.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const n = [],
    t = Array.from(this.g.keys());
  for (var e = 0; e < t.length; e++) {
    var r = t[e];
    const i = encodeURIComponent(String(r)),
      o = this.Z(r);
    for (r = 0; r < o.length; r++) {
      var s = i;
      o[r] !== "" && (s += "=" + encodeURIComponent(String(o[r]))), n.push(s);
    }
  }
  return (this.i = n.join("&"));
};
function ce(n, t) {
  return (t = String(t)), n.j && (t = t.toLowerCase()), t;
}
function Mc(n, t) {
  t &&
    !n.j &&
    (Vt(n),
    (n.i = null),
    n.g.forEach(function (e, r) {
      var s = r.toLowerCase();
      r != s && (Ho(this, r), Yo(this, s, e));
    }, n)),
    (n.j = t);
}
var Lc = class {
  constructor(n, t) {
    (this.g = n), (this.map = t);
  }
};
function Xo(n) {
  (this.l = n || Fc),
    v.PerformanceNavigationTiming
      ? ((n = v.performance.getEntriesByType("navigation")),
        (n =
          0 < n.length &&
          (n[0].nextHopProtocol == "hq" || n[0].nextHopProtocol == "h2")))
      : (n = !!(v.g && v.g.Ka && v.g.Ka() && v.g.Ka().dc)),
    (this.j = n ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var Fc = 10;
function Jo(n) {
  return n.h ? !0 : n.g ? n.g.size >= n.j : !1;
}
function Zo(n) {
  return n.h ? 1 : n.g ? n.g.size : 0;
}
function Fr(n, t) {
  return n.h ? n.h == t : n.g ? n.g.has(t) : !1;
}
function Es(n, t) {
  n.g ? n.g.add(t) : (n.h = t);
}
function ta(n, t) {
  n.h && n.h == t ? (n.h = null) : n.g && n.g.has(t) && n.g.delete(t);
}
Xo.prototype.cancel = function () {
  if (((this.i = ea(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const n of this.g.values()) n.cancel();
    this.g.clear();
  }
};
function ea(n) {
  if (n.h != null) return n.i.concat(n.h.F);
  if (n.g != null && n.g.size !== 0) {
    let t = n.i;
    for (const e of n.g.values()) t = t.concat(e.F);
    return t;
  }
  return is(n.i);
}
var Uc = class {
  stringify(n) {
    return v.JSON.stringify(n, void 0);
  }
  parse(n) {
    return v.JSON.parse(n, void 0);
  }
};
function Bc() {
  this.g = new Uc();
}
function qc(n, t, e) {
  const r = e || "";
  try {
    Go(n, function (s, i) {
      let o = s;
      $e(s) && (o = ds(s)), t.push(r + i + "=" + encodeURIComponent(o));
    });
  } catch (s) {
    throw (t.push(r + "type=" + encodeURIComponent("_badmap")), s);
  }
}
function jc(n, t) {
  const e = new Un();
  if (v.Image) {
    const r = new Image();
    (r.onload = on(un, e, r, "TestLoadImage: loaded", !0, t)),
      (r.onerror = on(un, e, r, "TestLoadImage: error", !1, t)),
      (r.onabort = on(un, e, r, "TestLoadImage: abort", !1, t)),
      (r.ontimeout = on(un, e, r, "TestLoadImage: timeout", !1, t)),
      v.setTimeout(function () {
        r.ontimeout && r.ontimeout();
      }, 1e4),
      (r.src = n);
  } else t(!1);
}
function un(n, t, e, r, s) {
  try {
    (t.onload = null),
      (t.onerror = null),
      (t.onabort = null),
      (t.ontimeout = null),
      s(r);
  } catch {}
}
function Kn(n) {
  (this.l = n.ec || null), (this.j = n.ob || !1);
}
$(Kn, ms);
Kn.prototype.g = function () {
  return new Gn(this.l, this.j);
};
Kn.prototype.i = (function (n) {
  return function () {
    return n;
  };
})({});
function Gn(n, t) {
  j.call(this),
    (this.F = n),
    (this.u = t),
    (this.m = void 0),
    (this.readyState = vs),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
$(Gn, j);
var vs = 0;
m = Gn.prototype;
m.open = function (n, t) {
  if (this.readyState != vs)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = n), (this.B = t), (this.readyState = 1), Fe(this);
};
m.send = function (n) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const t = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  n && (t.body = n),
    (this.F || v)
      .fetch(new Request(this.B, t))
      .then(this.$a.bind(this), this.ka.bind(this));
};
m.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), We(this)),
    (this.readyState = vs);
};
m.$a = function (n) {
  if (
    this.g &&
    ((this.l = n),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = n.headers),
      (this.readyState = 2),
      Fe(this)),
    this.g && ((this.readyState = 3), Fe(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      n.arrayBuffer().then(this.Ya.bind(this), this.ka.bind(this));
    else if (typeof v.ReadableStream < "u" && "body" in n) {
      if (((this.j = n.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.',
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      na(this);
    } else n.text().then(this.Za.bind(this), this.ka.bind(this));
};
function na(n) {
  n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n));
}
m.Xa = function (n) {
  if (this.g) {
    if (this.u && n.value) this.response.push(n.value);
    else if (!this.u) {
      var t = n.value ? n.value : new Uint8Array(0);
      (t = this.A.decode(t, { stream: !n.done })) &&
        (this.response = this.responseText += t);
    }
    n.done ? We(this) : Fe(this), this.readyState == 3 && na(this);
  }
};
m.Za = function (n) {
  this.g && ((this.response = this.responseText = n), We(this));
};
m.Ya = function (n) {
  this.g && ((this.response = n), We(this));
};
m.ka = function () {
  this.g && We(this);
};
function We(n) {
  (n.readyState = 4), (n.l = null), (n.j = null), (n.A = null), Fe(n);
}
m.setRequestHeader = function (n, t) {
  this.v.append(n, t);
};
m.getResponseHeader = function (n) {
  return (this.h && this.h.get(n.toLowerCase())) || "";
};
m.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const n = [],
    t = this.h.entries();
  for (var e = t.next(); !e.done; )
    (e = e.value), n.push(e[0] + ": " + e[1]), (e = t.next());
  return n.join(`\r
`);
};
function Fe(n) {
  n.onreadystatechange && n.onreadystatechange.call(n);
}
Object.defineProperty(Gn.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (n) {
    this.m = n ? "include" : "same-origin";
  },
});
var $c = v.JSON.parse;
function O(n) {
  j.call(this),
    (this.headers = new Map()),
    (this.u = n || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.I = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.G = this.v = this.F = !1),
    (this.B = 0),
    (this.A = null),
    (this.K = ra),
    (this.L = this.M = !1);
}
$(O, j);
var ra = "",
  zc = /^https?$/i,
  Kc = ["POST", "PUT"];
m = O.prototype;
m.Oa = function (n) {
  this.M = n;
};
m.ha = function (n, t, e, r) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.I +
        "; newUri=" +
        n,
    );
  (t = t ? t.toUpperCase() : "GET"),
    (this.I = n),
    (this.j = ""),
    (this.m = 0),
    (this.F = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : Or.g()),
    (this.C = this.u ? mi(this.u) : mi(Or)),
    (this.g.onreadystatechange = J(this.La, this));
  try {
    (this.G = !0), this.g.open(t, String(n), !0), (this.G = !1);
  } catch (i) {
    Ei(this, i);
    return;
  }
  if (((n = e || ""), (e = new Map(this.headers)), r))
    if (Object.getPrototypeOf(r) === Object.prototype)
      for (var s in r) e.set(s, r[s]);
    else if (typeof r.keys == "function" && typeof r.get == "function")
      for (const i of r.keys()) e.set(i, r.get(i));
    else throw Error("Unknown input type for opt_headers: " + String(r));
  (r = Array.from(e.keys()).find((i) => i.toLowerCase() == "content-type")),
    (s = v.FormData && n instanceof v.FormData),
    !(0 <= Eo(Kc, t)) ||
      r ||
      s ||
      e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [i, o] of e) this.g.setRequestHeader(i, o);
  this.K && (this.g.responseType = this.K),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.M &&
      (this.g.withCredentials = this.M);
  try {
    oa(this),
      0 < this.B &&
        ((this.L = Gc(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = J(this.ua, this)))
          : (this.A = gs(this.ua, this.B, this))),
      (this.v = !0),
      this.g.send(n),
      (this.v = !1);
  } catch (i) {
    Ei(this, i);
  }
};
function Gc(n) {
  return ee && typeof n.timeout == "number" && n.ontimeout !== void 0;
}
m.ua = function () {
  typeof ss < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    G(this, "timeout"),
    this.abort(8));
};
function Ei(n, t) {
  (n.h = !1),
    n.g && ((n.l = !0), n.g.abort(), (n.l = !1)),
    (n.j = t),
    (n.m = 5),
    sa(n),
    Qn(n);
}
function sa(n) {
  n.F || ((n.F = !0), G(n, "complete"), G(n, "error"));
}
m.abort = function (n) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = n || 7),
    G(this, "complete"),
    G(this, "abort"),
    Qn(this));
};
m.N = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Qn(this, !0)),
    O.$.N.call(this);
};
m.La = function () {
  this.s || (this.G || this.v || this.l ? ia(this) : this.kb());
};
m.kb = function () {
  ia(this);
};
function ia(n) {
  if (n.h && typeof ss < "u" && (!n.C[1] || ct(n) != 4 || n.da() != 2)) {
    if (n.v && ct(n) == 4) gs(n.La, 0, n);
    else if ((G(n, "readystatechange"), ct(n) == 4)) {
      n.h = !1;
      try {
        const o = n.da();
        t: switch (o) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var t = !0;
            break t;
          default:
            t = !1;
        }
        var e;
        if (!(e = t)) {
          var r;
          if ((r = o === 0)) {
            var s = String(n.I).match(Qo)[1] || null;
            !s &&
              v.self &&
              v.self.location &&
              (s = v.self.location.protocol.slice(0, -1)),
              (r = !zc.test(s ? s.toLowerCase() : ""));
          }
          e = r;
        }
        if (e) G(n, "complete"), G(n, "success");
        else {
          n.m = 6;
          try {
            var i = 2 < ct(n) ? n.g.statusText : "";
          } catch {
            i = "";
          }
          (n.j = i + " [" + n.da() + "]"), sa(n);
        }
      } finally {
        Qn(n);
      }
    }
  }
}
function Qn(n, t) {
  if (n.g) {
    oa(n);
    const e = n.g,
      r = n.C[0] ? () => {} : null;
    (n.g = null), (n.C = null), t || G(n, "ready");
    try {
      e.onreadystatechange = r;
    } catch {}
  }
}
function oa(n) {
  n.g && n.L && (n.g.ontimeout = null),
    n.A && (v.clearTimeout(n.A), (n.A = null));
}
m.isActive = function () {
  return !!this.g;
};
function ct(n) {
  return n.g ? n.g.readyState : 0;
}
m.da = function () {
  try {
    return 2 < ct(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
m.ja = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
m.Wa = function (n) {
  if (this.g) {
    var t = this.g.responseText;
    return n && t.indexOf(n) == 0 && (t = t.substring(n.length)), $c(t);
  }
};
function vi(n) {
  try {
    if (!n.g) return null;
    if ("response" in n.g) return n.g.response;
    switch (n.K) {
      case ra:
      case "text":
        return n.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in n.g) return n.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
function Qc(n) {
  const t = {};
  n = ((n.g && 2 <= ct(n) && n.g.getAllResponseHeaders()) || "").split(`\r
`);
  for (let r = 0; r < n.length; r++) {
    if (be(n[r])) continue;
    var e = yc(n[r]);
    const s = e[0];
    if (((e = e[1]), typeof e != "string")) continue;
    e = e.trim();
    const i = t[s] || [];
    (t[s] = i), i.push(e);
  }
  lc(t, function (r) {
    return r.join(", ");
  });
}
m.Ia = function () {
  return this.m;
};
m.Sa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function aa(n) {
  let t = "";
  return (
    as(n, function (e, r) {
      (t += r),
        (t += ":"),
        (t += e),
        (t += `\r
`);
    }),
    t
  );
}
function Ts(n, t, e) {
  t: {
    for (r in e) {
      var r = !1;
      break t;
    }
    r = !0;
  }
  r ||
    ((e = aa(e)),
    typeof n == "string"
      ? e != null && encodeURIComponent(String(e))
      : N(n, t, e));
}
function me(n, t, e) {
  return (e && e.internalChannelParams && e.internalChannelParams[n]) || t;
}
function ua(n) {
  (this.Ga = 0),
    (this.j = []),
    (this.l = new Un()),
    (this.pa =
      this.wa =
      this.I =
      this.Y =
      this.g =
      this.Da =
      this.F =
      this.na =
      this.o =
      this.U =
      this.s =
        null),
    (this.fb = this.W = 0),
    (this.cb = me("failFast", !1, n)),
    (this.G = this.v = this.u = this.m = this.h = null),
    (this.aa = !0),
    (this.Fa = this.V = -1),
    (this.ba = this.A = this.C = 0),
    (this.ab = me("baseRetryDelayMs", 5e3, n)),
    (this.hb = me("retryDelaySeedMs", 1e4, n)),
    (this.eb = me("forwardChannelMaxRetries", 2, n)),
    (this.xa = me("forwardChannelRequestTimeoutMs", 2e4, n)),
    (this.va = (n && n.xmlHttpFactory) || void 0),
    (this.Ha = (n && n.useFetchStreams) || !1),
    (this.L = void 0),
    (this.J = (n && n.supportsCrossDomainXhr) || !1),
    (this.K = ""),
    (this.i = new Xo(n && n.concurrentRequestLimit)),
    (this.Ja = new Bc()),
    (this.P = (n && n.fastHandshake) || !1),
    (this.O = (n && n.encodeInitMessageHeaders) || !1),
    this.P && this.O && (this.O = !1),
    (this.bb = (n && n.bc) || !1),
    n && n.Ea && this.l.Ea(),
    n && n.forceLongPolling && (this.aa = !1),
    (this.ca = (!this.P && this.aa && n && n.detectBufferingProxy) || !1),
    (this.qa = void 0),
    n &&
      n.longPollingTimeout &&
      0 < n.longPollingTimeout &&
      (this.qa = n.longPollingTimeout),
    (this.oa = void 0),
    (this.S = 0),
    (this.M = !1),
    (this.ma = this.B = null);
}
m = ua.prototype;
m.ra = 8;
m.H = 1;
function Is(n) {
  if ((ha(n), n.H == 3)) {
    var t = n.W++,
      e = yt(n.I);
    if (
      (N(e, "SID", n.K),
      N(e, "RID", t),
      N(e, "TYPE", "terminate"),
      Ye(n, e),
      (t = new Qe(n, n.l, t)),
      (t.L = 2),
      (t.A = zn(yt(e))),
      (e = !1),
      v.navigator && v.navigator.sendBeacon)
    )
      try {
        e = v.navigator.sendBeacon(t.A.toString(), "");
      } catch {}
    !e && v.Image && ((new Image().src = t.A), (e = !0)),
      e || ((t.g = _a(t.l, null)), t.g.ha(t.A)),
      (t.G = Date.now()),
      He(t);
  }
  ga(n);
}
function Hn(n) {
  n.g && (As(n), n.g.cancel(), (n.g = null));
}
function ha(n) {
  Hn(n),
    n.u && (v.clearTimeout(n.u), (n.u = null)),
    Rn(n),
    n.i.cancel(),
    n.m && (typeof n.m == "number" && v.clearTimeout(n.m), (n.m = null));
}
function Wn(n) {
  if (!Jo(n.i) && !n.m) {
    n.m = !0;
    var t = n.Na;
    ke || bo(), Oe || (ke(), (Oe = !0)), fs.add(t, n), (n.C = 0);
  }
}
function Hc(n, t) {
  return Zo(n.i) >= n.i.j - (n.m ? 1 : 0)
    ? !1
    : n.m
      ? ((n.j = t.F.concat(n.j)), !0)
      : n.H == 1 || n.H == 2 || n.C >= (n.cb ? 0 : n.eb)
        ? !1
        : ((n.m = Ke(J(n.Na, n, t), pa(n, n.C))), n.C++, !0);
}
m.Na = function (n) {
  if (this.m)
    if (((this.m = null), this.H == 1)) {
      if (!n) {
        (this.W = Math.floor(1e5 * Math.random())), (n = this.W++);
        const s = new Qe(this, this.l, n);
        let i = this.s;
        if (
          (this.U && (i ? ((i = wo(i)), Ao(i, this.U)) : (i = this.U)),
          this.o !== null || this.O || ((s.I = i), (i = null)),
          this.P)
        )
          t: {
            for (var t = 0, e = 0; e < this.j.length; e++) {
              e: {
                var r = this.j[e];
                if (
                  "__data__" in r.map &&
                  ((r = r.map.__data__), typeof r == "string")
                ) {
                  r = r.length;
                  break e;
                }
                r = void 0;
              }
              if (r === void 0) break;
              if (((t += r), 4096 < t)) {
                t = e;
                break t;
              }
              if (t === 4096 || e === this.j.length - 1) {
                t = e + 1;
                break t;
              }
            }
            t = 1e3;
          }
        else t = 1e3;
        (t = ca(this, s, t)),
          (e = yt(this.I)),
          N(e, "RID", n),
          N(e, "CVER", 22),
          this.F && N(e, "X-HTTP-Session-Id", this.F),
          Ye(this, e),
          i &&
            (this.O
              ? (t = "headers=" + encodeURIComponent(String(aa(i))) + "&" + t)
              : this.o && Ts(e, this.o, i)),
          Es(this.i, s),
          this.bb && N(e, "TYPE", "init"),
          this.P
            ? (N(e, "$req", t),
              N(e, "SID", "null"),
              (s.aa = !0),
              Mr(s, e, null))
            : Mr(s, e, t),
          (this.H = 2);
      }
    } else
      this.H == 3 &&
        (n ? Ti(this, n) : this.j.length == 0 || Jo(this.i) || Ti(this));
};
function Ti(n, t) {
  var e;
  t ? (e = t.m) : (e = n.W++);
  const r = yt(n.I);
  N(r, "SID", n.K),
    N(r, "RID", e),
    N(r, "AID", n.V),
    Ye(n, r),
    n.o && n.s && Ts(r, n.o, n.s),
    (e = new Qe(n, n.l, e, n.C + 1)),
    n.o === null && (e.I = n.s),
    t && (n.j = t.F.concat(n.j)),
    (t = ca(n, e, 1e3)),
    e.setTimeout(
      Math.round(0.5 * n.xa) + Math.round(0.5 * n.xa * Math.random()),
    ),
    Es(n.i, e),
    Mr(e, r, t);
}
function Ye(n, t) {
  n.na &&
    as(n.na, function (e, r) {
      N(t, r, e);
    }),
    n.h &&
      Go({}, function (e, r) {
        N(t, r, e);
      });
}
function ca(n, t, e) {
  e = Math.min(n.j.length, e);
  var r = n.h ? J(n.h.Va, n.h, n) : null;
  t: {
    var s = n.j;
    let i = -1;
    for (;;) {
      const o = ["count=" + e];
      i == -1
        ? 0 < e
          ? ((i = s[0].g), o.push("ofs=" + i))
          : (i = 0)
        : o.push("ofs=" + i);
      let a = !0;
      for (let u = 0; u < e; u++) {
        let h = s[u].g;
        const c = s[u].map;
        if (((h -= i), 0 > h)) (i = Math.max(0, s[u].g - 100)), (a = !1);
        else
          try {
            qc(c, o, "req" + h + "_");
          } catch {
            r && r(c);
          }
      }
      if (a) {
        r = o.join("&");
        break t;
      }
    }
  }
  return (n = n.j.splice(0, e)), (t.F = n), r;
}
function la(n) {
  if (!n.g && !n.u) {
    n.ba = 1;
    var t = n.Ma;
    ke || bo(), Oe || (ke(), (Oe = !0)), fs.add(t, n), (n.A = 0);
  }
}
function ws(n) {
  return n.g || n.u || 3 <= n.A
    ? !1
    : (n.ba++, (n.u = Ke(J(n.Ma, n), pa(n, n.A))), n.A++, !0);
}
m.Ma = function () {
  if (
    ((this.u = null),
    da(this),
    this.ca && !(this.M || this.g == null || 0 >= this.S))
  ) {
    var n = 2 * this.S;
    this.l.info("BP detection timer enabled: " + n),
      (this.B = Ke(J(this.jb, this), n));
  }
};
m.jb = function () {
  this.B &&
    ((this.B = null),
    this.l.info("BP detection timeout reached."),
    this.l.info("Buffering proxy detected and switch to long-polling!"),
    (this.G = !1),
    (this.M = !0),
    et(10),
    Hn(this),
    da(this));
};
function As(n) {
  n.B != null && (v.clearTimeout(n.B), (n.B = null));
}
function da(n) {
  (n.g = new Qe(n, n.l, "rpc", n.ba)),
    n.o === null && (n.g.I = n.s),
    (n.g.O = 0);
  var t = yt(n.wa);
  N(t, "RID", "rpc"),
    N(t, "SID", n.K),
    N(t, "AID", n.V),
    N(t, "CI", n.G ? "0" : "1"),
    !n.G && n.qa && N(t, "TO", n.qa),
    N(t, "TYPE", "xmlhttp"),
    Ye(n, t),
    n.o && n.s && Ts(t, n.o, n.s),
    n.L && n.g.setTimeout(n.L);
  var e = n.g;
  (n = n.pa), (e.L = 1), (e.A = zn(yt(t))), (e.u = null), (e.S = !0), jo(e, n);
}
m.ib = function () {
  this.v != null && ((this.v = null), Hn(this), ws(this), et(19));
};
function Rn(n) {
  n.v != null && (v.clearTimeout(n.v), (n.v = null));
}
function fa(n, t) {
  var e = null;
  if (n.g == t) {
    Rn(n), As(n), (n.g = null);
    var r = 2;
  } else if (Fr(n.i, t)) (e = t.F), ta(n.i, t), (r = 1);
  else return;
  if (n.H != 0) {
    if (t.i)
      if (r == 1) {
        (e = t.u ? t.u.length : 0), (t = Date.now() - t.G);
        var s = n.C;
        (r = Bn()), G(r, new Lo(r, e)), Wn(n);
      } else la(n);
    else if (
      ((s = t.s),
      s == 3 ||
        (s == 0 && 0 < t.ca) ||
        !((r == 1 && Hc(n, t)) || (r == 2 && ws(n))))
    )
      switch ((e && 0 < e.length && ((t = n.i), (t.i = t.i.concat(e))), s)) {
        case 1:
          kt(n, 5);
          break;
        case 4:
          kt(n, 10);
          break;
        case 3:
          kt(n, 6);
          break;
        default:
          kt(n, 2);
      }
  }
}
function pa(n, t) {
  let e = n.ab + Math.floor(Math.random() * n.hb);
  return n.isActive() || (e *= 2), e * t;
}
function kt(n, t) {
  if ((n.l.info("Error code " + t), t == 2)) {
    var e = null;
    n.h && (e = null);
    var r = J(n.pb, n);
    e ||
      ((e = new Mt("//www.google.com/images/cleardot.gif")),
      (v.location && v.location.protocol == "http") || wn(e, "https"),
      zn(e)),
      jc(e.toString(), r);
  } else et(2);
  (n.H = 0), n.h && n.h.za(t), ga(n), ha(n);
}
m.pb = function (n) {
  n
    ? (this.l.info("Successfully pinged google.com"), et(2))
    : (this.l.info("Failed to ping google.com"), et(1));
};
function ga(n) {
  if (((n.H = 0), (n.ma = []), n.h)) {
    const t = ea(n.i);
    (t.length != 0 || n.j.length != 0) &&
      (li(n.ma, t),
      li(n.ma, n.j),
      (n.i.i.length = 0),
      is(n.j),
      (n.j.length = 0)),
      n.h.ya();
  }
}
function ma(n, t, e) {
  var r = e instanceof Mt ? yt(e) : new Mt(e);
  if (r.g != "") t && (r.g = t + "." + r.g), An(r, r.m);
  else {
    var s = v.location;
    (r = s.protocol),
      (t = t ? t + "." + s.hostname : s.hostname),
      (s = +s.port);
    var i = new Mt(null);
    r && wn(i, r), t && (i.g = t), s && An(i, s), e && (i.l = e), (r = i);
  }
  return (
    (e = n.F), (t = n.Da), e && t && N(r, e, t), N(r, "VER", n.ra), Ye(n, r), r
  );
}
function _a(n, t, e) {
  if (t && !n.J)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (t = n.Ha && !n.va ? new O(new Kn({ ob: e })) : new O(n.va)), t.Oa(n.J), t
  );
}
m.isActive = function () {
  return !!this.h && this.h.isActive(this);
};
function ya() {}
m = ya.prototype;
m.Ba = function () {};
m.Aa = function () {};
m.za = function () {};
m.ya = function () {};
m.isActive = function () {
  return !0;
};
m.Va = function () {};
function Sn() {
  if (ee && !(10 <= Number(ac)))
    throw Error("Environmental error: no available transport.");
}
Sn.prototype.g = function (n, t) {
  return new rt(n, t);
};
function rt(n, t) {
  j.call(this),
    (this.g = new ua(t)),
    (this.l = n),
    (this.h = (t && t.messageUrlParams) || null),
    (n = (t && t.messageHeaders) || null),
    t &&
      t.clientProtocolHeaderRequired &&
      (n
        ? (n["X-Client-Protocol"] = "webchannel")
        : (n = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = n),
    (n = (t && t.initMessageHeaders) || null),
    t &&
      t.messageContentType &&
      (n
        ? (n["X-WebChannel-Content-Type"] = t.messageContentType)
        : (n = { "X-WebChannel-Content-Type": t.messageContentType })),
    t &&
      t.Ca &&
      (n
        ? (n["X-WebChannel-Client-Profile"] = t.Ca)
        : (n = { "X-WebChannel-Client-Profile": t.Ca })),
    (this.g.U = n),
    (n = t && t.cc) && !be(n) && (this.g.o = n),
    (this.A = (t && t.supportsCrossDomainXhr) || !1),
    (this.v = (t && t.sendRawJson) || !1),
    (t = t && t.httpSessionIdParam) &&
      !be(t) &&
      ((this.g.F = t),
      (n = this.h),
      n !== null && t in n && ((n = this.h), t in n && delete n[t])),
    (this.j = new le(this));
}
$(rt, j);
rt.prototype.m = function () {
  (this.g.h = this.j), this.A && (this.g.J = !0);
  var n = this.g,
    t = this.l,
    e = this.h || void 0;
  et(0),
    (n.Y = t),
    (n.na = e || {}),
    (n.G = n.aa),
    (n.I = ma(n, null, n.Y)),
    Wn(n);
};
rt.prototype.close = function () {
  Is(this.g);
};
rt.prototype.u = function (n) {
  var t = this.g;
  if (typeof n == "string") {
    var e = {};
    (e.__data__ = n), (n = e);
  } else this.v && ((e = {}), (e.__data__ = ds(n)), (n = e));
  t.j.push(new Lc(t.fb++, n)), t.H == 3 && Wn(t);
};
rt.prototype.N = function () {
  (this.g.h = null),
    delete this.j,
    Is(this.g),
    delete this.g,
    rt.$.N.call(this);
};
function Ea(n) {
  _s.call(this),
    n.__headers__ &&
      ((this.headers = n.__headers__),
      (this.statusCode = n.__status__),
      delete n.__headers__,
      delete n.__status__);
  var t = n.__sm__;
  if (t) {
    t: {
      for (const e in t) {
        n = e;
        break t;
      }
      n = void 0;
    }
    (this.i = n) && ((n = this.i), (t = t !== null && n in t ? t[n] : void 0)),
      (this.data = t);
  } else this.data = n;
}
$(Ea, _s);
function va() {
  ys.call(this), (this.status = 1);
}
$(va, ys);
function le(n) {
  this.g = n;
}
$(le, ya);
le.prototype.Ba = function () {
  G(this.g, "a");
};
le.prototype.Aa = function (n) {
  G(this.g, new Ea(n));
};
le.prototype.za = function (n) {
  G(this.g, new va());
};
le.prototype.ya = function () {
  G(this.g, "b");
};
function Wc() {
  this.blockSize = -1;
}
function ot() {
  (this.blockSize = -1),
    (this.blockSize = 64),
    (this.g = Array(4)),
    (this.m = Array(this.blockSize)),
    (this.i = this.h = 0),
    this.reset();
}
$(ot, Wc);
ot.prototype.reset = function () {
  (this.g[0] = 1732584193),
    (this.g[1] = 4023233417),
    (this.g[2] = 2562383102),
    (this.g[3] = 271733878),
    (this.i = this.h = 0);
};
function mr(n, t, e) {
  e || (e = 0);
  var r = Array(16);
  if (typeof t == "string")
    for (var s = 0; 16 > s; ++s)
      r[s] =
        t.charCodeAt(e++) |
        (t.charCodeAt(e++) << 8) |
        (t.charCodeAt(e++) << 16) |
        (t.charCodeAt(e++) << 24);
  else
    for (s = 0; 16 > s; ++s)
      r[s] = t[e++] | (t[e++] << 8) | (t[e++] << 16) | (t[e++] << 24);
  (t = n.g[0]), (e = n.g[1]), (s = n.g[2]);
  var i = n.g[3],
    o = (t + (i ^ (e & (s ^ i))) + r[0] + 3614090360) & 4294967295;
  (t = e + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (i + (s ^ (t & (e ^ s))) + r[1] + 3905402710) & 4294967295),
    (i = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (s + (e ^ (i & (t ^ e))) + r[2] + 606105819) & 4294967295),
    (s = i + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (e + (t ^ (s & (i ^ t))) + r[3] + 3250441966) & 4294967295),
    (e = s + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (e & (s ^ i))) + r[4] + 4118548399) & 4294967295),
    (t = e + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (i + (s ^ (t & (e ^ s))) + r[5] + 1200080426) & 4294967295),
    (i = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (s + (e ^ (i & (t ^ e))) + r[6] + 2821735955) & 4294967295),
    (s = i + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (e + (t ^ (s & (i ^ t))) + r[7] + 4249261313) & 4294967295),
    (e = s + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (e & (s ^ i))) + r[8] + 1770035416) & 4294967295),
    (t = e + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (i + (s ^ (t & (e ^ s))) + r[9] + 2336552879) & 4294967295),
    (i = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (s + (e ^ (i & (t ^ e))) + r[10] + 4294925233) & 4294967295),
    (s = i + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (e + (t ^ (s & (i ^ t))) + r[11] + 2304563134) & 4294967295),
    (e = s + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (i ^ (e & (s ^ i))) + r[12] + 1804603682) & 4294967295),
    (t = e + (((o << 7) & 4294967295) | (o >>> 25))),
    (o = (i + (s ^ (t & (e ^ s))) + r[13] + 4254626195) & 4294967295),
    (i = t + (((o << 12) & 4294967295) | (o >>> 20))),
    (o = (s + (e ^ (i & (t ^ e))) + r[14] + 2792965006) & 4294967295),
    (s = i + (((o << 17) & 4294967295) | (o >>> 15))),
    (o = (e + (t ^ (s & (i ^ t))) + r[15] + 1236535329) & 4294967295),
    (e = s + (((o << 22) & 4294967295) | (o >>> 10))),
    (o = (t + (s ^ (i & (e ^ s))) + r[1] + 4129170786) & 4294967295),
    (t = e + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (i + (e ^ (s & (t ^ e))) + r[6] + 3225465664) & 4294967295),
    (i = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (s + (t ^ (e & (i ^ t))) + r[11] + 643717713) & 4294967295),
    (s = i + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (e + (i ^ (t & (s ^ i))) + r[0] + 3921069994) & 4294967295),
    (e = s + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (s ^ (i & (e ^ s))) + r[5] + 3593408605) & 4294967295),
    (t = e + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (i + (e ^ (s & (t ^ e))) + r[10] + 38016083) & 4294967295),
    (i = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (s + (t ^ (e & (i ^ t))) + r[15] + 3634488961) & 4294967295),
    (s = i + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (e + (i ^ (t & (s ^ i))) + r[4] + 3889429448) & 4294967295),
    (e = s + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (s ^ (i & (e ^ s))) + r[9] + 568446438) & 4294967295),
    (t = e + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (i + (e ^ (s & (t ^ e))) + r[14] + 3275163606) & 4294967295),
    (i = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (s + (t ^ (e & (i ^ t))) + r[3] + 4107603335) & 4294967295),
    (s = i + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (e + (i ^ (t & (s ^ i))) + r[8] + 1163531501) & 4294967295),
    (e = s + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (s ^ (i & (e ^ s))) + r[13] + 2850285829) & 4294967295),
    (t = e + (((o << 5) & 4294967295) | (o >>> 27))),
    (o = (i + (e ^ (s & (t ^ e))) + r[2] + 4243563512) & 4294967295),
    (i = t + (((o << 9) & 4294967295) | (o >>> 23))),
    (o = (s + (t ^ (e & (i ^ t))) + r[7] + 1735328473) & 4294967295),
    (s = i + (((o << 14) & 4294967295) | (o >>> 18))),
    (o = (e + (i ^ (t & (s ^ i))) + r[12] + 2368359562) & 4294967295),
    (e = s + (((o << 20) & 4294967295) | (o >>> 12))),
    (o = (t + (e ^ s ^ i) + r[5] + 4294588738) & 4294967295),
    (t = e + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (i + (t ^ e ^ s) + r[8] + 2272392833) & 4294967295),
    (i = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (s + (i ^ t ^ e) + r[11] + 1839030562) & 4294967295),
    (s = i + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (e + (s ^ i ^ t) + r[14] + 4259657740) & 4294967295),
    (e = s + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (e ^ s ^ i) + r[1] + 2763975236) & 4294967295),
    (t = e + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (i + (t ^ e ^ s) + r[4] + 1272893353) & 4294967295),
    (i = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (s + (i ^ t ^ e) + r[7] + 4139469664) & 4294967295),
    (s = i + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (e + (s ^ i ^ t) + r[10] + 3200236656) & 4294967295),
    (e = s + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (e ^ s ^ i) + r[13] + 681279174) & 4294967295),
    (t = e + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (i + (t ^ e ^ s) + r[0] + 3936430074) & 4294967295),
    (i = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (s + (i ^ t ^ e) + r[3] + 3572445317) & 4294967295),
    (s = i + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (e + (s ^ i ^ t) + r[6] + 76029189) & 4294967295),
    (e = s + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (e ^ s ^ i) + r[9] + 3654602809) & 4294967295),
    (t = e + (((o << 4) & 4294967295) | (o >>> 28))),
    (o = (i + (t ^ e ^ s) + r[12] + 3873151461) & 4294967295),
    (i = t + (((o << 11) & 4294967295) | (o >>> 21))),
    (o = (s + (i ^ t ^ e) + r[15] + 530742520) & 4294967295),
    (s = i + (((o << 16) & 4294967295) | (o >>> 16))),
    (o = (e + (s ^ i ^ t) + r[2] + 3299628645) & 4294967295),
    (e = s + (((o << 23) & 4294967295) | (o >>> 9))),
    (o = (t + (s ^ (e | ~i)) + r[0] + 4096336452) & 4294967295),
    (t = e + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (i + (e ^ (t | ~s)) + r[7] + 1126891415) & 4294967295),
    (i = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (s + (t ^ (i | ~e)) + r[14] + 2878612391) & 4294967295),
    (s = i + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (e + (i ^ (s | ~t)) + r[5] + 4237533241) & 4294967295),
    (e = s + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (s ^ (e | ~i)) + r[12] + 1700485571) & 4294967295),
    (t = e + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (i + (e ^ (t | ~s)) + r[3] + 2399980690) & 4294967295),
    (i = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (s + (t ^ (i | ~e)) + r[10] + 4293915773) & 4294967295),
    (s = i + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (e + (i ^ (s | ~t)) + r[1] + 2240044497) & 4294967295),
    (e = s + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (s ^ (e | ~i)) + r[8] + 1873313359) & 4294967295),
    (t = e + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (i + (e ^ (t | ~s)) + r[15] + 4264355552) & 4294967295),
    (i = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (s + (t ^ (i | ~e)) + r[6] + 2734768916) & 4294967295),
    (s = i + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (e + (i ^ (s | ~t)) + r[13] + 1309151649) & 4294967295),
    (e = s + (((o << 21) & 4294967295) | (o >>> 11))),
    (o = (t + (s ^ (e | ~i)) + r[4] + 4149444226) & 4294967295),
    (t = e + (((o << 6) & 4294967295) | (o >>> 26))),
    (o = (i + (e ^ (t | ~s)) + r[11] + 3174756917) & 4294967295),
    (i = t + (((o << 10) & 4294967295) | (o >>> 22))),
    (o = (s + (t ^ (i | ~e)) + r[2] + 718787259) & 4294967295),
    (s = i + (((o << 15) & 4294967295) | (o >>> 17))),
    (o = (e + (i ^ (s | ~t)) + r[9] + 3951481745) & 4294967295),
    (n.g[0] = (n.g[0] + t) & 4294967295),
    (n.g[1] =
      (n.g[1] + (s + (((o << 21) & 4294967295) | (o >>> 11)))) & 4294967295),
    (n.g[2] = (n.g[2] + s) & 4294967295),
    (n.g[3] = (n.g[3] + i) & 4294967295);
}
ot.prototype.j = function (n, t) {
  t === void 0 && (t = n.length);
  for (var e = t - this.blockSize, r = this.m, s = this.h, i = 0; i < t; ) {
    if (s == 0) for (; i <= e; ) mr(this, n, i), (i += this.blockSize);
    if (typeof n == "string") {
      for (; i < t; )
        if (((r[s++] = n.charCodeAt(i++)), s == this.blockSize)) {
          mr(this, r), (s = 0);
          break;
        }
    } else
      for (; i < t; )
        if (((r[s++] = n[i++]), s == this.blockSize)) {
          mr(this, r), (s = 0);
          break;
        }
  }
  (this.h = s), (this.i += t);
};
ot.prototype.l = function () {
  var n = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
  n[0] = 128;
  for (var t = 1; t < n.length - 8; ++t) n[t] = 0;
  var e = 8 * this.i;
  for (t = n.length - 8; t < n.length; ++t) (n[t] = e & 255), (e /= 256);
  for (this.j(n), n = Array(16), t = e = 0; 4 > t; ++t)
    for (var r = 0; 32 > r; r += 8) n[e++] = (this.g[t] >>> r) & 255;
  return n;
};
function V(n, t) {
  this.h = t;
  for (var e = [], r = !0, s = n.length - 1; 0 <= s; s--) {
    var i = n[s] | 0;
    (r && i == t) || ((e[s] = i), (r = !1));
  }
  this.g = e;
}
var Yc = {};
function Rs(n) {
  return -128 <= n && 128 > n
    ? sc(n, function (t) {
        return new V([t | 0], 0 > t ? -1 : 0);
      })
    : new V([n | 0], 0 > n ? -1 : 0);
}
function lt(n) {
  if (isNaN(n) || !isFinite(n)) return Yt;
  if (0 > n) return K(lt(-n));
  for (var t = [], e = 1, r = 0; n >= e; r++) (t[r] = (n / e) | 0), (e *= Ur);
  return new V(t, 0);
}
function Ta(n, t) {
  if (n.length == 0) throw Error("number format error: empty string");
  if (((t = t || 10), 2 > t || 36 < t)) throw Error("radix out of range: " + t);
  if (n.charAt(0) == "-") return K(Ta(n.substring(1), t));
  if (0 <= n.indexOf("-"))
    throw Error('number format error: interior "-" character');
  for (var e = lt(Math.pow(t, 8)), r = Yt, s = 0; s < n.length; s += 8) {
    var i = Math.min(8, n.length - s),
      o = parseInt(n.substring(s, s + i), t);
    8 > i
      ? ((i = lt(Math.pow(t, i))), (r = r.R(i).add(lt(o))))
      : ((r = r.R(e)), (r = r.add(lt(o))));
  }
  return r;
}
var Ur = 4294967296,
  Yt = Rs(0),
  Br = Rs(1),
  Ii = Rs(16777216);
m = V.prototype;
m.ea = function () {
  if (st(this)) return -K(this).ea();
  for (var n = 0, t = 1, e = 0; e < this.g.length; e++) {
    var r = this.D(e);
    (n += (0 <= r ? r : Ur + r) * t), (t *= Ur);
  }
  return n;
};
m.toString = function (n) {
  if (((n = n || 10), 2 > n || 36 < n)) throw Error("radix out of range: " + n);
  if (_t(this)) return "0";
  if (st(this)) return "-" + K(this).toString(n);
  for (var t = lt(Math.pow(n, 6)), e = this, r = ""; ; ) {
    var s = Pn(e, t).g;
    e = Cn(e, s.R(t));
    var i = ((0 < e.g.length ? e.g[0] : e.h) >>> 0).toString(n);
    if (((e = s), _t(e))) return i + r;
    for (; 6 > i.length; ) i = "0" + i;
    r = i + r;
  }
};
m.D = function (n) {
  return 0 > n ? 0 : n < this.g.length ? this.g[n] : this.h;
};
function _t(n) {
  if (n.h != 0) return !1;
  for (var t = 0; t < n.g.length; t++) if (n.g[t] != 0) return !1;
  return !0;
}
function st(n) {
  return n.h == -1;
}
m.X = function (n) {
  return (n = Cn(this, n)), st(n) ? -1 : _t(n) ? 0 : 1;
};
function K(n) {
  for (var t = n.g.length, e = [], r = 0; r < t; r++) e[r] = ~n.g[r];
  return new V(e, ~n.h).add(Br);
}
m.abs = function () {
  return st(this) ? K(this) : this;
};
m.add = function (n) {
  for (
    var t = Math.max(this.g.length, n.g.length), e = [], r = 0, s = 0;
    s <= t;
    s++
  ) {
    var i = r + (this.D(s) & 65535) + (n.D(s) & 65535),
      o = (i >>> 16) + (this.D(s) >>> 16) + (n.D(s) >>> 16);
    (r = o >>> 16), (i &= 65535), (o &= 65535), (e[s] = (o << 16) | i);
  }
  return new V(e, e[e.length - 1] & -2147483648 ? -1 : 0);
};
function Cn(n, t) {
  return n.add(K(t));
}
m.R = function (n) {
  if (_t(this) || _t(n)) return Yt;
  if (st(this)) return st(n) ? K(this).R(K(n)) : K(K(this).R(n));
  if (st(n)) return K(this.R(K(n)));
  if (0 > this.X(Ii) && 0 > n.X(Ii)) return lt(this.ea() * n.ea());
  for (var t = this.g.length + n.g.length, e = [], r = 0; r < 2 * t; r++)
    e[r] = 0;
  for (r = 0; r < this.g.length; r++)
    for (var s = 0; s < n.g.length; s++) {
      var i = this.D(r) >>> 16,
        o = this.D(r) & 65535,
        a = n.D(s) >>> 16,
        u = n.D(s) & 65535;
      (e[2 * r + 2 * s] += o * u),
        hn(e, 2 * r + 2 * s),
        (e[2 * r + 2 * s + 1] += i * u),
        hn(e, 2 * r + 2 * s + 1),
        (e[2 * r + 2 * s + 1] += o * a),
        hn(e, 2 * r + 2 * s + 1),
        (e[2 * r + 2 * s + 2] += i * a),
        hn(e, 2 * r + 2 * s + 2);
    }
  for (r = 0; r < t; r++) e[r] = (e[2 * r + 1] << 16) | e[2 * r];
  for (r = t; r < 2 * t; r++) e[r] = 0;
  return new V(e, 0);
};
function hn(n, t) {
  for (; (n[t] & 65535) != n[t]; )
    (n[t + 1] += n[t] >>> 16), (n[t] &= 65535), t++;
}
function _e(n, t) {
  (this.g = n), (this.h = t);
}
function Pn(n, t) {
  if (_t(t)) throw Error("division by zero");
  if (_t(n)) return new _e(Yt, Yt);
  if (st(n)) return (t = Pn(K(n), t)), new _e(K(t.g), K(t.h));
  if (st(t)) return (t = Pn(n, K(t))), new _e(K(t.g), t.h);
  if (30 < n.g.length) {
    if (st(n) || st(t))
      throw Error("slowDivide_ only works with positive integers.");
    for (var e = Br, r = t; 0 >= r.X(n); ) (e = wi(e)), (r = wi(r));
    var s = zt(e, 1),
      i = zt(r, 1);
    for (r = zt(r, 2), e = zt(e, 2); !_t(r); ) {
      var o = i.add(r);
      0 >= o.X(n) && ((s = s.add(e)), (i = o)), (r = zt(r, 1)), (e = zt(e, 1));
    }
    return (t = Cn(n, s.R(t))), new _e(s, t);
  }
  for (s = Yt; 0 <= n.X(t); ) {
    for (
      e = Math.max(1, Math.floor(n.ea() / t.ea())),
        r = Math.ceil(Math.log(e) / Math.LN2),
        r = 48 >= r ? 1 : Math.pow(2, r - 48),
        i = lt(e),
        o = i.R(t);
      st(o) || 0 < o.X(n);

    )
      (e -= r), (i = lt(e)), (o = i.R(t));
    _t(i) && (i = Br), (s = s.add(i)), (n = Cn(n, o));
  }
  return new _e(s, n);
}
m.gb = function (n) {
  return Pn(this, n).h;
};
m.and = function (n) {
  for (var t = Math.max(this.g.length, n.g.length), e = [], r = 0; r < t; r++)
    e[r] = this.D(r) & n.D(r);
  return new V(e, this.h & n.h);
};
m.or = function (n) {
  for (var t = Math.max(this.g.length, n.g.length), e = [], r = 0; r < t; r++)
    e[r] = this.D(r) | n.D(r);
  return new V(e, this.h | n.h);
};
m.xor = function (n) {
  for (var t = Math.max(this.g.length, n.g.length), e = [], r = 0; r < t; r++)
    e[r] = this.D(r) ^ n.D(r);
  return new V(e, this.h ^ n.h);
};
function wi(n) {
  for (var t = n.g.length + 1, e = [], r = 0; r < t; r++)
    e[r] = (n.D(r) << 1) | (n.D(r - 1) >>> 31);
  return new V(e, n.h);
}
function zt(n, t) {
  var e = t >> 5;
  t %= 32;
  for (var r = n.g.length - e, s = [], i = 0; i < r; i++)
    s[i] =
      0 < t ? (n.D(i + e) >>> t) | (n.D(i + e + 1) << (32 - t)) : n.D(i + e);
  return new V(s, n.h);
}
Sn.prototype.createWebChannel = Sn.prototype.g;
rt.prototype.send = rt.prototype.u;
rt.prototype.open = rt.prototype.m;
rt.prototype.close = rt.prototype.close;
qn.NO_ERROR = 0;
qn.TIMEOUT = 8;
qn.HTTP_ERROR = 6;
Fo.COMPLETE = "complete";
Uo.EventType = Ge;
Ge.OPEN = "a";
Ge.CLOSE = "b";
Ge.ERROR = "c";
Ge.MESSAGE = "d";
j.prototype.listen = j.prototype.O;
O.prototype.listenOnce = O.prototype.P;
O.prototype.getLastError = O.prototype.Sa;
O.prototype.getLastErrorCode = O.prototype.Ia;
O.prototype.getStatus = O.prototype.da;
O.prototype.getResponseJson = O.prototype.Wa;
O.prototype.getResponseText = O.prototype.ja;
O.prototype.send = O.prototype.ha;
O.prototype.setWithCredentials = O.prototype.Oa;
ot.prototype.digest = ot.prototype.l;
ot.prototype.reset = ot.prototype.reset;
ot.prototype.update = ot.prototype.j;
V.prototype.add = V.prototype.add;
V.prototype.multiply = V.prototype.R;
V.prototype.modulo = V.prototype.gb;
V.prototype.compare = V.prototype.X;
V.prototype.toNumber = V.prototype.ea;
V.prototype.toString = V.prototype.toString;
V.prototype.getBits = V.prototype.D;
V.fromNumber = lt;
V.fromString = Ta;
var Xc = function () {
    return new Sn();
  },
  Jc = function () {
    return Bn();
  },
  _r = qn,
  Zc = Fo,
  tl = jt,
  Ai = {
    xb: 0,
    Ab: 1,
    Bb: 2,
    Ub: 3,
    Zb: 4,
    Wb: 5,
    Xb: 6,
    Vb: 7,
    Tb: 8,
    Yb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Rb: 12,
    Nb: 13,
    Ob: 14,
    Mb: 15,
    Pb: 16,
    Qb: 17,
    tb: 18,
    sb: 19,
    ub: 20,
  },
  cn = Uo,
  el = O,
  nl = ot,
  Xt = V;
const Ri = "@firebase/firestore";
/**
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
 */ class W {
  constructor(t) {
    this.uid = t;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(t) {
    return t.uid === this.uid;
  }
}
(W.UNAUTHENTICATED = new W(null)),
  (W.GOOGLE_CREDENTIALS = new W("google-credentials-uid")),
  (W.FIRST_PARTY = new W("first-party-uid")),
  (W.MOCK_USER = new W("mock-user"));
/**
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
 */ let de = "10.7.2";
/**
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
 */ const Ut = new po("@firebase/firestore");
function ye() {
  return Ut.logLevel;
}
function _(n, ...t) {
  if (Ut.logLevel <= R.DEBUG) {
    const e = t.map(Ss);
    Ut.debug(`Firestore (${de}): ${n}`, ...e);
  }
}
function ft(n, ...t) {
  if (Ut.logLevel <= R.ERROR) {
    const e = t.map(Ss);
    Ut.error(`Firestore (${de}): ${n}`, ...e);
  }
}
function ne(n, ...t) {
  if (Ut.logLevel <= R.WARN) {
    const e = t.map(Ss);
    Ut.warn(`Firestore (${de}): ${n}`, ...e);
  }
}
function Ss(n) {
  if (typeof n == "string") return n;
  try {
    /**
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
     */ return (function (e) {
      return JSON.stringify(e);
    })(n);
  } catch {
    return n;
  }
}
/**
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
 */ function I(n = "Unexpected state") {
  const t = `FIRESTORE (${de}) INTERNAL ASSERTION FAILED: ` + n;
  throw (ft(t), new Error(t));
}
function U(n, t) {
  n || I();
}
function C(n, t) {
  return n;
}
/**
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
 */ const p = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class y extends he {
  constructor(t, e) {
    super(t, e),
      (this.code = t),
      (this.message = e),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
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
 */ class At {
  constructor() {
    this.promise = new Promise((t, e) => {
      (this.resolve = t), (this.reject = e);
    });
  }
}
/**
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
 */ class Ia {
  constructor(t, e) {
    (this.user = e),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${t}`);
  }
}
class rl {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(t, e) {
    t.enqueueRetryable(() => e(W.UNAUTHENTICATED));
  }
  shutdown() {}
}
class sl {
  constructor(t) {
    (this.token = t), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(t, e) {
    (this.changeListener = e), t.enqueueRetryable(() => e(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class il {
  constructor(t) {
    (this.t = t),
      (this.currentUser = W.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(t, e) {
    let r = this.i;
    const s = (u) => (this.i !== r ? ((r = this.i), e(u)) : Promise.resolve());
    let i = new At();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        i.resolve(),
        (i = new At()),
        t.enqueueRetryable(() => s(this.currentUser));
    };
    const o = () => {
        const u = i;
        t.enqueueRetryable(async () => {
          await u.promise, await s(this.currentUser);
        });
      },
      a = (u) => {
        _("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = u),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((u) => a(u)),
      setTimeout(() => {
        if (!this.auth) {
          const u = this.t.getImmediate({ optional: !0 });
          u
            ? a(u)
            : (_("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              i.resolve(),
              (i = new At()));
        }
      }, 0),
      o();
  }
  getToken() {
    const t = this.i,
      e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(e)
            .then((r) =>
              this.i !== t
                ? (_(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change.",
                  ),
                  this.getToken())
                : r
                  ? (U(typeof r.accessToken == "string"),
                    new Ia(r.accessToken, this.currentUser))
                  : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const t = this.auth && this.auth.getUid();
    return U(t === null || typeof t == "string"), new W(t);
  }
}
class ol {
  constructor(t, e, r) {
    (this.l = t),
      (this.h = e),
      (this.P = r),
      (this.type = "FirstParty"),
      (this.user = W.FIRST_PARTY),
      (this.I = new Map());
  }
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const t = this.T();
    return (
      t && this.I.set("Authorization", t),
      this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h),
      this.I
    );
  }
}
class al {
  constructor(t, e, r) {
    (this.l = t), (this.h = e), (this.P = r);
  }
  getToken() {
    return Promise.resolve(new ol(this.l, this.h, this.P));
  }
  start(t, e) {
    t.enqueueRetryable(() => e(W.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class ul {
  constructor(t) {
    (this.value = t),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      t && t.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class hl {
  constructor(t) {
    (this.A = t),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.R = null);
  }
  start(t, e) {
    const r = (i) => {
      i.error != null &&
        _(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`,
        );
      const o = i.token !== this.R;
      return (
        (this.R = i.token),
        _(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`,
        ),
        o ? e(i.token) : Promise.resolve()
      );
    };
    this.o = (i) => {
      t.enqueueRetryable(() => r(i));
    };
    const s = (i) => {
      _("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = i),
        this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((i) => s(i)),
      setTimeout(() => {
        if (!this.appCheck) {
          const i = this.A.getImmediate({ optional: !0 });
          i
            ? s(i)
            : _("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const t = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(t)
            .then((e) =>
              e
                ? (U(typeof e.token == "string"),
                  (this.R = e.token),
                  new ul(e.token))
                : null,
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
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
 */ function cl(n) {
  const t = typeof self < "u" && (self.crypto || self.msCrypto),
    e = new Uint8Array(n);
  if (t && typeof t.getRandomValues == "function") t.getRandomValues(e);
  else for (let r = 0; r < n; r++) e[r] = Math.floor(256 * Math.random());
  return e;
}
/**
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
 */ class ll {
  static newId() {
    const t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      e = Math.floor(256 / t.length) * t.length;
    let r = "";
    for (; r.length < 20; ) {
      const s = cl(40);
      for (let i = 0; i < s.length; ++i)
        r.length < 20 && s[i] < e && (r += t.charAt(s[i] % t.length));
    }
    return r;
  }
}
function P(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
function re(n, t, e) {
  return n.length === t.length && n.every((r, s) => e(r, t[s]));
}
/**
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
 */ class q {
  constructor(t, e) {
    if (((this.seconds = t), (this.nanoseconds = e), e < 0))
      throw new y(
        p.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + e,
      );
    if (e >= 1e9)
      throw new y(
        p.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + e,
      );
    if (t < -62135596800)
      throw new y(p.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    if (t >= 253402300800)
      throw new y(p.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
  }
  static now() {
    return q.fromMillis(Date.now());
  }
  static fromDate(t) {
    return q.fromMillis(t.getTime());
  }
  static fromMillis(t) {
    const e = Math.floor(t / 1e3),
      r = Math.floor(1e6 * (t - 1e3 * e));
    return new q(e, r);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(t) {
    return this.seconds === t.seconds
      ? P(this.nanoseconds, t.nanoseconds)
      : P(this.seconds, t.seconds);
  }
  isEqual(t) {
    return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const t = this.seconds - -62135596800;
    return (
      String(t).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
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
 */ class T {
  constructor(t) {
    this.timestamp = t;
  }
  static fromTimestamp(t) {
    return new T(t);
  }
  static min() {
    return new T(new q(0, 0));
  }
  static max() {
    return new T(new q(253402300799, 999999999));
  }
  compareTo(t) {
    return this.timestamp._compareTo(t.timestamp);
  }
  isEqual(t) {
    return this.timestamp.isEqual(t.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
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
 */ class Ue {
  constructor(t, e, r) {
    e === void 0 ? (e = 0) : e > t.length && I(),
      r === void 0 ? (r = t.length - e) : r > t.length - e && I(),
      (this.segments = t),
      (this.offset = e),
      (this.len = r);
  }
  get length() {
    return this.len;
  }
  isEqual(t) {
    return Ue.comparator(this, t) === 0;
  }
  child(t) {
    const e = this.segments.slice(this.offset, this.limit());
    return (
      t instanceof Ue
        ? t.forEach((r) => {
            e.push(r);
          })
        : e.push(t),
      this.construct(e)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(t) {
    return (
      (t = t === void 0 ? 1 : t),
      this.construct(this.segments, this.offset + t, this.length - t)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(t) {
    return this.segments[this.offset + t];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(t) {
    if (t.length < this.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  isImmediateParentOf(t) {
    if (this.length + 1 !== t.length) return !1;
    for (let e = 0; e < this.length; e++)
      if (this.get(e) !== t.get(e)) return !1;
    return !0;
  }
  forEach(t) {
    for (let e = this.offset, r = this.limit(); e < r; e++) t(this.segments[e]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(t, e) {
    const r = Math.min(t.length, e.length);
    for (let s = 0; s < r; s++) {
      const i = t.get(s),
        o = e.get(s);
      if (i < o) return -1;
      if (i > o) return 1;
    }
    return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
  }
}
class k extends Ue {
  construct(t, e, r) {
    return new k(t, e, r);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  static fromString(...t) {
    const e = [];
    for (const r of t) {
      if (r.indexOf("//") >= 0)
        throw new y(
          p.INVALID_ARGUMENT,
          `Invalid segment (${r}). Paths must not contain // in them.`,
        );
      e.push(...r.split("/").filter((s) => s.length > 0));
    }
    return new k(e);
  }
  static emptyPath() {
    return new k([]);
  }
}
const dl = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class X extends Ue {
  construct(t, e, r) {
    return new X(t, e, r);
  }
  static isValidIdentifier(t) {
    return dl.test(t);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (t) => (
          (t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          X.isValidIdentifier(t) || (t = "`" + t + "`"),
          t
        ),
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new X(["__name__"]);
  }
  static fromServerFormat(t) {
    const e = [];
    let r = "",
      s = 0;
    const i = () => {
      if (r.length === 0)
        throw new y(
          p.INVALID_ARGUMENT,
          `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
        );
      e.push(r), (r = "");
    };
    let o = !1;
    for (; s < t.length; ) {
      const a = t[s];
      if (a === "\\") {
        if (s + 1 === t.length)
          throw new y(
            p.INVALID_ARGUMENT,
            "Path has trailing escape character: " + t,
          );
        const u = t[s + 1];
        if (u !== "\\" && u !== "." && u !== "`")
          throw new y(
            p.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + t,
          );
        (r += u), (s += 2);
      } else
        a === "`"
          ? ((o = !o), s++)
          : a !== "." || o
            ? ((r += a), s++)
            : (i(), s++);
    }
    if ((i(), o))
      throw new y(p.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
    return new X(e);
  }
  static emptyPath() {
    return new X([]);
  }
}
/**
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
 */ class E {
  constructor(t) {
    this.path = t;
  }
  static fromPath(t) {
    return new E(k.fromString(t));
  }
  static fromName(t) {
    return new E(k.fromString(t).popFirst(5));
  }
  static empty() {
    return new E(k.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(t) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(t) {
    return t !== null && k.comparator(this.path, t.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(t, e) {
    return k.comparator(t.path, e.path);
  }
  static isDocumentKey(t) {
    return t.length % 2 == 0;
  }
  static fromSegments(t) {
    return new E(new k(t.slice()));
  }
}
function fl(n, t) {
  const e = n.toTimestamp().seconds,
    r = n.toTimestamp().nanoseconds + 1,
    s = T.fromTimestamp(r === 1e9 ? new q(e + 1, 0) : new q(e, r));
  return new Rt(s, E.empty(), t);
}
function pl(n) {
  return new Rt(n.readTime, n.key, -1);
}
class Rt {
  constructor(t, e, r) {
    (this.readTime = t), (this.documentKey = e), (this.largestBatchId = r);
  }
  static min() {
    return new Rt(T.min(), E.empty(), -1);
  }
  static max() {
    return new Rt(T.max(), E.empty(), -1);
  }
}
function gl(n, t) {
  let e = n.readTime.compareTo(t.readTime);
  return e !== 0
    ? e
    : ((e = E.comparator(n.documentKey, t.documentKey)),
      e !== 0 ? e : P(n.largestBatchId, t.largestBatchId));
}
/**
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
 */ const ml =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class _l {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(t) {
    this.onCommittedListeners.push(t);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((t) => t());
  }
}
/**
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
 */ async function Cs(n) {
  if (n.code !== p.FAILED_PRECONDITION || n.message !== ml) throw n;
  _("LocalStore", "Unexpectedly lost primary lease");
}
/**
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
 */ class d {
  constructor(t) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      t(
        (e) => {
          (this.isDone = !0),
            (this.result = e),
            this.nextCallback && this.nextCallback(e);
        },
        (e) => {
          (this.isDone = !0),
            (this.error = e),
            this.catchCallback && this.catchCallback(e);
        },
      );
  }
  catch(t) {
    return this.next(void 0, t);
  }
  next(t, e) {
    return (
      this.callbackAttached && I(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(e, this.error)
          : this.wrapSuccess(t, this.result)
        : new d((r, s) => {
            (this.nextCallback = (i) => {
              this.wrapSuccess(t, i).next(r, s);
            }),
              (this.catchCallback = (i) => {
                this.wrapFailure(e, i).next(r, s);
              });
          })
    );
  }
  toPromise() {
    return new Promise((t, e) => {
      this.next(t, e);
    });
  }
  wrapUserFunction(t) {
    try {
      const e = t();
      return e instanceof d ? e : d.resolve(e);
    } catch (e) {
      return d.reject(e);
    }
  }
  wrapSuccess(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : d.resolve(e);
  }
  wrapFailure(t, e) {
    return t ? this.wrapUserFunction(() => t(e)) : d.reject(e);
  }
  static resolve(t) {
    return new d((e, r) => {
      e(t);
    });
  }
  static reject(t) {
    return new d((e, r) => {
      r(t);
    });
  }
  static waitFor(t) {
    return new d((e, r) => {
      let s = 0,
        i = 0,
        o = !1;
      t.forEach((a) => {
        ++s,
          a.next(
            () => {
              ++i, o && i === s && e();
            },
            (u) => r(u),
          );
      }),
        (o = !0),
        i === s && e();
    });
  }
  static or(t) {
    let e = d.resolve(!1);
    for (const r of t) e = e.next((s) => (s ? d.resolve(s) : r()));
    return e;
  }
  static forEach(t, e) {
    const r = [];
    return (
      t.forEach((s, i) => {
        r.push(e.call(this, s, i));
      }),
      this.waitFor(r)
    );
  }
  static mapArray(t, e) {
    return new d((r, s) => {
      const i = t.length,
        o = new Array(i);
      let a = 0;
      for (let u = 0; u < i; u++) {
        const h = u;
        e(t[h]).next(
          (c) => {
            (o[h] = c), ++a, a === i && r(o);
          },
          (c) => s(c),
        );
      }
    });
  }
  static doWhile(t, e) {
    return new d((r, s) => {
      const i = () => {
        t() === !0
          ? e().next(() => {
              i();
            }, s)
          : r();
      };
      i();
    });
  }
}
/**
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
 */ class Ps {
  constructor(t, e) {
    (this.action = t),
      (this.transaction = e),
      (this.aborted = !1),
      (this.V = new At()),
      (this.transaction.oncomplete = () => {
        this.V.resolve();
      }),
      (this.transaction.onabort = () => {
        e.error ? this.V.reject(new Ae(t, e.error)) : this.V.resolve();
      }),
      (this.transaction.onerror = (r) => {
        const s = Vs(r.target.error);
        this.V.reject(new Ae(t, s));
      });
  }
  static open(t, e, r, s) {
    try {
      return new Ps(e, t.transaction(s, r));
    } catch (i) {
      throw new Ae(e, i);
    }
  }
  get m() {
    return this.V.promise;
  }
  abort(t) {
    t && this.V.reject(t),
      this.aborted ||
        (_(
          "SimpleDb",
          "Aborting transaction:",
          t ? t.message : "Client-initiated abort",
        ),
        (this.aborted = !0),
        this.transaction.abort());
  }
  g() {
    const t = this.transaction;
    this.aborted || typeof t.commit != "function" || t.commit();
  }
  store(t) {
    const e = this.transaction.objectStore(t);
    return new El(e);
  }
}
class Ot {
  constructor(t, e, r) {
    (this.name = t),
      (this.version = e),
      (this.p = r),
      Ot.S(En()) === 12.2 &&
        ft(
          "Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.",
        );
  }
  static delete(t) {
    return (
      _("SimpleDb", "Removing database:", t),
      bt(window.indexedDB.deleteDatabase(t)).toPromise()
    );
  }
  static D() {
    if (!lo()) return !1;
    if (Ot.C()) return !0;
    const t = En(),
      e = Ot.S(t),
      r = 0 < e && e < 10,
      s = Ot.v(t),
      i = 0 < s && s < 4.5;
    return !(
      t.indexOf("MSIE ") > 0 ||
      t.indexOf("Trident/") > 0 ||
      t.indexOf("Edge/") > 0 ||
      r ||
      i
    );
  }
  static C() {
    var t;
    return (
      typeof process < "u" &&
      ((t = process.__PRIVATE_env) === null || t === void 0 ? void 0 : t.F) ===
        "YES"
    );
  }
  static M(t, e) {
    return t.store(e);
  }
  static S(t) {
    const e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
      r = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  static v(t) {
    const e = t.match(/Android ([\d.]+)/i),
      r = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
    return Number(r);
  }
  async O(t) {
    return (
      this.db ||
        (_("SimpleDb", "Opening database:", this.name),
        (this.db = await new Promise((e, r) => {
          const s = indexedDB.open(this.name, this.version);
          (s.onsuccess = (i) => {
            const o = i.target.result;
            e(o);
          }),
            (s.onblocked = () => {
              r(
                new Ae(
                  t,
                  "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.",
                ),
              );
            }),
            (s.onerror = (i) => {
              const o = i.target.error;
              o.name === "VersionError"
                ? r(
                    new y(
                      p.FAILED_PRECONDITION,
                      "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.",
                    ),
                  )
                : o.name === "InvalidStateError"
                  ? r(
                      new y(
                        p.FAILED_PRECONDITION,
                        "Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: " +
                          o,
                      ),
                    )
                  : r(new Ae(t, o));
            }),
            (s.onupgradeneeded = (i) => {
              _(
                "SimpleDb",
                'Database "' + this.name + '" requires upgrade from version:',
                i.oldVersion,
              );
              const o = i.target.result;
              this.p
                .N(o, s.transaction, i.oldVersion, this.version)
                .next(() => {
                  _(
                    "SimpleDb",
                    "Database upgrade to version " + this.version + " complete",
                  );
                });
            });
        }))),
      this.B && (this.db.onversionchange = (e) => this.B(e)),
      this.db
    );
  }
  L(t) {
    (this.B = t), this.db && (this.db.onversionchange = (e) => t(e));
  }
  async runTransaction(t, e, r, s) {
    const i = e === "readonly";
    let o = 0;
    for (;;) {
      ++o;
      try {
        this.db = await this.O(t);
        const a = Ps.open(this.db, t, i ? "readonly" : "readwrite", r),
          u = s(a)
            .next((h) => (a.g(), h))
            .catch((h) => (a.abort(h), d.reject(h)))
            .toPromise();
        return u.catch(() => {}), await a.m, u;
      } catch (a) {
        const u = a,
          h = u.name !== "FirebaseError" && o < 3;
        if (
          (_(
            "SimpleDb",
            "Transaction failed with error:",
            u.message,
            "Retrying:",
            h,
          ),
          this.close(),
          !h)
        )
          return Promise.reject(u);
      }
    }
  }
  close() {
    this.db && this.db.close(), (this.db = void 0);
  }
}
class yl {
  constructor(t) {
    (this.k = t), (this.q = !1), (this.K = null);
  }
  get isDone() {
    return this.q;
  }
  get $() {
    return this.K;
  }
  set cursor(t) {
    this.k = t;
  }
  done() {
    this.q = !0;
  }
  U(t) {
    this.K = t;
  }
  delete() {
    return bt(this.k.delete());
  }
}
class Ae extends y {
  constructor(t, e) {
    super(p.UNAVAILABLE, `IndexedDB transaction '${t}' failed: ${e}`),
      (this.name = "IndexedDbTransactionError");
  }
}
function Xe(n) {
  return n.name === "IndexedDbTransactionError";
}
class El {
  constructor(t) {
    this.store = t;
  }
  put(t, e) {
    let r;
    return (
      e !== void 0
        ? (_("SimpleDb", "PUT", this.store.name, t, e),
          (r = this.store.put(e, t)))
        : (_("SimpleDb", "PUT", this.store.name, "<auto-key>", t),
          (r = this.store.put(t))),
      bt(r)
    );
  }
  add(t) {
    return _("SimpleDb", "ADD", this.store.name, t, t), bt(this.store.add(t));
  }
  get(t) {
    return bt(this.store.get(t)).next(
      (e) => (
        e === void 0 && (e = null),
        _("SimpleDb", "GET", this.store.name, t, e),
        e
      ),
    );
  }
  delete(t) {
    return (
      _("SimpleDb", "DELETE", this.store.name, t), bt(this.store.delete(t))
    );
  }
  count() {
    return _("SimpleDb", "COUNT", this.store.name), bt(this.store.count());
  }
  W(t, e) {
    const r = this.options(t, e),
      s = r.index ? this.store.index(r.index) : this.store;
    if (typeof s.getAll == "function") {
      const i = s.getAll(r.range);
      return new d((o, a) => {
        (i.onerror = (u) => {
          a(u.target.error);
        }),
          (i.onsuccess = (u) => {
            o(u.target.result);
          });
      });
    }
    {
      const i = this.cursor(r),
        o = [];
      return this.G(i, (a, u) => {
        o.push(u);
      }).next(() => o);
    }
  }
  j(t, e) {
    const r = this.store.getAll(t, e === null ? void 0 : e);
    return new d((s, i) => {
      (r.onerror = (o) => {
        i(o.target.error);
      }),
        (r.onsuccess = (o) => {
          s(o.target.result);
        });
    });
  }
  H(t, e) {
    _("SimpleDb", "DELETE ALL", this.store.name);
    const r = this.options(t, e);
    r.J = !1;
    const s = this.cursor(r);
    return this.G(s, (i, o, a) => a.delete());
  }
  Y(t, e) {
    let r;
    e ? (r = t) : ((r = {}), (e = t));
    const s = this.cursor(r);
    return this.G(s, e);
  }
  Z(t) {
    const e = this.cursor({});
    return new d((r, s) => {
      (e.onerror = (i) => {
        const o = Vs(i.target.error);
        s(o);
      }),
        (e.onsuccess = (i) => {
          const o = i.target.result;
          o
            ? t(o.primaryKey, o.value).next((a) => {
                a ? o.continue() : r();
              })
            : r();
        });
    });
  }
  G(t, e) {
    const r = [];
    return new d((s, i) => {
      (t.onerror = (o) => {
        i(o.target.error);
      }),
        (t.onsuccess = (o) => {
          const a = o.target.result;
          if (!a) return void s();
          const u = new yl(a),
            h = e(a.primaryKey, a.value, u);
          if (h instanceof d) {
            const c = h.catch((l) => (u.done(), d.reject(l)));
            r.push(c);
          }
          u.isDone ? s() : u.$ === null ? a.continue() : a.continue(u.$);
        });
    }).next(() => d.waitFor(r));
  }
  options(t, e) {
    let r;
    return (
      t !== void 0 && (typeof t == "string" ? (r = t) : (e = t)),
      { index: r, range: e }
    );
  }
  cursor(t) {
    let e = "next";
    if ((t.reverse && (e = "prev"), t.index)) {
      const r = this.store.index(t.index);
      return t.J ? r.openKeyCursor(t.range, e) : r.openCursor(t.range, e);
    }
    return this.store.openCursor(t.range, e);
  }
}
function bt(n) {
  return new d((t, e) => {
    (n.onsuccess = (r) => {
      const s = r.target.result;
      t(s);
    }),
      (n.onerror = (r) => {
        const s = Vs(r.target.error);
        e(s);
      });
  });
}
let Si = !1;
function Vs(n) {
  const t = Ot.S(En());
  if (t >= 12.2 && t < 13) {
    const e =
      "An internal error was encountered in the Indexed Database server";
    if (n.message.indexOf(e) >= 0) {
      const r = new y(
        "internal",
        `IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`,
      );
      return (
        Si ||
          ((Si = !0),
          setTimeout(() => {
            throw r;
          }, 0)),
        r
      );
    }
  }
  return n;
}
/**
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
 */ class Ds {
  constructor(t, e) {
    (this.previousValue = t),
      e &&
        ((e.sequenceNumberHandler = (r) => this.se(r)),
        (this.oe = (r) => e.writeSequenceNumber(r)));
  }
  se(t) {
    return (
      (this.previousValue = Math.max(t, this.previousValue)), this.previousValue
    );
  }
  next() {
    const t = ++this.previousValue;
    return this.oe && this.oe(t), t;
  }
}
Ds._e = -1;
function Yn(n) {
  return n == null;
}
function Vn(n) {
  return n === 0 && 1 / n == -1 / 0;
}
function vl(n) {
  return (
    typeof n == "number" &&
    Number.isInteger(n) &&
    !Vn(n) &&
    n <= Number.MAX_SAFE_INTEGER &&
    n >= Number.MIN_SAFE_INTEGER
  );
}
/**
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
 */ function Ci(n) {
  let t = 0;
  for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t++;
  return t;
}
function Je(n, t) {
  for (const e in n) Object.prototype.hasOwnProperty.call(n, e) && t(e, n[e]);
}
function wa(n) {
  for (const t in n) if (Object.prototype.hasOwnProperty.call(n, t)) return !1;
  return !0;
}
/**
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
 */ class x {
  constructor(t, e) {
    (this.comparator = t), (this.root = e || z.EMPTY);
  }
  insert(t, e) {
    return new x(
      this.comparator,
      this.root
        .insert(t, e, this.comparator)
        .copy(null, null, z.BLACK, null, null),
    );
  }
  remove(t) {
    return new x(
      this.comparator,
      this.root
        .remove(t, this.comparator)
        .copy(null, null, z.BLACK, null, null),
    );
  }
  get(t) {
    let e = this.root;
    for (; !e.isEmpty(); ) {
      const r = this.comparator(t, e.key);
      if (r === 0) return e.value;
      r < 0 ? (e = e.left) : r > 0 && (e = e.right);
    }
    return null;
  }
  indexOf(t) {
    let e = 0,
      r = this.root;
    for (; !r.isEmpty(); ) {
      const s = this.comparator(t, r.key);
      if (s === 0) return e + r.left.size;
      s < 0 ? (r = r.left) : ((e += r.left.size + 1), (r = r.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(t) {
    return this.root.inorderTraversal(t);
  }
  forEach(t) {
    this.inorderTraversal((e, r) => (t(e, r), !1));
  }
  toString() {
    const t = [];
    return (
      this.inorderTraversal((e, r) => (t.push(`${e}:${r}`), !1)),
      `{${t.join(", ")}}`
    );
  }
  reverseTraversal(t) {
    return this.root.reverseTraversal(t);
  }
  getIterator() {
    return new ln(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(t) {
    return new ln(this.root, t, this.comparator, !1);
  }
  getReverseIterator() {
    return new ln(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(t) {
    return new ln(this.root, t, this.comparator, !0);
  }
}
class ln {
  constructor(t, e, r, s) {
    (this.isReverse = s), (this.nodeStack = []);
    let i = 1;
    for (; !t.isEmpty(); )
      if (((i = e ? r(t.key, e) : 1), e && s && (i *= -1), i < 0))
        t = this.isReverse ? t.left : t.right;
      else {
        if (i === 0) {
          this.nodeStack.push(t);
          break;
        }
        this.nodeStack.push(t), (t = this.isReverse ? t.right : t.left);
      }
  }
  getNext() {
    let t = this.nodeStack.pop();
    const e = { key: t.key, value: t.value };
    if (this.isReverse)
      for (t = t.left; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.right);
    else for (t = t.right; !t.isEmpty(); ) this.nodeStack.push(t), (t = t.left);
    return e;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const t = this.nodeStack[this.nodeStack.length - 1];
    return { key: t.key, value: t.value };
  }
}
class z {
  constructor(t, e, r, s, i) {
    (this.key = t),
      (this.value = e),
      (this.color = r ?? z.RED),
      (this.left = s ?? z.EMPTY),
      (this.right = i ?? z.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(t, e, r, s, i) {
    return new z(
      t ?? this.key,
      e ?? this.value,
      r ?? this.color,
      s ?? this.left,
      i ?? this.right,
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(t) {
    return (
      this.left.inorderTraversal(t) ||
      t(this.key, this.value) ||
      this.right.inorderTraversal(t)
    );
  }
  reverseTraversal(t) {
    return (
      this.right.reverseTraversal(t) ||
      t(this.key, this.value) ||
      this.left.reverseTraversal(t)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(t, e, r) {
    let s = this;
    const i = r(t, s.key);
    return (
      (s =
        i < 0
          ? s.copy(null, null, null, s.left.insert(t, e, r), null)
          : i === 0
            ? s.copy(null, e, null, null, null)
            : s.copy(null, null, null, null, s.right.insert(t, e, r))),
      s.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return z.EMPTY;
    let t = this;
    return (
      t.left.isRed() || t.left.left.isRed() || (t = t.moveRedLeft()),
      (t = t.copy(null, null, null, t.left.removeMin(), null)),
      t.fixUp()
    );
  }
  remove(t, e) {
    let r,
      s = this;
    if (e(t, s.key) < 0)
      s.left.isEmpty() ||
        s.left.isRed() ||
        s.left.left.isRed() ||
        (s = s.moveRedLeft()),
        (s = s.copy(null, null, null, s.left.remove(t, e), null));
    else {
      if (
        (s.left.isRed() && (s = s.rotateRight()),
        s.right.isEmpty() ||
          s.right.isRed() ||
          s.right.left.isRed() ||
          (s = s.moveRedRight()),
        e(t, s.key) === 0)
      ) {
        if (s.right.isEmpty()) return z.EMPTY;
        (r = s.right.min()),
          (s = s.copy(r.key, r.value, null, null, s.right.removeMin()));
      }
      s = s.copy(null, null, null, null, s.right.remove(t, e));
    }
    return s.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let t = this;
    return (
      t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()),
      t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()),
      t.left.isRed() && t.right.isRed() && (t = t.colorFlip()),
      t
    );
  }
  moveRedLeft() {
    let t = this.colorFlip();
    return (
      t.right.left.isRed() &&
        ((t = t.copy(null, null, null, null, t.right.rotateRight())),
        (t = t.rotateLeft()),
        (t = t.colorFlip())),
      t
    );
  }
  moveRedRight() {
    let t = this.colorFlip();
    return (
      t.left.left.isRed() && ((t = t.rotateRight()), (t = t.colorFlip())), t
    );
  }
  rotateLeft() {
    const t = this.copy(null, null, z.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, t, null);
  }
  rotateRight() {
    const t = this.copy(null, null, z.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, t);
  }
  colorFlip() {
    const t = this.left.copy(null, null, !this.left.color, null, null),
      e = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, t, e);
  }
  checkMaxDepth() {
    const t = this.check();
    return Math.pow(2, t) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw I();
    const t = this.left.check();
    if (t !== this.right.check()) throw I();
    return t + (this.isRed() ? 0 : 1);
  }
}
(z.EMPTY = null), (z.RED = !0), (z.BLACK = !1);
z.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw I();
  }
  get value() {
    throw I();
  }
  get color() {
    throw I();
  }
  get left() {
    throw I();
  }
  get right() {
    throw I();
  }
  copy(t, e, r, s, i) {
    return this;
  }
  insert(t, e, r) {
    return new z(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
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
 */ class Q {
  constructor(t) {
    (this.comparator = t), (this.data = new x(this.comparator));
  }
  has(t) {
    return this.data.get(t) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(t) {
    return this.data.indexOf(t);
  }
  forEach(t) {
    this.data.inorderTraversal((e, r) => (t(e), !1));
  }
  forEachInRange(t, e) {
    const r = this.data.getIteratorFrom(t[0]);
    for (; r.hasNext(); ) {
      const s = r.getNext();
      if (this.comparator(s.key, t[1]) >= 0) return;
      e(s.key);
    }
  }
  forEachWhile(t, e) {
    let r;
    for (
      r = e !== void 0 ? this.data.getIteratorFrom(e) : this.data.getIterator();
      r.hasNext();

    )
      if (!t(r.getNext().key)) return;
  }
  firstAfterOrEqual(t) {
    const e = this.data.getIteratorFrom(t);
    return e.hasNext() ? e.getNext().key : null;
  }
  getIterator() {
    return new Pi(this.data.getIterator());
  }
  getIteratorFrom(t) {
    return new Pi(this.data.getIteratorFrom(t));
  }
  add(t) {
    return this.copy(this.data.remove(t).insert(t, !0));
  }
  delete(t) {
    return this.has(t) ? this.copy(this.data.remove(t)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(t) {
    let e = this;
    return (
      e.size < t.size && ((e = t), (t = this)),
      t.forEach((r) => {
        e = e.add(r);
      }),
      e
    );
  }
  isEqual(t) {
    if (!(t instanceof Q) || this.size !== t.size) return !1;
    const e = this.data.getIterator(),
      r = t.data.getIterator();
    for (; e.hasNext(); ) {
      const s = e.getNext().key,
        i = r.getNext().key;
      if (this.comparator(s, i) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const t = [];
    return (
      this.forEach((e) => {
        t.push(e);
      }),
      t
    );
  }
  toString() {
    const t = [];
    return this.forEach((e) => t.push(e)), "SortedSet(" + t.toString() + ")";
  }
  copy(t) {
    const e = new Q(this.comparator);
    return (e.data = t), e;
  }
}
class Pi {
  constructor(t) {
    this.iter = t;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
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
 */ class vt {
  constructor(t) {
    (this.fields = t), t.sort(X.comparator);
  }
  static empty() {
    return new vt([]);
  }
  unionWith(t) {
    let e = new Q(X.comparator);
    for (const r of this.fields) e = e.add(r);
    for (const r of t) e = e.add(r);
    return new vt(e.toArray());
  }
  covers(t) {
    for (const e of this.fields) if (e.isPrefixOf(t)) return !0;
    return !1;
  }
  isEqual(t) {
    return re(this.fields, t.fields, (e, r) => e.isEqual(r));
  }
}
/**
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
 */ class Aa extends Error {
  constructor() {
    super(...arguments), (this.name = "Base64DecodeError");
  }
}
/**
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
 */ class tt {
  constructor(t) {
    this.binaryString = t;
  }
  static fromBase64String(t) {
    const e = (function (s) {
      try {
        return atob(s);
      } catch (i) {
        throw typeof DOMException < "u" && i instanceof DOMException
          ? new Aa("Invalid base64 string: " + i)
          : i;
      }
    })(t);
    return new tt(e);
  }
  static fromUint8Array(t) {
    const e = (function (s) {
      let i = "";
      for (let o = 0; o < s.length; ++o) i += String.fromCharCode(s[o]);
      return i;
    })(t);
    return new tt(e);
  }
  [Symbol.iterator]() {
    let t = 0;
    return {
      next: () =>
        t < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(t++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (function (e) {
      return btoa(e);
    })(this.binaryString);
  }
  toUint8Array() {
    return (function (e) {
      const r = new Uint8Array(e.length);
      for (let s = 0; s < e.length; s++) r[s] = e.charCodeAt(s);
      return r;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(t) {
    return P(this.binaryString, t.binaryString);
  }
  isEqual(t) {
    return this.binaryString === t.binaryString;
  }
}
tt.EMPTY_BYTE_STRING = new tt("");
const Tl = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function St(n) {
  if ((U(!!n), typeof n == "string")) {
    let t = 0;
    const e = Tl.exec(n);
    if ((U(!!e), e[1])) {
      let s = e[1];
      (s = (s + "000000000").substr(0, 9)), (t = Number(s));
    }
    const r = new Date(n);
    return { seconds: Math.floor(r.getTime() / 1e3), nanos: t };
  }
  return { seconds: L(n.seconds), nanos: L(n.nanos) };
}
function L(n) {
  return typeof n == "number" ? n : typeof n == "string" ? Number(n) : 0;
}
function Bt(n) {
  return typeof n == "string" ? tt.fromBase64String(n) : tt.fromUint8Array(n);
}
/**
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
 */ function bs(n) {
  var t, e;
  return (
    ((e = (
      ((t = n?.mapValue) === null || t === void 0 ? void 0 : t.fields) || {}
    ).__type__) === null || e === void 0
      ? void 0
      : e.stringValue) === "server_timestamp"
  );
}
function Ns(n) {
  const t = n.mapValue.fields.__previous_value__;
  return bs(t) ? Ns(t) : t;
}
function Be(n) {
  const t = St(n.mapValue.fields.__local_write_time__.timestampValue);
  return new q(t.seconds, t.nanos);
}
/**
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
 */ class Il {
  constructor(t, e, r, s, i, o, a, u, h) {
    (this.databaseId = t),
      (this.appId = e),
      (this.persistenceKey = r),
      (this.host = s),
      (this.ssl = i),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.longPollingOptions = u),
      (this.useFetchStreams = h);
  }
}
class qe {
  constructor(t, e) {
    (this.projectId = t), (this.database = e || "(default)");
  }
  static empty() {
    return new qe("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(t) {
    return (
      t instanceof qe &&
      t.projectId === this.projectId &&
      t.database === this.database
    );
  }
}
/**
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
 */ const dn = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function qt(n) {
  return "nullValue" in n
    ? 0
    : "booleanValue" in n
      ? 1
      : "integerValue" in n || "doubleValue" in n
        ? 2
        : "timestampValue" in n
          ? 3
          : "stringValue" in n
            ? 5
            : "bytesValue" in n
              ? 6
              : "referenceValue" in n
                ? 7
                : "geoPointValue" in n
                  ? 8
                  : "arrayValue" in n
                    ? 9
                    : "mapValue" in n
                      ? bs(n)
                        ? 4
                        : wl(n)
                          ? 9007199254740991
                          : 10
                      : I();
}
function pt(n, t) {
  if (n === t) return !0;
  const e = qt(n);
  if (e !== qt(t)) return !1;
  switch (e) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return n.booleanValue === t.booleanValue;
    case 4:
      return Be(n).isEqual(Be(t));
    case 3:
      return (function (s, i) {
        if (
          typeof s.timestampValue == "string" &&
          typeof i.timestampValue == "string" &&
          s.timestampValue.length === i.timestampValue.length
        )
          return s.timestampValue === i.timestampValue;
        const o = St(s.timestampValue),
          a = St(i.timestampValue);
        return o.seconds === a.seconds && o.nanos === a.nanos;
      })(n, t);
    case 5:
      return n.stringValue === t.stringValue;
    case 6:
      return (function (s, i) {
        return Bt(s.bytesValue).isEqual(Bt(i.bytesValue));
      })(n, t);
    case 7:
      return n.referenceValue === t.referenceValue;
    case 8:
      return (function (s, i) {
        return (
          L(s.geoPointValue.latitude) === L(i.geoPointValue.latitude) &&
          L(s.geoPointValue.longitude) === L(i.geoPointValue.longitude)
        );
      })(n, t);
    case 2:
      return (function (s, i) {
        if ("integerValue" in s && "integerValue" in i)
          return L(s.integerValue) === L(i.integerValue);
        if ("doubleValue" in s && "doubleValue" in i) {
          const o = L(s.doubleValue),
            a = L(i.doubleValue);
          return o === a ? Vn(o) === Vn(a) : isNaN(o) && isNaN(a);
        }
        return !1;
      })(n, t);
    case 9:
      return re(n.arrayValue.values || [], t.arrayValue.values || [], pt);
    case 10:
      return (function (s, i) {
        const o = s.mapValue.fields || {},
          a = i.mapValue.fields || {};
        if (Ci(o) !== Ci(a)) return !1;
        for (const u in o)
          if (o.hasOwnProperty(u) && (a[u] === void 0 || !pt(o[u], a[u])))
            return !1;
        return !0;
      })(n, t);
    default:
      return I();
  }
}
function je(n, t) {
  return (n.values || []).find((e) => pt(e, t)) !== void 0;
}
function se(n, t) {
  if (n === t) return 0;
  const e = qt(n),
    r = qt(t);
  if (e !== r) return P(e, r);
  switch (e) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return P(n.booleanValue, t.booleanValue);
    case 2:
      return (function (i, o) {
        const a = L(i.integerValue || i.doubleValue),
          u = L(o.integerValue || o.doubleValue);
        return a < u
          ? -1
          : a > u
            ? 1
            : a === u
              ? 0
              : isNaN(a)
                ? isNaN(u)
                  ? 0
                  : -1
                : 1;
      })(n, t);
    case 3:
      return Vi(n.timestampValue, t.timestampValue);
    case 4:
      return Vi(Be(n), Be(t));
    case 5:
      return P(n.stringValue, t.stringValue);
    case 6:
      return (function (i, o) {
        const a = Bt(i),
          u = Bt(o);
        return a.compareTo(u);
      })(n.bytesValue, t.bytesValue);
    case 7:
      return (function (i, o) {
        const a = i.split("/"),
          u = o.split("/");
        for (let h = 0; h < a.length && h < u.length; h++) {
          const c = P(a[h], u[h]);
          if (c !== 0) return c;
        }
        return P(a.length, u.length);
      })(n.referenceValue, t.referenceValue);
    case 8:
      return (function (i, o) {
        const a = P(L(i.latitude), L(o.latitude));
        return a !== 0 ? a : P(L(i.longitude), L(o.longitude));
      })(n.geoPointValue, t.geoPointValue);
    case 9:
      return (function (i, o) {
        const a = i.values || [],
          u = o.values || [];
        for (let h = 0; h < a.length && h < u.length; ++h) {
          const c = se(a[h], u[h]);
          if (c) return c;
        }
        return P(a.length, u.length);
      })(n.arrayValue, t.arrayValue);
    case 10:
      return (function (i, o) {
        if (i === dn.mapValue && o === dn.mapValue) return 0;
        if (i === dn.mapValue) return 1;
        if (o === dn.mapValue) return -1;
        const a = i.fields || {},
          u = Object.keys(a),
          h = o.fields || {},
          c = Object.keys(h);
        u.sort(), c.sort();
        for (let l = 0; l < u.length && l < c.length; ++l) {
          const f = P(u[l], c[l]);
          if (f !== 0) return f;
          const g = se(a[u[l]], h[c[l]]);
          if (g !== 0) return g;
        }
        return P(u.length, c.length);
      })(n.mapValue, t.mapValue);
    default:
      throw I();
  }
}
function Vi(n, t) {
  if (typeof n == "string" && typeof t == "string" && n.length === t.length)
    return P(n, t);
  const e = St(n),
    r = St(t),
    s = P(e.seconds, r.seconds);
  return s !== 0 ? s : P(e.nanos, r.nanos);
}
function ie(n) {
  return qr(n);
}
function qr(n) {
  return "nullValue" in n
    ? "null"
    : "booleanValue" in n
      ? "" + n.booleanValue
      : "integerValue" in n
        ? "" + n.integerValue
        : "doubleValue" in n
          ? "" + n.doubleValue
          : "timestampValue" in n
            ? (function (e) {
                const r = St(e);
                return `time(${r.seconds},${r.nanos})`;
              })(n.timestampValue)
            : "stringValue" in n
              ? n.stringValue
              : "bytesValue" in n
                ? (function (e) {
                    return Bt(e).toBase64();
                  })(n.bytesValue)
                : "referenceValue" in n
                  ? (function (e) {
                      return E.fromName(e).toString();
                    })(n.referenceValue)
                  : "geoPointValue" in n
                    ? (function (e) {
                        return `geo(${e.latitude},${e.longitude})`;
                      })(n.geoPointValue)
                    : "arrayValue" in n
                      ? (function (e) {
                          let r = "[",
                            s = !0;
                          for (const i of e.values || [])
                            s ? (s = !1) : (r += ","), (r += qr(i));
                          return r + "]";
                        })(n.arrayValue)
                      : "mapValue" in n
                        ? (function (e) {
                            const r = Object.keys(e.fields || {}).sort();
                            let s = "{",
                              i = !0;
                            for (const o of r)
                              i ? (i = !1) : (s += ","),
                                (s += `${o}:${qr(e.fields[o])}`);
                            return s + "}";
                          })(n.mapValue)
                        : I();
}
function Di(n, t) {
  return {
    referenceValue: `projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`,
  };
}
function jr(n) {
  return !!n && "integerValue" in n;
}
function ks(n) {
  return !!n && "arrayValue" in n;
}
function bi(n) {
  return !!n && "nullValue" in n;
}
function Ni(n) {
  return !!n && "doubleValue" in n && isNaN(Number(n.doubleValue));
}
function yr(n) {
  return !!n && "mapValue" in n;
}
function Re(n) {
  if (n.geoPointValue)
    return { geoPointValue: Object.assign({}, n.geoPointValue) };
  if (n.timestampValue && typeof n.timestampValue == "object")
    return { timestampValue: Object.assign({}, n.timestampValue) };
  if (n.mapValue) {
    const t = { mapValue: { fields: {} } };
    return Je(n.mapValue.fields, (e, r) => (t.mapValue.fields[e] = Re(r))), t;
  }
  if (n.arrayValue) {
    const t = { arrayValue: { values: [] } };
    for (let e = 0; e < (n.arrayValue.values || []).length; ++e)
      t.arrayValue.values[e] = Re(n.arrayValue.values[e]);
    return t;
  }
  return Object.assign({}, n);
}
function wl(n) {
  return (
    (((n.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
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
 */ class ht {
  constructor(t) {
    this.value = t;
  }
  static empty() {
    return new ht({ mapValue: {} });
  }
  field(t) {
    if (t.isEmpty()) return this.value;
    {
      let e = this.value;
      for (let r = 0; r < t.length - 1; ++r)
        if (((e = (e.mapValue.fields || {})[t.get(r)]), !yr(e))) return null;
      return (e = (e.mapValue.fields || {})[t.lastSegment()]), e || null;
    }
  }
  set(t, e) {
    this.getFieldsMap(t.popLast())[t.lastSegment()] = Re(e);
  }
  setAll(t) {
    let e = X.emptyPath(),
      r = {},
      s = [];
    t.forEach((o, a) => {
      if (!e.isImmediateParentOf(a)) {
        const u = this.getFieldsMap(e);
        this.applyChanges(u, r, s), (r = {}), (s = []), (e = a.popLast());
      }
      o ? (r[a.lastSegment()] = Re(o)) : s.push(a.lastSegment());
    });
    const i = this.getFieldsMap(e);
    this.applyChanges(i, r, s);
  }
  delete(t) {
    const e = this.field(t.popLast());
    yr(e) && e.mapValue.fields && delete e.mapValue.fields[t.lastSegment()];
  }
  isEqual(t) {
    return pt(this.value, t.value);
  }
  getFieldsMap(t) {
    let e = this.value;
    e.mapValue.fields || (e.mapValue = { fields: {} });
    for (let r = 0; r < t.length; ++r) {
      let s = e.mapValue.fields[t.get(r)];
      (yr(s) && s.mapValue.fields) ||
        ((s = { mapValue: { fields: {} } }), (e.mapValue.fields[t.get(r)] = s)),
        (e = s);
    }
    return e.mapValue.fields;
  }
  applyChanges(t, e, r) {
    Je(e, (s, i) => (t[s] = i));
    for (const s of r) delete t[s];
  }
  clone() {
    return new ht(Re(this.value));
  }
}
/**
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
 */ class Y {
  constructor(t, e, r, s, i, o, a) {
    (this.key = t),
      (this.documentType = e),
      (this.version = r),
      (this.readTime = s),
      (this.createTime = i),
      (this.data = o),
      (this.documentState = a);
  }
  static newInvalidDocument(t) {
    return new Y(t, 0, T.min(), T.min(), T.min(), ht.empty(), 0);
  }
  static newFoundDocument(t, e, r, s) {
    return new Y(t, 1, e, T.min(), r, s, 0);
  }
  static newNoDocument(t, e) {
    return new Y(t, 2, e, T.min(), T.min(), ht.empty(), 0);
  }
  static newUnknownDocument(t, e) {
    return new Y(t, 3, e, T.min(), T.min(), ht.empty(), 2);
  }
  convertToFoundDocument(t, e) {
    return (
      !this.createTime.isEqual(T.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = t),
      (this.version = t),
      (this.documentType = 1),
      (this.data = e),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 2),
      (this.data = ht.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(t) {
    return (
      (this.version = t),
      (this.documentType = 3),
      (this.data = ht.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = T.min()), this;
  }
  setReadTime(t) {
    return (this.readTime = t), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(t) {
    return (
      t instanceof Y &&
      this.key.isEqual(t.key) &&
      this.version.isEqual(t.version) &&
      this.documentType === t.documentType &&
      this.documentState === t.documentState &&
      this.data.isEqual(t.data)
    );
  }
  mutableCopy() {
    return new Y(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState,
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
}
/**
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
 */ class Dn {
  constructor(t, e) {
    (this.position = t), (this.inclusive = e);
  }
}
function ki(n, t, e) {
  let r = 0;
  for (let s = 0; s < n.position.length; s++) {
    const i = t[s],
      o = n.position[s];
    if (
      (i.field.isKeyField()
        ? (r = E.comparator(E.fromName(o.referenceValue), e.key))
        : (r = se(o, e.data.field(i.field))),
      i.dir === "desc" && (r *= -1),
      r !== 0)
    )
      break;
  }
  return r;
}
function Oi(n, t) {
  if (n === null) return t === null;
  if (
    t === null ||
    n.inclusive !== t.inclusive ||
    n.position.length !== t.position.length
  )
    return !1;
  for (let e = 0; e < n.position.length; e++)
    if (!pt(n.position[e], t.position[e])) return !1;
  return !0;
}
/**
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
 */ class bn {
  constructor(t, e = "asc") {
    (this.field = t), (this.dir = e);
  }
}
function Al(n, t) {
  return n.dir === t.dir && n.field.isEqual(t.field);
}
/**
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
 */ class Ra {}
class F extends Ra {
  constructor(t, e, r) {
    super(), (this.field = t), (this.op = e), (this.value = r);
  }
  static create(t, e, r) {
    return t.isKeyField()
      ? e === "in" || e === "not-in"
        ? this.createKeyFieldInFilter(t, e, r)
        : new Sl(t, e, r)
      : e === "array-contains"
        ? new Vl(t, r)
        : e === "in"
          ? new Dl(t, r)
          : e === "not-in"
            ? new bl(t, r)
            : e === "array-contains-any"
              ? new Nl(t, r)
              : new F(t, e, r);
  }
  static createKeyFieldInFilter(t, e, r) {
    return e === "in" ? new Cl(t, r) : new Pl(t, r);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return this.op === "!="
      ? e !== null && this.matchesComparison(se(e, this.value))
      : e !== null &&
          qt(this.value) === qt(e) &&
          this.matchesComparison(se(e, this.value));
  }
  matchesComparison(t) {
    switch (this.op) {
      case "<":
        return t < 0;
      case "<=":
        return t <= 0;
      case "==":
        return t === 0;
      case "!=":
        return t !== 0;
      case ">":
        return t > 0;
      case ">=":
        return t >= 0;
      default:
        return I();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
}
class at extends Ra {
  constructor(t, e) {
    super(), (this.filters = t), (this.op = e), (this.ue = null);
  }
  static create(t, e) {
    return new at(t, e);
  }
  matches(t) {
    return Sa(this)
      ? this.filters.find((e) => !e.matches(t)) === void 0
      : this.filters.find((e) => e.matches(t)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ue !== null ||
        (this.ue = this.filters.reduce(
          (t, e) => t.concat(e.getFlattenedFilters()),
          [],
        )),
      this.ue
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
}
function Sa(n) {
  return n.op === "and";
}
function Ca(n) {
  return Rl(n) && Sa(n);
}
function Rl(n) {
  for (const t of n.filters) if (t instanceof at) return !1;
  return !0;
}
function $r(n) {
  if (n instanceof F)
    return n.field.canonicalString() + n.op.toString() + ie(n.value);
  if (Ca(n)) return n.filters.map((t) => $r(t)).join(",");
  {
    const t = n.filters.map((e) => $r(e)).join(",");
    return `${n.op}(${t})`;
  }
}
function Pa(n, t) {
  return n instanceof F
    ? (function (r, s) {
        return (
          s instanceof F &&
          r.op === s.op &&
          r.field.isEqual(s.field) &&
          pt(r.value, s.value)
        );
      })(n, t)
    : n instanceof at
      ? (function (r, s) {
          return s instanceof at &&
            r.op === s.op &&
            r.filters.length === s.filters.length
            ? r.filters.reduce((i, o, a) => i && Pa(o, s.filters[a]), !0)
            : !1;
        })(n, t)
      : void I();
}
function Va(n) {
  return n instanceof F
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${ie(e.value)}`;
      })(n)
    : n instanceof at
      ? (function (e) {
          return (
            e.op.toString() + " {" + e.getFilters().map(Va).join(" ,") + "}"
          );
        })(n)
      : "Filter";
}
class Sl extends F {
  constructor(t, e, r) {
    super(t, e, r), (this.key = E.fromName(r.referenceValue));
  }
  matches(t) {
    const e = E.comparator(t.key, this.key);
    return this.matchesComparison(e);
  }
}
class Cl extends F {
  constructor(t, e) {
    super(t, "in", e), (this.keys = Da("in", e));
  }
  matches(t) {
    return this.keys.some((e) => e.isEqual(t.key));
  }
}
class Pl extends F {
  constructor(t, e) {
    super(t, "not-in", e), (this.keys = Da("not-in", e));
  }
  matches(t) {
    return !this.keys.some((e) => e.isEqual(t.key));
  }
}
function Da(n, t) {
  var e;
  return (
    ((e = t.arrayValue) === null || e === void 0 ? void 0 : e.values) || []
  ).map((r) => E.fromName(r.referenceValue));
}
class Vl extends F {
  constructor(t, e) {
    super(t, "array-contains", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return ks(e) && je(e.arrayValue, this.value);
  }
}
class Dl extends F {
  constructor(t, e) {
    super(t, "in", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return e !== null && je(this.value.arrayValue, e);
  }
}
class bl extends F {
  constructor(t, e) {
    super(t, "not-in", e);
  }
  matches(t) {
    if (je(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const e = t.data.field(this.field);
    return e !== null && !je(this.value.arrayValue, e);
  }
}
class Nl extends F {
  constructor(t, e) {
    super(t, "array-contains-any", e);
  }
  matches(t) {
    const e = t.data.field(this.field);
    return (
      !(!ks(e) || !e.arrayValue.values) &&
      e.arrayValue.values.some((r) => je(this.value.arrayValue, r))
    );
  }
}
/**
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
 */ class kl {
  constructor(t, e = null, r = [], s = [], i = null, o = null, a = null) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.orderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.startAt = o),
      (this.endAt = a),
      (this.ce = null);
  }
}
function xi(n, t = null, e = [], r = [], s = null, i = null, o = null) {
  return new kl(n, t, e, r, s, i, o);
}
function Os(n) {
  const t = C(n);
  if (t.ce === null) {
    let e = t.path.canonicalString();
    t.collectionGroup !== null && (e += "|cg:" + t.collectionGroup),
      (e += "|f:"),
      (e += t.filters.map((r) => $r(r)).join(",")),
      (e += "|ob:"),
      (e += t.orderBy
        .map((r) =>
          (function (i) {
            return i.field.canonicalString() + i.dir;
          })(r),
        )
        .join(",")),
      Yn(t.limit) || ((e += "|l:"), (e += t.limit)),
      t.startAt &&
        ((e += "|lb:"),
        (e += t.startAt.inclusive ? "b:" : "a:"),
        (e += t.startAt.position.map((r) => ie(r)).join(","))),
      t.endAt &&
        ((e += "|ub:"),
        (e += t.endAt.inclusive ? "a:" : "b:"),
        (e += t.endAt.position.map((r) => ie(r)).join(","))),
      (t.ce = e);
  }
  return t.ce;
}
function xs(n, t) {
  if (n.limit !== t.limit || n.orderBy.length !== t.orderBy.length) return !1;
  for (let e = 0; e < n.orderBy.length; e++)
    if (!Al(n.orderBy[e], t.orderBy[e])) return !1;
  if (n.filters.length !== t.filters.length) return !1;
  for (let e = 0; e < n.filters.length; e++)
    if (!Pa(n.filters[e], t.filters[e])) return !1;
  return (
    n.collectionGroup === t.collectionGroup &&
    !!n.path.isEqual(t.path) &&
    !!Oi(n.startAt, t.startAt) &&
    Oi(n.endAt, t.endAt)
  );
}
function zr(n) {
  return (
    E.isDocumentKey(n.path) &&
    n.collectionGroup === null &&
    n.filters.length === 0
  );
}
/**
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
 */ class Ze {
  constructor(
    t,
    e = null,
    r = [],
    s = [],
    i = null,
    o = "F",
    a = null,
    u = null,
  ) {
    (this.path = t),
      (this.collectionGroup = e),
      (this.explicitOrderBy = r),
      (this.filters = s),
      (this.limit = i),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = u),
      (this.le = null),
      (this.he = null),
      (this.Pe = null),
      this.startAt,
      this.endAt;
  }
}
function Ol(n, t, e, r, s, i, o, a) {
  return new Ze(n, t, e, r, s, i, o, a);
}
function ba(n) {
  return new Ze(n);
}
function Mi(n) {
  return (
    n.filters.length === 0 &&
    n.limit === null &&
    n.startAt == null &&
    n.endAt == null &&
    (n.explicitOrderBy.length === 0 ||
      (n.explicitOrderBy.length === 1 &&
        n.explicitOrderBy[0].field.isKeyField()))
  );
}
function Na(n) {
  return n.collectionGroup !== null;
}
function Se(n) {
  const t = C(n);
  if (t.le === null) {
    t.le = [];
    const e = new Set();
    for (const i of t.explicitOrderBy)
      t.le.push(i), e.add(i.field.canonicalString());
    const r =
      t.explicitOrderBy.length > 0
        ? t.explicitOrderBy[t.explicitOrderBy.length - 1].dir
        : "asc";
    (function (o) {
      let a = new Q(X.comparator);
      return (
        o.filters.forEach((u) => {
          u.getFlattenedFilters().forEach((h) => {
            h.isInequality() && (a = a.add(h.field));
          });
        }),
        a
      );
    })(t).forEach((i) => {
      e.has(i.canonicalString()) || i.isKeyField() || t.le.push(new bn(i, r));
    }),
      e.has(X.keyField().canonicalString()) ||
        t.le.push(new bn(X.keyField(), r));
  }
  return t.le;
}
function dt(n) {
  const t = C(n);
  return t.he || (t.he = xl(t, Se(n))), t.he;
}
function xl(n, t) {
  if (n.limitType === "F")
    return xi(
      n.path,
      n.collectionGroup,
      t,
      n.filters,
      n.limit,
      n.startAt,
      n.endAt,
    );
  {
    t = t.map((s) => {
      const i = s.dir === "desc" ? "asc" : "desc";
      return new bn(s.field, i);
    });
    const e = n.endAt ? new Dn(n.endAt.position, n.endAt.inclusive) : null,
      r = n.startAt ? new Dn(n.startAt.position, n.startAt.inclusive) : null;
    return xi(n.path, n.collectionGroup, t, n.filters, n.limit, e, r);
  }
}
function Kr(n, t) {
  const e = n.filters.concat([t]);
  return new Ze(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    e,
    n.limit,
    n.limitType,
    n.startAt,
    n.endAt,
  );
}
function Gr(n, t, e) {
  return new Ze(
    n.path,
    n.collectionGroup,
    n.explicitOrderBy.slice(),
    n.filters.slice(),
    t,
    e,
    n.startAt,
    n.endAt,
  );
}
function Xn(n, t) {
  return xs(dt(n), dt(t)) && n.limitType === t.limitType;
}
function ka(n) {
  return `${Os(dt(n))}|lt:${n.limitType}`;
}
function Kt(n) {
  return `Query(target=${(function (e) {
    let r = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (r += " collectionGroup=" + e.collectionGroup),
      e.filters.length > 0 &&
        (r += `, filters: [${e.filters.map((s) => Va(s)).join(", ")}]`),
      Yn(e.limit) || (r += ", limit: " + e.limit),
      e.orderBy.length > 0 &&
        (r += `, orderBy: [${e.orderBy
          .map((s) =>
            (function (o) {
              return `${o.field.canonicalString()} (${o.dir})`;
            })(s),
          )
          .join(", ")}]`),
      e.startAt &&
        ((r += ", startAt: "),
        (r += e.startAt.inclusive ? "b:" : "a:"),
        (r += e.startAt.position.map((s) => ie(s)).join(","))),
      e.endAt &&
        ((r += ", endAt: "),
        (r += e.endAt.inclusive ? "a:" : "b:"),
        (r += e.endAt.position.map((s) => ie(s)).join(","))),
      `Target(${r})`
    );
  })(dt(n))}; limitType=${n.limitType})`;
}
function Jn(n, t) {
  return (
    t.isFoundDocument() &&
    (function (r, s) {
      const i = s.key.path;
      return r.collectionGroup !== null
        ? s.key.hasCollectionId(r.collectionGroup) && r.path.isPrefixOf(i)
        : E.isDocumentKey(r.path)
          ? r.path.isEqual(i)
          : r.path.isImmediateParentOf(i);
    })(n, t) &&
    (function (r, s) {
      for (const i of Se(r))
        if (!i.field.isKeyField() && s.data.field(i.field) === null) return !1;
      return !0;
    })(n, t) &&
    (function (r, s) {
      for (const i of r.filters) if (!i.matches(s)) return !1;
      return !0;
    })(n, t) &&
    (function (r, s) {
      return !(
        (r.startAt &&
          !(function (o, a, u) {
            const h = ki(o, a, u);
            return o.inclusive ? h <= 0 : h < 0;
          })(r.startAt, Se(r), s)) ||
        (r.endAt &&
          !(function (o, a, u) {
            const h = ki(o, a, u);
            return o.inclusive ? h >= 0 : h > 0;
          })(r.endAt, Se(r), s))
      );
    })(n, t)
  );
}
function Ml(n) {
  return (
    n.collectionGroup ||
    (n.path.length % 2 == 1
      ? n.path.lastSegment()
      : n.path.get(n.path.length - 2))
  );
}
function Oa(n) {
  return (t, e) => {
    let r = !1;
    for (const s of Se(n)) {
      const i = Ll(s, t, e);
      if (i !== 0) return i;
      r = r || s.field.isKeyField();
    }
    return 0;
  };
}
function Ll(n, t, e) {
  const r = n.field.isKeyField()
    ? E.comparator(t.key, e.key)
    : (function (i, o, a) {
        const u = o.data.field(i),
          h = a.data.field(i);
        return u !== null && h !== null ? se(u, h) : I();
      })(n.field, t, e);
  switch (n.dir) {
    case "asc":
      return r;
    case "desc":
      return -1 * r;
    default:
      return I();
  }
}
/**
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
 */ class fe {
  constructor(t, e) {
    (this.mapKeyFn = t),
      (this.equalsFn = e),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(t) {
    const e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r !== void 0) {
      for (const [s, i] of r) if (this.equalsFn(s, t)) return i;
    }
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, e) {
    const r = this.mapKeyFn(t),
      s = this.inner[r];
    if (s === void 0) return (this.inner[r] = [[t, e]]), void this.innerSize++;
    for (let i = 0; i < s.length; i++)
      if (this.equalsFn(s[i][0], t)) return void (s[i] = [t, e]);
    s.push([t, e]), this.innerSize++;
  }
  delete(t) {
    const e = this.mapKeyFn(t),
      r = this.inner[e];
    if (r === void 0) return !1;
    for (let s = 0; s < r.length; s++)
      if (this.equalsFn(r[s][0], t))
        return (
          r.length === 1 ? delete this.inner[e] : r.splice(s, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(t) {
    Je(this.inner, (e, r) => {
      for (const [s, i] of r) t(s, i);
    });
  }
  isEmpty() {
    return wa(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
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
 */ const Fl = new x(E.comparator);
function Ct() {
  return Fl;
}
const xa = new x(E.comparator);
function Te(...n) {
  let t = xa;
  for (const e of n) t = t.insert(e.key, e);
  return t;
}
function Ul(n) {
  let t = xa;
  return n.forEach((e, r) => (t = t.insert(e, r.overlayedDocument))), t;
}
function xt() {
  return Ce();
}
function Ma() {
  return Ce();
}
function Ce() {
  return new fe(
    (n) => n.toString(),
    (n, t) => n.isEqual(t),
  );
}
const Bl = new Q(E.comparator);
function S(...n) {
  let t = Bl;
  for (const e of n) t = t.add(e);
  return t;
}
const ql = new Q(P);
function jl() {
  return ql;
}
/**
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
 */ function La(n, t) {
  if (n.useProto3Json) {
    if (isNaN(t)) return { doubleValue: "NaN" };
    if (t === 1 / 0) return { doubleValue: "Infinity" };
    if (t === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Vn(t) ? "-0" : t };
}
function Fa(n) {
  return { integerValue: "" + n };
}
function $l(n, t) {
  return vl(t) ? Fa(t) : La(n, t);
}
/**
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
 */ class Zn {
  constructor() {
    this._ = void 0;
  }
}
function zl(n, t, e) {
  return n instanceof Qr
    ? (function (s, i) {
        const o = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return (
          i && bs(i) && (i = Ns(i)),
          i && (o.fields.__previous_value__ = i),
          { mapValue: o }
        );
      })(e, t)
    : n instanceof Nn
      ? Ua(n, t)
      : n instanceof kn
        ? Ba(n, t)
        : (function (s, i) {
            const o = Gl(s, i),
              a = Li(o) + Li(s.Ie);
            return jr(o) && jr(s.Ie) ? Fa(a) : La(s.serializer, a);
          })(n, t);
}
function Kl(n, t, e) {
  return n instanceof Nn ? Ua(n, t) : n instanceof kn ? Ba(n, t) : e;
}
function Gl(n, t) {
  return n instanceof Hr
    ? (function (r) {
        return (
          jr(r) ||
          (function (i) {
            return !!i && "doubleValue" in i;
          })(r)
        );
      })(t)
      ? t
      : { integerValue: 0 }
    : null;
}
class Qr extends Zn {}
class Nn extends Zn {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function Ua(n, t) {
  const e = qa(t);
  for (const r of n.elements) e.some((s) => pt(s, r)) || e.push(r);
  return { arrayValue: { values: e } };
}
class kn extends Zn {
  constructor(t) {
    super(), (this.elements = t);
  }
}
function Ba(n, t) {
  let e = qa(t);
  for (const r of n.elements) e = e.filter((s) => !pt(s, r));
  return { arrayValue: { values: e } };
}
class Hr extends Zn {
  constructor(t, e) {
    super(), (this.serializer = t), (this.Ie = e);
  }
}
function Li(n) {
  return L(n.integerValue || n.doubleValue);
}
function qa(n) {
  return ks(n) && n.arrayValue.values ? n.arrayValue.values.slice() : [];
}
function Ql(n, t) {
  return (
    n.field.isEqual(t.field) &&
    (function (r, s) {
      return (r instanceof Nn && s instanceof Nn) ||
        (r instanceof kn && s instanceof kn)
        ? re(r.elements, s.elements, pt)
        : r instanceof Hr && s instanceof Hr
          ? pt(r.Ie, s.Ie)
          : r instanceof Qr && s instanceof Qr;
    })(n.transform, t.transform)
  );
}
class Lt {
  constructor(t, e) {
    (this.updateTime = t), (this.exists = e);
  }
  static none() {
    return new Lt();
  }
  static exists(t) {
    return new Lt(void 0, t);
  }
  static updateTime(t) {
    return new Lt(t);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(t) {
    return (
      this.exists === t.exists &&
      (this.updateTime
        ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
        : !t.updateTime)
    );
  }
}
function gn(n, t) {
  return n.updateTime !== void 0
    ? t.isFoundDocument() && t.version.isEqual(n.updateTime)
    : n.exists === void 0 || n.exists === t.isFoundDocument();
}
class Ms {}
function ja(n, t) {
  if (!n.hasLocalMutations || (t && t.fields.length === 0)) return null;
  if (t === null)
    return n.isNoDocument()
      ? new Wl(n.key, Lt.none())
      : new Ls(n.key, n.data, Lt.none());
  {
    const e = n.data,
      r = ht.empty();
    let s = new Q(X.comparator);
    for (let i of t.fields)
      if (!s.has(i)) {
        let o = e.field(i);
        o === null && i.length > 1 && ((i = i.popLast()), (o = e.field(i))),
          o === null ? r.delete(i) : r.set(i, o),
          (s = s.add(i));
      }
    return new tr(n.key, r, new vt(s.toArray()), Lt.none());
  }
}
function Hl(n, t, e) {
  n instanceof Ls
    ? (function (s, i, o) {
        const a = s.value.clone(),
          u = Ui(s.fieldTransforms, i, o.transformResults);
        a.setAll(u),
          i.convertToFoundDocument(o.version, a).setHasCommittedMutations();
      })(n, t, e)
    : n instanceof tr
      ? (function (s, i, o) {
          if (!gn(s.precondition, i))
            return void i.convertToUnknownDocument(o.version);
          const a = Ui(s.fieldTransforms, i, o.transformResults),
            u = i.data;
          u.setAll($a(s)),
            u.setAll(a),
            i.convertToFoundDocument(o.version, u).setHasCommittedMutations();
        })(n, t, e)
      : (function (s, i, o) {
          i.convertToNoDocument(o.version).setHasCommittedMutations();
        })(0, t, e);
}
function Pe(n, t, e, r) {
  return n instanceof Ls
    ? (function (i, o, a, u) {
        if (!gn(i.precondition, o)) return a;
        const h = i.value.clone(),
          c = Bi(i.fieldTransforms, u, o);
        return (
          h.setAll(c),
          o.convertToFoundDocument(o.version, h).setHasLocalMutations(),
          null
        );
      })(n, t, e, r)
    : n instanceof tr
      ? (function (i, o, a, u) {
          if (!gn(i.precondition, o)) return a;
          const h = Bi(i.fieldTransforms, u, o),
            c = o.data;
          return (
            c.setAll($a(i)),
            c.setAll(h),
            o.convertToFoundDocument(o.version, c).setHasLocalMutations(),
            a === null
              ? null
              : a
                  .unionWith(i.fieldMask.fields)
                  .unionWith(i.fieldTransforms.map((l) => l.field))
          );
        })(n, t, e, r)
      : (function (i, o, a) {
          return gn(i.precondition, o)
            ? (o.convertToNoDocument(o.version).setHasLocalMutations(), null)
            : a;
        })(n, t, e);
}
function Fi(n, t) {
  return (
    n.type === t.type &&
    !!n.key.isEqual(t.key) &&
    !!n.precondition.isEqual(t.precondition) &&
    !!(function (r, s) {
      return (
        (r === void 0 && s === void 0) ||
        (!(!r || !s) && re(r, s, (i, o) => Ql(i, o)))
      );
    })(n.fieldTransforms, t.fieldTransforms) &&
    (n.type === 0
      ? n.value.isEqual(t.value)
      : n.type !== 1 ||
        (n.data.isEqual(t.data) && n.fieldMask.isEqual(t.fieldMask)))
  );
}
class Ls extends Ms {
  constructor(t, e, r, s = []) {
    super(),
      (this.key = t),
      (this.value = e),
      (this.precondition = r),
      (this.fieldTransforms = s),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class tr extends Ms {
  constructor(t, e, r, s, i = []) {
    super(),
      (this.key = t),
      (this.data = e),
      (this.fieldMask = r),
      (this.precondition = s),
      (this.fieldTransforms = i),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function $a(n) {
  const t = new Map();
  return (
    n.fieldMask.fields.forEach((e) => {
      if (!e.isEmpty()) {
        const r = n.data.field(e);
        t.set(e, r);
      }
    }),
    t
  );
}
function Ui(n, t, e) {
  const r = new Map();
  U(n.length === e.length);
  for (let s = 0; s < e.length; s++) {
    const i = n[s],
      o = i.transform,
      a = t.data.field(i.field);
    r.set(i.field, Kl(o, a, e[s]));
  }
  return r;
}
function Bi(n, t, e) {
  const r = new Map();
  for (const s of n) {
    const i = s.transform,
      o = e.data.field(s.field);
    r.set(s.field, zl(i, o, t));
  }
  return r;
}
class Wl extends Ms {
  constructor(t, e) {
    super(),
      (this.key = t),
      (this.precondition = e),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
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
 */ class Yl {
  constructor(t, e, r, s) {
    (this.batchId = t),
      (this.localWriteTime = e),
      (this.baseMutations = r),
      (this.mutations = s);
  }
  applyToRemoteDocument(t, e) {
    const r = e.mutationResults;
    for (let s = 0; s < this.mutations.length; s++) {
      const i = this.mutations[s];
      i.key.isEqual(t.key) && Hl(i, t, r[s]);
    }
  }
  applyToLocalView(t, e) {
    for (const r of this.baseMutations)
      r.key.isEqual(t.key) && (e = Pe(r, t, e, this.localWriteTime));
    for (const r of this.mutations)
      r.key.isEqual(t.key) && (e = Pe(r, t, e, this.localWriteTime));
    return e;
  }
  applyToLocalDocumentSet(t, e) {
    const r = Ma();
    return (
      this.mutations.forEach((s) => {
        const i = t.get(s.key),
          o = i.overlayedDocument;
        let a = this.applyToLocalView(o, i.mutatedFields);
        a = e.has(s.key) ? null : a;
        const u = ja(o, a);
        u !== null && r.set(s.key, u),
          o.isValidDocument() || o.convertToNoDocument(T.min());
      }),
      r
    );
  }
  keys() {
    return this.mutations.reduce((t, e) => t.add(e.key), S());
  }
  isEqual(t) {
    return (
      this.batchId === t.batchId &&
      re(this.mutations, t.mutations, (e, r) => Fi(e, r)) &&
      re(this.baseMutations, t.baseMutations, (e, r) => Fi(e, r))
    );
  }
}
/**
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
 */ class Xl {
  constructor(t, e) {
    (this.largestBatchId = t), (this.mutation = e);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(t) {
    return t !== null && this.mutation === t.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
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
 */ class Jl {
  constructor(t, e) {
    (this.count = t), (this.unchangedNames = e);
  }
}
/**
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
 */ var M, A;
function za(n) {
  if (n === void 0) return ft("GRPC error has no .code"), p.UNKNOWN;
  switch (n) {
    case M.OK:
      return p.OK;
    case M.CANCELLED:
      return p.CANCELLED;
    case M.UNKNOWN:
      return p.UNKNOWN;
    case M.DEADLINE_EXCEEDED:
      return p.DEADLINE_EXCEEDED;
    case M.RESOURCE_EXHAUSTED:
      return p.RESOURCE_EXHAUSTED;
    case M.INTERNAL:
      return p.INTERNAL;
    case M.UNAVAILABLE:
      return p.UNAVAILABLE;
    case M.UNAUTHENTICATED:
      return p.UNAUTHENTICATED;
    case M.INVALID_ARGUMENT:
      return p.INVALID_ARGUMENT;
    case M.NOT_FOUND:
      return p.NOT_FOUND;
    case M.ALREADY_EXISTS:
      return p.ALREADY_EXISTS;
    case M.PERMISSION_DENIED:
      return p.PERMISSION_DENIED;
    case M.FAILED_PRECONDITION:
      return p.FAILED_PRECONDITION;
    case M.ABORTED:
      return p.ABORTED;
    case M.OUT_OF_RANGE:
      return p.OUT_OF_RANGE;
    case M.UNIMPLEMENTED:
      return p.UNIMPLEMENTED;
    case M.DATA_LOSS:
      return p.DATA_LOSS;
    default:
      return I();
  }
}
((A = M || (M = {}))[(A.OK = 0)] = "OK"),
  (A[(A.CANCELLED = 1)] = "CANCELLED"),
  (A[(A.UNKNOWN = 2)] = "UNKNOWN"),
  (A[(A.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (A[(A.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (A[(A.NOT_FOUND = 5)] = "NOT_FOUND"),
  (A[(A.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (A[(A.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (A[(A.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (A[(A.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (A[(A.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (A[(A.ABORTED = 10)] = "ABORTED"),
  (A[(A.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (A[(A.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (A[(A.INTERNAL = 13)] = "INTERNAL"),
  (A[(A.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (A[(A.DATA_LOSS = 15)] = "DATA_LOSS");
/**
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
 */ function Zl() {
  return new TextEncoder();
}
/**
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
 */ const td = new Xt([4294967295, 4294967295], 0);
function qi(n) {
  const t = Zl().encode(n),
    e = new nl();
  return e.update(t), new Uint8Array(e.digest());
}
function ji(n) {
  const t = new DataView(n.buffer),
    e = t.getUint32(0, !0),
    r = t.getUint32(4, !0),
    s = t.getUint32(8, !0),
    i = t.getUint32(12, !0);
  return [new Xt([e, r], 0), new Xt([s, i], 0)];
}
class Fs {
  constructor(t, e, r) {
    if (
      ((this.bitmap = t),
      (this.padding = e),
      (this.hashCount = r),
      e < 0 || e >= 8)
    )
      throw new Ie(`Invalid padding: ${e}`);
    if (r < 0) throw new Ie(`Invalid hash count: ${r}`);
    if (t.length > 0 && this.hashCount === 0)
      throw new Ie(`Invalid hash count: ${r}`);
    if (t.length === 0 && e !== 0)
      throw new Ie(`Invalid padding when bitmap length is 0: ${e}`);
    (this.Te = 8 * t.length - e), (this.Ee = Xt.fromNumber(this.Te));
  }
  de(t, e, r) {
    let s = t.add(e.multiply(Xt.fromNumber(r)));
    return (
      s.compare(td) === 1 && (s = new Xt([s.getBits(0), s.getBits(1)], 0)),
      s.modulo(this.Ee).toNumber()
    );
  }
  Ae(t) {
    return (this.bitmap[Math.floor(t / 8)] & (1 << t % 8)) != 0;
  }
  mightContain(t) {
    if (this.Te === 0) return !1;
    const e = qi(t),
      [r, s] = ji(e);
    for (let i = 0; i < this.hashCount; i++) {
      const o = this.de(r, s, i);
      if (!this.Ae(o)) return !1;
    }
    return !0;
  }
  static create(t, e, r) {
    const s = t % 8 == 0 ? 0 : 8 - (t % 8),
      i = new Uint8Array(Math.ceil(t / 8)),
      o = new Fs(i, s, e);
    return r.forEach((a) => o.insert(a)), o;
  }
  insert(t) {
    if (this.Te === 0) return;
    const e = qi(t),
      [r, s] = ji(e);
    for (let i = 0; i < this.hashCount; i++) {
      const o = this.de(r, s, i);
      this.Re(o);
    }
  }
  Re(t) {
    const e = Math.floor(t / 8),
      r = t % 8;
    this.bitmap[e] |= 1 << r;
  }
}
class Ie extends Error {
  constructor() {
    super(...arguments), (this.name = "BloomFilterError");
  }
}
/**
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
 */ class er {
  constructor(t, e, r, s, i) {
    (this.snapshotVersion = t),
      (this.targetChanges = e),
      (this.targetMismatches = r),
      (this.documentUpdates = s),
      (this.resolvedLimboDocuments = i);
  }
  static createSynthesizedRemoteEventForCurrentChange(t, e, r) {
    const s = new Map();
    return (
      s.set(t, tn.createSynthesizedTargetChangeForCurrentChange(t, e, r)),
      new er(T.min(), s, new x(P), Ct(), S())
    );
  }
}
class tn {
  constructor(t, e, r, s, i) {
    (this.resumeToken = t),
      (this.current = e),
      (this.addedDocuments = r),
      (this.modifiedDocuments = s),
      (this.removedDocuments = i);
  }
  static createSynthesizedTargetChangeForCurrentChange(t, e, r) {
    return new tn(r, e, S(), S(), S());
  }
}
/**
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
 */ class mn {
  constructor(t, e, r, s) {
    (this.Ve = t), (this.removedTargetIds = e), (this.key = r), (this.me = s);
  }
}
class Ka {
  constructor(t, e) {
    (this.targetId = t), (this.fe = e);
  }
}
class Ga {
  constructor(t, e, r = tt.EMPTY_BYTE_STRING, s = null) {
    (this.state = t),
      (this.targetIds = e),
      (this.resumeToken = r),
      (this.cause = s);
  }
}
class $i {
  constructor() {
    (this.ge = 0),
      (this.pe = Ki()),
      (this.ye = tt.EMPTY_BYTE_STRING),
      (this.we = !1),
      (this.Se = !0);
  }
  get current() {
    return this.we;
  }
  get resumeToken() {
    return this.ye;
  }
  get be() {
    return this.ge !== 0;
  }
  get De() {
    return this.Se;
  }
  Ce(t) {
    t.approximateByteSize() > 0 && ((this.Se = !0), (this.ye = t));
  }
  ve() {
    let t = S(),
      e = S(),
      r = S();
    return (
      this.pe.forEach((s, i) => {
        switch (i) {
          case 0:
            t = t.add(s);
            break;
          case 2:
            e = e.add(s);
            break;
          case 1:
            r = r.add(s);
            break;
          default:
            I();
        }
      }),
      new tn(this.ye, this.we, t, e, r)
    );
  }
  Fe() {
    (this.Se = !1), (this.pe = Ki());
  }
  Me(t, e) {
    (this.Se = !0), (this.pe = this.pe.insert(t, e));
  }
  xe(t) {
    (this.Se = !0), (this.pe = this.pe.remove(t));
  }
  Oe() {
    this.ge += 1;
  }
  Ne() {
    (this.ge -= 1), U(this.ge >= 0);
  }
  Be() {
    (this.Se = !0), (this.we = !0);
  }
}
class ed {
  constructor(t) {
    (this.Le = t),
      (this.ke = new Map()),
      (this.qe = Ct()),
      (this.Qe = zi()),
      (this.Ke = new x(P));
  }
  $e(t) {
    for (const e of t.Ve)
      t.me && t.me.isFoundDocument()
        ? this.Ue(e, t.me)
        : this.We(e, t.key, t.me);
    for (const e of t.removedTargetIds) this.We(e, t.key, t.me);
  }
  Ge(t) {
    this.forEachTarget(t, (e) => {
      const r = this.ze(e);
      switch (t.state) {
        case 0:
          this.je(e) && r.Ce(t.resumeToken);
          break;
        case 1:
          r.Ne(), r.be || r.Fe(), r.Ce(t.resumeToken);
          break;
        case 2:
          r.Ne(), r.be || this.removeTarget(e);
          break;
        case 3:
          this.je(e) && (r.Be(), r.Ce(t.resumeToken));
          break;
        case 4:
          this.je(e) && (this.He(e), r.Ce(t.resumeToken));
          break;
        default:
          I();
      }
    });
  }
  forEachTarget(t, e) {
    t.targetIds.length > 0
      ? t.targetIds.forEach(e)
      : this.ke.forEach((r, s) => {
          this.je(s) && e(s);
        });
  }
  Je(t) {
    const e = t.targetId,
      r = t.fe.count,
      s = this.Ye(e);
    if (s) {
      const i = s.target;
      if (zr(i))
        if (r === 0) {
          const o = new E(i.path);
          this.We(e, o, Y.newNoDocument(o, T.min()));
        } else U(r === 1);
      else {
        const o = this.Ze(e);
        if (o !== r) {
          const a = this.Xe(t),
            u = a ? this.et(a, t, o) : 1;
          if (u !== 0) {
            this.He(e);
            const h =
              u === 2
                ? "TargetPurposeExistenceFilterMismatchBloom"
                : "TargetPurposeExistenceFilterMismatch";
            this.Ke = this.Ke.insert(e, h);
          }
        }
      }
    }
  }
  Xe(t) {
    const e = t.fe.unchangedNames;
    if (!e || !e.bits) return null;
    const {
      bits: { bitmap: r = "", padding: s = 0 },
      hashCount: i = 0,
    } = e;
    let o, a;
    try {
      o = Bt(r).toUint8Array();
    } catch (u) {
      if (u instanceof Aa)
        return (
          ne(
            "Decoding the base64 bloom filter in existence filter failed (" +
              u.message +
              "); ignoring the bloom filter and falling back to full re-query.",
          ),
          null
        );
      throw u;
    }
    try {
      a = new Fs(o, s, i);
    } catch (u) {
      return (
        ne(
          u instanceof Ie
            ? "BloomFilter error: "
            : "Applying bloom filter failed: ",
          u,
        ),
        null
      );
    }
    return a.Te === 0 ? null : a;
  }
  et(t, e, r) {
    return e.fe.count === r - this.rt(t, e.targetId) ? 0 : 2;
  }
  rt(t, e) {
    const r = this.Le.getRemoteKeysForTarget(e);
    let s = 0;
    return (
      r.forEach((i) => {
        const o = this.Le.nt(),
          a = `projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;
        t.mightContain(a) || (this.We(e, i, null), s++);
      }),
      s
    );
  }
  it(t) {
    const e = new Map();
    this.ke.forEach((i, o) => {
      const a = this.Ye(o);
      if (a) {
        if (i.current && zr(a.target)) {
          const u = new E(a.target.path);
          this.qe.get(u) !== null ||
            this.st(o, u) ||
            this.We(o, u, Y.newNoDocument(u, t));
        }
        i.De && (e.set(o, i.ve()), i.Fe());
      }
    });
    let r = S();
    this.Qe.forEach((i, o) => {
      let a = !0;
      o.forEachWhile((u) => {
        const h = this.Ye(u);
        return (
          !h || h.purpose === "TargetPurposeLimboResolution" || ((a = !1), !1)
        );
      }),
        a && (r = r.add(i));
    }),
      this.qe.forEach((i, o) => o.setReadTime(t));
    const s = new er(t, e, this.Ke, this.qe, r);
    return (this.qe = Ct()), (this.Qe = zi()), (this.Ke = new x(P)), s;
  }
  Ue(t, e) {
    if (!this.je(t)) return;
    const r = this.st(t, e.key) ? 2 : 0;
    this.ze(t).Me(e.key, r),
      (this.qe = this.qe.insert(e.key, e)),
      (this.Qe = this.Qe.insert(e.key, this.ot(e.key).add(t)));
  }
  We(t, e, r) {
    if (!this.je(t)) return;
    const s = this.ze(t);
    this.st(t, e) ? s.Me(e, 1) : s.xe(e),
      (this.Qe = this.Qe.insert(e, this.ot(e).delete(t))),
      r && (this.qe = this.qe.insert(e, r));
  }
  removeTarget(t) {
    this.ke.delete(t);
  }
  Ze(t) {
    const e = this.ze(t).ve();
    return (
      this.Le.getRemoteKeysForTarget(t).size +
      e.addedDocuments.size -
      e.removedDocuments.size
    );
  }
  Oe(t) {
    this.ze(t).Oe();
  }
  ze(t) {
    let e = this.ke.get(t);
    return e || ((e = new $i()), this.ke.set(t, e)), e;
  }
  ot(t) {
    let e = this.Qe.get(t);
    return e || ((e = new Q(P)), (this.Qe = this.Qe.insert(t, e))), e;
  }
  je(t) {
    const e = this.Ye(t) !== null;
    return e || _("WatchChangeAggregator", "Detected inactive target", t), e;
  }
  Ye(t) {
    const e = this.ke.get(t);
    return e && e.be ? null : this.Le._t(t);
  }
  He(t) {
    this.ke.set(t, new $i()),
      this.Le.getRemoteKeysForTarget(t).forEach((e) => {
        this.We(t, e, null);
      });
  }
  st(t, e) {
    return this.Le.getRemoteKeysForTarget(t).has(e);
  }
}
function zi() {
  return new x(E.comparator);
}
function Ki() {
  return new x(E.comparator);
}
const nd = { asc: "ASCENDING", desc: "DESCENDING" },
  rd = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  },
  sd = { and: "AND", or: "OR" };
class id {
  constructor(t, e) {
    (this.databaseId = t), (this.useProto3Json = e);
  }
}
function Wr(n, t) {
  return n.useProto3Json || Yn(t) ? t : { value: t };
}
function Yr(n, t) {
  return n.useProto3Json
    ? `${new Date(1e3 * t.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
    : { seconds: "" + t.seconds, nanos: t.nanoseconds };
}
function Qa(n, t) {
  return n.useProto3Json ? t.toBase64() : t.toUint8Array();
}
function Jt(n) {
  return (
    U(!!n),
    T.fromTimestamp(
      (function (e) {
        const r = St(e);
        return new q(r.seconds, r.nanos);
      })(n),
    )
  );
}
function Ha(n, t) {
  return Xr(n, t).canonicalString();
}
function Xr(n, t) {
  const e = (function (s) {
    return new k(["projects", s.projectId, "databases", s.database]);
  })(n).child("documents");
  return t === void 0 ? e : e.child(t);
}
function Wa(n) {
  const t = k.fromString(n);
  return U(tu(t)), t;
}
function Er(n, t) {
  const e = Wa(t);
  if (e.get(1) !== n.databaseId.projectId)
    throw new y(
      p.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        e.get(1) +
        " vs " +
        n.databaseId.projectId,
    );
  if (e.get(3) !== n.databaseId.database)
    throw new y(
      p.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        e.get(3) +
        " vs " +
        n.databaseId.database,
    );
  return new E(Xa(e));
}
function Ya(n, t) {
  return Ha(n.databaseId, t);
}
function od(n) {
  const t = Wa(n);
  return t.length === 4 ? k.emptyPath() : Xa(t);
}
function Gi(n) {
  return new k([
    "projects",
    n.databaseId.projectId,
    "databases",
    n.databaseId.database,
  ]).canonicalString();
}
function Xa(n) {
  return U(n.length > 4 && n.get(4) === "documents"), n.popFirst(5);
}
function ad(n, t) {
  let e;
  if ("targetChange" in t) {
    t.targetChange;
    const r = (function (h) {
        return h === "NO_CHANGE"
          ? 0
          : h === "ADD"
            ? 1
            : h === "REMOVE"
              ? 2
              : h === "CURRENT"
                ? 3
                : h === "RESET"
                  ? 4
                  : I();
      })(t.targetChange.targetChangeType || "NO_CHANGE"),
      s = t.targetChange.targetIds || [],
      i = (function (h, c) {
        return h.useProto3Json
          ? (U(c === void 0 || typeof c == "string"),
            tt.fromBase64String(c || ""))
          : (U(c === void 0 || c instanceof Uint8Array),
            tt.fromUint8Array(c || new Uint8Array()));
      })(n, t.targetChange.resumeToken),
      o = t.targetChange.cause,
      a =
        o &&
        (function (h) {
          const c = h.code === void 0 ? p.UNKNOWN : za(h.code);
          return new y(c, h.message || "");
        })(o);
    e = new Ga(r, s, i, a || null);
  } else if ("documentChange" in t) {
    t.documentChange;
    const r = t.documentChange;
    r.document, r.document.name, r.document.updateTime;
    const s = Er(n, r.document.name),
      i = Jt(r.document.updateTime),
      o = r.document.createTime ? Jt(r.document.createTime) : T.min(),
      a = new ht({ mapValue: { fields: r.document.fields } }),
      u = Y.newFoundDocument(s, i, o, a),
      h = r.targetIds || [],
      c = r.removedTargetIds || [];
    e = new mn(h, c, u.key, u);
  } else if ("documentDelete" in t) {
    t.documentDelete;
    const r = t.documentDelete;
    r.document;
    const s = Er(n, r.document),
      i = r.readTime ? Jt(r.readTime) : T.min(),
      o = Y.newNoDocument(s, i),
      a = r.removedTargetIds || [];
    e = new mn([], a, o.key, o);
  } else if ("documentRemove" in t) {
    t.documentRemove;
    const r = t.documentRemove;
    r.document;
    const s = Er(n, r.document),
      i = r.removedTargetIds || [];
    e = new mn([], i, s, null);
  } else {
    if (!("filter" in t)) return I();
    {
      t.filter;
      const r = t.filter;
      r.targetId;
      const { count: s = 0, unchangedNames: i } = r,
        o = new Jl(s, i),
        a = r.targetId;
      e = new Ka(a, o);
    }
  }
  return e;
}
function ud(n, t) {
  return { documents: [Ya(n, t.path)] };
}
function hd(n, t) {
  const e = { structuredQuery: {} },
    r = t.path;
  let s;
  t.collectionGroup !== null
    ? ((s = r),
      (e.structuredQuery.from = [
        { collectionId: t.collectionGroup, allDescendants: !0 },
      ]))
    : ((s = r.popLast()),
      (e.structuredQuery.from = [{ collectionId: r.lastSegment() }])),
    (e.parent = Ya(n, s));
  const i = (function (h) {
    if (h.length !== 0) return Za(at.create(h, "and"));
  })(t.filters);
  i && (e.structuredQuery.where = i);
  const o = (function (h) {
    if (h.length !== 0)
      return h.map((c) =>
        (function (f) {
          return { field: Gt(f.field), direction: dd(f.dir) };
        })(c),
      );
  })(t.orderBy);
  o && (e.structuredQuery.orderBy = o);
  const a = Wr(n, t.limit);
  return (
    a !== null && (e.structuredQuery.limit = a),
    t.startAt &&
      (e.structuredQuery.startAt = (function (h) {
        return { before: h.inclusive, values: h.position };
      })(t.startAt)),
    t.endAt &&
      (e.structuredQuery.endAt = (function (h) {
        return { before: !h.inclusive, values: h.position };
      })(t.endAt)),
    { ut: e, parent: s }
  );
}
function cd(n) {
  let t = od(n.parent);
  const e = n.structuredQuery,
    r = e.from ? e.from.length : 0;
  let s = null;
  if (r > 0) {
    U(r === 1);
    const c = e.from[0];
    c.allDescendants ? (s = c.collectionId) : (t = t.child(c.collectionId));
  }
  let i = [];
  e.where &&
    (i = (function (l) {
      const f = Ja(l);
      return f instanceof at && Ca(f) ? f.getFilters() : [f];
    })(e.where));
  let o = [];
  e.orderBy &&
    (o = (function (l) {
      return l.map((f) =>
        (function (D) {
          return new bn(
            Qt(D.field),
            (function (w) {
              switch (w) {
                case "ASCENDING":
                  return "asc";
                case "DESCENDING":
                  return "desc";
                default:
                  return;
              }
            })(D.direction),
          );
        })(f),
      );
    })(e.orderBy));
  let a = null;
  e.limit &&
    (a = (function (l) {
      let f;
      return (f = typeof l == "object" ? l.value : l), Yn(f) ? null : f;
    })(e.limit));
  let u = null;
  e.startAt &&
    (u = (function (l) {
      const f = !!l.before,
        g = l.values || [];
      return new Dn(g, f);
    })(e.startAt));
  let h = null;
  return (
    e.endAt &&
      (h = (function (l) {
        const f = !l.before,
          g = l.values || [];
        return new Dn(g, f);
      })(e.endAt)),
    Ol(t, s, o, i, a, "F", u, h)
  );
}
function ld(n, t) {
  const e = (function (s) {
    switch (s) {
      case "TargetPurposeListen":
        return null;
      case "TargetPurposeExistenceFilterMismatch":
        return "existence-filter-mismatch";
      case "TargetPurposeExistenceFilterMismatchBloom":
        return "existence-filter-mismatch-bloom";
      case "TargetPurposeLimboResolution":
        return "limbo-document";
      default:
        return I();
    }
  })(t.purpose);
  return e == null ? null : { "goog-listen-tags": e };
}
function Ja(n) {
  return n.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case "IS_NAN":
            const r = Qt(e.unaryFilter.field);
            return F.create(r, "==", { doubleValue: NaN });
          case "IS_NULL":
            const s = Qt(e.unaryFilter.field);
            return F.create(s, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const i = Qt(e.unaryFilter.field);
            return F.create(i, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const o = Qt(e.unaryFilter.field);
            return F.create(o, "!=", { nullValue: "NULL_VALUE" });
          default:
            return I();
        }
      })(n)
    : n.fieldFilter !== void 0
      ? (function (e) {
          return F.create(
            Qt(e.fieldFilter.field),
            (function (s) {
              switch (s) {
                case "EQUAL":
                  return "==";
                case "NOT_EQUAL":
                  return "!=";
                case "GREATER_THAN":
                  return ">";
                case "GREATER_THAN_OR_EQUAL":
                  return ">=";
                case "LESS_THAN":
                  return "<";
                case "LESS_THAN_OR_EQUAL":
                  return "<=";
                case "ARRAY_CONTAINS":
                  return "array-contains";
                case "IN":
                  return "in";
                case "NOT_IN":
                  return "not-in";
                case "ARRAY_CONTAINS_ANY":
                  return "array-contains-any";
                default:
                  return I();
              }
            })(e.fieldFilter.op),
            e.fieldFilter.value,
          );
        })(n)
      : n.compositeFilter !== void 0
        ? (function (e) {
            return at.create(
              e.compositeFilter.filters.map((r) => Ja(r)),
              (function (s) {
                switch (s) {
                  case "AND":
                    return "and";
                  case "OR":
                    return "or";
                  default:
                    return I();
                }
              })(e.compositeFilter.op),
            );
          })(n)
        : I();
}
function dd(n) {
  return nd[n];
}
function fd(n) {
  return rd[n];
}
function pd(n) {
  return sd[n];
}
function Gt(n) {
  return { fieldPath: n.canonicalString() };
}
function Qt(n) {
  return X.fromServerFormat(n.fieldPath);
}
function Za(n) {
  return n instanceof F
    ? (function (e) {
        if (e.op === "==") {
          if (Ni(e.value))
            return { unaryFilter: { field: Gt(e.field), op: "IS_NAN" } };
          if (bi(e.value))
            return { unaryFilter: { field: Gt(e.field), op: "IS_NULL" } };
        } else if (e.op === "!=") {
          if (Ni(e.value))
            return { unaryFilter: { field: Gt(e.field), op: "IS_NOT_NAN" } };
          if (bi(e.value))
            return { unaryFilter: { field: Gt(e.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: Gt(e.field), op: fd(e.op), value: e.value },
        };
      })(n)
    : n instanceof at
      ? (function (e) {
          const r = e.getFilters().map((s) => Za(s));
          return r.length === 1
            ? r[0]
            : { compositeFilter: { op: pd(e.op), filters: r } };
        })(n)
      : I();
}
function tu(n) {
  return n.length >= 4 && n.get(0) === "projects" && n.get(2) === "databases";
}
/**
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
 */ class Tt {
  constructor(
    t,
    e,
    r,
    s,
    i = T.min(),
    o = T.min(),
    a = tt.EMPTY_BYTE_STRING,
    u = null,
  ) {
    (this.target = t),
      (this.targetId = e),
      (this.purpose = r),
      (this.sequenceNumber = s),
      (this.snapshotVersion = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a),
      (this.expectedCount = u);
  }
  withSequenceNumber(t) {
    return new Tt(
      this.target,
      this.targetId,
      this.purpose,
      t,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      this.expectedCount,
    );
  }
  withResumeToken(t, e) {
    return new Tt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      e,
      this.lastLimboFreeSnapshotVersion,
      t,
      null,
    );
  }
  withExpectedCount(t) {
    return new Tt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken,
      t,
    );
  }
  withLastLimboFreeSnapshotVersion(t) {
    return new Tt(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      t,
      this.resumeToken,
      this.expectedCount,
    );
  }
}
/**
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
 */ class gd {
  constructor(t) {
    this.ct = t;
  }
}
function md(n) {
  const t = cd({ parent: n.parent, structuredQuery: n.structuredQuery });
  return n.limitType === "LAST" ? Gr(t, t.limit, "L") : t;
}
/**
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
 */ class _d {
  constructor() {
    this._n = new yd();
  }
  addToCollectionParentIndex(t, e) {
    return this._n.add(e), d.resolve();
  }
  getCollectionParents(t, e) {
    return d.resolve(this._n.getEntries(e));
  }
  addFieldIndex(t, e) {
    return d.resolve();
  }
  deleteFieldIndex(t, e) {
    return d.resolve();
  }
  deleteAllFieldIndexes(t) {
    return d.resolve();
  }
  createTargetIndexes(t, e) {
    return d.resolve();
  }
  getDocumentsMatchingTarget(t, e) {
    return d.resolve(null);
  }
  getIndexType(t, e) {
    return d.resolve(0);
  }
  getFieldIndexes(t, e) {
    return d.resolve([]);
  }
  getNextCollectionGroupToUpdate(t) {
    return d.resolve(null);
  }
  getMinOffset(t, e) {
    return d.resolve(Rt.min());
  }
  getMinOffsetFromCollectionGroup(t, e) {
    return d.resolve(Rt.min());
  }
  updateCollectionGroup(t, e, r) {
    return d.resolve();
  }
  updateIndexEntries(t, e) {
    return d.resolve();
  }
}
class yd {
  constructor() {
    this.index = {};
  }
  add(t) {
    const e = t.lastSegment(),
      r = t.popLast(),
      s = this.index[e] || new Q(k.comparator),
      i = !s.has(r);
    return (this.index[e] = s.add(r)), i;
  }
  has(t) {
    const e = t.lastSegment(),
      r = t.popLast(),
      s = this.index[e];
    return s && s.has(r);
  }
  getEntries(t) {
    return (this.index[t] || new Q(k.comparator)).toArray();
  }
}
/**
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
 */ class oe {
  constructor(t) {
    this.On = t;
  }
  next() {
    return (this.On += 2), this.On;
  }
  static Nn() {
    return new oe(0);
  }
  static Bn() {
    return new oe(-1);
  }
}
/**
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
 */ class Ed {
  constructor() {
    (this.changes = new fe(
      (t) => t.toString(),
      (t, e) => t.isEqual(e),
    )),
      (this.changesApplied = !1);
  }
  addEntry(t) {
    this.assertNotApplied(), this.changes.set(t.key, t);
  }
  removeEntry(t, e) {
    this.assertNotApplied(),
      this.changes.set(t, Y.newInvalidDocument(t).setReadTime(e));
  }
  getEntry(t, e) {
    this.assertNotApplied();
    const r = this.changes.get(e);
    return r !== void 0 ? d.resolve(r) : this.getFromCache(t, e);
  }
  getEntries(t, e) {
    return this.getAllFromCache(t, e);
  }
  apply(t) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(t)
    );
  }
  assertNotApplied() {}
}
/**
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
 */ class vd {
  constructor(t, e) {
    (this.overlayedDocument = t), (this.mutatedFields = e);
  }
}
/**
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
 */ class Td {
  constructor(t, e, r, s) {
    (this.remoteDocumentCache = t),
      (this.mutationQueue = e),
      (this.documentOverlayCache = r),
      (this.indexManager = s);
  }
  getDocument(t, e) {
    let r = null;
    return this.documentOverlayCache
      .getOverlay(t, e)
      .next((s) => ((r = s), this.remoteDocumentCache.getEntry(t, e)))
      .next((s) => (r !== null && Pe(r.mutation, s, vt.empty(), q.now()), s));
  }
  getDocuments(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.getLocalViewOfDocuments(t, r, S()).next(() => r));
  }
  getLocalViewOfDocuments(t, e, r = S()) {
    const s = xt();
    return this.populateOverlays(t, s, e).next(() =>
      this.computeViews(t, e, s, r).next((i) => {
        let o = Te();
        return (
          i.forEach((a, u) => {
            o = o.insert(a, u.overlayedDocument);
          }),
          o
        );
      }),
    );
  }
  getOverlayedDocuments(t, e) {
    const r = xt();
    return this.populateOverlays(t, r, e).next(() =>
      this.computeViews(t, e, r, S()),
    );
  }
  populateOverlays(t, e, r) {
    const s = [];
    return (
      r.forEach((i) => {
        e.has(i) || s.push(i);
      }),
      this.documentOverlayCache.getOverlays(t, s).next((i) => {
        i.forEach((o, a) => {
          e.set(o, a);
        });
      })
    );
  }
  computeViews(t, e, r, s) {
    let i = Ct();
    const o = Ce(),
      a = (function () {
        return Ce();
      })();
    return (
      e.forEach((u, h) => {
        const c = r.get(h.key);
        s.has(h.key) && (c === void 0 || c.mutation instanceof tr)
          ? (i = i.insert(h.key, h))
          : c !== void 0
            ? (o.set(h.key, c.mutation.getFieldMask()),
              Pe(c.mutation, h, c.mutation.getFieldMask(), q.now()))
            : o.set(h.key, vt.empty());
      }),
      this.recalculateAndSaveOverlays(t, i).next(
        (u) => (
          u.forEach((h, c) => o.set(h, c)),
          e.forEach((h, c) => {
            var l;
            return a.set(
              h,
              new vd(c, (l = o.get(h)) !== null && l !== void 0 ? l : null),
            );
          }),
          a
        ),
      )
    );
  }
  recalculateAndSaveOverlays(t, e) {
    const r = Ce();
    let s = new x((o, a) => o - a),
      i = S();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(t, e)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((u) => {
            const h = e.get(u);
            if (h === null) return;
            let c = r.get(u) || vt.empty();
            (c = a.applyToLocalView(h, c)), r.set(u, c);
            const l = (s.get(a.batchId) || S()).add(u);
            s = s.insert(a.batchId, l);
          });
      })
      .next(() => {
        const o = [],
          a = s.getReverseIterator();
        for (; a.hasNext(); ) {
          const u = a.getNext(),
            h = u.key,
            c = u.value,
            l = Ma();
          c.forEach((f) => {
            if (!i.has(f)) {
              const g = ja(e.get(f), r.get(f));
              g !== null && l.set(f, g), (i = i.add(f));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(t, h, l));
        }
        return d.waitFor(o);
      })
      .next(() => r);
  }
  recalculateAndSaveOverlaysForDocumentKeys(t, e) {
    return this.remoteDocumentCache
      .getEntries(t, e)
      .next((r) => this.recalculateAndSaveOverlays(t, r));
  }
  getDocumentsMatchingQuery(t, e, r, s) {
    return (function (o) {
      return (
        E.isDocumentKey(o.path) &&
        o.collectionGroup === null &&
        o.filters.length === 0
      );
    })(e)
      ? this.getDocumentsMatchingDocumentQuery(t, e.path)
      : Na(e)
        ? this.getDocumentsMatchingCollectionGroupQuery(t, e, r, s)
        : this.getDocumentsMatchingCollectionQuery(t, e, r, s);
  }
  getNextDocuments(t, e, r, s) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(t, e, r, s)
      .next((i) => {
        const o =
          s - i.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                t,
                e,
                r.largestBatchId,
                s - i.size,
              )
            : d.resolve(xt());
        let a = -1,
          u = i;
        return o.next((h) =>
          d
            .forEach(
              h,
              (c, l) => (
                a < l.largestBatchId && (a = l.largestBatchId),
                i.get(c)
                  ? d.resolve()
                  : this.remoteDocumentCache.getEntry(t, c).next((f) => {
                      u = u.insert(c, f);
                    })
              ),
            )
            .next(() => this.populateOverlays(t, h, i))
            .next(() => this.computeViews(t, u, h, S()))
            .next((c) => ({ batchId: a, changes: Ul(c) })),
        );
      });
  }
  getDocumentsMatchingDocumentQuery(t, e) {
    return this.getDocument(t, new E(e)).next((r) => {
      let s = Te();
      return r.isFoundDocument() && (s = s.insert(r.key, r)), s;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(t, e, r, s) {
    const i = e.collectionGroup;
    let o = Te();
    return this.indexManager.getCollectionParents(t, i).next((a) =>
      d
        .forEach(a, (u) => {
          const h = (function (l, f) {
            return new Ze(
              f,
              null,
              l.explicitOrderBy.slice(),
              l.filters.slice(),
              l.limit,
              l.limitType,
              l.startAt,
              l.endAt,
            );
          })(e, u.child(i));
          return this.getDocumentsMatchingCollectionQuery(t, h, r, s).next(
            (c) => {
              c.forEach((l, f) => {
                o = o.insert(l, f);
              });
            },
          );
        })
        .next(() => o),
    );
  }
  getDocumentsMatchingCollectionQuery(t, e, r, s) {
    let i;
    return this.documentOverlayCache
      .getOverlaysForCollection(t, e.path, r.largestBatchId)
      .next(
        (o) => (
          (i = o),
          this.remoteDocumentCache.getDocumentsMatchingQuery(t, e, r, i, s)
        ),
      )
      .next((o) => {
        i.forEach((u, h) => {
          const c = h.getKey();
          o.get(c) === null && (o = o.insert(c, Y.newInvalidDocument(c)));
        });
        let a = Te();
        return (
          o.forEach((u, h) => {
            const c = i.get(u);
            c !== void 0 && Pe(c.mutation, h, vt.empty(), q.now()),
              Jn(e, h) && (a = a.insert(u, h));
          }),
          a
        );
      });
  }
}
/**
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
 */ class Id {
  constructor(t) {
    (this.serializer = t), (this.cr = new Map()), (this.lr = new Map());
  }
  getBundleMetadata(t, e) {
    return d.resolve(this.cr.get(e));
  }
  saveBundleMetadata(t, e) {
    return (
      this.cr.set(
        e.id,
        (function (s) {
          return { id: s.id, version: s.version, createTime: Jt(s.createTime) };
        })(e),
      ),
      d.resolve()
    );
  }
  getNamedQuery(t, e) {
    return d.resolve(this.lr.get(e));
  }
  saveNamedQuery(t, e) {
    return (
      this.lr.set(
        e.name,
        (function (s) {
          return {
            name: s.name,
            query: md(s.bundledQuery),
            readTime: Jt(s.readTime),
          };
        })(e),
      ),
      d.resolve()
    );
  }
}
/**
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
 */ class wd {
  constructor() {
    (this.overlays = new x(E.comparator)), (this.hr = new Map());
  }
  getOverlay(t, e) {
    return d.resolve(this.overlays.get(e));
  }
  getOverlays(t, e) {
    const r = xt();
    return d
      .forEach(e, (s) =>
        this.getOverlay(t, s).next((i) => {
          i !== null && r.set(s, i);
        }),
      )
      .next(() => r);
  }
  saveOverlays(t, e, r) {
    return (
      r.forEach((s, i) => {
        this.ht(t, e, i);
      }),
      d.resolve()
    );
  }
  removeOverlaysForBatchId(t, e, r) {
    const s = this.hr.get(r);
    return (
      s !== void 0 &&
        (s.forEach((i) => (this.overlays = this.overlays.remove(i))),
        this.hr.delete(r)),
      d.resolve()
    );
  }
  getOverlaysForCollection(t, e, r) {
    const s = xt(),
      i = e.length + 1,
      o = new E(e.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const u = a.getNext().value,
        h = u.getKey();
      if (!e.isPrefixOf(h.path)) break;
      h.path.length === i && u.largestBatchId > r && s.set(u.getKey(), u);
    }
    return d.resolve(s);
  }
  getOverlaysForCollectionGroup(t, e, r, s) {
    let i = new x((h, c) => h - c);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const h = o.getNext().value;
      if (h.getKey().getCollectionGroup() === e && h.largestBatchId > r) {
        let c = i.get(h.largestBatchId);
        c === null && ((c = xt()), (i = i.insert(h.largestBatchId, c))),
          c.set(h.getKey(), h);
      }
    }
    const a = xt(),
      u = i.getIterator();
    for (
      ;
      u.hasNext() &&
      (u.getNext().value.forEach((h, c) => a.set(h, c)), !(a.size() >= s));

    );
    return d.resolve(a);
  }
  ht(t, e, r) {
    const s = this.overlays.get(r.key);
    if (s !== null) {
      const o = this.hr.get(s.largestBatchId).delete(r.key);
      this.hr.set(s.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(r.key, new Xl(e, r));
    let i = this.hr.get(e);
    i === void 0 && ((i = S()), this.hr.set(e, i)),
      this.hr.set(e, i.add(r.key));
  }
}
/**
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
 */ class Us {
  constructor() {
    (this.Pr = new Q(B.Ir)), (this.Tr = new Q(B.Er));
  }
  isEmpty() {
    return this.Pr.isEmpty();
  }
  addReference(t, e) {
    const r = new B(t, e);
    (this.Pr = this.Pr.add(r)), (this.Tr = this.Tr.add(r));
  }
  dr(t, e) {
    t.forEach((r) => this.addReference(r, e));
  }
  removeReference(t, e) {
    this.Ar(new B(t, e));
  }
  Rr(t, e) {
    t.forEach((r) => this.removeReference(r, e));
  }
  Vr(t) {
    const e = new E(new k([])),
      r = new B(e, t),
      s = new B(e, t + 1),
      i = [];
    return (
      this.Tr.forEachInRange([r, s], (o) => {
        this.Ar(o), i.push(o.key);
      }),
      i
    );
  }
  mr() {
    this.Pr.forEach((t) => this.Ar(t));
  }
  Ar(t) {
    (this.Pr = this.Pr.delete(t)), (this.Tr = this.Tr.delete(t));
  }
  gr(t) {
    const e = new E(new k([])),
      r = new B(e, t),
      s = new B(e, t + 1);
    let i = S();
    return (
      this.Tr.forEachInRange([r, s], (o) => {
        i = i.add(o.key);
      }),
      i
    );
  }
  containsKey(t) {
    const e = new B(t, 0),
      r = this.Pr.firstAfterOrEqual(e);
    return r !== null && t.isEqual(r.key);
  }
}
class B {
  constructor(t, e) {
    (this.key = t), (this.pr = e);
  }
  static Ir(t, e) {
    return E.comparator(t.key, e.key) || P(t.pr, e.pr);
  }
  static Er(t, e) {
    return P(t.pr, e.pr) || E.comparator(t.key, e.key);
  }
}
/**
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
 */ class Ad {
  constructor(t, e) {
    (this.indexManager = t),
      (this.referenceDelegate = e),
      (this.mutationQueue = []),
      (this.yr = 1),
      (this.wr = new Q(B.Ir));
  }
  checkEmpty(t) {
    return d.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(t, e, r, s) {
    const i = this.yr;
    this.yr++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new Yl(i, e, r, s);
    this.mutationQueue.push(o);
    for (const a of s)
      (this.wr = this.wr.add(new B(a.key, i))),
        this.indexManager.addToCollectionParentIndex(t, a.key.path.popLast());
    return d.resolve(o);
  }
  lookupMutationBatch(t, e) {
    return d.resolve(this.Sr(e));
  }
  getNextMutationBatchAfterBatchId(t, e) {
    const r = e + 1,
      s = this.br(r),
      i = s < 0 ? 0 : s;
    return d.resolve(
      this.mutationQueue.length > i ? this.mutationQueue[i] : null,
    );
  }
  getHighestUnacknowledgedBatchId() {
    return d.resolve(this.mutationQueue.length === 0 ? -1 : this.yr - 1);
  }
  getAllMutationBatches(t) {
    return d.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(t, e) {
    const r = new B(e, 0),
      s = new B(e, Number.POSITIVE_INFINITY),
      i = [];
    return (
      this.wr.forEachInRange([r, s], (o) => {
        const a = this.Sr(o.pr);
        i.push(a);
      }),
      d.resolve(i)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(t, e) {
    let r = new Q(P);
    return (
      e.forEach((s) => {
        const i = new B(s, 0),
          o = new B(s, Number.POSITIVE_INFINITY);
        this.wr.forEachInRange([i, o], (a) => {
          r = r.add(a.pr);
        });
      }),
      d.resolve(this.Dr(r))
    );
  }
  getAllMutationBatchesAffectingQuery(t, e) {
    const r = e.path,
      s = r.length + 1;
    let i = r;
    E.isDocumentKey(i) || (i = i.child(""));
    const o = new B(new E(i), 0);
    let a = new Q(P);
    return (
      this.wr.forEachWhile((u) => {
        const h = u.key.path;
        return !!r.isPrefixOf(h) && (h.length === s && (a = a.add(u.pr)), !0);
      }, o),
      d.resolve(this.Dr(a))
    );
  }
  Dr(t) {
    const e = [];
    return (
      t.forEach((r) => {
        const s = this.Sr(r);
        s !== null && e.push(s);
      }),
      e
    );
  }
  removeMutationBatch(t, e) {
    U(this.Cr(e.batchId, "removed") === 0), this.mutationQueue.shift();
    let r = this.wr;
    return d
      .forEach(e.mutations, (s) => {
        const i = new B(s.key, e.batchId);
        return (
          (r = r.delete(i)),
          this.referenceDelegate.markPotentiallyOrphaned(t, s.key)
        );
      })
      .next(() => {
        this.wr = r;
      });
  }
  Mn(t) {}
  containsKey(t, e) {
    const r = new B(e, 0),
      s = this.wr.firstAfterOrEqual(r);
    return d.resolve(e.isEqual(s && s.key));
  }
  performConsistencyCheck(t) {
    return this.mutationQueue.length, d.resolve();
  }
  Cr(t, e) {
    return this.br(t);
  }
  br(t) {
    return this.mutationQueue.length === 0
      ? 0
      : t - this.mutationQueue[0].batchId;
  }
  Sr(t) {
    const e = this.br(t);
    return e < 0 || e >= this.mutationQueue.length
      ? null
      : this.mutationQueue[e];
  }
}
/**
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
 */ class Rd {
  constructor(t) {
    (this.vr = t),
      (this.docs = (function () {
        return new x(E.comparator);
      })()),
      (this.size = 0);
  }
  setIndexManager(t) {
    this.indexManager = t;
  }
  addEntry(t, e) {
    const r = e.key,
      s = this.docs.get(r),
      i = s ? s.size : 0,
      o = this.vr(e);
    return (
      (this.docs = this.docs.insert(r, { document: e.mutableCopy(), size: o })),
      (this.size += o - i),
      this.indexManager.addToCollectionParentIndex(t, r.path.popLast())
    );
  }
  removeEntry(t) {
    const e = this.docs.get(t);
    e && ((this.docs = this.docs.remove(t)), (this.size -= e.size));
  }
  getEntry(t, e) {
    const r = this.docs.get(e);
    return d.resolve(r ? r.document.mutableCopy() : Y.newInvalidDocument(e));
  }
  getEntries(t, e) {
    let r = Ct();
    return (
      e.forEach((s) => {
        const i = this.docs.get(s);
        r = r.insert(s, i ? i.document.mutableCopy() : Y.newInvalidDocument(s));
      }),
      d.resolve(r)
    );
  }
  getDocumentsMatchingQuery(t, e, r, s) {
    let i = Ct();
    const o = e.path,
      a = new E(o.child("")),
      u = this.docs.getIteratorFrom(a);
    for (; u.hasNext(); ) {
      const {
        key: h,
        value: { document: c },
      } = u.getNext();
      if (!o.isPrefixOf(h.path)) break;
      h.path.length > o.length + 1 ||
        gl(pl(c), r) <= 0 ||
        ((s.has(c.key) || Jn(e, c)) && (i = i.insert(c.key, c.mutableCopy())));
    }
    return d.resolve(i);
  }
  getAllFromCollectionGroup(t, e, r, s) {
    I();
  }
  Fr(t, e) {
    return d.forEach(this.docs, (r) => e(r));
  }
  newChangeBuffer(t) {
    return new Sd(this);
  }
  getSize(t) {
    return d.resolve(this.size);
  }
}
class Sd extends Ed {
  constructor(t) {
    super(), (this.ar = t);
  }
  applyChanges(t) {
    const e = [];
    return (
      this.changes.forEach((r, s) => {
        s.isValidDocument()
          ? e.push(this.ar.addEntry(t, s))
          : this.ar.removeEntry(r);
      }),
      d.waitFor(e)
    );
  }
  getFromCache(t, e) {
    return this.ar.getEntry(t, e);
  }
  getAllFromCache(t, e) {
    return this.ar.getEntries(t, e);
  }
}
/**
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
 */ class Cd {
  constructor(t) {
    (this.persistence = t),
      (this.Mr = new fe((e) => Os(e), xs)),
      (this.lastRemoteSnapshotVersion = T.min()),
      (this.highestTargetId = 0),
      (this.Or = 0),
      (this.Nr = new Us()),
      (this.targetCount = 0),
      (this.Br = oe.Nn());
  }
  forEachTarget(t, e) {
    return this.Mr.forEach((r, s) => e(s)), d.resolve();
  }
  getLastRemoteSnapshotVersion(t) {
    return d.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(t) {
    return d.resolve(this.Or);
  }
  allocateTargetId(t) {
    return (
      (this.highestTargetId = this.Br.next()), d.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(t, e, r) {
    return (
      r && (this.lastRemoteSnapshotVersion = r),
      e > this.Or && (this.Or = e),
      d.resolve()
    );
  }
  qn(t) {
    this.Mr.set(t.target, t);
    const e = t.targetId;
    e > this.highestTargetId &&
      ((this.Br = new oe(e)), (this.highestTargetId = e)),
      t.sequenceNumber > this.Or && (this.Or = t.sequenceNumber);
  }
  addTargetData(t, e) {
    return this.qn(e), (this.targetCount += 1), d.resolve();
  }
  updateTargetData(t, e) {
    return this.qn(e), d.resolve();
  }
  removeTargetData(t, e) {
    return (
      this.Mr.delete(e.target),
      this.Nr.Vr(e.targetId),
      (this.targetCount -= 1),
      d.resolve()
    );
  }
  removeTargets(t, e, r) {
    let s = 0;
    const i = [];
    return (
      this.Mr.forEach((o, a) => {
        a.sequenceNumber <= e &&
          r.get(a.targetId) === null &&
          (this.Mr.delete(o),
          i.push(this.removeMatchingKeysForTargetId(t, a.targetId)),
          s++);
      }),
      d.waitFor(i).next(() => s)
    );
  }
  getTargetCount(t) {
    return d.resolve(this.targetCount);
  }
  getTargetData(t, e) {
    const r = this.Mr.get(e) || null;
    return d.resolve(r);
  }
  addMatchingKeys(t, e, r) {
    return this.Nr.dr(e, r), d.resolve();
  }
  removeMatchingKeys(t, e, r) {
    this.Nr.Rr(e, r);
    const s = this.persistence.referenceDelegate,
      i = [];
    return (
      s &&
        e.forEach((o) => {
          i.push(s.markPotentiallyOrphaned(t, o));
        }),
      d.waitFor(i)
    );
  }
  removeMatchingKeysForTargetId(t, e) {
    return this.Nr.Vr(e), d.resolve();
  }
  getMatchingKeysForTargetId(t, e) {
    const r = this.Nr.gr(e);
    return d.resolve(r);
  }
  containsKey(t, e) {
    return d.resolve(this.Nr.containsKey(e));
  }
}
/**
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
 */ class Pd {
  constructor(t, e) {
    (this.Lr = {}),
      (this.overlays = {}),
      (this.kr = new Ds(0)),
      (this.qr = !1),
      (this.qr = !0),
      (this.referenceDelegate = t(this)),
      (this.Qr = new Cd(this)),
      (this.indexManager = new _d()),
      (this.remoteDocumentCache = (function (s) {
        return new Rd(s);
      })((r) => this.referenceDelegate.Kr(r))),
      (this.serializer = new gd(e)),
      (this.$r = new Id(this.serializer));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.qr = !1), Promise.resolve();
  }
  get started() {
    return this.qr;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(t) {
    return this.indexManager;
  }
  getDocumentOverlayCache(t) {
    let e = this.overlays[t.toKey()];
    return e || ((e = new wd()), (this.overlays[t.toKey()] = e)), e;
  }
  getMutationQueue(t, e) {
    let r = this.Lr[t.toKey()];
    return (
      r || ((r = new Ad(e, this.referenceDelegate)), (this.Lr[t.toKey()] = r)),
      r
    );
  }
  getTargetCache() {
    return this.Qr;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.$r;
  }
  runTransaction(t, e, r) {
    _("MemoryPersistence", "Starting transaction:", t);
    const s = new Vd(this.kr.next());
    return (
      this.referenceDelegate.Ur(),
      r(s)
        .next((i) => this.referenceDelegate.Wr(s).next(() => i))
        .toPromise()
        .then((i) => (s.raiseOnCommittedEvent(), i))
    );
  }
  Gr(t, e) {
    return d.or(Object.values(this.Lr).map((r) => () => r.containsKey(t, e)));
  }
}
class Vd extends _l {
  constructor(t) {
    super(), (this.currentSequenceNumber = t);
  }
}
class Bs {
  constructor(t) {
    (this.persistence = t), (this.zr = new Us()), (this.jr = null);
  }
  static Hr(t) {
    return new Bs(t);
  }
  get Jr() {
    if (this.jr) return this.jr;
    throw I();
  }
  addReference(t, e, r) {
    return (
      this.zr.addReference(r, e), this.Jr.delete(r.toString()), d.resolve()
    );
  }
  removeReference(t, e, r) {
    return (
      this.zr.removeReference(r, e), this.Jr.add(r.toString()), d.resolve()
    );
  }
  markPotentiallyOrphaned(t, e) {
    return this.Jr.add(e.toString()), d.resolve();
  }
  removeTarget(t, e) {
    this.zr.Vr(e.targetId).forEach((s) => this.Jr.add(s.toString()));
    const r = this.persistence.getTargetCache();
    return r
      .getMatchingKeysForTargetId(t, e.targetId)
      .next((s) => {
        s.forEach((i) => this.Jr.add(i.toString()));
      })
      .next(() => r.removeTargetData(t, e));
  }
  Ur() {
    this.jr = new Set();
  }
  Wr(t) {
    const e = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return d
      .forEach(this.Jr, (r) => {
        const s = E.fromPath(r);
        return this.Yr(t, s).next((i) => {
          i || e.removeEntry(s, T.min());
        });
      })
      .next(() => ((this.jr = null), e.apply(t)));
  }
  updateLimboDocument(t, e) {
    return this.Yr(t, e).next((r) => {
      r ? this.Jr.delete(e.toString()) : this.Jr.add(e.toString());
    });
  }
  Kr(t) {
    return 0;
  }
  Yr(t, e) {
    return d.or([
      () => d.resolve(this.zr.containsKey(e)),
      () => this.persistence.getTargetCache().containsKey(t, e),
      () => this.persistence.Gr(t, e),
    ]);
  }
}
/**
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
 */ class qs {
  constructor(t, e, r, s) {
    (this.targetId = t), (this.fromCache = e), (this.qi = r), (this.Qi = s);
  }
  static Ki(t, e) {
    let r = S(),
      s = S();
    for (const i of e.docChanges)
      switch (i.type) {
        case 0:
          r = r.add(i.doc.key);
          break;
        case 1:
          s = s.add(i.doc.key);
      }
    return new qs(t, e.fromCache, r, s);
  }
}
/**
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
 */ class Dd {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(t) {
    this._documentReadCount += t;
  }
}
/**
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
 */ class bd {
  constructor() {
    (this.$i = !1),
      (this.Ui = !1),
      (this.Wi = 100),
      (this.Gi = (function () {
        return Lu() ? 8 : Ot.v(En()) > 0 ? 6 : 4;
      })());
  }
  initialize(t, e) {
    (this.zi = t), (this.indexManager = e), (this.$i = !0);
  }
  getDocumentsMatchingQuery(t, e, r, s) {
    const i = { result: null };
    return this.ji(t, e)
      .next((o) => {
        i.result = o;
      })
      .next(() => {
        if (!i.result)
          return this.Hi(t, e, s, r).next((o) => {
            i.result = o;
          });
      })
      .next(() => {
        if (i.result) return;
        const o = new Dd();
        return this.Ji(t, e, o).next((a) => {
          if (((i.result = a), this.Ui)) return this.Yi(t, e, o, a.size);
        });
      })
      .next(() => i.result);
  }
  Yi(t, e, r, s) {
    return r.documentReadCount < this.Wi
      ? (ye() <= R.DEBUG &&
          _(
            "QueryEngine",
            "SDK will not create cache indexes for query:",
            Kt(e),
            "since it only creates cache indexes for collection contains",
            "more than or equal to",
            this.Wi,
            "documents",
          ),
        d.resolve())
      : (ye() <= R.DEBUG &&
          _(
            "QueryEngine",
            "Query:",
            Kt(e),
            "scans",
            r.documentReadCount,
            "local documents and returns",
            s,
            "documents as results.",
          ),
        r.documentReadCount > this.Gi * s
          ? (ye() <= R.DEBUG &&
              _(
                "QueryEngine",
                "The SDK decides to create cache indexes for query:",
                Kt(e),
                "as using cache indexes may help improve performance.",
              ),
            this.indexManager.createTargetIndexes(t, dt(e)))
          : d.resolve());
  }
  ji(t, e) {
    if (Mi(e)) return d.resolve(null);
    let r = dt(e);
    return this.indexManager.getIndexType(t, r).next((s) =>
      s === 0
        ? null
        : (e.limit !== null && s === 1 && ((e = Gr(e, null, "F")), (r = dt(e))),
          this.indexManager.getDocumentsMatchingTarget(t, r).next((i) => {
            const o = S(...i);
            return this.zi.getDocuments(t, o).next((a) =>
              this.indexManager.getMinOffset(t, r).next((u) => {
                const h = this.Zi(e, a);
                return this.Xi(e, h, o, u.readTime)
                  ? this.ji(t, Gr(e, null, "F"))
                  : this.es(t, h, e, u);
              }),
            );
          })),
    );
  }
  Hi(t, e, r, s) {
    return Mi(e) || s.isEqual(T.min())
      ? d.resolve(null)
      : this.zi.getDocuments(t, r).next((i) => {
          const o = this.Zi(e, i);
          return this.Xi(e, o, r, s)
            ? d.resolve(null)
            : (ye() <= R.DEBUG &&
                _(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  s.toString(),
                  Kt(e),
                ),
              this.es(t, o, e, fl(s, -1)).next((a) => a));
        });
  }
  Zi(t, e) {
    let r = new Q(Oa(t));
    return (
      e.forEach((s, i) => {
        Jn(t, i) && (r = r.add(i));
      }),
      r
    );
  }
  Xi(t, e, r, s) {
    if (t.limit === null) return !1;
    if (r.size !== e.size) return !0;
    const i = t.limitType === "F" ? e.last() : e.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(s) > 0);
  }
  Ji(t, e, r) {
    return (
      ye() <= R.DEBUG &&
        _("QueryEngine", "Using full collection scan to execute query:", Kt(e)),
      this.zi.getDocumentsMatchingQuery(t, e, Rt.min(), r)
    );
  }
  es(t, e, r, s) {
    return this.zi.getDocumentsMatchingQuery(t, r, s).next(
      (i) => (
        e.forEach((o) => {
          i = i.insert(o.key, o);
        }),
        i
      ),
    );
  }
}
/**
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
 */ class Nd {
  constructor(t, e, r, s) {
    (this.persistence = t),
      (this.ts = e),
      (this.serializer = s),
      (this.ns = new x(P)),
      (this.rs = new fe((i) => Os(i), xs)),
      (this.ss = new Map()),
      (this.os = t.getRemoteDocumentCache()),
      (this.Qr = t.getTargetCache()),
      (this.$r = t.getBundleCache()),
      this._s(r);
  }
  _s(t) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(t)),
      (this.indexManager = this.persistence.getIndexManager(t)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        t,
        this.indexManager,
      )),
      (this.localDocuments = new Td(
        this.os,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager,
      )),
      this.os.setIndexManager(this.indexManager),
      this.ts.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(t) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (e) => t.collect(e, this.ns),
    );
  }
}
function kd(n, t, e, r) {
  return new Nd(n, t, e, r);
}
async function eu(n, t) {
  const e = C(n);
  return await e.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (r) => {
      let s;
      return e.mutationQueue
        .getAllMutationBatches(r)
        .next(
          (i) => ((s = i), e._s(t), e.mutationQueue.getAllMutationBatches(r)),
        )
        .next((i) => {
          const o = [],
            a = [];
          let u = S();
          for (const h of s) {
            o.push(h.batchId);
            for (const c of h.mutations) u = u.add(c.key);
          }
          for (const h of i) {
            a.push(h.batchId);
            for (const c of h.mutations) u = u.add(c.key);
          }
          return e.localDocuments
            .getDocuments(r, u)
            .next((h) => ({ us: h, removedBatchIds: o, addedBatchIds: a }));
        });
    },
  );
}
function nu(n) {
  const t = C(n);
  return t.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (e) => t.Qr.getLastRemoteSnapshotVersion(e),
  );
}
function Od(n, t) {
  const e = C(n),
    r = t.snapshotVersion;
  let s = e.ns;
  return e.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (i) => {
      const o = e.os.newChangeBuffer({ trackRemovals: !0 });
      s = e.ns;
      const a = [];
      t.targetChanges.forEach((c, l) => {
        const f = s.get(l);
        if (!f) return;
        a.push(
          e.Qr.removeMatchingKeys(i, c.removedDocuments, l).next(() =>
            e.Qr.addMatchingKeys(i, c.addedDocuments, l),
          ),
        );
        let g = f.withSequenceNumber(i.currentSequenceNumber);
        t.targetMismatches.get(l) !== null
          ? (g = g
              .withResumeToken(tt.EMPTY_BYTE_STRING, T.min())
              .withLastLimboFreeSnapshotVersion(T.min()))
          : c.resumeToken.approximateByteSize() > 0 &&
            (g = g.withResumeToken(c.resumeToken, r)),
          (s = s.insert(l, g)),
          (function (b, w, nt) {
            return b.resumeToken.approximateByteSize() === 0 ||
              w.snapshotVersion.toMicroseconds() -
                b.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : nt.addedDocuments.size +
                  nt.modifiedDocuments.size +
                  nt.removedDocuments.size >
                  0;
          })(f, g, c) && a.push(e.Qr.updateTargetData(i, g));
      });
      let u = Ct(),
        h = S();
      if (
        (t.documentUpdates.forEach((c) => {
          t.resolvedLimboDocuments.has(c) &&
            a.push(e.persistence.referenceDelegate.updateLimboDocument(i, c));
        }),
        a.push(
          xd(i, o, t.documentUpdates).next((c) => {
            (u = c.cs), (h = c.ls);
          }),
        ),
        !r.isEqual(T.min()))
      ) {
        const c = e.Qr.getLastRemoteSnapshotVersion(i).next((l) =>
          e.Qr.setTargetsMetadata(i, i.currentSequenceNumber, r),
        );
        a.push(c);
      }
      return d
        .waitFor(a)
        .next(() => o.apply(i))
        .next(() => e.localDocuments.getLocalViewOfDocuments(i, u, h))
        .next(() => u);
    })
    .then((i) => ((e.ns = s), i));
}
function xd(n, t, e) {
  let r = S(),
    s = S();
  return (
    e.forEach((i) => (r = r.add(i))),
    t.getEntries(n, r).next((i) => {
      let o = Ct();
      return (
        e.forEach((a, u) => {
          const h = i.get(a);
          u.isFoundDocument() !== h.isFoundDocument() && (s = s.add(a)),
            u.isNoDocument() && u.version.isEqual(T.min())
              ? (t.removeEntry(a, u.readTime), (o = o.insert(a, u)))
              : !h.isValidDocument() ||
                  u.version.compareTo(h.version) > 0 ||
                  (u.version.compareTo(h.version) === 0 && h.hasPendingWrites)
                ? (t.addEntry(u), (o = o.insert(a, u)))
                : _(
                    "LocalStore",
                    "Ignoring outdated watch update for ",
                    a,
                    ". Current version:",
                    h.version,
                    " Watch version:",
                    u.version,
                  );
        }),
        { cs: o, ls: s }
      );
    })
  );
}
function Md(n, t) {
  const e = C(n);
  return e.persistence
    .runTransaction("Allocate target", "readwrite", (r) => {
      let s;
      return e.Qr.getTargetData(r, t).next((i) =>
        i
          ? ((s = i), d.resolve(s))
          : e.Qr.allocateTargetId(r).next(
              (o) => (
                (s = new Tt(
                  t,
                  o,
                  "TargetPurposeListen",
                  r.currentSequenceNumber,
                )),
                e.Qr.addTargetData(r, s).next(() => s)
              ),
            ),
      );
    })
    .then((r) => {
      const s = e.ns.get(r.targetId);
      return (
        (s === null || r.snapshotVersion.compareTo(s.snapshotVersion) > 0) &&
          ((e.ns = e.ns.insert(r.targetId, r)), e.rs.set(t, r.targetId)),
        r
      );
    });
}
async function Jr(n, t, e) {
  const r = C(n),
    s = r.ns.get(t),
    i = e ? "readwrite" : "readwrite-primary";
  try {
    e ||
      (await r.persistence.runTransaction("Release target", i, (o) =>
        r.persistence.referenceDelegate.removeTarget(o, s),
      ));
  } catch (o) {
    if (!Xe(o)) throw o;
    _("LocalStore", `Failed to update sequence numbers for target ${t}: ${o}`);
  }
  (r.ns = r.ns.remove(t)), r.rs.delete(s.target);
}
function Qi(n, t, e) {
  const r = C(n);
  let s = T.min(),
    i = S();
  return r.persistence.runTransaction("Execute query", "readwrite", (o) =>
    (function (u, h, c) {
      const l = C(u),
        f = l.rs.get(c);
      return f !== void 0 ? d.resolve(l.ns.get(f)) : l.Qr.getTargetData(h, c);
    })(r, o, dt(t))
      .next((a) => {
        if (a)
          return (
            (s = a.lastLimboFreeSnapshotVersion),
            r.Qr.getMatchingKeysForTargetId(o, a.targetId).next((u) => {
              i = u;
            })
          );
      })
      .next(() =>
        r.ts.getDocumentsMatchingQuery(o, t, e ? s : T.min(), e ? i : S()),
      )
      .next((a) => (Ld(r, Ml(t), a), { documents: a, hs: i })),
  );
}
function Ld(n, t, e) {
  let r = n.ss.get(t) || T.min();
  e.forEach((s, i) => {
    i.readTime.compareTo(r) > 0 && (r = i.readTime);
  }),
    n.ss.set(t, r);
}
class Hi {
  constructor() {
    this.activeTargetIds = jl();
  }
  As(t) {
    this.activeTargetIds = this.activeTargetIds.add(t);
  }
  Rs(t) {
    this.activeTargetIds = this.activeTargetIds.delete(t);
  }
  ds() {
    const t = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(t);
  }
}
class Fd {
  constructor() {
    (this.no = new Hi()),
      (this.ro = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(t) {}
  updateMutationState(t, e, r) {}
  addLocalQueryTarget(t) {
    return this.no.As(t), this.ro[t] || "not-current";
  }
  updateQueryState(t, e, r) {
    this.ro[t] = e;
  }
  removeLocalQueryTarget(t) {
    this.no.Rs(t);
  }
  isLocalQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  clearQueryState(t) {
    delete this.ro[t];
  }
  getAllActiveQueryTargets() {
    return this.no.activeTargetIds;
  }
  isActiveQueryTarget(t) {
    return this.no.activeTargetIds.has(t);
  }
  start() {
    return (this.no = new Hi()), Promise.resolve();
  }
  handleUserChange(t, e, r) {}
  setOnlineState(t) {}
  shutdown() {}
  writeSequenceNumber(t) {}
  notifyBundleLoaded(t) {}
}
/**
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
 */ class Ud {
  io(t) {}
  shutdown() {}
}
/**
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
 */ class Wi {
  constructor() {
    (this.so = () => this.oo()),
      (this._o = () => this.ao()),
      (this.uo = []),
      this.co();
  }
  io(t) {
    this.uo.push(t);
  }
  shutdown() {
    window.removeEventListener("online", this.so),
      window.removeEventListener("offline", this._o);
  }
  co() {
    window.addEventListener("online", this.so),
      window.addEventListener("offline", this._o);
  }
  oo() {
    _("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const t of this.uo) t(0);
  }
  ao() {
    _("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const t of this.uo) t(1);
  }
  static D() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
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
 */ let fn = null;
function vr() {
  return (
    fn === null
      ? (fn = (function () {
          return 268435456 + Math.round(2147483648 * Math.random());
        })())
      : fn++,
    "0x" + fn.toString(16)
  );
}
/**
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
 */ const Bd = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
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
 */ class qd {
  constructor(t) {
    (this.lo = t.lo), (this.ho = t.ho);
  }
  Po(t) {
    this.Io = t;
  }
  To(t) {
    this.Eo = t;
  }
  onMessage(t) {
    this.Ao = t;
  }
  close() {
    this.ho();
  }
  send(t) {
    this.lo(t);
  }
  Ro() {
    this.Io();
  }
  Vo(t) {
    this.Eo(t);
  }
  mo(t) {
    this.Ao(t);
  }
}
/**
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
 */ const H = "WebChannelConnection";
class jd extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const r = e.ssl ? "https" : "http",
      s = encodeURIComponent(this.databaseId.projectId),
      i = encodeURIComponent(this.databaseId.database);
    (this.fo = r + "://" + e.host),
      (this.po = `projects/${s}/databases/${i}`),
      (this.yo =
        this.databaseId.database === "(default)"
          ? `project_id=${s}`
          : `project_id=${s}&database_id=${i}`);
  }
  get wo() {
    return !1;
  }
  So(e, r, s, i, o) {
    const a = vr(),
      u = this.bo(e, r.toUriEncodedString());
    _("RestConnection", `Sending RPC '${e}' ${a}:`, u, s);
    const h = {
      "google-cloud-resource-prefix": this.po,
      "x-goog-request-params": this.yo,
    };
    return (
      this.Do(h, i, o),
      this.Co(e, u, h, s).then(
        (c) => (_("RestConnection", `Received RPC '${e}' ${a}: `, c), c),
        (c) => {
          throw (
            (ne(
              "RestConnection",
              `RPC '${e}' ${a} failed with error: `,
              c,
              "url: ",
              u,
              "request:",
              s,
            ),
            c)
          );
        },
      )
    );
  }
  vo(e, r, s, i, o, a) {
    return this.So(e, r, s, i, o);
  }
  Do(e, r, s) {
    (e["X-Goog-Api-Client"] = (function () {
      return "gl-js/ fire/" + de;
    })()),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      r && r.headers.forEach((i, o) => (e[o] = i)),
      s && s.headers.forEach((i, o) => (e[o] = i));
  }
  bo(e, r) {
    const s = Bd[e];
    return `${this.fo}/v1/${r}:${s}`;
  }
  terminate() {}
} {
  constructor(t) {
    super(t),
      (this.forceLongPolling = t.forceLongPolling),
      (this.autoDetectLongPolling = t.autoDetectLongPolling),
      (this.useFetchStreams = t.useFetchStreams),
      (this.longPollingOptions = t.longPollingOptions);
  }
  Co(t, e, r, s) {
    const i = vr();
    return new Promise((o, a) => {
      const u = new el();
      u.setWithCredentials(!0),
        u.listenOnce(Zc.COMPLETE, () => {
          try {
            switch (u.getLastErrorCode()) {
              case _r.NO_ERROR:
                const c = u.getResponseJson();
                _(H, `XHR for RPC '${t}' ${i} received:`, JSON.stringify(c)),
                  o(c);
                break;
              case _r.TIMEOUT:
                _(H, `RPC '${t}' ${i} timed out`),
                  a(new y(p.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case _r.HTTP_ERROR:
                const l = u.getStatus();
                if (
                  (_(
                    H,
                    `RPC '${t}' ${i} failed with status:`,
                    l,
                    "response text:",
                    u.getResponseText(),
                  ),
                  l > 0)
                ) {
                  let f = u.getResponseJson();
                  Array.isArray(f) && (f = f[0]);
                  const g = f?.error;
                  if (g && g.status && g.message) {
                    const D = (function (w) {
                      const nt = w.toLowerCase().replace(/_/g, "-");
                      return Object.values(p).indexOf(nt) >= 0 ? nt : p.UNKNOWN;
                    })(g.status);
                    a(new y(D, g.message));
                  } else
                    a(
                      new y(
                        p.UNKNOWN,
                        "Server responded with status " + u.getStatus(),
                      ),
                    );
                } else a(new y(p.UNAVAILABLE, "Connection failed."));
                break;
              default:
                I();
            }
          } finally {
            _(H, `RPC '${t}' ${i} completed.`);
          }
        });
      const h = JSON.stringify(s);
      _(H, `RPC '${t}' ${i} sending request:`, s), u.send(e, "POST", h, r, 15);
    });
  }
  Fo(t, e, r) {
    const s = vr(),
      i = [this.fo, "/", "google.firestore.v1.Firestore", "/", t, "/channel"],
      o = Xc(),
      a = Jc(),
      u = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      },
      h = this.longPollingOptions.timeoutSeconds;
    h !== void 0 && (u.longPollingTimeout = Math.round(1e3 * h)),
      this.useFetchStreams && (u.useFetchStreams = !0),
      this.Do(u.initMessageHeaders, e, r),
      (u.encodeInitMessageHeaders = !0);
    const c = i.join("");
    _(H, `Creating RPC '${t}' stream ${s}: ${c}`, u);
    const l = o.createWebChannel(c, u);
    let f = !1,
      g = !1;
    const D = new qd({
        lo: (w) => {
          g
            ? _(H, `Not sending because RPC '${t}' stream ${s} is closed:`, w)
            : (f ||
                (_(H, `Opening RPC '${t}' stream ${s} transport.`),
                l.open(),
                (f = !0)),
              _(H, `RPC '${t}' stream ${s} sending:`, w),
              l.send(w));
        },
        ho: () => l.close(),
      }),
      b = (w, nt, it) => {
        w.listen(nt, (gt) => {
          try {
            it(gt);
          } catch (mt) {
            setTimeout(() => {
              throw mt;
            }, 0);
          }
        });
      };
    return (
      b(l, cn.EventType.OPEN, () => {
        g || _(H, `RPC '${t}' stream ${s} transport opened.`);
      }),
      b(l, cn.EventType.CLOSE, () => {
        g ||
          ((g = !0), _(H, `RPC '${t}' stream ${s} transport closed`), D.Vo());
      }),
      b(l, cn.EventType.ERROR, (w) => {
        g ||
          ((g = !0),
          ne(H, `RPC '${t}' stream ${s} transport errored:`, w),
          D.Vo(new y(p.UNAVAILABLE, "The operation could not be completed")));
      }),
      b(l, cn.EventType.MESSAGE, (w) => {
        var nt;
        if (!g) {
          const it = w.data[0];
          U(!!it);
          const gt = it,
            mt =
              gt.error ||
              ((nt = gt[0]) === null || nt === void 0 ? void 0 : nt.error);
          if (mt) {
            _(H, `RPC '${t}' stream ${s} received error:`, mt);
            const rn = mt.status;
            let $t = (function (wu) {
                const ei = M[wu];
                if (ei !== void 0) return za(ei);
              })(rn),
              sn = mt.message;
            $t === void 0 &&
              (($t = p.INTERNAL),
              (sn =
                "Unknown error status: " + rn + " with message " + mt.message)),
              (g = !0),
              D.Vo(new y($t, sn)),
              l.close();
          } else _(H, `RPC '${t}' stream ${s} received:`, it), D.mo(it);
        }
      }),
      b(a, tl.STAT_EVENT, (w) => {
        w.stat === Ai.PROXY
          ? _(H, `RPC '${t}' stream ${s} detected buffering proxy`)
          : w.stat === Ai.NOPROXY &&
            _(H, `RPC '${t}' stream ${s} detected no buffering proxy`);
      }),
      setTimeout(() => {
        D.Ro();
      }, 0),
      D
    );
  }
}
function Tr() {
  return typeof document < "u" ? document : null;
}
/**
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
 */ function nr(n) {
  return new id(n, !0);
}
/**
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
 */ class ru {
  constructor(t, e, r = 1e3, s = 1.5, i = 6e4) {
    (this.oi = t),
      (this.timerId = e),
      (this.Mo = r),
      (this.xo = s),
      (this.Oo = i),
      (this.No = 0),
      (this.Bo = null),
      (this.Lo = Date.now()),
      this.reset();
  }
  reset() {
    this.No = 0;
  }
  ko() {
    this.No = this.Oo;
  }
  qo(t) {
    this.cancel();
    const e = Math.floor(this.No + this.Qo()),
      r = Math.max(0, Date.now() - this.Lo),
      s = Math.max(0, e - r);
    s > 0 &&
      _(
        "ExponentialBackoff",
        `Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`,
      ),
      (this.Bo = this.oi.enqueueAfterDelay(
        this.timerId,
        s,
        () => ((this.Lo = Date.now()), t()),
      )),
      (this.No *= this.xo),
      this.No < this.Mo && (this.No = this.Mo),
      this.No > this.Oo && (this.No = this.Oo);
  }
  Ko() {
    this.Bo !== null && (this.Bo.skipDelay(), (this.Bo = null));
  }
  cancel() {
    this.Bo !== null && (this.Bo.cancel(), (this.Bo = null));
  }
  Qo() {
    return (Math.random() - 0.5) * this.No;
  }
}
/**
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
 */ class $d {
  constructor(t, e, r, s, i, o, a, u) {
    (this.oi = t),
      (this.$o = r),
      (this.Uo = s),
      (this.connection = i),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = u),
      (this.state = 0),
      (this.Wo = 0),
      (this.Go = null),
      (this.zo = null),
      (this.stream = null),
      (this.jo = new ru(t, e));
  }
  Ho() {
    return this.state === 1 || this.state === 5 || this.Jo();
  }
  Jo() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Yo();
  }
  async stop() {
    this.Ho() && (await this.close(0));
  }
  Zo() {
    (this.state = 0), this.jo.reset();
  }
  Xo() {
    this.Jo() &&
      this.Go === null &&
      (this.Go = this.oi.enqueueAfterDelay(this.$o, 6e4, () => this.e_()));
  }
  t_(t) {
    this.n_(), this.stream.send(t);
  }
  async e_() {
    if (this.Jo()) return this.close(0);
  }
  n_() {
    this.Go && (this.Go.cancel(), (this.Go = null));
  }
  r_() {
    this.zo && (this.zo.cancel(), (this.zo = null));
  }
  async close(t, e) {
    this.n_(),
      this.r_(),
      this.jo.cancel(),
      this.Wo++,
      t !== 4
        ? this.jo.reset()
        : e && e.code === p.RESOURCE_EXHAUSTED
          ? (ft(e.toString()),
            ft(
              "Using maximum backoff delay to prevent overloading the backend.",
            ),
            this.jo.ko())
          : e &&
            e.code === p.UNAUTHENTICATED &&
            this.state !== 3 &&
            (this.authCredentialsProvider.invalidateToken(),
            this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.i_(), this.stream.close(), (this.stream = null)),
      (this.state = t),
      await this.listener.To(e);
  }
  i_() {}
  auth() {
    this.state = 1;
    const t = this.s_(this.Wo),
      e = this.Wo;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([r, s]) => {
        this.Wo === e && this.o_(r, s);
      },
      (r) => {
        t(() => {
          const s = new y(
            p.UNKNOWN,
            "Fetching auth token failed: " + r.message,
          );
          return this.__(s);
        });
      },
    );
  }
  o_(t, e) {
    const r = this.s_(this.Wo);
    (this.stream = this.a_(t, e)),
      this.stream.Po(() => {
        r(
          () => (
            (this.state = 2),
            (this.zo = this.oi.enqueueAfterDelay(
              this.Uo,
              1e4,
              () => (this.Jo() && (this.state = 3), Promise.resolve()),
            )),
            this.listener.Po()
          ),
        );
      }),
      this.stream.To((s) => {
        r(() => this.__(s));
      }),
      this.stream.onMessage((s) => {
        r(() => this.onMessage(s));
      });
  }
  Yo() {
    (this.state = 5),
      this.jo.qo(async () => {
        (this.state = 0), this.start();
      });
  }
  __(t) {
    return (
      _("PersistentStream", `close with error: ${t}`),
      (this.stream = null),
      this.close(4, t)
    );
  }
  s_(t) {
    return (e) => {
      this.oi.enqueueAndForget(() =>
        this.Wo === t
          ? e()
          : (_(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher.",
            ),
            Promise.resolve()),
      );
    };
  }
}
class zd extends $d {
  constructor(t, e, r, s, i, o) {
    super(
      t,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      e,
      r,
      s,
      o,
    ),
      (this.serializer = i);
  }
  a_(t, e) {
    return this.connection.Fo("Listen", t, e);
  }
  onMessage(t) {
    this.jo.reset();
    const e = ad(this.serializer, t),
      r = (function (i) {
        if (!("targetChange" in i)) return T.min();
        const o = i.targetChange;
        return o.targetIds && o.targetIds.length
          ? T.min()
          : o.readTime
            ? Jt(o.readTime)
            : T.min();
      })(t);
    return this.listener.u_(e, r);
  }
  c_(t) {
    const e = {};
    (e.database = Gi(this.serializer)),
      (e.addTarget = (function (i, o) {
        let a;
        const u = o.target;
        if (
          ((a = zr(u) ? { documents: ud(i, u) } : { query: hd(i, u).ut }),
          (a.targetId = o.targetId),
          o.resumeToken.approximateByteSize() > 0)
        ) {
          a.resumeToken = Qa(i, o.resumeToken);
          const h = Wr(i, o.expectedCount);
          h !== null && (a.expectedCount = h);
        } else if (o.snapshotVersion.compareTo(T.min()) > 0) {
          a.readTime = Yr(i, o.snapshotVersion.toTimestamp());
          const h = Wr(i, o.expectedCount);
          h !== null && (a.expectedCount = h);
        }
        return a;
      })(this.serializer, t));
    const r = ld(this.serializer, t);
    r && (e.labels = r), this.t_(e);
  }
  l_(t) {
    const e = {};
    (e.database = Gi(this.serializer)), (e.removeTarget = t), this.t_(e);
  }
}
/**
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
 */ class Kd extends class {} {
  constructor(t, e, r, s) {
    super(),
      (this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.connection = r),
      (this.serializer = s),
      (this.A_ = !1);
  }
  R_() {
    if (this.A_)
      throw new y(
        p.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  So(t, e, r, s) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, o]) => this.connection.So(t, Xr(e, r), s, i, o))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === p.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new y(p.UNKNOWN, i.toString());
        })
    );
  }
  vo(t, e, r, s, i) {
    return (
      this.R_(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([o, a]) => this.connection.vo(t, Xr(e, r), s, o, a, i))
        .catch((o) => {
          throw o.name === "FirebaseError"
            ? (o.code === p.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              o)
            : new y(p.UNKNOWN, o.toString());
        })
    );
  }
  terminate() {
    (this.A_ = !0), this.connection.terminate();
  }
}
class Gd {
  constructor(t, e) {
    (this.asyncQueue = t),
      (this.onlineStateHandler = e),
      (this.state = "Unknown"),
      (this.m_ = 0),
      (this.f_ = null),
      (this.g_ = !0);
  }
  p_() {
    this.m_ === 0 &&
      (this.y_("Unknown"),
      (this.f_ = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.f_ = null),
          this.w_("Backend didn't respond within 10 seconds."),
          this.y_("Offline"),
          Promise.resolve()
        ),
      )));
  }
  S_(t) {
    this.state === "Online"
      ? this.y_("Unknown")
      : (this.m_++,
        this.m_ >= 1 &&
          (this.b_(),
          this.w_(
            `Connection failed 1 times. Most recent error: ${t.toString()}`,
          ),
          this.y_("Offline")));
  }
  set(t) {
    this.b_(), (this.m_ = 0), t === "Online" && (this.g_ = !1), this.y_(t);
  }
  y_(t) {
    t !== this.state && ((this.state = t), this.onlineStateHandler(t));
  }
  w_(t) {
    const e = `Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.g_ ? (ft(e), (this.g_ = !1)) : _("OnlineStateTracker", e);
  }
  b_() {
    this.f_ !== null && (this.f_.cancel(), (this.f_ = null));
  }
}
/**
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
 */ class Qd {
  constructor(t, e, r, s, i) {
    (this.localStore = t),
      (this.datastore = e),
      (this.asyncQueue = r),
      (this.remoteSyncer = {}),
      (this.D_ = []),
      (this.C_ = new Map()),
      (this.v_ = new Set()),
      (this.F_ = []),
      (this.M_ = i),
      this.M_.io((o) => {
        r.enqueueAndForget(async () => {
          nn(this) &&
            (_(
              "RemoteStore",
              "Restarting streams for network reachability change.",
            ),
            await (async function (u) {
              const h = C(u);
              h.v_.add(4),
                await en(h),
                h.x_.set("Unknown"),
                h.v_.delete(4),
                await rr(h);
            })(this));
        });
      }),
      (this.x_ = new Gd(r, s));
  }
}
async function rr(n) {
  if (nn(n)) for (const t of n.F_) await t(!0);
}
async function en(n) {
  for (const t of n.F_) await t(!1);
}
function su(n, t) {
  const e = C(n);
  e.C_.has(t.targetId) ||
    (e.C_.set(t.targetId, t), zs(e) ? $s(e) : pe(e).Jo() && js(e, t));
}
function iu(n, t) {
  const e = C(n),
    r = pe(e);
  e.C_.delete(t),
    r.Jo() && ou(e, t),
    e.C_.size === 0 && (r.Jo() ? r.Xo() : nn(e) && e.x_.set("Unknown"));
}
function js(n, t) {
  if (
    (n.O_.Oe(t.targetId),
    t.resumeToken.approximateByteSize() > 0 ||
      t.snapshotVersion.compareTo(T.min()) > 0)
  ) {
    const e = n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
    t = t.withExpectedCount(e);
  }
  pe(n).c_(t);
}
function ou(n, t) {
  n.O_.Oe(t), pe(n).l_(t);
}
function $s(n) {
  (n.O_ = new ed({
    getRemoteKeysForTarget: (t) => n.remoteSyncer.getRemoteKeysForTarget(t),
    _t: (t) => n.C_.get(t) || null,
    nt: () => n.datastore.serializer.databaseId,
  })),
    pe(n).start(),
    n.x_.p_();
}
function zs(n) {
  return nn(n) && !pe(n).Ho() && n.C_.size > 0;
}
function nn(n) {
  return C(n).v_.size === 0;
}
function au(n) {
  n.O_ = void 0;
}
async function Hd(n) {
  n.C_.forEach((t, e) => {
    js(n, t);
  });
}
async function Wd(n, t) {
  au(n), zs(n) ? (n.x_.S_(t), $s(n)) : n.x_.set("Unknown");
}
async function Yd(n, t, e) {
  if ((n.x_.set("Online"), t instanceof Ga && t.state === 2 && t.cause))
    try {
      await (async function (s, i) {
        const o = i.cause;
        for (const a of i.targetIds)
          s.C_.has(a) &&
            (await s.remoteSyncer.rejectListen(a, o),
            s.C_.delete(a),
            s.O_.removeTarget(a));
      })(n, t);
    } catch (r) {
      _(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        t.targetIds.join(","),
        r,
      ),
        await Yi(n, r);
    }
  else if (
    (t instanceof mn ? n.O_.$e(t) : t instanceof Ka ? n.O_.Je(t) : n.O_.Ge(t),
    !e.isEqual(T.min()))
  )
    try {
      const r = await nu(n.localStore);
      e.compareTo(r) >= 0 &&
        (await (function (i, o) {
          const a = i.O_.it(o);
          return (
            a.targetChanges.forEach((u, h) => {
              if (u.resumeToken.approximateByteSize() > 0) {
                const c = i.C_.get(h);
                c && i.C_.set(h, c.withResumeToken(u.resumeToken, o));
              }
            }),
            a.targetMismatches.forEach((u, h) => {
              const c = i.C_.get(u);
              if (!c) return;
              i.C_.set(
                u,
                c.withResumeToken(tt.EMPTY_BYTE_STRING, c.snapshotVersion),
              ),
                ou(i, u);
              const l = new Tt(c.target, u, h, c.sequenceNumber);
              js(i, l);
            }),
            i.remoteSyncer.applyRemoteEvent(a)
          );
        })(n, e));
    } catch (r) {
      _("RemoteStore", "Failed to raise snapshot:", r), await Yi(n, r);
    }
}
async function Yi(n, t, e) {
  if (!Xe(t)) throw t;
  n.v_.add(1),
    await en(n),
    n.x_.set("Offline"),
    e || (e = () => nu(n.localStore)),
    n.asyncQueue.enqueueRetryable(async () => {
      _("RemoteStore", "Retrying IndexedDB access"),
        await e(),
        n.v_.delete(1),
        await rr(n);
    });
}
async function Xi(n, t) {
  const e = C(n);
  e.asyncQueue.verifyOperationInProgress(),
    _("RemoteStore", "RemoteStore received new credentials");
  const r = nn(e);
  e.v_.add(3),
    await en(e),
    r && e.x_.set("Unknown"),
    await e.remoteSyncer.handleCredentialChange(t),
    e.v_.delete(3),
    await rr(e);
}
async function Xd(n, t) {
  const e = C(n);
  t
    ? (e.v_.delete(2), await rr(e))
    : t || (e.v_.add(2), await en(e), e.x_.set("Unknown"));
}
function pe(n) {
  return (
    n.N_ ||
      ((n.N_ = (function (e, r, s) {
        const i = C(e);
        return (
          i.R_(),
          new zd(
            r,
            i.connection,
            i.authCredentials,
            i.appCheckCredentials,
            i.serializer,
            s,
          )
        );
      })(n.datastore, n.asyncQueue, {
        Po: Hd.bind(null, n),
        To: Wd.bind(null, n),
        u_: Yd.bind(null, n),
      })),
      n.F_.push(async (t) => {
        t
          ? (n.N_.Zo(), zs(n) ? $s(n) : n.x_.set("Unknown"))
          : (await n.N_.stop(), au(n));
      })),
    n.N_
  );
}
/**
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
 */ class Ks {
  constructor(t, e, r, s, i) {
    (this.asyncQueue = t),
      (this.timerId = e),
      (this.targetTimeMs = r),
      (this.op = s),
      (this.removalCallback = i),
      (this.deferred = new At()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  get promise() {
    return this.deferred.promise;
  }
  static createAndSchedule(t, e, r, s, i) {
    const o = Date.now() + r,
      a = new Ks(t, e, o, s, i);
    return a.start(r), a;
  }
  start(t) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), t);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(t) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new y(p.CANCELLED, "Operation cancelled" + (t ? ": " + t : "")),
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((t) => this.deferred.resolve(t)))
        : Promise.resolve(),
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function uu(n, t) {
  if ((ft("AsyncQueue", `${t}: ${n}`), Xe(n)))
    return new y(p.UNAVAILABLE, `${t}: ${n}`);
  throw n;
}
/**
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
 */ class Zt {
  constructor(t) {
    (this.comparator = t
      ? (e, r) => t(e, r) || E.comparator(e.key, r.key)
      : (e, r) => E.comparator(e.key, r.key)),
      (this.keyedMap = Te()),
      (this.sortedSet = new x(this.comparator));
  }
  static emptySet(t) {
    return new Zt(t.comparator);
  }
  has(t) {
    return this.keyedMap.get(t) != null;
  }
  get(t) {
    return this.keyedMap.get(t);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(t) {
    const e = this.keyedMap.get(t);
    return e ? this.sortedSet.indexOf(e) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(t) {
    this.sortedSet.inorderTraversal((e, r) => (t(e), !1));
  }
  add(t) {
    const e = this.delete(t.key);
    return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null));
  }
  delete(t) {
    const e = this.get(t);
    return e
      ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e))
      : this;
  }
  isEqual(t) {
    if (!(t instanceof Zt) || this.size !== t.size) return !1;
    const e = this.sortedSet.getIterator(),
      r = t.sortedSet.getIterator();
    for (; e.hasNext(); ) {
      const s = e.getNext().key,
        i = r.getNext().key;
      if (!s.isEqual(i)) return !1;
    }
    return !0;
  }
  toString() {
    const t = [];
    return (
      this.forEach((e) => {
        t.push(e.toString());
      }),
      t.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          t.join(`  
`) +
          `
)`
    );
  }
  copy(t, e) {
    const r = new Zt();
    return (
      (r.comparator = this.comparator), (r.keyedMap = t), (r.sortedSet = e), r
    );
  }
}
/**
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
 */ class Ji {
  constructor() {
    this.L_ = new x(E.comparator);
  }
  track(t) {
    const e = t.doc.key,
      r = this.L_.get(e);
    r
      ? t.type !== 0 && r.type === 3
        ? (this.L_ = this.L_.insert(e, t))
        : t.type === 3 && r.type !== 1
          ? (this.L_ = this.L_.insert(e, { type: r.type, doc: t.doc }))
          : t.type === 2 && r.type === 2
            ? (this.L_ = this.L_.insert(e, { type: 2, doc: t.doc }))
            : t.type === 2 && r.type === 0
              ? (this.L_ = this.L_.insert(e, { type: 0, doc: t.doc }))
              : t.type === 1 && r.type === 0
                ? (this.L_ = this.L_.remove(e))
                : t.type === 1 && r.type === 2
                  ? (this.L_ = this.L_.insert(e, { type: 1, doc: r.doc }))
                  : t.type === 0 && r.type === 1
                    ? (this.L_ = this.L_.insert(e, { type: 2, doc: t.doc }))
                    : I()
      : (this.L_ = this.L_.insert(e, t));
  }
  k_() {
    const t = [];
    return (
      this.L_.inorderTraversal((e, r) => {
        t.push(r);
      }),
      t
    );
  }
}
class ae {
  constructor(t, e, r, s, i, o, a, u, h) {
    (this.query = t),
      (this.docs = e),
      (this.oldDocs = r),
      (this.docChanges = s),
      (this.mutatedKeys = i),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = u),
      (this.hasCachedResults = h);
  }
  static fromInitialDocuments(t, e, r, s, i) {
    const o = [];
    return (
      e.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new ae(t, e, Zt.emptySet(e), o, r, s, !0, !1, i)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(t) {
    if (
      !(
        this.fromCache === t.fromCache &&
        this.hasCachedResults === t.hasCachedResults &&
        this.syncStateChanged === t.syncStateChanged &&
        this.mutatedKeys.isEqual(t.mutatedKeys) &&
        Xn(this.query, t.query) &&
        this.docs.isEqual(t.docs) &&
        this.oldDocs.isEqual(t.oldDocs)
      )
    )
      return !1;
    const e = this.docChanges,
      r = t.docChanges;
    if (e.length !== r.length) return !1;
    for (let s = 0; s < e.length; s++)
      if (e[s].type !== r[s].type || !e[s].doc.isEqual(r[s].doc)) return !1;
    return !0;
  }
}
/**
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
 */ class Jd {
  constructor() {
    (this.q_ = void 0), (this.Q_ = []);
  }
}
class Zd {
  constructor() {
    (this.queries = new fe((t) => ka(t), Xn)),
      (this.onlineState = "Unknown"),
      (this.K_ = new Set());
  }
}
async function tf(n, t) {
  const e = C(n),
    r = t.query;
  let s = !1,
    i = e.queries.get(r);
  if ((i || ((s = !0), (i = new Jd())), s))
    try {
      i.q_ = await e.onListen(r);
    } catch (o) {
      const a = uu(o, `Initialization of query '${Kt(t.query)}' failed`);
      return void t.onError(a);
    }
  e.queries.set(r, i),
    i.Q_.push(t),
    t.U_(e.onlineState),
    i.q_ && t.W_(i.q_) && Gs(e);
}
async function ef(n, t) {
  const e = C(n),
    r = t.query;
  let s = !1;
  const i = e.queries.get(r);
  if (i) {
    const o = i.Q_.indexOf(t);
    o >= 0 && (i.Q_.splice(o, 1), (s = i.Q_.length === 0));
  }
  if (s) return e.queries.delete(r), e.onUnlisten(r);
}
function nf(n, t) {
  const e = C(n);
  let r = !1;
  for (const s of t) {
    const i = s.query,
      o = e.queries.get(i);
    if (o) {
      for (const a of o.Q_) a.W_(s) && (r = !0);
      o.q_ = s;
    }
  }
  r && Gs(e);
}
function rf(n, t, e) {
  const r = C(n),
    s = r.queries.get(t);
  if (s) for (const i of s.Q_) i.onError(e);
  r.queries.delete(t);
}
function Gs(n) {
  n.K_.forEach((t) => {
    t.next();
  });
}
class sf {
  constructor(t, e, r) {
    (this.query = t),
      (this.G_ = e),
      (this.z_ = !1),
      (this.j_ = null),
      (this.onlineState = "Unknown"),
      (this.options = r || {});
  }
  W_(t) {
    if (!this.options.includeMetadataChanges) {
      const r = [];
      for (const s of t.docChanges) s.type !== 3 && r.push(s);
      t = new ae(
        t.query,
        t.docs,
        t.oldDocs,
        r,
        t.mutatedKeys,
        t.fromCache,
        t.syncStateChanged,
        !0,
        t.hasCachedResults,
      );
    }
    let e = !1;
    return (
      this.z_
        ? this.H_(t) && (this.G_.next(t), (e = !0))
        : this.J_(t, this.onlineState) && (this.Y_(t), (e = !0)),
      (this.j_ = t),
      e
    );
  }
  onError(t) {
    this.G_.error(t);
  }
  U_(t) {
    this.onlineState = t;
    let e = !1;
    return (
      this.j_ &&
        !this.z_ &&
        this.J_(this.j_, t) &&
        (this.Y_(this.j_), (e = !0)),
      e
    );
  }
  J_(t, e) {
    if (!t.fromCache) return !0;
    const r = e !== "Offline";
    return (
      (!this.options.Z_ || !r) &&
      (!t.docs.isEmpty() || t.hasCachedResults || e === "Offline")
    );
  }
  H_(t) {
    if (t.docChanges.length > 0) return !0;
    const e = this.j_ && this.j_.hasPendingWrites !== t.hasPendingWrites;
    return (
      !(!t.syncStateChanged && !e) && this.options.includeMetadataChanges === !0
    );
  }
  Y_(t) {
    (t = ae.fromInitialDocuments(
      t.query,
      t.docs,
      t.mutatedKeys,
      t.fromCache,
      t.hasCachedResults,
    )),
      (this.z_ = !0),
      this.G_.next(t);
  }
}
/**
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
 */ class hu {
  constructor(t) {
    this.key = t;
  }
}
class cu {
  constructor(t) {
    this.key = t;
  }
}
class of {
  constructor(t, e) {
    (this.query = t),
      (this.oa = e),
      (this._a = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.aa = S()),
      (this.mutatedKeys = S()),
      (this.ua = Oa(t)),
      (this.ca = new Zt(this.ua));
  }
  get la() {
    return this.oa;
  }
  ha(t, e) {
    const r = e ? e.Pa : new Ji(),
      s = e ? e.ca : this.ca;
    let i = e ? e.mutatedKeys : this.mutatedKeys,
      o = s,
      a = !1;
    const u =
        this.query.limitType === "F" && s.size === this.query.limit
          ? s.last()
          : null,
      h =
        this.query.limitType === "L" && s.size === this.query.limit
          ? s.first()
          : null;
    if (
      (t.inorderTraversal((c, l) => {
        const f = s.get(c),
          g = Jn(this.query, l) ? l : null,
          D = !!f && this.mutatedKeys.has(f.key),
          b =
            !!g &&
            (g.hasLocalMutations ||
              (this.mutatedKeys.has(g.key) && g.hasCommittedMutations));
        let w = !1;
        f && g
          ? f.data.isEqual(g.data)
            ? D !== b && (r.track({ type: 3, doc: g }), (w = !0))
            : this.Ia(f, g) ||
              (r.track({ type: 2, doc: g }),
              (w = !0),
              ((u && this.ua(g, u) > 0) || (h && this.ua(g, h) < 0)) &&
                (a = !0))
          : !f && g
            ? (r.track({ type: 0, doc: g }), (w = !0))
            : f &&
              !g &&
              (r.track({ type: 1, doc: f }), (w = !0), (u || h) && (a = !0)),
          w &&
            (g
              ? ((o = o.add(g)), (i = b ? i.add(c) : i.delete(c)))
              : ((o = o.delete(c)), (i = i.delete(c))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const c = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(c.key)),
          (i = i.delete(c.key)),
          r.track({ type: 1, doc: c });
      }
    return { ca: o, Pa: r, Xi: a, mutatedKeys: i };
  }
  Ia(t, e) {
    return (
      t.hasLocalMutations && e.hasCommittedMutations && !e.hasLocalMutations
    );
  }
  applyChanges(t, e, r, s) {
    const i = this.ca;
    (this.ca = t.ca), (this.mutatedKeys = t.mutatedKeys);
    const o = t.Pa.k_();
    o.sort(
      (c, l) =>
        (function (g, D) {
          const b = (w) => {
            switch (w) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return I();
            }
          };
          return b(g) - b(D);
        })(c.type, l.type) || this.ua(c.doc, l.doc),
    ),
      this.Ta(r),
      (s = s != null && s);
    const a = e && !s ? this.Ea() : [],
      u = this.aa.size === 0 && this.current && !s ? 1 : 0,
      h = u !== this._a;
    return (
      (this._a = u),
      o.length !== 0 || h
        ? {
            snapshot: new ae(
              this.query,
              t.ca,
              i,
              o,
              t.mutatedKeys,
              u === 0,
              h,
              !1,
              !!r && r.resumeToken.approximateByteSize() > 0,
            ),
            da: a,
          }
        : { da: a }
    );
  }
  U_(t) {
    return this.current && t === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { ca: this.ca, Pa: new Ji(), mutatedKeys: this.mutatedKeys, Xi: !1 },
          !1,
        ))
      : { da: [] };
  }
  Aa(t) {
    return (
      !this.oa.has(t) && !!this.ca.has(t) && !this.ca.get(t).hasLocalMutations
    );
  }
  Ta(t) {
    t &&
      (t.addedDocuments.forEach((e) => (this.oa = this.oa.add(e))),
      t.modifiedDocuments.forEach((e) => {}),
      t.removedDocuments.forEach((e) => (this.oa = this.oa.delete(e))),
      (this.current = t.current));
  }
  Ea() {
    if (!this.current) return [];
    const t = this.aa;
    (this.aa = S()),
      this.ca.forEach((r) => {
        this.Aa(r.key) && (this.aa = this.aa.add(r.key));
      });
    const e = [];
    return (
      t.forEach((r) => {
        this.aa.has(r) || e.push(new cu(r));
      }),
      this.aa.forEach((r) => {
        t.has(r) || e.push(new hu(r));
      }),
      e
    );
  }
  Ra(t) {
    (this.oa = t.hs), (this.aa = S());
    const e = this.ha(t.documents);
    return this.applyChanges(e, !0);
  }
  Va() {
    return ae.fromInitialDocuments(
      this.query,
      this.ca,
      this.mutatedKeys,
      this._a === 0,
      this.hasCachedResults,
    );
  }
}
class af {
  constructor(t, e, r) {
    (this.query = t), (this.targetId = e), (this.view = r);
  }
}
class uf {
  constructor(t) {
    (this.key = t), (this.ma = !1);
  }
}
class hf {
  constructor(t, e, r, s, i, o) {
    (this.localStore = t),
      (this.remoteStore = e),
      (this.eventManager = r),
      (this.sharedClientState = s),
      (this.currentUser = i),
      (this.maxConcurrentLimboResolutions = o),
      (this.fa = {}),
      (this.ga = new fe((a) => ka(a), Xn)),
      (this.pa = new Map()),
      (this.ya = new Set()),
      (this.wa = new x(E.comparator)),
      (this.Sa = new Map()),
      (this.ba = new Us()),
      (this.Da = {}),
      (this.Ca = new Map()),
      (this.va = oe.Bn()),
      (this.onlineState = "Unknown"),
      (this.Fa = void 0);
  }
  get isPrimaryClient() {
    return this.Fa === !0;
  }
}
async function cf(n, t) {
  const e = _f(n);
  let r, s;
  const i = e.ga.get(t);
  if (i)
    (r = i.targetId),
      e.sharedClientState.addLocalQueryTarget(r),
      (s = i.view.Va());
  else {
    const o = await Md(e.localStore, dt(t)),
      a = e.sharedClientState.addLocalQueryTarget(o.targetId);
    (r = o.targetId),
      (s = await lf(e, t, r, a === "current", o.resumeToken)),
      e.isPrimaryClient && su(e.remoteStore, o);
  }
  return s;
}
async function lf(n, t, e, r, s) {
  n.Ma = (l, f, g) =>
    (async function (b, w, nt, it) {
      let gt = w.view.ha(nt);
      gt.Xi &&
        (gt = await Qi(b.localStore, w.query, !1).then(({ documents: sn }) =>
          w.view.ha(sn, gt),
        ));
      const mt = it && it.targetChanges.get(w.targetId),
        rn = it && it.targetMismatches.get(w.targetId) != null,
        $t = w.view.applyChanges(gt, b.isPrimaryClient, mt, rn);
      return to(b, w.targetId, $t.da), $t.snapshot;
    })(n, l, f, g);
  const i = await Qi(n.localStore, t, !0),
    o = new of(t, i.hs),
    a = o.ha(i.documents),
    u = tn.createSynthesizedTargetChangeForCurrentChange(
      e,
      r && n.onlineState !== "Offline",
      s,
    ),
    h = o.applyChanges(a, n.isPrimaryClient, u);
  to(n, e, h.da);
  const c = new af(t, e, o);
  return (
    n.ga.set(t, c),
    n.pa.has(e) ? n.pa.get(e).push(t) : n.pa.set(e, [t]),
    h.snapshot
  );
}
async function df(n, t) {
  const e = C(n),
    r = e.ga.get(t),
    s = e.pa.get(r.targetId);
  if (s.length > 1)
    return (
      e.pa.set(
        r.targetId,
        s.filter((i) => !Xn(i, t)),
      ),
      void e.ga.delete(t)
    );
  e.isPrimaryClient
    ? (e.sharedClientState.removeLocalQueryTarget(r.targetId),
      e.sharedClientState.isActiveQueryTarget(r.targetId) ||
        (await Jr(e.localStore, r.targetId, !1)
          .then(() => {
            e.sharedClientState.clearQueryState(r.targetId),
              iu(e.remoteStore, r.targetId),
              Zr(e, r.targetId);
          })
          .catch(Cs)))
    : (Zr(e, r.targetId), await Jr(e.localStore, r.targetId, !0));
}
async function lu(n, t) {
  const e = C(n);
  try {
    const r = await Od(e.localStore, t);
    t.targetChanges.forEach((s, i) => {
      const o = e.Sa.get(i);
      o &&
        (U(
          s.addedDocuments.size +
            s.modifiedDocuments.size +
            s.removedDocuments.size <=
            1,
        ),
        s.addedDocuments.size > 0
          ? (o.ma = !0)
          : s.modifiedDocuments.size > 0
            ? U(o.ma)
            : s.removedDocuments.size > 0 && (U(o.ma), (o.ma = !1)));
    }),
      await fu(e, r, t);
  } catch (r) {
    await Cs(r);
  }
}
function Zi(n, t, e) {
  const r = C(n);
  if ((r.isPrimaryClient && e === 0) || (!r.isPrimaryClient && e === 1)) {
    const s = [];
    r.ga.forEach((i, o) => {
      const a = o.view.U_(t);
      a.snapshot && s.push(a.snapshot);
    }),
      (function (o, a) {
        const u = C(o);
        u.onlineState = a;
        let h = !1;
        u.queries.forEach((c, l) => {
          for (const f of l.Q_) f.U_(a) && (h = !0);
        }),
          h && Gs(u);
      })(r.eventManager, t),
      s.length && r.fa.u_(s),
      (r.onlineState = t),
      r.isPrimaryClient && r.sharedClientState.setOnlineState(t);
  }
}
async function ff(n, t, e) {
  const r = C(n);
  r.sharedClientState.updateQueryState(t, "rejected", e);
  const s = r.Sa.get(t),
    i = s && s.key;
  if (i) {
    let o = new x(E.comparator);
    o = o.insert(i, Y.newNoDocument(i, T.min()));
    const a = S().add(i),
      u = new er(T.min(), new Map(), new x(P), o, a);
    await lu(r, u), (r.wa = r.wa.remove(i)), r.Sa.delete(t), Qs(r);
  } else
    await Jr(r.localStore, t, !1)
      .then(() => Zr(r, t, e))
      .catch(Cs);
}
function Zr(n, t, e = null) {
  n.sharedClientState.removeLocalQueryTarget(t);
  for (const r of n.pa.get(t)) n.ga.delete(r), e && n.fa.xa(r, e);
  n.pa.delete(t),
    n.isPrimaryClient &&
      n.ba.Vr(t).forEach((r) => {
        n.ba.containsKey(r) || du(n, r);
      });
}
function du(n, t) {
  n.ya.delete(t.path.canonicalString());
  const e = n.wa.get(t);
  e !== null &&
    (iu(n.remoteStore, e), (n.wa = n.wa.remove(t)), n.Sa.delete(e), Qs(n));
}
function to(n, t, e) {
  for (const r of e)
    r instanceof hu
      ? (n.ba.addReference(r.key, t), pf(n, r))
      : r instanceof cu
        ? (_("SyncEngine", "Document no longer in limbo: " + r.key),
          n.ba.removeReference(r.key, t),
          n.ba.containsKey(r.key) || du(n, r.key))
        : I();
}
function pf(n, t) {
  const e = t.key,
    r = e.path.canonicalString();
  n.wa.get(e) ||
    n.ya.has(r) ||
    (_("SyncEngine", "New document in limbo: " + e), n.ya.add(r), Qs(n));
}
function Qs(n) {
  for (; n.ya.size > 0 && n.wa.size < n.maxConcurrentLimboResolutions; ) {
    const t = n.ya.values().next().value;
    n.ya.delete(t);
    const e = new E(k.fromString(t)),
      r = n.va.next();
    n.Sa.set(r, new uf(e)),
      (n.wa = n.wa.insert(e, r)),
      su(
        n.remoteStore,
        new Tt(dt(ba(e.path)), r, "TargetPurposeLimboResolution", Ds._e),
      );
  }
}
async function fu(n, t, e) {
  const r = C(n),
    s = [],
    i = [],
    o = [];
  r.ga.isEmpty() ||
    (r.ga.forEach((a, u) => {
      o.push(
        r.Ma(u, t, e).then((h) => {
          if (
            ((h || e) &&
              r.isPrimaryClient &&
              r.sharedClientState.updateQueryState(
                u.targetId,
                h?.fromCache ? "not-current" : "current",
              ),
            h)
          ) {
            s.push(h);
            const c = qs.Ki(u.targetId, h);
            i.push(c);
          }
        }),
      );
    }),
    await Promise.all(o),
    r.fa.u_(s),
    await (async function (u, h) {
      const c = C(u);
      try {
        await c.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (l) =>
            d.forEach(h, (f) =>
              d
                .forEach(f.qi, (g) =>
                  c.persistence.referenceDelegate.addReference(
                    l,
                    f.targetId,
                    g,
                  ),
                )
                .next(() =>
                  d.forEach(f.Qi, (g) =>
                    c.persistence.referenceDelegate.removeReference(
                      l,
                      f.targetId,
                      g,
                    ),
                  ),
                ),
            ),
        );
      } catch (l) {
        if (!Xe(l)) throw l;
        _("LocalStore", "Failed to update sequence numbers: " + l);
      }
      for (const l of h) {
        const f = l.targetId;
        if (!l.fromCache) {
          const g = c.ns.get(f),
            D = g.snapshotVersion,
            b = g.withLastLimboFreeSnapshotVersion(D);
          c.ns = c.ns.insert(f, b);
        }
      }
    })(r.localStore, i));
}
async function gf(n, t) {
  const e = C(n);
  if (!e.currentUser.isEqual(t)) {
    _("SyncEngine", "User change. New user:", t.toKey());
    const r = await eu(e.localStore, t);
    (e.currentUser = t),
      (function (i, o) {
        i.Ca.forEach((a) => {
          a.forEach((u) => {
            u.reject(new y(p.CANCELLED, o));
          });
        }),
          i.Ca.clear();
      })(e, "'waitForPendingWrites' promise is rejected due to a user change."),
      e.sharedClientState.handleUserChange(
        t,
        r.removedBatchIds,
        r.addedBatchIds,
      ),
      await fu(e, r.us);
  }
}
function mf(n, t) {
  const e = C(n),
    r = e.Sa.get(t);
  if (r && r.ma) return S().add(r.key);
  {
    let s = S();
    const i = e.pa.get(t);
    if (!i) return s;
    for (const o of i) {
      const a = e.ga.get(o);
      s = s.unionWith(a.view.la);
    }
    return s;
  }
}
function _f(n) {
  const t = C(n);
  return (
    (t.remoteStore.remoteSyncer.applyRemoteEvent = lu.bind(null, t)),
    (t.remoteStore.remoteSyncer.getRemoteKeysForTarget = mf.bind(null, t)),
    (t.remoteStore.remoteSyncer.rejectListen = ff.bind(null, t)),
    (t.fa.u_ = nf.bind(null, t.eventManager)),
    (t.fa.xa = rf.bind(null, t.eventManager)),
    t
  );
}
class eo {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(t) {
    (this.serializer = nr(t.databaseInfo.databaseId)),
      (this.sharedClientState = this.createSharedClientState(t)),
      (this.persistence = this.createPersistence(t)),
      await this.persistence.start(),
      (this.localStore = this.createLocalStore(t)),
      (this.gcScheduler = this.createGarbageCollectionScheduler(
        t,
        this.localStore,
      )),
      (this.indexBackfillerScheduler = this.createIndexBackfillerScheduler(
        t,
        this.localStore,
      ));
  }
  createGarbageCollectionScheduler(t, e) {
    return null;
  }
  createIndexBackfillerScheduler(t, e) {
    return null;
  }
  createLocalStore(t) {
    return kd(this.persistence, new bd(), t.initialUser, this.serializer);
  }
  createPersistence(t) {
    return new Pd(Bs.Hr, this.serializer);
  }
  createSharedClientState(t) {
    return new Fd();
  }
  async terminate() {
    var t, e;
    (t = this.gcScheduler) === null || t === void 0 || t.stop(),
      (e = this.indexBackfillerScheduler) === null || e === void 0 || e.stop(),
      this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class yf {
  async initialize(t, e) {
    this.localStore ||
      ((this.localStore = t.localStore),
      (this.sharedClientState = t.sharedClientState),
      (this.datastore = this.createDatastore(e)),
      (this.remoteStore = this.createRemoteStore(e)),
      (this.eventManager = this.createEventManager(e)),
      (this.syncEngine = this.createSyncEngine(e, !t.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (r) =>
        Zi(this.syncEngine, r, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = gf.bind(
        null,
        this.syncEngine,
      )),
      await Xd(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(t) {
    return (function () {
      return new Zd();
    })();
  }
  createDatastore(t) {
    const e = nr(t.databaseInfo.databaseId),
      r = (function (i) {
        return new jd(i);
      })(t.databaseInfo);
    return (function (i, o, a, u) {
      return new Kd(i, o, a, u);
    })(t.authCredentials, t.appCheckCredentials, r, e);
  }
  createRemoteStore(t) {
    return (function (r, s, i, o, a) {
      return new Qd(r, s, i, o, a);
    })(
      this.localStore,
      this.datastore,
      t.asyncQueue,
      (e) => Zi(this.syncEngine, e, 0),
      (function () {
        return Wi.D() ? new Wi() : new Ud();
      })(),
    );
  }
  createSyncEngine(t, e) {
    return (function (s, i, o, a, u, h, c) {
      const l = new hf(s, i, o, a, u, h);
      return c && (l.Fa = !0), l;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      t.initialUser,
      t.maxConcurrentLimboResolutions,
      e,
    );
  }
  async terminate() {
    var t;
    await (async function (r) {
      const s = C(r);
      _("RemoteStore", "RemoteStore shutting down."),
        s.v_.add(5),
        await en(s),
        s.M_.shutdown(),
        s.x_.set("Unknown");
    })(this.remoteStore),
      (t = this.datastore) === null || t === void 0 || t.terminate();
  }
}
/**
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
 */ class Ef {
  constructor(t) {
    (this.observer = t), (this.muted = !1);
  }
  next(t) {
    this.observer.next && this.Ba(this.observer.next, t);
  }
  error(t) {
    this.observer.error
      ? this.Ba(this.observer.error, t)
      : ft("Uncaught Error in snapshot listener:", t.toString());
  }
  La() {
    this.muted = !0;
  }
  Ba(t, e) {
    this.muted ||
      setTimeout(() => {
        this.muted || t(e);
      }, 0);
  }
}
/**
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
 */ class vf {
  constructor(t, e, r, s) {
    (this.authCredentials = t),
      (this.appCheckCredentials = e),
      (this.asyncQueue = r),
      (this.databaseInfo = s),
      (this.user = W.UNAUTHENTICATED),
      (this.clientId = ll.newId()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(r, async (i) => {
        _("FirestoreClient", "Received user=", i.uid),
          await this.authCredentialListener(i),
          (this.user = i);
      }),
      this.appCheckCredentials.start(
        r,
        (i) => (
          _("FirestoreClient", "Received new app check token=", i),
          this.appCheckCredentialListener(i, this.user)
        ),
      );
  }
  get configuration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(t) {
    this.authCredentialListener = t;
  }
  setAppCheckTokenChangeListener(t) {
    this.appCheckCredentialListener = t;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new y(
        p.FAILED_PRECONDITION,
        "The client has already been terminated.",
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const t = new At();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this._onlineComponents && (await this._onlineComponents.terminate()),
            this._offlineComponents &&
              (await this._offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            t.resolve();
        } catch (e) {
          const r = uu(e, "Failed to shutdown persistence");
          t.reject(r);
        }
      }),
      t.promise
    );
  }
}
async function Ir(n, t) {
  n.asyncQueue.verifyOperationInProgress(),
    _("FirestoreClient", "Initializing OfflineComponentProvider");
  const e = n.configuration;
  await t.initialize(e);
  let r = e.initialUser;
  n.setCredentialChangeListener(async (s) => {
    r.isEqual(s) || (await eu(t.localStore, s), (r = s));
  }),
    t.persistence.setDatabaseDeletedListener(() => n.terminate()),
    (n._offlineComponents = t);
}
async function no(n, t) {
  n.asyncQueue.verifyOperationInProgress();
  const e = await If(n);
  _("FirestoreClient", "Initializing OnlineComponentProvider"),
    await t.initialize(e, n.configuration),
    n.setCredentialChangeListener((r) => Xi(t.remoteStore, r)),
    n.setAppCheckTokenChangeListener((r, s) => Xi(t.remoteStore, s)),
    (n._onlineComponents = t);
}
function Tf(n) {
  return n.name === "FirebaseError"
    ? n.code === p.FAILED_PRECONDITION || n.code === p.UNIMPLEMENTED
    : !(typeof DOMException < "u" && n instanceof DOMException) ||
        n.code === 22 ||
        n.code === 20 ||
        n.code === 11;
}
async function If(n) {
  if (!n._offlineComponents)
    if (n._uninitializedComponentsProvider) {
      _("FirestoreClient", "Using user provided OfflineComponentProvider");
      try {
        await Ir(n, n._uninitializedComponentsProvider._offline);
      } catch (t) {
        const e = t;
        if (!Tf(e)) throw e;
        ne(
          "Error using user provided cache. Falling back to memory cache: " + e,
        ),
          await Ir(n, new eo());
      }
    } else
      _("FirestoreClient", "Using default OfflineComponentProvider"),
        await Ir(n, new eo());
  return n._offlineComponents;
}
async function wf(n) {
  return (
    n._onlineComponents ||
      (n._uninitializedComponentsProvider
        ? (_("FirestoreClient", "Using user provided OnlineComponentProvider"),
          await no(n, n._uninitializedComponentsProvider._online))
        : (_("FirestoreClient", "Using default OnlineComponentProvider"),
          await no(n, new yf()))),
    n._onlineComponents
  );
}
async function Af(n) {
  const t = await wf(n),
    e = t.eventManager;
  return (
    (e.onListen = cf.bind(null, t.syncEngine)),
    (e.onUnlisten = df.bind(null, t.syncEngine)),
    e
  );
}
function Rf(n, t, e = {}) {
  const r = new At();
  return (
    n.asyncQueue.enqueueAndForget(async () =>
      (function (i, o, a, u, h) {
        const c = new Ef({
            next: (f) => {
              o.enqueueAndForget(() => ef(i, l)),
                f.fromCache && u.source === "server"
                  ? h.reject(
                      new y(
                        p.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)',
                      ),
                    )
                  : h.resolve(f);
            },
            error: (f) => h.reject(f),
          }),
          l = new sf(a, c, { includeMetadataChanges: !0, Z_: !0 });
        return tf(i, l);
      })(await Af(n), n.asyncQueue, t, e, r),
    ),
    r.promise
  );
}
/**
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
 */ function pu(n) {
  const t = {};
  return (
    n.timeoutSeconds !== void 0 && (t.timeoutSeconds = n.timeoutSeconds), t
  );
}
/**
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
 */ const ro = new Map();
/**
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
 */ function Sf(n, t, e) {
  if (!e)
    throw new y(
      p.INVALID_ARGUMENT,
      `Function ${n}() cannot be called with an empty ${t}.`,
    );
}
function Cf(n, t, e, r) {
  if (t === !0 && r === !0)
    throw new y(p.INVALID_ARGUMENT, `${n} and ${e} cannot be used together.`);
}
function so(n) {
  if (E.isDocumentKey(n))
    throw new y(
      p.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`,
    );
}
function sr(n) {
  if (n === void 0) return "undefined";
  if (n === null) return "null";
  if (typeof n == "string")
    return n.length > 20 && (n = `${n.substring(0, 20)}...`), JSON.stringify(n);
  if (typeof n == "number" || typeof n == "boolean") return "" + n;
  if (typeof n == "object") {
    if (n instanceof Array) return "an array";
    {
      const t = (function (r) {
        return r.constructor ? r.constructor.name : null;
      })(n);
      return t ? `a custom ${t} object` : "an object";
    }
  }
  return typeof n == "function" ? "a function" : I();
}
function ts(n, t) {
  if (("_delegate" in n && (n = n._delegate), !(n instanceof t))) {
    if (t.name === n.constructor.name)
      throw new y(
        p.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?",
      );
    {
      const e = sr(n);
      throw new y(
        p.INVALID_ARGUMENT,
        `Expected type '${t.name}', but it was: ${e}`,
      );
    }
  }
  return n;
}
/**
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
 */ class io {
  constructor(t) {
    var e, r;
    if (t.host === void 0) {
      if (t.ssl !== void 0)
        throw new y(
          p.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set",
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = t.host),
        (this.ssl = (e = t.ssl) === null || e === void 0 || e);
    if (
      ((this.credentials = t.credentials),
      (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
      (this.localCache = t.localCache),
      t.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (t.cacheSizeBytes !== -1 && t.cacheSizeBytes < 1048576)
        throw new y(
          p.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576",
        );
      this.cacheSizeBytes = t.cacheSizeBytes;
    }
    Cf(
      "experimentalForceLongPolling",
      t.experimentalForceLongPolling,
      "experimentalAutoDetectLongPolling",
      t.experimentalAutoDetectLongPolling,
    ),
      (this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
      this.experimentalForceLongPolling
        ? (this.experimentalAutoDetectLongPolling = !1)
        : t.experimentalAutoDetectLongPolling === void 0
          ? (this.experimentalAutoDetectLongPolling = !0)
          : (this.experimentalAutoDetectLongPolling =
              !!t.experimentalAutoDetectLongPolling),
      (this.experimentalLongPollingOptions = pu(
        (r = t.experimentalLongPollingOptions) !== null && r !== void 0
          ? r
          : {},
      )),
      (function (i) {
        if (i.timeoutSeconds !== void 0) {
          if (isNaN(i.timeoutSeconds))
            throw new y(
              p.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`,
            );
          if (i.timeoutSeconds < 5)
            throw new y(
              p.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`,
            );
          if (i.timeoutSeconds > 30)
            throw new y(
              p.INVALID_ARGUMENT,
              `invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`,
            );
        }
      })(this.experimentalLongPollingOptions),
      (this.useFetchStreams = !!t.useFetchStreams);
  }
  isEqual(t) {
    return (
      this.host === t.host &&
      this.ssl === t.ssl &&
      this.credentials === t.credentials &&
      this.cacheSizeBytes === t.cacheSizeBytes &&
      this.experimentalForceLongPolling === t.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        t.experimentalAutoDetectLongPolling &&
      (function (r, s) {
        return r.timeoutSeconds === s.timeoutSeconds;
      })(
        this.experimentalLongPollingOptions,
        t.experimentalLongPollingOptions,
      ) &&
      this.ignoreUndefinedProperties === t.ignoreUndefinedProperties &&
      this.useFetchStreams === t.useFetchStreams
    );
  }
}
class Hs {
  constructor(t, e, r, s) {
    (this._authCredentials = t),
      (this._appCheckCredentials = e),
      (this._databaseId = r),
      (this._app = s),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new io({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new y(
        p.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available",
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(t) {
    if (this._settingsFrozen)
      throw new y(
        p.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.",
      );
    (this._settings = new io(t)),
      t.credentials !== void 0 &&
        (this._authCredentials = (function (r) {
          if (!r) return new rl();
          switch (r.type) {
            case "firstParty":
              return new al(
                r.sessionIndex || "0",
                r.iamToken || null,
                r.authTokenFactory || null,
              );
            case "provider":
              return r.client;
            default:
              throw new y(
                p.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type",
              );
          }
        })(t.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const r = ro.get(e);
        r &&
          (_("ComponentProvider", "Removing Datastore"),
          ro.delete(e),
          r.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function Pf(n, t, e, r = {}) {
  var s;
  const i = (n = ts(n, Hs))._getSettings(),
    o = `${t}:${e}`;
  if (
    (i.host !== "firestore.googleapis.com" &&
      i.host !== o &&
      ne(
        "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.",
      ),
    n._setSettings(Object.assign(Object.assign({}, i), { host: o, ssl: !1 })),
    r.mockUserToken)
  ) {
    let a, u;
    if (typeof r.mockUserToken == "string")
      (a = r.mockUserToken), (u = W.MOCK_USER);
    else {
      a = xu(
        r.mockUserToken,
        (s = n._app) === null || s === void 0 ? void 0 : s.options.projectId,
      );
      const h = r.mockUserToken.sub || r.mockUserToken.user_id;
      if (!h)
        throw new y(
          p.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!",
        );
      u = new W(h);
    }
    n._authCredentials = new sl(new Ia(a, u));
  }
}
/**
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
 */ class ge {
  constructor(t, e, r) {
    (this.converter = e),
      (this._query = r),
      (this.type = "query"),
      (this.firestore = t);
  }
  withConverter(t) {
    return new ge(this.firestore, t, this._query);
  }
}
class Et {
  constructor(t, e, r) {
    (this.converter = e),
      (this._key = r),
      (this.type = "document"),
      (this.firestore = t);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new te(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(t) {
    return new Et(this.firestore, t, this._key);
  }
}
class te extends ge {
  constructor(t, e, r) {
    super(t, e, ba(r)), (this._path = r), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const t = this._path.popLast();
    return t.isEmpty() ? null : new Et(this.firestore, null, new E(t));
  }
  withConverter(t) {
    return new te(this.firestore, t, this._path);
  }
}
function Zf(n, t, ...e) {
  if (((n = vn(n)), Sf("collection", "path", t), n instanceof Hs)) {
    const r = k.fromString(t, ...e);
    return so(r), new te(n, null, r);
  }
  {
    if (!(n instanceof Et || n instanceof te))
      throw new y(
        p.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore",
      );
    const r = n._path.child(k.fromString(t, ...e));
    return so(r), new te(n.firestore, null, r);
  }
}
/**
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
 */ class Vf {
  constructor() {
    (this.Xa = Promise.resolve()),
      (this.eu = []),
      (this.tu = !1),
      (this.nu = []),
      (this.ru = null),
      (this.iu = !1),
      (this.su = !1),
      (this.ou = []),
      (this.jo = new ru(this, "async_queue_retry")),
      (this._u = () => {
        const e = Tr();
        e &&
          _("AsyncQueue", "Visibility state changed to " + e.visibilityState),
          this.jo.Ko();
      });
    const t = Tr();
    t &&
      typeof t.addEventListener == "function" &&
      t.addEventListener("visibilitychange", this._u);
  }
  get isShuttingDown() {
    return this.tu;
  }
  enqueueAndForget(t) {
    this.enqueue(t);
  }
  enqueueAndForgetEvenWhileRestricted(t) {
    this.au(), this.uu(t);
  }
  enterRestrictedMode(t) {
    if (!this.tu) {
      (this.tu = !0), (this.su = t || !1);
      const e = Tr();
      e &&
        typeof e.removeEventListener == "function" &&
        e.removeEventListener("visibilitychange", this._u);
    }
  }
  enqueue(t) {
    if ((this.au(), this.tu)) return new Promise(() => {});
    const e = new At();
    return this.uu(() =>
      this.tu && this.su
        ? Promise.resolve()
        : (t().then(e.resolve, e.reject), e.promise),
    ).then(() => e.promise);
  }
  enqueueRetryable(t) {
    this.enqueueAndForget(() => (this.eu.push(t), this.cu()));
  }
  async cu() {
    if (this.eu.length !== 0) {
      try {
        await this.eu[0](), this.eu.shift(), this.jo.reset();
      } catch (t) {
        if (!Xe(t)) throw t;
        _("AsyncQueue", "Operation failed with retryable error: " + t);
      }
      this.eu.length > 0 && this.jo.qo(() => this.cu());
    }
  }
  uu(t) {
    const e = this.Xa.then(
      () => (
        (this.iu = !0),
        t()
          .catch((r) => {
            (this.ru = r), (this.iu = !1);
            const s = (function (o) {
              let a = o.message || "";
              return (
                o.stack &&
                  (a = o.stack.includes(o.message)
                    ? o.stack
                    : o.message +
                      `
` +
                      o.stack),
                a
              );
            })(r);
            throw (ft("INTERNAL UNHANDLED ERROR: ", s), r);
          })
          .then((r) => ((this.iu = !1), r))
      ),
    );
    return (this.Xa = e), e;
  }
  enqueueAfterDelay(t, e, r) {
    this.au(), this.ou.indexOf(t) > -1 && (e = 0);
    const s = Ks.createAndSchedule(this, t, e, r, (i) => this.lu(i));
    return this.nu.push(s), s;
  }
  au() {
    this.ru && I();
  }
  verifyOperationInProgress() {}
  async hu() {
    let t;
    do (t = this.Xa), await t;
    while (t !== this.Xa);
  }
  Pu(t) {
    for (const e of this.nu) if (e.timerId === t) return !0;
    return !1;
  }
  Iu(t) {
    return this.hu().then(() => {
      this.nu.sort((e, r) => e.targetTimeMs - r.targetTimeMs);
      for (const e of this.nu)
        if ((e.skipDelay(), t !== "all" && e.timerId === t)) break;
      return this.hu();
    });
  }
  Tu(t) {
    this.ou.push(t);
  }
  lu(t) {
    const e = this.nu.indexOf(t);
    this.nu.splice(e, 1);
  }
}
class gu extends Hs {
  constructor(t, e, r, s) {
    super(t, e, r, s),
      (this.type = "firestore"),
      (this._queue = (function () {
        return new Vf();
      })()),
      (this._persistenceKey = s?.name || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || mu(this), this._firestoreClient.terminate();
  }
}
function tp(n, t) {
  const e = typeof n == "object" ? n : qh(),
    r = typeof n == "string" ? n : t || "(default)",
    s = Mh(e, "firestore").getImmediate({ identifier: r });
  if (!s._initialized) {
    const i = ku("firestore");
    i && Pf(s, ...i);
  }
  return s;
}
function Df(n) {
  return (
    n._firestoreClient || mu(n),
    n._firestoreClient.verifyNotTerminated(),
    n._firestoreClient
  );
}
function mu(n) {
  var t, e, r;
  const s = n._freezeSettings(),
    i = (function (a, u, h, c) {
      return new Il(
        a,
        u,
        h,
        c.host,
        c.ssl,
        c.experimentalForceLongPolling,
        c.experimentalAutoDetectLongPolling,
        pu(c.experimentalLongPollingOptions),
        c.useFetchStreams,
      );
    })(
      n._databaseId,
      ((t = n._app) === null || t === void 0 ? void 0 : t.options.appId) || "",
      n._persistenceKey,
      s,
    );
  (n._firestoreClient = new vf(
    n._authCredentials,
    n._appCheckCredentials,
    n._queue,
    i,
  )),
    !((e = s.localCache) === null || e === void 0) &&
      e._offlineComponentProvider &&
      !((r = s.localCache) === null || r === void 0) &&
      r._onlineComponentProvider &&
      (n._firestoreClient._uninitializedComponentsProvider = {
        _offlineKind: s.localCache.kind,
        _offline: s.localCache._offlineComponentProvider,
        _online: s.localCache._onlineComponentProvider,
      });
}
/**
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
 */ class ue {
  constructor(t) {
    this._byteString = t;
  }
  static fromBase64String(t) {
    try {
      return new ue(tt.fromBase64String(t));
    } catch (e) {
      throw new y(
        p.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + e,
      );
    }
  }
  static fromUint8Array(t) {
    return new ue(tt.fromUint8Array(t));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(t) {
    return this._byteString.isEqual(t._byteString);
  }
}
/**
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
 */ class _u {
  constructor(...t) {
    for (let e = 0; e < t.length; ++e)
      if (t[e].length === 0)
        throw new y(
          p.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty.",
        );
    this._internalPath = new X(t);
  }
  isEqual(t) {
    return this._internalPath.isEqual(t._internalPath);
  }
}
/**
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
 */ class yu {
  constructor(t) {
    this._methodName = t;
  }
}
/**
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
 */ class Ws {
  constructor(t, e) {
    if (!isFinite(t) || t < -90 || t > 90)
      throw new y(
        p.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + t,
      );
    if (!isFinite(e) || e < -180 || e > 180)
      throw new y(
        p.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + e,
      );
    (this._lat = t), (this._long = e);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(t) {
    return this._lat === t._lat && this._long === t._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(t) {
    return P(this._lat, t._lat) || P(this._long, t._long);
  }
}
/**
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
 */ const bf = /^__.*__$/;
function Eu(n) {
  switch (n) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw I();
  }
}
class Ys {
  constructor(t, e, r, s, i, o) {
    (this.settings = t),
      (this.databaseId = e),
      (this.serializer = r),
      (this.ignoreUndefinedProperties = s),
      i === void 0 && this.Eu(),
      (this.fieldTransforms = i || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get du() {
    return this.settings.du;
  }
  Au(t) {
    return new Ys(
      Object.assign(Object.assign({}, this.settings), t),
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask,
    );
  }
  Ru(t) {
    var e;
    const r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
      s = this.Au({ path: r, Vu: !1 });
    return s.mu(t), s;
  }
  fu(t) {
    var e;
    const r = (e = this.path) === null || e === void 0 ? void 0 : e.child(t),
      s = this.Au({ path: r, Vu: !1 });
    return s.Eu(), s;
  }
  gu(t) {
    return this.Au({ path: void 0, Vu: !0 });
  }
  pu(t) {
    return es(
      t,
      this.settings.methodName,
      this.settings.yu || !1,
      this.path,
      this.settings.wu,
    );
  }
  contains(t) {
    return (
      this.fieldMask.find((e) => t.isPrefixOf(e)) !== void 0 ||
      this.fieldTransforms.find((e) => t.isPrefixOf(e.field)) !== void 0
    );
  }
  Eu() {
    if (this.path)
      for (let t = 0; t < this.path.length; t++) this.mu(this.path.get(t));
  }
  mu(t) {
    if (t.length === 0) throw this.pu("Document fields must not be empty");
    if (Eu(this.du) && bf.test(t))
      throw this.pu('Document fields cannot begin and end with "__"');
  }
}
class Nf {
  constructor(t, e, r) {
    (this.databaseId = t),
      (this.ignoreUndefinedProperties = e),
      (this.serializer = r || nr(t));
  }
  Su(t, e, r, s = !1) {
    return new Ys(
      { du: t, methodName: e, wu: r, path: X.emptyPath(), Vu: !1, yu: s },
      this.databaseId,
      this.serializer,
      this.ignoreUndefinedProperties,
    );
  }
}
function kf(n) {
  const t = n._freezeSettings(),
    e = nr(n._databaseId);
  return new Nf(n._databaseId, !!t.ignoreUndefinedProperties, e);
}
function Of(n, t, e, r = !1) {
  return Xs(e, n.Su(r ? 4 : 3, t));
}
function Xs(n, t) {
  if (vu((n = vn(n)))) return Mf("Unsupported field value:", t, n), xf(n, t);
  if (n instanceof yu)
    return (
      (function (r, s) {
        if (!Eu(s.du))
          throw s.pu(
            `${r._methodName}() can only be used with update() and set()`,
          );
        if (!s.path)
          throw s.pu(
            `${r._methodName}() is not currently supported inside arrays`,
          );
        const i = r._toFieldTransform(s);
        i && s.fieldTransforms.push(i);
      })(n, t),
      null
    );
  if (n === void 0 && t.ignoreUndefinedProperties) return null;
  if ((t.path && t.fieldMask.push(t.path), n instanceof Array)) {
    if (t.settings.Vu && t.du !== 4)
      throw t.pu("Nested arrays are not supported");
    return (function (r, s) {
      const i = [];
      let o = 0;
      for (const a of r) {
        let u = Xs(a, s.gu(o));
        u == null && (u = { nullValue: "NULL_VALUE" }), i.push(u), o++;
      }
      return { arrayValue: { values: i } };
    })(n, t);
  }
  return (function (r, s) {
    if ((r = vn(r)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof r == "number") return $l(s.serializer, r);
    if (typeof r == "boolean") return { booleanValue: r };
    if (typeof r == "string") return { stringValue: r };
    if (r instanceof Date) {
      const i = q.fromDate(r);
      return { timestampValue: Yr(s.serializer, i) };
    }
    if (r instanceof q) {
      const i = new q(r.seconds, 1e3 * Math.floor(r.nanoseconds / 1e3));
      return { timestampValue: Yr(s.serializer, i) };
    }
    if (r instanceof Ws)
      return {
        geoPointValue: { latitude: r.latitude, longitude: r.longitude },
      };
    if (r instanceof ue) return { bytesValue: Qa(s.serializer, r._byteString) };
    if (r instanceof Et) {
      const i = s.databaseId,
        o = r.firestore._databaseId;
      if (!o.isEqual(i))
        throw s.pu(
          `Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`,
        );
      return {
        referenceValue: Ha(
          r.firestore._databaseId || s.databaseId,
          r._key.path,
        ),
      };
    }
    throw s.pu(`Unsupported field value: ${sr(r)}`);
  })(n, t);
}
function xf(n, t) {
  const e = {};
  return (
    wa(n)
      ? t.path && t.path.length > 0 && t.fieldMask.push(t.path)
      : Je(n, (r, s) => {
          const i = Xs(s, t.Ru(r));
          i != null && (e[r] = i);
        }),
    { mapValue: { fields: e } }
  );
}
function vu(n) {
  return !(
    typeof n != "object" ||
    n === null ||
    n instanceof Array ||
    n instanceof Date ||
    n instanceof q ||
    n instanceof Ws ||
    n instanceof ue ||
    n instanceof Et ||
    n instanceof yu
  );
}
function Mf(n, t, e) {
  if (
    !vu(e) ||
    !(function (s) {
      return (
        typeof s == "object" &&
        s !== null &&
        (Object.getPrototypeOf(s) === Object.prototype ||
          Object.getPrototypeOf(s) === null)
      );
    })(e)
  ) {
    const r = sr(e);
    throw r === "an object" ? t.pu(n + " a custom object") : t.pu(n + " " + r);
  }
}
const Lf = new RegExp("[~\\*/\\[\\]]");
function Ff(n, t, e) {
  if (t.search(Lf) >= 0)
    throw es(
      `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
      n,
      !1,
      void 0,
      e,
    );
  try {
    return new _u(...t.split("."))._internalPath;
  } catch {
    throw es(
      `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      n,
      !1,
      void 0,
      e,
    );
  }
}
function es(n, t, e, r, s) {
  const i = r && !r.isEmpty(),
    o = s !== void 0;
  let a = `Function ${t}() called with invalid data`;
  e && (a += " (via `toFirestore()`)"), (a += ". ");
  let u = "";
  return (
    (i || o) &&
      ((u += " (found"),
      i && (u += ` in field ${r}`),
      o && (u += ` in document ${s}`),
      (u += ")")),
    new y(p.INVALID_ARGUMENT, a + n + u)
  );
}
/**
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
 */ class Tu {
  constructor(t, e, r, s, i) {
    (this._firestore = t),
      (this._userDataWriter = e),
      (this._key = r),
      (this._document = s),
      (this._converter = i);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new Et(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const t = new Uf(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null,
        );
        return this._converter.fromFirestore(t);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(t) {
    if (this._document) {
      const e = this._document.data.field(Js("DocumentSnapshot.get", t));
      if (e !== null) return this._userDataWriter.convertValue(e);
    }
  }
}
class Uf extends Tu {
  data() {
    return super.data();
  }
}
function Js(n, t) {
  return typeof t == "string"
    ? Ff(n, t)
    : t instanceof _u
      ? t._internalPath
      : t._delegate._internalPath;
}
/**
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
 */ function Bf(n) {
  if (n.limitType === "L" && n.explicitOrderBy.length === 0)
    throw new y(
      p.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause",
    );
}
class Zs {}
class qf extends Zs {}
function ep(n, t, ...e) {
  let r = [];
  t instanceof Zs && r.push(t),
    (r = r.concat(e)),
    (function (i) {
      const o = i.filter((u) => u instanceof ti).length,
        a = i.filter((u) => u instanceof ir).length;
      if (o > 1 || (o > 0 && a > 0))
        throw new y(
          p.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.",
        );
    })(r);
  for (const s of r) n = s._apply(n);
  return n;
}
class ir extends qf {
  constructor(t, e, r) {
    super(),
      (this._field = t),
      (this._op = e),
      (this._value = r),
      (this.type = "where");
  }
  static _create(t, e, r) {
    return new ir(t, e, r);
  }
  _apply(t) {
    const e = this._parse(t);
    return Iu(t._query, e), new ge(t.firestore, t.converter, Kr(t._query, e));
  }
  _parse(t) {
    const e = kf(t.firestore);
    return (function (i, o, a, u, h, c, l) {
      let f;
      if (h.isKeyField()) {
        if (c === "array-contains" || c === "array-contains-any")
          throw new y(
            p.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${c}' queries on documentId().`,
          );
        if (c === "in" || c === "not-in") {
          ao(l, c);
          const g = [];
          for (const D of l) g.push(oo(u, i, D));
          f = { arrayValue: { values: g } };
        } else f = oo(u, i, l);
      } else
        (c !== "in" && c !== "not-in" && c !== "array-contains-any") ||
          ao(l, c),
          (f = Of(a, o, l, c === "in" || c === "not-in"));
      return F.create(h, c, f);
    })(
      t._query,
      "where",
      e,
      t.firestore._databaseId,
      this._field,
      this._op,
      this._value,
    );
  }
}
function np(n, t, e) {
  const r = t,
    s = Js("where", n);
  return ir._create(s, r, e);
}
class ti extends Zs {
  constructor(t, e) {
    super(), (this.type = t), (this._queryConstraints = e);
  }
  static _create(t, e) {
    return new ti(t, e);
  }
  _parse(t) {
    const e = this._queryConstraints
      .map((r) => r._parse(t))
      .filter((r) => r.getFilters().length > 0);
    return e.length === 1 ? e[0] : at.create(e, this._getOperator());
  }
  _apply(t) {
    const e = this._parse(t);
    return e.getFilters().length === 0
      ? t
      : ((function (s, i) {
          let o = s;
          const a = i.getFlattenedFilters();
          for (const u of a) Iu(o, u), (o = Kr(o, u));
        })(t._query, e),
        new ge(t.firestore, t.converter, Kr(t._query, e)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
function oo(n, t, e) {
  if (typeof (e = vn(e)) == "string") {
    if (e === "")
      throw new y(
        p.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.",
      );
    if (!Na(t) && e.indexOf("/") !== -1)
      throw new y(
        p.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`,
      );
    const r = t.path.child(k.fromString(e));
    if (!E.isDocumentKey(r))
      throw new y(
        p.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`,
      );
    return Di(n, new E(r));
  }
  if (e instanceof Et) return Di(n, e._key);
  throw new y(
    p.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sr(e)}.`,
  );
}
function ao(n, t) {
  if (!Array.isArray(n) || n.length === 0)
    throw new y(
      p.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${t.toString()}' filters.`,
    );
}
function Iu(n, t) {
  const e = (function (s, i) {
    for (const o of s)
      for (const a of o.getFlattenedFilters())
        if (i.indexOf(a.op) >= 0) return a.op;
    return null;
  })(
    n.filters,
    (function (s) {
      switch (s) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains-any":
        case "in":
          return ["not-in"];
        case "not-in":
          return ["array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    })(t.op),
  );
  if (e !== null)
    throw e === t.op
      ? new y(
          p.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${t.op.toString()}' filter.`,
        )
      : new y(
          p.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`,
        );
}
class jf {
  convertValue(t, e = "none") {
    switch (qt(t)) {
      case 0:
        return null;
      case 1:
        return t.booleanValue;
      case 2:
        return L(t.integerValue || t.doubleValue);
      case 3:
        return this.convertTimestamp(t.timestampValue);
      case 4:
        return this.convertServerTimestamp(t, e);
      case 5:
        return t.stringValue;
      case 6:
        return this.convertBytes(Bt(t.bytesValue));
      case 7:
        return this.convertReference(t.referenceValue);
      case 8:
        return this.convertGeoPoint(t.geoPointValue);
      case 9:
        return this.convertArray(t.arrayValue, e);
      case 10:
        return this.convertObject(t.mapValue, e);
      default:
        throw I();
    }
  }
  convertObject(t, e) {
    return this.convertObjectMap(t.fields, e);
  }
  convertObjectMap(t, e = "none") {
    const r = {};
    return (
      Je(t, (s, i) => {
        r[s] = this.convertValue(i, e);
      }),
      r
    );
  }
  convertGeoPoint(t) {
    return new Ws(L(t.latitude), L(t.longitude));
  }
  convertArray(t, e) {
    return (t.values || []).map((r) => this.convertValue(r, e));
  }
  convertServerTimestamp(t, e) {
    switch (e) {
      case "previous":
        const r = Ns(t);
        return r == null ? null : this.convertValue(r, e);
      case "estimate":
        return this.convertTimestamp(Be(t));
      default:
        return null;
    }
  }
  convertTimestamp(t) {
    const e = St(t);
    return new q(e.seconds, e.nanos);
  }
  convertDocumentKey(t, e) {
    const r = k.fromString(t);
    U(tu(r));
    const s = new qe(r.get(1), r.get(3)),
      i = new E(r.popFirst(5));
    return (
      s.isEqual(e) ||
        ft(
          `Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`,
        ),
      i
    );
  }
}
/**
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
 */ class pn {
  constructor(t, e) {
    (this.hasPendingWrites = t), (this.fromCache = e);
  }
  isEqual(t) {
    return (
      this.hasPendingWrites === t.hasPendingWrites &&
      this.fromCache === t.fromCache
    );
  }
}
class $f extends Tu {
  constructor(t, e, r, s, i, o) {
    super(t, e, r, s, o),
      (this._firestore = t),
      (this._firestoreImpl = t),
      (this.metadata = i);
  }
  exists() {
    return super.exists();
  }
  data(t = {}) {
    if (this._document) {
      if (this._converter) {
        const e = new _n(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null,
        );
        return this._converter.fromFirestore(e, t);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        t.serverTimestamps,
      );
    }
  }
  get(t, e = {}) {
    if (this._document) {
      const r = this._document.data.field(Js("DocumentSnapshot.get", t));
      if (r !== null)
        return this._userDataWriter.convertValue(r, e.serverTimestamps);
    }
  }
}
class _n extends $f {
  data(t = {}) {
    return super.data(t);
  }
}
class zf {
  constructor(t, e, r, s) {
    (this._firestore = t),
      (this._userDataWriter = e),
      (this._snapshot = s),
      (this.metadata = new pn(s.hasPendingWrites, s.fromCache)),
      (this.query = r);
  }
  get docs() {
    const t = [];
    return this.forEach((e) => t.push(e)), t;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(t, e) {
    this._snapshot.docs.forEach((r) => {
      t.call(
        e,
        new _n(
          this._firestore,
          this._userDataWriter,
          r.key,
          r,
          new pn(
            this._snapshot.mutatedKeys.has(r.key),
            this._snapshot.fromCache,
          ),
          this.query.converter,
        ),
      );
    });
  }
  docChanges(t = {}) {
    const e = !!t.includeMetadataChanges;
    if (e && this._snapshot.excludesMetadataChanges)
      throw new y(
        p.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().",
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === e) ||
        ((this._cachedChanges = (function (s, i) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let o = 0;
            return s._snapshot.docChanges.map((a) => {
              const u = new _n(
                s._firestore,
                s._userDataWriter,
                a.doc.key,
                a.doc,
                new pn(
                  s._snapshot.mutatedKeys.has(a.doc.key),
                  s._snapshot.fromCache,
                ),
                s.query.converter,
              );
              return (
                a.doc, { type: "added", doc: u, oldIndex: -1, newIndex: o++ }
              );
            });
          }
          {
            let o = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((a) => i || a.type !== 3)
              .map((a) => {
                const u = new _n(
                  s._firestore,
                  s._userDataWriter,
                  a.doc.key,
                  a.doc,
                  new pn(
                    s._snapshot.mutatedKeys.has(a.doc.key),
                    s._snapshot.fromCache,
                  ),
                  s.query.converter,
                );
                let h = -1,
                  c = -1;
                return (
                  a.type !== 0 &&
                    ((h = o.indexOf(a.doc.key)), (o = o.delete(a.doc.key))),
                  a.type !== 1 &&
                    ((o = o.add(a.doc)), (c = o.indexOf(a.doc.key))),
                  { type: Kf(a.type), doc: u, oldIndex: h, newIndex: c }
                );
              });
          }
        })(this, e)),
        (this._cachedChangesIncludeMetadataChanges = e)),
      this._cachedChanges
    );
  }
}
function Kf(n) {
  switch (n) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return I();
  }
}
class Gf extends jf {
  constructor(t) {
    super(), (this.firestore = t);
  }
  convertBytes(t) {
    return new ue(t);
  }
  convertReference(t) {
    const e = this.convertDocumentKey(t, this.firestore._databaseId);
    return new Et(this.firestore, null, e);
  }
}
function rp(n) {
  n = ts(n, ge);
  const t = ts(n.firestore, gu),
    e = Df(t),
    r = new Gf(t);
  return Bf(n._query), Rf(e, n._query).then((s) => new zf(t, r, n, s));
}
(function (t, e = !0) {
  (function (s) {
    de = s;
  })(Uh),
    In(
      new Ve(
        "firestore",
        (r, { instanceIdentifier: s, options: i }) => {
          const o = r.getProvider("app").getImmediate(),
            a = new gu(
              new il(r.getProvider("auth-internal")),
              new hl(r.getProvider("app-check-internal")),
              (function (h, c) {
                if (
                  !Object.prototype.hasOwnProperty.apply(h.options, [
                    "projectId",
                  ])
                )
                  throw new y(
                    p.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.',
                  );
                return new qe(h.options.projectId, c);
              })(o, s),
              o,
            );
          return (
            (i = Object.assign({ useFetchStreams: e }, i)), a._setSettings(i), a
          );
        },
        "PUBLIC",
      ).setMultipleInstances(!0),
    ),
    Wt(Ri, "4.4.1", t),
    Wt(Ri, "4.4.1", "esm2017");
})();
var Qf = "firebase",
  Hf = "10.7.2";
/**
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
 */ Wt(Qf, Hf, "app");
export { rp as a, Zf as c, tp as g, Bh as i, ep as q, np as w };
