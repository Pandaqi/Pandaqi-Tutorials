---
title: "Functions"
type: "article"
weight: 7
---

Any characters put into a math environment are displayed in an italic math font. Some operators though, mostly functions, are typically written with other letter styles. To make this efficient, these characters are provided as _commands_, simply by putting a `\` in front of the regular function name.

Here are all function commands in a nice table:

| Function      | Function     | Function     | Function   | Function
| ------------- | ------------ | ------------ | ---------- | -------------
| `\arccos`    | `\arcsin`   | `\arctan`  |  `\arg`   |  `\cos`
| `\cosh`      | `\cot`     | `\coth`    |  `\csc`    | `\deg`
| `\det_`      | `\dim`     |  `\exp`     |  `\gcd_`  |  `\hom`
| `\inf_`      | `\key`     |  `\lg`      |  `\lim_`   | `\liminf_`
| `\limsup_`   | `\ln`      |  `\log`     |  `\max_`  |  `\min_`
| `\Pr_`       | `\sec_`    |  `\sin`     |  `\sinh`  |  `\sup_`
| `\tan`       | `\tanh`                             

Some of these functions practically always have subscripts. For example, limits (`\lim_`) have one that tell us which variable is nearing what value. That's what the underscore ( `_` ) indicates in the table. You'll see much more of it next chapter.

{{< double-view src="LatexMathFunctions" lang="Latex" split="none" >}}
$cos(x)^2 + sin(x)^2 = 1$ is wrong, instead use $\cos^2 x + \sin^2 x = 1$

$lim_{x \rightarrow 2}$ is ugly, instead use $\displaystyle \lim_{x \to 2}$
{{< /double-view >}}

If your favourite function isn't listed, you can get the same result with

{{< highlight Latex >}}
\operatorname{yourOperator}{x}
{{< /highlight >}}

If you want your custom operator to use those typical subscripts, use the star variation.

{{< double-view src="LatexMathCustomOperators" lang="Latex" >}}
$\operatorname*{pandaFunction}{x+y} = 2x + 2y$
{{< /double-view >}}

## Modulo

Modulo operators work the same, but they have two variations.

* `\bmod expression` simply prints *mod expression*
* `\pmod expression` adds space and parentheses around it

{{< double-view src="LatexMathModulo" lang="Latex" >}}
$4 = 9 \bmod 5$ is true, but also $4 = 9 \pmod 5$
{{< /double-view >}}