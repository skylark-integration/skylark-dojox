/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/dom","dijit/_WidgetBase","dojo/regexp"],function(declare,lang,dom,_WidgetBase,regexp){return declare("dojox.mvc.Output",_WidgetBase,{exprchar:"$",templateString:"",postscript:function(e,t){this.srcNodeRef=dom.byId(t),this.srcNodeRef&&(this.templateString=this.srcNodeRef.innerHTML,this.srcNodeRef.innerHTML=""),this.inherited(arguments)},set:function(e,t){this.inherited(arguments),"value"===e&&this._output()},_updateBinding:function(e,t,i){this.inherited(arguments),this._output()},_output:function(){(this.srcNodeRef||this.domNode).innerHTML=this.templateString?this._exprRepl(this.templateString):this.value},_exprRepl:function(tmpl){var pThis=this,transform=function(value,key){if(!value)return"";var exp=value.substr(2);with(exp=exp.substr(0,exp.length-1),pThis){var val=eval(exp);return val||0==val?val:""}};return transform=lang.hitch(this,transform),tmpl.replace(new RegExp(regexp.escapeString(this.exprchar)+"({.*?})","g"),function(e,t,i){return transform(e,t).toString()})}})});
//# sourceMappingURL=../sourcemaps/mvc/Output.js.map
