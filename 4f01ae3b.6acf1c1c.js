(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var o=n(1),i=n(9),a=(n(0),n(244)),r=n(245),s=n(253),c=n(247),d={id:"widgets-and-containers",title:"Widgets and Containers"},h={id:"Development/UIDevelopment/WorkingWithTouchGFX/widgets-and-containers",title:"Widgets and Containers",description:"import Figure from '@site/components/Figure'\r",source:"@site/docs\\Development\\UIDevelopment\\WorkingWithTouchGFX\\widgets-and-containers.mdx",permalink:"/docs/Development/UIDevelopment/WorkingWithTouchGFX/widgets-and-containers",sidebar:"docs",previous:{title:"Using IDEs with TouchGFX",permalink:"/docs/Development/UIDevelopment/WorkingWithTouchGFX/using-ides-with-touchgfx"},next:{title:"Simulator",permalink:"/docs/Development/UIDevelopment/WorkingWithTouchGFX/simulator"}},p=[{value:"Widgets",id:"widgets",children:[]},{value:"Containers",id:"containers",children:[]}],u={rightToc:p},l="wrapper";function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(l,Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This section of the documentation will go over two of the most fundamental concepts of building a TouchGFX applications: widgets and containers. These are two of the building blocks you will be using throughout the development of your UI. Both include premade components supplied with TouchGFX, while also being open-ended enough to support the creation of custom implementations. "),Object(a.b)("h2",{id:"widgets"},"Widgets"),Object(a.b)("p",null,"TouchGFX and the TouchGFX Designer tool supplies numerous standard widgets which users can freely use to build their UI, such a  ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Miscellaneous/TextArea"}),"TextArea"),", ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Buttons/Button"}),"Button")," and ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/UIComponents/Images/TextureMapper"}),"TextureMapper"),". But on a fundamental level, a widget in TouchGFX is simply an abstract definition of something that can be drawn on the screen and can be interacted with.  "),Object(a.b)(r.a,{imageSource:"/img/Development/UIDevelopment/UIComponents/Button/WidgetAppearance.png",caption:"A Button widget with an Image widget as background",mdxType:"Figure"}),Object(a.b)("p",null,"Using TouchGFX Designer, users can add any widgets they want to their screens and customize it how they want with the supplied properties specific to each widget. Widgets can also be grouped by using the different types of containers that TouchGFX also supplies."),Object(a.b)("p",null,"You can also add widgets in user code if you want by using the ",Object(a.b)("inlineCode",{parentName:"p"},"add(widget_instance_name);")," function or adding it to a container by using the containers add function e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"myContainer.add(widget_instance_name);"),". The order in which you add the widgets will determine the z-order. The widget added last will appear front-most on the screen."),Object(a.b)("p",null,"The coordinates of a widget are always relative to its parent node which is either the root container (the screen) or a container."),Object(a.b)(s.a,{mdxType:"FurtherReading"},"You can create your own widgets to meet any specific need you might have. Read more on this in the ",Object(a.b)(c.a,{to:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CustomWidgets",mdxType:"Link"},"Custom Widgets section"),"."),Object(a.b)("h2",{id:"containers"},"Containers"),Object(a.b)("p",null,"A container is a component in TouchGFX that can contain child nodes, such as widgets and other containers. "),Object(a.b)("p",null,"In TouchGFX Designer, containers are found under the Containers category in the Widgets tab and adding widgets to a containers is done by dragging widgets into the container in the tree view."),Object(a.b)("p",null,"The z-order of children is determined by the order in which children are added to the container - the child added last will appear front-most on the screen."),Object(a.b)("p",null,"Since the position of widgets in TouchGFX is defined relative to their parents, changing the position of a parent container will also move the children accordingly. "),Object(a.b)("p",null,"Containers act as viewports, meaning that only the parts of the children that intersect with the geometry of the container will be visible."),Object(a.b)("p",null,"In the animation below, you can see how the viewport aspect of containers work. First we see the outline of the container of which the button is a child:"),Object(a.b)(r.a,{imageSource:"/img/Development/UIDevelopment/WorkingWithTouchGFX/widgets-and-containers/viewport.gif",caption:"A Container acting as a viewport",mdxType:"Figure"}),Object(a.b)(s.a,{mdxType:"FurtherReading"},"You can create your own container to meet any specific need you might have. Read more on this in the ",Object(a.b)(c.a,{to:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/custom-containers",mdxType:"Link"},"Custom Containers section"),"."))}m.isMDXComponent=!0}}]);