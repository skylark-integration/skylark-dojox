/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/Stateful"],function(t,i,m){return i("dojox.dgauges.LogScaler",m,{minimum:0,maximum:1e3,multiplier:10,majorTicks:null,_computedMultiplier:NaN,constructor:function(){this.watchedProperties=["minimum","maximum","multiplier"]},_buildMajorTickItems:function(){var t=[];if(this._computedMinimum=this.getComputedMinimum(),this._computedMaximum=this.getComputedMaximum(),this._computedMultiplier=this.getComputedMultiplier(),this._computedMaximum>this._computedMinimum)for(var i,m=Math.max(0,Math.floor(Math.log(this._computedMinimum+1e-9)/Math.LN10)),u=Math.max(0,Math.floor(Math.log(this._computedMaximum+1e-9)/Math.LN10)),o=m;o<=u;o+=this._computedMultiplier)(i={}).value=Math.pow(10,o),i.position=(o-m)/(u-m),t.push(i);return t},getComputedMinimum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.minimum+1e-9)/Math.LN10)))},getComputedMaximum:function(){return Math.pow(10,Math.max(0,Math.floor(Math.log(this.maximum+1e-9)/Math.LN10)))},getComputedMultiplier:function(){return Math.max(1,Math.floor(Math.log(this.multiplier+1e-9)/Math.LN10))},computeTicks:function(){return this.majorTicks=this._buildMajorTickItems(),this.majorTicks.concat()},positionForValue:function(t){(this._computedMaximum<this._computedMinimum||t<=this._computedMinimum||t<1||isNaN(t))&&(t=this._computedMinimum),t>=this._computedMaximum&&(t=this._computedMaximum),t=Math.log(t)/Math.LN10;var i=Math.log(this._computedMinimum)/Math.LN10;return(t-i)/(Math.log(this._computedMaximum)/Math.LN10-i)},valueForPosition:function(t){var i=Math.log(this._computedMinimum)/Math.LN10,m=Math.log(this._computedMaximum)/Math.LN10;return Math.pow(10,i+t*(m-i))}})});
//# sourceMappingURL=../sourcemaps/dgauges/LogScaler.js.map