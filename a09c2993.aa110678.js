(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),o=(n(0),n(189)),i={id:"introduction",title:"Introduction"},c=[{value:"What is CILib?",id:"what-is-cilib",children:[{value:"Principled design",id:"principled-design",children:[]}]},{value:"Help and support",id:"help-and-support",children:[]}],s={id:"introduction",title:"Introduction",description:"## What is CILib?",source:"@site/docs/introduction.md",permalink:"/docs/introduction",sidebar:"docs",next:{title:"Getting started",permalink:"/docs/community-tutorial/setting-up"}},l={rightToc:c,metadata:s},p="wrapper";function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)(p,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"what-is-cilib"},"What is CILib?"),Object(o.b)("p",null,"CILib is software library which aids in the experimentation and research of Computational Intelligence algorithms.\nThe library was created through a combined effort by several researchers.\nThe project originally was called PSOlib as it focused on the PSO algorithm, but over time had additional contributions outside of the PSO area and the project was renamed to CILib."),Object(o.b)("h3",{id:"principled-design"},"Principled design"),Object(o.b)("p",null,"Pure functions operate only the passed in function parameters and return a value.\nGiven the same set of function parameters, the same result from the function is expected and is known as ",Object(o.b)("em",{parentName:"p"},"referential transparency"),".\nIt is very important to ensure that the library code is pure: it reduces complexity.\nDue to pure functions only returning values, it allows for the controlling of effects.\nEffects are actions that a program perfroms to achieve a goal.\nOne of the primary effects managed by CIlib is the effect of randomness applied to other values.\nAs a consequence of this, and other aspects, CILib makes an active effort to address the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Correctness"),": All algorithmic components should be correct and operate as intened, doing nothing more.\nPeer-review is hugely valuable, providing confidence that the implementations are correct and sound."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Type safety"),": The use of types is a fantastic way to ensure that a program cannot represent invalid states.\nThis removes a huge set of potential errors and ensures greater confidence, as the compiler is always double-checking the code.q"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Reproducibility"),": The abiltity to reproduce the work of another researcher is a fundamental part of the scientific method.\nWith effects such as randomness applied to algorithms, reproducing results becomes much, much more difficult.\nIt is, therefore, required that CILib be able to provide the perfect replication of experimental work.")),Object(o.b)("p",null,"With all this in mind, we can think of CILib as a platform that allows us to build a project by combining a number of components that are reinforced by type safety to ensure correctness, whilst allowing for easily reproduced results."),Object(o.b)("h2",{id:"help-and-support"},"Help and support"),Object(o.b)("p",null,"If you have any feedback or questions, please come and chat to us in the project ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"4"}),"Gitter channel"),"; alternatively, feel free to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"5"}),"open an issue"),"."))}u.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(i,".").concat(d)]||u[d]||f[d]||o;return n?a.a.createElement(b,c({ref:t},l,{components:n})):a.a.createElement(b,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);