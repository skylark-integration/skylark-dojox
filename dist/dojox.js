/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
!function(r,e){var o=e.define,require=e.require,n="function"==typeof o&&o.amd,t=!n&&"undefined"!=typeof exports;if(!n&&!o){var i={};o=e.define=function(r,e,o){"function"==typeof o?(i[r]={factory:o,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var o=e.split("/"),n=r.split("/");o.pop();for(var t=0;t<n.length;t++)"."!=n[t]&&(".."==n[t]?o.pop():o.push(n[t]));return o.join("/")}(e,r)}),resolved:!1,exports:null},require(r)):i[r]={factory:null,resolved:!0,exports:o}},require=e.require=function(r){if(!i.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var module=i[r];if(!module.resolved){var o=[];module.deps.forEach(function(r){o.push(require(r))}),module.exports=module.factory.apply(e,o)||null,module.resolved=!0}return module.exports}}if(!o)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,require){r("dojox/main",["dojo/_base/kernel"],function(r){return r.dojox}),r("dojox",["dojox/main"],function(r){return r})}(o),!n){var u=require("skylark-langx-ns");t?module.exports=u:e.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/dojox.js.map
