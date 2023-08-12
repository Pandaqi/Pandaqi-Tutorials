---
title: "Math Symbols"
type: "article"
weight: 12
enableMathJax: true
---

I've already subtly mentioned that LaTeX uses a _very complex_ set of rules to determine the amount of spacing around symbols.It also supports a humongous number of symbols.

This means I will give an incomplete summary of those spacing rules, so I can use them to group all symbols cleanly.

Basically, LaTeX has placed symbols in 7 different *levels*. Each level has its own fixed spacing rules. 

The [Greek symbols](../greek-symbols/) from last chapter, for example, are from the first level. They always have the default amount of spacing on both left and right side. All letters and numbers, [spacing commands](../math-spacing-and-special-text/), and [math accents](../math-accents/) are also in level 1.

Most of these symbols need the `amssymb` package. I, personally, always include it just to be sure.

## Level 1---Simple Symbols

Simple symbols don't have any advanced functionality. Just type the command and the symbol is displayed. Some of them also have no predefined function in mathematics.

### Basic

| Visual                       | Command          | Visual                     | Command |
| ---------------------------- | ---------------- | -------------------------- | -------------- |
| \\( \aleph \\)       |  `\aleph`        | \\( \mho \\)       | `\mho` |
| \\( \beth \\)        |  `\beth`        |  \\( \partial \\)   |  `\partial` |
| \\( \daleth \\)      |  `\daleth`      |  \\( \wp \\)        |  `\wp` |
| \\( \gimel \\)       |  `\gimel`        | \\( \circledS \\)  |  `\circledS` |
| \\( \complement \\)  |  `\complement`  |  \\( \Bbbk \\)      |  `\Bbbk` |
| \\( \ell \\)         |  `\ell`         |  \\( \Finv \\)      |  `\Finv` |
| \\( \eth \\)         |  `\eth`         |  \\( \Game \\)      |  `\Game` |
| \\( \hbar \\)        |  `\hbar`        |  \\( \Im \\)        |  `\Im` |
| \\( \hslash \\)      |  `\hslash`      |  \\( \Re \\)        |  `\Re` |

### Specialized

| Visual                     | Command                 | Visual                 |  Command |
| -------------------------- | ----------------------- | ---------------- | -------------------- |
| \\( \\# \\)                  | `\#`                   | \\( \infty \\)           |  `\infty` |
| \\( \angle \\)               | `\angle`              |  \\( \lozenge \\)         |  `\lozenge` |
| \\( \backprime \\)           | `\backprime`          | \\( \measuredangle \\)    | `\measuredangle` |
| \\( \bigstar \\)             | `\bigstar`            |  \\( \nabla \\)           |  `\nabla` |
| \\( \blacklozenge \\)        | `\blacklozenge`       |  \\( \natural \\)         |  `\natural` |
| \\( \blacksquare \\)         | `\blacksquare`        |  \\( \neg \\)             |  `\neg` |
| \\( \blacktriangle \\)       | `\blacktriangle`      |  \\( \nexists \\)         |  `\nexists` |
| \\( \blacktriangledown \\)   | `\blacktriangledown`  |  \\( \prime \\)           |  `\prime` |
| \\( \bot \\)                 | `\bot`                |  \\( \S \\)               |  `\S` |
| \\( \clubsuit \\)            | `\clubsuit`           |  \\( \sharp \\)           |  `\sharp` |
| \\( \diagdown \\)            | `\diagdown`           |  \\( \spadesuit \\)       |  `\spadesuit` |
| \\( \diagup \\)              | `\diagup`             |  \\( \sphericalangle \\)  |  `\sphericalangle` |
| \\( \diamondsuit \\)         | `\diamondsuit`        |  \\( \square p \\)        |  `\square p` |
| \\( \emptyset \\)            | `\emptyset`           |  \\( \surd \\)            |  `\surd` |
| \\( \exists \\)              | `\exists`             |  \\( \top \\)             |  `\top` |
| \\( \flat \\)                | `\flat`               |  \\( \triangle \\)        |  `\triangle` |
| \\( \forall \\)              | `\forall`             |  \\( \triangledown \\)    |  `\triangledown` |
| \\( \heartsuit \\)           | `\heartsuit`          |  \\( \varnothing \\)      |  `\varnothing` |

## Level 2---Functions

Contains the big symbols and functions we've discussed, with those fancy subscripts and superscripts. See: [Sums, Integrals and More](../functions) 

Nothing new here, let's continue!

## Level 3---Binary Operators

Binary operators perform an operation using the two letters/symbols around it, which means there's not much space around them.

| Visual                           | Command              | Visual                            | Command |
| ---------------------------------|---------------------| --------------------------------- | --------------------- |
| \\( \* \\)                   | `*`                  | \\( \divideontimes \\)    |  `\divideontimes` |
| \\( + \\)                    | `+`                  | \\( \dotplus \\)          |  `\dotplus` |
| \\( - \\)                    | `-`                  | \\( \doublebarwedge \\)   |  `\doublebarwedge` |
| \\( \amalg \\)            | `\amalg`             | \\( \gtrdot \\)           | `\gtrdot` |
| \\( \ast \\)              | `\ast`               | \\( \intercal \\)         | `\intercal` |
| \\( \barwedge \\)         | `\barwedge`          | \\( \leftthreetimes \\)   | `\leftthreetimes` |
| \\( \bigcirc \\)          | `\bigcirc`           | \\( \lessdot \\)          | `\lessdot` |
| \\( \bigtriangledown \\)  | `\bigtriangledown`   | \\( \ltimes \\)           | `\ltimes` |
| \\( \bigtriangleup \\)    | `\bigtriangleup`     | \\( \mp \\)               | `\mp` |
| \\( \boxdot \\)           | `\boxdot`            | \\( \odot \\)             | `\odot` |
| \\( \boxminus \\)         | `\boxminus`          | \\( \ominus \\)           | `\ominus` |
| \\( \boxplus \\)          | `\boxplus`           | \\( \oplus \\)            | `\oplus` |
| \\( \boxtimes \\)         | `\boxtimes`          | \\( \oslash \\)           | `\oslash` |
| \\( \bullet \\)           | `\bullet`            | \\( \otimes \\)           | `\otimes` |
| \\( \cap \\)              | `\cap`               | \\( \pm \\)               | `\pm` |
| \\( \Cap \\)              | `\Cap`               | \\( \rightthreetimes \\)  | `\rightthreetimes` |
| \\( \cdot \\)             | `\cdot`              | \\( \rtimes \\)           | `\rtimes` |
| \\( \centerdot \\)        | `\centerdot`         | \\( \setminus \\)         | `\setminus` |
| \\( \circ \\)             | `\circ`              | \\( \smallsetminus \\)    | `\smallsetminus` |
| \\( \circledast \\)       | `\circledast`        | \\( \sqcap \\)            | `\sqcap` |
| \\( \circledcirc \\)      | `\circledcirc`       | \\( \sqcup \\)            | `\sqcup` |
| \\( \circleddash \\)      | `\circleddash`       | \\( \star \\)             | `\star` |
| \\( \cup \\)              | `\cup`               | \\( \times \\)            | `\times` |
| \\( \Cup \\)              | `\Cup`               | \\( \triangleleft \\)     | `\triangleleft` |
| \\( \curlyvee \\)         | `\curlyvee`          | \\( \triangleright \\)    | `\triangleright` |
| \\( \curlywedge \\)       | `\curlywedge`        | \\( \uplus \\)            | `\uplus` |
| \\( \dagger \\)           | `\dagger`            | \\( \vee \\)              | `\vee` |
| \\( \ddagger \\)          | `\ddagger`           | \\( \veebar \\)           | `\veebar` |
| \\( \diamond \\)          | `\diamond`           | \\( \wedge \\)            | `\wedge` |
| \\( \div \\)              | `\div`               | \\( \wr \\)               | `\wr` |

## Level 4---Relations

Relational operators define a relationship between what's around it, such as equality or a specific inequality. They also contain the symbols often used for displaying relationships---arrows.

### Relational/Comparison Operators

| Visual                          | Command            |  Visual                        | Command |
| ------------------------------- | ------------------- | ------------------------------| ------------------ |
| \\( \< \\)                 |  `<`                |  \\( \lll \\)           | `\lll` |
| \\( = \\)                  |  `=`                |  \\( \lnapprox \\)      | `\lnapprox` |
| \\( \> \\)                 |  `>`                |  \\( \lneq \\)          | `\lneq` |
| \\( \approx \\)          | `\approx`          | \\( \lneqq \\)          | `\lneqq` |
| \\( \approxeq \\)        | `\approxeq`        | \\( \lnsim \\)          | `\lnsim` |
| \\( \asymp \\)           | `\asymp`           | \\( \lvertneqq \\)      | `\lvertneqq` |
| \\( \backsim \\)         | `\backsim`         | \\( \ncong \\)          | `\ncong` |
| \\( \backsimeq \\)       | `\backsimeq`       | \\( \neq \\)            | `\neq` |
| \\( \bumpeq \\)          | `\bumpeq`          | \\( \ngeq \\)           | `\ngeq` |
| \\( \Bumpeq \\)          | `\Bumpeq`          | \\( \ngeqq \\)          | `\ngeqq` |
| \\( \circeq \\)          | `\circeq`          | \\( \ngeqslant \\)      | `\ngeqslant` |
| \\( \cong \\)            | `\cong`            | \\( \ngtr \\)           | `\ngtr` |
| \\( \curlyeqprec \\)     | `\curlyeqprec`     | \\( \nleq \\)           | `\nleq` |
| \\( \curlyeqsucc \\)     | `\curlyeqsucc`     | \\( \nleqq \\)          | `\nleqq` |
| \\( \doteq \\)           | `\doteq`           | \\( \nleqslant \\)      | `\nleqslant` |
| \\( \doteqdot \\)        | `\doteqdot`        | \\( \nless \\)          | `\nless` |
| \\( \eqcirc \\)          | `\eqcirc`          | \\( \nprec \\)          | `\nprec` |
| \\( \eqsim \\)           | `\eqsim`           | \\( \npreceq \\)        | `\npreceq` |
| \\( \eqslantgtr \\)      | `\eqslantgtr`      | \\( \nsim \\)           | `\nsim` |
| \\( \eqslantless \\)     | `\eqslantless`     | \\( \nsucc \\)          | `\nsucc` |
| \\( \equiv \\)           | `\equiv`           | \\( \nsucceq \\)        | `\nsucceq` |
| \\( \fallingdotseq \\)   | `\fallingdotseq`   | \\( \prec \\)           | `\prec` |
| \\( \geq \\)             | `\geq`             | \\( \precapprox \\)     | `\precapprox` |
| \\( \geqq \\)            | `\geqq`            | \\( \preccurlyeq \\)    | `\preccurlyeq` |
| \\( \geqslant \\)        | `\geqslant`        | \\( \preceq \\)         | `\preceq` |
| \\( \gg \\)              | `\gg`              | \\( \precnapprox \\)    | `\precnapprox` |
| \\( \ggg \\)             | `\ggg`             | \\( \precneqq \\)       | `\precneqq` |
| \\( \gnapprox \\)        | `\gnapprox`        | \\( \precnsim \\)       | `\precnsim` |
| \\( \gneq \\)            | `\gneq`            | \\( \precsim \\)        | `\precsim` |
| \\( \gneqq \\)           | `\gneqq`           | \\( \risingdotseq \\)   | `\risingdotseq` |
| \\( \gnsim \\)           | `\gnsim`           | \\( \sim \\)            | `\sim` |
| \\( \gtrapprox \\)       | `\gtrapprox`       | \\( \simeq \\)          | `\simeq` |
| \\( \gtreqless \\)       | `\gtreqless`       | \\( \succ \\)           | `\succ` |
| \\( \gtreqqless \\)      | `\gtreqqless`      | \\( \succapprox \\)     | `\succapprox` |
| \\( \gtrless \\)         | `\gtrless`         | \\( \succcurlyeq \\)    | `\succcurlyeq` |
| \\( \gtrsim \\)          | `\gtrsim`          | \\( \succeq \\)         | `\succeq` |
| \\( \gvertneqq \\)       | `\gvertneqq`       | \\( \succnapprox \\)    | `\succnapprox` |
| \\( \leq \\)             | `\leq`             | \\( \succneqq \\)       | `\succneqq` |
| \\( \leqq \\)            | `\leqq`            | \\( \succnsim \\)       | `\succnsim` |
| \\( \leqslant \\)        | `\leqslant`        | \\( \succsim \\)        | `\succsim` |
| \\( \lessapprox \\)      | `\lessapprox`      | \\( \thickapprox \\)    | `\thickapprox` |
| \\( \lesseqgtr \\)       | `\lesseqgtr`       | \\( \thicksim \\)       | `\thicksim` |
| \\( \lesseqqgtr \\)      | `\lesseqqgtr`      | \\( \triangleq \\)      | `\triangleeq` |
| \\( \lessgtr \\)         | `\lessgtr`         |                       |           |
| \\( \lesssim \\)         | `\lesssim`         |                       |           |
| \\( \ll \\)              | `\ll`              |                       |           |

### Arrows

| Visual                      | Command                 |  Visual                   |           Command |
| ----------------------------|-------------------------|--------------------------|----------------------- |
| \\( \circlearrowleft \\)      | `\circlearrowleft`      | \\( \Lsh \\)                | `\Lsh` |
| \\( \circlearrowright \\)     | `\circlearrowright`     | \\( \mapsto \\)             | `\mapsto` |
| \\( \curvearrowleft \\)       | `\curvearrowleft`       | \\( \multimap \\)           | `\multimap` |
| \\( \curvearrowright \\)      | `\curvearrowright`      | \\( \nLeftarrow \\)         | `\nLeftarrow` |
| \\( \downdownarrows \\)       | `\downdownarrows`       | \\( \nLeftrightarrow \\)    | `nLeftrightarrow` |
| \\( \downharpoonleft \\)      | `\downharpoonleft`      | \\( \nRightarrow \\)        | `\nRightarrow` |
| \\( \downharpoonright \\)     | `\downharpoonright`     | \\( \nearrow \\)            | `\nearrow` |
| \\( \hookleftarrow \\)        | `\hookleftarrow`        | \\( \nleftarrow \\)         | `\nleftarrow` |
| \\( \hookrightarrow \\)       | `\hookrightarrow`       | \\( \nleftrightarrow \\)    | `\nleftrightarrow` |
| \\( \leftarrow \\)            | `\leftarrow`            | \\( \nrightarrow \\)        | `\nrightarrow` |
| \\( \Leftarrow \\)            | `\Leftarrow`            | \\( \nwarrow \\)            | `\nwarrow` |
| \\( \leftarrowtail \\)        | `\leftarrowtail`        | \\( \rightarrow \\)         | `\rightarrow` |
| \\( \leftharpoondown \\)      | `\leftharpoondown`      | \\( \Rightarrow \\)         | `\Rightarrow` |
| \\( \leftharpoonup \\)        | `\leftharpoonup`        | \\( \rightarrowtail \\)     | `\rightarrowtail` |
| \\( \leftleftarrows \\)       | `\leftleftarrows`       | \\( \rightharpoondown \\)   | `\rightharpoondown` |
| \\( \leftrightarrow \\)       | `\leftrightarrow`       | \\( \rightharpoonup \\)     | `\rightharpoonup` |
| \\( \Leftrightarrow \\)       | `\Leftrightarrow`       | \\( \rightleftarrows \\)    | `\rightleftarrows` |
| \\( \leftrightarrows \\)      | `\leftrightarrows`      | \\( \rightleftharpoons \\)  | `\rightleftharpoons` |
| \\( \leftrightharpoons \\)    | `\leftrightharpoons`    | \\( \rightrightarrows \\)   | `\rightrightarrows` |
| \\( \leftrightsquigarrow \\)  | `\leftrightsquigarrow`  | \\( \rightsquigarrow \\)    | `\rightsquigarrow` |
| \\( \Lleftarrow \\)           | `\Lleftarrow`           | \\( \Rrightarrow \\)        | `\Rrightarrow` |
| \\( \longleftarrow \\)        | `\longleftarrow`        | \\( \Rsh \\)                | `\Rsh` |
| \\( \Longleftarrow \\)        | `\Longleftarrow`        | \\( \searrow \\)            | `\searrow` |
| \\( \longleftrightarrow \\)   | `\longleftrightarrow `  | \\( \swarrow \\)            | `\swarrow` |
| \\( \Longleftrightarrow \\)   | `\Longleftrightarrow`   | \\( \twoheadleftarrow \\)   | `\twoheadleftarrow` |
| \\( \longmapsto \\)           | `\longmapsto`           | \\( \twoheadrightarrow \\)  | `\twoheadrightarrow` |
| \\( \longrightarrow \\)       | `\longrightarrow`       | \\( \upharpoonleft \\)      | `\upharpoonleft` |
| \\( \Longrightarrow \\)       | `\Longrightarrow`       | \\( \upharpoonright \\)     | `\upharpoonright` |
| \\( \looparrowleft \\)        | `\looparrowleft`        | \\( \upuparrows \\)         | `\upuparrows` |
| \\( \looparrowright \\)       | `\looparrowright`       |                           |           |

### Others

| Visual                    | Command                 | Visual                   |  Command |
| --------------------------|-------------------------|--------------------------|--------------- |
| \\( \backepsilon \\)        |  `\backepsilon`         | \\( \smallfrown \\)        | `\smallfrown` |
| \\( \because \\)            |  `\because`             | \\( \smallsmile \\)        | `\smallsmile` |
| \\( \between \\)            |  `\between`             | \\( \smile \\)             | `\smile` |
| \\( \blacktriangleleft \\)  |  `\blacktriangleleft`   | \\( \sqsubset \\)          | `\sqsubset` |
| \\( \blacktriangleright \\) |  `\blacktriangleright`  | \\( \sqsubseteq \\)        | `\sqsubseteq` |
| \\( \bowtie \\)             |  `\bowtie`              | \\( \sqsupset \\)          | `\sqsupset` |
| \\( \dashv \\)              |  `\dashv`               | \\( \sqsupseteq \\)        | `\sqsupseteq` |
| \\( \frown \\)              |  `\frown`               | \\( \subset \\)            | `\subset` |
| \\( \in \\)                 |  `\in`                  | \\( \Subset \\)            | `\Subset` |
| \\( \mid \\)                |  `\mid`                 | \\( \subseteq \\)          | `\subseteq` |
| \\( \models \\)             |  `\models`              | \\( \subseteqq \\)         | `\subseteqq` |
| \\( \ni \\)                 |  `\ni`                  | \\( \subsetneq \\)         | `\subsetneq` |
| \\( \nmid \\)               |  `\nmid`                | \\( \subsetneqq \\)        | `\subsetneqq` |
| \\( \notin \\)              |  `\notin`               | \\( \supset \\)            | `\supset` |
| \\( \nparallel \\)          |  `\nparallel`           | \\( \Supset \\)            | `\Supset` |
| \\( \nshortmid \\)          |  `\nshortmid`           | \\( \supseteq \\)          | `\supseteq` |
| \\( \nshortparallel \\)     |  `\nshortparallel`      | \\( \supseteqq \\)         | `\supseteqq` |
| \\( \nsubseteq \\)          |  `\nsubseteq`           | \\( \supsetneq \\)         | `\supsetneq` |
| \\( \nsubseteqq \\)         |  `\nsubseteqq`          | \\( \supsetneqq \\)        | `\supsetneqq` |
| \\( \nsupseteq \\)          |  `\nsupseteq`           | \\( \therefore \\)         | `\therefore` |
| \\( \nsupseteqq \\)         |  `\nsupseteqq`          | \\( \trianglelefteq \\)    | `\trianglelefteq` |
| \\( \ntriangleleft \\)      |  `\ntriangleleft`       | \\( \trianglerighteq \\)   | `\trianglerighteq` |
| \\( \ntrianglelefteq \\)    |  `\ntrianglelefteq`     | \\( \varpropto \\)         | `\varpropto` |
| \\( \ntriangleright \\)     |  `\ntriangleright`      | \\( \varsubsetneq \\)      | `\varsubsetneq` |
| \\( \ntrianglerighteq \\)   |  `\ntrianglerighteq`    | \\( \varsubsetneqq \\)     | `\varsubsetneqq` |
| \\( \nvdash \\)             |  `\nvdash`              | \\( \varsupsetneq \\)      | `\varsupsetneq` |
| \\( \nVdash \\)             |  `\nVdash`              | \\( \varsupsetneqq \\)     | `\varsupsetneqq` |
| \\( \nvDash \\)             |  `\nvDash`              | \\( \vartriangle \\)       | `\vartriangle` |
| \\( \nVDash \\)             |  `\nVDash`              | \\( \vartriangleleft \\)   | `\vartriangleleft` |
| \\( \parallel \\)           |  `\parallel`            | \\( \vartriangleright \\)  | `\vartriangleright` |
| \\( \perp \\)               |  `\perp`                | \\( \vdash \\)             | `\vdash` |
| \\( \pitchfork \\)          |  `\pitchfork`           | \\( \Vdash \\)             | `\Vdash` |
| \\( \propto \\)             |  `\propto`              | \\( \vDash \\)             | `\vDash` |
| \\( \shortmid \\)           |  `\shortmid`            | \\( \Vvdash \\)            | `\Vvdash` |
| \\( \shortparallel \\)      |  `\shortparallel`       |                          |           |                   

## Level 5 & 6---Left/Right and Open/Close

We've already discussed these in-depth in the [Delimiters](../delimiters/) chapter. The only thing new here are vertical arrows that have the ability to scale with whatever they are around.

| Visual                      | Command         | Visual           | Command |
| --------------------------- | --------------- | ------------------ | ----------------- |
| \\( \uparrow \\)     | `\uparrow`     | \\( \Downarrow \\)     | `\Downarrow` |
| \\( \Uparrow \\)     | `\uparrow`     | \\( \updownarrow \\)   | `\updownarrow` |
| \\( \downarrow \\)   | `\downarrow`   | \\( \Updownarrow \\)   | `\Updownarrow` |

## Level 7---Punctuation Symbols

This level, not surprisingly, contains all regular symbols used for punctuation. On top of that, there are some commands that generate dots, which are more useful than you think.

| Visual        | Command     | Visual          |  Command |
| ------------- | ----------- | --------------- | -----------|
| \\( \dotsb \\)  | `\dotsb`  |  \\( \ddots \\)   | `\ddots` |
| \\( \vdots \\)  | `\vdots`  |  \\( \dotsc \\)   | `\dotsc` |
| \\( \dotsi \\)  | `\dotsi`  |  \\( \dotsm \\)  |  `\dotsm` |
| \\( \dotso \\)  | `\dotso`  |                |            |