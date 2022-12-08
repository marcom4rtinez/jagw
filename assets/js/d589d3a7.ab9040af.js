"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[7162],{3905:function(e,t,o){o.d(t,{Zo:function(){return u},kt:function(){return f}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=r,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3919:function(e,t,o){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}o.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,o){o.d(t,{C:function(){return i},Z:function(){return a}});var n=o(2263),r=o(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,l=void 0!==a&&a,p=i.absolute,s=void 0!==p&&p;if(!o)return o;if(o.startsWith("#"))return o;if((0,r.b)(o))return o;if(l)return t+o;var u=o.startsWith(t)?o:t+o.replace(/^\//,"");return s?e+u:u}(i,o,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},9390:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=(o(4996),["components"]),l={sidebar_position:4,title:"Getting Started"},p=void 0,s={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/jagw-docs/docs/next/getting-started",editUrl:"https://github.com/jalapeno-api-gateway/docs/getting-started.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Getting Started"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/jagw-docs/docs/next/installation"},next:{title:"Request Service",permalink:"/jagw-docs/docs/next/api/request-service"}},u=[{value:"Step 1: Importing the compiled Protobuf definitions",id:"step-1-importing-the-compiled-protobuf-definitions",children:[{value:"Option 1: Using the the pre-compiled files recommended",id:"option-1-using-the-the-pre-compiled-files-recommended",children:[]},{value:"Option 2: Compiling the Protobuf files yourself",id:"option-2-compiling-the-protobuf-files-yourself",children:[]}]},{value:"Step 2: Initialize gRPC connection",id:"step-2-initialize-grpc-connection",children:[{value:"Default Ports",id:"default-ports",children:[]}]},{value:"Sample SR-Apps",id:"sample-sr-apps",children:[]}],c={toc:u};function d(e){var t=e.components,o=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Jalape\xf1o API Gateway uses gRPC for communication. This means you simply have to import the compiled Protobuf definitions and initialize a gRPC connection and you are ready to go."),(0,i.kt)("h2",{id:"step-1-importing-the-compiled-protobuf-definitions"},"Step 1: Importing the compiled Protobuf definitions"),(0,i.kt)("p",null,"To address the Gateway you can either compile the Protobuf files yourself or use the languages-specific repositories containing the already compiled code."),(0,i.kt)("h3",{id:"option-1-using-the-the-pre-compiled-files-recommended"},"Option 1: Using the the pre-compiled files ","[recommended]"),(0,i.kt)("h4",{id:"option-11-download-files-from-release-page"},"Option 1.1: Download files from Release Page"),(0,i.kt)("p",null,"The easiest way to use the Jalape\xf1o API Gateway is to simply download and import the pre-compiled, language-specific Protobuf files from the release page: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo/releases/latest"},"Protorepo"))),(0,i.kt)("h4",{id:"option-12-golang-only"},"Option 1.2: Golang only"),(0,i.kt)("p",null,"If you are using Golang, you will not find the pre-compiled files in the release page, but rather in a dedicated repository:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jalapeno-api-gateway/protorepo-jagw-go/releases/latest"},"Golang"))),(0,i.kt)("p",null,"This allows you to directly import the go module to your project with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ go get github.com/jalapeno-api-gateway/protorepo-jagw-go@v1.3.0\n")),(0,i.kt)("h3",{id:"option-2-compiling-the-protobuf-files-yourself"},"Option 2: Compiling the Protobuf files yourself"),(0,i.kt)("p",null,"If you prefer to compile to Protobuf files yourself or if we do not offer pre-compiled files for your development language you can download the Protobuf files from our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/protorepo/releases/latest"},"protorepo"),"."),(0,i.kt)("p",null,"To compile the files, you will need to install both the ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/protoc-installation/"},"protobuf compiler")," and the language specific ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC compiler"),"."),(0,i.kt)("h2",{id:"step-2-initialize-grpc-connection"},"Step 2: Initialize gRPC connection"),(0,i.kt)("p",null,"Once you have imported the compiled Protobuf code to your project, you can connect to the Request Service and the Subscription Service and use the gRPC Methods documented in the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/jagw-docs/docs/api/request-service"},"API Documentation"),"."),(0,i.kt)("p",null,"To initialize a gRPC connection, refer to the language specific documentation for ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/"},"gRPC")," (i.e. ",(0,i.kt)("a",{parentName:"p",href:"https://grpc.io/docs/languages/go/basics/#client"},"for Golang"),")."),(0,i.kt)("h3",{id:"default-ports"},"Default Ports"),(0,i.kt)("p",null,"The default ports for the two services are shown in the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Service"),(0,i.kt)("th",{parentName:"tr",align:null},"Port"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Request-Service"),(0,i.kt)("td",{parentName:"tr",align:null},"30050")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Subscription-Service"),(0,i.kt)("td",{parentName:"tr",align:null},"30051")))),(0,i.kt)("h2",{id:"sample-sr-apps"},"Sample SR-Apps"),(0,i.kt)("p",null,"You can also refer to our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jalapeno-api-gateway/sample-sr-apps"},"sample-sr-apps")," to get started."))}d.isMDXComponent=!0}}]);