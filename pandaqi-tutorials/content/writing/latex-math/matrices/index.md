---
title: "Matrices"
type: "article"
weight: 9
---

Using the _delimiters_ seen before, you can already create matrices. Or, rather, things that _look somewhat like a matrix_.

But let's never forget the semantics and use a proper _matrix environment_ for this. It looks better _and_ you can read your TeX file and immediately know what is supposed to represent a matrix (and what isn't).

The environments below all roughly do the same---create a matrix---but have subtle differences that might simplify your life. They all follow the general table syntax.

{{< highlight Latex >}}
\begin{matrixType}
    row 1, number 1 & … & row 1, number n \\
    % … \\
    row m, number 1 & … & row m, number n 
\end{matrixType}
{{< /highlight >}}

Each row is terminated by a newline (two backslashes) and each column by an ampersand.

## Plain Matrix

The `matrix` environment creates a matrix with everything lined up correctly, but nothing around it to signal it's a matrix. This is useful, for instance, for creating a submatrix within a matrix.

{{< double-view src="LatexMathPlainMatrix" lang="Latex" >}}
\[
    \begin{matrix}
        0 & 1 & 2 \\
        3 & 4 & 5 \\
        6 & 7 & 8
    \end{matrix}
\]
{{< /double-view >}}

## Surrounded Matrices

One of the following environments can be used if you want a certain kind of **delimiter** surrounding your matrix:

| Environment   | Description |
| ------------- | --------------------------------------------------------------------- |
| `bmatrix`     | Brackets around the matrix (usual notation) |
| `Bmatrix`     | Braces around the matrix |
| `pmatrix`     | Parentheses around the matrix |
| `vmatrix`     | Vertical bars around the matrix (used to represent the determinant) |
| `Vmatrix`     | Double vertical-bars around the matrix |

{{< double-view src="LatexMathMatrices" lang="Latex" >}}
\[
    \begin{bmatrix}
        0 & 1 & 2\
        3 & 4 & 5\
        6 & 7 & 8
    \end{bmatrix}
\]
{{< /double-view >}}

## Inline Matrices

To use a matrix inline---so that the flow of text is not disrupted---use the `smallmatrix` environment. 

This, however, only creates a smaller plain matrix. You need to add delimiters yourself. And the matrix can't be too large to begin with.

{{< double-view src="LatexMathInlineMatrix" lang="Latex" >}}
This matrix, $\begin{smallmatrix} a & 0\0 & b \end{smallmatrix}$, is inline.
{{< /double-view >}}