/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array","./_base"],function(t,n,e){return e.Dictionary=function(n){var i={};this.count=0;var r={};if(this.add=function(t,n){var r=t in i;i[t]=new e.DictionaryEntry(t,n),r||this.count++},this.clear=function(){i={},this.count=0},this.clone=function(){return new e.Dictionary(this)},this.contains=this.containsKey=function(t){return!r[t]&&null!=i[t]},this.containsValue=function(t){for(var n=this.getIterator();n.get();)if(n.element.value==t)return!0;return!1},this.entry=function(t){return i[t]},this.forEach=function(n,e){var o=[];for(var u in i)r[u]||o.push(i[u]);t.forEach(o,n,e)},this.getKeyList=function(){return this.getIterator().map(function(t){return t.key})},this.getValueList=function(){return this.getIterator().map(function(t){return t.value})},this.item=function(t){if(t in i)return i[t].valueOf()},this.getIterator=function(){return new e.DictionaryIterator(i)},this.remove=function(t){return t in i&&!r[t]&&(delete i[t],this.count--,!0)},n)for(var o=n.getIterator();o.get();)this.add(o.element.key,o.element.value)},e.Dictionary});
//# sourceMappingURL=../sourcemaps/collections/Dictionary.js.map
