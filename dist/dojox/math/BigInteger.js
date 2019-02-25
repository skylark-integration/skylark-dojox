/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
define(["dojo","dojox"],function(t,i){var s;t.getObject("math.BigInteger",!0,i),t.experimental("dojox.math.BigInteger");function r(t,i,s){null!=t&&("number"==typeof t?this._fromNumber(t,i,s):i||"string"==typeof t?this._fromString(t,i):this._fromString(t,256))}function h(){return new r(null)}"Microsoft Internet Explorer"==navigator.appName?(r.prototype.am=function(t,i,s,r,h,o){for(var n=32767&i,e=i>>15;--o>=0;){var f=32767&this[t],u=this[t++]>>15,_=e*f+u*n;h=((f=n*f+((32767&_)<<15)+s[r]+(1073741823&h))>>>30)+(_>>>15)+e*u+(h>>>30),s[r++]=1073741823&f}return h},s=30):"Netscape"!=navigator.appName?(r.prototype.am=function(t,i,s,r,h,o){for(;--o>=0;){var n=i*this[t++]+s[r]+h;h=Math.floor(n/67108864),s[r++]=67108863&n}return h},s=26):(r.prototype.am=function(t,i,s,r,h,o){for(var n=16383&i,e=i>>14;--o>=0;){var f=16383&this[t],u=this[t++]>>14,_=e*f+u*n;h=((f=n*f+((16383&_)<<14)+s[r]+h)>>28)+(_>>14)+e*u,s[r++]=268435455&f}return h},s=28);var o,n,e="0123456789abcdefghijklmnopqrstuvwxyz",f=[];for(o="0".charCodeAt(0),n=0;n<=9;++n)f[o++]=n;for(o="a".charCodeAt(0),n=10;n<36;++n)f[o++]=n;for(o="A".charCodeAt(0),n=10;n<36;++n)f[o++]=n;function u(t){return e.charAt(t)}function _(t,i){var s=f[t.charCodeAt(i)];return null==s?-1:s}function a(t){var i=h();return i._fromInt(t),i}function m(t){var i,s=1;return(i=t>>>16)&&(t=i,s+=16),(i=t>>8)&&(t=i,s+=8),(i=t>>4)&&(t=i,s+=4),(i=t>>2)&&(t=i,s+=2),(i=t>>1)&&(t=i,s+=1),s}function c(t){this.m=t}function l(t){this.m=t,this.mp=t._invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t._DB-15)-1,this.mt2=2*t.t}return t.extend(c,{convert:function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},revert:function(t){return t},reduce:function(t){t._divRemTo(this.m,null,t)},mulTo:function(t,i,s){t._multiplyTo(i,s),this.reduce(s)},sqrTo:function(t,i){t._squareTo(i),this.reduce(i)}}),t.extend(l,{convert:function(t){var i=h();return t.abs()._dlShiftTo(this.m.t,i),i._divRemTo(this.m,null,i),t.s<0&&i.compareTo(r.ZERO)>0&&this.m._subTo(i,i),i},revert:function(t){var i=h();return t._copyTo(i),this.reduce(i),i},reduce:function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var s=32767&t[i],r=s*this.mpl+((s*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t._DM;for(t[s=i+this.m.t]+=this.m.am(0,r,t,i,0,this.m.t);t[s]>=t._DV;)t[s]-=t._DV,t[++s]++}t._clamp(),t._drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t._subTo(this.m,t)},mulTo:function(t,i,s){t._multiplyTo(i,s),this.reduce(s)},sqrTo:function(t,i){t._squareTo(i),this.reduce(i)}}),t.extend(r,{_DB:s,_DM:(1<<s)-1,_DV:1<<s,_FV:Math.pow(2,52),_F1:52-s,_F2:2*s-52,_copyTo:function(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s},_fromInt:function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+_DV:this.t=0},_fromString:function(t,i){var s;if(16==i)s=4;else if(8==i)s=3;else if(256==i)s=8;else if(2==i)s=1;else if(32==i)s=5;else{if(4!=i)return void this._fromRadix(t,i);s=2}this.t=0,this.s=0;for(var h=t.length,o=!1,n=0;--h>=0;){var e=8==s?255&t[h]:_(t,h);e<0?"-"==t.charAt(h)&&(o=!0):(o=!1,0==n?this[this.t++]=e:n+s>this._DB?(this[this.t-1]|=(e&(1<<this._DB-n)-1)<<n,this[this.t++]=e>>this._DB-n):this[this.t-1]|=e<<n,(n+=s)>=this._DB&&(n-=this._DB))}8==s&&0!=(128&t[0])&&(this.s=-1,n>0&&(this[this.t-1]|=(1<<this._DB-n)-1<<n)),this._clamp(),o&&r.ZERO._subTo(this,this)},_clamp:function(){for(var t=this.s&this._DM;this.t>0&&this[this.t-1]==t;)--this.t},_dlShiftTo:function(t,i){var s;for(s=this.t-1;s>=0;--s)i[s+t]=this[s];for(s=t-1;s>=0;--s)i[s]=0;i.t=this.t+t,i.s=this.s},_drShiftTo:function(t,i){for(var s=t;s<this.t;++s)i[s-t]=this[s];i.t=Math.max(this.t-t,0),i.s=this.s},_lShiftTo:function(t,i){var s,r=t%this._DB,h=this._DB-r,o=(1<<h)-1,n=Math.floor(t/this._DB),e=this.s<<r&this._DM;for(s=this.t-1;s>=0;--s)i[s+n+1]=this[s]>>h|e,e=(this[s]&o)<<r;for(s=n-1;s>=0;--s)i[s]=0;i[n]=e,i.t=this.t+n+1,i.s=this.s,i._clamp()},_rShiftTo:function(t,i){i.s=this.s;var s=Math.floor(t/this._DB);if(s>=this.t)i.t=0;else{var r=t%this._DB,h=this._DB-r,o=(1<<r)-1;i[0]=this[s]>>r;for(var n=s+1;n<this.t;++n)i[n-s-1]|=(this[n]&o)<<h,i[n-s]=this[n]>>r;r>0&&(i[this.t-s-1]|=(this.s&o)<<h),i.t=this.t-s,i._clamp()}},_subTo:function(t,i){for(var s=0,r=0,h=Math.min(t.t,this.t);s<h;)r+=this[s]-t[s],i[s++]=r&this._DM,r>>=this._DB;if(t.t<this.t){for(r-=t.s;s<this.t;)r+=this[s],i[s++]=r&this._DM,r>>=this._DB;r+=this.s}else{for(r+=this.s;s<t.t;)r-=t[s],i[s++]=r&this._DM,r>>=this._DB;r-=t.s}i.s=r<0?-1:0,r<-1?i[s++]=this._DV+r:r>0&&(i[s++]=r),i.t=s,i._clamp()},_multiplyTo:function(t,i){var s=this.abs(),h=t.abs(),o=s.t;for(i.t=o+h.t;--o>=0;)i[o]=0;for(o=0;o<h.t;++o)i[o+s.t]=s.am(0,h[o],i,o,0,s.t);i.s=0,i._clamp(),this.s!=t.s&&r.ZERO._subTo(i,i)},_squareTo:function(t){for(var i=this.abs(),s=t.t=2*i.t;--s>=0;)t[s]=0;for(s=0;s<i.t-1;++s){var r=i.am(s,i[s],t,2*s,0,1);(t[s+i.t]+=i.am(s+1,2*i[s],t,2*s+1,r,i.t-s-1))>=i._DV&&(t[s+i.t]-=i._DV,t[s+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(s,i[s],t,2*s,0,1)),t.s=0,t._clamp()},_divRemTo:function(t,i,s){var o=t.abs();if(!(o.t<=0)){var n=this.abs();if(n.t<o.t)return null!=i&&i._fromInt(0),void(null!=s&&this._copyTo(s));null==s&&(s=h());var e=h(),f=this.s,u=t.s,_=this._DB-m(o[o.t-1]);_>0?(o._lShiftTo(_,e),n._lShiftTo(_,s)):(o._copyTo(e),n._copyTo(s));var a=e.t,c=e[a-1];if(0!=c){var l=c*(1<<this._F1)+(a>1?e[a-2]>>this._F2:0),v=this._FV/l,T=(1<<this._F1)/l,p=1<<this._F2,D=s.t,d=D-a,b=null==i?h():i;for(e._dlShiftTo(d,b),s.compareTo(b)>=0&&(s[s.t++]=1,s._subTo(b,s)),r.ONE._dlShiftTo(a,b),b._subTo(e,e);e.t<a;)e[e.t++]=0;for(;--d>=0;){var B=s[--D]==c?this._DM:Math.floor(s[D]*v+(s[D-1]+p)*T);if((s[D]+=e.am(0,B,s,d,0,a))<B)for(e._dlShiftTo(d,b),s._subTo(b,s);s[D]<--B;)s._subTo(b,s)}null!=i&&(s._drShiftTo(a,i),f!=u&&r.ZERO._subTo(i,i)),s.t=a,s._clamp(),_>0&&s._rShiftTo(_,s),f<0&&r.ZERO._subTo(s,s)}}},_invDigit:function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return(i=(i=(i=(i=i*(2-(15&t)*i)&15)*(2-(255&t)*i)&255)*(2-((65535&t)*i&65535))&65535)*(2-t*i%this._DV)%this._DV)>0?this._DV-i:-i},_isEven:function(){return 0==(this.t>0?1&this[0]:this.s)},_exp:function(t,i){if(t>4294967295||t<1)return r.ONE;var s=h(),o=h(),n=i.convert(this),e=m(t)-1;for(n._copyTo(s);--e>=0;)if(i.sqrTo(s,o),(t&1<<e)>0)i.mulTo(o,n,s);else{var f=s;s=o,o=f}return i.revert(s)},toString:function(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this._toRadix(t);i=2}var s,r=(1<<i)-1,h=!1,o="",n=this.t,e=this._DB-n*this._DB%i;if(n-- >0)for(e<this._DB&&(s=this[n]>>e)>0&&(h=!0,o=u(s));n>=0;)e<i?(s=(this[n]&(1<<e)-1)<<i-e,s|=this[--n]>>(e+=this._DB-i)):(s=this[n]>>(e-=i)&r,e<=0&&(e+=this._DB,--n)),s>0&&(h=!0),h&&(o+=u(s));return h?o:"0"},negate:function(){var t=h();return r.ZERO._subTo(this,t),t},abs:function(){return this.s<0?this.negate():this},compareTo:function(t){var i=this.s-t.s;if(i)return i;var s=this.t;if(i=s-t.t)return i;for(;--s>=0;)if(i=this[s]-t[s])return i;return 0},bitLength:function(){return this.t<=0?0:this._DB*(this.t-1)+m(this[this.t-1]^this.s&this._DM)},mod:function(t){var i=h();return this.abs()._divRemTo(t,null,i),this.s<0&&i.compareTo(r.ZERO)>0&&t._subTo(i,i),i},modPowInt:function(t,i){var s;return s=t<256||i._isEven()?new c(i):new l(i),this._exp(t,s)}}),t._mixin(r,{ZERO:a(0),ONE:a(1),_nbi:h,_nbv:a,_nbits:m,_Montgomery:l}),i.math.BigInteger=r,i.math.BigInteger});
//# sourceMappingURL=../sourcemaps/math/BigInteger.js.map