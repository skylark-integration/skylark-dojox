/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/sniff"],function(r){return{configProcessHas:function(t){for(var e in t){var f=t[e];if("has"==e){for(var o in f)if(("_"!=o.charAt(0)||"_"!=o.charAt(1))&&f&&"object"==typeof f){var i=o.split(",");if(i.length>0)for(;i.length>0;){var n=i.shift();if(r(n)||"!"==n.charAt(0)&&!r(n.substring(1))){var a=f[o];this.configMerge(t,a);break}}}delete t.has}else"_"==e.charAt(0)&&"_"==e.charAt(1)||!f||"object"!=typeof f||this.configProcessHas(f)}return t},configMerge:function(r,t){for(var e in t){var f=r[e],o=t[e];f===o||"_"==e.charAt(0)&&"_"==e.charAt(1)||(f&&"object"==typeof f&&o&&"object"==typeof o?this.configMerge(f,o):r instanceof Array?r.push(o):r[e]=o)}return r}}});
//# sourceMappingURL=../../sourcemaps/app/utils/config.js.map
