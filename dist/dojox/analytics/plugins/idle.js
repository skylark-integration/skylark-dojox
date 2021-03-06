/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","../_base","dojo/_base/config","dojo/ready","dojo/aspect","dojo/_base/window"],function(i,e,t,d,s,o){return e.plugins.idle=new function(){this.addData=i.hitch(e,"addData","idle"),this.idleTime=t.idleTime||6e4,this.idle=!0,this.setIdle=function(){this.addData("isIdle"),this.idle=!0},d(i.hitch(this,function(){for(var e=["onmousemove","onkeydown","onclick","onscroll"],t=0;t<e.length;t++)s.after(o.doc,e[t],i.hitch(this,function(e){this.idle?(this.idle=!1,this.addData("isActive"),this.idleTimer=setTimeout(i.hitch(this,"setIdle"),this.idleTime)):(clearTimeout(this.idleTimer),this.idleTimer=setTimeout(i.hitch(this,"setIdle"),this.idleTime))}),!0)}))}});
//# sourceMappingURL=../../sourcemaps/analytics/plugins/idle.js.map
