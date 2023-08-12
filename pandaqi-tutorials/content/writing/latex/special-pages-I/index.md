---
title: "Special Pages I"
type: "article"
weight: 25
---

We've already briefly seen the **title page** and **table of contents** at the start of every document. But there are more special pages that are usually included in LaTeX documents. They were important enough to get proper support.

In this chapter and the next, we'll talk about these four:

* Appendix
* Index
* Glossary
* Nomenclature

## Appendix

Usually, you want your document to be as short and snappy as possible. When I wrote my Mathematics thesis at the university, they set a strict maximum of 20 pages for the main content. 

You can't describe and report deep technical research in so few pages! Only 20! I barely finished my introduction!

But you _can_ give the most important details, and move _everything else_ to some section at the back of the document. In other words: the appendix.

It holds background information or information that was relevant but not crucial enough for the main document. For example, a book on LaTeX might mention the existence of a few commands/environments. But if you want to go in-depth, it refers you to the appendix.

First, include the `appendix` package. This gives you the `appendices` environment.

You can even use a `subappendices` environment within it, with `\subsections`. These appendices are numbered with capital letters, instead of numbers. Otherwise, they are nothing special, which means you can use any command here as well.

{{% remark %}}
You can also use regular `\section` commands to create different subappendices.
{{% /remark %}}

{{< double-view src="LatexAppendixBasics" lang="Latex" >}}
\usepackage{appendix}

\begin{document}
    \begin{appendices}
        \section{What I Forgot}
        Lorem Ipsum...
        \begin{subappendices}
            \subsection{Important stuff}
            Lorem ipsum...
            \subsection{Leftovers}
            Lorem ipsum...
        \end{subappendices}
    \end{appendices}
\end{document}
{{< /double-view >}}

The package can take a number of useful (optional) properties:

| Specifier    | Description |
| ------------ | ------------ |
| `page`       | The appendix environment has a large header *Appendices* |
| `toc`        | Appendices entries are added to the table of contents |
| `title`      | Appendices are labelled 'Appendix *letter*', instead of simply the letter. |
| `titletoc`   | Appendices are added to the table of contents as 'Appendix *letter*' |

{{< double-view src="LatexAppendixAdvanced" lang="Latex" >}}
\usepackage[title, titletoc]{appendix}

\begin{document}
    \tableofcontents
    \begin{appendices}
        \section{What I Forgot}
        Lorem Ipsum...
        \section{And Something Else}
        Lorem Ipsum...
    \end{appendices}
\end{document}
{{< /double-view >}}

## Index

An index contains all important words from the document, in alphabetic order, together with the page(s) on which they occur. Of course, it would be a pain to count every occurrence of a word yourself.

Make your life a lot easier with a package called `imakeidx` (*i make index*).

Every time you want a word included in the index, type `\index{word}` immediately after it. This command doesn't render the text---otherwise the word would be doubled every time---but signals the index that an occurrence is here.

If you want the document to keep track of these, type `\makeindex` at the top of your document. This makes compilation a lot slower, if the document is large. If you're not compiling for publication, you might want to comment it out. 

Then, to actually print the index, use `\printindex`. Everything together ...

{{< double-view src="LatexIndexBasics" lang="Latex" split="even" >}}
\usepackage{imakeidx}
\makeindex

\begin{document} 
    An appendix\index{appendix} is a section containing extra background information\index{information} for whatever was inside the document, or information\index{information} that isn't important for everyone reading the main document. 
    
    For example, a book on \LaTeX{} could provide an appendix\index{appendix} that explains how to deal with rare errors during installation or usage.
    
    \printindex
\end{document}
{{< /double-view >}}

It's also possible, to nest these keywords. For example, say you give an important definition at the first page, and later provide some definitions that _expand_ the first one. Then clarify they belong together using `\index{parent!word}`.

{{< double-view src="LatexIndexAdvanced" lang="Latex" split="even" >}}
Arithmetic\index{arithmetic} is fascinating subject. 

We'll talk mostly about addition\index{arithmetic!addition}, subtraction\index{arithmetic!subtraction}, multiplication\index{arithmetic!multiplication} and division\index{arithmetic!division}. 

Have fun!

\printindex
{{< /double-view >}}

Lastly, the `\makeindex` command receives optional arguments:

| Specifier                | Description |
| ------------------------ | -------------- |
| `title=Title`            | Give a different title than the default *Index*. |
| `intoc`                  | Add an *index* entry to the table of contents |
| `columns=Number`         | How many columns to use |
| `columnsep=Length`       | The white space between columns |
| `colemnseprule=Length`   | The width of the vertical line between columns |

{{< double-view src="LatexIndexSuperAdvanced" lang="Latex" >}}
\usepackage{imakeidx}
\makeindex[columns=1,title=Mighty Index]

\begin{document}
Arithmetic\index{arithmetic} is fascinating subject. 

We'll talk mostly about addition\index{arithmetic!addition}, subtraction\index{arithmetic!subtraction}, multiplication\index{arithmetic!multiplication} and division\index{arithmetic!division}. 

Have fun!

\printindex
\end{document}
{{< /double-view >}}