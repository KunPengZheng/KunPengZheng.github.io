import{aj as j,ak as I,al as K,a_ as D,V as F,r as L,b0 as U,bQ as re,bs as ve,C as d,aI as q,ay as A,bu as fe,bR as de,bS as he,O as G,aA as ge,bv as we,aB as me,av as be,b3 as ye,d as $,bx as Q,Q as J,bD as k,aK as xe,b8 as R,an as Z,b1 as Se}from"./index-fdc685fa.js";const[ee,z]=j("swipe"),Te={loop:I,width:K,height:K,vertical:Boolean,autoplay:D(0),duration:D(500),touchable:I,lazyRender:Boolean,initialSwipe:D(0),indicatorColor:String,showIndicators:I,stopPropagation:I},te=Symbol(ee);var pe=F({name:ee,props:Te,emits:["change","dragStart","dragEnd"],setup(a,{emit:y,slots:g}){const u=L(),h=L(),t=U({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let x=!1;const r=re(),{children:w,linkChildren:o}=ve(te),i=d(()=>w.length),s=d(()=>t[a.vertical?"height":"width"]),v=d(()=>a.vertical?r.deltaY.value:r.deltaX.value),b=d(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-s.value*i.value:0),M=d(()=>s.value?Math.ceil(Math.abs(b.value)/s.value):i.value),O=d(()=>i.value*s.value),S=d(()=>(t.active+i.value)%i.value),B=d(()=>{const e=a.vertical?"vertical":"horizontal";return r.direction.value===e}),ae=d(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${+t.offset.toFixed(2)}px)`};if(s.value){const l=a.vertical?"height":"width",n=a.vertical?"width":"height";e[l]=`${O.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:l}=t;return e?a.loop?R(l+e,-1,i.value):R(l+e,0,M.value):l},Y=(e,l=0)=>{let n=e*s.value;a.loop||(n=Math.min(n,-b.value));let f=l-n;return a.loop||(f=R(f,b.value,0)),f},m=({pace:e=0,offset:l=0,emitChange:n})=>{if(i.value<=1)return;const{active:f}=t,c=ie(e),P=Y(c,l);if(a.loop){if(w[0]&&P!==b.value){const _=P<b.value;w[0].setOffset(_?O.value:0)}if(w[i.value-1]&&P!==0){const _=P>0;w[i.value-1].setOffset(_?-O.value:0)}}t.active=c,t.offset=P,n&&c!==f&&y("change",S.value)},E=()=>{t.swiping=!0,t.active<=-1?m({pace:i.value}):t.active>=i.value&&m({pace:-i.value})},ne=()=>{E(),r.reset(),k(()=>{t.swiping=!1,m({pace:-1,emitChange:!0})})},X=()=>{E(),r.reset(),k(()=>{t.swiping=!1,m({pace:1,emitChange:!0})})};let H;const p=()=>clearTimeout(H),C=()=>{p(),+a.autoplay>0&&i.value>1&&(H=setTimeout(()=>{X(),C()},+a.autoplay))},T=(e=+a.initialSwipe)=>{if(!u.value)return;const l=()=>{var n,f;if(!Q(u)){const c={width:u.value.offsetWidth,height:u.value.offsetHeight};t.rect=c,t.width=+((n=a.width)!=null?n:c.width),t.height=+((f=a.height)!=null?f:c.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),w.forEach(c=>{c.setOffset(0)}),C()};Q(u)?J().then(l):l()},N=()=>T(t.active);let V;const le=e=>{!a.touchable||e.touches.length>1||(r.start(e),x=!1,V=Date.now(),p(),E())},se=e=>{a.touchable&&t.swiping&&(r.move(e),B.value&&(!a.loop&&(t.active===0&&v.value>0||t.active===i.value-1&&v.value<0)||(xe(e,a.stopPropagation),m({offset:v.value}),x||(y("dragStart",{index:S.value}),x=!0))))},W=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-V,l=v.value/e;if((Math.abs(l)>.25||Math.abs(v.value)>s.value/2)&&B.value){const f=a.vertical?r.offsetY.value:r.offsetX.value;let c=0;a.loop?c=f>0?v.value>0?-1:1:0:c=-Math[v.value>0?"ceil":"floor"](v.value/s.value),m({pace:c,emitChange:!0})}else v.value&&m({pace:0});x=!1,t.swiping=!1,y("dragEnd",{index:S.value}),C()},oe=(e,l={})=>{E(),r.reset(),k(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,l.immediate?k(()=>{t.swiping=!1}):t.swiping=!1,m({pace:n-t.active,emitChange:!0})})},ce=(e,l)=>{const n=l===S.value,f=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:f,class:z("indicator",{active:n})},null)},ue=()=>{if(g.indicator)return g.indicator({active:S.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:z("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return q({prev:ne,next:X,state:t,resize:N,swipeTo:oe}),o({size:s,props:a,count:i,activeIndicator:S}),A(()=>a.initialSwipe,e=>T(+e)),A(i,()=>T(t.active)),A(()=>a.autoplay,C),A([fe,de,()=>a.width,()=>a.height],N),A(he(),e=>{e==="visible"?C():p()}),G(T),ge(()=>T(t.active)),we(()=>T(t.active)),me(p),be(p),ye("touchmove",se,{target:h}),()=>{var e;return $("div",{ref:u,class:z()},[$("div",{ref:h,style:ae.value,class:z("track",{vertical:a.vertical}),onTouchstartPassive:le,onTouchend:W,onTouchcancel:W},[(e=g.default)==null?void 0:e.call(g)]),ue()])}}});const Ee=Z(pe),[Ce,Pe]=j("swipe-item");var Ae=F({name:Ce,setup(a,{slots:y}){let g;const u=U({offset:0,inited:!1,mounted:!1}),{parent:h,index:t}=Se(te);if(!h)return;const x=d(()=>{const o={},{vertical:i}=h.props;return h.size.value&&(o[i?"height":"width"]=`${h.size.value}px`),u.offset&&(o.transform=`translate${i?"Y":"X"}(${u.offset}px)`),o}),r=d(()=>{const{loop:o,lazyRender:i}=h.props;if(!i||g)return!0;if(!u.mounted)return!1;const s=h.activeIndicator.value,v=h.count.value-1,b=s===0&&o?v:s-1,M=s===v&&o?0:s+1;return g=t.value===s||t.value===b||t.value===M,g}),w=o=>{u.offset=o};return G(()=>{J(()=>{u.mounted=!0})}),q({setOffset:w}),()=>{var o;return $("div",{class:Pe(),style:x.value},[r.value?(o=y.default)==null?void 0:o.call(y):null])}}});const Ie=Z(Ae);export{Ee as S,Ie as a};