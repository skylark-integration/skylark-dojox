/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","./lambda"],function(n,a,l){var e={};a.mixin(l,{scanl:function(t,r,o,f){var i,s,c;if("string"==typeof t&&(t=t.split("")),f=f||n.global,r=l.lambda(r),a.isArray(t))for((i=new Array((s=t.length)+1))[0]=o,c=0;c<s;o=r.call(f,o,t[c],c,t),i[++c]=o);else if("function"==typeof t.hasNext&&"function"==typeof t.next)for(i=[o],c=0;t.hasNext();i.push(o=r.call(f,o,t.next(),c++,t)));else for(c in i=[o],t)c in e||i.push(o=r.call(f,o,t[c],c,t));return i},scanl1:function(t,r,o){"string"==typeof t&&(t=t.split("")),o=o||n.global,r=l.lambda(r);var f,i,s,c=!0;if(a.isArray(t)){(f=new Array(i=t.length))[0]=s=t[0];for(var u=1;u<i;f[u]=s=r.call(o,s,t[u],u,t),++u);}else if("function"==typeof t.hasNext&&"function"==typeof t.next){if(t.hasNext())for(f=[s=t.next()],u=1;t.hasNext();f.push(s=r.call(o,s,t.next(),u++,t)));}else for(u in t)u in e||(c?(f=[s=t[u]],c=!1):f.push(s=r.call(o,s,t[u],u,t)));return f},scanr:function(a,e,t,r){"string"==typeof a&&(a=a.split("")),r=r||n.global,e=l.lambda(e);var o=a.length,f=new Array(o+1),i=o;for(f[o]=t;i>0;--i,t=e.call(r,t,a[i],i,a),f[i]=t);return f},scanr1:function(a,e,t){"string"==typeof a&&(a=a.split("")),t=t||n.global,e=l.lambda(e);var r=a.length,o=new Array(r),f=a[r-1],i=r-1;for(o[i]=f;i>0;--i,f=e.call(t,f,a[i],i,a),o[i]=f);return o}})});
//# sourceMappingURL=../../sourcemaps/lang/functional/scan.js.map
