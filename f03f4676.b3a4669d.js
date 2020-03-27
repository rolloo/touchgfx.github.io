(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{248:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),r=(n(0),n(261)),i=n(262),c=n(272),l=(n(274),n(276),n(273),{id:"TouchGFXHALDevelopmentScenarios",title:"LTDC/Parallel RGB"}),p={id:"Development/TouchGFXHALDevelopment/TouchGFXHALDevelopmentScenarios",title:"LTDC/Parallel RGB",description:"import Figure from '@site/components/Figure';\r",source:"@site/docs\\Development\\TouchGFXHALDevelopment\\scenarios.mdx",permalink:"/docs/Development/TouchGFXHALDevelopment/TouchGFXHALDevelopmentScenarios",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosIntro"},next:{title:"FMC and SPI",permalink:"/docs/Development/TouchGFXHALDevelopment/scenarios/TouchGFXHALDevelopmentScenariosFMC"}},h=[{value:"Display Interface",id:"display-interface",children:[]},{value:"Reading settings from CubeMX",id:"reading-settings-from-cubemx",children:[]},{value:"TouchGFX Driver / VSYNC Signal",id:"touchgfx-driver--vsync-signal",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],s={rightToc:h},b="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(i.a,{imageSource:"/img/Development/TouchGFXHALDevelopment/activities_selected_002.png",caption:"Project activity",noShadow:!0,mdxType:"Figure"}),Object(r.b)("p",null,"For MCUs with a TFT controller (e.g. STM32F429, STM32F746, STM32H7), the ",Object(r.b)("em",{parentName:"p"},"TouchGFX Generator")," can generate the part of the HAL that configures the LTDC to transfer pixels from the framebuffer memory to the display.",Object(r.b)("br",{parentName:"p"}),"\n","The generated code both starts the correct framebuffer transfer and unblocks the TouchGFX Engine main loop by calling ",Object(r.b)("inlineCode",{parentName:"p"},"OSWrappers::signalVSync()")," once a VSYNC interrupt is raised by the LTDC."),Object(r.b)("h3",{id:"display-interface"},"Display Interface"),Object(r.b)("p",null,'As opposed to a "Custom" display interface, where the developer must implement the whole driver by hand, for LTDC the TouchGFX Generator can generate all the code necessary for the TouchGFX HAL to support an LTDC configuration.'),Object(r.b)("p",null,'For "Parallel RGB (LTDC)"" to be a selectable option through the TouchGFX Generator the ',Object(r.b)("em",{parentName:"p"},"LTDC")," must be enabled from the ",Object(r.b)("em",{parentName:"p"},"Multimedia")," group in the CubeMX category list."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/ltdc_modes.png",mdxType:"Figure"}),Object(r.b)("p",null,"Once LTDC is enabled, the ",Object(r.b)("em",{parentName:"p"},"Parallel RGB (LTDC)")," option\xa0becomes available through the ",Object(r.b)("em",{parentName:"p"},"Display")," section of the TouchGFX Generator."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/display_if_options.png",mdxType:"Figure"}),Object(r.b)("p",null,"Even after LTDC is enabled through CubeMX, some work is required in order to:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Configure LTDC (GPIO and timings) to match connected display specifications"),Object(r.b)("li",{parentName:"ol"},"Configure LTDC to match desired TouchGFX application specifications.")),Object(r.b)("p",null,"The TouchGFX Generator can read various configurations from CubeMX and provide a list of warnings, recommendations or errors that are called ",Object(r.b)("em",{parentName:"p"},"Dependencies"),". The image below shows the list of dependencies present when initially enabling LTDC in CubeMX for any MCU (in this example we used an F429):"),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/scenarios/ltdc_dependencies.png",mdxType:"Figure"}),Object(r.b)(c.a,{mdxType:"Note"},"LTDC recommendations, warnings and errors will be visible in the TouchGFX Generator interface as soon as LTDC is enabled through CubeMX."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Dependency"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Unsupported pixel format"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The framebuffer drivers of TouchGFX are only available in RGB565 (16-bit) and RGB888 (24-bit). The pixel format of the LTDC must match the chosen driver for the TouchGFX HAL.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Additional layers configured"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"TouchGFX is only capable of utilizing a single layer. While TouchGFX applications can work with two layers enabled, this is a warning to the user that the LTDC is potentially misconfigured. Change the number of layers in the LTDC block.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Blending factors should be PAxCA"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, the blending factor is Alpha Constant. ",Object(r.b)("br",null)," This should be Alpha Constant x Pixel Alpha")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Alpha Constant is 0"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"By default, the alpha constant of LTDC layers is 0. This should be > 0 and preferably 255 unless there is an intent to have a global alpha at all times in an application.")))),Object(r.b)("p",null,"Remember to actually select the Parallel RGB (LTDC) display interface\nafter enabling the LTDC peripheral in the Multimedia section."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/dependencies.png",mdxType:"Figure"}),Object(r.b)("p",null,"The following image shows the LTDC configuration that satisfies the conditions of the warnings, causing the Dependencies group to disappear from the TouchGFX Generator interface."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/ltdc_config.png",mdxType:"Figure"}),Object(r.b)("h2",{id:"reading-settings-from-cubemx"},"Reading settings from CubeMX"),Object(r.b)("p",null,"By selecting ",Object(r.b)("em",{parentName:"p"},"Parallel RGB (LTDC)")," as the display interface through TouchGFX Generator, the ",Object(r.b)("em",{parentName:"p"},"width")," and ",Object(r.b)("em",{parentName:"p"},"height")," of the framebuffer is inherited from the LTDC configuration ",Object(r.b)("em",{parentName:"p"},"horizontal start/stop")," and ",Object(r.b)("em",{parentName:"p"},"vertical start/stop"),". "),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/ltdc_window_position.png",mdxType:"Figure"}),Object(r.b)("p",null,"Defining the dimensions of Layer ",Object(r.b)("em",{parentName:"p"},"0")," according to the display and application dimensions a new dependency appears."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/dependency_ltdc_image.png",mdxType:"Figure"}),Object(r.b)("p",null,"Ensuring that Framebuffer ",Object(r.b)("em",{parentName:"p"},"Image Width")," and ",Object(r.b)("em",{parentName:"p"},"Image Height")," match the size of the window, which is usually desired, will satisfy the warning."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/ltdc_config_fixed.png",mdxType:"Figure"}),Object(r.b)("h2",{id:"touchgfx-driver--vsync-signal"},"TouchGFX Driver / VSYNC Signal"),Object(r.b)("p",null,"Once ",Object(r.b)("em",{parentName:"p"},"Parallel RGB (LTDC)")," is selected as Display Interface developers gain access to the ",Object(r.b)("em",{parentName:"p"},"LTDC")," Application Tick Driver or TouchGFX Driver."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/scenarios/ltdc_application_tick_source.png",width:"500",mdxType:"Figure"}),Object(r.b)("p",null,"The following code is the interrupt handler (STM32F7) for the LTDC interrupt generated according to LTDC configuration. The generated handler automatically unblocks the TouchGFX Engine main loop."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{11}","{11}":!0}),'extern "C"\n__irq void LTDC_IRQHandler(void)\n{\n    if (LTDC->ISR & 1)\n    {\n        LTDC->ICR = 1;\n        if (LTDC->LIPCR == (LTDC->AWCR & 0x7FF) - 1)\n        {\n            //entering active area\n            OSWrappers::signalVSync();\n        }\n    }\n}\n')),Object(r.b)(c.a,{mdxType:"Note"},"For the LTDC driver to work, users must enable the LTDC global interrupt through the LTDC NVIC settings or through Global NVIC settings, and also enable generation of handler code."),Object(r.b)(i.a,{noShadow:!0,imageSource:"/img/Development/TouchGFXHALDevelopment/Generator/nvic_global_interrupt_enable.png",mdxType:"Figure"}),Object(r.b)("h2",{id:"conclusion"},"Conclusion"),Object(r.b)("p",null,"Enabling the ",Object(r.b)("em",{parentName:"p"},"Parallel RGB (LTDC)")," display interface option through TouchGFX Generator allows all required HAL code to be generated. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Sets the width, height and pixel format of the TouchGFX application in accordance with the CubeMX LTDC configuration. The LTDC layer ",Object(r.b)("em",{parentName:"li"},"width")," and ",Object(r.b)("em",{parentName:"li"},"height")," impact the size of the canvas in TouchGFX Designer and the LTDC Pixel Format impacts the required TouchGFX framebuffer driver and also the format for generated assets."),Object(r.b)("li",{parentName:"ul"},"Allow the LTDC application tick source to be selected which generates a handler to drive the TouchGFX Engine Main loop. Usually, with LTDC Configurations developers would always use the provided Application Tick Driver.")))}u.isMDXComponent=!0},272:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=n(265),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:c},this.props.children)},t}(o.Component);t.a=l},276:function(e,t,n){"use strict";var a=n(5),o=n(0),r=n.n(o),i=n(265),c=r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return r.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:c},this.props.children)},t}(o.Component);t.a=l}}]);