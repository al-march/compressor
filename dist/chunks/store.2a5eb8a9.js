import{$ as l,v as P,w as $,m as N,e as R}from"./web.d6ba0b6f.js";const b=Symbol("store-raw"),a=Symbol("store-node"),K=Symbol("store-name");function j(e,n){let o=e[l];if(!o&&(Object.defineProperty(e,l,{value:o=new Proxy(e,E)}),!Array.isArray(e))){const t=Object.keys(e),f=Object.getOwnPropertyDescriptors(e);for(let r=0,i=t.length;r<i;r++){const s=t[r];if(f[s].get){const c=f[s].get.bind(o);Object.defineProperty(e,s,{enumerable:f[s].enumerable,get:c})}}}return o}function y(e){let n;return e!=null&&typeof e=="object"&&(e[l]||!(n=Object.getPrototypeOf(e))||n===Object.prototype||Array.isArray(e))}function d(e,n=new Set){let o,t,f,r;if(o=e!=null&&e[b])return o;if(!y(e)||n.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):n.add(e);for(let i=0,s=e.length;i<s;i++)f=e[i],(t=d(f,n))!==f&&(e[i]=t)}else{Object.isFrozen(e)?e=Object.assign({},e):n.add(e);const i=Object.keys(e),s=Object.getOwnPropertyDescriptors(e);for(let c=0,A=i.length;c<A;c++)r=i[c],!s[r].get&&(f=e[r],(t=d(f,n))!==f&&(e[r]=t))}return e}function h(e){let n=e[a];return n||Object.defineProperty(e,a,{value:n={}}),n}function w(e,n,o){return e[n]||(e[n]=_(o))}function T(e,n){const o=Reflect.getOwnPropertyDescriptor(e,n);return!o||o.get||!o.configurable||n===l||n===a||n===K||(delete o.value,delete o.writable,o.get=()=>e[l][n]),o}function S(e){if($()){const n=h(e);(n._||(n._=_()))()}}function z(e){return S(e),Reflect.ownKeys(e)}function _(e){const[n,o]=R(e,{equals:!1,internal:!0});return n.$=o,n}const E={get(e,n,o){if(n===b)return e;if(n===l)return o;if(n===P)return S(e),o;const t=h(e),f=t.hasOwnProperty(n);let r=f?t[n]():e[n];if(n===a||n==="__proto__")return r;if(!f){const i=Object.getOwnPropertyDescriptor(e,n);$()&&(typeof r!="function"||e.hasOwnProperty(n))&&!(i&&i.get)&&(r=w(t,n,r)())}return y(r)?j(r):r},has(e,n){return n===b||n===l||n===P||n===a||n==="__proto__"?!0:(this.get(e,n,e),n in e)},set(){return!0},deleteProperty(){return!0},ownKeys:z,getOwnPropertyDescriptor:T};function g(e,n,o,t=!1){if(!t&&e[n]===o)return;const f=e[n],r=e.length;o===void 0?delete e[n]:e[n]=o;let i=h(e),s;(s=w(i,n,f))&&s.$(()=>o),Array.isArray(e)&&e.length!==r&&(s=w(i,"length",r))&&s.$(e.length),(s=i._)&&s.$()}function D(e,n){const o=Object.keys(n);for(let t=0;t<o.length;t+=1){const f=o[t];g(e,f,n[f])}}function F(e,n){if(typeof n=="function"&&(n=n(e)),n=d(n),Array.isArray(n)){if(e===n)return;let o=0,t=n.length;for(;o<t;o++){const f=n[o];e[o]!==f&&g(e,o,f)}g(e,"length",t)}else D(e,n)}function u(e,n,o=[]){let t,f=e;if(n.length>1){t=n.shift();const i=typeof t,s=Array.isArray(e);if(Array.isArray(t)){for(let c=0;c<t.length;c++)u(e,[t[c]].concat(n),o);return}else if(s&&i==="function"){for(let c=0;c<e.length;c++)t(e[c],c)&&u(e,[c].concat(n),o);return}else if(s&&i==="object"){const{from:c=0,to:A=e.length-1,by:k=1}=t;for(let O=c;O<=A;O+=k)u(e,[O].concat(n),o);return}else if(n.length>1){u(e[t],n,[t].concat(o));return}f=e[t],o=[t].concat(o)}let r=n[0];typeof r=="function"&&(r=r(f,o),r===f)||t===void 0&&r==null||(r=d(r),t===void 0||y(f)&&y(r)&&!Array.isArray(r)?D(f,r):g(e,t,r))}function q(...[e,n]){const o=d(e||{}),t=Array.isArray(o),f=j(o);function r(...i){N(()=>{t&&i.length===1?F(o,i[0]):u(o,i)})}return[f,r]}export{q as c};