import{y as v,c as n,o as f,g as m,u as A,z as g,A as L,r as h,t as C}from"./web.0e38cc26.js";const d=C("<a></a>"),b=l=>{let e;const[s,i]=v(l,["to","class","classList","activeClass"]),[o,r]=n(!1),[p,a]=n("");f(()=>{const t=u();if(r(t),e){if(s.activeClass){a(s.activeClass);return}e.classList.contains("btn")?a("btn-active"):a("link-active")}});function u(){const t=location.pathname.replaceAll("/",""),c=s.to.replaceAll("/","");return t===c}return(()=>{const t=m(d);return A(c=>e=c,t),g(t,L({get href(){return s.to},get classList(){return{[p()]:!!o(),[s.class||""]:!!s.class,...s.classList}}},i),!1,!1),h(),t})()};export{b as L};