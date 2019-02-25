/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/_base/window","dojo/on"],function(t,e,s,a,o){return e.plugins.mouseOver=new function(){this.watchMouse=s.watchMouseOver||!0,this.mouseSampleDelay=s.sampleDelay||2500,this.addData=t.hitch(e,"addData","mouseOver"),this.targetProps=s.targetProps||["id","className","localName","href","spellcheck","lang","textContent","value"],this.textContentMaxChars=s.textContentMaxChars||50,this.toggleWatchMouse=function(){if(this._watchingMouse)return this._watchingMouse.remove(),void delete this._watchingMouse;o(a.doc,"mousemove",t.hitch(this,"sampleMouse"))},this.watchMouse&&(o(a.doc,"mouseover",t.hitch(this,"toggleWatchMouse")),o(a.doc,"mouseout",t.hitch(this,"toggleWatchMouse"))),this.sampleMouse=function(e){return this._rateLimited||(this.addData("sample",this.trimMouseEvent(e)),this._rateLimited=!0,setTimeout(t.hitch(this,function(){this._rateLimited&&(this.trimMouseEvent(this._lastMouseEvent),delete this._lastMouseEvent,delete this._rateLimited)}),this.mouseSampleDelay)),this._lastMouseEvent=e,e},this.trimMouseEvent=function(t){var e={};for(var s in t)switch(s){case"target":var a=this.targetProps;e[s]={};for(var o=0;o<a.length;o++)("object"==typeof t[s]||"function"==typeof t[s])&&a[o]in t[s]&&("text"==a[o]||"textContent"==a[o]?t[s].localName&&"HTML"!=t[s].localName&&"BODY"!=t[s].localName&&(e[s][a[o]]=t[s][a[o]].substr(0,this.textContentMaxChars)):e[s][a[o]]=t[s][a[o]]);break;case"screenX":case"screenY":case"x":case"y":if(t[s]){var i=t[s];e[s]=i+""}}return e}}});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/mouseOver.js.map