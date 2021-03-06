/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.wire.ml.Service"),dojo.require("dijit._Widget"),dojo.require("dojox.xml.parser"),dojo.require("dojox.wire._base"),dojo.require("dojox.wire.ml.util"),dojo.declare("dojox.wire.ml.Service",dijit._Widget,{url:"",serviceUrl:"",serviceType:"",handlerClass:"",preventCache:!0,postCreate:function(){this.handler=this._createHandler()},_handlerClasses:{TEXT:"dojox.wire.ml.RestHandler",XML:"dojox.wire.ml.XmlHandler",JSON:"dojox.wire.ml.JsonHandler","JSON-RPC":"dojo.rpc.JsonService"},_createHandler:function(){if(this.url){var e=this;dojo.xhrGet({url:this.url,handleAs:"json",sync:!0}).addCallback(function(s){e.smd=s}),this.smd&&!this.serviceUrl&&(this.serviceUrl=this.smd.serviceUrl||this.smd.serviceURL)}var s=void 0;return this.handlerClass?s=dojox.wire._getClass(this.handlerClass):this.serviceType?(s=this._handlerClasses[this.serviceType])&&dojo.isString(s)&&(s=dojox.wire._getClass(s),this._handlerClasses[this.serviceType]=s):this.smd&&this.smd.serviceType&&(s=this._handlerClasses[this.smd.serviceType])&&dojo.isString(s)&&(s=dojox.wire._getClass(s),this._handlerClasses[this.smd.serviceType]=s),s?new s:null},callMethod:function(e,s){var r=new dojo.Deferred;return this.handler.bind(e,s,r,this.serviceUrl),r}});
//# sourceMappingURL=../../sourcemaps/wire/ml/Service.js.map
