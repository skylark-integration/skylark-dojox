/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/dom-class","dojo/fx","dijit/_Container","dijit/layout/ContentPane"],function(t,o,e,n,d,i,s){return t("dojox.widget.PortletSettings",[i,s],{portletIconClass:"dojoxPortletSettingsIcon",portletIconHoverClass:"dojoxPortletSettingsIconHover",postCreate:function(){e.set(this.domNode,"display","none"),n.add(this.domNode,"dojoxPortletSettingsContainer"),n.remove(this.domNode,"dijitContentPane")},_setPortletAttr:function(t){this.portlet=t},toggle:function(){var t=this.domNode;"none"==e.get(t,"display")?(e.set(t,{display:"block",height:"1px",width:"auto"}),d.wipeIn({node:t}).play()):d.wipeOut({node:t,onEnd:o.hitch(this,function(){e.set(t,{display:"none",height:"",width:""})})}).play()}})});
//# sourceMappingURL=../sourcemaps/widget/PortletSettings.js.map
