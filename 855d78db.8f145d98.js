(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return g}));var r=n(1),i=n(9),o=(n(0),n(212)),a=n(213),c=n(238),l=n(215),s=n(217),u={id:"Installation",title:"Installation"},p={id:"Introduction/Installation",title:"Installation",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Introduction\\Installation.mdx",permalink:"/docs/Introduction/Installation",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/Introduction/GettingStarted"},next:{title:"Embedded Graphics Primer",permalink:"/docs/BasicConcepts/EmbeddedGraphics"}},h=[{value:"Installing TouchGFX Designer",id:"installing-touchgfx-designer",children:[]},{value:"Installing TouchGFX Generator in CubeMX",id:"installing-touchgfx-generator-in-cubemx",children:[]}],d={rightToc:h},b="wrapper";function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(b,Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"TouchGFX is distributed as an X-CUBE-TOUCHGFX zip file which has the following components inside:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"TouchGFX Designer - Build a UI through a Windows-based GUI Builder"),Object(o.b)("li",{parentName:"ul"},"TouchGFX Generator - Create a custom TouchGFX HAL through CubeMX"),Object(o.b)("li",{parentName:"ul"},"TouchGFX Engine - The TouchGFX C++ framework that drives the UI application")),Object(o.b)("p",null,"If your intention is to simply try TouchGFX Designer and perhaps do some prototyping on STM32 Evaluation kits, refer to the section ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#installing-touchgfx-designer"}),"Installing TouchGFX Designer"),".\xa0"),Object(o.b)("p",null,"If your intention is to run TouchGFX applications on either ST display kits or your own custom STM32 based platform, refer to the section ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#installing-touchgfx-generator-in-cubemx"}),"Installing TouchGFX Generator in CubeMX"),"."),Object(o.b)("h2",{id:"installing-touchgfx-designer"},"Installing TouchGFX Designer"),Object(o.b)("p",null,"Download X-CUBE-TOUCHGFX from the ",Object(o.b)(l.a,{to:"https://www.st.com/en/embedded-software/x-cube-touchgfx.html",target:"_blank",mdxType:"Link"},"ST.com official website")," to anywhere on your hard drive and extract it. "),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/get-software.png",caption:"Downloading X-CUBE-TOUCHGFX from st.com",mdxType:"Figure"}),Object(o.b)("p",null,"Inside the extracted folder, you will find the TouchGFX .msi installer in the following path:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Utilities\\PC_Software\\TouchGFXDesigner\n")),Object(o.b)("p",null,"Double-clicking the .msi file will bring up the installer. Follow the simple instructions to complete the installation process."),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/designer-installation.png",caption:"Installing TouchGFX Designer",mdxType:"Figure"}),Object(o.b)(s.a,{mdxType:"Tip"},"You need the following tools to be able to flash your board directly from within TouchGFX Designer:",Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)(l.a,{to:"https://www.st.com/en/development-tools/stm32cubeprog.html",target:"_blank",mdxType:"Link"},"STM32CubeProgrammer")),Object(o.b)("li",null,Object(o.b)(l.a,{to:"https://www.st.com/en/development-tools/stsw-link004.html",target:"_blank",mdxType:"Link"},"STM32 ST-LINK Utility")))),Object(o.b)("h2",{id:"installing-touchgfx-generator-in-cubemx"},"Installing TouchGFX Generator in CubeMX"),Object(o.b)("p",null,"To install X-CUBE-TOUCHGFX through ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.st.com/en/development-tools/stm32cubemx.html"}),"CubeMX"),', start by selecting "Manage Embedded Software Packages" under "Help" (or press ',Object(o.b)(c.a,{text:"Alt + U",mdxType:"Shortcut"}),")."),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/manage-packages.png",caption:"Help -> Manage embedded software packages",mdxType:"Figure"}),Object(o.b)("p",null,'Click "Refresh" to get an updated list of available packages.'),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/refresh.png",caption:"Refresh to update available packages",mdxType:"Figure"}),Object(o.b)("p",null,'Go to the "STMicroelectronics" tab. Scroll until you find "X-CUBE-TOUCHGFX" and expand the node. Check the checkbox for "TouchGFX Generator" and click "Install Now". This will download the package and bring up the license agreement. '),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/install-now.png",caption:"Finding the TouchGFX Generator package",mdxType:"Figure"}),Object(o.b)("p",null,'Read and accept the license agreement and click "Finish" to install TouchGFX Generator inside CubeMX. '),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/license-agreement.png",caption:"Accepting the license agreement",mdxType:"Figure"}),Object(o.b)("p",null,"The X-CUBE-TOUCHGFX distribution is now unpacked to the following path:\xa0"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"C:\\Users\\<user>\\STM32Cube\\Repository\\Packs\\STMicroelectronics\\X-CUBE-TOUCHGFX\\4.13.0\n")),Object(o.b)(a.a,{imageSource:"/img/Introduction/installation/package-location.png",caption:"Location of the X-CUBE-TOUCHGFX package",mdxType:"Figure"}))}g.isMDXComponent=!0},212:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=r,b=p["".concat(a,".").concat(h)]||p[h]||d[h]||o;return n?i.a.createElement(b,c({ref:t},s,{components:n})):i.a.createElement(b,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[h]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},213:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=a},214:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(i.Component);t.a=a},215:function(e,t,n){"use strict";var r=n(1),i=n(0),o=n.n(i),a=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,l=e.href,s=n||l,u=c.test(s),p=Object(i.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,u]),s&&u?o.a.createElement(a.b,Object(r.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(s),p.current=!0)},innerRef:function(e){var n,r;h&&e&&u&&(n=e,r=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:s})):o.a.createElement("a",Object(r.a)({},e,{href:s}))}},217:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=n(214),c=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement(a.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(i.Component);t.a=l},238:function(e,t,n){"use strict";var r=n(5),i=n(0),o=n.n(i),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return o.a.createElement("code",{class:"shortcut"},this.props.text)},t}(i.Component);t.a=a}}]);