/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.tailrec"),dojo.require("dojox.lang.functional.lambda"),dojo.require("dojox.lang.functional.util"),function(){var t=dojox.lang.functional,n=t.inlineLambda;t.tailrec=function(a,o,l){var e,_,i,c,r,x,u={},d={},b=function(t){u[t]=1};"string"==typeof a?c=n(a,"_x",b):(e=t.lambda(a),c="_c.apply(this, _x)",d["_c=_t.c"]=1),"string"==typeof o?r=n(o,"_x",b):(_=t.lambda(o),r="_t.t.apply(this, _x)"),"string"==typeof l?x=n(l,"_x",b):(i=t.lambda(l),x="_b.apply(this, _x)",d["_b=_t.b"]=1);var f=t.keys(u),g=t.keys(d),p=new Function([],"var _x=arguments,_t=_x.callee,_c=_t.c,_b=_t.b".concat(f.length?","+f.join(","):"",g.length?",_t=_x.callee,"+g.join(","):_?",_t=_x.callee":"",";for(;!",c,";_x=",x,");return ",r));return e&&(p.c=e),_&&(p.t=_),i&&(p.b=i),p}}();
//# sourceMappingURL=../../sourcemaps/lang/functional/tailrec.js.map
