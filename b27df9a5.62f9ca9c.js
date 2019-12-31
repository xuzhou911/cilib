(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{165:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),i=(n(0),n(189)),o={id:"de",title:"DE"},l=[{value:"DE Method",id:"de-method",children:[{value:"Parameters",id:"parameters",children:[]},{value:"Return Type",id:"return-type",children:[]}]},{value:"Selection Methods",id:"selection-methods",children:[]},{value:"Crossover Methods",id:"crossover-methods",children:[]},{value:"Predefined DEs",id:"predefined-des",children:[{value:"best_1_bin",id:"best_1_bin",children:[]},{value:"rand_1_bin",id:"rand_1_bin",children:[]},{value:"best_1_exp",id:"best_1_exp",children:[]},{value:"best_bin",id:"best_bin",children:[]},{value:"rand_bin",id:"rand_bin",children:[]},{value:"best_exp",id:"best_exp",children:[]},{value:"rand_exp",id:"rand_exp",children:[]},{value:"randToBest",id:"randtobest",children:[]},{value:"currentToBest",id:"currenttobest",children:[]}]}],b={id:"community-tutorial/de",title:"DE",description:"In this chapter we will be exploring the differential evolution package of CILib.",source:"@site/docs/community-tutorial/de.md",permalink:"/docs/community-tutorial/de"},c={rightToc:l,metadata:b},d="wrapper";function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this chapter we will be exploring the differential evolution package of CILib.\nWhat's great about algorithms in CILib is their flexibility.\nThe DE show cases this wonderfully.\nWe'll start off with the standard de algorithm and branch off from there with different methods that we are able to plugin to achieve new DEs."),Object(i.b)("p",null,"To include this library in your project you can add the following to your list of library dependencies"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"net.cilib" %% "cilib-de" % "2.0"')),Object(i.b)("h2",{id:"de-method"},"DE Method"),Object(i.b)("p",null,"The de method represents a template differential evolution algorithm that follows the standard (x, y, z) format for defining DEs.\nWe are able to produce a custom DE based on the parameters passed."),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"p_r: Double //Recombination Probability\np_m: Double //Mutation Probability\ntargetSelection: NonEmptyList[Individual[S, A]] => Step[A, (Individual[S, A], Position[A])] //Selection Method\ny: Int Refined Positive //Number of difference vectors\nz: (Double, Position[A]) => RVar[NonEmptyList[Boolean]] //Crossover method\n")),Object(i.b)("h3",{id:"return-type"},"Return Type"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NonEmptyList[Individual[S]] => Individual[S] => Step[Double,List[Individual[S]]]")),Object(i.b)("h2",{id:"selection-methods"},"Selection Methods"),Object(i.b)("p",null,"All selection methods will fit meet the required type set out by the ",Object(i.b)("inlineCode",{parentName:"p"},"targetSelection")," parameter.\nThat being, a function that takes a value of type ",Object(i.b)("inlineCode",{parentName:"p"},"NonEmptyList[Individual[S, A]]")," and returns a value of type ",Object(i.b)("inlineCode",{parentName:"p"},"Step[A, (Individual[S, A], Position[A])]"),".\nThe list of available selection methods are as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Random selection"),Object(i.b)("li",{parentName:"ul"},"Best selection"),Object(i.b)("li",{parentName:"ul"},"Random to best selection"),Object(i.b)("li",{parentName:"ul"},"Current to best selection")),Object(i.b)("p",null,"With the co-responding method headers below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"randSelection[S, A](collection: NonEmptyList[Entity[S, A]])\n\nbestSelection[S, A](collection: NonEmptyList[Entity[S, A]])\n\nrandToBestSelection[S, A: Numeric](gamma: Double)(collection: NonEmptyList[Entity[S, A]])\n\ncurrentToBestSelection[S, A: Numeric](p_m: Double)(collection: NonEmptyList[Entity[S, A]])\n")),Object(i.b)("h2",{id:"crossover-methods"},"Crossover Methods"),Object(i.b)("p",null,"CILib offers two crossover methods.\nThose being binary and exponential methods, ",Object(i.b)("inlineCode",{parentName:"p"},"bin")," and ",Object(i.b)("inlineCode",{parentName:"p"},"exp")," respectively."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"bin[F[_]: Foldable1, A](p_r: Double, parent: F[A])\n\nexp[F[_]: Foldable1, A](p_r: Double, parent: F[A])\n")),Object(i.b)("p",null,"Both follow the type requirement of the ",Object(i.b)("inlineCode",{parentName:"p"},"de's z")," parameter, and thus return ",Object(i.b)("inlineCode",{parentName:"p"},"RVar[NonEmptyList[Boolean]]"),"."),Object(i.b)("h2",{id:"predefined-des"},"Predefined DEs"),Object(i.b)("p",null,"All of the following DEs make use of what we already have seen.\nSo if we wanted to we could produce any one of these ourselves using the base ",Object(i.b)("inlineCode",{parentName:"p"},"de")," algorithm.\nWith that being said (and to avoid repetition) the names of the parameters of the predefined algorithms are the same as in the base ",Object(i.b)("inlineCode",{parentName:"p"},"de")," algorithm.\nThe method names are indicators of what methods have been ",Object(i.b)("em",{parentName:"p"},"plugged")," into ",Object(i.b)("inlineCode",{parentName:"p"},"de"),", and follow the (x, y, z) convention.\nFor example, ",Object(i.b)("inlineCode",{parentName:"p"},"best_1_bin")," represents a ",Object(i.b)("inlineCode",{parentName:"p"},"de")," utilizing a best selection method, 1 difference vector and a binary crossover."),Object(i.b)("h3",{id:"best_1_bin"},"best_1_bin"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"best_1_bin[S, A: Numeric: Equal](p_r: Double, p_m: Double)\n")),Object(i.b)("h3",{id:"rand_1_bin"},"rand_1_bin"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"rand_1_bin[S, A: Numeric: Equal](p_r: Double, p_m: Double)\n")),Object(i.b)("h3",{id:"best_1_exp"},"best_1_exp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"best_1_exp[S, A: Numeric: Equal](p_r: Double, p_m: Double)\n")),Object(i.b)("h3",{id:"best_bin"},"best_bin"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"best_bin[S, A: Numeric: Equal](p_r: Double, p_m: Double, y: Int Refined Positive)\n")),Object(i.b)("h3",{id:"rand_bin"},"rand_bin"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"rand_bin[S, A: Numeric: Equal](p_r: Double, p_m: Double, y: Int Refined Positive)\n")),Object(i.b)("h3",{id:"best_exp"},"best_exp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"best_exp[S, A: Numeric: Equal](p_r: Double, p_m: Double, y: Int Refined Positive)\n")),Object(i.b)("h3",{id:"rand_exp"},"rand_exp"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"rand_exp[S, A: Numeric: Equal](p_r: Double, p_m: Double, y: Int Refined Positive)\n")),Object(i.b)("h3",{id:"randtobest"},"randToBest"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def randToBest[S, A: Numeric: Equal](\n    p_r: Double,\n    p_m: Double,\n    gamma: Double,\n    y: Int Refined Positive,\n    z: (Double, Position[A]) => RVar[NonEmptyList[Boolean]])\n")),Object(i.b)("h3",{id:"currenttobest"},"currentToBest"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def currentToBest[S, A: Numeric: Equal](\n    p_r: Double,\n    p_m: Double,\n    y: Int Refined Positive,\n    z: (Double, Position[A]) => RVar[NonEmptyList[Boolean]])\n")))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),s=d(n),p=a,m=s["".concat(o,".").concat(p)]||s[p]||u[p]||i;return n?r.a.createElement(m,l({ref:t},c,{components:n})):r.a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);