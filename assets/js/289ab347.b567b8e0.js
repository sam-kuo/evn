"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3107],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||c;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3023:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=n(7462),o=n(3366),c=(n(7294),n(3905)),i=["components"],a={id:"coupon",title:"coupon"},u=void 0,p={unversionedId:"schema/subscriptions/coupon",id:"schema/subscriptions/coupon",isDocsHomePage:!1,title:"coupon",description:"No description",source:"@site/docs/schema/subscriptions/coupon.mdx",sourceDirName:"schema/subscriptions",slug:"/schema/subscriptions/coupon",permalink:"/docs/schema/subscriptions/coupon",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/subscriptions/coupon.mdx",tags:[],version:"current",frontMatter:{id:"coupon",title:"coupon"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"coupon(\n  id: ID!\n  block: Block_height\n): Coupon\n\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"id"},(0,c.kt)("inlineCode",{parentName:"h4"},"id")),(0,c.kt)("h4",{id:"block-block_height"},(0,c.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,c.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,c.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,c.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,c.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"coupon"},"[",(0,c.kt)("inlineCode",{parentName:"h4"},"Coupon"),"]"))}m.isMDXComponent=!0}}]);