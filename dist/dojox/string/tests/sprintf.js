/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.string.tests.sprintf"),dojo.require("dojox.string.sprintf"),dojo.require("dojo.string"),tests.register("dojox.string.tests.sprintf",[{name:"Flag: (space)",runTest:function(s){var t=dojox.string.sprintf;s.is(" 42",t("% d",42)),s.is("-42",t("% d",-42)),s.is("   42",t("% 5d",42)),s.is("  -42",t("% 5d",-42)),s.is("             42",t("% 15d",42)),s.is("            -42",t("% 15d",-42))}},{name:"Flag: +",runTest:function(s){var t=dojox.string.sprintf;s.is("+42",t("%+d",42)),s.is("-42",t("%+d",-42)),s.is("  +42",t("%+5d",42)),s.is("  -42",t("%+5d",-42)),s.is("            +42",t("%+15d",42)),s.is("            -42",t("%+15d",-42))}},{name:"Flag: 0",runTest:function(s){var t=dojox.string.sprintf;s.is("42",t("%0d",42)),s.is("-42",t("%0d",-42)),s.is("00042",t("%05d",42)),s.is("00-42",t("%05d",-42)),s.is("000000000000042",t("%015d",42)),s.is("000000000000-42",t("%015d",-42))}},{name:"Flag: -",runTest:function(s){var t=dojox.string.sprintf;s.is("42",t("%-d",42)),s.is("-42",t("%-d",-42)),s.is("42   ",t("%-5d",42)),s.is("-42  ",t("%-5d",-42)),s.is("42             ",t("%-15d",42)),s.is("-42            ",t("%-15d",-42)),s.is("42",t("%-0d",42)),s.is("-42",t("%-0d",-42)),s.is("42   ",t("%-05d",42)),s.is("-42  ",t("%-05d",-42)),s.is("42             ",t("%-015d",42)),s.is("-42            ",t("%-015d",-42)),s.is("42",t("%0-d",42)),s.is("-42",t("%0-d",-42)),s.is("42   ",t("%0-5d",42)),s.is("-42  ",t("%0-5d",-42)),s.is("42             ",t("%0-15d",42)),s.is("-42            ",t("%0-15d",-42))}},{name:"Precision",runTest:function(s){var t=dojox.string.sprintf;s.is("42",t("%d",42.8952)),s.is("42",t("%.2d",42.8952)),s.is("42",t("%.2i",42.8952)),s.is("42.90",t("%.2f",42.8952)),s.is("42.90",t("%.2F",42.8952)),s.is("42.8952000000",t("%.10f",42.8952)),s.is("42.90",t("%1.2f",42.8952)),s.is(" 42.90",t("%6.2f",42.8952)),s.is("042.90",t("%06.2f",42.8952)),s.is("+42.90",t("%+6.2f",42.8952)),s.is("42.8952000000",t("%5.10f",42.8952))}},{name:"Bases",runTest:function(s){var t=dojox.string.sprintf;s.is("",t("%c",127));var i=!1;try{t("%c",-100)}catch(t){s.is("invalid character code passed to %c in sprintf",t.message),i=!0}s.t(i),i=!1;try{t("%c",2097152)}catch(t){s.is("invalid character code passed to %c in sprintf",t.message),i=!0}s.t(i)}},{name:"Mapping",runTest:function(s){var t=dojox.string.sprintf;s.is("%1$",t("%1$")),s.is("%0$s",t("%0$s")),s.is("Hot Pocket",t("%1$s %2$s","Hot","Pocket")),s.is("12.0 Hot Pockets",t("%1$.1f %2$s %3$ss",12,"Hot","Pocket")),s.is(" 42",t("%1$*.f","42",3)),i=!1;try{t("%2$*s","Hot Pocket")}catch(t){s.is("got 1 printf arguments, insufficient for '%2$*s'",t.message),i=!0}s.t(i),s.is("%(foo",t("%(foo",{})),s.is("Hot Pocket",t("%(temperature)s %(crevace)s",{temperature:"Hot",crevace:"Pocket"})),s.is("12.0 Hot Pockets",t("%(quantity).1f %(temperature)s %(crevace)ss",{quantity:12,temperature:"Hot",crevace:"Pocket"}));var i=!1;try{t("%(foo)s",42)}catch(t){s.is("format requires a mapping",t.message),i=!0}s.t(i),i=!1;try{t("%(foo)s %(bar)s","foo",42)}catch(t){s.is("format requires a mapping",t.message),i=!0}s.t(i),i=!1;try{t("%(foo)*s",{foo:"Hot Pocket"})}catch(t){s.is("* width not supported in mapped formats",t.message),i=!0}s.t(i)}},{name:"Positionals",runTest:function(s){var t=dojox.string.sprintf;s.is(" foo",t("%*s","foo",4)),s.is("      3.14",t("%*.*f",3.14159265,10,2)),s.is("0000003.14",t("%0*.*f",3.14159265,10,2)),s.is("3.14      ",t("%-*.*f",3.14159265,10,2));var i=!1;try{t("%*s","foo","bar")}catch(t){s.is("the argument for * width at position 2 is not a number in %*s",t.message),i=!0}s.t(i),i=!1;try{t("%10.*f","foo",42)}catch(t){s.is("format argument 'foo' not a float; parseFloat returned NaN",t.message),i=!0}s.t(i)}},{name:"vs. Formatter",runTest:function(s){for(var t=dojox.string.sprintf,i=0;i<1e3;i++)t("%d %s Pockets",i,"Hot")}},{name:"Formatter",runTest:function(s){for(var t=new(0,dojox.string.sprintf.Formatter)("%d %s Pockets"),i=0;i<1e3;i++)t.format(i,"Hot")}},{name:"Miscellaneous",runTest:function(s){var t=dojox.string.sprintf;s.is("+hello+",t("+%s+","hello")),s.is("+10+",t("+%d+",10)),s.is("a",t("%c","a")),s.is('"',t("%c",34)),s.is("$",t("%c",36)),s.is("10",t("%d",10));var i=!1;try{t("%s%s",42)}catch(t){s.is("got 1 printf arguments, insufficient for '%s%s'",t.message),i=!0}s.t(i),i=!1;try{t("%c")}catch(t){s.is("got 0 printf arguments, insufficient for '%c'",t.message),i=!0}s.t(i),s.is("%10",t("%10",42))}}]);
//# sourceMappingURL=../../sourcemaps/string/tests/sprintf.js.map