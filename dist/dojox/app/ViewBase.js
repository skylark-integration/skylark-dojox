/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["require","dojo/when","dojo/on","dojo/dom-attr","dojo/dom-style","dojo/_base/declare","dojo/_base/lang","dojo/Deferred","./utils/model","./utils/constraints"],function(require,t,e,i,s,r,o,n,a,h){return r("dojox.app.ViewBase",null,{constructor:function(t){this.id="",this.name="",this.children={},this.selectedChildren={},this.loadedStores={},this._started=!1,o.mixin(this,t),this.parent.views&&o.mixin(this,this.parent.views[this.name])},start:function(){return this._started?this:(this._startDef=new n,t(this.load(),o.hitch(this,function(){this._createDataStore(this),this._setupModel()})),this._startDef)},load:function(){var e=this._loadViewController();return t(e,o.hitch(this,function(t){t&&r.safeMixin(this,t)})),e},_createDataStore:function(){if(this.parent.loadedStores&&o.mixin(this.loadedStores,this.parent.loadedStores),this.stores)for(var t in this.stores)if("_"!==t.charAt(0)){var e=this.stores[t].type?this.stores[t].type:"dojo/store/Memory",i={};this.stores[t].params&&o.mixin(i,this.stores[t].params);try{var s=require(e)}catch(t){throw new Error(e+" must be listed in the dependencies")}if(i.data&&o.isString(i.data)&&(i.data=o.getObject(i.data)),this.stores[t].observable){try{var r=require("dojo/store/Observable")}catch(t){throw new Error("dojo/store/Observable must be listed in the dependencies")}this.stores[t].store=r(new s(i))}else this.stores[t].store=new s(i);this.loadedStores[t]=this.stores[t].store}},_setupModel:function(){if(this.loadedModels)this._startup();else{var e;try{e=a(this.models,this.parent,this.app)}catch(t){throw new Error("Error creating models: "+t.message)}t(e,o.hitch(this,function(t){t&&(this.loadedModels=o.isArray(t)?t[0]:t),this._startup()}),function(t){throw new Error("Error creating models: "+t.message)})}},_startup:function(){this._initViewHidden(),this._needsResize=!0,this._startLayout()},_initViewHidden:function(){s.set(this.domNode,"visibility","hidden")},_startLayout:function(){this.app.log("  > in app/ViewBase _startLayout firing layout for name=[",this.name,"], parent.name=[",this.parent.name,"]"),this.hasOwnProperty("constraint")||(this.constraint=i.get(this.domNode,"data-app-constraint")||"center"),h.register(this.constraint),this.app.emit("app-initLayout",{view:this,callback:o.hitch(this,function(){this.startup(),this.app.log("  > in app/ViewBase calling init() name=[",this.name,"], parent.name=[",this.parent.name,"]"),this.init(),this._started=!0,this._startDef&&this._startDef.resolve(this)})})},_loadViewController:function(){var t,e,i=new n;if(!this.controller)return this.app.log("  > in app/ViewBase _loadViewController no controller set for view name=[",this.name,"], parent.name=[",this.parent.name,"]"),i.resolve(!0),i;t=this.controller.replace(/(\.js)$/,"");try{var s=t,r=s.indexOf("./");r>=0&&(s=t.substring(r+2)),e=require.on?require.on("error",function(t){i.isResolved()||i.isRejected()||t.info[0]&&t.info[0].indexOf(s)>=0&&(i.resolve(!1),e&&e.remove())}):null,0==t.indexOf("./")&&(t="app/"+t),require([t],function(t){i.resolve(t),e&&e.remove()})}catch(t){i.reject(t),e&&e.remove()}return i},init:function(){},beforeActivate:function(){},afterActivate:function(){},beforeDeactivate:function(){},afterDeactivate:function(){},destroy:function(){}})});
//# sourceMappingURL=../sourcemaps/app/ViewBase.js.map
