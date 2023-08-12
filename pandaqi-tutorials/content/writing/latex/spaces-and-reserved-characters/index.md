---
title: "Spaces & Reserved Characters"
type: "article"
weight: 5
---

Like most markup languages, LaTeX **collapses whitespace**. When it encounters multiple spaces, it reduces them to a single one. This also means it ignores a single return. Instead, only a completely blank line starts a new paragraph.

{{< double-view src="LatexEatingWhiteSpace.webp" lang="Latex" >}}
These words are                 not that far apart. Neither are these

But this is a new paragraph.
{{< /double-view >}}

Why does LaTeX do that?

* Because it's flexible. You don't need to worry about accidentally leaving a space somewhere, or pressing the RETURN key too few (or too many) times, and the whole document being messed up. 
* To _us_ all white space is equal. But a computer sees symbols in more detail and ascribes different meaning to it. For example, turn on "paragraph marks" (or something named similarly) in Microsoft Word, and it will show you all the _hidden symbols_ it automatically adds for you.

## Reserved Characters

There are some reserved characters in Latex. This means they have special meaning and will be interpreted as something _else_ than just their visual symbol. I explain these in advance, at the start of the course, to prevent all sorts of errors and confusion in the near future.

The reserved characters are:

{{< highlight Latex >}}
#  $  %  ^  &  _  { }  ~  \
{{< /highlight >}}

That's fine, but what if you want to simply type them as a character? Then you need to *escape* them. This can be done, in most cases, by adding a backslash in front:

{{< highlight Latex >}}
\#  \$  \%  \^  \&  \_  \{  \}  \~
{{< /highlight >}}

Okay. Great. But, what if we want _an actual backslash_? Escape it with another backslash? Use infinite backslashes?

No, the creators of Latex were smart enough to just make a command for it. Use `\textbackslash`.

{{< double-view src="LatexReservedCharacters.webp" lang="Latex" >}}
These are two dollar signs: \$\$

This is a math environment: $H_{2}O$
{{< /double-view >}}

## Whitespace after Commands

Commands eat up *all* the white space right after it. To prevent this, add an empty required argument after it with empty braces. Alternatively, you can use the empty `\>` command.

{{< double-view src="LatexWhiteSpaceAfterCommands.webp" lang="Latex" >}}
Isn't \LaTeX cool? Isn't \LaTeX{} cool? Yes \> \> \> it is!
{{< /double-view >}}

Commands that have a required argument, of course, already display this behaviour.

## Built-In Strings

Four commands exist that transform into a built-in string. These aren't that important, but I mention them for completeness' sake. They are: `\today` (current date), `\TeX`, `LaTeX`, `\LaTexE` (to display the logo of what you're learning right now, in different ways).