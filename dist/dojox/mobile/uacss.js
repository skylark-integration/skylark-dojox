/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/lang","dojo/_base/window","./sniff"],function(d,o,i,e){var a=i.doc.documentElement;return a.className=o.trim(a.className+" "+[e("bb")?"dj_bb":"",e("android")?"dj_android":"",e("ios")?"dj_ios":"",e("ios")>=6?"dj_ios6":"",e("ios")?"dj_iphone":"",e("ipod")?"dj_ipod":"",e("ipad")?"dj_ipad":"",e("ie")?"dj_ie":""].join(" ").replace(/ +/g," ")),d});
//# sourceMappingURL=../sourcemaps/mobile/uacss.js.map
