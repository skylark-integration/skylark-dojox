/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/Deferred","dojo/_base/declare"],function(e,r){return r("dojox.mobile._StoreMixin",null,{store:null,query:null,queryOptions:null,labelProperty:"label",childrenProperty:"children",setStore:function(e,r,t){return e===this.store?null:(e&&(e.getValue=function(e,r){return e[r]}),this.store=e,this._setQuery(r,t),this.refresh())},setQuery:function(e,r){return this._setQuery(e,r),this.refresh()},_setQuery:function(e,r){this.query=e,this.queryOptions=r||this.queryOptions},refresh:function(){if(!this.store)return null;var r=this,t=this.store.query(this.query,this.queryOptions);return e.when(t,function(e){e.items&&(e=e.items),t.observe&&(r._observe_h&&r._observe_h.remove(),r._observe_h=t.observe(function(e,t,o){-1!=t?o!=t?(r.onDelete(e,t),-1!=o&&(r.onAdd?r.onAdd(e,o):r.onUpdate(e,o))):r.onAdd&&r.onUpdate(e,o):-1!=o&&(r.onAdd?r.onAdd(e,o):r.onUpdate(e,o))},!0)),r.onComplete(e)},function(e){r.onError(e)}),t},destroy:function(){this._observe_h&&(this._observe_h=this._observe_h.remove()),this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/mobile/_StoreMixin.js.map
