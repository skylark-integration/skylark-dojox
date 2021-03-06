/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/window","dojo/_base/array","dojo/has"],function(n,e,t){var a=[],i=[],r=n.doc.createElement("div").style,o=["webkit"];t.add("css3-animations",function(n,t,a){var i=a.style;return void 0!==i.animation&&void 0!==i.transition||e.some(o,function(n){return void 0!==i[n+"Animation"]&&void 0!==i[n+"Transition"]})}),t.add("t17164",function(n,e,t){return void 0!==t.style.transition&&!("TransitionEvent"in window)});var s={name:function(n,s){var d=(s?i:a)[n];if(!d){if(/End|Start/.test(n)){var m=n.length-(n.match(/End/)?3:5),c=n.substr(0,m),u=this.name(c);d=u==c?n.toLowerCase():u+n.substr(m)}else if("keyframes"==n){var v=this.name("animation",s);d="animation"==v?n:s?v.replace(/animation/,"keyframes"):v.replace(/Animation/,"Keyframes")}else{var f=s?n.replace(/-(.)/g,function(n,e){return e.toUpperCase()}):n;void 0===r[f]||t("t17164")?(f=f.charAt(0).toUpperCase()+f.slice(1),e.some(o,function(e){void 0!==r[e+f]&&(d=s?"-"+e+"-"+n:e+f)})):d=n}d||(d=n),(s?i:a)[n]=d}return d},add:function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[s.name(t)]=e[t]);return n}};return s});
//# sourceMappingURL=../sourcemaps/mobile/_css3.js.map
