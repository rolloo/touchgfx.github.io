(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{483:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return g})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(508)),c=n(511),o=n(514),m=n(522),l=n(516),p=n(517),b=n(515),d=n(518),s=n(513),u={id:"animated-image",title:"AnimatedImage"},g={id:"development/ui-development/ui-components/images/animated-image",title:"AnimatedImage",description:"An AnimatedImage is capable of running an animation from start to end using a range of images sharing a common identifier. It is capable doing a single animation or looping the animation until stopped or paused.\r",source:"@site/docs\\development\\ui-development\\ui-components\\images\\animated-image.mdx",permalink:"/docs/development/ui-development/ui-components/images/animated-image",sidebar:"docs",previous:{title:"TiledImage",permalink:"/docs/development/ui-development/ui-components/images/tiled-image"},next:{title:"TextureMapper",permalink:"/docs/development/ui-development/ui-components/images/texture-mapper"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],O={rightToc:h},j="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(j,Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"An AnimatedImage is capable of running an animation from start to end using a range of images sharing a common identifier. It is capable doing a single animation or looping the animation until stopped or paused."),Object(r.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-appearance.gif",caption:"AnimatedImage running in the simulator",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The AnimatedImage can be found in the Images widget group in TouchGFX Designer."),Object(r.b)(c.a,{imageSource:"/img/development/ui-development/ui-components/animated-image/widget-group.png",caption:"AnimatedImage in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("p",null,"The properties for a AnimatedImage in TouchGFX Designer."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(p.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Location")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(m.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(m.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(r.b)("br",null),Object(r.b)(p.a,{text:"The size of a AnimatedImage is taken from the size of the associated images and cannot be altered except by changing the images.",mdxType:"InlineNote"})," ",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(r.b)(p.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Image")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"First Image",mdxType:"Property"})," and ",Object(r.b)(m.a,{name:"Last Image",mdxType:"Property"})," specify the first and last images in the range of images used for the animation.",Object(r.b)("br",null),Object(r.b)(p.a,{text:"The images used must have an identifier e.g. img_01.png, img_02.png, img_03.png, img_04.png, img_05.png, img_06.png, img_07.png, etc.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Animation")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"Start on load",mdxType:"Property"})," specifies if the animation should start as soon as the screen is loaded.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"Reverse Animation",mdxType:"Property"})," specifies if the images used for the animation should be run in reverse order.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"Loop Animation",mdxType:"Property"})," specifies if the animation should run continuously.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"Update Interval",mdxType:"Property"})," specifies the the amount of time that will pass between each image in the animation.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Appearance")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(r.b)(p.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mixins")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)(m.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(r.b)(m.a,{name:"Alpha",mdxType:"Property"})," value.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(m.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(r.b)(m.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(m.a,{name:"Y",mdxType:"Property"})," values.")))),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the AnimatedImage are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Move widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Fade widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Trigger")),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Animation is done")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An AnimatedImage has completed its animation.")))),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"An AnimatedImage is dependent on image drawing, and is considered a fast performing widget on most platforms.",Object(r.b)("br",null),"\nAn AnimatedImage draws images according to the ",Object(r.b)(m.a,{name:"Update Interval",mdxType:"Property"}),". Therefore, a lower ",Object(r.b)(m.a,{name:"Update Interval",mdxType:"Property"})," results in more image draws."),Object(r.b)("p",null,"For more details on image drawing performance, read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/development/ui-development/ui-components/general-ui-component-performance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an AnimatedImage."),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainViewBase.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n\n    image.setXY(0, 0);\n    image.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_BACKGROUNDS_MAIN_BG_TEXTURE_480X272PX_ID));\n\n    animatedImage.setXY(0, -104);\n    animatedImage.setBitmaps(BITMAP_BUTTERFLY_01_ID, BITMAP_BUTTERFLY_72_ID);\n    animatedImage.setUpdateTicksInterval(2);\n    animatedImage.startAnimation(false, true, true);\n\n    add(image);\n    add(animatedImage);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the AnimatedImage class in user code. Remember to force a redraw by calling ",Object(r.b)(l.a,{text:"animatedImage.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"user-code"},"User Code"),Object(r.b)("p",null,"The following code example shows how to set up the callback of an AnimatedImage when an animation is done:"),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainView.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprotected:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<mainView, const touchgfx::AnimatedImage&> animatedImageAnimationDoneCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src);\n};\n\n#endif // MAINVIEW_HPP\n")),Object(r.b)(s.a,{mdxType:"CodeHeader"},"mainView.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView():\n    animatedImageAnimationDoneCallback(this, &mainView::animatedImageAnimationDoneCallbackHandler)\n{\n\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    animatedImage.setDoneAction(animatedImageAnimationDoneCallback);\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::animatedImageAnimationDoneCallbackHandler(const touchgfx::AnimatedImage& src)\n{\n    if (&src == &animatedImage)\n    {\n        //execute code whenever the animation of animatedImage stops\n    }\n}\n")),Object(r.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(r.b)("p",null,"To further explore the AnimatedImage, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(r.b)(c.a,{imageSource:"/img/development/ui-development/ui-templates/animated-image-example.png",caption:"AnimatedImage Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(o.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(d.a,{link:"classes/classtouchgfx_1_1_animated_image",mdxType:"API"},"API reference for the AnimatedImage class"))))}f.isMDXComponent=!0},509:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=c},511:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=c},513:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=c},514:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=n(509),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(c.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)},t}(i.Component);t.a=m},515:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=n(509),o=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(c.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)},t}(i.Component);t.a=m},516:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=c},517:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=c},518:function(e,t,n){"use strict";n(519);var a=n(5),i=n(0),r=n.n(i),c=n(510),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="/docs/api/"+this.props.link;return(r.a.createElement(c.a,{to:e},this.props.children))},t}(i.Component);t.a=o},519:function(e,t,n){"use strict";n(520)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},520:function(e,t,n){var a=n(12),i=n(13),r=n(24),c=/"/g,o=function(e,t,n,a){var i=String(r(e)),o="<"+t;return""!==n&&(o+=" "+n+'="'+String(a).replace(c,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(o),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},522:function(e,t,n){"use strict";n(523);var a=n(5),i=n(0),r=n.n(i),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(i.Component);t.a=c},523:function(e,t,n){var a=n(25).f,i=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in i||n(10)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})}}]);