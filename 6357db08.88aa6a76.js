(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(1),i=n(9),o=(n(0),n(189)),r={id:"runner",title:"Runner"},l=[{value:"What is Runner?",id:"what-is-runner",children:[{value:"Iteration",id:"iteration",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]},{value:"Creating a GA",id:"creating-a-ga",children:[{value:"Imports",id:"imports",children:[]},{value:"The Problem Environment",id:"the-problem-environment",children:[]},{value:"The GA Algorithm",id:"the-ga-algorithm",children:[]},{value:"Selection Method",id:"selection-method",children:[]},{value:"Selection Method",id:"selection-method-1",children:[]},{value:"Crossover Method",id:"crossover-method",children:[]},{value:"Mutation Method",id:"mutation-method",children:[]},{value:"My GA",id:"my-ga",children:[]},{value:"Creating a Collection",id:"creating-a-collection",children:[]},{value:"Creating an Iterator",id:"creating-an-iterator",children:[]},{value:"Running our GA",id:"running-our-ga",children:[]}]},{value:"Summary",id:"summary",children:[]}],s={id:"community-tutorial/runner",title:"Runner",description:"# Runner and Our First Algorithm",source:"@site/docs/community-tutorial/runner.md",permalink:"/docs/community-tutorial/runner"},c={rightToc:l,metadata:s},p="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(p,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"runner-and-our-first-algorithm"},"Runner and Our First Algorithm"),Object(o.b)("p",null,"In this chapter we are going to create our very own Genetic Algorithm.\nBut there are a few things we are going to have to discuss first before we jump into the creating a GA."),Object(o.b)("p",null,'CILib offers a data type that we may use to run our algorithms.\nI say "may" because, if so choose, you create your own way of running the algorithms.\nThis data type is called ',Object(o.b)("inlineCode",{parentName:"p"},"Runner"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"Runner")," isn't a part of the cilib-core, but is included in this part of the book because it is needed to demonstrate everything we have learnt.\nIn order to include ",Object(o.b)("inlineCode",{parentName:"p"},"Runner")," to your project you need to add ",Object(o.b)("inlineCode",{parentName:"p"},"cilib-exec")," as a dependency in your ",Object(o.b)("inlineCode",{parentName:"p"},"build.sbt"),"."),Object(o.b)("p",null,"And since we are creating a GA we should also include ",Object(o.b)("inlineCode",{parentName:"p"},"cilib-ga"),".\nThe reason we are creating a GA rather than, let's say,\na PSO is that the ga package uses types we have seen before where as a PSO uses types exclusive to the PSO package (W=we will explore these later)."),Object(o.b)("p",null,"Your library dependencies should look very similar to the following..."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'libraryDependencies ++= Seq(\n    "net.cilib" %% "cilib-core" % "2.0",\n    "net.cilib" %% "cilib-ga" % "2.0",\n    "net.cilib" %% "cilib-exec" % "2.0"\n)\n')),Object(o.b)("p",null,"Once you have refreshed your project we can start looking at what ",Object(o.b)("inlineCode",{parentName:"p"},"Runner")," is."),Object(o.b)("h2",{id:"what-is-runner"},"What is Runner?"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Runner")," is an object within CILib that allows us to control the execution of our algorithm.\nIt provides us with methods that allow us to specify the:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Number of iterations the algorithm should run for."),Object(o.b)("li",{parentName:"ul"},"The algorithm."),Object(o.b)("li",{parentName:"ul"},"The entities in the search space search space.")),Object(o.b)("p",null,"Pretty cool, hey?\nThese are the discussed methods."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"repeat[F[_],A,B](n: Int, alg: Kleisli[Step[A,?],F[B],F[B]], collection: RVar[F[B]]): Step[A,F[B]]\n\nrepeatS[F[_],A,S,B](n: Int, alg: Kleisli[StepS[A,S,?],F[B],F[B]], collection: RVar[F[B]]): StepS[A,S,F[B]]\n")),Object(o.b)("p",null,'"Woah, that looks intimidating".\nSure, it definitely can appear that way so let\'s try to clarify it a bit.\nThe difference between the algorithms is simply that the one is dealing with ',Object(o.b)("inlineCode",{parentName:"p"},"Step")," and the other ",Object(o.b)("inlineCode",{parentName:"p"},"StepS"),".\nSo you would choose which repeat method based on the type you used in your algorithm.\nAs for the parameters, ",Object(o.b)("inlineCode",{parentName:"p"},"n: Int")," is the number of iterations the algorithm should run for.\nAnd ",Object(o.b)("inlineCode",{parentName:"p"},"collection: RVar[F[B]]")," are our ",Object(o.b)("em",{parentName:"p"},"entities")," in our search space.\nNow the second parameter is something we haven't come across yet.\nAll it is saying that we need an iteration type based on the algorithm."),Object(o.b)("h3",{id:"iteration"},"Iteration"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Iteration")," is an object defined within ",Object(o.b)("inlineCode",{parentName:"p"},"cilib-core")," that will create an ",Object(o.b)("em",{parentName:"p"},"iterator")," of our algorithm.\nAn ",Object(o.b)("em",{parentName:"p"},"iterator")," simply means are we running our algorithm synchronously or Asynchronously."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"sync_[M[_]:Applicative,A,B](f: NonEmptyList[A] => A => M[B]): Kleisli[M,NonEmptyList[A],NonEmptyList[B]]\n\nasync_[M[_]: Monad,A](f: NonEmptyList[A] => A => M[A]): Kleisli[M,NonEmptyList[A],NonEmptyList[A]\n")),Object(o.b)("p",null,"These methods are very ",Object(o.b)("em",{parentName:"p"},"raw")," and generic.\nThey are made public so that if you ever wanted to perhaps make your own iterator you could make use them if you desired so.\nThe following methods use the ",Object(o.b)("em",{parentName:"p"},"raw")," and generic methods to create something we are a bit more familiar with."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def sync[A,B,C](f: NonEmptyList[B] => B => Step[A,C]) = sync_[Step[A,?],B,C](f)\n\ndef syncS[A,S,B,C](f: NonEmptyList[B] => B => StepS[A,S,C]) = sync_[StepS[A,S,?], B,C](f)\n\ndef async[A,B](f: NonEmptyList[B] => B => Step[A,B]) = async_[Step[A,?], B](f)\n\ndef asyncS[A,S,B](f: NonEmptyList[B] => B => StepS[A,S,B]) = async_[StepS[A,S,?], B](f)\n")),Object(o.b)("p",null,"As we saw with runner we are given methods to handle both ",Object(o.b)("inlineCode",{parentName:"p"},"Step")," and ",Object(o.b)("inlineCode",{parentName:"p"},"StepS")," based algorithms."),Object(o.b)("h3",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"This may be a lot to take in.\nIf so don't worry as we are now going to create a ",Object(o.b)("inlineCode",{parentName:"p"},"GA")," from start to finish!"),Object(o.b)("h2",{id:"creating-a-ga"},"Creating a GA"),Object(o.b)("p",null,"Isn't this exciting!"),Object(o.b)("p",null,"All our work over the past chapters is coming together!"),Object(o.b)("p",null,"It should be noted that the only thing we will be using from\n",Object(o.b)("inlineCode",{parentName:"p"},"cilib-ga")," is the type ",Object(o.b)("inlineCode",{parentName:"p"},"Individual"),", which, as we discussed before, is\nan ",Object(o.b)("inlineCode",{parentName:"p"},"Enity")," with a state of type ",Object(o.b)("inlineCode",{parentName:"p"},"Unit")," since GA's do not need a state."),Object(o.b)("h3",{id:"imports"},"Imports"),Object(o.b)("p",null,"We will be using the following ",Object(o.b)("inlineCode",{parentName:"p"},"imports")," for our GA."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala",metastring:":silent",":silent":!0}),"import cilib._\nimport cilib.ga._\nimport scalaz._\nimport Scalaz._\nimport eu.timepit.refined.auto._\nimport spire.implicits.{eu => _, _}\nimport spire.math.Interval\n")),Object(o.b)("h3",{id:"the-problem-environment"},"The Problem Environment"),Object(o.b)("p",null,"For our problem we are going to attempt to find the greatest area\nproduced by a 2 dimensional rectangle. The sides can range from 0.1\nto 12."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val bounds = Interval(0.1, 12.0)^2\n\nval env = Environment(\n    cmp = Comparison.dominance(Max),\n    eval =  Eval.unconstrained[NonEmptyList,Double](pos => Feasible(pos.foldLeft1_ * _))).eval\n)\n")),Object(o.b)("h3",{id:"the-ga-algorithm"},"The GA Algorithm"),Object(o.b)("p",null,"The GA algorithm is the exact same one used in ",Object(o.b)("inlineCode",{parentName:"p"},"cilib-ga"),"."),Object(o.b)("p",null,"The reason we are intentionally defining it as opposed to importing it\nis so that we can see the inner workings and learn from it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def ga[S](\n             p_c: Double,\n             parentSelection: NonEmptyList[Individual[S]] => RVar[List[Individual[S]]],\n             crossover: List[Individual[S]] => RVar[List[Individual[S]]],\n             mutation: List[Individual[S]] => RVar[List[Individual[S]]]\n         ): NonEmptyList[Individual[S]] => Individual[S] => Step[Double,List[Individual[S]]] =\n    collection => x => for {\n        parents   <- Step.pointR(parentSelection(collection))\n        r         <- Step.pointR(Dist.stdUniform.map(_ < p_c))\n        crossed   <- if (r) Step.pointR[Double,List[Individual[S]]](crossover(parents))\n        else Step.point[Double,List[Individual[S]]](parents)\n        mutated   <- Step.pointR[Double,List[Individual[S]]](mutation(crossed))\n        evaluated <- mutated.traverseU(x => Step.eval((v: Position[Double]) => v)(x))\n    } yield evaluated\n")),Object(o.b)("p",null,"Wow. There is a lot going on here.\nLet's break it down.\nFirst the parameters:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"p_c //is our crossover rate\nparentSelection //is the function we will use to select the parents\ncrossover //is the function that we will use to produce off spring\nmutation //is the function we will use to mutate the offspring\n")),Object(o.b)("p",null,"All right. Not too bad. By being able to pass functions to a generic\nGA method allows us to build a GA specific to our needs. It should\nalso be noted that all the passable functions yield the same data\ntype. Now before we move to the actual implementation of the ",Object(o.b)("inlineCode",{parentName:"p"},"ga"),"\nmethod, I would like to remind you that for comprehensions are\nessentially chained ",Object(o.b)("inlineCode",{parentName:"p"},"flatMaps"),". This allows us to chain steps\ntogether. So we know that this method will return a function of type"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Individual[S]] => Individual[S] => Step[Double,List[Individual[S]]]")),Object(o.b)("p",null,"Which in simply means, that we are going to get a function that return\na ",Object(o.b)("inlineCode",{parentName:"p"},"Step")," representing a series of computations applied to every\n",Object(o.b)("inlineCode",{parentName:"p"},"Individual")," with a collection of ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals"),'. Okay, so now we know\nwhat we are returning but let\'s see how we get to that by looking at\nthe "series of computations".'),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"parents <- Step.pointR(parentSelection(collection))")),Object(o.b)("p",null,"Here we are selecting our parents from the collection using the\nparentSelection function that was passed as a parameter. Lastly, it\nwill be wrapped in a ",Object(o.b)("inlineCode",{parentName:"p"},"Step"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"r <- Step.pointR(Dist.stdUniform.map(_ < p_c))")),Object(o.b)("p",null,"Here we are assigning a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," wrapped in an ",Object(o.b)("inlineCode",{parentName:"p"},"Step"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"crossed <-\n  if (r) Step.pointR[Double,List[Individual[S]]](crossover(parents))\n  else Step.point[Double,List[Individual[S]]](parents)\n")),Object(o.b)("p",null,"If r is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," we will produce crossovers based on the ",Object(o.b)("inlineCode",{parentName:"p"},"parents")," using\nthe crossover function parameter, else we are going to just leave the\nparents as is. How frequently the crossover occurs depends on your\n",Object(o.b)("inlineCode",{parentName:"p"},"p_c"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"mutated <- Step.pointR[Double,List[Individual[S]]](mutation(crossed))")),Object(o.b)("p",null,"Nothing too complex here. We are simply mutating our ",Object(o.b)("inlineCode",{parentName:"p"},"crossed"),"\nindividuals using the mutation function parameter. Also note that\n",Object(o.b)("inlineCode",{parentName:"p"},"mutated")," will have a data type very similar tto our return type."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"evaluated <- mutated.traverseU(x => Step.eval((v: Position[Double]) => v)(x))")),Object(o.b)("p",null,"Lastly, we are taking every ",Object(o.b)("inlineCode",{parentName:"p"},"Individual")," from ",Object(o.b)("inlineCode",{parentName:"p"},"mutated")," and wrapping\neach one in an evaluation ",Object(o.b)("inlineCode",{parentName:"p"},"Step"),". Remember that this is just a step\nrepresenting evaluation, not actually evaluating the ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals"),"\nright now."),Object(o.b)("p",null,"Let's get to creating the functions we will be passing to our ga method."),Object(o.b)("h3",{id:"selection-method"},"Selection Method"),Object(o.b)("p",null,"For our selection method we will be creating a random selection\nmethod. We know that it needs to have the type\n",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Individual[S]] => RVar[List[Individual[S]]]"),". To make\nthis even easier to read we can include a custom type, ",Object(o.b)("inlineCode",{parentName:"p"},"type Ind =\nIndividual[Unit]"),", making it ",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Ind] =>\nRVar[List[Individual[S]]]"),". Create a function with the name\n",Object(o.b)("inlineCode",{parentName:"p"},"randomSelection")," that will randomly select two ",Object(o.b)("inlineCode",{parentName:"p"},"Inds")," from an non\nempty list."),Object(o.b)("div",{class:"solution"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala",metastring:":silent",":silent":!0}),"type Ind = Individual[Unit]\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val randomSelection: NonEmptyList[Ind] => RVar[List[Ind]] =\n    (l: NonEmptyList[Ind]) => RVar.sample(2, l).map(_.getOrElse(List.empty[Ind]))\n"))),Object(o.b)("h3",{id:"selection-method-1"},"Selection Method"),Object(o.b)("p",null,"For our selection method we will be creating a random selection\nmethod. We know that it needs to have the type\n",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Individual[S]] => RVar[List[Individual[S]]]"),". To make\nthis even easier to read we can include a custom type, ",Object(o.b)("inlineCode",{parentName:"p"},"type Ind =\nIndividual[Unit]"),", making it ",Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Ind] =>\nRVar[List[Individual[S]]]"),". Create a function with the name\n",Object(o.b)("inlineCode",{parentName:"p"},"randomSelection")," that will randomly select two ",Object(o.b)("inlineCode",{parentName:"p"},"Inds")," from an non\nempty list."),Object(o.b)("div",{class:"solution"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val randomSelection: NonEmptyList[Ind] => RVar[List[Ind]] =\n    (l: NonEmptyList[Ind]) => RVar.sample(2, l).map(_.getOrElse(List.empty[Ind]))\n"))),Object(o.b)("h3",{id:"crossover-method"},"Crossover Method"),Object(o.b)("p",null,"We will be creating a one point crossover method to be used in our GA.\nIt will need to have the type ",Object(o.b)("inlineCode",{parentName:"p"},"List[Individual[S]] =>\nRVar[List[Individual[S]]]")," and let's call it ",Object(o.b)("inlineCode",{parentName:"p"},"onePoint"),". There should\nbe two ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals"),", parents, in the list that will be used to create\ntwo new ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals")," from a one point cross over. Else we should\noutput an error."),Object(o.b)("div",{class:"solution"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'def onePoint(xs: List[Ind]): RVar[List[Ind]] =\n    xs match {\n        case a :: b :: _ =>\n            val point: RVar[Int] = Dist.uniformInt(Interval(0, a.pos.pos.size - 1))\n            point.map(p => List(\n                a.pos.take(p) ++ b.pos.drop(p),\n                b.pos.take(p) ++ a.pos.drop(p)\n            ).traverse(_.toNel.map(x => Entity((), Point(x, a.pos.boundary)))).getOrElse(List.empty[Ind]))\n        case _ => sys.error("Incorrect number of parents")\n    }\n'))),Object(o.b)("h3",{id:"mutation-method"},"Mutation Method"),Object(o.b)("p",null,"Our mutation method will be relatively simply. For every ",Object(o.b)("inlineCode",{parentName:"p"},"Individual"),"\nwe want to mutate its position where each point in the position is\nmutated based on a ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean"),". If It is true, mutate the point by\nmultiplying by a random number from a gaussian distribution. Else\nleave it as it is. This deciding ",Object(o.b)("inlineCode",{parentName:"p"},"Boolean")," is determined the same way\nr is in our ",Object(o.b)("inlineCode",{parentName:"p"},"ga")," method. Except, that is compared with a double\nparameter, ",Object(o.b)("inlineCode",{parentName:"p"},"p_m"),", representing the mutation rate. So you might need\ngroups of parameters. Call this method ",Object(o.b)("inlineCode",{parentName:"p"},"mutation")," and be aware of\nit's return type. Also some helpful hints are to think about using\n",Object(o.b)("inlineCode",{parentName:"p"},"Lenses")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"ModifyF")," function, as well as ",Object(o.b)("inlineCode",{parentName:"p"},"traverse")," for\nsequencing through points ot a list."),Object(o.b)("div",{class:"solution"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"def mutation(p_m: Double)(xs: List[Ind]): RVar[List[Ind]] =\n    xs.traverse(x => {\n        Lenses._position.modifyF((p: Position[Double]) => p.traverse(z => for {\n            za <- Dist.stdUniform.map(_ < p_m)\n            zb <- if (za) Dist.stdNormal.flatMap(Dist.gaussian(0,_)).map(_ * z) else RVar.point(z)\n        } yield zb\n        ))(x)\n    })\n"))),Object(o.b)("h3",{id:"my-ga"},"My GA"),Object(o.b)("p",null,"Now that we have defined all those methods we should be able to\nconstruct our GA with the following line of code:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"val myGA = ga(0.7, randomSelection, onePoint, mutation(0.2))")),Object(o.b)("p",null,"Great! Remember that what we have here is still just a function. One\nthat takes a collection of ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals")," and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Step"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"NonEmptyList[Ind] => Ind => Step[Double,List[Ind]]")),Object(o.b)("h3",{id:"creating-a-collection"},"Creating a Collection"),Object(o.b)("p",null,"We have the ",Object(o.b)("inlineCode",{parentName:"p"},"myGA")," function, but not the collection. So let's go ahead and\ncreate that. Keep in mind that we are dealing with ",Object(o.b)("inlineCode",{parentName:"p"},"Individuals")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"val swarm = Position.createCollection[Ind](x => Entity((), x))(bounds, 20)\n")),Object(o.b)("h3",{id:"creating-an-iterator"},"Creating an Iterator"),Object(o.b)("p",null,"Here is where things get a little more interesting. Remember the\n",Object(o.b)("inlineCode",{parentName:"p"},"Iteration")," section earlier in this chapter? Here is where we dive\ninto that. I'll first present the code and then we can go over it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'val iterator =\n    Iteration.sync(myGA).map(_.suml)\n      .flatMapK(r => Step.withCompare(o =>\n        r.sortWith((x,y) => Comparison.fittest(x.pos,y.pos).apply(o)))\n          .map(_.take(20).toNel.getOrElse(sys.error("error"))))\n')),Object(o.b)("p",null,"This code creates a synchronous iterator based on our ga that at each\ngeneration select the best 20 based on our comparison dominance.\n",Object(o.b)("inlineCode",{parentName:"p"},"Iteration.sync(myGA).map(_.suml)")," allows us to work with a\n",Object(o.b)("inlineCode",{parentName:"p"},"List[Ind]"),". ",Object(o.b)("inlineCode",{parentName:"p"},"r")," is an ",Object(o.b)("inlineCode",{parentName:"p"},"Ind")," which becomes a ",Object(o.b)("inlineCode",{parentName:"p"},"Step")," with a\ncomparison."),Object(o.b)("h3",{id:"running-our-ga"},"Running our GA"),Object(o.b)("p",null,"Lastly, running our program requires a ",Object(o.b)("inlineCode",{parentName:"p"},"Runner"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"println(Runner.repeat(1000, iterator, swarm).run(env).eval(RNG.init(12L)).toString)")),Object(o.b)("p",null,"This line of code will produce the results of our ga after 1000\niterations as a string."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"Well done!\nWe have successfully implemented a genetic algorithm using CILib.\nWhats great is that the code is easy to reuse.\nI encourage you to modify the code and really make it your own.\nIf, for whatever reason, you got stuck during the example here is the ","[link][ga-example-link]"," to where the example was based off.\nAnd for more example of CILib implementations you can view the example package ","[here][example-package]","."))}b.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},b=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return n?i.a.createElement(m,l({ref:t},c,{components:n})):i.a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);