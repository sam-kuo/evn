"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5896],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),c=i,u=s["".concat(d,".").concat(c)]||s[c]||k[c]||a;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2614:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"tribute-dao",title:"TributeDao"},d=void 0,p={unversionedId:"schema/objects/tribute-dao",id:"schema/objects/tribute-dao",isDocsHomePage:!1,title:"TributeDao",description:"No description",source:"@site/docs/schema/objects/tribute-dao.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/tribute-dao",permalink:"/docs/schema/objects/tribute-dao",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/schema/objects/tribute-dao.mdx",tags:[],version:"current",frontMatter:{id:"tribute-dao",title:"TributeDao"}},m=[{value:"Fields",id:"fields",children:[]}],k={toc:m};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type TributeDao {\n  id: ID!\n  daoAddress: Bytes\n  name: String\n  creator: Bytes\n  createdAt: String\n  totalUnits: String\n  bank: Bank!\n  adapters(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: Adapter_orderBy\n    orderDirection: OrderDirection\n    where: Adapter_filter\n  ): [Adapter!]!\n  extensions(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: Extension_orderBy\n    orderDirection: OrderDirection\n    where: Extension_filter\n  ): [Extension!]!\n  members(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: Member_orderBy\n    orderDirection: OrderDirection\n    where: Member_filter\n  ): [Member]!\n  proposals(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: Proposal_orderBy\n    orderDirection: OrderDirection\n    where: Proposal_filter\n  ): [Proposal]!\n  nftCollection: NFTCollection!\n  coupons(\n    skip: Int = 0\n    first: Int = 100\n    orderBy: Coupon_orderBy\n    orderDirection: OrderDirection\n    where: Coupon_filter\n  ): [Coupon]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")),(0,a.kt)("p",null,"Unique identifier and primary key of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TributeDao")," entity"),(0,a.kt)("h4",{id:"daoaddress"},(0,a.kt)("inlineCode",{parentName:"h4"},"daoAddress")),(0,a.kt)("p",null,"The DAO address"),(0,a.kt)("h4",{id:"name"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")),(0,a.kt)("p",null,"The name of the DAO"),(0,a.kt)("h4",{id:"creator"},(0,a.kt)("inlineCode",{parentName:"h4"},"creator")),(0,a.kt)("p",null,"The DAO creator address"),(0,a.kt)("h4",{id:"createdat"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")),(0,a.kt)("h4",{id:"totalunits"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalUnits")),(0,a.kt)("h4",{id:"bank-bank"},(0,a.kt)("inlineCode",{parentName:"h4"},"bank")," (","[",(0,a.kt)("inlineCode",{parentName:"h4"},"Bank!"),"]"),(0,a.kt)("p",null,"The bank of the DAO"),(0,a.kt)("h4",{id:"adapters-adapter"},(0,a.kt)("inlineCode",{parentName:"h4"},"adapters")," ([",(0,a.kt)("inlineCode",{parentName:"h4"},"[Adapter!]!"),"]"),(0,a.kt)("p",null,"List of registered adapters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first"},(0,a.kt)("inlineCode",{parentName:"h5"},"first"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-adapter_orderby"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Adapter_orderBy"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderdirection-orderdirection"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderDirection")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"OrderDirection"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-adapter_filter"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Adapter_filter"),"]"))),(0,a.kt)("h4",{id:"extensions-extension"},(0,a.kt)("inlineCode",{parentName:"h4"},"extensions")," ([",(0,a.kt)("inlineCode",{parentName:"h4"},"[Extension!]!"),"]"),(0,a.kt)("p",null,"List of registered extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"first"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-extension_orderby"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Extension_orderBy"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderdirection-orderdirection-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderDirection")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"OrderDirection"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-extension_filter"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Extension_filter"),"]"))),(0,a.kt)("h4",{id:"members-member"},(0,a.kt)("inlineCode",{parentName:"h4"},"members")," ([",(0,a.kt)("inlineCode",{parentName:"h4"},"[Member]!"),"]"),(0,a.kt)("p",null,"List of members in the DAO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-2"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-2"},(0,a.kt)("inlineCode",{parentName:"h5"},"first"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-member_orderby"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Member_orderBy"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderdirection-orderdirection-2"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderDirection")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"OrderDirection"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-member_filter"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Member_filter"),"]"))),(0,a.kt)("h4",{id:"proposals-proposal"},(0,a.kt)("inlineCode",{parentName:"h4"},"proposals")," ([",(0,a.kt)("inlineCode",{parentName:"h4"},"[Proposal]!"),"]"),(0,a.kt)("p",null,"List of proposals in the DAO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-3"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-3"},(0,a.kt)("inlineCode",{parentName:"h5"},"first"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-proposal_orderby"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Proposal_orderBy"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderdirection-orderdirection-3"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderDirection")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"OrderDirection"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-proposal_filter"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Proposal_filter"),"]"))),(0,a.kt)("h4",{id:"nftcollection-nftcollection"},(0,a.kt)("inlineCode",{parentName:"h4"},"nftCollection")," (","[",(0,a.kt)("inlineCode",{parentName:"h4"},"NFTCollection!"),"]"),(0,a.kt)("p",null,"List of nfts in the DAO"),(0,a.kt)("h4",{id:"coupons-coupon"},(0,a.kt)("inlineCode",{parentName:"h4"},"coupons")," ([",(0,a.kt)("inlineCode",{parentName:"h4"},"[Coupon]!"),"]"),(0,a.kt)("p",null,"List of redeemed coupons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"skip-4"},(0,a.kt)("inlineCode",{parentName:"h5"},"skip"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"first-4"},(0,a.kt)("inlineCode",{parentName:"h5"},"first"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderby-coupon_orderby"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderBy")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Coupon_orderBy"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"orderdirection-orderdirection-4"},(0,a.kt)("inlineCode",{parentName:"h5"},"orderDirection")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"OrderDirection"),"]")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-coupon_filter"},(0,a.kt)("inlineCode",{parentName:"h5"},"where")," (","[",(0,a.kt)("inlineCode",{parentName:"h5"},"Coupon_filter"),"]"))))}s.isMDXComponent=!0}}]);