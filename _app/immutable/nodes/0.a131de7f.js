import{s as W,n as J,r as ne,c as X,o as re,d as he,u as ge,g as _e,e as de}from"../chunks/scheduler.8ab1511c.js";import{S as R,i as Y,g as p,s as T,h as m,j as b,x as K,c as D,f as _,k as g,y as N,a as y,z as v,A as V,l as M,d as w,p as ve,t as O,b as pe,B as ie,r as z,u as U,v as H,w as G,m as oe,n as ue,o as ce}from"../chunks/index.c45faf38.js";import{c as A}from"../chunks/languageStore.52869854.js";import{e as Q}from"../chunks/each.3adc6ac3.js";import{t as ee}from"../chunks/translations.4ec82050.js";const me=!0,Be=Object.freeze(Object.defineProperty({__proto__:null,prerender:me},Symbol.toStringTag,{value:"Module"}));function ke(n){let e,t,l,f="EN",c,r,o="DE",u,d;return{c(){e=p("div"),t=p("div"),l=p("button"),l.textContent=f,c=T(),r=p("button"),r.textContent=o,this.h()},l(a){e=m(a,"DIV",{class:!0});var s=b(e);t=m(s,"DIV",{class:!0});var i=b(t);l=m(i,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),K(l)!=="svelte-1a79pz8"&&(l.textContent=f),c=D(i),r=m(i,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),K(r)!=="svelte-1sxl5nw"&&(r.textContent=o),i.forEach(_),s.forEach(_),this.h()},h(){g(l,"id","en"),g(l,"title","English"),g(l,"class","svelte-j51qei"),N(l,"active",n[1]=="en"),g(r,"id","de"),g(r,"title","Deutsch"),g(r,"class","svelte-j51qei"),N(r,"active",n[1]=="de"),g(t,"class","languageToggler svelte-j51qei"),g(e,"class","container svelte-j51qei"),N(e,"dark",n[0])},m(a,s){y(a,e,s),v(e,t),v(t,l),v(t,c),v(t,r),u||(d=[V(l,"click",n[3]),V(r,"click",n[4])],u=!0)},p(a,[s]){s&2&&N(l,"active",a[1]=="en"),s&2&&N(r,"active",a[1]=="de"),s&1&&N(e,"dark",a[0])},i:J,o:J,d(a){a&&_(e),u=!1,ne(d)}}}function be(n,e,t){let l;X(n,A,u=>t(1,l=u));let{dark:f=!1}=e;function c(u){A.set(u)}const r=()=>c("en"),o=()=>c("de");return n.$$set=u=>{"dark"in u&&t(0,f=u.dark)},[f,l,c,r,o]}class fe extends R{constructor(e){super(),Y(this,e,be,ke,W,{dark:0})}}const te=[{title:{de:"Gruppen",en:"Groups"},slug:"groups",img:"groups.svg"},{title:{en:"Events",de:"Events"},slug:"events",img:"events.svg"},{title:{en:"Places",de:"Orte"},slug:"places",img:"location.svg"}];function le(n,e,t){const l=n.slice();return l[6]=e[t],l}function Ee(n,e,t){const l=n.slice();return l[9]=e[t],l[11]=t,l}function $e(n){let e;return{c(){e=p("span"),this.h()},l(t){e=m(t,"SPAN",{class:!0}),b(e).forEach(_),this.h()},h(){g(e,"class","svelte-fu1h6a")},m(t,l){y(t,e,l)},p:J,d(t){t&&_(e)}}}function se(n){let e,t,l,f,c;l=new fe({props:{dark:!0}});let r=Q(te),o=[];for(let u=0;u<r.length;u+=1)o[u]=ae(le(n,r,u));return{c(){e=p("ol"),t=p("div"),z(l.$$.fragment),f=T();for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){e=m(u,"OL",{class:!0});var d=b(e);t=m(d,"DIV",{class:!0});var a=b(t);U(l.$$.fragment,a),a.forEach(_),f=D(d);for(let s=0;s<o.length;s+=1)o[s].l(d);d.forEach(_),this.h()},h(){g(t,"class","languages visible svelte-fu1h6a"),g(e,"class","svelte-fu1h6a")},m(u,d){y(u,e,d),v(e,t),H(l,t,null),v(e,f);for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(e,null);c=!0},p(u,d){if(d&3){r=Q(te);let a;for(a=0;a<r.length;a+=1){const s=le(u,r,a);o[a]?o[a].p(s,d):(o[a]=ae(s),o[a].c(),o[a].m(e,null))}for(;a<o.length;a+=1)o[a].d(1);o.length=r.length}},i(u){c||(w(l.$$.fragment,u),c=!0)},o(u){O(l.$$.fragment,u),c=!1},d(u){u&&_(e),G(l),ie(o,u)}}}function ae(n){let e,t,l,f,c=n[6].title[n[1]]+"",r,o,u,d,a;return{c(){e=p("li"),t=p("a"),l=p("span"),f=T(),r=oe(c),u=T(),this.h()},l(s){e=m(s,"LI",{});var i=b(e);t=m(i,"A",{title:!0,class:!0,href:!0});var h=b(t);l=m(h,"SPAN",{class:!0,style:!0}),b(l).forEach(_),f=D(h),r=ue(h,c),h.forEach(_),u=D(i),i.forEach(_),this.h()},h(){g(l,"class","img svelte-fu1h6a"),M(l,"background-image","url(/navigation/"+n[6].img+")"),g(t,"title",o=n[6].title[n[1]]),g(t,"class","navlink svelte-fu1h6a"),g(t,"href","/"+n[6].slug)},m(s,i){y(s,e,i),v(e,t),v(t,l),v(t,f),v(t,r),v(e,u),d||(a=V(t,"click",n[5]),d=!0)},p(s,i){i&2&&c!==(c=s[6].title[s[1]]+"")&&ce(r,c),i&2&&o!==(o=s[6].title[s[1]])&&g(t,"title",o)},d(s){s&&_(e),d=!1,a()}}}function ye(n){let e,t,l,f,c,r,o,u,d,a=Q({length:3}),s=[];for(let h=0;h<a.length;h+=1)s[h]=$e(Ee(n,a,h));let i=n[0]&&se(n);return{c(){e=p("button"),t=T(),l=p("nav"),f=p("button");for(let h=0;h<s.length;h+=1)s[h].c();r=T(),i&&i.c(),this.h()},l(h){e=m(h,"BUTTON",{style:!0,class:!0}),b(e).forEach(_),t=D(h),l=m(h,"NAV",{class:!0});var k=b(l);f=m(k,"BUTTON",{title:!0,class:!0});var E=b(f);for(let I=0;I<s.length;I+=1)s[I].l(E);E.forEach(_),r=D(k),i&&i.l(k),k.forEach(_),this.h()},h(){M(e,"display",n[0]?"block":"none"),g(e,"class","defocus svelte-fu1h6a"),g(f,"title","menu"),g(f,"class",c="burger "+(n[0]?"burgerOpen":"")+" svelte-fu1h6a"),g(l,"class","svelte-fu1h6a")},m(h,k){y(h,e,k),y(h,t,k),y(h,l,k),v(l,f);for(let E=0;E<s.length;E+=1)s[E]&&s[E].m(f,null);v(l,r),i&&i.m(l,null),o=!0,u||(d=[V(e,"click",n[3]),V(f,"click",n[4])],u=!0)},p(h,[k]){(!o||k&1)&&M(e,"display",h[0]?"block":"none"),(!o||k&1&&c!==(c="burger "+(h[0]?"burgerOpen":"")+" svelte-fu1h6a"))&&g(f,"class",c),h[0]?i?(i.p(h,k),k&1&&w(i,1)):(i=se(h),i.c(),w(i,1),i.m(l,null)):i&&(ve(),O(i,1,1,()=>{i=null}),pe())},i(h){o||(w(i),o=!0)},o(h){O(i),o=!1},d(h){h&&(_(e),_(t),_(l)),ie(s,h),i&&i.d(),u=!1,ne(d)}}}function Te(n,e,t){let l,f;X(n,A,d=>t(2,f=d));let c=!1;const r=()=>{t(0,c=!1)},o=()=>t(0,c=!c),u=()=>{t(0,c=!1)};return n.$$.update=()=>{n.$$.dirty&4&&t(1,l=f)},[c,l,f,r,o,u]}class De extends R{constructor(e){super(),Y(this,e,Te,ye,W,{})}}function Ie(n){let e,t,l,f,c,r,o,u="Connect Bern",d,a,s=ee[n[1]]["logo-description"]+"",i,h,k,E,I,F,C,S;return I=new fe({}),C=new De({}),{c(){e=p("header"),t=p("div"),l=p("a"),f=p("div"),c=T(),r=p("div"),o=p("span"),o.textContent=u,d=T(),a=p("p"),i=oe(s),h=T(),k=p("div"),E=p("div"),z(I.$$.fragment),F=T(),z(C.$$.fragment),this.h()},l($){e=m($,"HEADER",{class:!0});var L=b(e);t=m(L,"DIV",{class:!0});var j=b(t);l=m(j,"A",{href:!0,title:!0,class:!0});var B=b(l);f=m(B,"DIV",{class:!0,style:!0,id:!0}),b(f).forEach(_),c=D(B),r=m(B,"DIV",{class:!0});var P=b(r);o=m(P,"SPAN",{class:!0,"data-svelte-h":!0}),K(o)!=="svelte-1izdd2b"&&(o.textContent=u),d=D(P),a=m(P,"P",{class:!0});var Z=b(a);i=ue(Z,s),Z.forEach(_),P.forEach(_),B.forEach(_),h=D(j),k=m(j,"DIV",{class:!0});var q=b(k);E=m(q,"DIV",{class:!0});var x=b(E);U(I.$$.fragment,x),x.forEach(_),F=D(q),U(C.$$.fragment,q),q.forEach(_),j.forEach(_),L.forEach(_),this.h()},h(){g(f,"class","logo svelte-fhngul"),M(f,"background","url('/icons/logo.svg')"),g(f,"id","logo"),g(o,"class","logo-text svelte-fhngul"),g(a,"class","svelte-fhngul"),g(r,"class","textWrapper svelte-fhngul"),g(l,"href","/"),g(l,"title","home"),g(l,"class","titleWrapper svelte-fhngul"),g(E,"class","invisible svelte-fhngul"),g(k,"class","side-wrapper svelte-fhngul"),g(t,"class","container svelte-fhngul"),N(t,"sticky",n[0]),g(e,"class","svelte-fhngul")},m($,L){y($,e,L),v(e,t),v(t,l),v(l,f),v(l,c),v(l,r),v(r,o),v(r,d),v(r,a),v(a,i),v(t,h),v(t,k),v(k,E),H(I,E,null),v(k,F),H(C,k,null),S=!0},p($,[L]){(!S||L&2)&&s!==(s=ee[$[1]]["logo-description"]+"")&&ce(i,s),(!S||L&1)&&N(t,"sticky",$[0])},i($){S||(w(I.$$.fragment,$),w(C.$$.fragment,$),S=!0)},o($){O(I.$$.fragment,$),O(C.$$.fragment,$),S=!1},d($){$&&_(e),G(I),G(C)}}}function Ne(n,e,t){let l,f;X(n,A,r=>t(2,f=r));let{isSticky:c=!1}=e;return re(()=>{window.addEventListener("scroll",()=>{const r=window.scrollY||document.documentElement.scrollTop;t(0,c=Math.round(r)>1)})}),n.$$set=r=>{"isSticky"in r&&t(0,c=r.isSticky)},n.$$.update=()=>{n.$$.dirty&4&&t(1,l=f)},[c,l,f]}class we extends R{constructor(e){super(),Y(this,e,Ne,Ie,W,{isSticky:0})}}function Ce(n){let e,t,l,f,c,r,o,u;c=new we({});const d=n[1].default,a=he(d,n,n[0],null);return{c(){e=p("div"),t=T(),l=p("div"),f=T(),z(c.$$.fragment),r=T(),o=p("main"),a&&a.c(),this.h()},l(s){e=m(s,"DIV",{class:!0}),b(e).forEach(_),t=D(s),l=m(s,"DIV",{class:!0}),b(l).forEach(_),f=D(s),U(c.$$.fragment,s),r=D(s),o=m(s,"MAIN",{class:!0});var i=b(o);a&&a.l(i),i.forEach(_),this.h()},h(){g(e,"class","gradient svelte-80l64o"),g(l,"class","bg svelte-80l64o"),g(o,"class","svelte-80l64o")},m(s,i){y(s,e,i),y(s,t,i),y(s,l,i),y(s,f,i),H(c,s,i),y(s,r,i),y(s,o,i),a&&a.m(o,null),u=!0},p(s,[i]){a&&a.p&&(!u||i&1)&&ge(a,d,s,s[0],u?de(d,s[0],i,null):_e(s[0]),null)},i(s){u||(w(c.$$.fragment,s),w(a,s),u=!0)},o(s){O(c.$$.fragment,s),O(a,s),u=!1},d(s){s&&(_(e),_(t),_(l),_(f),_(r),_(o)),G(c,s),a&&a.d(s)}}}function Le(n,e,t){let{$$slots:l={},$$scope:f}=e;return re(()=>{A.set(navigator.language.includes("en")?"en":"de")}),n.$$set=c=>{"$$scope"in c&&t(0,f=c.$$scope)},[f,l]}class Pe extends R{constructor(e){super(),Y(this,e,Le,Ce,W,{})}}export{Pe as component,Be as universal};
