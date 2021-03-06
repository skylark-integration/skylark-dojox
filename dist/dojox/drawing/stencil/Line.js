/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","./_Base","../manager/_registry"],function(t,e,i,n){var s=e.declare(i,function(t){},{type:"dojox.drawing.stencil.Line",anchorType:"single",baseRender:!0,dataToPoints:function(t){if((t=t||this.data).radius||t.angle){var e=this.util.pointOnCircle(t.x,t.y,t.radius,t.angle);this.data=t={x1:t.x,y1:t.y,x2:e.x,y2:e.y}}return this.points=[{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}],this.points},pointsToData:function(t){return t=t||this.points,this.data={x1:t[0].x,y1:t[0].y,x2:t[1].x,y2:t[1].y},this.data},_create:function(t,e,i){this.remove(this[t]),this[t]=this.container.createLine(e).setStroke(i),this._setNodeAtts(this[t])},render:function(){this.onBeforeRender(this),this.renderHit&&this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)}});return t.setObject("dojox.drawing.stencil.Line",s),n.register({name:"dojox.drawing.stencil.Line"},"stencil"),s});
//# sourceMappingURL=../../sourcemaps/drawing/stencil/Line.js.map
