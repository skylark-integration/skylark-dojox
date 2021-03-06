/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./Bars","./commonStacked"],function(e,t,n){return e("dojox.charting.plot2d.StackedBars",t,{getSeriesStats:function(){var e,t=n.collectStats(this.series);return t.hmin-=.5,t.hmax+=.5,e=t.hmin,t.hmin=t.vmin,t.vmin=e,e=t.hmax,t.hmax=t.vmax,t.vmax=e,t},getValue:function(e,t,a,i){var r,s;return i?(s=t,r=n.getIndexValue(this.series,a,s)):(s=e.x-1,r=[(r=n.getValue(this.series,a,e.x))[0]?r[0].y:null,r[1]?r[1]:null]),{x:s,y:r[0],py:r[1]}}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/StackedBars.js.map
