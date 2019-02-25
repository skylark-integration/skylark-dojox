/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox/math/round"],function(t,r){var n={},a=0;return{radToDeg:function(t){return 180*t/Math.PI},degToRad:function(t){return t*Math.PI/180},angle:function(t,n){if(n){n/=180;var a=this.radians(t),i=Math.PI*n,e=r(a/i)*i;return r(this.radToDeg(e))}return this.radToDeg(this.radians(t))},oppAngle:function(t){return(t+=180)>360&&(t-=360),t},radians:function(t){return Math.atan2(t.start.y-t.y,t.x-t.start.x)},length:function(t){return Math.sqrt(Math.pow(t.start.x-t.x,2)+Math.pow(t.start.y-t.y,2))},lineSub:function(t,r,n,a,i){var e=this.distance(this.argsToObj.apply(this,arguments)),s=((e=e<i?i:e)-i)/e;return{x:t-(t-n)*s,y:r-(r-a)*s}},argsToObj:function(){var t=arguments;return t.length<4?t[0]:{start:{x:t[0],y:t[1]},x:t[2],y:t[3]}},distance:function(){var t=this.argsToObj.apply(this,arguments);return Math.abs(Math.sqrt(Math.pow(t.start.x-t.x,2)+Math.pow(t.start.y-t.y,2)))},slope:function(t,r){return t.x-r.x?(t.y-r.y)/(t.x-r.x):0},pointOnCircle:function(t,r,n,a){var i=a*Math.PI/180;return{x:t+n*Math.cos(i),y:r-n*Math.sin(i)}},constrainAngle:function(t,r,n){var a=this.angle(t);if(a>=r&&a<=n)return t;var i=this.length(t),e=a>n?n:r-a<100?r:n;return this.pointOnCircle(t.start.x,t.start.y,i,e)},snapAngle:function(t,r){var n=this.radians(t),a=this.length(t),i=Math.PI*r,e=Math.round(n/i)*i,s=this.radToDeg(e);return this.pointOnCircle(t.start.x,t.start.y,a,s)},idSetStart:function(t){a=t},uid:function(t){return n[t=t||"shape"]=void 0===n[t]?a:n[t]+1,t+n[t]},abbr:function(t){return t.substring(t.lastIndexOf(".")+1).charAt(0).toLowerCase()+t.substring(t.lastIndexOf(".")+2)},mixin:function(t,r){},objects:{},register:function(t){this.objects[t.id]=t},byId:function(t){return this.objects[t]},attr:function(r,n,a,i){if(!r)return!1;try{if(r.shape&&r.util&&(r=r.shape),!a&&"id"==n&&r.target){for(var e=r.target;e&&!t.attr(e,"id");)e=e.parentNode;return e&&t.attr(e,"id")}if(r.rawNode||r.target){var s=Array.prototype.slice.call(arguments);return s[0]=r.rawNode||r.target,t.attr.apply(t,s)}return t.attr(r,"id")}catch(t){return!1}}}});
//# sourceMappingURL=../../sourcemaps/drawing/util/common.js.map