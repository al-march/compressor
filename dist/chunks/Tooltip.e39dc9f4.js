import{c as me,l as wt,g as Pe,x as ze,i as De,e as bt,k as xt,b as q,P as Ot,S as Ue,j as Et,M as Ge,t as je}from"./web.fe524d5d.js";import{a as At}from"./Scale.c4673c7e.js";var j="top",T="bottom",L="right",C="left",Ce="auto",ce=[j,T,L,C],Z="start",se="end",Pt="clippingParents",at="viewport",ae="popper",Dt="reference",Je=ce.reduce(function(e,t){return e.concat([t+"-"+Z,t+"-"+se])},[]),ot=[].concat(ce,[Ce]).reduce(function(e,t){return e.concat([t,t+"-"+Z,t+"-"+se])},[]),$t="beforeRead",Rt="read",jt="afterRead",Ct="beforeMain",Bt="main",St="afterMain",Tt="beforeWrite",Lt="write",kt="afterWrite",Mt=[$t,Rt,jt,Ct,Bt,St,Tt,Lt,kt];function V(e){return e?(e.nodeName||"").toLowerCase():null}function k(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function K(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function S(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Be(e){if(typeof ShadowRoot>"u")return!1;var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Wt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!S(o)||!V(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(c){var s=a[c];s===!1?o.removeAttribute(c):o.setAttribute(c,s===!0?"":s)}))})}function Ht(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=c.reduce(function(i,p){return i[p]="",i},{});!S(a)||!V(a)||(Object.assign(a.style,s),Object.keys(o).forEach(function(i){a.removeAttribute(i)}))})}}const Vt={name:"applyStyles",enabled:!0,phase:"write",fn:Wt,effect:Ht,requires:["computeStyles"]};function H(e){return e.split("-")[0]}var J=Math.max,we=Math.min,_=Math.round;function $e(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function it(){return!/^((?!chrome|android).)*safari/i.test($e())}function ee(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&S(e)&&(a=e.offsetWidth>0&&_(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&_(n.height)/e.offsetHeight||1);var c=K(e)?k(e):window,s=c.visualViewport,i=!it()&&r,p=(n.left+(i&&s?s.offsetLeft:0))/a,f=(n.top+(i&&s?s.offsetTop:0))/o,m=n.width/a,g=n.height/o;return{width:m,height:g,top:f,right:p+m,bottom:f+g,left:p,x:p,y:f}}function Se(e){var t=ee(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function st(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Be(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function N(e){return k(e).getComputedStyle(e)}function Nt(e){return["table","td","th"].indexOf(V(e))>=0}function I(e){return((K(e)?e.ownerDocument:e.document)||window.document).documentElement}function be(e){return V(e)==="html"?e:e.assignedSlot||e.parentNode||(Be(e)?e.host:null)||I(e)}function Ke(e){return!S(e)||N(e).position==="fixed"?null:e.offsetParent}function Ft(e){var t=/firefox/i.test($e()),r=/Trident/i.test($e());if(r&&S(e)){var n=N(e);if(n.position==="fixed")return null}var a=be(e);for(Be(a)&&(a=a.host);S(a)&&["html","body"].indexOf(V(a))<0;){var o=N(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pe(e){for(var t=k(e),r=Ke(e);r&&Nt(r)&&N(r).position==="static";)r=Ke(r);return r&&(V(r)==="html"||V(r)==="body"&&N(r).position==="static")?t:r||Ft(e)||t}function Te(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function oe(e,t,r){return J(e,we(t,r))}function qt(e,t,r){var n=oe(e,t,r);return n>r?r:n}function ft(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},ft(),e)}function pt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var It=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:pt(t,ce))};function Xt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,c=r.modifiersData.popperOffsets,s=H(r.placement),i=Te(s),p=[C,L].indexOf(s)>=0,f=p?"height":"width";if(!(!o||!c)){var m=It(a.padding,r),g=Se(o),l=i==="y"?j:C,v=i==="y"?T:L,u=r.rects.reference[f]+r.rects.reference[i]-c[i]-r.rects.popper[f],d=c[i]-r.rects.reference[i],b=pe(o),O=b?i==="y"?b.clientHeight||0:b.clientWidth||0:0,E=u/2-d/2,h=m[l],y=O-g[f]-m[v],w=O/2-g[f]/2+E,x=oe(h,w,y),D=i;r.modifiersData[n]=(t={},t[D]=x,t.centerOffset=x-w,t)}}function Yt(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||!st(t.elements.popper,a)||(t.elements.arrow=a))}const zt={name:"arrow",enabled:!0,phase:"main",fn:Xt,effect:Yt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function te(e){return e.split("-")[1]}var Ut={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gt(e){var t=e.x,r=e.y,n=window,a=n.devicePixelRatio||1;return{x:_(t*a)/a||0,y:_(r*a)/a||0}}function Qe(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,c=e.offsets,s=e.position,i=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,m=e.isFixed,g=c.x,l=g===void 0?0:g,v=c.y,u=v===void 0?0:v,d=typeof f=="function"?f({x:l,y:u}):{x:l,y:u};l=d.x,u=d.y;var b=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),E=C,h=j,y=window;if(p){var w=pe(r),x="clientHeight",D="clientWidth";if(w===k(r)&&(w=I(r),N(w).position!=="static"&&s==="absolute"&&(x="scrollHeight",D="scrollWidth")),w=w,a===j||(a===C||a===L)&&o===se){h=T;var P=m&&w===y&&y.visualViewport?y.visualViewport.height:w[x];u-=P-n.height,u*=i?1:-1}if(a===C||(a===j||a===T)&&o===se){E=L;var A=m&&w===y&&y.visualViewport?y.visualViewport.width:w[D];l-=A-n.width,l*=i?1:-1}}var $=Object.assign({position:s},p&&Ut),M=f===!0?Gt({x:l,y:u}):{x:l,y:u};if(l=M.x,u=M.y,i){var R;return Object.assign({},$,(R={},R[h]=O?"0":"",R[E]=b?"0":"",R.transform=(y.devicePixelRatio||1)<=1?"translate("+l+"px, "+u+"px)":"translate3d("+l+"px, "+u+"px, 0)",R))}return Object.assign({},$,(t={},t[h]=O?u+"px":"",t[E]=b?l+"px":"",t.transform="",t))}function Jt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,c=o===void 0?!0:o,s=r.roundOffsets,i=s===void 0?!0:s,p={placement:H(t.placement),variation:te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Qe(Object.assign({},p,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:i})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Qe(Object.assign({},p,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Kt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Jt,data:{}};var ge={passive:!0};function Qt(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,c=n.resize,s=c===void 0?!0:c,i=k(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&p.forEach(function(f){f.addEventListener("scroll",r.update,ge)}),s&&i.addEventListener("resize",r.update,ge),function(){o&&p.forEach(function(f){f.removeEventListener("scroll",r.update,ge)}),s&&i.removeEventListener("resize",r.update,ge)}}const Zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Qt,data:{}};var _t={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,function(t){return _t[t]})}var er={start:"end",end:"start"};function Ze(e){return e.replace(/start|end/g,function(t){return er[t]})}function Le(e){var t=k(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function ke(e){return ee(I(e)).left+Le(e).scrollLeft}function tr(e,t){var r=k(e),n=I(e),a=r.visualViewport,o=n.clientWidth,c=n.clientHeight,s=0,i=0;if(a){o=a.width,c=a.height;var p=it();(p||!p&&t==="fixed")&&(s=a.offsetLeft,i=a.offsetTop)}return{width:o,height:c,x:s+ke(e),y:i}}function rr(e){var t,r=I(e),n=Le(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=J(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),c=J(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-n.scrollLeft+ke(e),i=-n.scrollTop;return N(a||r).direction==="rtl"&&(s+=J(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:c,x:s,y:i}}function Me(e){var t=N(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function ut(e){return["html","body","#document"].indexOf(V(e))>=0?e.ownerDocument.body:S(e)&&Me(e)?e:ut(be(e))}function ie(e,t){var r;t===void 0&&(t=[]);var n=ut(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=k(n),c=a?[o].concat(o.visualViewport||[],Me(n)?n:[]):n,s=t.concat(c);return a?s:s.concat(ie(be(c)))}function Re(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function nr(e,t){var r=ee(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function _e(e,t,r){return t===at?Re(tr(e,r)):K(t)?nr(t,r):Re(rr(I(e)))}function ar(e){var t=ie(be(e)),r=["absolute","fixed"].indexOf(N(e).position)>=0,n=r&&S(e)?pe(e):e;return K(n)?t.filter(function(a){return K(a)&&st(a,n)&&V(a)!=="body"}):[]}function or(e,t,r,n){var a=t==="clippingParents"?ar(e):[].concat(t),o=[].concat(a,[r]),c=o[0],s=o.reduce(function(i,p){var f=_e(e,p,n);return i.top=J(f.top,i.top),i.right=we(f.right,i.right),i.bottom=we(f.bottom,i.bottom),i.left=J(f.left,i.left),i},_e(e,c,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function lt(e){var t=e.reference,r=e.element,n=e.placement,a=n?H(n):null,o=n?te(n):null,c=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,i;switch(a){case j:i={x:c,y:t.y-r.height};break;case T:i={x:c,y:t.y+t.height};break;case L:i={x:t.x+t.width,y:s};break;case C:i={x:t.x-r.width,y:s};break;default:i={x:t.x,y:t.y}}var p=a?Te(a):null;if(p!=null){var f=p==="y"?"height":"width";switch(o){case Z:i[p]=i[p]-(t[f]/2-r[f]/2);break;case se:i[p]=i[p]+(t[f]/2-r[f]/2);break}}return i}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,c=o===void 0?e.strategy:o,s=r.boundary,i=s===void 0?Pt:s,p=r.rootBoundary,f=p===void 0?at:p,m=r.elementContext,g=m===void 0?ae:m,l=r.altBoundary,v=l===void 0?!1:l,u=r.padding,d=u===void 0?0:u,b=ct(typeof d!="number"?d:pt(d,ce)),O=g===ae?Dt:ae,E=e.rects.popper,h=e.elements[v?O:g],y=or(K(h)?h:h.contextElement||I(e.elements.popper),i,f,c),w=ee(e.elements.reference),x=lt({reference:w,element:E,strategy:"absolute",placement:a}),D=Re(Object.assign({},E,x)),P=g===ae?D:w,A={top:y.top-P.top+b.top,bottom:P.bottom-y.bottom+b.bottom,left:y.left-P.left+b.left,right:P.right-y.right+b.right},$=e.modifiersData.offset;if(g===ae&&$){var M=$[a];Object.keys(A).forEach(function(R){var X=[L,T].indexOf(R)>=0?1:-1,Y=[j,T].indexOf(R)>=0?"y":"x";A[R]+=M[Y]*X})}return A}function ir(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,c=r.padding,s=r.flipVariations,i=r.allowedAutoPlacements,p=i===void 0?ot:i,f=te(n),m=f?s?Je:Je.filter(function(v){return te(v)===f}):ce,g=m.filter(function(v){return p.indexOf(v)>=0});g.length===0&&(g=m);var l=g.reduce(function(v,u){return v[u]=fe(e,{placement:u,boundary:a,rootBoundary:o,padding:c})[H(u)],v},{});return Object.keys(l).sort(function(v,u){return l[v]-l[u]})}function sr(e){if(H(e)===Ce)return[];var t=ye(e);return[Ze(e),t,Ze(t)]}function fr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,s=c===void 0?!0:c,i=r.fallbackPlacements,p=r.padding,f=r.boundary,m=r.rootBoundary,g=r.altBoundary,l=r.flipVariations,v=l===void 0?!0:l,u=r.allowedAutoPlacements,d=t.options.placement,b=H(d),O=b===d,E=i||(O||!v?[ye(d)]:sr(d)),h=[d].concat(E).reduce(function(Q,F){return Q.concat(H(F)===Ce?ir(t,{placement:F,boundary:f,rootBoundary:m,padding:p,flipVariations:v,allowedAutoPlacements:u}):F)},[]),y=t.rects.reference,w=t.rects.popper,x=new Map,D=!0,P=h[0],A=0;A<h.length;A++){var $=h[A],M=H($),R=te($)===Z,X=[j,T].indexOf(M)>=0,Y=X?"width":"height",B=fe(t,{placement:$,boundary:f,rootBoundary:m,altBoundary:g,padding:p}),W=X?R?L:C:R?T:j;y[Y]>w[Y]&&(W=ye(W));var ue=ye(W),z=[];if(o&&z.push(B[M]<=0),s&&z.push(B[W]<=0,B[ue]<=0),z.every(function(Q){return Q})){P=$,D=!1;break}x.set($,z)}if(D)for(var le=v?3:1,xe=function(F){var ne=h.find(function(de){var U=x.get(de);if(U)return U.slice(0,F).every(function(Oe){return Oe})});if(ne)return P=ne,"break"},re=le;re>0;re--){var ve=xe(re);if(ve==="break")break}t.placement!==P&&(t.modifiersData[n]._skip=!0,t.placement=P,t.reset=!0)}}const cr={name:"flip",enabled:!0,phase:"main",fn:fr,requiresIfExists:["offset"],data:{_skip:!1}};function et(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function tt(e){return[j,L,T,C].some(function(t){return e[t]>=0})}function pr(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,c=fe(t,{elementContext:"reference"}),s=fe(t,{altBoundary:!0}),i=et(c,n),p=et(s,a,o),f=tt(i),m=tt(p);t.modifiersData[r]={referenceClippingOffsets:i,popperEscapeOffsets:p,isReferenceHidden:f,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":m})}const ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:pr};function lr(e,t,r){var n=H(e),a=[C,j].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=o[0],s=o[1];return c=c||0,s=(s||0)*a,[C,L].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function vr(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,c=ot.reduce(function(f,m){return f[m]=lr(m,t.rects,o),f},{}),s=c[t.placement],i=s.x,p=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=p),t.modifiersData[n]=c}const dr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:vr};function hr(e){var t=e.state,r=e.name;t.modifiersData[r]=lt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const mr={name:"popperOffsets",enabled:!0,phase:"read",fn:hr,data:{}};function gr(e){return e==="x"?"y":"x"}function yr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,c=r.altAxis,s=c===void 0?!1:c,i=r.boundary,p=r.rootBoundary,f=r.altBoundary,m=r.padding,g=r.tether,l=g===void 0?!0:g,v=r.tetherOffset,u=v===void 0?0:v,d=fe(t,{boundary:i,rootBoundary:p,padding:m,altBoundary:f}),b=H(t.placement),O=te(t.placement),E=!O,h=Te(b),y=gr(h),w=t.modifiersData.popperOffsets,x=t.rects.reference,D=t.rects.popper,P=typeof u=="function"?u(Object.assign({},t.rects,{placement:t.placement})):u,A=typeof P=="number"?{mainAxis:P,altAxis:P}:Object.assign({mainAxis:0,altAxis:0},P),$=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(!!w){if(o){var R,X=h==="y"?j:C,Y=h==="y"?T:L,B=h==="y"?"height":"width",W=w[h],ue=W+d[X],z=W-d[Y],le=l?-D[B]/2:0,xe=O===Z?x[B]:D[B],re=O===Z?-D[B]:-x[B],ve=t.elements.arrow,Q=l&&ve?Se(ve):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ft(),ne=F[X],de=F[Y],U=oe(0,x[B],Q[B]),Oe=E?x[B]/2-le-U-ne-A.mainAxis:xe-U-ne-A.mainAxis,vt=E?-x[B]/2+le+U+de+A.mainAxis:re+U+de+A.mainAxis,Ee=t.elements.arrow&&pe(t.elements.arrow),dt=Ee?h==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,We=(R=$?.[h])!=null?R:0,ht=W+Oe-We-dt,mt=W+vt-We,He=oe(l?we(ue,ht):ue,W,l?J(z,mt):z);w[h]=He,M[h]=He-W}if(s){var Ve,gt=h==="x"?j:C,yt=h==="x"?T:L,G=w[y],he=y==="y"?"height":"width",Ne=G+d[gt],Fe=G-d[yt],Ae=[j,C].indexOf(b)!==-1,qe=(Ve=$?.[y])!=null?Ve:0,Ie=Ae?Ne:G-x[he]-D[he]-qe+A.altAxis,Xe=Ae?G+x[he]+D[he]-qe-A.altAxis:Fe,Ye=l&&Ae?qt(Ie,G,Xe):oe(l?Ie:Ne,G,l?Xe:Fe);w[y]=Ye,M[y]=Ye-G}t.modifiersData[n]=M}}const wr={name:"preventOverflow",enabled:!0,phase:"main",fn:yr,requiresIfExists:["offset"]};function br(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function xr(e){return e===k(e)||!S(e)?Le(e):br(e)}function Or(e){var t=e.getBoundingClientRect(),r=_(t.width)/e.offsetWidth||1,n=_(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Er(e,t,r){r===void 0&&(r=!1);var n=S(t),a=S(t)&&Or(t),o=I(t),c=ee(e,a,r),s={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!r)&&((V(t)!=="body"||Me(o))&&(s=xr(t)),S(t)?(i=ee(t,!0),i.x+=t.clientLeft,i.y+=t.clientTop):o&&(i.x=ke(o))),{x:c.left+s.scrollLeft-i.x,y:c.top+s.scrollTop-i.y,width:c.width,height:c.height}}function Ar(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var c=[].concat(o.requires||[],o.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var i=t.get(s);i&&a(i)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Pr(e){var t=Ar(e);return Mt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function Dr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function $r(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function nt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Rr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?rt:a;return function(s,i,p){p===void 0&&(p=o);var f={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,o),modifiersData:{},elements:{reference:s,popper:i},attributes:{},styles:{}},m=[],g=!1,l={state:f,setOptions:function(b){var O=typeof b=="function"?b(f.options):b;u(),f.options=Object.assign({},o,f.options,O),f.scrollParents={reference:K(s)?ie(s):s.contextElement?ie(s.contextElement):[],popper:ie(i)};var E=Pr($r([].concat(n,f.options.modifiers)));return f.orderedModifiers=E.filter(function(h){return h.enabled}),v(),l.update()},forceUpdate:function(){if(!g){var b=f.elements,O=b.reference,E=b.popper;if(!!nt(O,E)){f.rects={reference:Er(O,pe(E),f.options.strategy==="fixed"),popper:Se(E)},f.reset=!1,f.placement=f.options.placement,f.orderedModifiers.forEach(function(A){return f.modifiersData[A.name]=Object.assign({},A.data)});for(var h=0;h<f.orderedModifiers.length;h++){if(f.reset===!0){f.reset=!1,h=-1;continue}var y=f.orderedModifiers[h],w=y.fn,x=y.options,D=x===void 0?{}:x,P=y.name;typeof w=="function"&&(f=w({state:f,options:D,name:P,instance:l})||f)}}}},update:Dr(function(){return new Promise(function(d){l.forceUpdate(),d(f)})}),destroy:function(){u(),g=!0}};if(!nt(s,i))return l;l.setOptions(p).then(function(d){!g&&p.onFirstUpdate&&p.onFirstUpdate(d)});function v(){f.orderedModifiers.forEach(function(d){var b=d.name,O=d.options,E=O===void 0?{}:O,h=d.effect;if(typeof h=="function"){var y=h({state:f,name:b,instance:l,options:E}),w=function(){};m.push(y||w)}})}function u(){m.forEach(function(d){return d()}),m=[]}return l}}var jr=[Zt,mr,Kt,Vt,dr,cr,wr,zt,ur],Cr=Rr({defaultModifiers:jr});const Br=je('<span class="p-2 px-4 rounded bg-base-100 flex gap-4 shadow-xl"></span>'),Sr=je('<span tabindex="0" class="inline-flex"></span>'),Tr=je('<div class="z-50 relative"></div>'),Lr=e=>(()=>{const t=Pe(Br);return De(t,()=>e.children),t})(),Wr=e=>{const[t,r]=me(),[n,a]=me(),[o,c]=me(!1),[s,i]=me(!1);let p,f;wt(()=>{p&&p.destroy()});function m(){console.log("messag",e.message),f=window.setTimeout(()=>{c(!0),i(!0),l(),e.onShow?.()},200)}function g(){window.clearTimeout(f),i(!1),setTimeout(()=>{c(!1),e.onHide?.()},180)}function l(){const v=t(),u=n();v&&u&&(p=Cr(v,u,{placement:e.placement||"bottom",modifiers:[{name:"offset",options:{offset:[0,10]}}]}))}return[(()=>{const v=Pe(Sr);return v.addEventListener("blur",g),v.addEventListener("mouseleave",g),v.addEventListener("focus",m),v.addEventListener("mouseenter",m),ze(r,v),De(v,()=>e.children),bt(u=>xt(v,{[e.class||""]:!!e.class},u)),v})(),q(Ue,{get when(){return o()},get children(){return q(Ot,{get children(){const v=Pe(Tr);return ze(a,v),De(v,q(At,{appear:!0,onBeforeEnter:u=>u.style.opacity="0.3",onAfterEnter:u=>u.style.opacity="1",onEnter:(u,d)=>{u.animate([{opacity:.3,transform:"scale(0.7)"},{opacity:1,transform:"scale(1)"}],{duration:140}).finished.then(d)},onExit:(u,d)=>{u.animate([{opacity:1},{opacity:0}],{duration:100}).finished.then(d)},get children(){return q(Ue,{get when(){return s()},get children(){return q(Et,{get children(){return[q(Ge,{get when(){return e.content},get children(){return e.content}}),q(Ge,{get when(){return e.message},get children(){return q(Lr,{get children(){return e.message}})}})]}})}})}})),v}})}})]};export{Wr as T};