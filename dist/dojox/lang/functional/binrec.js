/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.binrec"),dojo.require("dojox.lang.functional.lambda"),dojo.require("dojox.lang.functional.util"),function(){var _=dojox.lang.functional,a=_.inlineLambda,r=["_z.r","_r","_z.a"];_.binrec=function(n,t,i,o){var l,e,c,x,p,y,d,u,f={},z={},b=function(_){f[_]=1};"string"==typeof n?p=a(n,"_x",b):(l=_.lambda(n),p="_c.apply(this, _x)",z["_c=_t.c"]=1),"string"==typeof t?y=a(t,"_x",b):(e=_.lambda(t),y="_t.apply(this, _x)"),"string"==typeof i?d=a(i,"_x",b):(c=_.lambda(i),d="_b.apply(this, _x)",z["_b=_t.b"]=1),"string"==typeof o?u=a(o,r,b):(x=_.lambda(o),u="_a.call(this, _z.r, _r, _z.a)",z["_a=_t.a"]=1);var g=_.keys(f),h=_.keys(z),s=new Function([],"var _x=arguments,_y,_z,_r".concat(g.length?","+g.join(","):"",h.length?",_t=_x.callee,"+h.join(","):"",e?h.length?",_t=_t.t":"_t=_x.callee.t":"",";while(!",p,"){_r=",d,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}for(;;){do{_r=",y,';if(!_z)return _r;while("r" in _z){_r=',u,";if(!(_z=_z.p))return _r}_z.r=_r;_x=_y.a;_y=_y.p}while(",p,");do{_r=",d,";_y={p:_y,a:_r[1]};_z={p:_z,a:_x};_x=_r[0]}while(!",p,")}"));return l&&(s.c=l),e&&(s.t=e),c&&(s.b=c),x&&(s.a=x),s}}();
//# sourceMappingURL=../../sourcemaps/lang/functional/binrec.js.map
