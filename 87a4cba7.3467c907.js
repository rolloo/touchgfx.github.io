(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{338:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),o=(a(0),a(508)),i=a(511),l=a(521),c={id:"07-flash-external-nonaddressable",title:"7. External flash in block mode",sidebar_label:"7. External flash in block mode"},s={id:"development/board-bring-up/how-to/07-flash-external-nonaddressable",title:"7. External flash in block mode",description:"## Motivation\r",source:"@site/docs\\development\\board-bring-up\\how-to\\07-flash-external-nonaddressable.mdx",permalink:"/docs/development/board-bring-up/how-to/07-flash-external-nonaddressable",sidebar_label:"7. External flash in block mode",sidebar:"docs",previous:{title:"6. External addressable flash",permalink:"/docs/development/board-bring-up/how-to/06-flash-external-addressable"},next:{title:"8. Hardware acceleration",permalink:"/docs/development/board-bring-up/how-to/08-hardware-acceleration"}},h=[{value:"Motivation",id:"motivation",children:[]},{value:"Goal",id:"goal",children:[{value:"Verification",id:"verification",children:[]}]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Do",id:"do",children:[{value:"Code",id:"code",children:[]}]}],d={rightToc:h},p="wrapper";function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(p,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"When working with Non-Memory-Mapped Flash memory, such as NAND flash, a driver must be developed in order for TouchGFX to use the assets stored within."),Object(o.b)("p",null,"Read more about this topic in the Using Non-Memory Mapped flash for storing ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/scenarios/using-non-memory-mapped-flash"}),"images"),"\nsection."),Object(o.b)(l.a,{mdxType:"Note"},"Skip this step if nonaddressable external flash is not relevant for your board bring up."),Object(o.b)("h2",{id:"goal"},"Goal"),Object(o.b)("p",null,"The goal of this step is to create a driver that can read a number of\nbytes from a location in the non-mapped flash memory and store it in\nan array."),Object(o.b)("h3",{id:"verification"},"Verification"),Object(o.b)("p",null,"The verification points for this section are:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Verification Point"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Rationale"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ensure contents of flash"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ensure that the contents read from the flash are correct.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Verify performance"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ensure that read performance is in accordance with MCU configuration.")))),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Information about the flash, typically from a datasheet."),Object(o.b)("li",{parentName:"ul"},"Information about the connections between the MCU and the external flash."),Object(o.b)("li",{parentName:"ul"},"The flash speed.")),Object(o.b)("h2",{id:"do"},"Do"),Object(o.b)("p",null,"Typically, the NAND flash is configured via the FMC on your MCU."),Object(o.b)(i.a,{imageSource:"/img/development/board-bring-up/nonmappedflash/cubemx-nand-fmc.png",noShadow:!0,mdxType:"Figure"}),Object(o.b)("p",null,"Remember to configure the GPIOs that are connected to the flash."),Object(o.b)("p",null,"A non-memory-mapped QSPI flash is configured in CubeMX like a memory-mapped QSPI flash."),Object(o.b)("h3",{id:"code"},"Code"),Object(o.b)("p",null,"Write code that can read a number of bytes from a specific address of\nthe Flash. An example of how this might look is provided below. The\nimplementation of the driver depends on your flash chip."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"void readNonaddressableFlash(uint32_t from, uint8_t *into, uint32_t n)\n{\n  ...\n}\n\nuint8_t bytes[1000];\n\n//read external Flash\nreadNonaddressableFlash(0xab001212, bytes, 1000);\n")),Object(o.b)("p",null,"This code will be used later to develop the TouchGFX abstraction layer."))}b.isMDXComponent=!0},509:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(r.Component);t.a=i},511:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(r.Component);t.a=i},521:function(e,t,a){"use strict";var n=a(5),r=a(0),o=a.n(r),i=a(509),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(r.Component);t.a=c}}]);