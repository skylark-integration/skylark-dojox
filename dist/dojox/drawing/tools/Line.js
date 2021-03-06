/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../util/oo","../manager/_registry","../stencil/Line"],function(i,t,s,e){var n=t.declare(e,function(){},{draws:!0,showAngle:!0,onTransformEnd:function(i){if(this._toggleSelected(),this.getRadius()<this.minimumSize){var t=this.points;this.setPoints([{x:t[0].x,y:t[0].y},{x:t[0].x,y:t[0].y}])}else{var s=this.data,e={start:{x:s.x1,y:s.y1},x:s.x2,y:s.y2},n=this.util.snapAngle(e,this.angleSnap/180);this.setPoints([{x:s.x1,y:s.y1},{x:n.x,y:n.y}]),this._isBeingModified=!1,this.onModify(this)}},onDrag:function(i){if(!this.created){var t=i.start.x,s=i.start.y,e=i.x,n=i.y;if(this.keys.shift){var o=this.util.snapAngle(i,.25);e=o.x,n=o.y}if(this.keys.alt){var a=e>t?(e-t)/2:(t-e)/-2,h=n>s?(n-s)/2:(s-n)/-2;t-=a,e-=a,s-=h,n-=h}this.setPoints([{x:t,y:s},{x:e,y:n}]),this.render()}},onUp:function(i){if(!this.created&&this._downOnCanvas){if(this._downOnCanvas=!1,this.shape){if(this.getRadius()<this.minimumSize)return void this.remove(this.shape,this.hit)}else{var t=i.start,s=4*this.minimumSize;this.setPoints([{x:t.x,y:t.y+s},{x:t.x,y:t.y}]),this.render()}var e=this.util.snapAngle(i,this.angleSnap/180),n=this.points;this.setPoints([{x:n[0].x,y:n[0].y},{x:e.x,y:e.y}]),this.renderedOnce=!0,this.onRender(this)}}});return i.setObject("dojox.drawing.tools.Line",n),n.setup={name:"dojox.drawing.tools.Line",tooltip:"Line Tool",iconClass:"iconLine"},s.register(n.setup,"tool"),n});
//# sourceMappingURL=../../sourcemaps/drawing/tools/Line.js.map
