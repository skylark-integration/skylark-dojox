/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/kernel","dojo/_base/fx","dojo/dom-attr","dojo/dom-class","dojo/text!./resources/FileInput.html","dijit/form/_FormWidget","dijit/_Templated"],function(t,e,i,n,s,o,l,u){return e.experimental("dojox.form.FileInput"),t("dojox.form.FileInput",l,{label:"Browse ...",cancelText:"Cancel",name:"uploadFile",templateString:o,startup:function(){this._listener=this.connect(this.fileInput,"onchange","_matchValue"),this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue")},postCreate:function(){},_matchValue:function(){this.inputNode.value=this.fileInput.value,this.inputNode.value&&(this.cancelNode.style.visibility="visible",i.fadeIn({node:this.cancelNode,duration:275}).play())},setLabel:function(t,e){this.titleNode.innerHTML=t},reset:function(t){this.disconnect(this._listener),this.disconnect(this._keyListener),this.fileInput&&this.domNode.removeChild(this.fileInput),i.fadeOut({node:this.cancelNode,duration:275}).play(),this.fileInput=document.createElement("input"),this.fileInput.setAttribute("type","file"),this.fileInput.setAttribute("id",this.id),this.fileInput.setAttribute("name",this.name),s.add(this.fileInput,"dijitFileInputReal"),this.domNode.appendChild(this.fileInput),this._keyListener=this.connect(this.fileInput,"onkeyup","_matchValue"),this._listener=this.connect(this.fileInput,"onchange","_matchValue"),this.inputNode.value=""}})});
//# sourceMappingURL=../sourcemaps/form/FileInput.js.map
