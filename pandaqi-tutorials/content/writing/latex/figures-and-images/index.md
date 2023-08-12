---
title: "Figures & Images"
type: "article"
weight: 24
---

We've already seen the `table` environment. It does nothing more than contain a table and any metadata, such as a caption or reference. 

Its (very) similar ally is the `figure` environment. It signals LaTeX that _any type of figure_ is to come---an image, mathematical graphic, even a table if you want. In many ways, it's like tables where the _younger sister_, and figures are the _mother of all things_ that aren't just paragraphs of text 👨‍👩‍👧

The syntax is

{{< highlight Latex >}}
\begin{figure}[position]
    % ... your figure ...
    \caption{theCaption} 
\end{figure}
{{< /highlight >}}

## Images

Again, TeX shows its age. It was created mainly for typesetting text, way before computer images were a big deal, so they aren't supported by default. To use them, include the `graphicx` package. 

Then, including any graphics is *exactly* as you'd expect:

{{< highlight Latex >}}
\includegraphics[parameters]{linkToFile}
{{< /highlight >}}

Links can be relative (`someFile.jpg`), which searches for other images within the same folder as the TeX document.

They can also be absolute (`C:\Users\John\someFile.jpg`), which search from the root of your device.

There are four supported image types: `.png`, `.jpg`, `.pdf`, `.eps`. The *parameters* can be used to scale and/or crop the image. Try these properties:

| Specifier                         | Description                       |
|-----------------------------------|-----------------------------------|
| `width`                           | Specifies the width               |
| `height`                          | Specifies the height              |
| `scale`                           | Specifies the scale with a factor, default is 1.0. <br/><br/> For example, 0.5 means half the original size. |
| `angle`                           | Specify the amount of degrees to rotate the image                  |
| `trim`                            | Takes four values, which represent the length to trim from the *left*, *bottom*, *right* and *top* side, respectively.         |
| `clip`                            | Needs to be set to *true* for the `trim` option to work             |
| `page`                            | If your graphic is a pdf file, you can specify which page to display.                          |

{{< double-view src="LatexIncludeGraphics" lang="Latex" >}}
\usepackage{graphicx}

\begin{document} Lorem ipsum Uno
    \begin{figure}
        \includegraphics[width=0.25\textwidth]{ProfPanda.png}
    \end{figure}
    
    Lorem ipsum Duo
    \begin{figure}[h]
        \includegraphics[width=0.25\textwidth]{ProfPanda.png}
    \end{figure}
\end{document}
{{< /double-view >}}

{{% remark %}}
If you only specify a width *or* height, the other dimension scales accordingly to keep the aspect ratio the same.
{{% /remark %}}

## Wrapping Text around Figures

The regular `figure` environment adds line breaks before and after the graphic. If you want text (and other environments) to nicely wrap around it, include the `wrapfig` package.

Use a special environment:

{{< highlight Latex >}}
\begin{wrapfigure}[lineHeight]{position}{width}
{{< /highlight >}}

The *width* is, obviously, the width of the figure. The *position* has eight possible values:

| Specifier I   | Specifier II   | Description |
| ------------- | -------------- | ---------------------------------------- |
| `r`           | `R`            | Right side of the text |
| `l`           | `L`            | Left side of the text |
| `i`           | `I`            | Inside edge (in a *twosided* document) |
| `o`           | `O`            | Outside edge (in a *twosided* document) |

The uppercase versions allow LaTeX to float the figure to the best place---they are merely suggestions. The lowercase versions _force_ it to follow whatever you specified.

The optional *lineHeight* argument accepts any positive integer. It will set the figure's height relative to your font size. For example, lineHeight 2 means it's the same length as the height of two lines of text.

{{< double-view src="LatexWrapFigures" lang="Latex" split="none" >}}
\usepackage{graphicx}
\usepackage{wrapfig}

\begin{document} 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu pulvinar, mattis diam sed, tempus velit. Proin et faucibus sapien, eu vehicula lorem. Fusce consequat diam ac urna ullamcorper, sodales pharetra eros accumsan. 

\begin{wrapfigure}{r}{220pt}
    \caption{What?! I don't see anything!?}
\end{wrapfigure} 

Maecenas accumsan tellus eu erat molestie, eget sollicitudin sem volutpat. Morbi vel nisi vel magna consectetur pellentesque. Pellentesque in orci id urna luctus ornare. Praesent nisi nulla, congue et molestie vel, molestie in est.
\end{document}
{{< /double-view >}}

## Side Caption

So far, captions could be placed either above or below the figure. If you want them to the side of the graphic, include the `sidecap` package and the `SCfigure` environment.

{{< double-view src="LatexSideCaptionFigures" lang="Latex" split="none" >}}
\usepackage{graphicx}
\usepackage{sidecap}

\begin{document} 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu pulvinar, mattis diam sed, tempus velit. Proin et faucibus sapien, eu vehicula lorem. Fusce consequat diam ac urna ullamcorper, sodales pharetra eros accumsan. 

\begin{SCfigure}
    \includegraphics[scale=0.25]{ProfPanda.png}
    \caption{Oh noes, a wild panda! Did you know, that pandas don't even like bamboo, but just eat it anyway?}
\end{SCfigure} 

Maecenas accumsan tellus eu erat molestie, eget sollicitudin sem volutpat. Morbi vel nisi vel magna consectetur pellentesque. Pellentesque in orci id urna luctus ornare. Praesent nisi nulla, congue et molestie vel, molestie in est.
\end{document}
{{< /double-view >}}

## Minipage

Minipages are environments that, unsurprisingly, contain a "mini page". These are completely separated from the overall document. Like a small page from another book that you just inserted here. 

This is useful for creating complex layouts, such as lots of images next to each other, without breakig the overall flow of your document. This is possible, because minipages scale to the size of whatever's inside, and don't insert any white space or line breaks around it.

To create one, use

{{< highlight Latex >}}
\begin{minipage}[position]{width}
    % ... whatever you want inside ...
\end{minipage}
{{< /highlight >}}

{{< double-view src="LatexMinipage" lang="Latex" >}}
\begin{minipage}[t]{0.5\textwidth}
    \centering
    \includegraphics[width=0.5\textwidth]{ProfPanda.png}\
    Panda Uno
\end{minipage}

\begin{minipage}[t]{0.5\textwidth}
    \centering
    \includegraphics[width=0.5\textwidth]{ProfPanda.png}\
    Panda Duo
\end{minipage}
{{< /double-view >}}

{{% remark %}}
It might be a fun exercise to recreate the *wrapfigure* and *sidecaption* environments using minipages. Or that might sound like the most frightening task ever, in which case, forget it and continue!
{{% /remark %}}