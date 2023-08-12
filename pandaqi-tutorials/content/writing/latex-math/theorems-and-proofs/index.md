---
title: "Theorems & Proofs"
type: "article"
weight: 13
---

Until now we've done everything inside math environments---which isn't weird for a LaTeX Math course---but now it's time to step out of it. Let's look at mathematical concepts that don't necessarily need to be formulas or equations. Common math concepts that don't need to be in _math mode_.

I'm talking about all of these: **theorems**, **lemmas**, **corollaries**, **remarks**, **definitions**, and **proofs**.

## General Syntax

To create these different types of mathematical paragraphs, a single command is available in standard LaTeX. This command simply creates an environment for this type, and you can use some extra arguments to customize it. The syntax is:

{{< highlight Latex >}}
\newtheorem{environment name}{environment text}[reset counter]
{{< /highlight >}}

`environment name` takes any standardized name, such as *theorem* or *lemma*.

`environment text` specifies what text is automatically displayed at the start of the environment. This is not the _content_, it's some simple phrase that signals to the reader what's about to happen. Again, the standard text (in your document's language) will do.

`reset counter` is optional. It requires the name of an existing counter. Every theorem environment receives its own independent counter, but every time the *reset counter* is incremented, this theorem counter is reset. 

This way, for example, you can number your theorems starting from one _per section_, by using *section* as the reset counter.

## Applying the Syntax

Now you can create all those mathematical constructs I mentioned. Define your theorem and start a new environment of the same name. Additionally, every theorem environment can receive an optional argument that specifies the _title_ of your theorem.

{{< double-view src="LatexMathTheoremsBasics" lang="Latex" split="none" >}}
\newtheorem{theorem}{THEOREM}[section]
\newtheorem{lemma}{LEMMA}[theorem]

\begin{document}

    \section{Chapter 1}
    \begin{theorem}[Pythagorean Theorem]
        It's simply $a^2 + b^2 = c^2$
    \end{theorem}

    \begin{lemma}
        Some trivial lemma here.
    \end{lemma}

\end{document}
{{< /double-view >}}

{{% remark %}}
Because each theorem environment receives its own counter, you can even use **those** as reset counters in subsequent new theorems you define!
{{% /remark %}}

## Customizing the Layout

All these environments are typeset the same: 

* The *environment text*, and optionally the *title*, are bold
* All the text inside is in italics. 

To modify this, use the last of the AMS packages: `amsthm` (*AMS theorems*). 

This provides two important functionalities: 

* Non-numbered theorem environments
* Predefined styles for each type of environment

### Non-numbered Environments

To create non-numbered environments, use the star variation.

{{< highlight Latex >}}
\newtheorem*{name}{text}[reset]
{{< /highlight >}}

{{< double-view src="LatexMathUnnumberedTheorems" lang="Latex" split="none" >}}
\usepackage{amsthm}

\newtheorem*{theorem}{THEOREM}

\begin{document}
    \begin{theorem}[Pythagorean Theorem]
        It's simply $a^2 + b^2 = c^2$
    \end{theorem}
\end{document}
{{< /double-view >}}

### Theorem Styles

To give a theorem environment a certain style, use this command _before_ you define the theorem:

{{< highlight Latex >}}
\theoremstyle{type of theorem}
{{< /highlight >}}

The AMS theorems package has predefined styles for every type. These are often exactly what you need and are in many ways the universal notation.

{{< double-view src="LatexMathTheoremStyles" lang="Latex" split="none" >}}
\usepackage{amsthm}

\theoremstyle{theorem}
\newtheorem*{theorem}{Theorem}
\theoremstyle{remark}
\newtheorem*{remark}{Remark}

\begin{document}
    \begin{theorem}[Pythagorean Theorem]
        It's simply $a^2 + b^2 = c^2$
    \end{theorem}

    \begin{remark}
        Some trivial remark.
    \end{remark}
\end{document}
{{< /double-view >}}

## Proofs

Proofs are no different from everything discussed thus far. Create them by using the `proof` environment with the same options.

They are, however, automatically supported by the AMS package! 

This means you don't have to define them yourself and they already have the correct style. On top of that, a square is added at the end of every proof. This is the QED symbol that demonstrates a proof is complete. To change this, renew the `\qedsymbol` command.

{{< double-view src="LatexMathProofs" lang="Latex" split="none" >}}
\renewcommand{\qedsymbol}{$\heartsuit$}
\begin{proof}

    Assume that in fact $\cup_{A \in F} A$ is negligible for any such~$F$.  
    Then the family of {\em all}\/ negligible subsets of~$[0,1]$ would satisfy the hypotheses of Zorn's Lemma! 
    There would then be a maximal negligible subset. But this is absurd. 
    
    Indeed, suppose $S$\/ is a maximal negligible subset of~$[0,1]$.  
    
    If there were $x\in [0,1]$ not contained in~$S$, then $S \cup \{x\}$ would be a negligible subset of~$[0,1]$ strictly containing~$S$. 
    Hence there is no such~$x$, and $S=[0,1]$. But it is known that $[0,1]$ is not negligible.
 
\end{proof}
{{< /double-view >}}