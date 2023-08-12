---
title: "Math Spacing & Special Text"
type: "article"
weight: 10
---

Before I throw all existing symbols at you, some slight important details warrant mentioning. 

Within math environments, you can use the same spacing commands as anywhere else in LaTeX. But those are often too rough: within formulas, it's about millimetres of added or removed space. Spacing is somewhat standardized, but also required to make the formulas easy to read and understand. Math is already complicated enough, at least we can try to typeset it cleanly.

That's why there are some special spacing commands for mathematics.

## General Spacing

These commands can be placed anywhere to add (or remove) spacing.

| Command   | Description |
| --------- | ------------- |
| `\,`    | Thin space |
| `\:`    |  Medium space |
| `\;`    |  Thick space |
| `\!`    |  Negative thin space. The only command that removes white space, to bring things closer together. |

## Operator & Symbol Spacing

When it comes to mathematical **operators, relations and symbols,** LaTeX follows a complex set of rules to determine spacing.

{{% example %}}
A minus symbol is always pushed against the symbol it belongs to, while the equals sign has lots of space around it.
{{% /example %}} 

Most of the times, this works fine and everything looks great. But you can define your own spacing (based on the defaults) with these commands:

| Command         |  Description |
| ---------------- | ----------------- |
| `\mathrel{…}`   | Spacing as with binary *relations* (such as equals, or greater than) |
| `\mathbin{…}`  |  Spacing as with binary *operations* (such as plus, or minus) |
| `\mathop{…}`   |  Less spacing on the right than on the left. Asymmetric, unlike the other two commands. |

{{< double-view src="LatexMathSpacing" lang="Latex" >}}
$x \mathop{=} y$\
$x \mathbin{=} y$\
$x \mathrel{=} y$
{{< /double-view >}}

## Special Text Styles

It won't happen too often, but sometimes you need to emphasize or format text in between a bunch of math. For this, the same commands as with regular text are available: just replace *text* with *math*.

| Command         | Description |
| --------------- | ---------------------- |
| `\mathrm{…}`   | Roman font (default) |
| `\mathit{…}`   | Italic |
| `\mathbf{…}`   | Bold |
| `\mathsf{…}`   | Sans-serif |
| `\mathtt{…}`   | Teletype |

{{< double-view src="LatexMathSpecialText" lang="Latex" >}}
$x = x \; \mathbf{Wowza}, that \; was \; \mathrm{so \ unexpected!}$
{{< /double-view >}}