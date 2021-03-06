/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["exports","dojo/_base/lang","../util/oo","../stencil/Text"],function(exports,t,e,i){exports.Label=e.declare(i,function(e){this.master=e.stencil,this.labelPosition=e.labelPosition||"BR",t.isFunction(this.labelPosition)&&(this.setLabel=this.setLabelCustom),this.setLabel(e.text||""),this.connect(this.master,"onTransform",this,"setLabel"),this.connect(this.master,"destroy",this,"destroy"),this.style.labelSameColor&&this.connect(this.master,"attr",this,"beforeAttr")},{_align:"start",drawingType:"label",setLabelCustom:function(e){var i=t.hitch(this.master,this.labelPosition)();this.setData({x:i.x,y:i.y,width:i.w||this.style.text.minWidth,height:i.h||this._lineHeight}),e&&!e.split&&(e=this.getText()),this.render(this.typesetter(e))},setLabel:function(t){var e,i,s=this.master.getBounds();i=/B/.test(this.labelPosition)?s.y2-this._lineHeight:s.y1,/R/.test(this.labelPosition)?e=s.x2:(i=s.y1,this._align="end"),!this.labelWidth||t&&t.split&&t!=this.getText()?(this.setData({x:e,y:i,height:this._lineHeight,width:this.style.text.minWidth}),this.labelWidth=this.style.text.minWidth,this.render(this.typesetter(t))):(this.setData({x:e,y:i,height:this.data.height,width:this.data.width}),this.render())},beforeAttr:function(t,e){if(void 0!==e){var i=t;(t={})[i]=e}delete t.x,delete t.y,delete t.width,delete t.height,this.attr(t),!this.created&&this.render()}})});
//# sourceMappingURL=../../sourcemaps/drawing/annotations/Label.js.map
