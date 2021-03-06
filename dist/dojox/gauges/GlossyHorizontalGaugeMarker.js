/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/Color","./BarLineIndicator"],function(e,t,r){return e("dojox.gauges.GlossyHorizontalGaugeMarker",[r],{interactionMode:"gauge",color:"black",_getShapes:function(e){if(!this._gauge)return null;var r=this.value;r<this._gauge.min&&(r=this._gauge.min),r>this._gauge.max&&(r=this._gauge.max);var a=this._gauge._getPosition(r),o=[],i=new t(this.color);i.a=.67;var s=t.blendColors(i,new t("white"),.4),h=o[0]=e.createGroup(),x=this._gauge.height/100;x=Math.max(x,.5),x=Math.min(x,1),h.setTransform({xx:1,xy:0,yx:0,yy:1,dx:a,dy:0});var g=h.createGroup().setTransform({xx:1,xy:0,yx:0,yy:1,dx:10*-x,dy:this._gauge.dataY+this.offset}).createGroup().setTransform({xx:x,xy:0,yx:0,yy:x,dx:0,dy:0});return g.createRect({x:.5,y:0,width:20,height:47,r:6}).setFill(i).setStroke(s),g.createPath({path:"M 10.106 41 L 10.106 6 C 10.106 2.687 7.419 0 4.106 0 L 0.372 0 C -0.738 6.567 1.022 15.113 1.022 23.917 C 1.022 32.721 2.022 40.667 0.372 47 L 4.106 47 C 7.419 47 10.106 44.314 10.106 41 Z"}).setFill(s).setTransform({xx:1,xy:0,yx:0,yy:1,dx:10.306,dy:.009}),g.createRect({x:9.5,y:1.5,width:2,height:34,r:.833717}).setFill(i).setStroke(this.color),g.createRect({x:9,y:0,width:3,height:34,r:6}).setFill({type:"linear",x1:9,y1:0,x2:9,y2:34,colors:[{offset:0,color:"white"},{offset:1,color:this.color}]}),o}})});
//# sourceMappingURL=../sourcemaps/gauges/GlossyHorizontalGaugeMarker.js.map
