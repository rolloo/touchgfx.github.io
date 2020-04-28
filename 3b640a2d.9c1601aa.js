(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return h})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(9),i=(n(0),n(508)),o=n(511),l=n(514),c=n(522),b=n(515),s=n(516),p=n(517),d=n(518),u=n(513),h={id:"scrollable-container",title:"ScrollableContainer"},m={id:"development/ui-development/ui-components/containers/scrollable-container",title:"ScrollableContainer",description:"A ScrollableContainer is a [Container](/docs/development/ui-development/ui-components/containers/container) that allows its content to be scrolled both vertically and horizontally.\r",source:"@site/docs\\development\\ui-development\\ui-components\\containers\\scrollable-container.mdx",permalink:"/docs/development/ui-development/ui-components/containers/scrollable-container",sidebar:"docs",previous:{title:"Container",permalink:"/docs/development/ui-development/ui-components/containers/container"},next:{title:"SwipeContainer",permalink:"/docs/development/ui-development/ui-components/containers/swipe-container"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:g},O="wrapper";function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(O,Object(r.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ScrollableContainer is a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," that allows its content to be scrolled both vertically and horizontally."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-appearance.gif",caption:"ScrollableContainer running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The ScrollableContainer can be found in the Containers widget group in TouchGFX Designer."),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-components/scrollable-container/widget-group.png",caption:"ScrollableContainer in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a ScrollableContainer in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(c.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(p.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(c.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(c.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(c.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(p.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Scrolling")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(c.a,{name:"Enable horizontal scroll",mdxType:"Property"})," specifies if horizontal scrolling is enabled.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Enable vertical scroll",mdxType:"Property"})," specifies if vertical scrolling is enabled.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Show scrollbars",mdxType:"Property"})," specifies if the scrollbars should always should be visible.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Show scrollbars while scrolling",mdxType:"Property"})," specifies if the scrollbars should only be visible when the content is being scrolled.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"If 'Show scrollbars' is enabled this option is disregarded.",mdxType:"InlineNote"}),".",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Scrollbars Color",mdxType:"Property"})," specifies the color of the scrollbars.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"Scrollbars Alpha",mdxType:"Property"})," specifies the transparency of the scrollbars.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(c.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(c.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(c.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(c.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(c.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the ScrollableContainer are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific action")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Resize widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resize the widget.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget action")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move widget"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hide widget"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Show widget"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"A ScrollableContainer does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A ScrollableContainer is a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/containers/container"}),"Container")," type, and does not per default appear in the draw chain apart from the scrollbar rendering. Therefore, the performance is mostly dependent on the drawing performance of the children."),Object(i.b)("p",null,"For more general details on drawing performance, read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ScrollableContainer."),Object(i.b)(u.a,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nmainViewBase::mainViewBase()\n{\n    scrollableContainer.setPosition(115, 11, 250, 250);\n    scrollableContainer.enableHorizontalScroll(false);\n    scrollableContainer.setScrollbarsColor(touchgfx::Color::getColorFrom24BitRGB(0, 0, 0));\n    scrollableContainer.setScrollbarsPermanentlyVisible();\n    scrollableContainer.setScrollbarsVisible(false);\n    scrollableContainer.add(<widget_name>); //add a widget as child\n\n    add(scrollableContainer);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(i.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollableContainer class in user code. Remember to force a redraw by calling ",Object(i.b)(s.a,{text:"scrollableContainer.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the ScrollableContainer, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(i.b)(o.a,{imageSource:"/img/development/ui-development/ui-templates/scrollable-container-example.png",caption:"ScrollableContainer Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(l.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{link:"classes/classtouchgfx_1_1_scrollable_container",mdxType:"API"},"API reference for the ScrollableContainer class"))))}f.isMDXComponent=!0},509:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(a.Component);t.a=o},511:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("a",{href:this.props.imageSource,target:"_blank"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=o},513:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(a.Component);t.a=o},514:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(509),l=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)},t}(a.Component);t.a=c},515:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(509),l=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)},t}(a.Component);t.a=c},516:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=o},517:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},518:function(e,t,n){"use strict";n(519);var r=n(5),a=n(0),i=n.n(a),o=n(510),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(i.a.createElement(o.a,{to:e},this.props.children))},t}(a.Component);t.a=l},519:function(e,t,n){"use strict";n(520)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},520:function(e,t,n){var r=n(12),a=n(13),i=n(24),o=/"/g,l=function(e,t,n,r){var a=String(i(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),l+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},522:function(e,t,n){"use strict";n(523);var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},523:function(e,t,n){var r=n(25).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(10)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})}}]);