/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/declare","./_CalendarView","dijit/_TemplatedMixin","./_CalendarMonthYearView","dojo/dom-class","dojo/_base/event","dojo/text!./Calendar/CalendarMonth.html"],function(e,t,a,o,n,d,l){return e("dojox.widget._CalendarMonthView",[t,a],{templateString:l,datePart:"year",headerClass:"dojoxCalendarMonthHeader",displayedYear:"",postCreate:function(){this.cloneClass(".dojoxCalendarMonthTemplate",3),this.cloneClass(".dojoxCalendarMonthGroupTemplate",2),this._populateMonths(),this.addFx(".dojoxCalendarMonthLabel",this.domNode)},_setValueAttr:function(e){var t=this.header.innerHTML=e.getFullYear();this.set("displayedYear",t),this._populateMonths()},_getMonthNames:o.prototype._getMonthNames,_populateMonths:o.prototype._populateMonths,onClick:function(e){if(n.contains(e.target,"dojoxCalendarMonthLabel")){var t=e.target.parentNode,a=t.cellIndex+4*t.parentNode.rowIndex,o=this.get("value");o.setMonth(a),o.setMonth(a),o.setYear(this.displayedYear),this.onValueSelected(o,a)}else d.stop(e)}})});
//# sourceMappingURL=../sourcemaps/widget/_CalendarMonthView.js.map
