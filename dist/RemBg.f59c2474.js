import{n as D,c as o,a as n,g as s,i as c,w as L,M as p,b as N,r as T,d as w,s as b,t as i}from"./chunks/web.95b7ed09.js";import{c as H,S as M,L as R,a as P,I as j,H as A,C as h,i as O}from"./chunks/MouseParalax.46d5bc86.js";import{T as U}from"./chunks/Tooltip.28bd055b.js";import{d as Z}from"./chunks/download.b779b8e7.js";/* empty css                              */const q=async l=>{const m=new FormData;m.set("file",l);const u=await(await fetch(`${window.backendUrl}/api/v1/rembg`,{method:"POST",body:m})).blob();return new File([u],l.name)},z=i('<div class="p-8 w-full flex justify-center"></div>'),G=i('<button class="btn btn-sm btn-ghost btn-circle"></button>'),J=i('<div class="mx-auto w-full rounded overflow-hidden"><header class="mb-6"></header><!#><!/></div>'),K=i('<div class="w-full"></div>'),$=i("<img>"),ee=()=>{const[l,m]=o(),[d,u]=o(),[g,S]=o(),[_,v]=o(),[I,f]=o(!1);async function x(t){const[e]=t;e&&(f(!0),m(e),u(await h.createSrc(e)),await y(e),f(!1))}async function y(t){const e=await q(t),r=await h.createSrc(e);S(e),v(r)}function C(){const t=new File([g()||""],k());t&&Z.file(t)}function k(){const e=l()?.name;if(e){const{name:r}=O.sliceExt(e);return`${r}.png`}return"output.png"}return n(A,{get children(){return[n(H,{onDropFiles:x}),(()=>{const t=s(K);return c(t,n(M,{get children(){return n(L,{get children(){return[n(p,{get when(){return I()},get children(){const e=s(z);return c(e,n(R,{})),e}}),n(p,{get when(){return g()},get children(){const e=s(J),r=e.firstChild,B=r.nextSibling,[E,F]=N(B.nextSibling);return c(r,n(U,{message:"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C",get children(){const a=s(G);return a.$$click=C,c(a,n(P,{code:"download"})),T(),a}})),c(e,n(j,{class:"rounded",withLabels:!0,get before(){return(()=>{const a=s($);return w(()=>b(a,"src",d())),a})()},get after(){return(()=>{const a=s($);return w(()=>b(a,"src",_())),a})()}}),E,F),e}})]}})}})),t})()]}})};D(["click"]);export{ee as RemBg};
