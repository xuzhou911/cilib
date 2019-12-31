(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{173:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),i=(t(0),t(189)),o={},s=[],l={id:"design/rvar",title:"rvar",description:"# RVar",source:"@site/docs/design/rvar.md",permalink:"/docs/design/rvar"},c={rightToc:s,metadata:l},b="wrapper";function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"rvar"},"RVar"),Object(i.b)("p",null,"An instance of ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," represents a computation that, when executed,\nresults in a value with randomness applied. ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," is one of the most\nimportant structures in CIlib and is therefore discussed first in order to\nunderstand how the data structure works."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"RVar")," has a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:""}),"monad")," instance and therefore allows a for a large amount\nof composition, but more importantly allows for the tracking of randomness\nwithin the ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," computation. This tracking is of the utmost importance\nwithin computational intelligence algorithms, as randomness needs to be\ncontrolled in a manner that facilitates repetition. In other words,\neven if a computation uses randomness, given the same inputs, the same\nresults are expected even with randomness applied."),Object(i.b)("p",null,"Due to the monadic nature of the data structure, the data structure may be\ntransformed by functions such as ",Object(i.b)("inlineCode",{parentName:"p"},"map"),", ",Object(i.b)("inlineCode",{parentName:"p"},"flatMap"),", etc"),Object(i.b)("p",null,"There are several predefined combinators that allow the user to use and\ncreate ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," computations. These include functions for randomness applied\nto primitive types (such and ",Object(i.b)("inlineCode",{parentName:"p"},"Int")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Double"),") to more complex types that\nbuild on the primitives, or even for user defined types."),Object(i.b)("p",null,"The simplest would be to look at some examples of ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," usage. It is quite\ncommon to request several random numbers. ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," provides several functions,\nwith ",Object(i.b)("inlineCode",{parentName:"p"},"ints")," and ",Object(i.b)("inlineCode",{parentName:"p"},"doubles")," being the most common for random variable\ncreation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val ints = RVar.ints(5)\n// ints: RVar[List[Int]] = cilib.RVar$$anon$4@6de91174\nval doubles = RVar.doubles(5)\n// doubles: RVar[List[Double]] = cilib.RVar$$anon$4@1b49f1ea\n")),Object(i.b)("p",null,"Both functions result in a ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," that, when provided with a pseudo-random\nnumber generator (PRNG), will result in a list of values."),Object(i.b)("p",null,"The user if free to define a PRNG for themselves, but CIlib provides a default\nPRNG that is suitable for scientific work. The CMWC generator may be\ninitialized by either providing a seed value for the pseudo-random number\nstream, or it may be taken from the current time of the computer. It is always\nrecommended to record the seed value, so that others may reproduce results,\nespecially if the results are to be published."),Object(i.b)("p",null,"Let's create a ",Object(i.b)("inlineCode",{parentName:"p"},"RNG")," instance using both methods:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val rng = RNG.init(1234L)\n// rng: RNG = cilib.CMWC@57454351\nval fromTimeYOLO = RNG.fromTime\n// fromTimeYOLO: RNG = cilib.CMWC@1c5a9e2f\n")),Object(i.b)("p",null,"Now, let's run both ",Object(i.b)("inlineCode",{parentName:"p"},"doubles")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ints")," with the generator:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val r1 = ints.run(rng)\n// r1: (RNG, List[Int]) = (\n//   cilib.CMWC@399d4e61,\n//   List(-2012280037, -456312394, -1608573853, -1720473833, 1662253751)\n// )\ndoubles.run(rng)\n// res0: (RNG, List[Double]) = (\n//   cilib.CMWC@6d8f3e19,\n//   List(\n//     0.5314795508050395,\n//     0.6254747152242208,\n//     0.3870236094802634,\n//     0.3590652564475848,\n//     0.1350043437170152\n//   )\n// )\nval r2 = ints.run(rng)\n// r2: (RNG, List[Int]) = (\n//   cilib.CMWC@102da732,\n//   List(-2012280037, -456312394, -1608573853, -1720473833, 1662253751)\n// )\n\nr1._2 == r2._2\n// res1: Boolean = true\n")),Object(i.b)("p",null,"The result is a tuple of the state of the PRNG after being used in the\ncomputation, together with the result of the computation itself. The\nimportant point to note is that running the computation again, with the\nsame PRNG, that is the original state of the PRNG ",Object(i.b)("em",{parentName:"p"},"will")," result in the same\nobtained results. Unlike the normal PRNG within the JVM platform, obtaining\nsome random value from the source does not implicitly mutate the PRNG. In\norder to keep selecting from the PRNG stream, the next state of the PRNG\nshould be passed into subsequent computations, when needed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val (rng2, x) = ints.run(rng)\n// rng2: RNG = cilib.CMWC@584ef8fe\n// x: List[Int] = List(\n//   -2012280037,\n//   -456312394,\n//   -1608573853,\n//   -1720473833,\n//   1662253751\n// )\n\nval (rng3, y) = ints.run(rng2)\n// rng3: RNG = cilib.CMWC@bf35bd0\n// y: List[Int] = List(\n//   -973239118,\n//   1542173555,\n//   1984558752,\n//   579839250,\n//   609517835\n// )\n\nx != y\n// res2: Boolean = true\n")),Object(i.b)("p",null,"This manual state passing for the PRNG is very cumbersome and as a result,\nthe monad instance of ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," provides this exact functionality to the user,\nthereby preventing accidental errors due to incorrect usage of PRNG state.\nFurthermore, the monad instance for ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," allows for cleaner syntax through\nthe use of a ",Object(i.b)("inlineCode",{parentName:"p"},"for"),"-comprehension as provided by Scala:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val composition = for {\n  a <- RVar.next[Int] // Get a single Int\n  b <- RVar.next[Double] // Get a single Double, using the next state of the PRNG\n  c <- RVar.next[Boolean] // Get a Boolean, again passing the PRNG state\n} yield if (c) a*b else b\n// composition: RVar[Double] = cilib.RVar$$anon$4@1f98d341\n\ncomposition.run(rng)\n// res3: (RNG, Double) = (cilib.CMWC@6271f3b7, -1.798488339436242E9)\n")),Object(i.b)("p",null,"From this definition of how randomness is managed, we can derive several\nuseful algorithms which operate within the ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")," computation. Please refer\nto the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://ciren.github.io/cilib/api/cilib/RVar$.html"}),"scaladoc")," for\nmore combinators, but some of the more commonly used are illustrated below:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val sampleList = NonEmptyList(6,4,5,2,1,3)\n// sampleList: NonEmptyList[Int] = NonEmpty[6,4,5,2,1,3]\n\nRVar.shuffle(sampleList).run(rng)\n// res4: (RNG, NonEmptyList[Int]) = (\n//   cilib.CMWC@4dd76e0f,\n//   NonEmpty[4,3,5,1,2,6]\n// )\nRVar.sample(3, sampleList).run(rng)\n// res5: (RNG, Option[List[Int]]) = (cilib.CMWC@5c6b81be, Some(List(4, 3, 5)))\n")),Object(i.b)("p",null,"Building on ",Object(i.b)("inlineCode",{parentName:"p"},"RVar"),", we can easily define probability distributions from\nwhich, randomness may be sampled. The provided distributions, where\nstandard distributions are also defined, include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Uniform"),Object(i.b)("li",{parentName:"ul"},"Gaussian / Normal"),Object(i.b)("li",{parentName:"ul"},"Cauchy"),Object(i.b)("li",{parentName:"ul"},"Gamma"),Object(i.b)("li",{parentName:"ul"},"Exponential"),Object(i.b)("li",{parentName:"ul"},"etc")),Object(i.b)("p",null,"The interface for the distributions is simply a resulting ",Object(i.b)("inlineCode",{parentName:"p"},"RVar")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"// Use a derived function from monad to repeat an action 'n' times\nDist.stdNormal.replicateM(5).run(rng)\n// res6: (RNG, List[Double]) = (\n//   cilib.CMWC@5b053a9,\n//   List(\n//     0.12471034611540575,\n//     0.10241216207344515,\n//     -0.49485286860096944,\n//     -2.6592051237450325,\n//     0.7016898748604742\n//   )\n// )\n")))}p.isMDXComponent=!0},189:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),b=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},p=function(e){var n=b(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(t),u=a,d=p["".concat(o,".").concat(u)]||p[u]||m[u]||i;return t?r.a.createElement(d,s({ref:n},c,{components:t})):r.a.createElement(d,s({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);