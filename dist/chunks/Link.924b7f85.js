import{s as f,c,n as v,g as m,u as g,f as A,m as L,r as h,t as C}from"./web.1f0c9ab8.js";const d=C("<a></a>"),b=l=>{let e;const[s,i]=f(l,["to","class","classList","activeClass"]),[r,o]=c(!1),[p,a]=c("");v(()=>{const t=u();if(o(t),e){if(s.activeClass){a(s.activeClass);return}e.classList.contains("btn")?a("btn-active"):a("link-active")}});function u(){const t=location.pathname.replaceAll("/",""),n=s.to.replaceAll("/","");return t===n}return(()=>{const t=m(d);return g(n=>e=n,t),A(t,L({get href(){return s.to},get classList(){return{[p()]:!!r(),[s.class||""]:!!s.class,...s.classList}}},i),!1,!1),h(),t})()};export{b as L};