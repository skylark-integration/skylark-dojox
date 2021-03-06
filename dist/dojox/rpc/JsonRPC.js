/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define("dojox/rpc/JsonRPC",["dojo","dojox","dojox/rpc/Service","dojo/errors/RequestError"],function(r,e,n,o){function t(e){return{serialize:function(n,o,t,s){var i={id:this._requestId++,method:o.name,params:t};return e&&(i.jsonrpc=e),{data:r.toJson(i),handleAs:"json",contentType:"application/json",transport:"POST"}},deserialize:function(e){if(("Error"==e.name||e instanceof o)&&(e=r.fromJson(e.responseText)),e.error){var n=new Error(e.error.message||e.error);return n._rpcErrorObject=e.error,n}return e.result}}}e.rpc.envelopeRegistry.register("JSON-RPC-1.0",function(r){return"JSON-RPC-1.0"==r},r.mixin({namedParams:!1},t())),e.rpc.envelopeRegistry.register("JSON-RPC-2.0",function(r){return"JSON-RPC-2.0"==r},r.mixin({namedParams:!0},t("2.0")))});
//# sourceMappingURL=../sourcemaps/rpc/JsonRPC.js.map
