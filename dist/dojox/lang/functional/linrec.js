/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.linrec"),dojo.require("dojox.lang.functional.lambda"),dojo.require("dojox.lang.functional.util"),function(){var a=dojox.lang.functional,n=a.inlineLambda,_=["_r","_y.a"];a.linrec=function(t,o,l,r){var i,e,c,y,x,d,u,f,p={},g={},s=function(a){p[a]=1};"string"==typeof t?x=n(t,"_x",s):(i=a.lambda(t),x="_c.apply(this, _x)",g["_c=_t.c"]=1),"string"==typeof o?d=n(o,"_x",s):(e=a.lambda(o),d="_t.t.apply(this, _x)"),"string"==typeof l?u=n(l,"_x",s):(c=a.lambda(l),u="_b.apply(this, _x)",g["_b=_t.b"]=1),"string"==typeof r?f=n(r,_,s):(y=a.lambda(r),f="_a.call(this, _r, _y.a)",g["_a=_t.a"]=1);var b=a.keys(p),j=a.keys(g),m=new Function([],"var _x=arguments,_y,_r".concat(b.length?","+b.join(","):"",j.length?",_t=_x.callee,"+j.join(","):e?",_t=_x.callee":"",";for(;!",x,";_x=",u,"){_y={p:_y,a:_x}}_r=",d,";for(;_y;_y=_y.p){_r=",f,"}return _r"));return i&&(m.c=i),e&&(m.t=e),c&&(m.b=c),y&&(m.a=y),m}}();
//# sourceMappingURL=../../sourcemaps/lang/functional/linrec.js.map
