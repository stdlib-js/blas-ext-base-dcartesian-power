"use strict";var g=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var j=g(function(Z,y){
var C=require('@stdlib/ndarray-base-assert-is-row-major/dist'),F=require('@stdlib/math-base-special-pow/dist');function T(e,r,a,w,q,o,i,u,s){var v,x,l,d,f,n,t,m,c;if(e<=0||r<=0)return o;if(v=F(e,r),C([i,u]))for(l=s,n=0;n<v;n++){for(c=n,t=r-1;t>=0;t--)m=c%e,c=(c-m)/e,d=q+m*w,x=l+t*u,o[x]=a[d];l+=i}else for(f=v,t=0;t<r;t++)for(f/=e,l=s+t*u,n=0;n<v;n++)m=(n-n%f)/f%e,d=q+m*w,o[l]=a[d],l+=i;return o}y.exports=T
});var b=g(function($,P){
var z=require('@stdlib/blas-base-layout-resolve-str/dist'),A=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/math-base-special-pow/dist'),E=require('@stdlib/math-base-special-fast-max/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),G=j();function H(e,r,a,w,q,o,i){var u,s,v;if(v=z(e),v===null)throw new TypeError(p('2erFx',e));if(A(v)){if(i<E(1,R(r,a)))throw new RangeError(p('2erGR',R(r,a),i));u=1,s=i}else{if(i<E(1,a))throw new RangeError(p('2erGR',a,i));u=i,s=1}return G(r,a,w,q,B(r,q),o,u,s,0)}P.exports=H
});var S=g(function(X,M){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=b(),J=j();I(V,"ndarray",J);M.exports=V
});var K=require("path").join,Q=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),W=S(),h,_=Q(K(__dirname,"./native.js"));U(_)?h=W:h=_;module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
