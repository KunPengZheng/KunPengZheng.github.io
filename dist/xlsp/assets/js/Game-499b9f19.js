import{_ as J}from"./VVL-553a0b77.js";import{_ as O,r as L,x as r,O as U,o,c as p,d as a,w as i,a9 as u,ag as m,b as c,J as v,M as f,h as b,B as A,ai as H}from"./index-fdc685fa.js";import{L as K}from"./index-b4139e49.js";import{G as P,a as Q}from"./index-54e0da6e.js";import{_ as W}from"./GameItem-29312d78.js";import{S as X}from"./index-bed12e21.js";import{a as Y,T as Z}from"./index-0d105e3c.js";import{a as S}from"./index-9726ae91.js";import{S as ee,a as te}from"./index-a5f7b9b9.js";import"./ic_empty_no_data_note-97eb05c9.js";import"./use-id-c07ea722.js";import"./use-tab-status-c868d5db.js";import"./use-route-773056d5.js";import"./DecryptImage-fa683f8f.js";import"./index-f838ac64.js";const ae={class:"page"},se={class:"tuijian_box"},ne={class:"video_flex"},oe={class:"tuijian_box mb-20"},ie={class:"tuijian"},le={class:"boutique"},re={__name:"Game",setup(ce){const l=L(!0),w=L(null),k=r([]),h=r([]),G=r([]),g=r([]),y=r([]),x=r([]),C=r([]),T=L(0),B=t=>{t.name===0?(l.value=!0,_(y.value)):(l.value=!1,_(k.value[t.name].game_list,!0))},D=t=>{switch(t.name){case 0:_(y.value);break;case 1:_(x.value);break;case 2:_(C.value);break}};U(()=>{R(),V()});function R(){S.gameCate().then(t=>{if(t){const n=t.dataList;n.splice(0,0,{advert_type_name:"推荐"}),k.value=n}})}function V(){S.gameIndex().then(t=>{if(t){const n=t.dataList;for(const s of n)switch(s.advert_type_id){case 10:h.value=s.game_list;break;case 12:G.value=s.game_list;break;case 14:y.value=s.game_list,_(s.game_list);break;case 15:x.value=s.game_list;break;case 16:C.value=s.game_list;break}}})}function _(t,n=!1){g.value=t,n&&w.value.setData(g.value)}return(t,n)=>{const s=Z,I=Y,j=X,d=W,E=te,F=ee,M=Q,N=P,$=K,q=J;return o(),p("div",ae,[a(j,null,{default:i(()=>[a(I,{swipeable:"",onClickTab:B,active:T.value,"onUpdate:active":n[0]||(n[0]=e=>T.value=e)},{default:i(()=>[(o(!0),p(v,null,f(k.value,e=>(o(),b(s,{title:e.advert_type_name,key:e.advert_type_name},null,8,["title"]))),128))]),_:1},8,["active"])]),_:1}),u(c("div",null,[u(a(F,{class:"my-swipe",autoplay:3e3,"indicator-color":"white"},{default:i(()=>[(o(!0),p(v,null,f(h.value,e=>(o(),b(E,{onClick:z=>A(H)(e.game_id),key:e.id},{default:i(()=>[a(d,{options:{bean:e,type:2}},null,8,["options"])]),_:2},1032,["onClick"]))),128))]),_:1},512),[[m,l.value]]),u(c("div",se,[n[1]||(n[1]=c("div",{class:"tuijian"},"重磅推荐",-1)),c("div",ne,[a(N,{border:!1,"column-num":"2",gutter:0},{default:i(()=>[(o(!0),p(v,null,f(G.value,e=>(o(),b(M,{key:e.id},{default:i(()=>[a(d,{options:{bean:e,type:1}},null,8,["options"])]),_:2},1024))),128))]),_:1})])],512),[[m,l.value]]),c("div",oe,[u(c("div",ie,"排行榜",512),[[m,l.value]]),u(a(I,{onClickTab:D,type:"card",color:"#d95656",class:"tabs"},{default:i(()=>[a(s,{title:"标签 1"}),a(s,{title:"标签 2"}),a(s,{title:"标签 3"})]),_:1},512),[[m,l.value]]),c("div",le,[a($,null,{default:i(()=>[(o(!0),p(v,null,f(g.value,e=>(o(),b(d,{options:{bean:e,type:0},key:e.id},null,8,["options"]))),128))]),_:1})])])],512),[[m,l.value]]),u(a(q,{ref_key:"lrGridRef",ref:w,"min-size":230,"external-data-flag":!0,"virt-type":1,"key-prop":"id","disabled-refresh":!1},{default:i(({itemData:e,index:z,rowIndex:_e})=>[a(d,{options:{bean:e,type:0},onClick:ue=>t.gameDetailed(e.game_id)},null,8,["options","onClick"])]),_:1},512),[[m,!l.value]])])}}},Te=O(re,[["__scopeId","data-v-bb5e452b"]]);export{Te as default};