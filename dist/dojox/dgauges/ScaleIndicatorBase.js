/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/window","dojo/on","dojo/touch","dojo/_base/fx","dojox/gfx","dojox/widget/_Invalidating","./IndicatorBase"],function(i,t,n,s,e,o,a,h,r){return t("dojox.dgauges.ScaleIndicatorBase",r,{scale:null,value:0,interactionArea:"gauge",interactionMode:"mouse",animationDuration:0,animationEaser:null,_indicatorShapeFuncFlag:!0,_interactionAreaFlag:!0,_downListeners:null,_cursorListeners:null,_moveAndUpListeners:null,_transitionValue:NaN,_preventAnimation:!1,_animation:null,constructor:function(){this.watch("value",i.hitch(this,function(){this.valueChanged(this)})),this.watch("value",i.hitch(this,this._startAnimation)),this.watch("interactionArea",i.hitch(this,function(){this._interactionAreaFlag=!0})),this.watch("interactionMode",i.hitch(this,function(){this._interactionAreaFlag=!0})),this.watch("indicatorShapeFunc",i.hitch(this,function(){this._indicatorShapeFuncFlag=!0})),this.addInvalidatingProperties(["scale","value","indicatorShapeFunc","interactionArea","interactionMode"]),this._downListeners=[],this._moveAndUpListeners=[],this._cursorListeners=[]},_startAnimation:function(t,n,s){0!=this.animationDuration&&(!this._animation||!this._preventAnimation&&n!=s?(this._animation=new o.Animation({curve:[n,s],duration:this.animationDuration,easing:this.animationEaser?this.animationEaser:o._defaultEasing,onAnimate:i.hitch(this,this._updateAnimation),onEnd:i.hitch(this,this._endAnimation),onStop:i.hitch(this,this._endAnimation)}),this._animation.play()):this._animation.stop())},_updateAnimation:function(i){this._transitionValue=i,this.invalidateRendering()},_endAnimation:function(){this._transitionValue=NaN,this.invalidateRendering()},refreshRendering:function(){null!=this._gfxGroup&&null!=this.scale&&(this._indicatorShapeFuncFlag&&i.isFunction(this.indicatorShapeFunc)&&(this._gfxGroup.clear(),this.indicatorShapeFunc(this._gfxGroup,this),this._indicatorShapeFuncFlag=!1),this._interactionAreaFlag&&(this._interactionAreaFlag=this._connectDownListeners()))},valueChanged:function(i){s.emit(this,"valueChanged",{target:this,bubbles:!0,cancelable:!0})},_disconnectDownListeners:function(){for(var i=0;i<this._downListeners.length;i++)this._downListeners[i].remove();this._downListeners=[]},_disconnectMoveAndUpListeners:function(){for(var i=0;i<this._moveAndUpListeners.length;i++)this._moveAndUpListeners[i].remove();this._moveAndUpListeners=[]},_disconnectListeners:function(){this._disconnectDownListeners(),this._disconnectMoveAndUpListeners(),this._disconnectCursorListeners()},_connectCursorListeners:function(t){var n=t.on(e.over,i.hitch(this,function(){this.scale._gauge._setCursor("pointer")}));this._cursorListeners.push(n),n=t.on(e.out,i.hitch(this,function(i){this.scale._gauge._setCursor("")})),this._cursorListeners.push(n)},_disconnectCursorListeners:function(){for(var i=0;i<this._cursorListeners.length;i++)this._cursorListeners[i].remove();this._cursorListeners=[]},_connectDownListeners:function(){this._disconnectDownListeners(),this._disconnectCursorListeners();var t=null;if("mouse"==this.interactionMode||"touch"==this.interactionMode)if("indicator"==this.interactionArea)t=this._gfxGroup.on(e.press,i.hitch(this,this._onMouseDown)),this._downListeners.push(t),this._connectCursorListeners(this._gfxGroup);else if("gauge"==this.interactionArea){if(!this.scale||!this.scale._gauge||!this.scale._gauge._gfxGroup)return!0;t=this.scale._gauge._gfxGroup.on(e.press,i.hitch(this,this._onMouseDown)),this._downListeners.push(t),t=this._gfxGroup.on(e.press,i.hitch(this,this._onMouseDown)),this._downListeners.push(t),this._connectCursorListeners(this.scale._gauge._gfxGroup)}else if("area"==this.interactionArea){if(!this.scale||!this.scale._gauge||!this.scale._gauge._baseGroup)return!0;t=this.scale._gauge._baseGroup.on(e.press,i.hitch(this,this._onMouseDown)),this._downListeners.push(t),t=this._gfxGroup.on(e.press,i.hitch(this,this._onMouseDown)),this._downListeners.push(t),this._connectCursorListeners(this.scale._gauge._baseGroup)}return!1},_connectMoveAndUpListeners:function(){var t=null;t=s(n.doc,e.move,i.hitch(this,this._onMouseMove)),this._moveAndUpListeners.push(t),t=s(n.doc,e.release,i.hitch(this,this._onMouseUp)),this._moveAndUpListeners.push(t)},_onMouseDown:function(i){this._connectMoveAndUpListeners(),this._startEditing()},_onMouseMove:function(i){this._preventAnimation=!0,this._animation&&this._animation.stop()},_onMouseUp:function(i){this._disconnectMoveAndUpListeners(),this._preventAnimation=!1,this._endEditing()},_startEditing:function(){this.scale&&this.scale._gauge&&this.scale._gauge.onStartEditing({indicator:this})},_endEditing:function(){this.scale&&this.scale._gauge&&this.scale._gauge.onEndEditing({indicator:this})}})});
//# sourceMappingURL=../sourcemaps/dgauges/ScaleIndicatorBase.js.map