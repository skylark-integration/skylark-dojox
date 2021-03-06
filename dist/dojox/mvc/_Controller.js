/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful","./_atBindingMixin"],function(t,i,e,s){return t("dojox.mvc._Controller",[e,s],{postscript:function(t,i){if(this._applyAttributes)return this.inherited(arguments);if(this._dbpostscript(t,i),t)for(var e in this.params=t,t)this.set(e,t[e]);var s;try{s=require("dijit/registry"),this.id=this.id||(i||{}).id||s.getUniqueId(this.declaredClass.replace(/\./g,"_")),s.add(this)}catch(t){}i?i.setAttribute("widgetId",this.id):this.startup()},startup:function(){this._applyAttributes||this._startAtWatchHandles(),this.inherited(arguments)},destroy:function(){if(this._beingDestroyed=!0,this._applyAttributes||this._stopAtWatchHandles(),this.inherited(arguments),!this._applyAttributes)try{require("dijit/registry").remove(this.id)}catch(t){}this._destroyed=!0},set:function(t,i){if("object"==typeof t){for(var e in t)t.hasOwnProperty(e)&&this.set(e,t[e]);return this}if(!this._applyAttributes){if("dojox.mvc.at"==(i||{}).atsignature)return this._setAtWatchHandle(t,i);var s="_set"+t.replace(/^[a-z]/,function(t){return t.toUpperCase()})+"Attr";return this[s]?this[s](i):this._set(t,i),this}return this.inherited(arguments)},_set:function(t,i){return this._applyAttributes?this.inherited(arguments):this._changeAttrValue(t,i)}})});
//# sourceMappingURL=../sourcemaps/mvc/_Controller.js.map
