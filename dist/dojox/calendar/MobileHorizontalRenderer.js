/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dojo/dom-style","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/MobileHorizontalRenderer.html"],function(e,i,t,a,n,r){return e("dojox.calendar.MobileHorizontalRenderer",[t,a,n],{templateString:r,_orientation:"horizontal",mobile:!0,visibilityLimits:{resizeStartHandle:50,resizeEndHandle:-1,summaryLabel:15,startTimeLabel:32,endTimeLabel:30},_displayValue:"inline",arrowPadding:12,_isElementVisible:function(e,t,a,n){var r,s=this.isLeftToRight();switch("startTimeLabel"==e&&(this.labelContainer&&(s&&a||!s&&t)?i.set(this.labelContainer,"marginRight",this.arrowPadding+"px"):i.set(this.labelContainer,"marginRight",0),this.labelContainer&&(!s&&a||s&&t)?i.set(this.labelContainer,"marginLeft",this.arrowPadding+"px"):i.set(this.labelContainer,"marginLeft",0)),e){case"startTimeLabel":if(r=this.item.startTime,this.item.allDay||this.owner.isStartOfDay(r))return!1;break;case"endTimeLabel":if(r=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(r))return!1}return this.inherited(arguments)},postCreate:function(){this.inherited(arguments),this._applyAttributes()}})});
//# sourceMappingURL=../sourcemaps/calendar/MobileHorizontalRenderer.js.map
