import{u as V,f as x,g as U,s as n,v as L,r as f,o as i,c as d,e as s,m as M,h as N,b as e,x as F,y as j,d as u,w as A,z as c,A as b,B as g,F as y,a as T,t as z,C as v,l as _}from"./index.4e7dc012.js";import{L as D,Q as P}from"./Loader.57deb6b0.js";/* empty css                                                               */const H={class:"mt-5 md:col-span-2 md:mt-0 max-w-7xl mx-auto"},E=["onSubmit"],G={class:"flex"},I={class:"space-y-8 w-2/3 bg-white p-6 rounded-l-lg"},J={class:"flex justify-between"},R=_(" Back"),q={class:"grid grid-cols-3 gap-6"},O={class:"col-span-12"},Q=e("label",{for:"headline",class:"block font-medium text-gray-700"},"Headline",-1),W={class:"mt-4 flex shadow-sm"},K=e("label",{for:"excerpt",class:"block font-medium text-gray-700"},"Excerpt",-1),X={class:"mt-2"},Y=e("p",{class:"mt-2 text-gray-500"}," Brief information about this article. Will be displayed as subheading ",-1),Z=e("label",{for:"content",class:"block font-medium text-gray-700"},"Content",-1),$={class:"mt-2"},ee={class:"w-1/3 bg-slate-50 p-6 space-y-6 rounded-r-lg"},te={class:"flex space-x-4"},se={class:"form-control w-[150px]"},oe=e("label",{class:"label block font-medium text-gray-700"}," Article ",-1),ae=e("option",{value:"1"},"News",-1),le=e("option",{value:"2"},"Story",-1),ne=[ae,le],re={class:"form-control w-[150px]"},ie=e("label",{class:"label block font-medium text-gray-700"}," Category ",-1),ce=["value"],de=e("label",{class:"block font-medium text-gray-700"},"Cover photo",-1),ue={class:"mt-2 flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"},pe={class:"space-y-1 text-center"},_e={key:0,class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},me=e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),he=[me],xe=["src","alt"],fe={class:"flex items-center justify-center text-gray-600"},be={for:"file-upload",class:"relative cursor-pointer rounded bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 px-3"},ge=e("span",null,"Upload Cover Photo",-1),ye=e("p",{class:"text-xs text-gray-500"},"PNG, JPG, GIF up to 10MB",-1),ve={class:"px-4 py-3 sm:px-6 flex items-center justify-center space-x-7"},we={class:"form-control"},ke={class:"label cursor-pointer space-x-2"},Ce=e("span",{class:"label-text text-lg"},"Published",-1),Se={class:"form-control"},Be={class:"label cursor-pointer space-x-2"},Ve=e("span",{class:"label-text text-lg"},"Featured",-1),Ue={class:"px-4 py-3 text-center sm:px-6 space-x-6"},Le={class:"btn border border-purple-500 bg-transparent text-purple-500 hover:bg-purple-500 hover:text-white hover:border-purple-300 gap-1 shadow mt-4 rounded-[4px]"},Me=_(" Preview "),Ne={type:"submit",class:"btn bg-blue-500 text-white gap-1 shadow mt-4 rounded-[4px] btn-success"},Fe=_(" Save "),De={__name:"Form",setup(je){const p=V(),m=x(null),w=U(()=>n.state.articles.category.data);console.log(p),n.dispatch("articles/getCategoryList");let t=x({headline:"",excerpt:"",category_id:"",content:"",status:!1,featured:!1,slug:"",cover_photo:"",cover_photo_url:"",article_type_id:""}),h="created";L(()=>n.state.articles.current.data,(r,o)=>{t.value={...JSON.parse(JSON.stringify(r))},t.value.category&&(t.value.category_id=t.value.category.id),m.value.setHTML(r.content)}),p.params.id&&(n.dispatch("articles/getById",p.params.id),h="updated");const k=()=>{n.dispatch("articles/saveArticle",t.value).then(({data:r})=>{n.commit("notify",{type:"success",message:"Data was successfully "+h})}).catch(r=>{n.commit("notify",{type:"error",message:"Something went wrong, please try again or contact your admin"})})},C=r=>{const o=r.target.files[0],l=new FileReader;l.onload=()=>{t.value.cover_photo=l.result,t.value.cover_photo_url=l.result},l.readAsDataURL(o)};return(r,o)=>{const l=f("mdicon"),S=f("router-link");return i(),d(y,null,[s(n).state.articles.current.loading?(i(),M(D,{key:0,isFullScreen:!0})):N("",!0),e("div",H,[e("form",{onSubmit:F(k,["prevent"]),class:"animate-fade-in-down animation",style:j({animationDelay:"0.5s"})},[e("div",G,[e("div",I,[e("div",J,[u(S,{to:{name:"ArticleTable"},class:"btn btn-link underline text-red-500 -ml-4"},{default:A(()=>[u(l,{name:"keyboard-return",size:"18"}),R]),_:1})]),e("div",q,[e("div",O,[Q,e("div",W,[c(e("input",{"onUpdate:modelValue":o[0]||(o[0]=a=>s(t).headline=a),type:"text",name:"headline",id:"headline",class:"input block w-full flex-1 rounded-sm border-gray-300 focus:border-transparent focus:ring-none sm:text-sm"},null,512),[[b,s(t).headline]])])])]),e("div",null,[K,e("div",X,[c(e("textarea",{"onUpdate:modelValue":o[1]||(o[1]=a=>s(t).excerpt=a),id:"excerpt",name:"excerpt",rows:"5",class:"input block w-full flex-1 h-36 rounded-sm p-2 border-gray-300 focus:border-transparent focus:ring-none sm:text-sm",placeholder:"Type something here"},null,512),[[b,s(t).excerpt]])]),Y]),e("div",null,[Z,e("div",$,[u(s(P),{content:s(t).content,"onUpdate:content":o[2]||(o[2]=a=>s(t).content=a),contentType:"html",theme:"snow",toolbar:"full",ref_key:"quill",ref:m},null,8,["content"])])])]),e("div",ee,[e("div",te,[e("div",se,[oe,c(e("select",{class:"select select-bordered capitalize","onUpdate:modelValue":o[3]||(o[3]=a=>s(t).article_type_id=a)},ne,512),[[g,s(t).article_type_id]])]),e("div",re,[ie,c(e("select",{class:"select select-bordered capitalize","onUpdate:modelValue":o[4]||(o[4]=a=>s(t).category_id=a)},[(i(!0),d(y,null,T(s(w),(a,B)=>(i(),d("option",{key:B,value:a.id},z(a.category),9,ce))),128))],512),[[g,s(t).category_id]])])]),e("div",null,[de,e("div",ue,[e("div",pe,[s(t).cover_photo_url?(i(),d("img",{key:1,src:s(t).cover_photo_url,alt:s(t).headline,"w-64":"","h-48":"","object-cover":"",class:"mb-8"},null,8,xe)):(i(),d("svg",_e,he)),e("div",fe,[e("label",be,[ge,e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:C},null,32)])]),ye])])]),e("div",ve,[e("div",we,[e("label",ke,[Ce,c(e("input",{type:"checkbox",class:"checkbox checkbox-primary","onUpdate:modelValue":o[5]||(o[5]=a=>s(t).status=a)},null,512),[[v,s(t).status]])])]),e("div",Se,[e("label",Be,[Ve,c(e("input",{type:"checkbox",class:"checkbox checkbox-primary","onUpdate:modelValue":o[6]||(o[6]=a=>s(t).featured=a)},null,512),[[v,s(t).featured]])])])]),e("div",Ue,[e("button",Le,[u(l,{name:"eye-circle"}),Me]),e("button",Ne,[u(l,{name:"content-save"}),Fe])])])])],44,E)])],64)}}};export{De as default};
