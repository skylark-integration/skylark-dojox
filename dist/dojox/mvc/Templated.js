/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","./at"],function(i,n,t,e,s){return i("dojox.mvc.Templated",[t,e,s],{bindings:null,startup:function(){var i=n.isFunction(this.bindings)&&this.bindings.call(this)||this.bindings;for(var t in i){var e=this[t],s=i[t];if(e)for(var a in s)e.set(a,s[a]);else console.warn("Widget with the following attach point was not found: "+t)}this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mvc/Templated.js.map
