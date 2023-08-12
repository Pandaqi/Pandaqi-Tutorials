---
title: "Sectioning"
type: "article"
weight: 8
---

The first step in creating any structured project is sectioning: dividing the text into sections, subsections and paragraphs. This creates hierarchy and clarity. LaTeX has very good support for this, as long as you don't want a hierarchy more than 3 levels deep. But that would result in a mess anyway 😉

These sectioning commands are available, in order of importance:

| Command                  | Hierarchy Level |
|-|-|
| `\part{name}`            | -1               |
| `\chapter{name}`         | 0                |
| `\section{name}`         | 1                |
| `\subsection{name}`      | 2                |
| `\subsubsection{name}`   | 3                |
| `\paragraph{name}`       | 4                |
| `\subparagraph{name}`    | 5                |

Two important notes:
* *Chapters* are only available in books and reports.
* *Letters* don't have any sectioning commands, and using them in such a document will result in an error.

{{< double-view src="LatexSectioningCommands.webp" lang="Latex" >}}
\documentclass{book}

\begin{document}
\chapter{Chapter} Lorem ipsum

\section{Section} Lorem ipsum

\subsection{Subsection} Lorem ipsum

\subsubsection{Subsubsection} Lorem ipsum

\paragraph{Paragraph} Lorem ipsum

\subparagraph{Subparagraph} Lorem ipsum

\end{document}
{{< /double-view >}}

## Advantages of Sectioning

It keeps your documents structured and well-organized. Both behind the scenes and to the reader. Because that's all that LaTeX is: a way to transform a piece of text, visually, so it's as easy to read and compherend as possible.

But, sectioning also simplifies your life in other ways:

-   They automatically gradually decrease font size. Which means that,
    for instance, `\part` will be typeset with large letters, and
    `\subsubsection` typeset with small letters.
-   They automatically number your sections. For example, the first
    `\subsection` after the second `\section` command will
    automatically have the number `2.1` prefixed.
-   They make it easy to create an automatically updated table of
    contents.

## Turn off Numbering

If you don't want a section to be numbered, use its star variation.

{{< double-view src="LatexBasicSyntax5.webp" lang="Latex" >}}
\section{I am a section}
\section*{Me too!}
\section{And three make a crowd.}
{{< /double-view >}}

## Table of Contents

If your document has been structured well, all you have to do is call the command `\tableofcontents`!

This only takes into account numbered sections, however. Any non-numbered sections need to be included manually. This is done by adding the following command when you declare the section.

{{< highlight Latex >}}
\addcontentsline{toc}{sectionType}{name}
{{< /highlight >}}

{{< double-view src="LatexTableOfContents.webp" lang="Latex" >}}
\tableofcontents

\section{First One} Lorem ipsum...
\section{Second One} Lorem ipsum...
\addcontentsline{toc}{section}{Third One}
\section*{Third One} Lorem ipsum...
{{< /double-view >}}

## Title Page

Right after you start the document, you have the opportunity to create a good-looking title page with some special commands: `\title{title}`, `\author{authors}`, and `\date{date}`

Authors need to be separated by the `\and` command---most other commands and symbols won't work on a title page. You can also use the `\thanks{text}` command to thank anyone.

You don't need to define all of them, and if you leave out the date, LaTeX will just use today's date. Even when defined, you need to tell the processor when you're done with your title page and it can be created. Use the `\maketitle` command.

{{< double-view src="LatexTitlePage.webp" lang="Latex" >}}
\title{This Is A Title!}
\author{Made by Me \and Myself \and I}
\date{\today}

\maketitle
{{< /double-view >}}

## Abstract

Most (scientific) papers start by providing an abstract or summary of what's inside. LaTeX has the `abstract` environment for that. It automatically adds the text **Abstract** above it, but you'll learn later on how to customize that.

{{< double-view src="LatexAbstract.webp" lang="Latex" >}}
\begin{abstract} 
This documents is about something very interesting that you can't really understand without reading it, but this will give you the summary anyway.
\end{abstract}
{{< /double-view >}}