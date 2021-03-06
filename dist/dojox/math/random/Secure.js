/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo"],function(t){return t.declare("dojox.math.random.Secure",null,{constructor:function(e,i){this.prng=e;var s=this.pool=new Array(e.size);this.pptr=0;for(var n=0,o=e.size;n<o;){var r=Math.floor(65536*Math.random());s[n++]=r>>>8,s[n++]=255&r}this.seedTime(),i||(this.h=[t.connect(t.body(),"onclick",this,"seedTime"),t.connect(t.body(),"onkeypress",this,"seedTime")])},destroy:function(){this.h&&t.forEach(this.h,t.disconnect)},nextBytes:function(t){var e=this.state;if(!e){this.seedTime(),(e=this.state=this.prng()).init(this.pool);for(var i=this.pool,s=0,n=i.length;s<n;i[s++]=0);this.pptr=0}for(s=0,n=t.length;s<n;++s)t[s]=e.next()},seedTime:function(){this._seed_int((new Date).getTime())},_seed_int:function(t){var e=this.pool,i=this.pptr;e[i++]^=255&t,e[i++]^=t>>8&255,e[i++]^=t>>16&255,e[i++]^=t>>24&255,i>=this.prng.size&&(i-=this.prng.size),this.pptr=i}}),dojox.math.random.Secure});
//# sourceMappingURL=../../sourcemaps/math/random/Secure.js.map
