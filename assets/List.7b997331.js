import{f as B,r as $,o as r,c as i,b as e,F as h,a as v,m as z,h as U,M as H,t as f,n as k,K as T,R as N,i as R,u as A,g as P,s as b,d as g,N as y,P as E,O as S,L as q,e as w,w as L,l as V,S as G,C as K}from"./index.31ea2d9f.js";const O={class:"overflow-x-auto w-full"},I={class:"table w-full shadow rounded-lg"},J=e("th",{class:"w-1 text-gray-600 align-top"},"#",-1),Q=["onClick"],W=["innerHTML"],X=e("th",null,null,-1),Y={key:0},Z=["colspan"],ee={class:"text-[11px] text-slate-400"},te={key:3},se={__name:"CustomTable",props:{headers:Array,rows:Array},emits:["deleteData","updateData"],setup(x,{emit:M}){const p=x,u=B({headers:p.headers.map(({key:t,sortDirection:c,label:l})=>({key:t,sortDirection:c,label:l}))}),C=({key:t="",direction:c=""})=>{for(let l=0;l<u.value.headers.length;l++)if(u.value.headers[l].key==t){u.value.headers[l].sortDirection=c=="ascending"?"descending":"ascending";break}t==="headline"&&(c==="descending"?p.rows.sort((l,a)=>{let o=l.headline.toLowerCase(),s=a.headline.toLowerCase();return o<s?-1:o>s?1:0}):c==="ascending"&&p.rows.reverse((l,a)=>{let o=l.headline.toLowerCase(),s=a.headline.toLowerCase();return o<s?-1:o>s?1:0})),t==="posted_at"&&(c==="descending"&&p.rows.sort((l,a)=>{let o=new Date(l.posted_at),s=new Date(a.posted_at);return console.log(o),o-s}),c==="ascending"&&p.rows.reverse((l,a)=>{let o=new Date(l.posted_at),s=new Date(a.posted_at);return o-s}))},D=t=>{if(N(t,!0).isValid())return N(t).format("LL")};return(t,c)=>{const l=$("mdicon");return r(),i("div",O,[e("table",I,[e("thead",null,[e("tr",null,[J,(r(!0),i(h,null,v(u.value.headers,(a,o)=>(r(),i("th",{key:o+a.key},[e("div",{class:"flex items-center gap-2 cursor-pointer hover:drop-shadow",onClick:s=>a.label!=="status"&&a.label!=="featured"?C({key:a.key,direction:a.sortDirection}):""},[e("p",{innerHTML:a.label,class:"text-gray-500 text-[16px] font-semibold"},null,8,W),a.label!=="status"&&a.label!=="featured"?(r(),z(l,{key:0,name:a.sortDirection=="ascending"?"sort-ascending":"sort-descending",class:"text-gray-600",size:"18"},null,8,["name"])):U("",!0)],8,Q)]))),128)),X])]),e("tbody",null,[x.rows.length?(r(!0),i(h,{key:1},v(x.rows,(a,o)=>(r(),i("tr",{key:o,class:"animate-fade-in-down animation",style:H({animationDelay:`${o*.075}s`})},[e("td",ee,f(o+1),1),(r(!0),i(h,null,v(x.headers,s=>(r(),i("td",{key:o+s.key,class:k(s.rowClass||"")},[s.key==="status"?(r(),i("span",{key:0,class:k([a[s.key]?"text-emerald-500":"text-red-500","font-semibold text-xs"])},f(a[s.key]?"active":"inactive"),3)):s.key==="featured"?(r(),i("span",{key:1,class:k([a[s.key]?"text-purple-500":"text-red-500","font-semibold text-xs"])},f(a[s.key]?"yes":"no"),3)):(r(),i("span",te,f(D(a[s.key])||a[s.key]),1))],2))),128)),e("td",null,[T(t.$slots,"actionButtons",{rowData:a})])],4))),128)):(r(),i("tr",Y,[e("td",{colspan:u.value.headers.length+2,class:"text-center"}," No results found ",8,Z)]))])]),T(t.$slots,"pagination")])}}},ae={class:"flex my-6 space-x-4 items-center justify-start border p-2 rounded-lg bg-white"},oe={method:"GET",class:"flex gap-3"},le={class:"relative text-gray-600 focus-within:text-gray-400"},ne={class:"absolute inset-y-0 left-0 flex items-center pl-2"},re={class:"p-1 focus:outline-none focus:shadow-outline"},ie={class:"flex gap-3 items-center ml-4"},ce={class:"form-control"},de={class:"label cursor-pointer space-x-1"},ue={class:"label-text text-[15px]"},pe=["value","checked"],_e={class:"flex gap-3 border-l"},he={class:"form-control ml-2 pl-2"},xe={class:"label cursor-pointer space-x-1"},me=e("span",{class:"label-text text-[15px]"},"show featured",-1),ge=e("option",{value:"all"},"all",-1),fe=e("option",{value:"yes"},"yes",-1),ve=e("option",{value:"no"},"no",-1),be=[ge,fe,ve],ye={class:"flex gap-3 border-l"},we={class:"form-control ml-2 pl-2 border-gray-300"},ke={class:"label cursor-pointer space-x-1"},Ce=e("span",{class:"label-text text-[15px]"},"Show",-1),De=K('<option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="50">50</option><option value="100">100</option>',5),Le=[De],$e=e("span",{class:"label-text text-[15px]"},"entries",-1),Ve={class:"flex gap-3"},Me={class:"form-control ml-2 pl-2 border-gray-300 align-items-center justify-center"},Te=["onClick"],Ne=V(" Filter "),Se=["onClick"],Be=V(" edit "),ze=V(" view public "),Ue={class:"flex justify-center mt-5 pb-5"},je={class:"relative z-0 inline-flex items-center justify-center rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},Fe=["disabled","onClick","innerHTML"],Re={__name:"List",setup(x){const M=R(),p=A(),u=p.params.type=="news"?1:p.params.type=="stories"?2:0,C=["all","active","inactive"],D=[{key:"headline",label:"headline",sortDirection:"ascending",rowClass:"text-[16px] text-slate-600 max-w-[350px] truncate hover:overflow-visible hover:whitespace-normal cursor-pointer ",headerClass:"text-[20px]"},{key:"posted_at",label:"date publish",sortDirection:"ascending",rowClass:"text-[14px] text-slate-600"},{key:"status",label:"status",rowClass:"text-[14px] text-slate-600",sortDirection:"ascending"},{key:"featured",label:"featured",sortDirection:"ascending",rowClass:"text-[14px] text-slate-600"}],t=B({pageCount:20,featured:"all",status:"all",search:""}),c=P(()=>b.state.articles.list);b.dispatch("articles/getList",{article_type_id:u,pageCount:20});const l=s=>{console.log(s),M.push({name:"UpdateArticle",params:{id:s.id}})},a=(s,d,m)=>{s.preventDefault(),!(!d.url||d.active)&&b.dispatch("articles/getList",{url:d.url,article_type_id:u,pageCount:t.value.pageCount,featured:t.value.featured,status:t.value.status,search:t.value.search})},o=s=>{console.log(t.value),s.preventDefault(),b.dispatch("articles/getList",{article_type_id:u,pageCount:t.value.pageCount,featured:t.value.featured,status:t.value.status,search:t.value.search})};return(s,d)=>{const m=$("mdicon"),j=$("router-link");return r(),i(h,null,[e("div",ae,[e("form",oe,[e("div",le,[e("span",ne,[e("span",re,[g(m,{name:"magnify"})])]),y(e("input",{type:"search",name:"q","onUpdate:modelValue":d[0]||(d[0]=n=>t.value.search=n),class:"w-[300px] py-2 bg-gray-200 rounded-md pl-10 focus:outline-none focus:bg-white text-[15px]",placeholder:"Search for headline",autocomplete:"off"},null,512),[[E,t.value.search]])]),e("div",ie,[(r(),i(h,null,v(C,n=>e("div",ce,[e("label",de,[e("span",ue,f(n),1),y(e("input",{type:"radio",name:"status",class:"radio radio-sm checked:bg-slate-700","onUpdate:modelValue":d[1]||(d[1]=_=>t.value.status=_),value:n,checked:n=="all"},null,8,pe),[[G,t.value.status]])])])),64))]),e("div",_e,[e("div",he,[e("label",xe,[me,y(e("select",{class:"select select-bordered select-xs","onUpdate:modelValue":d[2]||(d[2]=n=>t.value.featured=n)},be,512),[[S,t.value.featured]])])])]),e("div",ye,[e("div",we,[e("label",ke,[Ce,y(e("select",{class:"select select-bordered select-xs","onUpdate:modelValue":d[3]||(d[3]=n=>t.value.pageCount=n)},Le,512),[[S,t.value.pageCount]]),$e])])]),e("div",Ve,[e("div",Me,[e("button",{class:"btn btn-sm gap-2",onClick:q(o,["prevent"])},[g(m,{name:"filter-multiple-outline"}),Ne],8,Te)])])])]),e("div",null,[w(c).loading?U("",!0):(r(),z(se,{key:0,headers:D,rows:w(c).data},{actionButtons:L(n=>[e("button",{onClick:_=>l(n.rowData),class:"text-orange-500 underline gap-1 btn btn-link btn-xs text-[12px]"},[g(m,{name:"text-box-edit"}),Be],8,Se),g(j,{to:{name:"ViewNews",params:{slug:n.rowData.slug}},class:"text-blue-500 underline gap-1 btn btn-link btn-xs text-[12px]",target:"_blank"},{default:L(()=>[g(m,{name:"eye"}),ze]),_:2},1032,["to"])]),pagination:L(()=>[e("div",Ue,[e("nav",je,[(r(!0),i(h,null,v(w(c).links,(n,_)=>(r(),i("a",{key:_,disabled:!n.url,href:"#",onClick:F=>a(F,n),"aria-current":"page",class:k(["relative inline-flex items-center px-4 py-2 border text-xs font-medium whitespace-nowrap hover:bg-slate-400 hover:border-slate-400 hover:text-slate-50",[n.active?"z-10 bg-slate-400 border-slate-400 text-slate-50":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50",_===0?"rounded-l-md bg-gray-100 hover:bg-gray-100 hover:border-gray-300 hover:text-gray-500":"",_===w(c).links.length-1?"rounded-r-md":""]]),innerHTML:n.label},null,10,Fe))),128))])])]),_:1},8,["rows"]))])],64)}}};export{Re as default};
