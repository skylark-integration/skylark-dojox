/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/dom","../Context","../dom","../_base"],function(e,t,o,d,n){var r=e.getObject("render.dom",!0,n);return r.Render=function(e,o){this._tpl=o,this.domNode=t.byId(e)},e.extend(r.Render,{setAttachPoint:function(e){this.domNode=e},render:function(e,t,d){if(!this.domNode)throw new Error("You cannot use the Render object without specifying where you want to render it");this._tpl=t=t||this._tpl,d=d||t.getBuffer(),e=e||new o;var n=t.render(e,d).getParent();if(!n)throw new Error("Rendered template does not have a root node");this.domNode!==n&&(this.domNode.parentNode&&this.domNode.parentNode.replaceChild(n,this.domNode),this.domNode=n)}}),r});
//# sourceMappingURL=../../sourcemaps/dtl/render/dom.js.map
