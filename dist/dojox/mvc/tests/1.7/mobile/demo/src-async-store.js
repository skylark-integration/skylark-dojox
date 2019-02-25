/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
var repeatModel,nextIndexToAdd,selectedIndex,setRef,setDetailsContext,insertResult,updateView,updateModel;require(["dojox/mobile/parser","dojox/mvc","dojox/mobile","dojox/mobile/ScrollableView","dojox/mobile/Button","dojox/mobile/TextArea","dojox/mvc/Group","dojox/mvc/Generate","dojox/mvc/Repeat","dojox/mobile/TextBox","dojox/mobile/ViewController","dojox/mobile/FixedSplitter","dojox/mobile/EdgeToEdgeList","dojox/mobile/EdgeToEdgeCategory","dojox/mobile/deviceTheme","dojox/mobile/RoundRectCategory","dojox/mobile/Heading","dojo/data/ItemFileWriteStore","dojo/store/DataStore"],function(){require(["dojox/mobile/compat"]);var e;selectedIndex=0,model=dojox.mvc.newStatefulModel({data:{Serial:"360324",First:"John",Last:"Doe",Email:"jdoe@us.ibm.com",ShipTo:{Street:"123 Valley Rd",City:"Katonah",State:"NY",Zip:"10536"},BillTo:{Street:"17 Skyline Dr",City:"Hawthorne",State:"NY",Zip:"10532"}}}),repeatmodel=null,nextIndexToAdd=-1,setRef=function(e,o){dijit.byId(e).set("ref",o)},setDetailsContext=function(e){selectedIndex=e,dijit.byId("detailsGroup").set("ref",e)},insertResult=function(e){if(""!==repeatmodel[e-1].First.value){var o=dojox.mvc.newStatefulModel({data:{First:"",Last:"",Location:"CA",Office:"",Email:"",Tel:"",Fax:""}});repeatmodel.add(e,o),setDetailsContext(e),nextIndexToAdd++}else setDetailsContext(e-1)},updateView=function(){try{var o=dojo.fromJson(dojo.byId("modelArea").value);e=dojox.mvc.newStatefulModel({data:o}),dijit.byId("view").set("ref",e),dojo.byId("outerModelArea").style.display="none",dojo.byId("viewArea").style.display=""}catch(e){console.error("Error parsing json from model: "+e)}},updateModel=function(){dojo.byId("outerModelArea").style.display="";try{dojo.byId("modelArea").focus(),dojo.byId("viewArea").style.display="none",dijit.byId("modelArea").set("value",dojo.toJson(e.toPlainObject(),!0))}catch(e){console.log(e)}};var o=new dojo.data.ItemFileWriteStore({url:dojo.moduleUrl("dojox.mvc.tests._data","mvcRepeatData.json")}),t=dojox.mvc.newStatefulModel({store:new dojo.store.DataStore({store:o}),query:{Location:"CA"}});require(["dojo/domReady!"],function(){t.then(function(e){repeatmodel=e,nextIndexToAdd=repeatmodel.data.length,console.log("before call to parser.parse"),dojox.mobile.parser.parse(),console.log("before call to set the wholepage style for display"),dojo.byId("wholepage").style.display="",console.log("after call to set the wholepage style for display")})}),dojo.addOnLoad(function(){})});
//# sourceMappingURL=../../../../../sourcemaps/mvc/tests/1.7/mobile/demo/src-async-store.js.map