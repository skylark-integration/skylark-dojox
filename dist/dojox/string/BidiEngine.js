/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare"],function(r,t){r.getObject("string",!0,dojox);var e=t("dojox.string.BidiEngine",null,{bidiTransform:function(r,t,e){if(!r)return"";if(!t&&!e)return r;var s=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/;if(!s.test(t)||!s.test(e))throw new Error("dojox.string.BidiEngine: the bidi layout string is wrong!");if(t==e)return r;var h=T(t.charAt(1)),d=T(e.charAt(1)),w="I"==t.charAt(0)?"L":t.charAt(0),C="I"==e.charAt(0)?"L":e.charAt(0),S=w+h,_=C+d,j=t.charAt(2)+e.charAt(2);S&&(p.defInFormat=S),_&&(p.defOutFormat=_),j&&(p.defSwap=j);var k=function r(t,e,u,o){void 0==e&&(e=p.defInFormat);void 0==u&&(u=p.defOutFormat);void 0==o&&(o=p.defSwap);if(e==u)return t;var l,c=e.substring(0,1),s=e.substring(1,4),h=u.substring(0,1),d=u.substring(1,4);"C"==s.charAt(0)&&(l=n(t),s="ltr"==l||"rtl"==l?l.toUpperCase():"L"==e.charAt(2)?"LTR":"RTL",e=c+s);"C"==d.charAt(0)&&("rtl"==(l=n(t))?d="RTL":"ltr"==l?(l=function(r){for(var t=null,e=r.length-1;e>=0;e--){if((t=a(r.charAt(e)))==$||t==K)return"rtl";if(t==M)return"ltr";if(t==H)break}return""}(t),d=l.toUpperCase()):d="L"==u.charAt(2)?"LTR":"RTL",u=h+d);if(e==u)return t;p.inFormat=e;p.outFormat=u;p.swap=o;if("L"==c&&"VLTR"==u){if("LTR"==s)return p.dir=B,i(t);if("RTL"==s)return p.dir=V,i(t)}if("V"==c&&"V"==h)return f(t);if("L"==c&&"VRTL"==u)return"LTR"==s?(p.dir=B,t=i(t)):(p.dir=V,t=i(t)),f(t);if("VLTR"==e&&"LLTR"==u)return p.dir=B,i(t);if("V"==c&&"L"==h&&s!=d)return t=f(t),"RTL"==s?r(t,"LLTR","VLTR",o):r(t,"LRTL","VRTL",o);if("VRTL"==e&&"LRTL"==u)return r(t,"LRTL","VRTL",o);if("L"==c&&"L"==h){var L=p.swap;return p.swap=L.substr(0,1)+"N","RTL"==s?(p.dir=V,t=i(t),p.swap="N"+L.substr(1,2),p.dir=B,t=i(t)):(p.dir=B,t=i(t),p.swap="N"+L.substr(1,2),t=r(t,"VLTR","LRTL",p.swap)),t}}(r,w+h,C+d,t.charAt(2)+e.charAt(2)),E=!1;return"R"==e.charAt(1)?E=!0:"C"!=e.charAt(1)&&"D"!=e.charAt(1)||(E=this.checkContextual(k)),t.charAt(3)==e.charAt(3)?k:"S"==e.charAt(3)?function(r,t,e){if(0==t.length)return;void 0==r&&(r=!0);void 0==e&&(e=!0);var n=(t=new String(t)).split(""),i=0,a=1,f=n.length;r||(i=n.length-1,a=-1,f=1);for(var s=0,h=[],d=0,T=i;T*a<f;T+=a)if(o(n[T])||g(n[T])){if("ل"==n[T]&&c(n,T+a,a,f)){n[T]=b(n[T+a],0==s?F:U),R(n,T+=a,a,f),e&&(h[d]=T,d++),s=0;continue}var p=n[T];1==s?n[T]=l(n,T+a,a,f)?A(n[T]):v(n[T],N):1==l(n,T+a,a,f)?n[T]=v(n[T],I):n[T]=v(n[T],x),g(p)||(s=1),1==L(p)&&(s=0)}else s=0;var w="";for(idx=0;idx<n.length;idx++)e&&u(h,h.length,idx)>-1||(w+=n[idx]);return w}(E,k,!0):"N"==e.charAt(3)?function(r,t,e){if(0==r.length)return;void 0==e&&(e=!0);void 0==t&&(t=!0);r=new String(r);var n="",i=[],a="";if(e)for(var f=0;f<r.length;f++){if(" "==r.charAt(f))if(t){if(f>0&&r.charAt(f-1)>="ﻵ"&&r.charAt(f-1)<="ﻼ")continue}else if(f+1<r.length&&r.charAt(f+1)>="ﻵ"&&r.charAt(f+1)<="ﻼ")continue;a+=r.charAt(f)}else a=new String(r);i=a.split("");for(var u=0;u<a.length;u++)if(i[u]>="ﹰ"&&i[u]<"\ufeff"){var o=a.charCodeAt(u);i[u]>="ﻵ"&&i[u]<="ﻼ"?t?(n+="ل",n+=m[parseInt((o-65269)/2)]):(n+=m[parseInt((o-65269)/2)],n+="ل"):n+=D[o-65136]}else n+=i[u];return n}(k,E,!0):void 0},checkContextual:function(r){var t=n(r);return"ltr"!=t&&"rtl"!=t&&"ltr"!=(t=document.dir.toLowerCase())&&"rtl"!=t&&(t="ltr"),t},hasBidiChar:function(r){for(var t=null,e=null,n=null,i=0;i<r.length;i++){if(e=r.charAt(i).charCodeAt(0),(t=(n=Ar[e>>8])<fr?n:vr[n-fr][255&e])==$||t==K)return!0;if(t==H)break}return!1}});function n(r){for(var t=null,e=null,n=null,i=0;i<r.length;i++){if(e=r.charAt(i).charCodeAt(0),(t=(n=Ar[e>>8])<fr?n:vr[n-fr][255&e])==$||t==K)return"rtl";if(t==M)return"ltr";if(t==H)break}return""}function i(r){var t=r.split(""),e=[];return function(r,t){var e=r.length,n=p.dir?y:Y,i=null,f=null,u=null,o=0,l=null,c=-1,s=null,d=null,L=[],A=[];for(p.hiLevel=p.dir,p.lastArabic=!1,p.hasUBAT_AL=!1,p.hasUBAT_B=!1,p.hasUBAT_S=!1,s=0;s<e;s++)L[s]=a(r[s]);for(d=0;d<e;d++){if(i=o,A[d]=f=h(r,L,A,d),o=n[i][f],l=240&o,o&=15,t[d]=u=n[o][w],l>0)if(16==l){for(s=c;s<d;s++)t[s]=1;c=-1}else c=-1;if(n[o][C])-1==c&&(c=d);else if(c>-1){for(s=c;s<d;s++)t[s]=u;c=-1}L[d]==H&&(t[d]=0),p.hiLevel|=u}if(p.hasUBAT_S)for(s=0;s<e;s++)if(L[s]==J){t[s]=p.dir;for(var v=s-1;v>=0&&L[v]==P;v--)t[v]=p.dir}}(t,e),function(r,t){if(0==p.hiLevel||p.swap.substr(0,1)==p.swap.substr(1,2))return;for(var e=0;e<r.length;e++)1==t[e]&&(r[e]=d(r[e]))}(t,e),s(2,t,e),s(1,t,e),t.join("")}function a(r){var t=r.charCodeAt(0),e=Ar[t>>8];return e<fr?e:vr[e-fr][255&t]}function f(r){var t=r.split("");return t.reverse(),t.join("")}function u(r,t,e){for(var n=0;n<t;n++)if(r[n]==e)return n;return-1}function o(r){for(var t=0;t<E.length;t++)if(r>=E[t]&&r<=O[t])return!0;return!1}function l(r,t,e,n){for(;t*e<n&&g(r[t]);)t+=e;return!!(t*e<n&&o(r[t]))}function c(r,t,e,n){for(;t*e<n&&g(r[t]);)t+=e;var i=" ";if(!(t*e<n))return!1;i=r[t];for(var a=0;a<m.length;a++)if(m[a]==i)return!0;return!1}function s(r,t,e){if(!(p.hiLevel<r))if(1!=r||p.dir!=V||p.hasUBAT_B)for(var n,i,a,f,u=t.length,o=0;o<u;){if(e[o]>=r){for(n=o+1;n<u&&e[n]>=r;)n++;for(i=o,a=n-1;i<a;i++,a--)f=t[i],t[i]=t[a],t[a]=f;o=n}o++}else t.reverse()}function h(r,t,e,n){var i,a,f,u,o=t[n];switch(o){case M:case $:p.lastArabic=!1;case G:case z:return o;case q:return p.lastArabic?z:q;case K:return p.lastArabic=!0,p.hasUBAT_AL=!0,$;case P:return G;case Q:return n<1||n+1>=t.length||(i=e[n-1])!=q&&i!=z||(a=t[n+1])!=q&&a!=z?G:(p.lastArabic&&(a=z),a==i?a:G);case W:return(i=n>0?e[n-1]:H)==q&&n+1<t.length&&t[n+1]==q?q:G;case X:if(n>0&&e[n-1]==q)return q;if(p.lastArabic)return G;for(u=n+1,f=t.length;u<f&&t[u]==X;)u++;return u<f&&t[u]==q?q:G;case Z:if("VLTR"==p.inFormat){for(f=t.length,u=n+1;u<f&&t[u]==Z;)u++;if(u<f){var l=r[n],c=l>=1425&&l<=2303||64286==l;if(i=t[u],c&&(i==$||i==K))return $}}return n<1||(i=t[n-1])==H?G:e[n-1];case H:return lastArabic=!1,p.hasUBAT_B=!0,p.dir;case J:return p.hasUBAT_S=!0,G;case rr:case tr:case nr:case ir:case er:lastArabic=!1;case ar:return G}}function d(r){for(var t,e=0,n=S.length-1;e<=n;)if(t=Math.floor((e+n)/2),r<S[t][0])n=t-1;else{if(!(r>S[t][0]))return S[t][1];e=t+1}return r}function L(r){for(var t=0;t<k.length;t++)if(k[t]==r)return!0;return!1}function A(r){for(var t=0;t<_.length;t++)if(r==_[t])return j[t];return r}function v(r,t){for(var e=0;e<_.length;e++)if(r==_[e])return t[e];return r}function g(r){return r>="ً"&&r<="ٕ"}function T(r){return"L"==r?"LTR":"R"==r?"RTL":"C"==r?"CLR":"D"==r?"CRL":void 0}function R(r,t,e,n){for(;t*e<n&&g(r[t]);)t+=e;return t*e<n&&(r[t]=" ",!0)}function b(r,t){for(var e=0;e<m.length;e++)if(r==m[e])return t[e];return r}var p={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUBAT_AL:!1,hasBlockSep:!1,hasSegSep:!1},w=5,C=6,B=0,V=1,S=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],m=["آ","أ","إ","ا"],F=["ﻵ","ﻷ","ﻹ","ﻻ"],U=["ﻶ","ﻸ","ﻺ","ﻼ"],_=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ","ً","ٌ","ٍ","َ","ُ","ِ","ّ","ْ","ء"],x=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ"],N=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ"],j=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ"],I=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ"],k=["ء","ا","د","ذ","ر","ز","و","آ","ة","ئ","ؤ","إ","ٵ","أ"],D=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],E=["ء","ف"],O=["غ","ي"],Y=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],y=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],M=0,$=1,q=2,z=3,G=4,H=5,J=6,K=7,P=8,Q=9,W=10,X=11,Z=12,rr=13,tr=14,er=15,nr=16,ir=17,ar=18,fr=100,ur=fr+0,or=fr+1,lr=fr+2,cr=fr+3,sr=fr+4,hr=fr+5,dr=fr+6,Lr=fr+7,Ar=[ur,M,M,M,M,or,lr,cr,$,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,sr,G,G,G,M,G,M,G,M,G,G,G,M,M,G,G,M,M,M,M,M,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,M,M,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,M,M,G,G,M,M,G,G,M,M,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,M,M,M,hr,K,K,dr,Lr];delete ur,delete or,delete lr,delete cr,delete sr,delete hr,delete dr,delete Lr;var vr=[[ar,ar,ar,ar,ar,ar,ar,ar,ar,J,H,J,P,H,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,H,H,H,J,P,G,G,X,X,X,G,G,G,G,G,W,Q,W,Q,Q,q,q,q,q,q,q,q,q,q,q,Q,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,ar,ar,ar,ar,ar,ar,H,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,ar,Q,G,X,X,X,X,G,G,G,G,M,G,G,ar,G,G,X,X,q,q,G,M,G,G,G,q,M,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,M,M,M,M,M,M,M,M],[M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,M,M,M,M,M,M,M,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,M,G,G,G,G,G,G,G,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,$,Z,$,Z,Z,$,Z,Z,$,Z,G,G,G,G,G,G,G,G,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,G,G,G,G,G,$,$,$,$,$,G,G,G,G,G,G,G,G,G,G,G],[z,z,z,z,G,G,G,G,K,X,X,K,Q,K,G,G,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,K,G,G,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,z,z,z,z,z,z,z,z,z,z,X,z,z,K,K,K,Z,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,Z,Z,Z,Z,Z,Z,Z,z,G,Z,Z,Z,Z,Z,Z,K,K,Z,Z,G,Z,Z,Z,Z,K,K,q,q,q,q,q,q,q,q,q,q,K,K,K,K,K,K],[K,K,K,K,K,K,K,K,K,K,K,K,K,K,G,K,K,Z,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,G,G,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,K,G,G,G,G,G,G,G,G,G,G,G,G,G,G,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,$,Z,Z,Z,Z,Z,Z,Z,Z,Z,$,$,G,G,G,G,$,G,G,G,G,G],[P,P,P,P,P,P,P,P,P,P,P,ar,ar,ar,M,$,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,P,H,rr,tr,er,nr,ir,Q,X,X,X,X,X,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,Q,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,P,ar,ar,ar,ar,ar,G,G,G,G,G,ar,ar,ar,ar,ar,ar,q,M,G,G,q,q,q,q,q,q,W,W,G,G,G,M,q,q,q,q,q,q,q,q,q,q,W,W,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,X,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G],[M,M,M,M,M,M,M,G,G,G,G,G,G,G,G,G,G,G,G,M,M,M,M,M,G,G,G,G,G,$,Z,$,$,$,$,$,$,$,$,$,$,W,$,$,$,$,$,$,$,$,$,$,$,$,$,G,$,$,$,$,$,G,$,G,$,$,G,$,$,G,$,$,$,$,$,$,$,$,$,$,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K],[Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,Z,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,Z,Z,Z,Z,Z,Z,Z,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,Q,G,Q,G,G,Q,G,G,G,G,G,G,G,G,G,X,G,G,W,W,G,G,G,G,G,X,X,G,G,G,G,G,K,K,K,K,K,G,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,K,G,G,ar],[G,G,G,X,X,X,G,G,G,G,G,W,Q,W,Q,Q,q,q,q,q,q,q,q,q,q,q,Q,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,G,G,G,G,G,G,G,G,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,G,G,G,M,M,M,M,M,M,G,G,M,M,M,M,M,M,G,G,M,M,M,M,M,M,G,G,M,M,M,G,G,G,X,X,G,G,G,X,X,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G,G]];return 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,e});
//# sourceMappingURL=../sourcemaps/string/BidiEngine.js.map