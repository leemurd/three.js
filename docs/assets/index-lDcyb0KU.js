(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Yl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dt={},_s=[],Rn=()=>{},Bf=()=>!1,No=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$l=n=>n.startsWith("onUpdate:"),Ut=Object.assign,Kl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Hf=Object.prototype.hasOwnProperty,it=(n,e)=>Hf.call(n,e),We=Array.isArray,tr=n=>Fo(n)==="[object Map]",kf=n=>Fo(n)==="[object Set]",Ye=n=>typeof n=="function",Rt=n=>typeof n=="string",Ns=n=>typeof n=="symbol",Mt=n=>n!==null&&typeof n=="object",Xu=n=>(Mt(n)||Ye(n))&&Ye(n.then)&&Ye(n.catch),zf=Object.prototype.toString,Fo=n=>zf.call(n),Vf=n=>Fo(n).slice(8,-1),Gf=n=>Fo(n)==="[object Object]",ql=n=>Rt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,nr=Yl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Oo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Wf=/-(\w)/g,bi=Oo(n=>n.replace(Wf,(e,t)=>t?t.toUpperCase():"")),Xf=/\B([A-Z])/g,$i=Oo(n=>n.replace(Xf,"-$1").toLowerCase()),ju=Oo(n=>n.charAt(0).toUpperCase()+n.slice(1)),$o=Oo(n=>n?`on${ju(n)}`:""),yi=(n,e)=>!Object.is(n,e),Ko=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Xa=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},jf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let jc;const Bo=()=>jc||(jc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Zl(n){if(We(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Rt(i)?qf(i):Zl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Rt(n)||Mt(n))return n}const Yf=/;(?![^(]*\))/g,$f=/:([^]+)/,Kf=/\/\*[^]*?\*\//g;function qf(n){const e={};return n.replace(Kf,"").split(Yf).forEach(t=>{if(t){const i=t.split($f);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jl(n){let e="";if(Rt(n))e=n;else if(We(n))for(let t=0;t<n.length;t++){const i=Jl(n[t]);i&&(e+=i+" ")}else if(Mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jf=Yl(Zf);function Yu(n){return!!n||n===""}/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Qf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Kt;try{return Kt=this,e()}finally{Kt=t}}}on(){++this._on===1&&(this.prevScope=Kt,Kt=this)}off(){this._on>0&&--this._on===0&&(Kt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ep(){return Kt}let ut;const qo=new WeakSet;class $u{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qo.has(this)&&(qo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yc(this),Zu(this);const e=ut,t=vn;ut=this,vn=!0;try{return this.fn()}finally{Ju(this),ut=e,vn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)tc(e);this.deps=this.depsTail=void 0,Yc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ja(this)&&this.run()}get dirty(){return ja(this)}}let Ku=0,ir,sr;function qu(n,e=!1){if(n.flags|=8,e){n.next=sr,sr=n;return}n.next=ir,ir=n}function Ql(){Ku++}function ec(){if(--Ku>0)return;if(sr){let e=sr;for(sr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ir;){let e=ir;for(ir=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Zu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Ju(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),tc(i),tp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ja(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Qu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===fr)||(n.globalVersion=fr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ja(n))))return;n.flags|=2;const e=n.dep,t=ut,i=vn;ut=n,vn=!0;try{Zu(n);const s=n.fn(n._value);(e.version===0||yi(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ut=t,vn=i,Ju(n),n.flags&=-3}}function tc(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)tc(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function tp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let vn=!0;const ed=[];function ti(){ed.push(vn),vn=!1}function ni(){const n=ed.pop();vn=n===void 0?!0:n}function Yc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ut;ut=void 0;try{e()}finally{ut=t}}}let fr=0;class np{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class nc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ut||!vn||ut===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ut)t=this.activeLink=new np(ut,this),ut.deps?(t.prevDep=ut.depsTail,ut.depsTail.nextDep=t,ut.depsTail=t):ut.deps=ut.depsTail=t,td(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ut.depsTail,t.nextDep=void 0,ut.depsTail.nextDep=t,ut.depsTail=t,ut.deps===t&&(ut.deps=i)}return t}trigger(e){this.version++,fr++,this.notify(e)}notify(e){Ql();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ec()}}}function td(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)td(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ya=new WeakMap,Gi=Symbol(""),$a=Symbol(""),pr=Symbol("");function Dt(n,e,t){if(vn&&ut){let i=Ya.get(n);i||Ya.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new nc),s.map=i,s.key=t),s.track()}}function qn(n,e,t,i,s,r){const o=Ya.get(n);if(!o){fr++;return}const a=l=>{l&&l.trigger()};if(Ql(),e==="clear")o.forEach(a);else{const l=We(n),c=l&&ql(t);if(l&&t==="length"){const h=Number(i);o.forEach((u,d)=>{(d==="length"||d===pr||!Ns(d)&&d>=h)&&a(u)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(pr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gi)),tr(n)&&a(o.get($a)));break;case"delete":l||(a(o.get(Gi)),tr(n)&&a(o.get($a)));break;case"set":tr(n)&&a(o.get(Gi));break}}ec()}function Zi(n){const e=nt(n);return e===n?e:(Dt(e,"iterate",pr),yn(n)?e:e.map(Ht))}function ic(n){return Dt(n=nt(n),"iterate",pr),n}const ip={__proto__:null,[Symbol.iterator](){return Zo(this,Symbol.iterator,Ht)},concat(...n){return Zi(this).concat(...n.map(e=>We(e)?Zi(e):e))},entries(){return Zo(this,"entries",n=>(n[1]=Ht(n[1]),n))},every(n,e){return Hn(this,"every",n,e,void 0,arguments)},filter(n,e){return Hn(this,"filter",n,e,t=>t.map(Ht),arguments)},find(n,e){return Hn(this,"find",n,e,Ht,arguments)},findIndex(n,e){return Hn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Hn(this,"findLast",n,e,Ht,arguments)},findLastIndex(n,e){return Hn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Hn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jo(this,"includes",n)},indexOf(...n){return Jo(this,"indexOf",n)},join(n){return Zi(this).join(n)},lastIndexOf(...n){return Jo(this,"lastIndexOf",n)},map(n,e){return Hn(this,"map",n,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...n){return zs(this,"push",n)},reduce(n,...e){return $c(this,"reduce",n,e)},reduceRight(n,...e){return $c(this,"reduceRight",n,e)},shift(){return zs(this,"shift")},some(n,e){return Hn(this,"some",n,e,void 0,arguments)},splice(...n){return zs(this,"splice",n)},toReversed(){return Zi(this).toReversed()},toSorted(n){return Zi(this).toSorted(n)},toSpliced(...n){return Zi(this).toSpliced(...n)},unshift(...n){return zs(this,"unshift",n)},values(){return Zo(this,"values",Ht)}};function Zo(n,e,t){const i=ic(n),s=i[e]();return i!==n&&!yn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const sp=Array.prototype;function Hn(n,e,t,i,s,r){const o=ic(n),a=o!==n&&!yn(n),l=o[e];if(l!==sp[e]){const u=l.apply(n,r);return a?Ht(u):u}let c=t;o!==n&&(a?c=function(u,d){return t.call(this,Ht(u),d,n)}:t.length>2&&(c=function(u,d){return t.call(this,u,d,n)}));const h=l.call(o,c,i);return a&&s?s(h):h}function $c(n,e,t,i){const s=ic(n);let r=t;return s!==n&&(yn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Ht(a),l,n)}),s[e](r,...i)}function Jo(n,e,t){const i=nt(n);Dt(i,"iterate",pr);const s=i[e](...t);return(s===-1||s===!1)&&ac(t[0])?(t[0]=nt(t[0]),i[e](...t)):s}function zs(n,e,t=[]){ti(),Ql();const i=nt(n)[e].apply(n,t);return ec(),ni(),i}const rp=Yl("__proto__,__v_isRef,__isVue"),nd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ns));function op(n){Ns(n)||(n=String(n));const e=nt(this);return Dt(e,"has",n),e.hasOwnProperty(n)}class id{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?gp:ad:r?od:rd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=We(e);if(!s){let l;if(o&&(l=ip[t]))return l;if(t==="hasOwnProperty")return op}const a=Reflect.get(e,t,It(e)?e:i);return(Ns(t)?nd.has(t):rp(t))||(s||Dt(e,"get",t),r)?a:It(a)?o&&ql(t)?a:a.value:Mt(a)?s?ld(a):rc(a):a}}class sd extends id{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Wi(r);if(!yn(i)&&!Wi(i)&&(r=nt(r),i=nt(i)),!We(e)&&It(r)&&!It(i))return l?!1:(r.value=i,!0)}const o=We(e)&&ql(t)?Number(t)<e.length:it(e,t),a=Reflect.set(e,t,i,It(e)?e:s);return e===nt(s)&&(o?yi(i,r)&&qn(e,"set",t,i):qn(e,"add",t,i)),a}deleteProperty(e,t){const i=it(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&qn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Ns(t)||!nd.has(t))&&Dt(e,"has",t),i}ownKeys(e){return Dt(e,"iterate",We(e)?"length":Gi),Reflect.ownKeys(e)}}class ap extends id{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const lp=new sd,cp=new ap,hp=new sd(!0);const Ka=n=>n,Ur=n=>Reflect.getPrototypeOf(n);function up(n,e,t){return function(...i){const s=this.__v_raw,r=nt(s),o=tr(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),h=t?Ka:e?qa:Ht;return!e&&Dt(r,"iterate",l?$a:Gi),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function Nr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function dp(n,e){const t={get(s){const r=this.__v_raw,o=nt(r),a=nt(s);n||(yi(s,a)&&Dt(o,"get",s),Dt(o,"get",a));const{has:l}=Ur(o),c=e?Ka:n?qa:Ht;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Dt(nt(s),"iterate",Gi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=nt(r),a=nt(s);return n||(yi(s,a)&&Dt(o,"has",s),Dt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=nt(a),c=e?Ka:n?qa:Ht;return!n&&Dt(l,"iterate",Gi),a.forEach((h,u)=>s.call(r,c(h),c(u),o))}};return Ut(t,n?{add:Nr("add"),set:Nr("set"),delete:Nr("delete"),clear:Nr("clear")}:{add(s){!e&&!yn(s)&&!Wi(s)&&(s=nt(s));const r=nt(this);return Ur(r).has.call(r,s)||(r.add(s),qn(r,"add",s,s)),this},set(s,r){!e&&!yn(r)&&!Wi(r)&&(r=nt(r));const o=nt(this),{has:a,get:l}=Ur(o);let c=a.call(o,s);c||(s=nt(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?yi(r,h)&&qn(o,"set",s,r):qn(o,"add",s,r),this},delete(s){const r=nt(this),{has:o,get:a}=Ur(r);let l=o.call(r,s);l||(s=nt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&qn(r,"delete",s,void 0),c},clear(){const s=nt(this),r=s.size!==0,o=s.clear();return r&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=up(s,n,e)}),t}function sc(n,e){const t=dp(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(it(t,s)&&s in i?t:i,s,r)}const fp={get:sc(!1,!1)},pp={get:sc(!1,!0)},mp={get:sc(!0,!1)};const rd=new WeakMap,od=new WeakMap,ad=new WeakMap,gp=new WeakMap;function _p(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xp(n){return n.__v_skip||!Object.isExtensible(n)?0:_p(Vf(n))}function rc(n){return Wi(n)?n:oc(n,!1,lp,fp,rd)}function vp(n){return oc(n,!1,hp,pp,od)}function ld(n){return oc(n,!0,cp,mp,ad)}function oc(n,e,t,i,s){if(!Mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=xp(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function rr(n){return Wi(n)?rr(n.__v_raw):!!(n&&n.__v_isReactive)}function Wi(n){return!!(n&&n.__v_isReadonly)}function yn(n){return!!(n&&n.__v_isShallow)}function ac(n){return n?!!n.__v_raw:!1}function nt(n){const e=n&&n.__v_raw;return e?nt(e):n}function yp(n){return!it(n,"__v_skip")&&Object.isExtensible(n)&&Xa(n,"__v_skip",!0),n}const Ht=n=>Mt(n)?rc(n):n,qa=n=>Mt(n)?ld(n):n;function It(n){return n?n.__v_isRef===!0:!1}function Qo(n){return Mp(n,!1)}function Mp(n,e){return It(n)?n:new Sp(n,e)}class Sp{constructor(e,t){this.dep=new nc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:nt(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||yn(e)||Wi(e);e=i?e:nt(e),yi(e,t)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Ep(n){return It(n)?n.value:n}const bp={get:(n,e,t)=>e==="__v_raw"?n:Ep(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return It(s)&&!It(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function cd(n){return rr(n)?n:new Proxy(n,bp)}class Tp{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new nc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ut!==this)return qu(this,!0),!0}get value(){const e=this.dep.track();return Qu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ap(n,e,t=!1){let i,s;return Ye(n)?i=n:(i=n.get,s=n.set),new Tp(i,s,t)}const Fr={},bo=new WeakMap;let Bi;function wp(n,e=!1,t=Bi){if(t){let i=bo.get(t);i||bo.set(t,i=[]),i.push(n)}}function Rp(n,e,t=dt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:yn(v)||s===!1||s===0?mi(v,1):mi(v);let h,u,d,p,g=!1,x=!1;if(It(n)?(u=()=>n.value,g=yn(n)):rr(n)?(u=()=>c(n),g=!0):We(n)?(x=!0,g=n.some(v=>rr(v)||yn(v)),u=()=>n.map(v=>{if(It(v))return v.value;if(rr(v))return c(v);if(Ye(v))return l?l(v,2):v()})):Ye(n)?e?u=l?()=>l(n,2):n:u=()=>{if(d){ti();try{d()}finally{ni()}}const v=Bi;Bi=h;try{return l?l(n,3,[p]):n(p)}finally{Bi=v}}:u=Rn,e&&s){const v=u,L=s===!0?1/0:s;u=()=>mi(v(),L)}const m=ep(),f=()=>{h.stop(),m&&m.active&&Kl(m.effects,h)};if(r&&e){const v=e;e=(...L)=>{v(...L),f()}}let A=x?new Array(n.length).fill(Fr):Fr;const T=v=>{if(!(!(h.flags&1)||!h.dirty&&!v))if(e){const L=h.run();if(s||g||(x?L.some((P,R)=>yi(P,A[R])):yi(L,A))){d&&d();const P=Bi;Bi=h;try{const R=[L,A===Fr?void 0:x&&A[0]===Fr?[]:A,p];A=L,l?l(e,3,R):e(...R)}finally{Bi=P}}}else h.run()};return a&&a(T),h=new $u(u),h.scheduler=o?()=>o(T,!1):T,p=v=>wp(v,!1,h),d=h.onStop=()=>{const v=bo.get(h);if(v){if(l)l(v,4);else for(const L of v)L();bo.delete(h)}},e?i?T(!0):A=h.run():o?o(T.bind(null,!0),!0):h.run(),f.pause=h.pause.bind(h),f.resume=h.resume.bind(h),f.stop=f,f}function mi(n,e=1/0,t){if(e<=0||!Mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,It(n))mi(n.value,e,t);else if(We(n))for(let i=0;i<n.length;i++)mi(n[i],e,t);else if(kf(n)||tr(n))n.forEach(i=>{mi(i,e,t)});else if(Gf(n)){for(const i in n)mi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ar(n,e,t,i){try{return i?n(...i):n()}catch(s){Ho(s,e,t)}}function Ln(n,e,t,i){if(Ye(n)){const s=Ar(n,e,t,i);return s&&Xu(s)&&s.catch(r=>{Ho(r,e,t)}),s}if(We(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Ln(n[r],e,t,i));return s}}function Ho(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let u=0;u<h.length;u++)if(h[u](n,l,c)===!1)return}a=a.parent}if(r){ti(),Ar(r,null,10,[n,l,c]),ni();return}}Cp(n,t,s,i,o)}function Cp(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const kt=[];let bn=-1;const xs=[];let di=null,ps=0;const hd=Promise.resolve();let To=null;function Pp(n){const e=To||hd;return n?e.then(this?n.bind(this):n):e}function Lp(n){let e=bn+1,t=kt.length;for(;e<t;){const i=e+t>>>1,s=kt[i],r=mr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function lc(n){if(!(n.flags&1)){const e=mr(n),t=kt[kt.length-1];!t||!(n.flags&2)&&e>=mr(t)?kt.push(n):kt.splice(Lp(e),0,n),n.flags|=1,ud()}}function ud(){To||(To=hd.then(fd))}function Dp(n){We(n)?xs.push(...n):di&&n.id===-1?di.splice(ps+1,0,n):n.flags&1||(xs.push(n),n.flags|=1),ud()}function Kc(n,e,t=bn+1){for(;t<kt.length;t++){const i=kt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;kt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function dd(n){if(xs.length){const e=[...new Set(xs)].sort((t,i)=>mr(t)-mr(i));if(xs.length=0,di){di.push(...e);return}for(di=e,ps=0;ps<di.length;ps++){const t=di[ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}di=null,ps=0}}const mr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function fd(n){try{for(bn=0;bn<kt.length;bn++){const e=kt[bn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ar(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;bn<kt.length;bn++){const e=kt[bn];e&&(e.flags&=-2)}bn=-1,kt.length=0,dd(),To=null,(kt.length||xs.length)&&fd()}}let wn=null,pd=null;function Ao(n){const e=wn;return wn=n,pd=n&&n.type.__scopeId||null,e}function Ip(n,e=wn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sh(-1);const r=Ao(e);let o;try{o=n(...s)}finally{Ao(r),i._d&&sh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ci(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ti(),Ln(l,t,8,[n.el,a,n,e]),ni())}}const Up=Symbol("_vte"),Np=n=>n.__isTeleport;function cc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function md(n,e){return Ye(n)?Ut({name:n.name},e,{setup:n}):n}function gd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function or(n,e,t,i,s=!1){if(We(n)){n.forEach((g,x)=>or(g,e&&(We(e)?e[x]:e),t,i,s));return}if(ar(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&or(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?mc(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,h=a.refs===dt?a.refs={}:a.refs,u=a.setupState,d=nt(u),p=u===dt?()=>!1:g=>it(d,g);if(c!=null&&c!==l&&(Rt(c)?(h[c]=null,p(c)&&(u[c]=null)):It(c)&&(c.value=null)),Ye(l))Ar(l,a,12,[o,h]);else{const g=Rt(l),x=It(l);if(g||x){const m=()=>{if(n.f){const f=g?p(l)?u[l]:h[l]:l.value;s?We(f)&&Kl(f,r):We(f)?f.includes(r)||f.push(r):g?(h[l]=[r],p(l)&&(u[l]=h[l])):(l.value=[r],n.k&&(h[n.k]=l.value))}else g?(h[l]=o,p(l)&&(u[l]=o)):x&&(l.value=o,n.k&&(h[n.k]=o))};o?(m.id=-1,tn(m,t)):m()}}}Bo().requestIdleCallback;Bo().cancelIdleCallback;const ar=n=>!!n.type.__asyncLoader,_d=n=>n.type.__isKeepAlive;function Fp(n,e){xd(n,"a",e)}function Op(n,e){xd(n,"da",e)}function xd(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(ko(e,i,t),t){let s=t.parent;for(;s&&s.parent;)_d(s.parent.vnode)&&Bp(i,e,t,s),s=s.parent}}function Bp(n,e,t,i){const s=ko(e,n,i,!0);hc(()=>{Kl(i[e],s)},t)}function ko(n,e,t=Vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ti();const a=wr(t),l=Ln(e,t,n,o);return a(),ni(),l});return i?s.unshift(r):s.push(r),r}}const si=n=>(e,t=Vt)=>{(!_r||n==="sp")&&ko(n,(...i)=>e(...i),t)},Hp=si("bm"),vd=si("m"),kp=si("bu"),zp=si("u"),Vp=si("bum"),hc=si("um"),Gp=si("sp"),Wp=si("rtg"),Xp=si("rtc");function jp(n,e=Vt){ko("ec",n,e)}const Yp=Symbol.for("v-ndc"),Za=n=>n?zd(n)?mc(n):Za(n.parent):null,lr=Ut(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Za(n.parent),$root:n=>Za(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Md(n),$forceUpdate:n=>n.f||(n.f=()=>{lc(n.update)}),$nextTick:n=>n.n||(n.n=Pp.bind(n.proxy)),$watch:n=>mm.bind(n)}),ea=(n,e)=>n!==dt&&!n.__isScriptSetup&&it(n,e),$p={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(ea(i,e))return o[e]=1,i[e];if(s!==dt&&it(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&it(c,e))return o[e]=3,r[e];if(t!==dt&&it(t,e))return o[e]=4,t[e];Ja&&(o[e]=0)}}const h=lr[e];let u,d;if(h)return e==="$attrs"&&Dt(n.attrs,"get",""),h(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==dt&&it(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,it(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return ea(s,e)?(s[e]=t,!0):i!==dt&&it(i,e)?(i[e]=t,!0):it(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==dt&&it(n,o)||ea(e,o)||(a=r[0])&&it(a,o)||it(i,o)||it(lr,o)||it(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:it(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function qc(n){return We(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ja=!0;function Kp(n){const e=Md(n),t=n.proxy,i=n.ctx;Ja=!1,e.beforeCreate&&Zc(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:f,beforeUnmount:A,destroyed:T,unmounted:v,render:L,renderTracked:P,renderTriggered:R,errorCaptured:N,serverPrefetch:b,expose:S,inheritAttrs:D,components:X,directives:V,filters:ee}=e;if(c&&qp(c,i,null),o)for(const Q in o){const H=o[Q];Ye(H)&&(i[Q]=H.bind(t))}if(s){const Q=s.call(t,t);Mt(Q)&&(n.data=rc(Q))}if(Ja=!0,r)for(const Q in r){const H=r[Q],de=Ye(H)?H.bind(t,t):Ye(H.get)?H.get.bind(t,t):Rn,Me=!Ye(H)&&Ye(H.set)?H.set.bind(t):Rn,we=Om({get:de,set:Me});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(a)for(const Q in a)yd(a[Q],i,t,Q);if(l){const Q=Ye(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{nm(H,Q[H])})}h&&Zc(h,n,"c");function q(Q,H){We(H)?H.forEach(de=>Q(de.bind(t))):H&&Q(H.bind(t))}if(q(Hp,u),q(vd,d),q(kp,p),q(zp,g),q(Fp,x),q(Op,m),q(jp,N),q(Xp,P),q(Wp,R),q(Vp,A),q(hc,v),q(Gp,b),We(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:de=>t[H]=de})})}else n.exposed||(n.exposed={});L&&n.render===Rn&&(n.render=L),D!=null&&(n.inheritAttrs=D),X&&(n.components=X),V&&(n.directives=V),b&&gd(n)}function qp(n,e,t=Rn){We(n)&&(n=Qa(n));for(const i in n){const s=n[i];let r;Mt(s)?"default"in s?r=uo(s.from||i,s.default,!0):r=uo(s.from||i):r=uo(s),It(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zc(n,e,t){Ln(We(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function yd(n,e,t,i){let s=i.includes(".")?Ud(t,i):()=>t[i];if(Rt(n)){const r=e[n];Ye(r)&&fo(s,r)}else if(Ye(n))fo(s,n.bind(t));else if(Mt(n))if(We(n))n.forEach(r=>yd(r,e,t,i));else{const r=Ye(n.handler)?n.handler.bind(t):e[n.handler];Ye(r)&&fo(s,r,n)}}function Md(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>wo(l,c,o,!0)),wo(l,e,o)),Mt(e)&&r.set(e,l),l}function wo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&wo(n,r,t,!0),s&&s.forEach(o=>wo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Zp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Zp={data:Jc,props:Qc,emits:Qc,methods:Js,computed:Js,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Js,directives:Js,watch:Qp,provide:Jc,inject:Jp};function Jc(n,e){return e?n?function(){return Ut(Ye(n)?n.call(this,this):n,Ye(e)?e.call(this,this):e)}:e:n}function Jp(n,e){return Js(Qa(n),Qa(e))}function Qa(n){if(We(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ot(n,e){return n?[...new Set([].concat(n,e))]:e}function Js(n,e){return n?Ut(Object.create(null),n,e):e}function Qc(n,e){return n?We(n)&&We(e)?[...new Set([...n,...e])]:Ut(Object.create(null),qc(n),qc(e??{})):e}function Qp(n,e){if(!n)return e;if(!e)return n;const t=Ut(Object.create(null),n);for(const i in e)t[i]=Ot(n[i],e[i]);return t}function Sd(){return{app:null,config:{isNativeTag:Bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let em=0;function tm(n,e){return function(i,s=null){Ye(i)||(i=Ut({},i)),s!=null&&!Mt(s)&&(s=null);const r=Sd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:em++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Bm,get config(){return r.config},set config(h){},use(h,...u){return o.has(h)||(h&&Ye(h.install)?(o.add(h),h.install(c,...u)):Ye(h)&&(o.add(h),h(c,...u))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,u){return u?(r.components[h]=u,c):r.components[h]},directive(h,u){return u?(r.directives[h]=u,c):r.directives[h]},mount(h,u,d){if(!l){const p=c._ceVNode||Mi(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,h,d),l=!0,c._container=h,h.__vue_app__=c,mc(p.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Ln(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(h,u){return r.provides[h]=u,c},runWithContext(h){const u=vs;vs=c;try{return h()}finally{vs=u}}};return c}}let vs=null;function nm(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function uo(n,e,t=!1){const i=Vt||wn;if(i||vs){let s=vs?vs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ye(e)?e.call(i&&i.proxy):e}}const Ed={},bd=()=>Object.create(Ed),Td=n=>Object.getPrototypeOf(n)===Ed;function im(n,e,t,i=!1){const s={},r=bd();n.propsDefaults=Object.create(null),Ad(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:vp(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function sm(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=nt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(zo(n.emitsOptions,d))continue;const p=e[d];if(l)if(it(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=bi(d);s[g]=el(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{Ad(n,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!it(e,u)&&((h=$i(u))===u||!it(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=el(l,a,u,void 0,n,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!it(e,u))&&(delete r[u],c=!0)}c&&qn(n.attrs,"set","")}function Ad(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(nr(l))continue;const c=e[l];let h;s&&it(s,h=bi(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:zo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=nt(t),c=a||dt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=el(s,l,u,c[u],n,!it(c,u))}}return o}function el(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=it(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ye(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const h=wr(s);i=c[t]=l.call(null,e),h()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===$i(t))&&(i=!0))}return i}const rm=new WeakMap;function wd(n,e,t=!1){const i=t?rm:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ye(n)){const h=u=>{l=!0;const[d,p]=wd(u,e,!0);Ut(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!r&&!l)return Mt(n)&&i.set(n,_s),_s;if(We(r))for(let h=0;h<r.length;h++){const u=bi(r[h]);eh(u)&&(o[u]=dt)}else if(r)for(const h in r){const u=bi(h);if(eh(u)){const d=r[h],p=o[u]=We(d)||Ye(d)?{type:d}:Ut({},d),g=p.type;let x=!1,m=!0;if(We(g))for(let f=0;f<g.length;++f){const A=g[f],T=Ye(A)&&A.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=Ye(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||it(p,"default"))&&a.push(u)}}const c=[o,a];return Mt(n)&&i.set(n,c),c}function eh(n){return n[0]!=="$"&&!nr(n)}const uc=n=>n[0]==="_"||n==="$stable",dc=n=>We(n)?n.map(Tn):[Tn(n)],om=(n,e,t)=>{if(e._n)return e;const i=Ip((...s)=>dc(e(...s)),t);return i._c=!1,i},Rd=(n,e,t)=>{const i=n._ctx;for(const s in n){if(uc(s))continue;const r=n[s];if(Ye(r))e[s]=om(s,r,i);else if(r!=null){const o=dc(r);e[s]=()=>o}}},Cd=(n,e)=>{const t=dc(e);n.slots.default=()=>t},Pd=(n,e,t)=>{for(const i in e)(t||!uc(i))&&(n[i]=e[i])},am=(n,e,t)=>{const i=n.slots=bd();if(n.vnode.shapeFlag&32){const s=e.__;s&&Xa(i,"__",s,!0);const r=e._;r?(Pd(i,e,t),t&&Xa(i,"_",r,!0)):Rd(e,i)}else e&&Cd(n,e)},lm=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=dt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Pd(s,e,t):(r=!e.$stable,Rd(e,s)),o=e}else e&&(Cd(n,e),o={default:1});if(r)for(const a in s)!uc(a)&&o[a]==null&&delete s[a]},tn=Sm;function cm(n){return hm(n)}function hm(n,e){const t=Bo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:p=Rn,insertStaticContent:g}=n,x=(w,C,y,se=null,$=null,J=null,K=void 0,ie=null,Y=!!C.dynamicChildren)=>{if(w===C)return;w&&!Vs(w,C)&&(se=me(w),Fe(w,$,J,!0),w=null),C.patchFlag===-2&&(Y=!1,C.dynamicChildren=null);const{type:j,ref:ge,shapeFlag:E}=C;switch(j){case Vo:m(w,C,y,se);break;case Ts:f(w,C,y,se);break;case na:w==null&&A(C,y,se,K);break;case Kn:X(w,C,y,se,$,J,K,ie,Y);break;default:E&1?L(w,C,y,se,$,J,K,ie,Y):E&6?V(w,C,y,se,$,J,K,ie,Y):(E&64||E&128)&&j.process(w,C,y,se,$,J,K,ie,Y,Ie)}ge!=null&&$?or(ge,w&&w.ref,J,C||w,!C):ge==null&&w&&w.ref!=null&&or(w.ref,null,J,w,!0)},m=(w,C,y,se)=>{if(w==null)i(C.el=a(C.children),y,se);else{const $=C.el=w.el;C.children!==w.children&&c($,C.children)}},f=(w,C,y,se)=>{w==null?i(C.el=l(C.children||""),y,se):C.el=w.el},A=(w,C,y,se)=>{[w.el,w.anchor]=g(w.children,C,y,se,w.el,w.anchor)},T=({el:w,anchor:C},y,se)=>{let $;for(;w&&w!==C;)$=d(w),i(w,y,se),w=$;i(C,y,se)},v=({el:w,anchor:C})=>{let y;for(;w&&w!==C;)y=d(w),s(w),w=y;s(C)},L=(w,C,y,se,$,J,K,ie,Y)=>{C.type==="svg"?K="svg":C.type==="math"&&(K="mathml"),w==null?P(C,y,se,$,J,K,ie,Y):b(w,C,$,J,K,ie,Y)},P=(w,C,y,se,$,J,K,ie)=>{let Y,j;const{props:ge,shapeFlag:E,transition:_,dirs:I}=w;if(Y=w.el=o(w.type,J,ge&&ge.is,ge),E&8?h(Y,w.children):E&16&&N(w.children,Y,null,se,$,ta(w,J),K,ie),I&&Ci(w,null,se,"created"),R(Y,w,w.scopeId,K,se),ge){for(const Z in ge)Z!=="value"&&!nr(Z)&&r(Y,Z,null,ge[Z],J,se);"value"in ge&&r(Y,"value",null,ge.value,J),(j=ge.onVnodeBeforeMount)&&En(j,se,w)}I&&Ci(w,null,se,"beforeMount");const z=um($,_);z&&_.beforeEnter(Y),i(Y,C,y),((j=ge&&ge.onVnodeMounted)||z||I)&&tn(()=>{j&&En(j,se,w),z&&_.enter(Y),I&&Ci(w,null,se,"mounted")},$)},R=(w,C,y,se,$)=>{if(y&&p(w,y),se)for(let J=0;J<se.length;J++)p(w,se[J]);if($){let J=$.subTree;if(C===J||Fd(J.type)&&(J.ssContent===C||J.ssFallback===C)){const K=$.vnode;R(w,K,K.scopeId,K.slotScopeIds,$.parent)}}},N=(w,C,y,se,$,J,K,ie,Y=0)=>{for(let j=Y;j<w.length;j++){const ge=w[j]=ie?fi(w[j]):Tn(w[j]);x(null,ge,C,y,se,$,J,K,ie)}},b=(w,C,y,se,$,J,K)=>{const ie=C.el=w.el;let{patchFlag:Y,dynamicChildren:j,dirs:ge}=C;Y|=w.patchFlag&16;const E=w.props||dt,_=C.props||dt;let I;if(y&&Pi(y,!1),(I=_.onVnodeBeforeUpdate)&&En(I,y,C,w),ge&&Ci(C,w,y,"beforeUpdate"),y&&Pi(y,!0),(E.innerHTML&&_.innerHTML==null||E.textContent&&_.textContent==null)&&h(ie,""),j?S(w.dynamicChildren,j,ie,y,se,ta(C,$),J):K||H(w,C,ie,null,y,se,ta(C,$),J,!1),Y>0){if(Y&16)D(ie,E,_,y,$);else if(Y&2&&E.class!==_.class&&r(ie,"class",null,_.class,$),Y&4&&r(ie,"style",E.style,_.style,$),Y&8){const z=C.dynamicProps;for(let Z=0;Z<z.length;Z++){const k=z[Z],ve=E[k],he=_[k];(he!==ve||k==="value")&&r(ie,k,ve,he,$,y)}}Y&1&&w.children!==C.children&&h(ie,C.children)}else!K&&j==null&&D(ie,E,_,y,$);((I=_.onVnodeUpdated)||ge)&&tn(()=>{I&&En(I,y,C,w),ge&&Ci(C,w,y,"updated")},se)},S=(w,C,y,se,$,J,K)=>{for(let ie=0;ie<C.length;ie++){const Y=w[ie],j=C[ie],ge=Y.el&&(Y.type===Kn||!Vs(Y,j)||Y.shapeFlag&198)?u(Y.el):y;x(Y,j,ge,null,se,$,J,K,!0)}},D=(w,C,y,se,$)=>{if(C!==y){if(C!==dt)for(const J in C)!nr(J)&&!(J in y)&&r(w,J,C[J],null,$,se);for(const J in y){if(nr(J))continue;const K=y[J],ie=C[J];K!==ie&&J!=="value"&&r(w,J,ie,K,$,se)}"value"in y&&r(w,"value",C.value,y.value,$)}},X=(w,C,y,se,$,J,K,ie,Y)=>{const j=C.el=w?w.el:a(""),ge=C.anchor=w?w.anchor:a("");let{patchFlag:E,dynamicChildren:_,slotScopeIds:I}=C;I&&(ie=ie?ie.concat(I):I),w==null?(i(j,y,se),i(ge,y,se),N(C.children||[],y,ge,$,J,K,ie,Y)):E>0&&E&64&&_&&w.dynamicChildren?(S(w.dynamicChildren,_,y,$,J,K,ie),(C.key!=null||$&&C===$.subTree)&&Ld(w,C,!0)):H(w,C,y,ge,$,J,K,ie,Y)},V=(w,C,y,se,$,J,K,ie,Y)=>{C.slotScopeIds=ie,w==null?C.shapeFlag&512?$.ctx.activate(C,y,se,K,Y):ee(C,y,se,$,J,K,Y):ne(w,C,Y)},ee=(w,C,y,se,$,J,K)=>{const ie=w.component=Lm(w,se,$);if(_d(w)&&(ie.ctx.renderer=Ie),Dm(ie,!1,K),ie.asyncDep){if($&&$.registerDep(ie,q,K),!w.el){const Y=ie.subTree=Mi(Ts);f(null,Y,C,y)}}else q(ie,w,C,y,$,J,K)},ne=(w,C,y)=>{const se=C.component=w.component;if(ym(w,C,y))if(se.asyncDep&&!se.asyncResolved){Q(se,C,y);return}else se.next=C,se.update();else C.el=w.el,se.vnode=C},q=(w,C,y,se,$,J,K)=>{const ie=()=>{if(w.isMounted){let{next:E,bu:_,u:I,parent:z,vnode:Z}=w;{const Ee=Dd(w);if(Ee){E&&(E.el=Z.el,Q(w,E,K)),Ee.asyncDep.then(()=>{w.isUnmounted||ie()});return}}let k=E,ve;Pi(w,!1),E?(E.el=Z.el,Q(w,E,K)):E=Z,_&&Ko(_),(ve=E.props&&E.props.onVnodeBeforeUpdate)&&En(ve,z,E,Z),Pi(w,!0);const he=nh(w),ye=w.subTree;w.subTree=he,x(ye,he,u(ye.el),me(ye),w,$,J),E.el=he.el,k===null&&Mm(w,he.el),I&&tn(I,$),(ve=E.props&&E.props.onVnodeUpdated)&&tn(()=>En(ve,z,E,Z),$)}else{let E;const{el:_,props:I}=C,{bm:z,m:Z,parent:k,root:ve,type:he}=w,ye=ar(C);Pi(w,!1),z&&Ko(z),!ye&&(E=I&&I.onVnodeBeforeMount)&&En(E,k,C),Pi(w,!0);{ve.ce&&ve.ce._def.shadowRoot!==!1&&ve.ce._injectChildStyle(he);const Ee=w.subTree=nh(w);x(null,Ee,y,se,w,$,J),C.el=Ee.el}if(Z&&tn(Z,$),!ye&&(E=I&&I.onVnodeMounted)){const Ee=C;tn(()=>En(E,k,Ee),$)}(C.shapeFlag&256||k&&ar(k.vnode)&&k.vnode.shapeFlag&256)&&w.a&&tn(w.a,$),w.isMounted=!0,C=y=se=null}};w.scope.on();const Y=w.effect=new $u(ie);w.scope.off();const j=w.update=Y.run.bind(Y),ge=w.job=Y.runIfDirty.bind(Y);ge.i=w,ge.id=w.uid,Y.scheduler=()=>lc(ge),Pi(w,!0),j()},Q=(w,C,y)=>{C.component=w;const se=w.vnode.props;w.vnode=C,w.next=null,sm(w,C.props,se,y),lm(w,C.children,y),ti(),Kc(w),ni()},H=(w,C,y,se,$,J,K,ie,Y=!1)=>{const j=w&&w.children,ge=w?w.shapeFlag:0,E=C.children,{patchFlag:_,shapeFlag:I}=C;if(_>0){if(_&128){Me(j,E,y,se,$,J,K,ie,Y);return}else if(_&256){de(j,E,y,se,$,J,K,ie,Y);return}}I&8?(ge&16&&Re(j,$,J),E!==j&&h(y,E)):ge&16?I&16?Me(j,E,y,se,$,J,K,ie,Y):Re(j,$,J,!0):(ge&8&&h(y,""),I&16&&N(E,y,se,$,J,K,ie,Y))},de=(w,C,y,se,$,J,K,ie,Y)=>{w=w||_s,C=C||_s;const j=w.length,ge=C.length,E=Math.min(j,ge);let _;for(_=0;_<E;_++){const I=C[_]=Y?fi(C[_]):Tn(C[_]);x(w[_],I,y,null,$,J,K,ie,Y)}j>ge?Re(w,$,J,!0,!1,E):N(C,y,se,$,J,K,ie,Y,E)},Me=(w,C,y,se,$,J,K,ie,Y)=>{let j=0;const ge=C.length;let E=w.length-1,_=ge-1;for(;j<=E&&j<=_;){const I=w[j],z=C[j]=Y?fi(C[j]):Tn(C[j]);if(Vs(I,z))x(I,z,y,null,$,J,K,ie,Y);else break;j++}for(;j<=E&&j<=_;){const I=w[E],z=C[_]=Y?fi(C[_]):Tn(C[_]);if(Vs(I,z))x(I,z,y,null,$,J,K,ie,Y);else break;E--,_--}if(j>E){if(j<=_){const I=_+1,z=I<ge?C[I].el:se;for(;j<=_;)x(null,C[j]=Y?fi(C[j]):Tn(C[j]),y,z,$,J,K,ie,Y),j++}}else if(j>_)for(;j<=E;)Fe(w[j],$,J,!0),j++;else{const I=j,z=j,Z=new Map;for(j=z;j<=_;j++){const Ae=C[j]=Y?fi(C[j]):Tn(C[j]);Ae.key!=null&&Z.set(Ae.key,j)}let k,ve=0;const he=_-z+1;let ye=!1,Ee=0;const oe=new Array(he);for(j=0;j<he;j++)oe[j]=0;for(j=I;j<=E;j++){const Ae=w[j];if(ve>=he){Fe(Ae,$,J,!0);continue}let Ce;if(Ae.key!=null)Ce=Z.get(Ae.key);else for(k=z;k<=_;k++)if(oe[k-z]===0&&Vs(Ae,C[k])){Ce=k;break}Ce===void 0?Fe(Ae,$,J,!0):(oe[Ce-z]=j+1,Ce>=Ee?Ee=Ce:ye=!0,x(Ae,C[Ce],y,null,$,J,K,ie,Y),ve++)}const Se=ye?dm(oe):_s;for(k=Se.length-1,j=he-1;j>=0;j--){const Ae=z+j,Ce=C[Ae],fe=Ae+1<ge?C[Ae+1].el:se;oe[j]===0?x(null,Ce,y,fe,$,J,K,ie,Y):ye&&(k<0||j!==Se[k]?we(Ce,y,fe,2):k--)}}},we=(w,C,y,se,$=null)=>{const{el:J,type:K,transition:ie,children:Y,shapeFlag:j}=w;if(j&6){we(w.component.subTree,C,y,se);return}if(j&128){w.suspense.move(C,y,se);return}if(j&64){K.move(w,C,y,Ie);return}if(K===Kn){i(J,C,y);for(let E=0;E<Y.length;E++)we(Y[E],C,y,se);i(w.anchor,C,y);return}if(K===na){T(w,C,y);return}if(se!==2&&j&1&&ie)if(se===0)ie.beforeEnter(J),i(J,C,y),tn(()=>ie.enter(J),$);else{const{leave:E,delayLeave:_,afterLeave:I}=ie,z=()=>{w.ctx.isUnmounted?s(J):i(J,C,y)},Z=()=>{E(J,()=>{z(),I&&I()})};_?_(J,z,Z):Z()}else i(J,C,y)},Fe=(w,C,y,se=!1,$=!1)=>{const{type:J,props:K,ref:ie,children:Y,dynamicChildren:j,shapeFlag:ge,patchFlag:E,dirs:_,cacheIndex:I}=w;if(E===-2&&($=!1),ie!=null&&(ti(),or(ie,null,y,w,!0),ni()),I!=null&&(C.renderCache[I]=void 0),ge&256){C.ctx.deactivate(w);return}const z=ge&1&&_,Z=!ar(w);let k;if(Z&&(k=K&&K.onVnodeBeforeUnmount)&&En(k,C,w),ge&6)ue(w.component,y,se);else{if(ge&128){w.suspense.unmount(y,se);return}z&&Ci(w,null,C,"beforeUnmount"),ge&64?w.type.remove(w,C,y,Ie,se):j&&!j.hasOnce&&(J!==Kn||E>0&&E&64)?Re(j,C,y,!1,!0):(J===Kn&&E&384||!$&&ge&16)&&Re(Y,C,y),se&&tt(w)}(Z&&(k=K&&K.onVnodeUnmounted)||z)&&tn(()=>{k&&En(k,C,w),z&&Ci(w,null,C,"unmounted")},y)},tt=w=>{const{type:C,el:y,anchor:se,transition:$}=w;if(C===Kn){te(y,se);return}if(C===na){v(w);return}const J=()=>{s(y),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(w.shapeFlag&1&&$&&!$.persisted){const{leave:K,delayLeave:ie}=$,Y=()=>K(y,J);ie?ie(w.el,J,Y):Y()}else J()},te=(w,C)=>{let y;for(;w!==C;)y=d(w),s(w),w=y;s(C)},ue=(w,C,y)=>{const{bum:se,scope:$,job:J,subTree:K,um:ie,m:Y,a:j,parent:ge,slots:{__:E}}=w;th(Y),th(j),se&&Ko(se),ge&&We(E)&&E.forEach(_=>{ge.renderCache[_]=void 0}),$.stop(),J&&(J.flags|=8,Fe(K,w,C,y)),ie&&tn(ie,C),tn(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Re=(w,C,y,se=!1,$=!1,J=0)=>{for(let K=J;K<w.length;K++)Fe(w[K],C,y,se,$)},me=w=>{if(w.shapeFlag&6)return me(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=d(w.anchor||w.el),y=C&&C[Up];return y?d(y):C};let De=!1;const Ze=(w,C,y)=>{w==null?C._vnode&&Fe(C._vnode,null,null,!0):x(C._vnode||null,w,C,null,null,null,y),C._vnode=w,De||(De=!0,Kc(),dd(),De=!1)},Ie={p:x,um:Fe,m:we,r:tt,mt:ee,mc:N,pc:H,pbc:S,n:me,o:n};return{render:Ze,hydrate:void 0,createApp:tm(Ze)}}function ta({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Pi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function um(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ld(n,e,t=!1){const i=n.children,s=e.children;if(We(i)&&We(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=fi(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Ld(o,a)),a.type===Vo&&(a.el=o.el),a.type===Ts&&!a.el&&(a.el=o.el)}}function dm(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Dd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dd(e)}function th(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const fm=Symbol.for("v-scx"),pm=()=>uo(fm);function fo(n,e,t){return Id(n,e,t)}function Id(n,e,t=dt){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ut({},t),l=e&&i||!e&&r!=="post";let c;if(_r){if(r==="sync"){const p=pm();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Rn,p.resume=Rn,p.pause=Rn,p}}const h=Vt;a.call=(p,g,x)=>Ln(p,h,g,x);let u=!1;r==="post"?a.scheduler=p=>{tn(p,h&&h.suspense)}:r!=="sync"&&(u=!0,a.scheduler=(p,g)=>{g?p():lc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),u&&(p.flags|=2,h&&(p.id=h.uid,p.i=h))};const d=Rp(n,e,a);return _r&&(c?c.push(d):l&&d()),d}function mm(n,e,t){const i=this.proxy,s=Rt(n)?n.includes(".")?Ud(i,n):()=>i[n]:n.bind(i,i);let r;Ye(e)?r=e:(r=e.handler,t=e);const o=wr(this),a=Id(s,r.bind(i),t);return o(),a}function Ud(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const gm=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${bi(e)}Modifiers`]||n[`${$i(e)}Modifiers`];function _m(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||dt;let s=t;const r=e.startsWith("update:"),o=r&&gm(i,e.slice(7));o&&(o.trim&&(s=t.map(h=>Rt(h)?h.trim():h)),o.number&&(s=t.map(jf)));let a,l=i[a=$o(e)]||i[a=$o(bi(e))];!l&&r&&(l=i[a=$o($i(e))]),l&&Ln(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Ln(c,n,6,s)}}function Nd(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ye(n)){const l=c=>{const h=Nd(c,e,!0);h&&(a=!0,Ut(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(Mt(n)&&i.set(n,null),null):(We(r)?r.forEach(l=>o[l]=null):Ut(o,r),Mt(n)&&i.set(n,o),o)}function zo(n,e){return!n||!No(e)?!1:(e=e.slice(2).replace(/Once$/,""),it(n,e[0].toLowerCase()+e.slice(1))||it(n,$i(e))||it(n,e))}function nh(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:p,ctx:g,inheritAttrs:x}=n,m=Ao(n);let f,A;try{if(t.shapeFlag&4){const v=s||i,L=v;f=Tn(c.call(L,v,h,u,p,d,g)),A=a}else{const v=e;f=Tn(v.length>1?v(u,{attrs:a,slots:o,emit:l}):v(u,null)),A=e.props?a:xm(a)}}catch(v){cr.length=0,Ho(v,n,1),f=Mi(Ts)}let T=f;if(A&&x!==!1){const v=Object.keys(A),{shapeFlag:L}=T;v.length&&L&7&&(r&&v.some($l)&&(A=vm(A,r)),T=As(T,A,!1,!0))}return t.dirs&&(T=As(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&cc(T,t.transition),f=T,Ao(m),f}const xm=n=>{let e;for(const t in n)(t==="class"||t==="style"||No(t))&&((e||(e={}))[t]=n[t]);return e},vm=(n,e)=>{const t={};for(const i in n)(!$l(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ym(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ih(i,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==i[d]&&!zo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ih(i,o,c):!0:!!o;return!1}function ih(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!zo(t,r))return!0}return!1}function Mm({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Fd=n=>n.__isSuspense;function Sm(n,e){e&&e.pendingBranch?We(n)?e.effects.push(...n):e.effects.push(n):Dp(n)}const Kn=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),Ts=Symbol.for("v-cmt"),na=Symbol.for("v-stc"),cr=[];let nn=null;function Od(n=!1){cr.push(nn=n?null:[])}function Em(){cr.pop(),nn=cr[cr.length-1]||null}let gr=1;function sh(n,e=!1){gr+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function bm(n){return n.dynamicChildren=gr>0?nn||_s:null,Em(),gr>0&&nn&&nn.push(n),n}function Bd(n,e,t,i,s,r){return bm(fc(n,e,t,i,s,r,!0))}function Hd(n){return n?n.__v_isVNode===!0:!1}function Vs(n,e){return n.type===e.type&&n.key===e.key}const kd=({key:n})=>n??null,po=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Rt(n)||It(n)||Ye(n)?{i:wn,r:n,k:e,f:!!t}:n:null);function fc(n,e=null,t=null,i=0,s=null,r=n===Kn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&kd(e),ref:e&&po(e),scopeId:pd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:wn};return a?(pc(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),gr>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const Mi=Tm;function Tm(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Yp)&&(n=Ts),Hd(n)){const a=As(n,e,!0);return t&&pc(a,t),gr>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(Fm(n)&&(n=n.__vccOpts),e){e=Am(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=Jl(a)),Mt(l)&&(ac(l)&&!We(l)&&(l=Ut({},l)),e.style=Zl(l))}const o=Rt(n)?1:Fd(n)?128:Np(n)?64:Mt(n)?4:Ye(n)?2:0;return fc(n,e,t,i,s,o,r,!0)}function Am(n){return n?ac(n)||Td(n)?Ut({},n):n:null}function As(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Rm(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&kd(c),ref:e&&e.ref?t&&r?We(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Kn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&As(n.ssContent),ssFallback:n.ssFallback&&As(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cc(h,l.clone(h)),h}function wm(n=" ",e=0){return Mi(Vo,null,n,e)}function Tn(n){return n==null||typeof n=="boolean"?Mi(Ts):We(n)?Mi(Kn,null,n.slice()):Hd(n)?fi(n):Mi(Vo,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:As(n)}function pc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),pc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Td(e)?e._ctx=wn:s===3&&wn&&(wn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ye(e)?(e={default:e,_ctx:wn},t=32):(e=String(e),i&64?(t=16,e=[wm(e)]):t=8);n.children=e,n.shapeFlag|=t}function Rm(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Jl([e.class,i.class]));else if(s==="style")e.style=Zl([e.style,i.style]);else if(No(s)){const r=e[s],o=i[s];o&&r!==o&&!(We(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function En(n,e,t,i=null){Ln(n,e,7,[t,i])}const Cm=Sd();let Pm=0;function Lm(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Cm,r={uid:Pm++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wd(i,s),emitsOptions:Nd(i,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:i.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_m.bind(null,r),n.ce&&n.ce(r),r}let Vt=null,Ro,tl;{const n=Bo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ro=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),tl=e("__VUE_SSR_SETTERS__",t=>_r=t)}const wr=n=>{const e=Vt;return Ro(n),n.scope.on(),()=>{n.scope.off(),Ro(e)}},rh=()=>{Vt&&Vt.scope.off(),Ro(null)};function zd(n){return n.vnode.shapeFlag&4}let _r=!1;function Dm(n,e=!1,t=!1){e&&tl(e);const{props:i,children:s}=n.vnode,r=zd(n);im(n,i,r,e),am(n,s,t||e);const o=r?Im(n,e):void 0;return e&&tl(!1),o}function Im(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,$p);const{setup:i}=t;if(i){ti();const s=n.setupContext=i.length>1?Nm(n):null,r=wr(n),o=Ar(i,n,0,[n.props,s]),a=Xu(o);if(ni(),r(),(a||n.sp)&&!ar(n)&&gd(n),a){if(o.then(rh,rh),e)return o.then(l=>{oh(n,l)}).catch(l=>{Ho(l,n,0)});n.asyncDep=o}else oh(n,o)}else Vd(n)}function oh(n,e,t){Ye(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Mt(e)&&(n.setupState=cd(e)),Vd(n)}function Vd(n,e,t){const i=n.type;n.render||(n.render=i.render||Rn);{const s=wr(n);ti();try{Kp(n)}finally{ni(),s()}}}const Um={get(n,e){return Dt(n,"get",""),n[e]}};function Nm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Um),slots:n.slots,emit:n.emit,expose:e}}function mc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(cd(yp(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in lr)return lr[t](n)},has(e,t){return t in e||t in lr}})):n.proxy}function Fm(n){return Ye(n)&&"__vccOpts"in n}const Om=(n,e)=>Ap(n,e,_r),Bm="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nl;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{nl=ah.createPolicy("vue",{createHTML:n=>n})}catch{}const Gd=nl?n=>nl.createHTML(n):n=>n,Hm="http://www.w3.org/2000/svg",km="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,lh=Yn&&Yn.createElement("template"),zm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Yn.createElementNS(Hm,n):e==="mathml"?Yn.createElementNS(km,n):t?Yn.createElement(n,{is:t}):Yn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Yn.createTextNode(n),createComment:n=>Yn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{lh.innerHTML=Gd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=lh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Vm=Symbol("_vtc");function Gm(n,e,t){const i=n[Vm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ch=Symbol("_vod"),Wm=Symbol("_vsh"),Xm=Symbol(""),jm=/(^|;)\s*display\s*:/;function Ym(n,e,t){const i=n.style,s=Rt(t);let r=!1;if(t&&!s){if(e)if(Rt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&mo(i,a,"")}else for(const o in e)t[o]==null&&mo(i,o,"");for(const o in t)o==="display"&&(r=!0),mo(i,o,t[o])}else if(s){if(e!==t){const o=i[Xm];o&&(t+=";"+o),i.cssText=t,r=jm.test(t)}}else e&&n.removeAttribute("style");ch in n&&(n[ch]=r?i.display:"",n[Wm]&&(i.display="none"))}const hh=/\s*!important$/;function mo(n,e,t){if(We(t))t.forEach(i=>mo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=$m(n,e);hh.test(t)?n.setProperty($i(i),t.replace(hh,""),"important"):n[i]=t}}const uh=["Webkit","Moz","ms"],ia={};function $m(n,e){const t=ia[e];if(t)return t;let i=bi(e);if(i!=="filter"&&i in n)return ia[e]=i;i=ju(i);for(let s=0;s<uh.length;s++){const r=uh[s]+i;if(r in n)return ia[e]=r}return e}const dh="http://www.w3.org/1999/xlink";function fh(n,e,t,i,s,r=Jf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(dh,e.slice(6,e.length)):n.setAttributeNS(dh,e,t):t==null||r&&!Yu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Ns(t)?String(t):t)}function ph(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Gd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Yu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Km(n,e,t,i){n.addEventListener(e,t,i)}function qm(n,e,t,i){n.removeEventListener(e,t,i)}const mh=Symbol("_vei");function Zm(n,e,t,i,s=null){const r=n[mh]||(n[mh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Jm(e);if(i){const c=r[e]=tg(i,s);Km(n,a,c,l)}else o&&(qm(n,a,o,l),r[e]=void 0)}}const gh=/(?:Once|Passive|Capture)$/;function Jm(n){let e;if(gh.test(n)){e={};let i;for(;i=n.match(gh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):$i(n.slice(2)),e]}let sa=0;const Qm=Promise.resolve(),eg=()=>sa||(Qm.then(()=>sa=0),sa=Date.now());function tg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Ln(ng(i,t.value),e,5,[i])};return t.value=n,t.attached=eg(),t}function ng(n,e){if(We(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const _h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ig=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Gm(n,i,o):e==="style"?Ym(n,t,i):No(e)?$l(e)||Zm(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sg(n,e,i,o))?(ph(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&fh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Rt(i))?ph(n,bi(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),fh(n,e,i,o))};function sg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_h(e)&&Ye(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Rt(t)?!1:e in n}const rg=Ut({patchProp:ig},zm);let xh;function og(){return xh||(xh=cm(rg))}const ag=(...n)=>{const e=og().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=cg(i);if(!s)return;const r=e._component;!Ye(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,lg(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function lg(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function cg(n){return Rt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gc="178",ys={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hg=0,vh=1,ug=2,Wd=1,dg=2,jn=3,ii=0,qt=1,mn=2,Si=0,Ms=1,yh=2,Mh=3,Sh=4,fg=5,ki=100,pg=101,mg=102,gg=103,_g=104,xg=200,vg=201,yg=202,Mg=203,il=204,sl=205,Sg=206,Eg=207,bg=208,Tg=209,Ag=210,wg=211,Rg=212,Cg=213,Pg=214,rl=0,ol=1,al=2,ws=3,ll=4,cl=5,hl=6,ul=7,Xd=0,Lg=1,Dg=2,Ei=0,Ig=1,Ug=2,Ng=3,Fg=4,Og=5,Bg=6,Hg=7,Eh="attached",kg="detached",jd=300,Rs=301,Cs=302,Co=303,dl=304,Go=306,Ti=1e3,xi=1001,Po=1002,Gt=1003,Yd=1004,Qs=1005,sn=1006,go=1007,Zn=1008,Dn=1009,$d=1010,Kd=1011,xr=1012,_c=1013,Xi=1014,xn=1015,Rr=1016,xc=1017,vc=1018,vr=1020,qd=35902,Zd=1021,Jd=1022,cn=1023,yr=1026,Mr=1027,yc=1028,Mc=1029,Qd=1030,Sc=1031,Ec=1033,_o=33776,xo=33777,vo=33778,yo=33779,fl=35840,pl=35841,ml=35842,gl=35843,_l=36196,xl=37492,vl=37496,yl=37808,Ml=37809,Sl=37810,El=37811,bl=37812,Tl=37813,Al=37814,wl=37815,Rl=37816,Cl=37817,Pl=37818,Ll=37819,Dl=37820,Il=37821,Mo=36492,Ul=36494,Nl=36495,ef=36283,Fl=36284,Ol=36285,Bl=36286,Sr=2300,Er=2301,ra=2302,bh=2400,Th=2401,Ah=2402,zg=2500,Vg=0,tf=1,Hl=2,Gg=3200,Wg=3201,nf=0,Xg=1,gi="",Ct="srgb",jt="srgb-linear",Lo="linear",lt="srgb",Ji=7680,wh=519,jg=512,Yg=513,$g=514,sf=515,Kg=516,qg=517,Zg=518,Jg=519,kl=35044,Rh="300 es",Jn=2e3,Do=2001;class Ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ch=1234567;const hr=Math.PI/180,Ps=180/Math.PI;function Mn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function bc(n,e){return(n%e+e)%e}function Qg(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function e_(n,e,t){return n!==e?(t-n)/(e-n):0}function ur(n,e,t){return(1-t)*n+t*e}function t_(n,e,t,i){return ur(n,e,1-Math.exp(-t*i))}function n_(n,e=1){return e-Math.abs(bc(n,e*2)-e)}function i_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function s_(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function r_(n,e){return n+Math.floor(Math.random()*(e-n+1))}function o_(n,e){return n+Math.random()*(e-n)}function a_(n){return n*(.5-Math.random())}function l_(n){n!==void 0&&(Ch=n);let e=Ch+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c_(n){return n*hr}function h_(n){return n*Ps}function u_(n){return(n&n-1)===0&&n!==0}function d_(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function f_(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function p_(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),u=r((e-i)/2),d=o((e-i)/2),p=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*u,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*u,a*c);break;case"ZXZ":n.set(l*u,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function gn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const rf={DEG2RAD:hr,RAD2DEG:Ps,generateUUID:Mn,clamp:$e,euclideanModulo:bc,mapLinear:Qg,inverseLerp:e_,lerp:ur,damp:t_,pingpong:n_,smoothstep:i_,smootherstep:s_,randInt:r_,randFloat:o_,randFloatSpread:a_,seededRandom:l_,degToRad:c_,radToDeg:h_,isPowerOfTwo:u_,ceilPowerOfTwo:d_,floorPowerOfTwo:f_,setQuaternionFromProperEuler:p_,normalize:rt,denormalize:gn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*x,A=f>=0?1:-1,T=1-f*f;if(T>Number.EPSILON){const L=Math.sqrt(T),P=Math.atan2(L,f*A);m=Math.sin(m*P)/L,a=Math.sin(a*P)/L}const v=a*A;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),u=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ph.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),u=2*(r*i-o*t);return this.x=t+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new F,Ph=new In;class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=s[0],m=s[3],f=s[6],A=s[1],T=s[4],v=s[7],L=s[2],P=s[5],R=s[8];return r[0]=o*x+a*A+l*L,r[3]=o*m+a*T+l*P,r[6]=o*f+a*v+l*R,r[1]=c*x+h*A+u*L,r[4]=c*m+h*T+u*P,r[7]=c*f+h*v+u*R,r[2]=d*x+p*A+g*L,r[5]=d*m+p*T+g*P,r[8]=d*f+p*v+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(s*c-h*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ge;function of(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function br(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function m_(){const n=br("canvas");return n.style.display="block",n}const Lh={};function Ss(n){n in Lh||(Lh[n]=!0,console.warn(n))}function g_(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function __(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function x_(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Dh=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function v_(){const n={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gi?Lo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ss("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[jt]:{primaries:e,whitePoint:i,transfer:Lo,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:Dh,fromXYZ:Ih,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),n}const Je=v_();function ei(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qi;class y_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qi===void 0&&(Qi=br("canvas")),Qi.width=e.width,Qi.height=e.height;const s=Qi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Qi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ei(t[i]/255)*255):t[i]=ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class Tc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Mn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(la(s[o].image)):r.push(la(s[o]))}else r=la(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function la(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?y_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S_=0;const ca=new F;class wt extends Ki{constructor(e=wt.DEFAULT_IMAGE,t=wt.DEFAULT_MAPPING,i=xi,s=xi,r=sn,o=Zn,a=cn,l=Dn,c=wt.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=Mn(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ti:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ti:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wt.DEFAULT_IMAGE=null;wt.DEFAULT_MAPPING=jd;wt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,v=(p+1)/2,L=(f+1)/2,P=(h+d)/4,R=(u+x)/4,N=(g+m)/4;return T>v&&T>L?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=P/i,r=R/i):v>L?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=P/s,r=N/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=R/r,s=N/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-x)/A,this.z=(d-h)/A,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class E_ extends Ki{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:i.depth},r=new wt(s);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Tc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends E_{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class af extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class b_ extends wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,dn):dn.fromBufferAttribute(r,o),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Or.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Or.copy(i.boundingBox)),Or.applyMatrix4(e.matrixWorld),this.union(Or)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gs),Br.subVectors(this.max,Gs),es.subVectors(e.a,Gs),ts.subVectors(e.b,Gs),ns.subVectors(e.c,Gs),ri.subVectors(ts,es),oi.subVectors(ns,ts),Li.subVectors(es,ns);let t=[0,-ri.z,ri.y,0,-oi.z,oi.y,0,-Li.z,Li.y,ri.z,0,-ri.x,oi.z,0,-oi.x,Li.z,0,-Li.x,-ri.y,ri.x,0,-oi.y,oi.x,0,-Li.y,Li.x,0];return!ha(t,es,ts,ns,Br)||(t=[1,0,0,0,1,0,0,0,1],!ha(t,es,ts,ns,Br))?!1:(Hr.crossVectors(ri,oi),t=[Hr.x,Hr.y,Hr.z],ha(t,es,ts,ns,Br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new F,new F,new F,new F,new F,new F,new F,new F],dn=new F,Or=new Nn,es=new F,ts=new F,ns=new F,ri=new F,oi=new F,Li=new F,Gs=new F,Br=new F,Hr=new F,Di=new F;function ha(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Di.fromArray(n,r);const a=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=e.dot(Di),c=t.dot(Di),h=i.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const T_=new Nn,Ws=new F,ua=new F;class Fn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):T_.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const t=Ws.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(ua)),this.expandByPoint(Ws.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const zn=new F,da=new F,kr=new F,ai=new F,fa=new F,zr=new F,pa=new F;class Cr{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zn.copy(this.origin).addScaledVector(this.direction,t),zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){da.copy(e).add(t).multiplyScalar(.5),kr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(da);const r=e.distanceTo(t)*.5,o=-this.direction.dot(kr),a=ai.dot(this.direction),l=-ai.dot(kr),c=ai.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(da).addScaledVector(kr,d),p}intersectSphere(e,t){zn.subVectors(e.center,this.origin);const i=zn.dot(this.direction),s=zn.dot(zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,zn)!==null}intersectTriangle(e,t,i,s,r){fa.subVectors(t,e),zr.subVectors(i,e),pa.crossVectors(fa,zr);let o=this.direction.dot(pa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,e);const l=a*this.direction.dot(zr.crossVectors(ai,zr));if(l<0)return null;const c=a*this.direction.dot(fa.cross(ai));if(c<0||l+c>o)return null;const h=-a*ai.dot(pa);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(e,t,i,s,r,o,a,l,c,h,u,d,p,g,x,m){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,x,m)}set(e,t,i,s,r,o,a,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/is.setFromMatrixColumn(e,0).length(),r=1/is.setFromMatrixColumn(e,1).length(),o=1/is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=x+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=x-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,w_)}lookAt(e,t,i){const s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),li.crossVectors(i,Qt),li.lengthSq()===0&&(Math.abs(i.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),li.crossVectors(i,Qt)),li.normalize(),Vr.crossVectors(Qt,li),s[0]=li.x,s[4]=Vr.x,s[8]=Qt.x,s[1]=li.y,s[5]=Vr.y,s[9]=Qt.y,s[2]=li.z,s[6]=Vr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],A=i[3],T=i[7],v=i[11],L=i[15],P=s[0],R=s[4],N=s[8],b=s[12],S=s[1],D=s[5],X=s[9],V=s[13],ee=s[2],ne=s[6],q=s[10],Q=s[14],H=s[3],de=s[7],Me=s[11],we=s[15];return r[0]=o*P+a*S+l*ee+c*H,r[4]=o*R+a*D+l*ne+c*de,r[8]=o*N+a*X+l*q+c*Me,r[12]=o*b+a*V+l*Q+c*we,r[1]=h*P+u*S+d*ee+p*H,r[5]=h*R+u*D+d*ne+p*de,r[9]=h*N+u*X+d*q+p*Me,r[13]=h*b+u*V+d*Q+p*we,r[2]=g*P+x*S+m*ee+f*H,r[6]=g*R+x*D+m*ne+f*de,r[10]=g*N+x*X+m*q+f*Me,r[14]=g*b+x*V+m*Q+f*we,r[3]=A*P+T*S+v*ee+L*H,r[7]=A*R+T*D+v*ne+L*de,r[11]=A*N+T*X+v*q+L*Me,r[15]=A*b+T*V+v*Q+L*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+i*c*d+s*a*p-i*l*p)+x*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],A=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,T=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,P=t*A+i*T+s*v+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(x*d*r-u*m*r-x*s*p+i*m*p+u*s*f-i*d*f)*R,e[2]=(a*m*r-x*l*r+x*s*c-i*m*c-a*s*f+i*l*f)*R,e[3]=(u*l*r-a*d*r-u*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=T*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=v*R,e[9]=(g*u*r-h*x*r-g*i*p+t*x*p+h*i*f-t*u*f)*R,e[10]=(o*x*r-g*a*r+g*i*c-t*x*c-o*i*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*i*c+t*u*c+o*i*p-t*a*p)*R,e[12]=L*R,e[13]=(h*x*s-g*u*s+g*i*d-t*x*d-h*i*m+t*u*m)*R,e[14]=(g*a*s-o*x*s-g*i*l+t*x*l+o*i*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*i*l-t*u*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,A=l*c,T=l*h,v=l*u,L=i.x,P=i.y,R=i.z;return s[0]=(1-(x+f))*L,s[1]=(p+v)*L,s[2]=(g-T)*L,s[3]=0,s[4]=(p-v)*P,s[5]=(1-(d+f))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(g+T)*R,s[9]=(m-A)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=is.set(s[0],s[1],s[2]).length();const o=is.set(s[4],s[5],s[6]).length(),a=is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],fn.copy(this);const c=1/r,h=1/o,u=1/a;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Jn){const l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===Jn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Do)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Jn){const l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(o-r),d=(t+e)*c,p=(i+s)*h;let g,x;if(a===Jn)g=(o+r)*u,x=-2*u;else if(a===Do)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const is=new F,fn=new Xe,A_=new F(0,0,0),w_=new F(1,1,1),li=new F,Vr=new F,Qt=new F,Uh=new Xe,Nh=new In;class Un{constructor(e=0,t=0,i=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const Fh=new F,ss=new In,Vn=new Xe,Gr=new F,Xs=new F,C_=new F,P_=new In,Oh=new F(1,0,0),Bh=new F(0,1,0),Hh=new F(0,0,1),kh={type:"added"},L_={type:"removed"},rs={type:"childadded",child:null},ma={type:"childremoved",child:null};class xt extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=Mn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new F,t=new Un,i=new In,s=new F(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new Ge}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.multiply(ss),this}rotateOnWorldAxis(e,t){return ss.setFromAxisAngle(e,t),this.quaternion.premultiply(ss),this}rotateX(e){return this.rotateOnAxis(Oh,e)}rotateY(e){return this.rotateOnAxis(Bh,e)}rotateZ(e){return this.rotateOnAxis(Hh,e)}translateOnAxis(e,t){return Fh.copy(e).applyQuaternion(this.quaternion),this.position.add(Fh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oh,e)}translateY(e){return this.translateOnAxis(Bh,e)}translateZ(e){return this.translateOnAxis(Hh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gr.copy(e):Gr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Xs,Gr,this.up):Vn.lookAt(Gr,Xs,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),ss.setFromRotationMatrix(Vn),this.quaternion.premultiply(ss.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kh),rs.child=e,this.dispatchEvent(rs),rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kh),rs.child=e,this.dispatchEvent(rs),rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,C_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xt.DEFAULT_UP=new F(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new F,Gn=new F,ga=new F,Wn=new F,os=new F,as=new F,zh=new F,_a=new F,xa=new F,va=new F,ya=new et,Ma=new et,Sa=new et;class _n{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),Gn.subVectors(i,t),ga.subVectors(e,t);const o=pn.dot(pn),a=pn.dot(Gn),l=pn.dot(ga),c=Gn.dot(Gn),h=Gn.dot(ga),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return ya.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),ya.fromBufferAttribute(e,t),Ma.fromBufferAttribute(e,i),Sa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(ya,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),Gn.subVectors(e,t),pn.cross(Gn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),pn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return _n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;os.subVectors(s,i),as.subVectors(r,i),_a.subVectors(e,i);const l=os.dot(_a),c=as.dot(_a);if(l<=0&&c<=0)return t.copy(i);xa.subVectors(e,s);const h=os.dot(xa),u=as.dot(xa);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(os,o);va.subVectors(e,r);const p=os.dot(va),g=as.dot(va);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(as,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return zh.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(zh,a);const f=1/(m+x+d);return o=x*f,a=d*f,t.copy(i).addScaledVector(os,o).addScaledVector(as,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Ea(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ve{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Je.workingColorSpace){if(e=bc(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Ea(o,r,e+1/3),this.g=Ea(o,r,e),this.b=Ea(o,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Ct){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const i=cf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Je.workingToColorSpace(Lt.copy(this),e),Math.round($e(Lt.r*255,0,255))*65536+Math.round($e(Lt.g*255,0,255))*256+Math.round($e(Lt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Lt.copy(this),t);const i=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ct){Je.workingToColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,s=Lt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Wr);const i=ur(ci.h,Wr.h,t),s=ur(ci.s,Wr.s,t),r=ur(ci.l,Wr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ve;Ve.NAMES=cf;let D_=0;class Cn extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Mn(),this.name="",this.type="Material",this.blending=Ms,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=il,this.blendDst=sl,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ji,this.stencilZFail=Ji,this.stencilZPass=Ji,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==il&&(i.blendSrc=this.blendSrc),this.blendDst!==sl&&(i.blendDst=this.blendDst),this.blendEquation!==ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ji&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ji&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ji&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vi extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new F,Xr=new Oe;let I_=0;class Wt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kl,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kl&&(e.usage=this.usage),e}}class hf extends Wt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uf extends Wt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Xt extends Wt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let U_=0;const an=new Xe,ba=new xt,ls=new F,en=new Nn,js=new Nn,Tt=new F;class hn extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Mn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?uf:hf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];js.setFromBufferAttribute(a),this.morphTargetsRelative?(Tt.addVectors(en.min,js.min),en.expandByPoint(Tt),Tt.addVectors(en.max,js.max),en.expandByPoint(Tt)):(en.expandByPoint(js.min),en.expandByPoint(js.max))}en.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Tt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Tt.fromBufferAttribute(a,c),l&&(ls.fromBufferAttribute(e,c),Tt.add(ls)),s=Math.max(s,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<i.count;N++)a[N]=new F,l[N]=new F;const c=new F,h=new F,u=new F,d=new Oe,p=new Oe,g=new Oe,x=new F,m=new F;function f(N,b,S){c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,b),u.fromBufferAttribute(i,S),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(D),a[N].add(x),a[b].add(x),a[S].add(x),l[N].add(m),l[b].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,b=A.length;N<b;++N){const S=A[N],D=S.start,X=S.count;for(let V=D,ee=D+X;V<ee;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const T=new F,v=new F,L=new F,P=new F;function R(N){L.fromBufferAttribute(s,N),P.copy(L);const b=a[N];T.copy(b),T.sub(L.multiplyScalar(L.dot(b))).normalize(),v.crossVectors(P,b);const D=v.dot(l[N])<0?-1:1;o.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,b=A.length;N<b;++N){const S=A[N],D=S.start,X=S.count;for(let V=D,ee=D+X;V<ee;V+=3)R(e.getX(V+0)),R(e.getX(V+1)),R(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,u=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Wt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vh=new Xe,Ii=new Cr,jr=new Fn,Gh=new F,Yr=new F,$r=new F,Kr=new F,Ta=new F,qr=new F,Wh=new F,Zr=new F;class At extends xt{constructor(e=new hn,t=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ta.fromBufferAttribute(u,e),o?qr.addScaledVector(Ta,h):qr.addScaledVector(Ta.sub(t),h))}t.add(qr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),Ii.copy(e.ray).recast(e.near),!(jr.containsPoint(Ii.origin)===!1&&(Ii.intersectSphere(jr,Gh)===null||Ii.origin.distanceToSquared(Gh)>(e.far-e.near)**2))&&(Vh.copy(r).invert(),Ii.copy(e.ray).applyMatrix4(Vh),!(i.boundingBox!==null&&Ii.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ii)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=A,L=T;v<L;v+=3){const P=a.getX(v),R=a.getX(v+1),N=a.getX(v+2);s=Jr(this,f,e,i,c,h,u,P,R,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const A=a.getX(m),T=a.getX(m+1),v=a.getX(m+2);s=Jr(this,o,e,i,c,h,u,A,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],A=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=A,L=T;v<L;v+=3){const P=v,R=v+1,N=v+2;s=Jr(this,f,e,i,c,h,u,P,R,N),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const A=m,T=m+1,v=m+2;s=Jr(this,o,e,i,c,h,u,A,T,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function N_(n,e,t,i,s,r,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ii,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Yr),n.getVertexPosition(l,$r),n.getVertexPosition(c,Kr);const h=N_(n,e,t,i,Yr,$r,Kr,Wh);if(h){const u=new F;_n.getBarycoord(Wh,Yr,$r,Kr,u),s&&(h.uv=_n.getInterpolatedAttribute(s,a,l,c,u,new Oe)),r&&(h.uv1=_n.getInterpolatedAttribute(r,a,l,c,u,new Oe)),o&&(h.normal=_n.getInterpolatedAttribute(o,a,l,c,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new F,materialIndex:0};_n.getNormal(Yr,$r,Kr,d.normal),h.face=d,h.barycoord=u}return h}class Yi extends hn{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(x,m,f,A,T,v,L,P,R,N,b){const S=v/R,D=L/N,X=v/2,V=L/2,ee=P/2,ne=R+1,q=N+1;let Q=0,H=0;const de=new F;for(let Me=0;Me<q;Me++){const we=Me*D-V;for(let Fe=0;Fe<ne;Fe++){const tt=Fe*S-X;de[x]=tt*A,de[m]=we*T,de[f]=ee,c.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[f]=P>0?1:-1,h.push(de.x,de.y,de.z),u.push(Fe/R),u.push(1-Me/N),Q+=1}}for(let Me=0;Me<N;Me++)for(let we=0;we<R;we++){const Fe=d+we+ne*Me,tt=d+we+ne*(Me+1),te=d+(we+1)+ne*(Me+1),ue=d+(we+1)+ne*Me;l.push(Fe,tt,ue),l.push(tt,te,ue),H+=6}a.addGroup(p,H,b),p+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=Ls(n[t]);for(const s in i)e[s]=i[s]}return e}function F_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function df(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const O_={clone:Ls,merge:Bt};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ai extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ff extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hi=new F,Xh=new Oe,jh=new Oe;class zt extends ff{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hi.x,hi.y).multiplyScalar(-e/hi.z),hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hi.x,hi.y).multiplyScalar(-e/hi.z)}getViewSize(e,t){return this.getViewBounds(e,Xh,jh),t.subVectors(jh,Xh)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const cs=-90,hs=1;class k_ extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(cs,hs,e,t);s.layers=this.layers,this.add(s);const r=new zt(cs,hs,e,t);r.layers=this.layers,this.add(r);const o=new zt(cs,hs,e,t);o.layers=this.layers,this.add(o);const a=new zt(cs,hs,e,t);a.layers=this.layers,this.add(a);const l=new zt(cs,hs,e,t);l.layers=this.layers,this.add(l);const c=new zt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class pf extends wt{constructor(e=[],t=Rs,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z_ extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new pf(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Yi(5,5,5),r=new Ai({name:"CubemapFromEquirect",uniforms:Ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Si});r.uniforms.tEquirect.value=t;const o=new At(s,r),a=t.minFilter;return t.minFilter===Zn&&(t.minFilter=sn),new k_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class vi extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class G_ extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kl,this.updateRanges=[],this.version=0,this.uuid=Mn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new F;class Ac{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),i=rt(i,this.array),s=rt(s,this.array),r=rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ac(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yh=new F,$h=new et,Kh=new et,X_=new F,qh=new Xe,Qr=new F,wa=new Fn,Zh=new Xe,Ra=new Cr;class j_ extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Nn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingBox.expandByPoint(Qr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Qr),this.boundingSphere.expandByPoint(Qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(s),e.ray.intersectsSphere(wa)!==!1&&(Zh.copy(s).invert(),Ra.copy(e.ray).applyMatrix4(Zh),!(this.boundingBox!==null&&Ra.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ra)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;$h.fromBufferAttribute(s.attributes.skinIndex,e),Kh.fromBufferAttribute(s.attributes.skinWeight,e),Yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Kh.getComponent(r);if(o!==0){const a=$h.getComponent(r);qh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(X_.copy(Yh).applyMatrix4(qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mf extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class gf extends wt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Gt,h=Gt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jh=new Xe,Y_=new Xe;class wc{constructor(e=[],t=[]){this.uuid=Mn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Y_;Jh.multiplyMatrices(a,t[r]),Jh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new wc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new gf(t,e,e,cn,xn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mf),this.bones.push(o),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class zl extends Wt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const us=new Xe,Qh=new Xe,eo=[],eu=new Nn,$_=new Xe,Ys=new At,$s=new Fn;class K_ extends At{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zl(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,$_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),eu.copy(e.boundingBox).applyMatrix4(us),this.boundingBox.union(eu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,us),$s.copy(e.boundingSphere).applyMatrix4(us),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(i),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Qh.multiplyMatrices(i,us),Ys.matrixWorld=Qh,Ys.raycast(e,eo);for(let o=0,a=eo.length;o<a;o++){const l=eo[o];l.instanceId=r,l.object=this,t.push(l)}eo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new gf(new Float32Array(s*this.count),s,this.count,yc,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ca=new F,q_=new F,Z_=new Ge;class pi{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ca.subVectors(i,t).cross(q_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ca),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Z_.getNormalMatrix(e),s=this.coplanarPoint(Ca).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ui=new Fn,J_=new Oe(.5,.5),to=new F;class Rc{constructor(e=new pi,t=new pi,i=new pi,s=new pi,r=new pi,o=new pi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Jn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],x=s[10],m=s[11],f=s[12],A=s[13],T=s[14],v=s[15];if(i[0].setComponents(l-r,d-c,m-p,v-f).normalize(),i[1].setComponents(l+r,d+c,m+p,v+f).normalize(),i[2].setComponents(l+o,d+h,m+g,v+A).normalize(),i[3].setComponents(l-o,d-h,m-g,v-A).normalize(),i[4].setComponents(l-a,d-u,m-x,v-T).normalize(),t===Jn)i[5].setComponents(l+a,d+u,m+x,v+T).normalize();else if(t===Do)i[5].setComponents(a,u,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){Ui.center.set(0,0,0);const t=J_.distanceTo(e.center);return Ui.radius=.7071067811865476+t,Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(to.x=s.normal.x>0?e.max.x:e.min.x,to.y=s.normal.y>0?e.max.y:e.min.y,to.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(to)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _f extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Io=new F,Uo=new F,tu=new Xe,Ks=new Cr,no=new Fn,Pa=new F,nu=new F;class Cc extends xt{constructor(e=new hn,t=new _f){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Io.fromBufferAttribute(t,s-1),Uo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Io.distanceTo(Uo);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),no.copy(i.boundingSphere),no.applyMatrix4(s),no.radius+=r,e.ray.intersectsSphere(no)===!1)return;tu.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(tu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),A=h.getX(x+1),T=io(this,e,Ks,l,f,A,x);T&&t.push(T)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=io(this,e,Ks,l,x,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=io(this,e,Ks,l,x,x+1,x);f&&t.push(f)}if(this.isLineLoop){const x=io(this,e,Ks,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function io(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Io.fromBufferAttribute(a,s),Uo.fromBufferAttribute(a,r),t.distanceSqToSegment(Io,Uo,Pa,nu)>i)return;Pa.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Pa);if(!(c<e.near||c>e.far))return{distance:c,point:nu.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const iu=new F,su=new F;class Q_ extends Cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)iu.fromBufferAttribute(t,s),su.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+iu.distanceTo(su);e.setAttribute("lineDistance",new Xt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ex extends Cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class xf extends Cn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ru=new Xe,Vl=new Cr,so=new Fn,ro=new F;class tx extends xt{constructor(e=new hn,t=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(s),so.radius+=r,e.ray.intersectsSphere(so)===!1)return;ru.copy(s).invert(),Vl.copy(e.ray).applyMatrix4(ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);ro.fromBufferAttribute(u,m),ou(ro,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)ro.fromBufferAttribute(u,g),ou(ro,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ou(n,e,t,i,s,r,o){const a=Vl.distanceSqToPoint(n);if(a<t){const l=new F;Vl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class vf extends wt{constructor(e,t,i=Xi,s,r,o,a=Gt,l=Gt,c,h=yr,u=1){if(h!==yr&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Pc extends hn{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;A(),o===!1&&(e>0&&T(!0),t>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(p,2));function A(){const v=new F,L=new F;let P=0;const R=(t-e)/i;for(let N=0;N<=r;N++){const b=[],S=N/r,D=S*(t-e)+e;for(let X=0;X<=s;X++){const V=X/s,ee=V*l+a,ne=Math.sin(ee),q=Math.cos(ee);L.x=D*ne,L.y=-S*i+m,L.z=D*q,u.push(L.x,L.y,L.z),v.set(ne,R,q).normalize(),d.push(v.x,v.y,v.z),p.push(V,1-S),b.push(g++)}x.push(b)}for(let N=0;N<s;N++)for(let b=0;b<r;b++){const S=x[b][N],D=x[b+1][N],X=x[b+1][N+1],V=x[b][N+1];(e>0||b!==0)&&(h.push(S,D,V),P+=3),(t>0||b!==r-1)&&(h.push(D,X,V),P+=3)}c.addGroup(f,P,0),f+=P}function T(v){const L=g,P=new Oe,R=new F;let N=0;const b=v===!0?e:t,S=v===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),g++;const D=g;for(let X=0;X<=s;X++){const ee=X/s*l+a,ne=Math.cos(ee),q=Math.sin(ee);R.x=b*q,R.y=m*S,R.z=b*ne,u.push(R.x,R.y,R.z),d.push(0,S,0),P.x=ne*.5+.5,P.y=q*.5*S+.5,p.push(P.x,P.y),g++}for(let X=0;X<s;X++){const V=L+X,ee=D+X;v===!0?h.push(ee,ee+1,V):h.push(ee+1,ee,V),N+=3}c.addGroup(f,N,v===!0?1:2),f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pr extends hn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const A=f*d-o;for(let T=0;T<c;T++){const v=T*u-r;g.push(v,-A,0),x.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let A=0;A<a;A++){const T=A+c*f,v=A+c*(f+1),L=A+1+c*(f+1),P=A+1+c*f;p.push(T,v,P),p.push(v,L,P)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lc extends hn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new F,d=new F,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const A=[],T=f/i;let v=0;f===0&&o===0?v=.5/t:f===i&&l===Math.PI&&(v=-.5/t);for(let L=0;L<=t;L++){const P=L/t;u.x=-e*Math.cos(s+P*r)*Math.sin(o+T*a),u.y=e*Math.cos(o+T*a),u.z=e*Math.sin(s+P*r)*Math.sin(o+T*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(P+v,1-T),A.push(c++)}h.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){const T=h[f][A+1],v=h[f][A],L=h[f+1][A],P=h[f+1][A+1];(f!==0||o>0)&&p.push(T,v,P),(f!==i-1||l<Math.PI)&&p.push(v,L,P)}this.setIndex(p),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(x,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _i extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nf,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class On extends _i{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nx extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ix extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function sx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function rx(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function au(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function yf(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Lr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ox extends Lr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bh,endingEnd:bh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=e,a=2*t-i;break;case Ah:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=e,l=2*i-t;break;case Ah:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,A=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,T=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let L=0;L!==a;++L)r[L]=f*o[h+L]+A*o[c+L]+T*o[l+L]+v*o[u+L];return r}}class ax extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class lx extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Sn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=oo(t,this.TimeBufferType),this.values=oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:oo(e.times,Array),values:oo(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ox(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Sr:t=this.InterpolantFactoryMethodDiscrete;break;case Er:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Er;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&sx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ra,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Er;class Fs extends Sn{constructor(e,t,i){super(e,t,i)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Sr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class Mf extends Sn{constructor(e,t,i,s){super(e,t,i,s)}}Mf.prototype.ValueTypeName="color";class Ds extends Sn{constructor(e,t,i,s){super(e,t,i,s)}}Ds.prototype.ValueTypeName="number";class cx extends Lr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)In.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Is extends Sn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new cx(this.times,this.values,this.getValueSize(),e)}}Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends Sn{constructor(e,t,i){super(e,t,i)}}Os.prototype.ValueTypeName="string";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Sr;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Sn{constructor(e,t,i,s){super(e,t,i,s)}}Us.prototype.ValueTypeName="vector";class hx{constructor(e="",t=-1,i=[],s=zg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Mn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(dx(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(Sn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=rx(l);l=au(l,1,h),c=au(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ds(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,p,g,x){if(p.length!==0){const m=[],f=[];yf(p,m,f,g),m.length!==0&&x.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let A=0;A!==d[g].morphTargets.length;++A){const T=d[g];m.push(T.time),f.push(T.morphTarget===x?1:0)}s.push(new Ds(".morphTargetInfluence["+x+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";i(Us,p+".position",d,"pos",s),i(Is,p+".quaternion",d,"rot",s),i(Us,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ux(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ds;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return Mf;case"quaternion":return Is;case"bool":case"boolean":return Fs;case"string":return Os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function dx(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ux(n.type);if(n.times===void 0){const t=[],i=[];yf(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Qn={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fx{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const px=new fx;class Bs{constructor(e){this.manager=e!==void 0?e:px,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xn={};class mx extends Error{constructor(e,t){super(e),this.response=t}}class Sf extends Bs{constructor(e){super(e),this.mimeType="",this.responseType=""}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Qn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xn[e]!==void 0){Xn[e].push({onLoad:t,onProgress:i,onError:s});return}Xn[e]=[],Xn[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){A();function A(){u.read().then(({done:T,value:v})=>{if(T)f.close();else{x+=v.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let P=0,R=h.length;P<R;P++){const N=h[P];N.onProgress&&N.onProgress(L)}f.enqueue(v),A()}},T=>{f.error(T)})}}});return new Response(m)}else throw new mx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Qn.add(`file:${e}`,c);const h=Xn[e];delete Xn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Xn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}const ds=new WeakMap;class gx extends Bs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=ds.get(o);u===void 0&&(u=[],ds.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=br("img");function l(){h(),t&&t(this);const u=ds.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}ds.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Qn.remove(`image:${e}`);const d=ds.get(this)||[];for(let p=0;p<d.length;p++){const g=d[p];g.onError&&g.onError(u)}ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qn.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class So extends Bs{constructor(e){super(e)}load(e,t,i,s){const r=new wt,o=new gx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Wo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ve(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const La=new Xe,lu=new F,cu=new F;class Dc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;lu.setFromMatrixPosition(e.matrixWorld),t.position.copy(lu),cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cu),t.updateMatrixWorld(),La.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(La)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _x extends Dc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class xx extends Wo{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new _x}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hu=new Xe,qs=new F,Da=new F;class vx extends Dc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),qs.setFromMatrixPosition(e.matrixWorld),i.position.copy(qs),Da.copy(i.position),Da.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Da),i.updateMatrixWorld(),s.makeTranslation(-qs.x,-qs.y,-qs.z),hu.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}}class yx extends Wo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ic extends ff{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mx extends Dc{constructor(){super(new Ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends Wo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Mx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sx extends Wo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Ia=new WeakMap;class Ex extends Bs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Qn.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ia.has(o)===!0)s&&s(Ia.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Qn.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ia.set(l,c),Qn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Qn.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}}class bx extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uc="\\[\\]\\.:\\/",Tx=new RegExp("["+Uc+"]","g"),Nc="[^"+Uc+"]",Ax="[^"+Uc.replace("\\.","")+"]",wx=/((?:WC+[\/:])*)/.source.replace("WC",Nc),Rx=/(WCOD+)?/.source.replace("WCOD",Ax),Cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nc),Px=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nc),Lx=new RegExp("^"+wx+Rx+Cx+Px+"$"),Dx=["material","materials","bones","map"];class Ix{constructor(e,t,i){const s=i||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ot{constructor(e,t,i){this.path=t,this.parsedPath=i||ot.parseTrackName(t),this.node=ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ot.Composite(e,t,i):new ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tx,"")}static parseTrackName(e){const t=Lx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Dx.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ot.Composite=Ix;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class uu{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ux extends Ki{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function du(n,e,t,i){const s=Nx(i);switch(t){case Zd:return n*e;case yc:return n*e/s.components*s.byteLength;case Mc:return n*e/s.components*s.byteLength;case Qd:return n*e*2/s.components*s.byteLength;case Sc:return n*e*2/s.components*s.byteLength;case Jd:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case Ec:return n*e*4/s.components*s.byteLength;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vo:case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case pl:case gl:return Math.max(n,16)*Math.max(e,8)/4;case fl:case ml:return Math.max(n,8)*Math.max(e,8)/2;case _l:case xl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Rl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Dl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Il:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Mo:case Ul:case Nl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ef:case Fl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nx(n){switch(n){case Dn:case $d:return{byteLength:1,components:1};case xr:case Kd:case Rr:return{byteLength:2,components:1};case xc:case vc:return{byteLength:2,components:4};case Xi:case _c:case xn:return{byteLength:4,components:1};case qd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gc);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fx(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,a),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Ox=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$x=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ov=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,av=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",pv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_v=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Tv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Iv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Nv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$v=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,h0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,d0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,R0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,P0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,L0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const F0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,W0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ey=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ty=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ny=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,sy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ay=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,uy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,py=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,my=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Ox,alphahash_pars_fragment:Bx,alphamap_fragment:Hx,alphamap_pars_fragment:kx,alphatest_fragment:zx,alphatest_pars_fragment:Vx,aomap_fragment:Gx,aomap_pars_fragment:Wx,batching_pars_vertex:Xx,batching_vertex:jx,begin_vertex:Yx,beginnormal_vertex:$x,bsdfs:Kx,iridescence_fragment:qx,bumpmap_pars_fragment:Zx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:Qx,clipping_planes_pars_vertex:ev,clipping_planes_vertex:tv,color_fragment:nv,color_pars_fragment:iv,color_pars_vertex:sv,color_vertex:rv,common:ov,cube_uv_reflection_fragment:av,defaultnormal_vertex:lv,displacementmap_pars_vertex:cv,displacementmap_vertex:hv,emissivemap_fragment:uv,emissivemap_pars_fragment:dv,colorspace_fragment:fv,colorspace_pars_fragment:pv,envmap_fragment:mv,envmap_common_pars_fragment:gv,envmap_pars_fragment:_v,envmap_pars_vertex:xv,envmap_physical_pars_fragment:Cv,envmap_vertex:vv,fog_vertex:yv,fog_pars_vertex:Mv,fog_fragment:Sv,fog_pars_fragment:Ev,gradientmap_pars_fragment:bv,lightmap_pars_fragment:Tv,lights_lambert_fragment:Av,lights_lambert_pars_fragment:wv,lights_pars_begin:Rv,lights_toon_fragment:Pv,lights_toon_pars_fragment:Lv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Iv,lights_physical_fragment:Uv,lights_physical_pars_fragment:Nv,lights_fragment_begin:Fv,lights_fragment_maps:Ov,lights_fragment_end:Bv,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:kv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Vv,map_fragment:Gv,map_pars_fragment:Wv,map_particle_fragment:Xv,map_particle_pars_fragment:jv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:$v,morphinstance_vertex:Kv,morphcolor_vertex:qv,morphnormal_vertex:Zv,morphtarget_pars_vertex:Jv,morphtarget_vertex:Qv,normal_fragment_begin:e0,normal_fragment_maps:t0,normal_pars_fragment:n0,normal_pars_vertex:i0,normal_vertex:s0,normalmap_pars_fragment:r0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:a0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:c0,opaque_fragment:h0,packing:u0,premultiplied_alpha_fragment:d0,project_vertex:f0,dithering_fragment:p0,dithering_pars_fragment:m0,roughnessmap_fragment:g0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:y0,shadowmask_pars_fragment:M0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:b0,skinnormal_vertex:T0,specularmap_fragment:A0,specularmap_pars_fragment:w0,tonemapping_fragment:R0,tonemapping_pars_fragment:C0,transmission_fragment:P0,transmission_pars_fragment:L0,uv_pars_fragment:D0,uv_pars_vertex:I0,uv_vertex:U0,worldpos_vertex:N0,background_vert:F0,background_frag:O0,backgroundCube_vert:B0,backgroundCube_frag:H0,cube_vert:k0,cube_frag:z0,depth_vert:V0,depth_frag:G0,distanceRGBA_vert:W0,distanceRGBA_frag:X0,equirect_vert:j0,equirect_frag:Y0,linedashed_vert:$0,linedashed_frag:K0,meshbasic_vert:q0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:Q0,meshmatcap_vert:ey,meshmatcap_frag:ty,meshnormal_vert:ny,meshnormal_frag:iy,meshphong_vert:sy,meshphong_frag:ry,meshphysical_vert:oy,meshphysical_frag:ay,meshtoon_vert:ly,meshtoon_frag:cy,points_vert:hy,points_frag:uy,shadow_vert:dy,shadow_frag:fy,sprite_vert:py,sprite_frag:my},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},An={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};An.physical={uniforms:Bt([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ao={r:0,b:0,g:0},Ni=new Un,gy=new Xe;function _y(n,e,t,i,s,r,o){const a=new Ve(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let v=T.isScene===!0?T.background:null;return v&&v.isTexture&&(v=(T.backgroundBlurriness>0?t:e).get(v)),v}function x(T){let v=!1;const L=g(T);L===null?f(a,l):L&&L.isColor&&(f(L,1),v=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(T,v){const L=g(v);L&&(L.isCubeTexture||L.mapping===Go)?(h===void 0&&(h=new At(new Yi(1,1,1),new Ai({name:"BackgroundCubeMaterial",uniforms:Ls(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ni.copy(v.backgroundRotation),Ni.x*=-1,Ni.y*=-1,Ni.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ni.y*=-1,Ni.z*=-1),h.material.uniforms.envMap.value=L,h.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(gy.makeRotationFromEuler(Ni)),h.material.toneMapped=Je.getTransfer(L.colorSpace)!==lt,(u!==L||d!==L.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=L,d=L.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new At(new Pr(2,2),new Ai({name:"BackgroundMaterial",uniforms:Ls(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Je.getTransfer(L.colorSpace)!==lt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||d!==L.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=L,d=L.version,p=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,v){T.getRGB(ao,df(n)),i.buffers.color.setClear(ao.r,ao.g,ao.b,v,o)}function A(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,v=1){a.set(T),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:x,addToRenderList:m,dispose:A}}function xy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,D,X,V,ee){let ne=!1;const q=u(V,X,D);r!==q&&(r=q,c(r.object)),ne=p(S,V,X,ee),ne&&g(S,V,X,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,v(S,D,X,V),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function u(S,D,X){const V=X.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let ne=ee[D.id];ne===void 0&&(ne={},ee[D.id]=ne);let q=ne[V];return q===void 0&&(q=d(l()),ne[V]=q),q}function d(S){const D=[],X=[],V=[];for(let ee=0;ee<t;ee++)D[ee]=0,X[ee]=0,V[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:X,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,D,X,V){const ee=r.attributes,ne=D.attributes;let q=0;const Q=X.getAttributes();for(const H in Q)if(Q[H].location>=0){const Me=ee[H];let we=ne[H];if(we===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(we=S.instanceColor)),Me===void 0||Me.attribute!==we||we&&Me.data!==we.data)return!0;q++}return r.attributesNum!==q||r.index!==V}function g(S,D,X,V){const ee={},ne=D.attributes;let q=0;const Q=X.getAttributes();for(const H in Q)if(Q[H].location>=0){let Me=ne[H];Me===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Me=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Me=S.instanceColor));const we={};we.attribute=Me,Me&&Me.data&&(we.data=Me.data),ee[H]=we,q++}r.attributes=ee,r.attributesNum=q,r.index=V}function x(){const S=r.newAttributes;for(let D=0,X=S.length;D<X;D++)S[D]=0}function m(S){f(S,0)}function f(S,D){const X=r.newAttributes,V=r.enabledAttributes,ee=r.attributeDivisors;X[S]=1,V[S]===0&&(n.enableVertexAttribArray(S),V[S]=1),ee[S]!==D&&(n.vertexAttribDivisor(S,D),ee[S]=D)}function A(){const S=r.newAttributes,D=r.enabledAttributes;for(let X=0,V=D.length;X<V;X++)D[X]!==S[X]&&(n.disableVertexAttribArray(X),D[X]=0)}function T(S,D,X,V,ee,ne,q){q===!0?n.vertexAttribIPointer(S,D,X,ee,ne):n.vertexAttribPointer(S,D,X,V,ee,ne)}function v(S,D,X,V){x();const ee=V.attributes,ne=X.getAttributes(),q=D.defaultAttributeValues;for(const Q in ne){const H=ne[Q];if(H.location>=0){let de=ee[Q];if(de===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),de!==void 0){const Me=de.normalized,we=de.itemSize,Fe=e.get(de);if(Fe===void 0)continue;const tt=Fe.buffer,te=Fe.type,ue=Fe.bytesPerElement,Re=te===n.INT||te===n.UNSIGNED_INT||de.gpuType===_c;if(de.isInterleavedBufferAttribute){const me=de.data,De=me.stride,Ze=de.offset;if(me.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)f(H.location+Ie,me.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)m(H.location+Ie);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Ie=0;Ie<H.locationSize;Ie++)T(H.location+Ie,we/H.locationSize,te,Me,De*ue,(Ze+we/H.locationSize*Ie)*ue,Re)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<H.locationSize;me++)f(H.location+me,de.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<H.locationSize;me++)m(H.location+me);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let me=0;me<H.locationSize;me++)T(H.location+me,we/H.locationSize,te,Me,we*ue,we/H.locationSize*me*ue,Re)}}else if(q!==void 0){const Me=q[Q];if(Me!==void 0)switch(Me.length){case 2:n.vertexAttrib2fv(H.location,Me);break;case 3:n.vertexAttrib3fv(H.location,Me);break;case 4:n.vertexAttrib4fv(H.location,Me);break;default:n.vertexAttrib1fv(H.location,Me)}}}}A()}function L(){N();for(const S in i){const D=i[S];for(const X in D){const V=D[X];for(const ee in V)h(V[ee].object),delete V[ee];delete D[X]}delete i[S]}}function P(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const X in D){const V=D[X];for(const ee in V)h(V[ee].object),delete V[ee];delete D[X]}delete i[S.id]}function R(S){for(const D in i){const X=i[D];if(X[S.id]===void 0)continue;const V=X[S.id];for(const ee in V)h(V[ee].object),delete V[ee];delete X[S.id]}}function N(){b(),o=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:N,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function vy(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function yy(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const N=R===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Dn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xn&&!N)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:v,vertexTextures:L,maxSamples:P}}function My(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new pi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||s;return s=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const A=r?0:i,T=A*4;let v=f.clippingState||null;l.value=v,v=h(g,d,T,p);for(let L=0;L!==T;++L)v[L]=t[L];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,v=p;T!==x;++T,v+=4)o.copy(u[T]).applyMatrix4(A,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Sy(n){let e=new WeakMap;function t(o,a){return a===Co?o.mapping=Rs:a===dl&&(o.mapping=Cs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Co||a===dl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new z_(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const gs=4,fu=[.125,.215,.35,.446,.526,.582],zi=20,Ua=new Ic,pu=new Ve;let Na=null,Fa=0,Oa=0,Ba=!1;const Hi=(1+Math.sqrt(5))/2,fs=1/Hi,mu=[new F(-Hi,fs,0),new F(Hi,fs,0),new F(-fs,0,Hi),new F(fs,0,Hi),new F(0,Hi,-fs),new F(0,Hi,fs),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Ey=new F;class gu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=Ey}=r;Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,e.scissorTest=!1,lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Rr,format:cn,colorSpace:jt,depthBuffer:!1},s=_u(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_u(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=by(r)),this._blurMaterial=Ty(r,e,t)}return s}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,s,r){const l=new zt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(pu),u.toneMapping=Ei,u.autoClear=!1;const g=new Vi({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),x=new At(new Yi,g);let m=!1;const f=e.background;f?f.isColor&&(g.color.copy(f),e.background=null,m=!0):(g.color.copy(pu),m=!0);for(let A=0;A<6;A++){const T=A%3;T===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):T===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));const v=this._cubeSize;lo(s,T*v,A>2?v:0,v,v),u.setRenderTarget(s),m&&u.render(x,l),u.render(e,l)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;lo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mu[(s-r-1)%mu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*zi-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):zi;m>zi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const f=[];let A=0;for(let R=0;R<zi;++R){const N=R/x,b=Math.exp(-N*N/2);f.push(b),R===0?A+=b:R<m&&(A+=2*b)}for(let R=0;R<f.length;R++)f[R]=f[R]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const v=this._sizeLods[s],L=3*v*(s>T-gs?s-T+gs:0),P=4*(this._cubeSize-v);lo(t,L,P,3*v,2*v),l.setRenderTarget(t),l.render(u,Ua)}}function by(n){const e=[],t=[],i=[];let s=n;const r=n-gs+1+fu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-gs?l=fu[o-n+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,A=new Float32Array(x*g*p),T=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let P=0;P<p;P++){const R=P%3*2/3-1,N=P>2?0:-1,b=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];A.set(b,x*g*P),T.set(d,m*g*P);const S=[P,P,P,P,P,P];v.set(S,f*g*P)}const L=new hn;L.setAttribute("position",new Wt(A,x)),L.setAttribute("uv",new Wt(T,m)),L.setAttribute("faceIndex",new Wt(v,f)),e.push(L),s>gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _u(n,e,t){const i=new ji(n,e,t);return i.texture.mapping=Go,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Ty(n,e,t){const i=new Float32Array(zi),s=new F(0,1,0);return new Ai({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function xu(){return new Ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function vu(){return new Ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Fc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ay(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Co||l===dl,h=l===Rs||l===Cs;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gu(n)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new gu(n)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function wy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ss("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Ry(n,e,t,i){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const A=p.array;x=p.version;for(let T=0,v=A.length;T<v;T+=3){const L=A[T+0],P=A[T+1],R=A[T+2];d.push(L,P,P,R,R,L)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,v=A.length/3-1;T<v;T+=3){const L=T+0,P=T+1,R=T+2;d.push(L,P,P,R,R,L)}}else return;const m=new(of(d)?uf:hf)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cy(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,i,1)}function u(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let A=0;A<g;A++)f+=p[A]*x[A];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Py(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ly(n,e,t){const i=new WeakMap,s=new et;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let S=function(){N.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let L=a.attributes.position.count*v,P=1;L>e.maxTextureSize&&(P=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const R=new Float32Array(L*P*4*u),N=new af(R,L,P,u);N.type=xn,N.needsUpdate=!0;const b=v*4;for(let D=0;D<u;D++){const X=f[D],V=A[D],ee=T[D],ne=L*P*4*D;for(let q=0;q<X.count;q++){const Q=q*b;g===!0&&(s.fromBufferAttribute(X,q),R[ne+Q+0]=s.x,R[ne+Q+1]=s.y,R[ne+Q+2]=s.z,R[ne+Q+3]=0),x===!0&&(s.fromBufferAttribute(V,q),R[ne+Q+4]=s.x,R[ne+Q+5]=s.y,R[ne+Q+6]=s.z,R[ne+Q+7]=0),m===!0&&(s.fromBufferAttribute(ee,q),R[ne+Q+8]=s.x,R[ne+Q+9]=s.y,R[ne+Q+10]=s.z,R[ne+Q+11]=ee.itemSize===4?s.w:1)}}d={count:u,texture:N,size:new Oe(L,P)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Dy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Tf=new wt,yu=new vf(1,1),Af=new af,wf=new b_,Rf=new pf,Mu=[],Su=[],Eu=new Float32Array(16),bu=new Float32Array(9),Tu=new Float32Array(4);function Hs(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Mu[s];if(r===void 0&&(r=new Float32Array(s),Mu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function bt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Xo(n,e){let t=Su[e];t===void 0&&(t=new Int32Array(e),Su[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Iy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Uy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),bt(t,e)}}function Ny(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),bt(t,e)}}function Fy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),bt(t,e)}}function Oy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Tu.set(i),n.uniformMatrix2fv(this.addr,!1,Tu),bt(t,i)}}function By(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;bu.set(i),n.uniformMatrix3fv(this.addr,!1,bu),bt(t,i)}}function Hy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,i))return;Eu.set(i),n.uniformMatrix4fv(this.addr,!1,Eu),bt(t,i)}}function ky(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function zy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),bt(t,e)}}function Vy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),bt(t,e)}}function Gy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),bt(t,e)}}function Wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),bt(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),bt(t,e)}}function Yy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),bt(t,e)}}function $y(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(yu.compareFunction=sf,r=yu):r=Tf,t.setTexture2D(e||r,s)}function Ky(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wf,s)}function qy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rf,s)}function Zy(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Af,s)}function Jy(n){switch(n){case 5126:return Iy;case 35664:return Uy;case 35665:return Ny;case 35666:return Fy;case 35674:return Oy;case 35675:return By;case 35676:return Hy;case 5124:case 35670:return ky;case 35667:case 35671:return zy;case 35668:case 35672:return Vy;case 35669:case 35673:return Gy;case 5125:return Wy;case 36294:return Xy;case 36295:return jy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return Zy}}function Qy(n,e){n.uniform1fv(this.addr,e)}function eM(n,e){const t=Hs(e,this.size,2);n.uniform2fv(this.addr,t)}function tM(n,e){const t=Hs(e,this.size,3);n.uniform3fv(this.addr,t)}function nM(n,e){const t=Hs(e,this.size,4);n.uniform4fv(this.addr,t)}function iM(n,e){const t=Hs(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sM(n,e){const t=Hs(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function rM(n,e){const t=Hs(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function oM(n,e){n.uniform1iv(this.addr,e)}function aM(n,e){n.uniform2iv(this.addr,e)}function lM(n,e){n.uniform3iv(this.addr,e)}function cM(n,e){n.uniform4iv(this.addr,e)}function hM(n,e){n.uniform1uiv(this.addr,e)}function uM(n,e){n.uniform2uiv(this.addr,e)}function dM(n,e){n.uniform3uiv(this.addr,e)}function fM(n,e){n.uniform4uiv(this.addr,e)}function pM(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tf,r[o])}function mM(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||wf,r[o])}function gM(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Rf,r[o])}function _M(n,e,t){const i=this.cache,s=e.length,r=Xo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),bt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Af,r[o])}function xM(n){switch(n){case 5126:return Qy;case 35664:return eM;case 35665:return tM;case 35666:return nM;case 35674:return iM;case 35675:return sM;case 35676:return rM;case 5124:case 35670:return oM;case 35667:case 35671:return aM;case 35668:case 35672:return lM;case 35669:case 35673:return cM;case 5125:return hM;case 36294:return uM;case 36295:return dM;case 36296:return fM;case 35678:case 36198:case 36298:case 36306:case 35682:return pM;case 35679:case 36299:case 36307:return mM;case 35680:case 36300:case 36308:case 36293:return gM;case 36289:case 36303:case 36311:case 36292:return _M}}class vM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Jy(t.type)}}class yM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xM(t.type)}}class MM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function Au(n,e){n.seq.push(e),n.map[e.id]=e}function SM(n,e,t){const i=n.name,s=i.length;for(Ha.lastIndex=0;;){const r=Ha.exec(i),o=Ha.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Au(t,c===void 0?new vM(a,n,e):new yM(a,n,e));break}else{let u=t.map[a];u===void 0&&(u=new MM(a),Au(t,u)),t=u}}}class Eo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);SM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function wu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const EM=37297;let bM=0;function TM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Ru=new Ge;function AM(n){Je._getMatrix(Ru,Je.workingColorSpace,n);const e=`mat3( ${Ru.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Lo:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+TM(n.getShaderSource(e),o)}else return s}function wM(n,e){const t=AM(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RM(n,e){let t;switch(e){case Ig:t="Linear";break;case Ug:t="Reinhard";break;case Ng:t="Cineon";break;case Fg:t="ACESFilmic";break;case Bg:t="AgX";break;case Hg:t="Neutral";break;case Og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const co=new F;function CM(){Je.getLuminanceCoefficients(co);const n=co.x.toFixed(4),e=co.y.toFixed(4),t=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function LM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function DM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function er(n){return n!==""}function Pu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(n){return n.replace(IM,NM)}const UM=new Map;function NM(n,e){let t=je[e];if(t===void 0){const i=UM.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gl(t)}const FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Du(n){return n.replace(FM,OM)}function OM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Iu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function HM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function zM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Lg:e="ENVMAP_BLENDING_MIX";break;case Dg:e="ENVMAP_BLENDING_ADD";break}return e}function VM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function GM(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=BM(t),c=HM(t),h=kM(t),u=zM(t),d=VM(t),p=PM(t),g=LM(r),x=s.createProgram();let m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),f.length>0&&(f+=`
`)):(m=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),f=[Iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?je.tonemapping_pars_fragment:"",t.toneMapping!==Ei?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=Gl(o),o=Pu(o,t),o=Lu(o,t),a=Gl(a),a=Pu(a,t),a=Lu(a,t),o=Du(o),a=Du(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=A+m+o,v=A+f+a,L=wu(s,s.VERTEX_SHADER,T),P=wu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,L),s.attachShader(x,P),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(D){if(n.debug.checkShaderErrors){const X=s.getProgramInfoLog(x).trim(),V=s.getShaderInfoLog(L).trim(),ee=s.getShaderInfoLog(P).trim();let ne=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,L,P);else{const Q=Cu(s,L,"vertex"),H=Cu(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+Q+`
`+H)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(V===""||ee==="")&&(q=!1);q&&(D.diagnostics={runnable:ne,programLog:X,vertexShader:{log:V,prefix:m},fragmentShader:{log:ee,prefix:f}})}s.deleteShader(L),s.deleteShader(P),N=new Eo(s,x),b=DM(s,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,EM)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=P,this}let WM=0;class XM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jM(e),t.set(e,i)),i}}class jM{constructor(e){this.id=WM++,this.code=e,this.usedTimes=0}}function YM(n,e,t,i,s,r,o){const a=new lf,l=new XM,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,S,D,X,V){const ee=X.fog,ne=V.geometry,q=b.isMeshStandardMaterial?X.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),H=Q&&Q.mapping===Go?Q.image.height:null,de=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Me=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,we=Me!==void 0?Me.length:0;let Fe=0;ne.morphAttributes.position!==void 0&&(Fe=1),ne.morphAttributes.normal!==void 0&&(Fe=2),ne.morphAttributes.color!==void 0&&(Fe=3);let tt,te,ue,Re;if(de){const st=An[de];tt=st.vertexShader,te=st.fragmentShader}else tt=b.vertexShader,te=b.fragmentShader,l.update(b),ue=l.getVertexShaderID(b),Re=l.getFragmentShaderID(b);const me=n.getRenderTarget(),De=n.state.buffers.depth.getReversed(),Ze=V.isInstancedMesh===!0,Ie=V.isBatchedMesh===!0,mt=!!b.map,w=!!b.matcap,C=!!Q,y=!!b.aoMap,se=!!b.lightMap,$=!!b.bumpMap,J=!!b.normalMap,K=!!b.displacementMap,ie=!!b.emissiveMap,Y=!!b.metalnessMap,j=!!b.roughnessMap,ge=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,I=b.iridescence>0,z=b.sheen>0,Z=b.transmission>0,k=ge&&!!b.anisotropyMap,ve=E&&!!b.clearcoatMap,he=E&&!!b.clearcoatNormalMap,ye=E&&!!b.clearcoatRoughnessMap,Ee=I&&!!b.iridescenceMap,oe=I&&!!b.iridescenceThicknessMap,Se=z&&!!b.sheenColorMap,Ae=z&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,fe=!!b.specularColorMap,ke=!!b.specularIntensityMap,U=Z&&!!b.transmissionMap,_e=Z&&!!b.thicknessMap,ae=!!b.gradientMap,Te=!!b.alphaMap,le=b.alphaTest>0,re=!!b.alphaHash,Pe=!!b.extensions;let ze=Ei;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ze=n.toneMapping);const ft={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:tt,fragmentShader:te,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:Re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Ie,batchingColor:Ie&&V._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&V.instanceColor!==null,instancingMorph:Ze&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:jt,alphaToCoverage:!!b.alphaToCoverage,map:mt,matcap:w,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:H,aoMap:y,lightMap:se,bumpMap:$,normalMap:J,displacementMap:d&&K,emissiveMap:ie,normalMapObjectSpace:J&&b.normalMapType===Xg,normalMapTangentSpace:J&&b.normalMapType===nf,metalnessMap:Y,roughnessMap:j,anisotropy:ge,anisotropyMap:k,clearcoat:E,clearcoatMap:ve,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,dispersion:_,iridescence:I,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:z,sheenColorMap:Se,sheenRoughnessMap:Ae,specularMap:Ce,specularColorMap:fe,specularIntensityMap:ke,transmission:Z,transmissionMap:U,thicknessMap:_e,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Ms&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:le,alphaHash:re,combine:b.combine,mapUv:mt&&x(b.map.channel),aoMapUv:y&&x(b.aoMap.channel),lightMapUv:se&&x(b.lightMap.channel),bumpMapUv:$&&x(b.bumpMap.channel),normalMapUv:J&&x(b.normalMap.channel),displacementMapUv:K&&x(b.displacementMap.channel),emissiveMapUv:ie&&x(b.emissiveMap.channel),metalnessMapUv:Y&&x(b.metalnessMap.channel),roughnessMapUv:j&&x(b.roughnessMap.channel),anisotropyMapUv:k&&x(b.anisotropyMap.channel),clearcoatMapUv:ve&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&x(b.sheenRoughnessMap.channel),specularMapUv:Ce&&x(b.specularMap.channel),specularColorMapUv:fe&&x(b.specularColorMap.channel),specularIntensityMapUv:ke&&x(b.specularIntensityMap.channel),transmissionMapUv:U&&x(b.transmissionMap.channel),thicknessMapUv:_e&&x(b.thicknessMap.channel),alphaMapUv:Te&&x(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(J||ge),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!ne.attributes.uv&&(mt||Te),fog:!!ee,useFog:b.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:De,skinning:V.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:mt&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===lt,decodeVideoTextureEmissive:ie&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===mn,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Pe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&b.extensions.multiDraw===!0||Ie)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function f(b){const S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)S.push(D),S.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(A(S,b),T(S,b),S.push(n.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function A(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){const S=g[b.type];let D;if(S){const X=An[S];D=O_.clone(X.uniforms)}else D=b.uniforms;return D}function L(b,S){let D;for(let X=0,V=h.length;X<V;X++){const ee=h[X];if(ee.cacheKey===S){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new GM(n,S,b,r),h.push(D)),D}function P(b){if(--b.usedTimes===0){const S=h.indexOf(b);h[S]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:L,releaseProgram:P,releaseShaderCache:R,programs:h,dispose:N}}function $M(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function KM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(u,d,p,g,x,m){let f=n[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},n[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function a(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||KM),i.length>1&&i.sort(d||Uu),s.length>1&&s.sort(d||Uu)}function h(){for(let u=e,d=n.length;u<d;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function qM(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Nu,n.set(i,[o])):s>=r.length?(o=new Nu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ZM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function JM(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let QM=0;function eS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function tS(n){const e=new ZM,t=JM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,r=new Xe,o=new Xe;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,A=0,T=0,v=0,L=0,P=0,R=0;c.sort(eS);for(let b=0,S=c.length;b<S;b++){const D=c[b],X=D.color,V=D.intensity,ee=D.distance,ne=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=X.r*V,u+=X.g*V,d+=X.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],V);R++}else if(D.isDirectionalLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Q=D.shadow,H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=D.shadow.matrix,A++}i.directional[p]=q,p++}else if(D.isSpotLight){const q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(X).multiplyScalar(V),q.distance=ee,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[x]=q;const Q=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[x]=Q.matrix,D.castShadow){const H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[x]=H,i.spotShadowMap[x]=ne,v++}x++}else if(D.isRectAreaLight){const q=e.get(D);q.color.copy(X).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=q,m++}else if(D.isPointLight){const q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const Q=D.shadow,H=t.get(D);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=D.shadow.matrix,T++}i.point[g]=q,g++}else if(D.isHemisphereLight){const q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[f]=q,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const N=i.hash;(N.directionalLength!==p||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==f||N.numDirectionalShadows!==A||N.numPointShadows!==T||N.numSpotShadows!==v||N.numSpotMaps!==L||N.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=v+L-P,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,N.directionalLength=p,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=f,N.numDirectionalShadows=A,N.numPointShadows=T,N.numSpotShadows=v,N.numSpotMaps=L,N.numLightProbes=R,i.version=QM++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,A=c.length;f<A;f++){const T=c[f];if(T.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(T.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(T.width*.5,0,0),v.halfHeight.set(0,T.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(T.matrixWorld),v.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(T.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Fu(n){const e=new tS(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function nS(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Fu(n),e.set(s,[a])):r>=o.length?(a=new Fu(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rS(n,e,t){let i=new Rc;const s=new Oe,r=new Oe,o=new et,a=new nx({depthPacking:Wg}),l=new ix,c={},h=t.maxTextureSize,u={[ii]:qt,[qt]:ii,[mn]:mn},d=new Ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:iS,fragmentShader:sS}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new hn;g.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wd;let f=this.type;this.render=function(P,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const b=n.getRenderTarget(),S=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Si),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const V=f!==jn&&this.type===jn,ee=f===jn&&this.type!==jn;for(let ne=0,q=P.length;ne<q;ne++){const Q=P[ne],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const de=H.getFrameExtents();if(s.multiply(de),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/de.x),s.x=r.x*de.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/de.y),s.y=r.y*de.y,H.mapSize.y=r.y)),H.map===null||V===!0||ee===!0){const we=this.type!==jn?{minFilter:Gt,magFilter:Gt}:{};H.map!==null&&H.map.dispose(),H.map=new ji(s.x,s.y,we),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Me=H.getViewportCount();for(let we=0;we<Me;we++){const Fe=H.getViewport(we);o.set(r.x*Fe.x,r.y*Fe.y,r.x*Fe.z,r.y*Fe.w),X.viewport(o),H.updateMatrices(Q,we),i=H.getFrustum(),v(R,N,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===jn&&A(H,N),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(b,S,D)};function A(P,R){const N=e.update(x);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ji(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,N,d,x,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,N,p,x,null)}function T(P,R,N,b){let S=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)S=D;else if(S=N.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const X=S.uuid,V=R.uuid;let ee=c[X];ee===void 0&&(ee={},c[X]=ee);let ne=ee[V];ne===void 0&&(ne=S.clone(),ee[V]=ne,R.addEventListener("dispose",L)),S=ne}if(S.visible=R.visible,S.wireframe=R.wireframe,b===jn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=n.properties.get(S);X.light=N}return S}function v(P,R,N,b,S){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&S===jn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const V=e.update(P),ee=P.material;if(Array.isArray(ee)){const ne=V.groups;for(let q=0,Q=ne.length;q<Q;q++){const H=ne[q],de=ee[H.materialIndex];if(de&&de.visible){const Me=T(P,de,b,S);P.onBeforeShadow(n,P,R,N,V,Me,H),n.renderBufferDirect(N,null,V,Me,P,H),P.onAfterShadow(n,P,R,N,V,Me,H)}}}else if(ee.visible){const ne=T(P,ee,b,S);P.onBeforeShadow(n,P,R,N,V,ne,null),n.renderBufferDirect(N,null,V,ne,P,null),P.onAfterShadow(n,P,R,N,V,ne,null)}}const X=P.children;for(let V=0,ee=X.length;V<ee;V++)v(X[V],R,N,b,S)}function L(P){P.target.removeEventListener("dispose",L);for(const N in c){const b=c[N],S=P.target.uuid;S in b&&(b[S].dispose(),delete b[S])}}}const oS={[rl]:ol,[al]:hl,[ll]:ul,[ws]:cl,[ol]:rl,[hl]:al,[ul]:ll,[cl]:ws};function aS(n,e){function t(){let U=!1;const _e=new et;let ae=null;const Te=new et(0,0,0,0);return{setMask:function(le){ae!==le&&!U&&(n.colorMask(le,le,le,le),ae=le)},setLocked:function(le){U=le},setClear:function(le,re,Pe,ze,ft){ft===!0&&(le*=ze,re*=ze,Pe*=ze),_e.set(le,re,Pe,ze),Te.equals(_e)===!1&&(n.clearColor(le,re,Pe,ze),Te.copy(_e))},reset:function(){U=!1,ae=null,Te.set(-1,0,0,0)}}}function i(){let U=!1,_e=!1,ae=null,Te=null,le=null;return{setReversed:function(re){if(_e!==re){const Pe=e.get("EXT_clip_control");re?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),_e=re;const ze=le;le=null,this.setClear(ze)}},getReversed:function(){return _e},setTest:function(re){re?me(n.DEPTH_TEST):De(n.DEPTH_TEST)},setMask:function(re){ae!==re&&!U&&(n.depthMask(re),ae=re)},setFunc:function(re){if(_e&&(re=oS[re]),Te!==re){switch(re){case rl:n.depthFunc(n.NEVER);break;case ol:n.depthFunc(n.ALWAYS);break;case al:n.depthFunc(n.LESS);break;case ws:n.depthFunc(n.LEQUAL);break;case ll:n.depthFunc(n.EQUAL);break;case cl:n.depthFunc(n.GEQUAL);break;case hl:n.depthFunc(n.GREATER);break;case ul:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=re}},setLocked:function(re){U=re},setClear:function(re){le!==re&&(_e&&(re=1-re),n.clearDepth(re),le=re)},reset:function(){U=!1,ae=null,Te=null,le=null,_e=!1}}}function s(){let U=!1,_e=null,ae=null,Te=null,le=null,re=null,Pe=null,ze=null,ft=null;return{setTest:function(st){U||(st?me(n.STENCIL_TEST):De(n.STENCIL_TEST))},setMask:function(st){_e!==st&&!U&&(n.stencilMask(st),_e=st)},setFunc:function(st,un,Bn){(ae!==st||Te!==un||le!==Bn)&&(n.stencilFunc(st,un,Bn),ae=st,Te=un,le=Bn)},setOp:function(st,un,Bn){(re!==st||Pe!==un||ze!==Bn)&&(n.stencilOp(st,un,Bn),re=st,Pe=un,ze=Bn)},setLocked:function(st){U=st},setClear:function(st){ft!==st&&(n.clearStencil(st),ft=st)},reset:function(){U=!1,_e=null,ae=null,Te=null,le=null,re=null,Pe=null,ze=null,ft=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,A=null,T=null,v=null,L=null,P=null,R=new Ve(0,0,0),N=0,b=!1,S=null,D=null,X=null,V=null,ee=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=Q>=2);let de=null,Me={};const we=n.getParameter(n.SCISSOR_BOX),Fe=n.getParameter(n.VIEWPORT),tt=new et().fromArray(we),te=new et().fromArray(Fe);function ue(U,_e,ae,Te){const le=new Uint8Array(4),re=n.createTexture();n.bindTexture(U,re),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Pe=0;Pe<ae;Pe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,le):n.texImage2D(_e+Pe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,le);return re}const Re={};Re[n.TEXTURE_2D]=ue(n.TEXTURE_2D,n.TEXTURE_2D,1),Re[n.TEXTURE_CUBE_MAP]=ue(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[n.TEXTURE_2D_ARRAY]=ue(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Re[n.TEXTURE_3D]=ue(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(n.DEPTH_TEST),o.setFunc(ws),$(!1),J(vh),me(n.CULL_FACE),y(Si);function me(U){h[U]!==!0&&(n.enable(U),h[U]=!0)}function De(U){h[U]!==!1&&(n.disable(U),h[U]=!1)}function Ze(U,_e){return u[U]!==_e?(n.bindFramebuffer(U,_e),u[U]=_e,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=_e),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ie(U,_e){let ae=p,Te=!1;if(U){ae=d.get(_e),ae===void 0&&(ae=[],d.set(_e,ae));const le=U.textures;if(ae.length!==le.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let re=0,Pe=le.length;re<Pe;re++)ae[re]=n.COLOR_ATTACHMENT0+re;ae.length=le.length,Te=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,Te=!0);Te&&n.drawBuffers(ae)}function mt(U){return g!==U?(n.useProgram(U),g=U,!0):!1}const w={[ki]:n.FUNC_ADD,[pg]:n.FUNC_SUBTRACT,[mg]:n.FUNC_REVERSE_SUBTRACT};w[gg]=n.MIN,w[_g]=n.MAX;const C={[xg]:n.ZERO,[vg]:n.ONE,[yg]:n.SRC_COLOR,[il]:n.SRC_ALPHA,[Ag]:n.SRC_ALPHA_SATURATE,[bg]:n.DST_COLOR,[Sg]:n.DST_ALPHA,[Mg]:n.ONE_MINUS_SRC_COLOR,[sl]:n.ONE_MINUS_SRC_ALPHA,[Tg]:n.ONE_MINUS_DST_COLOR,[Eg]:n.ONE_MINUS_DST_ALPHA,[wg]:n.CONSTANT_COLOR,[Rg]:n.ONE_MINUS_CONSTANT_COLOR,[Cg]:n.CONSTANT_ALPHA,[Pg]:n.ONE_MINUS_CONSTANT_ALPHA};function y(U,_e,ae,Te,le,re,Pe,ze,ft,st){if(U===Si){x===!0&&(De(n.BLEND),x=!1);return}if(x===!1&&(me(n.BLEND),x=!0),U!==fg){if(U!==m||st!==b){if((f!==ki||v!==ki)&&(n.blendEquation(n.FUNC_ADD),f=ki,v=ki),st)switch(U){case Ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFunc(n.ONE,n.ONE);break;case Mh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Sh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Mh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,T=null,L=null,P=null,R.set(0,0,0),N=0,m=U,b=st}return}le=le||_e,re=re||ae,Pe=Pe||Te,(_e!==f||le!==v)&&(n.blendEquationSeparate(w[_e],w[le]),f=_e,v=le),(ae!==A||Te!==T||re!==L||Pe!==P)&&(n.blendFuncSeparate(C[ae],C[Te],C[re],C[Pe]),A=ae,T=Te,L=re,P=Pe),(ze.equals(R)===!1||ft!==N)&&(n.blendColor(ze.r,ze.g,ze.b,ft),R.copy(ze),N=ft),m=U,b=!1}function se(U,_e){U.side===mn?De(n.CULL_FACE):me(n.CULL_FACE);let ae=U.side===qt;_e&&(ae=!ae),$(ae),U.blending===Ms&&U.transparent===!1?y(Si):y(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);const Te=U.stencilWrite;a.setTest(Te),Te&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(n.SAMPLE_ALPHA_TO_COVERAGE):De(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){S!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),S=U)}function J(U){U!==hg?(me(n.CULL_FACE),U!==D&&(U===vh?n.cullFace(n.BACK):U===ug?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):De(n.CULL_FACE),D=U}function K(U){U!==X&&(q&&n.lineWidth(U),X=U)}function ie(U,_e,ae){U?(me(n.POLYGON_OFFSET_FILL),(V!==_e||ee!==ae)&&(n.polygonOffset(_e,ae),V=_e,ee=ae)):De(n.POLYGON_OFFSET_FILL)}function Y(U){U?me(n.SCISSOR_TEST):De(n.SCISSOR_TEST)}function j(U){U===void 0&&(U=n.TEXTURE0+ne-1),de!==U&&(n.activeTexture(U),de=U)}function ge(U,_e,ae){ae===void 0&&(de===null?ae=n.TEXTURE0+ne-1:ae=de);let Te=Me[ae];Te===void 0&&(Te={type:void 0,texture:void 0},Me[ae]=Te),(Te.type!==U||Te.texture!==_e)&&(de!==ae&&(n.activeTexture(ae),de=ae),n.bindTexture(U,_e||Re[U]),Te.type=U,Te.texture=_e)}function E(){const U=Me[de];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function z(){try{n.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{n.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{n.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(U){tt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function Ae(U){te.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function Ce(U,_e){let ae=c.get(_e);ae===void 0&&(ae=new WeakMap,c.set(_e,ae));let Te=ae.get(U);Te===void 0&&(Te=n.getUniformBlockIndex(_e,U.name),ae.set(U,Te))}function fe(U,_e){const Te=c.get(_e).get(U);l.get(_e)!==Te&&(n.uniformBlockBinding(_e,Te,U.__bindingPointIndex),l.set(_e,Te))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,Me={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,A=null,T=null,v=null,L=null,P=null,R=new Ve(0,0,0),N=0,b=!1,S=null,D=null,X=null,V=null,ee=null,tt.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:me,disable:De,bindFramebuffer:Ze,drawBuffers:Ie,useProgram:mt,setBlending:y,setMaterial:se,setFlipSided:$,setCullFace:J,setLineWidth:K,setPolygonOffset:ie,setScissorTest:Y,activeTexture:j,bindTexture:ge,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:I,texImage2D:Ee,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:fe,texStorage2D:he,texStorage3D:ye,texSubImage2D:z,texSubImage3D:Z,compressedTexSubImage2D:k,compressedTexSubImage3D:ve,scissor:Se,viewport:Ae,reset:ke}}function lS(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):br("canvas")}function x(E,_,I){let z=1;const Z=ge(E);if((Z.width>I||Z.height>I)&&(z=I/Math.max(Z.width,Z.height)),z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor(z*Z.width),ve=Math.floor(z*Z.height);u===void 0&&(u=g(k,ve));const he=_?g(k,ve):u;return he.width=k,he.height=ve,he.getContext("2d").drawImage(E,0,0,k,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+k+"x"+ve+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){n.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,_,I,z,Z=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=_;if(_===n.RED&&(I===n.FLOAT&&(k=n.R32F),I===n.HALF_FLOAT&&(k=n.R16F),I===n.UNSIGNED_BYTE&&(k=n.R8)),_===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.R8UI),I===n.UNSIGNED_SHORT&&(k=n.R16UI),I===n.UNSIGNED_INT&&(k=n.R32UI),I===n.BYTE&&(k=n.R8I),I===n.SHORT&&(k=n.R16I),I===n.INT&&(k=n.R32I)),_===n.RG&&(I===n.FLOAT&&(k=n.RG32F),I===n.HALF_FLOAT&&(k=n.RG16F),I===n.UNSIGNED_BYTE&&(k=n.RG8)),_===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RG8UI),I===n.UNSIGNED_SHORT&&(k=n.RG16UI),I===n.UNSIGNED_INT&&(k=n.RG32UI),I===n.BYTE&&(k=n.RG8I),I===n.SHORT&&(k=n.RG16I),I===n.INT&&(k=n.RG32I)),_===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGB8UI),I===n.UNSIGNED_SHORT&&(k=n.RGB16UI),I===n.UNSIGNED_INT&&(k=n.RGB32UI),I===n.BYTE&&(k=n.RGB8I),I===n.SHORT&&(k=n.RGB16I),I===n.INT&&(k=n.RGB32I)),_===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),I===n.UNSIGNED_INT&&(k=n.RGBA32UI),I===n.BYTE&&(k=n.RGBA8I),I===n.SHORT&&(k=n.RGBA16I),I===n.INT&&(k=n.RGBA32I)),_===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),_===n.RGBA){const ve=Z?Lo:Je.getTransfer(z);I===n.FLOAT&&(k=n.RGBA32F),I===n.HALF_FLOAT&&(k=n.RGBA16F),I===n.UNSIGNED_BYTE&&(k=ve===lt?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function v(E,_){let I;return E?_===null||_===Xi||_===vr?I=n.DEPTH24_STENCIL8:_===xn?I=n.DEPTH32F_STENCIL8:_===xr&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Xi||_===vr?I=n.DEPTH_COMPONENT24:_===xn?I=n.DEPTH_COMPONENT32F:_===xr&&(I=n.DEPTH_COMPONENT16),I}function L(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Gt&&E.minFilter!==sn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){const _=E.target;_.removeEventListener("dispose",P),N(_),_.isVideoTexture&&h.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),S(_)}function N(E){const _=i.get(E);if(_.__webglInit===void 0)return;const I=E.source,z=d.get(I);if(z){const Z=z[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(E),Object.keys(z).length===0&&d.delete(I)}i.remove(E)}function b(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const I=E.source,z=d.get(I);delete z[_.__cacheKey],o.memory.textures--}function S(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(_.__webglFramebuffer[z]))for(let Z=0;Z<_.__webglFramebuffer[z].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[z][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[z])}else{if(Array.isArray(_.__webglFramebuffer))for(let z=0;z<_.__webglFramebuffer.length;z++)n.deleteFramebuffer(_.__webglFramebuffer[z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let z=0;z<_.__webglColorRenderbuffer.length;z++)_.__webglColorRenderbuffer[z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const I=E.textures;for(let z=0,Z=I.length;z<Z;z++){const k=i.get(I[z]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),o.memory.textures--),i.remove(I[z])}i.remove(E)}let D=0;function X(){D=0}function V(){const E=D;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function ee(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function ne(E,_){const I=i.get(E);if(E.isVideoTexture&&Y(E),E.isRenderTargetTexture===!1&&E.version>0&&I.__version!==E.version){const z=E.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(I,E,_);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+_)}function q(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+_)}function Q(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){Re(I,E,_);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+_)}function H(E,_){const I=i.get(E);if(E.version>0&&I.__version!==E.version){me(I,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+_)}const de={[Ti]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Po]:n.MIRRORED_REPEAT},Me={[Gt]:n.NEAREST,[Yd]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[sn]:n.LINEAR,[go]:n.LINEAR_MIPMAP_NEAREST,[Zn]:n.LINEAR_MIPMAP_LINEAR},we={[jg]:n.NEVER,[Jg]:n.ALWAYS,[Yg]:n.LESS,[sf]:n.LEQUAL,[$g]:n.EQUAL,[Zg]:n.GEQUAL,[Kg]:n.GREATER,[qg]:n.NOTEQUAL};function Fe(E,_){if(_.type===xn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===sn||_.magFilter===go||_.magFilter===Qs||_.magFilter===Zn||_.minFilter===sn||_.minFilter===go||_.minFilter===Qs||_.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,de[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,de[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,de[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Me[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Me[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Gt||_.minFilter!==Qs&&_.minFilter!==Zn||_.type===xn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function tt(E,_){let I=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));const z=_.source;let Z=d.get(z);Z===void 0&&(Z={},d.set(z,Z));const k=ee(_);if(k!==E.__cacheKey){Z[k]===void 0&&(Z[k]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,I=!0),Z[k].usedTimes++;const ve=Z[E.__cacheKey];ve!==void 0&&(Z[E.__cacheKey].usedTimes--,ve.usedTimes===0&&b(_)),E.__cacheKey=k,E.__webglTexture=Z[k].texture}return I}function te(E,_,I){return Math.floor(Math.floor(E/I)/_)}function ue(E,_,I,z){const k=E.updateRanges;if(k.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,I,z,_.data);else{k.sort((oe,Se)=>oe.start-Se.start);let ve=0;for(let oe=1;oe<k.length;oe++){const Se=k[ve],Ae=k[oe],Ce=Se.start+Se.count,fe=te(Ae.start,_.width,4),ke=te(Se.start,_.width,4);Ae.start<=Ce+1&&fe===ke&&te(Ae.start+Ae.count-1,_.width,4)===fe?Se.count=Math.max(Se.count,Ae.start+Ae.count-Se.start):(++ve,k[ve]=Ae)}k.length=ve+1;const he=n.getParameter(n.UNPACK_ROW_LENGTH),ye=n.getParameter(n.UNPACK_SKIP_PIXELS),Ee=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let oe=0,Se=k.length;oe<Se;oe++){const Ae=k[oe],Ce=Math.floor(Ae.start/4),fe=Math.ceil(Ae.count/4),ke=Ce%_.width,U=Math.floor(Ce/_.width),_e=fe,ae=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,ke,U,_e,ae,I,z,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,he),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,Ee)}}function Re(E,_,I){let z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(z=n.TEXTURE_3D);const Z=tt(E,_),k=_.source;t.bindTexture(z,E.__webglTexture,n.TEXTURE0+I);const ve=i.get(k);if(k.version!==ve.__version||Z===!0){t.activeTexture(n.TEXTURE0+I);const he=Je.getPrimaries(Je.workingColorSpace),ye=_.colorSpace===gi?null:Je.getPrimaries(_.colorSpace),Ee=_.colorSpace===gi||he===ye?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let oe=x(_.image,!1,s.maxTextureSize);oe=j(_,oe);const Se=r.convert(_.format,_.colorSpace),Ae=r.convert(_.type);let Ce=T(_.internalFormat,Se,Ae,_.colorSpace,_.isVideoTexture);Fe(z,_);let fe;const ke=_.mipmaps,U=_.isVideoTexture!==!0,_e=ve.__version===void 0||Z===!0,ae=k.dataReady,Te=L(_,oe);if(_.isDepthTexture)Ce=v(_.format===Mr,_.type),_e&&(U?t.texStorage2D(n.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Se,Ae,null));else if(_.isDataTexture)if(ke.length>0){U&&_e&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,ke[0].width,ke[0].height);for(let le=0,re=ke.length;le<re;le++)fe=ke[le],U?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,fe.width,fe.height,Se,Ae,fe.data):t.texImage2D(n.TEXTURE_2D,le,Ce,fe.width,fe.height,0,Se,Ae,fe.data);_.generateMipmaps=!1}else U?(_e&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,oe.width,oe.height),ae&&ue(_,oe,Se,Ae)):t.texImage2D(n.TEXTURE_2D,0,Ce,oe.width,oe.height,0,Se,Ae,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ce,ke[0].width,ke[0].height,oe.depth);for(let le=0,re=ke.length;le<re;le++)if(fe=ke[le],_.format!==cn)if(Se!==null)if(U){if(ae)if(_.layerUpdates.size>0){const Pe=du(fe.width,fe.height,_.format,_.type);for(const ze of _.layerUpdates){const ft=fe.data.subarray(ze*Pe/fe.data.BYTES_PER_ELEMENT,(ze+1)*Pe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,ze,fe.width,fe.height,1,Se,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,fe.width,fe.height,oe.depth,Se,fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,le,Ce,fe.width,fe.height,oe.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ae&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,le,0,0,0,fe.width,fe.height,oe.depth,Se,Ae,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,le,Ce,fe.width,fe.height,oe.depth,0,Se,Ae,fe.data)}else{U&&_e&&t.texStorage2D(n.TEXTURE_2D,Te,Ce,ke[0].width,ke[0].height);for(let le=0,re=ke.length;le<re;le++)fe=ke[le],_.format!==cn?Se!==null?U?ae&&t.compressedTexSubImage2D(n.TEXTURE_2D,le,0,0,fe.width,fe.height,Se,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,le,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,fe.width,fe.height,Se,Ae,fe.data):t.texImage2D(n.TEXTURE_2D,le,Ce,fe.width,fe.height,0,Se,Ae,fe.data)}else if(_.isDataArrayTexture)if(U){if(_e&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,Ce,oe.width,oe.height,oe.depth),ae)if(_.layerUpdates.size>0){const le=du(oe.width,oe.height,_.format,_.type);for(const re of _.layerUpdates){const Pe=oe.data.subarray(re*le/oe.data.BYTES_PER_ELEMENT,(re+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,re,oe.width,oe.height,1,Se,Ae,Pe)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ae,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,Se,Ae,oe.data);else if(_.isData3DTexture)U?(_e&&t.texStorage3D(n.TEXTURE_3D,Te,Ce,oe.width,oe.height,oe.depth),ae&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Se,Ae,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,Se,Ae,oe.data);else if(_.isFramebufferTexture){if(_e)if(U)t.texStorage2D(n.TEXTURE_2D,Te,Ce,oe.width,oe.height);else{let le=oe.width,re=oe.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(n.TEXTURE_2D,Pe,Ce,le,re,0,Se,Ae,null),le>>=1,re>>=1}}else if(ke.length>0){if(U&&_e){const le=ge(ke[0]);t.texStorage2D(n.TEXTURE_2D,Te,Ce,le.width,le.height)}for(let le=0,re=ke.length;le<re;le++)fe=ke[le],U?ae&&t.texSubImage2D(n.TEXTURE_2D,le,0,0,Se,Ae,fe):t.texImage2D(n.TEXTURE_2D,le,Ce,Se,Ae,fe);_.generateMipmaps=!1}else if(U){if(_e){const le=ge(oe);t.texStorage2D(n.TEXTURE_2D,Te,Ce,le.width,le.height)}ae&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Ae,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ce,Se,Ae,oe);m(_)&&f(z),ve.__version=k.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function me(E,_,I){if(_.image.length!==6)return;const z=tt(E,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+I);const k=i.get(Z);if(Z.version!==k.__version||z===!0){t.activeTexture(n.TEXTURE0+I);const ve=Je.getPrimaries(Je.workingColorSpace),he=_.colorSpace===gi?null:Je.getPrimaries(_.colorSpace),ye=_.colorSpace===gi||ve===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ee=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let re=0;re<6;re++)!Ee&&!oe?Se[re]=x(_.image[re],!0,s.maxCubemapSize):Se[re]=oe?_.image[re].image:_.image[re],Se[re]=j(_,Se[re]);const Ae=Se[0],Ce=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),ke=T(_.internalFormat,Ce,fe,_.colorSpace),U=_.isVideoTexture!==!0,_e=k.__version===void 0||z===!0,ae=Z.dataReady;let Te=L(_,Ae);Fe(n.TEXTURE_CUBE_MAP,_);let le;if(Ee){U&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ke,Ae.width,Ae.height);for(let re=0;re<6;re++){le=Se[re].mipmaps;for(let Pe=0;Pe<le.length;Pe++){const ze=le[Pe];_.format!==cn?Ce!==null?U?ae&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ke,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,0,0,ze.width,ze.height,Ce,fe,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe,ke,ze.width,ze.height,0,Ce,fe,ze.data)}}}else{if(le=_.mipmaps,U&&_e){le.length>0&&Te++;const re=ge(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,ke,re.width,re.height)}for(let re=0;re<6;re++)if(oe){U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Se[re].width,Se[re].height,Ce,fe,Se[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Se[re].width,Se[re].height,0,Ce,fe,Se[re].data);for(let Pe=0;Pe<le.length;Pe++){const ft=le[Pe].image[re].image;U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,ft.width,ft.height,Ce,fe,ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ke,ft.width,ft.height,0,Ce,fe,ft.data)}}else{U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,fe,Se[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ke,Ce,fe,Se[re]);for(let Pe=0;Pe<le.length;Pe++){const ze=le[Pe];U?ae&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,0,0,Ce,fe,ze.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,Pe+1,ke,Ce,fe,ze.image[re])}}}m(_)&&f(n.TEXTURE_CUBE_MAP),k.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function De(E,_,I,z,Z,k){const ve=r.convert(I.format,I.colorSpace),he=r.convert(I.type),ye=T(I.internalFormat,ve,he,I.colorSpace),Ee=i.get(_),oe=i.get(I);if(oe.__renderTarget=_,!Ee.__hasExternalTextures){const Se=Math.max(1,_.width>>k),Ae=Math.max(1,_.height>>k);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,k,ye,Se,Ae,_.depth,0,ve,he,null):t.texImage2D(Z,k,ye,Se,Ae,0,ve,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),ie(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,z,Z,oe.__webglTexture,0,K(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,z,Z,oe.__webglTexture,k),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(E,_,I){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const z=_.depthTexture,Z=z&&z.isDepthTexture?z.type:null,k=v(_.stencilBuffer,Z),ve=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=K(_);ie(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,k,_.width,_.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,k,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,k,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,E)}else{const z=_.textures;for(let Z=0;Z<z.length;Z++){const k=z[Z],ve=r.convert(k.format,k.colorSpace),he=r.convert(k.type),ye=T(k.internalFormat,ve,he,k.colorSpace),Ee=K(_);I&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,ye,_.width,_.height):ie(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,ye,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ye,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(_.depthTexture);z.__renderTarget=_,(!z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ne(_.depthTexture,0);const Z=z.__webglTexture,k=K(_);if(_.depthTexture.format===yr)ie(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Mr)ie(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function mt(E){const _=i.get(E),I=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const z=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),z){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,z.removeEventListener("dispose",Z)};z.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=z}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");const z=E.texture.mipmaps;z&&z.length>0?Ie(_.__webglFramebuffer[0],E):Ie(_.__webglFramebuffer,E)}else if(I){_.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[z]),_.__webglDepthbuffer[z]===void 0)_.__webglDepthbuffer[z]=n.createRenderbuffer(),Ze(_.__webglDepthbuffer[z],E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[z];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}else{const z=E.texture.mipmaps;if(z&&z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ze(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,k)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function w(E,_,I){const z=i.get(E);_!==void 0&&De(z.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&mt(E)}function C(E){const _=E.texture,I=i.get(E),z=i.get(_);E.addEventListener("dispose",R);const Z=E.textures,k=E.isWebGLCubeRenderTarget===!0,ve=Z.length>1;if(ve||(z.__webglTexture===void 0&&(z.__webglTexture=n.createTexture()),z.__version=_.version,o.memory.textures++),k){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let ye=0;ye<_.mipmaps.length;ye++)I.__webglFramebuffer[he][ye]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(ve)for(let he=0,ye=Z.length;he<ye;he++){const Ee=i.get(Z[he]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&ie(E)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<Z.length;he++){const ye=Z[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Ee=r.convert(ye.format,ye.colorSpace),oe=r.convert(ye.type),Se=T(ye.internalFormat,Ee,oe,ye.colorSpace,E.isXRRenderTarget===!0),Ae=K(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ae,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(I.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture),Fe(n.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)De(I.__webglFramebuffer[he][ye],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else De(I.__webglFramebuffer[he],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let he=0,ye=Z.length;he<ye;he++){const Ee=Z[he],oe=i.get(Ee);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),Fe(n.TEXTURE_2D,Ee),De(I.__webglFramebuffer,E,Ee,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Ee)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,z.__webglTexture),Fe(he,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)De(I.__webglFramebuffer[ye],E,_,n.COLOR_ATTACHMENT0,he,ye);else De(I.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,he,0);m(_)&&f(he),t.unbindTexture()}E.depthBuffer&&mt(E)}function y(E){const _=E.textures;for(let I=0,z=_.length;I<z;I++){const Z=_[I];if(m(Z)){const k=A(E),ve=i.get(Z).__webglTexture;t.bindTexture(k,ve),f(k),t.unbindTexture()}}}const se=[],$=[];function J(E){if(E.samples>0){if(ie(E)===!1){const _=E.textures,I=E.width,z=E.height;let Z=n.COLOR_BUFFER_BIT;const k=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(E),he=_.length>1;if(he)for(let Ee=0;Ee<_.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const ye=E.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ee=0;Ee<_.length;Ee++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const oe=i.get(_[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,I,z,0,0,I,z,Z,n.NEAREST),l===!0&&(se.length=0,$.length=0,se.push(n.COLOR_ATTACHMENT0+Ee),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(k),$.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<_.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Ee]);const oe=i.get(_[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function K(E){return Math.min(s.maxSamples,E.samples)}function ie(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Y(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function j(E,_){const I=E.colorSpace,z=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||I!==jt&&I!==gi&&(Je.getTransfer(I)===lt?(z!==cn||Z!==Dn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}function ge(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=X,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=w,this.setupRenderTarget=C,this.updateRenderTargetMipmap=y,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ie}function cS(n,e){function t(i,s=gi){let r;const o=Je.getTransfer(s);if(i===Dn)return n.UNSIGNED_BYTE;if(i===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===$d)return n.BYTE;if(i===Kd)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===_c)return n.INT;if(i===Xi)return n.UNSIGNED_INT;if(i===xn)return n.FLOAT;if(i===Rr)return n.HALF_FLOAT;if(i===Zd)return n.ALPHA;if(i===Jd)return n.RGB;if(i===cn)return n.RGBA;if(i===yr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===yc)return n.RED;if(i===Mc)return n.RED_INTEGER;if(i===Qd)return n.RG;if(i===Sc)return n.RG_INTEGER;if(i===Ec)return n.RGBA_INTEGER;if(i===_o||i===xo||i===vo||i===yo)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_o)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_o)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fl||i===pl||i===ml||i===gl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_l||i===xl||i===vl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===_l||i===xl)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===Ml||i===Sl||i===El||i===bl||i===Tl||i===Al||i===wl||i===Rl||i===Cl||i===Pl||i===Ll||i===Dl||i===Il)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===yl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Al)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Rl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Pl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===Ul||i===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Mo)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ef||i===Fl||i===Ol||i===Bl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Mo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const hS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ai({vertexShader:hS,fragmentShader:uS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new Pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fS extends Ki{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new dS,m=t.getContextAttributes();let f=null,A=null;const T=[],v=[],L=new Oe;let P=null;const R=new zt;R.viewport=new et;const N=new zt;N.viewport=new et;const b=[R,N],S=new bx;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=T[te];return ue===void 0&&(ue=new Aa,T[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=T[te];return ue===void 0&&(ue=new Aa,T[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=T[te];return ue===void 0&&(ue=new Aa,T[te]=ue),ue.getHandSpace()};function V(te){const ue=v.indexOf(te.inputSource);if(ue===-1)return;const Re=T[ue];Re!==void 0&&(Re.update(te.inputSource,te.frame,c||o),Re.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<T.length;te++){const ue=v[te];ue!==null&&(v[te]=null,T[te].disconnect(ue))}D=null,X=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,A=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,me=null,De=null;m.depth&&(De=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Re=m.stencil?Mr:yr,me=m.stencil?vr:Xi);const Ze={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new ji(d.textureWidth,d.textureHeight,{format:cn,type:Dn,depthTexture:new vf(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Re),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new ji(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Dn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(te){for(let ue=0;ue<te.removed.length;ue++){const Re=te.removed[ue],me=v.indexOf(Re);me>=0&&(v[me]=null,T[me].disconnect(Re))}for(let ue=0;ue<te.added.length;ue++){const Re=te.added[ue];let me=v.indexOf(Re);if(me===-1){for(let Ze=0;Ze<T.length;Ze++)if(Ze>=v.length){v.push(Re),me=Ze;break}else if(v[Ze]===null){v[Ze]=Re,me=Ze;break}if(me===-1)break}const De=T[me];De&&De.connect(Re)}}const q=new F,Q=new F;function H(te,ue,Re){q.setFromMatrixPosition(ue.matrixWorld),Q.setFromMatrixPosition(Re.matrixWorld);const me=q.distanceTo(Q),De=ue.projectionMatrix.elements,Ze=Re.projectionMatrix.elements,Ie=De[14]/(De[10]-1),mt=De[14]/(De[10]+1),w=(De[9]+1)/De[5],C=(De[9]-1)/De[5],y=(De[8]-1)/De[0],se=(Ze[8]+1)/Ze[0],$=Ie*y,J=Ie*se,K=me/(-y+se),ie=K*-y;if(ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ie),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Y=Ie+K,j=mt+K,ge=$-ie,E=J+(me-ie),_=w*mt/j*Y,I=C*mt/j*Y;te.projectionMatrix.makePerspective(ge,E,_,I,Y,j),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ue=te.near,Re=te.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Re=x.depthFar)),S.near=N.near=R.near=ue,S.far=N.far=R.far=Re,(D!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,X=S.far),R.layers.mask=te.layers.mask|2,N.layers.mask=te.layers.mask|4,S.layers.mask=R.layers.mask|N.layers.mask;const me=te.parent,De=S.cameras;de(S,me);for(let Ze=0;Ze<De.length;Ze++)de(De[Ze],me);De.length===2?H(S,R,N):S.projectionMatrix.copy(R.projectionMatrix),Me(te,S,me)};function Me(te,ue,Re){Re===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Re.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ps*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let we=null;function Fe(te,ue){if(h=ue.getViewerPose(c||o),g=ue,h!==null){const Re=h.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let me=!1;Re.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let Ie=0;Ie<Re.length;Ie++){const mt=Re[Ie];let w=null;if(p!==null)w=p.getViewport(mt);else{const y=u.getViewSubImage(d,mt);w=y.viewport,Ie===0&&(e.setRenderTargetTextures(A,y.colorTexture,y.depthStencilTexture),e.setRenderTarget(A))}let C=b[Ie];C===void 0&&(C=new zt,C.layers.enable(Ie),C.viewport=new et,b[Ie]=C),C.matrix.fromArray(mt.transform.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale),C.projectionMatrix.fromArray(mt.projectionMatrix),C.projectionMatrixInverse.copy(C.projectionMatrix).invert(),C.viewport.set(w.x,w.y,w.width,w.height),Ie===0&&(S.matrix.copy(C.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(C)}const De=s.enabledFeatures;if(De&&De.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ie=u.getDepthInformation(Re[0]);Ie&&Ie.isValid&&Ie.texture&&x.init(e,Ie,s.renderState)}}for(let Re=0;Re<T.length;Re++){const me=v[Re],De=T[Re];me!==null&&De!==void 0&&De.update(me,ue,c||o)}we&&we(te,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}const tt=new bf;tt.setAnimationLoop(Fe),this.setAnimationLoop=function(te){we=te},this.dispose=function(){}}}const Fi=new Un,pS=new Xe;function mS(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,df(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,T,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,A,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===qt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===qt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const A=e.get(f),T=A.envMap,v=A.envMapRotation;T&&(m.envMap.value=T,Fi.copy(v),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(pS.makeRotationFromEuler(Fi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,A,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===qt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function gS(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const v=T.program;i.uniformBlockBinding(A,v)}function c(A,T){let v=s[A.id];v===void 0&&(g(A),v=h(A),s[A.id]=v,A.addEventListener("dispose",m));const L=T.program;i.updateUBOMapping(A,L);const P=e.render.frame;r[A.id]!==P&&(d(A),r[A.id]=P)}function h(A){const T=u();A.__bindingPointIndex=T;const v=n.createBuffer(),L=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,L,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,v),v}function u(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],v=A.uniforms,L=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let P=0,R=v.length;P<R;P++){const N=Array.isArray(v[P])?v[P]:[v[P]];for(let b=0,S=N.length;b<S;b++){const D=N[b];if(p(D,P,b,L)===!0){const X=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let ne=0;ne<V.length;ne++){const q=V[ne],Q=x(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,X+ee,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(A,T,v,L){const P=A.value,R=T+"_"+v;if(L[R]===void 0)return typeof P=="number"||typeof P=="boolean"?L[R]=P:L[R]=P.clone(),!0;{const N=L[R];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return L[R]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function g(A){const T=A.uniforms;let v=0;const L=16;for(let R=0,N=T.length;R<N;R++){const b=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,D=b.length;S<D;S++){const X=b[S],V=Array.isArray(X.value)?X.value:[X.value];for(let ee=0,ne=V.length;ee<ne;ee++){const q=V[ee],Q=x(q),H=v%L,de=H%Q.boundary,Me=H+de;v+=de,Me!==0&&L-Me<Q.storage&&(v+=L-Me),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=Q.storage}}}const P=v%L;return P>0&&(v+=L-P),A.__size=v,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const v=o.indexOf(T.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(const A in s)n.deleteBuffer(s[A]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class _S{constructor(e={}){const{canvas:t=m_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let L=!1;this._outputColorSpace=Ct;let P=0,R=0,N=null,b=-1,S=null;const D=new et,X=new et;let V=null;const ee=new Ve(0);let ne=0,q=t.width,Q=t.height,H=1,de=null,Me=null;const we=new et(0,0,q,Q),Fe=new et(0,0,q,Q);let tt=!1;const te=new Rc;let ue=!1,Re=!1;const me=new Xe,De=new Xe,Ze=new F,Ie=new et,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let w=!1;function C(){return N===null?H:1}let y=i;function se(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",re,!1),y===null){const O="webgl2";if(y=se(O,M),y===null)throw se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $,J,K,ie,Y,j,ge,E,_,I,z,Z,k,ve,he,ye,Ee,oe,Se,Ae,Ce,fe,ke,U;function _e(){$=new wy(y),$.init(),fe=new cS(y,$),J=new yy(y,$,e,fe),K=new aS(y,$),J.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),ie=new Py(y),Y=new $M,j=new lS(y,$,K,Y,J,fe,ie),ge=new Sy(v),E=new Ay(v),_=new Fx(y),ke=new xy(y,_),I=new Ry(y,_,ie,ke),z=new Dy(y,I,_,ie),Se=new Ly(y,J,j),ye=new My(Y),Z=new YM(v,ge,E,$,J,ke,ye),k=new mS(v,Y),ve=new qM,he=new nS($),oe=new _y(v,ge,E,K,z,p,l),Ee=new rS(v,z,J),U=new gS(y,ie,J,K),Ae=new vy(y,$,ie),Ce=new Cy(y,$,ie),ie.programs=Z.programs,v.capabilities=J,v.extensions=$,v.properties=Y,v.renderLists=ve,v.shadowMap=Ee,v.state=K,v.info=ie}_e();const ae=new fS(v,y);this.xr=ae,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=$.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(q,Q,!1))},this.getSize=function(M){return M.set(q,Q)},this.setSize=function(M,O,G=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,Q=O,t.width=Math.floor(M*H),t.height=Math.floor(O*H),G===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(q*H,Q*H).floor()},this.setDrawingBufferSize=function(M,O,G){q=M,Q=O,H=G,t.width=Math.floor(M*G),t.height=Math.floor(O*G),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,O,G,W){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,O,G,W),K.viewport(D.copy(we).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,O,G,W){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,O,G,W),K.scissor(X.copy(Fe).multiplyScalar(H).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(M){K.setScissorTest(tt=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,G=!0){let W=0;if(M){let B=!1;if(N!==null){const ce=N.texture.format;B=ce===Ec||ce===Sc||ce===Mc}if(B){const ce=N.texture.type,xe=ce===Dn||ce===Xi||ce===xr||ce===vr||ce===xc||ce===vc,Le=oe.getClearColor(),be=oe.getClearAlpha(),Be=Le.r,He=Le.g,Ue=Le.b;xe?(g[0]=Be,g[1]=He,g[2]=Ue,g[3]=be,y.clearBufferuiv(y.COLOR,0,g)):(x[0]=Be,x[1]=He,x[2]=Ue,x[3]=be,y.clearBufferiv(y.COLOR,0,x))}else W|=y.COLOR_BUFFER_BIT}O&&(W|=y.DEPTH_BUFFER_BIT),G&&(W|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",re,!1),oe.dispose(),ve.dispose(),he.dispose(),Y.dispose(),ge.dispose(),E.dispose(),z.dispose(),ke.dispose(),U.dispose(),Z.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Hc),ae.removeEventListener("sessionend",kc),wi.stop()};function Te(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=ie.autoReset,O=Ee.enabled,G=Ee.autoUpdate,W=Ee.needsUpdate,B=Ee.type;_e(),ie.autoReset=M,Ee.enabled=O,Ee.autoUpdate=G,Ee.needsUpdate=W,Ee.type=B}function re(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Pe(M){const O=M.target;O.removeEventListener("dispose",Pe),ze(O)}function ze(M){ft(M),Y.remove(M)}function ft(M){const O=Y.get(M).programs;O!==void 0&&(O.forEach(function(G){Z.releaseProgram(G)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,G,W,B,ce){O===null&&(O=mt);const xe=B.isMesh&&B.matrixWorld.determinant()<0,Le=Df(M,O,G,W,B);K.setMaterial(W,xe);let be=G.index,Be=1;if(W.wireframe===!0){if(be=I.getWireframeAttribute(G),be===void 0)return;Be=2}const He=G.drawRange,Ue=G.attributes.position;let qe=He.start*Be,at=(He.start+He.count)*Be;ce!==null&&(qe=Math.max(qe,ce.start*Be),at=Math.min(at,(ce.start+ce.count)*Be)),be!==null?(qe=Math.max(qe,0),at=Math.min(at,be.count)):Ue!=null&&(qe=Math.max(qe,0),at=Math.min(at,Ue.count));const vt=at-qe;if(vt<0||vt===1/0)return;ke.setup(B,W,Le,G,be);let pt,ht=Ae;if(be!==null&&(pt=_.get(be),ht=Ce,ht.setIndex(pt)),B.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*C()),ht.setMode(y.LINES)):ht.setMode(y.TRIANGLES);else if(B.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),K.setLineWidth(Ne*C()),B.isLineSegments?ht.setMode(y.LINES):B.isLineLoop?ht.setMode(y.LINE_LOOP):ht.setMode(y.LINE_STRIP)}else B.isPoints?ht.setMode(y.POINTS):B.isSprite&&ht.setMode(y.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ss("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if($.get("WEBGL_multi_draw"))ht.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ne=B._multiDrawStarts,_t=B._multiDrawCounts,Qe=B._multiDrawCount,Zt=be?_.get(be).bytesPerElement:1,qi=Y.get(W).currentProgram.getUniforms();for(let Jt=0;Jt<Qe;Jt++)qi.setValue(y,"_gl_DrawID",Jt),ht.render(Ne[Jt]/Zt,_t[Jt])}else if(B.isInstancedMesh)ht.renderInstances(qe,vt,B.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,_t=Math.min(G.instanceCount,Ne);ht.renderInstances(qe,vt,_t)}else ht.render(qe,vt)};function st(M,O,G){M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=qt,M.needsUpdate=!0,Ir(M,O,G),M.side=ii,M.needsUpdate=!0,Ir(M,O,G),M.side=mn):Ir(M,O,G)}this.compile=function(M,O,G=null){G===null&&(G=M),f=he.get(G),f.init(O),T.push(f),G.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),M!==G&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const W=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ce=B.material;if(ce)if(Array.isArray(ce))for(let xe=0;xe<ce.length;xe++){const Le=ce[xe];st(Le,G,B),W.add(Le)}else st(ce,G,B),W.add(ce)}),f=T.pop(),W},this.compileAsync=function(M,O,G=null){const W=this.compile(M,O,G);return new Promise(B=>{function ce(){if(W.forEach(function(xe){Y.get(xe).currentProgram.isReady()&&W.delete(xe)}),W.size===0){B(M);return}setTimeout(ce,10)}$.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let un=null;function Bn(M){un&&un(M)}function Hc(){wi.stop()}function kc(){wi.start()}const wi=new bf;wi.setAnimationLoop(Bn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(M){un=M,ae.setAnimationLoop(M),M===null?wi.stop():wi.start()},ae.addEventListener("sessionstart",Hc),ae.addEventListener("sessionend",kc),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,O,N),f=he.get(M,T.length),f.init(O),T.push(f),De.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(De),Re=this.localClippingEnabled,ue=ye.init(this.clippingPlanes,Re),m=ve.get(M,A.length),m.init(),A.push(m),ae.enabled===!0&&ae.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&jo(ce,O,-1/0,v.sortObjects)}jo(M,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(de,Me),w=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,w&&oe.addToRenderList(m,M),this.info.render.frame++,ue===!0&&ye.beginShadows();const G=f.state.shadowsArray;Ee.render(G,M,O),ue===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ce=O.cameras;if(B.length>0)for(let xe=0,Le=ce.length;xe<Le;xe++){const be=ce[xe];Vc(W,B,M,be)}w&&oe.render(M);for(let xe=0,Le=ce.length;xe<Le;xe++){const be=ce[xe];zc(m,M,be,be.viewport)}}else B.length>0&&Vc(W,B,M,O),w&&oe.render(M),zc(m,M,O);N!==null&&R===0&&(j.updateMultisampleRenderTarget(N),j.updateRenderTargetMipmap(N)),M.isScene===!0&&M.onAfterRender(v,M,O),ke.resetDefaultState(),b=-1,S=null,T.pop(),T.length>0?(f=T[T.length-1],ue===!0&&ye.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function jo(M,O,G,W){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||te.intersectsSprite(M)){W&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(De);const xe=z.update(M),Le=M.material;Le.visible&&m.push(M,xe,Le,G,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||te.intersectsObject(M))){const xe=z.update(M),Le=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ie.copy(xe.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(De)),Array.isArray(Le)){const be=xe.groups;for(let Be=0,He=be.length;Be<He;Be++){const Ue=be[Be],qe=Le[Ue.materialIndex];qe&&qe.visible&&m.push(M,xe,qe,G,Ie.z,Ue)}}else Le.visible&&m.push(M,xe,Le,G,Ie.z,null)}}const ce=M.children;for(let xe=0,Le=ce.length;xe<Le;xe++)jo(ce[xe],O,G,W)}function zc(M,O,G,W){const B=M.opaque,ce=M.transmissive,xe=M.transparent;f.setupLightsView(G),ue===!0&&ye.setGlobalState(v.clippingPlanes,G),W&&K.viewport(D.copy(W)),B.length>0&&Dr(B,O,G),ce.length>0&&Dr(ce,O,G),xe.length>0&&Dr(xe,O,G),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Vc(M,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new ji(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Rr:Dn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=f.state.transmissionRenderTarget[W.id],xe=W.viewport||D;ce.setSize(xe.z*v.transmissionResolutionScale,xe.w*v.transmissionResolutionScale);const Le=v.getRenderTarget(),be=v.getActiveCubeFace(),Be=v.getActiveMipmapLevel();v.setRenderTarget(ce),v.getClearColor(ee),ne=v.getClearAlpha(),ne<1&&v.setClearColor(16777215,.5),v.clear(),w&&oe.render(G);const He=v.toneMapping;v.toneMapping=Ei;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),ue===!0&&ye.setGlobalState(v.clippingPlanes,W),Dr(M,G,W),j.updateMultisampleRenderTarget(ce),j.updateRenderTargetMipmap(ce),$.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let at=0,vt=O.length;at<vt;at++){const pt=O[at],ht=pt.object,Ne=pt.geometry,_t=pt.material,Qe=pt.group;if(_t.side===mn&&ht.layers.test(W.layers)){const Zt=_t.side;_t.side=qt,_t.needsUpdate=!0,Gc(ht,G,W,Ne,_t,Qe),_t.side=Zt,_t.needsUpdate=!0,qe=!0}}qe===!0&&(j.updateMultisampleRenderTarget(ce),j.updateRenderTargetMipmap(ce))}v.setRenderTarget(Le,be,Be),v.setClearColor(ee,ne),Ue!==void 0&&(W.viewport=Ue),v.toneMapping=He}function Dr(M,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ce=M.length;B<ce;B++){const xe=M[B],Le=xe.object,be=xe.geometry,Be=xe.group;let He=xe.material;He.allowOverride===!0&&W!==null&&(He=W),Le.layers.test(G.layers)&&Gc(Le,O,G,be,He,Be)}}function Gc(M,O,G,W,B,ce){M.onBeforeRender(v,O,G,W,B,ce),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(v,O,G,W,M,ce),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=qt,B.needsUpdate=!0,v.renderBufferDirect(G,O,W,B,M,ce),B.side=ii,B.needsUpdate=!0,v.renderBufferDirect(G,O,W,B,M,ce),B.side=mn):v.renderBufferDirect(G,O,W,B,M,ce),M.onAfterRender(v,O,G,W,B,ce)}function Ir(M,O,G){O.isScene!==!0&&(O=mt);const W=Y.get(M),B=f.state.lights,ce=f.state.shadowsArray,xe=B.state.version,Le=Z.getParameters(M,B.state,ce,O,G),be=Z.getProgramCacheKey(Le);let Be=W.programs;W.environment=M.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(M.isMeshStandardMaterial?E:ge).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,Be===void 0&&(M.addEventListener("dispose",Pe),Be=new Map,W.programs=Be);let He=Be.get(be);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===xe)return Xc(M,Le),He}else Le.uniforms=Z.getUniforms(M),M.onBeforeCompile(Le,v),He=Z.acquireProgram(Le,be),Be.set(be,He),W.uniforms=Le.uniforms;const Ue=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ye.uniform),Xc(M,Le),W.needsLights=Uf(M),W.lightsStateVersion=xe,W.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function Wc(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Eo.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Xc(M,O){const G=Y.get(M);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Df(M,O,G,W,B){O.isScene!==!0&&(O=mt),j.resetTextureUnits();const ce=O.fog,xe=W.isMeshStandardMaterial?O.environment:null,Le=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:jt,be=(W.isMeshStandardMaterial?E:ge).get(W.envMap||xe),Be=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!G.morphAttributes.position,qe=!!G.morphAttributes.normal,at=!!G.morphAttributes.color;let vt=Ei;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(vt=v.toneMapping);const pt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ht=pt!==void 0?pt.length:0,Ne=Y.get(W),_t=f.state.lights;if(ue===!0&&(Re===!0||M!==S)){const Nt=M===S&&W.id===b;ye.setState(W,M,Nt)}let Qe=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==_t.state.version||Ne.outputColorSpace!==Le||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==be||W.fog===!0&&Ne.fog!==ce||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ye.numPlanes||Ne.numIntersection!==ye.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==He||Ne.morphTargets!==Ue||Ne.morphNormals!==qe||Ne.morphColors!==at||Ne.toneMapping!==vt||Ne.morphTargetsCount!==ht)&&(Qe=!0):(Qe=!0,Ne.__version=W.version);let Zt=Ne.currentProgram;Qe===!0&&(Zt=Ir(W,O,B));let qi=!1,Jt=!1,ks=!1;const gt=Zt.getUniforms(),rn=Ne.uniforms;if(K.useProgram(Zt.program)&&(qi=!0,Jt=!0,ks=!0),W.id!==b&&(b=W.id,Jt=!0),qi||S!==M){K.buffers.depth.getReversed()?(me.copy(M.projectionMatrix),__(me),x_(me),gt.setValue(y,"projectionMatrix",me)):gt.setValue(y,"projectionMatrix",M.projectionMatrix),gt.setValue(y,"viewMatrix",M.matrixWorldInverse);const Yt=gt.map.cameraPosition;Yt!==void 0&&Yt.setValue(y,Ze.setFromMatrixPosition(M.matrixWorld)),J.logarithmicDepthBuffer&&gt.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&gt.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Jt=!0,ks=!0)}if(B.isSkinnedMesh){gt.setOptional(y,B,"bindMatrix"),gt.setOptional(y,B,"bindMatrixInverse");const Nt=B.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),gt.setValue(y,"boneTexture",Nt.boneTexture,j))}B.isBatchedMesh&&(gt.setOptional(y,B,"batchingTexture"),gt.setValue(y,"batchingTexture",B._matricesTexture,j),gt.setOptional(y,B,"batchingIdTexture"),gt.setValue(y,"batchingIdTexture",B._indirectTexture,j),gt.setOptional(y,B,"batchingColorTexture"),B._colorsTexture!==null&&gt.setValue(y,"batchingColorTexture",B._colorsTexture,j));const on=G.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&Se.update(B,G,Zt),(Jt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,gt.setValue(y,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=be,rn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(rn.envMapIntensity.value=O.environmentIntensity),Jt&&(gt.setValue(y,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&If(rn,ks),ce&&W.fog===!0&&k.refreshFogUniforms(rn,ce),k.refreshMaterialUniforms(rn,W,H,Q,f.state.transmissionRenderTarget[M.id]),Eo.upload(y,Wc(Ne),rn,j)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Eo.upload(y,Wc(Ne),rn,j),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&gt.setValue(y,"center",B.center),gt.setValue(y,"modelViewMatrix",B.modelViewMatrix),gt.setValue(y,"normalMatrix",B.normalMatrix),gt.setValue(y,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Nt=W.uniformsGroups;for(let Yt=0,Yo=Nt.length;Yt<Yo;Yt++){const Ri=Nt[Yt];U.update(Ri,Zt),U.bind(Ri,Zt)}}return Zt}function If(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Uf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(M,O,G){const W=Y.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=O,Y.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const G=Y.get(M);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};const Nf=y.createFramebuffer();this.setRenderTarget=function(M,O=0,G=0){N=M,P=O,R=G;let W=!0,B=null,ce=!1,xe=!1;if(M){const be=Y.get(M);if(be.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(y.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)j.setupRenderTarget(M);else if(be.__hasExternalTextures)j.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&Y.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(M)}}const Be=M.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(xe=!0);const He=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(He[O])?B=He[O][G]:B=He[O],ce=!0):M.samples>0&&j.useMultisampledRTT(M)===!1?B=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(He)?B=He[G]:B=He,D.copy(M.viewport),X.copy(M.scissor),V=M.scissorTest}else D.copy(we).multiplyScalar(H).floor(),X.copy(Fe).multiplyScalar(H).floor(),V=tt;if(G!==0&&(B=Nf),K.bindFramebuffer(y.FRAMEBUFFER,B)&&W&&K.drawBuffers(M,B),K.viewport(D),K.scissor(X),K.setScissorTest(V),ce){const be=Y.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,G)}else if(xe){const be=Y.get(M.texture),Be=O;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,be.__webglTexture,G,Be)}else if(M!==null&&G!==0){const be=Y.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,be.__webglTexture,G)}b=-1},this.readRenderTargetPixels=function(M,O,G,W,B,ce,xe,Le=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){K.bindFramebuffer(y.FRAMEBUFFER,be);try{const Be=M.textures[Le],He=Be.format,Ue=Be.type;if(!J.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-W&&G>=0&&G<=M.height-B&&(M.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Le),y.readPixels(O,G,W,B,fe.convert(He),fe.convert(Ue),ce))}finally{const Be=N!==null?Y.get(N).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(M,O,G,W,B,ce,xe,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(O>=0&&O<=M.width-W&&G>=0&&G<=M.height-B){K.bindFramebuffer(y.FRAMEBUFFER,be);const Be=M.textures[Le],He=Be.format,Ue=Be.type;if(!J.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.bufferData(y.PIXEL_PACK_BUFFER,ce.byteLength,y.STREAM_READ),M.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+Le),y.readPixels(O,G,W,B,fe.convert(He),fe.convert(Ue),0);const at=N!==null?Y.get(N).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,at);const vt=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await g_(y,vt,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,qe),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ce),y.deleteBuffer(qe),y.deleteSync(vt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,G=0){const W=Math.pow(2,-G),B=Math.floor(M.image.width*W),ce=Math.floor(M.image.height*W),xe=O!==null?O.x:0,Le=O!==null?O.y:0;j.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,G,0,0,xe,Le,B,ce),K.unbindTexture()};const Ff=y.createFramebuffer(),Of=y.createFramebuffer();this.copyTextureToTexture=function(M,O,G=null,W=null,B=0,ce=null){ce===null&&(B!==0?(Ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=B,B=0):ce=0);let xe,Le,be,Be,He,Ue,qe,at,vt;const pt=M.isCompressedTexture?M.mipmaps[ce]:M.image;if(G!==null)xe=G.max.x-G.min.x,Le=G.max.y-G.min.y,be=G.isBox3?G.max.z-G.min.z:1,Be=G.min.x,He=G.min.y,Ue=G.isBox3?G.min.z:0;else{const on=Math.pow(2,-B);xe=Math.floor(pt.width*on),Le=Math.floor(pt.height*on),M.isDataArrayTexture?be=pt.depth:M.isData3DTexture?be=Math.floor(pt.depth*on):be=1,Be=0,He=0,Ue=0}W!==null?(qe=W.x,at=W.y,vt=W.z):(qe=0,at=0,vt=0);const ht=fe.convert(O.format),Ne=fe.convert(O.type);let _t;O.isData3DTexture?(j.setTexture3D(O,0),_t=y.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(j.setTexture2DArray(O,0),_t=y.TEXTURE_2D_ARRAY):(j.setTexture2D(O,0),_t=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,O.unpackAlignment);const Qe=y.getParameter(y.UNPACK_ROW_LENGTH),Zt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),qi=y.getParameter(y.UNPACK_SKIP_PIXELS),Jt=y.getParameter(y.UNPACK_SKIP_ROWS),ks=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Be),y.pixelStorei(y.UNPACK_SKIP_ROWS,He),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ue);const gt=M.isDataArrayTexture||M.isData3DTexture,rn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const on=Y.get(M),Nt=Y.get(O),Yt=Y.get(on.__renderTarget),Yo=Y.get(Nt.__renderTarget);K.bindFramebuffer(y.READ_FRAMEBUFFER,Yt.__webglFramebuffer),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let Ri=0;Ri<be;Ri++)gt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,B,Ue+Ri),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,ce,vt+Ri)),y.blitFramebuffer(Be,He,xe,Le,qe,at,xe,Le,y.DEPTH_BUFFER_BIT,y.NEAREST);K.bindFramebuffer(y.READ_FRAMEBUFFER,null),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||Y.has(M)){const on=Y.get(M),Nt=Y.get(O);K.bindFramebuffer(y.READ_FRAMEBUFFER,Ff),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,Of);for(let Yt=0;Yt<be;Yt++)gt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,on.__webglTexture,B,Ue+Yt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,on.__webglTexture,B),rn?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Nt.__webglTexture,ce,vt+Yt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Nt.__webglTexture,ce),B!==0?y.blitFramebuffer(Be,He,xe,Le,qe,at,xe,Le,y.COLOR_BUFFER_BIT,y.NEAREST):rn?y.copyTexSubImage3D(_t,ce,qe,at,vt+Yt,Be,He,xe,Le):y.copyTexSubImage2D(_t,ce,qe,at,Be,He,xe,Le);K.bindFramebuffer(y.READ_FRAMEBUFFER,null),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else rn?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(_t,ce,qe,at,vt,xe,Le,be,ht,Ne,pt.data):O.isCompressedArrayTexture?y.compressedTexSubImage3D(_t,ce,qe,at,vt,xe,Le,be,ht,pt.data):y.texSubImage3D(_t,ce,qe,at,vt,xe,Le,be,ht,Ne,pt):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ce,qe,at,xe,Le,ht,Ne,pt.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ce,qe,at,pt.width,pt.height,ht,pt.data):y.texSubImage2D(y.TEXTURE_2D,ce,qe,at,xe,Le,ht,Ne,pt);y.pixelStorei(y.UNPACK_ROW_LENGTH,Qe),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Zt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,qi),y.pixelStorei(y.UNPACK_SKIP_ROWS,Jt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ks),ce===0&&O.generateMipmaps&&y.generateMipmap(_t),K.unbindTexture()},this.copyTextureToTexture3D=function(M,O,G=null,W=null,B=0){return Ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,O,G,W,B)},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&j.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?j.setTextureCube(M,0):M.isData3DTexture?j.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?j.setTexture2DArray(M,0):j.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){P=0,R=0,N=null,K.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const Ou={type:"change"},Oc={type:"start"},Cf={type:"end"},ho=new Cr,Bu=new pi,xS=Math.cos(70*rf.DEG2RAD),St=new F,$t=2*Math.PI,ct={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class vS extends Ux{constructor(e,t=null){super(e,t),this.state=ct.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ys.ROTATE,MIDDLE:ys.DOLLY,RIGHT:ys.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new In,this._lastTargetPosition=new F,this._quat=new In().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new uu,this._sphericalDelta=new uu,this._scale=1,this._panOffset=new F,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new F,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MS.bind(this),this._onPointerDown=yS.bind(this),this._onPointerUp=SS.bind(this),this._onContextMenu=CS.bind(this),this._onMouseWheel=TS.bind(this),this._onKeyDown=AS.bind(this),this._onTouchStart=wS.bind(this),this._onTouchMove=RS.bind(this),this._onMouseDown=ES.bind(this),this._onMouseMove=bS.bind(this),this._interceptControlDown=PS.bind(this),this._interceptControlUp=LS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ou),this.update(),this.state=ct.NONE}update(e=null){const t=this.object.position;St.copy(t).sub(this.target),St.applyQuaternion(this._quat),this._spherical.setFromVector3(St),this.autoRotate&&this.state===ct.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=$t:i>Math.PI&&(i-=$t),s<-Math.PI?s+=$t:s>Math.PI&&(s-=$t),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(St.setFromSpherical(this._spherical),St.applyQuaternion(this._quatInverse),t.copy(this.target).add(St),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=St.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new F(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=St.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ho.origin.copy(this.object.position),ho.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ho.direction))<xS?this.object.lookAt(this.target):(Bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ho.intersectPlane(Bu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(Ou),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?$t/60*this.autoRotateSpeed*e:$t/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){St.setFromMatrixColumn(t,0),St.multiplyScalar(-e),this._panOffset.add(St)}_panUp(e,t){this.screenSpacePanning===!0?St.setFromMatrixColumn(t,1):(St.setFromMatrixColumn(t,0),St.crossVectors(this.object.up,St)),St.multiplyScalar(e),this._panOffset.add(St)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;St.copy(s).sub(this.target);let r=St.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft($t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-$t*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft($t*this._rotateDelta.x/t.clientHeight),this._rotateUp($t*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yS(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function MS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function SS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cf),this.state=ct.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ES(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ys.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ct.DOLLY;break;case ys.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}break;case ys.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ct.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ct.PAN}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Oc)}function bS(n){switch(this.state){case ct.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ct.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ct.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function TS(n){this.enabled===!1||this.enableZoom===!1||this.state!==ct.NONE||(n.preventDefault(),this.dispatchEvent(Oc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Cf))}function AS(n){this.enabled!==!1&&this._handleKeyDown(n)}function wS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ct.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ct.TOUCH_PAN;break;default:this.state=ct.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ct.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ct.TOUCH_DOLLY_ROTATE;break;default:this.state=ct.NONE}break;default:this.state=ct.NONE}this.state!==ct.NONE&&this.dispatchEvent(Oc)}function RS(n){switch(this._trackPointer(n),this.state){case ct.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ct.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ct.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ct.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ct.NONE}}function CS(n){this.enabled!==!1&&n.preventDefault()}function PS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function LS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Pn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Pn.nextNameID=Pn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Pn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class DS extends Pn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Wl(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const IS={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:Wl,toHexString:Wl},Tr={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},US={isPrimitive:!1,match:Array.isArray,fromHexString(n,e,t=1){const i=Tr.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([n,e,t],i=1)=>Tr.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},NS={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Tr.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r:n,g:e,b:t},i=1)=>Tr.toHexString(n*(i=255/i)<<16^e*i<<8^t*i<<0)},FS=[IS,Tr,US,NS];class OS extends Pn{constructor(e,t,i,s){var r;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,FS.find(o=>o.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const o=Wl(this.$text.value);o&&this._setValueFromHexString(o)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class za extends Pn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class BS extends Pn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let t,i,s,r,o,a=!1;const l=h=>{if(a){const u=h.clientX-t,d=h.clientY-i;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&c()}if(!a){const u=h.clientY-s;o-=u*this._step*this._arrowKeyMultiplier(h),r+o>this._max?o=this._max-r:r+o<this._min&&(o=this._min-r),this._snapClampSetValue(r+o)}s=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,i=s=h.clientY,a=!0,r=this.getValue(),o=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const p=this.$slider.getBoundingClientRect();let g=(x=d,m=p.left,f=p.right,A=this._min,T=this._max,(x-m)/(f-m)*(T-A)+A);var x,m,f,A,T;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let s,r,o=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),o=!1},l=d=>{if(o){const p=d.touches[0].clientX-s,g=d.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),e(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(s=d.touches[0].clientX,r=d.touches[0].clientY,o=!0):a(d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const p=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class HS extends Pn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class kS extends Pn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let Hu=!1;class Bc{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!Hu&&o&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),Hu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,i,s,r){if(Object(i)===i)return new HS(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new BS(this,e,t,i,s,r);case"boolean":return new DS(this,e,t);case"string":return new kS(this,e,t);case"function":return new za(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new OS(this,e,t,i)}addFolder(e){return new Bc({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof za||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof za)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}function ku(n,e){if(e===Vg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Hl||e===tf){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Hl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class zS extends Bs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jS(t)}),this.register(function(t){return new YS(t)}),this.register(function(t){return new nE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new KS(t)}),this.register(function(t){return new qS(t)}),this.register(function(t){return new ZS(t)}),this.register(function(t){return new JS(t)}),this.register(function(t){return new XS(t)}),this.register(function(t){return new QS(t)}),this.register(function(t){return new $S(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new eE(t)}),this.register(function(t){return new GS(t)}),this.register(function(t){return new rE(t)}),this.register(function(t){return new oE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=dr.extractUrlBase(e);o=dr.resolveURL(c,this.path)}else o=dr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Sf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pf){try{o[Ke.KHR_BINARY_GLTF]=new aE(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new yE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ke.KHR_MATERIALS_UNLIT:o[u]=new WS;break;case Ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new lE(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:o[u]=new cE;break;case Ke.KHR_MESH_QUANTIZATION:o[u]=new hE;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function VS(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class GS{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ve(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],jt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ef(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new yx(h),c.distance=u;break;case"spot":c=new xx(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),$n(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class WS{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Vi}extendParams(e,t,i){const s=[];e.color=new Ve(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],jt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ct))}return Promise.all(s)}}class XS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class YS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class $S{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class KS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ve(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],jt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ct)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class qS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ZS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ve().setRGB(a[0],a[1],a[2],jt),Promise.all(r)}}class JS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class QS{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ve().setRGB(a[0],a[1],a[2],jt),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Ct)),Promise.all(r)}}class eE{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class tE{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:On}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class nE{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class iE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class sE{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class rE{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class oE{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==ln.TRIANGLES&&c.mode!==ln.TRIANGLE_STRIP&&c.mode!==ln.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const x=new Xe,m=new F,f=new In,A=new F(1,1,1),T=new K_(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,v),l.SCALE&&A.fromBufferAttribute(l.SCALE,v),T.setMatrixAt(v,x.compose(m,f,A));for(const v in l)if(v==="_COLOR_0"){const L=l[v];T.instanceColor=new zl(L.array,L.itemSize,L.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);xt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),p.push(T)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Pf="glTF",Zs=12,zu={JSON:1313821514,BIN:5130562};class aE{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Zs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Zs,r=new DataView(e,Zs);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===zu.JSON){const c=new Uint8Array(e,Zs+o,a);this.content=i.decode(c)}else if(l===zu.BIN){const c=Zs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class lE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=Xl[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=Xl[h]||h.toLowerCase();if(o[h]!==void 0){const d=i.accessors[e.attributes[h]],p=bs[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(p)},a,c,jt,d)})})}}class cE{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class hE{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}}class Lf extends Lr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(i-t)/h,d=u*u,p=d*u,g=e*c,x=g-c,m=-2*p+3*d,f=p-d,A=1-m,T=f-d+u;for(let v=0;v!==a;v++){const L=o[x+v+a],P=o[x+v+l]*h,R=o[g+v+a],N=o[g+v]*h;r[v]=A*L+T*P+m*R+f*N}return r}}const uE=new In;class dE extends Lf{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return uE.fromArray(r).normalize().toArray(r),r}}const ln={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},bs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Vu={9728:Gt,9729:sn,9984:Yd,9985:go,9986:Qs,9987:Zn},Gu={33071:xi,33648:Po,10497:Ti},Va={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},fE={CUBICSPLINE:void 0,LINEAR:Er,STEP:Sr},Ga={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function pE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new _i({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ii})),n.DefaultMaterial}function Oi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function $n(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function mE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):n.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):n.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(n.morphAttributes.position=h),s&&(n.morphAttributes.normal=u),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function gE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _E(n){let e;const t=n.extensions&&n.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wa(t.attributes):e=n.indices+":"+Wa(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Wa(n.targets[i]);return e}function Wa(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function jl(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function xE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const vE=new Xe;class yE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new VS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new So(this.options.manager):this.textureLoader=new Ex(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Sf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Oi(r,a,s),$n(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(dr.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Va[s.type],a=bs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Wt(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Va[s.type],c=bs[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let x,m;if(p&&p!==u){const f=Math.floor(d/p),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let T=t.cache.get(A);T||(x=new c(a,f*p,s.count*p/h),T=new W_(x,p/h),t.cache.add(A,T)),m=new Ac(T,l,d%p/h,g)}else a===null?x=new c(s.count*l):x=new c(a,d,s.count*l),m=new Wt(x,l,g);if(s.sparse!==void 0){const f=Va.SCALAR,A=bs[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,L=new A(o[1],T,s.sparse.count*f),P=new c(o[2],v,s.sparse.count*l);a!==null&&(m=new Wt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,N=L.length;R<N;R++){const b=L[R];if(m.setX(b,P[R*l]),l>=2&&m.setY(b,P[R*l+1]),l>=3&&m.setZ(b,P[R*l+2]),l>=4&&m.setW(b,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=Vu[d.magFilter]||sn,h.minFilter=Vu[d.minFilter]||Zn,h.wrapS=Gu[d.wrapS]||Ti,h.wrapT=Gu[d.wrapT]||Ti,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==sn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new wt(x);m.needsUpdate=!0,d(m)}),t.load(dr.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),$n(u,o),u.userData.mimeType=o.mimeType||xE(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xf,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new _f,Cn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return _i}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){const u=s[Ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Ve(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],jt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ct)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=mn);const h=r.alphaMode||Ga.OPAQUE;if(h===Ga.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Ga.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Vi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Vi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Vi){const u=r.emissiveFactor;a.emissive=new Ve().setRGB(u[0],u[1],u[2],jt)}return r.emissiveTexture!==void 0&&o!==Vi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ct)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),$n(u,r),t.associations.set(u,{materials:e}),r.extensions&&Oi(s,u,r),u})}createUniqueName(e){const t=ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Wu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=_E(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Wu(new hn,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?pE(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const x=h[p],m=o[p];let f;const A=c[p];if(m.mode===ln.TRIANGLES||m.mode===ln.TRIANGLE_STRIP||m.mode===ln.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new j_(x,A):new At(x,A),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ln.TRIANGLE_STRIP?f.geometry=ku(f.geometry,tf):m.mode===ln.TRIANGLE_FAN&&(f.geometry=ku(f.geometry,Hl));else if(m.mode===ln.LINES)f=new Q_(x,A);else if(m.mode===ln.LINE_STRIP)f=new Cc(x,A);else if(m.mode===ln.LINE_LOOP)f=new ex(x,A);else if(m.mode===ln.POINTS)f=new tx(x,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&gE(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),$n(f,r),m.extensions&&Oi(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Oi(s,u[0],r),u[0];const d=new vi;r.extensions&&Oi(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new zt(rf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ic(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),$n(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Xe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new wc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],x=p.target,m=x.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",A)),c.push(g),h.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],x=u[3],m=u[4],f=[];for(let A=0,T=d.length;A<T;A++){const v=d[A],L=p[A],P=g[A],R=x[A],N=m[A];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const b=i._createAnimationTracks(v,L,P,R,N);if(b)for(let S=0;S<b.length;S++)f.push(b[S])}return new hx(r,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,vE)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new mf:c.length>1?h=new vi:c.length===1?h=c[0]:h=new xt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),$n(h,r),r.extensions&&Oi(i,h,r),r.matrix!==void 0){const u=new Xe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new vi;i.name&&(r.name=s.createUniqueName(i.name)),$n(r,i),i.extensions&&Oi(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof Cn||d instanceof wt)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ui[r.path]===ui.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ui[r.path]){case ui.weights:c=Ds;break;case ui.rotation:c=Is;break;case ui.translation:case ui.scale:c=Us;break;default:switch(i.itemSize){case 1:c=Ds;break;case 2:case 3:default:c=Us;break}break}const h=s.interpolation!==void 0?fE[s.interpolation]:Er,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+ui[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=jl(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof Is?dE:Lf;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ME(n,e,t){const i=e.attributes,s=new Nn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){const h=jl(bs[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new F,l=new F;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const x=jl(bs[d.componentType]);l.multiplyScalar(x)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new Fn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Wu(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Xl[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return Je.workingColorSpace!==jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),$n(n,e),ME(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?mE(n,e.targets,t):n})}const SE="/three.js/assets/wood-CsmkNJ0B.jpg",EE="/three.js/assets/bg-v2Xcn-9_.jpg",bE="/three.js/assets/floor-DcvrRYBN.jpg",TE="/three.js/assets/Door-D9x0pBp1.glb",AE=md({__name:"ThreeScene",setup(n){const e=Qo(),t=Qo(1),i=Qo(1.7);let s,r,o,a,l;function c(){const h=e.value.clientWidth,u=e.value.clientHeight;r.aspect=h/u,r.updateProjectionMatrix(),o.setSize(h,u)}return vd(()=>{s=new G_,new So().load(EE,f=>{f.mapping=Co,s.background=f,s.environment=f}),r=new zt(75,e.value.clientWidth/e.value.clientHeight,.51,200),r.position.set(0,1.6,t.value*4),o=new _S({antialias:!0}),o.setSize(e.value.clientWidth,e.value.clientHeight),o.shadowMap.enabled=!0,e.value.appendChild(o.domElement),a=new vS(r,o.domElement),a.target.set(0,i.value/2,0);const h=new Bc;h.add(t,"value",.5,5,.1).name("Door Width"),h.add(i,"value",1,5,.1).name("Door Height");const u=new At(new Yi(1,1,1),new _i({color:30719,metalness:.6,roughness:.2}));u.castShadow=!0,u.position.set(-2,.5,0),s.add(u);const d=new At(new Lc(.5,32,32),new _i({color:16742144,metalness:.6,roughness:.2}));d.castShadow=!0,d.position.set(2,.5,0),s.add(d),l=new vi,s.add(l);function p(){l.clear();const f=.2,A=-(t.value+f)/2,T=new At(new Yi(t.value,i.value,.1),new _i({map:new So().load(SE),metalness:.1,roughness:.8}));T.castShadow=!0,T.position.set(A,i.value/2,-3),l.add(T);const v=new At(new Pc(.03,.03,.2,16),new _i({color:11184810,metalness:.8,roughness:.2}));v.castShadow=!0,v.rotation.z=Math.PI/2,v.position.set(A+t.value/2-.1,i.value/2,-2.94),l.add(v),new zS().load(TE,P=>{const R=P.scene,N=new Nn().setFromObject(R),b=N.getSize(new F),S=N.getCenter(new F),D=t.value/b.x,X=i.value/b.y;R.scale.set(D,X,D);const V=(t.value+f)/2,ee=-S.y*X+i.value/2;R.position.set(V,ee,-3),R.traverse(ne=>{ne.isMesh&&(ne.castShadow=!0)}),l.add(R)},void 0,P=>console.error("Error loading door model:",P))}p(),fo([t,i],p);const g=new Ef(16777215,1);g.position.set(5,10,5),g.castShadow=!0,s.add(g),s.add(new Sx(16777215,.3));const x=new So().load(bE);x.wrapS=Ti,x.wrapT=Ti,x.repeat.set(20,20);const m=new At(new Pr(40,40),new _i({map:x,side:mn}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,s.add(m),window.addEventListener("resize",c),function f(){a.update(),o.render(s,r),requestAnimationFrame(f)}()}),hc(()=>{window.removeEventListener("resize",c),a.dispose(),o.dispose()}),(h,u)=>(Od(),Bd("div",{ref_key:"container",ref:e,class:"container-scene"},null,512))}}),wE={id:"app"},RE={id:"scene"},CE=md({__name:"App",setup(n){return(e,t)=>(Od(),Bd("div",wE,[fc("div",RE,[Mi(AE)])]))}});ag(CE).mount("#app");
