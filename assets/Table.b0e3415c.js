import{i as _,g as p,s as n,r as u,o as s,c as o,b as e,e as l,F as m,a as g,d as x,h,l as f}from"./index.907de173.js";const b={class:"overflow-hidden text-gray-700"},v={class:"px-5 py-2 mx-auto lg:pt-12 lg:px-32"},y={class:"flex flex-wrap -m-1 md:-m-2 gap-6"},k={class:"flex flex-wrap w-1/4 bg-white rounded-lg"},w={class:"w-full pb-2"},C=["src"],N={class:"flex justify-end p-2"},V=["onClick"],j=f(" update "),I={__name:"Table",setup(B){const d=_(),a=p(()=>n.state.gallery.list);n.dispatch("gallery/getList");const r=t=>{console.log(t),d.push({name:"UpdateImage",params:{id:t.id}})};return(t,F)=>{const i=u("mdicon");return s(),o("section",b,[e("div",v,[e("div",y,[l(a).loading?h("",!0):(s(!0),o(m,{key:0},g(l(a).data,(c,L)=>(s(),o("div",k,[e("div",w,[e("img",{alt:"gallery",class:"block object-cover object-center w-full h-full rounded-t-lg",src:c.image_url},null,8,C)]),e("div",N,[e("button",{onClick:T=>r(c),class:"gap-1 btn btn-sm btn-secondary text-[12px]"},[x(i,{name:"text-box-edit"}),j],8,V)])]))),256))])])])}}};export{I as default};
