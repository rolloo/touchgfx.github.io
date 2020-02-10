(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(215)),i=n(216),c={id:"GettingStarted",title:"Getting Started"},s={id:"Introduction/GettingStarted",title:"Getting Started",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Introduction\\GettingStarted.mdx",permalink:"/docs/Introduction/GettingStarted",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/Introduction/Installation"},next:{title:"Embedded Graphics Primer",permalink:"/docs/BasicConcepts/EmbeddedGraphics"}},u=[],l={rightToc:u},p="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(p,Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A prerequisite to get started using TouchGFX is to install the newest version of TouchGFX, which is described in the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Introduction/Installation"}),"Installation")," section."),Object(a.b)(i.a,{imageSource:"/img/Introduction/GettingStarted/monitor_01.png",caption:" ",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"After this is done you are ready to begin your very first TouchGFX project. It is highly recommended that you read some key sections of this documentation to get familiar with the very basic of TouchGFX concepts.\nThe most essential section is the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Development/DevelopmentIntroduction"}),"Development Introduction")," which will give you an introduction to the software and hardware components needed for a complete TouchGFX project and the activities and tools involved in creating them. It also describes how to get started doing a fast prototype using premade components."),Object(a.b)("p",null,"If you are eager to start experimenting with TouchGFX, trying out an example UI project and maybe running it on an STM32 Evaluation Kit, you can go ahead and start the TouchGFX Designer. "),Object(a.b)(i.a,{imageSource:"/img/Introduction/GettingStarted/getting-started.gif",caption:" ",noShadow:!0,mdxType:"Figure"}),Object(a.b)("p",null,"On the startup window in TouchGFX Designer you can select from a wide range of UI examples to start from. You can even combine this with board specific code for a range of STM32 Evaluation Kits, so you can try out the example on the embedded hardware right away. If you do not have an STM32 Evaluation Kit, you can simply run the TouchGFX application on your PC. If you want to be guided through the first steps, you can have a look at the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Tutorials/Tutorial_01"}),"Tutorials")," chapter. Here you will be shown how to get a project up and running, ending with doing a rather complex UI application."),Object(a.b)("p",null,"At this point it is recommended that you browse through the documentation and read the chapters that look relevant to you. This will give you an overview of the documentation, so you know where to look for more information, and it will introduce you to key TouchGFX concepts.  "),Object(a.b)("p",null,"The main chapters are:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/BasicConcepts/Framebuffer"}),"Basic Concepts"),": This chapter serves as background knowledge for the rest of the documentation. It introduces all the key graphics concepts that will be referenced later on. Depending on your current knowledge and which TouchGFX development activities you will do, you might want to skip some sections and consult them later if some details are unclear."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/Development/Introduction"}),"Development"),": This chapter is the main chapter of the documentation. It explains the structure of a TouchGFX Project, the workflow and the tools involved in the entire project development cycle. Each step in the workflow has it own section and is described in details. Here you will find all you need to know on how to make your application run on your hardware and how you will do UI development, including descriptions of all features and components in the TouchGFX Framework.  ")))}d.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(i,".").concat(d)]||p[d]||h[d]||a;return n?r.a.createElement(m,c({ref:t},u,{components:n})):r.a.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},216:function(e,t,n){"use strict";var o=n(5),r=n(0),a=n.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i}}]);