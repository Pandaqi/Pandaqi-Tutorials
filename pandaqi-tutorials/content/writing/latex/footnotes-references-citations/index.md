---
title: "Footnotes, References & Citations"
type: "article"
weight: 13
---

Any scientific or documented piece requires footnotes, references, and citations. Luckily, LaTeX was mainly created for these purposes, which means it has very good support.

## Footnotes

Footnotes are small superscript letters within the text, that refer to a small phrase at the bottom of the page (the *note in the footer*). They are used for comments, links or references to the material you used. To create one, use `\footnote{text}`. Footnotes are also counters, which means they are automatically numbered correctly.

{{< double-view src="LatexFootnotes.webp" lang="Latex" split="even" >}}
From the XYZ website\footnote{http://xyz.com} I gathered the following results...
{{< /double-view >}}

Don't use too many footnotes. If a paragraph is not important enough to be placed in your body text, consider if it should be in the document at all.

## References

In reports and articles, references are often made to tables, figures, or other special segments. Again, LaTeX has you covered.

To label a certain segment, call `\label{marker}` somewhere in it, preferably near the top. You can make up your own marker names.

To place a reference to it somewhere else in the document, use `\ref{marker}`. If you want to display the page number that a certain marker is on, use `\pageref{marker}`.

{{< double-view src="LatexReferences.webp" lang="Latex" >}}
\section{Introduction}
\label{sec:someMarker} Lorem ipsum...

\section{Problem Statement} 
As seen in section \ref{sec:someMarker} on page \pageref{sec:someMarker}, ...
{{< /double-view >}}

It's customary to start your marker with an abbreviation of what it is you're referring to. For example, `sec:something` refers to a section. It, again, helps with structure, hierarchy and semantics.

## Bibliography

If you're using or citing information from another source, your document requires a bibliography at the end. It's simply a list of all the sources you've used.

A bibliography is created using the following `thebibliography` environment:

{{< highlight Latex >}}
\begin{thebibliography}{maxNum}
    % ... items ...
\end{thebibliography}
{{< /highlight >}}

The *maxNum* argument defines how large the bibliography will be, which is used by LaTeX to know how much space to reserve for in-document citations.

An item is added with `\bibitem[label]{marker}`, followed by the actual source. The optional *label* argument can be used if you don't want the standard numbers to be used. Again, the *marker* you are allowed to make up yourself.

Within the document, use `\cite{marker}` to refer to the bibliography item.

{{< double-view src="LatexBibliography.webp" lang="Latex" >}}
This beautiful paragraph I read in the beautiful \textit{Book 2} (\cite{marker2}). Isn't it wonderful?

\begin{thebibliography}{2}
    \bibitem{marker1} \textit{Book 1}, by Alessandro di Casa
    \bibitem[SpecialText]{marker2} \textit{Book 2}, by Juan di Casa
\end{thebibliography}
{{< /double-view >}}