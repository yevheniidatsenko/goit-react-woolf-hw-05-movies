"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[620],{577:(e,a,t)=>{t.d(a,{B5:()=>l,GS:()=>n,V8:()=>i,sT:()=>r,x6:()=>o});var s=t(154);const c="5257856f789bada50296aabdc3a8b8f3";s.A.defaults.baseURL="https://api.themoviedb.org/3";const n=async()=>await(0,s.A)("/trending/all/day?api_key=".concat(c,"&language=en-US")),i=async e=>await(0,s.A)("/search/movie?query=".concat(e,"&api_key=").concat(c,"&include_adult=false&language=en-US&page=1")),r=async e=>await(0,s.A)("/movie/".concat(e,"?api_key=").concat(c)),o=async e=>await(0,s.A)("/movie/".concat(e,"/credits?api_key=").concat(c)),l=async e=>await(0,s.A)("/movie/".concat(e,"/reviews?api_key=").concat(c))},620:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var s=t(43),c=t(216),n=t(910),i=t(13),r=t(121),o=t(577);const l="Reviews_List__nBL+4",d="Reviews_Item__+uUiw",_="Reviews_Wrapper__jV85m",u="Reviews_Author__EOg1E",h="Reviews_Text__o81lC";var m=t(579);const v=()=>{const{movId:e}=(0,c.g)(),[a,t]=(0,s.useState)([]),[v,y]=(0,s.useState)(null);return(0,s.useEffect)((()=>{(async()=>{try{n.Loading.dots({svgSize:"250px"}),y(null);const a=await(0,o.B5)(e);if(0===a.data.results.length)return void i.Notify.info("Sorry, no reviews");t(a.data.results)}catch(v){console.error(v),y(v)}finally{n.Loading.remove()}})()}),[e]),(0,m.jsxs)("div",{children:[v&&(0,m.jsxs)("h2",{children:["error: ",v]}),(0,m.jsx)("ul",{className:l,children:a.map((e=>{let{author:a,content:t,created_at:s}=e;return(0,m.jsxs)("li",{className:d,children:[(0,m.jsxs)("div",{className:_,children:[(0,m.jsx)("p",{className:u,children:a}),(0,m.jsx)("p",{children:(0,r.GP)(new Date(s),"dd MMMM yyyy HH:mm")})]}),(0,m.jsx)("p",{className:h,children:t})]},a)}))})]})}}}]);
//# sourceMappingURL=620.29b69d35.chunk.js.map