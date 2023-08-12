---
title: "Tables II"
type: "article"
weight: 20
---

Last chapter introduced the basic concepts needed for a table. But we're still stuck with a few tiny disadvantages. Like ...

* Tables can't span more than one page
* We're stuck within this rigid grid system that won't resize
* It takes a lot of setup to get even a basic working table

There are multiple ways to solve this, each with different optimal use cases.

## Tabbing

The `tabbing` environment provides an alternative way to align text in columns. With special, short **tabbing commands**, you can set tab stops anywhere you want. 

_What are tab stops?_ They are simply invisible markers. They mark a position in the table. Why? So you can easily align text against them! Define the markers; then tell the text to snap to them.

| Tabbing Command  |  Description |
| -----------------|  --------------- |
| `\=`             | Set tab stop |
| `\>`             | Advance to next tab stop |
| `\<`             | Return to previous tab stop |
| `\+`             | Indent---move margin right |
| `\-`            |  Unindent---move margin left |
| `\'`            |  Pushes everything you've typed in the current column to the right edge of the previous column |
| `` \` ``        |  Pushes all text that follows it in the same row, to the right margin of the tabbing environment. |
| `\`            | Starts a new row |
| `\kill`        |   Ignores preceding text. Is used to set tab stops without setting text. |

{{< double-view src="LatexTabbingEnvironment" lang="Latex" >}}
\begin{tabbing}
    Column 1 \= Column 2 \= Column 3 \= Column 4 \
    Lorem \> Lorem \> Lorem \> Lorem \
    Lorem Ipsum \> \> Lorem Ipsum \
    Column 1 \= Column 2 \= Column 3 \kill \
    Lorem Ipsum \> \> Lorem Ipsum
\end{tabbing}
{{< /double-view >}}

There's some conflict here from symbols that have multiple uses. The `\=`, `\'` and `` \` `` commands are normally used to produce accents. Within a tabbing environment, they won't. If you want to produce the accents, use `\a=`, `\a'` and `` \a` ``, respectively.

Tabbing environments can be split over multiple pages! And you can easily decide on different widths for your table cells: simply add different tabs or a different number of tabs in that row.

## The tabularx Environment

The `tabularx` package provides the **tabularx** environment. It has one extra type of column: `X`. 

This column type will grow wide enough to fit its content, and then fill with white space to give your table the width you want. This simplifies the table creation process. It allows you to create tables the exact size you want, while the cells grow naturally with it.

{{< double-view src="LatexTabularX" lang="Latex" split="none" >}}
\usepackage{tabularx}

\begin{document}
    \begin{tabularx}{\textwidth}{l | X | r}
        Column 1 & Column 2 & Column 3 \
        Column 1 & Column 2 & Column 3
    \end{tabularx}
\end{document}
{{< /double-view >}}

## Longtables

The automatically supported `longtable` environment allows a table to span multiple pages. It, however, doesn't support the stretching `X` columns. To solve this, use the package `longtabu`. 

The syntax for creating tables this way is

{{< highlight Latex >}}
\begin{tabu} to width columns
{{< /highlight >}}

The width can be any _length_. The columns are the same as the default tabular environment.

{{< double-view src="LatexTabularX" lang="Latex" split="none" >}}
\usepackage{longtable}
\usepackage{tabu}

\begin{document}
    \begin{longtabu} to \textwidth {l | X | r}
        Column 1 & Column 2 & Column 3 \
        Column 1 & Column 2 & Column 3
    \end{longtabu}
\end{document}
{{< /double-view >}}

## The table Environment

_Wait, there was a table environment all this time? Why are we using a `tabular` environment?!_

In most markup languages, features come in pairs. One tag holds the actual _content_, another is a _container_ that can store this content with metadata.

{{% example %}}
In HTML (website code), you can show an image with the simple `<img src="url" />` tag. But what if you want to add a caption to the image? 

Then it's recommended to wrap the image inside a `<figure>` tag, and use the `<figcaption>` tag right after the image.
{{% /example %}}

Yes, I keep referencing HTML/website code, because that is also a _markup language_ and probably the most famous one. Converting this idea to LaTeX, we get ...

* The `tabular` environment is only the content
* The `table` environment is a container that allows adding information _about_ the content. Like captions, labels, footnotes, and more.

The syntax is as you'd expect.

{{< highlight Latex >}}
\begin{table}[position]
    % ... table body ...
    \caption{table title} 
\end{table}
{{< /highlight >}}

{{< double-view src="LatexTableEnvironment" lang="Latex" >}}
\begin{table}[h]
    \centering
    \begin{tabular}{l | l | l}
        Cell 1 & Cell 2 & Cell 3 \
        Cell 1 & Cell 2 & Cell 3
    \end{tabular}
    \caption{What a nice table this is.}
\end{table}
{{< /double-view >}}

Here, the *position* can take the same arguments as the `tabular` environment.

{{% remark %}}
There is a star variation, which will put the table in single-column mode if your document is in multi-column mode.
{{% /remark %}}