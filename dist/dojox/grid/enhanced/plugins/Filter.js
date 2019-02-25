/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","../_Plugin","./Dialog","./filter/FilterLayer","./filter/FilterBar","./filter/FilterDefDialog","./filter/FilterStatusTip","./filter/ClearFilterConfirm","../../EnhancedGrid","dojo/i18n!../nls/Filter"],function(e,t,i,r,l,n,o,s,a,f,h){var u=e("dojox.grid.enhanced.plugins.Filter",i,{name:"filter",constructor:function(e,i){this.grid=e,this.nls=h,("number"!=typeof(i=this.args=t.isObject(i)?i:{}).ruleCount||i.ruleCount<0)&&(i.ruleCount=3),void 0===(this.ruleCountToConfirmClearFilter=i.ruleCountToConfirmClearFilter)&&(this.ruleCountToConfirmClearFilter=2),this._wrapStore();var l={plugin:this};this.clearFilterDialog=new r({refNode:this.grid.domNode,title:this.nls.clearFilterDialogTitle,content:new a(l)}),this.filterDefDialog=new o(l),this.filterBar=new n(l),this.filterStatusTip=new s(l),e.onFilterDefined=function(){},this.connect(e.layer("filter"),"onFilterDefined",function(t){e.onFilterDefined(e.getFilter(),e.getFilterRelation())})},destroy:function(){this.inherited(arguments);try{this.grid.unwrap("filter"),this.filterBar.destroyRecursive(),this.filterBar=null,this.clearFilterDialog.destroyRecursive(),this.clearFilterDialog=null,this.filterStatusTip.destroy(),this.filterStatusTip=null,this.filterDefDialog.destroy(),this.filterDefDialog=null,this.grid=null,this.args=null}catch(e){console.warn("Filter.destroy() error:",e)}},_wrapStore:function(){var e=this.grid,i=this.args,r=i.isServerSide?new l.ServerSideFilterLayer(i):new l.ClientSideFilterLayer({cacheSize:i.filterCacheSize,fetchAll:i.fetchAllOnFirstFilter,getter:this._clientFilterGetter});l.wrap(e,"_storeLayerFetch",r),this.connect(e,"_onDelete",t.hitch(r,"invalidate"))},onSetStore:function(e){this.filterDefDialog.clearFilter(!0)},_clientFilterGetter:function(e,t,i){return t.get(i,e)}});return f.registerPlugin(u),u});
//# sourceMappingURL=../../../sourcemaps/grid/enhanced/plugins/Filter.js.map