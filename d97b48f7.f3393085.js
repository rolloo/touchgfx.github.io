(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return j}));var i=n(1),r=n(9),a=(n(0),n(209)),c=n(214),l=n(210),o=n(215),s=n(211),p=n(213),b=n(212),d=n(217),m={id:"ScrollList",title:"ScrollList"},u={id:"Development/UIDevelopment/UIComponents/Containers/ScrollList",title:"ScrollList",description:"import Figure from '@site/components/Figure'",source:"@site/docs\\Development\\UIDevelopment\\UIComponents\\Containers\\ScrollList.mdx",permalink:"/docs/Development/UIDevelopment/UIComponents/Containers/ScrollList",sidebar:"docs",previous:{title:"ModalWindow",permalink:"/docs/Development/UIDevelopment/UIComponents/Containers/ModalWindow"},next:{title:"ScrollWheel",permalink:"/docs/Development/UIDevelopment/UIComponents/Containers/ScrollWheel"}},h=[{value:"Widget Group",id:"widget-group",children:[]},{value:"Properties",id:"properties",children:[{value:"Item Templates",id:"item-templates",children:[]}]},{value:"Interactions",id:"interactions",children:[{value:"Actions",id:"actions",children:[]},{value:"Triggers",id:"triggers",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Examples",id:"examples",children:[{value:"Generated Code",id:"generated-code",children:[]},{value:"User Code",id:"user-code",children:[]},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",children:[]}]},{value:"API Reference",id:"api-reference",children:[]}],g={rightToc:h},O="wrapper";function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)(O,Object(i.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ScrollList is a scrollable menu consisting of a number of items and a number of widgets, which are dynamically updated as they are scrolled into view. The ScrollList is also able to invoke callbacks when interacting with the items in the ScrollList."),Object(a.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/ScrollList/WidgetAppearance.gif",caption:"ScrollList running in the simulator",mdxType:"Figure"}),Object(a.b)("h2",{id:"widget-group"},"Widget Group"),Object(a.b)("p",null,"The ScrollList can be found in the Containers widget group in TouchGFX Designer."),Object(a.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/ScrollList/WidgetGroup.png",caption:"ScrollList in TouchGFX Designer",mdxType:"Figure"}),Object(a.b)("h2",{id:"properties"},"Properties"),Object(a.b)("p",null,"The properties for a ScrollList in TouchGFX Designer."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Property Group")),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Property Descriptions")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Name")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"Name",mdxType:"Property"})," of the widget. ",Object(a.b)(b.a,{text:"Name is the unique identifier used in TouchGFX Designer and code.",mdxType:"InlineNote"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Type")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"Type",mdxType:"Property"})," specifies if ScrollList is oriented vertically or horizontally")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Location")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(a.b)(o.a,{name:"Y",mdxType:"Property"})," specify the top left corner of the widget relative to its parent.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"W",mdxType:"Property"})," and ",Object(a.b)(o.a,{name:"H",mdxType:"Property"})," specify the width and height of the widget.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"Visible",mdxType:"Property"})," specifies the visibility of the widget. ",Object(a.b)(b.a,{text:"Making the widget invisible also disables interacting with the widget through the screen.",mdxType:"InlineNote"}))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Item Template")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"Item Template",mdxType:"Property"})," specifies which CustomContainer to use as template.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"Number of Items",mdxType:"Property"})," specifies the number of items present in the ScrollList.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Animation")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"Easing",mdxType:"Property"})," and ",Object(a.b)(o.a,{name:"Easing Option",mdxType:"Property"})," specify which easing equation to use for animations.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"Swipe Acc.",mdxType:"Property"})," and ",Object(a.b)(o.a,{name:"Drag Acc.",mdxType:"Property"})," specify the acceleration when scrolling.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Mixins")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)(o.a,{name:"Draggable",mdxType:"Property"})," specifies if the widget is draggable at runtime.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"ClickListener",mdxType:"Property"})," specifies if the widget emits a callback when clicked.",Object(a.b)("br",null),Object(a.b)("br",null),Object(a.b)(o.a,{name:"MoveAnimator",mdxType:"Property"})," specifies if the widget can animate changes to ",Object(a.b)(o.a,{name:"X",mdxType:"Property"})," and ",Object(a.b)(o.a,{name:"Y",mdxType:"Property"})," values.")))),Object(a.b)("h3",{id:"item-templates"},"Item Templates"),Object(a.b)("p",null,"The items in a ScrollList are based on a concept called ",Object(a.b)(o.a,{name:"Item Template",mdxType:"Property"})," which is a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"###TODO_CUSTOM_CONTAINER_LINK"}),"CustomContainer")," that serves as a base for the graphical elements for the items in the ScrollList.\nBefore creating a ScrollList, a Custom Container should be created to have an Item Template for the ScrollList."),Object(a.b)("p",null,"After having created the ScrollList the CustomContainer can be selected under the property ",Object(a.b)(o.a,{name:"Item Template",mdxType:"Property"}),". Specifying the ",Object(a.b)(o.a,{name:"Item Template",mdxType:"Property"})," results in the ScrollList resizing to fit with the size property that is not in the scrollable direction (width for vertical ScrollLists and height for horizontal ScrollLists) of the selected Custom Container.\nChanging the other size property (height for vertical and width for horizontal) determines the number of items visible."),Object(a.b)("h2",{id:"interactions"},"Interactions"),Object(a.b)("p",null,"The actions and triggers supported by the ScrollList are described in the following sections."),Object(a.b)("h3",{id:"actions"},"Actions"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Standard widget action")),Object(a.b)("th",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"th"},"Description")))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Move widget")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Hide widget")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),Object(a.b)("strong",{parentName:"td"},"Show widget")),Object(a.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),Object(a.b)("h3",{id:"triggers"},"Triggers"),Object(a.b)("p",null,"A ScrollList does not emit any triggers."),Object(a.b)("h2",{id:"performance"},"Performance"),Object(a.b)("p",null,"A ScrollList is a ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Containers/Container"}),"Container")," type, and does not per default appear in the draw chain. Therefore, the performance is wholly dependent on the childrens drawing performance."),Object(a.b)("p",null,"For more details on drawing performance, read the ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/GeneralUIComponentPerformance"}),"General UI Component Performance")," section."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("h3",{id:"generated-code"},"Generated Code"),Object(a.b)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a ScrollList."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    updateItemCallback(this, &Screen1ViewBase::updateItemCallbackHandler)\n{\n    scrollList.setPosition(140, 10, 200, 252);\n    scrollList.setHorizontal(false);\n    scrollList.setCircular(false);\n    scrollList.setEasingEquation(touchgfx::EasingEquations::backEaseOut);\n    scrollList.setSwipeAcceleration(10);\n    scrollList.setDragAcceleration(10);\n    scrollList.setNumberOfItems(20);\n    scrollList.setPadding(0, 0);\n    scrollList.setSnapping(false);\n    scrollList.setDrawableSize(50, 2);\n    scrollList.setDrawables(scrollListListItems, updateItemCallback);\n\n    add(scrollList);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n    scrollList.initialize();\n    for (int i = 0; i < scrollListListItems.getNumberOfDrawables(); i++)\n    {\n        scrollListListItems[i].initialize();\n    }\n}\n\nvoid Screen1ViewBase::updateItemCallbackHandler(touchgfx::DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex)\n{\n    if (items == &scrollListListItems)\n    {\n        touchgfx::Drawable* d = items->getDrawable(containerIndex);\n        TextContainer* cc = (TextContainer*)d;\n        scrollListUpdateItem(*cc, itemIndex);\n    }\n}\n')),Object(a.b)(s.a,{mdxType:"Tip"},"You can use these functions and the others available in the ScrollList class in user code. Remember to force a redraw by calling ",Object(a.b)(p.a,{text:"scrollList.invalidate()",mdxType:"InlineCode"})," if you change the appearance of the widget."),Object(a.b)("h3",{id:"user-code"},"User Code"),Object(a.b)("p",null,"After the graphical elements for the ScrollList and its properties are set, user code can be written to update the items in the ScrollList. The header file for the ",Object(a.b)("inlineCode",{parentName:"p"},"Screen1ViewBase")," class which is generated by TouchGFX Designer is shown below:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"ScreenViewBase.hpp")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp",metastring:"{8-11}","{8-11}":!0}),"class ScreenViewBase : public touchgfx::View\n{\npublic:\n    ScreenViewBase();\n    virtual ~ScreenViewBase() {}\n    virtual void setupScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n    {\n        // Override and implement this function in Screen\n    }\n\nprotected:\n    FrontendApplication& application() {\n         return *static_cast<FrontendApplication*>(Application::getInstance());\n    }\n    touchgfx::BoxWithBorder boxWithBorder;\n    touchgfx::ScrollList scrollList;\n    touchgfx::DrawableListItems<CustomContainer, 6> scrollListListItems;\nprivate:\n    void updateItemCallbackHandler(DrawableListItemsInterface* items, int16_t containerIndex, int16_t itemIndex);\n    touchgfx::Callback<ScreenViewBase, DrawableListItemsInterface*, int16_t, int16_t> updateItemCallback;\n};\n")),Object(a.b)("p",null,"When TouchGFX Designer generates the code for ScrollList, the function ",Object(a.b)("inlineCode",{parentName:"p"},"scrollListUpdateItem"),", highlighted above, is created for the user to override and update the items in the ScrollList. The function is called each time an item in the ScrollList needs updating, thereby ensuring that an item is updated before it becomes visible. The ",Object(a.b)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," has two parameters, which are used to identify the item being updated and to update it. The parameter ",Object(a.b)("inlineCode",{parentName:"p"},"itemIndex")," contains the index value of the item, which is used to identify which item is being updated. The parameter ",Object(a.b)("inlineCode",{parentName:"p"},"item")," is a reference to a CustomContainer object which is a visible item in the ScrollList. Updating the graphics for the parameter ",Object(a.b)("inlineCode",{parentName:"p"},"item")," results in an update to the render for a visible item in the ScrollList."),Object(a.b)("p",null,"An example integration of ",Object(a.b)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," is shown below:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Screen1View.hpp")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"#ifndef SCREEN1_VIEW_HPP\n#define SCREEN1_VIEW_HPP\n\n#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include <gui/screen1_screen/ScreenPresenter.hpp>\n\nclass Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void scrollListUpdateItem(CustomContainer& item, int16_t itemIndex);\nprotected:\n};\n\n#endif // SCREEN1_VIEW_HP\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Screen1View.cpp")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n}\n\nvoid Screen1View::tearDownScreen()\n{\n    Screen1ViewBase::tearDownScreen();\n}\n\nvoid Screen1View::scrollListUpdateItem(CustomContainer& item, int16_t itemIndex)\n{\n    item.setValue(itemIndex);\n}\n")),Object(a.b)("p",null,"In the header file ",Object(a.b)("inlineCode",{parentName:"p"},"Screen1View.hpp"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"scrollListUpdateItem")," function is overidden and then implemented in ",Object(a.b)("inlineCode",{parentName:"p"},"Screen1View.cpp"),"."),Object(a.b)("p",null,"The goal of this example is to update the text in the Item Template with the index value of the items which are visible, like the example shown ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Containers/ScrollList"}),"in the beginning of this section"),". Since the Item Template is based on the CustomContainer, a ",Object(a.b)("inlineCode",{parentName:"p"},"setValue")," function is created for the CustomContainer. The setValue function is able to take the ",Object(a.b)("inlineCode",{parentName:"p"},"itemIndex")," parameter and update the text in the item template. Calling setvalue for the parameter item will cause the items to update their appearance, thereby showing their index value."),Object(a.b)("h3",{id:"touchgfx-designer-examples"},"TouchGFX Designer Examples"),Object(a.b)("p",null,"To further explore the ScrollList, try creating a new application within TouchGFX Designer with one of the following UI templates:"),Object(a.b)(c.a,{imageSource:"/img/Development/UIDevelopment/UITemplates/ScrollWheelandListExample.png",caption:"ScrollWheel and List Example UI template in TouchGFX Designer",mdxType:"Figure"}),Object(a.b)("h2",{id:"api-reference"},"API Reference"),Object(a.b)(l.a,{mdxType:"FurtherReading"},Object(a.b)("li",null,Object(a.b)(d.a,{link:"classtouchgfx_1_1_scroll_list.html",mdxType:"API"},"API reference for the ScrollList class"))))}j.isMDXComponent=!0},210:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),c=n(208),l=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement(c.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)},t}(r.Component);t.a=o},211:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),c=n(208),l=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement(c.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:l},this.props.children)},t}(r.Component);t.a=o},212:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("i",null,this.props.text)},t}(r.Component);t.a=c},213:function(e,t,n){"use strict";var i=n(5),r=n(0),a=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("code",null,this.props.text)},t}(r.Component);t.a=c},215:function(e,t,n){"use strict";n(216);var i=n(5),r=n(0),a=n.n(r),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return a.a.createElement("i",null,this.props.name)},t}(r.Component);t.a=c},216:function(e,t,n){var i=n(24).f,r=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in r||n(11)&&i(r,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},217:function(e,t,n){"use strict";n(218);var i=n(5),r=n(0),a=n.n(r),c=n(220),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e="/api/"+this.props.link;return a.a.createElement(c.a,{to:e,target:"_blank"},this.props.children)},t}(r.Component);t.a=l},218:function(e,t,n){"use strict";n(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,n){var i=n(17),r=n(18),a=n(23),c=/"/g,l=function(e,t,n,i){var r=String(a(e)),l="<"+t;return""!==n&&(l+=" "+n+'="'+String(i).replace(c,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(l),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}}}]);