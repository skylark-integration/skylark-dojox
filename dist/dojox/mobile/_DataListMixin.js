/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dijit/registry","./_DataMixin","./ListItem","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/_StoreListMixin"],function(t,i,e,o,s,n,r){var d=i(n("dojo-bidi")?"dojox.mobile._NonBidiDataListMixin":"dojox.mobile._DataListMixin",o,{append:!1,itemMap:null,itemRenderer:s,buildRendering:function(){if(this.inherited(arguments),this.store){var t=this.store;this.store=null,this.setStore(t,this.query,this.queryOptions)}},createListItem:function(i){var e={},o=this.store.getLabelAttributes(i),s=o?o[0]:null;t.forEach(this.store.getAttributes(i),function(t){t===s?e.label=this.store.getLabel(i):e[this.itemMap&&this.itemMap[t]||t]=this.store.getValue(i,t)},this),n("dojo-bidi")&&void 0===e.dir&&(e.dir=this.isLeftToRight()?"ltr":"rtl");var r=new this.itemRenderer(e);return i._widgetId=r.id,r},generateList:function(i,e){this.append||t.forEach(this.getChildren(),function(t){t.destroyRecursive()}),t.forEach(i,function(t,i){this.addChild(this.createListItem(t))},this)},onComplete:function(t,i){this.generateList(t,i)},onError:function(t,i){},onSet:function(t,i,e,o){},onNew:function(t,i){this.addChild(this.createListItem(t))},onDelete:function(t){e.byId(t._widgetId).destroyRecursive()},onStoreClose:function(t){this.store.clearOnClose&&this.refresh()}});return n("dojo-bidi")?i("dojox.mobile._DataListMixin",[d,r]):d});
//# sourceMappingURL=../sourcemaps/mobile/_DataListMixin.js.map
