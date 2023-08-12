---
title: "Math Environments II"
type: "article"
weight: 3
---

Last chapter discussed, among others, the `displaymath` and `equation` environment. Anywhere within these, you can use the sub environments I'll discuss in this chapter. 

Most of these change the numbering or alignment of the equation(s) one way or another. But their possible applications are endless.

The 8 important sub environments are: `subequations`, `multline`, `split`, `align`, `flalign`, `alignat`, `gather`, and `cases`.

However! These aren't supported by default, which means you need to include the `amsmath` package. 

Basic LaTeX actually doesn't support too many mathematical commands. 

> I keep writing this sentence in all my LaTeX tutorials 😅. It might seem like a joke or annoyance, but I actually think this is a great strength of LaTeX. Long, long ago they made a core set of features for typesetting text. As computers developed further, as LaTeX became widespread, they added whatever was needed. But as a separate _package_, so you _don't_ need to install and understand _absolutely everything_. You only use what you need.

That's why the AMS-LaTeX packages were invented (by the **A**merican **M**athematical **S**ociety), of which `amsmath` is the most extensive. Most of the things in this entire course _require_ one of the AMS packages.

## Subequations

The naming here is confusing. "Sub" usually means "under", so it's a child or part of something bigger. In this case, though, it's the parent itself. It's the container.

A `subequation` *contains* equations, which are numbered with letters suffixed to the equation number.

{{< double-view src="LatexMathSubequations" lang="Latex" >}}
\begin{subequations}
    \begin{equation}
       5x + 6y = 10
    \end{equation}
    \begin{equation}
       2x + y = 5
    \end{equation}
\end{subequations}
{{< /double-view >}}

## Multline & Split

The `multline` environment allow you to split equations over multiple lines by using the familiar newline command: `\\`.

Yes, in case you hadn't encountered this yet, multiple lines aren't possible in normal math mode. Also look closely at the name: it's _multline_, not _multiline_ (with an "i" in there, as I wrote it the first thousand times).

It tries to make the equation full width. It aligns the start with the left margin and the end with the right margin.

The `split` environment does the same. The difference? It centres the equations and aligns the multiple lines by means of the ampersand ( `&` ) character.

{{< double-view src="LatexMathMultlineSplit" lang="Latex" split="none" >}}
\begin{multline}
    5x + 6y = 10 \\
    2x + y = 5
\end{multline}

\hrulefill

\begin{equation}
    \begin{split}
        5x + 6y &= 10 \\
        2x + y &= 5
    \end{split}
\end{equation}
{{< /double-view >}}

## Align & Flalign

The `align` environment does the same as the split environment, but with two important differences.

* The split environment is not supposed to be combined with any other typeset material on the same line. The align environment can be used next to other (unaligned) elements.
* There's extra added space above and below the equations to make them stand out more.

Actually, this environment is the improved version of an old and obsolete core environment. This means it doesn't need to be placed inside one to work!

If you don't want that much space around your environment, you can use the `aligned` alternative. It has an optional parameter with values `t` (top) or `b` (bottom), which can be used to force vertical placement of the equation number. 

Semantically, `align` should be used for multiple equations, while `aligned` should be used for a single equation over multiple lines.

{{< double-view src="LatexMathAlignAligned" lang="Latex" split="none" >}}
\begin{align}
    5x + 6y &= 10 \\
    2x + y &= 5
\end{align}

\hrulefill

\begin{equation}
    \begin{aligned}[b]
        5x + 6y &= 10 \\
        2x + y &= 5
    \end{aligned}
\end{equation}
{{< /double-view >}}

The `flalign` environment stands for *full align*. This simply means that the leftmost and rightmost columns are pushed against the margins, making the environment the full width of the text. (So, just like the `multline` environment. And yes, the subtle differences and similarities are a bit confusing at first.)

## Alignat

The `alignat` environment *also* plays with alignment. What's the difference here, then?

It groups the columns in left-right pairs: first column is right aligned, second is left aligned, third is right aligned, and so forth. 

It has one required argument, which is the number of pairs. The main difference is that it doesn't add any white space. You'll have to do that yourself (if you want that, which you probably do). 

It also has the variation that needs to be within a core environment, `alignedat`. This is, again, mostly about your preference and semantics.

{{< double-view src="LatexMathAlignat" lang="Latex" split="even" >}}
%The quad is used to separate the columns with some whitespace
\begin{alignat}{2}
    5x + 6y \quad &= 10 \quad & a^2 + b^2 \quad &=c^2 \\
    2x + y  \quad &= 5  \quad & a^3 + b^3 \quad &=c^3
\end{alignat}
{{< /double-view >}}

## Gather

The `gather` environment centres all equations you put in, separated by a newline. The name comes from the fact that it "gathers" all equations around the centre. Can stand completely on its own.

{{< double-view src="LatexMathGather" lang="Latex" split="none" >}}
\begin{gather}
    5x + 6y = 10 \\
    2x + y = 5 \\
    a^2 + b^2 = c^2 \\
    a^3 + b^3 = c^3
\end{gather}
{{< /double-view >}}

## Cases

The `cases` environment allows you to provide multiple cases for a single function. This makes it mostly useful for piecewise functions, maybe algorithms with different branches. Different cases are separated by newlines and aligned with the familiar ampersands.

{{< double-view src="LatexMathCases" lang="Latex" >}}
\[ f(x) = 
    \begin{cases} 
        x &\mbox{if } x = 0 \\
        5x & \mbox{if } x \not= 0 
    \end{cases} \pmod{2}.
\]
{{< /double-view >}}

## Removing Equation Numbers

All of these environments also have a starred variation that leaves out the equation tag. Suffix the asterisk to the environment name. (Don't forget to do this both at the `\begin{}` and the `\end{}`) 

I often wrote a _summary_ for each course at my university. To help myself learn ad study. (And, over time, basically my whole year used these summaries.) I always left out all equation numbers, because they were visual noise that had no function there.

An example:

{{< double-view src="LatexMathNoNumber" lang="Latex" >}}
\begin{align*}
    5x + 6y &= 10 \\
    2x + y &= 5
\end{align*}
{{< /double-view >}}

_What if I want some numbered and some not?_ Use `\nonumber` on those specific lines.

_What if I don't like normal numbers and want other tags?_ Use `\tag{text}`. If you want no tag, it's simply `\notag`.

{{< double-view src="LatexMathEquationTags" lang="Latex" split="none" >}}
\begin{align*}
    5x + 6y &= 10 \tag{Equation Uno} \\
    2x + y &= 5 \tag{Equation Duo}
\end{align*}
{{< /double-view >}}