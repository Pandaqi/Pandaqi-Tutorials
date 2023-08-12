---
title: "Basic Structure"
type: "article"
weight: 6
---

Every document starts with the same few basic commands. Like telling Microsoft Word that you want the paper a specific size, Latex also benefits from knowing what you're trying to do.

Below is the basic structure of a Latex document.

{{< highlight Latex >}}
\documentclass[options]{documentType}
% ... packages ...

\begin{document}
    % ... everything ... 
\end{document}
{{< /highlight >}}

The first part---everything that is before the document environment---is called the *preamble*. It is used to tell LaTeX to load what we need and determine the type of document. Only what's inside the document environment is actually _shown_ in the document.

{{< double-view src="LatexBasicStructure.webp" lang="Latex" >}}
\documentclass{article}
\usepackage[english]{babel}

%In the preamble...

\begin{document} 
    Inside the document...
\end{document} 

After the document
{{< /double-view >}}

{{% remark %}}
After the `\end{document}` command you can place anything you like (comments, leftover notes, pieces about which you still have doubts). It's not going to show up in the document anyway!
{{% /remark %}}

## Packages

LaTeX wants to compile as quickly as possible, while keeping the file size low as well. Therefore, you need to manually include packages if you want more than very basic commands. The syntax is

{{< highlight Latex >}}
\usepackage[optionalArgument]{packageName}
{{< /highlight >}}

You can include as many as you like, or none at all. Most of these packages are already installed on your computer if you've installed a TeX distribution, but you can create or download your own custom packages.

## Document Class

The document class decides the type of document you're creating. This mostly influences which commands you're able to use and how the finished product will look. Next chapter will tell you everything about it!

## Importing Files

When your project grows in size, it's useful to split it into multiple TeX files. (Usually one per chapter or section). These can then be combined into one main TeX file.

In the preamble, you can specify which files are going to be imported somewhere with `\includeonly{filename, filename, …}`.

Within the document itself, use `\include{filename}` to actually copy it there. 

Note that LaTeX starts an included document on a new page. If you don't want that, you can use `\input{filename}` to just literally dump the content of the other file right there.

{{< double-view src="LatexImportCombineFiles.webp" lang="Latex" >}}
\documentclass{article}
\includeonly{latex.tex}

\begin{document}
\input{latex.tex}
\end{document} 

%The contents of latex.tex are... This is everything that's inside latex.tex 
{{< /double-view >}}

You don't _necessarily_ have to tell LaTeX which files you're planning on including in the preamble. But it's the best practice, as it increases performance. LaTeX doesn't need to search everywhere when you include a file, but knows what's coming.