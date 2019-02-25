/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/array","dojo/_base/config","dojo/_base/connect","dojo/_base/declare","dojo/_base/lang","dojo/sniff","dojo/_base/window","dojo/_base/Deferred","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","dijit/registry","dijit/_Contained","dijit/_Container","dijit/_WidgetBase","./ViewController","./common","./transition","./viewRegistry","./_css3"],function(i,t,o,e,n,s,r,d,a,l,h,m,c,f,u,b,p,g,v,y,_,T){n.getObject("dojox.mobile",!0);return e("dojox.mobile.View",[p,b,u],{selected:!1,keepScrollPos:!0,tag:"div",baseClass:"mblView",constructor:function(i,t){t&&(a.byId(t).style.visibility="hidden")},destroy:function(){_.remove(this.id),this.inherited(arguments)},buildRendering:function(){this.templateString||(this.domNode=this.containerNode=this.srcNodeRef||h.create(this.tag)),this._animEndHandle=this.connect(this.domNode,T.name("animationEnd"),"onAnimationEnd"),this._animStartHandle=this.connect(this.domNode,T.name("animationStart"),"onAnimationStart"),t.mblCSS3Transition||(this._transEndHandle=this.connect(this.domNode,T.name("transitionEnd"),"onAnimationEnd")),s("mblAndroid3Workaround")&&c.set(this.domNode,T.name("transformStyle"),"preserve-3d"),_.add(this),this.inherited(arguments)},startup:function(){if(!this._started){if(void 0===this._visible){var t,e,n,s=this.getSiblingViews(),r=location.hash&&location.hash.substring(1).split(/,/);i.forEach(s,function(o,s){-1!==i.indexOf(r,o.id)&&(t=o),0==s&&(n=o),o.selected&&(e=o),o._visible=!1},this),(t||e||n)._visible=!0}this._visible&&(this.show(!0,!0),this.defer(function(){this.onStartView(),o.publish("/dojox/mobile/startView",[this])})),"hidden"===this.domNode.style.visibility&&(this.domNode.style.visibility="inherit"),this.inherited(arguments);var d=this.getParent();d&&d.resize||this.resize(),this._visible||this.hide()}},resize:function(){i.forEach(this.getChildren(),function(i){i.resize&&i.resize()})},onStartView:function(){},onBeforeTransitionIn:function(i,t,o,e,n){},onAfterTransitionIn:function(i,t,o,e,n){},onBeforeTransitionOut:function(i,t,o,e,n){},onAfterTransitionOut:function(i,t,o,e,n){},_clearClasses:function(t){if(t){var o=[];i.forEach(n.trim(t.className||"").split(/\s+/),function(i){(i.match(/^mbl\w*View$/)||-1===i.indexOf("mbl"))&&o.push(i)},this),t.className=o.join(" ")}},_fixViewState:function(i){for(var t=this.domNode.parentNode.childNodes,o=0;o<t.length;o++){var e=t[o];1===e.nodeType&&l.contains(e,"mblView")&&this._clearClasses(e)}this._clearClasses(i);var n=f.byNode(i);n&&(n._inProgress=!1)},convertToId:function(i){return"string"==typeof i?i.replace(/^#?([^&?]+).*/,"$1"):i},_isBookmarkable:function(i){return i.moveTo&&(t.mblForceBookmarkable||"#"===i.moveTo.charAt(0))&&!i.hashchange},performTransition:function(i,e,d,h,m){if(!this._inProgress){var u,b;if(this._inProgress=!0,i&&"object"==typeof i)u=i,b=e;else{u={moveTo:i,transitionDir:e,transition:d,context:h,method:m},b=[];for(var p=5;p<arguments.length;p++)b.push(arguments[p])}if(this._detail=u,this._optArgs=b,this._arguments=[u.moveTo,u.transitionDir,u.transition,u.context,u.method],"#"!==u.moveTo){var g;u.moveTo?g=this.convertToId(u.moveTo):(this._dummyNode||(this._dummyNode=r.doc.createElement("div"),r.body().appendChild(this._dummyNode)),g=this._dummyNode),this.addTransitionInfo&&"string"==typeof u.moveTo&&this._isBookmarkable(u)&&this.addTransitionInfo(this.id,u.moveTo,{transitionDir:u.transitionDir,transition:u.transition});var y=this.domNode,_=y.offsetTop;if(g=this.toNode=a.byId(g)){g.style.visibility="hidden",g.style.display="",this._fixViewState(g);var N=f.byNode(g);if(N&&(!t.mblAlwaysResizeOnTransition&&N._resized||(v.resizeAll(null,N),N._resized=!0),u.transition&&"none"!=u.transition&&N._addTransitionPaddingTop(_),N.load&&N.load(),N.movedFrom=y.id),s("mblAndroidWorkaround")&&!t.mblCSS3Transition&&u.transition&&"none"!=u.transition&&(c.set(g,T.name("transformStyle"),"preserve-3d"),c.set(y,T.name("transformStyle"),"preserve-3d"),l.add(g,"mblAndroidWorkaround")),this.onBeforeTransitionOut.apply(this,this._arguments),o.publish("/dojox/mobile/beforeTransitionOut",[this].concat(n._toArray(this._arguments))),N){if(this.keepScrollPos&&!this.getParent()){var x=r.body().scrollTop||r.doc.documentElement.scrollTop||r.global.pageYOffset||0;y._scrollTop=x;var k=1==u.transitionDir?0:g._scrollTop||0;g.style.top="0px",(x>1||0!==k)&&(y.style.top=k-x+"px",s("ios")>=7||!1===t.mblHideAddressBar||this.defer(function(){r.global.scrollTo(0,k||1)}))}else g.style.top="0px";N.onBeforeTransitionIn.apply(N,this._arguments),o.publish("/dojox/mobile/beforeTransitionIn",[N].concat(n._toArray(this._arguments)))}g.style.display="none",g.style.visibility="inherit",v.fromView=this,v.toView=N,this._doTransition(y,g,u.transition,u.transitionDir)}else console.log("dojox/mobile/View.performTransition: destination view not found: "+u.moveTo)}}},_addTransitionPaddingTop:function(i){this.containerNode.style.paddingTop=i+"px"},_removeTransitionPaddingTop:function(){this.containerNode.style.paddingTop=""},_toCls:function(i){return"mbl"+i.charAt(0).toUpperCase()+i.substring(1)},_doTransition:function(i,o,e,a){var h=-1==a?" mblReverse":"";if(o.style.display="",e&&"none"!=e)if(t.mblCSS3Transition)d.when(y,n.hitch(this,function(t){var s=c.get(o,"position");c.set(o,"position","absolute"),d.when(t(i,o,{transition:e,reverse:-1===a}),n.hitch(this,function(){c.set(o,"position",s),o.style.paddingTop="",this.invokeCallback()}))}));else{-1!=e.indexOf("cube")&&(s("ipad")?c.set(o.parentNode,{webkitPerspective:1600}):s("ios")&&c.set(o.parentNode,{webkitPerspective:800}));var f=this._toCls(e);if(s("mblAndroidWorkaround")){var u=this;u.defer(function(){l.add(i,f+" mblOut"+h),l.add(o,f+" mblIn"+h),l.remove(o,"mblAndroidWorkaround"),u.defer(function(){l.add(i,"mblTransition"),l.add(o,"mblTransition")},30)},70)}else l.add(i,f+" mblOut"+h),l.add(o,f+" mblIn"+h),this.defer(function(){l.add(i,"mblTransition"),l.add(o,"mblTransition")},100);var b,p,g,v="50% 50%",_="50% 50%";if(-1!=e.indexOf("swirl")||-1!=e.indexOf("zoom"))b=this.keepScrollPos&&!this.getParent()?r.body().scrollTop||r.doc.documentElement.scrollTop||r.global.pageYOffset||0:-m.position(i,!0).y,v="50% "+(g=r.global.innerHeight/2+b)+"px",_="50% "+g+"px";else if(-1!=e.indexOf("scale")){var N=m.position(i,!0);p=(void 0!==this.clickedPosX?this.clickedPosX:r.global.innerWidth/2)-N.x,b=this.keepScrollPos&&!this.getParent()?r.body().scrollTop||r.doc.documentElement.scrollTop||r.global.pageYOffset||0:-N.y,v=p+"px "+(g=(void 0!==this.clickedPosY?this.clickedPosY:r.global.innerHeight/2)+b)+"px",_=p+"px "+g+"px"}c.set(i,T.add({},{transformOrigin:v})),c.set(o,T.add({},{transformOrigin:_}))}else this.domNode.style.display="none",this.invokeCallback()},onAnimationStart:function(i){},onAnimationEnd:function(i){var t=i.animationName||i.target.className;if(-1!==t.indexOf("Out")||-1!==t.indexOf("In")||-1!==t.indexOf("Shrink")){var o=!1;if(l.contains(this.domNode,"mblOut")?(o=!0,this.domNode.style.display="none",l.remove(this.domNode,[this._toCls(this._detail.transition),"mblIn","mblOut","mblReverse"])):this._removeTransitionPaddingTop(),c.set(this.domNode,T.add({},{transformOrigin:""})),-1!==t.indexOf("Shrink")){var e=i.target;e.style.display="none",l.remove(e,"mblCloseContent");var n=_.getEnclosingScrollable(this.domNode);n&&n.onTouchEnd()}o&&this.invokeCallback(),this._clearClasses(this.domNode),this.clickedPosX=this.clickedPosY=void 0,-1!==t.indexOf("Cube")&&-1!==t.indexOf("In")&&s("ios")&&(this.domNode.parentNode.style[T.name("perspective")]="")}},invokeCallback:function(){this.onAfterTransitionOut.apply(this,this._arguments),o.publish("/dojox/mobile/afterTransitionOut",[this].concat(this._arguments));var i=f.byNode(this.toNode);i&&(i.onAfterTransitionIn.apply(i,this._arguments),o.publish("/dojox/mobile/afterTransitionIn",[i].concat(this._arguments)),i.movedFrom=void 0,this.setFragIds&&this._isBookmarkable(this._detail)&&this.setFragIds(i)),s("mblAndroidWorkaround")&&this.defer(function(){i&&c.set(this.toNode,T.name("transformStyle"),""),c.set(this.domNode,T.name("transformStyle"),"")});var t=this._detail.context,e=this._detail.method;(t||e)&&(e||(e=t,t=null),t=t||r.global,"string"==typeof e?t[e].apply(t,this._optArgs):"function"==typeof e&&e.apply(t,this._optArgs)),this._detail=this._optArgs=this._arguments=void 0,this._inProgress=!1},isVisible:function(i){var t=function(i){return"none"!==c.get(i,"display")};if(i){for(var o=this.domNode;"BODY"!==o.tagName;o=o.parentNode)if(!t(o))return!1;return!0}return t(this.domNode)},getShowingView:function(){for(var i=this.domNode.parentNode.childNodes,t=0;t<i.length;t++){var o=i[t];if(1===o.nodeType&&l.contains(o,"mblView")&&"none"!==o.style.display)return f.byNode(o)}return null},getSiblingViews:function(){return this.domNode.parentNode?i.map(i.filter(this.domNode.parentNode.childNodes,function(i){return 1===i.nodeType&&l.contains(i,"mblView")}),function(i){return f.byNode(i)}):[this]},show:function(t,e){var n=this.getShowingView();t||(n&&(n.onBeforeTransitionOut(n.id),o.publish("/dojox/mobile/beforeTransitionOut",[n,n.id])),this.onBeforeTransitionIn(this.id),o.publish("/dojox/mobile/beforeTransitionIn",[this,this.id])),e?this.domNode.style.display="":i.forEach(this.getSiblingViews(),function(i){i.domNode.style.display=i===this?"":"none"},this),this.load&&this.load(),t||(n&&(n.onAfterTransitionOut(n.id),o.publish("/dojox/mobile/afterTransitionOut",[n,n.id])),this.onAfterTransitionIn(this.id),o.publish("/dojox/mobile/afterTransitionIn",[this,this.id]))},hide:function(){this.domNode.style.display="none"}})});
//# sourceMappingURL=../sourcemaps/mobile/View.js.map