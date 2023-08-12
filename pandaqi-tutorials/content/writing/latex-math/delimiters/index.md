---
title: "Delimiters"
type: "article"
weight: 5
---

Many mathematical formulas group their components with so-called **delimiters**. Think of regular arithmetic where `2*(5+6)` is something different than `(2*5)+6`. But the uses go much further than that. For example, in computer science, you index the element of a list or array with `[index]`.

The regular symbols, such as parentheses ( `()` ) and braces ( `{}` ) work. But they don't scale with the equation. They just use their regular symbol, math mode or not. A fraction, for example, is much taller than the symbols surrounding it, which looks ugly and messy.

To solve this, LaTeX provides the `\left` and `\right` commands. These need to be used together---*always*---and both need a certain delimiter right after it. 

Between them, you are allowed to use as many `\middle` commands with other delimiters as you like.

| Left           | Right         |  Description                               |  Common Use |
| -------------- | --------------|  ------------------------------------------|  ----------------------------------- |
| `(`            | `)`           |  Regular parentheses                       |  Grouping equations |
| `[`           |  `]`           |  Regular brackets                         |   Alternative to grouping equations |
| `\{`          | `\}`         |  Regular braces                           |   Denoting sets |
| `\langle`     | `\rangle`    |  Arrows                                   |   Intervals or dot products |
| `\|`           |  `\|`          |   Vertical lines                           |   Determinant or absolute value |
| `\|\|`          | `\|\|`         |  Double vertical lines                     |  Norm |
| `.`           |  `.`          |   Empty delimiter                          |   Displays nothing |
| `\lfloor`     | `\rfloor`    |  Box with open top and gap in bottom side   | Rounding a number down |
| `\lceil`      | `\rceil`     |  Box with open bottom and gap in top side   | Rounding a number up |
| `\ulcorner`   | `\urcorner`  |  Smaller version of the previous command    | Rounding a number |

{{< double-view src="LatexMathDelimiters" lang="Latex" >}}
\begin{equation*}
    \left( \frac{2}{3} \right)
\end{equation*}

\begin{equation*}
     \left| x+y \right|
\end{equation*}

\begin{equation*}
    \left\{ x \in \mathbb{R}^3 \middle| x \not= 2 \right\}
\end{equation*}
{{< /double-view >}}

## Custom Sizes

If you're not satisfied with LaTeXs default stretching of your delimiters to the correct length, use the special symbol-sizing commands:

| Command    | Description |
| ---------- | ----------------------------- |
| `\big`   |  Slightly bigger than normal |
| `\Big`    | Even bigger |
| `\bigg`   | Even bigger |
| `\Bigg`   | Biggest |

Note that these should be used *instead* of the `\left` and `\right` commands. (They also work for most other symbols, which you'll learn in a later chapter.)

{{< double-view src="LatexMathDelimiterSizing" lang="Latex" >}}
\begin{equation*}
    %Yes, this looks awful, it's just for demonstrative purposes
    \Bigg( \frac{2}{3} \big)
\end{equation*}
{{< /double-view >}}