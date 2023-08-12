---
title: "Counters"
type: "article"
weight: 9
---

As you've seen in last chapter, LaTeX automatically keeps separate counters for every type of section. What's _really_ nice is that it does the same for nearly everything---tables, figures, table of contents, and so on. Because this concept of counters keeps popping up everywhere within LaTeX, I wanted to do a chapter on it here that explains how to customize them. Or maybe even add your own.

## Setting & Getting Counters

To *set* an existing counter, use

{{< highlight Latex >}}
\setcounter{counter}{value}
{{< /highlight >}}

To *get* the current value of a certain counter, as text, use

{{< highlight Latex >}}
\thecounter
{{< /highlight >}}

{{< double-view src="LatexSettingGettingCounters.webp" lang="Latex" >}}
\setcounter{section}{4} 

The value is: \thesection
{{< /double-view >}}

If you don't want it as text, but as a number to use in calculations, use `\value{counter}`.

## Changing Counters

To increment an existing counter by a certain amount, use

{{< highlight Latex >}}
\addtocounter{counter}{value}
{{< /highlight >}}

This value can be negative, if you want to decrement it.

To create a new counter, use

{{< highlight Latex >}}
\newcounter[counter]{name}
{{< /highlight >}}

If you supply the optional argument *counter*, which must be an existing counter, this new counter is reset every time *counter* is changed.

## Changing the Numbering System

It's possible to display your counters using a different system than the regular Arabic numbers you're used to.


| Command            | Description                                            | Example |
| -------------------| ------------------------------------------------------ | ---------------|
| `\alph{counter}`   |  Prints counter using lowercase alphabetic characters  | a, b, c, ... |
| `\Alph{counter}`   |  Prints counter using uppercase alphabetic characters  | A, B, C, ... |
| `\arabic{counter}` |  Prints counter using regular numbers. Default.        | 1, 2, 3, ... |
| `\roman{counter}`  |  Prints counter using lowercase roman numbers          | i, ii, iii, ... |
| `\Roman{counter}`  |  Prints counter using uppercase roman numbers          | I, II, III, ... |

{{< double-view src="LatexNumberingSystems.webp" lang="Latex" >}}
\newcounter{mysections}
\addtocounter{mysections}{2}

\section*{\Roman{mysections} A Section Numbered Differently} 
Lorem Ipsum...
{{< /double-view >}}

## Useful Counters to Remember

By default, the table of contents only registers sections to a maximum of three levels deep. To set this to something else, change the counter
`tocdepth`.

By default, all sections are numbered to a depth of 2---so, for example, sections and subsections are numbered, but subsubsections aren't. To change this, use the counter `secnumdepth`.

{{< double-view src="LatexCountersDepth.webp" lang="Latex" >}}
\setcounter{secnumdepth}{4}

\section{La}
\subsection{Lala}
\subsubsection{Lalala}
\paragraph{Lalalala}
{{< /double-view >}}

All other counters are accessed by simply typing its name, as we've already seen with *section*.

Use `\pagenumbering{numbering system}` if you just want to change the numbering system of the current page.