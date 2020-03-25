(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{161:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return h})),o.d(t,"metadata",(function(){return u})),o.d(t,"rightToc",(function(){return d})),o.d(t,"default",(function(){return b}));var i=o(1),a=o(9),n=(o(0),o(246)),r=o(247),l=o(249),s=(o(257),o(255)),c=(o(261),o(260)),h={id:"HardwareSelectionIntroduction",title:"Introduction"},u={id:"Development/HardwareSelection/HardwareSelectionIntroduction",title:"Introduction",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\HardwareSelection\\Introduction.mdx",permalink:"/docs/Development/HardwareSelection/HardwareSelectionIntroduction",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Development/DevelopmentIntroduction"},next:{title:"MCU",permalink:"/docs/Development/HardwareSelection/HardwareComponents/HardwareSelectionMCU"}},d=[{value:"Required components",id:"required-components",children:[]},{value:"Microcontroller",id:"microcontroller",children:[{value:"Internal memory requirements",id:"internal-memory-requirements",children:[]}]},{value:"Frame buffer memory",id:"frame-buffer-memory",children:[]},{value:"Non-volatile storage",id:"non-volatile-storage",children:[{value:"Memory requirements",id:"memory-requirements",children:[]}]},{value:"Platform Compatibility",id:"platform-compatibility",children:[]},{value:"Choosing touch input",id:"choosing-touch-input",children:[{value:"Resistive touch",id:"resistive-touch",children:[]},{value:"Capacitive touch",id:"capacitive-touch",children:[]}]}],p={rightToc:d},m="wrapper";function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(n.b)(m,Object(i.a)({},p,o,{components:t,mdxType:"MDXLayout"}),Object(n.b)(r.a,{imageSource:"/img/Development/HardwareSelection/activities_selected_000.png",caption:"Project activity",noShadow:!0,width:"600",mdxType:"Figure"}),Object(n.b)(r.a,{imageSource:"/img/Development/HardwareSelection/components_selected_000.png",caption:"Project component",noShadow:!0,width:"600",mdxType:"Figure"}),"There are many parameters to evaluate when choosing hardware platform. This article attempts to explain what the best choices of hardware components are strictly in relation to TouchGFX graphics rendering and the UI performance you expect to achieve for your product. Naturally there are other important factors such as cost",Object(n.b)("p",null,"Still this article mentions many potential pitfalls in hardware choice, and we very much recommend reading it before making a final decision on components."),Object(n.b)(s.a,{mdxType:"FurtherReading"},Object(n.b)("li",null,"See ",Object(n.b)(l.a,{to:"https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html",mdxType:"Link"},"STM32 32-bit Arm Cortex MCUs")," for available STM32 microcontrollers.")),Object(n.b)("h2",{id:"required-components"},"Required components"),Object(n.b)("p",null,"In general you will need the following five components. These will be described in detail in the following sections."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A microcontroller"),Object(n.b)("li",{parentName:"ul"},"(External) RAM for frame buffers"),Object(n.b)("li",{parentName:"ul"},"(External) flash for storing graphics data"),Object(n.b)("li",{parentName:"ul"},"A display"),Object(n.b)("li",{parentName:"ul"},"A touch controller")),Object(n.b)("h2",{id:"microcontroller"},"Microcontroller"),Object(n.b)("p",null,"MCUs can be divided in versions with and without an integrated TFT controller peripheral. We recommend choosing an MCU with a TFT controller since it is more flexible and typically a cheaper overall solution because you do not need a display with integrated video RAM and display controller. TouchGFX does not support rendering directly into integrated video RAM so even if your display has integrated RAM you will still need an RAM for containing at least one frame buffer. For details on running TouchGFX on MCUs without TFT controllers, please see MCUs without TFT controller."),Object(n.b)("p",null,"Since the main bottleneck is the ability to transfer pixels across the external memory bus, the clock frequency of the processor is quite important. Usually the external memories are clocked at half the core frequency."),Object(n.b)("p",null,"In order to be able to render directly from the non-volatile graphics storage to the frame buffer, we recommend choosing an MCU which supports memory-mapping of your desired type of external flash. See more about this in the section on non-volatile storage."),Object(n.b)("h3",{id:"internal-memory-requirements"},"Internal memory requirements"),Object(n.b)("p",null,"We recommend choosing an MCU with at least 32Kbytes of SRAM and 128Kbytes of flash. For details on the footprint of TouchGFX, please seeTouchGFX memory requirements"),Object(n.b)("h2",{id:"frame-buffer-memory"},"Frame buffer memory"),Object(n.b)("p",null,"A single frame buffer will in 16-bit colors take up width x height x 2 bytes of memory, so for a 480x272 display this is roughly 256Kbytes. Therefore the frame buffer can only fit in internal SRAM with small screens. Internal SRAM is very fast, so a single frame buffer is often adequate when placed in internal SRAM. But usually you will need an external memory for holding frame buffers, and when placed externally you will need to employ double buffering due to the slower access time. We recommend choosing an SDRAM with 32-bit data bus since transfer speed to and from SDRAM is paramount. For exact parts, please refer to the supported evaluation boards which all have SDRAM with acceptable performance. Based on the above the amount of SDRAM you will need is width x height x 2 x 2. TouchGFX has a special concept of an animationStorage which is an optional third frame buffer. This is needed if you wish to use the full-screen sliding transition effect when switching between different screens in your application. Therefore you should be well covered with a 2-4Mbyte SDRAM depending on screen resolution.\xa0The SDRAM can also be used to store dynamic bitmaps. If you need dynamic bitmaps in your application, you may need more SDRAM."),Object(n.b)("h2",{id:"non-volatile-storage"},"Non-volatile storage"),Object(n.b)("p",null,"In most cases you will need an external non-volatile storage for graphics data. The choice of which type of storage to use has great impact on performance and must be considered with care. We recommend choosing a memory type which can be memory-mapped on your chosen microcontroller, since this means TouchGFX can render directly from the non-volatile storage into the frame buffer. If you instead choose a memory type which is not memory-mapped, you will need to cache all the bitmap data in SDRAM before using them. Read more about this in Non-memory mapped external flash."),Object(n.b)("p",null,"Examples of memory mapped storage types:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Parallel NOR flashes (universal)"),Object(n.b)("li",{parentName:"ul"},"QuadSPI NOR (On e.g. STM32F469, STM32F746)")),Object(n.b)("p",null,"Examples of memory types that are not memory mapped and thus require caching"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"All NAND-based flashes"),Object(n.b)("li",{parentName:"ul"},"SD cards"),Object(n.b)("li",{parentName:"ul"},"Anything with a file system"),Object(n.b)("li",{parentName:"ul"},"QuadSPI NOR if your microcontroller does not include memory-mapping for it (e.g. STM32F429)")),Object(n.b)(c.a,{mdxType:"Note"},"Quad-SPI NOR flashes are substantially faster and cheaper than parallel NOR flashes and also require fewer pins. Therefore we greatly recommend choosing a quad-SPI flash and a microcontroller that supports memory-mapping of these."),Object(n.b)("h3",{id:"memory-requirements"},"Memory requirements"),Object(n.b)("p",null,"Typically is the external flash only used to store graphics data. So the amount of storage you need depends on how many bitmaps you have and their size. An opaque bitmap will take up width x height x 2 bytes. A bitmap that contains alpha channel will take up width x height x 4 bytes. If you have an idea of the scope of your application, you can use the above to calculate rough storage requirements. As a rule of thumb we generally recommend:"),Object(n.b)("p",null,"8MBytes for applications in 480x272 or smaller resolution\n16Mbytes for applications in 640x480 or 800x480\nFrequently the amount of storage needed is not known when the hardware is chosen. In this case we recommend choosing a high capacity part (16/32MBytes) for use during development and substitute for a smaller pin-compatible version before product release."),Object(n.b)("h2",{id:"platform-compatibility"},"Platform Compatibility"),Object(n.b)("p",null,"There are many component combinations that are well suited for graphics rendering. It is quite likely that other requirements for your product will drive the MCU choice. Still it is important to align the requirements for the UI with your hardware choice. Some very important things to consider are:"),Object(n.b)("p",null,"What is the desired resolution of the display? The amount of pixels make a huge difference on performance as the all the pixels needs to be transferred on the bus, and in some cases calculated.\nHow big a part of the screen do you expect to be able to update at high frame rates when doing animations? E.g. do you need to support full-screen animations at 60 frames per second?\nDo you intend to rely heavily on image scaling/rotation, alpha blending, blurring effects etc. which are expensive to calculate?\nHow much other work is the MCU going to perform while rendering graphics?\nTo what degree are you willing to spend time performance optimizing your application?\nThe above should help you get an idea of how powerful a platform you should choose. We would also recommend deploying some of our larger demo applications on an evaluation board resembling your target platform to get an idea of what is possible in terms of user interface. These demos include a readout of the MCU load percentage."),Object(n.b)("p",null,"The following table lists a range of commonly used platforms and what kinds of user interfaces can be realised on them. Please note that it is very difficult to directly compare various solutions because there are individual strengths, so please use this table as a rough guideline only."),Object(n.b)("p",null,"Table legend"),Object(n.b)("p",null,"Least concern. You should be able to implement pretty much any UI with this platform."),Object(n.b)("p",null,"This level will be sufficient for the vast majority of applications, with only minor need for concern if you have very taxing full-screen animations."),Object(n.b)("p",null,"Sufficient for most applications, but limited ability to do full-screen animations and texture mapping."),Object(n.b)("p",null,"Sufficient for basic applications where animations only take up a small part of the screen area and texture mapping is used very sparingly or not at all."),Object(n.b)("p",null,"Capable of doing only the most basic applications."),Object(n.b)("p",null,"MCU/Resolution\t320x240\t480x272\t640x480\t800x480\t1024x768\nCortex M3/M4, up to 150MHz\nParallel NOR flash or cached"),Object(n.b)("p",null,"Cortex M3/M4, up to 150MHz\nQuad-SPI NOR flash"),Object(n.b)("p",null,"Cortex M3/M4, 150 - 200MHz\nParallel NOR flash or cached"),Object(n.b)("p",null,"Cortex M3/M4, 150 - 200MHz\nQuad-SPI NOR flash"),Object(n.b)("p",null,"Cortex M7, 200 - 300MHz\nQuad-SPI NOR flash"),Object(n.b)("p",null,"The table above assumes a 32-bit SDRAM and a MCU work load of other tasks of less than 50%. If any of these assumptions are not true for your platform, subtract one level for each."),Object(n.b)("p",null,"Choosing display\nChoosing the right display can be difficult as there are many options, many levels of quality and a substantial price variations. A detailed guide is out of scope for this article, but we will point out some important considerations that might otherwise be overlooked:"),Object(n.b)("p",null,"Attempt to find a display with square pixels. Otherwise the graphics will look slightly skewed, which would have to be handled by your graphics designers by adjusting the source images to compensate. Any runtime effects like drawing circles, stretching images etc. will also be affected and there is no built-in mechanism in TouchGFX to handle this.\nThere are great differences in backlight and colors for various display models, so obtain a sample of the desired display and see if the color representation is acceptable. Also note that colors will often look slightly different on the display compared to what the graphics designers see on their PC monitor.\nMost displays provide either 18 or 24 bit color depth, whereas the TouchGFX frame buffer is maybe 16-bit. Some MCUs will upscale to 24-bit when outputting, but if there is only 16-bit output we recommend wiring any excess color input pins of the display (least significant) to ground. 18 bit displays are preferred over 24 bit, as the loss of brightness from unused bits is smaller. But even with 24-bit displays the loss is only 3% so it is hardly noticable in practice.\nConsider viewing angle requirements for your product. Some displays have at least one poor viewing angle.\nConsider the scanline direction and mounting orientation of the display. TouchGFX supports a 90 degree rotation so you can run landscape mode UIs on a portrait mode display or vice versa, but there are no builtin mechanism for e.g. turning the UI upside down. Some displays support several mounting orientations though."),Object(n.b)("h2",{id:"choosing-touch-input"},"Choosing touch input"),Object(n.b)("p",null,"Basically there are two types of touch input: capacitive and resistive touch. They behave quite differently and are also at different price points so it is worth considering which to choose."),Object(n.b)("h3",{id:"resistive-touch"},"Resistive touch"),Object(n.b)("p",null,"Resistive touch reacts to physical pressure being applied to the display, and can be actuated by anything (finger, pen, stylus). It is a cheaper technology than capacitive, and the touch readings are typically done by doing A/D conversions on analog pins of the MCU. Resistive touch works poorly with gesture recognition (dragging, swiping) because it relies on uniform pressure being applied while doing the interaction, and that is not what users will typically do in practice. Also it has a tendency of requiring more force to actuate than at least some users have come to expect. Finally, a resistive touch film is normally not completely transparent and therefore your display will loose some brightness and will not appear as crisp and clear as a capacitive touch displays."),Object(n.b)("h3",{id:"capacitive-touch"},"Capacitive touch"),Object(n.b)("p",null,"When using capacitive touch, there will be a small dedicated touch controller IC typically mounted on the display tail. The MCU communicates with the touch controller using I2C or SPI. Capacitive touch is sensitive to being touched as opposed to applying pressure which means that it is much better suited for gesture recognition and in general feels more natural for smartphone users compared with resistive touch. Capacitive touch displays normally requires that the object touching the screen is a finger. This has advantages such as being able to wipe the screen with a cloth without risking to click anything but also has drawbacks such as it cannot be operated using gloves. Note that capacitive displays are more sensitive to electromagnetic interface, power supply variations and environment changes. We recommend consulting with your display vendor for details on how to cope with this."),Object(n.b)("p",null,"Based on the above we recommend resistive touch displays only on very price sensitive applications where touch interaction is mainly click-based, with little or no gesture input or in cases where the touch actuation is done by something else than a finger."))}b.isMDXComponent=!0},260:function(e,t,o){"use strict";var i=o(5),a=o(0),n=o.n(a),r=o(258),l=n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(r.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:l},this.props.children)},t}(a.Component);t.a=s},261:function(e,t,o){"use strict";var i=o(5),a=o(0),n=o.n(a),r=o(258),l=n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return n.a.createElement(r.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:l},this.props.children)},t}(a.Component);t.a=s}}]);