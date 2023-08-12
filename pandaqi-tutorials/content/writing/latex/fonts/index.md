---
title: "Fonts"
type: "article"
weight: 15
---

LaTeX has its own default font---Computer Modern---which looks great everywhere and in any size. It will be completely fine for most use cases. (Although it's possible to set custom fonts. This chapter won't discuss that yet.)

Even so, you usually want to typeset a font in different styles. To emphasize phrases. To create more hierarchy in the text and structure content. This chapter explains that part.

## Emphasis

These commands exist for typesetting different font styles:

| Command                 |  Switch Command         | Description  |
| ------------------------|  ---------------------- | ------------------------------------------------------------------- |
| `\textnormal{…}`        | `{ \normalfont … }`   | The default or normal font. |
| `\textit{…}`            | `{ \itshape … }`      | Italic |
| `\textsl{…}`            | `{ \slshape … }`      | slanted |
| `\textsc{…}`            | `{ \scshape … }`      | Small Caps |
| `\uppercase{…}`         |                       |  Transforms all letters to uppercase |
| `\lowercase{…}`         |                       |  Transforms all letters to lowercase |
| `\textbf{…}`            | `{ \bfseries … }`   |  Bold |
| `\textmd{…}`            | `{ \mdseries … }`    |  Medium weight |
| `\textlf{…}`            | `{ \lfseries … }`     | Light weight |
| `\textsubscript{…}`     |                       |  Subscript |
| `\textsuperscript{…}`   |                       |  Superscript |
| `\emph{…}`              | `{ \em … }`           | Emphasis, typically italics, but differs based on document style. |

{{< double-view src="LatexFontsEmphasis.webp" lang="Latex" split="even" >}}
This is \textit{italic} and \textbf{bold} text, and even one with \textsuperscript{super}script. For some reason, we want \uppercase{uppercase letters} here.
{{< /double-view >}}

As stated earlier, it's recommended to write your own semantical commands that use these, instead of implementing them directly into the document.

## Sizes

A bunch of *switch* commands exist to change the text size. Ordered from smallest to largest these are:

| Command           |  Remark |
| ------------------|  -------- |
| `\tiny`           | As small as it gets (unreadable for some) |
| `\scriptsize`     | Same size as subscripts and superscripts |
| `\footnotesize`   | Same size as footnotes |
| `\small`          |  |
| `\normalsize`     | Regular size |
| `\large`          |  |
| `\Large`          |  |
| `\LARGE`          |  |
| `\huge`           | Use these last two sparingly---only for big chapter headings or title page. |
| `\Huge`           |  |

{{< double-view src="LatexFontSizes.webp" lang="Latex" split="even" >}}
\tiny Tiny text

\scriptsize Slightly bigger

\footnotesize Even bigger

\small Still going bigger

\normalsize Back to normal again

\large Getting large

\Large Getting larger

\LARGE Even larger

\huge Woah, this is huge

\Huge BIG, BOLD AND BEAUTIFUL
{{< /double-view >}}

Remember that these are switch commands that take effect everywhere within the scope they're in. This means that you can enlarge, for example, a complete table of contents!

## Fonts

There are, generally speaking, three different types of fonts. It's always recommended to keep the amount of different fonts as low as possible in any project, but sometimes you need a good way to typeset different types of content, and then these can make your life easier.

| Command         | Switch              |  Description |
| --------------- | -------------------- | ------------------------------ |
| `\textrm{…}`   | `{ \rmfamily … }`   | Roman serif font. Default. |
| `\textsf{…}`   | `{ \sffamily … }`   | Sans-serif font |
| `\texttt{…}`   | `{ \ttfamily … }`   | Monospace (fixed-width) font |

{{< double-view src="LatexFontFamilies.webp" lang="Latex" split="even" >}}
Serif looks more sophisticated than \textsf{sans-serif} in print. For computer formatted code, use \texttt{teletype text}.
{{< /double-view >}}

{{% remark %}}
All commands discussed so far have one tiny difference between their regular and switch syntax. The latter one does not correct spacing after the style has ended. That's why the first one is recommended.
{{% /remark %}}

You'll learn much later how to add your own fonts, as it's unfortunately not an easy process. LaTeX was meant to only be used with a few font families when it was created. And it was created a _long_ time ago.

## Underlined

The rule is: don't underline anything. Ever. It's easy to miss. It doesn't look great. Fonts don't support it. 

People generally relate underlines with _links_ on the web and nothing else. As such, this section is mostly useful if that's what you want to include in your document. Underlines and strikethroughs are also a handy tool for the editing process.

The built-in command is `\textunderline{text}`, but it doesn't always work well. Iit ignores line breaks, for example. 

To solve this, and add multiple types of underlines, include a new package: `\usepackage[normalem]{ulem}`.

The package stands for *underline emphasis*. This means that it changes the `\emph` command as well, but you don't want that, which is what the optional argument *normalem* is for. 

These commands are available:

| Command        | Description |
| -------------- | -------------------------------------------------- |
| `\uline{…}`   | Regular underline |
| `\uwave{…}`   | Wavy underline |
| `\sout{…}`    | Strikethrough (or strike-out) |
| `\xout{…}`    | Forward slash through every individual character |

{{< double-view src="LatexUnderlines.webp" lang="Latex" split="even" >}}
A \uline{regular underline} is great, but \uwave{wavy ones are even cooler}!

\sout{This part of the text has been edited out.}
{{< /double-view >}}