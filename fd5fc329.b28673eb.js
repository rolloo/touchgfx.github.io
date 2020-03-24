(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{239:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return h})),n.d(t,"default",(function(){return b}));var a=n(1),o=n(9),c=(n(0),n(244)),i=n(245),r=(n(260),n(255),n(259),n(253),n(257),n(247),n(254)),l={id:"FontCache",title:"Font Caching"},s={id:"Development/UIDevelopment/TouchGFXEngineFeatures/FontCache",title:"Font Caching",description:"import Figure from '@site/components/Figure';",source:"@site/docs\\Development\\UIDevelopment\\TouchGFXEngineFeatures\\FontCache.mdx",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/FontCache",sidebar:"docs",previous:{title:"Binary Fonts",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/using-binary-fonts"},next:{title:"Backend Communication",permalink:"/docs/Development/UIDevelopment/TouchGFXEngineFeatures/backend-communication"}},h=[{value:"Font Caching",id:"font-caching",children:[]},{value:"Using the Font Cache in application code",id:"using-the-font-cache-in-application-code",children:[]},{value:"Caching Letters",id:"caching-letters",children:[]},{value:"Caching Ligatures",id:"caching-ligatures",children:[]},{value:"Memory Usage",id:"memory-usage",children:[]},{value:"Caching GSUB Tables",id:"caching-gsub-tables",children:[]},{value:"Implementing the Font File Reader",id:"implementing-the-font-file-reader",children:[]}],d={rightToc:h},p="wrapper";function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(p,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"This section describes how to use the font cache to handle binary\nfonts in TouchGFX."),Object(c.b)("p",null,"Read first about ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/Development/UIDevelopment/Scenarios/UsingBinaryFonts"}),"binary fonts"),"."),Object(c.b)("h2",{id:"font-caching"},"Font Caching"),Object(c.b)("p",null,"Recall that using binary fonts require the whole font to be loaded to\nmemory. This can in some cases be undesireable if the font is large,\ne.g. with large Chinese fonts."),Object(c.b)("p",null,"Font caching allows an application to load from external memory only\nthe letters required to show a string. This means that the whole font\ndoes not need to reside in the addressable flash or RAM, but can be\nstored on a larger file system."),Object(c.b)("p",null,"In the drawing below, the compiled-in font, Font2, has been replaced\nby the font cache. When TouchGFX is drawing a text, that uses font 2,\nTouchGFX will find the pointer to the ",Object(c.b)("inlineCode",{parentName:"p"},"CachedFont")," object in the\nfont table. This special font will lookup the letters in the FontCache\nobject."),Object(c.b)(i.a,{imageSource:"/img/Development/UIDevelopment/Scenarios/UsingFontCache/fontcache1.png",caption:"Using a cached font",mdxType:"Figure"}),Object(c.b)("p",null,"The CachedFont is setup with a pointer to the linked-in font (Font2 above).",Object(c.b)("br",{parentName:"p"}),"\n","When TouchGFX asks the CachedFont for a specific letter, the\ncachedFont will first look in the normal Font it is replacing\n(Font2).",Object(c.b)("br",{parentName:"p"}),"\n",'This font may be an empty font, but can also be a "normal" font\ncontaining a selection of some often used letters. If the font does\nnot contain the required letter, the CachedFont will look into the\nFontCache to see if the letter has been loaded from the file\nsystem.'),Object(c.b)("p",null,"This principle limits the amount of letters that must be cached, as we\ndo not need to cache letters already found in the normal font."),Object(c.b)("h2",{id:"using-the-font-cache-in-application-code"},"Using the Font Cache in application code"),Object(c.b)("p",null,"Before the application can install a CachedFont it must also create a\nFontCache, a memory buffer, and a file system reader object:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"uint8_t fontdata[5120]; //Memory buffer for the font cache, 5Kb\nFontCache fontCache;\nCachedFont cachedFont;  //Cached Font object\nFileDataReader reader;  //Filesystem reader object\n")),Object(c.b)("p",null,"The FontCache must be linked to the buffer and the reader:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//setup the font cache with buffer and size; and file reader object\nfontCache.setMemory(fontdata, 5120);\nfontCache.setReader(&reader);\n")),Object(c.b)("p",null,"Now the application can setup the font cache, initialize the\nCachedFont and pass it to TouchGFX."),Object(c.b)("p",null,"The font cache requires a TextId to initialize a CachedFont\nobject. The TextId is used to lookup the font that the CachedFont must\npoint to. This secures that you are replacing the font used by\nthe text that you have on your display:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//initialize the cachedFont object to the font used by T_SINGLEUSEID1\nTypedText text = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont);\n\n//replace the linked in font in TouchGFX with cachedFont\nTypedTextDatabase::setFont(DEFAULT, &cachedFont);\n")),Object(c.b)("p",null,"The code above can be put anywhere in the application. If the cached\nfont is only used in a specific view, this view can be a good place to\ninsert the code."),Object(c.b)("h2",{id:"caching-letters"},"Caching Letters"),Object(c.b)("p",null,"The font cache is still empty. Before we can show any letters they\nmust be read from the font cache. This is done by passing an array of\nunicodes (a string) to the font cache. In this example we just pass\nthe text from T_SINGLEUSEID1."),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheString(text, str);\n")),Object(c.b)("p",null,"The font cache will load the letters found in the ",Object(c.b)("inlineCode",{parentName:"p"},"str")," array through the\nreader object.",Object(c.b)("br",{parentName:"p"}),"\n","The read unicodes will be linked to the font that is used by the\nTextId ",Object(c.b)("inlineCode",{parentName:"p"},"text")," argument."),Object(c.b)("p",null,"The application is responsible for configuring the reader object to\nload from the correct file."),Object(c.b)("h2",{id:"caching-ligatures"},"Caching Ligatures"),Object(c.b)("p",null,"For languages that converts sequences of unicodes to other unicodes\nbefore displaying (e.g. Arabic and Devanagari) the above method is not\ngood. It caches the original unicodes and not the unicodes that are\ndisplayed after conversion. This method will convert the given\nunicodes and cache the required unicodes (after conversion):"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),"//cache the glyphs used by the text T_SINGLEUSEID1 after conversion\nUnicode::UnicodeChar* str = const_cast<Unicode::UnicodeChar*>(text.getText());\nbool b = fontCache.cacheLigatures(cachedFont, text, str);\n")),Object(c.b)("h2",{id:"memory-usage"},"Memory Usage"),Object(c.b)("p",null,"The font cache can calculate the currently amount used memory:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp"}),'touchgfx_printf("Memory usage %d\\n", fontCache.getMemoryUsage());\n')),Object(c.b)("h2",{id:"caching-gsub-tables"},"Caching GSUB Tables"),Object(c.b)("p",null,"Some fonts uses a GSUB table while rendering. This is only a few fonts\nfor eastern languages, e.g. Devanagari fonts.",Object(c.b)("br",{parentName:"p"}),"\n",'The GSUB tables allows the font system to reorder characters and\nsubstitute sequences of characters for other "combination" characters.'),Object(c.b)("p",null,"The Font Cache can load this GSUB table from the file system. If it is\nnot loaded, the font is not displayed correctly as the GSUB table is\nthen not available to the text rendering system."),Object(c.b)("p",null,"The GSUB table is loaded by supplying an extra argument when\ninitializing the cached font:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{3-3}","{3-3}":!0}),"//initialize the cachedFont and load the GSUB table\ntext = TypedText(T_SINGLEUSEID1);\nfontCache.initializeCachedFont(text, &cachedFont, true);\n")),Object(c.b)("h2",{id:"implementing-the-font-file-reader"},"Implementing the Font File Reader"),Object(c.b)("p",null,"The FileDataReader class used in the above example code is not\nincluded in TouchGFX as it is dependant on the operating system you\nare using."),Object(c.b)("p",null,'Here is an example for normal "stdio" compatible file systems.'),Object(c.b)(r.a,{mdxType:"CodeHeader"},"Screen1View.cpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-5,13-13,17-17,21-21}","{5-5,13-13,17-17,21-21}":!0}),'class FileDataReader : public FontDataReader\n{\npublic:\n    virtual ~FileDataReader() { }\n    virtual void open()\n    {\n        fp = fopen("Font_verdana_20_4bpp.bin", "rb");\n        if (!fp)\n        {\n            touchgfx_printf("Unable to open font file!!!\\n");\n        }\n    }\n    virtual void close()\n    {\n        fclose(fp);\n    }\n    virtual void setPosition(uint32_t position)\n    {\n        fseek(fp, position, SEEK_SET);\n    }\n    virtual void readData(void* out, uint32_t numberOfBytes)\n    {\n        fread(out, numberOfBytes, 1, fp);\n    }\nprivate:\n    FILE* fp;\n};\n')),Object(c.b)("p",null,"The FileDataReader class implements the FontDataReader interface from FontCache.hpp:"),Object(c.b)(r.a,{mdxType:"CodeHeader"},"FontCache.hpp"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-cpp",metastring:"{5-8}","{5-8}":!0}),"class FontDataReader\n{\npublic:\n    virtual ~FontDataReader() { }\n    virtual void open() = 0;\n    virtual void close() = 0;\n    virtual void setPosition(uint32_t position) = 0;\n    virtual void readData(void* out, uint32_t numberOfBytes) = 0;\n};\n")))}b.isMDXComponent=!0},259:function(e,t,n){"use strict";var a=n(5),o=n(0),c=n.n(o),i=n(256),r=c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return c.a.createElement(i.a,{color:"var(--highlight-color-try)",header:"Things to try",type:"try",icon:r},this.props.children)},t}(o.Component);t.a=l},260:function(e,t,n){"use strict";var a=n(5),o=n(0),c=n.n(o),i=n(256),r=c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},c.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return c.a.createElement(i.a,{color:"var(--highlight-color-caution)",header:"Caution",type:"caution",icon:r},this.props.children)},t}(o.Component);t.a=l}}]);