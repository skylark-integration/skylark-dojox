/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/dom-construct","./common"],function(t,e,i,r,n){return t(null,{postCreate:function(){this.inherited(arguments),!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},_setTextDirAttr:function(t){!t||this._created&&this.textDir===t||(this.textDir=t,this._setTextDirToNodes(this.textDir))},_setTextDirToNodes:function(t){i.forEach(this.panelNodes,function(t){i.forEach(t.childNodes,function(t,e){t.innerHTML=n.removeUCCFromText(t.innerHTML),t.innerHTML=n.enforceTextDirWithUcc(t.innerHTML,this.textDir),t.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left"},this)},this)}})});
//# sourceMappingURL=../../sourcemaps/mobile/bidi/SpinWheelSlot.js.map
