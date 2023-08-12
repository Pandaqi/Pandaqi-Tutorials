---
title: "Hyperlinks & URLs"
type: "article"
weight: 23
---

At the time TeX was introduced, hyperlinks and URLs weren't as mainstream as they are now. That's why any support for these has to come from a nifty little package called `hyperref`.

## What it Does

Hyperref automatically turns all your `\ref` commands into hyperlinks within the document. It makes them clickable. And when you do click it, you are brought to the `\label` to which they refer. 

It also automatically creates PDF bookmarks for all your sections and makes the table of contents entries clickable.

## URLs

Turning a string into a clickable URL is now easy: use `\url{theURL}`

{{< double-view src="LatexHyperrefBasics" lang="Latex" >}}
\usepackage{hyperref}

\begin{document}
    Plain old text url: http://www.google.com
    \par Fancy, dynamic url: \url{http://www.google.com}
\end{document}
{{< /double-view >}}

## Custom Names

If you want to create a clickable reference with a different name, use

{{< highlight Latex >}}
\hyperref[labelName]{linkText}
{{< /highlight >}}

{{% remark %}}
You _can_ use a regular reference within the *linkText*. But you must use the star variation: `\ref*` Otherwise, infinitely nested links would occur.
{{% /remark %}}

If you want to create a clickable URL with a different name, use

{{< highlight Latex >}}
\href{theURL}{linkText}
{{< /highlight >}}

{{< double-view src="LatexHyperrefCustomNames" lang="Latex" >}}
Fancy, dynamic url: \href{http://www.google.com}{Go to Google!}
{{< /double-view >}}

## Custom Anchors

It's also possible to simulate the same system without having to use labels and references. You can create an anchor anywhere within the document with

{{< highlight Latex >}}
\hypertarget{labelName}{caption}
{{< /highlight >}}

At the place you insert it---the target location---the text *caption* is displayed. You can leave it empty if you want. 

To link to the anchor you just placed, use

{{< highlight Latex >}}
\hyperlink{labelName}{caption}
{{< /highlight >}}

The text *caption* is displayed. This time it can't be empty, otherwise there'd be nothing to click!

{{< double-view src="LatexHyperrefCustomAnchor" lang="Latex" >}}
\hypertarget{target1}{I'm a target!} \par
\vspace{20mm}

% Clicking this moves the top of the page to the spot of the hypertarget
\hyperlink{target1}{Go to the target!}
{{< /double-view >}}

## Local Files and Emails

Very easily, you can use these commands for more than links within the document. For example, you can link to files on the reader's computer. Or automatically open an email client pointed at your email.

For quick emailing, use

{{< highlight Latex >}}
\href{mailto:yourMail}{yourMail}
{{< /highlight >}}

For files, use

{{< highlight Latex >}}
\href{run:pathToFile.ext}{caption}
{{< /highlight >}}

_How can I know the files on a reader's computer?_ You don't, of course. But this is useful for manuals of some kind. If a user has installed software, you know the most likely path to its files. It can also simply be useful for _yourself_, creating quick links to attachments you want to review often.