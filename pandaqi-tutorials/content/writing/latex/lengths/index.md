---
title: "Lengths"
type: "article"
weight: 18
---

Last chapter discussed the various ways you can add or remove extra space at any moment. This chapter will talk about the other side of that coin: the basic _lengths_ that are applied throughout the whole document.

## Dimensions

There's something you need to understand about dimensions in LaTeX. Each block/environment is a box with dimensions. These dimensions are **width**, **height** and **depth**. 

* The width is easy: how wide something is. 
* The height is the length of the part that is *above* the baseline. 
* The depth is the length of the part *below* the baseline.

The **baseline** is the imaginary line on which all letters sit. The image explains this better, I think.

![Explanation of how LaTeX sees dimensions: width, height (above baseline), depth (below baseline)](LatexDimensions.webp)

## Getting Lengths

Often, you want everything to line up correctly, and similar things to be of similar size. This can be done by accessing LaTeX's default lengths. These are:

| Command                | Description |
| ---------------------- | -------------- |
| `\baselineskip`      | The normal vertical distance between two lines in a paragraph |
| `\baselinestretch`   | Multiplies \baselineskip |
| `\columnsep`          | The distance between columns |
| `\columnwidth`        | The width of a column |
| `\evensidemargin`     | The margin for 'even' pages |
| `\oddsidemargin`      | The margin for 'odd' pages |
| `\linewidth`          | The width of a line (in the local environment) |
| `\paperwidth`         | The width of the page |
| `\paperheight`        | The height of the page |
| `\parindent`          | The regular paragraph indentation |
| `\parskip`            | The extra vertical space between two paragraphs |
| `\tabcolsep`          | The default separation between columns in a tabular environment |
| `\textheight`        |  The height of the text |
| `\textwidth`          | The width of the text |
| `\topmargin`          | The size of the top margin |
| `\unitlength`        |  Units of length in the picture environment |
| `\leftskip`          |  Extra left margin for a single complete paragraph (0pt by default) |
| `\rightskip`         |  Extra right margin for a single complete paragraph (0pt by default) |

{{< double-view src="LatexStandardLengthsExample" lang="Latex" split="even" >}}
A regular paragraph here, with regular built-in lengths set and not changed.

\setlength{\leftskip}{20pt} \setlength{\rightskip}{20pt} A not-so-regular paragraph here, with space being skipped on the left and right side, leading to a smaller width.
{{< /double-view >}}

The `\baselinestretch` command is mostly semantical. By default, the multiplication factor is just 1.0, but if you want to change this vertical line spacing, you need to *renew* this command.

You can multiply numbers by these lengths, simply by using it in place of a unit.

{{< double-view src="LatexLengthArithmetic" lang="Latex" split="even" >}}
A regular paragraph here, with regular built-in lengths set and not changed.

\setlength{\parskip}{0.25\textwidth} A not-so-regular paragraph here, with lots of skipped vertical space between itself and the previous paragraph.
{{< /double-view >}}

If you want to only print the value, use `\the` in front of it. (Just like with counters, remember?)

{{< double-view src="LatexPrintingLengths" lang="Latex" >}}
The width of the text in this document is: \the\textwidth
{{< /double-view >}}

One very important use case of this length system, is with the
`\hspace` and `\vspace` commands. Instead of putting in a standard length as argument, they can also use so-called **skip arguments**:

{{< highlight Latex >}}
default value plus stretch value minus shrink value
{{< /highlight >}}

It always tries to use the default value. But, if a box is overfull, it will shrink the whitespace (but never more than the value you provided). If a box is underfull, it will stretch the whitespace (but never more than the value you provided). This doesn't work for other commands---they ignore the `plus` and `minus`, and see them as text to put in the document.

## Setting Lengths

As you've seen by now, _lengths_ share many similarities with _counters_. Many defaults exist, but you can set, override and increment them. Next section you'll also learn how to create your own.

As such, you can override these lengths and set your own if you want. To set a completely new length, use

{{< highlight Latex >}}
\setlength{command}{newLength}
{{< /highlight >}}

If you want to add or subtract something from the current value, use

{{< highlight Latex >}}
\addtolength{command}{incrementAmount}
{{< /highlight >}}

Another way of setting a length, is by using those *dimensions* I just introduced. These commands set the length to the width, height or depth of the *text* block you input.

{{< highlight Latex >}}
\settowidth{command}{text} \settoheight{command}{text} \settodepth{command}{text}
{{< /highlight >}}

{{< double-view src="LatexSetToHeight" lang="Latex" >}}
\settoheight{\parskip}{\Huge M} First paragraph

Second Paragraph
{{< /double-view >}}

## Creating Lengths

It's possible to define your own lengths. This way, you define values ones and reuse them throughout the document!

You can change this value any time you like, and everything will automatically be updated accordingly. The syntax is

{{< highlight Latex >}}
\newlength{command}
{{< /highlight >}}

This will set *command* to a zero length (more specifically, `0in`). This means you still need a `\setlength` right after it, to set it to the value you want.

{{< double-view src="LatexCreatingLengths" lang="Latex" >}}
\newlength{\myLength}
\setlength{\myLength}{5pt}

Our own length is: \the\myLength \par

\addtolength{\myLength}{0.5\linewidth} Our own length is: \the\myLength
{{< /double-view >}}

## Rubber Lengths

All these lengths so far have been exact. But, sometimes, you don't know upfront what length you're looking for. 

That's when so-called *rubber lengths* come into play.

A rubber length is created with the `\stretch{factor}` command. If there's no other rubber length in the line, it will just fill up all leftover white space. If there are other commands competing for the space, it will scale in accordance with its *factor*.

{{< double-view src="LatexRubberLengths" lang="Latex" >}}
Some text \hspace{\stretch{3}} More text \hspace{\stretch{1}} End of line!
{{< /double-view >}}

Alternatively, the `\fill` command is the same as `\stretch{1}`.

## Looking Back on Lists

This section on spacing and lengths started with the question: "is there an easy way to change the amount of space between list items?"

Now we can answer it. Find the name of the length LaTeX uses by default: it's `\itemsep`. Simply change that length!

{{< double-view src="LatexListSpacing" lang="Latex" >}}
\begin{itemize}
    \setlength{\itemsep}{20pt}
    \item Uno
    \item Duo
    
    \setlength{\itemsep}{5pt}
    \item Tres
\end{itemize}
{{< /double-view >}}