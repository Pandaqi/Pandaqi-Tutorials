---
title: "Basic Syntax I"
type: "article"
weight: 3
---

Because LaTeX is a markup language, the majority of your file will simply be regular text. Therefore, something is needed to tell the computer when a piece of text is actually a command. For this, we *always* use the backslash: `\`.

{{% example %}}
`\emph` is used for emphasizing a piece of text. Or `\newline` is used to start text on a new line.
{{% /example %}}

{{% remark %}}
Commands are often called **command sequences** or **macros**. This is because of the fact that one command encompasses a sequence of steps to be taken. For example, a command to create a table, has to perform lots of sequential calculations and operations to do so.
{{% /remark %}}

## Arguments

Commands require arguments, which can be **required** or **optional**. These can be mixed. A command can have some required and some optional arguments, or only optional ones, or only required ones. And in some rare cases, no arguments at all.

## Required Arguments

For example, when emphasizing a piece of text, we need to supply *which* piece of text we want emphasized. It's required. If we leave it out, it emphasizes nothing. Some commands go even further, and throw errors when you don't supply the required arguments.

Required arguments are placed between braces:

{{< highlight Latex >}}
\command{argument1}{argument2}{…}
{{< /highlight >}}

{{< double-view src="LatexBasicSyntax1.webp" lang="Latex" >}}
This text is \textit{written in italics}
{{< /double-view >}}

## Optional Arguments

For example, if we want to insert a new line, we *could* supply how much white space we want between this new line and the previous one. But, if we leave it out, everything's fine, and it just takes the standard line height.

Optional arguments are placed between brackets, and separated by commas if there are multiple:

{{< highlight Latex >}}
\command[argument1, argument2, …]
{{< /highlight >}}

{{< double-view src="LatexBasicSyntax2.webp" lang="Latex" >}}
This is a\\regular line break.

This is a\\[20mm] longer line break
{{< /double-view >}}

## Combined Arguments

When a command has both optional and required arguments, you always need to provide the optional ones first.

{{< double-view src="LatexBasicSyntax3.webp" lang="Latex" >}}
\begin{thebibliography}{2}
     \bibitem[SomeText]{book1} Book 1, written by Someone, in 1900
     \bibitem{book2} Book 2, written by Someone Else, in 1950
\end{thebibliography}
{{< /double-view >}}

{{% remark %}}
Some special commands provided by packages do switch around the order of arguments. In these cases, this deviation from standard syntax will always be mentioned.
{{% /remark %}}

## Nesting Commands

You can nest commands as much as you like. In general, though, it's recommended to keep the number of levels in markup languages to a minimum. In the same way that adding a _fourth_ or _fifth_ subheading to a webpage usually means that you're trying to do too much.

Try to never go further than three levels deep.