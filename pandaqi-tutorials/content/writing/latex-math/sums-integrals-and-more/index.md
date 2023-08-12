---
title: "Sums, Integrals & More"
type: "article"
enableMathJax: true
weight: 8
---

Some mathematical "functions" are so important (or just weird-looking) that tehy have their own special symbols and operators! These aren't written by simply using their (shortened) name. This chapter discusses the most common ones: **fractions**, **binomials**, **(square) roots**, **sums**, **products**, **integrals** and **logic/set operations**.

## Fractions

A fraction is created with

{{< highlight Latex >}}
\frac{numerator}{denominator}
{{< /highlight >}}

Fractions can be nested within fractions as often as you like. Those nested fractions keep getting smaller and smaller, which is why I don't recommend nesting them too deeply. If you want nested fractions to all stay at the same size, use `\cfrac{num}{denom}` (*continued fraction*)

Want your fractions displayed with a diagonal slash? Include the `xfrac` package and use

{{< highlight Latex >}}
\sfrac{numerator}{denominator}
{{< /highlight >}}

{{< double-view src="LatexMathFractions" lang="Latex" split="none" >}}
\[
    \frac{2}{3} \text{ or } \sfrac{2}{3} \text{ or } x^{\frac{2}{3}}
\]
{{< /double-view >}}

## Binomial

The command for creating binomials---sometimes also used for column vectors---works similarly.

{{< highlight Latex >}}
\binom{top}{bottom}
{{< /highlight >}}

{{< double-view src="LatexMathBinomial" lang="Latex" >}}
\[
    \binom{6}{4} = \frac{6!}{4! \cdot 2!}
\]
{{< /double-view >}}

## (Square) Roots

Any type of root can be created with:

{{< highlight Latex >}}
\sqrt[n]{equation}
{{< /highlight >}}

If you leave out the optional parameter (_n_), it's a square root. Otherwise, it's the n-th root. The symbol automatically scales with the equation.

{{< double-view src="LatexMathSquareRoots" lang="Latex" >}}
\[
    \sqrt{a^2 + b^2} \ \sqrt[4]{a^2 + b^2}
\]
{{< /double-view >}}

## Sums & Products

The syntax for sum symbols ...

{{< highlight Latex >}}
\sum_{subscript}^{superscript}
{{< /highlight >}}

The syntax for product symbols ...

{{< highlight Latex >}}
\prod_{subscript}{superscript}
{{< /highlight >}}

{{< double-view src="LatexMathSumsProducts" lang="Latex" >}}
\[
    \sum_{i=1}^{n} 2i \not= \prod_{i=1}^{n} 2i
\]
{{< /double-view >}}

## Integrals

A single integral can be created with

{{< highlight Latex >}}
\int_{subscript}^{superscript}
{{< /highlight >}}

If you want more integrals, you can just place these after each other. 

However, if you want multiple integrals with a _single subscript_ you can use the `\iint`, `\iiint` and `\iiiint` commands. These create two, three or four integrals after each other, respectively. For more integrals, you can use `\idotsint`, which displays two integral symbols with the familiar dots between them.

{{% example %}}
Integrating over an _area_, by default, means a double integral. One along the first dimension, one along the second.
{{% /example %}}

For cyclic integrals, include the `esint` package. Now use `oint` for a cyclic integral. Or `\oiint` for a double cyclic integral.

{{< highlight Latex >}}
\oint_{subscript}^{superscript}
{{< /highlight >}}

{{< double-view src="LatexMathIntegrals" lang="Latex" split="none" >}}
\usepackage{esint}

\begin{document}
    % Special command to display the differential in roman letters
    % Not necessary, but highly recommended
    \newcommand*\diff{\mathop{}\!\mathrm{d}}

    % The actual integrals
    \[
        \int_{a}^{b} 4x \diff x \not= \idotsint 4x \diff x
    \]

    \[
        \oint_{a}^{b} 4x \diff x \not= \oiint 4x \diff x
    \]

\end{document}
{{< /double-view >}}

## Logic & Set Operations

For operations on sets (unions and intersections), use the `\bigcup` and `\bigcap` commands.

For logical operations (AND and OR), use the `\bigwedge` and `\bigvee` commands.

Yes, they are name dafter _what they look like_, not their function. You know I'm all about semantics. So I hate this and---during my years of studying---kept forgetting this and having to look it up on my own tutorials website 😅

{{< double-view src="LatexMathLogicSetSymbols" lang="Latex" >}}
\[
    A \bigcup B = \left\{ x \in \mathbb{R} \middle| x \in A \bigvee x \in B \right\}
\]
\[
    A \bigcap B = \left\{ x \in \mathbb{R} \middle| x \in A \bigwedge x \in B \right\}
\]
{{< /double-view >}}

## Leftovers

Besides these, there are 6 other "big" symbols you can use:

| Command         | Visual |
| --------------- | ----------------------------------- |
| `\bigoplus`    | \\( \bigoplus\\) |
| `\bigotimes`   | \\( \bigotimes \\) |
| `\bigodot`     | \\( \bigodot \\) |
| `\bigsqcup`   | \\(  \bigsqcup \\) |
| `\biguplus`   |  \\( \biguplus \\) |
| `\coprod`     |  \\( \coprod \\) |

## Stacking Subscripts

What if you want multiple subscripts for one of these big chunky symbols? You _could_ use the `atop` command discussed before.

A much better and easier solution, however, is at hand: **substacks**.

{{< highlight Latex >}}
\substack{something \ something}
{{< /highlight >}}

{{< double-view src="LatexMathSubStacks" lang="Latex" >}}
\[
    \sum_{\substack{ i=1 \ i \not= j}}^{n} i
\]
{{< /double-view >}}

## Regular Superscripts

A problem arises if you try to get the subscript in *math style*, but want the superscript in regular *text style*. To solve this, you can set regular (and other) superscripts for big symbols with

{{< highlight Latex >}}
\sideset{left superscripts}{superscript}
{{< /highlight >}}

{{< double-view src="LatexMathSideSet" lang="Latex" >}}
\[
    \sideset{_a^b}{'}\sum_{\substack{ i=1 \ i \not= j}}^{n} i
\]
{{< /double-view >}}