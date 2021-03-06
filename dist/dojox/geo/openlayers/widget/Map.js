/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/declare","dojo/_base/array","dojo/dom-geometry","dojo/query","dijit/_Widget","../_base","../Map","../Layer","../GfxLayer"],function(e,a,i,t,o,n,r,s,d,h){return a("dojox.geo.openlayers.widget.Map",n,{baseLayerType:r.BaseLayerType.OSM,initialLocation:null,touchHandler:!1,map:null,startup:function(){this.inherited(arguments),this.map.initialFit({initialLocation:this.initialLocation})},buildRendering:function(){this.inherited(arguments);var e=this.domNode,a=new s(e,{baseLayerType:this.baseLayerType,touchHandler:this.touchHandler});this.map=a,this._makeLayers()},_makeLayers:function(){var a=this.domNode,t=o("> .layer",a);i.forEach(t,function(a){var i=a.getAttribute("type"),t=a.getAttribute("name"),o="dojox.geo.openlayers."+i,n=e.getObject(o);if(n){var r=new n(t,{});r&&this.map.addLayer(r)}},this)},resize:function(a,i){var o,n=this.map.getOLMap();switch(arguments.length){case 0:break;case 1:o=e.mixin({},a),t.setMarginBox(n.div,o);break;case 2:o={w:arguments[0],h:arguments[1]},t.setMarginBox(n.div,o)}n.updateSize()}})});
//# sourceMappingURL=../../../sourcemaps/geo/openlayers/widget/Map.js.map
