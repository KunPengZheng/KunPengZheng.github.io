import{bt as se,bu as J,bv as Ce,bw as Ie,r as C,bx as ke,am as K,X as U,by as j,aC as B,Q as Re,aO as G,d as m,ao as z,aN as xe,b6 as Z,an as H,bz as Be,bA as $e,b8 as _e,D as x,bB as Ae,bC as Pe,S as P,aE as ze,bD as Ne,bE as Le,bb as Ee,bF as He,ap as ne,bd as Y,a$ as Oe,b2 as Me,bG as ae,bH as De,bI as le,bJ as We,aM as Fe,b7 as Ze,b9 as Ve,bK as Ke,bL as Ue,ba as Xe,ab as je,aj as qe,J as Je,bM as Ye,F as Ge,y as Qe,aP as ie,bN as pe,aq as ce}from"./index-cb08a39b.js";import{u as de}from"./use-id-72e2b163.js";import{a as et,r as tt}from"./use-route-d6526a14.js";import{T as nt}from"./use-tab-status-e726a792.js";import{S as at,a as lt}from"./index-b00255b5.js";import{u as it,S as ot}from"./index-afa59efb.js";function rt(e,l,i){let c,s=0;const n=e.scrollLeft,o=i===0?1:Math.round(i*1e3/16);let u=n;function d(){se(c)}function h(){u+=(l-n)/o,e.scrollLeft=u,++s<o&&(c=J(h))}return h(),d}function st(e,l,i,c){let s,n=Ce(e);const o=n<l,u=i===0?1:Math.round(i*1e3/16),d=(l-n)/u;function h(){se(s)}function w(){n+=d,(o&&n>l||!o&&n<l)&&(n=l),Ie(e,n),o&&n<l||!o&&n>l?s=J(w):c&&(s=J(c))}return w(),h}function ct(){const e=C([]),l=[];return ke(()=>{e.value=[]}),[e,c=>(l[c]||(l[c]=s=>{e.value[c]=s}),l[c])]}const[dt,oe]=K("tabs");var ut=U({name:dt,props:{count:j(Number),inited:Boolean,animated:Boolean,duration:j(z),swipeable:Boolean,lazyRender:Boolean,currentIndex:j(Number)},emits:["change"],setup(e,{emit:l,slots:i}){const c=C(),s=u=>l("change",u),n=()=>{var u;const d=(u=i.default)==null?void 0:u.call(i);return e.animated||e.swipeable?m(at,{ref:c,loop:!1,class:oe("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:s},{default:()=>[d]}):d},o=u=>{const d=c.value;d&&d.state.active!==u&&d.swipeTo(u,{immediate:!e.inited})};return B(()=>e.currentIndex,o),Re(()=>{o(e.currentIndex)}),G({swipeRef:c}),()=>m("div",{class:oe("content",{animated:e.animated||e.swipeable})},[n()])}});const[ue,V]=K("tabs"),ft={type:xe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:Z(0),duration:Z(.3),animated:Boolean,ellipsis:H,swipeable:Boolean,scrollspy:Boolean,offsetTop:Z(0),background:String,lazyRender:H,showHeader:H,lineWidth:z,lineHeight:z,beforeChange:Function,swipeThreshold:Z(5),titleActiveColor:String,titleInactiveColor:String},fe=Symbol(ue);var vt=U({name:ue,props:ft,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:l,slots:i}){let c,s,n,o,u;const d=C(),h=C(),w=C(),$=C(),_=de(),I=Be(d),[b,T]=ct(),{children:v,linkChildren:X}=$e(fe),f=_e({inited:!1,position:"",lineStyle:{},currentIndex:-1}),N=x(()=>v.length>+e.swipeThreshold||!e.ellipsis||e.shrink),O=x(()=>({borderColor:e.color,background:e.background})),L=(t,a)=>{var r;return(r=t.name)!=null?r:a},M=x(()=>{const t=v[f.currentIndex];if(t)return L(t,f.currentIndex)}),A=x(()=>Ae(e.offsetTop)),Q=x(()=>e.sticky?A.value+c:0),E=t=>{const a=h.value,r=b.value;if(!N.value||!a||!r||!r[f.currentIndex])return;const y=r[f.currentIndex].$el,g=y.offsetLeft-(a.offsetWidth-y.offsetWidth)/2;o&&o(),o=rt(a,g,t?0:+e.duration)},k=()=>{const t=f.inited;P(()=>{const a=b.value;if(!a||!a[f.currentIndex]||e.type!=="line"||He(d.value))return;const r=a[f.currentIndex].$el,{lineWidth:y,lineHeight:g}=e,S=r.offsetLeft+r.offsetWidth/2,R={width:ne(y),backgroundColor:e.color,transform:`translateX(${S}px) translateX(-50%)`};if(t&&(R.transitionDuration=`${e.duration}s`),Y(g)){const F=ne(g);R.height=F,R.borderRadius=F}f.lineStyle=R})},ve=t=>{const a=t<f.currentIndex?-1:1;for(;t>=0&&t<v.length;){if(!v[t].disabled)return t;t+=a}},D=(t,a)=>{const r=ve(t);if(!Y(r))return;const y=v[r],g=L(y,r),S=f.currentIndex!==null;f.currentIndex!==r&&(f.currentIndex=r,a||E(),k()),g!==e.active&&(l("update:active",g),S&&l("change",g,y.title)),n&&!e.scrollspy&&Me(Math.ceil(ae(d.value)-A.value))},W=(t,a)=>{const r=v.find((g,S)=>L(g,S)===t),y=r?v.indexOf(r):0;D(y,a)},p=(t=!1)=>{if(e.scrollspy){const a=v[f.currentIndex].$el;if(a&&I.value){const r=ae(a,I.value)-Q.value;s=!0,u&&u(),u=st(I.value,r,t?0:+e.duration,()=>{s=!1})}}},be=(t,a,r)=>{const{title:y,disabled:g}=v[a],S=L(v[a],a);g||(De(e.beforeChange,{args:[S],done:()=>{D(a),p()}}),et(t)),l("clickTab",{name:S,title:y,event:r,disabled:g})},he=t=>{n=t.isFixed,l("scroll",t)},me=t=>{P(()=>{W(t),p(!0)})},ge=()=>{for(let t=0;t<v.length;t++){const{top:a}=le(v[t].$el);if(a>Q.value)return t===0?0:t-1}return v.length-1},ye=()=>{if(e.scrollspy&&!s){const t=ge();D(t)}},we=()=>{if(e.type==="line"&&v.length)return m("div",{class:V("line"),style:f.lineStyle},null)},ee=()=>{var t,a,r;const{type:y,border:g,sticky:S}=e,R=[m("div",{ref:S?void 0:w,class:[V("wrap"),{[Oe]:y==="line"&&g}]},[m("div",{ref:h,role:"tablist",class:V("nav",[y,{shrink:e.shrink,complete:N.value}]),style:O.value,"aria-orientation":"horizontal"},[(t=i["nav-left"])==null?void 0:t.call(i),v.map(F=>F.renderTitle(be)),we(),(a=i["nav-right"])==null?void 0:a.call(i)])]),(r=i["nav-bottom"])==null?void 0:r.call(i)];return S?m("div",{ref:w},[R]):R},te=()=>{k(),P(()=>{var t,a;E(!0),(a=(t=$.value)==null?void 0:t.swipeRef.value)==null||a.resize()})};B(()=>[e.color,e.duration,e.lineWidth,e.lineHeight],k),B(Pe,te),B(()=>e.active,t=>{t!==M.value&&W(t)}),B(()=>v.length,()=>{f.inited&&(W(e.active),k(),P(()=>{E(!0)}))});const Te=()=>{W(e.active,!0),P(()=>{f.inited=!0,w.value&&(c=le(w.value).height),E(!0)})},Se=(t,a)=>l("rendered",t,a);return G({resize:te,scrollTo:me}),ze(k),Ne(k),Le(Te),it(d,k),Ee("scroll",ye,{target:I,passive:!0}),X({id:_,props:e,setLine:k,scrollable:N,onRendered:Se,currentName:M,setTitleRefs:T,scrollIntoView:E}),()=>m("div",{ref:d,class:V([e.type])},[e.showHeader?e.sticky?m(ot,{container:d.value,offsetTop:A.value,onScroll:he},{default:()=>[ee()]}):ee():null,m(ut,{ref:$,count:v.length,inited:f.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:f.currentIndex,onChange:D},{default:()=>{var t;return[(t=i.default)==null?void 0:t.call(i)]}})])}});const[bt,re]=K("tab"),ht=U({name:bt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:z,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:H},setup(e,{slots:l}){const i=x(()=>{const s={},{type:n,color:o,disabled:u,isActive:d,activeColor:h,inactiveColor:w}=e;o&&n==="card"&&(s.borderColor=o,u||(d?s.backgroundColor=o:s.color=o));const _=d?h:w;return _&&(s.color=_),s}),c=()=>{const s=m("span",{class:re("text",{ellipsis:!e.scrollable})},[l.title?l.title():e.title]);return e.dot||Y(e.badge)&&e.badge!==""?m(We,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},{default:()=>[s]}):s};return()=>m("div",{id:e.id,role:"tab",class:[re([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls,"data-allow-mismatch":"attribute"},[c()])}}),[mt,q]=K("tab"),gt=Fe({},tt,{dot:Boolean,name:z,badge:z,title:String,disabled:Boolean,titleClass:Ze,titleStyle:[String,Object],showZeroBadge:H});var yt=U({name:mt,props:gt,setup(e,{slots:l}){const i=de(),c=C(!1),s=pe(),{parent:n,index:o}=Ve(fe);if(!n)return;const u=()=>{var b;return(b=e.name)!=null?b:o.value},d=()=>{c.value=!0,n.props.lazyRender&&P(()=>{n.onRendered(u(),e.title)})},h=x(()=>{const b=u()===n.currentName.value;return b&&!c.value&&d(),b}),w=C(""),$=C("");Ke(()=>{const{titleClass:b,titleStyle:T}=e;w.value=b?Je(b):"",$.value=T&&typeof T!="string"?Ye(Ge(T)):T});const _=b=>m(ht,Qe({key:i,id:`${n.id}-${o.value}`,ref:n.setTitleRefs(o.value),style:$.value,class:w.value,isActive:h.value,controls:i,scrollable:n.scrollable.value,activeColor:n.props.titleActiveColor,inactiveColor:n.props.titleInactiveColor,onClick:T=>b(s.proxy,o.value,T)},ie(n.props,["type","color","shrink"]),ie(e,["dot","badge","title","disabled","showZeroBadge"])),{title:l.title}),I=C(!h.value);return B(h,b=>{b?I.value=!1:Ue(()=>{I.value=!0})}),B(()=>e.title,()=>{n.setLine(),n.scrollIntoView()}),Xe(nt,h),G({id:i,renderTitle:_}),()=>{var b;const T=`${n.id}-${o.value}`,{animated:v,swipeable:X,scrollspy:f,lazyRender:N}=n.props;if(!l.default&&!v)return;const O=f||h.value;if(v||X)return m(lt,{id:i,role:"tabpanel",class:q("panel-wrapper",{inactive:I.value}),tabindex:h.value?0:-1,"aria-hidden":!h.value,"aria-labelledby":T,"data-allow-mismatch":"attribute"},{default:()=>{var A;return[m("div",{class:q("panel")},[(A=l.default)==null?void 0:A.call(l)])]}});const M=c.value||f||!N?(b=l.default)==null?void 0:b.call(l):null;return je(m("div",{id:i,role:"tabpanel",class:q("panel"),tabindex:O?0:-1,"aria-labelledby":T,"data-allow-mismatch":"attribute"},[M]),[[qe,O]])}}});const Rt=ce(yt),xt=ce(vt);export{Rt as T,xt as a};