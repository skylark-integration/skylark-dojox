/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.functional.multirec"),dojo.require("dojox.lang.functional.lambda"),dojo.require("dojox.lang.functional.util"),function(){var _=dojox.lang.functional,t=_.inlineLambda,a=["_y.r","_y.o"];_.multirec=function(n,o,r,i){var e,l,y,c,u,f,x,g,d={},p={},s=function(_){d[_]=1};"string"==typeof n?u=t(n,"_x",s):(e=_.lambda(n),u="_c.apply(this, _x)",p["_c=_t.c"]=1),"string"==typeof o?f=t(o,"_x",s):(l=_.lambda(o),f="_t.apply(this, _x)"),"string"==typeof r?x=t(r,"_x",s):(y=_.lambda(r),x="_b.apply(this, _x)",p["_b=_t.b"]=1),"string"==typeof i?g=t(i,a,s):(c=_.lambda(i),g="_a.call(this, _y.r, _y.o)",p["_a=_t.a"]=1);var b=_.keys(d),m=_.keys(p),h=new Function([],"var _y={a:arguments},_x,_r,_z,_i".concat(b.length?","+b.join(","):"",m.length?",_t=arguments.callee,"+m.join(","):"",l?m.length?",_t=_t.t":"_t=arguments.callee.t":"",";for(;;){for(;;){if(_y.o){_r=",g,";break}_x=_y.a;if(",u,"){_r=",f,";break}_y.o=_x;_x=",x,";_y.r=[];_z=_y;for(_i=_x.length-1;_i>=0;--_i){_y={p:_y,a:_x[_i],z:_z}}}if(!(_z=_y.z)){return _r}_z.r.push(_r);_y=_y.p}"));return e&&(h.c=e),l&&(h.t=l),y&&(h.b=y),c&&(h.a=c),h}}();
//# sourceMappingURL=../../sourcemaps/lang/functional/multirec.js.map
