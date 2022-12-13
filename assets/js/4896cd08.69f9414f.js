"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[6933],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,g=d["".concat(l,".").concat(f)]||d[f]||s[f]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){n.d(t,{C:function(){return i},Z:function(){return a}});var o=n(2263),r=n(3919);function i(){var e=(0,o.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,a=i.forcePrependBaseUrl,p=void 0!==a&&a,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(p)return t+n;var c=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+c:c}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},7345:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=(n(4996),["components"]),p={sidebar_position:4,title:"Getting Started"},l=void 0,u={unversionedId:"getting-started",id:"version-1.0.0/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.",source:"@site/versioned_docs/version-1.0.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jagw/docs/1.0.0/getting-started",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.0.0/getting-started.md",tags:[],version:"1.0.0",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Getting Started"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Installation",permalink:"/jagw/docs/1.0.0/installation"},next:{title:"Request Service",permalink:"/jagw/docs/1.0.0/api/request-service"}},c=[{value:"Step 1: Importing the compiled Protobuf definitions",id:"step-1-importing-the-compiled-protobuf-definitions",children:[{value:"Option 1: Using the language-specific repositories recommended",id:"option-1-using-the-language-specific-repositories-recommended",children:[]},{value:"Option 2: Compiling the Protobuf files yourself",id:"option-2-compiling-the-protobuf-files-yourself",children:[]}]},{value:"Step 2: Initialize gRPC connection",id:"step-2-initialize-grpc-connection",children:[{value:"Default Ports",id:"default-ports",children:[]}]},{value:"Demo App",id:"demo-app",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go."),(0,i.kt)("h2",{id:"step-1-importing-the-compiled-protobuf-definitions"},"Step 1: Importing the compiled Protobuf definitions"),(0,i.kt)("p",null,"To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code."),(0,i.kt)("h3",{id:"option-1-using-the-language-specific-repositories-recommended"},"Option 1: Using the language-specific repositories ","[recommended]"),(0,i.kt)("p",null,"The easiest way to use the Jalape\xf1o API Gateway is to use one of the ready-to-use, language-specific repositories that contain the pre-compiled code. As of now, the following languages are supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo-jagw-go/releases"},"Golang")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo-jagw-node/releases"},"NodeJS"))),(0,i.kt)("p",null,"Simply import the code to your project depending on what development language you are using."),(0,i.kt)("h3",{id:"option-2-compiling-the-protobuf-files-yourself"},"Option 2: Compiling the Protobuf files yourself"),(0,i.kt)("p",null,"If you prefer to compile to Protobuf files yourself or if we do not offer a pre-compiled repository for your development language you can download the Protobuf files from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/protorepo/releases"},"protorepo"),"."),(0,i.kt)("p",null,"To compile the files, you will need to install both the ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protobuf compiler")," and the language specific ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC compiler"),"."),(0,i.kt)("h2",{id:"step-2-initialize-grpc-connection"},"Step 2: Initialize gRPC connection"),(0,i.kt)("p",null,"Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/jagw-docs/docs/api/request-service"},"API Documentation"),"."),(0,i.kt)("p",null,"To initialize a gRPC connection, refer to the language specific documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC")," (i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/basics/#client"},"for Golang"),")."),(0,i.kt)("h3",{id:"default-ports"},"Default Ports"),(0,i.kt)("p",null,"The default ports for the two services are shown in the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Port"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Request-Service"),(0,i.kt)("td",{parentName:"tr",align:null},"30061")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subscription-Service"),(0,i.kt)("td",{parentName:"tr",align:null},"30060")))),(0,i.kt)("h2",{id:"demo-app"},"Demo App"),(0,i.kt)("p",null,"You can also refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/demo-sr-app"},"demo-sr-app")," (written in ",(0,i.kt)("em",{parentName:"p"},"golang"),")."))}d.isMDXComponent=!0}}]);