/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/Deferred","dojo/promise/all","dojo/when"],function(e,r,o,n){return function(r,n,a){var t={};if(n.loadedModels&&e.mixin(t,n.loadedModels),r){var i=[];for(var l in r)"_"!==l.charAt(0)&&i.push(d(r,l,a,t));return 0==i.length?t:o(i)}return t};function d(o,d,a,t){var i=o[d].params?o[d].params:{},l=o[d].modelLoader?o[d].modelLoader:"dojox/app/utils/simpleModel";try{var s=require(l)}catch(e){throw new Error(l+" must be listed in the dependencies")}var m,u=new r;try{m=s(o,i,d)}catch(e){throw new Error("Error creating "+l+" for model named ["+d+"]: "+e.message)}return n(m,e.hitch(this,function(e){return t[d]=e,a.log("in app/model, for item=[",d,"] loadedModels =",t),u.resolve(t),t}),function(e){throw new Error("Error loading model named ["+d+"]: "+e.message)}),u}});
//# sourceMappingURL=../../sourcemaps/app/utils/model.js.map
