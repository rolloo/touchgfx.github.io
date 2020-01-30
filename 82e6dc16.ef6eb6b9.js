(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return m})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return O}));var i=n(1),a=n(9),r=(n(0),n(209)),o=n(214),c=n(210),l=n(215),b=n(211),p=n(213),s=n(212),d=n(217),u={id:"DigitalClock",title:"DigitalClock"},m={id:"Development/UIDevelopment/UIComponents/Miscellaneous/DigitalClock",title:"DigitalClock",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Miscellaneous\\DigitalClock.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/DigitalClock",sidebar:"docs",previous:{title:"AnalogClock",permalink:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/AnalogClock"},next:{title:"General UI Component Performance",permalink:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Time",id:"time",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],h={rightToc:g},j="wrapper";function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)(j,Object(i.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A DigitalClock in TouchGFX is a widget that allows an application to display time with digital text, as opposed to the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/AnalogClock.mdx"}),"AnalogClock")," which displays time using analog clock hands."),Object(r.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/DigitalClock/WidgetAppearance.gif",caption:"DigitalClock running in the simulator (sped up footage)",mdxType:"Figure"}),Object(r.b)("h2",{id:"widget-group"},"Widget Group"),Object(r.b)("p",null,"The DigitalClock can be found in the Miscellaneous widget group in TouchGFX Designer."),Object(r.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/DigitalClock/WidgetGroup.png",caption:"DigitalClock in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Group")),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Name")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(r.b)(s.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Location")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"W",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(r.b)(s.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Time")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Use Am/Pm",mdxType:"Property"})," specifies if time should be in 12h or 24h format.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Display Leading Zero for Hours",mdxType:"Property"})," specifies if leading zero for hours should be enabled.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Display Seconds",mdxType:"Property"})," specifies if showing seconds is enabled.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Initial Time",mdxType:"Property"})," specifies the initial time the clock shows.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Text")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Single Use",mdxType:"Property"})," or ",Object(r.b)(l.a,{name:"Resource",mdxType:"Property"})," specifies which text resource to use for the DigitalClock.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"Text must have a wildcard to function properly.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Appearance")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Text Color",mdxType:"Property"})," specifies the color of the text in the DigitalClock.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget.",Object(r.b)("br",null),Object(r.b)(s.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Mixins")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)(l.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(r.b)(l.a,{name:"Alpha",mdxType:"Property"})," value.",Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(l.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(r.b)(l.a,{name:"X",mdxType:"Property"})," and ",Object(r.b)(l.a,{name:"Y",mdxType:"Property"})," values.")))),Object(r.b)("h3",{id:"time"},"Time"),Object(r.b)("p",null,"The Time property group is used to adjust how time is displayed in the application by changing different properties. You can choose to use 24-hour time or 12-hour AM/PM by toggling ",Object(r.b)(l.a,{name:"Use Am/Pm",mdxType:"Property"}),". Toggling ",Object(r.b)(l.a,{name:"Display Leading Zero for Hours",mdxType:"Property"})," specifies how hours below 10 are displayed (e.g. 09:10:00 or 9:10:00) and ",Object(r.b)(l.a,{name:"Display Seconds",mdxType:"Property"})," toggles the display of seconds on/off (e.g. 9:10:00 or 9:10)."),Object(r.b)("p",null,"Choosing Am/Pm also results in a slight code generation change. Instead of using the following function in Analog Clock to initialize the time:",Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),Object(r.b)("p",null,"The following function is used when using 12-hour notation:",Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),Object(r.b)("p",null,"To update the time which the clock displays, one of the following functions can be used.",Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),Object(r.b)("br",null),"\n",Object(r.b)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),Object(r.b)("h2",{id:"interactions"},"Interactions"),Object(r.b)("p",null,"The actions and triggers supported by the DigitalClock are described in the following sections."),Object(r.b)("h3",{id:"actions"},"Actions"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Standard widget action")),Object(r.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Description")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Move widget")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Fade widget")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Hide widget")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"td"},"Show widget")),Object(r.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(r.b)("h3",{id:"triggers"},"Triggers"),Object(r.b)("p",null,"A DigitalClock does not emit any triggers."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"A DigitalClock consists of a ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/TextArea"}),"TextArea"),", which does not impact performance in any meaningful way. Therefore, a DigitalClock is considered a fast performing widget on most platforms."),Object(r.b)("p",null,"For more details on drawing performance, read the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"generated-code"},"Generated Code"),Object(r.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up the DigitalClock."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"<ScreenName>ViewBase.cpp")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <texts/TextKeysAndLanguages.hpp>\n\nmainViewBase::mainViewBase()\n{\n    digitalClock.setPosition(75, 88, 331, 97);\n    digitalClock.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 30, 65));\n    digitalClock.setTypedText(touchgfx::TypedText(T_SINGLEUSEID2));\n    digitalClock.displayLeadingZeroForHourIndicator(true);\n    digitalClock.setDisplayMode(touchgfx::DigitalClock::DISPLAY_24_HOUR);\n    digitalClock.setTime24Hour(7, 7, 0);\n\n    add(digitalClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),Object(r.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the DigitalClock class in user code. Remember to force a redraw by calling ",Object(r.b)(p.a,{text:"digitalClock.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(r.b)("h3",{id:"user-code"},"User Code"),Object(r.b)("p",null,"The following example shows how to setup the clock to start."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mainView.hpp")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int digitalHours;\n    int digitalMinutes;\n    int digitalSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"mainView.cpp")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    digitalHours = digitalClock.getCurrentHour();\n    digitalMinutes = digitalClock.getCurrentMinute();\n    digitalSeconds = digitalClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++digitalSeconds >= 60)\n        {\n            digitalSeconds = 0;\n            if (++digitalMinutes >= 60)\n            {\n                digitalMinutes = 0;\n                if (++digitalHours >= 24)\n                {\n                    digitalHours = 0;\n                }\n            }\n        }\n\n        // Update the clock\n        digitalClock.setTime24Hour(digitalHours, digitalMinutes, digitalSeconds);\n    }\n}\n")),Object(r.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(r.b)("p",null,"To further explore the DigitalClock, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(r.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/ClockExample.png",caption:"Clock Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(r.b)("h2",{id:"api-reference"},"API Reference"),Object(r.b)(c.a,{mdxType:"FurtherReading"},Object(r.b)("li",null,Object(r.b)(d.a,{link:"classtouchgfx_1_1_digital_clock.html",mdxType:"API"},"API reference for the DigitalClock class"))))}O.isMDXComponent=!0},210:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),o=n(208),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=l},211:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),o=n(208),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=l},212:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},213:function(e,t,n){"use strict";var i=n(5),a=n(0),r=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=o},215:function(e,t,n){"use strict";n(216);var i=n(5),a=n(0),r=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},216:function(e,t,n){var i=n(24).f,a=Function.prototype,r=/^\s*function ([^ (]*)/;"name"in a||n(11)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(r)[1]}catch(e){return""}}})},217:function(e,t,n){"use strict";n(218);var i=n(5),a=n(0),r=n.n(a),o=n(220),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return r.a.createElement(o.a,{to:e,target:"_blank"},this.props.children)},t}(a.Component);t.a=c},218:function(e,t,n){"use strict";n(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,n){var i=n(17),a=n(18),r=n(23),o=/"/g,c=function(e,t,n,i){var a=String(r(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(i).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),i(i.P+i.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);