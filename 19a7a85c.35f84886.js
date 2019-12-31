(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(1),o=n(9),i=(n(0),n(189)),r={},s=[],l={id:"design/lenses",title:"lenses",description:"# Immutable data",source:"@site/docs/design/lenses.md",permalink:"/docs/design/lenses"},c={rightToc:s,metadata:l},p="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"immutable-data"},"Immutable data"),Object(i.b)("p",null,'Immutable data is fantastic because it allows anyone to read the contents\nof the data and provides the security that the data will not change. In some\ncases, however, we would like to "change" some data value. Using immutable\ndata means that we cannot change the value within a structure, instead we\nneed to create an updated view of the data with the changes applied. This\nupdated view creates new data, where the old data is still present and\nunchanged. It\'s recommended that the reader become familiar with\npersistent data structures and how they operate. Due to how persistent\ndata structures update, by only changing the smallest number of references,\nthe needed speed and efficiency is achieved.'),Object(i.b)("p",null,"Scala tries to help with respect to immutable data, by providing a convenience\nmethod on all ",Object(i.b)("inlineCode",{parentName:"p"},"case class"),"es called ",Object(i.b)("inlineCode",{parentName:"p"},"copy"),'. In situations where there is a\nnesting of case classes, potentially several levels, the updating of a value\non the lower levels results in a bubbling-up process whereby each previous\nlayer needs to update the reference to the new data in the lower layer.\nAlthough this is not difficult to do, the result is very verbose and\nextremely cumbersome for the user. It would be nice if this "zooming"\nupdate process was abstracted behind a data structure that would hide and\nautomate the tedious process.'),Object(i.b)("h1",{id:"lenses"},"Lenses"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"Lens")," can, in the most trivial of ways, be seen as a simple getter\nand setter function pair. Within CIlib, several common lenses are available\nin order to extract information from the state of the ",Object(i.b)("inlineCode",{parentName:"p"},"Entity"),", or\nanything else for which a ",Object(i.b)("inlineCode",{parentName:"p"},"Lens"),' has been defined. Because lenses\nallow the user to "zoom" onto data, potentially nested under many levels\nin another data structure, they are convenient as they allow for correctly\nupdating the "zoomed" location in addition to extracting the value.'),Object(i.b)("p",null,"Trying to not re-invent the wheel, the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://julien-truffaut.github.io/Monocle/%3E"}),"Monocle"),' library\nprovides the lens functionality. Lenses are structures that can also be\ncomposed together and are collectively called "optics". Please refer to\nMonocle\'s documentation to learn more about lenses and optics. CIlib\nspecific lens questions can be directed to the CIlib gitter room or IRC.'),Object(i.b)("p",null,"Lenses provide an API that is first and foremost, composition and lawful.\nThis means that the various optics are well behaved and rules exist that\ngovern their usage. Furthermore, different optics may be composed together\nto create new optics that are the combination of the original optics. This\nis obviously only possible if the provided types correctly line up."),Object(i.b)("p",null,'Building on the usage of optics in general, we use a mechanism known as\n"classy lens" in Haskell. This mechanism prevents invalid usage, by letting\nthe compiler fail based on the types being used. In the case of ',Object(i.b)("inlineCode",{parentName:"p"},"Entity"),",\nthe compiler would look up instances, using it's implicit resolution rules,\nto obtain evidence for a typeclass with a given set of types, at compile time."),Object(i.b)("p",null,"This provides an additional level of surety, that the data being passed to\na function that requires evidence in order to extract some other piece of\ninformation for a given type. The scala compiler provides the evidence\nthrough the use of its implicit lookup mechanics.\nThis may seem quite like a mouthful, but let's have a look a few examples\nthat will hopefully make the usage clearer."),Object(i.b)("p",null,'Based on the normally accepted usage of "classy lenses", the typeclasses\nthat expose the lenses are generally prefixed with ',Object(i.b)("inlineCode",{parentName:"p"},"Has"),". An example of\nthis would be the ",Object(i.b)("inlineCode",{parentName:"p"},"HasMemory")," typeclass. The typeclass definition is simply:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"trait HasMemory[S,A] {\n  def _memory: Lens[S, Position[A]]\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"HasMemory")," defines a lens member, with the name ",Object(i.b)("inlineCode",{parentName:"p"},"_memory")," that can from\na given ",Object(i.b)("inlineCode",{parentName:"p"},"S")," provide a ",Object(i.b)("inlineCode",{parentName:"p"},"Position[A]"),". There is absolutely no mention of\nwhat ",Object(i.b)("inlineCode",{parentName:"p"},"S")," is, or should be, but the typeclass allows for a set of instances\nthat can actually provide this result. Within the context of the GA, Individuals\nare entities that ",Object(i.b)("em",{parentName:"p"},"do not")," maintain a memory; whereas within the PSO, Particles\ndo maintain a memory of their previous best position (where ",Object(i.b)("inlineCode",{parentName:"p"},"Position[A]")," is\na candidate solution of the problem space). The base module within the library\nalready provides several optics for the user that operate on ",Object(i.b)("inlineCode",{parentName:"p"},"Position[A]"),"\ninstances, allowing for the extraction of the candidate solution, the fitness\nand the constraint violations. Other optics for other structures are also available."),Object(i.b)("p",null,"The usage of these classy lenses will become even clearer when we look into what\nthe generalization of Individual and Particle, the ",Object(i.b)("em",{parentName:"p"},"Entity"),"."))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(r,".").concat(d)]||u[d]||h[d]||i;return n?o.a.createElement(b,s({ref:t},c,{components:n})):o.a.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);