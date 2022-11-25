import{q as Me,v as z,F as j,x as ee,y as te,f as $,z as Be,A as R,g as C,B as U,o as b,c as k,b as s,_ as Ie,d as S,w as O,C as Le,r as M,n as Y,T as oe,a as T,m as W,D as re,t as B,l as fe}from"./index.456f3501.js";function L(e,t,...r){if(e in t){let n=t[e];return typeof n=="function"?n(...r):n}let a=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(n=>`"${n}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,L),a}var K=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(K||{}),Fe=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Fe||{});function V({visible:e=!0,features:t=0,ourProps:r,theirProps:a,...n}){var o;let u=De(a,r),v=Object.assign(n,{props:u});if(e||t&2&&u.static)return ae(v);if(t&1){let l=(o=u.unmount)==null||o?0:1;return L(l,{[0](){return null},[1](){return ae({...n,props:{...u,hidden:!0,style:{display:"none"}}})}})}return ae(v)}function ae({props:e,attrs:t,slots:r,slot:a,name:n}){var o;let{as:u,...v}=Ne(e,["unmount","static"]),l=(o=r.default)==null?void 0:o.call(r,a),f={};if(u==="template"){if(l=me(l),Object.keys(v).length>0||Object.keys(t).length>0){let[x,...y]=l!=null?l:[];if(!Te(x)||y.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${n} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(v).concat(Object.keys(t)).sort((c,_)=>c.localeCompare(_)).map(c=>`  - ${c}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(c=>`  - ${c}`).join(`
`)].join(`
`));return Me(x,Object.assign({},v,f))}return Array.isArray(l)&&l.length===1?l[0]:l}return z(u,Object.assign({},v,f),l)}function me(e){return e.flatMap(t=>t.type===j?me(t.children):[t])}function De(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let a of e)for(let n in a)n.startsWith("on")&&typeof a[n]=="function"?(r[n]!=null||(r[n]=[]),r[n].push(a[n])):t[n]=a[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(a=>[a,void 0])));for(let a in r)Object.assign(t,{[a](n,...o){let u=r[a];for(let v of u){if(n!=null&&n.defaultPrevented)return;v(n,...o)}}});return t}function Ne(e,t=[]){let r=Object.assign({},e);for(let a of t)a in r&&delete r[a];return r}function Te(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let He=0;function ze(){return++He}function G(){return ze()}var I=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(I||{});function p(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let he=Symbol("Context");var q=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(q||{});function ge(){return ee(he,null)}function Ge(e){te(he,e)}function ve(e,t){if(e)return e;let r=t!=null?t:"button";if(typeof r=="string"&&r.toLowerCase()==="button")return"button"}function Re(e,t){let r=$(ve(e.value.type,e.value.as));return Be(()=>{r.value=ve(e.value.type,e.value.as)}),R(()=>{var a;r.value||!p(t)||p(t)instanceof HTMLButtonElement&&!((a=p(t))!=null&&a.hasAttribute("type"))&&(r.value="button")}),r}function J(e){if(typeof window>"u")return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=p(e);if(t)return t.ownerDocument}return document}let se=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var D=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(D||{}),Ue=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Ue||{}),Ve=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Ve||{});function ye(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(se))}var ue=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(ue||{});function we(e,t=0){var r;return e===((r=J(e))==null?void 0:r.body)?!1:L(t,{[0](){return e.matches(se)},[1](){let a=e;for(;a!==null;){if(a.matches(se))return!0;a=a.parentElement}return!1}})}let We=["textarea","input"].join(",");function Ke(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,We))!=null?r:!1}function qe(e,t=r=>r){return e.slice().sort((r,a)=>{let n=t(r),o=t(a);if(n===null||o===null)return 0;let u=n.compareDocumentPosition(o);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function H(e,t,r=!0){var a;let n=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,o=Array.isArray(e)?r?qe(e):e:ye(e),u=n.activeElement,v=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),l=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(u))-1;if(t&4)return Math.max(0,o.indexOf(u))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=t&32?{preventScroll:!0}:{},x=0,y=o.length,c;do{if(x>=y||x+y<=0)return 0;let _=l+x;if(t&16)_=(_+y)%y;else{if(_<0)return 3;if(_>=y)return 1}c=o[_],c==null||c.focus(f),x+=v}while(c!==n.activeElement);return c.hasAttribute("tabindex")||c.setAttribute("tabindex","0"),t&6&&Ke(c)&&c.select(),2}function le(e,t,r){typeof window<"u"&&R(a=>{window.addEventListener(e,t,r),a(()=>window.removeEventListener(e,t,r))})}function Je(e,t,r=C(()=>!0)){function a(n,o){if(!r.value||n.defaultPrevented)return;let u=o(n);if(u===null||!u.ownerDocument.documentElement.contains(u))return;let v=function l(f){return typeof f=="function"?l(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e);for(let l of v){if(l===null)continue;let f=l instanceof HTMLElement?l:p(l);if(f!=null&&f.contains(u))return}return!we(u,ue.Loose)&&u.tabIndex!==-1&&n.preventDefault(),t(n,u)}le("click",n=>a(n,o=>o.target),!0),le("blur",n=>a(n,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var Z=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(Z||{});let ie=U({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:r}){return()=>{let{features:a,...n}=e,o={"aria-hidden":(a&2)===2?!0:void 0,style:{position:"absolute",width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(a&4)===4&&(a&2)!==2&&{display:"none"}}};return V({ourProps:o,theirProps:n,slot:{},attrs:r,slots:t,name:"Hidden"})}}});var N=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(N||{});function be(){let e=$(0);return le("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Xe(e,t,r,a){typeof window<"u"&&R(n=>{e=e!=null?e:window,e.addEventListener(t,r,a),n(()=>e.removeEventListener(t,r,a))})}var Qe=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qe||{});let xe=Symbol("PopoverContext");function ne(e){let t=ee(xe,null);if(t===null){let r=new Error(`<${e} /> is missing a parent <${Se.name} /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,ne),r}return t}let _e=Symbol("PopoverGroupContext");function Pe(){return ee(_e,null)}let ke=Symbol("PopoverPanelContext");function Ye(){return ee(ke,null)}let Se=U({name:"Popover",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:r,expose:a}){var n;let o=`headlessui-popover-button-${G()}`,u=`headlessui-popover-panel-${G()}`,v=$(null);a({el:v,$el:v});let l=$(1),f=$(null),x=$(null),y=$(null),c=$(null),_=C(()=>J(v)),A=C(()=>{if(!p(f)||!p(c))return!1;for(let h of document.querySelectorAll("body > *"))if(Number(h==null?void 0:h.contains(p(f)))^Number(h==null?void 0:h.contains(p(c))))return!0;return!1}),d={popoverState:l,buttonId:o,panelId:u,panel:c,button:f,isPortalled:A,beforePanelSentinel:x,afterPanelSentinel:y,togglePopover(){l.value=L(l.value,{[0]:1,[1]:0})},closePopover(){l.value!==1&&(l.value=1)},close(h){d.closePopover();let P=(()=>h?h instanceof HTMLElement?h:h.value instanceof HTMLElement?p(h):p(d.button):p(d.button))();P==null||P.focus()}};te(xe,d),Ge(C(()=>L(l.value,{[0]:q.Open,[1]:q.Closed})));let m={buttonId:o,panelId:u,close(){d.closePopover()}},i=Pe(),g=i==null?void 0:i.registerPopover;function E(){var h,P,w,F;return(F=i==null?void 0:i.isFocusWithinPopoverGroup())!=null?F:((h=_.value)==null?void 0:h.activeElement)&&(((P=p(f))==null?void 0:P.contains(_.value.activeElement))||((w=p(c))==null?void 0:w.contains(_.value.activeElement)))}return R(()=>g==null?void 0:g(m)),Xe((n=_.value)==null?void 0:n.defaultView,"focus",h=>{var P,w;l.value===0&&(E()||!f||!c||(P=p(d.beforePanelSentinel))!=null&&P.contains(h.target)||(w=p(d.afterPanelSentinel))!=null&&w.contains(h.target)||d.closePopover())},!0),Je([f,c],(h,P)=>{var w;d.closePopover(),we(P,ue.Loose)||(h.preventDefault(),(w=p(f))==null||w.focus())},C(()=>l.value===0)),()=>{let h={open:l.value===0,close:d.close};return V({theirProps:e,ourProps:{ref:v},slot:h,slots:t,attrs:r,name:"Popover"})}}}),Ze=U({name:"PopoverButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:a}){let n=ne("PopoverButton"),o=C(()=>J(n.button));a({el:n.button,$el:n.button});let u=Pe(),v=u==null?void 0:u.closeOthers,l=Ye(),f=l===null?!1:l===n.panelId,x=$(null),y=`headlessui-focus-sentinel-${G()}`;f||R(()=>{n.button.value=x.value});let c=Re(C(()=>({as:e.as,type:t.type})),x);function _(i){var g,E,h,P,w;if(f){if(n.popoverState.value===1)return;switch(i.key){case I.Space:case I.Enter:i.preventDefault(),(E=(g=i.target).click)==null||E.call(g),n.closePopover(),(h=p(n.button))==null||h.focus();break}}else switch(i.key){case I.Space:case I.Enter:i.preventDefault(),i.stopPropagation(),n.popoverState.value===1&&(v==null||v(n.buttonId)),n.togglePopover();break;case I.Escape:if(n.popoverState.value!==0)return v==null?void 0:v(n.buttonId);if(!p(n.button)||((P=o.value)==null?void 0:P.activeElement)&&!((w=p(n.button))!=null&&w.contains(o.value.activeElement)))return;i.preventDefault(),i.stopPropagation(),n.closePopover();break}}function A(i){f||i.key===I.Space&&i.preventDefault()}function d(i){var g,E;e.disabled||(f?(n.closePopover(),(g=p(n.button))==null||g.focus()):(i.preventDefault(),i.stopPropagation(),n.popoverState.value===1&&(v==null||v(n.buttonId)),n.togglePopover(),(E=p(n.button))==null||E.focus()))}function m(i){i.preventDefault(),i.stopPropagation()}return()=>{let i=n.popoverState.value===0,g={open:i},E=f?{ref:x,type:c.value,onKeydown:_,onClick:d}:{ref:x,id:n.buttonId,type:c.value,"aria-expanded":e.disabled?void 0:n.popoverState.value===0,"aria-controls":p(n.panel)?n.panelId:void 0,disabled:e.disabled?!0:void 0,onKeydown:_,onKeyup:A,onClick:d,onMousedown:m},h=be();function P(){let w=p(n.panel);if(!w)return;function F(){L(h.value,{[N.Forwards]:()=>H(w,D.First),[N.Backwards]:()=>H(w,D.Last)})}F()}return z(j,[V({ourProps:E,theirProps:{...t,...e},slot:g,attrs:t,slots:r,name:"PopoverButton"}),i&&!f&&n.isPortalled.value&&z(ie,{id:y,features:Z.Focusable,as:"button",type:"button",onFocus:P})])}}});U({name:"PopoverOverlay",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(e,{attrs:t,slots:r}){let a=ne("PopoverOverlay"),n=`headlessui-popover-overlay-${G()}`,o=ge(),u=C(()=>o!==null?o.value===q.Open:a.popoverState.value===0);function v(){a.closePopover()}return()=>{let l={open:a.popoverState.value===0};return V({ourProps:{id:n,"aria-hidden":!0,onClick:v},theirProps:e,slot:l,attrs:t,slots:r,features:K.RenderStrategy|K.Static,visible:u.value,name:"PopoverOverlay"})}}});let et=U({name:"PopoverPanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},focus:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:t,slots:r,expose:a}){let{focus:n}=e,o=ne("PopoverPanel"),u=C(()=>J(o.panel)),v=`headlessui-focus-sentinel-before-${G()}`,l=`headlessui-focus-sentinel-after-${G()}`;a({el:o.panel,$el:o.panel}),te(ke,o.panelId),R(()=>{var m,i;if(!n||o.popoverState.value!==0||!o.panel)return;let g=(m=u.value)==null?void 0:m.activeElement;(i=p(o.panel))!=null&&i.contains(g)||H(p(o.panel),D.First)});let f=ge(),x=C(()=>f!==null?f.value===q.Open:o.popoverState.value===0);function y(m){var i,g;switch(m.key){case I.Escape:if(o.popoverState.value!==0||!p(o.panel)||u.value&&!((i=p(o.panel))!=null&&i.contains(u.value.activeElement)))return;m.preventDefault(),m.stopPropagation(),o.closePopover(),(g=p(o.button))==null||g.focus();break}}function c(m){var i,g,E,h,P;let w=m.relatedTarget;!w||!p(o.panel)||(i=p(o.panel))!=null&&i.contains(w)||(o.closePopover(),(((E=(g=p(o.beforePanelSentinel))==null?void 0:g.contains)==null?void 0:E.call(g,w))||((P=(h=p(o.afterPanelSentinel))==null?void 0:h.contains)==null?void 0:P.call(h,w)))&&w.focus({preventScroll:!0}))}let _=be();function A(){let m=p(o.panel);if(!m)return;function i(){L(_.value,{[N.Forwards]:()=>{H(m,D.Next)},[N.Backwards]:()=>{var g;(g=p(o.button))==null||g.focus({preventScroll:!0})}})}i()}function d(){let m=p(o.panel);if(!m)return;function i(){L(_.value,{[N.Forwards]:()=>{var g,E;let h=p(o.button),P=p(o.panel);if(!h)return;let w=ye(),F=w.indexOf(h),je=w.slice(0,F+1),X=[...w.slice(F+1),...je];for(let Q of X.slice())if(((E=(g=Q==null?void 0:Q.id)==null?void 0:g.startsWith)==null?void 0:E.call(g,"headlessui-focus-sentinel-"))||(P==null?void 0:P.contains(Q))){let pe=X.indexOf(Q);pe!==-1&&X.splice(pe,1)}H(X,D.First,!1)},[N.Backwards]:()=>H(m,D.Previous)})}i()}return()=>{let m={open:o.popoverState.value===0,close:o.close},i={ref:o.panel,id:o.panelId,onKeydown:y,onFocusout:n&&o.popoverState.value===0?c:void 0,tabIndex:-1};return V({ourProps:i,theirProps:{...t,...e},attrs:t,slot:m,slots:{...r,default:(...g)=>{var E;return[z(j,[x.value&&o.isPortalled.value&&z(ie,{id:v,ref:o.beforePanelSentinel,features:Z.Focusable,as:"button",type:"button",onFocus:A}),(E=r.default)==null?void 0:E.call(r,...g),x.value&&o.isPortalled.value&&z(ie,{id:l,ref:o.afterPanelSentinel,features:Z.Focusable,as:"button",type:"button",onFocus:d})])]}},features:K.RenderStrategy|K.Static,visible:x.value,name:"PopoverPanel"})}}}),tt=U({name:"PopoverGroup",props:{as:{type:[Object,String],default:"div"}},setup(e,{attrs:t,slots:r,expose:a}){let n=$(null),o=$([]),u=C(()=>J(n));a({el:n,$el:n});function v(y){let c=o.value.indexOf(y);c!==-1&&o.value.splice(c,1)}function l(y){return o.value.push(y),()=>{v(y)}}function f(){var y;let c=u.value;if(!c)return!1;let _=c.activeElement;return(y=p(n))!=null&&y.contains(_)?!0:o.value.some(A=>{var d,m;return((d=c.getElementById(A.buttonId))==null?void 0:d.contains(_))||((m=c.getElementById(A.panelId))==null?void 0:m.contains(_))})}function x(y){for(let c of o.value)c.buttonId!==y&&c.close()}return te(_e,{registerPopover:l,unregisterPopover:v,isFocusWithinPopoverGroup:f,closeOthers:x}),()=>V({ourProps:{ref:n},theirProps:e,slot:{},attrs:t,slots:r,name:"PopoverGroup"})}});function nt(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function ot(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"})])}function Ee(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"})])}function Oe(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"})])}function $e(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"})])}function Ce(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})])}function ce(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"})])}function rt(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}function at(e,t){return b(),k("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[s("path",{"fill-rule":"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z","clip-rule":"evenodd"})])}const Ae="/assets/province_logo_colored.882f6c8c.gif",de="/assets/logo_colored.623f1917.gif",st="/assets/title.8a53b74f.gif",lt="/assets/jpm_logo_colored.0a422461.gif",it=[{name:"Financial Assitance",description:"Apply for financial assistance that you might need.",href:"#",icon:Ee},{name:"Scholarship",description:"Get an opportunity to be part of our scholarship programs.",href:"/scholarship",icon:Oe},{name:"Livelihood",description:"Join in our livelihood seminars and training programs.",href:"#",icon:ce}],ut=[{name:"Frequently Asked Questions",description:"Get all of your questions answered in our forums or contact support.",href:"#",icon:$e},{name:"About Us",description:"Get to know who we are and what we do.",href:"#",icon:ce},{name:"Contact Us",description:"Any suggestions or feedbacks? feel free to contact us.",href:"#",icon:Ce}],ct=[{text:"Home",to:{name:"Home"}},{text:"News",to:{name:"PublicNews"}},{text:"Stories",to:{name:"PublicStory"}},{text:"Gallery",to:{name:"PublicGallery"}}],dt={components:{Popover:Se,PopoverButton:Ze,PopoverGroup:tt,PopoverPanel:et,Bars3Icon:nt,CalendarIcon:ot,ChartBarIcon:Ee,CursorArrowRaysIcon:Oe,LifebuoyIcon:$e,PhoneIcon:Ce,ShieldCheckIcon:ce,XMarkIcon:rt,ChevronDownIcon:at},setup(){return{resources:ut,assistance:it,links:ct}}},pt={class:"mx-auto px-4 sm:px-8"},ft={class:"flex items-center justify-between border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10"},vt=s("div",{class:"flex justify-start lg:w-0 lg:flex-1"},[s("a",{href:"/",class:"z-20"},[s("span",{class:"sr-only"},"Province"),s("img",{class:"h-24 w-auto sm:h-24",src:Ae,alt:""})]),s("a",{href:"/",class:"mt-2 ml-2 z-10"},[s("span",{class:"sr-only"},"Congress"),s("img",{class:"h-20 w-auto sm:h-20",src:de,alt:""})]),s("a",{href:"/",class:"mt-4 -ml-28 z-0"},[s("span",{class:"sr-only"},"Congress"),s("img",{class:"h-20 w-auto sm:h-20",src:st,alt:""})])],-1),mt={class:"-my-2 -mr-2 md:hidden"},ht=s("span",{class:"sr-only"},"Open menu",-1),gt=s("span",{class:"prose"},"JPM Assistance",-1),yt={class:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"},wt={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},bt=["href"],xt={class:"ml-4"},_t={class:"text-base font-medium text-gray-900"},Pt={class:"mt-1 text-sm text-gray-500"},kt=s("span",null,"More",-1),St={class:"overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"},Et={class:"relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"},Ot=["href"],$t={class:"ml-4"},Ct={class:"text-base font-medium text-gray-900"},At={class:"mt-1 text-sm text-gray-500"},jt=s("div",{class:"hidden items-center justify-end md:flex md:flex-1 lg:w-0"},null,-1),Mt={class:"divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"},Bt={class:"px-5 pt-5 pb-6"},It={class:"flex items-center justify-between"},Lt=s("div",null,[s("img",{class:"h-16 w-auto",src:de,alt:"Workflow"})],-1),Ft={class:"-mr-2"},Dt=s("span",{class:"sr-only"},"Close menu",-1),Nt={class:"mt-6"},Tt={class:"grid gap-y-8"},Ht=["href"],zt={class:"ml-3 text-base font-medium text-gray-900"},Gt={class:"space-y-6 py-6 px-5"},Rt={class:"grid grid-cols-2 gap-y-4 gap-x-8"},Ut=["href"],Vt=Le('<footer class="p-4 md:px-6 md:py-8"><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"><div class="sm:flex sm:items-center sm:justify-between"><a href="#" class="flex items-center mb-4 sm:mb-0"><img src="'+de+'" class="mr-3 h-16" alt="House of Representative Logo"><img src="'+Ae+'" class="mr-3 h-16" alt="House of Representative Logo"><img src="'+lt+'" class="mr-3 h-16" alt="House of Representative Logo"></a><ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="#" class="mr-4 hover:underline md:mr-6">About</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></div><span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">\xA9 2022 <a href="#" class="hover:underline">JPM Palawan</a>. All Rights Reserved. </span></footer>',1);function Wt(e,t,r,a,n,o){const u=M("Bars3Icon"),v=M("PopoverButton"),l=M("ChevronDownIcon"),f=M("PopoverPanel"),x=M("Popover"),y=M("router-link"),c=M("PopoverGroup"),_=M("XMarkIcon"),A=M("router-view");return b(),k(j,null,[S(x,{class:"relative bg-white"},{default:O(()=>[s("div",pt,[s("div",ft,[vt,s("div",mt,[S(v,{class:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:O(()=>[ht,S(u,{class:"h-6 w-6","aria-hidden":"true"})]),_:1})]),S(c,{as:"nav",class:"hidden space-x-10 md:flex"},{default:O(()=>[S(x,{class:"relative"},{default:O(({open:d})=>[S(v,{class:Y([d?"text-gray-900":"text-gray-500","group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"])},{default:O(()=>[gt,S(l,{class:Y([d?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"]),"aria-hidden":"true"},null,8,["class"])]),_:2},1032,["class"]),S(oe,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:O(()=>[S(f,{class:"absolute -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 z-30"},{default:O(()=>[s("div",yt,[s("div",wt,[(b(!0),k(j,null,T(a.assistance,m=>(b(),k("a",{key:m.name,href:m.href,class:"-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"},[(b(),W(re(m.icon),{class:"h-6 w-6 flex-shrink-0 text-indigo-600","aria-hidden":"true"})),s("div",xt,[s("p",_t,B(m.name),1),s("p",Pt,B(m.description),1)])],8,bt))),128))])])]),_:1})]),_:1})]),_:1}),(b(!0),k(j,null,T(a.links,d=>(b(),W(y,{to:d.to,class:"text-base font-medium text-gray-500 hover:text-gray-900"},{default:O(()=>[fe(B(d.text),1)]),_:2},1032,["to"]))),256)),S(x,{class:"relative"},{default:O(({open:d})=>[S(v,{class:Y([d?"text-gray-900":"text-gray-500","group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"])},{default:O(()=>[kt,S(l,{class:Y([d?"text-gray-600":"text-gray-400","ml-2 h-5 w-5 group-hover:text-gray-500"]),"aria-hidden":"true"},null,8,["class"])]),_:2},1032,["class"]),S(oe,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0 translate-y-1","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in duration-150","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-1"},{default:O(()=>[S(f,{class:"absolute left-1/2 z-40 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"},{default:O(()=>[s("div",St,[s("div",Et,[(b(!0),k(j,null,T(a.resources,m=>(b(),k("a",{key:m.name,href:m.href,class:"-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"},[(b(),W(re(m.icon),{class:"h-6 w-6 flex-shrink-0 text-indigo-600","aria-hidden":"true"})),s("div",$t,[s("p",Ct,B(m.name),1),s("p",At,B(m.description),1)])],8,Ot))),128))])])]),_:1})]),_:1})]),_:1})]),_:1}),jt])]),S(oe,{"enter-active-class":"duration-200 ease-out","enter-from-class":"opacity-0 scale-95","enter-to-class":"opacity-100 scale-100","leave-active-class":"duration-100 ease-in","leave-from-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-95"},{default:O(()=>[S(f,{focus:"",class:"absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden z-50"},{default:O(()=>[s("div",Mt,[s("div",Bt,[s("div",It,[Lt,s("div",Ft,[S(v,{class:"inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"},{default:O(()=>[Dt,S(_,{class:"h-6 w-6","aria-hidden":"true"})]),_:1})])]),s("div",Nt,[s("nav",Tt,[(b(!0),k(j,null,T(a.assistance,d=>(b(),k("a",{key:d.name,href:d.href,class:"-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"},[(b(),W(re(d.icon),{class:"h-6 w-6 flex-shrink-0 text-indigo-600","aria-hidden":"true"})),s("span",zt,B(d.name),1)],8,Ht))),128))])])]),s("div",Gt,[s("div",Rt,[(b(!0),k(j,null,T(a.links,d=>(b(),W(y,{to:d.to,class:"text-base font-medium text-gray-800 hover:text-gray-900"},{default:O(()=>[fe(B(d.text),1)]),_:2},1032,["to"]))),256)),(b(!0),k(j,null,T(a.resources,d=>(b(),k("a",{key:d.name,href:d.href,class:"text-base font-medium text-gray-800 hover:text-gray-700"},B(d.name),9,Ut))),128))])])])]),_:1})]),_:1})]),_:1}),S(A),Vt],64)}const qt=Ie(dt,[["render",Wt]]);export{qt as default};
