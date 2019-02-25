/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../../util/oo","../../manager/_registry","../../util/positioning","../Arrow"],function(t,i,s,e,n){var h=i.declare(n,function(t){this.minimumSize=this.style.arrows.length,this.addShadow({size:3,mult:2})},{draws:!0,type:"dojox.drawing.tools.custom.Vector",minimumSize:30,showAngle:!0,changeAxis:function(t){if(0==(t=void 0!==t?t:this.style.zAxis?0:1))this.style.zAxis=!1,this.data.cosphi=0;else{this.style.zAxis=!0;var i=this.points,s=this.zPoint();this.setPoints([{x:i[0].x,y:i[0].y},{x:s.x,y:s.y}])}this.render()},_createZeroVector:function(t,i,s){var e="hit"==t?this.minimumSize:this.minimumSize/6,n="hit"==t?s.fill:null;i={cx:this.data.x1,cy:this.data.y1,rx:e,ry:e},this.remove(this[t]),this[t]=this.container.createEllipse(i).setStroke(s).setFill(n),this.util.attr(this[t],"drawingType","stencil")},_create:function(t,i,s){this.remove(this[t]),this[t]=this.container.createLine(i).setStroke(s),this._setNodeAtts(this[t])},onDrag:function(t){if(!this.created){var i=t.start.x,s=t.start.y,e=t.x,n=t.y;if(this.keys.shift&&!this.style.zAxis){var h=this.util.snapAngle(t,.25);e=h.x,n=h.y}if(this.keys.alt){var r=e>i?(e-i)/2:(i-e)/-2,a=n>s?(n-s)/2:(s-n)/-2;i-=r,e-=r,s-=a,n-=a}if(this.style.zAxis){var o=this.zPoint(t);e=o.x,n=o.y}this.setPoints([{x:i,y:s},{x:e,y:n}]),this.render()}},onTransform:function(t){this._isBeingModified||this.onTransformBegin(),this.setPoints(this.points),this.render()},anchorConstrain:function(t,i){if(!this.style.zAxis)return null;var s=this.style.zAngle*Math.PI/180,e=t<0?t>-i:t<-i;return{x:e?t:-i/Math.tan(s),y:e?-Math.tan(s)*t:i}},zPoint:function(t){if(void 0===t){if(!this.points[0])return null;var i=this.pointsToData();t={start:{x:i.x1,y:i.y1},x:i.x2,y:i.y2}}var s=this.util.length(t),n=e.angle(t.start,t);return n<0&&(n=360+n),n=n>135&&n<315?this.style.zAngle:this.util.oppAngle(this.style.zAngle),this.util.pointOnCircle(t.start.x,t.start.y,s,n)},pointsToData:function(t){var i=0,s={start:{x:(t=t||this.points)[0].x,y:t[0].y},x:t[1].x,y:t[1].y};if(this.style.zAxis&&this.util.length(s)>this.minimumSize){var n=e.angle(s.start,s);n<0&&(n=360+n),i=n>135&&n<315?1:-1}return this.data={x1:t[0].x,y1:t[0].y,x2:t[1].x,y2:t[1].y,cosphi:i},this.data},dataToPoints:function(t){if((t=t||this.data).radius||t.angle){var i=0,s=this.util.pointOnCircle(t.x,t.y,t.radius,t.angle);(this.style.zAxis||t.cosphi&&0!=t.cosphi)&&(this.style.zAxis=!0,i=t.angle>135&&t.angle<315?1:-1),this.data=t={x1:t.x,y1:t.y,x2:s.x,y2:s.y,cosphi:i}}return this.points=[{x:t.x1,y:t.y1},{x:t.x2,y:t.y2}],this.points},render:function(){this.onBeforeRender(this),this.getRadius()>=this.minimumSize?(this._create("hit",this.data,this.style.currentHit),this._create("shape",this.data,this.style.current)):(this.data.cosphi=0,this._createZeroVector("hit",this.data,this.style.currentHit),this._createZeroVector("shape",this.data,this.style.current))},onUp:function(t){if(!this.created&&this._downOnCanvas){if(this._downOnCanvas=!1,!this.shape){t.start.x=this.style.zAxis?t.start.x+100:t.start.x,t.y=t.y+100,this.setPoints([{x:t.start.x,y:t.start.y},{x:t.x,y:t.y}]),this.render()}if(this.getRadius()<this.minimumSize){var i=this.points;this.setPoints([{x:i[0].x,y:i[0].y},{x:i[0].x,y:i[0].y}])}else{i=this.points;var s=this.style.zAxis?this.zPoint(t):this.util.snapAngle(t,this.angleSnap/180);this.setPoints([{x:i[0].x,y:i[0].y},{x:s.x,y:s.y}])}this.renderedOnce=!0,this.onRender(this)}}});return t.setObject("dojox.drawing.tools.custom.Vector",h),h.setup={name:"dojox.drawing.tools.custom.Vector",tooltip:"Vector Tool",iconClass:"iconVector"},s.register(h.setup,"tool"),h});
//# sourceMappingURL=../../../sourcemaps/drawing/tools/custom/Vector.js.map