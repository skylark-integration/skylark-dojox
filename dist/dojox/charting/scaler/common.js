/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(e){var t=function(e,t){return Math.abs(e-t)<=1e-6*(Math.abs(e)+Math.abs(t))},n=e.getObject("dojox.charting.scaler.common",!0),r={};return e.mixin(n,{doIfLoaded:function(e,t,n){if(void 0==r[e])try{r[e]=require(e)}catch(t){r[e]=null}return r[e]?t(r[e]):n()},getNumericLabel:function(e,r,a){var o="";if(n.doIfLoaded("dojo/number",function(t){o=(a.fixed?t.format(e,{places:r<0?-r:0}):t.format(e))||""},function(){o=a.fixed?e.toFixed(r<0?-r:0):e.toString()}),a.labelFunc){var i=a.labelFunc(o,e,r);if(i)return i}if(a.labels){for(var u=a.labels,l=0,f=u.length;l<f;){var c=Math.floor((l+f)/2);u[c].value<e?l=c+1:f=c}if(l<u.length&&t(u[l].value,e))return u[l].text;if(--l>=0&&l<u.length&&t(u[l].value,e))return u[l].text;if((l+=2)<u.length&&t(u[l].value,e))return u[l].text}return o}})});
//# sourceMappingURL=../../sourcemaps/charting/scaler/common.js.map
