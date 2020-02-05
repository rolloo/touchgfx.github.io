(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{209:function(e,t,n){"use strict";n.r(t);var o=n(1),a=n(9),i=n(0),r=n.n(i),c=n(210),d=n(211),s=n(5),l=n(212),u=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return r.a.createElement(l.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:u},this.props.children)},t}(i.Component),p=n(215),g=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){return r.a.createElement(l.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:g},this.props.children)},t}(i.Component),m=n(214),f=n(217),w=n(213),y=n(218);n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return v})),n.d(t,"rightToc",(function(){return j})),n.d(t,"default",(function(){return C}));var O={id:"CustomWidgets",title:"Custom Widgets"},v={id:"Development/UIDevelopment/TouchGFXEngineFeatures/CustomWidgets",title:"Custom Widgets",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\UIDevelopment\\TouchGFXEngineFeatures\\CustomWidgets.mdx",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CustomWidgets",sidebar:"docs",previous:{title:"Canvas Widgets",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CanvasWidgets"},next:{title:"Backend Communication",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/BackendCommunication"}},j=[{value:"When to use the custom widget approach",id:"when-to-use-the-custom-widget-approach",children:[]},{value:"In TouchGFX Designer",id:"in-touchgfx-designer",children:[]},{value:"In code",id:"in-code",children:[{value:"Your own custom widget",id:"your-own-custom-widget",children:[]},{value:"Partial drawing",id:"partial-drawing",children:[]},{value:"Solid area",id:"solid-area",children:[]},{value:"Example source code",id:"example-source-code",children:[]}]},{value:"Modifying standard widgets/containers",id:"modifying-standard-widgetscontainers",children:[]}],x={rightToc:j},T="wrapper";function C(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)(T,Object(o.a)({},x,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"When creating applications you may need widgets that are not part of the TouchGFX distribution.",Object(c.b)("br",{parentName:"p"}),"\n","TouchGFX\xa0have a few ways in which you can create your own graphical elements. The simplest way is to use\xa0the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"###TODO_LINK_TO_CUSTOM_CONTAINER_SECTION"}),"Custom Container approach"),", where you combine already existing widgets into your own. This article, however, deals with a more advanced approach where you can essentially create a widget that has full control of the framebuffer and thus is able to draw precisely what you want."),Object(c.b)("h2",{id:"when-to-use-the-custom-widget-approach"},"When to use the custom widget approach"),Object(c.b)("p",null,"Creating custom widgets is not the most typical way to create your own widget. The custom container approach is preferable if it suits your needs, but sometimes this approach is not enough. When you need full control of the framebuffer you need to\xa0use the custom widget approach."),Object(c.b)("p",null,"A few examples of widgets that could and should be created using the custom widget approach are:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"A sepia filter"),Object(c.b)("li",{parentName:"ul"},"A mandelbrot fractal widget"),Object(c.b)("li",{parentName:"ul"},"A widget that shows data from a file, for example a gif animation.")),Object(c.b)("h2",{id:"in-touchgfx-designer"},"In TouchGFX Designer"),Object(c.b)("p",null,"TouchGFX Designer does not currently support the creation of custom widgets. As a result, you will need to write the code for the custom widget manually (refer to the remainder of this article on how to\xa0do this) and then insert the widget in the user code portion of your View."),Object(c.b)("h2",{id:"in-code"},"In code"),Object(c.b)("p",null,"You\xa0create your own custom widget by extending the ",Object(c.b)("inlineCode",{parentName:"p"},"Widget")," class. Doing this requires\xa0a bit more effort on the user's side, but will also give full control of all pixels drawn by the widget.",Object(c.b)("br",{parentName:"p"}),"\n","Your custom widget will not necessarily utilize any existing widgets but instead define how it should be drawn by specifying colors of pixels. The custom widget approach will in general also have a smaller memory footprint, which in some cases is of great importance."),Object(c.b)("p",null,"One example of a custom widget is a QR code widget. This particular widget is actually already implemented (located on our\xa0",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/QRCode"}),"GitHub"),"), but it makes for a good example, so we will walk through how to create it in the following section. In this example, a QR code widget is an NxN\xa0matrix of black and white pixels. The size of the widget and the color of each pixel will be determined at run time and depend on the information in a QR\xa0code data object."),Object(c.b)("p",null,"Here are two examples of how a QR\xa0code widget might look:"),Object(c.b)(d.a,{imageSource:"/img/Development/UIDevelopment/TouchGFXEngineFeatures/qr_examples.png",caption:"QR code widget examples",noShadow:!0,mdxType:"Figure"}),Object(c.b)(h,{mdxType:"Caution"},"It is possible to create the qr code widget with the custom container approach by having n*n black or white boxes as children of the container. However, this will take up a lot of memory, and will probably not be as efficient or flexible."),Object(c.b)(p.a,{mdxType:"Tip"},"The standard ",Object(c.b)(f.a,{text:"touchgfx::Button",mdxType:"InlineCode"})," (supplied with the framework) is created as a custom widget, not a custom container. This saves memory per button on your screen."),Object(c.b)("h3",{id:"your-own-custom-widget"},"Your own custom widget"),Object(c.b)("p",null,"In order to create your widget that extends the ",Object(c.b)("inlineCode",{parentName:"p"},"Widget")," class, you need to describe two things. "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The way your widget is drawn  "),Object(c.b)("li",{parentName:"ul"},"The part of your widget that is solid")),Object(c.b)("h3",{id:"partial-drawing"},"Partial drawing"),Object(c.b)("p",null,"Any widget, and therefore also your custom widget, needs to support partial drawing. This means that your widget should be able to draw only a part of itself."),Object(c.b)("p",null,"This is due to two points. It is often not necessary to redraw the entire screen but only parts of it. The algorithms of TouchGFX might split up the drawing of a screen into multiple partial drawings to minimize the global number of pixels drawn. This partial drawing of a screen, might then ask a widget to only draw itself partially."),Object(c.b)("p",null,"As an example our QR code widget needs to be able to support drawing only the highlighted part of itself."),Object(c.b)(d.a,{imageSource:"/img/Development/UIDevelopment/TouchGFXEngineFeatures/qr_partial_drawing.png",caption:"QR code widget partial drawing",noShadow:!0,mdxType:"Figure"}),Object(c.b)("p",null,"The way to do this in your code is by overriding the ",Object(c.b)("inlineCode",{parentName:"p"},"draw")," method:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"virtual void draw(const touchgfx::Rect& invalidatedArea) const\n{\n    //run through the pixels of the invalidated area\n    //draw a black pixel if the qr data object has a value at this position\n    //draw a white pixel otherwise\n}\n")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"invalidatedArea")," is the part of the widget that needs to be updated. In our QR code example the invalidated area is the highlighted area. The area is expressed in coordinates relative to the top left corner of the widget."),Object(c.b)(h,{mdxType:"Caution"},"It is the responsibility of the widget to draw inside the invalidated area. If you draw outside the invalidated area you will not get overall correct behaviour of your screens."),Object(c.b)(p.a,{mdxType:"Tip"},"The ",Object(c.b)(f.a,{text:"draw",mdxType:"InlineCode"})," method is ",Object(c.b)(f.a,{text:"const",mdxType:"InlineCode"})," because the optimized drawing algorithm might split up the drawing of a widget into multiple calls to draw. The ",Object(c.b)(f.a,{text:"const",mdxType:"InlineCode"})," assures that the widget is not moved, updated etc. in between these multiple ",Object(c.b)(f.a,{text:"draw",mdxType:"InlineCode"})," executions."),Object(c.b)("h3",{id:"solid-area"},"Solid area"),Object(c.b)("p",null,"Furthermore, a widget needs to be able to report how large a portion of itself is solid. Solid means that you can not see the things that are behind it on the screen. For instance, a standard red box is completely solid, whereas an image with an alpha value of 50% is completely non solid; you can see everything behind it."),Object(c.b)("p",null,"A solid widget will enable TouchGFX to speed up the drawing process. Since we do not have to draw the widgets below the solid widget, fewer pixels have to be drawn."),Object(c.b)("p",null,"To report the solid area in your code, override the ",Object(c.b)("inlineCode",{parentName:"p"},"getSolidRect")," method."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const;\n")),Object(c.b)("p",null,"Our QR code widget will be completely solid. You will not be able to see anything behind the black and white pixels. Therefore, we let the method return a rectangle the full size of the widget:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"virtual Rect getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n")),Object(c.b)("h3",{id:"example-source-code"},"Example source code"),Object(c.b)("p",null,"We end up with an application and a widget looking like this - depending on the data supplied:"),Object(c.b)(d.a,{imageSource:"/img/Development/UIDevelopment/TouchGFXEngineFeatures/qr_screenshot.png",caption:"QR code widget screenshot",noShadow:!0,mdxType:"Figure"}),Object(c.b)("p",null,"The complete code of the widget is shown below:"),Object(c.b)(y.a,{mdxType:"CodeHeader"},"gui/include/gui/common/QRCodeWidget.hpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"\n#ifndef QR_CODE_WIDGET_HPP\n#define QR_CODE_WIDGET_HPP\n\n#include <touchgfx/widgets/Widget.hpp>\n\nclass QRCodeWidget : public touchgfx::Widget\n{\npublic:\n    QRCodeWidget();\n\n    virtual void draw(const touchgfx::Rect& invalidatedArea) const;\n    virtual touchgfx::Rect getSolidRect() const;\n\n    void setQRCodeData(QRCodeData* data);\n    void setScale(uint8_t s);\n\nprivate:\n    void updateSize();\n\n    QRCodeData* data;\n    uint8_t scale;\n};\n#endif\n")),Object(c.b)("p",null,"In the header file, we define the widget as an extension of the ",Object(c.b)("inlineCode",{parentName:"p"},"touchgfx::Widget")," class. We override the ",Object(c.b)("inlineCode",{parentName:"p"},"draw")," and ",Object(c.b)("inlineCode",{parentName:"p"},"getSolidRect")," methods to define how our widget is drawn.",Object(c.b)("br",{parentName:"p"}),"\n","We declare methods for setting the data of the QR code and setting the scaling factor of the QR code."),Object(c.b)(y.a,{mdxType:"CodeHeader"},"gui/src/common/QRCodeWidget.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"#include <gui/common/QRCodeWidget.hpp>\n\nQRCodeWidget::QRCodeWidget() :\n    data(0),\n    scale(1)\n{\n}\n\nvoid QRCodeWidget::draw(const touchgfx::Rect& invalidatedArea) const\n{\n    if (!data)\n    {\n        return;\n    }\n\n    touchgfx::Rect absolute = getAbsoluteRect();\n\n    uint16_t* framebuffer = touchgfx::HAL::getInstance()->lockFrameBuffer();\n\n    for (int y = invalidatedArea.y; y < invalidatedArea.bottom(); y++)\n    {\n        for (int x = invalidatedArea.x; x < invalidatedArea.right(); x++)\n        {\n            framebuffer[absolute.x + x + (absolute.y + y) * touchgfx::HAL::DISPLAY_WIDTH] = \n              data->at(x / scale, y / scale) ? 0x0000 : 0xffff;\n        }\n    }\n\n    touchgfx::HAL::getInstance()->unlockFrameBuffer();\n}\n\ntouchgfx::Rect QRCodeWidget::getSolidRect() const\n{\n    return touchgfx::Rect(0, 0, getWidth(), getHeight());\n}\n\nvoid QRCodeWidget::setQRCodeData(QRCodeData* qrCode)\n{\n    data = qrCode;\n    updateSize();\n}\n\nvoid QRCodeWidget::setScale(uint8_t s)\n{\n    scale = s;\n    updateSize();\n}\n\nvoid QRCodeWidget::updateSize()\n{\n    if (data)\n    {\n        setWidth(data->getSize() * scale);\n        setHeight(data->getSize() * scale);\n    }\n}\n")),Object(c.b)("p",null,"The source file defines the ",Object(c.b)("inlineCode",{parentName:"p"},"draw")," method. This method steps through each of the pixels in the invalidated area and determines the color of the framebuffer based on the contents of the data object and the scaling factor."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"getSolidRect")," method reports the widget as completely solid."),Object(c.b)(h,{mdxType:"Caution"},"Note that we locked and unlocked the framebuffer as part of our ",Object(c.b)(f.a,{text:"draw",mdxType:"InlineCode"})," method. This is to make sure that the DMA is done drawing when we start drawing."),Object(c.b)("p",null,"The code also uses a small class/interface to access the data of the QR code:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-cpp"}),"class QRCodeData\n{\npublic:\n    uint8_t getSize();\n    bool at(uint8_t x, uint8_t y);\n};\n")),Object(c.b)(m.a,{mdxType:"FurtherReading"},"Check out the ",Object(c.b)(w.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/QRCode",target:"_blank",mdxType:"Link"},"QRCode")," and ",Object(c.b)(w.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/tree/master/widgets/Lens",target:"_blank",mdxType:"Link"},"Lens")," widgets at ",Object(c.b)(w.a,{to:"https://github.com/draupnergraphics/touchgfx-open-repository/",target:"_blank",mdxType:"Link"},"GitHub"),"."),Object(c.b)(b,{mdxType:"Try"},Object(c.b)("li",null,"Modify the qr code widget such that white pixels are completely transparent."),Object(c.b)("li",null,"Create a custom widget that displays a sepia filter, a mandelbrot fractal, a gif image or something else and send it our way or\xa0put it on GitHub your self."),Object(c.b)("li",null,"Consider which widgets are most easily done using custom containers and which widgets are most easily realized using the custom widget approach.")),Object(c.b)("h2",{id:"modifying-standard-widgetscontainers"},"Modifying standard widgets/containers"),Object(c.b)("p",null,"The source code for the standard widgets are included when installing TouchGFX. These can also be modified to fit with the needs of an application. The source code for the standard widgets and containers is located in the folder:"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{}),"touchgfx\\framework\\source\\touchgfx\n")),Object(c.b)("p",null,"In order to maintain backwards compatibility, the core library contains compiled versions of the standard widgets and containers. It is therefore not necessary to compile these files in your project."),Object(c.b)(h,{mdxType:"Caution"},"Modifying the standard widgets/containers directly is discouraged"),Object(c.b)("p",null,"The source code is primarily intended as inspiration and a way to learn about the inner workings of TouchGFX widgets. If you want something to behave differently than the standard implementation, it is possible to achieve this by either subclassing or creating custom containers, which is also the\nrecommended approach. "),Object(c.b)("p",null,"The reason for this recommendation is two-fold:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Firstly, you will make it more difficult to upgrade to newer TouchGFX versions, since you must manually merge any changes you did. "),Object(c.b)("li",{parentName:"ul"},"Secondly, you risk breaking the standard widgets and containers that are dependent on specific behavior.")),Object(c.b)("p",null,"Therefore, if it is necessary to modify a standard widget/container, we recommend you take a copy of it, rename it and use that instead of directly modifying the source code."),Object(c.b)("p",null,"That being said, you are free to do whatever you judge is right. If you add the source code for a standard widget into your project, your linker will choose this version instead of the one in the core library. As a result, you have access to modification of the standard widgets by adding the source code to your compilation."))}C.isMDXComponent=!0},210:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,g=u["".concat(r,".").concat(h)]||u[h]||p[h]||i;return n?a.a.createElement(g,c({ref:t},s,{components:n})):a.a.createElement(g,c({ref:t},s))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=g;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[h]="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},211:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?i.a.createElement("div",{class:"figure noshadow"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption)):i.a.createElement("div",{class:"figure"},i.a.createElement("img",{width:t,height:n,src:this.props.imageSource}),i.a.createElement("p",null,this.props.caption))},t}(a.Component);t.a=r},212:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return i.a.createElement("div",{class:e},i.a.createElement("div",{class:"highlight-heading"},i.a.createElement("h5",null,i.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),i.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(a.Component);t.a=r},213:function(e,t,n){"use strict";var o=n(1),a=n(0),i=n.n(a),r=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,d=e.href,s=n||d,l=c.test(s),u=Object(a.useRef)(!1),h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(a.useEffect)((function(){return!h&&l&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,l]),s&&l?i.a.createElement(r.b,Object(o.a)({},e,{onMouseEnter:function(){u.current||(window.docusaurus.preload(s),u.current=!0)},innerRef:function(e){var n,o;h&&e&&l&&(n=e,o=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:s})):i.a.createElement("a",Object(o.a)({},e,{href:s}))}},214:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=n(212),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(a.Component);t.a=d},215:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=n(212),c=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement(r.a,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:c},this.props.children)},t}(a.Component);t.a=d},217:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("code",null,this.props.text)},t}(a.Component);t.a=r},218:function(e,t,n){"use strict";var o=n(5),a=n(0),i=n.n(a),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return i.a.createElement("div",{class:"code-header"},i.a.createElement("div",null,i.a.createElement("h5",null,this.props.children)))},t}(a.Component);t.a=r}}]);