---
title: "Alignment & Simple Environments"
type: "article"
weight: 14
---

This chapter will talk about some very simple environments that are quite important. They are nothing fancy or complicated. You just need to know they exist and how they work.

## Alignment

If you don't want LaTeX to justify a certain part of the text, you can override the alignment with these commands.


| Environment    | Switch Command    | Description |
| -------------- | ----------------- | -------------------- |
| `flushleft`    | `\raggedright`    | Left aligned text |
| `flushright`   | `\raggedleft`     | Right aligned text |
| `center`       | `centering`       | Centred text |

{{< double-view src="LatexAlignment.webp" lang="Latex" split="even" >}}
\begin{flushleft}
    This text is aligned to the left, which is seen by the uneven right margin (in contrast with justified text). If this paragraph gets much, much longer than this, it makes an even bigger difference. But, it's usually preferred to have most of your text justified.\
    \raggedleft
    Woah, now we're aligned to the right.
\end{flushleft}
{{< /double-view >}}

## Verbatim

If you're trying to typeset computer code, you don't want LaTeX commands interfering with that. The `verbatim` environment displays exactly what you put in there---without processing---in a monospaced font. This means that it also leaves all whitespace and returns as they are.

The starred variation does the same, but replaces all spaces with a special character to emphasize them.

{{< double-view src="LatexVerbatim.webp" lang="Latex" >}}
\begin{verbatim}
    p {
        color:red;
    }
\end{verbatim}

\begin{verbatim*}
    p {
        color:red;
    }
\end{verbatim*}
{{< /double-view >}}

If you don't want a whole environment, but inline code, you can use the `\verb+text+` command. The `+` here is the delimiter, which signals the start and end of the command. This can be any character, except for letters, \* or space. This too has a starred variation that emphasises whitespace.

{{< double-view src="LatexInlineVerbatim.webp" lang="Latex" split="even" >}}
An accented a is made with \'a. Whoops, sorry, I mean \verb+\'a+
{{< /double-view >}}

## Quotations

The `quote` environment is used for quotes, examples or important phrases.

The `quotation` environment is especially useful for long quotes, consisting of several paragraphs, because it indents the first line of each paragraph.

{{< double-view src="LatexQuoteQuotations.webp" lang="Latex" >}}
\begin{quote}
    To be, or not to be.
\end{quote}

\begin{quotation} To be, or not to be, that is the question: Whether 'tis Nobler in the mind to suffer The Slings and Arrows of outrageous Fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep No more; and by a sleep, to say we end The Heart-ache, and the thousand Natural shocks That Flesh is heir to? 'Tis a consummation

Devoutly to be wished. To die, to sleep, To sleep, perchance to Dream; aye, there's the rub, For in that sleep of death, what dreams may come, When we have shuffled off this mortal coil, Must give us pause. There's the respect That makes Calamity of so long life:
\end{quotation}
{{< /double-view >}}

The `verse` environment is used for poems, where line breaks and white space are very important. So actually, in this case, with our current Shakespearean spirits, we would have been better of using this environment 🎶

_Why use these environments if they barely change anything?_ Semantics, semantics! If you read your document now, you know exactly what something is supposed to represent: a _quote_. You can always change the styling later to be wildly different. But you can't easily retrieve lost meaning from a badly marked up document.