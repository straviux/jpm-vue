import{u as b,r as n,o,c as _,b as e,t as h,e as a,d as s,w as l,m as p,h as v,n as g,l as d}from"./index.0ca27673.js";const x={class:"navbar-start"},w={class:"text-sm breadcrumbs"},f=e("li",null,[e("a",null,"GALLERY MAINTENANCE")],-1),A={class:"uppercase"},N={class:"navbar-center hidden lg:flex"},k={tabindex:"0",class:"menu menu-compact menu-horizontal"},y={class:"nav-item hover:bg-white"},C=d("ALL"),I={class:"navbar-end"},B=d("Add Image"),E={__name:"Menu",setup(i){const t=b();return(m,c)=>{const r=n("router-link"),u=n("mdicon");return o(),_("div",{class:g(["navbar mb-10 p-6 bg-white mx-auto",a(t).name=="AddImage"||a(t).name=="UpdateImage"?"max-w-7xl":""])},[e("div",x,[e("div",w,[e("ul",null,[f,e("li",null,[e("a",A,h(a(t).meta.title),1)])])])]),e("div",N,[e("ul",k,[e("li",y,[s(r,{to:{name:"GalleryTable"},class:"border-x-0 hover:bg-white focus:bg-white border-t-0 uppercase","active-class":"border-b-2 border-slate-400"},{default:l(()=>[C]),_:1})])])]),e("div",I,[a(t).name=="GalleryTable"?(o(),p(r,{key:0,to:{name:"AddImage"},class:"btn btn-sm gap-2 btn-outline"},{default:l(()=>[s(u,{name:"image-plus"}),B]),_:1})):v("",!0)])],2)}}},L={__name:"GalleryMaintenance",setup(i){return(t,m)=>{const c=n("router-view");return o(),_("div",null,[s(E,{class:"shadow rounded-lg"}),s(c)])}}};export{L as default};
