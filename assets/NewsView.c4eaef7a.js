import{_ as g,u as w,i as v,g as u,s as n,r as p,o as l,c as i,b as e,d as r,w as b,t as c,e as s,l as _,F as y,p as N,j as k}from"./index.3e693267.js";const V=a=>(N("data-v-2e11335f"),a=a(),k(),a),L={class:"bg-white shadow"},S={class:"mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8"},j={class:"text-sm breadcrumbs"},I={class:"uppercase"},z=_("News"),B={class:"uppercase"},C={href:"#"},F={class:"flex flex-col mx-auto gap-6 relative"},T={class:"flex my-6 lg:space-x-10 z-20 max-w-7xl mx-auto"},H={key:0},M={key:1,class:"space-y-8 lg:w-[70%] bg-white p-10 rounded mx-auto"},P={class:"justify-between border-b pb-4"},R={class:"text-3xl text-gray-600 font-bold"},$={class:"italic font-semibold text-lg text-gray-500 my-2"},D={class:"text-[12px] flex items-center gap-1"},E={class:"text-[12px] flex items-center gap-1"},q={class:"flex items-center justify-center bg-slate-500 rounded"},A=["src"],G=V(()=>e("br",null,null,-1)),J=["innerHTML"],K={__name:"NewsView",setup(a){const h=w(),m=v(),t=u(()=>n.state.articles.current.data),x=u(()=>n.state.articles.current.loading);return n.dispatch("articles/getSlug",h.params.slug).then(({data:o})=>{}).catch(o=>{console.log(o),m.push({name:"NotFound"})}),(o,O)=>{const f=p("router-link"),d=p("mdicon");return l(),i(y,null,[e("header",L,[e("div",S,[e("div",j,[e("ul",null,[e("li",I,[r(f,{to:{name:"PublicNews"}},{default:b(()=>[z]),_:1})]),e("li",B,[e("a",C,c(o.$filters.truncate(s(t).headline,80)),1)])])])])]),e("div",F,[e("div",T,[s(x)?(l(),i("div",H)):(l(),i("div",M,[e("div",P,[e("h2",R,c(s(t).headline),1),e("div",$,[e("p",D,[r(d,{name:"calendar",size:"16"}),_(c(o.$filters.moment(s(t).posted_at,"LL")),1)]),e("p",E,[r(d,{name:"eye",size:"16"}),_(c(s(t).views.view_count),1)])])]),e("figure",q,[e("img",{alt:"Cover Photo",src:s(t).cover_photo_url,class:"rounded object-fill w-full h-full"},null,8,A)]),G,e("span",{innerHTML:s(t).content,class:"prose text-xl"},null,8,J)]))])])],64)}}},U=g(K,[["__scopeId","data-v-2e11335f"]]);export{U as default};
