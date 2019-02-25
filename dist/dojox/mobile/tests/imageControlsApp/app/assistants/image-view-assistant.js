/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.require("dojox.mobile.app.SceneAssistant"),dojo.declare("ImageViewAssistant",dojox.mobile.app.SceneAssistant,{setup:function(){console.log("In main assistant setup");var o=["images/chris1_lg.jpg","images/chris2_lg.jpg","images/imageHoriz.jpg","images/imageVert.jpg","images/square.jpg"];this.controller.parse();var e=this.viewer=dijit.byId("imageView");this.viewer.set("leftUrl",o[0]),this.viewer.set("centerUrl",o[1]),this.viewer.set("rightUrl",o[2]),dojo.connect(dijit.byId("decZoom"),"onClick",function(){e.set("zoom",e.get("zoom")-.1)}),dojo.connect(dijit.byId("incZoom"),"onClick",function(){e.set("zoom",e.get("zoom")+.1)}),dojo.connect(dijit.byId("resetZoom"),"onClick",function(){e.set("zoom",1)}),dojo.connect(dijit.byId("toggleZoom"),"onClick",function(){e.get("zoom")>1?(console.log("setting animatedZoom to 1"),e.set("animatedZoom",1)):(console.log("setting animatedZoom to 2"),e.set("animatedZoom",3))}),dojo.connect(dijit.byId("panLeft"),"onClick",function(){e.set("zoomCenter",{x:e.get("zoomCenterX")-20,y:e.get("zoomCenterY")})}),dojo.connect(dijit.byId("panRight"),"onClick",function(){e.set("zoomCenter",{x:e.get("zoomCenterX")+20,y:e.get("zoomCenterY")})}),dojo.connect(dijit.byId("panUp"),"onClick",function(){e.set("zoomCenter",{x:e.get("zoomCenterX"),y:e.get("zoomCenterY")-20})}),dojo.connect(dijit.byId("panDown"),"onClick",function(){e.set("zoomCenter",{x:e.get("zoomCenterX"),y:e.get("zoomCenterY")+20})});var t=1;dojo.connect(e,"onChange",function(n){t+=n,console.log("Index = "+t),t>0&&e.set("leftUrl",o[t-1]),t<o.length-1&&e.set("rightUrl",o[t+1])})},activate:function(){console.log("In main assistant activate")}});
//# sourceMappingURL=../../../../../sourcemaps/mobile/tests/imageControlsApp/app/assistants/image-view-assistant.js.map