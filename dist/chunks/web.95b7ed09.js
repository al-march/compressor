const a={};function K(e){a.context=e}function Ae(){return{...a.context,id:`${a.context.id}${a.context.count++}-`,count:0}}const Se=(e,t)=>e===t,Q=Symbol("solid-proxy"),Ee=Symbol("solid-track"),B={equals:Se};let oe=ae;const p=1,_=2,fe={owned:null,cleanups:null,context:null,owner:null};var y=null;let N=null,d=null,g=null,E=null,J=0;function q(e,t){const n=d,s=y,i=e.length===0,r=i?fe:{owned:null,cleanups:null,context:null,owner:t||s},o=i?e:()=>e(()=>A(()=>Z(r)));y=r,d=null;try{return M(o,!0)}finally{d=n,y=s}}function G(e,t){t=t?Object.assign({},B,t):B;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),ue(n,i));return[ce.bind(n),s]}function Ze(e,t,n){const s=V(e,t,!0,p);O(s)}function $(e,t,n){const s=V(e,t,!1,p);O(s)}function pe(e,t,n){oe=Pe;const s=V(e,t,!1,p),i=z&&ye(y,z.id);i&&(s.suspense=i),s.user=!0,E?E.push(s):O(s)}function C(e,t,n){n=n?Object.assign({},B,n):B;const s=V(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,O(s),ce.bind(s)}function ze(e){return M(e,!1)}function A(e){const t=d;d=null;try{return e()}finally{d=t}}function et(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let c=0;c<e.length;c++)l[c]=e[c]()}else l=e();if(r){r=!1;return}const u=A(()=>t(l,i,o));return i=l,u}}function tt(e){pe(()=>A(e))}function R(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function nt(){return d}function Ce(e){const t=C(e),n=C(()=>Y(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let z;function ce(){const e=N;if(this.sources&&(this.state||e))if(this.state===p||e)O(this);else{const t=g;g=null,M(()=>U(this),!1),g=t}if(d){const t=this.observers?this.observers.length:0;d.sources?(d.sources.push(this),d.sourceSlots.push(t)):(d.sources=[this],d.sourceSlots=[t]),this.observers?(this.observers.push(d),this.observerSlots.push(d.sources.length-1)):(this.observers=[d],this.observerSlots=[d.sources.length-1])}return this.value}function ue(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=N&&N.running;o&&N.disposed.has(r),(o&&!r.tState||!o&&!r.state)&&(r.pure?g.push(r):E.push(r),r.observers&&de(r)),o||(r.state=p)}if(g.length>1e6)throw g=[],new Error},!1)),t}function O(e){if(!e.fn)return;Z(e);const t=y,n=d,s=J;d=y=e,ke(e,e.value,s),d=n,y=t}function ke(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=p),he(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ue(e,s):e.value=s,e.updatedAt=n)}function V(e,t,n,s=p,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:null,pure:n};return y===null||y!==fe&&(y.owned?y.owned.push(r):y.owned=[r]),r}function v(e){const t=N;if(e.state===0||t)return;if(e.state===_||t)return U(e);if(e.suspense&&A(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===p||t)O(e);else if(e.state===_||t){const i=g;g=null,M(()=>U(e,n[0]),!1),g=i}}function M(e,t){if(g)return e();let n=!1;t||(g=[]),E?n=!0:E=[],J++;try{const s=e();return Ne(n),s}catch(s){g||(E=null),he(s)}}function Ne(e){if(g&&(ae(g),g=null),e)return;const t=E;E=null,t.length&&M(()=>oe(t),!1)}function ae(e){for(let t=0;t<e.length;t++)v(e[t])}function Pe(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:v(s)}for(a.context&&K(),t=0;t<n;t++)v(e[t])}function U(e,t){const n=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===p||n?i!==t&&v(i):(i.state===_||n)&&U(i,t))}}function de(e){const t=N;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=_,s.pure?g.push(s):E.push(s),s.observers&&de(s))}}function Z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)Z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Te(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function he(e){throw e=Te(e),e}function ye(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ye(e.owner,t):void 0}function Y(e){if(typeof e=="function"&&!e.length)return Y(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=Y(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}const $e=Symbol("fallback");function ee(e){for(let t=0;t<e.length;t++)e[t]()}function Le(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return R(()=>ee(r)),()=>{let u=e()||[],c,f;return u[Ee],A(()=>{let h=u.length,m,k,j,H,D,b,x,S,P;if(h===0)o!==0&&(ee(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[$e],i[0]=q(xe=>(r[0]=xe,n.fallback())),o=1);else if(o===0){for(i=new Array(h),f=0;f<h;f++)s[f]=u[f],i[f]=q(w);o=h}else{for(j=new Array(h),H=new Array(h),l&&(D=new Array(h)),b=0,x=Math.min(o,h);b<x&&s[b]===u[b];b++);for(x=o-1,S=h-1;x>=b&&S>=b&&s[x]===u[S];x--,S--)j[S]=i[x],H[S]=r[x],l&&(D[S]=l[x]);for(m=new Map,k=new Array(S+1),f=S;f>=b;f--)P=u[f],c=m.get(P),k[f]=c===void 0?-1:c,m.set(P,f);for(c=b;c<=x;c++)P=s[c],f=m.get(P),f!==void 0&&f!==-1?(j[f]=i[c],H[f]=r[c],l&&(D[f]=l[c]),f=k[f],m.set(P,f)):r[c]();for(f=b;f<h;f++)f in j?(i[f]=j[f],r[f]=H[f],l&&(l[f]=D[f],l[f](f))):i[f]=q(w);i=i.slice(0,o=h),s=u.slice(0)}return i});function w(h){if(r[f]=h,l){const[m,k]=G(f);return l[f]=k,t(u[f],m)}return t(u[f])}}}let ge=!1;function Oe(){ge=!0}function st(e,t){if(ge&&a.context){const n=a.context;K(Ae());const s=A(()=>e(t||{}));return K(n),s}return A(()=>e(t||{}))}function I(){return!0}const we={get(e,t,n){return t===Q?n:e.get(t)},has(e,t){return e.has(t)},set:I,deleteProperty:I,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:I,deleteProperty:I}},ownKeys(e){return e.keys()}};function F(e){return(e=typeof e=="function"?e():e)?e:{}}function it(...e){let t=!1;for(let s=0;s<e.length;s++){const i=e[s];t||=!!i&&Q in i,e[s]=typeof i=="function"?(t=!0,C(i)):i}if(t)return new Proxy({get(s){for(let i=e.length-1;i>=0;i--){const r=F(e[i])[s];if(r!==void 0)return r}},has(s){for(let i=e.length-1;i>=0;i--)if(s in F(e[i]))return!0;return!1},keys(){const s=[];for(let i=0;i<e.length;i++)s.push(...Object.keys(F(e[i])));return[...new Set(s)]}},we);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const i=Object.getOwnPropertyDescriptors(e[s]);for(const r in i)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[r];if(l!==void 0)return l}}})}return n}function rt(e,...t){const n=new Set(t.flat()),s=Object.getOwnPropertyDescriptors(e),i=Q in e;i||t.push(Object.keys(s).filter(o=>!n.has(o)));const r=t.map(o=>{const l={};for(let u=0;u<o.length;u++){const c=o[u];!i&&!(c in e)||Object.defineProperty(l,c,s[c]?s[c]:{get(){return e[c]},set(){return!0},enumerable:!0})}return l});return i&&r.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},we)),r}function lt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return C(Le(()=>e.each,e.children,t||void 0))}function ot(e){let t=!1;const n=e.keyed,s=C(()=>e.when,void 0,{equals:(i,r)=>t?i===r:!i==!r});return C(()=>{const i=s();if(i){const r=e.children,o=typeof r=="function"&&r.length>0;return t=n||o,o?A(()=>r(i)):r}return e.fallback},void 0,void 0)}function ft(e){let t=!1,n=!1;const s=(o,l)=>o[0]===l[0]&&(t?o[1]===l[1]:!o[1]==!l[1])&&o[2]===l[2],i=Ce(()=>e.children),r=C(()=>{let o=i();Array.isArray(o)||(o=[o]);for(let l=0;l<o.length;l++){const u=o[l].when;if(u)return n=!!o[l].keyed,[l,u,o[l]]}return[-1]},void 0,{equals:s});return C(()=>{const[o,l,u]=r();if(o<0)return e.fallback;const c=u.children,f=typeof c=="function"&&c.length>0;return t=n||f,f?A(()=>c(l)):c},void 0,void 0)}function ct(e){return e}const Me=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],je=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Me]),qe=new Set(["innerHTML","textContent","innerText","children"]),He=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),te=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),De=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ie={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Be(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,u=t[i-1].nextSibling,c=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:u;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!c||!c.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!c){c=new Map;let w=l;for(;w<r;)c.set(n[w],w++)}const f=c.get(t[o]);if(f!=null)if(l<f&&f<r){let w=o,h=1,m;for(;++w<i&&w<r&&!((m=c.get(t[w]))==null||m!==f+h);)h++;if(h>f-l){const k=t[o];for(;l<f;)e.insertBefore(n[l++],k)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const ne="_$DX_DELEGATE";function _e(e,t,n,s={}){let i;return q(r=>{i=r,t===document?e():X(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ut(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ve(e,t=window.document){const n=t[ne]||(t[ne]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,be))}}function me(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Ue(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function Ve(e,t){t==null?e.removeAttribute("class"):e.className=t}function Fe(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function Ke(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(se(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],u=!!t[l];!l||l==="undefined"||n[l]===u||!u||(se(e,l,!0),n[l]=u)}return n}function Ge(e,t,n){if(!t)return n?me(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function at(e,t={},n,s){const i={};return s||$(()=>i.children=L(e,t.children,i.children)),$(()=>t.ref&&t.ref(e)),$(()=>Re(e,t,n,!0,i,!0)),i}function dt(e,t,n){return A(()=>e(t,n))}function X(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return L(e,t,s,n);$(i=>L(e,t(),i,n),s)}function Re(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=ie(e,o,null,i[o],n,r)}for(const o in t){if(o==="children"){s||L(e,t.children);continue}const l=t[o];i[o]=ie(e,o,l,i[o],n,r)}}function Ye(e,t,n={}){a.completed=globalThis._$HY.completed,a.events=globalThis._$HY.events,a.load=globalThis._$HY.load,a.gather=i=>le(t,i),a.registry=new Map,a.context={id:n.renderId||"",count:0},le(t,n.renderId);const s=_e(e,t,[...t.childNodes],n);return a.context=null,s}function ht(e){let t,n;return!a.context||!(t=a.registry.get(n=We()))?e.cloneNode(!0):(a.completed&&a.completed.add(t),a.registry.delete(n),t)}function yt(e){let t=e,n=0,s=[];if(a.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function gt(){a.events&&!a.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=a;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;be(s),t.shift()}}),a.events.queued=!0)}function Xe(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function se(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function ie(e,t,n,s,i,r){let o,l,u;if(t==="style")return Ge(e,n,s);if(t==="classList")return Ke(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const c=t.slice(3);s&&e.removeEventListener(c,s),n&&e.addEventListener(c,n)}else if(t.slice(0,10)==="oncapture:"){const c=t.slice(10);s&&e.removeEventListener(c,s,!0),n&&e.addEventListener(c,n,!0)}else if(t.slice(0,2)==="on"){const c=t.slice(2).toLowerCase(),f=De.has(c);if(!f&&s){const w=Array.isArray(s)?s[0]:s;e.removeEventListener(c,w)}(f||n)&&(Fe(e,c,n,f),f&&ve([c]))}else if((u=qe.has(t))||!i&&(te[t]||(l=je.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?Ve(e,n):o&&!l&&!u?e[Xe(t)]=n:e[te[t]||t]=n;else{const c=i&&t.indexOf(":")>-1&&Ie[t.split(":")[0]];c?Ue(e,c,t,n):me(e,He[t]||t,n)}return n}function be(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),a.registry&&!a.done&&(a.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function L(e,t,n,s,i){for(a.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(a.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=T(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(a.context)return n;n=T(e,n,s)}else{if(r==="function")return $(()=>{let l=t();for(;typeof l=="function";)l=l();n=L(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],u=n&&Array.isArray(n);if(W(l,t,n,i))return $(()=>n=L(e,l,n,s,!0)),()=>n;if(a.context){if(!l.length)return n;for(let c=0;c<l.length;c++)if(l[c].parentNode)return n=l}if(l.length===0){if(n=T(e,n,s),o)return n}else u?n.length===0?re(e,l,s):Be(e,n,l):(n&&T(e),re(e,l));n=l}else if(t instanceof Node){if(a.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=T(e,n,s,t);T(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function W(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],u=n&&n[r];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=W(e,l,u)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=W(e,Array.isArray(l)?l:[l],Array.isArray(u)?u:[u])||i}else e.push(l),i=!0;else{const c=String(l);u&&u.nodeType===3&&u.data===c?e.push(u):e.push(document.createTextNode(c))}}return i}function re(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function T(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const u=l.parentNode===e;!r&&!o?u?e.replaceChild(i,l):e.insertBefore(i,n):u&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function le(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!a.registry.has(r)&&a.registry.set(r,i)}}function We(){const e=a.context;return`${e.id}${e.count++}`}const Qe="http://www.w3.org/2000/svg";function Je(e,t=!1){return t?document.createElementNS(Qe,e):document.createElement(e)}const wt=(...e)=>(Oe(),Ye(...e));function mt(e){const{useShadow:t}=e,n=document.createTextNode(""),s=e.mount||document.body;function i(){if(a.context){const[r,o]=G(!1);return queueMicrotask(()=>o(!0)),()=>r()&&e.children}else return()=>e.children}if(s instanceof HTMLHeadElement){const[r,o]=G(!1),l=()=>o(!0);q(u=>X(s,()=>r()?u():i()(),null)),R(()=>{a.context?queueMicrotask(l):l()})}else{const r=Je(e.isSVG?"g":"div",e.isSVG),o=t&&r.attachShadow?r.attachShadow({mode:"open"}):r;Object.defineProperty(r,"_$host",{get(){return n.parentNode},configurable:!0}),X(o,i()),s.appendChild(r),e.ref&&e.ref(r),R(()=>s.removeChild(r))}return n}export{Q as $,Ee as A,nt as B,Ve as C,a as D,_e as E,lt as F,wt as G,ct as M,mt as P,ot as S,st as a,yt as b,G as c,$ as d,Ke as e,Ce as f,ht as g,C as h,X as i,Ze as j,pe as k,A as l,ze as m,ve as n,tt as o,rt as p,at as q,gt as r,me as s,ut as t,dt as u,it as v,ft as w,R as x,Fe as y,et as z};