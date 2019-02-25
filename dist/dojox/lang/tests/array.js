/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.array"),dojo.require("dojox.lang.functional"),dojo.require("dojox.lang.functional.fold"),dojo.require("dojox.lang.functional.reversed"),function(){var e,n=dojox.lang.functional,t={a:1,b:2,c:3},a=function(e){this.array=e,this.position=e.length-1};dojo.extend(a,{hasNext:n.lambda("this.position >= 0"),next:n.lambda("this.array[this.position--]")}),tests.register("dojox.lang.tests.array",[function(e){e.assertEqual(n.filter([1,2,3],"%2"),[1,3])},function(e){e.assertEqual(n.filter([1,2,3],"%2==0"),[2])},function(e){var t=new a([1,2,3]);e.assertEqual(n.filter(t,"%2"),[3,1])},function(e){var t=new a([1,2,3]);e.assertEqual(n.filter(t,"%2"),n.filterRev([1,2,3],"%2"))},function(t){t.assertEqual((e=[],n.forEach([1,2,3],function(n){e.push(n)}),e),[1,2,3])},function(t){var s=new a([1,2,3]);t.assertEqual((e=[],n.forEach(s,function(n){e.push(n)}),e),[3,2,1])},function(t){t.assertEqual((e=[],n.forEachRev([1,2,3],function(n){e.push(n)}),e),[3,2,1])},function(e){e.assertEqual(n.map([1,2,3],"+3"),[4,5,6])},function(e){var t=new a([1,2,3]);e.assertEqual(n.map(t,"+3"),[6,5,4])},function(e){var t=new a([1,2,3]);e.assertEqual(n.map(t,"+3"),n.mapRev([1,2,3],"+3"))},function(e){e.assertFalse(n.every([1,2,3],"%2"))},function(e){e.assertTrue(n.every([1,3,5],"%2"))},function(e){var t=new a([1,3,5]);e.assertTrue(n.every(t,"%2"))},function(e){e.assertFalse(n.every(t,"%2"))},function(e){e.assertFalse(n.everyRev([1,2,3],"%2"))},function(e){e.assertTrue(n.everyRev([1,3,5],"%2"))},function(e){e.assertFalse(n.some([2,4,6],"%2"))},function(e){e.assertTrue(n.some([1,2,3],"%2"))},function(e){var t=new a([1,2,3]);e.assertTrue(n.some(t,"%2"))},function(e){e.assertTrue(n.some(t,"%2"))},function(e){e.assertFalse(n.someRev([2,4,6],"%2"))},function(e){e.assertTrue(n.someRev([1,2,3],"%2"))},function(e){e.assertEqual(n.reduce([4,2,1],"x-y"),1)},function(e){e.assertEqual(n.reduce([4,2,1],"x-y",8),1)},function(e){var t=new a([1,2,4]);e.assertEqual(n.reduce(t,"x-y"),1)},function(e){e.assertEqual(n.reduceRight([4,2,1],"x-y"),-5)},function(e){e.assertEqual(n.reduceRight([4,2,1],"x-y",8),1)}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/array.js.map