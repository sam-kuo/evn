"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1972],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return p}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=s(t),p=o,f=d["".concat(i,".").concat(p)]||d[p]||m[p]||c;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5284:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var n=t(7462),o=t(3366),c=(t(7294),t(3905)),a=["components"],u={id:"member-guards",title:"Member Access Control"},i=void 0,s={unversionedId:"contracts/guards/member-guards",id:"contracts/guards/member-guards",isDocsHomePage:!1,title:"Member Access Control",description:"Member Guards",source:"@site/docs/contracts/guards/MemberGuard.md",sourceDirName:"contracts/guards",slug:"/contracts/guards/member-guards",permalink:"/docs/contracts/guards/member-guards",editUrl:"https://github.com/openlawteam/tribute-contracts/edit/docs/website/docs/contracts/guards/MemberGuard.md",tags:[],version:"current",frontMatter:{id:"member-guards",title:"Member Access Control"}},l=[{value:"Member Guards",id:"member-guards",children:[{value:"onlyMember",id:"onlymember",children:[]}]}],m={toc:l};function d(e){var r=e.components,t=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"member-guards"},"Member Guards"),(0,c.kt)("h3",{id:"onlymember"},"onlyMember"),(0,c.kt)("p",null,"Only members of the DAO are allowed to execute the function call."))}d.isMDXComponent=!0}}]);