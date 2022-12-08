"use strict";(self.webpackChunkjalapeno_api_gateway_documentation=self.webpackChunkjalapeno_api_gateway_documentation||[]).push([[2680],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return c}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||s;return r?n.createElement(k,o(o({ref:t},d),{},{components:r})):n.createElement(k,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3873:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(6010),s="tableOfContentsInline_3fWc";function o(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(o,{isChild:!0,toc:e.children}))}))):null}var i=function(e){var t=e.toc;return n.createElement("div",{className:(0,a.Z)(s)},n.createElement(o,{toc:t}))}},2157:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=r(3873),i=["components"],l={sidebar_position:2,title:"Subscription Service"},p=void 0,d={unversionedId:"api/subscription-service",id:"version-1.0.0/api/subscription-service",isDocsHomePage:!1,title:"Subscription Service",description:"Protobuf Definition",source:"@site/versioned_docs/version-1.0.0/api/subscription-service.md",sourceDirName:"api",slug:"/api/subscription-service",permalink:"/jagw-docs/docs/1.0.0/api/subscription-service",editUrl:"https://github.com/jalapeno-api-gateway/versioned_docs/version-1.0.0/api/subscription-service.md",tags:[],version:"1.0.0",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Subscription Service"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Request Service",permalink:"/jagw-docs/docs/1.0.0/api/request-service"},next:{title:"Messages",permalink:"/jagw-docs/docs/1.0.0/api/messages"}},u=[{value:"Protobuf Definition",id:"protobuf-definition",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>SubscribeToLsNodes()</code>",id:"subscribetolsnodes",children:[]},{value:"<code>SubscribeToLsLinks()</code>",id:"subscribetolslinks",children:[]},{value:"<code>SubscribeToLsPrefixes()</code>",id:"subscribetolsprefixes",children:[]},{value:"<code>SubscribeToLsSrv6Sids()</code>",id:"subscribetolssrv6sids",children:[]},{value:"<code>SubscribeToLsNodeEdges()</code>",id:"subscribetolsnodeedges",children:[]},{value:"<code>SubscribeToTelemetryData()</code>",id:"subscribetotelemetrydata",children:[]}]}],m={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{toc:u[u.length-1].children,mdxType:"TOCInline"}),(0,s.kt)("h2",{id:"protobuf-definition"},"Protobuf Definition"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"service SubscriptionService {\n    rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n    rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n    rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n    rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n    rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n    rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n}\n")),(0,s.kt)("h2",{id:"methods"},"Methods"),(0,s.kt)("h3",{id:"subscribetolsnodes"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsNodes()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodes(TopologySubscription) returns (stream LsNodeEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvent")),(0,s.kt)("h4",{id:"description"},"Description"),(0,s.kt)("p",null,"Takes a ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription")," with the specified ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnodeevent"},"LsNodeEvents"),". An LsNodeEvent contains an update to a single ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnode"},"LsNode"),". Only ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnode"},"LsNodes")," matching one of the specified ",(0,s.kt)("strong",{parentName:"p"},"keys")," are returned and only properties specified in ",(0,s.kt)("strong",{parentName:"p"},"properties")," are set."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"keys")," streams ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes"),"."),(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"properties")," streams ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,s.kt)("a",{parentName:"li",href:"messages#lsnode"},"LsNodes")," with all available properties.")),(0,s.kt)("h4",{id:"examples"},"Examples"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"keys"),(0,s.kt)("th",{parentName:"tr",align:null},"properties"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"messages#lsnodeevent"},"LsNodeEvents")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"nodeKey1",',(0,s.kt)("br",null),'"nodeKey2"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"Name",',(0,s.kt)("br",null),'"Asn",',(0,s.kt)("br",null),'"RouterIp"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"Name",',(0,s.kt)("br",null),'"Asn",',(0,s.kt)("br",null),'"RouterIp"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"nodeKey1",',(0,s.kt)("br",null),'"nodeKey2"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," for the two specified keys with all available properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnodeevent"},"LsNodeEvents")," for all available ",(0,s.kt)("a",{parentName:"td",href:"messages#lsnode"},"LsNodes")," with all available properties.")))),(0,s.kt)("h3",{id:"subscribetolslinks"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsLinks()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsLinks(TopologySubscription) returns (stream LsLinkEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lslinkevent"},"LsLinkEvent")),(0,s.kt)("h4",{id:"description-1"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"properties"),"."),(0,s.kt)("h3",{id:"subscribetolsprefixes"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsPrefixes()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsPrefixes(TopologySubscription) returns (stream LsPrefixEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsprefixevent"},"LsPrefixEvent")),(0,s.kt)("h4",{id:"description-2"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"properties"),"."),(0,s.kt)("h3",{id:"subscribetolssrv6sids"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsSrv6Sids()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsSrv6Sids(TopologySubscription) returns (stream LsSrv6SidEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lssrv6sidevent"},"LsSrv6SidEvent")),(0,s.kt)("h4",{id:"description-3"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"properties"),"."),(0,s.kt)("h3",{id:"subscribetolsnodeedges"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToLsNodeEdges()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToLsNodeEdges(TopologySubscription) returns (stream LsNodeEdgeEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#topologysubscription"},"TopologySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#lsnodeedgeevent"},"LsNodeEdgeEvent")),(0,s.kt)("h4",{id:"description-4"},"Description"),(0,s.kt)("p",null,"See method ",(0,s.kt)("a",{parentName:"p",href:"#subscribetolsnodes"},"SubscribeToLsNodes()"),". It follows the same principle regarding ",(0,s.kt)("strong",{parentName:"p"},"keys")," and ",(0,s.kt)("strong",{parentName:"p"},"properties"),"."),(0,s.kt)("h3",{id:"subscribetotelemetrydata"},(0,s.kt)("inlineCode",{parentName:"h3"},"SubscribeToTelemetryData()")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-protobuf"},"rpc SubscribeToTelemetryData(TelemetrySubscription) returns (stream TelemetryEvent) {}\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See also"),": ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription"),", ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryresponse"},"TelemetryResponse")),(0,s.kt)("h4",{id:"description-5"},"Description"),(0,s.kt)("p",null,"Takes a ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetrysubscription"},"TelemetrySubscription")," with the specified ",(0,s.kt)("strong",{parentName:"p"},"ipv4addresses")," and ",(0,s.kt)("strong",{parentName:"p"},"properties")," and returns a stream of ",(0,s.kt)("a",{parentName:"p",href:"messages#telemetryevent"},"TelemetryEvents"),". A TelemetryEvent contains an update to a single event tied to an ipv4address."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"ipv4addresses")," streams ",(0,s.kt)("a",{parentName:"li",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses."),(0,s.kt)("li",{parentName:"ul"},"Omitting ",(0,s.kt)("strong",{parentName:"li"},"properties")," streams ",(0,s.kt)("a",{parentName:"li",href:"messages#telemetryevent"},"TelemetryEvents")," with all available properties.")),(0,s.kt)("h4",{id:"examples-1"},"Examples"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"ipv4addresses"),(0,s.kt)("th",{parentName:"tr",align:null},"properties"),(0,s.kt)("th",{parentName:"tr",align:null},(0,s.kt)("a",{parentName:"th",href:"messages#telemetryevent"},"TelemetryEvent")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"1.2.3.4",',(0,s.kt)("br",null),'"2.3.4.5"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"DataRate",',(0,s.kt)("br",null),'"PacketsSent",',(0,s.kt)("br",null),'"PacketsReceived"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for the two specified ipv4addresses with the three requested properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"DataRate",',(0,s.kt)("br",null),'"PacketsSent",',(0,s.kt)("br",null),'"PacketsReceived"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses with the three specified properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"[",(0,s.kt)("br",null),'"1.2.3.4",',(0,s.kt)("br",null),'"2.3.4.5"',(0,s.kt)("br",null),"]"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for the two specified ipv4addresses with all available properties.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"-"),(0,s.kt)("td",{parentName:"tr",align:null},"Streams ",(0,s.kt)("a",{parentName:"td",href:"messages#telemetryevent"},"TelemetryEvents")," for all available ipv4addresses with all available properties.")))))}c.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);