/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/window","dojo/dom-style","./PortletSettings","dijit/Dialog"],function(i,o,d,t,e){return i("dojox.widget.PortletDialogSettings",[t],{dimensions:null,constructor:function(i,o){this.dimensions=i.dimensions||[300,100]},toggle:function(){this.dialog||(this.dialog=new e({title:this.title}),o.body().appendChild(this.dialog.domNode),this.dialog.containerNode.appendChild(this.domNode),d.set(this.dialog.domNode,{width:this.dimensions[0]+"px",height:this.dimensions[1]+"px"}),d.set(this.domNode,"display","")),this.dialog.open?this.dialog.hide():this.dialog.show(this.domNode)}})});
//# sourceMappingURL=../sourcemaps/widget/PortletDialogSettings.js.map
