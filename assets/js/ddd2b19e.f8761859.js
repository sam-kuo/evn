"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9106],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),k=i,b=d["".concat(s,".").concat(k)]||d[k]||u[k]||o;return t?r.createElement(b,a(a({ref:n},p),{},{components:t})):r.createElement(b,a({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9682:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={id:"banks",title:"banks"},s=void 0,l={unversionedId:"schema/subscriptions/banks",id:"schema/subscriptions/banks",isDocsHomePage:!1,title:"banks",description:"No description",source:"@site/docs/schema/subscriptions/banks.mdx",sourceDirName:"schema/subscriptions",slug:"/schema/subscriptions/banks",permalink:"/docs/schema/subscriptions/banks",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/subscriptions/banks.mdx",tags:[],version:"current",frontMatter:{id:"banks",title:"banks"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"banks(\n  skip: Int = 0\n  first: Int = 100\n  orderBy: Bank_orderBy\n  orderDirection: OrderDirection\n  where: Bank_filter\n  block: Block_height\n): [Bank!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"skip"},(0,o.kt)("inlineCode",{parentName:"h4"},"skip")),(0,o.kt)("h4",{id:"first"},(0,o.kt)("inlineCode",{parentName:"h4"},"first")),(0,o.kt)("h4",{id:"orderby-bank_orderby"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderBy")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"Bank_orderBy"),"]"),(0,o.kt)("h4",{id:"orderdirection-orderdirection"},(0,o.kt)("inlineCode",{parentName:"h4"},"orderDirection")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"OrderDirection"),"]"),(0,o.kt)("h4",{id:"where-bank_filter"},(0,o.kt)("inlineCode",{parentName:"h4"},"where")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"Bank_filter"),"]"),(0,o.kt)("h4",{id:"block-block_height"},(0,o.kt)("inlineCode",{parentName:"h4"},"block")," (","[",(0,o.kt)("inlineCode",{parentName:"h4"},"Block_height"),"]"),(0,o.kt)("p",null,"The block at which the query should be executed. Can either be an ",(0,o.kt)("inlineCode",{parentName:"p"},"{ number: Int }")," containing the block number or a ",(0,o.kt)("inlineCode",{parentName:"p"},"{ hash: Bytes }")," value containing a block hash. Defaults to the latest block when omitted."),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"bank"},"[",(0,o.kt)("inlineCode",{parentName:"h4"},"Bank"),"]"))}d.isMDXComponent=!0}}]);