/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["..","dojo/_base/lang"],function(dojox,lang){var du=lang.getObject("lang.utils",!0,dojox),empty={},opts=Object.prototype.toString,clone=function(e){if(e)switch(opts.call(e)){case"[object Array]":return e.slice(0);case"[object Object]":return lang.delegate(e)}return e};return lang.mixin(du,{coerceType:function(target,source){switch(typeof target){case"number":return Number(eval("("+source+")"));case"string":return String(source);case"boolean":return Boolean(eval("("+source+")"))}return eval("("+source+")")},updateWithObject:function(e,t,r){if(!t)return e;for(var n in e)if(n in t&&!(n in empty)){var c=e[n];c&&"object"==typeof c?du.updateWithObject(c,t[n],r):e[n]=r?du.coerceType(c,t[n]):clone(t[n])}return e},updateWithPattern:function(e,t,r,n){if(!t||!r)return e;for(var c in r)c in t&&!(c in empty)&&(e[c]=n?du.coerceType(r[c],t[c]):clone(t[c]));return e},merge:function(e,t){if(t){var r,n,c,o,a=opts.call(e),u=opts.call(t);switch(u){case"[object Array]":if(u==a){for(n=0,c=(r=new Array(Math.max(e.length,t.length))).length;n<c;++n)r[n]=du.merge(e[n],t[n]);return r}return t.slice(0);case"[object Object]":if(u==a&&e){for(n in r=lang.delegate(e),t)n in e?(c=e[n],(o=t[n])!==c&&(r[n]=du.merge(c,o))):r[n]=lang.clone(t[n]);return r}return lang.clone(t)}}return t}}),du});
//# sourceMappingURL=../sourcemaps/lang/utils.js.map
