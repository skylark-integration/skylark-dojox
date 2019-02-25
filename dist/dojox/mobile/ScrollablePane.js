/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/declare","dojo/sniff","dojo/_base/window","dojo/dom-construct","dojo/dom-style","./common","./_ScrollableMixin","./Pane","./_maskUtils"],function(e,i,o,t,s,d,r,a,n,h){return i("dojox.mobile.ScrollablePane",[n,a],{roundCornerMask:!1,radius:0,baseClass:"mblScrollablePane",buildRendering:function(){var e=this.containerNode=s.create("div",{className:"mblScrollableViewContainer",style:{width:"v"===this.scrollDir?"100%":""}});if(this.inherited(arguments),this.srcNodeRef)for(var i=0,t=this.srcNodeRef.childNodes.length;i<t;i++)this.containerNode.appendChild(this.srcNodeRef.firstChild);if(this.roundCornerMask&&o("mask-image")){var d=this.containerNode,a=this.maskNode=s.create("div",{className:"mblScrollablePaneMask"});a.appendChild(d),e=a}this.domNode.appendChild(e),r.setSelectable(this.containerNode,!1)},resize:function(){this.inherited(arguments),this.roundCornerMask&&this.createRoundMask(),e.forEach(this.getChildren(),function(e){e.resize&&e.resize()})},isTopLevel:function(e){var i=this.getParent&&this.getParent();return!i||!i.resize},createRoundMask:function(){if(o("mask-image")){if(0==this.domNode.offsetHeight)return;this.maskNode.style.height=this.domNode.offsetHeight+"px";var e=this.getChildren()[0],i=this.containerNode,t=e?e.domNode:i.childNodes.length>0&&(1===i.childNodes[0].nodeType?i.childNodes[0]:i.childNodes[1]),s=this.radius;if(!s){var r=function(e){return parseInt(d.get(e,"borderTopLeftRadius"))};if(e){if(!(s=r(e.domNode))){var a=e.getChildren()[0];s=a?r(a.domNode):0}}else s=r(t)}this.domNode.offsetWidth;var n=t.offsetWidth,l=this.domNode.offsetHeight,c=d.get(t,"marginTop"),f=d.get(t,"marginBottom"),m=d.get(t,"marginLeft");h.createRoundMask(this.maskNode,m,c,0,f,n,l-f-c,s,s)}}})});
//# sourceMappingURL=../sourcemaps/mobile/ScrollablePane.js.map