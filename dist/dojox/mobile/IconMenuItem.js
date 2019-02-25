/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-attr","./iconUtils","./_ItemBase"],function(e,t,o,i,n,s,d){return e("dojox.mobile.IconMenuItem",d,{closeOnAction:!1,tag:"li",baseClass:"mblIconMenuItem",selColor:"mblIconMenuItemSel",_selStartMethod:"touch",_selEndMethod:"touch",buildRendering:function(){this.domNode=this.srcNodeRef||i.create(this.tag),n.set(this.domNode,"role","menuitemcheckbox"),n.set(this.domNode,"aria-checked","false"),this.inherited(arguments),this.selected&&o.add(this.domNode,this.selColor),this.srcNodeRef&&(this.label||(this.label=t.trim(this.srcNodeRef.innerHTML)),this.srcNodeRef.innerHTML="");var e=this.anchorNode=this.containerNode=i.create("a",{className:"mblIconMenuItemAnchor",role:"presentation"}),s=i.create("table",{className:"mblIconMenuItemTable",role:"presentation"},e),d=this.iconParentNode=s.insertRow(-1).insertCell(-1);this.iconNode=i.create("div",{className:"mblIconMenuItemIcon"},d),this.labelNode=this.refNode=i.create("div",{className:"mblIconMenuItemLabel"},d),this.position="before",this.domNode.appendChild(e)},startup:function(){this._started||(this.connect(this.domNode,"onkeydown","_onClick"),this.inherited(arguments),this._isOnLine||(this._isOnLine=!0,this.set("icon",void 0!==this._pendingIcon?this._pendingIcon:this.icon),delete this._pendingIcon))},_onClick:function(e){if((!e||"keydown"!==e.type||13===e.keyCode)&&!1!==this.onClick(e)){if(this.closeOnAction){var t=this.getParent();t&&t.hide&&t.hide()}this.defaultClickAction(e)}},onClick:function(){},_setSelectedAttr:function(e){this.inherited(arguments),o.toggle(this.domNode,this.selColor,e),n.set(this.domNode,"aria-checked",e?"true":"false")}})});
//# sourceMappingURL=../sourcemaps/mobile/IconMenuItem.js.map