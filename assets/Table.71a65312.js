import{i as _,g as u,s as n,r as p,o as s,c as o,b as e,e as l,F as m,a as x,d as h,h as g,l as f}from"./index.3e693267.js";const b={class:"overflow-hidden text-gray-700"},v={class:"px-5 py-2 mx-auto lg:pt-12 lg:px-32"},k={class:"flex flex-wrap -m-1 md:-m-2 gap-6"},w={class:"flex flex-wrap w-1/4 bg-white rounded-lg"},y={class:"w-full pb-2"},C=["src"],N={class:"flex justify-end p-2"},V=["onClick"],j=f(" update "),R={__name:"Table",setup(B){const d=_(),a=u(()=>n.state.carousels.list);n.dispatch("carousels/getList");const r=t=>{console.log(t),d.push({name:"UpdateSlide",params:{id:t.id}})};return(t,F)=>{const i=p("mdicon");return s(),o("section",b,[e("div",v,[e("div",k,[l(a).loading?g("",!0):(s(!0),o(m,{key:0},x(l(a).data,(c,L)=>(s(),o("div",w,[e("div",y,[e("img",{alt:"gallery",class:"block object-cover object-center w-full h-full rounded-t-lg",src:c.slide_url},null,8,C)]),e("div",N,[e("button",{onClick:T=>r(c),class:"gap-1 btn btn-sm btn-secondary text-[12px]"},[h(i,{name:"text-box-edit"}),j],8,V)])]))),256))])])])}}};export{R as default};
