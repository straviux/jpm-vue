import{u as k,r as u,o as r,c as d,F as v,a as M,b as e,d as o,w as B,t as p,n as b,e as i,f as x,s as g,g as w,h as y,i as N,_ as I,p as S,j as C,k as E,l as T}from"./index.ca95d000.js";const j="/assets/gitlab-account.c53e9d42.png",z={class:"text-sm justify-center"},L={__name:"NavBarMenu",setup(a){const l=k(),t=[{text:"Dashboard",icon:"view-dashboard-outline",to:{name:"Dashboard"}},{text:"News",icon:"newspaper-variant-outline",to:{name:"NewsMaintenance"}},{text:"Story",icon:"comment-quote-outline",to:{name:"StoryMaintenance"}},{text:"Resolution",icon:"book-open-outline",to:{name:"StoryMaintenance"}},{text:"Events",icon:"star-outline",to:{name:"StoryMaintenance"}}];return(n,s)=>{const c=u("mdicon"),_=u("router-link");return r(),d("ul",null,[(r(),d(v,null,M(t,({text:m,icon:f,to:h},$)=>e("li",{class:"w-[200px]",key:$},[o(_,{to:h,class:b(["p-3 flex justify-start items-center gap-1",[i(l).name==h.name?"":"text-gray-500"]]),"active-class":"font-bold text-gray-600 drop-shadow-md"},{default:B(()=>[o(c,{name:f,class:"text-current"},null,8,["name"]),e("span",z,p(m),1)]),_:2},1032,["to","class"])])),64))])}}},D={class:"relative lg:block lg:space-y-10 p-2 grid grid-cols-12 lg:h-full"},O={class:"lg:hidden col-span-12 flex justify-end items-center bg-white"},R={class:"col-span-12 hidden lg:block"},A=e("div",{class:"relative w-full h-24 flex flex-col items-center gap-4"},[e("img",{src:j,alt:"Profile",class:"w-24 h-24 rounded-full"}),e("p",{class:"absolute bg-white left-1/2 transform -translate-x-1/2 text-xs px-2 -bottom-2 text-orange-500 flex items-center gap-1 rounded-full"})],-1),P={class:"text-center mt-7"},V={class:"font-bold text-black"},F={href:"#",class:"text-gray-500"},K={key:0,class:"col-span-12 p-6"},H={__name:"NavBar",setup(a){const t=x(document.body.offsetWidth),n=x(t.value>1024),s=()=>n.value=!n.value;window.addEventListener("resize",function(){t.value=document.body.offsetWidth,n.value=t.value>1024}),g.dispatch("getUser");const c=w(()=>g.state.user.data);return(_,m)=>{const f=u("mdicon");return r(),d("div",D,[e("div",O,[e("button",{class:"bg-stone-100 p-2 rounded-lg",onClick:s},[o(f,{name:"menu"})])]),e("div",R,[A,e("div",P,[e("h1",V,p(i(c).name),1),e("a",F,p(i(c).email),1)])]),n.value?(r(),d("div",K,[o(L)])):y("",!0)])}}},W={class:"flex flex-col md:flex-row gap-10 justify-between items-center"},q=e("h1",{class:"font-extrabold text-4xl text-blueGray-700 drop-shadow-lg"}," System Title ",-1),G={class:"flex justify-between gap-2 items-center"},U={class:"flex justify-center items-center"},Y=e("span",{class:"font-bold drop-shadow-lg"},"Log out",-1),J={__name:"HelloBar",setup(a){const l=N(),t=()=>{g.dispatch("logout").then(()=>{l.push({name:"Login"})})},n=()=>{const s=new Date,c=s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate(),_=s.getHours()+":"+s.getMinutes()+":"+s.getSeconds();return c+" "+_};return(s,c)=>{const _=u("mdicon");return r(),d("div",W,[e("div",null,[q,e("p",null,p(n()),1)]),e("div",G,[e("div",U,[e("button",{onClick:t,class:"text-sm px-2 text-red-500 underline rounded-full flex gap-1 drop-shadow-lg"},[o(_,{name:"logout-variant",width:"15px"}),Y])])])])}}};const Q=a=>(S("data-v-5b6e50f0"),a=a(),C(),a),X={class:"flex flex-col gap-6 p-7 bg-image relative"},Z=Q(()=>e("div",{class:"absolute bg-gradient-to-b from-blue-300 to-green-300 opacity-75 inset-0 z-0"},null,-1)),ee={__name:"MainContent",setup(a){return(l,t)=>{const n=u("router-view");return r(),d("div",X,[Z,o(J,{class:"z-20"}),o(n,{class:"z-20"})])}}},te=I(ee,[["__scopeId","data-v-5b6e50f0"]]),se={class:"drop-shadow flex items-top gap-2"},oe={__name:"Notification",setup(a){const l=E(),t=w(()=>l.state.notification);return(n,s)=>{const c=u("mdicon");return i(t).show?(r(),d("div",{key:0,onClick:s[0]||(s[0]=_=>i(t).show=!1),class:b(["fixed w-[360px] right-4 top-4 py-4 px-6 text-white animate-fade-in-down text-[20px] rounded shadow-lg z-50",[i(t).type==="success"?"bg-emerald-500":"bg-red-500"]])},[e("p",se,[o(c,{name:i(t).type==="success"?"check-circle-outline":"close-circle-outline",size:"30",class:"mt-1"},null,8,["name"]),T(p(i(t).message),1)])],2)):y("",!0)}}},ne={class:"grid grid-cols-12 h-screen"},ae={class:"col-span-12 bg-stone-50 flex flex-col lg:flex-row md:divide-x-2"},ce={class:"lg:w-[250px] w-full lg:h-full"},ie={__name:"Module",setup(a){return(l,t)=>(r(),d(v,null,[e("div",ne,[e("div",ae,[e("div",ce,[o(H)]),o(te,{class:"flex-1"})])]),o(oe)],64))}};export{ie as default};
