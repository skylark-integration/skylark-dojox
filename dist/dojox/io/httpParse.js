/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel"],function(t){return t.getObject("io.httpParse",!0,dojox),dojox.io.httpParse=function(t,e,n){var r=[],s=t.length;do{var a={},i=t.match(/(\n*[^\n]+)/);if(!i)return null;t=t.substring(i[0].length+1),i=i[1];var u=t.match(/([^\n]+\n)*/)[0],g=(t=t.substring(u.length)).substring(0,1);t=t.substring(1);var o=u=(e||"")+u;u=u.match(/[^:\n]+:[^\n]+\n/g);for(var l=0;l<u.length;l++){var d=u[l].indexOf(":");a[u[l].substring(0,d)]=u[l].substring(d+1).replace(/(^[ \r\n]*)|([ \r\n]*)$/g,"")}i=i.split(" ");var h,f={status:parseInt(i[1],10),statusText:i[2],readyState:3,getAllResponseHeaders:function(){return o},getResponseHeader:function(t){return a[t]}},b=a["Content-Length"];if(b){if(!(b<=t.length))return r;h=t.substring(0,b)}else if(h=t.match(/(.*)HTTP\/\d\.\d \d\d\d[\w\s]*\n/))h=h[0];else{if(n&&"\n"!=g)return r;h=t}r.push(f),t=t.substring(h.length),f.responseText=h,f.readyState=4,f._lastIndex=s-t.length}while(t);return r},dojox.io.httpParse});
//# sourceMappingURL=../sourcemaps/io/httpParse.js.map
