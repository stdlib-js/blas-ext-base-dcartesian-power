"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var j=g(function(Z,y){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),F=require('@stdlib/math-base-special-pow/dist');function T(e,r,a,l,q,u,i,t,o){var w,x,s,f,d,n,v,m,c;if(e<=0||r<=0)return u;if(w=F(e,r),C([i,t]))for(s=o,n=0;n<w;n++){for(c=n,v=r-1;v>=0;v--)m=c%e,c=(c-m)/e,f=q+m*l,x=s+v*t,u[x]=a[f];s+=i}else for(d=w,v=0;v<r;v++)for(d/=e,s=o+v*t,n=0;n<w;n++)m=(n-n%d)/d%e,f=q+m*l,u[s]=a[f],s+=i;return u}y.exports=T
});var b=g(function($,P){
var z=require('@stdlib/blas-base-assert-is-layout/dist'),A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-pow/dist'),E=require('@stdlib/math-base-special-fast-max/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),G=j();function H(e,r,a,l,q,u,i){var t,o;if(!z(e))throw new TypeError(p('2erFx',e));if(A(e)){if(i<E(1,R(r,a)))throw new RangeError(p('2erGR',R(r,a),i));t=1,o=i}else{if(i<E(1,a))throw new RangeError(p('2erGR',a,i));t=i,o=1}return G(r,a,l,q,B(r,q),u,t,o,0)}P.exports=H
});var S=g(function(X,M){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=b(),J=j();I(V,"ndarray",J);M.exports=V
});var K=require("path").join,Q=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),W=S(),h,_=Q(K(__dirname,"./native.js"));U(_)?h=W:h=_;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
