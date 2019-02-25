/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.declare-old"),dojox.lang.tests.declareOld=function(t,o,e){var r,n=arguments.callee;dojo.isArray(o)&&(o=(r=o).shift()),r&&dojo.forEach(r,function(e,r){if(!e)throw t+": mixin #"+r+" is null";o=n._delegate(o,e)});var i=n._delegate(o);return e=e||{},i.extend(e),dojo.extend(i,{declaredClass:t,_constructor:e.constructor}),i.prototype.constructor=i,dojo.setObject(t,i)},dojo.mixin(dojox.lang.tests.declareOld,{_delegate:function(t,o){var e=(t||0).prototype,r=(o||0).prototype,n=dojox.lang.tests.declareOld,i=n._makeCtor();return dojo.mixin(i,{superclass:e,mixin:r,extend:n._extend}),t&&(i.prototype=dojo._delegate(e)),dojo.extend(i,n._core,r||0,{_constructor:null,preamble:null}),i.prototype.constructor=i,i.prototype.declaredClass=(e||0).declaredClass+"_"+(r||0).declaredClass,i},_extend:function(t){var o,e;for(o in t)dojo.isFunction(e=t[o])&&!(0)[o]&&(e.nom=o,e.ctor=this);dojo.extend(this,t)},_makeCtor:function(){return function(){this._construct(arguments)}},_core:{_construct:function(t){var o,e,r=t.callee,n=r.superclass,i=n&&n.constructor,s=r.mixin,c=s&&s.constructor,d=t;d[0]&&(e=d[0].preamble)&&(d=e.apply(this,d)||d),(e=r.prototype.preamble)&&(d=e.apply(this,d)||d),i&&i.apply&&i.apply(this,d),c&&c.apply&&c.apply(this,d),(o=r.prototype._constructor)&&o.apply(this,t),this.constructor.prototype==r.prototype&&(i=this.postscript)&&i.apply(this,t)},_findMixin:function(t){for(var o,e,r=this.constructor;r;){if(o=r.superclass,(e=r.mixin)==t||e instanceof t.constructor)return o;if(e&&e._findMixin&&(e=e._findMixin(t)))return e;r=o&&o.constructor}},_findMethod:function(t,o,e,r){var n,i,s,c=e;do{if((i=(n=c.constructor).mixin)&&(i=this._findMethod(t,o,i,r)))return i;if((s=c[t])&&r==(s==o))return c;c=n.superclass}while(c);return!r&&(c=this._findMixin(e))&&this._findMethod(t,o,c,r)},inherited:function(t,o,e){var r=arguments;"string"!=typeof r[0]&&(e=o,t=(o=t).callee.nom),r=e||o;var n,i,s=o.callee,c=this.constructor.prototype;if(this[t]!=s||c[t]==s){if(!(i=(s.ctor||0).superclass||this._findMethod(t,s,c,!0)))throw this.declaredClass+': inherited method "'+t+'" mismatch';c=this._findMethod(t,s,i,!1)}if(!(n=c&&c[t]))throw i.declaredClass+': inherited method "'+t+'" not found';return n.apply(this,r)}}});
//# sourceMappingURL=../../sourcemaps/lang/tests/declare-old.js.map