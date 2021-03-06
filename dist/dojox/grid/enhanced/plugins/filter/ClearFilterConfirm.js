/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_Widget","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/text!../../templates/ClearFilterConfirmPane.html"],function(i,t,e,l,n){return i("dojox.grid.enhanced.plugins.filter.ClearFilterConfirm",[t,e,l],{templateString:n,widgetsInTemplate:!0,plugin:null,postMixInProperties:function(){var i=this.plugin.nls;this._clearBtnLabel=i.clearButton,this._cancelBtnLabel=i.cancelButton,this._clearFilterMsg=i.clearFilterMsg},postCreate:function(){this.inherited(arguments),this.cancelBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiCancelButton),this.clearBtn.domNode.setAttribute("aria-label",this.plugin.nls.waiClearButton)},uninitialize:function(){this.plugin=null},_onCancel:function(){this.plugin.clearFilterDialog.hide()},_onClear:function(){this.plugin.clearFilterDialog.hide(),this.plugin.filterDefDialog.clearFilter(this.plugin.filterDefDialog._clearWithoutRefresh)}})});
//# sourceMappingURL=../../../../sourcemaps/grid/enhanced/plugins/filter/ClearFilterConfirm.js.map
