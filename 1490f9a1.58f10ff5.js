(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return g})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return O})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(244)),b=n(245),c=n(253),l=n(248),o=n(257),d=n(246),p=n(255),m=n(250),s=n(254),g={id:"TiledImage",title:"TiledImage"},u={id:"Development/UIDevelopment/UIComponents/Images/TiledImage",title:"TiledImage",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Images\\TiledImage.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/TiledImage",sidebar:"docs",previous:{title:"ScalableImage",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/ScalableImage"},next:{title:"AnimatedImage",permalink:"/docs/Development/UIDevelopment/UIComponents/Images/AnimatedImage"}},O=[{value:"Description",id:"description",children:[]},{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],j={rightToc:O},h="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(h,Object(a.a)({},j,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"description"},"Description"),Object(r.b)("p",null,"A TiledImage is a simple widget capable of showing a tiled bitmap. This means that when TiledImage is larger than the provided bitmap, the bitmap is repeated horizontally and vertically. The bitmap can be alpha-blended with the background and have areas of transparency."),Object(r.b)(b.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/TiledImage/WidgetAppearance.png",caption:"TiledImage running in the simulator",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The TiledImage can be found in the Images widget group in TouchGFX Designer."),Object(r.b)(b.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/TiledImage/WidgetGroup.png",caption:"TiledImage in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"The properties for a TiledImage in TouchGFX Designer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(d.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Location")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(r.b)(d.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Style")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(r.b)("br",null),Object(r.b)(d.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Image",mdxType:"Property"})," Specifies the image that should be used within the widget.",Object(r.b)("br",null),Object(r.b)(d.a,{text:"An image with a repeating pattern is recommended.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Offset")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," specify the offset of the image where the tile drawing should start.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Appearance")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(r.b)(d.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mixins")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(r.b)(l.a,{name:"Alpha",mdxType:"Property"})," value.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," values.",Object(r.b)("br",null),Object(r.b)("br",null))))),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the TiledImage are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Move widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Fade widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"A TiledImage does not emit any triggers."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"A TiledImage is dependent on image drawing, and is considered a fast performing widget on most platforms.",Object(r.b)("br",null),"\nA TiledImage redraws the same image multiple times to cover the area of the widget. Therefore, small source images result in a greater number of image draws."),Object(r.b)("p",null,"For more details on image drawing performance, read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a TiledImage."),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainViewBase.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    tiledImage.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_TEXTURES_IRONGRIP_ID));\n    tiledImage.setPosition(35, 36, 50, 50);\n    tiledImage.setOffset(0, 0);\n\n    add(tiledImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(p.a,{mdxType:"Tip"},"You can use these functions and the others available in the TiledImage class in user code. Remember to force a redraw by calling ",Object(r.b)(o.a,{text:"tiledImage.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"user-code"},"User Code"),Object(r.b)("p",null,"The following code example shows how to animate movement into a TiledImage by continuously adjusting the offset in the ",Object(r.b)(o.a,{text:"handleTickEvent()",mdxType:"InlineCode"}),":"),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainView.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{20-23}","{20-23}":!0}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    int x = tiledImage.getXOffset();\n    int y = tiledImage.getYOffset();\n    tiledImage.setOffset(x + 1, y + 1);\n    tiledImage.invalidate();\n}\n")),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(c.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(m.a,{link:"classtouchgfx_1_1_tiled_image.html",mdxType:"API"},"API reference for the TiledImage class"))))}f.isMDXComponent=!0},246:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=b},248:function(e,t,n){"use strict";n(249);var a=n(5),i=n(0),r=n.n(i),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(i.Component);t.a=b},249:function(e,t,n){var a=n(24).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(11)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},250:function(e,t,n){"use strict";n(251);var a=n(5),i=n(0),r=n.n(i),b=n(247),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return r.a.createElement(b.a,{to:e,target:"_blank"},this.props.children)},t}(i.Component);t.a=c},251:function(e,t,n){"use strict";n(252)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},252:function(e,t,n){var a=n(17),i=n(18),r=n(23),b=/"/g,c=function(e,t,n,a){var i=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(a).replace(b,"&quot;")+'"'),c+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);