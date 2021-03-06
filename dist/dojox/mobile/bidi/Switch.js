/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./common","dojo/dom-class"],function(t,i,e){return t(null,{postCreate:function(){this.inherited(arguments),!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},buildRendering:function(){this.inherited(arguments),this.isLeftToRight()||(e.add(this.left,"mblSwitchBgLeftRtl"),e.add(this.left.firstChild,"mblSwitchTextLeftRtl"),e.add(this.right,"mblSwitchBgRightRtl"),e.add(this.right.firstChild,"mblSwitchTextRightRtl"))},_newState:function(t){return this.isLeftToRight()?this.inherited(arguments):this.inner.offsetLeft<-this._width/2?"on":"off"},_setLeftLabelAttr:function(t){this.inherited(arguments),this.left.firstChild.innerHTML=i.enforceTextDirWithUcc(this.left.firstChild.innerHTML,this.textDir)},_setRightLabelAttr:function(t){this.inherited(arguments),this.right.firstChild.innerHTML=i.enforceTextDirWithUcc(this.right.firstChild.innerHTML,this.textDir)},_setTextDirAttr:function(t){!t||this._created&&this.textDir===t||(this.textDir=t,this.left.firstChild.innerHTML=i.removeUCCFromText(this.left.firstChild.innerHTML),this.left.firstChild.innerHTML=i.enforceTextDirWithUcc(this.left.firstChild.innerHTML,this.textDir),this.right.firstChild.innerHTML=i.removeUCCFromText(this.right.firstChild.innerHTML),this.right.firstChild.innerHTML=i.enforceTextDirWithUcc(this.right.firstChild.innerHTML,this.textDir))}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/Switch.js.map
