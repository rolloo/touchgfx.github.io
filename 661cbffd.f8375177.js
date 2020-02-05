(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),i=(n(0),n(210)),a=n(211),c=(n(216),n(247)),s={id:"CanvasView",title:"Canvas View"},l={id:"Development/UIDevelopment/DesignerUserGuide/CanvasView",title:"Canvas View",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\Development\\UIDevelopment\\DesignerUserGuide\\CanvasView.mdx",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/CanvasView",sidebar:"docs",previous:{title:"Main Window",permalink:"/docs/Development/UIDevelopment/DesignerUserGuide/MainWindow"},next:{title:"Canvas Widgets",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CanvasWidgets"}},d=[{value:"Left Side Bar",id:"left-side-bar",children:[{value:"Widgets",id:"widgets",children:[]},{value:"Screens & Custom Containers",id:"screens--custom-containers",children:[]}]},{value:"Canvas",id:"canvas",children:[{value:"Widget Order Controls",id:"widget-order-controls",children:[]},{value:"Content Clipping Control",id:"content-clipping-control",children:[]},{value:"History Controls",id:"history-controls",children:[]},{value:"Zoom Controls",id:"zoom-controls",children:[]}]},{value:"Right Side Bar",id:"right-side-bar",children:[{value:"Properties",id:"properties",children:[]},{value:"Interactions",id:"interactions",children:[]}]}],p={rightToc:d},h="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(h,Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Canvas is the view used for building the graphical parts of an application by providing a visual representation of the interface as it will look while running. The dynamic aspects, like animations and interactions between parts of the system, are described here."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.png",caption:"The Canvas View of TouchGFX Designer",mdxType:"Figure"}),Object(i.b)("h2",{id:"left-side-bar"},"Left Side Bar"),Object(i.b)("p",null,"The side bar to the left contains a tab control, with navigation to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#widgets"}),"Widgets"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#screens"}),"Screens")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#custom-containers"}),"Custom Containers"),"."),Object(i.b)("h3",{id:"widgets"},"Widgets"),Object(i.b)("p",null,"The Widgets tab in the left side bar contains all available widgets grouped into categories. Each category can be expanded and collapsed by pressing the chevron next to the category name."),Object(i.b)("p",null,"Clicking a widget, will add it to the canvas of the Screen or Custom Container that is currently selected and visible. A widget can also be added by dragging the widget directly to the canvas."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/Widgets.png",caption:"The Widgets in the left side bar",mdxType:"Figure"}),Object(i.b)("h3",{id:"screens--custom-containers"},"Screens & Custom Containers"),Object(i.b)("p",null,"Both the Screens tab and Custom Containers tab contais a tree giving an overview of the widgets in each screen/custom container, every widget in the tree, that can contain other widgets can be collapsed by pressing the chevron next to the widgets name."),Object(i.b)("p",null,"The order of the screens, custom containers, and widgets within can be changed by dragging them below or above other screens, custom containers and widgets, the order can also be changed with the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#widget-order-controls"}),"widget order controls"),". Changing the order of widgets will determine which widgets is rendered on top of other widgets."),Object(i.b)("p",null,"Widgets that are container types, can have children added to them by dragging widget on top of them in the tree view. widgets can also be dragged from one screen to another."),Object(i.b)("p",null,"Select multiple widgets by pressing and holding CTRL while clicking widgets."),Object(i.b)("p",null,"Screens/Custom Containers can be added to the project by pressing the blue icon with a plus.\nThe Custom Containers can be added to screens and other custom containers from the Widgets tab, they can be found in their own category named 'Custom Containers'."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasViewTree.gif",caption:"The Screens tree in the left side bar",mdxType:"Figure"}),Object(i.b)("h2",{id:"canvas"},"Canvas"),Object(i.b)("p",null,"The center of the view contains the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#Canvas"}),"Canvas")," that displays the view of the screen or custom container that is currently selected."),Object(i.b)("p",null,"The canvas is surrounded by various controls: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#widget-order-controls"}),"Widget Order Controls"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#content-clipping-control"}),"Content Clipping Control"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#history-controls"}),"History Controls")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#zoom-controls"}),"Zoom Controls")),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/DesignerCanvasView.gif",caption:"The Canvas in the Canvas View",mdxType:"Figure"}),Object(i.b)("h3",{id:"widget-order-controls"},"Widget Order Controls"),Object(i.b)("p",null,"The z-order of widgets can be manipulated by the Bring Forward and Send Backwards controls, this also changes their order in the Screens or Custom Container tree."),Object(i.b)("p",null,"Bring Forward can also be triggered by pressing ",Object(i.b)(c.a,{text:"CTRL + F",mdxType:"Shortcut"})),Object(i.b)("p",null,"Send Backward can also be triggered by pressing ",Object(i.b)(c.a,{text:"CTRL + B",mdxType:"Shortcut"})),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/WidgetOrderControls.png",caption:"Bring Forward and Send Backwards controls in the Canvas View",mdxType:"Figure"}),Object(i.b)("h3",{id:"content-clipping-control"},"Content Clipping Control"),Object(i.b)("p",null,"In the canvas, widgets outside the borders of the Screen, Custom Container and children of container type widgets are clipped. The content clipping control toggles between clipping the widgets fully or showing them partially anyway."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ContentClippingToggleButton.png",caption:"Show/Hide Clipped Content control in the Canvas View",mdxType:"Figure"}),Object(i.b)("p",null,"In the image below a Box is placed halfway outside the borders of a screen, when the content clipping control is set to show clipped widgets, the Box will not be shown fully but instead have the part that is outside desaturated."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ClippedContent.png",caption:"Box widget appearance difference when showing and hiding clipped content",mdxType:"Figure"}),Object(i.b)("h3",{id:"history-controls"},"History Controls"),Object(i.b)("p",null,"The history of changes performed on the canvas can be undone and redone through the history controls, located at the top center of the canvas.",Object(i.b)("br",null),"Each screen and custom container maintains its own history, therefore to undo or redo a change performed on a certain screen, that specific screen has to be visible on the canvas."),Object(i.b)("p",null,"The History controls can also be triggered by pressing ",Object(i.b)(c.a,{text:"CTRL + Z",mdxType:"Shortcut"})," and ",Object(i.b)(c.a,{text:"CTRL + Y ",mdxType:"Shortcut"})),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/HistoryControls.png",caption:"History controls in the Canvas View",mdxType:"Figure"}),Object(i.b)("h3",{id:"zoom-controls"},"Zoom Controls"),Object(i.b)("p",null,"The zoom level of the canvas can be controlled with the zoom control in the bottom left corner of the canvas. To return to 100% zoom press the button next to the zoom slider label '1:1'."),Object(i.b)("p",null,"Zooming can also be achieved by using ",Object(i.b)(c.a,{text:"CTRL + Mouse Wheel",mdxType:"Shortcut"})),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/ZoomControls.png",caption:"Zoom controls in the Canvas View",mdxType:"Figure"}),Object(i.b)("h2",{id:"right-side-bar"},"Right Side Bar"),Object(i.b)("p",null,"The side bar to the right contains a tab control, with navigation to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#properties"}),"Properties")," of the widget currently selected, and the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#interactions"}),"Interactions")," of the Screen or Custom Container that is currently viewed on the canvas."),Object(i.b)("h3",{id:"properties"},"Properties"),Object(i.b)("p",null,"The Properties tab will show the properties of the Widget/Screen/Custom Container that is currently selected. The name of the selected component is displayed at the top of the properties list, next to the name there is a questionmark icon. Clicking this questionmark icon will expand the section, to display a text describing and a link to documentation for the component."),Object(i.b)("p",null,"Each of the sections in the properties list can be collapsed and expanded by pressing the chrevron next to the section name."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/PropertiesTab.png",caption:"Properties of Box",mdxType:"Figure"}),Object(i.b)("h3",{id:"interactions"},"Interactions"),Object(i.b)("p",null,"The Interactions tab will show the interactions of the Screen or Custom Container that is currently displayed on the canvas. The questionmark at the top can be pressed to reveal a description of interactions and a link to an article."),Object(i.b)("p",null,"Interactions can be added by pressing the blue button labeled 'Add Interaction'. Each interaction can be collapsed and expanded by pressing the chevron next to the name of the interaction. Next to the chevron, a cross is located, this cross will delete the interaction when clicked."),Object(i.b)(a.a,{imageSource:"/img/Development/UIDevelopment/DesignerUserGuide/CanvasView/InteractionsTab.png",caption:"Interactions of a Screen",mdxType:"Figure"}))}b.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,u=p["".concat(a,".").concat(h)]||p[h]||b[h]||i;return n?o.a.createElement(u,c({ref:t},l,{components:n})):o.a.createElement(u,c({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(o.Component);t.a=a},216:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("i",null,this.props.text)},t}(o.Component);t.a=a},247:function(e,t,n){"use strict";var r=n(5),o=n(0),i=n.n(o),a=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",{class:"shortcut"},this.props.text)},t}(o.Component);t.a=a}}]);