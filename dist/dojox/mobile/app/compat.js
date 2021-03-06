/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.mobile.app.compat"),dojo.require("dojox.mobile.compat"),dojo.extend(dojox.mobile.app.AlertDialog,{_doTransition:function(o){console.log("in _doTransition and this = ",this);var e=dojo.marginBox(this.domNode.firstChild).h,d=this.controller.getWindowSize().h,i=d-e,t=d,n=dojo.fx.slideTo({node:this.domNode,duration:400,top:{start:o<0?i:t,end:o<0?t:i}}),a=dojo[o<0?"fadeOut":"fadeIn"]({node:this.mask,duration:400}),s=dojo.fx.combine([n,a]),r=this;dojo.connect(s,"onEnd",this,function(){o<0&&(r.domNode.style.display="none",dojo.destroy(r.domNode),dojo.destroy(r.mask))}),s.play()}}),dojo.extend(dojox.mobile.app.List,{deleteRow:function(){console.log("deleteRow in compat mode",o);var o=this._selectedRow;dojo.style(o,{visibility:"hidden",minHeight:"0px"}),dojo.removeClass(o,"hold");var e=dojo.contentBox(o).h;dojo.animateProperty({node:o,duration:800,properties:{height:{start:e,end:1},paddingTop:{end:0},paddingBottom:{end:0}},onEnd:this._postDeleteAnim}).play()}}),dojox.mobile.app.ImageView&&!dojo.create("canvas").getContext&&dojo.extend(dojox.mobile.app.ImageView,{buildRendering:function(){this.domNode.innerHTML="ImageView widget is not supported on this browser.Please try again with a modern browser, e.g. Safari, Chrome or Firefox",this.canvas={}},postCreate:function(){}}),dojox.mobile.app.ImageThumbView&&dojo.extend(dojox.mobile.app.ImageThumbView,{place:function(o,e,d){dojo.style(o,{top:d+"px",left:e+"px",visibility:"visible"})}});
//# sourceMappingURL=../../sourcemaps/mobile/app/compat.js.map
