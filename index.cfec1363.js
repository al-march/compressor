import{b as l,d as T,g as m,n as x,e as F,r as y,t as $,f as C,a as b,i as c,s as U,m as D,F as V,j as X,M as B}from"./chunks/web.fe524d5d.js";import"./chunks/ImageCompareSlider.8aa9261a.js";import{c as Y,I as h}from"./chunks/Icon.27390969.js";import{T as ee,S as te,i as ne}from"./chunks/Scale.c4673c7e.js";import{D as ie}from"./chunks/DropButton.a7d9a9ab.js";import{C as se}from"./chunks/CompressDropZone.11899b10.js";import{a as H,d as R}from"./chunks/download.d3c04f97.js";import{T as G}from"./chunks/Tooltip.e39dc9f4.js";import{t as le}from"./chunks/utils.85802971.js";/* empty css                              */const oe=e=>l(ee,{onBeforeEnter:t=>t.style.height="0",onAfterEnter:t=>t.style.height=t.scrollHeight+"px",onEnter:(t,o)=>{t.animate([{opacity:0,height:0},{opacity:1,height:t.scrollHeight+"px"}],{duration:200,easing:"cubic-bezier(0.1, -0.3, 0.2, 0)"}).finished.then(o)},onExit:(t,o)=>{t.animate([{opacity:1,height:t.scrollHeight+"px"},{opacity:0,height:0}],{duration:100,easing:"cubic-bezier(0.1, -0.3, 0.2, 0)"}).finished.then(o)},get children(){return e.children}});var u=(e=>(e.INITIAL="initial",e.PNG="image/png",e.JPEG="image/jpeg",e.WEBP="image/webp",e))(u||{});const ce={type:"initial"},[S,w]=Y({images:new Set,settings:ce});function ae(e){const t=e.map(o=>({...o,type:S.settings.type}));w("images",new Set([...S.images,...t]))}function re(e){const t=new Set(S.images);t.delete(e),w("images",t)}function ge(){w("images",new Set)}function ue(e){w("settings","type",e)}const me=Object.assign({},{state:S,set:ae,remove:re,reset:ge,setType:ue});class de{constructor(t){this.file=t}type=u.INITIAL}const be=$('<div class="flex gap-1"><button class="btn btn-sm btn-outline" type="button">\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439</button><button class="btn btn-sm btn-outline" type="button">jpeg</button><button class="btn btn-sm btn-outline" type="button">png</button><button class="btn btn-sm btn-outline" type="button">webp</button></div>'),$e=e=>{function t(a){return a===e.type}function o(a){return()=>e.onChange?.(a)}return(()=>{const a=m(be),p=a.firstChild,s=p.nextSibling,n=s.nextSibling,r=n.nextSibling;return x(p,"click",o(u.INITIAL),!0),x(s,"click",o(u.JPEG),!0),x(n,"click",o(u.PNG),!0),x(r,"click",o(u.WEBP),!0),F(i=>{const d=!!t(u.INITIAL),f=!!t(u.JPEG),_=!!t(u.PNG),v=!!t(u.WEBP);return d!==i._v$&&p.classList.toggle("btn-active",i._v$=d),f!==i._v$2&&s.classList.toggle("btn-active",i._v$2=f),_!==i._v$3&&n.classList.toggle("btn-active",i._v$3=_),v!==i._v$4&&r.classList.toggle("btn-active",i._v$4=v),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),y(),a})()};T(["click"]);const pe=$('<div class="p-1 overflow-hidden"><div class="flex gap-1 items-center w-full"><!#><!/><span class="whitespace-nowrap font-semibold"></span></div></div>'),j=$('<div class="p-1 text-center overflow-hidden"><span class="badge badge-info font-bold"></span></div>'),fe=$('<button class="btn btn-ghost btn-circle btn-sm text-error"></button>'),_e=$('<button class="btn btn-ghost btn-circle btn-sm text-success"></button>'),ve=$('<div class="p-1 overflow-hidden"><div class="flex gap-2 justify-center"><!#><!/><!#><!/></div></div>'),he=e=>{const t=C(()=>e.image.file.type),o=C(()=>e.type===u.INITIAL?t():e.type);function a(){e.onRemove?.(e.image)}async function p(){const s=await H.image(e.image.file,{quality:.9,mimeType:o()});R.file(s)}return[(()=>{const s=m(pe),n=s.firstChild,r=n.firstChild,[i,d]=b(r.nextSibling),f=i.nextSibling;return c(n,l(h,{code:"image",class:"text-success"}),i,d),c(f,()=>le(e.image.file.name)),F(()=>U(f,"title",e.image.file.name)),s})(),(()=>{const s=m(j),n=s.firstChild;return c(n,t),s})(),(()=>{const s=m(j),n=s.firstChild;return c(n,o),s})(),(()=>{const s=m(ve),n=s.firstChild,r=n.firstChild,[i,d]=b(r.nextSibling),f=i.nextSibling,[_,v]=b(f.nextSibling);return c(n,l(G,{message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",placement:"top",get children(){const g=m(fe);return g.$$click=a,c(g,l(h,{code:"backspace"})),y(),g}}),i,d),c(n,l(G,{message:"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C",placement:"top",get children(){const g=m(_e);return g.$$click=p,c(g,l(h,{code:"download"})),y(),g}}),_,v),s})()]};T(["click"]);const xe=$('<section class="convert-table"><div class="p-1 font-black text-center bg-neutral">\u0418\u043C\u044F</div><div class="p-1 font-black text-center bg-neutral">\u0414\u043E</div><div class="p-1 font-black text-center bg-neutral">\u041F\u043E\u0441\u043B\u0435</div><div class="p-1 font-black text-center bg-neutral">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</div><!#><!/></section>'),ye=e=>(D(()=>{console.log(e)}),(()=>{const t=m(xe),o=t.firstChild,a=o.nextSibling,p=a.nextSibling,s=p.nextSibling,n=s.nextSibling,[r,i]=b(n.nextSibling);return c(t,l(oe,{get children(){return l(V,{get each(){return e.images},children:d=>l(he,{image:d,get type(){return e.type},get onRemove(){return e.onRemove}})})}}),r,i),t})()),Se=$("<span>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435</span>"),we=$('<div><!#><!/><div class="w-full p-3 flex flex-col justify-center items-center gap-4"><!#><!/><button class="btn btn-sm btn-outline btn-success gap-2" type="button"><!#><!/><span>\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C (<!#><!/>)</span></button></div></div>'),Ie=$('<div class="flex flex-col gap-4"><!#><!/><!#><!/></div>'),je=()=>{const e=me,t=C(()=>Array.from(e.state.images));D(()=>{console.log(e.state)});function o(n){const r=ne.listToImages(n).map(a);e.set(r)}function a(n){return new de(n)}function p(n){e.remove(n)}async function s(){const n=t().map(i=>H.image(i.file,{quality:.9,mimeType:e.state.settings.type})),r=await Promise.all(n);R.zip(r)}return(()=>{const n=m(Ie),r=n.firstChild,[i,d]=b(r.nextSibling),f=i.nextSibling,[_,v]=b(f.nextSibling);return c(n,l($e,{get type(){return e.state.settings.type},get onChange(){return e.setType}}),i,d),c(n,l(te,{mode:"inout",get children(){return l(X,{get children(){return[l(B,{get when(){return!t().length},get children(){return l(se,{onDropFiles:o})}}),l(B,{get when(){return t().length},get children(){const g=m(we),M=g.firstChild,[k,W]=b(M.nextSibling),E=k.nextSibling,z=E.firstChild,[L,J]=b(z.nextSibling),I=L.nextSibling,q=I.firstChild,[A,O]=b(q.nextSibling),N=A.nextSibling,Z=N.firstChild,K=Z.nextSibling,[P,Q]=b(K.nextSibling);return P.nextSibling,c(g,l(ye,{get images(){return t()},get type(){return e.state.settings.type},onRemove:p}),k,W),c(E,l(ie,{class:"btn-sm btn-outline gap-2",type:"button",onDropFiles:o,get children(){return[l(h,{code:"add_photo_alternate"}),m(Se)]}}),L,J),I.$$click=s,c(I,l(h,{code:"download"}),A,O),c(N,()=>t().length,P,Q),y(),g}})]}})}}),_,v),n})()};T(["click"]);export{je as ImageConverter,ye as ImageTable};
