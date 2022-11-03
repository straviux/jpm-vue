import{_ as f,u as y,i as v,g as u,s as n,r as p,o as r,c as l,b as e,d as i,w,t as a,e as t,l as _,F as b,p as S,j as k}from"./index.ecfbfd60.js";const L=o=>(S("data-v-97084a57"),o=o(),k(),o),V={class:"bg-white shadow"},I={class:"mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8"},N={class:"text-sm breadcrumbs"},j={class:"uppercase"},z=_("Story"),B={class:"uppercase"},C={href:"#"},F={class:"flex flex-col mx-auto gap-6 relative"},T={class:"flex my-6 lg:space-x-10 z-20 max-w-7xl mx-auto"},H={key:0},M={key:1,class:"space-y-8 lg:w-[70%] bg-white p-10 rounded mx-auto"},P={class:"flex justify-between border-b pb-4"},R={class:"text-3xl text-gray-600 font-bold w-[80%]"},D={class:"italic font-semibold text-lg text-gray-500"},E={class:"text-[12px] flex items-center gap-1"},$={class:"text-[12px] flex items-center gap-1"},q={class:"flex items-center justify-center bg-slate-500 rounded"},A=["src"],G=L(()=>e("br",null,null,-1)),J=["innerHTML"],K={__name:"StoryView",setup(o){const h=y(),x=v(),s=u(()=>n.state.articles.current.data),m=u(()=>n.state.articles.current.loading);return n.dispatch("articles/getSlug",h.params.slug).then(({data:c})=>{}).catch(c=>{x.push({name:"NotFound"})}),(c,O)=>{const g=p("router-link"),d=p("mdicon");return r(),l(b,null,[e("header",V,[e("div",I,[e("div",N,[e("ul",null,[e("li",j,[i(g,{to:{name:"PublicStoryList"}},{default:w(()=>[z]),_:1})]),e("li",B,[e("a",C,a(t(s).headline),1)])])])])]),e("div",F,[e("div",T,[t(m)?(r(),l("div",H)):(r(),l("div",M,[e("div",P,[e("h2",R,a(t(s).headline),1),e("p",D,[e("p",E,[i(d,{name:"calendar",size:"16"}),_(a(c.$filters.moment(t(s).posted_at,"LL")),1)]),e("p",$,[i(d,{name:"eye",size:"16"}),_(a(t(s).views.view_count),1)])])]),e("figure",q,[e("img",{alt:"Cover Photo",src:t(s).cover_photo_url,class:"rounded"},null,8,A)]),G,e("span",{innerHTML:t(s).content,class:"prose text-xl"},null,8,J)]))])])],64)}}},U=f(K,[["__scopeId","data-v-97084a57"]]);export{U as default};
