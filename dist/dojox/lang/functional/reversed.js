/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/kernel","./lambda"],function(l,r,n){return l.mixin(n,{filterRev:function(l,t,a){"string"==typeof l&&(l=l.split("")),a=a||r.global,t=n.lambda(t);for(var e,o=[],i=l.length-1;i>=0;--i)e=l[i],t.call(a,e,i,l)&&o.push(e);return o},forEachRev:function(l,t,a){"string"==typeof l&&(l=l.split("")),a=a||r.global,t=n.lambda(t);for(var e=l.length-1;e>=0;t.call(a,l[e],e,l),--e);},mapRev:function(l,t,a){"string"==typeof l&&(l=l.split("")),a=a||r.global,t=n.lambda(t);for(var e=l.length,o=new Array(e),i=e-1,f=0;i>=0;o[f++]=t.call(a,l[i],i,l),--i);return o},everyRev:function(l,t,a){"string"==typeof l&&(l=l.split("")),a=a||r.global,t=n.lambda(t);for(var e=l.length-1;e>=0;--e)if(!t.call(a,l[e],e,l))return!1;return!0},someRev:function(l,t,a){"string"==typeof l&&(l=l.split("")),a=a||r.global,t=n.lambda(t);for(var e=l.length-1;e>=0;--e)if(t.call(a,l[e],e,l))return!0;return!1}}),n});
//# sourceMappingURL=../../sourcemaps/lang/functional/reversed.js.map
