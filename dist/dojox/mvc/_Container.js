/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/when","dijit/_WidgetBase","dojo/regexp"],function(declare,lang,when,_WidgetBase,regexp){return declare("dojox.mvc._Container",_WidgetBase,{stopParser:!0,exprchar:"$",templateString:"",inlineTemplateString:"",_containedWidgets:[],_parser:null,_createBody:function(){if(!this._parser)try{this._parser=require("dojo/parser")}catch(e){try{this._parser=require("dojox/mobile/parser")}catch(e){console.error("Add explicit require(['dojo/parser']) or explicit require(['dojox/mobile/parser']), one of the parsers is required!")}}var e=this;if(this._parser)return when(this._parser.parse(this.srcNodeRef,{template:!0,inherited:{dir:this.dir,lang:this.lang},propsThis:this,scope:"dojo"}),function(r){e._containedWidgets=r})},_destroyBody:function(){if(this._containedWidgets&&this._containedWidgets.length>0)for(var e=this._containedWidgets.length-1;e>-1;e--){var r=this._containedWidgets[e];r&&!r._destroyed&&r.destroy&&r.destroy()}},_exprRepl:function(tmpl){var pThis=this,transform=function(value,key){if(!value)return"";var exp=value.substr(2);with(exp=exp.substr(0,exp.length-1),pThis)return eval(exp)};return transform=lang.hitch(this,transform),tmpl.replace(new RegExp(regexp.escapeString(this.exprchar)+"({.*?})","g"),function(e,r,t){return transform(e,r).toString()})}})});
//# sourceMappingURL=../sourcemaps/mvc/_Container.js.map
