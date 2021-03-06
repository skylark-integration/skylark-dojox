/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","../Theme","dojox/color/_base","./common"],function(e,n,r,t,o,a){var i=e.getObject("gradientGenerator",!0,a);return i.generateFills=function(e,r,o,a){return n.map(e,function(e){return t.generateHslGradient(e,r,o,a)})},i.updateFills=function(e,r,o,a){n.forEach(e,function(e){e.fill&&!e.fill.type&&(e.fill=t.generateHslGradient(e.fill,r,o,a))})},i.generateMiniTheme=function(e,r,a,i,l){return n.map(e,function(e){return e=new o.Color(e),{fill:t.generateHslGradient(e,r,a,i),stroke:{color:t.generateHslColor(e,l)}}})},i.generateGradientByIntensity=function(e,t){return e=new r(e),n.map(t,function(n){var t=n.i/255;return{offset:n.o,color:new r([e.r*t,e.g*t,e.b*t,e.a])}})},i});
//# sourceMappingURL=../../sourcemaps/charting/themes/gradientGenerator.js.map
