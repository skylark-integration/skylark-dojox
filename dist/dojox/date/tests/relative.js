/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.date.tests.relative"),dojo.require("dojox.date.relative"),dojo.require("dojo.date"),dojo.requireLocalization("dojo.cldr","gregorian"),tests.register("dojox.date.tests.relative",[{name:"date.locale",setUp:function(){dojo.forEach(["en-us","zh-cn"],function(e){dojo.requireLocalization("dojo.cldr","gregorian",e)})},runTest:function(e){},tearDown:function(){}},{name:"format_dates",runTest:function(e){var a=new Date;e.is(dojo.date.locale.format(a,{selector:"time"}),dojox.date.relative.format(a));var t={locale:"en-us",relativeDate:new Date(2009,1,1,5,27,34)};e.is("3:32 AM",dojox.date.relative.format(new Date(2009,1,1,3,32,26),t)),e.is("Sat 8:32 PM",dojox.date.relative.format(new Date(2009,0,31,20,32,26),t)),e.is("Jan 1",dojox.date.relative.format(new Date(2009,0,1,20,32,26),t)),e.is("Jan 1, 2008",dojox.date.relative.format(new Date(2008,0,1,0),t)),e.is("8:32 PM",dojox.date.relative.format(new Date(2009,1,1,20,32,26),t)),e.is("12:00 AM",dojox.date.relative.format(new Date(2009,1,1,0),t)),e.is("Jan 31",dojox.date.relative.format(new Date(2009,0,31,20,32,26),dojo.delegate(t,{weekCheck:!1}))),e.is("Jan 1",dojox.date.relative.format(new Date(2009,0,1,20,32,26),t)),e.is("Feb 2",dojox.date.relative.format(new Date(2009,1,2,20,32,26),t)),e.is("Jan 1, 2010",dojox.date.relative.format(new Date(2010,0,1,0),t)),t.locale="zh-cn",e.is("上午3:32",dojox.date.relative.format(new Date(2009,1,1,3,32,26),t)),e.is("周六 下午8:32",dojox.date.relative.format(new Date(2009,0,31,20,32,26),t)),e.is("1月1日",dojox.date.relative.format(new Date(2009,0,1,20,32,26),t)),e.is("2008年1月1日",dojox.date.relative.format(new Date(2008,0,1,0),t))}}]);
//# sourceMappingURL=../../sourcemaps/date/tests/relative.js.map