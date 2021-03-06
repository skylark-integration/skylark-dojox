/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang"],function(r){var n={getParams:function(r){var t;if(r&&r.length){for(;r.indexOf("(")>0;){var e=r.indexOf("("),a=r.indexOf(")"),i=r.substring(e,a+1);t||(t={}),t=n.getParamObj(t,i);var f=i.substring(1,i.indexOf("&"));r=r.replace(i,f)}for(var s=r.split("&"),g=0;g<s.length;g++){var u=s[g].split("="),c=u[0],l=encodeURIComponent(u[1]||"");c&&l&&(t||(t={}),t[c]=l)}}return t},getParamObj:function(r,n){for(var t,e=n.substring(1,n.indexOf("&")),a=n.substring(n.indexOf("&"),n.length-1).split("&"),i=0;i<a.length;i++){var f=a[i].split("="),s=f[0],g=encodeURIComponent(f[1]||"");s&&g&&(t||(t={}),t[s]=g)}return r[e]=t,r},buildWithParams:function(t,e){for(var a in"#"!==t.charAt(0)&&(t="#"+t),e){var i=e[a];r.isObject(i)?t=n.addViewParams(t,a,i):a&&null!=i&&(t=t+"&"+a+"="+e[a])}return t},addViewParams:function(r,t,e){"#"!==r.charAt(0)&&(r="#"+r);var a=r.indexOf(t);if(a>0&&!("#"!=r.charAt(a-1)&&"+"!=r.charAt(a-1)||"&"!=r.charAt(a+t.length)&&"+"!=r.charAt(a+t.length)&&"-"!=r.charAt(a+t.length))){var i=r.substring(a-1,a+t.length+1),f=n.getParamString(e),s=r.charAt(a-1)+"("+t+f+")"+r.charAt(a+t.length);r=r.replace(i,s)}return r},getParamString:function(r){var n="";for(var t in r){var e=r[t];t&&null!=e&&(n=n+"&"+t+"="+r[t])}return n},getTarget:function(r,n){for(n||(n="");r.indexOf("(")>0;){var t=r.indexOf("("),e=r.indexOf(")"),a=r.substring(t,e+1),i=a.substring(1,a.indexOf("&"));r=r.replace(a,i)}return((r&&"#"==r.charAt(0)?r.substr(1):r)||n).split("&")[0]}};return n});
//# sourceMappingURL=../../sourcemaps/app/utils/hash.js.map
