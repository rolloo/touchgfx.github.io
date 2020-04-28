(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{371:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return m})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return g})),a.d(t,"default",(function(){return h}));var n=a(1),i=a(9),o=(a(0),a(508)),r=a(511),l=a(513),c=a(514),s=a(510),m={id:"using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption"},b={id:"development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",title:"Using the L8 Image Format to Reduce Memory Consumption",description:"Images in the L8 format take up less flash storage and are faster to draw than e.g. ARGB8888.\r",source:"@site/docs\\development\\ui-development\\scenarios\\using-the-l8-image-format-to-reduce-memory-consumption.mdx",permalink:"/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption",sidebar:"docs",previous:{title:"Lowering Memory Usage with Partial Framebuffer",permalink:"/docs/development/ui-development/scenarios/lowering-memory-usage-with-partial-framebuffer"},next:{title:"Creating Dynamic L8 Images",permalink:"/docs/development/ui-development/scenarios/creating-dynamic-l8-images"}},g=[{value:"Example L8 Image",id:"example-l8-image",children:[]},{value:"Using  L8 Images in TouchGFX Designer",id:"using--l8-images-in-touchgfx-designer",children:[]},{value:"Transparent Images",id:"transparent-images",children:[]},{value:"Converting an image to 256 colors",id:"converting-an-image-to-256-colors",children:[{value:"Paint.NET",id:"paintnet",children:[]},{value:"ImageMagick",id:"imagemagick",children:[]},{value:"Comparison",id:"comparison",children:[]}]},{value:"Manual Configuration",id:"manual-configuration",children:[]}],p={rightToc:g},u="wrapper";function h(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)(u,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Images in the L8 format take up less flash storage and are faster to draw than e.g. ARGB8888."),Object(o.b)("p",null,"An image in L8 format consists of a color palette and a pixel array: The color palette lists up to 256 different colors specified in either 16-bit format RGB565, 24-bit format RGB888, or 32-bit format ARGB8888. The pixel array consists of one byte for each pixel. This byte is an index into the color palette (list of colors), pointing out the color for the pixel. The TouchGFX framework draws an L8 image by reading the pixels one-by-one, looking up the colors in the palette and writing these to the framebuffer. This happens automatically and is accelerated by the STM32 Chrom-ART hardware accelerator, if available on the hardware."),Object(o.b)("p",null,"8-bit per pixel means that one L8 image can use 256 different colors. Another L8 image can use 256 other colors, since the two images each have their own palette."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/l8-image-with-4x4-pixels-and-palette-with-4-colors.png",caption:"An L8 image with 4 x 4 pixels and a palette with 4 colors",mdxType:"Figure"}),Object(o.b)("p",null,"Pixels are one byte (8-bit) each. The size of the pixels is therefore width x height bytes. The palette colors can be 16-bit, 24-bit, or 32 bit colors. Each color definition will therefore take up 2, 3, or 4 bytes."),Object(o.b)("p",null,"Solid images should be stored in L8_RGB565 if the framebuffer is 16-bit (RGB565 format). If the framebuffer is 24-bit (RGB888) the L8 images must be stored in L8_RGB888 format. If the image is transparent the 32-bit format (ARGB8888) must be used:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Format")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Framebuffer format")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Supports transparent pixels")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_RGB565"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16-bit RGB565"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_RGB888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24-bit RGB888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_ARGB8888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Both"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")))),Object(o.b)(c.a,{mdxType:"FurtherReading"},Object(o.b)("li",null,"Read more about palette image formats here: ",Object(o.b)(s.a,{to:"https://en.wikipedia.org/wiki/Indexed_color",mdxType:"Link"},"https://en.wikipedia.org/wiki/Indexed_color"))),Object(o.b)("h2",{id:"example-l8-image"},"Example L8 Image"),Object(o.b)("p",null,"Here is a typical logo image. This image only uses 16 different colors:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-with-16-24bit-colors.png",caption:"200 x 200 pixels L8 image with 16 different 24-bit colors.",mdxType:"Figure"}),Object(o.b)("p",null,"The size in flash of this image is significant lower than the original image in the standard 24-bit format (RGB888). The table below lists the flash usage for this concrete image for the three different palette formats and for the non L8 format"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Format")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Size of pixels (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Size of palette (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Total size (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Reduction in %")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"RGB888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120,000"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"120,000"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_RGB565"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,000"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,032"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"66.6%")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_RGB888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,000"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"48"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,048"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"66.6%")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_ARGB8888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,000"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"64"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,064"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"66.6%")))),Object(o.b)("p",null,"We see that the size reduction is very large, and that the size of the palette is insignificant on a medium sized image."),Object(o.b)("h2",{id:"using--l8-images-in-touchgfx-designer"},"Using  L8 Images in TouchGFX Designer"),Object(o.b)("p",null,"It is very easy to use the L8 image format in TouchGFX. The only thing to do is to configure the image converter to convert the image from PNG to L8 format. Here we will go through the whole process:"),Object(o.b)("p",null,"Start a new project in the TouchGFX Designer. Copy your image to the assets/images folder in the new project:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-assets-images-folder.png",caption:"Images folder of TouchGFX project",mdxType:"Figure"}),Object(o.b)("p",null,"Now go to the TouchGFX Designer and click the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/designer-user-guide/images-view"}),"Images tab")," in the top bar and select the image:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-images.png",caption:"Logo in Images view of TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("p",null,"On the right side on the window, select image format L8_RGB888 (this example is running 24 bit colors)."),Object(o.b)("p",null,"An image Widget can now be inserted on the canvas (here we inserted a Box in the background):"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/touchgfx-logo-in-touchgfx-designer-canvas.png",caption:"Image widget on Canvas in TouchGFX Designer",mdxType:"Figure"}),Object(o.b)("p",null,"Nothing needs to be changed in the UI code. The Image Converter converts the PNG file and generates an image in L8 format because of the configuration we did in the Images tab."),Object(o.b)("h2",{id:"transparent-images"},"Transparent Images"),Object(o.b)("p",null,"As mentioned above it is also possible to use L8 format for images with transparency."),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/button-image-32bit-non-opaque-argb8888.png",caption:"170 x 60 pixels button image in 32 bit format ARGB8888",mdxType:"Figure"}),Object(o.b)("p",null,"The above image uses 108 colors (many shades of blue). This image can use the format L8_ARGB8888. The size will be significantly lower:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Format")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Size of pixels (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Size of palette (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Total size (bytes)")),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"th"},"Reduction in %")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ARGB888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,800"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40,800"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"-")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"L8_ARGB8888"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10,200"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"432"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"10,632"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"73.9%")))),Object(o.b)("h2",{id:"converting-an-image-to-256-colors"},"Converting an image to 256 colors"),Object(o.b)("p",null,"Many images use more than 256 colors. This is common for images that are photo-realistic or images with gradients. These images cannot directly be converted to L8 image format in the TouchGFX Designer, because they contain to many colors."),Object(o.b)("p",null,"In many cases though, it is possible to reduce the number of colors used in a specific image. Ideally, a graphics artist will convert/supply the images in 256 colors, however image manipulation tools can also perform the conversion without loosing too much of the image quality."),Object(o.b)("h3",{id:"paintnet"},"Paint.NET"),Object(o.b)("p",null,"The simplest way is to use Paint.NET. Open the original image and use Save As to save the image in another file. In the Save Configuration dialog, select 8-bit, as pixel depth:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/paint-dot-net-convert-to-8bit.png",caption:"Paint.NET saving image in 8 bit format",mdxType:"Figure"}),Object(o.b)("p",null,"Now use the new PNG in your project. Remember to select the L8_ARGB8888 format in the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/development/ui-development/designer-user-guide/images-view"}),"Images tab"),' in the TouchGFX Designer. Shadows are not handled very well, but icons with transparent edges looks good in many cases. It is possible to adjust the "Transparency threshold" value and in some cases improve the result.'),Object(o.b)("h3",{id:"imagemagick"},"ImageMagick"),Object(o.b)("p",null,"Another suitable tool, that sometimes results in better L8 images, is ImageMagick (download from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://imagemagick.org/"}),"www.imagemagick.org"),"). This tool can convert images from the command line. This makes it suitable for use in scripts. To convert the clock_bg.png to an image using at most 256 colors, use the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"magick convert clock_bg.png -colors 256 clock_bg_l8_256.png\n")),Object(o.b)("p",null,"ImageMagick can also tell you how many colors are used in an image. Use this command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-cmd"}),"magick identify -format %k Blue_Buttons_Round_Edge_small.png\n")),Object(o.b)("h3",{id:"comparison"},"Comparison"),Object(o.b)("p",null,"The three images (original, L8 using Paint.NET, L8 using ImageMagick) are seen below for comparison:"),Object(o.b)(r.a,{imageSource:"/img/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption/clock-image-original-paint-dot-net-image-magick-comparison.png",caption:"Clock image comparison, left to right: original, Paint.NET, ImageMagick",mdxType:"Figure"}),Object(o.b)("p",null,"The middle clock lost the details in the border shadow. In both cases the central part of the clock background looks useable."),Object(o.b)("h2",{id:"manual-configuration"},"Manual Configuration"),Object(o.b)("p",null,"It is also possible to select image formats without using the TouchGFX Designer. The image formats are specified in file application.config located in the project root:"),Object(o.b)(l.a,{mdxType:"CodeHeader"},"application.config"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-JSON"}),'{\n  "image_configuration": {\n    images": {\n      "Blue_Buttons_Round_Edge_small.png": {\n        "format": "L8_ARGB8888"\n      }\n    },\n    "dither_algorithm": "2",\n    "alpha_dither": "yes",\n    "layout_rotation": "0",\n    "opaque_image_format": "RGB888",\n    "nonopaque_image_format": "ARGB8888",\n    "section": "ExtFlashSection",\n    "extra_section": "ExtFlashSection"\n  }\n}\n')),Object(o.b)("p",null,'The "images" section under "image_configuration" specifies the format for individual images. If an image is not mentioned here, the image will be generated in the default format (opaque_image_format or nonopaque_image_format).'),Object(o.b)("p",null,"We recommend using the TouchGFX Designer for image configuration when possible."))}h.isMDXComponent=!0},509:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e="highlight highlight-"+this.props.type;return(o.a.createElement("div",{class:e},o.a.createElement("div",{class:"highlight-heading"},o.a.createElement("h5",null,o.a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.a.createElement("div",{class:"highlight-content"},this.props.children)))},t}(i.Component);t.a=r},511:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props.noShadow||!1,t=this.props.width,a=this.props.height;return e?o.a.createElement("div",{class:"figure noshadow"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption)):o.a.createElement("div",{class:"figure"},o.a.createElement("a",{href:this.props.imageSource,target:"_blank"},o.a.createElement("img",{width:t,height:a,src:this.props.imageSource})),o.a.createElement("p",null,this.props.caption))},t}(i.Component);t.a=r},513:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{class:"code-header"},o.a.createElement("div",null,o.a.createElement("h5",null,this.props.children)))},t}(i.Component);t.a=r},514:function(e,t,a){"use strict";var n=a(5),i=a(0),o=a.n(i),r=a(509),l=o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement(r.a,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:l},this.props.children)},t}(i.Component);t.a=c}}]);