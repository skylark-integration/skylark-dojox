/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.data.demos.widgets.PicasaView"),dojo.require("dijit._Templated"),dojo.require("dijit._Widget"),dojo.declare("dojox.data.demos.widgets.PicasaView",[dijit._Widget,dijit._Templated],{templateString:dojo.cache("dojox","data/demos/widgets/templates/PicasaView.html"),titleNode:null,descriptionNode:null,imageNode:null,authorNode:null,title:"",author:"",imageUrl:"",iconUrl:"",postCreate:function(){this.titleNode.appendChild(document.createTextNode(this.title)),this.authorNode.appendChild(document.createTextNode(this.author)),this.descriptionNode.appendChild(document.createTextNode(this.description));var e=document.createElement("a");e.setAttribute("href",this.imageUrl),e.setAttribute("target","_blank");var t=document.createElement("img");t.setAttribute("src",this.iconUrl),e.appendChild(t),this.imageNode.appendChild(e)}});
//# sourceMappingURL=../../../sourcemaps/data/demos/widgets/PicasaView.js.map
