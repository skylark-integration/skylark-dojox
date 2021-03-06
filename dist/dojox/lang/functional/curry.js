/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.curry"),dojo.require("dojox.lang.functional.lambda"),function(){var r=dojox.lang.functional,n=Array.prototype,a=function(r){return function(){var t=r.args.concat(n.slice.call(arguments,0));return arguments.length+r.args.length<r.arity?a({func:r.func,arity:r.arity,args:t}):r.func.apply(this,t)}};dojo.mixin(r,{curry:function(n,t){return n=r.lambda(n),t="number"==typeof t?t:n.length,a({func:n,arity:t,args:[]})},arg:{},partial:function(a){var t,o=arguments,l=o.length,u=new Array(l-1),i=[],e=1;for(a=r.lambda(a);e<l;++e)t=o[e],u[e-1]=t,t===r.arg&&i.push(e-1);return function(){for(var r=n.slice.call(u,0),t=0,o=i.length;t<o;++t)r[i[t]]=arguments[t];return a.apply(this,r)}},mixer:function(n,a){return n=r.lambda(n),function(){for(var r=new Array(a.length),t=0,o=a.length;t<o;++t)r[t]=arguments[a[t]];return n.apply(this,r)}},flip:function(n){return n=r.lambda(n),function(){for(var r=arguments,a=r.length-1,t=new Array(a+1),o=0;o<=a;++o)t[a-o]=r[o];return n.apply(this,t)}}})}();
//# sourceMappingURL=../../sourcemaps/lang/functional/curry.js.map
