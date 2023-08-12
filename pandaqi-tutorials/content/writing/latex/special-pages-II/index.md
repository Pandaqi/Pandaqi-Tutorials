---
title: "Special Pages II"
type: "article"
weight: 26
---

Continuing on last chapter, here are the two other quite important special pages. The main purpose of LaTeX was to easily write clear and beautiful (scientific) papers or lasting documents for global consumption. These special pages help achieve that goal, even if they sometimes feel unnecessary or like a pain to write.

## Glossary

A glossary is a list with terms and their definitions. These terms could be known by the reader, but they are usually field-specific and it's best to clarify exactly what you mean with them somewhere. On top of that, it keeps track of a list of page numbers where the terms occur, just like the index.

First, include the `glossaries` package. Then create enw entries with ...

{{< highlight Latex >}}
\newglossaryentry{label} {
    name=name,
    description={description} 
}
{{< /highlight >}}

The *name* and *description* are what's actually displayed in the glossary. The *label* is used to find all occurrences throughout the document.

This is very precise. You don't want to type the label with a capital letter in one place, and all lowercase somewhere else, as that would show up as two _different_ entries for the glossary.

Therefore, the glossary package also adds commands to help you transform labels to make them consistent.

| Command          | Description | 
| ---------------- | ------------------------------------------------------| 
| `gls{label}`     | Prints the label all lowercase | 
| `Gls{label}`     | Prints the label with a capital starting letter | 
| `glspl{label}`   | Prints the label all lowercase, in plural form | 
| `Glspl{label}`   | Prints the label with capital letter, in plural form | 

Just like the index, the glossary is resource intensive and needs some extra steps to activate fully.

* To make the glossary as it's compiling, use the `\makeglossary` command at the top. 
* To print it, use `\printglossary`.

{{< double-view src="LatexGlossariesNormal" lang="Latex" split="none" >}}
\usepackage{glossaries}
\makeglossary

\newglossaryentry{arithm} {
    name=arithmetic,
    description={Doing computations with numbers}
}

\newglossaryentry{add} {
    name=addition,
    description={Adding numbers together}
}

\begin{document}
    \Gls{arithm} is a fascinating subject. We'll talk mostly about \Glspl{add}, subtraction, multiplication, and division. Have fun!

    \printglossary
\end{document}
{{< /double-view >}}

## Acronyms

On top of a glossary of terms, you can also include the expanded form of *acronyms*. 

To create a new acronym entry, use:

{{< highlight Latex >}}
\newacronym{label}{acronym}{full form}
{{< /highlight >}}

Within the text, you can use these three commands:

| Command              | Description | 
| -------------------  | -------------------------------- | 
| `acrlong{label}`     | Prints *full form* only | 
| `acrfull{label}`     | Prints *full form* (*acronym*) | 
| `acrshort{label}`    | Prints *acronym* only | 

To print it, use `\printglossary[type=\acronymtype]`.

{{< double-view src="LatexGlossariesAcronyms" lang="Latex" split="none" >}}
\usepackage[acronym]{glossaries}
\makeglossary

\newacronym{www}{WWW}{World Wide Web}

\begin{document} 
    The \acrlong{www} is a great place. For example, on the \acrfull{www} you can learn all about the \LaTeX{} language!

    \printglossary[type=\acronymtype]
\end{document}
{{< /double-view >}}

## Nomenclature

A nomenclature declares definitions for names or notations. It seems exactly the same as a glossary, but there are two important differences: 

* It only explains names you invented or assigned yourself
* It doesn't count the pages on which they occur.

{{% example %}}
The term **speed of light** fits the glossary. The symbol **c** could be explained in the nomenclature to mean the *speed of light* in _your document_.
{{% /example %}}

First, include the `nomencl` package. Add entries using

{{< highlight Latex >}}
\nomenclature{name or notation}{explanation}
{{< /highlight >}}

Don't forget the remaining two-step-process for these special pages:

* At the top of the document, use `\makenomenclature` to make it
* Later use `\printnomenclature` to print it on the page.

{{< double-view src="LatexNomenclatures" lang="Latex" split="none" >}}
\usepackage{nomencl}
\makenomenclature

\begin{document}
    \nomenclature{$c$}{Speed of Light}
    \nomenclature{$e$}{Euler's Number} The speed of light is a very important concept in modern physics.

    \printnomenclature
\end{document}
{{< /double-view >}}