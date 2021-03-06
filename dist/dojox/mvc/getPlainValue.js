/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/lang","dojo/Stateful"],function(t,e,n){var r={getType:function(t){return e.isArray(t)?"array":null!=t&&"[object Object]"=={}.toString.call(t)?"object":"value"},getPlainArray:function(e){return t.map(e,function(t){return a(t,this)},this)},getPlainObject:function(t){var e={};for(var r in t)r in n.prototype||"_watchCallbacks"==r||(e[r]=a(t[r],this));return e},getPlainValue:function(t){return t}},a=function(t,e){return(e||a)["getPlain"+(e||a).getType(t).replace(/^[a-z]/,function(t){return t.toUpperCase()})](t)};return e.setObject("dojox.mvc.getPlainValue",e.mixin(a,r))});
//# sourceMappingURL=../sourcemaps/mvc/getPlainValue.js.map
