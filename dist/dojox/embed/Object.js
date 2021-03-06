/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/declare","dojo/dom-geometry","dijit/_Widget","./Flash","./Quicktime"],function(i,t,e,h,s,a){return i.experimental("dojox.embed.Object"),t("dojox.embed.Object",h,{width:0,height:0,src:"",movie:null,params:null,reFlash:/\.swf|\.flv/gi,reQtMovie:/\.3gp|\.avi|\.m4v|\.mov|\.mp4|\.mpg|\.mpeg|\.qt/gi,reQtAudio:/\.aiff|\.aif|\.m4a|\.m4b|\.m4p|\.midi|\.mid|\.mp3|\.mpa|\.wav/gi,postCreate:function(){if(!this.width||!this.height){var i=e.getMarginBox(this.domNode);this.width=i.w,this.height=i.h}var t=s;if((this.src.match(this.reQtMovie)||this.src.match(this.reQtAudio))&&(t=a),!this.params&&(this.params={},this.domNode.hasAttributes()))for(var h={dojoType:"",width:"",height:"",class:"",style:"",id:"",src:""},m=this.domNode.attributes,o=0,d=m.length;o<d;o++)h[m[o].name]||(this.params[m[o].name]=m[o].value);var r={path:this.src,width:this.width,height:this.height,params:this.params};this.movie=new t(r,this.domNode)}})});
//# sourceMappingURL=../sourcemaps/embed/Object.js.map
