(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{195:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),o=(r(0),r(210)),i={id:"Performance",title:"Performance"},l={id:"BasicConcepts/Performance",title:"Performance",description:"###TODO Write more",source:"@site/docs\\BasicConcepts\\Performance.mdx",permalink:"/docs/BasicConcepts/Performance",sidebar:"docs",previous:{title:"Hardware Components",permalink:"/docs/BasicConcepts/HardwareComponents"},next:{title:"Memory Usage",permalink:"/docs/BasicConcepts/MemoryUsage"}},c=[{value:"Performance",id:"performance",children:[{value:"General strategy",id:"general-strategy",children:[]},{value:"Setup specific strategy",id:"setup-specific-strategy",children:[]}]}],p={rightToc:c},s="wrapper";function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)(s,Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"###TODO Write more"),Object(o.b)("h2",{id:"performance"},"Performance"),Object(o.b)("p",null,"In order to achieve smooth animations on this setup and ultimately on the display, some care must be taken when doing embedded graphics."),Object(o.b)("h3",{id:"general-strategy"},"General strategy"),Object(o.b)("p",null,"A few general points to always consider:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Do not spend time drawing things that do not change"),Object(o.b)("li",{parentName:"ul"},"Transfer as little as possible from flash to RAM"),Object(o.b)("li",{parentName:"ul"},"Transfer as little as possible from RAM to display"),Object(o.b)("li",{parentName:"ul"},"Find the right balance between quality of graphics and speed of animations"),Object(o.b)("li",{parentName:"ul"},"Utilize hardware capabilities")),Object(o.b)("p",null,"The TouchGFX Engine helps address all of these points, but care must be taken by the developer as well."),Object(o.b)("h3",{id:"setup-specific-strategy"},"Setup specific strategy"),Object(o.b)("p",null,"The vast amount of possible embedded setups means that what can be realized on a specific setup is very different to what is possible on another setup."),Object(o.b)("p",null,"A ballpark'ish overview of possible setups are"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"STM32 MCU",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Cortex-M0 to Cortex-M7"),Object(o.b)("li",{parentName:"ul"},"50 to 500 MHz clock rate"),Object(o.b)("li",{parentName:"ul"},"A possible range of graphics related IP's: Chrom-ART, Chrom-GRC, JPEG codec, ..."))),Object(o.b)("li",{parentName:"ul"},"RAM",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type TODO"),Object(o.b)("li",{parentName:"ul"},"0 to X Throughput TODO"),Object(o.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(o.b)("li",{parentName:"ul"},"0 to 100 MB external"))),Object(o.b)("li",{parentName:"ul"},"Flash",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type TODO"),Object(o.b)("li",{parentName:"ul"},"0 to X Throughput TODO"),Object(o.b)("li",{parentName:"ul"},"0 to 1 MB internal"),Object(o.b)("li",{parentName:"ul"},"0 to 1 GB external"))),Object(o.b)("li",{parentName:"ul"},"Display",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Type interface TODO"),Object(o.b)("li",{parentName:"ul"},"1 to 32 bit colors"),Object(o.b)("li",{parentName:"ul"},"100x100 to 1000x1000 pixels")))),Object(o.b)("p",null,"It is evident that the UI applications that are realizable on one possible setup, might not be nowhere near realizable on another. Therefore great care must be taken to align the desired UI application with the actual setup."),Object(o.b)("p",null,"TouchGFX is designed from the ground up for these setups, focusing on making the most of the STM32 MCU capabilities and minimizing the amount of RAM and flash needed. "))}b.isMDXComponent=!0},210:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),u=n,f=b["".concat(i,".").concat(u)]||b[u]||m[u]||o;return r?a.a.createElement(f,l({ref:t},p,{components:r})):a.a.createElement(f,l({ref:t},p))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);