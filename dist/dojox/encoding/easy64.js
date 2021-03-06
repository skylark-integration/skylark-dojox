/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(r){var o=r.getObject("dojox.encoding.easy64",!0),n=function(r,o,n){for(var e=0;e<o;e+=3)n.push(String.fromCharCode(33+(r[e]>>>2)),String.fromCharCode(((3&r[e])<<4)+(r[e+1]>>>4)+33),String.fromCharCode(((15&r[e+1])<<2)+(r[e+2]>>>6)+33),String.fromCharCode(33+(63&r[e+2])))};return o.encode=function(r){var o=[],e=r.length%3,t=r.length-e;if(n(r,t,o),e){for(var f=r.slice(t);f.length<3;)f.push(0);n(f,3,o);for(var a=3;a>e;o.pop(),--a);}return o.join("")},o.decode=function(r){var o,n,e,t=r.length,f=[],a=[0,0,0,0];for(o=0;o<t;o+=4){for(n=0;n<4;++n)a[n]=r.charCodeAt(o+n)-33;for(n=e=t-o;n<4;a[++n]=0);for(f.push((a[0]<<2)+(a[1]>>>4),((15&a[1])<<4)+(a[2]>>>2),((3&a[2])<<6)+a[3]),n=e;n<4;++n,f.pop());}return f},o});
//# sourceMappingURL=../sourcemaps/encoding/easy64.js.map
