/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.help.console"),dojo.require("dojox.help._base"),dojo.mixin(dojox.help,{_plainText:function(o){return o.replace(/(<[^>]*>|&[^;]{2,6};)/g,"")},_displayLocated:function(o){var e={};dojo.forEach(o,function(o){e[o[0]]=dojo.isMoz?{toString:function(){return"Click to view"},item:o[1]}:o[1]}),console.dir(e)},_displayHelp:function(o,e){if(o){var n="Help for: "+e.name;console.log(n);for(var t="",i=0;i<n.length;i++)t+="=";console.log(t)}else if(e){var r=!1;for(var l in e){var a=e[l];if(("returns"!=l||"Function"==e.type||"Constructor"==e.type)&&(a&&(!dojo.isArray(a)||a.length)))if(r=!0,console.info(l.toUpperCase()),a=dojo.isString(a)?dojox.help._plainText(a):a,"returns"==l){var s=dojo.map(a.types||[],"return item.title;").join("|");a.summary&&(s&&(s+=": "),s+=dojox.help._plainText(a.summary)),console.log(s||"Uknown")}else if("parameters"==l)for(var p,c=0;p=a[c];c++){var d=dojo.map(p.types,"return item.title").join("|");console.log(d?p.name+": "+d:p.name);var f="";if(p.optional&&(f+="Optional. "),p.repating&&(f+="Repeating. "),f+=dojox.help._plainText(p.summary)){f="  - "+f;for(var j=0;j<p.name.length;j++)f=" "+f;console.log(f)}}else console.log(a)}r||console.log("No documentation for this object")}else console.log("No documentation for this object")}}),dojox.help.init();
//# sourceMappingURL=../sourcemaps/help/console.js.map
