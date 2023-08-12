---
title: "Document Classes"
type: "article"
weight: 7
---

Document classes aren't something to "understand". You just need to know what's out there and what options you have. Setting the right document class _before_ creating the rest of the document is crucial. Some commands will be available, others won't be. Choosing the wrong one means you're fighting Latex to make it look like you want, instead of allowing it to take care of the important stuff for you.

For this, I provide several nice tables.

## Class Names

{{< highlight Latex >}}
\documentclass{article}
{{< /highlight >}}

| Name      | Description                                                                                     |
|-----------|-------------------------------------------------------------------------------------------------|
| `article` | For articles, such as presentations, short reports, scientific journals.                        |
| `proc`    | For proceedings based on the article class                                                      |
| `minimal` | Only sets a page size and a base font---as small as it gets. Mainly used for debugging purposes |
| `report`  | For long reports containing several chapters, small books, PhD theses, etcetera.                |
| `book`    | For actual books                                                                                |
| `slides`  | For slides. Uses big sans-serif letters.                                                        |
| `beamer`  | For writing presentations                                                                       |
| `memoir`  | Based on the book class, but you can create any kind of document with it.                       |
| `letter`  | For letters                                                                                     |

## Class Options

{{< highlight Latex >}}
\documentclass[10pt, twoside, leqno]{article}
{{< /highlight >}}

| Options                           | Description                       |
|-----------|-------------------------------------------------------|
| `10pt`, `11pt`, `12pt`            | Sets the size of the main font in the document. If not specified, 10pt is assumed. |
| `a4paper`, `letterpaper`, ...     | Defines the paper size. Used to be `letterpaper`, but now `a4paper` is default almost everywhere. <br/><br/>Other options are `a5paper`, `b5paper`, `executivepaper` and `legalpaper` |
| `fleqn`                           | Typesets formulas left-aligned, instead of centred |
| `leqno`                           | Places numbering of formulas on the left hand side, instead of the right |
| `titlepage`, `notitlepage`        | Specifies whether a new page should be started after the document title or not. The *article* class doesn't do this by default, while the *report* and *book* class do. |
| `twocolumn`                       | Typesets the document in two columns instead of one |
| `twoside`, `oneside`              | Specifies whether double or  single sided output should be compiled. The *article* and  *report* classes are single sided, while the *book* class is double sided by default. <br/><br/>Keep in mind: you still need to tell the printer you're using to make a two-sided printout. |
| `landscape`                       | Changes the layout to landscape (horizontal) mode |
| `openright`, `openany`            | Makes chapters begin either only on right hand pages, or on the next page available. The *book* class starts on the right by default, while the *report* class doesn't. The *article* class doesn't know chapters and can't use this. |
| `draft`                           | Makes LaTeX indicate hyphenation and justification problems by adding a small square in the right-hand margin of the problem line. Also suppresses inclusion of images and shows only a frame. |

## Page Styles

Every document class supports three predefined header/footer combinations called **page styles**. To set one for the entire document, use 

{{< highlight Latex >}}
\pagestyle{style}
{{< /highlight >}}

The styles to choose from are

| Option    | Description |
|-|-|
| `plain`   | Prints the page numbers on the bottom of the page, centred within the footer. This is default. |
| `headings`| Prints current chapter heading and page number in the header on each page. The footer remains empty. |
| `empty`   | Footer and header are empty. |

To change the style for one specific page, use `\thispagestyle{style}` while on that page.

{{< double-view src="LatexPageStyles.webp" lang="Latex" >}}
\documentclass{article}

\pagestyle{headings}

\begin{document}
\section{First Section} Lorem ipsum...
\end{document} 
{{< /double-view >}}