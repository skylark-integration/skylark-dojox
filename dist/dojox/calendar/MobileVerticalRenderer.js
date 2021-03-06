/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dojox/calendar/_RendererMixin","dojo/text!./templates/MobileVerticalRenderer.html"],function(e,i,t,a,r){return e("dojox.calendar.MobileVerticalRenderer",[i,t,a],{templateString:r,mobile:!0,visibilityLimits:{resizeStartHandle:75,resizeEndHandle:-1,summaryLabel:55,startTimeLabel:75,endTimeLabel:20},postCreate:function(){this.inherited(arguments),this._applyAttributes()},_isElementVisible:function(e,i,t,a){var r;switch(e){case"startTimeLabel":if(r=this.item.startTime,this.item.allDay||this.owner.isStartOfDay(r))return!1;break;case"endTimeLabel":if(r=this.item.endTime,this.item.allDay||this.owner.isStartOfDay(r))return!1}return this.inherited(arguments)}})});
//# sourceMappingURL=../sourcemaps/calendar/MobileVerticalRenderer.js.map
