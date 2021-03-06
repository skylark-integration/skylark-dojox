/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,n,o){return o.Stack=function(n){var r=[];n&&(r=r.concat(n)),this.count=r.length,this.clear=function(){r=[],this.count=r.length},this.clone=function(){return new o.Stack(r)},this.contains=function(t){for(var n=0;n<r.length;n++)if(r[n]==t)return!0;return!1},this.copyTo=function(t,n){t.splice(n,0,r)},this.forEach=function(n,o){t.forEach(r,n,o)},this.getIterator=function(){return new o.Iterator(r)},this.peek=function(){return r[r.length-1]},this.pop=function(){var t=r.pop();return this.count=r.length,t},this.push=function(t){this.count=r.push(t)},this.toArray=function(){return[].concat(r)}},o.Stack});
//# sourceMappingURL=../sourcemaps/collections/Stack.js.map
