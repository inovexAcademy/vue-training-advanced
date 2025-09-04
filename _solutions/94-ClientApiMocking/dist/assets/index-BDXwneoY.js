var Da = Object.defineProperty;
var Na = (e, t, r) =>
  t in e
    ? Da(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
    : (e[t] = r);
var fs = (e, t, r) => Na(e, typeof t != 'symbol' ? t + '' : t, r);
(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver(o => {
    for (const s of o)
      if (s.type === 'childList')
        for (const i of s.addedNodes)
          i.tagName === 'LINK' && i.rel === 'modulepreload' && n(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(o) {
    const s = {};
    return (
      o.integrity && (s.integrity = o.integrity),
      o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const s = r(o);
    fetch(o.href, s);
  }
})();
/**
 * @vue/shared v3.5.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function Ao(e) {
  const t = Object.create(null);
  for (const r of e.split(',')) t[r] = 1;
  return r => r in t;
}
const ke = {},
  un = [],
  gt = () => {},
  xi = () => !1,
  _r = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  Io = e => e.startsWith('onUpdate:'),
  ze = Object.assign,
  Po = (e, t) => {
    const r = e.indexOf(t);
    r > -1 && e.splice(r, 1);
  },
  Va = Object.prototype.hasOwnProperty,
  xe = (e, t) => Va.call(e, t),
  re = Array.isArray,
  fn = e => vr(e) === '[object Map]',
  Si = e => vr(e) === '[object Set]',
  le = e => typeof e == 'function',
  Te = e => typeof e == 'string',
  It = e => typeof e == 'symbol',
  Ae = e => e !== null && typeof e == 'object',
  wi = e => (Ae(e) || le(e)) && le(e.then) && le(e.catch),
  Oi = Object.prototype.toString,
  vr = e => Oi.call(e),
  Ha = e => vr(e).slice(8, -1),
  ki = e => vr(e) === '[object Object]',
  To = e => Te(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  En = Ao(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  br = e => {
    const t = Object.create(null);
    return r => t[r] || (t[r] = e(r));
  },
  Fa = /-(\w)/g,
  st = br(e => e.replace(Fa, (t, r) => (r ? r.toUpperCase() : ''))),
  za = /\B([A-Z])/g,
  Zt = br(e => e.replace(za, '-$1').toLowerCase()),
  xr = br(e => e.charAt(0).toUpperCase() + e.slice(1)),
  lr = br(e => (e ? `on${xr(e)}` : '')),
  Dt = (e, t) => !Object.is(e, t),
  ar = (e, ...t) => {
    for (let r = 0; r < e.length; r++) e[r](...t);
  },
  Ei = (e, t, r, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: r,
    });
  },
  lo = e => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let ds;
const Sr = () =>
  ds ||
  (ds =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {});
function vt(e) {
  if (re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        o = Te(n) ? Ua(n) : vt(n);
      if (o) for (const s in o) t[s] = o[s];
    }
    return t;
  } else if (Te(e) || Ae(e)) return e;
}
const $a = /;(?![^(]*\))/g,
  Wa = /:([^]+)/,
  Ka = /\/\*[^]*?\*\//g;
function Ua(e) {
  const t = {};
  return (
    e
      .replace(Ka, '')
      .split($a)
      .forEach(r => {
        if (r) {
          const n = r.split(Wa);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function _e(e) {
  let t = '';
  if (Te(e)) t = e;
  else if (re(e))
    for (let r = 0; r < e.length; r++) {
      const n = _e(e[r]);
      n && (t += n + ' ');
    }
  else if (Ae(e)) for (const r in e) e[r] && (t += r + ' ');
  return t.trim();
}
function wr(e) {
  if (!e) return null;
  let { class: t, style: r } = e;
  return (t && !Te(t) && (e.class = _e(t)), r && (e.style = vt(r)), e);
}
const Ga =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Ja = Ao(Ga);
function Ci(e) {
  return !!e || e === '';
}
const Ri = e => !!(e && e.__v_isRef === !0),
  fe = e =>
    Te(e)
      ? e
      : e == null
        ? ''
        : re(e) || (Ae(e) && (e.toString === Oi || !le(e.toString)))
          ? Ri(e)
            ? fe(e.value)
            : JSON.stringify(e, Ai, 2)
          : String(e),
  Ai = (e, t) =>
    Ri(t)
      ? Ai(e, t.value)
      : fn(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce(
              (r, [n, o], s) => ((r[zr(n, s) + ' =>'] = o), r),
              {},
            ),
          }
        : Si(t)
          ? { [`Set(${t.size})`]: [...t.values()].map(r => zr(r)) }
          : It(t)
            ? zr(t)
            : Ae(t) && !re(t) && !ki(t)
              ? String(t)
              : t,
  zr = (e, t = '') => {
    var r;
    return It(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e;
  };
/**
 * @vue/reactivity v3.5.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ne;
class Ii {
  constructor(t = !1) {
    ((this.detached = t),
      (this._active = !0),
      (this._on = 0),
      (this.effects = []),
      (this.cleanups = []),
      (this._isPaused = !1),
      (this.parent = Ne),
      !t &&
        Ne &&
        (this.index = (Ne.scopes || (Ne.scopes = [])).push(this) - 1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].pause();
    }
  }
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++) this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++) this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ne;
      try {
        return ((Ne = this), t());
      } finally {
        Ne = r;
      }
    }
  }
  on() {
    ++this._on === 1 && ((this.prevScope = Ne), (Ne = this));
  }
  off() {
    this._on > 0 &&
      --this._on === 0 &&
      ((Ne = this.prevScope), (this.prevScope = void 0));
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (((this.cleanups.length = 0), this.scopes)) {
        for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o &&
          o !== this &&
          ((this.parent.scopes[this.index] = o), (o.index = this.index));
      }
      this.parent = void 0;
    }
  }
}
function Pi(e) {
  return new Ii(e);
}
function qo() {
  return Ne;
}
function Ti(e, t = !1) {
  Ne && Ne.cleanups.push(e);
}
let Re;
const $r = new WeakSet();
class qi {
  constructor(t) {
    ((this.fn = t),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 5),
      (this.next = void 0),
      (this.cleanup = void 0),
      (this.scheduler = void 0),
      Ne && Ne.active && Ne.effects.push(this));
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 &&
      ((this.flags &= -65), $r.has(this) && ($r.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Li(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), ps(this), Bi(this));
    const t = Re,
      r = lt;
    ((Re = this), (lt = !0));
    try {
      return this.fn();
    } finally {
      (ji(this), (Re = t), (lt = r), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) Bo(t);
      ((this.deps = this.depsTail = void 0),
        ps(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? $r.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    ao(this) && this.run();
  }
  get dirty() {
    return ao(this);
  }
}
let Mi = 0,
  Cn,
  Rn;
function Li(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = Rn), (Rn = e));
    return;
  }
  ((e.next = Cn), (Cn = e));
}
function Mo() {
  Mi++;
}
function Lo() {
  if (--Mi > 0) return;
  if (Rn) {
    let t = Rn;
    for (Rn = void 0; t; ) {
      const r = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = r));
    }
  }
  let e;
  for (; Cn; ) {
    let t = Cn;
    for (Cn = void 0; t; ) {
      const r = t.next;
      if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Bi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function ji(e) {
  let t,
    r = e.depsTail,
    n = r;
  for (; n; ) {
    const o = n.prevDep;
    (n.version === -1 ? (n === r && (r = o), Bo(n), Ya(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = o));
  }
  ((e.deps = t), (e.depsTail = r));
}
function ao(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (
      t.dep.version !== t.version ||
      (t.dep.computed && (Di(t.dep.computed) || t.dep.version !== t.version))
    )
      return !0;
  return !!e._dirty;
}
function Di(e) {
  if (
    (e.flags & 4 && !(e.flags & 16)) ||
    ((e.flags &= -17), e.globalVersion === jn) ||
    ((e.globalVersion = jn),
    !e.isSSR && e.flags & 128 && ((!e.deps && !e._dirty) || !ao(e)))
  )
    return;
  e.flags |= 2;
  const t = e.dep,
    r = Re,
    n = lt;
  ((Re = e), (lt = !0));
  try {
    Bi(e);
    const o = e.fn(e._value);
    (t.version === 0 || Dt(o, e._value)) &&
      ((e.flags |= 128), (e._value = o), t.version++);
  } catch (o) {
    throw (t.version++, o);
  } finally {
    ((Re = r), (lt = n), ji(e), (e.flags &= -3));
  }
}
function Bo(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: o } = e;
  if (
    (n && ((n.nextSub = o), (e.prevSub = void 0)),
    o && ((o.prevSub = n), (e.nextSub = void 0)),
    r.subs === e && ((r.subs = n), !n && r.computed))
  ) {
    r.computed.flags &= -5;
    for (let s = r.computed.deps; s; s = s.nextDep) Bo(s, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Ya(e) {
  const { prevDep: t, nextDep: r } = e;
  (t && ((t.nextDep = r), (e.prevDep = void 0)),
    r && ((r.prevDep = t), (e.nextDep = void 0)));
}
let lt = !0;
const Ni = [];
function Ct() {
  (Ni.push(lt), (lt = !1));
}
function Rt() {
  const e = Ni.pop();
  lt = e === void 0 ? !0 : e;
}
function ps(e) {
  const { cleanup: t } = e;
  if (((e.cleanup = void 0), t)) {
    const r = Re;
    Re = void 0;
    try {
      t();
    } finally {
      Re = r;
    }
  }
}
let jn = 0;
class Xa {
  constructor(t, r) {
    ((this.sub = t),
      (this.dep = r),
      (this.version = r.version),
      (this.nextDep =
        this.prevDep =
        this.nextSub =
        this.prevSub =
        this.prevActiveLink =
          void 0));
  }
}
class Or {
  constructor(t) {
    ((this.computed = t),
      (this.version = 0),
      (this.activeLink = void 0),
      (this.subs = void 0),
      (this.map = void 0),
      (this.key = void 0),
      (this.sc = 0),
      (this.__v_skip = !0));
  }
  track(t) {
    if (!Re || !lt || Re === this.computed) return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Re)
      ((r = this.activeLink = new Xa(Re, this)),
        Re.deps
          ? ((r.prevDep = Re.depsTail),
            (Re.depsTail.nextDep = r),
            (Re.depsTail = r))
          : (Re.deps = Re.depsTail = r),
        Vi(r));
    else if (r.version === -1 && ((r.version = this.version), r.nextDep)) {
      const n = r.nextDep;
      ((n.prevDep = r.prevDep),
        r.prevDep && (r.prevDep.nextDep = n),
        (r.prevDep = Re.depsTail),
        (r.nextDep = void 0),
        (Re.depsTail.nextDep = r),
        (Re.depsTail = r),
        Re.deps === r && (Re.deps = n));
    }
    return r;
  }
  trigger(t) {
    (this.version++, jn++, this.notify(t));
  }
  notify(t) {
    Mo();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Lo();
    }
  }
}
function Vi(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) Vi(n);
    }
    const r = e.dep.subs;
    (r !== e && ((e.prevSub = r), r && (r.nextSub = e)), (e.dep.subs = e));
  }
}
const fr = new WeakMap(),
  Gt = Symbol(''),
  co = Symbol(''),
  Dn = Symbol('');
function Ve(e, t, r) {
  if (lt && Re) {
    let n = fr.get(e);
    n || fr.set(e, (n = new Map()));
    let o = n.get(r);
    (o || (n.set(r, (o = new Or())), (o.map = n), (o.key = r)), o.track());
  }
}
function kt(e, t, r, n, o, s) {
  const i = fr.get(e);
  if (!i) {
    jn++;
    return;
  }
  const l = a => {
    a && a.trigger();
  };
  if ((Mo(), t === 'clear')) i.forEach(l);
  else {
    const a = re(e),
      u = a && To(r);
    if (a && r === 'length') {
      const c = Number(n);
      i.forEach((f, h) => {
        (h === 'length' || h === Dn || (!It(h) && h >= c)) && l(f);
      });
    } else
      switch (
        ((r !== void 0 || i.has(void 0)) && l(i.get(r)), u && l(i.get(Dn)), t)
      ) {
        case 'add':
          a ? u && l(i.get('length')) : (l(i.get(Gt)), fn(e) && l(i.get(co)));
          break;
        case 'delete':
          a || (l(i.get(Gt)), fn(e) && l(i.get(co)));
          break;
        case 'set':
          fn(e) && l(i.get(Gt));
          break;
      }
  }
  Lo();
}
function Qa(e, t) {
  const r = fr.get(e);
  return r && r.get(t);
}
function on(e) {
  const t = ge(e);
  return t === e ? t : (Ve(t, 'iterate', Dn), ot(e) ? t : t.map(Be));
}
function kr(e) {
  return (Ve((e = ge(e)), 'iterate', Dn), e);
}
const Za = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wr(this, Symbol.iterator, Be);
  },
  concat(...e) {
    return on(this).concat(...e.map(t => (re(t) ? on(t) : t)));
  },
  entries() {
    return Wr(this, 'entries', e => ((e[1] = Be(e[1])), e));
  },
  every(e, t) {
    return St(this, 'every', e, t, void 0, arguments);
  },
  filter(e, t) {
    return St(this, 'filter', e, t, r => r.map(Be), arguments);
  },
  find(e, t) {
    return St(this, 'find', e, t, Be, arguments);
  },
  findIndex(e, t) {
    return St(this, 'findIndex', e, t, void 0, arguments);
  },
  findLast(e, t) {
    return St(this, 'findLast', e, t, Be, arguments);
  },
  findLastIndex(e, t) {
    return St(this, 'findLastIndex', e, t, void 0, arguments);
  },
  forEach(e, t) {
    return St(this, 'forEach', e, t, void 0, arguments);
  },
  includes(...e) {
    return Kr(this, 'includes', e);
  },
  indexOf(...e) {
    return Kr(this, 'indexOf', e);
  },
  join(e) {
    return on(this).join(e);
  },
  lastIndexOf(...e) {
    return Kr(this, 'lastIndexOf', e);
  },
  map(e, t) {
    return St(this, 'map', e, t, void 0, arguments);
  },
  pop() {
    return Sn(this, 'pop');
  },
  push(...e) {
    return Sn(this, 'push', e);
  },
  reduce(e, ...t) {
    return hs(this, 'reduce', e, t);
  },
  reduceRight(e, ...t) {
    return hs(this, 'reduceRight', e, t);
  },
  shift() {
    return Sn(this, 'shift');
  },
  some(e, t) {
    return St(this, 'some', e, t, void 0, arguments);
  },
  splice(...e) {
    return Sn(this, 'splice', e);
  },
  toReversed() {
    return on(this).toReversed();
  },
  toSorted(e) {
    return on(this).toSorted(e);
  },
  toSpliced(...e) {
    return on(this).toSpliced(...e);
  },
  unshift(...e) {
    return Sn(this, 'unshift', e);
  },
  values() {
    return Wr(this, 'values', Be);
  },
};
function Wr(e, t, r) {
  const n = kr(e),
    o = n[t]();
  return (
    n !== e &&
      !ot(e) &&
      ((o._next = o.next),
      (o.next = () => {
        const s = o._next();
        return (s.value && (s.value = r(s.value)), s);
      })),
    o
  );
}
const ec = Array.prototype;
function St(e, t, r, n, o, s) {
  const i = kr(e),
    l = i !== e && !ot(e),
    a = i[t];
  if (a !== ec[t]) {
    const f = a.apply(e, s);
    return l ? Be(f) : f;
  }
  let u = r;
  i !== e &&
    (l
      ? (u = function (f, h) {
          return r.call(this, Be(f), h, e);
        })
      : r.length > 2 &&
        (u = function (f, h) {
          return r.call(this, f, h, e);
        }));
  const c = a.call(i, u, n);
  return l && o ? o(c) : c;
}
function hs(e, t, r, n) {
  const o = kr(e);
  let s = r;
  return (
    o !== e &&
      (ot(e)
        ? r.length > 3 &&
          (s = function (i, l, a) {
            return r.call(this, i, l, a, e);
          })
        : (s = function (i, l, a) {
            return r.call(this, i, Be(l), a, e);
          })),
    o[t](s, ...n)
  );
}
function Kr(e, t, r) {
  const n = ge(e);
  Ve(n, 'iterate', Dn);
  const o = n[t](...r);
  return (o === -1 || o === !1) && No(r[0])
    ? ((r[0] = ge(r[0])), n[t](...r))
    : o;
}
function Sn(e, t, r = []) {
  (Ct(), Mo());
  const n = ge(e)[t].apply(e, r);
  return (Lo(), Rt(), n);
}
const tc = Ao('__proto__,__v_isRef,__isVue'),
  Hi = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(It),
  );
function nc(e) {
  It(e) || (e = String(e));
  const t = ge(this);
  return (Ve(t, 'has', e), t.hasOwnProperty(e));
}
class Fi {
  constructor(t = !1, r = !1) {
    ((this._isReadonly = t), (this._isShallow = r));
  }
  get(t, r, n) {
    if (r === '__v_skip') return t.__v_skip;
    const o = this._isReadonly,
      s = this._isShallow;
    if (r === '__v_isReactive') return !o;
    if (r === '__v_isReadonly') return o;
    if (r === '__v_isShallow') return s;
    if (r === '__v_raw')
      return n === (o ? (s ? dc : Ki) : s ? Wi : $i).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const i = re(t);
    if (!o) {
      let a;
      if (i && (a = Za[r])) return a;
      if (r === 'hasOwnProperty') return nc;
    }
    const l = Reflect.get(t, r, Pe(t) ? t : n);
    return (It(r) ? Hi.has(r) : tc(r)) || (o || Ve(t, 'get', r), s)
      ? l
      : Pe(l)
        ? i && To(r)
          ? l
          : l.value
        : Ae(l)
          ? o
            ? Yt(l)
            : en(l)
          : l;
  }
}
class zi extends Fi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, o) {
    let s = t[r];
    if (!this._isShallow) {
      const a = Ht(s);
      if (
        (!ot(n) && !Ht(n) && ((s = ge(s)), (n = ge(n))),
        !re(t) && Pe(s) && !Pe(n))
      )
        return (a || (s.value = n), !0);
    }
    const i = re(t) && To(r) ? Number(r) < t.length : xe(t, r),
      l = Reflect.set(t, r, n, Pe(t) ? t : o);
    return (
      t === ge(o) && (i ? Dt(n, s) && kt(t, 'set', r, n) : kt(t, 'add', r, n)),
      l
    );
  }
  deleteProperty(t, r) {
    const n = xe(t, r);
    t[r];
    const o = Reflect.deleteProperty(t, r);
    return (o && n && kt(t, 'delete', r, void 0), o);
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return ((!It(r) || !Hi.has(r)) && Ve(t, 'has', r), n);
  }
  ownKeys(t) {
    return (Ve(t, 'iterate', re(t) ? 'length' : Gt), Reflect.ownKeys(t));
  }
}
class rc extends Fi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const oc = new zi(),
  sc = new rc(),
  ic = new zi(!0);
const uo = e => e,
  tr = e => Reflect.getPrototypeOf(e);
function lc(e, t, r) {
  return function (...n) {
    const o = this.__v_raw,
      s = ge(o),
      i = fn(s),
      l = e === 'entries' || (e === Symbol.iterator && i),
      a = e === 'keys' && i,
      u = o[e](...n),
      c = r ? uo : t ? dr : Be;
    return (
      !t && Ve(s, 'iterate', a ? co : Gt),
      {
        next() {
          const { value: f, done: h } = u.next();
          return h
            ? { value: f, done: h }
            : { value: l ? [c(f[0]), c(f[1])] : c(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function nr(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this;
  };
}
function ac(e, t) {
  const r = {
    get(o) {
      const s = this.__v_raw,
        i = ge(s),
        l = ge(o);
      e || (Dt(o, l) && Ve(i, 'get', o), Ve(i, 'get', l));
      const { has: a } = tr(i),
        u = t ? uo : e ? dr : Be;
      if (a.call(i, o)) return u(s.get(o));
      if (a.call(i, l)) return u(s.get(l));
      s !== i && s.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return (!e && Ve(ge(o), 'iterate', Gt), o.size);
    },
    has(o) {
      const s = this.__v_raw,
        i = ge(s),
        l = ge(o);
      return (
        e || (Dt(o, l) && Ve(i, 'has', o), Ve(i, 'has', l)),
        o === l ? s.has(o) : s.has(o) || s.has(l)
      );
    },
    forEach(o, s) {
      const i = this,
        l = i.__v_raw,
        a = ge(l),
        u = t ? uo : e ? dr : Be;
      return (
        !e && Ve(a, 'iterate', Gt),
        l.forEach((c, f) => o.call(s, u(c), u(f), i))
      );
    },
  };
  return (
    ze(
      r,
      e
        ? {
            add: nr('add'),
            set: nr('set'),
            delete: nr('delete'),
            clear: nr('clear'),
          }
        : {
            add(o) {
              !t && !ot(o) && !Ht(o) && (o = ge(o));
              const s = ge(this);
              return (
                tr(s).has.call(s, o) || (s.add(o), kt(s, 'add', o, o)),
                this
              );
            },
            set(o, s) {
              !t && !ot(s) && !Ht(s) && (s = ge(s));
              const i = ge(this),
                { has: l, get: a } = tr(i);
              let u = l.call(i, o);
              u || ((o = ge(o)), (u = l.call(i, o)));
              const c = a.call(i, o);
              return (
                i.set(o, s),
                u ? Dt(s, c) && kt(i, 'set', o, s) : kt(i, 'add', o, s),
                this
              );
            },
            delete(o) {
              const s = ge(this),
                { has: i, get: l } = tr(s);
              let a = i.call(s, o);
              (a || ((o = ge(o)), (a = i.call(s, o))), l && l.call(s, o));
              const u = s.delete(o);
              return (a && kt(s, 'delete', o, void 0), u);
            },
            clear() {
              const o = ge(this),
                s = o.size !== 0,
                i = o.clear();
              return (s && kt(o, 'clear', void 0, void 0), i);
            },
          },
    ),
    ['keys', 'values', 'entries', Symbol.iterator].forEach(o => {
      r[o] = lc(o, e, t);
    }),
    r
  );
}
function jo(e, t) {
  const r = ac(e, t);
  return (n, o, s) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? n
          : Reflect.get(xe(r, o) && o in n ? r : n, o, s);
}
const cc = { get: jo(!1, !1) },
  uc = { get: jo(!1, !0) },
  fc = { get: jo(!0, !1) };
const $i = new WeakMap(),
  Wi = new WeakMap(),
  Ki = new WeakMap(),
  dc = new WeakMap();
function pc(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1;
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2;
    default:
      return 0;
  }
}
function hc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pc(Ha(e));
}
function en(e) {
  return Ht(e) ? e : Do(e, !1, oc, cc, $i);
}
function Ui(e) {
  return Do(e, !1, ic, uc, Wi);
}
function Yt(e) {
  return Do(e, !0, sc, fc, Ki);
}
function Do(e, t, r, n, o) {
  if (!Ae(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const s = hc(e);
  if (s === 0) return e;
  const i = o.get(e);
  if (i) return i;
  const l = new Proxy(e, s === 2 ? n : r);
  return (o.set(e, l), l);
}
function Nt(e) {
  return Ht(e) ? Nt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ht(e) {
  return !!(e && e.__v_isReadonly);
}
function ot(e) {
  return !!(e && e.__v_isShallow);
}
function No(e) {
  return e ? !!e.__v_raw : !1;
}
function ge(e) {
  const t = e && e.__v_raw;
  return t ? ge(t) : e;
}
function Vo(e) {
  return (
    !xe(e, '__v_skip') && Object.isExtensible(e) && Ei(e, '__v_skip', !0),
    e
  );
}
const Be = e => (Ae(e) ? en(e) : e),
  dr = e => (Ae(e) ? Yt(e) : e);
function Pe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function he(e) {
  return Gi(e, !1);
}
function Vt(e) {
  return Gi(e, !0);
}
function Gi(e, t) {
  return Pe(e) ? e : new yc(e, t);
}
class yc {
  constructor(t, r) {
    ((this.dep = new Or()),
      (this.__v_isRef = !0),
      (this.__v_isShallow = !1),
      (this._rawValue = r ? t : ge(t)),
      (this._value = r ? t : Be(t)),
      (this.__v_isShallow = r));
  }
  get value() {
    return (this.dep.track(), this._value);
  }
  set value(t) {
    const r = this._rawValue,
      n = this.__v_isShallow || ot(t) || Ht(t);
    ((t = n ? t : ge(t)),
      Dt(t, r) &&
        ((this._rawValue = t),
        (this._value = n ? t : Be(t)),
        this.dep.trigger()));
  }
}
function F(e) {
  return Pe(e) ? e.value : e;
}
function qe(e) {
  return le(e) ? e() : F(e);
}
const mc = {
  get: (e, t, r) => (t === '__v_raw' ? e : F(Reflect.get(e, t, r))),
  set: (e, t, r, n) => {
    const o = e[t];
    return Pe(o) && !Pe(r) ? ((o.value = r), !0) : Reflect.set(e, t, r, n);
  },
};
function Ji(e) {
  return Nt(e) ? e : new Proxy(e, mc);
}
class gc {
  constructor(t) {
    ((this.__v_isRef = !0), (this._value = void 0));
    const r = (this.dep = new Or()),
      { get: n, set: o } = t(r.track.bind(r), r.trigger.bind(r));
    ((this._get = n), (this._set = o));
  }
  get value() {
    return (this._value = this._get());
  }
  set value(t) {
    this._set(t);
  }
}
function _c(e) {
  return new gc(e);
}
function Yi(e) {
  const t = re(e) ? new Array(e.length) : {};
  for (const r in e) t[r] = Xi(e, r);
  return t;
}
class vc {
  constructor(t, r, n) {
    ((this._object = t),
      (this._key = r),
      (this._defaultValue = n),
      (this.__v_isRef = !0),
      (this._value = void 0));
  }
  get value() {
    const t = this._object[this._key];
    return (this._value = t === void 0 ? this._defaultValue : t);
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Qa(ge(this._object), this._key);
  }
}
class bc {
  constructor(t) {
    ((this._getter = t),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !0),
      (this._value = void 0));
  }
  get value() {
    return (this._value = this._getter());
  }
}
function Xt(e, t, r) {
  return Pe(e)
    ? e
    : le(e)
      ? new bc(e)
      : Ae(e) && arguments.length > 1
        ? Xi(e, t, r)
        : he(e);
}
function Xi(e, t, r) {
  const n = e[t];
  return Pe(n) ? n : new vc(e, t, r);
}
class xc {
  constructor(t, r, n) {
    ((this.fn = t),
      (this.setter = r),
      (this._value = void 0),
      (this.dep = new Or(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = jn - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !r),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && Re !== this))
      return (Li(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Di(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Sc(e, t, r = !1) {
  let n, o;
  return (le(e) ? (n = e) : ((n = e.get), (o = e.set)), new xc(n, o, r));
}
const rr = {},
  pr = new WeakMap();
let Ut;
function wc(e, t = !1, r = Ut) {
  if (r) {
    let n = pr.get(r);
    (n || pr.set(r, (n = [])), n.push(e));
  }
}
function Oc(e, t, r = ke) {
  const {
      immediate: n,
      deep: o,
      once: s,
      scheduler: i,
      augmentJob: l,
      call: a,
    } = r,
    u = R => (o ? R : ot(R) || o === !1 || o === 0 ? Et(R, 1) : Et(R));
  let c,
    f,
    h,
    y,
    g = !1,
    v = !1;
  if (
    (Pe(e)
      ? ((f = () => e.value), (g = ot(e)))
      : Nt(e)
        ? ((f = () => u(e)), (g = !0))
        : re(e)
          ? ((v = !0),
            (g = e.some(R => Nt(R) || ot(R))),
            (f = () =>
              e.map(R => {
                if (Pe(R)) return R.value;
                if (Nt(R)) return u(R);
                if (le(R)) return a ? a(R, 2) : R();
              })))
          : le(e)
            ? t
              ? (f = a ? () => a(e, 2) : e)
              : (f = () => {
                  if (h) {
                    Ct();
                    try {
                      h();
                    } finally {
                      Rt();
                    }
                  }
                  const R = Ut;
                  Ut = c;
                  try {
                    return a ? a(e, 3, [y]) : e(y);
                  } finally {
                    Ut = R;
                  }
                })
            : (f = gt),
    t && o)
  ) {
    const R = f,
      P = o === !0 ? 1 / 0 : o;
    f = () => Et(R(), P);
  }
  const E = qo(),
    C = () => {
      (c.stop(), E && E.active && Po(E.effects, c));
    };
  if (s && t) {
    const R = t;
    t = (...P) => {
      (R(...P), C());
    };
  }
  let k = v ? new Array(e.length).fill(rr) : rr;
  const A = R => {
    if (!(!(c.flags & 1) || (!c.dirty && !R)))
      if (t) {
        const P = c.run();
        if (o || g || (v ? P.some((te, Q) => Dt(te, k[Q])) : Dt(P, k))) {
          h && h();
          const te = Ut;
          Ut = c;
          try {
            const Q = [P, k === rr ? void 0 : v && k[0] === rr ? [] : k, y];
            ((k = P), a ? a(t, 3, Q) : t(...Q));
          } finally {
            Ut = te;
          }
        }
      } else c.run();
  };
  return (
    l && l(A),
    (c = new qi(f)),
    (c.scheduler = i ? () => i(A, !1) : A),
    (y = R => wc(R, !1, c)),
    (h = c.onStop =
      () => {
        const R = pr.get(c);
        if (R) {
          if (a) a(R, 4);
          else for (const P of R) P();
          pr.delete(c);
        }
      }),
    t ? (n ? A(!0) : (k = c.run())) : i ? i(A.bind(null, !0), !0) : c.run(),
    (C.pause = c.pause.bind(c)),
    (C.resume = c.resume.bind(c)),
    (C.stop = C),
    C
  );
}
function Et(e, t = 1 / 0, r) {
  if (t <= 0 || !Ae(e) || e.__v_skip || ((r = r || new Set()), r.has(e)))
    return e;
  if ((r.add(e), t--, Pe(e))) Et(e.value, t, r);
  else if (re(e)) for (let n = 0; n < e.length; n++) Et(e[n], t, r);
  else if (Si(e) || fn(e))
    e.forEach(n => {
      Et(n, t, r);
    });
  else if (ki(e)) {
    for (const n in e) Et(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Et(e[n], t, r);
  }
  return e;
}
/**
 * @vue/runtime-core v3.5.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Jn(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (o) {
    Er(o, t, r);
  }
}
function bt(e, t, r, n) {
  if (le(e)) {
    const o = Jn(e, t, r, n);
    return (
      o &&
        wi(o) &&
        o.catch(s => {
          Er(s, t, r);
        }),
      o
    );
  }
  if (re(e)) {
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(bt(e[s], t, r, n));
    return o;
  }
}
function Er(e, t, r, n = !0) {
  const o = t ? t.vnode : null,
    { errorHandler: s, throwUnhandledErrorInProduction: i } =
      (t && t.appContext.config) || ke;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      u = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; l; ) {
      const c = l.ec;
      if (c) {
        for (let f = 0; f < c.length; f++) if (c[f](e, a, u) === !1) return;
      }
      l = l.parent;
    }
    if (s) {
      (Ct(), Jn(s, null, 10, [e, a, u]), Rt());
      return;
    }
  }
  kc(e, r, o, n, i);
}
function kc(e, t, r, n = !0, o = !1) {
  if (o) throw e;
  console.error(e);
}
const Ge = [];
let yt = -1;
const dn = [];
let Lt = null,
  ln = 0;
const Qi = Promise.resolve();
let hr = null;
function at(e) {
  const t = hr || Qi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ec(e) {
  let t = yt + 1,
    r = Ge.length;
  for (; t < r; ) {
    const n = (t + r) >>> 1,
      o = Ge[n],
      s = Nn(o);
    s < e || (s === e && o.flags & 2) ? (t = n + 1) : (r = n);
  }
  return t;
}
function Ho(e) {
  if (!(e.flags & 1)) {
    const t = Nn(e),
      r = Ge[Ge.length - 1];
    (!r || (!(e.flags & 2) && t >= Nn(r)) ? Ge.push(e) : Ge.splice(Ec(t), 0, e),
      (e.flags |= 1),
      Zi());
  }
}
function Zi() {
  hr || (hr = Qi.then(tl));
}
function Cc(e) {
  (re(e)
    ? dn.push(...e)
    : Lt && e.id === -1
      ? Lt.splice(ln + 1, 0, e)
      : e.flags & 1 || (dn.push(e), (e.flags |= 1)),
    Zi());
}
function ys(e, t, r = yt + 1) {
  for (; r < Ge.length; r++) {
    const n = Ge[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid) continue;
      (Ge.splice(r, 1),
        r--,
        n.flags & 4 && (n.flags &= -2),
        n(),
        n.flags & 4 || (n.flags &= -2));
    }
  }
}
function el(e) {
  if (dn.length) {
    const t = [...new Set(dn)].sort((r, n) => Nn(r) - Nn(n));
    if (((dn.length = 0), Lt)) {
      Lt.push(...t);
      return;
    }
    for (Lt = t, ln = 0; ln < Lt.length; ln++) {
      const r = Lt[ln];
      (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), (r.flags &= -2));
    }
    ((Lt = null), (ln = 0));
  }
}
const Nn = e => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function tl(e) {
  try {
    for (yt = 0; yt < Ge.length; yt++) {
      const t = Ge[yt];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
        Jn(t, t.i, t.i ? 15 : 14),
        t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; yt < Ge.length; yt++) {
      const t = Ge[yt];
      t && (t.flags &= -2);
    }
    ((yt = -1),
      (Ge.length = 0),
      el(),
      (hr = null),
      (Ge.length || dn.length) && tl());
  }
}
let je = null,
  nl = null;
function yr(e) {
  const t = je;
  return ((je = e), (nl = (e && e.type.__scopeId) || null), t);
}
function W(e, t = je, r) {
  if (!t || e._n) return e;
  const n = (...o) => {
    n._d && ks(-1);
    const s = yr(t);
    let i;
    try {
      i = e(...o);
    } finally {
      (yr(s), n._d && ks(1));
    }
    return i;
  };
  return ((n._n = !0), (n._c = !0), (n._d = !0), n);
}
function Fo(e, t) {
  if (je === null) return e;
  const r = Pr(je),
    n = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [s, i, l, a = ke] = t[o];
    s &&
      (le(s) && (s = { mounted: s, updated: s }),
      s.deep && Et(i),
      n.push({
        dir: s,
        instance: r,
        value: i,
        oldValue: void 0,
        arg: l,
        modifiers: a,
      }));
  }
  return e;
}
function Wt(e, t, r, n) {
  const o = e.dirs,
    s = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    s && (l.oldValue = s[i].value);
    let a = l.dir[n];
    a && (Ct(), bt(a, r, 8, [e.el, l, e, t]), Rt());
  }
}
const Rc = Symbol('_vte'),
  Ac = e => e.__isTeleport,
  Ic = Symbol('_leaveCb');
function zo(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), zo(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function oe(e, t) {
  return le(e) ? ze({ name: e.name }, t, { setup: e }) : e;
}
function Pt() {
  const e = $t();
  return e
    ? (e.appContext.config.idPrefix || 'v') + '-' + e.ids[0] + e.ids[1]++
    : '';
}
function rl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + '-', 0, 0];
}
function Fe(e) {
  const t = $t(),
    r = Vt(null);
  if (t) {
    const o = t.refs === ke ? (t.refs = {}) : t.refs;
    Object.defineProperty(o, e, {
      enumerable: !0,
      get: () => r.value,
      set: s => (r.value = s),
    });
  }
  return r;
}
function An(e, t, r, n, o = !1) {
  if (re(e)) {
    e.forEach((g, v) => An(g, t && (re(t) ? t[v] : t), r, n, o));
    return;
  }
  if (pn(n) && !o) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      An(e, t, r, n.component.subTree);
    return;
  }
  const s = n.shapeFlag & 4 ? Pr(n.component) : n.el,
    i = o ? null : s,
    { i: l, r: a } = e,
    u = t && t.r,
    c = l.refs === ke ? (l.refs = {}) : l.refs,
    f = l.setupState,
    h = ge(f),
    y = f === ke ? xi : g => xe(h, g);
  if (u != null && u !== a) {
    if (Te(u)) ((c[u] = null), y(u) && (f[u] = null));
    else if (Pe(u)) {
      u.value = null;
      const g = t;
      g.k && (c[g.k] = null);
    }
  }
  if (le(a)) Jn(a, l, 12, [i, c]);
  else {
    const g = Te(a),
      v = Pe(a);
    if (g || v) {
      const E = () => {
        if (e.f) {
          const C = g ? (y(a) ? f[a] : c[a]) : a.value;
          if (o) re(C) && Po(C, s);
          else if (re(C)) C.includes(s) || C.push(s);
          else if (g) ((c[a] = [s]), y(a) && (f[a] = c[a]));
          else {
            const k = [s];
            ((a.value = k), e.k && (c[e.k] = k));
          }
        } else
          g
            ? ((c[a] = i), y(a) && (f[a] = i))
            : v && ((a.value = i), e.k && (c[e.k] = i));
      };
      i ? ((E.id = -1), et(E, r)) : E();
    }
  }
}
Sr().requestIdleCallback;
Sr().cancelIdleCallback;
const pn = e => !!e.type.__asyncLoader,
  ol = e => e.type.__isKeepAlive;
function Pc(e, t) {
  sl(e, 'a', t);
}
function Tc(e, t) {
  sl(e, 'da', t);
}
function sl(e, t, r = He) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let o = r;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
  if ((Cr(t, n, r), r)) {
    let o = r.parent;
    for (; o && o.parent; )
      (ol(o.parent.vnode) && qc(n, t, r, o), (o = o.parent));
  }
}
function qc(e, t, r, n) {
  const o = Cr(t, e, n, !0);
  $o(() => {
    Po(n[t], o);
  }, r);
}
function Cr(e, t, r = He, n = !1) {
  if (r) {
    const o = r[e] || (r[e] = []),
      s =
        t.__weh ||
        (t.__weh = (...i) => {
          Ct();
          const l = Xn(r),
            a = bt(t, r, e, i);
          return (l(), Rt(), a);
        });
    return (n ? o.unshift(s) : o.push(s), s);
  }
}
const Tt =
    e =>
    (t, r = He) => {
      (!Fn || e === 'sp') && Cr(e, (...n) => t(...n), r);
    },
  hn = Tt('bm'),
  ut = Tt('m'),
  Mc = Tt('bu'),
  Lc = Tt('u'),
  Rr = Tt('bum'),
  $o = Tt('um'),
  Bc = Tt('sp'),
  jc = Tt('rtg'),
  Dc = Tt('rtc');
function Nc(e, t = He) {
  Cr('ec', e, t);
}
const il = 'components';
function Vc(e, t) {
  return al(il, e, !0, t) || e;
}
const ll = Symbol.for('v-ndc');
function Yn(e) {
  return Te(e) ? al(il, e, !1) || e : e || ll;
}
function al(e, t, r = !0, n = !1) {
  const o = je || He;
  if (o) {
    const s = o.type;
    {
      const l = Eu(s, !1);
      if (l && (l === t || l === st(t) || l === xr(st(t)))) return s;
    }
    const i = ms(o[e] || s[e], t) || ms(o.appContext[e], t);
    return !i && n ? s : i;
  }
}
function ms(e, t) {
  return e && (e[t] || e[st(t)] || e[xr(st(t))]);
}
function Ft(e, t, r, n) {
  let o;
  const s = r,
    i = re(e);
  if (i || Te(e)) {
    const l = i && Nt(e);
    let a = !1,
      u = !1;
    (l && ((a = !ot(e)), (u = Ht(e)), (e = kr(e))), (o = new Array(e.length)));
    for (let c = 0, f = e.length; c < f; c++)
      o[c] = t(a ? (u ? dr(Be(e[c])) : Be(e[c])) : e[c], c, void 0, s);
  } else if (typeof e == 'number') {
    o = new Array(e);
    for (let l = 0; l < e; l++) o[l] = t(l + 1, l, void 0, s);
  } else if (Ae(e))
    if (e[Symbol.iterator]) o = Array.from(e, (l, a) => t(l, a, void 0, s));
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        o[a] = t(e[c], c, a, s);
      }
    }
  else o = [];
  return o;
}
function Hc(e, t) {
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    if (re(n)) for (let o = 0; o < n.length; o++) e[n[o].name] = n[o].fn;
    else
      n &&
        (e[n.name] = n.key
          ? (...o) => {
              const s = n.fn(...o);
              return (s && (s.key = n.key), s);
            }
          : n.fn);
  }
  return e;
}
function ie(e, t, r = {}, n, o) {
  if (je.ce || (je.parent && pn(je.parent) && je.parent.ce))
    return (
      t !== 'default' && (r.name = t),
      _(),
      $(Ie, null, [H('slot', r, n && n())], 64)
    );
  let s = e[t];
  (s && s._c && (s._d = !1), _());
  const i = s && cl(s(r)),
    l = r.key || (i && i.key),
    a = $(
      Ie,
      { key: (l && !It(l) ? l : `_${t}`) + (!i && n ? '_fb' : '') },
      i || (n ? n() : []),
      i && e._ === 1 ? 64 : -2,
    );
  return (
    a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    s && s._c && (s._d = !0),
    a
  );
}
function cl(e) {
  return e.some(t =>
    Hn(t) ? !(t.type === At || (t.type === Ie && !cl(t.children))) : !0,
  )
    ? e
    : null;
}
function Fc(e, t) {
  const r = {};
  for (const n in e) r[lr(n)] = e[n];
  return r;
}
const fo = e => (e ? (Al(e) ? Pr(e) : fo(e.parent)) : null),
  In = ze(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => fo(e.parent),
    $root: e => fo(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => dl(e),
    $forceUpdate: e =>
      e.f ||
      (e.f = () => {
        Ho(e.update);
      }),
    $nextTick: e => e.n || (e.n = at.bind(e.proxy)),
    $watch: e => uu.bind(e),
  }),
  Ur = (e, t) => e !== ke && !e.__isScriptSetup && xe(e, t),
  zc = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0;
      const {
        ctx: r,
        setupState: n,
        data: o,
        props: s,
        accessCache: i,
        type: l,
        appContext: a,
      } = e;
      let u;
      if (t[0] !== '$') {
        const y = i[t];
        if (y !== void 0)
          switch (y) {
            case 1:
              return n[t];
            case 2:
              return o[t];
            case 4:
              return r[t];
            case 3:
              return s[t];
          }
        else {
          if (Ur(n, t)) return ((i[t] = 1), n[t]);
          if (o !== ke && xe(o, t)) return ((i[t] = 2), o[t]);
          if ((u = e.propsOptions[0]) && xe(u, t)) return ((i[t] = 3), s[t]);
          if (r !== ke && xe(r, t)) return ((i[t] = 4), r[t]);
          po && (i[t] = 0);
        }
      }
      const c = In[t];
      let f, h;
      if (c) return (t === '$attrs' && Ve(e.attrs, 'get', ''), c(e));
      if ((f = l.__cssModules) && (f = f[t])) return f;
      if (r !== ke && xe(r, t)) return ((i[t] = 4), r[t]);
      if (((h = a.config.globalProperties), xe(h, t))) return h[t];
    },
    set({ _: e }, t, r) {
      const { data: n, setupState: o, ctx: s } = e;
      return Ur(o, t)
        ? ((o[t] = r), !0)
        : n !== ke && xe(n, t)
          ? ((n[t] = r), !0)
          : xe(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((s[t] = r), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: n,
          appContext: o,
          propsOptions: s,
          type: i,
        },
      },
      l,
    ) {
      let a, u;
      return !!(
        r[l] ||
        (e !== ke && l[0] !== '$' && xe(e, l)) ||
        Ur(t, l) ||
        ((a = s[0]) && xe(a, l)) ||
        xe(n, l) ||
        xe(In, l) ||
        xe(o.config.globalProperties, l) ||
        ((u = i.__cssModules) && u[l])
      );
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : xe(r, 'value') && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      );
    },
  };
function zt() {
  return ul().slots;
}
function $c() {
  return ul().attrs;
}
function ul(e) {
  const t = $t();
  return t.setupContext || (t.setupContext = Pl(t));
}
function gs(e) {
  return re(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e;
}
let po = !0;
function Wc(e) {
  const t = dl(e),
    r = e.proxy,
    n = e.ctx;
  ((po = !1), t.beforeCreate && _s(t.beforeCreate, e, 'bc'));
  const {
    data: o,
    computed: s,
    methods: i,
    watch: l,
    provide: a,
    inject: u,
    created: c,
    beforeMount: f,
    mounted: h,
    beforeUpdate: y,
    updated: g,
    activated: v,
    deactivated: E,
    beforeDestroy: C,
    beforeUnmount: k,
    destroyed: A,
    unmounted: R,
    render: P,
    renderTracked: te,
    renderTriggered: Q,
    errorCaptured: V,
    serverPrefetch: z,
    expose: ae,
    inheritAttrs: ue,
    components: ce,
    directives: J,
    filters: T,
  } = t;
  if ((u && Kc(u, n, null), i))
    for (const Y in i) {
      const pe = i[Y];
      le(pe) && (n[Y] = pe.bind(r));
    }
  if (o) {
    const Y = o.call(r, r);
    Ae(Y) && (e.data = en(Y));
  }
  if (((po = !0), s))
    for (const Y in s) {
      const pe = s[Y],
        De = le(pe) ? pe.bind(r, r) : le(pe.get) ? pe.get.bind(r, r) : gt,
        rt = !le(pe) && le(pe.set) ? pe.set.bind(r) : gt,
        $e = w({ get: De, set: rt });
      Object.defineProperty(n, Y, {
        enumerable: !0,
        configurable: !0,
        get: () => $e.value,
        set: me => ($e.value = me),
      });
    }
  if (l) for (const Y in l) fl(l[Y], n, r, Y);
  if (a) {
    const Y = le(a) ? a.call(r) : a;
    Reflect.ownKeys(Y).forEach(pe => {
      Pn(pe, Y[pe]);
    });
  }
  c && _s(c, e, 'c');
  function Z(Y, pe) {
    re(pe) ? pe.forEach(De => Y(De.bind(r))) : pe && Y(pe.bind(r));
  }
  if (
    (Z(hn, f),
    Z(ut, h),
    Z(Mc, y),
    Z(Lc, g),
    Z(Pc, v),
    Z(Tc, E),
    Z(Nc, V),
    Z(Dc, te),
    Z(jc, Q),
    Z(Rr, k),
    Z($o, R),
    Z(Bc, z),
    re(ae))
  )
    if (ae.length) {
      const Y = e.exposed || (e.exposed = {});
      ae.forEach(pe => {
        Object.defineProperty(Y, pe, {
          get: () => r[pe],
          set: De => (r[pe] = De),
          enumerable: !0,
        });
      });
    } else e.exposed || (e.exposed = {});
  (P && e.render === gt && (e.render = P),
    ue != null && (e.inheritAttrs = ue),
    ce && (e.components = ce),
    J && (e.directives = J),
    z && rl(e));
}
function Kc(e, t, r = gt) {
  re(e) && (e = ho(e));
  for (const n in e) {
    const o = e[n];
    let s;
    (Ae(o)
      ? 'default' in o
        ? (s = Le(o.from || n, o.default, !0))
        : (s = Le(o.from || n))
      : (s = Le(o)),
      Pe(s)
        ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => (s.value = i),
          })
        : (t[n] = s));
  }
}
function _s(e, t, r) {
  bt(re(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, r);
}
function fl(e, t, r, n) {
  let o = n.includes('.') ? Ol(r, n) : () => r[n];
  if (Te(e)) {
    const s = t[e];
    le(s) && Se(o, s);
  } else if (le(e)) Se(o, e.bind(r));
  else if (Ae(e))
    if (re(e)) e.forEach(s => fl(s, t, r, n));
    else {
      const s = le(e.handler) ? e.handler.bind(r) : t[e.handler];
      le(s) && Se(o, s, e);
    }
}
function dl(e) {
  const t = e.type,
    { mixins: r, extends: n } = t,
    {
      mixins: o,
      optionsCache: s,
      config: { optionMergeStrategies: i },
    } = e.appContext,
    l = s.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !o.length && !r && !n
        ? (a = t)
        : ((a = {}), o.length && o.forEach(u => mr(a, u, i, !0)), mr(a, t, i)),
    Ae(t) && s.set(t, a),
    a
  );
}
function mr(e, t, r, n = !1) {
  const { mixins: o, extends: s } = t;
  (s && mr(e, s, r, !0), o && o.forEach(i => mr(e, i, r, !0)));
  for (const i in t)
    if (!(n && i === 'expose')) {
      const l = Uc[i] || (r && r[i]);
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Uc = {
  data: vs,
  props: bs,
  emits: bs,
  methods: kn,
  computed: kn,
  beforeCreate: Ue,
  created: Ue,
  beforeMount: Ue,
  mounted: Ue,
  beforeUpdate: Ue,
  updated: Ue,
  beforeDestroy: Ue,
  beforeUnmount: Ue,
  destroyed: Ue,
  unmounted: Ue,
  activated: Ue,
  deactivated: Ue,
  errorCaptured: Ue,
  serverPrefetch: Ue,
  components: kn,
  directives: kn,
  watch: Jc,
  provide: vs,
  inject: Gc,
};
function vs(e, t) {
  return t
    ? e
      ? function () {
          return ze(
            le(e) ? e.call(this, this) : e,
            le(t) ? t.call(this, this) : t,
          );
        }
      : t
    : e;
}
function Gc(e, t) {
  return kn(ho(e), ho(t));
}
function ho(e) {
  if (re(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r];
    return t;
  }
  return e;
}
function Ue(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function kn(e, t) {
  return e ? ze(Object.create(null), e, t) : t;
}
function bs(e, t) {
  return e
    ? re(e) && re(t)
      ? [...new Set([...e, ...t])]
      : ze(Object.create(null), gs(e), gs(t ?? {}))
    : t;
}
function Jc(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = ze(Object.create(null), e);
  for (const n in t) r[n] = Ue(e[n], t[n]);
  return r;
}
function pl() {
  return {
    app: null,
    config: {
      isNativeTag: xi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let Yc = 0;
function Xc(e, t) {
  return function (n, o = null) {
    (le(n) || (n = ze({}, n)), o != null && !Ae(o) && (o = null));
    const s = pl(),
      i = new WeakSet(),
      l = [];
    let a = !1;
    const u = (s.app = {
      _uid: Yc++,
      _component: n,
      _props: o,
      _container: null,
      _context: s,
      _instance: null,
      version: Ru,
      get config() {
        return s.config;
      },
      set config(c) {},
      use(c, ...f) {
        return (
          i.has(c) ||
            (c && le(c.install)
              ? (i.add(c), c.install(u, ...f))
              : le(c) && (i.add(c), c(u, ...f))),
          u
        );
      },
      mixin(c) {
        return (s.mixins.includes(c) || s.mixins.push(c), u);
      },
      component(c, f) {
        return f ? ((s.components[c] = f), u) : s.components[c];
      },
      directive(c, f) {
        return f ? ((s.directives[c] = f), u) : s.directives[c];
      },
      mount(c, f, h) {
        if (!a) {
          const y = u._ceVNode || H(n, o);
          return (
            (y.appContext = s),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            e(y, c, h),
            (a = !0),
            (u._container = c),
            (c.__vue_app__ = u),
            Pr(y.component)
          );
        }
      },
      onUnmount(c) {
        l.push(c);
      },
      unmount() {
        a &&
          (bt(l, u._instance, 16),
          e(null, u._container),
          delete u._container.__vue_app__);
      },
      provide(c, f) {
        return ((s.provides[c] = f), u);
      },
      runWithContext(c) {
        const f = Jt;
        Jt = u;
        try {
          return c();
        } finally {
          Jt = f;
        }
      },
    });
    return u;
  };
}
let Jt = null;
function Pn(e, t) {
  if (He) {
    let r = He.provides;
    const n = He.parent && He.parent.provides;
    (n === r && (r = He.provides = Object.create(n)), (r[e] = t));
  }
}
function Le(e, t, r = !1) {
  const n = $t();
  if (n || Jt) {
    let o = Jt
      ? Jt._context.provides
      : n
        ? n.parent == null || n.ce
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : void 0;
    if (o && e in o) return o[e];
    if (arguments.length > 1) return r && le(t) ? t.call(n && n.proxy) : t;
  }
}
function Wo() {
  return !!($t() || Jt);
}
const hl = {},
  yl = () => Object.create(hl),
  ml = e => Object.getPrototypeOf(e) === hl;
function Qc(e, t, r, n = !1) {
  const o = {},
    s = yl();
  ((e.propsDefaults = Object.create(null)), gl(e, t, o, s));
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
  (r ? (e.props = n ? o : Ui(o)) : e.type.props ? (e.props = o) : (e.props = s),
    (e.attrs = s));
}
function Zc(e, t, r, n) {
  const {
      props: o,
      attrs: s,
      vnode: { patchFlag: i },
    } = e,
    l = ge(o),
    [a] = e.propsOptions;
  let u = !1;
  if ((n || i > 0) && !(i & 16)) {
    if (i & 8) {
      const c = e.vnode.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        let h = c[f];
        if (Ar(e.emitsOptions, h)) continue;
        const y = t[h];
        if (a)
          if (xe(s, h)) y !== s[h] && ((s[h] = y), (u = !0));
          else {
            const g = st(h);
            o[g] = yo(a, l, g, y, e, !1);
          }
        else y !== s[h] && ((s[h] = y), (u = !0));
      }
    }
  } else {
    gl(e, t, o, s) && (u = !0);
    let c;
    for (const f in l)
      (!t || (!xe(t, f) && ((c = Zt(f)) === f || !xe(t, c)))) &&
        (a
          ? r &&
            (r[f] !== void 0 || r[c] !== void 0) &&
            (o[f] = yo(a, l, f, void 0, e, !0))
          : delete o[f]);
    if (s !== l)
      for (const f in s) (!t || !xe(t, f)) && (delete s[f], (u = !0));
  }
  u && kt(e.attrs, 'set', '');
}
function gl(e, t, r, n) {
  const [o, s] = e.propsOptions;
  let i = !1,
    l;
  if (t)
    for (let a in t) {
      if (En(a)) continue;
      const u = t[a];
      let c;
      o && xe(o, (c = st(a)))
        ? !s || !s.includes(c)
          ? (r[c] = u)
          : ((l || (l = {}))[c] = u)
        : Ar(e.emitsOptions, a) ||
          ((!(a in n) || u !== n[a]) && ((n[a] = u), (i = !0)));
    }
  if (s) {
    const a = ge(r),
      u = l || ke;
    for (let c = 0; c < s.length; c++) {
      const f = s[c];
      r[f] = yo(o, a, f, u[f], e, !xe(u, f));
    }
  }
  return i;
}
function yo(e, t, r, n, o, s) {
  const i = e[r];
  if (i != null) {
    const l = xe(i, 'default');
    if (l && n === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && le(a)) {
        const { propsDefaults: u } = o;
        if (r in u) n = u[r];
        else {
          const c = Xn(o);
          ((n = u[r] = a.call(null, t)), c());
        }
      } else n = a;
      o.ce && o.ce._setProp(r, n);
    }
    i[0] &&
      (s && !l ? (n = !1) : i[1] && (n === '' || n === Zt(r)) && (n = !0));
  }
  return n;
}
const eu = new WeakMap();
function _l(e, t, r = !1) {
  const n = r ? eu : t.propsCache,
    o = n.get(e);
  if (o) return o;
  const s = e.props,
    i = {},
    l = [];
  let a = !1;
  if (!le(e)) {
    const c = f => {
      a = !0;
      const [h, y] = _l(f, t, !0);
      (ze(i, h), y && l.push(...y));
    };
    (!r && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c));
  }
  if (!s && !a) return (Ae(e) && n.set(e, un), un);
  if (re(s))
    for (let c = 0; c < s.length; c++) {
      const f = st(s[c]);
      xs(f) && (i[f] = ke);
    }
  else if (s)
    for (const c in s) {
      const f = st(c);
      if (xs(f)) {
        const h = s[c],
          y = (i[f] = re(h) || le(h) ? { type: h } : ze({}, h)),
          g = y.type;
        let v = !1,
          E = !0;
        if (re(g))
          for (let C = 0; C < g.length; ++C) {
            const k = g[C],
              A = le(k) && k.name;
            if (A === 'Boolean') {
              v = !0;
              break;
            } else A === 'String' && (E = !1);
          }
        else v = le(g) && g.name === 'Boolean';
        ((y[0] = v), (y[1] = E), (v || xe(y, 'default')) && l.push(f));
      }
    }
  const u = [i, l];
  return (Ae(e) && n.set(e, u), u);
}
function xs(e) {
  return e[0] !== '$' && !En(e);
}
const Ko = e => e === '_' || e === '_ctx' || e === '$stable',
  Uo = e => (re(e) ? e.map(mt) : [mt(e)]),
  tu = (e, t, r) => {
    if (t._n) return t;
    const n = W((...o) => Uo(t(...o)), r);
    return ((n._c = !1), n);
  },
  vl = (e, t, r) => {
    const n = e._ctx;
    for (const o in e) {
      if (Ko(o)) continue;
      const s = e[o];
      if (le(s)) t[o] = tu(o, s, n);
      else if (s != null) {
        const i = Uo(s);
        t[o] = () => i;
      }
    }
  },
  bl = (e, t) => {
    const r = Uo(t);
    e.slots.default = () => r;
  },
  xl = (e, t, r) => {
    for (const n in t) (r || !Ko(n)) && (e[n] = t[n]);
  },
  nu = (e, t, r) => {
    const n = (e.slots = yl());
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (xl(n, t, r), r && Ei(n, '_', o, !0)) : vl(t, n);
    } else t && bl(e, t);
  },
  ru = (e, t, r) => {
    const { vnode: n, slots: o } = e;
    let s = !0,
      i = ke;
    if (n.shapeFlag & 32) {
      const l = t._;
      (l
        ? r && l === 1
          ? (s = !1)
          : xl(o, t, r)
        : ((s = !t.$stable), vl(t, o)),
        (i = t));
    } else t && (bl(e, t), (i = { default: 1 }));
    if (s) for (const l in o) !Ko(l) && i[l] == null && delete o[l];
  },
  et = gu;
function ou(e) {
  return su(e);
}
function su(e, t) {
  const r = Sr();
  r.__VUE__ = !0;
  const {
      insert: n,
      remove: o,
      patchProp: s,
      createElement: i,
      createText: l,
      createComment: a,
      setText: u,
      setElementText: c,
      parentNode: f,
      nextSibling: h,
      setScopeId: y = gt,
      insertStaticContent: g,
    } = e,
    v = (
      p,
      d,
      m,
      b = null,
      S = null,
      x = null,
      j = void 0,
      L = null,
      q = !!d.dynamicChildren,
    ) => {
      if (p === d) return;
      (p && !wn(p, d) && ((b = O(p)), me(p, S, x, !0), (p = null)),
        d.patchFlag === -2 && ((q = !1), (d.dynamicChildren = null)));
      const { type: I, ref: ee, shapeFlag: N } = d;
      switch (I) {
        case Ir:
          E(p, d, m, b);
          break;
        case At:
          C(p, d, m, b);
          break;
        case Jr:
          p == null && k(d, m, b, j);
          break;
        case Ie:
          ce(p, d, m, b, S, x, j, L, q);
          break;
        default:
          N & 1
            ? P(p, d, m, b, S, x, j, L, q)
            : N & 6
              ? J(p, d, m, b, S, x, j, L, q)
              : (N & 64 || N & 128) && I.process(p, d, m, b, S, x, j, L, q, K);
      }
      ee != null && S
        ? An(ee, p && p.ref, x, d || p, !d)
        : ee == null && p && p.ref != null && An(p.ref, null, x, p, !0);
    },
    E = (p, d, m, b) => {
      if (p == null) n((d.el = l(d.children)), m, b);
      else {
        const S = (d.el = p.el);
        d.children !== p.children && u(S, d.children);
      }
    },
    C = (p, d, m, b) => {
      p == null ? n((d.el = a(d.children || '')), m, b) : (d.el = p.el);
    },
    k = (p, d, m, b) => {
      [p.el, p.anchor] = g(p.children, d, m, b, p.el, p.anchor);
    },
    A = ({ el: p, anchor: d }, m, b) => {
      let S;
      for (; p && p !== d; ) ((S = h(p)), n(p, m, b), (p = S));
      n(d, m, b);
    },
    R = ({ el: p, anchor: d }) => {
      let m;
      for (; p && p !== d; ) ((m = h(p)), o(p), (p = m));
      o(d);
    },
    P = (p, d, m, b, S, x, j, L, q) => {
      (d.type === 'svg' ? (j = 'svg') : d.type === 'math' && (j = 'mathml'),
        p == null ? te(d, m, b, S, x, j, L, q) : z(p, d, S, x, j, L, q));
    },
    te = (p, d, m, b, S, x, j, L) => {
      let q, I;
      const { props: ee, shapeFlag: N, transition: X, dirs: se } = p;
      if (
        ((q = p.el = i(p.type, x, ee && ee.is, ee)),
        N & 8
          ? c(q, p.children)
          : N & 16 && V(p.children, q, null, b, S, Gr(p, x), j, L),
        se && Wt(p, null, b, 'created'),
        Q(q, p, p.scopeId, j, b),
        ee)
      ) {
        for (const Ce in ee)
          Ce !== 'value' && !En(Ce) && s(q, Ce, null, ee[Ce], x, b);
        ('value' in ee && s(q, 'value', null, ee.value, x),
          (I = ee.onVnodeBeforeMount) && ht(I, b, p));
      }
      se && Wt(p, null, b, 'beforeMount');
      const ye = iu(S, X);
      (ye && X.beforeEnter(q),
        n(q, d, m),
        ((I = ee && ee.onVnodeMounted) || ye || se) &&
          et(() => {
            (I && ht(I, b, p),
              ye && X.enter(q),
              se && Wt(p, null, b, 'mounted'));
          }, S));
    },
    Q = (p, d, m, b, S) => {
      if ((m && y(p, m), b)) for (let x = 0; x < b.length; x++) y(p, b[x]);
      if (S) {
        let x = S.subTree;
        if (
          d === x ||
          (El(x.type) && (x.ssContent === d || x.ssFallback === d))
        ) {
          const j = S.vnode;
          Q(p, j, j.scopeId, j.slotScopeIds, S.parent);
        }
      }
    },
    V = (p, d, m, b, S, x, j, L, q = 0) => {
      for (let I = q; I < p.length; I++) {
        const ee = (p[I] = L ? Bt(p[I]) : mt(p[I]));
        v(null, ee, d, m, b, S, x, j, L);
      }
    },
    z = (p, d, m, b, S, x, j) => {
      const L = (d.el = p.el);
      let { patchFlag: q, dynamicChildren: I, dirs: ee } = d;
      q |= p.patchFlag & 16;
      const N = p.props || ke,
        X = d.props || ke;
      let se;
      if (
        (m && Kt(m, !1),
        (se = X.onVnodeBeforeUpdate) && ht(se, m, d, p),
        ee && Wt(d, p, m, 'beforeUpdate'),
        m && Kt(m, !0),
        ((N.innerHTML && X.innerHTML == null) ||
          (N.textContent && X.textContent == null)) &&
          c(L, ''),
        I
          ? ae(p.dynamicChildren, I, L, m, b, Gr(d, S), x)
          : j || pe(p, d, L, null, m, b, Gr(d, S), x, !1),
        q > 0)
      ) {
        if (q & 16) ue(L, N, X, m, S);
        else if (
          (q & 2 && N.class !== X.class && s(L, 'class', null, X.class, S),
          q & 4 && s(L, 'style', N.style, X.style, S),
          q & 8)
        ) {
          const ye = d.dynamicProps;
          for (let Ce = 0; Ce < ye.length; Ce++) {
            const Oe = ye[Ce],
              Ye = N[Oe],
              Xe = X[Oe];
            (Xe !== Ye || Oe === 'value') && s(L, Oe, Ye, Xe, S, m);
          }
        }
        q & 1 && p.children !== d.children && c(L, d.children);
      } else !j && I == null && ue(L, N, X, m, S);
      ((se = X.onVnodeUpdated) || ee) &&
        et(() => {
          (se && ht(se, m, d, p), ee && Wt(d, p, m, 'updated'));
        }, b);
    },
    ae = (p, d, m, b, S, x, j) => {
      for (let L = 0; L < d.length; L++) {
        const q = p[L],
          I = d[L],
          ee =
            q.el && (q.type === Ie || !wn(q, I) || q.shapeFlag & 198)
              ? f(q.el)
              : m;
        v(q, I, ee, null, b, S, x, j, !0);
      }
    },
    ue = (p, d, m, b, S) => {
      if (d !== m) {
        if (d !== ke)
          for (const x in d) !En(x) && !(x in m) && s(p, x, d[x], null, S, b);
        for (const x in m) {
          if (En(x)) continue;
          const j = m[x],
            L = d[x];
          j !== L && x !== 'value' && s(p, x, L, j, S, b);
        }
        'value' in m && s(p, 'value', d.value, m.value, S);
      }
    },
    ce = (p, d, m, b, S, x, j, L, q) => {
      const I = (d.el = p ? p.el : l('')),
        ee = (d.anchor = p ? p.anchor : l(''));
      let { patchFlag: N, dynamicChildren: X, slotScopeIds: se } = d;
      (se && (L = L ? L.concat(se) : se),
        p == null
          ? (n(I, m, b), n(ee, m, b), V(d.children || [], m, ee, S, x, j, L, q))
          : N > 0 && N & 64 && X && p.dynamicChildren
            ? (ae(p.dynamicChildren, X, m, S, x, j, L),
              (d.key != null || (S && d === S.subTree)) && Sl(p, d, !0))
            : pe(p, d, m, ee, S, x, j, L, q));
    },
    J = (p, d, m, b, S, x, j, L, q) => {
      ((d.slotScopeIds = L),
        p == null
          ? d.shapeFlag & 512
            ? S.ctx.activate(d, m, b, j, q)
            : T(d, m, b, S, x, j, q)
          : ne(p, d, q));
    },
    T = (p, d, m, b, S, x, j) => {
      const L = (p.component = Su(p, b, S));
      if ((ol(p) && (L.ctx.renderer = K), wu(L, !1, j), L.asyncDep)) {
        if ((S && S.registerDep(L, Z, j), !p.el)) {
          const q = (L.subTree = H(At));
          (C(null, q, d, m), (p.placeholder = q.el));
        }
      } else Z(L, p, d, m, S, x, j);
    },
    ne = (p, d, m) => {
      const b = (d.component = p.component);
      if (yu(p, d, m))
        if (b.asyncDep && !b.asyncResolved) {
          Y(b, d, m);
          return;
        } else ((b.next = d), b.update());
      else ((d.el = p.el), (b.vnode = d));
    },
    Z = (p, d, m, b, S, x, j) => {
      const L = () => {
        if (p.isMounted) {
          let { next: N, bu: X, u: se, parent: ye, vnode: Ce } = p;
          {
            const dt = wl(p);
            if (dt) {
              (N && ((N.el = Ce.el), Y(p, N, j)),
                dt.asyncDep.then(() => {
                  p.isUnmounted || L();
                }));
              return;
            }
          }
          let Oe = N,
            Ye;
          (Kt(p, !1),
            N ? ((N.el = Ce.el), Y(p, N, j)) : (N = Ce),
            X && ar(X),
            (Ye = N.props && N.props.onVnodeBeforeUpdate) && ht(Ye, ye, N, Ce),
            Kt(p, !0));
          const Xe = ws(p),
            ft = p.subTree;
          ((p.subTree = Xe),
            v(ft, Xe, f(ft.el), O(ft), p, S, x),
            (N.el = Xe.el),
            Oe === null && mu(p, Xe.el),
            se && et(se, S),
            (Ye = N.props && N.props.onVnodeUpdated) &&
              et(() => ht(Ye, ye, N, Ce), S));
        } else {
          let N;
          const { el: X, props: se } = d,
            { bm: ye, m: Ce, parent: Oe, root: Ye, type: Xe } = p,
            ft = pn(d);
          (Kt(p, !1),
            ye && ar(ye),
            !ft && (N = se && se.onVnodeBeforeMount) && ht(N, Oe, d),
            Kt(p, !0));
          {
            Ye.ce &&
              Ye.ce._def.shadowRoot !== !1 &&
              Ye.ce._injectChildStyle(Xe);
            const dt = (p.subTree = ws(p));
            (v(null, dt, m, b, p, S, x), (d.el = dt.el));
          }
          if ((Ce && et(Ce, S), !ft && (N = se && se.onVnodeMounted))) {
            const dt = d;
            et(() => ht(N, Oe, dt), S);
          }
          ((d.shapeFlag & 256 ||
            (Oe && pn(Oe.vnode) && Oe.vnode.shapeFlag & 256)) &&
            p.a &&
            et(p.a, S),
            (p.isMounted = !0),
            (d = m = b = null));
        }
      };
      p.scope.on();
      const q = (p.effect = new qi(L));
      p.scope.off();
      const I = (p.update = q.run.bind(q)),
        ee = (p.job = q.runIfDirty.bind(q));
      ((ee.i = p),
        (ee.id = p.uid),
        (q.scheduler = () => Ho(ee)),
        Kt(p, !0),
        I());
    },
    Y = (p, d, m) => {
      d.component = p;
      const b = p.vnode.props;
      ((p.vnode = d),
        (p.next = null),
        Zc(p, d.props, b, m),
        ru(p, d.children, m),
        Ct(),
        ys(p),
        Rt());
    },
    pe = (p, d, m, b, S, x, j, L, q = !1) => {
      const I = p && p.children,
        ee = p ? p.shapeFlag : 0,
        N = d.children,
        { patchFlag: X, shapeFlag: se } = d;
      if (X > 0) {
        if (X & 128) {
          rt(I, N, m, b, S, x, j, L, q);
          return;
        } else if (X & 256) {
          De(I, N, m, b, S, x, j, L, q);
          return;
        }
      }
      se & 8
        ? (ee & 16 && Me(I, S, x), N !== I && c(m, N))
        : ee & 16
          ? se & 16
            ? rt(I, N, m, b, S, x, j, L, q)
            : Me(I, S, x, !0)
          : (ee & 8 && c(m, ''), se & 16 && V(N, m, b, S, x, j, L, q));
    },
    De = (p, d, m, b, S, x, j, L, q) => {
      ((p = p || un), (d = d || un));
      const I = p.length,
        ee = d.length,
        N = Math.min(I, ee);
      let X;
      for (X = 0; X < N; X++) {
        const se = (d[X] = q ? Bt(d[X]) : mt(d[X]));
        v(p[X], se, m, null, S, x, j, L, q);
      }
      I > ee ? Me(p, S, x, !0, !1, N) : V(d, m, b, S, x, j, L, q, N);
    },
    rt = (p, d, m, b, S, x, j, L, q) => {
      let I = 0;
      const ee = d.length;
      let N = p.length - 1,
        X = ee - 1;
      for (; I <= N && I <= X; ) {
        const se = p[I],
          ye = (d[I] = q ? Bt(d[I]) : mt(d[I]));
        if (wn(se, ye)) v(se, ye, m, null, S, x, j, L, q);
        else break;
        I++;
      }
      for (; I <= N && I <= X; ) {
        const se = p[N],
          ye = (d[X] = q ? Bt(d[X]) : mt(d[X]));
        if (wn(se, ye)) v(se, ye, m, null, S, x, j, L, q);
        else break;
        (N--, X--);
      }
      if (I > N) {
        if (I <= X) {
          const se = X + 1,
            ye = se < ee ? d[se].el : b;
          for (; I <= X; )
            (v(null, (d[I] = q ? Bt(d[I]) : mt(d[I])), m, ye, S, x, j, L, q),
              I++);
        }
      } else if (I > X) for (; I <= N; ) (me(p[I], S, x, !0), I++);
      else {
        const se = I,
          ye = I,
          Ce = new Map();
        for (I = ye; I <= X; I++) {
          const Ze = (d[I] = q ? Bt(d[I]) : mt(d[I]));
          Ze.key != null && Ce.set(Ze.key, I);
        }
        let Oe,
          Ye = 0;
        const Xe = X - ye + 1;
        let ft = !1,
          dt = 0;
        const xn = new Array(Xe);
        for (I = 0; I < Xe; I++) xn[I] = 0;
        for (I = se; I <= N; I++) {
          const Ze = p[I];
          if (Ye >= Xe) {
            me(Ze, S, x, !0);
            continue;
          }
          let pt;
          if (Ze.key != null) pt = Ce.get(Ze.key);
          else
            for (Oe = ye; Oe <= X; Oe++)
              if (xn[Oe - ye] === 0 && wn(Ze, d[Oe])) {
                pt = Oe;
                break;
              }
          pt === void 0
            ? me(Ze, S, x, !0)
            : ((xn[pt - ye] = I + 1),
              pt >= dt ? (dt = pt) : (ft = !0),
              v(Ze, d[pt], m, null, S, x, j, L, q),
              Ye++);
        }
        const as = ft ? lu(xn) : un;
        for (Oe = as.length - 1, I = Xe - 1; I >= 0; I--) {
          const Ze = ye + I,
            pt = d[Ze],
            cs = d[Ze + 1],
            us = Ze + 1 < ee ? cs.el || cs.placeholder : b;
          xn[I] === 0
            ? v(null, pt, m, us, S, x, j, L, q)
            : ft && (Oe < 0 || I !== as[Oe] ? $e(pt, m, us, 2) : Oe--);
        }
      }
    },
    $e = (p, d, m, b, S = null) => {
      const { el: x, type: j, transition: L, children: q, shapeFlag: I } = p;
      if (I & 6) {
        $e(p.component.subTree, d, m, b);
        return;
      }
      if (I & 128) {
        p.suspense.move(d, m, b);
        return;
      }
      if (I & 64) {
        j.move(p, d, m, K);
        return;
      }
      if (j === Ie) {
        n(x, d, m);
        for (let N = 0; N < q.length; N++) $e(q[N], d, m, b);
        n(p.anchor, d, m);
        return;
      }
      if (j === Jr) {
        A(p, d, m);
        return;
      }
      if (b !== 2 && I & 1 && L)
        if (b === 0) (L.beforeEnter(x), n(x, d, m), et(() => L.enter(x), S));
        else {
          const { leave: N, delayLeave: X, afterLeave: se } = L,
            ye = () => {
              p.ctx.isUnmounted ? o(x) : n(x, d, m);
            },
            Ce = () => {
              (x._isLeaving && x[Ic](!0),
                N(x, () => {
                  (ye(), se && se());
                }));
            };
          X ? X(x, ye, Ce) : Ce();
        }
      else n(x, d, m);
    },
    me = (p, d, m, b = !1, S = !1) => {
      const {
        type: x,
        props: j,
        ref: L,
        children: q,
        dynamicChildren: I,
        shapeFlag: ee,
        patchFlag: N,
        dirs: X,
        cacheIndex: se,
      } = p;
      if (
        (N === -2 && (S = !1),
        L != null && (Ct(), An(L, null, m, p, !0), Rt()),
        se != null && (d.renderCache[se] = void 0),
        ee & 256)
      ) {
        d.ctx.deactivate(p);
        return;
      }
      const ye = ee & 1 && X,
        Ce = !pn(p);
      let Oe;
      if ((Ce && (Oe = j && j.onVnodeBeforeUnmount) && ht(Oe, d, p), ee & 6))
        it(p.component, m, b);
      else {
        if (ee & 128) {
          p.suspense.unmount(m, b);
          return;
        }
        (ye && Wt(p, null, d, 'beforeUnmount'),
          ee & 64
            ? p.type.remove(p, d, m, K, b)
            : I && !I.hasOnce && (x !== Ie || (N > 0 && N & 64))
              ? Me(I, d, m, !1, !0)
              : ((x === Ie && N & 384) || (!S && ee & 16)) && Me(q, d, m),
          b && We(p));
      }
      ((Ce && (Oe = j && j.onVnodeUnmounted)) || ye) &&
        et(() => {
          (Oe && ht(Oe, d, p), ye && Wt(p, null, d, 'unmounted'));
        }, m);
    },
    We = p => {
      const { type: d, el: m, anchor: b, transition: S } = p;
      if (d === Ie) {
        Ke(m, b);
        return;
      }
      if (d === Jr) {
        R(p);
        return;
      }
      const x = () => {
        (o(m), S && !S.persisted && S.afterLeave && S.afterLeave());
      };
      if (p.shapeFlag & 1 && S && !S.persisted) {
        const { leave: j, delayLeave: L } = S,
          q = () => j(m, x);
        L ? L(p.el, x, q) : q();
      } else x();
    },
    Ke = (p, d) => {
      let m;
      for (; p !== d; ) ((m = h(p)), o(p), (p = m));
      o(d);
    },
    it = (p, d, m) => {
      const { bum: b, scope: S, job: x, subTree: j, um: L, m: q, a: I } = p;
      (Ss(q),
        Ss(I),
        b && ar(b),
        S.stop(),
        x && ((x.flags |= 8), me(j, p, d, m)),
        L && et(L, d),
        et(() => {
          p.isUnmounted = !0;
        }, d));
    },
    Me = (p, d, m, b = !1, S = !1, x = 0) => {
      for (let j = x; j < p.length; j++) me(p[j], d, m, b, S);
    },
    O = p => {
      if (p.shapeFlag & 6) return O(p.component.subTree);
      if (p.shapeFlag & 128) return p.suspense.next();
      const d = h(p.anchor || p.el),
        m = d && d[Rc];
      return m ? h(m) : d;
    };
  let D = !1;
  const B = (p, d, m) => {
      (p == null
        ? d._vnode && me(d._vnode, null, null, !0)
        : v(d._vnode || null, p, d, null, null, null, m),
        (d._vnode = p),
        D || ((D = !0), ys(), el(), (D = !1)));
    },
    K = {
      p: v,
      um: me,
      m: $e,
      r: We,
      mt: T,
      mc: V,
      pc: pe,
      pbc: ae,
      n: O,
      o: e,
    };
  return { render: B, hydrate: void 0, createApp: Xc(B) };
}
function Gr({ type: e, props: t }, r) {
  return (r === 'svg' && e === 'foreignObject') ||
    (r === 'mathml' &&
      e === 'annotation-xml' &&
      t &&
      t.encoding &&
      t.encoding.includes('html'))
    ? void 0
    : r;
}
function Kt({ effect: e, job: t }, r) {
  r ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function iu(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Sl(e, t, r = !1) {
  const n = e.children,
    o = t.children;
  if (re(n) && re(o))
    for (let s = 0; s < n.length; s++) {
      const i = n[s];
      let l = o[s];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = o[s] = Bt(o[s])), (l.el = i.el)),
        !r && l.patchFlag !== -2 && Sl(i, l)),
        l.type === Ir && l.patchFlag !== -1 && (l.el = i.el),
        l.type === At && !l.el && (l.el = i.el));
    }
}
function lu(e) {
  const t = e.slice(),
    r = [0];
  let n, o, s, i, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
    const u = e[n];
    if (u !== 0) {
      if (((o = r[r.length - 1]), e[o] < u)) {
        ((t[n] = o), r.push(n));
        continue;
      }
      for (s = 0, i = r.length - 1; s < i; )
        ((l = (s + i) >> 1), e[r[l]] < u ? (s = l + 1) : (i = l));
      u < e[r[s]] && (s > 0 && (t[n] = r[s - 1]), (r[s] = n));
    }
  }
  for (s = r.length, i = r[s - 1]; s-- > 0; ) ((r[s] = i), (i = t[i]));
  return r;
}
function wl(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : wl(t);
}
function Ss(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const au = Symbol.for('v-scx'),
  cu = () => Le(au);
function tn(e, t) {
  return Go(e, null, t);
}
function Se(e, t, r) {
  return Go(e, t, r);
}
function Go(e, t, r = ke) {
  const { immediate: n, deep: o, flush: s, once: i } = r,
    l = ze({}, r),
    a = (t && n) || (!t && s !== 'post');
  let u;
  if (Fn) {
    if (s === 'sync') {
      const y = cu();
      u = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {};
      return ((y.stop = gt), (y.resume = gt), (y.pause = gt), y);
    }
  }
  const c = He;
  l.call = (y, g, v) => bt(y, c, g, v);
  let f = !1;
  (s === 'post'
    ? (l.scheduler = y => {
        et(y, c && c.suspense);
      })
    : s !== 'sync' &&
      ((f = !0),
      (l.scheduler = (y, g) => {
        g ? y() : Ho(y);
      })),
    (l.augmentJob = y => {
      (t && (y.flags |= 4),
        f && ((y.flags |= 2), c && ((y.id = c.uid), (y.i = c))));
    }));
  const h = Oc(e, t, l);
  return (Fn && (u ? u.push(h) : a && h()), h);
}
function uu(e, t, r) {
  const n = this.proxy,
    o = Te(e) ? (e.includes('.') ? Ol(n, e) : () => n[e]) : e.bind(n, n);
  let s;
  le(t) ? (s = t) : ((s = t.handler), (r = t));
  const i = Xn(this),
    l = Go(o, s.bind(n), r);
  return (i(), l);
}
function Ol(e, t) {
  const r = t.split('.');
  return () => {
    let n = e;
    for (let o = 0; o < r.length && n; o++) n = n[r[o]];
    return n;
  };
}
const fu = (e, t) =>
  t === 'modelValue' || t === 'model-value'
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
function du(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || ke;
  let o = r;
  const s = t.startsWith('update:'),
    i = s && fu(n, t.slice(7));
  i &&
    (i.trim && (o = r.map(c => (Te(c) ? c.trim() : c))),
    i.number && (o = r.map(lo)));
  let l,
    a = n[(l = lr(t))] || n[(l = lr(st(t)))];
  (!a && s && (a = n[(l = lr(Zt(t)))]), a && bt(a, e, 6, o));
  const u = n[l + 'Once'];
  if (u) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), bt(u, e, 6, o));
  }
}
function kl(e, t, r = !1) {
  const n = t.emitsCache,
    o = n.get(e);
  if (o !== void 0) return o;
  const s = e.emits;
  let i = {},
    l = !1;
  if (!le(e)) {
    const a = u => {
      const c = kl(u, t, !0);
      c && ((l = !0), ze(i, c));
    };
    (!r && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  return !s && !l
    ? (Ae(e) && n.set(e, null), null)
    : (re(s) ? s.forEach(a => (i[a] = null)) : ze(i, s),
      Ae(e) && n.set(e, i),
      i);
}
function Ar(e, t) {
  return !e || !_r(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      xe(e, t[0].toLowerCase() + t.slice(1)) || xe(e, Zt(t)) || xe(e, t));
}
function ws(e) {
  const {
      type: t,
      vnode: r,
      proxy: n,
      withProxy: o,
      propsOptions: [s],
      slots: i,
      attrs: l,
      emit: a,
      render: u,
      renderCache: c,
      props: f,
      data: h,
      setupState: y,
      ctx: g,
      inheritAttrs: v,
    } = e,
    E = yr(e);
  let C, k;
  try {
    if (r.shapeFlag & 4) {
      const R = o || n,
        P = R;
      ((C = mt(u.call(P, R, c, f, y, h, g))), (k = l));
    } else {
      const R = t;
      ((C = mt(
        R.length > 1 ? R(f, { attrs: l, slots: i, emit: a }) : R(f, null),
      )),
        (k = t.props ? l : pu(l)));
    }
  } catch (R) {
    ((Tn.length = 0), Er(R, e, 1), (C = H(At)));
  }
  let A = C;
  if (k && v !== !1) {
    const R = Object.keys(k),
      { shapeFlag: P } = A;
    R.length &&
      P & 7 &&
      (s && R.some(Io) && (k = hu(k, s)), (A = yn(A, k, !1, !0)));
  }
  return (
    r.dirs &&
      ((A = yn(A, null, !1, !0)),
      (A.dirs = A.dirs ? A.dirs.concat(r.dirs) : r.dirs)),
    r.transition && zo(A, r.transition),
    (C = A),
    yr(E),
    C
  );
}
const pu = e => {
    let t;
    for (const r in e)
      (r === 'class' || r === 'style' || _r(r)) && ((t || (t = {}))[r] = e[r]);
    return t;
  },
  hu = (e, t) => {
    const r = {};
    for (const n in e) (!Io(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
    return r;
  };
function yu(e, t, r) {
  const { props: n, children: o, component: s } = e,
    { props: i, children: l, patchFlag: a } = t,
    u = s.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (r && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return n ? Os(n, i, u) : !!i;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let f = 0; f < c.length; f++) {
        const h = c[f];
        if (i[h] !== n[h] && !Ar(u, h)) return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable)
      ? !0
      : n === i
        ? !1
        : n
          ? i
            ? Os(n, i, u)
            : !0
          : !!i;
  return !1;
}
function Os(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let o = 0; o < n.length; o++) {
    const s = n[o];
    if (t[s] !== e[s] && !Ar(r, s)) return !0;
  }
  return !1;
}
function mu({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      (((e = t.vnode).el = r), (t = t.parent));
    else break;
  }
}
const El = e => e.__isSuspense;
function gu(e, t) {
  t && t.pendingBranch
    ? re(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Cc(e);
}
const Ie = Symbol.for('v-fgt'),
  Ir = Symbol.for('v-txt'),
  At = Symbol.for('v-cmt'),
  Jr = Symbol.for('v-stc'),
  Tn = [];
let tt = null;
function _(e = !1) {
  Tn.push((tt = e ? null : []));
}
function _u() {
  (Tn.pop(), (tt = Tn[Tn.length - 1] || null));
}
let Vn = 1;
function ks(e, t = !1) {
  ((Vn += e), e < 0 && tt && t && (tt.hasOnce = !0));
}
function Cl(e) {
  return (
    (e.dynamicChildren = Vn > 0 ? tt || un : null),
    _u(),
    Vn > 0 && tt && tt.push(e),
    e
  );
}
function M(e, t, r, n, o, s) {
  return Cl(U(e, t, r, n, o, s, !0));
}
function $(e, t, r, n, o) {
  return Cl(H(e, t, r, n, o, !0));
}
function Hn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function wn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Rl = ({ key: e }) => e ?? null,
  cr = ({ ref: e, ref_key: t, ref_for: r }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? Te(e) || Pe(e) || le(e)
        ? { i: je, r: e, k: t, f: !!r }
        : e
      : null
  );
function U(
  e,
  t = null,
  r = null,
  n = 0,
  o = null,
  s = e === Ie ? 0 : 1,
  i = !1,
  l = !1,
) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Rl(t),
    ref: t && cr(t),
    scopeId: nl,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: n,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: je,
  };
  return (
    l
      ? (Yo(a, r), s & 128 && e.normalize(a))
      : r && (a.shapeFlag |= Te(r) ? 8 : 16),
    Vn > 0 &&
      !i &&
      tt &&
      (a.patchFlag > 0 || s & 6) &&
      a.patchFlag !== 32 &&
      tt.push(a),
    a
  );
}
const H = vu;
function vu(e, t = null, r = null, n = 0, o = null, s = !1) {
  if (((!e || e === ll) && (e = At), Hn(e))) {
    const l = yn(e, t, !0);
    return (
      r && Yo(l, r),
      Vn > 0 &&
        !s &&
        tt &&
        (l.shapeFlag & 6 ? (tt[tt.indexOf(e)] = l) : tt.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Cu(e) && (e = e.__vccOpts), t)) {
    t = Jo(t);
    let { class: l, style: a } = t;
    (l && !Te(l) && (t.class = _e(l)),
      Ae(a) && (No(a) && !re(a) && (a = ze({}, a)), (t.style = vt(a))));
  }
  const i = Te(e) ? 1 : El(e) ? 128 : Ac(e) ? 64 : Ae(e) ? 4 : le(e) ? 2 : 0;
  return U(e, t, r, n, o, i, s, !0);
}
function Jo(e) {
  return e ? (No(e) || ml(e) ? ze({}, e) : e) : null;
}
function yn(e, t, r = !1, n = !1) {
  const { props: o, ref: s, patchFlag: i, children: l, transition: a } = e,
    u = t ? ve(o || {}, t) : o,
    c = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && Rl(u),
      ref:
        t && t.ref
          ? r && s
            ? re(s)
              ? s.concat(cr(t))
              : [s, cr(t)]
            : cr(t)
          : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: l,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Ie ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && yn(e.ssContent),
      ssFallback: e.ssFallback && yn(e.ssFallback),
      placeholder: e.placeholder,
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (a && n && zo(c, a.clone(c)), c);
}
function Ee(e = ' ', t = 0) {
  return H(Ir, null, e, t);
}
function G(e = '', t = !1) {
  return t ? (_(), $(At, null, e)) : H(At, null, e);
}
function mt(e) {
  return e == null || typeof e == 'boolean'
    ? H(At)
    : re(e)
      ? H(Ie, null, e.slice())
      : Hn(e)
        ? Bt(e)
        : H(Ir, null, String(e));
}
function Bt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : yn(e);
}
function Yo(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (re(t)) r = 16;
  else if (typeof t == 'object')
    if (n & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Yo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      r = 32;
      const o = t._;
      !o && !ml(t)
        ? (t._ctx = je)
        : o === 3 &&
          je &&
          (je.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    le(t)
      ? ((t = { default: t, _ctx: je }), (r = 32))
      : ((t = String(t)), n & 64 ? ((r = 16), (t = [Ee(t)])) : (r = 8));
  ((e.children = t), (e.shapeFlag |= r));
}
function ve(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const o in n)
      if (o === 'class')
        t.class !== n.class && (t.class = _e([t.class, n.class]));
      else if (o === 'style') t.style = vt([t.style, n.style]);
      else if (_r(o)) {
        const s = t[o],
          i = n[o];
        i &&
          s !== i &&
          !(re(s) && s.includes(i)) &&
          (t[o] = s ? [].concat(s, i) : i);
      } else o !== '' && (t[o] = n[o]);
  }
  return t;
}
function ht(e, t, r, n = null) {
  bt(e, t, 7, [r, n]);
}
const bu = pl();
let xu = 0;
function Su(e, t, r) {
  const n = e.type,
    o = (t ? t.appContext : e.appContext) || bu,
    s = {
      uid: xu++,
      vnode: e,
      type: n,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Ii(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : ['', 0, 0],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: _l(n, o),
      emitsOptions: kl(n, o),
      emit: null,
      emitted: null,
      propsDefaults: ke,
      inheritAttrs: n.inheritAttrs,
      ctx: ke,
      data: ke,
      props: ke,
      attrs: ke,
      slots: ke,
      refs: ke,
      setupState: ke,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (s.ctx = { _: s }),
    (s.root = t ? t.root : s),
    (s.emit = du.bind(null, s)),
    e.ce && e.ce(s),
    s
  );
}
let He = null;
const $t = () => He || je;
let gr, mo;
{
  const e = Sr(),
    t = (r, n) => {
      let o;
      return (
        (o = e[r]) || (o = e[r] = []),
        o.push(n),
        s => {
          o.length > 1 ? o.forEach(i => i(s)) : o[0](s);
        }
      );
    };
  ((gr = t('__VUE_INSTANCE_SETTERS__', r => (He = r))),
    (mo = t('__VUE_SSR_SETTERS__', r => (Fn = r))));
}
const Xn = e => {
    const t = He;
    return (
      gr(e),
      e.scope.on(),
      () => {
        (e.scope.off(), gr(t));
      }
    );
  },
  Es = () => {
    (He && He.scope.off(), gr(null));
  };
function Al(e) {
  return e.vnode.shapeFlag & 4;
}
let Fn = !1;
function wu(e, t = !1, r = !1) {
  t && mo(t);
  const { props: n, children: o } = e.vnode,
    s = Al(e);
  (Qc(e, n, s, t), nu(e, o, r || t));
  const i = s ? Ou(e, t) : void 0;
  return (t && mo(!1), i);
}
function Ou(e, t) {
  const r = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, zc)));
  const { setup: n } = r;
  if (n) {
    Ct();
    const o = (e.setupContext = n.length > 1 ? Pl(e) : null),
      s = Xn(e),
      i = Jn(n, e, 0, [e.props, o]),
      l = wi(i);
    if ((Rt(), s(), (l || e.sp) && !pn(e) && rl(e), l)) {
      if ((i.then(Es, Es), t))
        return i
          .then(a => {
            Cs(e, a);
          })
          .catch(a => {
            Er(a, e, 0);
          });
      e.asyncDep = i;
    } else Cs(e, i);
  } else Il(e);
}
function Cs(e, t, r) {
  (le(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Ae(t) && (e.setupState = Ji(t)),
    Il(e));
}
function Il(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || gt);
  {
    const o = Xn(e);
    Ct();
    try {
      Wc(e);
    } finally {
      (Rt(), o());
    }
  }
}
const ku = {
  get(e, t) {
    return (Ve(e, 'get', ''), e[t]);
  },
};
function Pl(e) {
  const t = r => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, ku),
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Pr(e) {
  return e.exposed
    ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(Ji(Vo(e.exposed)), {
          get(t, r) {
            if (r in t) return t[r];
            if (r in In) return In[r](e);
          },
          has(t, r) {
            return r in t || r in In;
          },
        }))
    : e.proxy;
}
function Eu(e, t = !0) {
  return le(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function Cu(e) {
  return le(e) && '__vccOpts' in e;
}
const w = (e, t) => Sc(e, t, Fn);
function Xo(e, t, r) {
  const n = arguments.length;
  return n === 2
    ? Ae(t) && !re(t)
      ? Hn(t)
        ? H(e, null, [t])
        : H(e, t)
      : H(e, null, t)
    : (n > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Hn(r) && (r = [r]),
      H(e, t, r));
}
const Ru = '3.5.20';
/**
 * @vue/runtime-dom v3.5.20
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let go;
const Rs = typeof window < 'u' && window.trustedTypes;
if (Rs)
  try {
    go = Rs.createPolicy('vue', { createHTML: e => e });
  } catch {}
const Tl = go ? e => go.createHTML(e) : e => e,
  Au = 'http://www.w3.org/2000/svg',
  Iu = 'http://www.w3.org/1998/Math/MathML',
  Ot = typeof document < 'u' ? document : null,
  As = Ot && Ot.createElement('template'),
  Pu = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null);
    },
    remove: e => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, r, n) => {
      const o =
        t === 'svg'
          ? Ot.createElementNS(Au, e)
          : t === 'mathml'
            ? Ot.createElementNS(Iu, e)
            : r
              ? Ot.createElement(e, { is: r })
              : Ot.createElement(e);
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          o.setAttribute('multiple', n.multiple),
        o
      );
    },
    createText: e => Ot.createTextNode(e),
    createComment: e => Ot.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Ot.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '');
    },
    insertStaticContent(e, t, r, n, o, s) {
      const i = r ? r.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling))
        for (
          ;
          t.insertBefore(o.cloneNode(!0), r),
            !(o === s || !(o = o.nextSibling));

        );
      else {
        As.innerHTML = Tl(
          n === 'svg'
            ? `<svg>${e}</svg>`
            : n === 'mathml'
              ? `<math>${e}</math>`
              : e,
        );
        const l = As.content;
        if (n === 'svg' || n === 'mathml') {
          const a = l.firstChild;
          for (; a.firstChild; ) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, r);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild,
      ];
    },
  },
  Tu = Symbol('_vtc');
function qu(e, t, r) {
  const n = e[Tu];
  (n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : r
        ? e.setAttribute('class', t)
        : (e.className = t));
}
const Is = Symbol('_vod'),
  Mu = Symbol('_vsh'),
  Lu = Symbol(''),
  Bu = /(^|;)\s*display\s*:/;
function ju(e, t, r) {
  const n = e.style,
    o = Te(r);
  let s = !1;
  if (r && !o) {
    if (t)
      if (Te(t))
        for (const i of t.split(';')) {
          const l = i.slice(0, i.indexOf(':')).trim();
          r[l] == null && ur(n, l, '');
        }
      else for (const i in t) r[i] == null && ur(n, i, '');
    for (const i in r) (i === 'display' && (s = !0), ur(n, i, r[i]));
  } else if (o) {
    if (t !== r) {
      const i = n[Lu];
      (i && (r += ';' + i), (n.cssText = r), (s = Bu.test(r)));
    }
  } else t && e.removeAttribute('style');
  Is in e && ((e[Is] = s ? n.display : ''), e[Mu] && (n.display = 'none'));
}
const Ps = /\s*!important$/;
function ur(e, t, r) {
  if (re(r)) r.forEach(n => ur(e, t, n));
  else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r);
  else {
    const n = Du(e, t);
    Ps.test(r)
      ? e.setProperty(Zt(n), r.replace(Ps, ''), 'important')
      : (e[n] = r);
  }
}
const Ts = ['Webkit', 'Moz', 'ms'],
  Yr = {};
function Du(e, t) {
  const r = Yr[t];
  if (r) return r;
  let n = st(t);
  if (n !== 'filter' && n in e) return (Yr[t] = n);
  n = xr(n);
  for (let o = 0; o < Ts.length; o++) {
    const s = Ts[o] + n;
    if (s in e) return (Yr[t] = s);
  }
  return t;
}
const qs = 'http://www.w3.org/1999/xlink';
function Ms(e, t, r, n, o, s = Ja(t)) {
  n && t.startsWith('xlink:')
    ? r == null
      ? e.removeAttributeNS(qs, t.slice(6, t.length))
      : e.setAttributeNS(qs, t, r)
    : r == null || (s && !Ci(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, s ? '' : It(r) ? String(r) : r);
}
function Ls(e, t, r, n, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    r != null && (e[t] = t === 'innerHTML' ? Tl(r) : r);
    return;
  }
  const s = e.tagName;
  if (t === 'value' && s !== 'PROGRESS' && !s.includes('-')) {
    const l = s === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      a = r == null ? (e.type === 'checkbox' ? 'on' : '') : String(r);
    ((l !== a || !('_value' in e)) && (e.value = a),
      r == null && e.removeAttribute(t),
      (e._value = r));
    return;
  }
  let i = !1;
  if (r === '' || r == null) {
    const l = typeof e[t];
    l === 'boolean'
      ? (r = Ci(r))
      : r == null && l === 'string'
        ? ((r = ''), (i = !0))
        : l === 'number' && ((r = 0), (i = !0));
  }
  try {
    e[t] = r;
  } catch {}
  i && e.removeAttribute(o || t);
}
function an(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Nu(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const Bs = Symbol('_vei');
function Vu(e, t, r, n, o = null) {
  const s = e[Bs] || (e[Bs] = {}),
    i = s[t];
  if (n && i) i.value = n;
  else {
    const [l, a] = Hu(t);
    if (n) {
      const u = (s[t] = $u(n, o));
      an(e, l, u, a);
    } else i && (Nu(e, l, i, a), (s[t] = void 0));
  }
}
const js = /(?:Once|Passive|Capture)$/;
function Hu(e) {
  let t;
  if (js.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(js)); )
      ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
  }
  return [e[2] === ':' ? e.slice(3) : Zt(e.slice(2)), t];
}
let Xr = 0;
const Fu = Promise.resolve(),
  zu = () => Xr || (Fu.then(() => (Xr = 0)), (Xr = Date.now()));
function $u(e, t) {
  const r = n => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= r.attached) return;
    bt(Wu(n, r.value), t, 5, [n]);
  };
  return ((r.value = e), (r.attached = zu()), r);
}
function Wu(e, t) {
  if (re(t)) {
    const r = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (r.call(e), (e._stopped = !0));
      }),
      t.map(n => o => !o._stopped && n && n(o))
    );
  } else return t;
}
const Ds = e =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
  Ku = (e, t, r, n, o, s) => {
    const i = o === 'svg';
    t === 'class'
      ? qu(e, n, i)
      : t === 'style'
        ? ju(e, r, n)
        : _r(t)
          ? Io(t) || Vu(e, t, r, n, s)
          : (
                t[0] === '.'
                  ? ((t = t.slice(1)), !0)
                  : t[0] === '^'
                    ? ((t = t.slice(1)), !1)
                    : Uu(e, t, n, i)
              )
            ? (Ls(e, t, n),
              !e.tagName.includes('-') &&
                (t === 'value' || t === 'checked' || t === 'selected') &&
                Ms(e, t, n, i, s, t !== 'value'))
            : e._isVueCE && (/[A-Z]/.test(t) || !Te(n))
              ? Ls(e, st(t), n, s, t)
              : (t === 'true-value'
                  ? (e._trueValue = n)
                  : t === 'false-value' && (e._falseValue = n),
                Ms(e, t, n, i));
  };
function Uu(e, t, r, n) {
  if (n)
    return !!(
      t === 'innerHTML' ||
      t === 'textContent' ||
      (t in e && Ds(t) && le(r))
    );
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'autocorrect' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1;
  if (t === 'width' || t === 'height') {
    const o = e.tagName;
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE')
      return !1;
  }
  return Ds(t) && Te(r) ? !1 : t in e;
}
const Ns = e => {
  const t = e.props['onUpdate:modelValue'] || !1;
  return re(t) ? r => ar(t, r) : t;
};
function Gu(e) {
  e.target.composing = !0;
}
function Vs(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')));
}
const Qr = Symbol('_assign'),
  Ju = {
    created(e, { modifiers: { lazy: t, trim: r, number: n } }, o) {
      e[Qr] = Ns(o);
      const s = n || (o.props && o.props.type === 'number');
      (an(e, t ? 'change' : 'input', i => {
        if (i.target.composing) return;
        let l = e.value;
        (r && (l = l.trim()), s && (l = lo(l)), e[Qr](l));
      }),
        r &&
          an(e, 'change', () => {
            e.value = e.value.trim();
          }),
        t ||
          (an(e, 'compositionstart', Gu),
          an(e, 'compositionend', Vs),
          an(e, 'change', Vs)));
    },
    mounted(e, { value: t }) {
      e.value = t ?? '';
    },
    beforeUpdate(
      e,
      { value: t, oldValue: r, modifiers: { lazy: n, trim: o, number: s } },
      i,
    ) {
      if (((e[Qr] = Ns(i)), e.composing)) return;
      const l =
          (s || e.type === 'number') && !/^0\d/.test(e.value)
            ? lo(e.value)
            : e.value,
        a = t ?? '';
      l !== a &&
        ((document.activeElement === e &&
          e.type !== 'range' &&
          ((n && t === r) || (o && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  Yu = ['ctrl', 'shift', 'alt', 'meta'],
  Xu = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => 'button' in e && e.button !== 0,
    middle: e => 'button' in e && e.button !== 1,
    right: e => 'button' in e && e.button !== 2,
    exact: (e, t) => Yu.some(r => e[`${r}Key`] && !t.includes(r)),
  },
  Qo = (e, t) => {
    const r = e._withMods || (e._withMods = {}),
      n = t.join('.');
    return (
      r[n] ||
      (r[n] = (o, ...s) => {
        for (let i = 0; i < t.length; i++) {
          const l = Xu[t[i]];
          if (l && l(o, t)) return;
        }
        return e(o, ...s);
      })
    );
  },
  Qu = ze({ patchProp: Ku }, Pu);
let Hs;
function Zu() {
  return Hs || (Hs = ou(Qu));
}
const ef = (...e) => {
  const t = Zu().createApp(...e),
    { mount: r } = t;
  return (
    (t.mount = n => {
      const o = nf(n);
      if (!o) return;
      const s = t._component;
      (!le(s) && !s.render && !s.template && (s.template = o.innerHTML),
        o.nodeType === 1 && (o.textContent = ''));
      const i = r(o, !1, tf(o));
      return (
        o instanceof Element &&
          (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
        i
      );
    }),
    t
  );
};
function tf(e) {
  if (e instanceof SVGElement) return 'svg';
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement)
    return 'mathml';
}
function nf(e) {
  return Te(e) ? document.querySelector(e) : e;
}
function rf(e) {
  return qo() ? (Ti(e), !0) : !1;
}
const Zr = new WeakMap(),
  of = (...e) => {
    var t;
    const r = e[0],
      n = (t = $t()) == null ? void 0 : t.proxy;
    if (n == null && !Wo())
      throw new Error('injectLocal must be called in setup');
    return n && Zr.has(n) && r in Zr.get(n) ? Zr.get(n)[r] : Le(...e);
  },
  sf = typeof window < 'u' && typeof document < 'u';
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope;
const lf = Object.prototype.toString,
  af = e => lf.call(e) === '[object Object]',
  cf = () => {};
function ql(...e) {
  if (e.length !== 1) return Xt(...e);
  const t = e[0];
  return typeof t == 'function' ? Yt(_c(() => ({ get: t, set: cf }))) : he(t);
}
function uf(e, t) {
  function r(...n) {
    return new Promise((o, s) => {
      Promise.resolve(
        e(() => t.apply(this, n), { fn: t, thisArg: this, args: n }),
      )
        .then(o)
        .catch(s);
    });
  }
  return r;
}
const Ml = e => e();
function ff(e = Ml, t = {}) {
  const { initialState: r = 'active' } = t,
    n = ql(r === 'active');
  function o() {
    n.value = !1;
  }
  function s() {
    n.value = !0;
  }
  const i = (...l) => {
    n.value && e(...l);
  };
  return { isActive: Yt(n), pause: o, resume: s, eventFilter: i };
}
function Fs(e) {
  return e.endsWith('rem') ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function eo(e) {
  return Array.isArray(e) ? e : [e];
}
function df(e) {
  return $t();
}
function pf(e, t, r = {}) {
  const { eventFilter: n = Ml, ...o } = r;
  return Se(e, uf(n, t), o);
}
function hf(e, t, r = {}) {
  const { eventFilter: n, initialState: o = 'active', ...s } = r,
    {
      eventFilter: i,
      pause: l,
      resume: a,
      isActive: u,
    } = ff(n, { initialState: o });
  return {
    stop: pf(e, t, { ...s, eventFilter: i }),
    pause: l,
    resume: a,
    isActive: u,
  };
}
function Ll(e, t = !0, r) {
  df() ? ut(e, r) : t ? e() : at(e);
}
function yf(e, t, r) {
  return Se(e, t, { ...r, immediate: !0 });
}
const zn = sf ? window : void 0;
function Bl(e) {
  var t;
  const r = qe(e);
  return (t = r == null ? void 0 : r.$el) != null ? t : r;
}
function _o(...e) {
  const t = [],
    r = () => {
      (t.forEach(l => l()), (t.length = 0));
    },
    n = (l, a, u, c) => (
      l.addEventListener(a, u, c),
      () => l.removeEventListener(a, u, c)
    ),
    o = w(() => {
      const l = eo(qe(e[0])).filter(a => a != null);
      return l.every(a => typeof a != 'string') ? l : void 0;
    }),
    s = yf(
      () => {
        var l, a;
        return [
          (a = (l = o.value) == null ? void 0 : l.map(u => Bl(u))) != null
            ? a
            : [zn].filter(u => u != null),
          eo(qe(o.value ? e[1] : e[0])),
          eo(F(o.value ? e[2] : e[1])),
          qe(o.value ? e[3] : e[2]),
        ];
      },
      ([l, a, u, c]) => {
        if (
          (r(),
          !(l != null && l.length) ||
            !(a != null && a.length) ||
            !(u != null && u.length))
        )
          return;
        const f = af(c) ? { ...c } : c;
        t.push(...l.flatMap(h => a.flatMap(y => u.map(g => n(h, y, g, f)))));
      },
      { flush: 'post' },
    ),
    i = () => {
      (s(), r());
    };
  return (rf(r), i);
}
function mf() {
  const e = Vt(!1),
    t = $t();
  return (
    t &&
      ut(() => {
        e.value = !0;
      }, t),
    e
  );
}
function gf(e) {
  const t = mf();
  return w(() => (t.value, !!e()));
}
const _f = Symbol('vueuse-ssr-width');
function vf() {
  const e = Wo() ? of(_f, null) : null;
  return typeof e == 'number' ? e : void 0;
}
function bf(e, t = {}) {
  const { window: r = zn, ssrWidth: n = vf() } = t,
    o = gf(() => r && 'matchMedia' in r && typeof r.matchMedia == 'function'),
    s = Vt(typeof n == 'number'),
    i = Vt(),
    l = Vt(!1),
    a = u => {
      l.value = u.matches;
    };
  return (
    tn(() => {
      if (s.value) {
        s.value = !o.value;
        const u = qe(e).split(',');
        l.value = u.some(c => {
          const f = c.includes('not all'),
            h = c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),
            y = c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
          let g = !!(h || y);
          return (
            h && g && (g = n >= Fs(h[1])),
            y && g && (g = n <= Fs(y[1])),
            f ? !g : g
          );
        });
        return;
      }
      o.value && ((i.value = r.matchMedia(qe(e))), (l.value = i.value.matches));
    }),
    _o(i, 'change', a, { passive: !0 }),
    w(() => l.value)
  );
}
const or =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  sr = '__vueuse_ssr_handlers__',
  xf = Sf();
function Sf() {
  return (sr in or || (or[sr] = or[sr] || {}), or[sr]);
}
function jl(e, t) {
  return xf[e] || t;
}
function wf(e) {
  return bf('(prefers-color-scheme: dark)', e);
}
function Of(e) {
  return e == null
    ? 'any'
    : e instanceof Set
      ? 'set'
      : e instanceof Map
        ? 'map'
        : e instanceof Date
          ? 'date'
          : typeof e == 'boolean'
            ? 'boolean'
            : typeof e == 'string'
              ? 'string'
              : typeof e == 'object'
                ? 'object'
                : Number.isNaN(e)
                  ? 'any'
                  : 'number';
}
const kf = {
    boolean: { read: e => e === 'true', write: e => String(e) },
    object: { read: e => JSON.parse(e), write: e => JSON.stringify(e) },
    number: { read: e => Number.parseFloat(e), write: e => String(e) },
    any: { read: e => e, write: e => String(e) },
    string: { read: e => e, write: e => String(e) },
    map: {
      read: e => new Map(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e.entries())),
    },
    set: {
      read: e => new Set(JSON.parse(e)),
      write: e => JSON.stringify(Array.from(e)),
    },
    date: { read: e => new Date(e), write: e => e.toISOString() },
  },
  zs = 'vueuse-storage';
function Dl(e, t, r, n = {}) {
  var o;
  const {
      flush: s = 'pre',
      deep: i = !0,
      listenToStorageChanges: l = !0,
      writeDefaults: a = !0,
      mergeDefaults: u = !1,
      shallow: c,
      window: f = zn,
      eventFilter: h,
      onError: y = T => {
        console.error(T);
      },
      initOnMounted: g,
    } = n,
    v = (c ? Vt : he)(typeof t == 'function' ? t() : t),
    E = w(() => qe(e));
  if (!r)
    try {
      r = jl('getDefaultStorage', () => {
        var T;
        return (T = zn) == null ? void 0 : T.localStorage;
      })();
    } catch (T) {
      y(T);
    }
  if (!r) return v;
  const C = qe(t),
    k = Of(C),
    A = (o = n.serializer) != null ? o : kf[k],
    { pause: R, resume: P } = hf(v, T => ae(T), {
      flush: s,
      deep: i,
      eventFilter: h,
    });
  Se(E, () => ce(), { flush: s });
  let te = !1;
  const Q = T => {
      (g && !te) || ce(T);
    },
    V = T => {
      (g && !te) || J(T);
    };
  (f &&
    l &&
    (r instanceof Storage
      ? _o(f, 'storage', Q, { passive: !0 })
      : _o(f, zs, V)),
    g
      ? Ll(() => {
          ((te = !0), ce());
        })
      : ce());
  function z(T, ne) {
    if (f) {
      const Z = { key: E.value, oldValue: T, newValue: ne, storageArea: r };
      f.dispatchEvent(
        r instanceof Storage
          ? new StorageEvent('storage', Z)
          : new CustomEvent(zs, { detail: Z }),
      );
    }
  }
  function ae(T) {
    try {
      const ne = r.getItem(E.value);
      if (T == null) (z(ne, null), r.removeItem(E.value));
      else {
        const Z = A.write(T);
        ne !== Z && (r.setItem(E.value, Z), z(ne, Z));
      }
    } catch (ne) {
      y(ne);
    }
  }
  function ue(T) {
    const ne = T ? T.newValue : r.getItem(E.value);
    if (ne == null)
      return (a && C != null && r.setItem(E.value, A.write(C)), C);
    if (!T && u) {
      const Z = A.read(ne);
      return typeof u == 'function'
        ? u(Z, C)
        : k === 'object' && !Array.isArray(Z)
          ? { ...C, ...Z }
          : Z;
    } else return typeof ne != 'string' ? ne : A.read(ne);
  }
  function ce(T) {
    if (!(T && T.storageArea !== r)) {
      if (T && T.key == null) {
        v.value = C;
        return;
      }
      if (!(T && T.key !== E.value)) {
        R();
        try {
          const ne = A.write(v.value);
          (T === void 0 || (T == null ? void 0 : T.newValue) !== ne) &&
            (v.value = ue(T));
        } catch (ne) {
          y(ne);
        } finally {
          T ? at(P) : P();
        }
      }
    }
  }
  function J(T) {
    ce(T.detail);
  }
  return v;
}
const Ef =
  '*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function Cf(e = {}) {
  const {
      selector: t = 'html',
      attribute: r = 'class',
      initialValue: n = 'auto',
      window: o = zn,
      storage: s,
      storageKey: i = 'vueuse-color-scheme',
      listenToStorageChanges: l = !0,
      storageRef: a,
      emitAuto: u,
      disableTransition: c = !0,
    } = e,
    f = { auto: '', light: 'light', dark: 'dark', ...(e.modes || {}) },
    h = wf({ window: o }),
    y = w(() => (h.value ? 'dark' : 'light')),
    g =
      a ||
      (i == null
        ? ql(n)
        : Dl(i, n, s, { window: o, listenToStorageChanges: l })),
    v = w(() => (g.value === 'auto' ? y.value : g.value)),
    E = jl('updateHTMLAttrs', (R, P, te) => {
      const Q =
        typeof R == 'string'
          ? o == null
            ? void 0
            : o.document.querySelector(R)
          : Bl(R);
      if (!Q) return;
      const V = new Set(),
        z = new Set();
      let ae = null;
      if (P === 'class') {
        const ce = te.split(/\s/g);
        Object.values(f)
          .flatMap(J => (J || '').split(/\s/g))
          .filter(Boolean)
          .forEach(J => {
            ce.includes(J) ? V.add(J) : z.add(J);
          });
      } else ae = { key: P, value: te };
      if (V.size === 0 && z.size === 0 && ae === null) return;
      let ue;
      c &&
        ((ue = o.document.createElement('style')),
        ue.appendChild(document.createTextNode(Ef)),
        o.document.head.appendChild(ue));
      for (const ce of V) Q.classList.add(ce);
      for (const ce of z) Q.classList.remove(ce);
      (ae && Q.setAttribute(ae.key, ae.value),
        c && (o.getComputedStyle(ue).opacity, document.head.removeChild(ue)));
    });
  function C(R) {
    var P;
    E(t, r, (P = f[R]) != null ? P : R);
  }
  function k(R) {
    e.onChanged ? e.onChanged(R, C) : C(R);
  }
  (Se(v, k, { flush: 'post', immediate: !0 }), Ll(() => k(v.value)));
  const A = w({
    get() {
      return u ? g.value : v.value;
    },
    set(R) {
      g.value = R;
    },
  });
  return Object.assign(A, { store: g, system: y, state: v });
}
const Rf =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.15 7.913v1.5h4.377l-6.145 6.144 1.06 1.06 6.146-6.144v4.377h1.5V7.913z"/></svg>',
  Af =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m15.983 8.095-6.22 6.22-2.468-2.47-1.061 1.062 3.53 3.525 7.28-7.28z"/></svg>',
  If =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m16.718 14.123 1.057 1.057-5.782 5.782L6.21 15.18l1.058-1.057 4.717 4.717 4.718-4.717zM12 5.153l4.718 4.717 1.057-1.057-5.782-5.783L6.21 8.813 7.268 9.87l4.717-4.717z"/></svg>',
  Nl =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.25 16.5h1.5V18h-1.5zM12.75 6h-1.5v8.25h1.5z"/><path fill-rule="evenodd" d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21m6.364 16.864A9 9 0 1 1 21 12a8.94 8.94 0 0 1-2.636 6.364" clip-rule="evenodd"/></svg>',
  Pf =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m7.275 11.828 2.465 2.47 6.22-6.22 1.06 1.06-7.28 7.281-3.528-3.53z"/><path fill-rule="evenodd" d="M6.167 3.27a10.5 10.5 0 1 1 11.666 17.46A10.5 10.5 0 0 1 6.167 3.27M7 19.483A9 9 0 0 0 12 21a9.01 9.01 0 0 0 9-9 9 9 0 1 0-14 7.483" clip-rule="evenodd"/></svg>',
  Vl =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.25 6h1.5v1.5h-1.5zm1.5 3.75h-1.5V18h1.5z"/><path fill-rule="evenodd" d="M12 1.5a10.5 10.5 0 1 0 0 21 10.5 10.5 0 0 0 0-21M12 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9" clip-rule="evenodd"/></svg>',
  Hl =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m12 10.94 3.61-3.612 1.062 1.06L13.06 12l3.612 3.61-1.062 1.062L12 13.06l-3.61 3.612-1.062-1.062L10.94 12 7.328 8.389l1.062-1.06z"/><path fill-rule="evenodd" d="M14.049 1.702a10.5 10.5 0 0 1 5.376 2.873 10.466 10.466 0 0 1 0 14.85 10.5 10.5 0 1 1-5.376-17.723m1.394 18.644a9 9 0 0 0 2.92-1.982A9.002 9.002 0 0 0 15.48 3.626a9 9 0 0 0-9.843 2.01 9 9 0 0 0 9.807 14.71" clip-rule="evenodd"/></svg>',
  Tf =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.25 5.25H6v1.5h5.25zM6 8.25h2.25v1.5H6zm8.431 6.128c.272.13.568.196.869.195a2 2 0 0 0 1.659-.88l1.242.841a3.5 3.5 0 0 1-5.638.225l1.172-.936c.187.235.425.425.696.555"/><path fill-rule="evenodd" d="M14.25 8.25h4.5A2.25 2.25 0 0 1 21 10.5v11.56l-3.31-3.31H12a2.25 2.25 0 0 1-2.25-2.25v-3.75H6.31L3 16.06V4.5a2.25 2.25 0 0 1 2.25-2.25H12a2.25 2.25 0 0 1 2.25 2.25zM4.5 12.44l1.19-1.19h4.06v-.75A2.25 2.25 0 0 1 12 8.25h.75V4.5a.75.75 0 0 0-.75-.75H5.25a.75.75 0 0 0-.75.75zm13.81 4.81 1.19 1.19V10.5a.75.75 0 0 0-.75-.75H12a.75.75 0 0 0-.75.75v6a.75.75 0 0 0 .75.75z" clip-rule="evenodd"/></svg>',
  qf =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m21.53 20.47-5.977-5.977a7.512 7.512 0 1 0-1.06 1.06l5.977 5.977zM3.75 9.75a6 6 0 1 1 6 6 6.007 6.007 0 0 1-6-6"/></svg>',
  Tr =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m17.03 8.03-1.06-1.06L12 10.94 8.03 6.97 6.97 8.03 10.94 12l-3.97 3.97 1.06 1.06L12 13.06l3.97 3.97 1.06-1.06L13.06 12z"/></svg>',
  Je = e => ({
    densityClass: w(() => ({ [`onyx-density-${e.density}`]: !!e.density })),
  }),
  Fl = Symbol(),
  nn = Symbol('SKELETON_INJECTED_SYMBOL'),
  zl = e => t =>
    w(() =>
      typeof t.skeleton != 'symbol'
        ? t.skeleton
        : t.skeleton === nn && (e == null ? void 0 : e.skeleton) === !0
          ? 3
          : !1,
    ),
  Mf = e => Pn(Fl, zl(e)),
  Lf = zl(),
  Qn = e => Le(Fl, Lf)(e),
  qn = e => {
    const t = Xt(e.props, e.key),
      r = () => (typeof e.default == 'function' ? e.default() : e.default),
      n = he(r());
    Se(t, s => (n.value = s));
    const o = w({
      get: () => t.value ?? n.value ?? r(),
      set: s => {
        s !== o.value && ((n.value = s), e.emit(`update:${e.key}`, s));
      },
    });
    return o;
  },
  de = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, o] of t) r[n] = o;
    return r;
  },
  Bf = oe({
    __name: 'OnyxIcon',
    props: {
      size: { type: null, required: !1 },
      icon: { type: String, required: !0 },
      color: { type: null, required: !1 },
      inline: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const n = { props: e };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  jf = ['innerHTML'];
function Df(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'figure',
      {
        class: _e({
          'onyx-component': !0,
          'onyx-icon': !0,
          'onyx-icon--inline': n.props.inline,
          [`onyx-icon--${n.props.size}`]: n.props.size,
          [`onyx-icon--${n.props.color}`]: n.props.color,
        }),
        'aria-hidden': 'true',
        innerHTML: n.props.icon,
      },
      null,
      10,
      jf,
    )
  );
}
const nt = de(Bf, [
    ['render', Df],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxIcon/OnyxIcon.vue',
    ],
  ]),
  vo = new Set(),
  Nf = 200,
  Vf =
    globalThis.window && 'requestIdleCallback' in globalThis.window
      ? globalThis.window.requestIdleCallback
      : (e, t) => setTimeout(e, 0),
  Hf = e => {
    'getAnimations' in document &&
      (vo.delete(e),
      document
        .getAnimations()
        .filter(t => 'animationName' in t && t.animationName === e)
        .forEach(t => (t.startTime = 0)));
  },
  Ff = e => {
    vo.has(e) || (vo.add(e), Vf(() => Hf(e), { timeout: Nf }));
  },
  zf = oe({
    __name: 'OnyxSkeleton',
    setup(e, { expose: t }) {
      (t(), ut(() => Ff('onyx-skeleton')));
      const r = {};
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  $f = { 'aria-hidden': 'true', class: 'onyx-component onyx-skeleton' };
function Wf(e, t, r, n, o, s) {
  return (_(), M('figure', $f));
}
const vn = de(zf, [
    ['render', Wf],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSkeleton/OnyxSkeleton.vue',
    ],
  ]),
  Kf = {
    date: { dateStyle: 'medium' },
    'datetime-local': { dateStyle: 'medium', timeStyle: 'short' },
    time: { timeStyle: 'short' },
    timestamp: {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'shortOffset',
    },
  },
  Uf = '(optional)',
  Gf = 'Cancel',
  Jf = 'Apply',
  Yf = 'Back',
  Xf = 'Close',
  Qf = 'Now',
  Zf = { label: 'Breadcrumb navigation', home: 'Home' },
  ed = {
    head: {
      selection: {
        selectAll: 'Select all rows',
        deselectAll: 'Deselect all rows',
        select: "Add row with ID '{id}' to the selection.",
        deselect: "Remove row with ID '{id}' from the selection.",
      },
      sorting: {
        action: {
          asc: 'Sort the table ascending by the {field} column.',
          desc: 'Sort the table descending by the {field} column.',
          none: 'Reset sorting.',
        },
        menu: {
          asc: 'Sort ascending',
          desc: 'Sort descending',
          none: 'No sorting',
        },
      },
      filtering: {
        removeLabel: 'Remove search term for column {column}',
        menu: { label: 'Search column {column}', placeholder: 'Search column' },
      },
      hideColumns: {
        revealFlyout: 'List of hidden columns',
        revealTrigger: 'Show hidden columns',
        menu: { hideButton: 'Hide column' },
      },
    },
    loadMore: 'Load more',
  },
  td = {
    tooShort: {
      preview: 'Too short, minimum {minLength} characters required',
      fullError:
        'Make the input at least {minLength} characters long. It is currently {n} characters long. Special characters might use more than one character.',
    },
    tooLong: {
      preview: 'Too long, maximum {maxLength} characters allowed',
      fullError:
        'Shorten the input to {maxLength} characters or less. It is currently {n} characters long. Special characters might use more than one character.',
    },
    rangeUnderflow: {
      preview: 'Too low',
      fullError: 'Input value must be greater than or equal to {min}.',
    },
    rangeOverflow: {
      preview: 'Too high',
      fullError: 'Input value must be less than or equal to {max}.',
    },
    patternMismatch: {
      preview: 'Invalid format',
      fullError: 'Please match the format requested.',
    },
    valueMissing: {
      preview: 'Required',
      fullError: 'The field is empty, it is mandatory and must be filled in.',
    },
    stepMismatch: {
      preview: 'Invalid number',
      fullError: 'Please enter a valid number, that is a multiple of {step}.',
    },
    badInput: {
      preview: 'Invalid input',
      fullError: '"{value}" does not match the expected type.',
    },
    typeMismatch: {
      generic: {
        preview: 'Invalid input type',
        fullError: '"{value}" does not match the expected type.',
      },
      email: {
        preview: 'Invalid mail',
        fullError: `"{value}" is not a valid email address. It should be similar to "johndoe{'@'}example.com" (Must contain one {'@'} symbol and a period).`,
      },
      number: {
        preview: 'Invalid number',
        fullError:
          '"{value}" is not a valid number. Make sure it contains only digits, and optionally a single decimal point.',
      },
      tel: {
        preview: 'Invalid phone number',
        fullError: '"{value}" is not a valid phone number.',
      },
      url: {
        preview: 'Invalid URL',
        fullError:
          '"{value}" is not a valid URL. A URL usually points to a website and should be similar to "https://www.example.com".',
      },
    },
  },
  nd = {
    toggleDropDown: 'Toggle selection popover',
    empty: 'No data available',
    noMatch: 'No item matches your search',
    searchInputLabel: 'Filter the list items',
    clearSearch: 'Clear search filter',
    searchPlaceholder: 'Search',
  },
  rd = {
    selectAll: 'Select all',
    selectGroup: 'Selected',
    currentSelection: '{n} selected',
  },
  od = {
    decrement: 'Decrement by {stepSize}',
    increment: 'Increment by {stepSize}',
  },
  sd = { empty: 'This table is empty.' },
  id = { opensExternally: '(opens in a new tab)' },
  ld = 'Subpages of {label}',
  ad = {
    appLogo: 'App logo of {appName}',
    goToHome: 'Go to home page',
    goBack: 'Go back',
    moreNavItems: '+{n} More',
    showMoreNavItemsLabel: 'Show more items',
    userMenuLabel: 'User options',
    toggleBurgerMenu: 'Toggle burger menu',
    toggleContextMenu: 'Toggle context menu',
    navigationHeadline: 'Navigation',
    moreActionsFlyout: 'Choose an action for the column "{column}"',
    moreActionsTrigger: 'Toggle column actions',
  },
  cd = {
    neutral: 'Toggle info tooltip',
    danger: 'Toggle error tooltip',
    success: 'Toggle success tooltip',
  },
  ud = {
    headline: 'Change appearance',
    subtitle: 'Select the appearance of the application:',
    appearance: 'Appearance',
    auto: {
      label: 'Auto',
      description:
        'The application automatically adapts its appearance to your system settings.',
    },
    light: {
      label: 'Light',
      description:
        'Light mode provides optimal contrast for bright environments.',
    },
    dark: {
      label: 'Dark',
      description: 'This color mode is optimized for darker environments.',
    },
  },
  fd = {
    label: 'Pagination',
    ofPages: 'of 1 page | of {n} pages',
    previous: 'previous page',
    next: 'next page',
    select: { label: 'Page selection', listLabel: 'Available pages' },
  },
  dd = {
    clear: 'Clear input',
    showPassword: 'Show Password',
    hidePassword: 'Hide Password',
  },
  pd = { close: 'Close dialog' },
  hd = {
    copyLink: 'Copy link to this headline',
    copyLinkTo: 'Copy link to headline:',
  },
  yd = { ariaLabel: 'Avatar of {fullName}' },
  md = {
    clickToAdd: 'Add {label} filter',
    clickToRemove: 'Remove {label} filter',
  },
  gd = {
    label: 'Language',
    headline: 'Change language',
    subtitle: 'Select the language of the application:',
  },
  _d = { moreActions: 'More actions', toggleActions: 'Toggle actions' },
  vd = { label: 'Drag to change width' },
  bd = {
    select: 'Select',
    clickToUpload: 'Click to select',
    orDragAndDrop: 'or drag and drop file',
    maxFileSize: 'Maximum file size',
    inTotal: 'in total',
    maxFileCount: 'Maximum {n} files to select in total',
    allowedFileTypes: 'Allowed file types: {types}',
  },
  bo = {
    optional: Uf,
    cancel: Gf,
    apply: Jf,
    back: Yf,
    close: Xf,
    now: Qf,
    breadcrumb: Zf,
    dataGrid: ed,
    validations: td,
    select: nd,
    selections: rd,
    stepper: od,
    table: sd,
    link: id,
    navItemOptionsLabel: ld,
    navigation: ad,
    tooltip: cd,
    colorScheme: ud,
    pagination: fd,
    input: dd,
    dialog: pd,
    headline: hd,
    avatar: yd,
    filterTag: md,
    languageSelect: gd,
    notificationCard: _d,
    resizeHandle: vd,
    fileUpload: bd,
  },
  xd = { decimal: { style: 'decimal' } },
  $l = Symbol(),
  Wl = (e = {}) => {
    const t = Yt(Xt((e == null ? void 0 : e.locale) ?? 'en-US')),
      r = w(() =>
        e != null && e.messages && t.value in e.messages
          ? e.messages[t.value]
          : bo,
      ),
      n = w(() => (i, l = {}) => {
        let a = $s(i, r.value) ?? $s(i, bo) ?? '';
        return ((a = wd(a, l.n)), Od(a, l));
      }),
      o = w(
        () => (i, l) =>
          new Intl.DateTimeFormat(
            t.value,
            typeof l == 'object' || l === void 0 ? l : Kf[l],
          ).format(new Date(i)),
      ),
      s = w(
        () => (i, l) =>
          new Intl.NumberFormat(
            t.value,
            typeof l == 'object' || l === void 0 ? l : xd[l],
          ).format(i),
      );
    return { t: e.t ? Yt(Xt(e.t)) : n, locale: t, d: o, n: s };
  },
  Sd = (e, t) => {
    const r = Wl(t);
    return (e.provide($l, r), r);
  },
  Qe = () => Le($l, () => Wl(), !0),
  $s = (e, t) => {
    const r = e
      .split('.')
      .reduce((n, o) => (!n || typeof n == 'string' ? n : n[o]), t);
    return r && typeof r == 'string' ? r : void 0;
  },
  wd = (e, t) => {
    const r = e.split(' | ').map(o => o.trim());
    if (r.length <= 1) return e;
    let n = 1;
    return (
      t === 0 && (n = 0),
      t && (t <= 0 || t > 1) && (n = 2),
      r.length === 2 ? (n === 1 ? r[0] : r[1]) : r[n]
    );
  },
  Od = (e, t) => {
    if (!t) return e;
    let r = Object.entries(t).reduce(
      (n, [o, s]) =>
        s === void 0 ? n : n.replace(new RegExp(`{${o}}`, 'gi'), s.toString()),
      e,
    );
    return ((r = r.replace(/{'(.*?)'}/g, '$1')), r.replace(/{.*}\s?/gi, ''));
  },
  qr = e => e,
  kd = (e, t) => Object.entries(e).every(([r, n]) => t[r] === n),
  Ed = (e, t) =>
    typeof t == 'string'
      ? e.key === t
      : kd({ altKey: !1, ctrlKey: !1, metaKey: !1, shiftKey: !1, ...t }, e),
  Cd = new Intl.Segmenter('en-US'),
  xo = e => [...Cd.segment(e)].length === 1,
  mn = en(new Map()),
  Rd = (e, t) => {
    if (t != null && t.size) {
      mn.set(e, t);
      return;
    }
    (mn.delete(e), document.removeEventListener(e, Kl));
  },
  Ws = (e, t) => {
    const r = mn.get(e);
    (r == null || r.delete(t), Rd(e, r));
  },
  Ad = (e, t) => {
    const r = mn.get(e) ?? new Set();
    (r.add(t), mn.set(e, r), document.addEventListener(e, Kl));
  },
  Kl = e => {
    var r;
    const t = e.type;
    (r = mn.get(t)) == null || r.forEach(n => n(e));
  },
  $n = ({ type: e, listener: t, disabled: r }) => {
    (hn(() => tn(() => (r != null && r.value ? Ws(e, t) : Ad(e, t)))),
      Rr(() => Ws(e, t)));
  },
  Ul = ({ inside: e, onOutsideClick: t, disabled: r, checkOnTab: n }) => {
    const o = i => {
      if (!i) return !0;
      const l = qe(e);
      return !(Array.isArray(l) ? l : [l]).some(u =>
        u == null ? void 0 : u.contains(i),
      );
    };
    ($n({
      type: 'mousedown',
      listener: i => {
        o(i.target) && t(i);
      },
      disabled: r,
    }),
      n &&
        $n({
          type: 'keydown',
          listener: async l => {
            l.key === 'Tab' &&
              (await new Promise(a => setTimeout(a)),
              o(document.activeElement) && t(l));
          },
          disabled: r,
        }));
  },
  Id = (e, t) => {
    let r;
    const n = (...o) => {
      (clearTimeout(r), (r = setTimeout(() => e(...o), qe(t))));
    };
    return ((n.abort = () => clearTimeout(r)), n);
  },
  Gl = (e, t = 500) => {
    let r = '';
    const n = Id(() => (r = ''), t);
    return o => {
      xo(o.key) && (n(), (r = `${r}${o.key}`), e(r));
    };
  },
  Pd = qr(e => {
    const t = w(() => F(e.multiple) ?? !1),
      r = w(() => F(e.isExpanded) ?? !1),
      n = new Map(),
      o = u => (n.has(u) || n.set(u, Pt()), n.get(u)),
      s = he(!1);
    tn(async () => {
      var c;
      if (
        !r.value ||
        e.activeOption.value == null ||
        (!s.value && !e.controlled)
      )
        return;
      const u = o(e.activeOption.value);
      (await at(),
        (c = document.getElementById(u)) == null ||
          c.scrollIntoView({ block: 'nearest', inline: 'nearest' }));
    });
    const i = Gl(u => {
        var c;
        return (c = e.onTypeAhead) == null ? void 0 : c.call(e, u);
      }),
      l = u => {
        var c, f, h, y, g, v, E;
        switch (u.key) {
          case ' ':
            (u.preventDefault(),
              e.activeOption.value != null &&
                ((c = e.onSelect) == null || c.call(e, e.activeOption.value)));
            break;
          case 'ArrowUp':
            if ((u.preventDefault(), e.activeOption.value == null)) {
              (f = e.onActivateLast) == null || f.call(e);
              return;
            }
            (h = e.onActivatePrevious) == null ||
              h.call(e, e.activeOption.value);
            break;
          case 'ArrowDown':
            if ((u.preventDefault(), e.activeOption.value == null)) {
              (y = e.onActivateFirst) == null || y.call(e);
              return;
            }
            (g = e.onActivateNext) == null || g.call(e, e.activeOption.value);
            break;
          case 'Home':
            (u.preventDefault(), (v = e.onActivateFirst) == null || v.call(e));
            break;
          case 'End':
            (u.preventDefault(), (E = e.onActivateLast) == null || E.call(e));
            break;
          default:
            i(u);
        }
      };
    return {
      elements: {
        listbox: w(() =>
          e.controlled
            ? {
                role: 'listbox',
                'aria-multiselectable': t.value,
                'aria-label': F(e.label),
                'aria-description': e.description,
                tabindex: '-1',
              }
            : {
                role: 'listbox',
                'aria-multiselectable': t.value,
                'aria-label': F(e.label),
                'aria-description': e.description,
                tabindex: '0',
                'aria-activedescendant':
                  e.activeOption.value != null
                    ? o(e.activeOption.value)
                    : void 0,
                onFocus: () => (s.value = !0),
                onBlur: () => (s.value = !1),
                onKeydown: l,
              },
        ),
        group: w(() => u => ({ role: 'group', 'aria-label': u.label })),
        option: w(() => u => {
          const c = u.selected ?? !1;
          return {
            id: o(u.value),
            role: 'option',
            'aria-label': u.label,
            'aria-disabled': u.disabled,
            'aria-checked': t.value ? c : void 0,
            'aria-selected': t.value ? void 0 : c,
            onClick: () => {
              var f;
              return (
                !u.disabled &&
                ((f = e.onSelect) == null ? void 0 : f.call(e, u.value))
              );
            },
          };
        }),
      },
      state: { isFocused: s },
      internals: { getOptionId: o },
    };
  }),
  Jl = ['ArrowDown', 'ArrowUp', ' ', 'Enter', 'Home', 'End'],
  Yl = ['Escape', { key: 'ArrowUp', altKey: !0 }, 'Enter', 'Tab'],
  Ks = ['Enter'],
  Td = (e, t) => {
    const r = t ? [...Ks, ' '] : Ks;
    return So(e, r);
  },
  So = (e, t) => t.some(r => Ed(e, r)),
  qd = qr(
    ({
      autocomplete: e,
      onAutocomplete: t,
      onTypeAhead: r,
      multiple: n,
      label: o,
      listLabel: s,
      listDescription: i,
      isExpanded: l,
      activeOption: a,
      onToggle: u,
      onSelect: c,
      onActivateFirst: f,
      onActivateLast: h,
      onActivateNext: y,
      onActivatePrevious: g,
      templateRef: v,
    }) => {
      const E = Pt(),
        C = w(() => F(e)),
        k = w(() => F(l)),
        A = w(() => F(n)),
        R = T => {
          const ne = T.target;
          C.value !== 'none' && (t == null || t(ne.value));
        },
        P = Gl(T => (r == null ? void 0 : r(T))),
        te = T => {
          (c == null || c(T), F(A) || u == null || u());
        },
        Q = T => {
          switch (T.key) {
            case 'ArrowUp':
              if ((T.preventDefault(), a.value == null))
                return h == null ? void 0 : h();
              g == null || g(a.value);
              break;
            case 'ArrowDown':
              if ((T.preventDefault(), a.value == null))
                return f == null ? void 0 : f();
              y == null || y(a.value);
              break;
            case 'Home':
              (T.preventDefault(), f == null || f());
              break;
            case 'End':
              (T.preventDefault(), h == null || h());
              break;
          }
        },
        V = T => {
          if ((T.key === 'Enter' && T.preventDefault(), !k.value && So(T, Jl)))
            return (
              u == null || u(),
              T.key === ' ' && T.preventDefault(),
              T.key === 'End'
                ? h == null
                  ? void 0
                  : h()
                : f == null
                  ? void 0
                  : f()
            );
          if (Td(T, C.value === 'none')) return te(a.value);
          if (k.value && So(T, Yl)) return u == null ? void 0 : u();
          if (C.value === 'none' && xo(T.key))
            return (!k.value && (u == null || u()), P(T));
          if (C.value !== 'none' && xo(T.key)) {
            !k.value && (u == null || u());
            return;
          }
          return Q(T);
        },
        z = w(() =>
          C.value === 'none'
            ? null
            : { 'aria-autocomplete': C.value, type: 'text' },
        ),
        {
          elements: { option: ae, group: ue, listbox: ce },
          internals: { getOptionId: J },
        } = Pd({
          label: s,
          description: i,
          multiple: A,
          controlled: !0,
          activeOption: a,
          isExpanded: k,
          onSelect: te,
        });
      return (
        Ul({
          inside: v,
          onOutsideClick() {
            k.value && (u == null || u(!0));
          },
        }),
        {
          elements: {
            option: ae,
            group: ue,
            listbox: w(() => ({
              ...ce.value,
              id: E,
              onMousedown: T => T.preventDefault(),
            })),
            input: w(() => ({
              role: 'combobox',
              'aria-expanded': k.value,
              'aria-controls': E,
              'aria-label': F(o),
              'aria-activedescendant': a.value != null ? J(a.value) : void 0,
              onInput: R,
              onKeydown: V,
              ...z.value,
            })),
            button: w(() => ({
              tabindex: '-1',
              onClick: () => (u == null ? void 0 : u()),
            })),
          },
        }
      );
    },
  ),
  Xl = ({ isExpanded: e }) =>
    $n({
      type: 'keydown',
      listener: t => {
        t.key === 'Escape' && (e.value = !1);
      },
      disabled: w(() => !e.value),
    }),
  Md = qr(({ toggleLabel: e, isVisible: t }) => {
    const r = Pt(),
      n = Xt(t ?? !1);
    Xl({ isExpanded: n });
    const o = () => (n.value = !n.value);
    return {
      elements: {
        trigger: w(() => ({ id: r, onClick: o, 'aria-label': qe(e) })),
        tooltip: {
          onToggle: s => {
            const i = s.target;
            n.value = i.matches(':popover-open');
          },
          anchor: r,
          popover: 'auto',
          role: 'status',
          tabindex: '-1',
        },
      },
      state: { isVisible: n },
    };
  }),
  Ld = qr(({ debounce: e, isVisible: t }) => {
    const r = Pt(),
      n = Xt(t ?? !1);
    let o;
    const s = w({
        get: () => n.value,
        set: l => {
          (clearTimeout(o),
            (o = setTimeout(() => {
              n.value = l;
            }, qe(e))));
        },
      }),
      i = {
        onMouseover: () => (s.value = !0),
        onMouseout: () => (s.value = !1),
        onFocusin: () => (n.value = !0),
        onFocusout: () => (n.value = !1),
      };
    return (
      Xl({ isExpanded: n }),
      {
        elements: {
          trigger: { 'aria-describedby': r, ...i },
          tooltip: {
            popover: 'manual',
            role: 'tooltip',
            id: r,
            tabindex: '-1',
            ...i,
          },
        },
        state: { isVisible: n },
      }
    );
  }),
  Bd = oe({
    __name: 'OnyxDialog',
    props: {
      density: { type: null, required: !1 },
      label: { type: String, required: !0 },
      open: { type: Boolean, required: !1, default: !1 },
      modal: { type: Boolean, required: !1, default: !1 },
      disableClosingOnBackdropClick: {
        type: Boolean,
        required: !1,
        default: !1,
      },
      alert: { type: Boolean, required: !1, default: !1 },
      alignment: { type: null, required: !1, default: 'center' },
    },
    emits: ['close'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        s = Fe('dialogRef'),
        { densityClass: i } = Je(n),
        l = () => {
          var c, f;
          n.modal
            ? (c = s.value) == null || c.showModal()
            : (f = s.value) == null || f.show();
        };
      (Se([s, () => n.open], () => {
        var c;
        n.open ? l() : (c = s.value) == null || c.close();
      }),
        Se(
          () => n.modal,
          () => {
            var c;
            (c = s.value) != null && c.open && (s.value.close(), l());
          },
        ));
      const a = Fe('contentRef');
      Ul({
        inside: a,
        disabled: w(() => !n.modal || n.disableClosingOnBackdropClick),
        onOutsideClick: () => o('close'),
      });
      const u = {
        props: n,
        emit: o,
        dialog: s,
        densityClass: i,
        openDialog: l,
        content: a,
      };
      return (
        Object.defineProperty(u, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        u
      );
    },
  }),
  jd = ['aria-modal', 'aria-label', 'role'],
  Dd = { ref: 'contentRef', class: 'onyx-dialog__content' };
function Nd(e, t, r, n, o, s) {
  return n.props.open
    ? (_(),
      M(
        'dialog',
        {
          key: 0,
          ref: 'dialogRef',
          class: _e([
            'onyx-component',
            'onyx-dialog',
            n.densityClass,
            'onyx-truncation-multiline',
            n.props.alignment !== 'center'
              ? `onyx-dialog--${n.props.alignment}`
              : '',
          ]),
          'aria-modal': n.props.modal,
          'aria-label': n.props.label,
          role: n.props.alert ? 'alertdialog' : void 0,
          onCancel: t[0] || (t[0] = Qo(i => n.emit('close'), ['prevent'])),
        },
        [U('div', Dd, [ie(e.$slots, 'default')], 512)],
        42,
        jd,
      ))
    : G('v-if', !0);
}
const Vd = de(Bd, [
    ['render', Nd],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxDialog/OnyxDialog.vue',
    ],
  ]),
  Hd = (e, t) => {
    const r = Us(e.toLowerCase()),
      n = Us(t.toLowerCase());
    return r.includes(n);
  },
  Us = e => e.normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
  Fd = e => e.trim().toLowerCase().replace(/\W/gi, '-'),
  Ql = e => !URL.canParse(e),
  Zl = e => (typeof e == 'string' ? { href: e } : e),
  zd = () => {
    const e = Le(ea, void 0),
      t = w(() => {
        if (!e) return;
        const o = F(e.currentRoute);
        return typeof o == 'string' ? { path: o } : o;
      }),
      r = (o, s) => {
        e && Ql(s) && $d(o) && (o.preventDefault(), e.push(s));
      },
      n = w(() => o => {
        if (!t.value || o == null) return !1;
        const s = Gs(Zl(o).href),
          i = Gs(t.value.path),
          { hash: l } = t.value;
        return s === '/' ? i === s : l && l === s ? !0 : i.startsWith(s);
      });
    return { navigate: r, currentRoute: t, isActive: n };
  },
  $d = e => {
    if (
      !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
      !e.defaultPrevented &&
      !(e.button !== void 0 && e.button !== 0)
    ) {
      if (e.currentTarget && e.currentTarget instanceof Element) {
        const t = e.currentTarget.getAttribute('target'),
          r = e.currentTarget.getAttribute('href');
        if (t === '_blank' || (r != null && r.startsWith('#'))) return;
      }
      return !0;
    }
  },
  Gs = e => {
    const t = e.trim();
    return t === '' ? '/' : t === '/' ? t : t.replace(/\/+$/, '');
  },
  ea = Symbol(),
  Wd = oe({
    __name: 'OnyxVisuallyHidden',
    props: { is: { type: String, required: !1, default: 'span' } },
    setup(e, { expose: t }) {
      t();
      const n = { props: e };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  });
function Kd(e, t, r, n, o, s) {
  return (
    _(),
    $(
      Yn(n.props.is),
      { class: 'onyx-component onyx-visually-hidden' },
      { default: W(() => [ie(e.$slots, 'default')]), _: 3 },
    )
  );
}
const Zn = de(Wd, [
    ['render', Kd],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxVisuallyHidden/OnyxVisuallyHidden.vue',
    ],
  ]),
  Ud = oe({
    __name: 'OnyxRouterLink',
    props: {
      href: { type: String, required: !0 },
      target: { type: null, required: !1, default: '_self' },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { t: n } = Qe(),
        { navigate: o, isActive: s } = zd(),
        i = {
          props: r,
          t: n,
          navigate: o,
          isActive: s,
          OnyxVisuallyHidden: Zn,
        };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Gd = ['href', 'target', 'rel'];
function Jd(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'a',
      {
        class: _e([
          'onyx-component',
          'onyx-router-link',
          n.isActive(n.props.href) ? 'onyx-router-link--active' : '',
        ]),
        href: n.props.href,
        target: n.props.target,
        rel: n.props.target === '_blank' ? 'noreferrer' : void 0,
        onClick: t[0] || (t[0] = i => n.navigate(i, n.props.href)),
      },
      [
        ie(e.$slots, 'default'),
        n.props.target === '_blank'
          ? (_(),
            $(
              n.OnyxVisuallyHidden,
              { key: 0 },
              {
                default: W(() => [Ee(fe(n.t('link.opensExternally')), 1)]),
                _: 1,
              },
            ))
          : G('v-if', !0),
      ],
      10,
      Gd,
    )
  );
}
const Zo = de(Ud, [
    ['render', Jd],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxRouterLink/OnyxRouterLink.vue',
    ],
  ]),
  Yd = oe({
    __name: 'OnyxHeadline',
    props: {
      is: { type: null, required: !0 },
      showAs: { type: null, required: !1 },
      hash: { type: String, required: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { t: n } = Qe(),
        o = Qn(r),
        s = w(() => (r.hash ? Fd(r.hash) : void 0)),
        i = w(() => r.showAs ?? r.is),
        a = {
          props: r,
          t: n,
          skeleton: o,
          normalizedHash: s,
          showAs: i,
          copyLink: async u => {
            const { origin: c, pathname: f, search: h } = window.location,
              y = `${c}${f}${h}#${u}`;
            await navigator.clipboard.writeText(y);
          },
          OnyxRouterLink: Zo,
          OnyxSkeleton: vn,
          OnyxVisuallyHidden: Zn,
        };
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  });
function Xd(e, t, r, n, o, s) {
  return n.skeleton
    ? (_(),
      $(
        n.OnyxSkeleton,
        {
          key: 0,
          class: _e([
            'onyx-headline-skeleton',
            `onyx-headline-skeleton--${n.showAs}`,
          ]),
        },
        null,
        8,
        ['class'],
      ))
    : (_(),
      $(
        Yn(n.props.is),
        {
          key: 1,
          id: n.normalizedHash,
          class: _e([
            'onyx-component',
            'onyx-headline',
            `onyx-headline--${n.showAs}`,
          ]),
        },
        {
          default: W(() => [
            n.normalizedHash
              ? (_(),
                $(
                  n.OnyxRouterLink,
                  {
                    key: 0,
                    href: `#${n.normalizedHash}`,
                    target: '_self',
                    class: 'onyx-headline__hash',
                    title: n.t('headline.copyLink'),
                    onClick: t[0] || (t[0] = i => n.copyLink(n.normalizedHash)),
                  },
                  {
                    default: W(() => [
                      H(n.OnyxVisuallyHidden, null, {
                        default: W(() => [
                          Ee(fe(n.t('headline.copyLinkTo')), 1),
                        ]),
                        _: 1,
                      }),
                      ie(e.$slots, 'default'),
                    ]),
                    _: 3,
                  },
                  8,
                  ['href', 'title'],
                ))
              : ie(e.$slots, 'default', { key: 1 }),
          ]),
          _: 3,
        },
        8,
        ['id', 'class'],
      ));
}
const xt = de(Yd, [
    ['render', Xd],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxHeadline/OnyxHeadline.vue',
    ],
  ]),
  es = (e, t) => {
    t.autofocus &&
      ut(() => {
        var r;
        if (!t.loading) {
          (r = e.value) == null || r.focus();
          return;
        }
        Se(
          () => !!t.loading,
          () => {
            var n;
            return (n = e.value) == null ? void 0 : n.focus();
          },
          { once: !0 },
        );
      });
  },
  Qd = Symbol(),
  _t = Symbol('FORM_INJECTED_SYMBOL'),
  to = (e, t, r, n) =>
    w(() => {
      const o = t.value[r];
      return o != null && typeof o != 'symbol' ? o : n;
    }),
  Zd = e => t => ({
    disabled: to(e, t, 'disabled', !1),
    showError: to(e, t, 'showError', 'touched'),
    requiredMarker: to(e, t, 'requiredMarker', 'required'),
  }),
  ep = Zd(),
  Mr = e => Le(Qd, ep)(Xt(e)),
  tp = oe({
    __name: 'ButtonOrLinkLayout',
    props: {
      disabled: { type: null, required: !1 },
      link: { type: null, required: !1 },
      loading: { type: Boolean, required: !1 },
      type: { type: null, required: !1, default: 'button' },
      autofocus: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = Fe('buttonRef'),
        { disabled: o } = Mr(r),
        s = w(() => (r.link != null ? Zl(r.link) : void 0));
      es(n, r);
      const i = {
        props: r,
        button: n,
        disabled: o,
        linkProps: s,
        OnyxRouterLink: Zo,
      };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  np = ['disabled', 'type', 'autofocus'];
function rp(e, t, r, n, o, s) {
  return n.linkProps
    ? (_(),
      $(
        n.OnyxRouterLink,
        wr(ve({ key: 0 }, n.linkProps)),
        { default: W(() => [ie(e.$slots, 'default')]), _: 3 },
        16,
      ))
    : (_(),
      M(
        'button',
        {
          key: 1,
          ref: 'buttonRef',
          disabled: n.disabled || n.props.loading,
          type: n.props.type,
          autofocus: n.props.autofocus,
        },
        [ie(e.$slots, 'default')],
        8,
        np,
      ));
}
const ts = de(tp, [
    ['render', rp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxButton/ButtonOrLinkLayout.vue',
    ],
  ]),
  op = oe({
    __name: 'OnyxSystemButton',
    props: {
      disabled: { type: null, required: !1, default: _t },
      autofocus: { type: Boolean, required: !1, default: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
      link: { type: null, required: !1 },
      label: { type: String, required: !0 },
      icon: { type: String, required: !1 },
      color: { type: null, required: !1, default: 'intense' },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = Qn(r),
        o = {
          props: r,
          skeleton: n,
          ButtonOrLinkLayout: ts,
          OnyxIcon: nt,
          OnyxSkeleton: vn,
        };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  });
function sp(e, t, r, n, o, s) {
  return n.skeleton
    ? (_(),
      $(
        n.OnyxSkeleton,
        {
          key: 0,
          class: _e([
            'onyx-system-button-skeleton',
            n.props.icon ? '' : 'onyx-system-button-skeleton--text',
          ]),
        },
        null,
        8,
        ['class'],
      ))
    : (_(),
      $(
        n.ButtonOrLinkLayout,
        ve({ key: 1 }, n.props, {
          type: 'button',
          class: [
            'onyx-system-button',
            'onyx-text--small',
            `onyx-system-button--${n.props.color}`,
          ],
          'aria-label': n.props.label,
          title: n.props.label,
        }),
        {
          default: W(() => [
            n.props.icon
              ? (_(),
                $(n.OnyxIcon, { key: 0, icon: n.props.icon }, null, 8, [
                  'icon',
                ]))
              : (_(), M(Ie, { key: 1 }, [Ee(fe(n.props.label), 1)], 64)),
          ]),
          _: 1,
        },
        16,
        ['class', 'aria-label', 'title'],
      ));
}
const ns = de(op, [
    ['render', sp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSystemButton/OnyxSystemButton.vue',
    ],
  ]),
  ip = oe({
    __name: 'OnyxAppLayout',
    props: { navBarAlignment: { type: String, required: !1, default: 'top' } },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = zt(),
        o = { props: r, slots: n };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  lp = { key: 0, class: 'onyx-app__nav' },
  ap = { class: 'onyx-app__page' };
function cp(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        class: _e([
          'onyx-component onyx-app',
          { 'onyx-app--horizontal': n.props.navBarAlignment === 'left' },
        ]),
      },
      [
        n.slots.navBar
          ? (_(), M('div', lp, [ie(e.$slots, 'navBar')]))
          : G('v-if', !0),
        U('div', ap, [ie(e.$slots, 'default')]),
      ],
      2,
    )
  );
}
const up = de(ip, [
    ['render', cp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxAppLayout/OnyxAppLayout.vue',
    ],
  ]),
  fp = oe({
    __name: 'OnyxBadge',
    props: {
      density: { type: null, required: !1 },
      color: { type: null, required: !1, default: 'primary' },
      icon: { type: String, required: !1 },
      dot: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        o = { props: r, densityClass: n, OnyxIcon: nt };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  });
function dp(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        class: _e([
          'onyx-component onyx-badge',
          [
            'onyx-truncation-ellipsis',
            'onyx-text',
            `onyx-badge--${n.props.color}`,
            n.props.dot ? 'onyx-badge--dot' : '',
            n.densityClass,
          ],
        ]),
      },
      [
        n.props.dot
          ? G('v-if', !0)
          : (_(),
            M(
              Ie,
              { key: 0 },
              [
                n.props.icon
                  ? (_(),
                    $(
                      n.OnyxIcon,
                      { key: 0, class: 'onyx-badge__icon', icon: n.props.icon },
                      null,
                      8,
                      ['icon'],
                    ))
                  : ie(e.$slots, 'default', { key: 1 }),
              ],
              64,
            )),
      ],
      2,
    )
  );
}
const pp = de(fp, [
    ['render', dp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxBadge/OnyxBadge.vue',
    ],
  ]),
  ta = () => {
    const e = $c(),
      t = w(() => ({ class: e.class, style: e.style })),
      r = w(() => {
        const n = { ...e };
        return (delete n.class, delete n.style, n);
      });
    return { rootAttrs: t, restAttrs: r };
  },
  hp = {},
  yp = { class: 'onyx-component onyx-circle-spinner', viewBox: '0 0 50 50' };
function mp(e, t) {
  return (
    _(),
    M(
      'svg',
      yp,
      t[0] ||
        (t[0] = [
          U(
            'circle',
            {
              class: 'onyx-circle-spinner__circle',
              cx: '50%',
              cy: '50%',
              r: '45%',
            },
            null,
            -1,
          ),
        ]),
    )
  );
}
const gp = de(hp, [
    ['render', mp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxLoadingIndicator/OnyxCircleSpinner.vue',
    ],
  ]),
  _p = {},
  vp = { class: 'onyx-component onyx-loading-dots' };
function bp(e, t) {
  return (
    _(),
    M(
      'div',
      vp,
      t[0] ||
        (t[0] = [U('span', { class: 'onyx-loading-dots__center' }, null, -1)]),
    )
  );
}
const xp = de(_p, [
    ['render', bp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxLoadingIndicator/OnyxLoadingDots.vue',
    ],
  ]),
  Sp = oe({
    __name: 'OnyxLoadingIndicator',
    props: { type: { type: String, required: !1, default: 'dots' } },
    setup(e, { expose: t }) {
      t();
      const n = { props: e, OnyxCircleSpinner: gp, OnyxLoadingDots: xp };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  });
function wp(e, t, r, n, o, s) {
  return n.props.type === 'circle'
    ? (_(), $(n.OnyxCircleSpinner, { key: 0 }))
    : n.props.type === 'dots'
      ? (_(), $(n.OnyxLoadingDots, { key: 1 }))
      : G('v-if', !0);
}
const Lr = de(Sp, [
    ['render', wp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxLoadingIndicator/OnyxLoadingIndicator.vue',
    ],
  ]),
  Op = e => {
    const t = he(!1),
      r = en(new Map()),
      n = l => {
        var c;
        const a = (c = e.value) == null ? void 0 : c.getBoundingClientRect();
        if (!a) return;
        t.value = !0;
        const u = {
          id: Date.now().toString(),
          left: `${l.x - a.left}px`,
          top: `${l.y - a.top}px`,
          animationEnded: !1,
        };
        return (r.set(u.id, u), u.id);
      },
      o = l => {
        const a = l.dataset.rippleid;
        a != null &&
          (r.has(a) && (r.get(a).animationEnded = !0), t.value || r.delete(a));
      },
      s = () => {
        ((t.value = !1),
          r.forEach((l, a) => {
            l.animationEnded && r.delete(a);
          }));
      },
      i = he({});
    return (
      hn(() => {
        var l;
        (l = window.matchMedia) != null &&
        l.call(window, 'pointer: none').matches
          ? (i.value = { touchstart: n, touchend: s, touchcancel: s })
          : (i.value = { mousedown: n, mouseleave: s, mouseup: s });
      }),
      {
        isPointerDown: t,
        ripples: r,
        startRipple: n,
        hideRipples: s,
        hideRipple: o,
        events: i,
      }
    );
  },
  kp = oe({
    __name: 'OnyxRipple',
    setup(e, { expose: t }) {
      const r = Fe('rippleTriggerRef'),
        { ripples: n, hideRipple: o, events: s } = Op(r);
      t({ events: s });
      const i = { rippleTrigger: r, ripples: n, hideRipple: o, events: s };
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Ep = {
    ref: 'rippleTriggerRef',
    class: 'onyx-component onyx-ripple',
    'aria-hidden': 'true',
  },
  Cp = ['data-rippleid'];
function Rp(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'span',
      Ep,
      [
        (_(!0),
        M(
          Ie,
          null,
          Ft(
            n.ripples,
            ([i, l]) => (
              _(),
              M(
                'span',
                {
                  key: i,
                  class: 'onyx-ripple__element',
                  style: vt({
                    '--onyx-ripple-left': l.left,
                    '--onyx-ripple-top': l.top,
                  }),
                  'data-rippleid': i,
                  onAnimationend: t[0] || (t[0] = a => n.hideRipple(a.target)),
                },
                null,
                44,
                Cp,
              )
            ),
          ),
          128,
        )),
      ],
      512,
    )
  );
}
const Ap = de(kp, [
    ['render', Rp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxRipple/OnyxRipple.vue',
    ],
  ]),
  Ip = oe({
    __name: 'OnyxButton',
    props: {
      density: { type: null, required: !1 },
      autofocus: { type: Boolean, required: !1 },
      label: { type: String, required: !0 },
      disabled: { type: null, required: !1, default: _t },
      loading: { type: Boolean, required: !1, default: !1 },
      type: { type: null, required: !1, default: 'button' },
      color: { type: null, required: !1, default: 'primary' },
      mode: { type: null, required: !1, default: 'default' },
      icon: { type: String, required: !1 },
      iconPosition: { type: String, required: !1, default: 'left' },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
      link: { type: null, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        { disabled: o } = Mr(r),
        s = Qn(r),
        i = Fe('rippleRef'),
        l = w(() => {
          var c;
          return ((c = i.value) == null ? void 0 : c.events) ?? {};
        }),
        a = w(() => (r.icon && !r.loading ? r.icon : void 0)),
        u = {
          props: r,
          densityClass: n,
          disabled: o,
          skeleton: s,
          ripple: i,
          rippleEvents: l,
          icon: a,
          OnyxIcon: nt,
          OnyxLoadingIndicator: Lr,
          OnyxRipple: Ap,
          OnyxSkeleton: vn,
          ButtonOrLinkLayout: ts,
        };
      return (
        Object.defineProperty(u, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        u
      );
    },
  }),
  Pp = { class: 'onyx-button__label onyx-truncation-ellipsis' };
function Tp(e, t, r, n, o, s) {
  return n.skeleton
    ? (_(),
      $(
        n.OnyxSkeleton,
        { key: 0, class: _e(['onyx-button-skeleton', n.densityClass]) },
        null,
        8,
        ['class'],
      ))
    : (_(),
      $(
        n.ButtonOrLinkLayout,
        ve(
          { key: 1 },
          n.props,
          {
            class: [
              'onyx-component',
              'onyx-button',
              `onyx-button--${n.props.color}`,
              `onyx-button--${n.props.mode}`,
              { 'onyx-button--loading': n.props.loading },
              n.densityClass,
            ],
            'aria-label': n.props.loading ? n.props.label : void 0,
          },
          Fc(n.rippleEvents),
        ),
        {
          default: W(() => [
            !n.disabled && !n.props.loading
              ? (_(), $(n.OnyxRipple, { key: 0, ref: 'rippleRef' }, null, 512))
              : G('v-if', !0),
            n.icon && n.props.iconPosition === 'left'
              ? (_(),
                $(
                  n.OnyxIcon,
                  { key: 1, class: 'onyx-button__icon', icon: n.icon },
                  null,
                  8,
                  ['icon'],
                ))
              : G('v-if', !0),
            n.props.loading
              ? (_(),
                $(n.OnyxLoadingIndicator, {
                  key: 2,
                  class: 'onyx-button__loading',
                }))
              : G('v-if', !0),
            U('span', Pp, fe(n.props.label), 1),
            n.icon && n.props.iconPosition === 'right'
              ? (_(),
                $(
                  n.OnyxIcon,
                  { key: 3, class: 'onyx-button__icon', icon: n.icon },
                  null,
                  8,
                  ['icon'],
                ))
              : G('v-if', !0),
          ]),
          _: 1,
        },
        16,
        ['class', 'aria-label'],
      ));
}
const na = de(Ip, [
    ['render', Tp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxButton/OnyxButton.vue',
    ],
  ]),
  qp = oe({
    __name: 'OnyxCard',
    props: {
      density: { type: null, required: !1 },
      clickable: { type: Boolean, required: !1, default: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        o = { props: r, densityClass: n };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  });
function Mp(e, t, r, n, o, s) {
  return (
    _(),
    $(
      Yn(n.props.clickable ? 'button' : 'div'),
      {
        class: _e([
          'onyx-component',
          'onyx-card',
          n.densityClass,
          'onyx-truncation-multiline',
          'onyx-text',
        ]),
      },
      { default: W(() => [ie(e.$slots, 'default')]), _: 3 },
      8,
      ['class'],
    )
  );
}
const Wn = de(qp, [
    ['render', Mp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxCard/OnyxCard.vue',
    ],
  ]),
  Lp = (e, t) => ({
    requiredTypeClass: w(() => ({ [`onyx-use-${t.value}`]: !0 })),
    requiredMarkerClass: w(() => ({
      'onyx-required-marker': e.required,
      'onyx-optional-marker': !e.required,
    })),
  }),
  Bp = e => e instanceof Date && !isNaN(e),
  jp = (e, t) => {
    const r = Object.entries(e).filter(([o, s]) => s !== void 0),
      n = Object.entries(t).filter(([o, s]) => s !== void 0);
    return r.length !== n.length ? !1 : r.every(([o, s]) => s === t[o]);
  },
  Js = (e, t) =>
    e.reduce((r, n) => {
      const o = n[t] ?? '';
      return ((r[o] = r[o] || []), r[o].push(n), r);
    }, {}),
  ir = (e, t) => {
    const r = Object.entries(e);
    return (
      t && r.sort(([n], [o]) => (n === t ? -1 : o === t ? 1 : 0)),
      r.map(([n, o]) => ({ name: n, items: o }))
    );
  },
  Ys = (e, t = !1) => (!t && e == null ? [] : Array.isArray(e) ? e : [e]),
  ra = () =>
    Object.entries(Object.getOwnPropertyDescriptors(ValidityState.prototype))
      .filter(([e, t]) => t.enumerable)
      .map(([e]) => e),
  Dp = e => ra().reduce((t, r) => ((t[r] = e[r]), t), {}),
  Np = e => {
    if (e.valueMissing) return 'valueMissing';
    const t = ra()
      .filter(r => r !== 'valid')
      .sort();
    for (const r of t) if (r in e && e[r]) return r;
  },
  Vp = Object.keys(bo.validations.typeMismatch),
  wo = e => {
    if (e)
      return typeof e == 'string'
        ? { shortMessage: e, longMessage: e, hidden: !1 }
        : e;
  },
  Hp = e => {
    if (!e) return;
    if (typeof e == 'string') return e;
    if (e.shortMessage === e.longMessage) return e.shortMessage;
    const { shortMessage: t, longMessage: r } = e;
    return `${t}: ${r}`;
  },
  Fp = e => {
    const { t, locale: r } = Qe(),
      n = he(),
      o = he(!1),
      s = w(() => e.props.customError || qe(e.customError));
    Se(
      () => e.props.modelValue,
      () => (o.value = !0),
      { once: !0 },
    );
    const i = {
        mounted: a => {
          (Se(
            [() => e.props, s],
            () => {
              a.setCustomValidity(Hp(s.value) ?? '');
              const u = Dp(a.validity);
              (!n.value && u.valid) ||
                (n.value && jp(u, n.value)) ||
                (n.value = u);
            },
            { immediate: !0, deep: !0, flush: 'post' },
          ),
            Se(
              [s, n, o],
              () => {
                !o.value || !n.value || e.emit('validityChange', n.value);
              },
              { immediate: !0 },
            ));
        },
      },
      l = w(() => {
        var h, y;
        if (!n.value || n.value.valid) return;
        const a = Np(n.value),
          u = wo(s.value);
        if (u || a === 'customError') return u || void 0;
        if (!a) return;
        const c =
            typeof e.props.maxlength == 'object'
              ? e.props.maxlength.max
              : e.props.maxlength,
          f = {
            value: (h = e.props.modelValue) == null ? void 0 : h.toString(),
            n:
              ((y = e.props.modelValue) == null
                ? void 0
                : y.toString().length) ?? 0,
            minLength: e.props.minlength,
            maxLength: c,
            min: Xs(r.value, e.props.type, e.props.min),
            max: Xs(r.value, e.props.type, e.props.max),
            step: e.props.validStepSize,
          };
        if (a === 'typeMismatch') {
          const g = Vp.includes(e.props.type) ? e.props.type : 'generic';
          return {
            longMessage: t.value(`validations.typeMismatch.${g}.fullError`, f),
            shortMessage: t.value(`validations.typeMismatch.${g}.preview`, f),
          };
        }
        return {
          longMessage: t.value(`validations.${a}.fullError`, f),
          shortMessage: t.value(`validations.${a}.preview`, f),
        };
      });
    return { vCustomValidity: i, errorMessages: l };
  },
  Xs = (e, t, r) => {
    if (!t || !['date', 'datetime-local'].includes(t))
      return r == null ? void 0 : r.toString();
    const n = r != null ? new Date(r) : void 0;
    if (!Bp(n)) return r == null ? void 0 : r.toString();
    const o = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      ...(t === 'datetime-local'
        ? { hour: '2-digit', minute: '2-digit' }
        : void 0),
    };
    return n.toLocaleString(e, o);
  },
  oa = (e, t) => {
    const r = 'content-box',
      n = he(0),
      o = he(0),
      s = i => {
        const l = i[0].contentBoxSize;
        ((n.value = l.reduce((a, { inlineSize: u }) => a + u, 0)),
          (o.value = l.reduce((a, { blockSize: u }) => a + u, 0)));
      };
    return (
      ut(() => {
        if (!('ResizeObserver' in window)) return;
        const i = new ResizeObserver(s);
        if (!e) {
          i.observe(document.documentElement, { box: r });
          return;
        }
        (Se(
          e,
          (l, a) => {
            const u = Qt(l),
              c = Qt(a);
            (c && (i == null || i.unobserve(c)),
              u
                ? i == null || i.observe(u, { box: r })
                : ((n.value = 0), (o.value = 0)));
          },
          { immediate: !0 },
        ),
          Rr(() => i.disconnect()));
      }),
      { width: n, height: o }
    );
  },
  Qt = e => (e instanceof Element ? e : e == null ? void 0 : e.$el),
  zp = (e, t) => {
    const r = he(!1),
      n = o => {
        o.forEach(s => {
          r.value = s.isIntersecting;
        });
      };
    return (
      ut(() => {
        if (!('IntersectionObserver' in window)) return;
        const o = new IntersectionObserver(n, {
          root: null,
          rootMargin: '0px',
          threshold: [0],
        });
        if (!(e != null && e.value)) {
          o.observe(document.documentElement);
          return;
        }
        (Se(
          e,
          (s, i) => {
            const l = Qt(s),
              a = Qt(i);
            (a && o.unobserve(a), l && o.observe(l));
          },
          { immediate: !0 },
        ),
          Rr(() => o.disconnect()));
      }),
      { isIntersecting: r }
    );
  },
  sa = ({
    positionedRef: e,
    targetRef: t,
    positionArea: r,
    alignment: n,
    alignsWithEdge: o,
    fitParent: s,
    offset: i = 0,
  }) => {
    const l = he('-1000px'),
      a = he('-1000px'),
      { isIntersecting: u } = zp(t),
      c = () => {
        const h = Qt(e.value),
          y = Qt(t.value);
        if (!h || !y) return;
        const g = y.getBoundingClientRect(),
          v = h.getBoundingClientRect();
        let E = 0,
          C = 0;
        const k =
          qe(o) && qe(n) !== 'center' && (qe(r) === 'top' || qe(r) === 'bottom')
            ? qe(n) === 'left' || qe(s)
              ? g.left
              : g.right - v.width
            : g.left + g.width / 2 - v.width / 2;
        switch (qe(r)) {
          case 'top':
            ((E = g.top - v.height - i), (C = k));
            break;
          case 'top right':
            ((E = g.top - v.height - i), (C = g.right + i));
            break;
          case 'top left':
            ((E = g.top - v.height - i), (C = g.left - v.width - i));
            break;
          case 'right':
            ((E = g.top + g.height / 2 - v.height / 2), (C = g.right + i));
            break;
          case 'bottom':
            ((E = g.bottom + i), (C = k));
            break;
          case 'bottom right':
            ((E = g.bottom + i), (C = g.right + i));
            break;
          case 'bottom left':
            ((E = g.bottom + i), (C = g.left - v.width - i));
            break;
          case 'left':
            ((E = g.top + g.height / 2 - v.height / 2),
              (C = g.left - v.width - i));
            break;
        }
        ((l.value = `${C}px`), (a.value = `${E}px`));
      };
    (hn(() => {
      tn(() => {
        u.value && e.value
          ? window.addEventListener('scroll', c, !0)
          : (window.removeEventListener('scroll', c, !0),
            (l.value = '-1000px'),
            (a.value = '-1000px'));
      });
    }),
      $o(() => {
        window.removeEventListener('scroll', c, !0);
      }));
    const f = he(!0);
    return (
      hn(() => {
        const h =
          /Safari/.test(navigator.userAgent) &&
          !/Chrome/.test(navigator.userAgent);
        f.value =
          'CSS' in globalThis &&
          typeof CSS < 'u' &&
          CSS.supports('anchor-name: --test') &&
          CSS.supports('position-area: top') &&
          !h;
      }),
      {
        leftPosition: l,
        topPosition: a,
        updateAnchorPositionPolyfill: c,
        useragentSupportsAnchorApi: f,
      }
    );
  },
  ia = (e, t, r = 'center') => {
    const o = he(r);
    return {
      openAlignment: o,
      updateOpenAlignment: () => {
        const i = F(e),
          l = F(t);
        if (!i || !l) {
          o.value = r;
          return;
        }
        const a = i.getBoundingClientRect(),
          u = l.getBoundingClientRect();
        if (u.width < a.width) {
          o.value = r;
          return;
        }
        const c = (u.width - a.width + 16 * 2) / 2,
          f = u.width - a.width + 16,
          h = window.innerWidth,
          y = a.left,
          g = h - a.right,
          v = y >= c,
          E = g >= c;
        (r === 'right' && y >= f) ||
        (r === 'left' && g >= f) ||
        (r === 'center' && v && E)
          ? (o.value = r)
          : y > g
            ? (o.value = 'right')
            : (o.value = 'left');
      },
    };
  },
  rs = (e, t = 'bottom') => {
    const r = he(t);
    return {
      openDirection: r,
      updateOpenDirection: () => {
        var f, h, y;
        const o = F(e);
        if (!o) {
          r.value = t;
          return;
        }
        const s = (f = la(o)) == null ? void 0 : f.getBoundingClientRect(),
          i = o.getBoundingClientRect(),
          l =
            (s == null ? void 0 : s.top) ??
            ((h = window.visualViewport) == null ? void 0 : h.pageTop) ??
            0,
          u =
            ((s == null ? void 0 : s.bottom) ??
              ((y = window.visualViewport) == null ? void 0 : y.height) ??
              0) - i.bottom,
          c = i.top - l;
        r.value = c > u ? 'top' : 'bottom';
      },
    };
  },
  la = e =>
    e
      ? getComputedStyle(e).overflow.includes('hidden')
        ? e
        : e.parentElement
          ? la(e.parentElement)
          : void 0
      : void 0,
  $p = oe({
    __name: 'OnyxTooltip',
    props: {
      density: { type: null, required: !1 },
      text: { type: String, required: !1 },
      icon: { type: String, required: !1 },
      color: { type: String, required: !1, default: 'neutral' },
      position: { type: String, required: !1, default: 'auto' },
      alignment: { type: String, required: !1, default: 'auto' },
      fitParent: { type: Boolean, required: !1, default: !1 },
      open: { type: [String, Boolean, Object], required: !1, default: 'hover' },
      alignsWithEdge: { type: Boolean, required: !1, default: !1 },
      withoutWedge: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        { t: o } = Qe(),
        s = he(!1),
        i = w({
          set: me => (s.value = me),
          get: () => (typeof r.open == 'boolean' ? r.open : s.value),
        }),
        l = w(() => ({
          debounce: 200,
          ...((typeof r.open == 'object' &&
            r.open.type === 'hover' &&
            r.open) ||
            {}),
          isVisible: i,
        })),
        a = w(() => ({
          toggleLabel: o.value(`tooltip.${r.color}`),
          ...((typeof r.open == 'object' &&
            r.open.type === 'click' &&
            r.open) ||
            {}),
          isVisible: i,
        })),
        u = w(() =>
          typeof r.open == 'object'
            ? r.open.type
            : typeof r.open == 'string'
              ? r.open
              : 'hover',
        ),
        c = w(() => (r.position === 'auto' ? P.value : r.position)),
        f = w(() => (r.alignment === 'auto' ? Q.value : r.alignment)),
        h = w(() => {
          let me = c.value;
          return (
            (c.value === 'top' || c.value === 'bottom') &&
              C.value &&
              (f.value === 'left' && (me = c.value + ' x-start'),
              f.value === 'right' && (me = c.value + ' x-end')),
            me
          );
        }),
        y = () => (u.value === 'hover' ? Ld(l.value) : Md(a.value)),
        g = Vt(y());
      Se(u, () => (g.value = y()));
      const v = w(() => {
          var me;
          return (me = g.value) == null ? void 0 : me.elements.tooltip;
        }),
        E = w(() => {
          var me;
          return qe((me = g.value) == null ? void 0 : me.elements.trigger);
        }),
        C = w(() => r.alignsWithEdge),
        k = w(() => r.fitParent),
        A = Fe('tooltipWrapperRefEl'),
        R = Fe('tooltipRefEl'),
        { openDirection: P, updateOpenDirection: te } = rs(A, 'top'),
        { openAlignment: Q, updateOpenAlignment: V } = ia(A, R),
        {
          leftPosition: z,
          topPosition: ae,
          updateAnchorPositionPolyfill: ue,
          useragentSupportsAnchorApi: ce,
        } = sa({
          positionedRef: R,
          targetRef: A,
          positionArea: c,
          alignment: f,
          alignsWithEdge: C,
          fitParent: k,
        }),
        J = () => {
          (te(), V());
        };
      $n({ type: 'resize', listener: () => J() });
      const T = me => {
          var We, Ke, it, Me;
          me
            ? (Ke = (We = R.value) == null ? void 0 : We.showPopover) == null ||
              Ke.call(We)
            : (Me = (it = R.value) == null ? void 0 : it.hidePopover) == null ||
              Me.call(it);
        },
        ne = w(() => ({
          'onyx-tooltip--danger': r.color === 'danger',
          'onyx-tooltip--success': r.color === 'success',
          'onyx-tooltip--fit-parent': r.fitParent,
          'onyx-tooltip--aligns-with-edge': C.value,
          'onyx-tooltip--hidden': !i.value,
          [`onyx-tooltip--position-${c.value.replace(' ', '-')}`]: !0,
          [`onyx-tooltip--alignment-${f.value}`]: !0,
          'onyx-tooltip--dont-support-anchor': !ce.value,
          'onyx-tooltip--without-wedge': r.withoutWedge,
        })),
        { width: Z } = oa(A),
        Y = w(() => (r.fitParent && A.value ? `${Z.value}px` : 'max-content'));
      (ut(() => {
        (T(i.value), J(), ce.value || ue());
      }),
        Se(i, async me => {
          (await at(), T(me), J(), ce.value || ue());
        }),
        Se([Y, c, f, C], async () => {
          ce.value || (await at(), ue());
        }));
      const pe = Pt(),
        De = w(() => `--anchor-${pe}`),
        rt = w(() =>
          ce.value
            ? {
                width: Y.value,
                'position-anchor': De.value,
                'position-area': h.value,
              }
            : { width: Y.value, left: z.value, top: ae.value },
        ),
        $e = {
          props: r,
          densityClass: n,
          t: o,
          _isVisible: s,
          isVisible: i,
          tooltipOptions: l,
          toggletipOptions: a,
          type: u,
          toolTipPosition: c,
          alignment: f,
          positionAndAlignment: h,
          createPattern: y,
          ariaPattern: g,
          tooltip: v,
          trigger: E,
          alignsWithEdge: C,
          fitParent: k,
          tooltipWrapperRef: A,
          tooltipRef: R,
          openDirection: P,
          updateOpenDirection: te,
          openAlignment: Q,
          updateOpenAlignment: V,
          leftPosition: z,
          topPosition: ae,
          updateAnchorPositionPolyfill: ue,
          useragentSupportsAnchorApi: ce,
          updateDirections: J,
          handleOpening: T,
          tooltipClasses: ne,
          width: Z,
          tooltipWidth: Y,
          id: pe,
          anchorName: De,
          tooltipStyles: rt,
          OnyxIcon: nt,
        };
      return (
        Object.defineProperty($e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        $e
      );
    },
  }),
  Wp = { class: 'onyx-tooltip--content' };
function Kp(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        ref: 'tooltipWrapperRefEl',
        class: _e(['onyx-component', 'onyx-tooltip-wrapper', n.densityClass]),
        style: vt(`anchor-name: ${n.anchorName}`),
      },
      [
        U(
          'div',
          ve({ ref: 'tooltipRefEl' }, n.tooltip, {
            class: [
              'onyx-tooltip',
              'onyx-text--small',
              'onyx-truncation-multiline',
              n.tooltipClasses,
            ],
            style: n.tooltipStyles,
          }),
          [
            U('div', Wp, [
              n.props.icon
                ? (_(),
                  $(
                    n.OnyxIcon,
                    { key: 0, icon: n.props.icon, size: '16px' },
                    null,
                    8,
                    ['icon'],
                  ))
                : G('v-if', !0),
              ie(e.$slots, 'tooltip', {}, () => [Ee(fe(n.props.text), 1)]),
            ]),
          ],
          16,
        ),
        ie(e.$slots, 'default', { trigger: n.trigger }),
      ],
      6,
    )
  );
}
const aa = de($p, [
    ['render', Kp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxTooltip/OnyxTooltip.vue',
    ],
  ]),
  Up = (e, t) =>
    w(() => {
      const r = t.value.filter(o => e.value.includes(o)),
        n = r.length === e.value.length;
      return {
        modelValue: n,
        indeterminate: !n && e.value.length && r.length ? !0 : void 0,
      };
    }),
  Gp = (e, t, r) => ({
    state: Up(e, t),
    handleChange: n => {
      const o = t.value.filter(i => !e.value.includes(i)),
        s = n ? o.concat(e.value) : o;
      r(s);
    },
  }),
  Jp = oe({
    __name: 'OnyxInfoTooltip',
    props: {
      text: { type: String, required: !0 },
      density: { type: null, required: !1 },
      icon: { type: String, required: !1 },
      color: { type: String, required: !1, default: 'neutral' },
      position: { type: String, required: !1 },
      alignment: { type: String, required: !1 },
      open: { type: [String, Boolean, Object], required: !1, default: 'click' },
      alignsWithEdge: { type: Boolean, required: !1 },
      withoutWedge: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = w(() =>
          typeof r.open == 'object'
            ? r.open.type
            : typeof r.open == 'string'
              ? r.open
              : 'click',
        ),
        o = {
          props: r,
          type: n,
          get iconCircleInformation() {
            return Vl;
          },
          OnyxIcon: nt,
          OnyxSystemButton: ns,
          OnyxTooltip: aa,
          OnyxVisuallyHidden: Zn,
        };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  Yp = { class: 'onyx-component onyx-info-tooltip' };
function Xp(e, t, r, n, o, s) {
  return (
    _(),
    M('span', Yp, [
      n.type === 'click'
        ? (_(),
          $(
            n.OnyxTooltip,
            wr(ve({ key: 0 }, n.props)),
            {
              default: W(({ trigger: i }) => [
                H(
                  n.OnyxSystemButton,
                  ve(
                    {
                      label: i['aria-label'],
                      icon: n.iconCircleInformation,
                      class: 'onyx-info-tooltip__trigger',
                      color: 'soft',
                    },
                    i,
                  ),
                  null,
                  16,
                  ['label', 'icon'],
                ),
              ]),
              _: 1,
            },
            16,
          ))
        : (_(),
          M(
            Ie,
            { key: 1 },
            [
              H(
                n.OnyxTooltip,
                ve({ 'aria-hidden': 'true' }, n.props),
                {
                  default: W(({ trigger: i }) => [
                    U(
                      'span',
                      ve({ class: 'onyx-info-tooltip__trigger' }, i),
                      [
                        H(
                          n.OnyxIcon,
                          { icon: n.iconCircleInformation },
                          null,
                          8,
                          ['icon'],
                        ),
                      ],
                      16,
                    ),
                  ]),
                  _: 1,
                },
                16,
              ),
              H(n.OnyxVisuallyHidden, null, {
                default: W(() => [Ee(fe(n.props.text), 1)]),
                _: 1,
              }),
            ],
            64,
          )),
    ])
  );
}
const ca = de(Jp, [
    ['render', Xp],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxInfoTooltip/OnyxInfoTooltip.vue',
    ],
  ]),
  Qp = oe({
    __name: 'OnyxEmpty',
    props: { density: { type: null, required: !1 } },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = zt(),
        { densityClass: o } = Je(r),
        s = {
          props: r,
          slots: n,
          densityClass: o,
          get iconCircleX() {
            return Hl;
          },
          OnyxIcon: nt,
        };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  Zp = { class: 'onyx-empty__label onyx-text onyx-truncation-multiline' },
  eh = { key: 0, class: 'onyx-empty__buttons' };
function th(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      { class: _e(['onyx-component', 'onyx-empty', n.densityClass]) },
      [
        ie(e.$slots, 'icon', {}, () => [
          H(n.OnyxIcon, { icon: n.iconCircleX, size: '48px' }, null, 8, [
            'icon',
          ]),
        ]),
        U('div', Zp, [ie(e.$slots, 'default')]),
        n.slots.buttons
          ? (_(), M('div', eh, [ie(e.$slots, 'buttons')]))
          : G('v-if', !0),
      ],
      2,
    )
  );
}
const nh = de(Qp, [
    ['render', th],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxEmpty/OnyxEmpty.vue',
    ],
  ]),
  rh = oe({
    inheritAttrs: !1,
    __name: 'OnyxMiniSearch',
    props: {
      density: { type: null, required: !1 },
      label: { type: String, required: !0 },
      autofocus: { type: Boolean, required: !1 },
      modelValue: { type: null, required: !1 },
    },
    emits: ['clear', 'update:modelValue'],
    setup(e, { expose: t, emit: r }) {
      const n = e,
        o = r,
        s = qn({ props: n, emit: o, key: 'modelValue', default: '' }),
        { rootAttrs: i, restAttrs: l } = ta(),
        { densityClass: a } = Je(n),
        { t: u } = Qe(),
        c = Fe('inputRef'),
        f = w(() => u.value('select.searchPlaceholder'));
      (es(c, n),
        t({
          focus: () => {
            var y;
            return (y = c.value) == null ? void 0 : y.focus();
          },
        }));
      const h = {
        props: n,
        emit: o,
        modelValue: s,
        rootAttrs: i,
        restAttrs: l,
        densityClass: a,
        t: u,
        input: c,
        placeholder: f,
        get iconSearch() {
          return qf;
        },
        get iconXSmall() {
          return Tr;
        },
        OnyxIcon: nt,
      };
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      );
    },
  }),
  oh = ['autofocus', 'placeholder', 'aria-label'],
  sh = ['aria-label'];
function ih(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      ve(
        { class: ['onyx-component', 'onyx-mini-search', n.densityClass] },
        n.rootAttrs,
        {
          style: { '--onyx-placeholder-character-count': n.placeholder.length },
        },
      ),
      [
        Fo(
          U(
            'input',
            ve(
              {
                ref: 'inputRef',
                'onUpdate:modelValue': t[0] || (t[0] = i => (n.modelValue = i)),
                autofocus: n.props.autofocus,
                class: 'onyx-mini-search__input onyx-text',
                placeholder: n.placeholder,
                type: 'text',
                size: '1',
              },
              n.restAttrs,
              { 'aria-label': n.props.label },
            ),
            null,
            16,
            oh,
          ),
          [[Ju, n.modelValue]],
        ),
        U(
          'button',
          {
            type: 'button',
            class: 'onyx-mini-search__clear',
            'aria-label': n.t('select.clearSearch'),
            tabindex: '-1',
            onMousedown: t[1] || (t[1] = Qo(() => {}, ['prevent'])),
            onClick: t[2] || (t[2] = i => n.emit('clear')),
          },
          [H(n.OnyxIcon, { icon: n.iconXSmall }, null, 8, ['icon'])],
          40,
          sh,
        ),
        H(
          n.OnyxIcon,
          { class: 'onyx-mini-search__icon', icon: n.iconSearch },
          null,
          8,
          ['icon'],
        ),
      ],
      16,
    )
  );
}
const lh = de(rh, [
    ['render', ih],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxMiniSearch/OnyxMiniSearch.vue',
    ],
  ]),
  ah = oe({
    __name: 'OnyxPopover',
    props: {
      label: { type: String, required: !0 },
      open: { type: null, required: !1 },
      position: { type: String, required: !1, default: 'auto' },
      alignment: { type: String, required: !1, default: 'auto' },
      fitParent: { type: Boolean, required: !1 },
      disabled: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      const r = e,
        n = he(!1),
        o = w({
          set: J => (n.value = J),
          get: () =>
            typeof r.open == 'boolean' && !r.disabled ? r.open : n.value,
        }),
        s = w(() => (r.position === 'auto' ? f.value : r.position)),
        i = w(() => (r.alignment === 'auto' ? y.value : r.alignment));
      t({ popoverPosition: s, popoverAlignment: i });
      const l = w(() => r.disabled),
        a = w(() => {
          if (s.value === 'top' || s.value === 'bottom') {
            if (i.value === 'left') return s.value + ' span-right';
            if (i.value === 'right') return s.value + ' span-left';
          }
          return s.value;
        }),
        u = Fe('popover'),
        c = Fe('popoverWrapper'),
        { openDirection: f, updateOpenDirection: h } = rs(c, 'bottom'),
        { openAlignment: y, updateOpenAlignment: g } = ia(c, u, 'left'),
        {
          leftPosition: v,
          topPosition: E,
          updateAnchorPositionPolyfill: C,
          useragentSupportsAnchorApi: k,
        } = sa({
          positionedRef: u,
          targetRef: c,
          positionArea: s,
          alignment: i,
          alignsWithEdge: !0,
          fitParent: !1,
          offset: 8,
        }),
        { width: A } = oa(c),
        R = J => {
          var T, ne, Z, Y;
          J
            ? (ne = (T = u.value) == null ? void 0 : T.showPopover) == null ||
              ne.call(T)
            : (Y = (Z = u.value) == null ? void 0 : Z.hidePopover) == null ||
              Y.call(Z);
        },
        P = () => {
          (h(), g());
        };
      ($n({ type: 'resize', listener: () => P() }),
        ut(() => {
          (R(o.value), P(), k.value || C());
        }),
        Se(o, async J => {
          (await at(), R(J), P(), k.value || C());
        }));
      const te = () => {
          n.value = !n.value;
        },
        Q = w(() => {
          var J;
          return {
            onClick: te,
            'aria-expanded': o.value,
            'aria-controls': (J = u.value) == null ? void 0 : J.id,
            disabled: l.value,
          };
        }),
        V = Pt(),
        z = w(() => `--anchor-${V}`),
        ae = w(() => ({
          [`onyx-popover__dialog--position-${s.value.replace(' ', '-')}`]: !0,
          [`onyx-popover__dialog--alignment-${i.value}`]: !0,
          'onyx-popover__dialog--fitparent': r.fitParent,
          'onyx-popover__dialog--disabled': l.value,
          'onyx-popover__dialog--dont-support-anchor': !k.value,
        }));
      (Se(l, () => {
        l.value && (n.value = !1);
      }),
        Se([s, i, A], async () => {
          k.value || (await at(), P(), C());
        }));
      const ue = w(() => {
          const J = r.fitParent ? `${A.value}px` : void 0;
          return k.value
            ? { width: J, 'position-anchor': z.value, 'position-area': a.value }
            : { width: J, left: v.value, top: E.value };
        }),
        ce = {
          props: r,
          _isVisible: n,
          isVisible: o,
          popoverPosition: s,
          popoverAlignment: i,
          disabled: l,
          positionAndAlignment: a,
          popoverRef: u,
          popoverWrapperRef: c,
          openDirection: f,
          updateOpenDirection: h,
          openAlignment: y,
          updateOpenAlignment: g,
          leftPosition: v,
          topPosition: E,
          updateAnchorPositionPolyfill: C,
          useragentSupportsAnchorApi: k,
          width: A,
          handleOpening: R,
          updateDirections: P,
          toggle: te,
          trigger: Q,
          id: V,
          anchorName: z,
          popoverClasses: ae,
          popoverStyles: ue,
        };
      return (
        Object.defineProperty(ce, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        ce
      );
    },
  }),
  ch = ['aria-label'];
function uh(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        ref: 'popoverWrapper',
        class: 'onyx-component onyx-popover',
        style: vt(`anchor-name: ${n.anchorName}`),
      },
      [
        ie(e.$slots, 'default', { trigger: n.trigger }),
        U(
          'div',
          {
            ref: 'popover',
            role: 'dialog',
            'aria-label': n.props.label,
            popover: 'manual',
            class: _e(['onyx-popover__dialog', n.popoverClasses]),
            style: vt(n.popoverStyles),
          },
          [ie(e.$slots, 'content')],
          14,
          ch,
        ),
      ],
      4,
    )
  );
}
const fh = de(ah, [
    ['render', uh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxPopover/OnyxPopover.vue',
    ],
  ]),
  dh = oe({
    __name: 'HeaderCell',
    props: { label: { type: String, required: !0 } },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = zt(),
        o = { props: r, slots: n };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  ph = { class: 'onyx-component onyx-data-grid-header-cell' },
  hh = { class: 'onyx-data-grid-header-cell__label' },
  yh = { key: 0, class: 'onyx-data-grid-header-cell__actions' };
function mh(e, t, r, n, o, s) {
  return (
    _(),
    M('div', ph, [
      U('span', hh, fe(n.props.label), 1),
      n.slots.actions
        ? (_(), M('div', yh, [ie(e.$slots, 'actions')]))
        : G('v-if', !0),
    ])
  );
}
const bn = de(dh, [
    ['render', mh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxDataGrid/features/HeaderCell.vue',
    ],
  ]),
  ua = '-',
  Kn = e => (e == null ? void 0 : e.fallback) ?? ua,
  rn = e => Object.freeze(e),
  gh = (e, t) => {
    if (
      e == null ||
      e instanceof Date ||
      typeof e == 'boolean' ||
      typeof e == 'symbol'
    )
      return Kn(t);
    const { n: r } = Qe();
    return r
      .value(e, (t == null ? void 0 : t.format) ?? 'decimal')
      .replace('NaN', ua);
  };
rn({
  header: { component: bn },
  cell: {
    component: ({ metadata: e, modelValue: t }) =>
      gh(t, e == null ? void 0 : e.typeOptions),
    tdAttributes: { class: 'onyx-data-grid-number-cell' },
  },
});
const fa = (e, t) =>
  e == null
    ? Kn(t)
    : Array.isArray(e)
      ? e
          .map(r => fa(r))
          .filter(r => r != Kn(t))
          .join(', ')
      : e instanceof Date
        ? e.toString()
        : typeof e == 'object'
          ? JSON.stringify(e)
          : String(e);
rn({
  header: { component: bn },
  cell: {
    component: e => {
      var t;
      return fa(
        e.modelValue,
        (t = e.metadata) == null ? void 0 : t.typeOptions,
      );
    },
  },
});
const Br = (e, t) => {
  if (e == null || typeof e == 'boolean') return Kn(t);
  const { d: r } = Qe();
  try {
    const n = new Date(typeof e == 'bigint' ? Number(e) : e);
    return r.value(n, t == null ? void 0 : t.format);
  } catch {
    return Kn(t);
  }
};
rn({
  header: { component: bn },
  cell: {
    component: e => {
      var t;
      return Br(e.modelValue, {
        format: 'date',
        ...((t = e.metadata) == null ? void 0 : t.typeOptions),
      });
    },
  },
});
rn({
  header: { component: bn },
  cell: {
    component: e => {
      var t;
      return Br(e.modelValue, {
        format: 'datetime-local',
        ...((t = e.metadata) == null ? void 0 : t.typeOptions),
      });
    },
  },
});
rn({
  header: { component: bn },
  cell: {
    component: e => {
      var t;
      return Br(e.modelValue, {
        format: 'time',
        ...((t = e.metadata) == null ? void 0 : t.typeOptions),
      });
    },
  },
});
rn({
  header: { component: bn },
  cell: {
    component: e => {
      var t;
      return Br(e.modelValue, {
        format: 'timestamp',
        ...((t = e.metadata) == null ? void 0 : t.typeOptions),
      });
    },
  },
});
rn({ cell: { component: () => Xo(vn) } });
const _h = e => {
    const r = he(!1),
      n = s => {
        const i = s.target;
        if (!(i instanceof Element)) return;
        const l = F(e.offset) ?? 0;
        r.value =
          Math.abs(i.scrollTop) + i.clientHeight >= i.scrollHeight - l - 1;
      };
    return {
      vScrollEnd: {
        mounted: s => {
          tn(() => {
            var l;
            (((l = e.enabled) == null ? void 0 : l.value) ?? !0) &&
            !e.loading.value
              ? s.addEventListener('scroll', n)
              : s.removeEventListener('scroll', n);
          });
        },
      },
      isScrollEnd: Yt(r),
    };
  },
  vh = e =>
    w(() =>
      e.value === !0
        ? 'onyx-form-element--immediate-invalid'
        : e.value === !1
          ? 'onyx-form-element--suppress-invalid'
          : 'onyx-form-element--touched-invalid',
    ),
  bh = oe({
    __name: 'FormMessage',
    props: {
      messages: { type: Object, required: !0 },
      type: { type: String, required: !0 },
    },
    setup(e, { expose: t }) {
      t();
      const n = { props: e, OnyxInfoTooltip: ca, OnyxVisuallyHidden: Zn };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  xh = { class: _e(['onyx-truncation-ellipsis']) };
function Sh(e, t, r, n, o, s) {
  return (
    _(),
    $(
      Yn(r.messages.hidden ? n.OnyxVisuallyHidden : 'span'),
      {
        class: _e([
          'onyx-component',
          'onyx-form-message',
          `onyx-form-message__${n.props.type}`,
        ]),
      },
      {
        default: W(() => [
          U('span', xh, fe(n.props.messages.shortMessage), 1),
          n.props.messages.longMessage
            ? (_(),
              $(
                n.OnyxInfoTooltip,
                {
                  key: 0,
                  class: 'onyx-form-message__tooltip',
                  position: 'bottom',
                  open: 'hover',
                  color: n.props.type,
                  text: n.props.messages.longMessage,
                },
                null,
                8,
                ['color', 'text'],
              ))
            : G('v-if', !0),
        ]),
        _: 1,
      },
      8,
      ['class'],
    )
  );
}
const wh = de(bh, [
    ['render', Sh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxFormElement/FormMessage.vue',
    ],
  ]),
  Oh = oe({
    __name: 'OnyxFormElement',
    props: {
      disabled: { type: null, required: !1 },
      showError: { type: null, required: !1 },
      requiredMarker: { type: null, required: !1, default: _t },
      required: { type: Boolean, required: !1, default: !1 },
      density: { type: null, required: !1 },
      customError: { type: [String, Object], required: !1 },
      autofocus: { type: Boolean, required: !1 },
      id: { type: String, required: !1, default: () => Pt() },
      name: { type: String, required: !1 },
      label: { type: String, required: !0 },
      labelTooltip: { type: String, required: !1 },
      hideLabel: { type: Boolean, required: !1 },
      readonly: { type: Boolean, required: !1 },
      loading: { type: Boolean, required: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1 },
      placeholder: { type: String, required: !1 },
      maxlength: { type: [Number, Object], required: !1 },
      withCounter: { type: Boolean, required: !1 },
      minlength: { type: Number, required: !1 },
      autocapitalize: { type: null, required: !1 },
      autocomplete: { type: null, required: !1 },
      errorMessages: { type: Object, required: !1 },
      message: { type: Object, required: !1 },
      successMessages: { type: Object, required: !1 },
      modelValue: { type: null, required: !1 },
    },
    emits: ['update:modelValue'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        { requiredMarker: s } = Mr(n),
        { requiredMarkerClass: i, requiredTypeClass: l } = Lp(n, s),
        a = qn({ props: n, emit: o, key: 'modelValue' }),
        u = w(() => {
          var f;
          if (n.withCounter && n.maxlength) {
            const h = (((f = a.value) == null ? void 0 : f.toString()) ?? '')
                .length,
              y =
                typeof n.maxlength == 'object' ? n.maxlength.max : n.maxlength,
              g = h > y;
            return { length: h, maxLength: y, violated: g };
          }
        }),
        c = {
          props: n,
          emit: o,
          requiredMarker: s,
          requiredMarkerClass: i,
          requiredTypeClass: l,
          modelValue: a,
          counter: u,
          OnyxInfoTooltip: ca,
          FormMessage: wh,
        };
      return (
        Object.defineProperty(c, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        c
      );
    },
  }),
  kh = { key: 0, class: 'onyx-form-element__label onyx-text--small' },
  Eh = ['for'],
  Ch = { class: 'onyx-form-element__footer onyx-text--small' },
  Rh = { class: 'onyx-form-element__footer-messages' };
function Ah(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        class: _e([
          'onyx-component',
          'onyx-form-element',
          n.requiredTypeClass,
          r.successMessages ? 'onyx-form-element--success' : void 0,
        ]),
      },
      [
        n.props.hideLabel
          ? G('v-if', !0)
          : (_(),
            M('div', kh, [
              U(
                'label',
                { for: n.props.id, class: 'onyx-truncation-ellipsis' },
                fe(n.props.label),
                9,
                Eh,
              ),
              n.props.required
                ? (_(),
                  M(
                    'span',
                    {
                      key: 0,
                      class: _e([
                        n.props.required ? n.requiredMarkerClass : void 0,
                      ]),
                    },
                    null,
                    2,
                  ))
                : G('v-if', !0),
              n.props.labelTooltip
                ? (_(),
                  $(
                    n.OnyxInfoTooltip,
                    {
                      key: 1,
                      class: 'onyx-form-element__label-tooltip',
                      open: 'hover',
                      text: n.props.labelTooltip,
                    },
                    null,
                    8,
                    ['text'],
                  ))
                : G('v-if', !0),
              n.props.required
                ? G('v-if', !0)
                : (_(),
                  M(
                    'span',
                    {
                      key: 2,
                      class: _e([
                        n.props.required ? void 0 : n.requiredMarkerClass,
                      ]),
                    },
                    null,
                    2,
                  )),
            ])),
        ie(e.$slots, 'default', { id: n.props.id }),
        U('div', Ch, [
          U('span', Rh, [
            n.props.errorMessages
              ? (_(),
                $(
                  n.FormMessage,
                  {
                    key: 0,
                    class: 'onyx-form-element__error-message',
                    messages: n.props.errorMessages,
                    type: 'danger',
                  },
                  null,
                  8,
                  ['messages'],
                ))
              : G('v-if', !0),
            n.props.successMessages
              ? (_(),
                $(
                  n.FormMessage,
                  {
                    key: 1,
                    class: 'onyx-form-element__success-message',
                    messages: n.props.successMessages,
                    type: 'success',
                  },
                  null,
                  8,
                  ['messages'],
                ))
              : G('v-if', !0),
            n.props.message
              ? (_(),
                $(
                  n.FormMessage,
                  {
                    key: 2,
                    class: 'onyx-form-element__message',
                    messages: n.props.message,
                    type: 'neutral',
                  },
                  null,
                  8,
                  ['messages'],
                ))
              : G('v-if', !0),
          ]),
          n.counter
            ? (_(),
              M(
                'span',
                {
                  key: 0,
                  class: _e({
                    'onyx-form-element__counter': !0,
                    'onyx-form-element__counter--violated': n.counter.violated,
                  }),
                },
                fe(n.counter.length) + '/' + fe(n.counter.maxLength),
                3,
              ))
            : G('v-if', !0),
        ]),
      ],
      2,
    )
  );
}
const Ih = de(Oh, [
    ['render', Ah],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxFormElement/OnyxFormElement.vue',
    ],
  ]),
  Ph = oe({
    inheritAttrs: !1,
    __name: 'OnyxSelectInput',
    props: {
      disabled: { type: null, required: !1, default: _t },
      showError: { type: null, required: !1, default: _t },
      requiredMarker: { type: null, required: !1 },
      required: { type: Boolean, required: !1 },
      density: { type: null, required: !1 },
      customError: { type: [String, Object], required: !1 },
      autofocus: { type: Boolean, required: !1 },
      id: { type: String, required: !1 },
      name: { type: String, required: !1 },
      label: { type: String, required: !0 },
      labelTooltip: { type: String, required: !1 },
      hideLabel: { type: Boolean, required: !1, default: !1 },
      readonly: { type: Boolean, required: !1, default: !1 },
      loading: { type: Boolean, required: !1, default: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
      error: { type: [String, Object], required: !1 },
      message: { type: [String, Object], required: !1 },
      success: { type: [String, Object], required: !1 },
      placeholder: { type: String, required: !1 },
      modelValue: { type: Array, required: !1 },
      textMode: { type: null, required: !1 },
      hideSuccessIcon: { type: Boolean, required: !1, default: !1 },
      showFocus: { type: Boolean, required: !1 },
    },
    emits: ['inputClick', 'validityChange'],
    setup(e, { expose: t, emit: r }) {
      const { rootAttrs: n, restAttrs: o } = ta(),
        s = e,
        i = r,
        { t: l } = Qe(),
        { vCustomValidity: a, errorMessages: u } = Fp({ props: s, emit: i }),
        c = w(() => wo(s.success)),
        f = w(() => wo(s.message)),
        { disabled: h, showError: y } = Mr(s),
        g = Qn(s),
        v = vh(y),
        E = w(() => (s.modelValue ? s.modelValue.length : 0)),
        C = w(() => {
          var z;
          const V = (z = s.modelValue) == null ? void 0 : z.length;
          if (!s.modelValue || !V) return '';
          if (V === 1) return s.modelValue[0];
          switch (s.textMode) {
            case 'preview':
              return s.modelValue.join(', ');
            case 'summary':
            default:
              return l.value('selections.currentSelection', { n: V });
          }
        }),
        k = he(!1),
        { densityClass: A } = Je(s),
        R = Fe('inputRef');
      (t({ input: R }),
        Se(
          () => s.showFocus,
          (V, z) => {
            k.value || (z && V === !1 && (k.value = !0));
          },
        ));
      const P = Jl.concat(Yl),
        te = V => {
          P.includes(V.key) || V.preventDefault();
        };
      es(R, s);
      const Q = {
        rootAttrs: n,
        restAttrs: o,
        props: s,
        emit: i,
        t: l,
        vCustomValidity: a,
        errorMessages: u,
        successMessages: c,
        messages: f,
        disabled: h,
        showError: y,
        skeleton: g,
        errorClass: v,
        selectionCount: E,
        selectionText: C,
        wasTouched: k,
        densityClass: A,
        input: R,
        navigationalKeys: P,
        blockTyping: te,
        get iconCheckSmall() {
          return Af;
        },
        get iconChevronDownUp() {
          return If;
        },
        OnyxBadge: pp,
        OnyxFormElement: Ih,
        OnyxIcon: nt,
        OnyxLoadingIndicator: Lr,
        OnyxSkeleton: vn,
        OnyxTooltip: aa,
      };
      return (
        Object.defineProperty(Q, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        Q
      );
    },
  }),
  Th = [
    'id',
    'readonly',
    'placeholder',
    'required',
    'disabled',
    'aria-label',
    'title',
    'value',
    'autofocus',
  ],
  qh = ['aria-label', 'title', 'disabled'];
function Mh(e, t, r, n, o, s) {
  return n.skeleton
    ? (_(),
      M(
        'div',
        ve(
          {
            key: 0,
            class: [
              'onyx-component',
              'onyx-select-input-skeleton',
              n.densityClass,
            ],
          },
          n.rootAttrs,
        ),
        [
          n.props.hideLabel
            ? G('v-if', !0)
            : (_(),
              $(n.OnyxSkeleton, {
                key: 0,
                class: 'onyx-select-input-skeleton__label',
              })),
          H(n.OnyxSkeleton, { class: 'onyx-select-input-skeleton__input' }),
        ],
        16,
      ))
    : (_(),
      M(
        'div',
        ve(
          {
            key: 1,
            class: [
              'onyx-component',
              'onyx-select-input',
              n.densityClass,
              n.errorClass,
              n.props.readonly
                ? 'onyx-select-input--readonly'
                : 'onyx-select-input--editable',
            ],
          },
          n.rootAttrs,
        ),
        [
          H(
            n.OnyxFormElement,
            ve(n.props, {
              message: n.messages,
              'success-messages': n.successMessages,
              'error-messages': n.errorMessages,
            }),
            {
              default: W(({ id: i }) => [
                U(
                  'div',
                  {
                    class: 'onyx-select-input__wrapper',
                    onClick:
                      t[0] ||
                      (t[0] = l =>
                        !n.disabled &&
                        !n.props.loading &&
                        n.emit('inputClick')),
                  },
                  [
                    n.props.loading
                      ? (_(),
                        $(n.OnyxLoadingIndicator, {
                          key: 0,
                          class: 'onyx-select-input__loading',
                          type: 'circle',
                        }))
                      : G('v-if', !0),
                    Fo(
                      U(
                        'input',
                        ve(
                          {
                            id: i,
                            ref: 'inputRef',
                            class: {
                              'onyx-select-input__native': !0,
                              'onyx-select-input__native--show-focus':
                                n.props.showFocus,
                              'onyx-truncation-ellipsis': !0,
                              'onyx-select-input__native--touched':
                                n.wasTouched,
                            },
                          },
                          n.restAttrs,
                          {
                            type: 'text',
                            readonly: n.props.readonly,
                            placeholder: n.props.placeholder,
                            required: n.props.required,
                            disabled: n.disabled || n.props.loading,
                            'aria-label': n.props.hideLabel
                              ? n.props.label
                              : void 0,
                            title: n.props.hideLabel ? n.props.label : void 0,
                            value: n.selectionText,
                            autofocus: n.props.autofocus,
                            autocomplete: 'off',
                            onKeydown: n.blockTyping,
                          },
                        ),
                        null,
                        16,
                        Th,
                      ),
                      [[n.vCustomValidity]],
                    ),
                    n.props.textMode === 'preview' && n.selectionCount > 0
                      ? (_(),
                        $(
                          n.OnyxTooltip,
                          { key: 1, text: n.selectionText, position: 'bottom' },
                          {
                            default: W(({ trigger: l }) => [
                              H(
                                n.OnyxBadge,
                                ve({ class: 'onyx-select-input__badge' }, l, {
                                  color: 'neutral',
                                }),
                                {
                                  default: W(() => [
                                    Ee(fe(n.selectionCount), 1),
                                  ]),
                                  _: 2,
                                },
                                1040,
                              ),
                            ]),
                            _: 1,
                          },
                          8,
                          ['text'],
                        ))
                      : G('v-if', !0),
                    U(
                      'button',
                      {
                        class: 'onyx-select-input__button',
                        type: 'button',
                        'aria-label': n.t('select.toggleDropDown'),
                        title: n.t('select.toggleDropDown'),
                        tabindex: '-1',
                        disabled:
                          n.disabled || n.props.readonly || n.props.loading,
                      },
                      [
                        H(n.OnyxIcon, { icon: n.iconChevronDownUp }, null, 8, [
                          'icon',
                        ]),
                      ],
                      8,
                      qh,
                    ),
                    !n.props.hideSuccessIcon && n.successMessages
                      ? (_(),
                        $(
                          n.OnyxIcon,
                          {
                            key: 2,
                            class: 'onyx-select-input__check-icon',
                            icon: n.iconCheckSmall,
                            color: 'success',
                          },
                          null,
                          8,
                          ['icon'],
                        ))
                      : G('v-if', !0),
                  ],
                ),
              ]),
              _: 1,
            },
            16,
            ['message', 'success-messages', 'error-messages'],
          ),
        ],
        16,
      ));
}
const Lh = de(Ph, [
    ['render', Mh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSelectInput/OnyxSelectInput.vue',
    ],
  ]),
  Bh = oe({
    __name: 'OnyxListItem',
    props: {
      density: { type: null, required: !1 },
      selected: { type: Boolean, required: !1, default: !1 },
      checked: { type: Boolean, required: !1, default: !1 },
      active: { type: Boolean, required: !1, default: !1 },
      disabled: { type: Boolean, required: !1, default: !1 },
      color: { type: String, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        o = { props: r, densityClass: n };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  });
function jh(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'li',
      {
        class: _e({
          'onyx-component': !0,
          'onyx-list-item': !0,
          ...n.densityClass,
          'onyx-list-item--active': n.props.active,
          [`onyx-list-item--${n.props.color}`]: n.props.color,
          'onyx-list-item--disabled': n.props.disabled,
          'onyx-list-item--selected': n.props.selected,
          'onyx-list-item--checked': n.props.checked,
        }),
      },
      [ie(e.$slots, 'default')],
      2,
    )
  );
}
const Dh = de(Bh, [
    ['render', jh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxListItem/OnyxListItem.vue',
    ],
  ]),
  Nh = oe({
    __name: 'OnyxSelectOption',
    props: {
      active: { type: Boolean, required: !1, default: !1 },
      density: { type: null, required: !1 },
      multiple: { type: Boolean, required: !1, default: !1 },
      indeterminate: { type: Boolean, required: !1 },
      icon: { type: String, required: !1 },
      truncation: { type: null, required: !1, default: 'ellipsis' },
    },
    setup(e, { expose: t }) {
      t();
      const n = { props: e, OnyxIcon: nt, OnyxListItem: Dh };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  Vh = ['checked', 'aria-labelledby', 'disabled', 'indeterminate'];
function Hh(e, t, r, n, o, s) {
  return (
    _(),
    $(
      n.OnyxListItem,
      ve({ class: 'onyx-component onyx-select-option' }, n.props, {
        checked: !!e.$attrs['aria-checked'],
        selected: !!e.$attrs['aria-selected'],
        disabled: !!e.$attrs['aria-disabled'],
      }),
      {
        default: W(() => [
          n.props.multiple
            ? (_(),
              M(
                'input',
                {
                  key: 0,
                  checked: !!e.$attrs['aria-checked'],
                  'aria-labelledby': e.$attrs.id,
                  disabled: !!e.$attrs['aria-disabled'],
                  indeterminate: n.props.indeterminate,
                  'aria-hidden': 'true',
                  tabindex: '-1',
                  class: 'onyx-select-option__checkbox',
                  type: 'checkbox',
                },
                null,
                8,
                Vh,
              ))
            : G('v-if', !0),
          n.props.icon
            ? (_(),
              $(n.OnyxIcon, { key: 1, icon: n.props.icon }, null, 8, ['icon']))
            : G('v-if', !0),
          U(
            'span',
            { class: _e([`onyx-truncation-${n.props.truncation}`]) },
            [ie(e.$slots, 'default')],
            2,
          ),
        ]),
        _: 3,
      },
      16,
      ['checked', 'selected', 'disabled'],
    )
  );
}
const Fh = de(Nh, [
    ['render', Hh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSelectOption/OnyxSelectOption.vue',
    ],
  ]),
  zh = oe({
    __name: 'OnyxSelect',
    props: {
      density: { type: null, required: !1 },
      showError: { type: null, required: !1, default: _t },
      requiredMarker: { type: null, required: !1, default: _t },
      required: { type: Boolean, required: !1 },
      customError: { type: [String, Object], required: !1 },
      autofocus: { type: Boolean, required: !1 },
      id: { type: String, required: !1 },
      name: { type: String, required: !1 },
      label: { type: String, required: !0 },
      labelTooltip: { type: String, required: !1 },
      hideLabel: { type: Boolean, required: !1 },
      readonly: { type: Boolean, required: !1, default: !1 },
      loading: { type: Boolean, required: !1, default: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
      error: { type: [String, Object], required: !1 },
      message: { type: [String, Object], required: !1 },
      success: { type: [String, Object], required: !1 },
      placeholder: { type: String, required: !1 },
      textMode: { type: null, required: !1 },
      hideSuccessIcon: { type: Boolean, required: !1 },
      truncation: { type: null, required: !1, default: 'ellipsis' },
      noFilter: { type: Boolean, required: !1, default: !1 },
      withSearch: { type: Boolean, required: !1 },
      multiple: { type: null, required: !1 },
      withCheckAll: { type: null, required: !1 },
      disabled: { type: null, required: !1, default: _t },
      valueLabel: { type: [String, Array], required: !1, default: void 0 },
      alignment: { type: null, required: !1, default: 'full' },
      listLabel: { type: String, required: !0 },
      listDescription: { type: String, required: !1 },
      options: { type: Array, required: !0 },
      lazyLoading: { type: Object, required: !1 },
      keepSelectionOrder: { type: Boolean, required: !1, default: !1 },
      modelValue: { type: null, required: !1, default: void 0 },
      open: { type: null, required: !1, default: void 0 },
      searchTerm: { type: null, required: !1 },
    },
    emits: [
      'lazyLoad',
      'validityChange',
      'update:searchTerm',
      'update:modelValue',
      'update:open',
    ],
    setup(e, { expose: t, emit: r }) {
      const n = e,
        o = r,
        s = zt(),
        { t: i } = Qe(),
        { densityClass: l } = Je(n),
        a = qn({ props: n, emit: o, key: 'modelValue' }),
        u = qn({ props: n, emit: o, key: 'searchTerm', default: '' }),
        c = qn({ props: n, emit: o, key: 'open', default: !1 }),
        f = Fe('selectRef'),
        { openDirection: h, updateOpenDirection: y } = rs(f),
        g = he(),
        v = w(() => Ys(a.value)),
        E = w(() =>
          n.valueLabel !== void 0
            ? Ys(n.valueLabel)
            : v.value.reduce((d, m) => {
                var S;
                const b =
                  (S = n.options.find(({ value: x }) => x === m)) == null
                    ? void 0
                    : S.label;
                return (b && d.push(b), d);
              }, []),
        ),
        C = Fe('miniSearchRef'),
        k = Fe('selectInputRef'),
        A = w(() =>
          n.noFilter || !u.value
            ? n.options
            : n.options.filter(({ label: d }) => Hd(d, u.value)),
        );
      Se(
        v,
        () => {
          n.multiple || (g.value = v.value.at(0));
        },
        { immediate: !0 },
      );
      const R = Pt(),
        P = w(() =>
          (n.multiple && n.withCheckAll && !u.value ? [R] : []).concat(D.value),
        ),
        te = async d => {
          var S, x, j;
          const m = Js(We(), 'group');
          if (
            (n.keepSelectionOrder
              ? (Ke.value = ir(m))
              : (Ke.value = ir(m, i.value('selections.selectGroup'))),
            n.readonly)
          ) {
            c.value = !1;
            return;
          }
          const b = c.value;
          ((c.value = !b),
            await at(),
            c.value && y(),
            b !== c.value &&
              (b
                ? (u.value && (u.value = ''),
                  d ||
                    (x = (S = k.value) == null ? void 0 : S.input) == null ||
                    x.focus())
                : (j = C.value) == null || j.focus()));
        },
        Q = () => (g.value = P.value.at(0)),
        V = () => (g.value = P.value.at(-1)),
        z = d => {
          const m = P.value.findIndex(b => b === d);
          m < P.value.length - 1 && (g.value = P.value[m + 1]);
        },
        ae = d => {
          const m = P.value.findIndex(b => b === d);
          m > 0 && (g.value = P.value[m - 1]);
        },
        ue = d => {
          const m = A.value.find(b =>
            b.label.toLowerCase().trim().startsWith(d.toLowerCase()),
          );
          m && (g.value = m.value);
        },
        ce = d => (u.value = d),
        J = d => {
          var S;
          if (d === R) {
            (S = B.value) == null ||
              S.handleChange(!B.value.state.value.modelValue);
            return;
          }
          if (!A.value.find(({ value: x }) => x === d)) return;
          if (!n.multiple) {
            a.value = d;
            return;
          }
          v.value.some(x => x === d)
            ? (a.value = v.value.filter(x => x !== d))
            : (a.value = [...v.value, d]);
        },
        T = w(() => (n.withSearch ? 'list' : 'none')),
        { label: ne, listLabel: Z, listDescription: Y, multiple: pe } = Yi(n),
        {
          elements: { input: De, option: rt, group: $e, listbox: me },
        } = qd({
          autocomplete: T,
          label: ne,
          listLabel: Z,
          listDescription: Y,
          multiple: pe,
          activeOption: w(() => g.value),
          isExpanded: c,
          templateRef: f,
          onToggle: te,
          onActivateFirst: Q,
          onActivateLast: V,
          onActivateNext: z,
          onActivatePrevious: ae,
          onTypeAhead: ue,
          onAutocomplete: ce,
          onSelect: J,
        }),
        We = () => {
          if (
            n.keepSelectionOrder ||
            !a.value ||
            !Array.isArray(a.value) ||
            a.value.length == 0
          )
            return A.value;
          const d = new Set(a.value);
          return A.value.map(m => ({
            ...m,
            group: d.has(m.value) ? i.value('selections.selectGroup') : m.group,
          }));
        },
        Ke = he(),
        { vScrollEnd: it, isScrollEnd: Me } = _h({
          enabled: w(() => {
            var d;
            return ((d = n.lazyLoading) == null ? void 0 : d.enabled) ?? !1;
          }),
          loading: w(() => n.loading),
          offset: w(() => {
            var d;
            return (d = n.lazyLoading) == null ? void 0 : d.scrollOffset;
          }),
        }),
        O = w(() => {
          if (!A.value.length)
            return n.withSearch && u.value
              ? i.value('select.noMatch')
              : i.value('select.empty');
        }),
        D = w(() => A.value.filter(d => !d.disabled).map(({ value: d }) => d)),
        B = w(() => {
          if (!(!n.multiple || !n.withCheckAll))
            return Gp(D, v, d => {
              const m = d
                .map(b => {
                  var S;
                  return (S = n.options.find(({ value: x }) => x === b)) == null
                    ? void 0
                    : S.value;
                })
                .filter(b => b != null);
              a.value = m;
            });
        }),
        K = w(() => {
          var m;
          if (!n.multiple) return '';
          const d = i.value('selections.selectAll');
          return typeof n.withCheckAll == 'boolean'
            ? d
            : (((m = n.withCheckAll) == null ? void 0 : m.label) ?? d);
        });
      tn(() => {
        Me.value && o('lazyLoad');
      });
      const we = w(() => {
        const d = { ...n, open: void 0, modelValue: E.value };
        return n.withSearch
          ? { ...d, onKeydown: De.value.onKeydown }
          : { ...d, ...De.value };
      });
      (t({
        input: w(() => {
          var d;
          return (d = k.value) == null ? void 0 : d.input;
        }),
      }),
        Se(
          [A],
          () => {
            const d = Js(We(), 'group');
            n.keepSelectionOrder
              ? (Ke.value = ir(d))
              : (Ke.value = ir(d, i.value('selections.selectGroup')));
          },
          { deep: !0, immediate: !0 },
        ));
      const p = {
        props: n,
        emit: o,
        slots: s,
        t: i,
        densityClass: l,
        modelValue: a,
        searchTerm: u,
        open: c,
        select: f,
        openDirection: h,
        updateOpenDirection: y,
        activeValue: g,
        arrayValue: v,
        selectionLabels: E,
        miniSearch: C,
        selectInput: k,
        filteredOptions: A,
        CHECK_ALL_ID: R,
        allKeyboardOptionIds: P,
        onToggle: te,
        onActivateFirst: Q,
        onActivateLast: V,
        onActivateNext: z,
        onActivatePrevious: ae,
        onTypeAhead: ue,
        onAutocomplete: ce,
        onSelect: J,
        autocomplete: T,
        label: ne,
        listLabel: Z,
        listDescription: Y,
        multiple: pe,
        input: De,
        headlessOption: rt,
        headlessGroup: $e,
        listbox: me,
        getOptionsWithGroupForSelected: We,
        groupedOptions: Ke,
        vScrollEnd: it,
        isScrollEnd: Me,
        isEmptyMessage: O,
        enabledOptionValues: D,
        checkAll: B,
        checkAllLabel: K,
        selectInputProps: we,
        OnyxEmpty: nh,
        OnyxLoadingIndicator: Lr,
        OnyxMiniSearch: lh,
        OnyxPopover: fh,
        OnyxSelectInput: Lh,
        OnyxSelectOption: Fh,
      };
      return (
        Object.defineProperty(p, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  $h = { ref: 'selectRef', class: 'onyx-component onyx-select-wrapper' },
  Wh = { class: 'onyx-select__wrapper', tabindex: '-1' },
  Kh = { key: 0, role: 'group', class: 'onyx-select__group' },
  Uh = { role: 'option', 'aria-selected': 'false' },
  Gh = {
    key: 0,
    role: 'presentation',
    class: 'onyx-select__group-name onyx-text--small',
  },
  Jh = { key: 1, class: 'onyx-select__slot' },
  Yh = { key: 2, class: 'onyx-select__slot' },
  Xh = { key: 0, class: 'onyx-select__description onyx-text--small' };
function Qh(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      $h,
      [
        H(
          n.OnyxPopover,
          {
            class: _e(n.densityClass),
            label: n.props.listLabel,
            position: n.openDirection,
            alignment:
              n.props.alignment === 'full' ? 'center' : n.props.alignment,
            'fit-parent': n.props.alignment === 'full',
            open: n.open,
          },
          {
            default: W(() => [
              H(
                n.OnyxSelectInput,
                ve({ ref: 'selectInputRef' }, n.selectInputProps, {
                  'show-focus': n.open,
                  autofocus: n.props.autofocus,
                  onInputClick: n.onToggle,
                  onValidityChange:
                    t[0] || (t[0] = i => n.emit('validityChange', i)),
                }),
                null,
                16,
                ['show-focus', 'autofocus'],
              ),
            ]),
            content: W(() => {
              var i, l, a;
              return [
                Fo(
                  (_(),
                  M('div', Wh, [
                    n.props.withSearch
                      ? (_(),
                        $(
                          n.OnyxMiniSearch,
                          ve(
                            {
                              key: 0,
                              ref: 'miniSearchRef',
                              autofocus: '',
                              'model-value': n.searchTerm,
                            },
                            n.input,
                            {
                              label: n.t('select.searchInputLabel'),
                              class: 'onyx-select__search',
                              onClear:
                                t[1] || (t[1] = u => (n.searchTerm = '')),
                            },
                          ),
                          null,
                          16,
                          ['model-value', 'label'],
                        ))
                      : G('v-if', !0),
                    U(
                      'div',
                      wr(Jo(n.listbox)),
                      [
                        n.isEmptyMessage
                          ? (_(),
                            M('ul', Kh, [
                              U('li', Uh, [
                                ie(
                                  e.$slots,
                                  'empty',
                                  { defaultMessage: n.isEmptyMessage },
                                  () => [
                                    H(
                                      n.OnyxEmpty,
                                      { density: n.props.density },
                                      {
                                        default: W(() => [
                                          Ee(fe(n.isEmptyMessage), 1),
                                        ]),
                                        _: 1,
                                      },
                                      8,
                                      ['density'],
                                    ),
                                  ],
                                ),
                              ]),
                            ]))
                          : (_(),
                            M(
                              Ie,
                              { key: 1 },
                              [
                                n.props.multiple &&
                                n.props.withCheckAll &&
                                !n.searchTerm
                                  ? (_(),
                                    M(
                                      'ul',
                                      ve(
                                        {
                                          key: 0,
                                          class: 'onyx-select__check-all',
                                        },
                                        n.headlessGroup({
                                          label: n.checkAllLabel,
                                        }),
                                      ),
                                      [
                                        H(
                                          n.OnyxSelectOption,
                                          ve(
                                            n.headlessOption({
                                              value: n.CHECK_ALL_ID,
                                              label: n.checkAllLabel,
                                              selected:
                                                (i = n.checkAll) == null
                                                  ? void 0
                                                  : i.state.value.modelValue,
                                            }),
                                            {
                                              multiple: '',
                                              active:
                                                n.CHECK_ALL_ID ===
                                                n.activeValue,
                                              indeterminate:
                                                (l = n.checkAll) == null
                                                  ? void 0
                                                  : l.state.value.indeterminate,
                                              density: n.props.density,
                                            },
                                          ),
                                          {
                                            default: W(() => [
                                              Ee(fe(n.checkAllLabel), 1),
                                            ]),
                                            _: 1,
                                          },
                                          16,
                                          [
                                            'active',
                                            'indeterminate',
                                            'density',
                                          ],
                                        ),
                                      ],
                                      16,
                                    ))
                                  : G('v-if', !0),
                                (_(!0),
                                M(
                                  Ie,
                                  null,
                                  Ft(
                                    n.groupedOptions,
                                    u => (
                                      _(),
                                      M(
                                        'ul',
                                        ve(
                                          {
                                            key: u.name,
                                            class: 'onyx-select__group',
                                          },
                                          { ref_for: !0 },
                                          n.headlessGroup({ label: u.name }),
                                        ),
                                        [
                                          u.name !== ''
                                            ? (_(), M('li', Gh, fe(u.name), 1))
                                            : G('v-if', !0),
                                          (_(!0),
                                          M(
                                            Ie,
                                            null,
                                            Ft(
                                              u.items,
                                              c => (
                                                _(),
                                                $(
                                                  n.OnyxSelectOption,
                                                  ve(
                                                    { key: c.value.toString() },
                                                    { ref_for: !0 },
                                                    n.headlessOption({
                                                      value: c.value,
                                                      label: c.label,
                                                      disabled: c.disabled,
                                                      selected:
                                                        n.arrayValue.some(
                                                          f => f === c.value,
                                                        ),
                                                    }),
                                                    {
                                                      multiple:
                                                        n.props.multiple,
                                                      active:
                                                        c.value ===
                                                        n.activeValue,
                                                      icon: c.icon,
                                                      density: n.props.density,
                                                      truncation:
                                                        c.truncation ??
                                                        n.props.truncation,
                                                    },
                                                  ),
                                                  {
                                                    default: W(() => [
                                                      ie(
                                                        e.$slots,
                                                        'option',
                                                        ve({ ref_for: !0 }, c),
                                                        () => [
                                                          Ee(fe(c.label), 1),
                                                        ],
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1040,
                                                  [
                                                    'multiple',
                                                    'active',
                                                    'icon',
                                                    'density',
                                                    'truncation',
                                                  ],
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ],
                                        16,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ],
                              64,
                            )),
                      ],
                      16,
                    ),
                    (a = n.props.lazyLoading) != null && a.loading
                      ? (_(),
                        M('div', Jh, [
                          H(n.OnyxLoadingIndicator, {
                            class: 'onyx-select__loading',
                          }),
                        ]))
                      : G('v-if', !0),
                    n.slots.optionsEnd
                      ? (_(), M('div', Yh, [ie(e.$slots, 'optionsEnd')]))
                      : G('v-if', !0),
                  ])),
                  [[n.vScrollEnd]],
                ),
                n.props.listDescription
                  ? (_(), M('div', Xh, fe(n.props.listDescription), 1))
                  : G('v-if', !0),
              ];
            }),
            _: 3,
          },
          8,
          ['class', 'label', 'position', 'alignment', 'fit-parent', 'open'],
        ),
      ],
      512,
    )
  );
}
const Zh = de(zh, [
    ['render', Qh],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSelect/OnyxSelect.vue',
    ],
  ]),
  ey = oe({
    __name: 'OnyxExternalLinkIcon',
    props: {
      href: { type: String, required: !1 },
      withExternalIcon: {
        type: [Boolean, String],
        required: !1,
        default: 'auto',
      },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = w(() => {
          const s = r.withExternalIcon;
          return s !== 'auto' ? s : !Ql(r.href ?? '');
        }),
        o = {
          props: r,
          isVisible: n,
          get iconArrowSmallUpRight() {
            return Rf;
          },
          OnyxIcon: nt,
        };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  });
function ty(e, t, r, n, o, s) {
  return n.isVisible
    ? (_(),
      $(
        n.OnyxIcon,
        {
          key: 0,
          class: 'onyx-component onyx-external-link-icon',
          icon: n.iconArrowSmallUpRight,
          size: '16px',
        },
        null,
        8,
        ['icon'],
      ))
    : G('v-if', !0);
}
const ny = de(ey, [
    ['render', ty],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxExternalLinkIcon/OnyxExternalLinkIcon.vue',
    ],
  ]),
  ry = oe({
    __name: 'OnyxResizeHandle',
    props: {
      element: { type: null, required: !0 },
      min: { type: Number, required: !1, default: 1 },
      active: { type: Boolean, required: !1 },
      alignment: { type: null, required: !1, default: 'right' },
    },
    emits: ['updateWidth', 'autoSize', 'start', 'end'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        { t: s } = Qe(),
        i = he(),
        l = w(() => Qt(n.element));
      let a;
      const u = he(!1),
        c = () => {
          if (!l.value) return;
          ((i.value = l.value.getBoundingClientRect().width),
            (u.value = !0),
            (a = new AbortController()));
          const E = { signal: a.signal, passive: !0 };
          (window.addEventListener('mousemove', h, E),
            window.addEventListener('mouseup', y, E),
            window.addEventListener('keydown', g, E),
            o('start'));
        };
      ut(() => {
        Se(
          () => n.active,
          E => {
            E != null && (E && !u.value ? c() : !E && u.value && y());
          },
          { immediate: !0 },
        );
      });
      const f = () => {
          o('autoSize');
        },
        h = E => {
          if (!l.value || !u.value) return;
          const C = l.value.getBoundingClientRect();
          let k;
          (n.alignment === 'right'
            ? (k = E.clientX - C.left)
            : (k = C.right - E.clientX),
            o('updateWidth', Math.max(n.min, k)));
        },
        y = () => {
          (a == null || a.abort(),
            (i.value = void 0),
            (u.value = !1),
            o('end'));
        },
        g = E => {
          E.key === 'Escape' && (i.value && o('updateWidth', i.value), y());
        },
        v = {
          props: n,
          emit: o,
          t: s,
          previousWidth: i,
          currentElement: l,
          get abortController() {
            return a;
          },
          set abortController(E) {
            a = E;
          },
          isActive: u,
          handleMousedown: c,
          handleDoubleClick: f,
          onMouseMove: h,
          abort: y,
          onKeydown: g,
          OnyxVisuallyHidden: Zn,
        };
      return (
        Object.defineProperty(v, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        v
      );
    },
  });
function oy(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'button',
      {
        tabindex: '-1',
        type: 'button',
        class: _e([
          'onyx-component',
          'onyx-resize-handle',
          n.isActive ? 'onyx-resize-handle--active' : '',
          n.props.alignment === 'left' ? 'onyx-resize-handle--left' : '',
        ]),
        onMousedown: n.handleMousedown,
        onDblclick: n.handleDoubleClick,
      },
      [
        H(n.OnyxVisuallyHidden, null, {
          default: W(() => [Ee(fe(n.t('resizeHandle.label')), 1)]),
          _: 1,
        }),
      ],
      34,
    )
  );
}
const sy = de(ry, [
    ['render', oy],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxResizeHandle/OnyxResizeHandle.vue',
    ],
  ]),
  iy = oe({
    __name: 'OnyxIconButton',
    props: {
      density: { type: null, required: !1 },
      autofocus: { type: Boolean, required: !1 },
      link: { type: null, required: !1 },
      label: { type: String, required: !0 },
      disabled: { type: null, required: !1, default: _t },
      type: { type: null, required: !1, default: 'button' },
      color: { type: null, required: !1, default: 'primary' },
      loading: { type: Boolean, required: !1 },
      icon: { type: String, required: !1 },
      skeleton: { type: [Symbol, Boolean, Number], required: !1, default: nn },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        { densityClass: n } = Je(r),
        o = Qn(r),
        s = {
          props: r,
          densityClass: n,
          skeleton: o,
          ButtonOrLinkLayout: ts,
          OnyxIcon: nt,
          OnyxLoadingIndicator: Lr,
          OnyxSkeleton: vn,
        };
      return (
        Object.defineProperty(s, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function ly(e, t, r, n, o, s) {
  return n.skeleton
    ? (_(),
      $(
        n.OnyxSkeleton,
        { key: 0, class: _e(['onyx-icon-button-skeleton', n.densityClass]) },
        null,
        8,
        ['class'],
      ))
    : (_(),
      $(
        n.ButtonOrLinkLayout,
        ve({ key: 1 }, n.props, {
          'aria-label': n.props.label,
          title: n.props.label,
          class: [
            'onyx-component',
            'onyx-icon-button',
            `onyx-icon-button--${n.props.color}`,
            { 'onyx-icon-button--loading': n.props.loading },
            n.densityClass,
          ],
        }),
        {
          default: W(() => [
            n.props.loading
              ? (_(), $(n.OnyxLoadingIndicator, { key: 0, type: 'circle' }))
              : n.props.icon
                ? (_(),
                  $(n.OnyxIcon, { key: 1, icon: n.props.icon }, null, 8, [
                    'icon',
                  ]))
                : ie(e.$slots, 'default', { key: 2 }),
          ]),
          _: 3,
        },
        16,
        ['aria-label', 'title', 'class'],
      ));
}
const ay = de(iy, [
    ['render', ly],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxIconButton/OnyxIconButton.vue',
    ],
  ]),
  cy = oe({
    __name: 'OnyxLink',
    props: {
      href: { type: String, required: !1 },
      withExternalIcon: {
        type: [Boolean, String],
        required: !1,
        default: 'auto',
      },
      target: { type: null, required: !1, default: '_self' },
    },
    setup(e, { expose: t }) {
      t();
      const n = { props: e, OnyxExternalLinkIcon: ny, OnyxRouterLink: Zo };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  });
function uy(e, t, r, n, o, s) {
  return (
    _(),
    $(
      n.OnyxRouterLink,
      ve({ class: 'onyx-component onyx-link' }, n.props),
      {
        default: W(() => [
          ie(e.$slots, 'default'),
          H(n.OnyxExternalLinkIcon, wr(Jo(n.props)), null, 16),
        ]),
        _: 3,
      },
      16,
    )
  );
}
const jr = de(cy, [
    ['render', uy],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxLink/OnyxLink.vue',
    ],
  ]),
  fy = oe({
    __name: 'OnyxModalDialog',
    props: {
      density: { type: null, required: !1 },
      label: { type: String, required: !0 },
      open: { type: Boolean, required: !1 },
      disableClosingOnBackdropClick: { type: Boolean, required: !1 },
      alert: { type: Boolean, required: !1 },
    },
    emits: ['close'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        s = zt(),
        { t: i } = Qe(),
        { densityClass: l } = Je(n),
        a = Pt(),
        u = w(() => !!s.description),
        c = {
          props: n,
          emit: o,
          slots: s,
          t: i,
          densityClass: l,
          descriptionId: a,
          hasDescription: u,
          get iconXSmall() {
            return Tr;
          },
          OnyxDialog: Vd,
          OnyxHeadline: xt,
          OnyxSystemButton: ns,
        };
      return (
        Object.defineProperty(c, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        c
      );
    },
  }),
  dy = { class: 'onyx-modal-dialog__header' },
  py = { class: 'onyx-modal-dialog__headline' },
  hy = { class: 'onyx-modal-dialog__headline-content' },
  yy = ['id'],
  my = { class: 'onyx-modal-dialog__body' },
  gy = { key: 0, class: 'onyx-modal-dialog__footer' };
function _y(e, t, r, n, o, s) {
  return (
    _(),
    $(
      n.OnyxDialog,
      ve(n.props, {
        class: ['onyx-modal-dialog', n.densityClass],
        'aria-describedby': n.hasDescription ? n.descriptionId : void 0,
        modal: '',
        onClose: t[1] || (t[1] = i => n.emit('close')),
      }),
      {
        default: W(() => [
          U('div', dy, [
            U('div', py, [
              U('div', hy, [
                ie(e.$slots, 'headline', { label: n.props.label }, () => [
                  H(
                    n.OnyxHeadline,
                    { is: 'h2' },
                    { default: W(() => [Ee(fe(n.props.label), 1)]), _: 1 },
                  ),
                ]),
              ]),
              H(
                n.OnyxSystemButton,
                {
                  class: 'onyx-alert-dialog__close',
                  label: n.t('dialog.close'),
                  icon: n.iconXSmall,
                  onClick: t[0] || (t[0] = i => n.emit('close')),
                },
                null,
                8,
                ['label', 'icon'],
              ),
            ]),
            n.hasDescription
              ? (_(),
                M(
                  'div',
                  {
                    key: 0,
                    id: n.descriptionId,
                    class: 'onyx-modal-dialog__description onyx-text--small',
                  },
                  [ie(e.$slots, 'description')],
                  8,
                  yy,
                ))
              : G('v-if', !0),
          ]),
          U('div', my, [ie(e.$slots, 'default')]),
          n.slots.footer
            ? (_(), M('div', gy, [ie(e.$slots, 'footer')]))
            : G('v-if', !0),
        ]),
        _: 3,
      },
      16,
      ['class', 'aria-describedby'],
    )
  );
}
const vy = de(fy, [
    ['render', _y],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxModalDialog/OnyxModalDialog.vue',
    ],
  ]),
  by = oe({
    __name: 'OnyxInfoCard',
    props: {
      density: { type: null, required: !1 },
      headline: { type: String, required: !1 },
      color: { type: null, required: !1, default: 'info' },
      icon: { type: [String, Boolean], required: !1, default: Nl },
      closable: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['close'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        s = zt(),
        { t: i } = Qe(),
        { densityClass: l } = Je(n),
        a = {
          props: n,
          emit: o,
          slots: s,
          t: i,
          densityClass: l,
          get iconXSmall() {
            return Tr;
          },
          OnyxHeadline: xt,
          OnyxIcon: nt,
          OnyxSystemButton: ns,
        };
      return (
        Object.defineProperty(a, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  xy = { class: 'onyx-info-card__content' },
  Sy = { key: 2, class: 'onyx-info-card__description onyx-text--small' },
  wy = { key: 3, class: 'onyx-info-card__buttons onyx-density-compact' };
function Oy(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        class: _e([
          'onyx-component',
          'onyx-info-card',
          `onyx-info-card--${n.props.color}`,
          n.densityClass,
        ]),
      },
      [
        n.props.icon
          ? (_(),
            $(
              n.OnyxIcon,
              { key: 0, class: 'onyx-info-card__icon', icon: n.props.icon },
              null,
              8,
              ['icon'],
            ))
          : G('v-if', !0),
        U('div', xy, [
          n.props.headline
            ? (_(),
              $(
                n.OnyxHeadline,
                {
                  key: 0,
                  is: 'h3',
                  class: 'onyx-info-card__headline onyx-truncation-multiline',
                },
                { default: W(() => [Ee(fe(n.props.headline), 1)]), _: 1 },
              ))
            : G('v-if', !0),
          n.props.closable
            ? (_(),
              $(
                n.OnyxSystemButton,
                {
                  key: 1,
                  class: 'onyx-info-card__close',
                  icon: n.iconXSmall,
                  label: n.t('close'),
                  color: n.props.color === 'neutral' ? 'soft' : 'medium',
                  onClick: t[0] || (t[0] = i => n.emit('close')),
                },
                null,
                8,
                ['icon', 'label', 'color'],
              ))
            : G('v-if', !0),
          n.slots.default
            ? (_(), M('p', Sy, [ie(e.$slots, 'default')]))
            : G('v-if', !0),
          n.slots.buttons
            ? (_(), M('div', wy, [ie(e.$slots, 'buttons')]))
            : G('v-if', !0),
        ]),
      ],
      2,
    )
  );
}
const da = de(by, [
    ['render', Oy],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxInfoCard/OnyxInfoCard.vue',
    ],
  ]),
  ky = Symbol(),
  Ey = () => {
    let e = 1;
    const t = he([]),
      r = o => {
        const s = e++;
        t.value.unshift({ ...o, id: s, onClose: () => n(s) });
      },
      n = o => {
        t.value = t.value.filter(s => s.id !== o);
      };
    return { notifications: w(() => t.value), show: r, remove: n };
  },
  Cy = oe({
    __name: 'OnyxPageLayout',
    props: {
      skeleton: { type: Boolean, required: !1 },
      footerAlignment: { type: String, required: !1, default: 'full' },
      noPadding: { type: Boolean, required: !1 },
    },
    setup(e, { expose: t }) {
      t();
      const r = e,
        n = zt();
      Mf(r);
      const o = { props: r, slots: n };
      return (
        Object.defineProperty(o, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  Ry = { key: 0, class: 'onyx-page__sidebar' },
  Ay = { class: 'onyx-page__main' },
  Iy = { key: 0, class: 'onyx-grid-container' },
  Py = { key: 1, class: 'onyx-grid-layout' },
  Ty = { key: 1, class: 'onyx-page__sidebar onyx-page__sidebar--right' },
  qy = { key: 2, class: 'onyx-page__footer' };
function My(e, t, r, n, o, s) {
  return (
    _(),
    M(
      'div',
      {
        class: _e([
          'onyx-component onyx-page',
          [
            'onyx-component',
            'onyx-page',
            n.props.footerAlignment === 'page' ? 'onyx-page--footer-page' : '',
          ],
        ]),
      },
      [
        n.slots.sidebar
          ? (_(), M('div', Ry, [ie(e.$slots, 'sidebar')]))
          : G('v-if', !0),
        U('main', Ay, [
          n.props.noPadding
            ? (_(), M('div', Iy, [ie(e.$slots, 'default')]))
            : (_(), M('div', Py, [ie(e.$slots, 'default')])),
        ]),
        n.slots.sidebarRight
          ? (_(), M('div', Ty, [ie(e.$slots, 'sidebarRight')]))
          : G('v-if', !0),
        n.slots.footer
          ? (_(), M('div', qy, [ie(e.$slots, 'footer')]))
          : G('v-if', !0),
      ],
      2,
    )
  );
}
const Dr = de(Cy, [
    ['render', My],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxPageLayout/OnyxPageLayout.vue',
    ],
  ]),
  Ly = oe({
    __name: 'OnyxSidebar',
    props: {
      density: { type: null, required: !1 },
      label: { type: String, required: !0 },
      temporary: { type: Object, required: !1 },
      resizable: { type: Boolean, required: !1, default: !0 },
      alignment: { type: null, required: !1, default: 'left' },
    },
    emits: ['close'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        s = zt(),
        { densityClass: i } = Je(n),
        l = Fe('sidebarRef'),
        a = Fe('modalRef'),
        u = he(),
        c = w(() => {
          if (u.value) return { '--onyx-sidebar-width': `${u.value}px` };
        }),
        f = w(() => ({
          onUpdateWidth: y => (u.value = y),
          onAutoSize: () => (u.value = void 0),
          alignment: n.alignment === 'left' ? 'right' : 'left',
        })),
        h = {
          props: n,
          emit: o,
          slots: s,
          densityClass: i,
          sidebarElement: l,
          modalElement: a,
          width: u,
          widthStyle: c,
          resizeHandleProps: f,
          OnyxModalDialog: vy,
          OnyxResizeHandle: sy,
        };
      return (
        Object.defineProperty(h, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        h
      );
    },
  }),
  By = ['aria-label'],
  jy = { key: 0, class: 'onyx-sidebar__header' },
  Dy = { class: 'onyx-sidebar__body' },
  Ny = { key: 1, class: 'onyx-sidebar__footer' },
  Vy = { class: 'onyx-sidebar__footer' };
function Hy(e, t, r, n, o, s) {
  return n.props.temporary
    ? (_(),
      $(
        n.OnyxModalDialog,
        ve({ key: 1, ref: 'modalRef' }, n.props.temporary, {
          class: [
            'onyx-sidebar',
            'onyx-sidebar--temporary',
            n.props.alignment === 'right' ? 'onyx-sidebar--right' : '',
            n.props.temporary.floating ? 'onyx-sidebar--floating' : '',
          ],
          label: n.props.label,
          density: n.props.density,
          style: n.widthStyle,
          alignment: n.props.alignment,
          onClose: t[0] || (t[0] = i => n.emit('close')),
        }),
        Hc(
          {
            default: W(() => [
              ie(e.$slots, 'default'),
              n.props.resizable
                ? (_(),
                  $(
                    n.OnyxResizeHandle,
                    ve(
                      { key: 0, element: n.modalElement },
                      n.resizeHandleProps,
                    ),
                    null,
                    16,
                    ['element'],
                  ))
                : G('v-if', !0),
            ]),
            _: 2,
          },
          [
            n.slots.header
              ? {
                  name: 'headline',
                  fn: W(() => [ie(e.$slots, 'header')]),
                  key: '0',
                }
              : void 0,
            n.slots.description
              ? {
                  name: 'description',
                  fn: W(() => [ie(e.$slots, 'description')]),
                  key: '1',
                }
              : void 0,
            n.slots.footer
              ? {
                  name: 'footer',
                  fn: W(() => [U('div', Vy, [ie(e.$slots, 'footer')])]),
                  key: '2',
                }
              : void 0,
          ],
        ),
        1040,
        ['class', 'label', 'density', 'style', 'alignment'],
      ))
    : (_(),
      M(
        'aside',
        {
          key: 0,
          ref: 'sidebarRef',
          class: _e([
            'onyx-component',
            'onyx-sidebar',
            'onyx-grid-container',
            n.densityClass,
            n.props.alignment === 'right' ? 'onyx-sidebar--right' : '',
          ]),
          'aria-label': n.props.label,
          style: vt(n.widthStyle),
        },
        [
          n.slots.header
            ? (_(), M('header', jy, [ie(e.$slots, 'header')]))
            : G('v-if', !0),
          U('div', Dy, [ie(e.$slots, 'default')]),
          n.slots.footer
            ? (_(), M('footer', Ny, [ie(e.$slots, 'footer')]))
            : G('v-if', !0),
          n.props.resizable
            ? (_(),
              $(
                n.OnyxResizeHandle,
                ve({ key: 2, element: n.sidebarElement }, n.resizeHandleProps),
                null,
                16,
                ['element'],
              ))
            : G('v-if', !0),
        ],
        14,
        By,
      ));
}
const Fy = de(Ly, [
    ['render', Hy],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxSidebar/OnyxSidebar.vue',
    ],
  ]),
  zy = oe({
    __name: 'OnyxToastMessage',
    props: {
      density: { type: null, required: !1 },
      headline: { type: String, required: !0 },
      description: { type: String, required: !1 },
      color: { type: String, required: !1, default: 'neutral' },
      duration: { type: Number, required: !1, default: 5e3 },
      clickable: { type: Boolean, required: !1, default: !1 },
      icon: { type: [String, Boolean], required: !1, default: void 0 },
    },
    emits: ['close'],
    setup(e, { expose: t, emit: r }) {
      t();
      const n = e,
        o = r,
        { t: s } = Qe(),
        { densityClass: i } = Je(n),
        l = w(() => n.duration > 0),
        a = { neutral: Vl, danger: Hl, warning: Nl, success: Pf },
        u = w(() => {
          if (n.icon !== !1) return n.icon || a[n.color];
        }),
        c = {
          props: n,
          emit: o,
          t: s,
          densityClass: i,
          hasProgressBar: l,
          DEFAULT_ICONS: a,
          icon: u,
          get iconXSmall() {
            return Tr;
          },
          OnyxIcon: nt,
        };
      return (
        Object.defineProperty(c, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        c
      );
    },
  }),
  $y = { class: 'onyx-toast-message__wrapper' },
  Wy = { class: 'onyx-toast-message__content onyx-truncation-ellipsis' },
  Ky = { class: 'onyx-toast-message__headline onyx-text' },
  Uy = { class: 'onyx-truncation-ellipsis' },
  Gy = ['aria-label'],
  Jy = {
    key: 0,
    class:
      'onyx-toast-message__description onyx-text--small onyx-truncation-multiline',
    tabindex: '0',
  };
function Yy(e, t, r, n, o, s) {
  return (
    _(),
    $(
      Yn(n.props.clickable ? 'button' : 'div'),
      {
        class: _e([
          'onyx-component onyx-toast-message',
          [`onyx-toast-message--${n.props.color}`, n.densityClass],
        ]),
        role:
          n.props.color === 'danger' || n.props.color === 'warning'
            ? 'alert'
            : 'status',
        'aria-label': n.props.clickable ? n.props.headline : void 0,
      },
      {
        default: W(() => [
          U('div', $y, [
            n.icon
              ? (_(),
                $(n.OnyxIcon, { key: 0, icon: n.icon }, null, 8, ['icon']))
              : G('v-if', !0),
            U('div', Wy, [
              U('div', Ky, [
                U('span', Uy, fe(n.props.headline), 1),
                n.props.clickable
                  ? G('v-if', !0)
                  : (_(),
                    M(
                      'button',
                      {
                        key: 0,
                        type: 'button',
                        'aria-label': n.t('close'),
                        class: 'onyx-toast-message__close',
                        onClick: t[0] || (t[0] = i => n.emit('close')),
                      },
                      [
                        H(n.OnyxIcon, { icon: n.iconXSmall }, null, 8, [
                          'icon',
                        ]),
                      ],
                      8,
                      Gy,
                    )),
              ]),
              n.props.description
                ? (_(), M('p', Jy, fe(n.props.description), 1))
                : G('v-if', !0),
            ]),
          ]),
          n.hasProgressBar
            ? (_(),
              M(
                'time',
                {
                  key: n.props.duration,
                  'aria-hidden': 'true',
                  class: 'onyx-toast-message__progress-bar',
                  style: vt({ animationDuration: `${n.props.duration}ms` }),
                  onAnimationend: t[1] || (t[1] = i => n.emit('close')),
                },
                null,
                36,
              ))
            : G('v-if', !0),
        ]),
        _: 1,
      },
      8,
      ['class', 'role', 'aria-label'],
    )
  );
}
const Xy = de(zy, [
    ['render', Yy],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxToastMessage/OnyxToastMessage.vue',
    ],
  ]),
  pa = Symbol(),
  Qy = () => {
    let e = 1;
    const t = he([]),
      r = o => {
        const s = e++;
        t.value.push({ ...o, id: s, onClose: () => n(s) });
      },
      n = o => {
        t.value = t.value.filter(s => s.id !== o);
      };
    return { toasts: w(() => t.value), show: r, remove: n };
  },
  Zy = () => {
    const e = () => {};
    return Le(pa, () => ({ toasts: w(() => []), show: e, remove: e }), !0);
  },
  em = oe({
    __name: 'OnyxToast',
    setup(e, { expose: t }) {
      t();
      const n = { toastProvider: Zy(), OnyxToastMessage: Xy };
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      );
    },
  }),
  tm = {
    key: 0,
    class: 'onyx-component onyx-toast',
    role: 'presentation',
    'aria-live': 'polite',
    open: '',
  };
function nm(e, t, r, n, o, s) {
  return n.toastProvider.toasts.value.length
    ? (_(),
      M('dialog', tm, [
        (_(!0),
        M(
          Ie,
          null,
          Ft(
            n.toastProvider.toasts.value,
            ({ id: i, ...l }) => (
              _(),
              $(
                n.OnyxToastMessage,
                ve({ key: i }, { ref_for: !0 }, l),
                null,
                16,
              )
            ),
          ),
          128,
        )),
      ]))
    : G('v-if', !0);
}
const rm = de(em, [
    ['render', nm],
    [
      '__file',
      '/home/runner/work/onyx/onyx/packages/sit-onyx/src/components/OnyxToast/OnyxToast.vue',
    ],
  ]),
  om = e => {
    ut(() => {
      Se([e], () => {
        const t = document.documentElement,
          r = 'onyx-transition-active',
          n = () => {
            t.classList.remove(r);
          };
        (t.addEventListener('transitionend', n, { once: !0 }),
          t.classList.add(r));
      });
    });
  },
  sm = (e = {}) => ({
    install: t => {
      Sd(t, e.i18n);
      const r = t.runWithContext(() => Qe());
      (t.provide(pa, Qy()),
        t.provide(ky, Ey()),
        e.router && t.provide(ea, e.router),
        t.mixin({
          beforeMount: () => {
            tn(() => {
              im(r.t.value('optional'));
            });
          },
        }));
    },
  }),
  im = e => {
    var t;
    (t = globalThis.document) == null ||
      t.body.style.setProperty('--onyx-global-optional-text', `"${e}"`);
  },
  lm = oe({
    __name: 'App',
    setup(e) {
      const { store: t } = Cf({ disableTransition: !1 });
      return (
        om(t),
        (r, n) => {
          const o = Vc('RouterView');
          return (
            _(),
            $(
              F(up),
              { class: 'onyx-grid-max-md onyx-grid-center' },
              { default: W(() => [H(o), H(F(rm))]), _: 1 },
            )
          );
        }
      );
    },
  });
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ let ha;
const Nr = e => (ha = e),
  ya = Symbol();
function Oo(e) {
  return (
    e &&
    typeof e == 'object' &&
    Object.prototype.toString.call(e) === '[object Object]' &&
    typeof e.toJSON != 'function'
  );
}
var Mn;
(function (e) {
  ((e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function'));
})(Mn || (Mn = {}));
function am() {
  const e = Pi(!0),
    t = e.run(() => he({}));
  let r = [],
    n = [];
  const o = Vo({
    install(s) {
      (Nr(o),
        (o._a = s),
        s.provide(ya, o),
        (s.config.globalProperties.$pinia = o),
        n.forEach(i => r.push(i)),
        (n = []));
    },
    use(s) {
      return (this._a ? r.push(s) : n.push(s), this);
    },
    _p: r,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return o;
}
const ma = () => {};
function Qs(e, t, r, n = ma) {
  e.push(t);
  const o = () => {
    const s = e.indexOf(t);
    s > -1 && (e.splice(s, 1), n());
  };
  return (!r && qo() && Ti(o), o);
}
function sn(e, ...t) {
  e.slice().forEach(r => {
    r(...t);
  });
}
const cm = e => e(),
  Zs = Symbol(),
  no = Symbol();
function ko(e, t) {
  e instanceof Map && t instanceof Map
    ? t.forEach((r, n) => e.set(n, r))
    : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const r in t) {
    if (!t.hasOwnProperty(r)) continue;
    const n = t[r],
      o = e[r];
    Oo(o) && Oo(n) && e.hasOwnProperty(r) && !Pe(n) && !Nt(n)
      ? (e[r] = ko(o, n))
      : (e[r] = n);
  }
  return e;
}
const um = Symbol();
function fm(e) {
  return !Oo(e) || !Object.prototype.hasOwnProperty.call(e, um);
}
const { assign: Mt } = Object;
function dm(e) {
  return !!(Pe(e) && e.effect);
}
function pm(e, t, r, n) {
  const { state: o, actions: s, getters: i } = t,
    l = r.state.value[e];
  let a;
  function u() {
    l || (r.state.value[e] = o ? o() : {});
    const c = Yi(r.state.value[e]);
    return Mt(
      c,
      s,
      Object.keys(i || {}).reduce(
        (f, h) => (
          (f[h] = Vo(
            w(() => {
              Nr(r);
              const y = r._s.get(e);
              return i[h].call(y, y);
            }),
          )),
          f
        ),
        {},
      ),
    );
  }
  return ((a = ga(e, u, t, r, n, !0)), a);
}
function ga(e, t, r = {}, n, o, s) {
  let i;
  const l = Mt({ actions: {} }, r),
    a = { deep: !0 };
  let u,
    c,
    f = [],
    h = [],
    y;
  const g = n.state.value[e];
  (!s && !g && (n.state.value[e] = {}), he({}));
  let v;
  function E(V) {
    let z;
    ((u = c = !1),
      typeof V == 'function'
        ? (V(n.state.value[e]),
          (z = { type: Mn.patchFunction, storeId: e, events: y }))
        : (ko(n.state.value[e], V),
          (z = { type: Mn.patchObject, payload: V, storeId: e, events: y })));
    const ae = (v = Symbol());
    (at().then(() => {
      v === ae && (u = !0);
    }),
      (c = !0),
      sn(f, z, n.state.value[e]));
  }
  const C = s
    ? function () {
        const { state: z } = r,
          ae = z ? z() : {};
        this.$patch(ue => {
          Mt(ue, ae);
        });
      }
    : ma;
  function k() {
    (i.stop(), (f = []), (h = []), n._s.delete(e));
  }
  const A = (V, z = '') => {
      if (Zs in V) return ((V[no] = z), V);
      const ae = function () {
        Nr(n);
        const ue = Array.from(arguments),
          ce = [],
          J = [];
        function T(Y) {
          ce.push(Y);
        }
        function ne(Y) {
          J.push(Y);
        }
        sn(h, { args: ue, name: ae[no], store: P, after: T, onError: ne });
        let Z;
        try {
          Z = V.apply(this && this.$id === e ? this : P, ue);
        } catch (Y) {
          throw (sn(J, Y), Y);
        }
        return Z instanceof Promise
          ? Z.then(Y => (sn(ce, Y), Y)).catch(
              Y => (sn(J, Y), Promise.reject(Y)),
            )
          : (sn(ce, Z), Z);
      };
      return ((ae[Zs] = !0), (ae[no] = z), ae);
    },
    R = {
      _p: n,
      $id: e,
      $onAction: Qs.bind(null, h),
      $patch: E,
      $reset: C,
      $subscribe(V, z = {}) {
        const ae = Qs(f, V, z.detached, () => ue()),
          ue = i.run(() =>
            Se(
              () => n.state.value[e],
              ce => {
                (z.flush === 'sync' ? c : u) &&
                  V({ storeId: e, type: Mn.direct, events: y }, ce);
              },
              Mt({}, a, z),
            ),
          );
        return ae;
      },
      $dispose: k,
    },
    P = en(R);
  n._s.set(e, P);
  const Q = ((n._a && n._a.runWithContext) || cm)(() =>
    n._e.run(() => (i = Pi()).run(() => t({ action: A }))),
  );
  for (const V in Q) {
    const z = Q[V];
    if ((Pe(z) && !dm(z)) || Nt(z))
      s ||
        (g && fm(z) && (Pe(z) ? (z.value = g[V]) : ko(z, g[V])),
        (n.state.value[e][V] = z));
    else if (typeof z == 'function') {
      const ae = A(z, V);
      ((Q[V] = ae), (l.actions[V] = z));
    }
  }
  return (
    Mt(P, Q),
    Mt(ge(P), Q),
    Object.defineProperty(P, '$state', {
      get: () => n.state.value[e],
      set: V => {
        E(z => {
          Mt(z, V);
        });
      },
    }),
    n._p.forEach(V => {
      Mt(
        P,
        i.run(() => V({ store: P, app: n._a, pinia: n, options: l })),
      );
    }),
    g && s && r.hydrate && r.hydrate(P.$state, g),
    (u = !0),
    (c = !0),
    P
  );
}
/*! #__NO_SIDE_EFFECTS__ */ function os(e, t, r) {
  let n;
  const o = typeof t == 'function';
  n = o ? r : t;
  function s(i, l) {
    const a = Wo();
    return (
      (i = i || (a ? Le(ya, null) : null)),
      i && Nr(i),
      (i = ha),
      i._s.has(e) || (o ? ga(e, t, n, i) : pm(e, n, i)),
      i._s.get(e)
    );
  }
  return ((s.$id = e), s);
}
/*!
 * vue-router v4.5.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */ const cn = typeof document < 'u';
function _a(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  );
}
function hm(e) {
  return (
    e.__esModule ||
    e[Symbol.toStringTag] === 'Module' ||
    (e.default && _a(e.default))
  );
}
const be = Object.assign;
function ro(e, t) {
  const r = {};
  for (const n in t) {
    const o = t[n];
    r[n] = ct(o) ? o.map(e) : e(o);
  }
  return r;
}
const Ln = () => {},
  ct = Array.isArray,
  va = /#/g,
  ym = /&/g,
  mm = /\//g,
  gm = /=/g,
  _m = /\?/g,
  ba = /\+/g,
  vm = /%5B/g,
  bm = /%5D/g,
  xa = /%5E/g,
  xm = /%60/g,
  Sa = /%7B/g,
  Sm = /%7C/g,
  wa = /%7D/g,
  wm = /%20/g;
function ss(e) {
  return encodeURI('' + e)
    .replace(Sm, '|')
    .replace(vm, '[')
    .replace(bm, ']');
}
function Om(e) {
  return ss(e).replace(Sa, '{').replace(wa, '}').replace(xa, '^');
}
function Eo(e) {
  return ss(e)
    .replace(ba, '%2B')
    .replace(wm, '+')
    .replace(va, '%23')
    .replace(ym, '%26')
    .replace(xm, '`')
    .replace(Sa, '{')
    .replace(wa, '}')
    .replace(xa, '^');
}
function km(e) {
  return Eo(e).replace(gm, '%3D');
}
function Em(e) {
  return ss(e).replace(va, '%23').replace(_m, '%3F');
}
function Cm(e) {
  return e == null ? '' : Em(e).replace(mm, '%2F');
}
function Un(e) {
  try {
    return decodeURIComponent('' + e);
  } catch {}
  return '' + e;
}
const Rm = /\/$/,
  Am = e => e.replace(Rm, '');
function oo(e, t, r = '/') {
  let n,
    o = {},
    s = '',
    i = '';
  const l = t.indexOf('#');
  let a = t.indexOf('?');
  return (
    l < a && l >= 0 && (a = -1),
    a > -1 &&
      ((n = t.slice(0, a)),
      (s = t.slice(a + 1, l > -1 ? l : t.length)),
      (o = e(s))),
    l > -1 && ((n = n || t.slice(0, l)), (i = t.slice(l, t.length))),
    (n = qm(n ?? t, r)),
    { fullPath: n + (s && '?') + s + i, path: n, query: o, hash: Un(i) }
  );
}
function Im(e, t) {
  const r = t.query ? e(t.query) : '';
  return t.path + (r && '?') + r + (t.hash || '');
}
function ei(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/';
}
function Pm(e, t, r) {
  const n = t.matched.length - 1,
    o = r.matched.length - 1;
  return (
    n > -1 &&
    n === o &&
    gn(t.matched[n], r.matched[o]) &&
    Oa(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  );
}
function gn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Oa(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const r in e) if (!Tm(e[r], t[r])) return !1;
  return !0;
}
function Tm(e, t) {
  return ct(e) ? ti(e, t) : ct(t) ? ti(t, e) : e === t;
}
function ti(e, t) {
  return ct(t)
    ? e.length === t.length && e.every((r, n) => r === t[n])
    : e.length === 1 && e[0] === t;
}
function qm(e, t) {
  if (e.startsWith('/')) return e;
  if (!e) return t;
  const r = t.split('/'),
    n = e.split('/'),
    o = n[n.length - 1];
  (o === '..' || o === '.') && n.push('');
  let s = r.length - 1,
    i,
    l;
  for (i = 0; i < n.length; i++)
    if (((l = n[i]), l !== '.'))
      if (l === '..') s > 1 && s--;
      else break;
  return r.slice(0, s).join('/') + '/' + n.slice(i).join('/');
}
const qt = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0,
};
var Gn;
(function (e) {
  ((e.pop = 'pop'), (e.push = 'push'));
})(Gn || (Gn = {}));
var Bn;
(function (e) {
  ((e.back = 'back'), (e.forward = 'forward'), (e.unknown = ''));
})(Bn || (Bn = {}));
function Mm(e) {
  if (!e)
    if (cn) {
      const t = document.querySelector('base');
      ((e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, '')));
    } else e = '/';
  return (e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Am(e));
}
const Lm = /^[^#]+#/;
function Bm(e, t) {
  return e.replace(Lm, '#') + t;
}
function jm(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0),
  };
}
const Vr = () => ({ left: window.scrollX, top: window.scrollY });
function Dm(e) {
  let t;
  if ('el' in e) {
    const r = e.el,
      n = typeof r == 'string' && r.startsWith('#'),
      o =
        typeof r == 'string'
          ? n
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r;
    if (!o) return;
    t = jm(o, e);
  } else t = e;
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.scrollX,
        t.top != null ? t.top : window.scrollY,
      );
}
function ni(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const Co = new Map();
function Nm(e, t) {
  Co.set(e, t);
}
function Vm(e) {
  const t = Co.get(e);
  return (Co.delete(e), t);
}
let Hm = () => location.protocol + '//' + location.host;
function ka(e, t) {
  const { pathname: r, search: n, hash: o } = t,
    s = e.indexOf('#');
  if (s > -1) {
    let l = o.includes(e.slice(s)) ? e.slice(s).length : 1,
      a = o.slice(l);
    return (a[0] !== '/' && (a = '/' + a), ei(a, ''));
  }
  return ei(r, e) + n + o;
}
function Fm(e, t, r, n) {
  let o = [],
    s = [],
    i = null;
  const l = ({ state: h }) => {
    const y = ka(e, location),
      g = r.value,
      v = t.value;
    let E = 0;
    if (h) {
      if (((r.value = y), (t.value = h), i && i === g)) {
        i = null;
        return;
      }
      E = v ? h.position - v.position : 0;
    } else n(y);
    o.forEach(C => {
      C(r.value, g, {
        delta: E,
        type: Gn.pop,
        direction: E ? (E > 0 ? Bn.forward : Bn.back) : Bn.unknown,
      });
    });
  };
  function a() {
    i = r.value;
  }
  function u(h) {
    o.push(h);
    const y = () => {
      const g = o.indexOf(h);
      g > -1 && o.splice(g, 1);
    };
    return (s.push(y), y);
  }
  function c() {
    const { history: h } = window;
    h.state && h.replaceState(be({}, h.state, { scroll: Vr() }), '');
  }
  function f() {
    for (const h of s) h();
    ((s = []),
      window.removeEventListener('popstate', l),
      window.removeEventListener('beforeunload', c));
  }
  return (
    window.addEventListener('popstate', l),
    window.addEventListener('beforeunload', c, { passive: !0 }),
    { pauseListeners: a, listen: u, destroy: f }
  );
}
function ri(e, t, r, n = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: o ? Vr() : null,
  };
}
function zm(e) {
  const { history: t, location: r } = window,
    n = { value: ka(e, r) },
    o = { value: t.state };
  o.value ||
    s(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0,
    );
  function s(a, u, c) {
    const f = e.indexOf('#'),
      h =
        f > -1
          ? (r.host && document.querySelector('base') ? e : e.slice(f)) + a
          : Hm() + e + a;
    try {
      (t[c ? 'replaceState' : 'pushState'](u, '', h), (o.value = u));
    } catch (y) {
      (console.error(y), r[c ? 'replace' : 'assign'](h));
    }
  }
  function i(a, u) {
    const c = be({}, t.state, ri(o.value.back, a, o.value.forward, !0), u, {
      position: o.value.position,
    });
    (s(a, c, !0), (n.value = a));
  }
  function l(a, u) {
    const c = be({}, o.value, t.state, { forward: a, scroll: Vr() });
    s(c.current, c, !0);
    const f = be({}, ri(n.value, a, null), { position: c.position + 1 }, u);
    (s(a, f, !1), (n.value = a));
  }
  return { location: n, state: o, push: l, replace: i };
}
function $m(e) {
  e = Mm(e);
  const t = zm(e),
    r = Fm(e, t.state, t.location, t.replace);
  function n(s, i = !0) {
    (i || r.pauseListeners(), history.go(s));
  }
  const o = be(
    { location: '', base: e, go: n, createHref: Bm.bind(null, e) },
    t,
    r,
  );
  return (
    Object.defineProperty(o, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(o, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    o
  );
}
function Wm(e) {
  return typeof e == 'string' || (e && typeof e == 'object');
}
function Ea(e) {
  return typeof e == 'string' || typeof e == 'symbol';
}
const Ca = Symbol('');
var oi;
(function (e) {
  ((e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated'));
})(oi || (oi = {}));
function _n(e, t) {
  return be(new Error(), { type: e, [Ca]: !0 }, t);
}
function wt(e, t) {
  return e instanceof Error && Ca in e && (t == null || !!(e.type & t));
}
const si = '[^/]+?',
  Km = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Um = /[.+*?^${}()[\]/\\]/g;
function Gm(e, t) {
  const r = be({}, Km, t),
    n = [];
  let o = r.start ? '^' : '';
  const s = [];
  for (const u of e) {
    const c = u.length ? [] : [90];
    r.strict && !u.length && (o += '/');
    for (let f = 0; f < u.length; f++) {
      const h = u[f];
      let y = 40 + (r.sensitive ? 0.25 : 0);
      if (h.type === 0)
        (f || (o += '/'), (o += h.value.replace(Um, '\\$&')), (y += 40));
      else if (h.type === 1) {
        const { value: g, repeatable: v, optional: E, regexp: C } = h;
        s.push({ name: g, repeatable: v, optional: E });
        const k = C || si;
        if (k !== si) {
          y += 10;
          try {
            new RegExp(`(${k})`);
          } catch (R) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${k}): ` + R.message,
            );
          }
        }
        let A = v ? `((?:${k})(?:/(?:${k}))*)` : `(${k})`;
        (f || (A = E && u.length < 2 ? `(?:/${A})` : '/' + A),
          E && (A += '?'),
          (o += A),
          (y += 20),
          E && (y += -8),
          v && (y += -20),
          k === '.*' && (y += -50));
      }
      c.push(y);
    }
    n.push(c);
  }
  if (r.strict && r.end) {
    const u = n.length - 1;
    n[u][n[u].length - 1] += 0.7000000000000001;
  }
  (r.strict || (o += '/?'),
    r.end ? (o += '$') : r.strict && !o.endsWith('/') && (o += '(?:/|$)'));
  const i = new RegExp(o, r.sensitive ? '' : 'i');
  function l(u) {
    const c = u.match(i),
      f = {};
    if (!c) return null;
    for (let h = 1; h < c.length; h++) {
      const y = c[h] || '',
        g = s[h - 1];
      f[g.name] = y && g.repeatable ? y.split('/') : y;
    }
    return f;
  }
  function a(u) {
    let c = '',
      f = !1;
    for (const h of e) {
      ((!f || !c.endsWith('/')) && (c += '/'), (f = !1));
      for (const y of h)
        if (y.type === 0) c += y.value;
        else if (y.type === 1) {
          const { value: g, repeatable: v, optional: E } = y,
            C = g in u ? u[g] : '';
          if (ct(C) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`,
            );
          const k = ct(C) ? C.join('/') : C;
          if (!k)
            if (E)
              h.length < 2 &&
                (c.endsWith('/') ? (c = c.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${g}"`);
          c += k;
        }
    }
    return c || '/';
  }
  return { re: i, score: n, keys: s, parse: l, stringify: a };
}
function Jm(e, t) {
  let r = 0;
  for (; r < e.length && r < t.length; ) {
    const n = t[r] - e[r];
    if (n) return n;
    r++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0;
}
function Ra(e, t) {
  let r = 0;
  const n = e.score,
    o = t.score;
  for (; r < n.length && r < o.length; ) {
    const s = Jm(n[r], o[r]);
    if (s) return s;
    r++;
  }
  if (Math.abs(o.length - n.length) === 1) {
    if (ii(n)) return 1;
    if (ii(o)) return -1;
  }
  return o.length - n.length;
}
function ii(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Ym = { type: 0, value: '' },
  Xm = /[a-zA-Z0-9_]/;
function Qm(e) {
  if (!e) return [[]];
  if (e === '/') return [[Ym]];
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`);
  function t(y) {
    throw new Error(`ERR (${r})/"${u}": ${y}`);
  }
  let r = 0,
    n = r;
  const o = [];
  let s;
  function i() {
    (s && o.push(s), (s = []));
  }
  let l = 0,
    a,
    u = '',
    c = '';
  function f() {
    u &&
      (r === 0
        ? s.push({ type: 0, value: u })
        : r === 1 || r === 2 || r === 3
          ? (s.length > 1 &&
              (a === '*' || a === '+') &&
              t(
                `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`,
              ),
            s.push({
              type: 1,
              value: u,
              regexp: c,
              repeatable: a === '*' || a === '+',
              optional: a === '*' || a === '?',
            }))
          : t('Invalid state to consume buffer'),
      (u = ''));
  }
  function h() {
    u += a;
  }
  for (; l < e.length; ) {
    if (((a = e[l++]), a === '\\' && r !== 2)) {
      ((n = r), (r = 4));
      continue;
    }
    switch (r) {
      case 0:
        a === '/' ? (u && f(), i()) : a === ':' ? (f(), (r = 1)) : h();
        break;
      case 4:
        (h(), (r = n));
        break;
      case 1:
        a === '('
          ? (r = 2)
          : Xm.test(a)
            ? h()
            : (f(), (r = 0), a !== '*' && a !== '?' && a !== '+' && l--);
        break;
      case 2:
        a === ')'
          ? c[c.length - 1] == '\\'
            ? (c = c.slice(0, -1) + a)
            : (r = 3)
          : (c += a);
        break;
      case 3:
        (f(), (r = 0), a !== '*' && a !== '?' && a !== '+' && l--, (c = ''));
        break;
      default:
        t('Unknown state');
        break;
    }
  }
  return (
    r === 2 && t(`Unfinished custom RegExp for param "${u}"`),
    f(),
    i(),
    o
  );
}
function Zm(e, t, r) {
  const n = Gm(Qm(e.path), r),
    o = be(n, { record: e, parent: t, children: [], alias: [] });
  return (t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o);
}
function eg(e, t) {
  const r = [],
    n = new Map();
  t = ui({ strict: !1, end: !0, sensitive: !1 }, t);
  function o(f) {
    return n.get(f);
  }
  function s(f, h, y) {
    const g = !y,
      v = ai(f);
    v.aliasOf = y && y.record;
    const E = ui(t, f),
      C = [v];
    if ('alias' in f) {
      const R = typeof f.alias == 'string' ? [f.alias] : f.alias;
      for (const P of R)
        C.push(
          ai(
            be({}, v, {
              components: y ? y.record.components : v.components,
              path: P,
              aliasOf: y ? y.record : v,
            }),
          ),
        );
    }
    let k, A;
    for (const R of C) {
      const { path: P } = R;
      if (h && P[0] !== '/') {
        const te = h.record.path,
          Q = te[te.length - 1] === '/' ? '' : '/';
        R.path = h.record.path + (P && Q + P);
      }
      if (
        ((k = Zm(R, h, E)),
        y
          ? y.alias.push(k)
          : ((A = A || k),
            A !== k && A.alias.push(k),
            g && f.name && !ci(k) && i(f.name)),
        Aa(k) && a(k),
        v.children)
      ) {
        const te = v.children;
        for (let Q = 0; Q < te.length; Q++) s(te[Q], k, y && y.children[Q]);
      }
      y = y || k;
    }
    return A
      ? () => {
          i(A);
        }
      : Ln;
  }
  function i(f) {
    if (Ea(f)) {
      const h = n.get(f);
      h &&
        (n.delete(f),
        r.splice(r.indexOf(h), 1),
        h.children.forEach(i),
        h.alias.forEach(i));
    } else {
      const h = r.indexOf(f);
      h > -1 &&
        (r.splice(h, 1),
        f.record.name && n.delete(f.record.name),
        f.children.forEach(i),
        f.alias.forEach(i));
    }
  }
  function l() {
    return r;
  }
  function a(f) {
    const h = rg(f, r);
    (r.splice(h, 0, f), f.record.name && !ci(f) && n.set(f.record.name, f));
  }
  function u(f, h) {
    let y,
      g = {},
      v,
      E;
    if ('name' in f && f.name) {
      if (((y = n.get(f.name)), !y)) throw _n(1, { location: f });
      ((E = y.record.name),
        (g = be(
          li(
            h.params,
            y.keys
              .filter(A => !A.optional)
              .concat(y.parent ? y.parent.keys.filter(A => A.optional) : [])
              .map(A => A.name),
          ),
          f.params &&
            li(
              f.params,
              y.keys.map(A => A.name),
            ),
        )),
        (v = y.stringify(g)));
    } else if (f.path != null)
      ((v = f.path),
        (y = r.find(A => A.re.test(v))),
        y && ((g = y.parse(v)), (E = y.record.name)));
    else {
      if (((y = h.name ? n.get(h.name) : r.find(A => A.re.test(h.path))), !y))
        throw _n(1, { location: f, currentLocation: h });
      ((E = y.record.name),
        (g = be({}, h.params, f.params)),
        (v = y.stringify(g)));
    }
    const C = [];
    let k = y;
    for (; k; ) (C.unshift(k.record), (k = k.parent));
    return { name: E, path: v, params: g, matched: C, meta: ng(C) };
  }
  e.forEach(f => s(f));
  function c() {
    ((r.length = 0), n.clear());
  }
  return {
    addRoute: s,
    resolve: u,
    removeRoute: i,
    clearRoutes: c,
    getRoutes: l,
    getRecordMatcher: o,
  };
}
function li(e, t) {
  const r = {};
  for (const n of t) n in e && (r[n] = e[n]);
  return r;
}
function ai(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: tg(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  };
  return (Object.defineProperty(t, 'mods', { value: {} }), t);
}
function tg(e) {
  const t = {},
    r = e.props || !1;
  if ('component' in e) t.default = r;
  else for (const n in e.components) t[n] = typeof r == 'object' ? r[n] : r;
  return t;
}
function ci(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function ng(e) {
  return e.reduce((t, r) => be(t, r.meta), {});
}
function ui(e, t) {
  const r = {};
  for (const n in e) r[n] = n in t ? t[n] : e[n];
  return r;
}
function rg(e, t) {
  let r = 0,
    n = t.length;
  for (; r !== n; ) {
    const s = (r + n) >> 1;
    Ra(e, t[s]) < 0 ? (n = s) : (r = s + 1);
  }
  const o = og(e);
  return (o && (n = t.lastIndexOf(o, n - 1)), n);
}
function og(e) {
  let t = e;
  for (; (t = t.parent); ) if (Aa(t) && Ra(e, t) === 0) return t;
}
function Aa({ record: e }) {
  return !!(
    e.name ||
    (e.components && Object.keys(e.components).length) ||
    e.redirect
  );
}
function sg(e) {
  const t = {};
  if (e === '' || e === '?') return t;
  const n = (e[0] === '?' ? e.slice(1) : e).split('&');
  for (let o = 0; o < n.length; ++o) {
    const s = n[o].replace(ba, ' '),
      i = s.indexOf('='),
      l = Un(i < 0 ? s : s.slice(0, i)),
      a = i < 0 ? null : Un(s.slice(i + 1));
    if (l in t) {
      let u = t[l];
      (ct(u) || (u = t[l] = [u]), u.push(a));
    } else t[l] = a;
  }
  return t;
}
function fi(e) {
  let t = '';
  for (let r in e) {
    const n = e[r];
    if (((r = km(r)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + r);
      continue;
    }
    (ct(n) ? n.map(s => s && Eo(s)) : [n && Eo(n)]).forEach(s => {
      s !== void 0 &&
        ((t += (t.length ? '&' : '') + r), s != null && (t += '=' + s));
    });
  }
  return t;
}
function ig(e) {
  const t = {};
  for (const r in e) {
    const n = e[r];
    n !== void 0 &&
      (t[r] = ct(n)
        ? n.map(o => (o == null ? null : '' + o))
        : n == null
          ? n
          : '' + n);
  }
  return t;
}
const lg = Symbol(''),
  di = Symbol(''),
  Hr = Symbol(''),
  is = Symbol(''),
  Ro = Symbol('');
function On() {
  let e = [];
  function t(n) {
    return (
      e.push(n),
      () => {
        const o = e.indexOf(n);
        o > -1 && e.splice(o, 1);
      }
    );
  }
  function r() {
    e = [];
  }
  return { add: t, list: () => e.slice(), reset: r };
}
function jt(e, t, r, n, o, s = i => i()) {
  const i = n && (n.enterCallbacks[o] = n.enterCallbacks[o] || []);
  return () =>
    new Promise((l, a) => {
      const u = h => {
          h === !1
            ? a(_n(4, { from: r, to: t }))
            : h instanceof Error
              ? a(h)
              : Wm(h)
                ? a(_n(2, { from: t, to: h }))
                : (i &&
                    n.enterCallbacks[o] === i &&
                    typeof h == 'function' &&
                    i.push(h),
                  l());
        },
        c = s(() => e.call(n && n.instances[o], t, r, u));
      let f = Promise.resolve(c);
      (e.length < 3 && (f = f.then(u)), f.catch(h => a(h)));
    });
}
function so(e, t, r, n, o = s => s()) {
  const s = [];
  for (const i of e)
    for (const l in i.components) {
      let a = i.components[l];
      if (!(t !== 'beforeRouteEnter' && !i.instances[l]))
        if (_a(a)) {
          const c = (a.__vccOpts || a)[t];
          c && s.push(jt(c, r, n, i, l, o));
        } else {
          let u = a();
          s.push(() =>
            u.then(c => {
              if (!c)
                throw new Error(
                  `Couldn't resolve component "${l}" at "${i.path}"`,
                );
              const f = hm(c) ? c.default : c;
              ((i.mods[l] = c), (i.components[l] = f));
              const y = (f.__vccOpts || f)[t];
              return y && jt(y, r, n, i, l, o)();
            }),
          );
        }
    }
  return s;
}
function pi(e) {
  const t = Le(Hr),
    r = Le(is),
    n = w(() => {
      const a = F(e.to);
      return t.resolve(a);
    }),
    o = w(() => {
      const { matched: a } = n.value,
        { length: u } = a,
        c = a[u - 1],
        f = r.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(gn.bind(null, c));
      if (h > -1) return h;
      const y = hi(a[u - 2]);
      return u > 1 && hi(c) === y && f[f.length - 1].path !== y
        ? f.findIndex(gn.bind(null, a[u - 2]))
        : h;
    }),
    s = w(() => o.value > -1 && dg(r.params, n.value.params)),
    i = w(
      () =>
        o.value > -1 &&
        o.value === r.matched.length - 1 &&
        Oa(r.params, n.value.params),
    );
  function l(a = {}) {
    if (fg(a)) {
      const u = t[F(e.replace) ? 'replace' : 'push'](F(e.to)).catch(Ln);
      return (
        e.viewTransition &&
          typeof document < 'u' &&
          'startViewTransition' in document &&
          document.startViewTransition(() => u),
        u
      );
    }
    return Promise.resolve();
  }
  return {
    route: n,
    href: w(() => n.value.href),
    isActive: s,
    isExactActive: i,
    navigate: l,
  };
}
function ag(e) {
  return e.length === 1 ? e[0] : e;
}
const cg = oe({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
      viewTransition: Boolean,
    },
    useLink: pi,
    setup(e, { slots: t }) {
      const r = en(pi(e)),
        { options: n } = Le(Hr),
        o = w(() => ({
          [yi(e.activeClass, n.linkActiveClass, 'router-link-active')]:
            r.isActive,
          [yi(
            e.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active',
          )]: r.isExactActive,
        }));
      return () => {
        const s = t.default && ag(t.default(r));
        return e.custom
          ? s
          : Xo(
              'a',
              {
                'aria-current': r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: o.value,
              },
              s,
            );
      };
    },
  }),
  ug = cg;
function fg(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(t)) return;
    }
    return (e.preventDefault && e.preventDefault(), !0);
  }
}
function dg(e, t) {
  for (const r in t) {
    const n = t[r],
      o = e[r];
    if (typeof n == 'string') {
      if (n !== o) return !1;
    } else if (!ct(o) || o.length !== n.length || n.some((s, i) => s !== o[i]))
      return !1;
  }
  return !0;
}
function hi(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : '';
}
const yi = (e, t, r) => e ?? t ?? r,
  pg = oe({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const n = Le(Ro),
        o = w(() => e.route || n.value),
        s = Le(di, 0),
        i = w(() => {
          let u = F(s);
          const { matched: c } = o.value;
          let f;
          for (; (f = c[u]) && !f.components; ) u++;
          return u;
        }),
        l = w(() => o.value.matched[i.value]);
      (Pn(
        di,
        w(() => i.value + 1),
      ),
        Pn(lg, l),
        Pn(Ro, o));
      const a = he();
      return (
        Se(
          () => [a.value, l.value, e.name],
          ([u, c, f], [h, y, g]) => {
            (c &&
              ((c.instances[f] = u),
              y &&
                y !== c &&
                u &&
                u === h &&
                (c.leaveGuards.size || (c.leaveGuards = y.leaveGuards),
                c.updateGuards.size || (c.updateGuards = y.updateGuards))),
              u &&
                c &&
                (!y || !gn(c, y) || !h) &&
                (c.enterCallbacks[f] || []).forEach(v => v(u)));
          },
          { flush: 'post' },
        ),
        () => {
          const u = o.value,
            c = e.name,
            f = l.value,
            h = f && f.components[c];
          if (!h) return mi(r.default, { Component: h, route: u });
          const y = f.props[c],
            g = y
              ? y === !0
                ? u.params
                : typeof y == 'function'
                  ? y(u)
                  : y
              : null,
            E = Xo(
              h,
              be({}, g, t, {
                onVnodeUnmounted: C => {
                  C.component.isUnmounted && (f.instances[c] = null);
                },
                ref: a,
              }),
            );
          return mi(r.default, { Component: E, route: u }) || E;
        }
      );
    },
  });
function mi(e, t) {
  if (!e) return null;
  const r = e(t);
  return r.length === 1 ? r[0] : r;
}
const hg = pg;
function yg(e) {
  const t = eg(e.routes, e),
    r = e.parseQuery || sg,
    n = e.stringifyQuery || fi,
    o = e.history,
    s = On(),
    i = On(),
    l = On(),
    a = Vt(qt);
  let u = qt;
  cn &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual');
  const c = ro.bind(null, O => '' + O),
    f = ro.bind(null, Cm),
    h = ro.bind(null, Un);
  function y(O, D) {
    let B, K;
    return (
      Ea(O) ? ((B = t.getRecordMatcher(O)), (K = D)) : (K = O),
      t.addRoute(K, B)
    );
  }
  function g(O) {
    const D = t.getRecordMatcher(O);
    D && t.removeRoute(D);
  }
  function v() {
    return t.getRoutes().map(O => O.record);
  }
  function E(O) {
    return !!t.getRecordMatcher(O);
  }
  function C(O, D) {
    if (((D = be({}, D || a.value)), typeof O == 'string')) {
      const m = oo(r, O, D.path),
        b = t.resolve({ path: m.path }, D),
        S = o.createHref(m.fullPath);
      return be(m, b, {
        params: h(b.params),
        hash: Un(m.hash),
        redirectedFrom: void 0,
        href: S,
      });
    }
    let B;
    if (O.path != null) B = be({}, O, { path: oo(r, O.path, D.path).path });
    else {
      const m = be({}, O.params);
      for (const b in m) m[b] == null && delete m[b];
      ((B = be({}, O, { params: f(m) })), (D.params = f(D.params)));
    }
    const K = t.resolve(B, D),
      we = O.hash || '';
    K.params = c(h(K.params));
    const p = Im(n, be({}, O, { hash: Om(we), path: K.path })),
      d = o.createHref(p);
    return be(
      { fullPath: p, hash: we, query: n === fi ? ig(O.query) : O.query || {} },
      K,
      { redirectedFrom: void 0, href: d },
    );
  }
  function k(O) {
    return typeof O == 'string' ? oo(r, O, a.value.path) : be({}, O);
  }
  function A(O, D) {
    if (u !== O) return _n(8, { from: D, to: O });
  }
  function R(O) {
    return Q(O);
  }
  function P(O) {
    return R(be(k(O), { replace: !0 }));
  }
  function te(O) {
    const D = O.matched[O.matched.length - 1];
    if (D && D.redirect) {
      const { redirect: B } = D;
      let K = typeof B == 'function' ? B(O) : B;
      return (
        typeof K == 'string' &&
          ((K = K.includes('?') || K.includes('#') ? (K = k(K)) : { path: K }),
          (K.params = {})),
        be(
          {
            query: O.query,
            hash: O.hash,
            params: K.path != null ? {} : O.params,
          },
          K,
        )
      );
    }
  }
  function Q(O, D) {
    const B = (u = C(O)),
      K = a.value,
      we = O.state,
      p = O.force,
      d = O.replace === !0,
      m = te(B);
    if (m)
      return Q(
        be(k(m), {
          state: typeof m == 'object' ? be({}, we, m.state) : we,
          force: p,
          replace: d,
        }),
        D || B,
      );
    const b = B;
    b.redirectedFrom = D;
    let S;
    return (
      !p && Pm(n, K, B) && ((S = _n(16, { to: b, from: K })), $e(K, K, !0, !1)),
      (S ? Promise.resolve(S) : ae(b, K))
        .catch(x => (wt(x) ? (wt(x, 2) ? x : rt(x)) : pe(x, b, K)))
        .then(x => {
          if (x) {
            if (wt(x, 2))
              return Q(
                be({ replace: d }, k(x.to), {
                  state: typeof x.to == 'object' ? be({}, we, x.to.state) : we,
                  force: p,
                }),
                D || b,
              );
          } else x = ce(b, K, !0, d, we);
          return (ue(b, K, x), x);
        })
    );
  }
  function V(O, D) {
    const B = A(O, D);
    return B ? Promise.reject(B) : Promise.resolve();
  }
  function z(O) {
    const D = Ke.values().next().value;
    return D && typeof D.runWithContext == 'function'
      ? D.runWithContext(O)
      : O();
  }
  function ae(O, D) {
    let B;
    const [K, we, p] = mg(O, D);
    B = so(K.reverse(), 'beforeRouteLeave', O, D);
    for (const m of K)
      m.leaveGuards.forEach(b => {
        B.push(jt(b, O, D));
      });
    const d = V.bind(null, O, D);
    return (
      B.push(d),
      Me(B)
        .then(() => {
          B = [];
          for (const m of s.list()) B.push(jt(m, O, D));
          return (B.push(d), Me(B));
        })
        .then(() => {
          B = so(we, 'beforeRouteUpdate', O, D);
          for (const m of we)
            m.updateGuards.forEach(b => {
              B.push(jt(b, O, D));
            });
          return (B.push(d), Me(B));
        })
        .then(() => {
          B = [];
          for (const m of p)
            if (m.beforeEnter)
              if (ct(m.beforeEnter))
                for (const b of m.beforeEnter) B.push(jt(b, O, D));
              else B.push(jt(m.beforeEnter, O, D));
          return (B.push(d), Me(B));
        })
        .then(
          () => (
            O.matched.forEach(m => (m.enterCallbacks = {})),
            (B = so(p, 'beforeRouteEnter', O, D, z)),
            B.push(d),
            Me(B)
          ),
        )
        .then(() => {
          B = [];
          for (const m of i.list()) B.push(jt(m, O, D));
          return (B.push(d), Me(B));
        })
        .catch(m => (wt(m, 8) ? m : Promise.reject(m)))
    );
  }
  function ue(O, D, B) {
    l.list().forEach(K => z(() => K(O, D, B)));
  }
  function ce(O, D, B, K, we) {
    const p = A(O, D);
    if (p) return p;
    const d = D === qt,
      m = cn ? history.state : {};
    (B &&
      (K || d
        ? o.replace(O.fullPath, be({ scroll: d && m && m.scroll }, we))
        : o.push(O.fullPath, we)),
      (a.value = O),
      $e(O, D, B, d),
      rt());
  }
  let J;
  function T() {
    J ||
      (J = o.listen((O, D, B) => {
        if (!it.listening) return;
        const K = C(O),
          we = te(K);
        if (we) {
          Q(be(we, { replace: !0, force: !0 }), K).catch(Ln);
          return;
        }
        u = K;
        const p = a.value;
        (cn && Nm(ni(p.fullPath, B.delta), Vr()),
          ae(K, p)
            .catch(d =>
              wt(d, 12)
                ? d
                : wt(d, 2)
                  ? (Q(be(k(d.to), { force: !0 }), K)
                      .then(m => {
                        wt(m, 20) &&
                          !B.delta &&
                          B.type === Gn.pop &&
                          o.go(-1, !1);
                      })
                      .catch(Ln),
                    Promise.reject())
                  : (B.delta && o.go(-B.delta, !1), pe(d, K, p)),
            )
            .then(d => {
              ((d = d || ce(K, p, !1)),
                d &&
                  (B.delta && !wt(d, 8)
                    ? o.go(-B.delta, !1)
                    : B.type === Gn.pop && wt(d, 20) && o.go(-1, !1)),
                ue(K, p, d));
            })
            .catch(Ln));
      }));
  }
  let ne = On(),
    Z = On(),
    Y;
  function pe(O, D, B) {
    rt(O);
    const K = Z.list();
    return (
      K.length ? K.forEach(we => we(O, D, B)) : console.error(O),
      Promise.reject(O)
    );
  }
  function De() {
    return Y && a.value !== qt
      ? Promise.resolve()
      : new Promise((O, D) => {
          ne.add([O, D]);
        });
  }
  function rt(O) {
    return (
      Y ||
        ((Y = !O),
        T(),
        ne.list().forEach(([D, B]) => (O ? B(O) : D())),
        ne.reset()),
      O
    );
  }
  function $e(O, D, B, K) {
    const { scrollBehavior: we } = e;
    if (!cn || !we) return Promise.resolve();
    const p =
      (!B && Vm(ni(O.fullPath, 0))) ||
      ((K || !B) && history.state && history.state.scroll) ||
      null;
    return at()
      .then(() => we(O, D, p))
      .then(d => d && Dm(d))
      .catch(d => pe(d, O, D));
  }
  const me = O => o.go(O);
  let We;
  const Ke = new Set(),
    it = {
      currentRoute: a,
      listening: !0,
      addRoute: y,
      removeRoute: g,
      clearRoutes: t.clearRoutes,
      hasRoute: E,
      getRoutes: v,
      resolve: C,
      options: e,
      push: R,
      replace: P,
      go: me,
      back: () => me(-1),
      forward: () => me(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: l.add,
      onError: Z.add,
      isReady: De,
      install(O) {
        const D = this;
        (O.component('RouterLink', ug),
          O.component('RouterView', hg),
          (O.config.globalProperties.$router = D),
          Object.defineProperty(O.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => F(a),
          }),
          cn &&
            !We &&
            a.value === qt &&
            ((We = !0), R(o.location).catch(we => {})));
        const B = {};
        for (const we in qt)
          Object.defineProperty(B, we, {
            get: () => a.value[we],
            enumerable: !0,
          });
        (O.provide(Hr, D), O.provide(is, Ui(B)), O.provide(Ro, a));
        const K = O.unmount;
        (Ke.add(O),
          (O.unmount = function () {
            (Ke.delete(O),
              Ke.size < 1 &&
                ((u = qt),
                J && J(),
                (J = null),
                (a.value = qt),
                (We = !1),
                (Y = !1)),
              K());
          }));
      },
    };
  function Me(O) {
    return O.reduce((D, B) => D.then(() => z(B)), Promise.resolve());
  }
  return it;
}
function mg(e, t) {
  const r = [],
    n = [],
    o = [],
    s = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < s; i++) {
    const l = t.matched[i];
    l && (e.matched.find(u => gn(u, l)) ? n.push(l) : r.push(l));
    const a = e.matched[i];
    a && (t.matched.find(u => gn(u, a)) || o.push(a));
  }
  return [r, n, o];
}
function Ia() {
  return Le(Hr);
}
function gg(e) {
  return Le(is);
}
const _g =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.75 11.25V3h-1.5v8.25H3v1.5h8.25V21h1.5v-8.25H21v-1.5z"/></svg>',
  vg = { class: 'description' },
  bg = { class: 'price' },
  xg = oe({
    __name: 'ProductCard',
    props: { id: {}, title: {}, description: {}, price: {} },
    emits: ['add-to-cart'],
    setup(e, { emit: t }) {
      const r = e,
        n = t,
        o = Ia();
      return (s, i) => (
        _(),
        $(
          F(Wn),
          {
            class: 'product-card',
            onClick: i[1] || (i[1] = () => F(o).push(`/product/${r.id}`)),
          },
          {
            default: W(() => [
              H(
                F(xt),
                { is: 'h3' },
                { default: W(() => [Ee(fe(r.title), 1)]), _: 1 },
              ),
              U('p', vg, fe(r.description), 1),
              U('p', bg, 'Price: ' + fe(r.price) + ' $', 1),
              H(
                F(na),
                {
                  label: 'Add to cart',
                  icon: F(_g),
                  onClick:
                    i[0] || (i[0] = Qo(l => n('add-to-cart', r.id), ['stop'])),
                },
                null,
                8,
                ['icon'],
              ),
            ]),
            _: 1,
          },
        )
      );
    },
  }),
  er = (e, t) => {
    const r = e.__vccOpts || e;
    for (const [n, o] of t) r[n] = o;
    return r;
  },
  Sg = er(xg, [['__scopeId', 'data-v-ba40268a']]),
  wg = {
    bodySerializer: e =>
      JSON.stringify(e, (t, r) => (typeof r == 'bigint' ? r.toString() : r)),
  },
  Og = ({
    onSseError: e,
    onSseEvent: t,
    responseTransformer: r,
    responseValidator: n,
    sseDefaultRetryDelay: o,
    sseMaxRetryAttempts: s,
    sseMaxRetryDelay: i,
    sseSleepFn: l,
    url: a,
    ...u
  }) => {
    let c;
    const f = l ?? (g => new Promise(v => setTimeout(v, g)));
    return {
      stream: (async function* () {
        let g = o ?? 3e3,
          v = 0;
        const E = u.signal ?? new AbortController().signal;
        for (; !E.aborted; ) {
          v++;
          const C =
            u.headers instanceof Headers ? u.headers : new Headers(u.headers);
          c !== void 0 && C.set('Last-Event-ID', c);
          try {
            const k = await fetch(a, { ...u, headers: C, signal: E });
            if (!k.ok)
              throw new Error(`SSE failed: ${k.status} ${k.statusText}`);
            if (!k.body) throw new Error('No body in SSE response');
            const A = k.body.pipeThrough(new TextDecoderStream()).getReader();
            let R = '';
            const P = () => {
              try {
                A.cancel();
              } catch {}
            };
            E.addEventListener('abort', P);
            try {
              for (;;) {
                const { done: te, value: Q } = await A.read();
                if (te) break;
                R += Q;
                const V = R.split(`

`);
                R = V.pop() ?? '';
                for (const z of V) {
                  const ae = z.split(`
`),
                    ue = [];
                  let ce;
                  for (const ne of ae)
                    if (ne.startsWith('data:'))
                      ue.push(ne.replace(/^data:\s*/, ''));
                    else if (ne.startsWith('event:'))
                      ce = ne.replace(/^event:\s*/, '');
                    else if (ne.startsWith('id:'))
                      c = ne.replace(/^id:\s*/, '');
                    else if (ne.startsWith('retry:')) {
                      const Z = Number.parseInt(
                        ne.replace(/^retry:\s*/, ''),
                        10,
                      );
                      Number.isNaN(Z) || (g = Z);
                    }
                  let J,
                    T = !1;
                  if (ue.length) {
                    const ne = ue.join(`
`);
                    try {
                      ((J = JSON.parse(ne)), (T = !0));
                    } catch {
                      J = ne;
                    }
                  }
                  (T && (n && (await n(J)), r && (J = await r(J))),
                    t == null || t({ data: J, event: ce, id: c, retry: g }),
                    ue.length && (yield J));
                }
              }
            } finally {
              (E.removeEventListener('abort', P), A.releaseLock());
            }
            break;
          } catch (k) {
            if ((e == null || e(k), s !== void 0 && v >= s)) break;
            const A = Math.min(g * 2 ** (v - 1), i ?? 3e4);
            await f(A);
          }
        }
      })(),
    };
  },
  kg = async (e, t) => {
    const r = typeof t == 'function' ? await t(e) : t;
    if (r)
      return e.scheme === 'bearer'
        ? `Bearer ${r}`
        : e.scheme === 'basic'
          ? `Basic ${btoa(r)}`
          : r;
  },
  Eg = e => {
    switch (e) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  Cg = e => {
    switch (e) {
      case 'form':
        return ',';
      case 'pipeDelimited':
        return '|';
      case 'spaceDelimited':
        return '%20';
      default:
        return ',';
    }
  },
  Rg = e => {
    switch (e) {
      case 'label':
        return '.';
      case 'matrix':
        return ';';
      case 'simple':
        return ',';
      default:
        return '&';
    }
  },
  Pa = ({ allowReserved: e, explode: t, name: r, style: n, value: o }) => {
    if (!t) {
      const l = (e ? o : o.map(a => encodeURIComponent(a))).join(Cg(n));
      switch (n) {
        case 'label':
          return `.${l}`;
        case 'matrix':
          return `;${r}=${l}`;
        case 'simple':
          return l;
        default:
          return `${r}=${l}`;
      }
    }
    const s = Eg(n),
      i = o
        .map(l =>
          n === 'label' || n === 'simple'
            ? e
              ? l
              : encodeURIComponent(l)
            : Fr({ allowReserved: e, name: r, value: l }),
        )
        .join(s);
    return n === 'label' || n === 'matrix' ? s + i : i;
  },
  Fr = ({ allowReserved: e, name: t, value: r }) => {
    if (r == null) return '';
    if (typeof r == 'object')
      throw new Error(
        'Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.',
      );
    return `${t}=${e ? r : encodeURIComponent(r)}`;
  },
  Ta = ({
    allowReserved: e,
    explode: t,
    name: r,
    style: n,
    value: o,
    valueOnly: s,
  }) => {
    if (o instanceof Date)
      return s ? o.toISOString() : `${r}=${o.toISOString()}`;
    if (n !== 'deepObject' && !t) {
      let a = [];
      Object.entries(o).forEach(([c, f]) => {
        a = [...a, c, e ? f : encodeURIComponent(f)];
      });
      const u = a.join(',');
      switch (n) {
        case 'form':
          return `${r}=${u}`;
        case 'label':
          return `.${u}`;
        case 'matrix':
          return `;${r}=${u}`;
        default:
          return u;
      }
    }
    const i = Rg(n),
      l = Object.entries(o)
        .map(([a, u]) =>
          Fr({
            allowReserved: e,
            name: n === 'deepObject' ? `${r}[${a}]` : a,
            value: u,
          }),
        )
        .join(i);
    return n === 'label' || n === 'matrix' ? i + l : l;
  },
  Ag = /\{[^{}]+\}/g,
  Ig = ({ path: e, url: t }) => {
    let r = t;
    const n = t.match(Ag);
    if (n)
      for (const o of n) {
        let s = !1,
          i = o.substring(1, o.length - 1),
          l = 'simple';
        (i.endsWith('*') && ((s = !0), (i = i.substring(0, i.length - 1))),
          i.startsWith('.')
            ? ((i = i.substring(1)), (l = 'label'))
            : i.startsWith(';') && ((i = i.substring(1)), (l = 'matrix')));
        const a = e[i];
        if (a == null) continue;
        if (Array.isArray(a)) {
          r = r.replace(o, Pa({ explode: s, name: i, style: l, value: a }));
          continue;
        }
        if (typeof a == 'object') {
          r = r.replace(
            o,
            Ta({ explode: s, name: i, style: l, value: a, valueOnly: !0 }),
          );
          continue;
        }
        if (l === 'matrix') {
          r = r.replace(o, `;${Fr({ name: i, value: a })}`);
          continue;
        }
        const u = encodeURIComponent(l === 'label' ? `.${a}` : a);
        r = r.replace(o, u);
      }
    return r;
  },
  Pg = ({ baseUrl: e, path: t, query: r, querySerializer: n, url: o }) => {
    const s = o.startsWith('/') ? o : `/${o}`;
    let i = (e ?? '') + s;
    t && (i = Ig({ path: t, url: i }));
    let l = r ? n(r) : '';
    return (l.startsWith('?') && (l = l.substring(1)), l && (i += `?${l}`), i);
  },
  qa =
    ({ allowReserved: e, array: t, object: r } = {}) =>
    o => {
      const s = [];
      if (o && typeof o == 'object')
        for (const i in o) {
          const l = o[i];
          if (l != null)
            if (Array.isArray(l)) {
              const a = Pa({
                allowReserved: e,
                explode: !0,
                name: i,
                style: 'form',
                value: l,
                ...t,
              });
              a && s.push(a);
            } else if (typeof l == 'object') {
              const a = Ta({
                allowReserved: e,
                explode: !0,
                name: i,
                style: 'deepObject',
                value: l,
                ...r,
              });
              a && s.push(a);
            } else {
              const a = Fr({ allowReserved: e, name: i, value: l });
              a && s.push(a);
            }
        }
      return s.join('&');
    },
  Tg = e => {
    var r;
    if (!e) return 'stream';
    const t = (r = e.split(';')[0]) == null ? void 0 : r.trim();
    if (t) {
      if (t.startsWith('application/json') || t.endsWith('+json'))
        return 'json';
      if (t === 'multipart/form-data') return 'formData';
      if (
        ['application/', 'audio/', 'image/', 'video/'].some(n =>
          t.startsWith(n),
        )
      )
        return 'blob';
      if (t.startsWith('text/')) return 'text';
    }
  },
  qg = (e, t) => {
    var r, n;
    return t
      ? !!(
          e.headers.has(t) ||
          ((r = e.query) != null && r[t]) ||
          ((n = e.headers.get('Cookie')) != null && n.includes(`${t}=`))
        )
      : !1;
  },
  Mg = async ({ security: e, ...t }) => {
    for (const r of e) {
      if (qg(t, r.name)) continue;
      const n = await kg(r, t.auth);
      if (!n) continue;
      const o = r.name ?? 'Authorization';
      switch (r.in) {
        case 'query':
          (t.query || (t.query = {}), (t.query[o] = n));
          break;
        case 'cookie':
          t.headers.append('Cookie', `${o}=${n}`);
          break;
        case 'header':
        default:
          t.headers.set(o, n);
          break;
      }
    }
  },
  gi = e =>
    Pg({
      baseUrl: e.baseUrl,
      path: e.path,
      query: e.query,
      querySerializer:
        typeof e.querySerializer == 'function'
          ? e.querySerializer
          : qa(e.querySerializer),
      url: e.url,
    }),
  _i = (e, t) => {
    var n;
    const r = { ...e, ...t };
    return (
      (n = r.baseUrl) != null &&
        n.endsWith('/') &&
        (r.baseUrl = r.baseUrl.substring(0, r.baseUrl.length - 1)),
      (r.headers = Ma(e.headers, t.headers)),
      r
    );
  },
  Ma = (...e) => {
    const t = new Headers();
    for (const r of e) {
      if (!r || typeof r != 'object') continue;
      const n = r instanceof Headers ? r.entries() : Object.entries(r);
      for (const [o, s] of n)
        if (s === null) t.delete(o);
        else if (Array.isArray(s)) for (const i of s) t.append(o, i);
        else
          s !== void 0 &&
            t.set(o, typeof s == 'object' ? JSON.stringify(s) : s);
    }
    return t;
  };
class io {
  constructor() {
    fs(this, '_fns');
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  getInterceptorIndex(t) {
    return typeof t == 'number'
      ? this._fns[t]
        ? t
        : -1
      : this._fns.indexOf(t);
  }
  exists(t) {
    const r = this.getInterceptorIndex(t);
    return !!this._fns[r];
  }
  eject(t) {
    const r = this.getInterceptorIndex(t);
    this._fns[r] && (this._fns[r] = null);
  }
  update(t, r) {
    const n = this.getInterceptorIndex(t);
    return this._fns[n] ? ((this._fns[n] = r), t) : !1;
  }
  use(t) {
    return ((this._fns = [...this._fns, t]), this._fns.length - 1);
  }
}
const Lg = () => ({ error: new io(), request: new io(), response: new io() }),
  Bg = qa({
    allowReserved: !1,
    array: { explode: !0, style: 'form' },
    object: { explode: !0, style: 'deepObject' },
  }),
  jg = { 'Content-Type': 'application/json' },
  La = (e = {}) => ({
    ...wg,
    headers: jg,
    parseAs: 'auto',
    querySerializer: Bg,
    ...e,
  }),
  Dg = (e = {}) => {
    let t = _i(La(), e);
    const r = () => ({ ...t }),
      n = u => ((t = _i(t, u)), r()),
      o = Lg(),
      s = async u => {
        const c = {
          ...t,
          ...u,
          fetch: u.fetch ?? t.fetch ?? globalThis.fetch,
          headers: Ma(t.headers, u.headers),
          serializedBody: void 0,
        };
        (c.security && (await Mg({ ...c, security: c.security })),
          c.requestValidator && (await c.requestValidator(c)),
          c.body &&
            c.bodySerializer &&
            (c.serializedBody = c.bodySerializer(c.body)),
          (c.serializedBody === void 0 || c.serializedBody === '') &&
            c.headers.delete('Content-Type'));
        const f = gi(c);
        return { opts: c, url: f };
      },
      i = async u => {
        const { opts: c, url: f } = await s(u),
          h = { redirect: 'follow', ...c, body: c.serializedBody };
        let y = new Request(f, h);
        for (const P of o.request._fns) P && (y = await P(y, c));
        const g = c.fetch;
        let v = await g(y);
        for (const P of o.response._fns) P && (v = await P(v, y, c));
        const E = { request: y, response: v };
        if (v.ok) {
          if (v.status === 204 || v.headers.get('Content-Length') === '0')
            return c.responseStyle === 'data' ? {} : { data: {}, ...E };
          const P =
            (c.parseAs === 'auto'
              ? Tg(v.headers.get('Content-Type'))
              : c.parseAs) ?? 'json';
          let te;
          switch (P) {
            case 'arrayBuffer':
            case 'blob':
            case 'formData':
            case 'json':
            case 'text':
              te = await v[P]();
              break;
            case 'stream':
              return c.responseStyle === 'data'
                ? v.body
                : { data: v.body, ...E };
          }
          return (
            P === 'json' &&
              (c.responseValidator && (await c.responseValidator(te)),
              c.responseTransformer && (te = await c.responseTransformer(te))),
            c.responseStyle === 'data' ? te : { data: te, ...E }
          );
        }
        const C = await v.text();
        let k;
        try {
          k = JSON.parse(C);
        } catch {}
        const A = k ?? C;
        let R = A;
        for (const P of o.error._fns) P && (R = await P(A, v, y, c));
        if (((R = R || {}), c.throwOnError)) throw R;
        return c.responseStyle === 'data' ? void 0 : { error: R, ...E };
      },
      l = u => c => i({ ...c, method: u }),
      a = u => async c => {
        const { opts: f, url: h } = await s(c);
        return Og({
          ...f,
          body: f.body,
          headers: f.headers,
          method: u,
          url: h,
        });
      };
    return {
      buildUrl: gi,
      connect: l('CONNECT'),
      delete: l('DELETE'),
      get: l('GET'),
      getConfig: r,
      head: l('HEAD'),
      interceptors: o,
      options: l('OPTIONS'),
      patch: l('PATCH'),
      post: l('POST'),
      put: l('PUT'),
      request: i,
      setConfig: n,
      sse: {
        connect: a('CONNECT'),
        delete: a('DELETE'),
        get: a('GET'),
        head: a('HEAD'),
        options: a('OPTIONS'),
        patch: a('PATCH'),
        post: a('POST'),
        put: a('PUT'),
        trace: a('TRACE'),
      },
      trace: l('TRACE'),
    };
  },
  Ng = Dg(La({ baseUrl: 'https://dummyjson.com' })),
  vi = e =>
    ((e == null ? void 0 : e.client) ?? Ng).get({ url: '/products', ...e }),
  Ba = os('product', () => {
    const e = he(void 0);
    return {
      products: e,
      loadProducts: async (n = 5) => {
        const { data: o, error: s } = await vi({ query: { limit: n } });
        return (
          s
            ? console.error('Error loading products:', s)
            : (e.value = o.products),
          { products: o.products, error: s == null ? void 0 : s.message }
        );
      },
      getProductById: async n => {
        var i, l;
        if ((i = e.value) != null && i.find(a => a.id === n))
          return { product: e.value.find(a => a.id === n) };
        const { data: o, error: s } = await vi();
        return (
          s && console.error('Error loading product by ID:', s),
          {
            product:
              (l = o.products) == null ? void 0 : l.find(a => a.id === n),
            error: s == null ? void 0 : s.message,
          }
        );
      },
    };
  }),
  ls = os('shoppingCart', () => {
    const e = he([]),
      t = w(() =>
        e.value
          .reduce((o, s) => o + s.product.price * s.quantity, 0)
          .toFixed(2),
      );
    function r(o) {
      if (e.value.some(i => i.product.id === o.id)) {
        e.value = e.value.map(i =>
          i.product.id !== o.id ? i : { ...i, quantity: i.quantity + 1 },
        );
        return;
      }
      e.value = [...e.value, { product: o, quantity: 1 }];
    }
    function n(o) {
      e.value = e.value
        .map(s => (s.product.id === o ? { ...s, quantity: s.quantity - 1 } : s))
        .filter(s => s.quantity > 0);
    }
    return {
      cartItems: w(() => e.value),
      totalPrice: t,
      addToCart: r,
      removeFromCart: n,
    };
  }),
  Vg = { class: 'root' },
  Hg = { key: 0 },
  Fg = { key: 1, class: 'no-products-placeholder' },
  zg = oe({
    __name: 'ProductList',
    setup(e) {
      const t = Ba(),
        r = ls(),
        n = [
          { value: 5, label: '5' },
          { value: 10, label: '10' },
          { value: 25, label: '25' },
        ],
        o = n[0].value,
        s = Dl('pageSize', o);
      Se(
        s,
        async l => {
          (window.localStorage.setItem('pageSize', l.toString()),
            t.loadProducts(l));
        },
        { immediate: !0 },
      );
      const i = async l => {
        const { product: a, error: u } = await t.getProductById(l);
        if (u) {
          console.error('Error adding product to cart:', u);
          return;
        }
        a && r.addToCart(a);
      };
      return (l, a) => {
        var u;
        return (
          _(),
          M('div', Vg, [
            H(
              F(xt),
              { is: 'h1', class: 'title' },
              {
                default: W(() => [
                  ...(a[1] || (a[1] = [Ee('Available Products ', -1)])),
                ]),
                _: 1,
              },
            ),
            ((u = F(t).products) == null ? void 0 : u.length) > 0
              ? (_(),
                M('ul', Hg, [
                  (_(!0),
                  M(
                    Ie,
                    null,
                    Ft(
                      F(t).products,
                      c => (
                        _(),
                        M('li', { key: c.id }, [
                          H(
                            Sg,
                            {
                              id: c.id,
                              title: c.title,
                              description: c.description,
                              price: c.price,
                              onAddToCart: i,
                            },
                            null,
                            8,
                            ['id', 'title', 'description', 'price'],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]))
              : (_(), M('p', Fg, 'No products available...')),
            H(
              F(Zh),
              {
                modelValue: F(s),
                'onUpdate:modelValue':
                  a[0] || (a[0] = c => (Pe(s) ? (s.value = c) : null)),
                class: 'page-size-select',
                label: 'Select Page Size',
                'list-label': 'Select Page Size',
                options: n,
                placeholder: 'Page size',
              },
              null,
              8,
              ['modelValue'],
            ),
          ])
        );
      };
    },
  }),
  $g = er(zg, [['__scopeId', 'data-v-b5c92b76']]),
  Wg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 9.75v7.5h-1.5v-7.5zm-4.5 0H9v7.5h1.5z"/><path fill-rule="evenodd" d="M21 5.25h-5.25V4.5a2.25 2.25 0 0 0-2.25-2.25h-3A2.25 2.25 0 0 0 8.25 4.5v.75H3v1.5h2.25V18A3.754 3.754 0 0 0 9 21.75h6A3.754 3.754 0 0 0 18.75 18V6.75H21zM9.75 4.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v.75h-4.5zm7.5 13.5A2.25 2.25 0 0 1 15 20.25H9A2.25 2.25 0 0 1 6.75 18V6.75h10.5z" clip-rule="evenodd"/></svg>',
  Kg = { class: 'shopping-cart' },
  Ug = { key: 0 },
  Gg = { class: 'card-content' },
  Jg = { class: 'total-price' },
  Yg = oe({
    __name: 'ShoppingCart',
    setup(e) {
      const t = ls();
      function r(n) {
        t.removeFromCart(n);
      }
      return (n, o) => (
        _(),
        M('div', Kg, [
          H(
            F(xt),
            { is: 'h2' },
            {
              default: W(() => [
                ...(o[0] || (o[0] = [Ee('Shopping Cart', -1)])),
              ]),
              _: 1,
            },
          ),
          F(t).cartItems.length > 0
            ? (_(),
              M('ul', Ug, [
                (_(!0),
                M(
                  Ie,
                  null,
                  Ft(
                    F(t).cartItems,
                    s => (
                      _(),
                      M('li', { key: s.product.id }, [
                        H(
                          F(Wn),
                          null,
                          {
                            default: W(() => [
                              H(
                                F(xt),
                                { is: 'h3' },
                                {
                                  default: W(() => [
                                    Ee(fe(s.product.title), 1),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              ),
                              U('div', Gg, [
                                U('p', null, 'Quantity: ' + fe(s.quantity), 1),
                                H(
                                  F(ay),
                                  {
                                    label: 'Remove',
                                    icon: F(Wg),
                                    onClick: i => r(s.product.id),
                                  },
                                  null,
                                  8,
                                  ['icon', 'onClick'],
                                ),
                              ]),
                            ]),
                            _: 2,
                          },
                          1024,
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]))
            : G('', !0),
          U('p', Jg, 'Total price: ' + fe(F(t).totalPrice) + ' $', 1),
        ])
      );
    },
  }),
  ja = er(Yg, [['__scopeId', 'data-v-dae0909b']]),
  Xg = { class: 'sidebar-cta' },
  Qg = oe({
    __name: 'HomeView',
    setup(e) {
      return (t, r) => (
        _(),
        $(
          F(Dr),
          { 'no-padding': '' },
          {
            sidebar: W(() => [
              H(
                F(Fy),
                { label: 'Example sidebar', alignment: 'right' },
                {
                  default: W(() => [
                    H(ja),
                    U('div', Xg, [
                      H(
                        F(jr),
                        { href: '/checkout' },
                        {
                          default: W(() => [
                            ...(r[0] || (r[0] = [Ee('Go to Checkout', -1)])),
                          ]),
                          _: 1,
                        },
                      ),
                    ]),
                  ]),
                  _: 1,
                },
              ),
            ]),
            default: W(() => [H($g)]),
            _: 1,
          },
        )
      );
    },
  }),
  Zg = er(Qg, [['__scopeId', 'data-v-918bf6cb']]),
  e_ = { key: 0 },
  t_ = { key: 1 },
  n_ = { class: 'checkout-cta' },
  r_ = oe({
    __name: 'CheckoutView',
    setup(e) {
      const t = ls();
      return (r, n) => (
        _(),
        $(F(Dr), null, {
          default: W(() => [
            H(
              F(xt),
              { is: 'h1', class: 'title' },
              {
                default: W(() => [...(n[0] || (n[0] = [Ee('Checkout', -1)]))]),
                _: 1,
              },
            ),
            H(F(Wn), null, {
              default: W(() => [
                F(t).cartItems.length === 0
                  ? (_(),
                    M('div', e_, [
                      ...(n[1] ||
                        (n[1] = [U('p', null, 'Your cart is empty.', -1)])),
                    ]))
                  : (_(),
                    M('div', t_, [
                      H(ja),
                      U('div', n_, [H(F(na), { label: 'Complete Purchase' })]),
                    ])),
                H(
                  F(jr),
                  { href: '/' },
                  {
                    default: W(() => [
                      ...(n[2] || (n[2] = [Ee('Go back to shopping', -1)])),
                    ]),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            }),
          ]),
          _: 1,
        })
      );
    },
  }),
  o_ = er(r_, [['__scopeId', 'data-v-21077bfa']]),
  s_ = os('ai', () => ({
    getAiSummaryById: async t => {
      try {
        return {
          summary: await (await fetch(`/api/ai/reviews/${t}/summary`)).json(),
        };
      } catch (r) {
        return { error: r.message };
      }
    },
  })),
  i_ = oe({
    __name: 'ProductView',
    setup(e) {
      const t = Ia(),
        r = gg(),
        n = s_(),
        o = Ba(),
        s = Number(r.params.productId),
        i = he(void 0),
        l = he(null);
      return (
        hn(async () => {
          const { product: a, error: u } = await o.getProductById(s);
          ((i.value = a),
            u && console.error('Error loading product:', u),
            i.value || t.replace('/product-not-found'));
          const { summary: c, error: f } = await n.getAiSummaryById(s);
          ((l.value = c),
            f && console.error('Error loading AI review summary'));
        }),
        (a, u) =>
          i.value
            ? (_(),
              $(
                F(Dr),
                { key: 0 },
                {
                  default: W(() => [
                    H(F(Wn), null, {
                      default: W(() => [
                        H(
                          F(jr),
                          { href: '/' },
                          {
                            default: W(() => [
                              ...(u[0] ||
                                (u[0] = [Ee('Go back to products', -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        H(
                          F(xt),
                          { is: 'h1', class: 'title' },
                          {
                            default: W(() => [
                              Ee(
                                ' Product ' + fe(a.$route.params.productId),
                                1,
                              ),
                            ]),
                            _: 1,
                          },
                        ),
                        U('p', null, fe(i.value.description), 1),
                        U('p', null, 'Brand: ' + fe(i.value.brand), 1),
                        U(
                          'p',
                          null,
                          'Availability: ' + fe(i.value.availabilityStatus),
                          1,
                        ),
                        U('p', null, 'Price: ' + fe(i.value.price) + ' $', 1),
                      ]),
                      _: 1,
                    }),
                    H(F(Wn), null, {
                      default: W(() => [
                        H(
                          F(xt),
                          { is: 'h2', class: 'subtitle' },
                          {
                            default: W(() => [
                              ...(u[1] || (u[1] = [Ee('🗣️ Reviews', -1)])),
                            ]),
                            _: 1,
                          },
                        ),
                        l.value
                          ? (_(),
                            $(
                              F(da),
                              {
                                key: 0,
                                headline: 'AI Review Summary',
                                style: { width: '30rem' },
                                icon: F(Tf),
                              },
                              {
                                default: W(() => [
                                  U(
                                    'div',
                                    null,
                                    'Average Rating: ' + fe(l.value.avgRating),
                                    1,
                                  ),
                                  Ee(' ' + fe(l.value.summary) + ' ', 1),
                                  u[2] ||
                                    (u[2] = U(
                                      'p',
                                      null,
                                      'ℹ️ This summary was created using AI (Artificial Intelligence)',
                                      -1,
                                    )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['icon'],
                            ))
                          : G('', !0),
                        U('ul', null, [
                          (_(!0),
                          M(
                            Ie,
                            null,
                            Ft(
                              i.value.reviews,
                              c => (
                                _(),
                                M('li', { key: c.date }, [
                                  U('p', null, [
                                    U('strong', null, fe(c.reviewerName), 1),
                                    Ee(' (' + fe(c.reviewerEmail) + ') ', 1),
                                  ]),
                                  U('p', null, [
                                    u[3] || (u[3] = Ee(' Rating: ', -1)),
                                    (_(!0),
                                    M(
                                      Ie,
                                      null,
                                      Ft(
                                        c.rating,
                                        (f, h) => (
                                          _(),
                                          M('span', { key: h }, '⭐')
                                        ),
                                      ),
                                      128,
                                    )),
                                  ]),
                                  U('p', null, fe(c.comment), 1),
                                ])
                              ),
                            ),
                            128,
                          )),
                        ]),
                      ]),
                      _: 1,
                    }),
                  ]),
                  _: 1,
                },
              ))
            : G('', !0)
      );
    },
  }),
  l_ = oe({
    __name: 'NotFoundView',
    setup(e) {
      return (t, r) => (
        _(),
        $(F(Dr), null, {
          default: W(() => [
            H(
              F(da),
              { color: 'danger' },
              {
                default: W(() => [
                  H(
                    F(xt),
                    { is: 'h1', class: 'title' },
                    {
                      default: W(() => [
                        ...(r[0] || (r[0] = [Ee('Product Not Found', -1)])),
                      ]),
                      _: 1,
                    },
                  ),
                  r[2] ||
                    (r[2] = U(
                      'p',
                      null,
                      'This is not the product you are looking for.',
                      -1,
                    )),
                  H(
                    F(jr),
                    { href: '/' },
                    {
                      default: W(() => [
                        ...(r[1] || (r[1] = [Ee('Go home', -1)])),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      );
    },
  }),
  a_ = [
    { path: '/', component: Zg },
    { path: '/checkout', component: o_ },
    { path: '/product/:productId', component: i_ },
    { path: '/product-not-found', component: l_ },
  ],
  bi = yg({ history: $m(), routes: a_ });
async function c_() {
  const e = sm({ router: bi }),
    t = ef(lm).use(am()).use(e).use(bi);
  return (await u_(), t.mount('#app'), t);
}
c_();
async function u_() {
  return Promise.resolve();
}
