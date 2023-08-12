---
title: "Lists"
type: "article"
weight: 16
---

Even if your paragraphs are of the highest typographical quality, some things are better expressed using lists. As the name implies: they are ideal for _listing numerous things_. This sounds obvious, but people often miss when they write _sentences_ in which they merely _list things_. Those sentences would be cleaner and shorter as a list.

{{% example %}}
"You can get the film by downloading it at this url, grabbing a copy from your local store, or streaming it from this service." 

How to get the film?
* Download here
* Buy from your local store
* Stream it here
{{% /example %}}

All different list types are created using an environment that follows this boilerplate syntax:

{{< highlight Latex >}}
\begin{listType}
    \item Text
    \item Text
\end{listType}
{{< /highlight >}}

## Unordered Lists

Unordered lists are, you guessed it, lists where order doesn't matter. They are displayed with *bullets*---big round dots---in front of every list item. For this, use the `itemize` environment.

{{< double-view src="LatexItemize.webp" lang="Latex" >}}
\begin{itemize}
    \item Uno
    \item Duo
    \item Tres
\end{itemize}
{{< /double-view >}}

## Ordered Lists

Here, order *does* matter. Items are therefore displayed with a number in front, which is incremented for every item. For this, use the `enumerate` environment.

{{< double-view src="LatexEnumerate.webp" lang="Latex" >}}
\begin{enumerate}
    \item Uno
    \item Duo
    \item Tres
\end{enumerate}
{{< /double-view >}}

## Description Lists

Description lists join a description and its definition or explanation. You can supply your own text to be displayed in front of every list item, by using an optional argument `\item[text]`. For this, use the `description` environment.

{{< double-view src="LatexDescriptionLists.webp" lang="Latex" >}}
\begin{description}
    \item[Bird] An animal
    \item[Animal] An organism
    \item[Organism] See Bird.
\end{description}
{{< /double-view >}}

## Nesting Lists

You can nest these in any way you like, up to a depth of four. 

You can also create your own custom lists, sometimes by using a package. (Which is what the rest of this chapter is about.) 

Customs lists allow you to circumvent the nesting depth limit. But as always: don't. Lists with more depth than four levels are a crime against humanity.

## Custom Lists

### Without Packages

You've already learned about the fact that LaTeX uses counters for nearly everything. Lists are certainly no exception---they are one of the primary reasons! 

The counters used for the four levels of depth are

{{< highlight Latex >}}
enumi, enumii, enumiii, enumiv
{{< /highlight >}}

Their corresponding numbering system is accessed with

{{< highlight Latex >}}
labelenumi, labelenumii, labelenumiii, labelenumiv
{{< /highlight >}}

{{< double-view src="LatexListCounters.webp" lang="Latex" >}}
\begin{enumerate}
    % Just to show you that this does nothing
    \setcounter{enumii}{10}
    \item Uno 
        \begin{enumerate}
            \setcounter{enumii}{3}
            \item Quatro?!
        \end{enumerate}
    \item Duo
\end{enumerate}
{{< /double-view >}}

### With Packages

With the `enumitem` package you can create your own labels for every item. For this, use the optional parameter `[label=yourLabel]` for the environment.

{{< double-view src="LatexEnumitemPackage.webp" lang="Latex" >}}
\usepackage{enumitem}

\begin{document}
    \begin{enumerate}[label=\bfseries Item \roman*:]
        \item 5 + 7 = 12
        \item 9 + 1 = 10
        \item 2 * 2 = 4
    \end{enumerate}
\end{document}
{{< /double-view >}}

## Easylist

The `easylist` package is very powerful. It provides an easier syntax for lists. To load it, use

{{< highlight Latex >}}
\usepackage[control character]{easylist}
{{< /highlight >}}

_What's the control character? It's what signals the start of a new item. It's the replacement for `\item` in the default lists.

It's common to use an ampersand as the control character, but you can choose anything you like.

Use it to indicate an item and its depth. For example, if you need a depth three item, simply type three control characters right after each other.

{{< double-view src="LatexEasylistBasics.webp" lang="Latex" >}}
\usepackage[ampersand]{easylist}

\begin{document}
    \begin{easylist}
        & Main Item
            && Sub Item
        & Main Item
                &&& Sub Sub Item
        & Main Item
    \end{easylist}
\end{document}
{{< /double-view >}}

The `easylist` environment also has an optional argument that allows you to specify what kind of list it is. The options are:

| Name           | Remark |
| -------------- | --------- |
| `itemize`      |  |
| `enumerate`    | Default. |
| `tractatus`    | Items are numbered like sections---a dot between every level of depth |
| `checklist`    | All items have empty checkboxes next to them |
| `booktoc`      | Approximately the format that is used for the table of contents of the book class |
| `articletoc`   | Approximately the format that is used for the table of contents of the article class |

On top of that, you can define different styles for each _level_ of depth.

{{< highlight Latex >}}
\ListProperties(Style1=style, Style2=style, … )
{{< /highlight >}}

{{< double-view src="LatexEasylistAdvanced.webp" lang="Latex" >}}
\begin{easylist}[checklist]
    \ListProperties(Style3*=\textit{!} )
    & Main Item
    && Sub Item
    & Main Item
    &&& Sub Sub Item
    & Main Item
\end{easylist}
{{< /double-view >}}

{{% remark %}}
The asterisk behind Style3 in this example means that it should replace the original list bullet type. If you don't add it, it will add your style at the start of every list item with this depth, but also keep the original list bullet.
{{% /remark %}}

## Inline lists

Again, the `enumitem` package comes to the rescue! To use starred `enumerate*` environments, include it with optional argument `[inline]`. The optional argument for labels also still applies.

{{< double-view src="LatexInlineLists.webp" lang="Latex" >}}
\usepackage[inline]{enumitem}

\begin{document}
    \begin{enumerate*}
        \item Cool
        \item Cool
        \item Supercool!
    \end{enumerate*}
\end{document}
{{< /double-view >}}

_What's the use of inline lists?_ I keep saying this, but it's **semantics**. Now the markup clearly states that this is a list. But you can still display it like it's a sentence, or while saving some space, if you want. 

{{% example %}}
This website, like most websites, uses lists for navigation and menu buttons. This way, Google easily understands what it means. And our code looks clear and meaningful. We simply _style_ the lists later to look like ... whatever we want.
{{% /example %}}