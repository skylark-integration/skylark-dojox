/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dijit/_WidgetBase","dijit/form/_FormValueMixin","dijit/form/_TextBoxMixin","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/TextBox"],function(o,t,e,i,s,n,d){var h=o(n("dojo-bidi")?"dojox.mobile.NonBidiTextBox":"dojox.mobile.TextBox",[e,i,s],{baseClass:"mblTextBox",_setTypeAttr:null,_setPlaceHolderAttr:function(o){o=this._cv?this._cv(o):o,this._set("placeHolder",o),this.textbox.setAttribute("placeholder",o)},buildRendering:function(){this.srcNodeRef||(this.srcNodeRef=t.create("input",{type:this.type})),this.inherited(arguments),this.textbox=this.focusNode=this.domNode},postCreate:function(){this.inherited(arguments),this.connect(this.textbox,"onmouseup",function(){this._mouseIsDown=!1}),this.connect(this.textbox,"onmousedown",function(){this._mouseIsDown=!0}),this.connect(this.textbox,"onfocus",function(o){this._onFocus(this._mouseIsDown?"mouse":o),this._mouseIsDown=!1}),this.connect(this.textbox,"onblur","_onBlur")}});return n("dojo-bidi")?o("dojox.mobile.TextBox",[h,d]):h});
//# sourceMappingURL=../sourcemaps/mobile/TextBox.js.map
