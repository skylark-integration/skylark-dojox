/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["../_base"],function(e){var a={className:"comment",begin:"\x3c!--",end:"--\x3e"},n={className:"attribute",begin:" [a-zA-Z-]+\\s*=\\s*",end:"^",contains:["value"]},s={className:"value",begin:'"',end:'"'};e.constants;return e.languages.xml={defaultMode:{contains:["pi","comment","cdata","tag"]},case_insensitive:!0,modes:[{className:"pi",begin:"<\\?",end:"\\?>",relevance:10},a,{className:"cdata",begin:"<\\!\\[CDATA\\[",end:"\\]\\]>"},{className:"tag",begin:"</?",end:">",contains:["title","tag_internal"],relevance:1.5},{className:"title",begin:"[A-Za-z:_][A-Za-z0-9\\._:-]+",end:"^",relevance:0},{className:"tag_internal",begin:"^",endsWithParent:!0,contains:["attribute"],relevance:0,illegal:"[\\+\\.]"},n,s],XML_COMMENT:a,XML_ATTR:n,XML_VALUE:s},e.languages.xml});
//# sourceMappingURL=../../sourcemaps/highlight/languages/xml.js.map
