(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{192:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(1),o=a(9),i=(a(0),a(244)),s=a(245),r=(a(260),a(255),a(259),a(253),a(257),a(247),a(254)),l={id:"UsingNonMemoryMappedFlash",title:"Using Non-Memory Mapped Flash for storing images"},c={id:"Development/UIDevelopment/Scenarios/UsingNonMemoryMappedFlash",title:"Using Non-Memory Mapped Flash for storing images",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\Development\\UIDevelopment\\Scenarios\\UsingNonMemoryMappedFlash.mdx",permalink:"/docs/Development/UIDevelopment/Scenarios/UsingNonMemoryMappedFlash",sidebar:"docs",previous:{title:"Creating Dynamic L8 Images",permalink:"/docs/Development/UIDevelopment/Scenarios/CreatingDynamicL8Images"},next:{title:"Known Issues",permalink:"/docs/miscellaneous/known-issues"}},p=[{value:"Copying bitmap data from flash to cache",id:"copying-bitmap-data-from-flash-to-cache",children:[]},{value:"The BitmapDatabase table",id:"the-bitmapdatabase-table",children:[]},{value:"Linker script modifications",id:"linker-script-modifications",children:[]},{value:"Modifying the BlockCopy function",id:"modifying-the-blockcopy-function",children:[]},{value:"Linking images to RAM",id:"linking-images-to-ram",children:[]}],h={rightToc:p},d="wrapper";function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(d,Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this section we will discuss how to link all your images to a\nbinary file that you can put in a non-memory mapped flash and how to\nuse that file at runtime together with the bitmap cache.",Object(i.b)("br",{parentName:"p"}),"\n","TouchGFX cannot draw bitmaps that are stored in non-memory mapped\nflash, but by caching the bitmaps in RAM we can make the bitmaps\nuseable in the application."),Object(i.b)("p",null,"See the article ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/CachingBitmaps"}),"Caching Bitmaps"),"\nfor a general discussion on the bitmap cache."),Object(i.b)("p",null,"In this article we assume that you have setup a bitmap cache, and\nthat you want to store your bitmaps in non-memory mapped flash. This\ncan be e.g. USB storage, NAND flash etc."),Object(i.b)("p",null,"The goal is to link the images to a specific address, copy the images\nto a file, and help TouchGFX to copy from the file to the cache."),Object(i.b)("h3",{id:"copying-bitmap-data-from-flash-to-cache"},"Copying bitmap data from flash to cache"),Object(i.b)("p",null,"Recall that when you cache a bitmap, TouchGFX copies the pixels from\nthe original location to the bitmap cache."),Object(i.b)("p",null,"This copying is done by calling this method from the HAL class:"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"HAL.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"bool HAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n")),Object(i.b)("p",null,"If your bitmaps are stored in normal addressable flash (like internal\nflash or memory mapped external flash), then the normal blockCopy\nfunction provided in the TouchGFX library is fine, and you do not need\nto do anything."),Object(i.b)("p",null,"On the other hand, if your bitmaps is stored in storage that is not\naddressable, e.g. a filesystem, then the normal implementation is not\nsufficient and you need to provide an updated version that is able to\nread from your specific flash storage."),Object(i.b)("p",null,"But first we need to make sure that our bitmaps is linked to a fixed\naddress."),Object(i.b)("h2",{id:"the-bitmapdatabase-table"},"The BitmapDatabase table"),Object(i.b)("p",null,"All bitmaps in TouchGFX is generated to .cpp files in the folder\ngenerated/images/src. Here the bitmaps are represented as byte\narrays."),Object(i.b)("p",null,"These arrays are compiled by the C++ compiler as any other\nsource code file and are linked into the application."),Object(i.b)("p",null,"Here is a screenshot of a simple application with a Button and a\nTextureMapper showing a rotating logo:"),Object(i.b)(s.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/UsingNonMemoryMappedFlash/ScreenShot.png",caption:"Button and TextureMapper",mdxType:"Figure"}),Object(i.b)("p",null,"This application uses 3 images: Button_Pressed, Button_Released, and Logo."),Object(i.b)("p",null,"These 3 bitmaps are converted to .cpp files and linked in as part of\nthe application. The images are referenced in a table called the\nbitmap_database. This table is located in the file\nBitmapDatabase.cpp. Here is the table from the above example (some details removed):"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"BitmapDatabase.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5}","{5-5}":!0}),"extern const unsigned char _blue_buttons_round_edge_small[];\nextern const unsigned char _blue_buttons_round_edge_small_pressed[];\nextern const unsigned char _blue_logo_touchgfx_logo[];\n\nconst touchgfx::Bitmap::BitmapData bitmap_database[] =\n{\n    { _blue_buttons_round_edge_small, ... },\n    { _blue_buttons_round_edge_small_pressed, ... },\n    { _blue_logo_touchgfx_logo, ... }\n};\n\n")),Object(i.b)("p",null,"The arrays declared first are the arrays containing the pixels of the\nindividual bitmaps. These arrays are defined in other .cpp files. The\nbitmap_database array is holding the addresses of these\narrays. TouchGFX uses this array to find the address of the pixels of\na bitmap."),Object(i.b)("p",null,"When the programmer requests a bitmap to be cached, TouchGFX finds the\naddress of the bitmap in flash (in the bitmap_database array) and\ncopies data from here."),Object(i.b)("h2",{id:"linker-script-modifications"},"Linker script modifications"),Object(i.b)("p",null,"The linker selects an address for the bitmaps. This selection is based\non the section the bitmaps are placed in. All bitmaps in TouchGFX is\nby default put into the ",Object(i.b)("strong",{parentName:"p"},"ExtFlashSection"),"."),Object(i.b)("p",null,"The standard linker scripts (here for GCC) puts this section into\nflash together with other read-only data."),Object(i.b)("p",null,"In this example we will put the image data in the ExtFlashSection at\naddress ",Object(i.b)("strong",{parentName:"p"},"0x24000000"),". You can select any address that is otherwise\nunused (not part of the code or data address space)."),Object(i.b)("p",null,"First we define a new memory area (USB-flash at address 0x24000000),\nin addition to the normal internal FLASH and RAM areas:"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"STM32F746.ld"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"MEMORY\n{\n  RAM (xrw)      : ORIGIN = 0x20000000, LENGTH = 320K\n  FLASH (rx)     : ORIGIN = 0x08000000, LENGTH = 1024K\n  USB(r)         : ORIGIN = 0x24000000, LENGTH = 1M      \n}\n")),Object(i.b)("p",null,"Then we instruct the linker to put the ExtFlashSection in the USB area:"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"STM32F746.ld"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"ExtFlashSection :\n{\n   *(ExtFlashSection ExtFlashSection.*)\n} >USB\n")),Object(i.b)("p",null,"After linking we can check the addresses of the bitmaps by inspecting the map file (application.map). Here is the relevant part:"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"application.map"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"ExtFlashSection\n                0x24000000    0x23ec0\n *(ExtFlashSection ExtFlashSection.*)\n ExtFlashSection\n                0x24000000    0x10000 TouchGFX/build/.../Blue_Logo_touchgfx_logo.o\n                0x24000000                _blue_logo_touchgfx_logo\n ExtFlashSection\n                0x24010000     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small.o\n                0x24010000                _blue_buttons_round_edge_small\n ExtFlashSection\n                0x24019f60     0x9f60 TouchGFX/build/.../Blue_Buttons_Round_Edge_small_pressed.o\n                0x24019f60                _blue_buttons_round_edge_small_pressed\n")),Object(i.b)("p",null,"We can see here that the total size of the images is 0x23ec0 = 147.136\nbytes. The 3 arrays holding the bitmaps are located sequentially from\naddress 0x24000000."),Object(i.b)("p",null,"Let's now assume the you want the bitmap data to go to a SD-card. We can extract the binary data for the bitmaps from the .elf file with a simple objcopy command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ arm-none-eabi-objcopy.exe --dump-section ExtFlashSection=images.bin TouchGFX/build/bin/target.elf\n$ ls -l images.bin\n-rw-r--r-- 1 christef Administrators 147136 Feb 20 11:56 images.bin\n")),Object(i.b)("p",null,"This gives us a file (images.bin) containing the image byte arrays\nonly. This file can be copied to an USB flash, an SD-card, or\neven programmed to a flash chip."),Object(i.b)("p",null,"The idea is now that when TouchGFX asks for data above address\n0x24000000 we take the data from the images.bin file on the SD-card."),Object(i.b)("h2",{id:"modifying-the-blockcopy-function"},"Modifying the BlockCopy function"),Object(i.b)("p",null,"Recall that when you cache a bitmap to RAM TouchGFX calls HAL::BlockCopy to get the data."),Object(i.b)("p",null,"To get this linked to the data on your SD-card we can implement a new\nBlockCopy in your specific HAL class. Here we assume the class is\ncalled TouchGFXHAL (as generated by the TouchGFX Generator):"),Object(i.b)(r.a,{mdxType:"CodeHeader"},"TouchGFXHal.hpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"class TouchGFXHAL : public TouchGFXGeneratedHAL\n{\npublic:\n    ...\n    virtual bool blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes);\n}\n")),Object(i.b)(r.a,{mdxType:"CodeHeader"},"TouchGFXHal.cpp"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cpp"}),"// This function is called whenever a bitmap is cached. Must copy a number of bytes from the (non-memory-mapped) source \n// to the cache.\nbool TouchGFXHAL::blockCopy(void* RESTRICT dest, const void* RESTRICT src, uint32_t numBytes)\n{\n  // If requested data is located within the memory block we have assigned for ExtFlashSection, \n  // provide an implementation for data copying.\n  if (src >= 0x24000000 && src < 0x24100000)\n  {\n    void* dataOffset = src - 0x24000000;\n    // In this example we assume graphics is placed in SD card, and that we have an appropriate function\n    // for copying data from there.\n    sdcard_read(dest, dataOffset, numBytes); \n    return true;\n  }\n  else\n  {\n    // For all other addresses, just use the default implementation. \n    // This is important, as blockCopy is also used for other things in the core framework.\n    return HAL::blockCopy(dest, src, numBytes);\n  }\n}\n")),Object(i.b)("p",null,"Now you can start caching bitmaps from the SD-card."),Object(i.b)("p",null,"If TouchGFX tries to draw a bitmap that is not cached it will try to\nread the pixels from the address found in the ",Object(i.b)("inlineCode",{parentName:"p"},"bitmap_database"),"\ntable. This address will be in the range 0x24000000 - 0x24100000 and\nthe read will result in an exception."),Object(i.b)("h2",{id:"linking-images-to-ram"},"Linking images to RAM"),Object(i.b)("p",null,"If your available RAM is big enough to hold all the images (in the\nabove example that is more than 147.136 bytes) then you do not need to\nuse the bitmap cache to copy the images."),Object(i.b)("p",null,"The strategy is as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select a fixed address and range in RAM for the images"),Object(i.b)("li",{parentName:"ul"},"Remove that range from the RAM area in the linker script"),Object(i.b)("li",{parentName:"ul"},"Create a new area IMAGES with the selected address and size"),Object(i.b)("li",{parentName:"ul"},"Place the ExtFlashSection in IMAGES area"),Object(i.b)("li",{parentName:"ul"},"Link the application and check the .map file"),Object(i.b)("li",{parentName:"ul"},"Create the images.bin file from the application.elf"),Object(i.b)("li",{parentName:"ul"},"Before TouchGFX is started, copy the whole images.bin file from the SD-card to the selected address in RAM")),Object(i.b)("p",null,"This solution is simple, but has some drawbacks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The available RAM must be big enough to hold all the images"),Object(i.b)("li",{parentName:"ul"},"Start up time will be larger because of the copying from the SD-card (megabytes can take seconds)")))}b.isMDXComponent=!0},259:function(e,t,a){"use strict";var n=a(5),o=a(0),i=a.n(o),s=a(256),r=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(s.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:r},this.props.children)},t}(o.Component);t.a=l},260:function(e,t,a){"use strict";var n=a(5),o=a(0),i=a.n(o),s=a(256),r=i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},i.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return i.a.createElement(s.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)},t}(o.Component);t.a=l}}]);