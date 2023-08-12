---
title: "Multiple Columns"
type: "article"
weight: 22
---

Columns aren't natively supported by LaTeX. I know, that strange typesetting language keeps throwing curveballs.

But they are easily included with the help of the package `multicol`. 

It allows you to create a new environment.

{{< highlight Latex >}}
\begin{multicols}{colNum}
    % ... just regular text here ... 
\end{multicols}
{{< /highlight >}}

It does exactly what you expect. It groups whatever is inside into *colNum* amount of columns. These columns are distributed in such a way that all columns are sized equally: the bottom lines are all on the same baseline.

If you don't want this, use the star variation `multicols*`.

{{< double-view src="LatexMultiColumns" lang="Latex" split="none" >}}
\usepackage{multicol}

\begin{document}
\begin{multicols}{3}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu pulvinar, mattis diam sed, tempus velit. Proin et faucibus sapien, eu vehicula lorem. Fusce consequat diam ac urna ullamcorper, sodales pharetra eros accumsan. Maecenas accumsan tellus eu erat molestie, eget sollicitudin sem volutpat. Morbi vel nisi vel magna consectetur pellentesque. Pellentesque in orci id urna luctus ornare. Praesent nisi nulla, congue et molestie vel, molestie in est.
\end{multicols}
\hrulefill
\begin{multicols*}{3}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu pulvinar, mattis diam sed, tempus velit. Proin et faucibus sapien, eu vehicula lorem. Fusce consequat diam ac urna ullamcorper, sodales pharetra eros accumsan. Maecenas accumsan tellus eu erat molestie, eget sollicitudin sem volutpat. Morbi vel nisi vel magna consectetur pellentesque. Pellentesque in orci id urna luctus ornare. Praesent nisi nulla, congue et molestie vel, molestie in est.
\end{multicols*}
\vfill
\end{document}
{{< /double-view >}}

## Breathing Space

To increase the space between columns, modify the `\columnsep` length.

To insert vertical rules between the columns, modify the `\columnseprule` length. It determines the _width_ of these rules. Default is `0pt`, which means no visible rule.

The `\columnbreak` command forces LaTeX to start a new column right after it. This means that all paragraphs in the current column are distributed evenly to fill all space.

{{< double-view src="LatexSpacingColumns" lang="Latex" >}}
\setlength{\columnsep}{30pt}
\setlength{\columnseprule}{1pt}
\begin{multicols}{3}
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non arcu pulvinar, mattis diam sed, tempus velit. \columnbreak Proin et faucibus sapien, eu vehicula lorem. Fusce consequat diam ac urna ullamcorper, sodales pharetra eros accumsan. Maecenas accumsan tellus eu erat molestie, eget sollicitudin sem volutpat. Morbi vel nisi vel magna consectetur pellentesque. Pellentesque in orci id urna luctus ornare. Praesent nisi nulla, congue et molestie vel, molestie in est.
\end{multicols}
{{< /double-view >}}