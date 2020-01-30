(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{126:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return g})),n.d(t,"default",(function(){return j}));var r=n(1),a=n(9),i=(n(0),n(209)),o=n(214),c=n(210),b=n(211),s=n(215),l=n(213),p=n(212),d=n(217),m={id:"TextProgress",title:"TextProgress"},u={id:"Development/UIDevelopment/UIComponents/ProgressIndicators/TextProgress",title:"TextProgress",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\ProgressIndicators\\TextProgress.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/TextProgress",sidebar:"docs",previous:{title:"ImageProgress",permalink:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/ImageProgress"},next:{title:"LineProgress",permalink:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/LineProgress"}},g=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],h={rightToc:g},O="wrapper";function j(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(O,Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A TextProgress will display progress as a number with a given number of decimals. It shows the current progress by using a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/TextArea"}),"TextArea")," as the progress indicator on top of a background ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Images/Image"}),"Image"),". The ",Object(i.b)(s.a,{name:"Color",mdxType:"Property"}),", the ",Object(i.b)(s.a,{name:"Alpha",mdxType:"Property"})," and the ",Object(i.b)(s.a,{name:"Text",mdxType:"Property"})," of the TextArea can be configured.\nIt is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),Object(i.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/TextProgress/WidgetAppearance.gif",caption:"TextProgress running in the simulator",mdxType:"Figure"}),Object(i.b)("h2",{id:"widget-group"},"Widget Group"),Object(i.b)("p",null,"The TextProgress can be found in the Progress Indicators widget group."),Object(i.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/TextProgress/WidgetGroup.png",caption:"TextProgress in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("p",null,"The properties for a TextProgress in TouchGFX Designer."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Group")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(i.b)(p.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Location")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"The size of a TextProgress is determined by the size of the selected background image.",mdxType:"InlineNote"}),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(i.b)(p.a,{text:"Making the widget invisible also disables interacting with the widget through the screen",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Style")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Style",mdxType:"Property"})," specifies a predefined setup of the widget, that sets select properties to predefined values.",Object(i.b)("br",null),Object(i.b)(p.a,{text:"These styles contain images that are free to use",mdxType:"InlineNote"}),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Image")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Background",mdxType:"Property"})," specifies the background image.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Text")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Text",mdxType:"Property"}),' specifies the text displayed. The text field is automatically set to use a wildcard "<',">",' %" which means that the wildcard created will be filled with a number that fits the progress configuration. This wildcard is mandatory for the TextProgress to work correctly but any other text can be set before and/or after the wildcard. For more details on text configuration, refer to the ',Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"###TODO_LINK_TO_TEXT_SECTION"}),"Using texts and fonts")," section.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Text Position & Size")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the progress text relative to its TextProgress parent.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"W",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"H",mdxType:"Property"})," specify the width and height of the progress text.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Values")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Range Min",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"Range Max",mdxType:"Property"})," specify the minimum and maximum integer values of the indicator.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"Initial",mdxType:"Property"})," specifies the initial value of the progress indicator.",Object(i.b)(s.a,{name:"Steps Total",mdxType:"Property"})," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"Steps Min",mdxType:"Property"})," specifies the minimum steps the progress indicator shows.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"Number of Decimals",mdxType:"Property"})," specifies the precision required to show progress. The possible values are 0, 1 or 2.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Appearance")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Color",mdxType:"Property"})," specifies the color of the displayed text.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"Alpha",mdxType:"Property"})," specifies the transparency of the widget. ",Object(i.b)(p.a,{text:"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid.",mdxType:"InlineNote"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Mixins")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)(s.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"FadeAnimator",mdxType:"Property"})," specifies if the widget can animate changes to its ",Object(i.b)(s.a,{name:"Alpha",mdxType:"Property"})," value.",Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)(s.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(i.b)(s.a,{name:"X",mdxType:"Property"})," and ",Object(i.b)(s.a,{name:"Y",mdxType:"Property"})," values.")))),Object(i.b)("h2",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The actions and triggers supported by the TextProgress are described in the following sections."),Object(i.b)("h3",{id:"actions"},"Actions"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Widget specific actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Set value")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Standard widget actions")),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"th"},"Description")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Move widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Fade widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Hide widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Show widget")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(i.b)("h3",{id:"triggers"},"Triggers"),Object(i.b)("p",null,"The TextProgress widget does not emit any triggers."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"A TextProgress consists of a TextArea and a background Image. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the TextProgress is considered a fast widget on most platforms."),Object(i.b)("p",null,"For more details on text drawing performance, read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("h3",{id:"generated-code"},"Generated Code"),Object(i.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a TextProgress."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"textProgress.setXY(198, 119);\ntextProgress.setProgressIndicatorPosition(0, 0, 84, 34);\ntextProgress.setRange(0, 100);\ntextProgress.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 0, 0));\ntextProgress.setNumberOfDecimals(0);\ntextProgress.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\ntextProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_TEXT_PROGRESS_BG_SQUARE_ID));\ntextProgress.setValue(50);\n")),Object(i.b)("h3",{id:"user-code"},"User Code"),Object(i.b)("p",null,"The following example illustrates how to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/ProgressIndicators/TextProgress"}),"beginning of this article"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.hpp")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n    uint8_t counter;\n};\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Screen1View.cpp")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%15 == 0) // Every 0.25 seconds\n    {\n        int currentValue = textProgress.getValue();\n        int16_t max;\n        int16_t min;\n        textProgress.getRange(min, max);\n\n        if (currentValue == min)\n        {\n            increase = true;\n        }\n        else if (currentValue == max)\n        {\n            increase = false;\n        }\n\n        int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n        counter = 0;\n        textProgress.setValue(nextValue);\n    }\n}\n")),Object(i.b)(b.a,{mdxType:"Tip"},"You can use these functions and the others available in the TextProgress class in user code. Remember to force a redraw by calling ",Object(i.b)(l.a,{text:"textProgress1.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(i.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(i.b)("p",null,"To further explore the TextProgress, try creating a new application within TouchGFX Designer with the following UI template:"),Object(i.b)(o.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/ProgressIndicatorExample.png",caption:"ProgressIndicator Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"api-reference"},"API Reference"),Object(i.b)(c.a,{mdxType:"FurtherReading"},Object(i.b)("li",null,Object(i.b)(d.a,{link:"classtouchgfx_1_1_text_progress.html",mdxType:"API"},"API reference for the TextProgress class"))))}j.isMDXComponent=!0},210:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(208),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=b},211:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=n(208),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement(o.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=b},212:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(a.Component);t.a=o},213:function(e,t,n){"use strict";var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=o},215:function(e,t,n){"use strict";n(216);var r=n(5),a=n(0),i=n.n(a),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.name)},t}(a.Component);t.a=o},216:function(e,t,n){var r=n(24).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(11)&&r(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},217:function(e,t,n){"use strict";n(218);var r=n(5),a=n(0),i=n.n(a),o=n(220),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return i.a.createElement(o.a,{to:e,target:"_blank"},this.props.children)},t}(a.Component);t.a=c},218:function(e,t,n){"use strict";n(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,n){var r=n(17),a=n(18),i=n(23),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);