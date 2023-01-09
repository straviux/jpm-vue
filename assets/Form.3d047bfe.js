import{f as g,u as v,v as y,s as n,r as u,o as i,c,b as e,t as b,e as l,d as m,w,z as k,C,x as S,y as I,l as _}from"./index.4e7dc012.js";const j={class:"mt-5 md:col-span-2 md:mt-0 max-w-7xl mx-auto"},B=["onSubmit"],N={class:"shadow sm:overflow-hidden sm:rounded-md"},D={class:"space-y-10 bg-white sm:p-6"},M={class:"flex justify-between"},V={class:"text-xl uppercase mb-2"},U=_("Cancel"),A=e("label",{class:"block font-medium text-gray-700"},"Carousel Image",-1),F={class:"mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6"},G={class:"space-y-1 text-center"},J={key:0,class:"mx-auto h-12 w-12 text-gray-400",stroke:"currentColor",fill:"none",viewBox:"0 0 48 48","aria-hidden":"true"},L=e("path",{d:"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),R=[L],z=["src"],H={class:"flex items-center justify-center text-gray-600"},O={for:"file-upload",class:"relative cursor-pointer rounded bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500 px-3"},P=e("span",null,"Upload Carousel Image",-1),T=e("p",{class:"text-xs text-gray-500"},"PNG, JPG, GIF up to 10MB",-1),E={class:"px-4 py-3 sm:px-6 flex items-center justify-center space-x-7"},q={class:"form-control"},K={class:"label cursor-pointer space-x-2"},Q=e("span",{class:"label-text text-lg"},"Active",-1),W={class:"px-4 py-3 text-right sm:px-6"},X={type:"submit",class:"btn lg:btn-wide bg-blue-500 text-white gap-1 uppercase shadow mt-4 rounded-[4px] btn-success"},Y=_(" Save "),ee={__name:"Form",setup(Z){let s=g({status:!1,slide_url:"",slide:"",order:""}),r="created";const d=v();y(()=>n.state.carousels.current.data,(t,a)=>{s.value={...JSON.parse(JSON.stringify(t))},console.log(s.value)}),d.params.id&&(n.dispatch("carousels/getById",d.params.id),r="updated");const p=()=>{n.dispatch("carousels/saveSlide",s.value).then(({data:t})=>{n.commit("notify",{type:"success",message:"Data was successfully "+r})}).catch(t=>{n.commit("notify",{type:"error",message:"Something went wrong, please try again or contact your admin"})})},h=t=>{const a=t.target.files[0],o=new FileReader;o.onload=()=>{s.value.slide=o.result,s.value.slide_url=o.result},o.readAsDataURL(a),console.log(s.value)};return(t,a)=>{const o=u("router-link"),x=u("mdicon");return i(),c("div",j,[e("form",{onSubmit:S(p,["prevent"]),class:"animate-fade-in-down animation",style:I({animationDelay:"0.5s"})},[e("div",N,[e("div",D,[e("div",M,[e("h1",V,b(l(s).id?"Update Image":"Add Image"),1),m(o,{to:{name:"CarouselTable"},class:"underline text-blue-800"},{default:w(()=>[U]),_:1})]),e("div",null,[A,e("div",F,[e("div",G,[l(s).slide_url?(i(),c("img",{key:1,src:l(s).slide_url,alt:"carousel","w-64":"","h-48":"","object-cover":"",class:"mb-8"},null,8,z)):(i(),c("svg",J,R)),e("div",H,[e("label",O,[P,e("input",{id:"file-upload",name:"file-upload",type:"file",class:"sr-only",onChange:h},null,32)])]),T])])]),e("div",E,[e("div",q,[e("label",K,[Q,k(e("input",{type:"checkbox",class:"checkbox checkbox-primary","onUpdate:modelValue":a[0]||(a[0]=f=>l(s).status=f)},null,512),[[C,l(s).status]])])])]),e("div",W,[e("button",X,[m(x,{name:"content-save"}),Y])])])])],44,B)])}}};export{ee as default};
