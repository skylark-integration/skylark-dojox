/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","./Base","../main"],function(e,t,n,i){e.experimental("dojox.gesture.swipe");var o=t(n,{defaultEvent:"swipe",subEvents:["end"],press:function(e,t){t.touches&&t.touches.length>=2?delete e.context:(e.context||(e.context={x:0,y:0,t:0}),e.context.x=t.screenX,e.context.y=t.screenY,e.context.t=(new Date).getTime(),this.lock(t.currentTarget))},move:function(e,t){this._recognize(e,t,"swipe")},release:function(e,t){this._recognize(e,t,"swipe.end"),delete e.context,this.unLock()},cancel:function(e,t){delete e.context,this.unLock()},_recognize:function(e,t,n){if(e.context){var i=this._getSwipeInfo(e,t);i&&(i.type=n,this.fire(t.target,i))}},_getSwipeInfo:function(e,t){var n,i,o={},c=e.context;return o.time=(new Date).getTime()-c.t,n=t.screenX-c.x,i=t.screenY-c.y,0===n&&0===i?null:(o.dx=n,o.dy=i,o)}});return i.gesture.swipe=new o,i.gesture.swipe.Swipe=o,i.gesture.swipe});
//# sourceMappingURL=../sourcemaps/gesture/swipe.js.map
