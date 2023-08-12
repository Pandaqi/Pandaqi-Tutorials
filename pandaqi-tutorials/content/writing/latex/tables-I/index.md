---
title: "Tables I"
type: "article"
weight: 19
---

Tables are an invaluable tool for presenting data in a clean way. But they always come with a few complications. What happens when the content extends the table cell? Do we want the table to fill the space to full page width, or just large enough to fit its contents? How do we align cells on decimal points? 

All these questions will be answered, I promise, although it takes quite a bit of setup. 

{{% remark %}}
Some time ago, I migrated an older version of this website to a brand new one. Faster, better, more modern. Almost all my HTML code could be converted to Markdown with some tools ... but not tables. I had to manually copy-paste the contents of each table and rewrite to Markdown syntax. Those were a few not-so-fun days 😔
{{% /remark %}}

## The Tabular Environment

The syntax for creating a tabular environment is

{{< highlight Latex >}}
\begin{tabular}[position]{columns}
    row 1, column 1 & … & row 1, column n \\
    row 2, column 1 & … & row 2, column n \\
    % ... 
\end{tabular}
{{< /highlight >}}

Cells in a row are separated with an ampersand ( `&` ). A new row is started with the newline command ( `\\` ).

## Columns

The mandatory *columns* argument decides the types of every column. How are they aligned? How will they resize? Do they allow line breaks like they are paragraphs?

It needs a sequence of any of the following specifiers.


| Specifier                         | Description                       |
|-----------------------------------|-----------------------------------|
| `l`                               | Column of left-aligned items      |
| `r`                               | Column of right-aligned items     |
| `c`                               | Column of centred items           |
| `p{width}`                        | Column with fixed width *width*, that wraps lines like a normal paragraph. A forced line break,  however, may not occur. |
| `\|`                               | Vertical line the full height and depth of the environment  |
| `\|\|`                              | Double vertical line              |
| `*{num}{columns}`                 | Creates *num* copies of *columns* |
| `@{text}`                         | Inserts *text* in every row, and kills all white space between columns. <br/><br/>The special `\extracolsep{width}` command causes an extra space of width *width* to appear to the left of all subsequent columns, until another command like this occurs. |

{{< double-view src="LatexTabularBasics" lang="Latex" split="none" >}}
\begin{tabular}{l | p{20pt} | r | *{2}{c | }}
    Lorem ipsum & Lorem ipsum & Lorem ipsum & Lorem ipsum & Lorem ipsum \\
    Lorem ipsum, dolor & Lorem ipsum, dolor & Lorem ipsum, dolor & Lorem ipsum, dolor & Lorem ipsum, dolor
\end{tabular}
{{< /double-view >}}

The `l`, `c` and `r` specifiers do not allow line breaks. They will keep stretching cell width to fit all content. If you don't want that, use the `p` specifier instead.

If you, however, don't want this setting for the entire column, you can create a paragraph inside an individual cell with
`\parbox[position]{width}{text}`

{{< double-view src="LatexTabularAdvanced" lang="Latex" >}}
\begin{tabular}{l | r @{.} l}
    \parbox[t]{50pt}{A new pair of shoes} & 9 & 81 \\
    Crisps & 2 & 04
\end{tabular}
{{< /double-view >}}

## Position

Tables **can't** be split among multiple pages. The default behavior is, therefore, **not** to place tables in line with the text. It's to place them wherever they fit best.

This took me by surprise, time and time again, when I started using LaTeX. I was _so_ used to typing some text about a table and then placing the table _immediately_ after it.

{{% remark %}}
Like on this website. Imagine the table below would just be completely somewhere else on the page!
{{% /remark %}}

Fortunately, you _can_ influence this. A table can have one of four positions:

| Specifier   | Description |
|-|-|
| `h`         | The table is placed *here*, exactly where it is in the code |
| `t`         | The table is placed at the top of the page |
| `c`         | The table is placed in the centre of the page |
| `b`         | The table is placed at the bottom of the page |
| `p`         | The table is placed on a separate page that contains no text. That page only contains tables and other figures repositioned this way. It's called a *page of floats*, and we'll look at it later. |

## Star Variation

The starred variation has an extra mandatory argument that specifies the width of the table. It will always adhere to whatever you put in, but it doesn't automatically distribute space evenly, which can make it look really weird. The syntax is

{{< highlight Latex >}}
\begin{tabular*}{width}[position]{columns}
    % ... cells ...
\end{tabular*}
{{< /highlight >}}

{{< double-view src="LatexTabularStar" lang="Latex" >}}
A nice paragraph.

\begin{tabular*}{\textwidth}[h]{l | l | l}
    Cell 1 & Cell 2 & Cell 3 \
    \hline
    Cell 1 & Cell 2 & Cell 3
\end{tabular*}

Another nice paragraph.
{{< /double-view >}}

## Lines

We've already seen how to insert vertical lines. Now let's insert horizontal lines!

The `\hline` command creates a line the full width of the table. And `\cline{a-b}` creates a line between columns *a* and *b* (both inclusive).

Note that these are typed as part of the table content, among the cells. Not as part of the _arguments_ put into the environment.

{{< double-view src="LatexTabularLines" lang="Latex" >}}
\begin{tabular}{l | l | l}
    Cell 1 & Cell 2 & Cell 3 \
    \hline
    Cell 1 & Cell 2 & Cell 3 \
    \cline{2-3}
    Cell 1 & Cell 2 & Cell 3
\end{tabular}
{{< /double-view >}}

## Spanning Multiple Columns

If you want a cell to span multiple columns, use

{{< highlight Latex >}}
\multicolumn{columns}{position}{text}
{{< /highlight >}}

The first argument, *columns*, specifies the number of columns to span.

The second, *position*, specifies the formatting: `c` for centred, `l` for flushleft, `r` for flushright.

The third, *text*, specifies the text within the multicolumn.

{{< double-view src="LatexTabularMultiColumn" lang="Latex" >}}
\begin{tabular}{l | l | l}
     & \multicolumn{2}{c}{Gender} \
    \hline
     & Male & Female \
    \cline{2-3}
    Survey 1 & 55 & 80
\end{tabular}
{{< /double-view >}}

## Spanning Multiple Rows

For a cell spanning multiple rows, you first need to include the package `multirow`. Then use ...

{{< highlight Latex >}}
\multirow{number of rows}{width}{text}
{{< /highlight >}}

{{< double-view src="LatexTabularMultiRow" lang="Latex" >}}
\usepackage{multirow}

\begin{document}
    \begin{tabular}{l | l c c c}
        & \multicolumn{2}{c}{\textbf{Juan}} \
        \hline
        \multirow{2}{10mm}{\textbf{Jose}} & A & B \
        & C & D\
    \end{tabular}
\end{document}
{{< /double-view >}}

## Breathing Space

The `\tabcolsep` *length* sets the horizontal space between columns. The `\arraystretch` *command* sets the vertical space between rows. 

Yes, the difference of _length_ vs _command_ is emphasized. It's a bit confusing. The latter is just a value, but it must still be handled as a command.

{{< double-view src="LatexTabularSpace" lang="Latex" >}}
\setlength{\tabcolsep}{20pt}
\renewcommand{\arraystretch}{3}

\begin{tabular}{l | l | l}
    Cell 1 & Cell 2 & Cell 3 \
    Cell 1 & Cell 2 & Cell 3 \
    Cell 1 & Cell 2 & Cell 3
\end{tabular}
{{< /double-view >}}