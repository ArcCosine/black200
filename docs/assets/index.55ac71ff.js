const x=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))d(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&d(r)}).observe(document,{childList:!0,subtree:!0});function l(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(n){if(n.ep)return;n.ep=!0;const e=l(n);fetch(n.href,e)}};x();const v=([...t])=>{for(let o=t.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[t[o],t[l]]=[t[l],t[o]]}return t};function p(t){return t.toString(16).padStart(2,"0")}function b(t){return`${p(+t[0])}${p(+t[1])}${p(+t[2])}`}let f=[255,255,255],_="",y=0,L,m=0,h=0,g=0;function E(){document.getElementById("try").textContent=m,document.getElementById("score").textContent=h}function w(t,o,l){if(!g)return;const n=b([t,o,l]);if(m++,n===_){let e=I();g=!1,E(),document.getElementById("modal_ac").style.visibility="visible";const r=Math.floor(e/1e3)+"."+("00"+e%1e3).slice(-3);document.getElementById("ac_scores").innerHTML="Score: "+h+"<br>Time: "+r+"<br>Try: "+m;let s="",u="";y!==1?(s="| \u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u3092\u5B8C\u4E86\u3057\u307E\u3057\u305F\uFF01",u="\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB\u7D42\u4E86\uFF01"):m===1?(s="| \u4E00\u767A\u3067\u9ED2\u3092\u898B\u3064\u3051\u3089\u308C\u307E\u3057\u305F\uFF01",u="\u4E00\u767A\u3067\u9ED2\u3092\u898B\u3064\u3051\u3089\u308C\u305F\uFF01"):e<=1e4&&(s="| \u7D20\u65E9\u304F\u9ED2\u3092\u898B\u3064\u3051\u3089\u308C\u307E\u3057\u305F\uFF01",u="\u7D20\u65E9\u304F\u9ED2\u3092\u898B\u3064\u3051\u3089\u308C\u305F\uFF01"),document.getElementById("tw_share").setAttribute("href","http://twitter.com/share?url="+encodeURI(location.href)+"&hashtags=black_200&related=ArcCosine&text="+encodeURI(`200\u8272\u306E\u9ED2\u304B\u3089\u898B\u3064\u3051\u3088\u3046\uFF01 Black 200 ${s}
\u5F97\u70B9:${h} \u6642\u9593:${r}\u79D2 \u30AF\u30EA\u30C3\u30AF\u56DE\u6570:${m}`)),document.getElementById("ac_comment").innerHTML=u}else{const e=((f[0]-t)**2+(f[1]-o)**2+(f[2]-l)**2)/y**2;h-=e,E();const r=document.getElementById("modal_hazure");r.classList.add("hazure_anim"),r.addEventListener("animationend",function(){r.classList.remove("hazure_anim")});const s=document.getElementById("hazure_text");s.innerHTML="#"+n+"<br>\u306F\u305A\u308C (-"+e+")"}}function I(){if(!g)return;let t=Date.now()-L.getTime();return document.getElementById("timer").textContent=`${Math.floor(t/1e3)}.${(""+Math.floor(t/10)%100).padStart(2,"0")}`,setTimeout(I,30),t}function B(t,o){const l=document.getElementById("start_btn");l!==null&&l.remove(),y=o;const d=document.getElementById("list"),n=[0,0,0];d.innerHTML="";let e=[];for(let c=0;c<=5;++c)for(let a=0;a<=5;++a)for(let i=0;i<=5;++i)e.push([n[0]+c*o,n[1]+a*o,n[2]+i*o]);e=v(e);const r=document.createDocumentFragment();for(let c=0;c<t;++c){let a=b(e[c]);const i=document.createElement("button");i.classList.add("alternatives"),i.id=`col_${a}`,i.addEventListener("click",w.bind(this,e[c][0],e[c][1],e[c][2]),!1),i.style.backgroundColor=`#${a}`,r.appendChild(i)}d.innerHTML="",d.appendChild(r),f=e[Math.floor(Math.random()*t)],_=b(f);const s=document.getElementById("problem_hex");s.textContent=_,document.getElementById("problem_color_box").style.setProperty("background-color","#"+_),document.getElementById("modal_ac").style.visibility="hidden",h=o===1?1e3:100,m=0,E(),L=new Date,g=!0,I()}function M(){const t=document.getElementById("tw_share").href;window.open(encodeURI(decodeURI(t)),"tweetwindow","width=650, height=470, personalbar=0, toolbar=0, scrollbars=1, sizable=1")}function C(){document.getElementById("start_btn").addEventListener("click",function(){B(200,8)},!1),document.getElementById("start_pro").addEventListener("click",function(){B(200,1)},!1),document.getElementById("tw_share").addEventListener("click",M,!1)}document.addEventListener("DOMContentLoaded",C,!1);
