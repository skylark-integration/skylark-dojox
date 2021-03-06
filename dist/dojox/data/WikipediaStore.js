/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/io/script","dojo/io-query","dojox/rpc/Service","dojox/data/ServiceStore"],function(e,t,r,i,o,s,a){return e.experimental("dojox.data.WikipediaStore"),r("dojox.data.WikipediaStore",a,{constructor:function(e){if(e&&e.service)this.service=e.service;else{var t=new s(require.toUrl("dojox/rpc/SMDLibrary/wikipedia.smd"));this.service=t.query}this.idAttribute=this.labelAttribute="title"},fetch:function(e){var r=t.mixin({},e.query);return!r||r.action&&"parse"!==r.action?"query"===r.action&&(r.list="search",r.srwhat="text",r.srsearch=r.text,e.start&&(r.sroffset=e.start-1),e.count&&(r.srlimit=e.count>=500?500:e.count),delete r.text):(r.action="parse",r.page=r.title,delete r.title),e.query=r,this.inherited(arguments)},_processResults:function(e,t){if(e.parse)e.parse.title=o.queryToObject(t.ioArgs.url.split("?")[1]).page,e=[e.parse];else if(e.query&&e.query.search){e=e.query.search;var r=this;for(var i in e)e[i]._loadObject=function(e){r.fetch({query:{action:"parse",title:this.title},onItem:e}),delete this._loadObject}}return this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/data/WikipediaStore.js.map
