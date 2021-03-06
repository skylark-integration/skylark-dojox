/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(o){var r=o.getObject("dojox.encoding.ascii85",!0),e=function(o,r,e){var n,f,t,i=[0,0,0,0,0];for(n=0;n<r;n+=4){if(t=256*(256*(256*o[n]+o[n+1])+o[n+2])+o[n+3])for(f=0;f<5;i[f++]=t%85+33,t=Math.floor(t/85));else e.push("z");e.push(String.fromCharCode(i[4],i[3],i[2],i[1],i[0]))}};return r.encode=function(o){var r=[],n=o.length%4,f=o.length-n;if(e(o,f,r),n){for(var t=o.slice(f);t.length<4;)t.push(0);e(t,4,r);var i=r.pop();"z"==i&&(i="!!!!!"),r.push(i.substr(0,n+1))}return r.join("")},r.decode=function(o){var r,e,n,f,t,i,h=o.length,u=[],a=[0,0,0,0,0];for(r=0;r<h;++r)if("z"!=o.charAt(r)){for(e=0;e<5;++e)a[e]=o.charCodeAt(r+e)-33;if((i=h-r)<5){for(e=i;e<4;a[++e]=0);a[i]=85}for(f=255&(n=85*(85*(85*(85*a[0]+a[1])+a[2])+a[3])+a[4]),t=255&(n>>>=8),n>>>=8,u.push(n>>>8,255&n,t,f),e=i;e<5;++e,u.pop());r+=4}else u.push(0,0,0,0);return u},r});
//# sourceMappingURL=../sourcemaps/encoding/ascii85.js.map
