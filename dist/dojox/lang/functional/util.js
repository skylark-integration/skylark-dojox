/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.util"),dojo.require("dojox.lang.functional.lambda"),function(){var n=dojox.lang.functional;dojo.mixin(n,{inlineLambda:function(a,o,r){var i=n.rawLambda(a);r&&n.forEach(i.args,r);var t,l="string"==typeof o,d=l?i.args.length:Math.min(i.args.length,o.length),g=new Array(4*d+4),e=1;for(t=0;t<d;++t)g[e++]=i.args[t],g[e++]="=",g[e++]=l?o+"["+t+"]":o[t],g[e++]=",";return g[0]="(",g[e++]="(",g[e++]=i.body,g[e]="))",g.join("")}})}();
//# sourceMappingURL=../../sourcemaps/lang/functional/util.js.map
