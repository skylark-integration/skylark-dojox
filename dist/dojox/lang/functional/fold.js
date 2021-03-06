/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/kernel","./lambda"],function(l,n,a,t){var e={};l.mixin(t,{foldl:function(n,o,r,f){var i,c;if("string"==typeof n&&(n=n.split("")),f=f||a.global,o=t.lambda(o),l.isArray(n))for(i=0,c=n.length;i<c;r=o.call(f,r,n[i],i,n),++i);else if("function"==typeof n.hasNext&&"function"==typeof n.next)for(i=0;n.hasNext();r=o.call(f,r,n.next(),i++,n));else for(i in n)i in e||(r=o.call(f,r,n[i],i,n));return r},foldl1:function(n,o,r){var f,i,c;if("string"==typeof n&&(n=n.split("")),r=r||a.global,o=t.lambda(o),l.isArray(n))for(f=n[0],i=1,c=n.length;i<c;f=o.call(r,f,n[i],i,n),++i);else if("function"==typeof n.hasNext&&"function"==typeof n.next){if(n.hasNext())for(f=n.next(),i=1;n.hasNext();f=o.call(r,f,n.next(),i++,n));}else{var d=!0;for(i in n)i in e||(d?(f=n[i],d=!1):f=o.call(r,f,n[i],i,n))}return f},foldr:function(l,n,e,o){"string"==typeof l&&(l=l.split("")),o=o||a.global,n=t.lambda(n);for(var r=l.length;r>0;--r,e=n.call(o,e,l[r],r,l));return e},foldr1:function(l,n,e){"string"==typeof l&&(l=l.split("")),e=e||a.global,n=t.lambda(n);for(var o=l.length,r=l[o-1],f=o-1;f>0;--f,r=n.call(e,r,l[f],f,l));return r},reduce:function(l,n,a){return arguments.length<3?t.foldl1(l,n):t.foldl(l,n,a)},reduceRight:function(l,n,a){return arguments.length<3?t.foldr1(l,n):t.foldr(l,n,a)},unfold:function(l,n,e,o,r){r=r||a.global,n=t.lambda(n),e=t.lambda(e),l=t.lambda(l);for(var f=[];!l.call(r,o);f.push(n.call(r,o)),o=e.call(r,o));return f}})});
//# sourceMappingURL=../../sourcemaps/lang/functional/fold.js.map
