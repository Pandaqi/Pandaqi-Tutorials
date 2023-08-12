---
title: "Basic Syntax II"
type: "article"
weight: 4
---

Continuing on last chapter, I'll discuss some more general syntax. These will become more and more important as you get deeper into working with LaTeX.

## Environments

The commands from the previous chapter applied to short bits of text, maybe even single words. Often, however, you want a certain typesetting or command sequence applied to a big chunk of content.

That's when we use an **environment**. Environments need to be opened and closed, using:

{{< highlight "Latex" >}}
\begin{environmentName}
    ... text and commands ...
\end{environmentName}
{{< /highlight >}}

For example, lists are environments, as well as tables and figures.

## Switch Variation

Most commands with a _single required argument_ have an alternative syntax, called the **switch**. Why? Because it can be easier to use or type. Such a syntax doesn't need its required arguments stated right after it, but rather applies the command to the whole block or environment that it's in.

The two commands below are identical.

{{< highlight "Latex" >}}
{ \switchCommand text }

\command{text}
{{< /highlight >}}

When possible, I provide the switch alternative as well, whenever a new command is introduced in this course.

{{< double-view src="LatexBasicSyntax4.webp" lang="Latex" >}}
Some \emph{emphasized text}.

{Some \em emphasized text}
{{< /double-view >}}

## Star Variation

Most commands also have a **star** variation. This simply means you append an asterisk (`*`) to the command name.

{{< highlight Latex >}}
\command*[optionalArgument]{requiredArgument}
{{< /highlight >}}

This usually tweaks the behaviour of the command slightly. In certain use cases, the default command is very annoying, but the star version is exactly what you need.

{{< double-view src="LatexBasicSyntax5.webp" lang="Latex" >}}
\section{I am a section}
\section*{Me too!}
\section{And three make a crowd.}
{{< /double-view >}}

## Comments

Comments are the _only thing_ that doesn't use the regular command syntax. But that's only logical---comments are not interpreted and not used in the final document, so the computer doesn't need to see them. Comments are only there for you to tell yourself what certain parts of the code do. To help remind yourself, or clarify what that code you wrote 6 months ago did.

Single line comments are created with `% comment`.

{{< double-view src="LatexBasicSyntax6.webp" lang="Latex" >}}
This is %an inline comment 
cool!
{{< /double-view >}}

{{% remark %}}
LaTeX is case-sensitive and all commands are lowercase. Only symbols or special packages might start with a capital letter. So, did a mysterious error occur? Then an uppercase letter might have accidentally slipped in.
{{% /remark %}}