/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/kernel","dojo/_base/array"],function(e){return e.getObject("xml",!0,dojox),dojox.xml.DomParser=new function(){var t={ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9},n=/<([^>\/\s+]*)([^>]*)>([^<]*)/g,a=/([^=]*)=(("([^"]*)")|('([^']*)'))/g,s=/<!ENTITY\s+([^"]*)\s+"([^"]*)">/g,r=/<!\[CDATA\[([\u0001-\uFFFF]*?)\]\]>/g,i=/<!--([\u0001-\uFFFF]*?)-->/g,o=/^\s+|\s+$/g,l=/\s+/g,u=/\&gt;/g,h=/\&lt;/g,c=/\&quot;/g,d=/\&apos;/g,N=/\&amp;/g,p="_def_";function f(n){var a=[];return function n(a,s,r){e.forEach(a.childNodes,function(e){e.nodeType==t.ELEMENT&&("*"==s?r.push(e):e.nodeName==s&&r.push(e),n(e,s,r))})}(this,n,a),a}function m(n,a){a||(a=p);var s=[];return function n(a,s,r,i){e.forEach(a.childNodes,function(e){e.nodeType==t.ELEMENT&&("*"==s&&e.ownerDocument._nsPaths[r]==e.namespace?i.push(e):e.localName==s&&e.ownerDocument._nsPaths[r]==e.namespace&&i.push(e),n(e,s,r,i))})}(this,n,a,s),s}function T(n){var a=[];return e.forEach(this.childNodes,function(e){e.nodeType==t.ELEMENT&&("*"==n?a.push(e):e.nodeName==n&&a.push(e))}),a}function g(n,a){var s=[];return e.forEach(this.childNodes,function(e){e.nodeType==t.ELEMENT&&("*"==n&&e.ownerDocument._nsPaths[a]==e.namespace?s.push(e):e.localName==n&&e.ownerDocument._nsPaths[a]==e.namespace&&s.push(e))}),s}function E(e){return{nodeType:t.TEXT,nodeName:"#text",nodeValue:e.replace(l," ").replace(u,">").replace(h,"<").replace(d,"'").replace(c,'"').replace(N,"&")}}function b(e){for(var t=0;t<this.attributes.length;t++)if(this.attributes[t].nodeName==e)return this.attributes[t].nodeValue;return null}function v(e,t){for(var n=0;n<this.attributes.length;n++)if(this.ownerDocument._nsPaths[t]==this.attributes[n].namespace&&this.attributes[n].localName==e)return this.attributes[n].nodeValue;return null}function y(e,t){for(var n=null,a=0;a<this.attributes.length;a++)if(this.attributes[a].nodeName==e){n=this.attributes[a].nodeValue,this.attributes[a].nodeValue=t;break}"id"==e&&(null!=n&&this.ownerDocument._remove(n),this.ownerDocument._add(this))}function x(e,t,n){for(var a=0;a<this.attributes.length;a++)if(this.ownerDocument._nsPaths[n]==this.attributes[a].namespace&&this.attributes[a].localName==e)return void(this.attributes[a].nodeValue=t)}function _(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t>0)return e.childNodes[t-1];return null}function A(){var e=this.parentNode;if(e)for(var t=0;t<e.childNodes.length;t++)if(e.childNodes[t]==this&&t+1<e.childNodes.length)return e.childNodes[t+1];return null}this.parse=function(e){var D=new function(){var e={};this.nodeType=t.DOCUMENT,this.nodeName="#document",this.namespaces={},this._nsPaths={},this.childNodes=[],this.documentElement=null,this._add=function(t){void 0!==t.id&&(e[t.id]=t)},this._remove=function(t){e[t]&&delete e[t]},this.byId=this.getElementById=function(t){return e[t]},this.byName=this.getElementsByTagName=f,this.byNameNS=this.getElementsByTagNameNS=m,this.childrenByName=T,this.childrenByNameNS=g};if(null==e)return D;if(0==e.length)return D;if(e.indexOf("<!ENTITY")>0){var S,I=[];if(s.test(e)){for(s.lastIndex=0;null!=(S=s.exec(e));)I.push({entity:"&"+S[1].replace(o,"")+";",expression:S[2]});for(var O=0;O<I.length;O++)e=e.replace(new RegExp(I[O].entity,"g"),I[O].expression)}}for(var C,M=[];null!=(C=r.exec(e));)M.push(C[1]);for(O=0;O<M.length;O++)e=e.replace(M[O],O);for(var P,w=[];null!=(P=i.exec(e));)w.push(P[1]);for(O=0;O<w.length;O++)e=e.replace(w[O],O);for(var B,V=D;null!=(B=n.exec(e));){if("/"==B[2].charAt(0)&&B[2].replace(o,"").length>1)V.parentNode&&(V=V.parentNode),(U=(B[3]||"").replace(o,"")).length>0&&V.childNodes.push(E(U));else if(B[1].length>0)if("?"==B[1].charAt(0)){var F=B[1].substr(1),L=B[2].substr(0,B[2].length-2);V.childNodes.push({nodeType:t.PROCESSING_INSTRUCTION,nodeName:F,nodeValue:L})}else if("!"==B[1].charAt(0)){if(0==B[1].indexOf("![CDATA[")){var R=parseInt(B[1].replace("![CDATA[","").replace("]]",""));V.childNodes.push({nodeType:t.CDATA_SECTION,nodeName:"#cdata-section",nodeValue:M[R]})}else if("!--"==B[1].substr(0,3)){R=parseInt(B[1].replace("!--","").replace("--",""));V.childNodes.push({nodeType:t.COMMENT,nodeName:"#comment",nodeValue:w[R]})}}else{F=B[1].replace(o,"");var j,U,k={nodeType:t.ELEMENT,nodeName:F,localName:F,namespace:p,ownerDocument:D,attributes:[],parentNode:null,childNodes:[]};if(F.indexOf(":")>-1){var G=F.split(":");k.namespace=G[0],k.localName=G[1]}for(k.byName=k.getElementsByTagName=f,k.byNameNS=k.getElementsByTagNameNS=m,k.childrenByName=T,k.childrenByNameNS=g,k.getAttribute=b,k.getAttributeNS=v,k.setAttribute=y,k.setAttributeNS=x,k.previous=k.previousSibling=_,k.next=k.nextSibling=A;null!=(j=a.exec(B[2]));)if(j.length>0){F=j[1].replace(o,""),R=(j[4]||j[6]||"").replace(l," ").replace(u,">").replace(h,"<").replace(d,"'").replace(c,'"').replace(N,"&");if(0==F.indexOf("xmlns"))if(F.indexOf(":")>0){var X=F.split(":");D.namespaces[X[1]]=R,D._nsPaths[R]=X[1]}else D.namespaces[p]=R,D._nsPaths[R]=p;else{var Y=F;X=p;if(F.indexOf(":")>0)Y=(G=F.split(":"))[1],X=G[0];k.attributes.push({nodeType:t.ATTRIBUTE,nodeName:F,localName:Y,namespace:X,nodeValue:R}),"id"==Y&&(k.id=R)}}D._add(k),V&&(V.childNodes.push(k),k.parentNode=V,"/"!=B[2].charAt(B[2].length-1)&&(V=k)),(U=B[3]).length>0&&V.childNodes.push(E(U))}}for(O=0;O<D.childNodes.length;O++){var q=D.childNodes[O];if(q.nodeType==t.ELEMENT){D.documentElement=q;break}}return D}},dojox.xml.DomParser});
//# sourceMappingURL=../sourcemaps/xml/DomParser.js.map