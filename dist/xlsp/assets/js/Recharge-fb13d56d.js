import{_ as N,r as m,x as L,Q as M,O as y,aI as P,o as a,c as o,d as f,ax as z,ay as I,B as l,h as V,H as d,b as e,E as c,w as $,M as g,N as h,R as v,a8 as x,ae as A,J as b,z as E,a0 as k,ag as q,aJ as D,C as J,aK as S,aL as U}from"./index-cb08a39b.js";import{N as j}from"./index-6c09771e.js";import{_ as F}from"./NavBar-c87ddc7d.js";import{i as H,a as K}from"./icon_video_pay_ali-e9101293.js";import{B as O}from"./index-e541b66e.js";import"./index-afa59efb.js";import"./use-placeholder-6cd319b7.js";import"./use-route-d6526a14.js";const Q={class:"page"},G={class:"balance"},W={class:"balance_left"},X={class:"balance_left_num"},Y={class:"payment_method"},Z={class:"payment_method_select"},ee=["onClick"],se={class:"num"},te={class:"diamond"},ae={class:"money"},oe={key:0,class:"right_top"},ne={key:1,class:"bottom"},re={class:"method_btn"},le={key:0,class:"pay_app"},ce=["onClick"],ie=["src"],_e={__name:"Recharge",setup(de){const _=m(-1),n=L({}),p=m("");M(()=>{T()});const C=i=>{if(_.value<0){k({message:"请选择充值内容",position:"middle"});return}q({message:"加载中...",duration:0,overlay:!0});const t=n.value.productList[_.value];y.tradePay(i,t.productId).then(r=>{r&&(r instanceof D?k({message:`${r.errorMessage}${r.errorCode}`,position:"middle"}):(J(r.jumpUrl),S(),U()))})};function T(){y.getProduct().then(i=>{i&&(n.value=i,p.value=P(n.value.payUserList))})}return(i,t)=>{const r=F,w=j,B=O;return a(),o("div",Q,[f(r,z(I({title:"充值"})),null,16),l(v)(p.value)>0?(a(),V(w,{key:0,class:"notice_bar",text:p.value},null,8,["text"])):d("",!0),e("div",G,[e("div",W,[t[0]||(t[0]=e("span",{class:"balance_left_text"},"钻石余额",-1)),e("span",X,c(n.value.userDiamond),1)]),f(B,{type:"default",round:"",class:"balance_right_btn",onClick:l(A)},{default:$(()=>t[1]||(t[1]=[x("账单明细")])),_:1},8,["onClick"])]),e("div",Y,[t[3]||(t[3]=e("div",{class:"payment_method_text"},"请选择支付方式",-1)),e("div",Z,[(a(!0),o(g,null,h(n.value.productList,(s,u)=>(a(),o("div",{class:b(["select_options",{background:_.value===u}]),onClick:E(R=>_.value=u,["stop"]),key:s.productId},[e("div",se,[e("div",te,[x(c(s.amount)+" ",1),t[2]||(t[2]=e("span",null,"钻石",-1))]),e("div",ae,"售价 "+c(s.price)+"元",1)]),l(v)(s.tag)>0?(a(),o("div",oe,c(s.tag),1)):d("",!0),s.firstAmount>0?(a(),o("div",ne," 首充送"+c(s.firstAmount)+"钻石 ",1)):d("",!0)],10,ee))),128))])]),e("div",re,[t[4]||(t[4]=e("div",{class:"method_btn_text"},"请选择支付方式",-1)),l(v)(n.value.payCfg)>0?(a(),o("div",le,[(a(!0),o(g,null,h(n.value.payCfg,(s,u)=>(a(),o("div",{key:s.payType,class:b({"zfb wx_box":s.payType===2,"wx wx_box":s.payType===1}),onClick:R=>C(s.payType)},[e("img",{src:s.payTyp===1?l(H):l(K),alt:""},null,8,ie),e("span",null,c(s.payTyp===1?"微信":"支付宝"),1)],10,ce))),128))])):d("",!0)])])}}},xe=N(_e,[["__scopeId","data-v-ae7e9d03"]]);export{xe as default};