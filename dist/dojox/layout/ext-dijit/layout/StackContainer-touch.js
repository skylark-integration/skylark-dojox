/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.layout.ext-dijit.layout.StackContainer-touch"),dojo.experimental("dojox.layout.ext-dijit.layout.StackContainer-touch"),dojo.require("dijit.layout.StackContainer"),dojo.connect(dijit.layout.StackContainer.prototype,"postCreate",function(){this.axis="dijitAccordionContainer"==this.baseClass?"Y":"X",dojo.forEach(["touchstart","touchmove","touchend","touchcancel"],function(t){this.connect(this.domNode,t,function(t){switch(t.type){case"touchmove":if(t.preventDefault(),this.touchPosition){var o=t.touches[0]["page"+this.axis]-this.touchPosition;Math.abs(o)>100&&("Y"==this.axis&&(o*=-1),delete this.touchPosition,o>0?!this.selectedChildWidget.isLastChild&&this.forward():!this.selectedChildWidget.isFirstChild&&this.back())}break;case"touchstart":if(1==t.touches.length){this.touchPosition=t.touches[0]["page"+this.axis];break}case"touchend":case"touchcancel":delete this.touchPosition}})},this)});
//# sourceMappingURL=../../../sourcemaps/layout/ext-dijit/layout/StackContainer-touch.js.map
