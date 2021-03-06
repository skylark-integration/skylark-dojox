/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/_Contained","dijit/_WidgetBase","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/CarouselItem"],function(e,t,o,i,s,d,r,a){var h=e(r("dojo-bidi")?"dojox.mobile.NonBidiCarouselItem":"dojox.mobile.CarouselItem",[d,s],{alt:"",src:"",headerText:"",footerText:"",baseClass:"mblCarouselItem",buildRendering:function(){this.inherited(arguments),this.domNode.tabIndex="0",this.headerTextNode=t.create("div",{className:"mblCarouselItemHeaderText"},this.domNode),this.imageNode=t.create("img",{className:"mblCarouselItemImage"},this.domNode),this.footerTextNode=t.create("div",{className:"mblCarouselItemFooterText"},this.domNode)},startup:function(){this._started||(this.inherited(arguments),this.resize())},resize:function(e){var t=o.getMarginBox(this.domNode);if(0!==t.h){var i=o.getMarginBox(this.headerTextNode).h,s=o.getMarginBox(this.footerTextNode).h;o.setMarginBox(this.imageNode,{h:t.h-i-s})}},select:function(){var e=this.imageNode;i.set(e,"opacity",.4),this.defer(function(){i.set(e,"opacity",1)},1e3)},_setAltAttr:function(e){this._set("alt",e),this.imageNode.alt=e},_setSrcAttr:function(e){this._set("src",e),this.imageNode.src=e},_setHeaderTextAttr:function(e){this._set("headerText",e),this.headerTextNode.innerHTML=this._cv?this._cv(e):e},_setFooterTextAttr:function(e){this._set("footerText",e),this.footerTextNode.innerHTML=this._cv?this._cv(e):e}});return r("dojo-bidi")?e("dojox.mobile.CarouselItem",[h,a]):h});
//# sourceMappingURL=../sourcemaps/mobile/CarouselItem.js.map
