/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dijit/registry","dijit/_Widget","dijit/TitlePane"],function(e,t,i,o){var d=o.prototype,n=function(){var e=this._dxfindParent&&this._dxfindParent();e&&e.selectChild(this)};return d._dxfindParent=function(){var e=this.domNode.parentNode;return e?(e=t.getEnclosingWidget(e))&&e instanceof dojox.widget.TitleGroup&&e:e},e.connect(d,"_onTitleClick",n),e.connect(d,"_onTitleKey",function(t){t&&t.type&&"keypress"==t.type&&t.charOrCode==e.keys.TAB||n.apply(this,arguments)}),e.declare("dojox.widget.TitleGroup",dijit._Widget,{class:"dojoxTitleGroup",addChild:function(e,t){return e.placeAt(this.domNode,t)},removeChild:function(e){return this.domNode.removeChild(e.domNode),e},selectChild:function(i){return i&&e.query("> .dijitTitlePane",this.domNode).forEach(function(e){var o=t.byNode(e);o&&o!==i&&o.open&&o.toggle()}),i}})});
//# sourceMappingURL=../sourcemaps/widget/TitleGroup.js.map
