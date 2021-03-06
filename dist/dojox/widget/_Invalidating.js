/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/_base/lang","dojo/Stateful"],function(i,n,e){return i("dojox.widget._Invalidating",e,{invalidatingProperties:null,invalidRendering:!1,postscript:function(i){if(this.inherited(arguments),this.invalidatingProperties)for(var e=this.invalidatingProperties,t=0;t<e.length;t++)this.watch(e[t],n.hitch(this,this.invalidateRendering)),i&&e[t]in i&&this.invalidateRendering()},addInvalidatingProperties:function(i){this.invalidatingProperties=this.invalidatingProperties?this.invalidatingProperties.concat(i):i},invalidateRendering:function(){this.invalidRendering||(this.invalidRendering=!0,setTimeout(n.hitch(this,this.validateRendering),0))},validateRendering:function(){this.invalidRendering&&(this.refreshRendering(),this.invalidRendering=!1)},refreshRendering:function(){}})});
//# sourceMappingURL=../sourcemaps/widget/_Invalidating.js.map
