(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(1),i=n(9),r=(n(0),n(229)),o=n(232),c=(n(230),n(249)),l=(n(233),n(234),n(237),n(235)),s={id:"LoadingImagesAtRuntime",title:"Loading Images at Runtime"},d={id:"Development/UIDevelopment/Scenarios/LoadingImagesAtRuntime",title:"Loading Images at Runtime",description:"import Link from '@docusaurus/Link';",source:"@site/docs\\Development\\UIDevelopment\\Scenarios\\LoadingImagesAtRuntime.mdx",permalink:"/docs/Development/UIDevelopment/Scenarios/LoadingImagesAtRuntime",sidebar:"docs",previous:{title:"Achieving Better Performance with CacheableContainer",permalink:"/docs/Development/UIDevelopment/Scenarios/AchievingBetterPerformanceWithCacheableContainer"},next:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/docs/Development/UIDevelopment/Scenarios/LoweringMemoryUsageWithPartialFrameBuffer"}},p=[{value:"Loading BMP file Example",id:"loading-bmp-file-example",children:[{value:"The BMP loader",id:"the-bmp-loader",children:[]}]},{value:"Configure memory for dynamic bitmaps",id:"configure-memory-for-dynamic-bitmaps",children:[]},{value:"Loading JPEG files",id:"loading-jpeg-files",children:[]}],u={rightToc:p},m="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(m,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This section describes how dynamic bitmaps can be used to create\napplications where some of the graphic content is read from files or\nother input at runtime. The dynamic bitmaps can be used to show\ne.g. image files from an SD-card."),Object(r.b)("p",null,"Read first about ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/DynamicBitmaps"}),"Dynamic Bitmaps")),Object(r.b)("p",null,"Recall that standard bitmaps are compiled into the application and\ntherefore must be available at compile time. The Dynamic Bitmap\nfeature allows you to read images from files at runtime, or even\ndownload images through an internet connection."),Object(r.b)("h2",{id:"loading-bmp-file-example"},"Loading BMP file Example"),Object(r.b)("p",null,"Here we will see how to use a BMP loader to load pixels from a Windows\nBMP file. The code for the loader is later in the article."),Object(r.b)("p",null,"Insert first an Image widget in the view. This widget will show the BMP:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),Object(r.b)("p",null,"Load the image date in setupScreen:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{7-8,13-14}","{7-8,13-14}":!0}),'void TemplateView::setupScreen()\n{\n    FILE* f = fopen("image.jpg", "rb");\n    uint16_t width, height;\n\n    //Get the image dimensions from the BMP file\n    BMPFileLoader::getBMP24Dimensions(f, width, height);\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of same dimension\n    bmpId = Bitmap::dynamicBitmapCreate(width, height, Bitmap::RGB565);\n\n    //Load pixels from BMP file to dynamic bitmap\n    BMPFileLoader::readBMP24File(Bitmap(bmpId), f);\n\n    //Make Image show the loaded bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n')),Object(r.b)("h3",{id:"the-bmp-loader"},"The BMP loader"),Object(r.b)("p",null,"Here is the code for a simple BMP file loader. It only supports 24bpp\nBMP files.  You may have to adjust the file system calls to match your\nsystem."),Object(r.b)(l.a,{mdxType:"CodeHeader"},"BMPFileLoader.hpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/hal/Types.hpp>\n#include <touchgfx/Bitmap.hpp>\n\nusing namespace touchgfx;\n\nclass BMPFileLoader\n{\npublic:\n    typedef void* FileHdl;\n\n    static void getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height);\n    static void readBMP24File(Bitmap bitmap, FileHdl fileHandle);\nprivate:\n    static int readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length);\n    static void seekFile(FileHdl hdl, uint32_t offset);\n};\n")),Object(r.b)(l.a,{mdxType:"CodeHeader"},"BMPFileLoader.cpp"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'#include <gui/common/BMPFileLoader.hpp>\n#include <touchgfx/Color.hpp>\n\nint BMPFileLoader::readFile(FileHdl hdl, uint8_t* const buffer, uint32_t length)\n{\n    uint32_t r = fread(buffer, 1, length, (FILE*)hdl);\n    if (r != length)\n    {\n        return 1;\n    }\n    return 0;\n}\n\nvoid BMPFileLoader::seekFile(FileHdl hdl, uint32_t offset)\n{\n    fseek((FILE*)hdl, offset, SEEK_SET);\n}\n\nvoid BMPFileLoader::getBMP24Dimensions(FileHdl fileHandle, uint16_t& width, uint16_t& height)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n}\n\nvoid BMPFileLoader::readBMP24File(Bitmap bitmap, FileHdl fileHandle)\n{\n    uint8_t data[50];\n    seekFile(fileHandle, 0);\n    readFile(fileHandle, data, 26); //read first part of header.\n\n    const uint32_t offset = data[10] | (data[11] << 8) | (data[12] << 16) | (data[12] << 24);\n    const uint32_t width = data[18] | (data[19] << 8) | (data[20] << 16) | (data[21] << 24);\n    const uint32_t height = data[22] | (data[23] << 8) | (data[24] << 16) | (data[25] << 24);\n\n    readFile(fileHandle, data, offset - 26); //read rest of header.\n\n    //get dynamic bitmap boundaries\n    const uint32_t buffer_width = bitmap.getWidth();\n    const uint32_t buffer_height = bitmap.getHeight();\n\n    const uint32_t rowpadding = (4 - ((width * 3) % 4)) % 4;\n\n    const Bitmap::BitmapFormat format = bitmap.getFormat();\n    uint8_t* const  buffer8  = Bitmap::dynamicBitmapGetAddress(bitmap.getId());\n    uint16_t* const buffer16 = (uint16_t*)buffer8;\n\n    for (uint32_t y = 0; y < height; y++)\n    {\n        for (uint32_t x = 0; x < width; x++)\n        {\n            if (x % 10 == 0) //read data every 10 pixels = 30 bytes\n            {\n                if (x + 10 <= width) //read 10\n                {\n                    readFile(fileHandle, data, 10 * 3); //10 pixels\n                }\n                else\n                {\n                    readFile(fileHandle, data, (width - x) * 3 + rowpadding); //rest of line\n                }\n            }\n            //insert pixel, if within dynamic bitmap boundaries\n            if (x < buffer_width && ((height - y - 1) < buffer_height))\n            {\n                switch (format)\n                {\n                case Bitmap::RGB565:\n                    buffer16[x + (height - y - 1) * buffer_width] =\n                        touchgfx::Color::getColorFrom24BitRGB(data[(x % 10) * 3 + 2], data[(x % 10) * 3 + 1], data[(x % 10) * 3]);\n                    break;\n                case Bitmap::RGB888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 3 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        break;\n                    }\n                case Bitmap::ARGB8888:\n                    {\n                        //24 bit framebuffer\n                        const uint32_t inx = 4 * (x + (height - y - 1) * buffer_width);\n                        buffer8[inx + 0] = data[(x % 10) * 3 + 0];\n                        buffer8[inx + 1] = data[(x % 10) * 3 + 1];\n                        buffer8[inx + 2] = data[(x % 10) * 3 + 2];\n                        buffer8[inx + 3] = 255; //solid\n                        break;\n                    }\n                default:\n                    assert(!"Unsupported bitmap format in BMPFileLoader!");\n                }\n            }\n        }\n    }\n}\n')),Object(r.b)("p",null,"This code is for illustrative purposes. A more optimal reader for\nRGB888 can read directly from the file to the dynamic bitmap memory\n(remember to skip the row padding). The reader above reads 10 pixels\nfrom the BMP file to a temporary buffer. The pixels are then copied to\nthe bitmap while converting to the correct format."),Object(r.b)("h2",{id:"configure-memory-for-dynamic-bitmaps"},"Configure memory for dynamic bitmaps"),Object(r.b)("p",null,"Before you can create and use dynamic bitmaps you must configure\nTouchGFX. It is a prerequisite to provide a buffer and the maximum\nnumber of dynamic bitmaps (also for the simulator)."),Object(r.b)("p",null,"Here is an example for STM32F7xx where we allocate a buffer in\nexternal RAM: We wish to load and show a 24-bit bitmap of size\n320x240. The memory requirement is thus 320x240x3 = 230400.",Object(r.b)("br",{parentName:"p"}),"\n","We also need a little space for bookkeeping, so we allocate 232000\nbytes for the buffer."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"static uint32_t bmpCache = (uint32_t)(0xC00C0000); // SDRAM\nvoid touchgfx_init()\n{\n  HAL& hal = touchgfx_generic_init<STM32F7HAL>(dma, display, tc, 480, 272, (uint16_t*)bmpCache, 232000, 1);\n  ...\n}\n")),Object(r.b)("p",null,"The final argument is the maximum number of dynamic bitmaps, so adjust this according to your needs."),Object(r.b)(c.a,{mdxType:"Note"},"Note that in case of insufficient memory, the BitmapId returned by dynamicBitmapCreate will be BITMAP_INVALID."),Object(r.b)("h2",{id:"loading-jpeg-files"},"Loading JPEG files"),Object(r.b)("p",null,"An example on ",Object(r.b)(o.a,{target:"_blank",to:"https://github.com/touchgfx/touchgfx-open-repository/tree/master/app/example/JPEG_file_loader",mdxType:"Link"},"Github")," shows how to use LibJPEG to use JPEG-files. It uses a JPEGLoader class similar to the above BMPFileLoader."))}f.isMDXComponent=!0},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,f=p["".concat(o,".").concat(u)]||p[u]||m[u]||r;return n?i.a.createElement(f,c({ref:t},s,{components:n})):i.a.createElement(f,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},230:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,n=this.props.height;return e?r.a.createElement("div",{class:"figure noshadow"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption)):r.a.createElement("div",{class:"figure"},r.a.createElement("a",{href:this.props.imageSource,target:"_blank"},r.a.createElement("img",{width:t,height:n,src:this.props.imageSource})),r.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=o},231:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return r.a.createElement("div",{class:e},r.a.createElement("div",{class:"highlight-heading"},r.a.createElement("h5",null,r.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.a.createElement("div",{class:"highlight-content"},this.props.children))},t}(i.Component);t.a=o},232:function(e,t,n){"use strict";var a=n(1),i=n(0),r=n.n(i),o=n(34),c=/^\/(?!\/)/;t.a=function(e){var t,n=e.to,l=e.href,s=n||l,d=c.test(s),p=Object(i.useRef)(!1),u="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(i.useEffect)((function(){return!u&&d&&window.docusaurus.prefetch(s),function(){u&&t&&t.disconnect()}}),[s,u,d]),s&&d?r.a.createElement(o.b,Object(a.a)({},e,{onMouseEnter:function(){p.current||(window.docusaurus.preload(s),p.current=!0)},innerRef:function(e){var n,a;u&&e&&d&&(n=e,a=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),a())}))}))).observe(n))},to:s})):r.a.createElement("a",Object(a.a)({},e,{href:s}))}},233:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(231),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:c},this.props.children)},t}(i.Component);t.a=l},234:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("code",null,this.props.text)},t}(i.Component);t.a=o},235:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{class:"code-header"},r.a.createElement("div",null,r.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=o},237:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement("i",null,this.props.text)},t}(i.Component);t.a=o},249:function(e,t,n){"use strict";var a=n(5),i=n(0),r=n.n(i),o=n(231),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(o.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(i.Component);t.a=l}}]);