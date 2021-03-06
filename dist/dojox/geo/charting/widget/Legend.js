/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/array","dojo/_base/declare","dojo/_base/html","dojo/dom","dojo/dom-construct","dojo/dom-class","dojo/_base/window","dijit/_Widget"],function(e,d,t,o,i,n,a,s,h,l){return o("dojox.geo.charting.widget.Legend",l,{horizontal:!0,legendBody:null,swatchSize:18,map:null,postCreate:function(){this.map&&(this.series=this.map.series,this.domNode.parentNode||n.byId(this.map.container).appendChild(this.domNode),this.refresh())},buildRendering:function(){this.domNode=a.create("table",{role:"group",class:"dojoxLegendNode"}),this.legendBody=a.create("tbody",null,this.domNode),this.inherited(arguments)},refresh:function(){for(;this.legendBody.lastChild;)a.destroy(this.legendBody.lastChild);this.horizontal&&(s.add(this.domNode,"dojoxLegendHorizontal"),this._tr=h.doc.createElement("tr"),this.legendBody.appendChild(this._tr));var e=this.series;0!=e.length&&t.forEach(e,function(e){this._addLabel(e.color,e.name)},this)},_addLabel:function(e,d){var t=h.doc.createElement("td"),o=h.doc.createElement("td"),i=h.doc.createElement("div");if(s.add(t,"dojoxLegendIcon"),s.add(o,"dojoxLegendText"),i.style.width=this.swatchSize+"px",i.style.height=this.swatchSize+"px",t.appendChild(i),this.horizontal)this._tr.appendChild(t),this._tr.appendChild(o);else{var n=h.doc.createElement("tr");this.legendBody.appendChild(n),n.appendChild(t),n.appendChild(o)}i.style.background=e,o.innerHTML=String(d)}})});
//# sourceMappingURL=../../../sourcemaps/geo/charting/widget/Legend.js.map
