import{_ as k,g as b,s as r,f as C,r as v,o as l,c as _,b as t,e as s,m as x,w as i,F as f,a as L,U as V,d as c,t as o,l as y,V as D,h as w,W as N,C as T,p as j,j as z}from"./index.bc589cc5.js";const A=n=>(j("data-v-4167d0eb"),n=n(),z(),n),B=T('<div class="flex justify-center text-center py-16 bg-no-repeat bg-cover bg-center relative" id="bg-banner" data-v-4167d0eb><div class="absolute bg-gradient-to-b from-cyan-200 to-blue-200 opacity-75 inset-0 z-0" data-v-4167d0eb></div><div class="w-full z-10" data-v-4167d0eb><h5 class="text-4xl text-gray-500 font-bold text-center uppercase drop-shadow-lg" data-v-4167d0eb> Stories <div class="border-b-4 w-[6rem] mx-auto mt-4 border-gray-500 drop-shadow-lg" data-v-4167d0eb></div></h5></div></div>',1),I={class:"mx-auto max-w-7xl py-4 sm:px-6 lg:px-8"},P={class:"flex flex-wrap gap-6 mb-12"},$={class:"card card-compact w-96 bg-base-50 shadow my-4 mx-2 hover:ring hover:ring-gray-400 hover:bg-white transition-all ease-in duration-300 text-left"},F=["src"],M={class:"card-body"},E={class:"card-title text-normal line-clamp-2"},U={class:"flex text-gray-500 font-semibold text-[12px] items-center"},W={class:"line-clamp-3"},q={class:"mx-auto max-w-7xl py-4 sm:px-6 lg:px-8"},G={class:"px-4 py-3 w-full text-right"},H=A(()=>t("h6",{class:"text-2xl text-gray-600 mb-4 text-left"},"Latest",-1)),J=["src"],K={class:"card-body"},O={class:"text-normal card-title -mt-5"},Q={class:"flex text-gray-500 font-semibold"},R={class:"text-gray-700 line-clamp-4"},X={__name:"StoryList",setup(n){const d=b(()=>r.state.articles.featured),p=b(()=>r.state.articles.list),a=C(5);r.dispatch("articles/getPublicList",{article_type_id:2,featured:1}),r.dispatch("articles/getPublicList",{article_type_id:2,featured:0,pageCount:a.value});const S=()=>{a.value+=a.value,console.log(a),r.dispatch("articles/getPublicList",{article_type_id:2,featured:0,pageCount:a.value})};return(u,m)=>{const h=v("mdicon"),g=v("router-link");return l(),_(f,null,[B,t("main",null,[t("div",I,[t("div",P,[s(d).data.length?(l(),x(s(D),{autoplay:3e3,wrapAround:!0,itemsToShow:4.5,transition:500,breakpoints:{1490:{itemsToShow:5,snapAlign:"center"},700:{itemsToShow:3,snapAlign:"center"},360:{itemsToShow:1.5,snapAlign:"center"}},key:s(d).data.length},{default:i(()=>[(l(!0),_(f,null,L(s(d).data,(e,Y)=>(l(),x(s(V),{key:e.id},{default:i(()=>[t("div",$,[c(g,{to:{name:"ViewNews",params:{slug:e.slug}}},{default:i(()=>[t("figure",null,[t("img",{src:e.cover_photo_url,class:"object-fill h-48 w-96",alt:"Shoes"},null,8,F)]),t("div",M,[t("h2",E,o(e.headline),1),t("div",U,[c(h,{name:"calendar",size:"12",class:"mr-1"}),y(" "+o(u.$filters.moment(e.created_at,"ll")),1)]),t("p",W,o(e.excerpt),1)])]),_:2},1032,["to"])])]),_:2},1024))),128))]),_:1},8,["itemsToShow","breakpoints"])):w("",!0)])]),t("div",q,[t("section",G,[H,c(N,{rows:s(p).data},{list:i(e=>[c(g,{to:{name:e.rowData.article_type_id==1?"ViewNews":e.rowData.article_type_id==2?"ViewStory":"NotFound",params:{slug:e.rowData.slug}},class:"card card-compact card-side hover:ring hover:ring-gray-400 shadow-sm rounded-lg px-4 mb-4 pb-4 items-start pt-4 bg-base-100 hover:bg-white transition-all ease-in duration-300 text-left"},{default:i(()=>[t("figure",null,[t("img",{class:"object-cover h-36 w-36",alt:"Cover Photo",src:e.rowData.cover_photo_url},null,8,J)]),t("div",K,[t("h5",O,o(e.rowData.headline),1),t("div",Q,[c(h,{name:"calendar",size:"18",class:"mr-1"}),y(" "+o(u.$filters.moment(e.rowData.created_at,"ll")),1)]),t("p",R,o(e.rowData.excerpt),1)])]),_:2},1032,["to"])]),_:1},8,["rows"]),a.value<=s(p).data.length?(l(),_("button",{key:0,onClick:m[0]||(m[0]=e=>S()),class:"btn btn-block rounded"}," Load More ")):w("",!0)])])])],64)}}},tt=k(X,[["__scopeId","data-v-4167d0eb"]]);export{tt as default};
