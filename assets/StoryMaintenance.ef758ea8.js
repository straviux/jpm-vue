import{u as p,r as a,o as n,c as l,b as e,t as h,e as s,d as o,w as i,m as b,h as v,n as x,l as _}from"./index.bc589cc5.js";const S={class:"navbar-start"},w={class:"text-sm breadcrumbs"},y=e("li",null,[e("a",null,"STORIES MAINTENANCE")],-1),f={class:"uppercase"},g={class:"navbar-center hidden lg:flex"},N={tabindex:"0",class:"menu menu-compact menu-horizontal"},k={class:"nav-item hover:bg-white"},C=_("Story List"),B={class:"navbar-end"},E=_(" Write Story"),V={__name:"StoryMenu",setup(d){const t=p();return(u,r)=>{const c=a("router-link"),m=a("mdicon");return n(),l("div",{class:x(["navbar mb-10 p-6 bg-white mx-auto",s(t).name=="WriteStory"||s(t).name=="UpdateStory"?"max-w-7xl":""])},[e("div",S,[e("div",w,[e("ul",null,[y,e("li",null,[e("a",f,h(s(t).meta.title),1)])])])]),e("div",g,[e("ul",N,[e("li",k,[o(c,{to:{name:"StoryList"},class:"border-x-0 hover:bg-white focus:bg-white border-t-0 uppercase","active-class":"border-b-2 border-slate-400"},{default:i(()=>[C]),_:1})])])]),e("div",B,[s(t).name=="StoryList"?(n(),b(c,{key:0,to:{name:"WriteStory"},class:"btn btn-sm gap-2 btn-outline"},{default:i(()=>[o(m,{name:"newspaper-plus"}),E]),_:1})):v("",!0)])],2)}}},M={__name:"StoryMaintenance",setup(d){return(t,u)=>{const r=a("router-view");return n(),l("div",null,[o(V,{class:"shadow rounded-lg"}),o(r)])}}};export{M as default};
