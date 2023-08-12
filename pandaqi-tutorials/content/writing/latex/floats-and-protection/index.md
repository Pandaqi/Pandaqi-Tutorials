---
title: "Floats & Protection"
type: "article"
weight: 21
---

The subjects from the title are completely unrelated. But they were too short to receive their own chapter, which is why I'll discuss both at once.

With the `table` environment from last chapter, we've already seen a **floating body**. Any type of complex figure, like tables or pictures, is a floating body. 

This means that LaTeX is able to float this environment around the document until it finds a position where it fits. It's called floating, and not repositioning, because it's a _fluid operation_. All other text and environments try to nicely float around it. 

For example, say you declare a table to be *here* (with the `h` position specifier). But the table is too large to fit on this page. Then LaTeX tries pushing it to the next page. 

However, instead of pushing the whole document underneath it down as well, it simply lets other text take its position. Other smaller elements fill the leftover space, so it doesn't leave a big white gap.

If LaTeX can't immediately place a figure, it places it into a *queue*. Then, the next time it finds space to place something, it drops the first item from the queue there. This means that floating bodies influence each other---if one of them is pushed downwards, all of them need to wait a little longer. This is usually not what you want, and if your document looks jammed up, you should check if there's a floating body that is pushing everything away.

Because LaTeX keeps track of all tables and figures, you can use a single command to display a list of all of them. The command is `\listoftables` for tables, and `\listoffigures` for figures.

{{< double-view src="LatexListOfTables" lang="Latex" >}}
% This repeated 3 times, with different captions
\begin{table}[h]
    \centering
    \begin{tabular}{l | l | l}
        Cell 1 & Cell 2 & Cell 3 \
        Cell 1 & Cell 2 & Cell 3
    \end{tabular}
    \caption{What a nice table this is.}
\end{table}

% What this code example is all about:
\listoftables
{{< /double-view >}}

If you want LaTeX to just immediately _dump_ everything in its queue, use `\clearpage`. Use `\cleardoublepage` if you want it to start from a right-hand page.

{{% remark %}}
You'll learn all about figures later, if you're wondering what on earth those are. As you probably guessed, they are quite important.
{{% /remark %}}

## The float Package

We've already seen several environments using the same list of specifiers that show a preference for a certain position. (Such as: top or bottom of the page?)

But, because LaTeX is just trying its best without certainty, floating bodies might not end up where you want them to be. If you want to *force* them at an exact position, you need two things: 

* Include the `float` package
* Use the `H` position specifier. Yes, _capital letter_.

{{< double-view src="LatexFloatPackage" lang="Latex" split="none" >}}
\usepackage{float}

\begin{document} A first paragraph.
    \begin{table}[H]
        \centering
        \begin{tabular}{l | l | l}
            Cell 1 & Cell 2 & Cell 3 \
            Cell 1 & Cell 2 & Cell 3
        \end{tabular}
        \caption{What a nice table this is.}
    \end{table} A second paragraph.
\end{document}
{{< /double-view >}}

## Protection

There are commands which we call *fragile*. 

They can be carried over or copied. This means _other_ processes rely on them existing or being correct. If not, compilation crashes and burns---which is why we call them *fragile*.

For example, if you create a table of contents, all text within `\section` and `\subsection` commands is automatically copied over. 

If you use a special command within that text, it's possible that this process fails. LaTeX doesn't know what to do. Compilation fails, probably with mysterious errors. 

To protect fragile commands in these cases, use `\protect` in front of them. This only affects the command right after it---not even its arguments.

{{< double-view src="LatexProtection" lang="Latex" split="even" >}}
\section{I am considerate \protect\footnote{and protect my footnotes}} 
Lorem Ipsum...
{{< /double-view >}}