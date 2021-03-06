/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../_base"],function(e){var n=e.constants;return e.languages.javascript={defaultMode:{lexems:[n.UNDERSCORE_IDENT_RE],contains:["string","comment","number","regexp","function"],keywords:{keyword:{in:1,if:1,for:1,while:1,finally:1,var:1,new:1,function:1,do:1,return:1,void:1,else:1,break:1,catch:1,instanceof:1,with:1,throw:1,case:1,default:1,try:1,this:1,switch:1,continue:1,typeof:1,delete:1},literal:{true:1,false:1,null:1}}},modes:[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE,n.C_NUMBER_MODE,n.APOS_STRING_MODE,n.QUOTE_STRING_MODE,n.BACKSLASH_ESCAPE,{className:"regexp",begin:"/.*?[^\\\\/]/[gim]*",end:"^"},{className:"function",begin:"function\\b",end:"{",lexems:[n.UNDERSCORE_IDENT_RE],keywords:{function:1},contains:["title","params"]},{className:"title",begin:n.UNDERSCORE_IDENT_RE,end:"^"},{className:"params",begin:"\\(",end:"\\)",contains:["string","comment"]}]},e.languages.javascript});
//# sourceMappingURL=../../sourcemaps/highlight/languages/javascript.js.map
