import{b as o,d as E,g as b,n as x,e as D,r as y,t as p,f as T,a as $,i as r,s as U,m as V,F as X,o as Y,j as ee,M as G}from"./chunks/web.0e38cc26.js";import{T as te,t as ne,I as ie,S as se,i as le}from"./chunks/ImageDropZone.b4a97d8d.js";import{I as h}from"./chunks/Icon.ae75124e.js";import{D as oe}from"./chunks/DropButton.dacf531a.js";import{a as H,d as M}from"./chunks/download.75ec1577.js";import{c as ae}from"./chunks/store.39773654.js";import{T as j}from"./chunks/Tooltip.4e14d6c1.js";/* empty css                              */const ce=t=>o(te,{onBeforeEnter:e=>e.style.height="0",onAfterEnter:e=>e.style.height=e.scrollHeight+"px",onEnter:(e,s)=>{e.animate([{opacity:0,height:0},{opacity:1,height:e.scrollHeight+"px"}],{duration:200,easing:"cubic-bezier(0.1, -0.3, 0.2, 0)"}).finished.then(s)},onExit:(e,s)=>{e.animate([{opacity:1,height:e.scrollHeight+"px"},{opacity:0,height:0}],{duration:100,easing:"cubic-bezier(0.1, -0.3, 0.2, 0)"}).finished.then(s)},get children(){return t.children}});var m=(t=>(t.INITIAL="initial",t.PNG="image/png",t.JPEG="image/jpeg",t.WEBP="image/webp",t))(m||{});const re={type:"initial"},[S,w]=ae({images:new Set,settings:re});function ge(t){const e=t.map(s=>({...s,type:S.settings.type}));w("images",new Set([...S.images,...e]))}function ue(t){const e=new Set(S.images);e.delete(t),w("images",e)}function de(){w("images",new Set)}function me(t){w("settings","type",t)}const be=Object.assign({},{state:S,set:ge,remove:ue,reset:de,setType:me});class $e{constructor(e){this.file=e}type=m.INITIAL}const pe=p('<div class="flex gap-1"><button class="btn btn-sm btn-outline" type="button">\u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u044B\u0439</button><button class="btn btn-sm btn-outline" type="button">jpeg</button><button class="btn btn-sm btn-outline" type="button">png</button><button class="btn btn-sm btn-outline" type="button">webp</button></div>'),fe=t=>{function e(c){return c===t.type}function s(c){return()=>t.onChange?.(c)}return(()=>{const c=b(pe),f=c.firstChild,l=f.nextSibling,a=l.nextSibling,n=a.nextSibling;return x(f,"click",s(m.INITIAL),!0),x(l,"click",s(m.JPEG),!0),x(a,"click",s(m.PNG),!0),x(n,"click",s(m.WEBP),!0),D(i=>{const g=!!e(m.INITIAL),u=!!e(m.JPEG),d=!!e(m.PNG),v=!!e(m.WEBP);return g!==i._v$&&f.classList.toggle("btn-active",i._v$=g),u!==i._v$2&&l.classList.toggle("btn-active",i._v$2=u),d!==i._v$3&&a.classList.toggle("btn-active",i._v$3=d),v!==i._v$4&&n.classList.toggle("btn-active",i._v$4=v),i},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),y(),c})()};E(["click"]);const _e=p('<div class="p-1 overflow-hidden"><div class="flex gap-1 items-center w-full"><!#><!/><span class="whitespace-nowrap font-semibold"></span></div></div>'),F=p('<div class="p-1 text-center overflow-hidden"><span class="badge badge-info font-bold"></span></div>'),ve=p('<button class="btn btn-ghost btn-circle btn-sm text-error"></button>'),he=p('<button class="btn btn-ghost btn-circle btn-sm text-success"></button>'),xe=p('<div class="p-1 overflow-hidden"><div class="flex gap-2 justify-center"><!#><!/><!#><!/></div></div>'),ye=t=>{const e=T(()=>t.image.file.type),s=T(()=>t.type===m.INITIAL?e():t.type);function c(){t.onRemove?.(t.image)}async function f(){const l=await H.image(t.image.file,{quality:.9,mimeType:s()});M.file(l)}return[(()=>{const l=b(_e),a=l.firstChild,n=a.firstChild,[i,g]=$(n.nextSibling),u=i.nextSibling;return r(a,o(h,{code:"image",class:"text-success"}),i,g),r(u,()=>ne(t.image.file.name)),D(()=>U(u,"title",t.image.file.name)),l})(),(()=>{const l=b(F),a=l.firstChild;return r(a,e),l})(),(()=>{const l=b(F),a=l.firstChild;return r(a,s),l})(),(()=>{const l=b(xe),a=l.firstChild,n=a.firstChild,[i,g]=$(n.nextSibling),u=i.nextSibling,[d,v]=$(u.nextSibling);return r(a,o(j,{message:"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",placement:"top",get children(){const _=b(ve);return _.$$click=c,r(_,o(h,{code:"backspace"})),y(),_}}),i,g),r(a,o(j,{message:"\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C",placement:"top",get children(){const _=b(he);return _.$$click=f,r(_,o(h,{code:"download"})),y(),_}}),d,v),l})()]};E(["click"]);const Se=p('<section class="convert-table"><div class="p-1 font-black text-center bg-neutral">\u0418\u043C\u044F</div><div class="p-1 font-black text-center bg-neutral">\u0414\u043E</div><div class="p-1 font-black text-center bg-neutral">\u041F\u043E\u0441\u043B\u0435</div><div class="p-1 font-black text-center bg-neutral">\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F</div><!#><!/></section>'),we=t=>(V(()=>{console.log(t)}),(()=>{const e=b(Se),s=e.firstChild,c=s.nextSibling,f=c.nextSibling,l=f.nextSibling,a=l.nextSibling,[n,i]=$(a.nextSibling);return r(e,o(ce,{get children(){return o(X,{get each(){return t.images},children:g=>o(ye,{image:g,get type(){return t.type},get onRemove(){return t.onRemove}})})}}),n,i),e})()),Ie=p("<span>\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0435</span>"),Ce=p('<div><!#><!/><div class="w-full p-3 flex flex-col justify-center items-center gap-4"><!#><!/><button class="btn btn-sm btn-outline btn-success gap-2" type="button"><!#><!/><span>\u0412\u044B\u0433\u0440\u0443\u0437\u0438\u0442\u044C (<!#><!/>)</span></button></div></div>'),Te=p('<div class="flex flex-col gap-4"><!#><!/><!#><!/></div>'),je=t=>{const e=be,s=T(()=>Array.from(e.state.images));Y(()=>{const n=t.type;n&&e.setType(n)});function c(n){const i=le.listToImages(n).map(f);e.set(i)}function f(n){return new $e(n)}function l(n){e.remove(n)}async function a(){const n=s().map(d=>H.image(d.file,{quality:.9,mimeType:e.state.settings.type})),i=await Promise.all(n),g=[],u=new Set;i.forEach(d=>{u.has(d.name)||(u.add(d.name),g.push(d))}),M.zip(g)}return(()=>{const n=b(Te),i=n.firstChild,[g,u]=$(i.nextSibling),d=g.nextSibling,[v,_]=$(d.nextSibling);return r(n,o(fe,{get type(){return e.state.settings.type},get onChange(){return e.setType}}),g,u),r(n,o(se,{mode:"inout",get children(){return o(ee,{get children(){return[o(G,{get when(){return!s().length},get children(){return o(ie,{onDropFiles:c})}}),o(G,{get when(){return s().length},get children(){const I=b(Ce),R=I.firstChild,[k,W]=$(R.nextSibling),L=k.nextSibling,q=L.firstChild,[A,z]=$(q.nextSibling),C=A.nextSibling,J=C.firstChild,[N,O]=$(J.nextSibling),P=N.nextSibling,Z=P.firstChild,K=Z.nextSibling,[B,Q]=$(K.nextSibling);return B.nextSibling,r(I,o(we,{get images(){return s()},get type(){return e.state.settings.type},onRemove:l}),k,W),r(L,o(oe,{class:"btn-sm btn-outline gap-2",type:"button",onDropFiles:c,get children(){return[o(h,{code:"add_photo_alternate"}),b(Ie)]}}),A,z),C.$$click=a,r(C,o(h,{code:"download"}),N,O),r(P,()=>s().length,B,Q),y(),I}})]}})}}),v,_),n})()};E(["click"]);export{je as ImageConverter,we as ImageTable};
