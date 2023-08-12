---
title: "Math Environments I"
type: "article"
weight: 2
---

As usual, the math side of LaTeX has two major parts: _environments_ and _commands_.

The environments tell LaTeX: "hey, we want to go into _math mode_ now" They also define some crucial overall functionality and layout to use in that mode. 

The commands are only used to align everything properly _while in math mode_. They also help gain more control over the look and fine details.

This chapter and the next are about the environments. Every math formula you'll ever use needs to start with one of these. This first chapter explains the "core" environments. Some other environments must be _inside_ a core one and can't stand on their own. You'll clearly see that happen in the examples of the next chapter.

The rest of the course is pretty much enirely about the commands. Remember they need to be placed inside a certain core environment---I won't mention it again! If you forget it, LaTeX will often throw an undecipherable error and stop compiling.

The core math environments are: `math`, `displaymath`, `equation` and `array`.

## Math

The math environment starts *inline* math mode. This means it's placed in line with the regular text within the paragraph, as part of it, instead of adding a blank line and starting a new block below the text. 

It can be started with one of the following three (equivalent) syntaxes:

{{< highlight Latex >}}
\( … \) 

$ … $ 

\begin{math} … \end{math}
{{< /highlight >}}

{{< double-view src="LatexInlineMath.webp" lang="Latex" split="even" >}}
Juan fetched some $H_{2}O$, and did $a^2 + b^2 = c^2$, and created a unicorn!
{{< /double-view >}}

## Displaymath

The displaymath environment starts math mode on a new line. (So it is _not_ inline, something we usually call _block_.) It also centres the equation. It is started with one of these (equivalent) syntaxes:

{{< highlight Latex >}}
\[ … \] 

\begin{displaymath} … \end{displaymath}
{{< /highlight >}}

{{< double-view src="LatexDisplayMath" lang="Latex" split="even" >}}
Einstein's famous formula, \[ E = mc^2 \] has become an important cornerstone of modern physics
{{< /double-view >}}

## Equation

The equation environment does the same as the previous environment, but also adds the **equation number** in the right margin. All equations are automatically numbered by LaTeX, starting from 1. (This is a _counter_ you can, of course, influence.)

The syntax is:

{{< highlight Latex >}}
\begin{equation} … \end{equation}
{{< /highlight >}}

{{< double-view src="LatexMathEquation" lang="Latex" >}}
\begin{equation}
    E = mc^2
\end{equation} Formula 1 was one of Einstein's most important formulas.
{{< /double-view >}}

{{% remark %}}
The star variation, `equation*`, is exactly the same as the `displaymath` environment. It's just what you prefer typing.
{{% /remark %}}

Why number equations? It allows you to use labels and references---just as with tables and figures---to easily refer back to specific equations. For this, use the `\label{label}` and `\eqref{label}` commands.

{{< double-view src="LatexMathLabels" lang="Latex" split="even" >}}
\begin{equation}
    E = mc^2\label{eq:Relativity}
\end{equation} 

Formula \eqref{eq:Relativity} was one of Einstein's most important formulas.
{{< /double-view >}}

Multiple equations can be put within the same math environment. This automatically means you can have multiple labels within the environment, each corresponding with the equation on the current line.

## Array

The array environment creates a table. But, unlike the regular `tabular` environment, all cells are automatically put into math mode. Of course, you could recreate the effect by starting math mode in every cell individually, but using this environment is much cleaner and faster. 

The syntax is:

{{< highlight Latex >}}
\[     
    \begin{array}{columns}         
        item1 & item2 & item3 \\        
        % …     
    \end{array} 
\]
{{< /highlight >}}

Because cells are all in math mode, the types of columns you can use are restricted. The only options are: `l` (left), `c` (center), `r` (right) and `|` (vertical line).

{{< double-view src="LatexMathArray" lang="Latex" >}}
\[
    \begin{array}{llll}
        2 &+& 2 & = 4 \\
        2 &+& 2 & = 0
    \end{array}
\]
{{< /double-view >}}