---
title: "Spacing"
type: "article"
weight: 17
---

These default lists and settings are great. But it's easily possible that you need different amounts of space between items, or more horizontal distance between label and item text. Similarly, paragraphs can sometimes be too close to each other or too far apart for your liking. 

There are countless commands that have a default amount of space, or default length, attached to certain properties. As expected, you can change these easily using some general syntax.

By now, you've probably realized that typography and markup is all about _size_ and _(white space)_. That's the reality, albeit perhaps boring. It's not about fancy colors or flashy layout: design and typography is simply about space.

## Units

When specifying some kind of length, you can't just provide a number. You need to add a **unit** that gives meaning to that number. 

(Like when a Mathematics teacher asks "how fast is James running?" And a kid responds "10". They will ask "10 _what_?" "10 apples?" "10 windows?" 😜)

These units are supported:

| Unit   | Description              | Unit   | Description |
| ------ | ------------------------ | ------ | --------------- |
| `in`   | inches                   | `pc`   | pica (12pt) |
| `mm`   | millimetres              | `bp`   | big pt (1.00375 pt) |
| `cm`   | centimetres              | `dd`   | didôt (1.07pt) |
| `pt`   | points (1/72 inch)       | `cc`   | cicero (12dd) |
| `em`   | the width of an "M"    | `sp`   | scaled point (0.000015 point) |
| `ex`   | the height of an "x"    |       |  |

Lengths may be negative. The number 0 needs a unit as well. (As opposed to some other languages, like CSS.)

These units can just be added directly behind the number.

## Spacing

White space can be added either *horizontally* or *vertically*.

### Horizontal

The `\hfill` command fills the rest of the current *line* with white space. Alternatively, the `\dotfill` command fills it with dots, and `\hrulefill` with a rule.

{{< double-view src="LatexHorizontalFilling.webp" lang="Latex" split="even" >}}
Fill this line with whitespace! \hfill This is what happens.
{{< /double-view >}}

The `\hspace*{length}` command adds *length* amount of white space in the current line. By default, LaTeX removes white spaces after a line break. The optional parameter `*` overrides this behaviour, and makes LaTeX keep inserting space over a line break.

{{< double-view src="LatexHorizontalSpacing.webp" lang="Latex" split="even" >}}
This is a very interesting paragraph. Now fill this line with whitespace! \hspace{10mm} And the paragraph continues.

This is a very interesting paragraph. Now fill this line with whitespace! \hspace*{10mm} And the paragraph continues.
{{< /double-view >}}

The commands `\enskip`, `\quad` and `\qquad` are shortcuts for adding half an em, one em, or two ems of horizontal white space.

### Vertical

The `\vfill` command fills the rest of the current *page* with white space. The `\vspace*{length}` adds *length* amount of white space to the current page.

{{< double-view src="LatexVerticalSpacing.webp" lang="Latex" >}}
Lorem ipsum... \par
\vspace*{15mm} Lorem ipsum...
\vfill Lorem ipsum...
{{< /double-view >}}

The `\addvspace{length}` command also adds *length* amount of white space. But, if there's already some other command adding vertical white space, it will only add that amount that is necessary to bring the total vspace to *length*. 

This is useful, for example, if you want to distribute a fixed amount of whitespace over mulitple areas Pick some amounts for all areas, but use this command at the last one to make sure everything adds up to your fixed amount.

Lastly, the `\smallskip`, `\medskip` and `\bigskip` commands are shortcuts for adding small, medium and big amounts of vertical white space.

{{< double-view src="LatexVerticalSkips" lang="Latex" >}}
Lorem ipsum... \par
\smallskip Lorem ipsum... \par
\bigskip Lorem ipsum...
{{< /double-view >}}

Alternatively, the `\smallbreak`, `\medbreak` and `\bigbreak` commands do the same. But they automatically terminate the paragraph for you and mark good places for LaTeX to break the page.

## Indentation

Indenting a paragraph means adding some horizontal space to the left of the first line only. It's _very_ common in print, and I think it's the best way to typeset _fiction_. It's less common in digital media.

To indent a paragraph, use `\indent`. To prevent indentation, use `\noindent`.

{{< double-view src="LatexIndentation" lang="Latex" >}}
A standard paragraph \par
\noindent A paragraph that doesn't want to be indented
{{< /double-view >}}

## Line Spacing

Line spacing refers to the white space between two lines underneath each other.

To change this for the whole document, use `\linespread{factor}`. Here, a factor of 1 means regular line spacing, while 1.3 means one-and-a-half line spacing, and 1.6 double spacing. Confusing, I know.

{{< double-view src="LatexLineSpread" lang="Latex" >}}
\linespread{1.6}

\begin{document}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum metus sit amet ligula dictum feugiat. In laoreet consequat accumsan. Fusce id lectus commodo, fermentum lorem at, aliquam nunc. Integer sed volutpat nunc. Quisque sem turpis, blandit ac ultricies in, tempus vitae turpis. Praesent fringilla eu massa non feugiat. Maecenas et lectus at massa rhoncus interdum eget at felis. Curabitur in convallis elit, vel maximus velit. Aliquam bibendum rhoncus leo euismod blandit. Donec cursus, ante at vehicula fringilla, dolor elit tristique lectus, vel ullamcorper eros turpis vitae augue. Morbi augue odio, aliquet quis scelerisque vel, egestas quis dolor. Mauris pellentesque tellus quis eleifend finibus. Sed auctor suscipit placerat. Suspendisse nec ex vestibulum erat laoreet pellentesque ac sed dui.
\end{document}
{{< /double-view >}}

## Custom Line Spacing

Alternatively, you can use the package `setspace`. It provides the commands

{{< highlight Latex >}}
\doublespacing \onehalfspacing \singlespacing \setstretch{stretchFactor}
{{< /highlight >}}

These influence everything from the moment they are used, until another command is used.

Furthermore, the following environments are available to change line spacing on (small) parts:

{{< highlight Latex >}}
doublespace onehalfspace singlespace spacing{stretchFactor}
{{< /highlight >}}

{{< double-view src="LatexSetSpacePackage.webp" lang="Latex" split="even" >}}
\usepackage{setspace}

\begin{document}
    \singlespacing Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum metus sit amet ligula dictum feugiat. 
    
    \doublespacing  In laoreet consequat accumsan. Fusce id lectus commodo, fermentum lorem at, aliquam nunc. Integer sed volutpat nunc. Quisque sem turpis, blandit ac ultricies in, tempus vitae turpis. Praesent fringilla eu massa non feugiat.
\end{document}
{{< /double-view >}}

{{% remark %}}
You can't change line spacing halfway a paragraph. If you don't start a new paragraph before using this command, the whole paragraph you're currently in will change its line spacing.
{{% /remark %}}

## Line Breaks

We've already seen the `\\` command to force a line break. We can use it with an optional parameter, `\\[extra space]`, to set a custom line spacing between the current and next line.

{{< double-view src="LatexForcedLineBreaks" lang="Latex" >}}
A regular line break is\\like this.  But a longer one is\\[10mm]like this.
{{< /double-view >}}

Another way to force a line break is with the `\break` command. But, it doesn't fill the rest of the line with white space, which means words will have large spaces between them to keep the text justified.

{{< double-view src="LatexBreakCommand" lang="Latex" >}}
This is a very short paragraph \break Oh noes, we didn't go to a new line properly. \hfill\break That was a proper linebreak!
{{< /double-view >}}