/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","../util/oo","../plugins/_Plugin","../manager/_registry"],function(t,o,i,n){var e=null,s=o.declare(i,function(t){this.createDom()},{show:function(o,i){this.domNode.innerHTML=i;var n=o.data.x+o.data.width,e=o.data.y+o.data.height,s=n+this.mouse.origin.x+30,a=e+this.mouse.origin.y+30;t.style(this.domNode,{display:"inline",left:s+"px",top:a+"px"});var h=t.marginBox(this.domNode);this.createShape(s-this.mouse.origin.x,a-this.mouse.origin.y,h.w,h.h)},createShape:function(t,o,i,n){this.balloon&&this.balloon.destroy();var e=t+i,s=o+n,a=[],h=function(){for(var t=0;t<arguments.length;t++)a.push(arguments[t])};h({x:t,y:o+5},{t:"Q",x:t,y:o},{x:t+5,y:o}),h({t:"L",x:e-5,y:o}),h({t:"Q",x:e,y:o},{x:e,y:o+5}),h({t:"L",x:e,y:s-5}),h({t:"Q",x:e,y:s},{x:e-5,y:s}),h({t:"L",x:t+5,y:s}),h({t:"Q",x:t,y:s},{x:t,y:s-5}),h({t:"L",x:t,y:o+5}),this.balloon=this.drawing.addUI("path",{points:a})},createDom:function(){this.domNode=t.create("span",{class:"drawingTooltip"},document.body),t.style(this.domNode,{display:"none",position:"absolute"})}}),a=o.declare(i,function(t){e||(e=new s(t)),t.stencil||this.button&&(this.connect(this.button,"onOver",this,"onOver"),this.connect(this.button,"onOut",this,"onOut"))},{width:300,height:200,onOver:function(){e.show(this.button,this.data.text)},onOut:function(){}});return t.setObject("dojox.drawing.ui.Tooltip",a),n.register({name:"dojox.drawing.ui.Tooltip"},"stencil"),a});
//# sourceMappingURL=../../sourcemaps/drawing/ui/Tooltip.js.map
