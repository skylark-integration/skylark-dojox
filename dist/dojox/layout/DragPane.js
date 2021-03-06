/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_Widget","dojo/_base/html","dojo/dom-style"],function(e,o,t,s){return e("dojox.layout.DragPane",o,{invert:!0,postCreate:function(){this.connect(this.domNode,"onmousedown","_down"),this.connect(this.domNode,"onmouseleave","_up"),this.connect(this.domNode,"onmouseup","_up")},_down:function(e){var o=this.domNode;e.preventDefault(),s.set(o,"cursor","move"),this._x=e.pageX,this._y=e.pageY,this._x<o.offsetLeft+o.clientWidth&&this._y<o.offsetTop+o.clientHeight&&(t.setSelectable(o,!1),this._mover=this.connect(o,"onmousemove","_move"))},_up:function(e){t.setSelectable(this.domNode,!0),s.set(this.domNode,"cursor","pointer"),this._mover&&this.disconnect(this._mover),delete this._mover},_move:function(e){var o=this.invert?1:-1;this.domNode.scrollTop+=(this._y-e.pageY)*o,this.domNode.scrollLeft+=(this._x-e.pageX)*o,this._x=e.pageX,this._y=e.pageY}})});
//# sourceMappingURL=../sourcemaps/layout/DragPane.js.map
