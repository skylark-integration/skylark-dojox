/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/regexp","dojox/main"],function(o,l,a){var e=o.getObject("validate.regexp",!0,a);return e=a.validate.regexp={ipAddress:function(o){"boolean"!=typeof(o="object"==typeof o?o:{}).allowDottedDecimal&&(o.allowDottedDecimal=!0),"boolean"!=typeof o.allowDottedHex&&(o.allowDottedHex=!0),"boolean"!=typeof o.allowDottedOctal&&(o.allowDottedOctal=!0),"boolean"!=typeof o.allowDecimal&&(o.allowDecimal=!0),"boolean"!=typeof o.allowHex&&(o.allowHex=!0),"boolean"!=typeof o.allowIPv6&&(o.allowIPv6=!0),"boolean"!=typeof o.allowHybrid&&(o.allowHybrid=!0);var l=[];o.allowDottedDecimal&&l.push("((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])"),o.allowDottedHex&&l.push("(0[xX]0*[\\da-fA-F]?[\\da-fA-F]\\.){3}0[xX]0*[\\da-fA-F]?[\\da-fA-F]"),o.allowDottedOctal&&l.push("(0+[0-3][0-7][0-7]\\.){3}0+[0-3][0-7][0-7]"),o.allowDecimal&&l.push("(0|[1-9]\\d{0,8}|[1-3]\\d{9}|4[01]\\d{8}|42[0-8]\\d{7}|429[0-3]\\d{6}|4294[0-8]\\d{5}|42949[0-5]\\d{4}|429496[0-6]\\d{3}|4294967[01]\\d{2}|42949672[0-8]\\d|429496729[0-5])"),o.allowHex&&l.push("0[xX]0*[\\da-fA-F]{1,8}"),o.allowIPv6&&l.push("([\\da-fA-F]{1,4}\\:){7}[\\da-fA-F]{1,4}"),o.allowHybrid&&l.push("([\\da-fA-F]{1,4}\\:){6}((\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])");var a="";return l.length>0&&(a="("+l.join("|")+")"),a},host:function(o){"boolean"!=typeof(o="object"==typeof o?o:{}).allowIP&&(o.allowIP=!0),"boolean"!=typeof o.allowLocal&&(o.allowLocal=!1),"boolean"!=typeof o.allowPort&&(o.allowPort=!0),"boolean"!=typeof o.allowNamed&&(o.allowNamed=!1);var l=o.allowPort?"(\\:\\d+)?":"",a="((?:(?:[\\da-zA-Z](?:[-\\da-zA-Z]{0,61}[\\da-zA-Z])?)\\.)+(?:[a-zA-Z](?:[-\\da-zA-Z]{0,6}[\\da-zA-Z])?)\\.?)";return o.allowIP&&(a+="|"+e.ipAddress(o)),o.allowLocal&&(a+="|localhost"),o.allowNamed&&(a+="|^[^-][a-zA-Z0-9_-]*"),"("+a+")"+l},url:function(o){"scheme"in(o="object"==typeof o?o:{})||(o.scheme=[!0,!1]);return l.buildGroupRE(o.scheme,function(o){return o?"(https?|ftps?)\\://":""})+e.host(o)+"(/(?:[^?#\\s/]+/)*(?:[^?#\\s/]+(?:\\?[^?#\\s/]*)?(?:#[A-Za-z][\\w.:-]*)?)?)?"},emailAddress:function(o){"boolean"!=typeof(o="object"==typeof o?o:{}).allowCruft&&(o.allowCruft=!1),o.allowPort=!1;var l="([!#-'*+\\-\\/-9=?A-Z^-~]+[.])*[!#-'*+\\-\\/-9=?A-Z^-~]+@"+e.host(o);return o.allowCruft&&(l="<?(mailto\\:)?"+l+">?"),l},emailAddressList:function(o){"string"!=typeof(o="object"==typeof o?o:{}).listSeparator&&(o.listSeparator="\\s;,");var l=e.emailAddress(o);return"("+l+"\\s*["+o.listSeparator+"]\\s*)*"+l+"\\s*["+o.listSeparator+"]?\\s*"},numberFormat:function(o){void 0===(o="object"==typeof o?o:{}).format&&(o.format="###-###-####");return l.buildGroupRE(o.format,function(o){return l.escapeString(o,"?").replace(/\?/g,"\\d?").replace(/#/g,"\\d")})},ca:{postalCode:function(){return"([A-Z][0-9][A-Z] [0-9][A-Z][0-9])"},province:function(){return"(AB|BC|MB|NB|NL|NS|NT|NU|ON|PE|QC|SK|YT)"}},us:{state:function(o){"boolean"!=typeof(o="object"==typeof o?o:{}).allowTerritories&&(o.allowTerritories=!0),"boolean"!=typeof o.allowMilitary&&(o.allowMilitary=!0);var l="AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY";return o.allowTerritories&&(l+="|AS|FM|GU|MH|MP|PW|PR|VI"),o.allowMilitary&&(l+="|AA|AE|AP"),"("+l+")"}}}});
//# sourceMappingURL=../sourcemaps/validate/regexp.js.map