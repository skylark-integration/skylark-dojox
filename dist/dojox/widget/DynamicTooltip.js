/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.widget.DynamicTooltip"),dojo.experimental("dojox.widget.DynamicTooltip"),dojo.require("dijit.Tooltip"),dojo.requireLocalization("dijit","loading"),dojo.declare("dojox.widget.DynamicTooltip",dijit.Tooltip,{hasLoaded:!1,href:"",label:"",preventCache:!1,postMixInProperties:function(){this.inherited(arguments),this._setLoadingLabel()},_setLoadingLabel:function(){this.href&&(this.label=dojo.i18n.getLocalization("dijit","loading",this.lang).loadingState)},_setHrefAttr:function(t){this.href=t,this.hasLoaded=!1},loadContent:function(t){!this.hasLoaded&&this.href&&(this._setLoadingLabel(),this.hasLoaded=!0,dojo.xhrGet({url:this.href,handleAs:"text",tooltipWidget:this,load:function(i,o){this.tooltipWidget.label=i,this.tooltipWidget.close(),this.tooltipWidget.open(t)},preventCache:this.preventCache}))},refresh:function(){this.hasLoaded=!1},open:function(t){(t=t||this._connectNodes&&this._connectNodes[0])&&(this.loadContent(t),this.inherited(arguments))}});
//# sourceMappingURL=../sourcemaps/widget/DynamicTooltip.js.map
