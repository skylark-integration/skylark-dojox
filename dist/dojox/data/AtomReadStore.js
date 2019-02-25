/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox","dojo/data/util/filter","dojo/data/util/simpleFetch","dojo/date/stamp"],function(e,t){e.experimental("dojox.data.AtomReadStore");var r=e.declare("dojox.data.AtomReadStore",null,{constructor:function(e){if(e&&(this.url=e.url,this.rewriteUrl=e.rewriteUrl,this.label=e.label||this.label,this.sendQuery=e.sendQuery||e.sendquery||this.sendQuery,this.unescapeHTML=e.unescapeHTML,"urlPreventCache"in e&&(this.urlPreventCache=!!e.urlPreventCache)),!this.url)throw new Error("AtomReadStore: a URL must be specified when creating the data store")},url:"",label:"title",sendQuery:!1,unescapeHTML:!1,urlPreventCache:!1,getValue:function(t,r,i){this._assertIsItem(t),this._assertIsAttribute(r),this._initItem(t),r=r.toLowerCase(),t._attribs[r]||t._parsed||(this._parseItem(t),t._parsed=!0);var a=t._attribs[r];if(!a&&"summary"==r){var n=this.getValue(t,"content"),s=new RegExp("/(<([^>]+)>)/g","i"),o=n.text.replace(s,"");a={text:o.substring(0,Math.min(400,o.length)),type:"text"},t._attribs[r]=a}return a&&this.unescapeHTML&&("content"!=r&&"summary"!=r&&"subtitle"!=r||t["_"+r+"Escaped"]||(a.text=this._unescapeHTML(a.text),t["_"+r+"Escaped"]=!0)),a?e.isArray(a)?a[0]:a:i},getValues:function(e,t){this._assertIsItem(e),this._assertIsAttribute(t),this._initItem(e),t=t.toLowerCase(),e._attribs[t]||this._parseItem(e);var r=e._attribs[t];return r?void 0!==r.length&&"string"!=typeof r?r:[r]:void 0},getAttributes:function(e){this._assertIsItem(e),e._attribs||(this._initItem(e),this._parseItem(e));var t=[];for(var r in e._attribs)t.push(r);return t},hasAttribute:function(e,t){return void 0!==this.getValue(e,t)},containsValue:function(e,t,r){for(var i=this.getValues(e,t),a=0;a<i.length;a++)if("string"==typeof r){if(i[a].toString&&i[a].toString()===r)return!0}else if(i[a]===r)return!0;return!1},isItem:function(e){return!!(e&&e.element&&e.store&&e.store===this)},isItemLoaded:function(e){return this.isItem(e)},loadItem:function(e){},getFeatures:function(){return{"dojo.data.api.Read":!0}},getLabel:function(e){if(""!==this.label&&this.isItem(e)){var t=this.getValue(e,this.label);return t&&t.text?t.text:t?t.toString():void 0}},getLabelAttributes:function(e){return""!==this.label?[this.label]:null},getFeedValue:function(t,r){var i=this.getFeedValues(t,r);return e.isArray(i)?i[0]:i},getFeedValues:function(e,t){return this.doc?(this._feedMetaData||(this._feedMetaData={element:this.doc.getElementsByTagName("feed")[0],store:this,_attribs:{}},this._parseItem(this._feedMetaData)),this._feedMetaData._attribs[e]||t):t},_initItem:function(e){e._attribs||(e._attribs={})},_fetchItems:function(t,r,i){var a=this._getFetchUrl(t);if(a){var n=this.sendQuery?null:t,s=this,o=function(i){s.doc=i;var a=s._getItems(i,n),o=t.query;o&&(o.id?a=e.filter(a,function(e){return s.getValue(e,"id")==o.id}):o.category&&(a=e.filter(a,function(t){var r=s.getValues(t,"category");return!!r&&e.some(r,"return item.term=='"+o.category+"'")}))),a&&a.length>0?r(a,t):r([],t)};if(this.doc)o(this.doc);else{var u={url:a,handleAs:"xml",preventCache:this.urlPreventCache},l=e.xhrGet(u);l.addCallback(o),l.addErrback(function(e){i(e,t)})}}else i(new Error("No URL specified."))},_getFetchUrl:function(t){if(!this.sendQuery)return this.url;var r=t.query;if(!r)return this.url;if(e.isString(r))return this.url+r;var i="";for(var a in r){var n=r[a];n&&(i&&(i+="&"),i+=a+"="+n)}if(!i)return this.url;var s=this.url;return s.indexOf("?")<0?s+="?":s+="&",s+i},_getItems:function(t,r){if(this._items)return this._items;var i,a=[];if(t.childNodes.length<1)return this._items=a,console.log("dojox.data.AtomReadStore: Received an invalid Atom document. Check the content type header"),a;var n=e.filter(t.childNodes,"return item.tagName && item.tagName.toLowerCase() == 'feed'");r.query;if(!n||1!=n.length)return console.log("dojox.data.AtomReadStore: Received an invalid Atom document, number of feed tags = "+(n?n.length:0)),a;i=e.filter(n[0].childNodes,"return item.tagName && item.tagName.toLowerCase() == 'entry'"),r.onBegin&&r.onBegin(i.length,this.sendQuery?r:{});for(var s=0;s<i.length;s++){var o=i[s];1==o.nodeType&&a.push(this._getItem(o))}return this._items=a,a},close:function(e){},_getItem:function(e){return{element:e,store:this}},_parseItem:function(t){var r=t._attribs;function i(e){var t=e.textContent||e.innerHTML||e.innerXML;if(!t&&e.childNodes[0]){var r=e.childNodes[0];!r||3!=r.nodeType&&4!=r.nodeType||(t=e.childNodes[0].nodeValue)}return t}e.forEach(t.element.childNodes,function(t){var a=t.tagName?t.tagName.toLowerCase():"";switch(a){case"title":r[a]={text:i(t),type:t.getAttribute("type")};break;case"subtitle":case"summary":case"content":r[a]=function(e){return{text:i(e),type:e.getAttribute("type")}}(t);break;case"author":var n,s;e.forEach(t.childNodes,function(e){if(e.tagName)switch(e.tagName.toLowerCase()){case"name":n=e;break;case"uri":s=e}});var o={};n&&1==n.length&&(o.name=i(n[0])),s&&1==s.length&&(o.uri=i(s[0])),r[a]=o;break;case"id":r[a]=i(t);break;case"updated":case"published":r[a]=e.date.stamp.fromISOString(i(t));break;case"category":r[a]||(r[a]=[]),r[a].push({scheme:t.getAttribute("scheme"),term:t.getAttribute("term")});break;case"link":r[a]||(r[a]=[]);var u={rel:t.getAttribute("rel"),href:t.getAttribute("href"),type:t.getAttribute("type")};r[a].push(u),"alternate"==u.rel&&(r.alternate=u)}})},_unescapeHTML:function(e){return e=e.replace(/&#8217;/m,"'").replace(/&#8243;/m,'"').replace(/&#60;/m,">").replace(/&#62;/m,"<").replace(/&#38;/m,"&")},_assertIsItem:function(e){if(!this.isItem(e))throw new Error("dojox.data.AtomReadStore: Invalid item argument.")},_assertIsAttribute:function(e){if("string"!=typeof e)throw new Error("dojox.data.AtomReadStore: Invalid attribute argument.")}});return e.extend(r,e.data.util.simpleFetch),r});
//# sourceMappingURL=../sourcemaps/data/AtomReadStore.js.map