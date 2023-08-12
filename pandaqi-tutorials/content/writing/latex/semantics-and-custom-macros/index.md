---
title: "Semantics & Custom Macros"
type: "article"
weight: 10
---

Before I start introducing command after command, I want to talk about something fundamentally important: **semantics**. Semantics means separating your markup and layout. In other words: using _meaningful_ commands that say something about _what is inside_. Meaningful commands, together with counters, form the vast majority of working with LaTeX.

For instance, say you want to emphasize certain words or phrases by making them *italic*. Then you could use the `\textit{phrase}` command on everything, and you're done. But that command carries no meaning. It merely states some _visual_ change, but doesn't _mark the text_ as anything.

And what if, just before printing the document, you decide that you want to place emphasis instead using **bold** text? You'd have to go in and change every single instance where you used this command. And still, the command would be meaningless, just to get the layout right.

The solution is to work semantically. Instead, use the `\emph{phrase}` command. That command states: this text is _emphasized_. Now you and the software know this piece of text is _slightly more important_ than the other words in the sentence. 

If you markup the document like that, everything has the correct meaning assigned. And then you can easily define your own styling rules later about _how_ to show emphasized text.

## Custom Macros

To be able to do this, you need to know how to create your own commands, and how to alter existing ones. At first, I planned on including this chapter as the very last one. But I decided that it's just too useful to *not* know about when first learning LaTeX. For the reason stated above: get into the good habit of writing semantic markup, of seperating _layout_ and _content_.

## New Commands

The syntax for creating a new command is

{{< highlight Latex >}}
\newcommand{\name}[numArg][default]{definition}
{{< /highlight >}}

Here, *numArg* is the number of arguments it accepts, with a maximum of 9. 

{{% remark %}}
Like with deep nesting: if your macro needs that many arguments ... ya gotta reconsider what you're trying to do 😛
{{% /remark %}}

Only the first one can be optional. If it isn't present---which is possible, because it's optional---the *default* value will be used. Within the *definition*, you can use `#<number>` to refer to the arguments.

{{< double-view src="LatexNewCommands.webp" lang="Latex" >}}
% Defining our own counter
\newcounter{myromancounter}
\setcounter{myromancounter}{1}

% Defining our own command, \romansection, which takes 1 argument, and automatically increments our counter
\newcommand{\romansection}[1]
    {\section*{\Roman{myromancounter}. #1} 
    \addtocounter{myromancounter}{1} 
}

\romansection{This is the first section}
\romansection{This is the second section}
{{< /double-view >}}

Of course, new commands must carry a name that's not already in use. If you want to overwrite an existing command instead, use

{{< highlight Latex >}}
\renewcommand{\name}[numArg][default]{definition}
{{< /highlight >}}

{{< double-view src="LatexNewCommands.webp" lang="Latex" >}}
% We renew the existing section counter to one with Roman numerals
\renewcommand{\thesection}{\Roman{section}}

\section{This is the first section}
\section{This is the second section}
{{< /double-view >}}

Note that, when renewing a command, you can't use the existing one in the definition - it creates a loop, which LaTeX doesn't know how to handle.

{{% remark %}}
Typically, commands are created or altered in the preamble, before anything is processed/printed. But you can do it any time you want.
{{% /remark %}}

## New Environments

The syntax for creating a new environment is:

{{< highlight Latex >}}
\newenvironment{name}[numArg]{before}{after}
{{< /highlight >}}

*Before* defines the commands to be executed right before the environment starts. *After* the commands to be executed right after the environment has wrapped up.

{{< double-view src="LatexNewEnvironments.webp" lang="Latex" >}}
\newenvironment{noIndent}
    {\noindent}
    {\}

A paragraph!

\begin{noIndent}
    A paragraph!
\end{noIndent}

A paragraph!
{{< /double-view >}}

It's possible to also declare new commands within such a new environment declaration, which will only be available within that environment. Nothing changes, except for the fact that you need to access arguments with `##<number>`.

{{< double-view src="LatexCommandsWithinEnvironments.webp" lang="Latex" >}}
\newenvironment{noIndent}
    {\noindent 
        \newcommand{\boldText}[1]
            {\textbf{##1}}
    }
    {}

A paragraph!

\begin{noIndent}
    A \boldText{cool} paragraph!
\end{noIndent}
{{< /double-view >}}