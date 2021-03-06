/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo/_base/lang","dojo/_base/array","./_base"],function(r,t,o){return o.vector={sum:function(){var r={x:0,y:0,z:0};return t.forEach(arguments,function(t){r.x+=t.x,r.y+=t.y,r.z+=t.z}),r},center:function(){var r=arguments.length;if(0==r)return{x:0,y:0,z:0};var t=o.vector.sum(arguments);return{x:t.x/r,y:t.y/r,z:t.z/r}},substract:function(r,t){return{x:r.x-t.x,y:r.y-t.y,z:r.z-t.z}},_crossProduct:function(r,t,o,n,c,e){return{x:t*e-o*c,y:o*n-r*e,z:r*c-t*n}},crossProduct:function(r,n,c,e,u,s){return 6==arguments.length&&t.every(arguments,function(r){return"number"==typeof r})?o.vector._crossProduct(r,n,c,e,u,s):o.vector._crossProduct(r.x,r.y,r.z,n.x,n.y,n.z)},_dotProduct:function(r,t,o,n,c,e){return r*n+t*c+o*e},dotProduct:function(r,n,c,e,u,s){return 6==arguments.length&&t.every(arguments,function(r){return"number"==typeof r})?o.vector._dotProduct(r,n,c,e,u,s):o.vector._dotProduct(r.x,r.y,r.z,n.x,n.y,n.z)},normalize:function(r,t,n){var c,e,u;r instanceof Array?(c=r[0],e=r[1],u=r[2]):(c=r,e=t,u=n);var s=o.vector.substract(e,c),y=o.vector.substract(u,c);return o.vector.crossProduct(s,y)}},o.vector});
//# sourceMappingURL=../sourcemaps/gfx3d/vector.js.map
