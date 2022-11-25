import{_ as k,g as v,s as r,f as C,r as x,o,c as u,b as t,e as a,m,w as i,F as y,a as L,U as V,h,d as n,t as l,l as w,V as D,C as N,W as T,p as $,j}from"./index.456f3501.js";const z=c=>($("data-v-008eb3af"),c=c(),j(),c),A=N('<div class="flex justify-center text-center py-16 bg-no-repeat bg-cover bg-center relative" id="bg-banner" data-v-008eb3af><div class="absolute bg-gradient-to-b from-cyan-200 to-blue-200 opacity-75 inset-0 z-0" data-v-008eb3af></div><div class="w-full z-10" data-v-008eb3af><h5 class="text-4xl text-gray-500 font-bold text-center uppercase drop-shadow-lg" data-v-008eb3af> Stories <div class="border-b-4 w-[6rem] mx-auto mt-4 border-gray-500 drop-shadow-lg" data-v-008eb3af></div></h5></div></div>',1),B={class:"mx-auto max-w-7xl py-4 sm:px-6 lg:px-8"},I={class:"flex flex-wrap gap-6 mb-12"},P={class:"card card-compact w-96 bg-base-50 shadow my-4 mx-2 hover:ring hover:ring-gray-400 hover:bg-white transition-all ease-in duration-300 text-left"},F=["src"],M={class:"card-body"},E={class:"card-title text-normal line-clamp-2"},U={class:"flex text-gray-500 font-semibold text-[12px] items-center"},W={class:"line-clamp-3"},q={class:"mx-auto max-w-7xl py-4 sm:px-6 lg:px-8"},G={class:"px-4 py-3 w-full text-right"},H=z(()=>t("h6",{class:"text-2xl text-gray-600 mb-4 text-left"},"Latest",-1)),J=["src"],K={class:"card-body"},O={class:"text-normal card-title -mt-5"},Q={class:"flex text-gray-500 font-semibold"},R={class:"text-gray-700 hidden md:block"},X={__name:"StoryList",setup(c){const d=v(()=>r.state.articles.featured),_=v(()=>r.state.articles.list),s=C(5);r.dispatch("articles/getPublicList",{article_type_id:2,featured:1}),r.dispatch("articles/getPublicList",{article_type_id:2,featured:0,pageCount:s.value});const S=()=>{s.value+=s.value,console.log(s),r.dispatch("articles/getPublicList",{article_type_id:2,featured:0,pageCount:s.value})};return(p,g)=>{const b=x("mdicon"),f=x("router-link");return o(),u(y,null,[A,t("main",null,[t("div",B,[t("div",I,[a(d).loading?h("",!0):(o(),m(a(V),{autoplay:3e3,wrapAround:!0,itemsToShow:4.5,transition:500,breakpoints:{1490:{itemsToShow:5,snapAlign:"center"},700:{itemsToShow:3,snapAlign:"center"},360:{itemsToShow:1.5,snapAlign:"center"}},key:a(d).data.length},{default:i(()=>[(o(!0),u(y,null,L(a(d).data,(e,Y)=>(o(),m(a(T),{key:e.id},{default:i(()=>[t("div",P,[n(f,{to:{name:"ViewNews",params:{slug:e.slug}}},{default:i(()=>[t("figure",null,[t("img",{src:e.cover_photo_url,class:"object-fill h-48 w-96",alt:"Shoes"},null,8,F)]),t("div",M,[t("h2",E,l(e.headline),1),t("div",U,[n(b,{name:"calendar",size:"12",class:"mr-1"}),w(" "+l(p.$filters.moment(e.created_at,"ll")),1)]),t("p",W,l(e.excerpt),1)])]),_:2},1032,["to"])])]),_:2},1024))),128))]),_:1},8,["itemsToShow","breakpoints"]))])]),t("div",q,[t("section",G,[H,a(_).data.length?(o(),m(D,{key:0,rows:a(_).data},{list:i(e=>[n(f,{to:{name:e.rowData.article_type_id==1?"ViewNews":e.rowData.article_type_id==2?"ViewStory":"NotFound",params:{slug:e.rowData.slug}},class:"card card-compact card-side hover:ring hover:ring-gray-400 shadow-sm rounded-lg px-4 mb-4 pb-4 items-start pt-4 bg-base-100 hover:bg-white transition-all ease-in duration-300 text-left"},{default:i(()=>[t("figure",null,[t("img",{class:"object-fill h-36 w-36",alt:"Cover Photo",src:e.rowData.cover_photo_url},null,8,J)]),t("div",K,[t("h5",O,l(e.rowData.headline),1),t("div",Q,[n(b,{name:"calendar",size:"18",class:"mr-1"}),w(" "+l(p.$filters.moment(e.rowData.created_at,"ll")),1)]),t("p",R,l(p.$filters.truncate(e.rowData.excerpt,250)),1)])]),_:2},1032,["to"])]),_:1},8,["rows"])):h("",!0),s.value<=a(_).data.length?(o(),u("button",{key:1,onClick:g[0]||(g[0]=e=>S()),class:"btn btn-block rounded"}," Load More ")):h("",!0)])])])],64)}}},tt=k(X,[["__scopeId","data-v-008eb3af"]]);export{tt as default};
