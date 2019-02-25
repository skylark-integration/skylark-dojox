/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.lang.tests.recomb"),dojo.require("dojox.lang.functional"),dojo.require("dojox.lang.functional.listcomp"),dojo.require("dojox.lang.functional.linrec"),dojo.require("dojox.lang.functional.numrec"),dojo.require("dojox.lang.functional.tailrec"),dojo.require("dojox.lang.functional.binrec"),dojo.require("dojox.lang.functional.multirec"),function(){var a=dojox.lang.functional,n=function(a){return a<=1?1:a*n(a-1)},r=function(a){return a<=1?1:r(a-1)+r(a-2)},t=a.listcomp("i for(i = 0; i < 15; ++i)"),l=a.map(t,n),e=a.map(t,r);tests.register("dojox.lang.tests.recomb",[function(n){var r=a.linrec("<= 1","1","[n - 1]","a * b[0]");n.assertEqual(a.map(t,r),l)},function(n){var r=a.linrec(a.lambda("<= 1"),a.lambda("1"),a.lambda("[n - 1]"),a.lambda("a * b[0]"));n.assertEqual(a.map(t,r),l)},function(n){var r=a.numrec(1,"*");n.assertEqual(a.map(t,r),l)},function(n){var r=a.numrec(1,a.lambda("*"));n.assertEqual(a.map(t,r),l)},function(n){var r=a.multirec("<= 1","1","[[n - 1]]","a[0] * b[0]");n.assertEqual(a.map(t,r),l)},function(n){var r=a.multirec(a.lambda("<= 1"),a.lambda("1"),a.lambda("[[n - 1]]"),a.lambda("a[0] * b[0]"));n.assertEqual(a.map(t,r),l)},function(n){var r=a.tailrec("<= 1","n, acc -> acc","[n - 1, n * acc]");n.assertEqual(a.map(t,function(a){return r(a,1)}),l)},function(n){var r=a.tailrec(a.lambda("<= 1"),a.lambda("n, acc -> acc"),a.lambda("[n - 1, n * acc]"));n.assertEqual(a.map(t,function(a){return r(a,1)}),l)},function(n){var r=a.binrec("<= 1","1","[[n - 1], [n - 2]]","+");n.assertEqual(a.map(t,r),e)},function(n){var r=a.binrec(a.lambda("<= 1"),a.lambda("1"),a.lambda("[[n - 1], [n - 2]]"),a.lambda("+"));n.assertEqual(a.map(t,r),e)},function(n){var r=a.tailrec("<= 0","n, next, result -> result","[n - 1, next + result, next]");n.assertEqual(a.map(t,function(a){return r(a,1,1)}),e)},function(n){var r=a.tailrec(a.lambda("<= 0"),a.lambda("n, next, result -> result"),a.lambda("[n - 1, next + result, next]"));n.assertEqual(a.map(t,function(a){return r(a,1,1)}),e)},function(n){var r=a.multirec("<= 1","1","[[n - 1], [n - 2]]","a[0] + a[1]");n.assertEqual(a.map(t,r),e)},function(n){var r=a.multirec(a.lambda("<= 1"),a.lambda("1"),a.lambda("[[n - 1], [n - 2]]"),a.lambda("a[0] + a[1]"));n.assertEqual(a.map(t,r),e)}])}();
//# sourceMappingURL=../../sourcemaps/lang/tests/recomb.js.map