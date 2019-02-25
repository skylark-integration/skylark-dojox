/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/query","dojo/_base/connect","dojo/_base/Color","./Legend","dijit/form/CheckBox","../action2d/Highlight","dojox/lang/functional","dojox/gfx/fx","dojo/keys","dojo/dom-construct","dojo/dom-prop","dijit/registry"],function(e,t,i,n,s,h,o,r,c,a,d,l,u,g){var f=t(null,{constructor:function(t){this.legend=t,this.index=0,this.horizontalLength=this._getHrizontalLength(),e.forEach(t.legends,function(e,t){t>0&&i("input",e).attr("tabindex",-1)}),this.firstLabel=i("input",t.legends[0])[0],n.connect(this.firstLabel,"focus",this,function(){this.legend.active=!0}),n.connect(this.legend.domNode,"keydown",this,"_onKeyEvent")},_getHrizontalLength:function(){var e=this.legend.horizontal;return"number"==typeof e?Math.min(e,this.legend.legends.length):e?this.legend.legends.length:1},_onKeyEvent:function(e){if(this.legend.active)if(e.keyCode!=d.TAB){var t=this.legend.legends.length;switch(e.keyCode){case d.LEFT_ARROW:this.index--,this.index<0&&(this.index+=t);break;case d.RIGHT_ARROW:this.index++,this.index>=t&&(this.index-=t);break;case d.UP_ARROW:this.index-this.horizontalLength>=0&&(this.index-=this.horizontalLength);break;case d.DOWN_ARROW:this.index+this.horizontalLength<t&&(this.index+=this.horizontalLength);break;default:return}this._moveToFocus(),Event.stop(e)}else this.legend.active=!1},_moveToFocus:function(){i("input",this.legend.legends[this.index])[0].focus()}}),p=t(r,{connect:function(){}});return t("dojox.charting.widget.SelectableLegend",h,{outline:!1,transitionFill:null,transitionStroke:null,autoScale:!1,postCreate:function(){this.legends=[],this.legendAnim={},this._cbs=[],this.inherited(arguments)},refresh:function(){this.legends=[],this._clearLabels(),this.inherited(arguments),this._applyEvents(),new f(this)},_clearLabels:function(){for(var e=this._cbs;e.length;)e.pop().destroyRecursive()},_addLabel:function(e,t){this.inherited(arguments);var n=i("td",this.legendBody),s=n[n.length-1];this.legends.push(s);var h=new o({checked:!0});this._cbs.push(h),l.place(h.domNode,s,"first");var r=i("label",s)[0];u.set(r,"for",h.id)},_applyEvents:function(){this.chart.dirty||e.forEach(this.legends,function(t,s){var h,o,r;this._isPie()?(h=this.chart.stack[0],o=h.name,r=this.chart.series[0].name):(h=this.chart.series[s],o=h.plot,r=h.name);var c=g.byNode(i(".dijitCheckBox",t)[0]);c.set("checked",!this._isHidden(o,s)),n.connect(c,"onClick",this,function(e){this.toogle(o,s,!c.get("checked")),e.stopPropagation()});var a=i(".dojoxLegendIcon",t)[0],d=this._getFilledShape(this._surfaces[s].children);e.forEach(["onmouseenter","onmouseleave"],function(e){n.connect(a,e,this,function(e){this._highlight(e,d,s,!c.get("checked"),r,o)})},this)},this)},_isHidden:function(t,i){return this._isPie()?-1!=e.indexOf(this.chart.getPlot(t).runFilter,i):this.chart.series[i].hidden},toogle:function(t,i,n){var s=this.chart.getPlot(t);this._isPie()?-1!=e.indexOf(s.runFilter,i)?n||(s.runFilter=e.filter(s.runFilter,function(e){return e!=i})):n&&s.runFilter.push(i):this.chart.series[i].hidden=n,this.autoScale?this.chart.dirty=!0:s.dirty=!0,this.chart.render()},_highlight:function(t,i,n,s,h,o){if(!s){var r=this._getAnim(o),c=this._isPie(),a=function(e){return"mouseenter"==e?"onmouseover":"mouseleave"==e?"onmouseout":"on"+e}(t.type),d={shape:i,index:c?"legend"+n:"legend",run:{name:h},type:a};r.process(d),e.forEach(this._getShapes(n,o),function(e,t){var i={shape:e,index:c?n:t,run:{name:h},type:a};r.duration=100,r.process(i)})}},_getShapes:function(t,i){var n=[];if(this._isPie()){var s=0;e.forEach(this.chart.getPlot(i).runFilter,function(e){t>e&&s++}),n.push(this.chart.stack[0].group.children[t-s])}else this._isCandleStick(i)?e.forEach(this.chart.series[t].group.children,function(t){e.forEach(t.children,function(t){e.forEach(t.children,function(e){"line"!=e.shape.type&&n.push(e)})})}):n=this.chart.series[t].group.children;return n},_getAnim:function(e){return this.legendAnim[e]||(this.legendAnim[e]=new p(this.chart,e)),this.legendAnim[e]},_getTransitionFill:function(e){return-1!=this.chart.stack[this.chart.plots[e]].declaredClass.indexOf("dojox.charting.plot2d.Stacked")?this.chart.theme.plotarea.fill:null},_getFilledShape:function(e){for(var t=0;e[t];){if(e[t].getFill())return e[t];t++}return null},_isPie:function(){return"dojox.charting.plot2d.Pie"==this.chart.stack[0].declaredClass},_isCandleStick:function(e){return"dojox.charting.plot2d.Candlesticks"==this.chart.stack[this.chart.plots[e]].declaredClass},destroy:function(){this._clearLabels(),this.inherited(arguments)}})});
//# sourceMappingURL=../../sourcemaps/charting/widget/SelectableLegend.js.map