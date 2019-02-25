/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dojo/dom-class","dojo/dom-attr","dojo/dom-construct","dojo/request/xhr","dijit/_Widget","dijit/_Templated","dojox/highlight"],function(t,e,i,o,n,s,d,r,a,l){return t("dojox.highlight.widget.Code",[a,l],{url:"",range:null,style:"",listType:"1",lang:"",templateString:'<div class="formatted" style="${style}"><div class="titleBar"></div><ol type="${listType}" dojoAttachPoint="codeList" class="numbers"></ol><div style="display:none" dojoAttachPoint="containerNode"></div></div>',postCreate:function(){this.inherited(arguments),this.url?r(this.url,{}).then(e.hitch(this,"_populate"),e.hitch(this,"_loadError")):this._populate(this.containerNode.innerHTML)},_populate:function(t){this.containerNode.innerHTML="<pre><code class='"+this.lang+"'>"+t.replace(/\</g,"&lt;")+"</code></pre>",o("pre > code",this.containerNode).forEach(dojox.highlight.init);var e=this.containerNode.innerHTML.split("\n");i.forEach(e,function(t,e){var i=d.create("li");n.add(i,e%2!=0?"even":"odd"),t=(t="<pre><code>"+t+"&nbsp;</code></pre>").replace(/\t/g," &nbsp; "),i.innerHTML=t,this.codeList.appendChild(i)},this),this._lines=o("li",this.codeList),this._updateView()},setRange:function(t){t instanceof Array&&(this.range=t,this._updateView())},_updateView:function(){if(this.range){var t=this.range;this._lines.style({display:"none"}).filter(function(e,i){return i+1>=t[0]&&i+1<=t[1]}).style({display:""}),s.set(this.codeList,"start",t[0])}},_loadError:function(t){console.warn("loading: ",this.url," FAILED",t)}})});
//# sourceMappingURL=../../sourcemaps/highlight/widget/Code.js.map