/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","../gfx"],function(t){return t.getObject("sketch",!0,dojox),dojox.sketch.Anchor=function(t,e,i){var o=this,n=null;this.type=function(){return"Anchor"},this.annotation=t,this.id=e,this._key="anchor-"+dojox.sketch.Anchor.count++,this.shape=null,this.isControl=null==i||i,this.beginEdit=function(){this.annotation.beginEdit(dojox.sketch.CommandTypes.Modify)},this.endEdit=function(){this.annotation.endEdit()},this.zoom=function(i){if(this.shape){var o=Math.floor(4/i),n="vml"==dojox.gfx.renderer?1:1/i;this.shape.setShape({x:t[e].x-o,y:t[e].y-o,width:2*o,height:2*o}).setStroke({color:"black",width:n})}},this.setBinding=function(i){t[e]={x:t[e].x+i.dx,y:t[e].y+i.dy},t.draw(),t.drawBBox()},this.setUndo=function(){t.setUndo()},this.enable=function(){t.shape&&(t.figure._add(this),n={x:t[e].x-4,y:t[e].y-4,width:8,height:8},this.shape=t.shape.createRect(n).setFill([255,255,255,.35]),this.shape.getEventSource().setAttribute("id",o._key),this.shape.getEventSource().setAttribute("shape-rendering","crispEdges"),this.zoom(t.figure.zoomFactor))},this.disable=function(){t.figure._remove(this),t.shape&&t.shape.remove(this.shape),this.shape=null,n=null}},dojox.sketch.Anchor.count=0,dojox.sketch.Anchor});
//# sourceMappingURL=../sourcemaps/sketch/Anchor.js.map
