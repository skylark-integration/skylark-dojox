/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/html","dojo/window","dijit/Dialog"],function(i,o,e,t){return i("dojox.grid.enhanced.plugins.Dialog",t,{refNode:null,_position:function(){if(this.refNode&&!this._relativePosition){var i=o.position(o.byId(this.refNode)),t=o.position(this.domNode),h=e.getBox();t.w&&t.h&&(i.x<0&&(i.x=0),i.x+i.w>h.w&&(i.w=h.w-i.x),i.y<0&&(i.y=0),i.y+i.h>h.h&&(i.h=h.h-i.y),i.x=i.x+i.w/2-t.w/2,i.y=i.y+i.h/2-t.h/2,i.x>=0&&i.x+t.w<=h.w&&i.y>=0&&i.y+t.h<=h.h&&(this._relativePosition=i))}this.inherited(arguments)}})});
//# sourceMappingURL=../../../sourcemaps/grid/enhanced/plugins/Dialog.js.map
