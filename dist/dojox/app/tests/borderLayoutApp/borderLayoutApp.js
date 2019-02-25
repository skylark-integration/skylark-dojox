/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
require(["dojo/_base/window","dojox/app/main","dojox/json/ref","dojo/text!./config.json","dojo/sniff"],function(o,i,e,t,a){o.global.modelApp={},modelApp.listData={identifier:"id",items:[{id:"item1",label:"Chad Chapman",rightIcon:"mblDomButtonBlueCircleArrow",First:"Chad",Last:"Chapman",Location:"CA",Office:"1278",Email:"c.c@test.com",Tel:"408-764-8237",Fax:"408-764-8228"},{id:"item2",label:"Irene Ira",rightIcon:"mblDomButtonBlueCircleArrow",First:"Irene",Last:"Ira",Location:"NJ",Office:"F09",Email:"i.i@test.com",Tel:"514-764-6532",Fax:"514-764-7300"},{id:"item3",label:"John Jacklin",rightIcon:"mblDomButtonBlueCircleArrow",First:"John",Last:"Jacklin",Location:"CA",Office:"6701",Email:"j.j@test.com",Tel:"408-764-1234",Fax:"408-764-4321"}]};var l=e.fromJson(t);a.add("ie9orLess",a("ie")&&a("ie")<=9),i(l)});
//# sourceMappingURL=../../../sourcemaps/app/tests/borderLayoutApp/borderLayoutApp.js.map