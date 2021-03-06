/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","./iconUtils","dojo/has","dojo/has!dojo-bidi?dojox/mobile/bidi/Badge"],function(o,d,e,i,t,s,n){var a=o(s("dojo-bidi")?"dojox.mobile.NonBidiBadge":"dojox.mobile.Badge",null,{value:"0",className:"mblDomButtonRedBadge",fontSize:16,constructor:function(o,s){o&&d.mixin(this,o),this.domNode=s||i.create("div"),e.add(this.domNode,"mblBadge"),-1===this.domNode.className.indexOf("mblDomButton")&&e.add(this.domNode,this.className),16!==this.fontSize&&(this.domNode.style.fontSize=this.fontSize+"px"),t.createDomButton(this.domNode),this.setValue(this.value)},getValue:function(){return this.domNode.firstChild.innerHTML||""},setValue:function(o){this.domNode.firstChild.innerHTML=o}});return s("dojo-bidi")?o("dojox.mobile.Badge",[a,n]):a});
//# sourceMappingURL=../sourcemaps/mobile/Badge.js.map
