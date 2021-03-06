/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./Default","./commonStacked"],function(t,e,a){return t("dojox.charting.plot2d.Stacked",e,{getSeriesStats:function(){return a.collectStats(this.series)},buildSegments:function(t,e){for(var n=this.series[t],l=e?Math.max(0,Math.floor(this._hScaler.bounds.from-1)):0,s=e?Math.min(n.data.length-1,Math.ceil(this._hScaler.bounds.to)):n.data.length-1,i=null,r=[],o=l;o<=s;o++){var u=e?a.getIndexValue(this.series,t,o):a.getValue(this.series,t,n.data[o]?n.data[o].x:null);null==u[0]||!e&&null==u[0].y?this.opt.interpolate&&!e||(i=null):(i||(i=[],r.push({index:o,rseg:i})),i.push(u[0]))}return r}})});
//# sourceMappingURL=../../sourcemaps/charting/plot2d/Stacked.js.map
