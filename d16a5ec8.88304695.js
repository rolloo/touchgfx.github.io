(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{199:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return h})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var o=n(1),i=n(9),a=(n(0),n(229)),r=n(271),c=n(235),s=n(233),l=n(230),u=n(232),p={id:"custom-containers",title:"Custom Containers"},h={id:"Development/UIDevelopment/TouchGFXEngineFeatures/custom-containers",title:"Custom Containers",description:"import YouTube from '@site/components/YouTube';\r",source:"@site/docs\\Development\\UIDevelopment\\TouchGFXEngineFeatures\\custom-containers.mdx",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/custom-containers",sidebar:"docs",previous:{title:"Custom Triggers and Actions",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CustomTriggersAndActions"},next:{title:"Canvas Widgets",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CanvasWidgets"}},d=[{value:"In TouchGFX Designer",id:"in-touchgfx-designer",children:[{value:"Composite Custom Containers",id:"composite-custom-containers",children:[]},{value:"Custom Triggers and Actions",id:"custom-triggers-and-actions",children:[]}]},{value:"In Code",id:"in-code",children:[{value:"Create a class that extends\xa0the touchgfx::Container\xa0class",id:"create-a-class-that-extends-the-touchgfxcontainer-class",children:[]},{value:"Declaring all children of the container as member variables",id:"declaring-all-children-of-the-container-as-member-variables",children:[]},{value:"Setting the width and height of the container",id:"setting-the-width-and-height-of-the-container",children:[]},{value:"Setting up each of the children",id:"setting-up-each-of-the-children",children:[]},{value:"Adding each of the children to the hierarchy, in the right order",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",children:[]},{value:"Implementing the desired behaviour via methods and callbacks",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",children:[]}]}],m={rightToc:d},b="wrapper";function g(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)(b,Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"When creating applications you might need a widget that is not\xa0found in\xa0the standard widget set included with TouchGFX."),Object(a.b)("p",null,"One way of creating your own widgets is using custom containers. A custom container is an object that contains other existing widgets and combines the visual appearance and behaviours of these widgets. It is not disssimilar to the classic composite design pattern and we also refer to the contained widgets as the children of the container."),Object(a.b)("p",null,"Drawing\xa0performance\xa0of custom containers will in general be very high. It will utilize the underlying drawing mechanisms of TouchGFX and will determine which parts of a container and the children needs to be redrawn automatically. This means\xa0that you do not need to worry about\xa0drawing performance when using containers. "),Object(a.b)("p",null,"However, there can be times where you need to reduce the footprint of a widget and in these scenarios, the more advanced approach called ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CustomWidgets"}),"Custom Widget")," might be preferable. "),Object(a.b)("h2",{id:"in-touchgfx-designer"},"In TouchGFX Designer"),Object(a.b)("p",null,"If you want to create and use custom containers in TouchGFX Designer,\xa0we give a general introduction to how you can use them in your projects in the video below:  "),Object(a.b)(r.a,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),Object(a.b)("h3",{id:"composite-custom-containers"},"Composite Custom Containers"),Object(a.b)("p",null,"It is possible to create a custom container that is composed of other custom containers. This can be a powerful way to construct components made up of smaller components. You can do this by adding instances of an already defined custom container found in the Widgets tab:"),Object(a.b)(l.a,{imageSource:"/img/Development/UIDevelopment/TouchGFXEngineFeatures/custom-containers/composite-custom-containers.png",caption:"Inserting instances of custom containers",mdxType:"Figure"}),Object(a.b)("p",null,"Note that TouchGFX Designer will help you to avoid inserting instances that would result in a circular reference such as adding a custom container instance to the definition of itself:"),Object(a.b)(l.a,{imageSource:"/img/Development/UIDevelopment/TouchGFXEngineFeatures/custom-containers/circular-reference.png",caption:"Potential circular reference disables the ability to insert an instance",mdxType:"Figure"}),Object(a.b)("h3",{id:"custom-triggers-and-actions"},"Custom Triggers and Actions"),Object(a.b)("p",null,"One of the powerful aspects to a custom container is the ability to define custom triggers (callbacks) and custom actions (methods). This means that you can define integral behaviour to your custom container so it becomes more than just a reusable collection of widgets and enables communication with the rest of your application."),Object(a.b)(s.a,{mdxType:"FurtherReading"},"Read more about this functionality in the ",Object(a.b)(u.a,{to:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CustomTriggersAndActions",mdxType:"Link"},"Custom Triggers and Actions")," section."),Object(a.b)("h2",{id:"in-code"},"In Code"),Object(a.b)("p",null,"In this section we will create a custom container in code. The steps are as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create a class that extends\xa0the touchgfx::Container\xa0class"),Object(a.b)("li",{parentName:"ul"},"Declaring all children of the container as member variables"),Object(a.b)("li",{parentName:"ul"},"Setting the width and height of the container"),Object(a.b)("li",{parentName:"ul"},"Setting up each of the children"),Object(a.b)("li",{parentName:"ul"},"Adding each of the children to the hierarchy, in the right order"),Object(a.b)("li",{parentName:"ul"},"Implementing the desired behaviour via methods and callbacks")),Object(a.b)("p",null,"We will start from scratch and build upon the code until we end up with a simple fully functional custom container."),Object(a.b)("h3",{id:"create-a-class-that-extends-the-touchgfxcontainer-class"},"Create a class that extends\xa0the touchgfx::Container\xa0class"),Object(a.b)("p",null,"Start by creating a ",Object(a.b)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp")," header file with the code below. Use C++ inheritance to gain access to the methods and members of ",Object(a.b)("inlineCode",{parentName:"p"},"touchgfx::Container")," (remember to include the header file for ",Object(a.b)("inlineCode",{parentName:"p"},"Container.hpp"),"):"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),Object(a.b)("h3",{id:"declaring-all-children-of-the-container-as-member-variables"},"Declaring all children of the container as member variables"),Object(a.b)("p",null,"Declare which widgets are going to compose your custom container in the header file. In this example we will just add a box ",Object(a.b)("inlineCode",{parentName:"p"},"myBox")," and a button ",Object(a.b)("inlineCode",{parentName:"p"},"myButton"),"."),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),Object(a.b)("h3",{id:"setting-the-width-and-height-of-the-container"},"Setting the width and height of the container"),Object(a.b)("p",null,"Create a cpp file ",Object(a.b)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," which includes the header file we just created. Use the ",Object(a.b)("inlineCode",{parentName:"p"},"setWidth()")," and ",Object(a.b)("inlineCode",{parentName:"p"},"setHeight()")," methods in the constructor to set whatever size you want for the custom container:"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),Object(a.b)("h3",{id:"setting-up-each-of-the-children"},"Setting up each of the children"),Object(a.b)("p",null,"Now we need to setup the properties for each widget in the constructor:"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n    \n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),Object(a.b)("h3",{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"},"Adding each of the children to the hierarchy, in the right order"),Object(a.b)("p",null,"Use the ",Object(a.b)("inlineCode",{parentName:"p"},"add()")," method in the constructor to add the widgets as children of the custom container:"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n    \n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),Object(a.b)("h3",{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"},"Implementing the desired behaviour via methods and callbacks"),Object(a.b)("p",null,"To add some behaviour to our custom container, we can define some methods and callbacks in ",Object(a.b)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),". In this example we define a method ",Object(a.b)("inlineCode",{parentName:"p"},"doSomething()")," whose sole purpose is to emit the callback ",Object(a.b)("inlineCode",{parentName:"p"},"somethingHappened"),":"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),Object(a.b)("p",null,"Then to add the behviour to our method and callback, implement them in the ",Object(a.b)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," file. For this simple surface level example, we will simply emit the ",Object(a.b)("inlineCode",{parentName:"p"},"somethingHappened")," callback, but you can customize this however you want:"),Object(a.b)(c.a,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),Object(a.b)(s.a,{mdxType:"FurtherReading"},"For a more detailed example on how to create and use a custom container, refer to ",Object(a.b)(u.a,{to:"/docs/Tutorials/Tutorial_04",mdxType:"Link"},"Tutorial 4: Creating a Scroll Wheel with custom behavior"),"."))}g.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(r,".").concat(h)]||p[h]||d[h]||a;return n?i.a.createElement(m,c({ref:t},l,{components:n})):i.a.createElement(m,c({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[h]="string"==typeof e?e:o,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?a.a.createElement("div",{class:"figure noshadow"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption)):a.a.createElement("div",{class:"figure"},a.a.createElement("a",{href:this.props.imageSource,target:"_blank"},a.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),a.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},231:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return a.a.createElement("div",{class:e},a.a.createElement("div",{class:"highlight-heading"},a.a.createElement("h5",null,a.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(i.Component);t.a=r},232:function(e,t,n){"use strict";var o=n(1),i=n(0),a=n.n(i),r=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,s=e.href,l=n||s,u=c.test(l),p=Object(i.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(l),function(){h&&t&&t.disconnect()}}),[l,h,u]),l&&u?a.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(l),p.current=!0)},innerRef:function(e){var n,o;h&&e&&u&&(n=e,o=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(o.a)({},e,{href:l}))}},233:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=n(231),c=a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=s},235:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{class:"code-header"},a.a.createElement("div",null,a.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},271:function(e,t,n){"use strict";var o=n(5),i=n(0),a=n.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="https://www.youtube.com/embed/"+function(e){var t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];var n=/https:\/\/youtu\.be\/(\w+)/;if(n.test(e))return n.exec(e)[1];return e}(this.props.url);return a.a.createElement("div",{class:"videoWrapper"},a.a.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))},t}(i.Component);t.a=r}}]);