import{s as Y,d as Z,u as $,g as x,e as ee,c as J,f as te}from"../chunks/scheduler.c941296e.js";import{S as ae,i as se,s as H,g,H as le,m as Q,C as ne,f as _,c as D,h as v,j as T,x as oe,D as ie,n as X,k as F,a as V,z as c,d as re,t as ce,B as fe,y as O,A as he}from"../chunks/index.29e7fd75.js";import{e as P}from"../chunks/each.615cbfdb.js";import{t as U}from"../chunks/translations.ae28ceac.js";import{c as pe}from"../chunks/languageStore.ef1740a4.js";import{p as ue}from"../chunks/stores.f1f98818.js";const _e=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;const{document:W}=_e;function G(a,n,t){const o=a.slice();return o[10]=n[t],o}function K(a){let n,t,o=a[10].name+"",f,m,k,h;function d(){return a[8](a[10])}return{c(){n=g("li"),t=g("a"),f=Q(o),m=H(),this.h()},l(p){n=v(p,"LI",{class:!0});var r=T(n);t=v(r,"A",{href:!0,class:!0});var y=T(t);f=X(y,o),y.forEach(_),m=D(r),r.forEach(_),this.h()},h(){F(t,"href","/swiss-tips/"+a[10].link),F(t,"class","svelte-o7m8ei"),O(t,"active",a[0]==a[10].link),F(n,"class","svelte-o7m8ei")},m(p,r){V(p,n,r),c(n,t),c(t,f),c(n,m),k||(h=he(t,"click",d),k=!0)},p(p,r){a=p,r&9&&O(t,"active",a[0]==a[10].link)},d(p){p&&_(n),k=!1,h()}}}function de(a){let n,t,o,f,m=`Swiss Tips 
            <span style="font-weight: lighter; text-wrap: nowrap"><a href="https://chagai.website/swisstips/" target="_blank" class="svelte-o7m8ei">by Chagai (Joe)</a></span>`,k,h,d,p=U[a[1]]["swiss-tips-description"]+"",r,y,I,l,A,C,q,S,E,L=P(a[3]),i=[];for(let e=0;e<L.length;e+=1)i[e]=K(G(a,L,e));const z=a[7].default,u=Z(z,a,a[6],null);return{c(){n=H(),t=g("section"),o=g("div"),f=g("h1"),f.innerHTML=m,k=H(),h=g("p"),d=new le(!1),r=H(),y=g("br"),I=Q(`
            Select a topic below 👇`),l=H(),A=g("nav"),C=g("ul");for(let e=0;e<i.length;e+=1)i[e].c();q=H(),S=g("div"),u&&u.c(),this.h()},l(e){ne("svelte-1pji9w1",W.head).forEach(_),n=D(e),t=v(e,"SECTION",{});var s=T(t);o=v(s,"DIV",{class:!0});var w=T(o);f=v(w,"H1",{"data-svelte-h":!0}),oe(f)!=="svelte-b60yx8"&&(f.innerHTML=m),k=D(w),h=v(w,"P",{});var B=T(h);d=ie(B,!1),r=D(B),y=v(B,"BR",{}),I=X(B,`
            Select a topic below 👇`),B.forEach(_),l=D(w),A=v(w,"NAV",{});var j=T(A);C=v(j,"UL",{class:!0});var N=T(C);for(let M=0;M<i.length;M+=1)i[M].l(N);N.forEach(_),j.forEach(_),w.forEach(_),q=D(s),S=v(s,"DIV",{id:!0});var R=T(S);u&&u.l(R),R.forEach(_),s.forEach(_),this.h()},h(){W.title="Tips • Connect Bern ",d.a=r,F(C,"class","menu svelte-o7m8ei"),F(o,"class","topbarWrapper"),F(S,"id","content")},m(e,b){V(e,n,b),V(e,t,b),c(t,o),c(o,f),c(o,k),c(o,h),d.m(p,h),c(h,r),c(h,y),c(h,I),c(o,l),c(o,A),c(A,C);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(C,null);c(t,q),c(t,S),u&&u.m(S,null),E=!0},p(e,[b]){if((!E||b&2)&&p!==(p=U[e[1]]["swiss-tips-description"]+"")&&d.p(p),b&13){L=P(e[3]);let s;for(s=0;s<L.length;s+=1){const w=G(e,L,s);i[s]?i[s].p(w,b):(i[s]=K(w),i[s].c(),i[s].m(C,null))}for(;s<i.length;s+=1)i[s].d(1);i.length=L.length}u&&u.p&&(!E||b&64)&&$(u,z,e,e[6],E?ee(z,e[6],b,null):x(e[6]),null)},i(e){E||(re(u,e),E=!0)},o(e){ce(u,e),E=!1},d(e){e&&(_(n),_(t)),fe(i,e),u&&u.d(e)}}}function me(a,n,t){let o,f,m;J(a,ue,l=>t(4,f=l)),J(a,pe,l=>t(5,m=l));let{$$slots:k={},$$scope:h}=n,d="";te("scrollToContent",()=>{requestAnimationFrame(()=>{const l=document.querySelector("#content");l&&window.scrollTo({top:l.offsetTop-2,behavior:"smooth"})})});function r(l){t(0,d=l)}let y=[{name:"Transportation",link:"transportation"},{name:"Free SIM Card (+Data)",link:"free-sim-card"},{name:"Free Food",link:"free-food"},{name:"Socialize",link:"socialize"},{name:"Random Tips!",link:"random-tips"},{name:"Looking for a Flat?",link:"looking-for-flat"}];const I=l=>r(l.link);return a.$$set=l=>{"$$scope"in l&&t(6,h=l.$$scope)},a.$$.update=()=>{if(a.$$.dirty&32&&t(1,o=m),a.$$.dirty&16){const l=f.url.pathname.split("/").filter(Boolean);t(0,d=l[l.length-1]||"/")}},[d,o,r,y,f,m,h,k,I]}class Te extends ae{constructor(n){super(),se(this,n,me,de,Y,{})}}export{Te as component};
