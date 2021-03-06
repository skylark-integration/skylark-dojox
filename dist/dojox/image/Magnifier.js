/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-construct","dojo/_base/window","dojox/gfx","dojox/gfx/canvas","./MagnifierLite"],function(s,e,i,t,o,h){return s("dojox.image.Magnifier",h,{_createGlass:function(){this.glassNode=e.create("div",{style:{height:this.glassSize+"px",width:this.glassSize+"px"},className:"glassNode"},i.body()),this.surfaceNode=e.create("div",null,this.glassNode),t.switchTo("canvas"),this.surface=o.createSurface(this.surfaceNode,this.glassSize,this.glassSize),this.img=this.surface.createImage({src:this.domNode.src,width:this._zoomSize.w,height:this._zoomSize.h})},_placeGlass:function(s){var e=s.pageX-2,i=s.pageY-2,t=this.offset.x+this.offset.w+2,o=this.offset.y+this.offset.h+2;e<this.offset.x||i<this.offset.y||e>t||i>o?this._hideGlass():this.inherited(arguments)},_setImage:function(s){var e=(s.pageX-this.offset.x)/this.offset.w,i=(s.pageY-this.offset.y)/this.offset.h,t=this._zoomSize.w*e*-1+this.glassSize*e,o=this._zoomSize.h*i*-1+this.glassSize*i;this.img.setShape({x:t,y:o})}})});
//# sourceMappingURL=../sourcemaps/image/Magnifier.js.map
