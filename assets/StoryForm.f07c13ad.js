import{u as k,f as h,E as C,s as i,r as f,o as c,c as d,e as o,m as S,h as V,b as e,G as N,H as B,t as M,d as u,w as U,I as r,J as F,K as x,L as v,F as L,l as y,C as j}from"./index.c262a095.js";import{L as T,Q as D}from"./Loader.1cdb758b.js";const G={class:"mt-5 md:col-span-2 md:mt-0 max-w-4xl mx-auto"},H=["onSubmit"],I={class:"shadow sm:overflow-hidden sm:rounded-md"},J={class:"space-y-10 bg-white sm:p-6"},A={class:"flex justify-between"},E={class:"text-xl uppercase mb-2"},P=y("Cancel"),R={class:"form-control w-full max-w-xs"},q=e("label",{class:"label block font-medium text-gray-700"}," Category ",-1),O=j('<option value="1">health</option><option value="2">politics and governance</option><option value="3">energy</option><option value="4">weather</option><option value="5">legal</option><option value="6">sports</option><option value="7">business</option><option value="8">education</option><option value="9">social</option>',9),Q=[O],W=e("label",{class:"block font-medium text-gray-700"},"Cover photo",-1),z={class:"mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"},K={class:"space-y-1 text-center"},X={key:0,class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},Y=e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Z=[Y],$=["src","alt"],ee={class:"flex items-center justify-center text-gray-600"},te={for:"file-upload",class:"relative cursor-pointer rounded bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 px-3"},oe=e("span",null,"Upload Cover Photo",-1),se=e("p",{class:"text-xs text-gray-500"},"PNG, JPG, GIF up to 10MB",-1),ae={class:"grid grid-cols-3 gap-6"},ne={class:"col-span-12"},le=e("label",{for:"headline",class:"block font-medium text-gray-700"},"Title",-1),ie={class:"mt-4 flex shadow-sm"},re=e("label",{for:"excerpt",class:"block font-medium text-gray-700"},"Subtitle",-1),ce={class:"mt-2"},de=e("p",{class:"mt-2 text-gray-500"}," Brief information about this story. Will be displayed as subheading on story list. ",-1),ue=e("label",{for:"content",class:"block font-medium text-gray-700"},"Content",-1),pe={class:"mt-2"},me={class:"px-4 py-3 sm:px-6 flex items-center justify-center space-x-7"},_e={class:"form-control"},he={class:"label cursor-pointer space-x-2"},fe=e("span",{class:"label-text text-lg"},"Active",-1),xe={class:"form-control"},ve={class:"label cursor-pointer space-x-2"},ye=e("span",{class:"label-text text-lg"},"Featured",-1),be={class:"px-4 py-3 text-center sm:px-6"},ge={type:"submit",class:"btn lg:btn-wide bg-blue-500 text-white gap-1 uppercase shadow mt-4 rounded-[4px] btn-success"},we=y(" Save "),Ve={__name:"StoryForm",setup(ke){const p=k(),m=h(null);let t=h({headline:"",excerpt:"",content:"",category_id:"",status:!1,featured:!1,slug:"",cover_photo:"",cover_photo_url:"",article_type_id:2}),_="created";C(()=>i.state.articles.current.data,(n,s)=>{t.value={...JSON.parse(JSON.stringify(n))},t.value.category&&(t.value.category_id=t.value.category.id),m.value.setHTML(n.content)}),p.params.id&&(i.dispatch("articles/getById",p.params.id),_="updated");const b=()=>{i.dispatch("articles/saveArticle",t.value).then(({data:n})=>{i.commit("notify",{type:"success",message:"Data was successfully "+_})}).catch(n=>{i.commit("notify",{type:"error",message:"Something went wrong, please try again"})})},g=n=>{const s=n.target.files[0],l=new FileReader;l.onload=()=>{t.value.cover_photo=l.result,t.value.cover_photo_url=l.result},l.readAsDataURL(s)};return(n,s)=>{const l=f("router-link"),w=f("mdicon");return c(),d(L,null,[o(i).state.articles.current.loading?(c(),S(T,{key:0,isFullScreen:!0})):V("",!0),e("div",G,[e("form",{onSubmit:N(b,["prevent"]),class:"animate-fade-in-down animation",style:B({animationDelay:"0.5s"})},[e("div",I,[e("div",J,[e("div",A,[e("h1",E,M(o(t).id?o(t).headline:"Write a story"),1),u(l,{to:"/admin/stories-maintenance",class:"underline text-blue-800"},{default:U(()=>[P]),_:1})]),e("div",R,[q,r(e("select",{class:"select select-bordered","onUpdate:modelValue":s[0]||(s[0]=a=>o(t).category_id=a)},Q,512),[[F,o(t).category_id]])]),e("div",null,[W,e("div",z,[e("div",K,[o(t).cover_photo_url?(c(),d("img",{key:1,src:o(t).cover_photo_url,alt:o(t).headline,"w-64":"","h-48":"","object-cover":"",class:"mb-8"},null,8,$)):(c(),d("svg",X,Z)),e("div",ee,[e("label",te,[oe,e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:g},null,32)])]),se])])]),e("div",ae,[e("div",ne,[le,e("div",ie,[r(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>o(t).headline=a),type:"text",name:"headline",id:"headline",class:"input block w-full flex-1 rounded-sm border-gray-300 focus:border-transparent focus:ring-none sm:text-sm"},null,512),[[x,o(t).headline]])])])]),e("div",null,[re,e("div",ce,[r(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=a=>o(t).excerpt=a),id:"excerpt",name:"excerpt",rows:"3",class:"input block w-full flex-1 h-20 rounded-sm p-2 border-gray-300 focus:border-transparent focus:ring-none sm:text-sm",placeholder:"Type something here"},null,512),[[x,o(t).excerpt]])]),de]),e("div",null,[ue,e("div",pe,[u(o(D),{content:o(t).content,"onUpdate:content":s[3]||(s[3]=a=>o(t).content=a),contentType:"html",theme:"snow",toolbar:"essential",ref_key:"quill",ref:m},null,8,["content"])])]),e("div",me,[e("div",_e,[e("label",he,[fe,r(e("input",{type:"checkbox",class:"checkbox checkbox-primary","onUpdate:modelValue":s[4]||(s[4]=a=>o(t).status=a)},null,512),[[v,o(t).status]])])]),e("div",xe,[e("label",ve,[ye,r(e("input",{type:"checkbox",class:"checkbox checkbox-primary","onUpdate:modelValue":s[5]||(s[5]=a=>o(t).featured=a)},null,512),[[v,o(t).featured]])])])]),e("div",be,[e("button",ge,[u(w,{name:"content-save"}),we])])])])],44,H)])],64)}}};export{Ve as default};
