import{am as B,X as $,r as u,bN as D,D as N,ap as f,bd as j,aC as C,bO as _,az as O,Q as R,S as z,d as n,ao as d,an as I,aN as P,ab as U,c5 as q,y as S,bh as F,aq as M}from"./index-2eecf243.js";const[Q,i]=B("image"),T={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:I,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:I,loadingIcon:P("photo"),crossorigin:String,referrerpolicy:String};var V=$({name:Q,props:T,emits:["load","error"],setup(r,{emit:g,slots:c}){const t=u(!1),o=u(!0),a=u(),{$Lazyload:l}=D().proxy,E=N(()=>{const e={width:f(r.width),height:f(r.height)};return j(r.radius)&&(e.overflow="hidden",e.borderRadius=f(r.radius)),e});C(()=>r.src,()=>{t.value=!1,o.value=!0});const v=e=>{o.value&&(o.value=!1,g("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:a.value,enumerable:!0}),v(e)},m=e=>{t.value=!0,o.value=!1,g("error",e)},y=(e,s,L)=>L?L():n(F,{name:e,size:r.iconSize,class:s,classPrefix:r.iconPrefix},null),k=()=>{if(o.value&&r.showLoading)return n("div",{class:i("loading")},[y(r.loadingIcon,i("loading-icon"),c.loading)]);if(t.value&&r.showError)return n("div",{class:i("error")},[y(r.errorIcon,i("error-icon"),c.error)])},x=()=>{if(t.value||!r.src)return;const e={alt:r.alt,class:i("img"),style:{objectFit:r.fit,objectPosition:r.position},crossorigin:r.crossorigin,referrerpolicy:r.referrerpolicy};return r.lazyLoad?U(n("img",S({ref:a},e),null),[[q("lazy"),r.src]]):n("img",S({ref:a,src:r.src,onLoad:v,onError:m},e),null)},b=({el:e})=>{const s=()=>{e===a.value&&o.value&&h()};a.value?s():z(s)},w=({el:e})=>{e===a.value&&!t.value&&m()};return l&&_&&(l.$on("loaded",b),l.$on("error",w),O(()=>{l.$off("loaded",b),l.$off("error",w)})),R(()=>{z(()=>{var e;(e=a.value)!=null&&e.complete&&!r.lazyLoad&&h()})}),()=>{var e;return n("div",{class:i({round:r.round,block:r.block}),style:E.value},[x(),k(),(e=c.default)==null?void 0:e.call(c)])}}});const A=M(V);export{A as I};