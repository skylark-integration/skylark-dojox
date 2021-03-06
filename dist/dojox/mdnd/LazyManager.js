/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","dojo/dnd/common","dojo/dnd/Manager","./PureSource","dojo/_base/unload"],function(t,e,o,a,n,r,d,s,i){return e("dojox.mdnd.LazyManager",null,{constructor:function(){this._registry={},this._fakeSource=new i(n.create("div"),{copyOnly:!1}),this._fakeSource.startup(),t.addOnUnload(o.hitch(this,"destroy")),this.manager=s.manager()},getItem:function(t){var e=t.getAttribute("dndType");return{data:t.getAttribute("dndData")||t.innerHTML,type:e?e.split(/\s*,\s*/):["text"]}},startDrag:function(t,e){if(e=e||t.target){var o=this.manager,n=this.getItem(e);""==e.id&&r.set(e,"id",d.getUniqueId()),a.add(e,"dojoDndItem"),this._fakeSource.setItem(e.id,n),o.startDrag(this._fakeSource,[e],!1),o.onMouseMove(t)}},cancelDrag:function(){var t=this.manager;t.target=null,t.onMouseUp()},destroy:function(){this._fakeSource.destroy()}})});
//# sourceMappingURL=../sourcemaps/mdnd/LazyManager.js.map
