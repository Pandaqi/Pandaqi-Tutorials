---
title: "Math Accents"
type: "article"
weight: 6
---

You can't blindly use text within a math environment like you normally would. This has been discussed numerous times now. That's what makes this math mode special! 

There are, however, certain simple elements you can add to characters (or strings of characters) to change their meaning in an important way. Very much like _accents) do to regular text. 

{{% example %}}
Adding an arrow above a letter communicates it's a vector. Adding a hat on top of a letter usually means it's some modified version of the original variable. A bar over something can mean its _complimentary set_.
{{% /example %}}

I like to call these **math accents**. This chapter provides all of them, ordered by their type

## Real Accents

These look the most like accents you're used to. They are typically used on a single character, to place something above it. 

They can be used on multiple characters, but might need their _wide counterpart_ to do so properly. If you use the regular command on multiple characters, it simply places the accent in regular single size above it, centred.

| Regular Command   | Wide Command           | Description |
| ----------------- | ---------------------- | ------------------------------------- |
| `\vec{}`        |  `\overrightarrow{}`   | Adds an arrow from left to right |
| \-               |  `\overleftarrow{}`    | Adds an arrow from right to left |
| `\hat{}`         | `\widehat{}`          | Adds a hat, or "rooftop" |
| `\tilde{}`       | `\widetilde{}`        | Adds a tilde, or "wavy line" |
| `\dot{}`         | \-                    |  Adds a single dot |
| `\ddot{}`        | \-                    |  Adds a double dot |
| `\check{}`       | \-                    |  Adds a reverse hat, or check symbol |
| `\breve{}`       | \-                    |  Adds a breve, or "cup" |
| `\acute{}`       | \-                    |  Adds an accent acute |
| `\grave{}`       | \-                    |  Adds an accent grave |
| `\bar{}`         | \-                    |  Adds a bar, or "overline" |

These can also be composed/nested. Using multiple after each other will keep adding them on top of one another. Not necessarily recommended, though 😉

{{< double-view src="LatexMathAccentsOne" lang="Latex" >}}
\begin{gather*}
    \vec{x} - \overrightarrow{xyz} - \overleftarrow{xyz} \\
    \hat{x} - \widehat{xyz} \\
    \tilde{x} - \widetilde{xyz} \\
    \dot{x} \\
    \ddot{x} \\
    \check{x} \\
    \breve{x} \\
    \acute{x} \\
    \grave{x} \\
    \bar{x}
\end{gather*}
{{< /double-view >}}

## One-Argument Commands

These are somewhat like accents, but have no wide counterpart. Stacking ability is reserved for overlines and underlines. (As they are _above_ and _below_ things, which means they have space to grow.)

| Command          |  Description |
| -----------------| --------------- |
| `\not{}`        |  Slashes diagonally through the character, used mostly for turning an equal sign into a not-equal sign, and similar operations. Errors if you give it more than a single character. |
| `\cancel{}`     |  Also slashes diagonally through its argument, but from bottom left to top right. Requires the `cancel` package. |
| `\overline{}`    | Adds a line above it |
| `\underline{}`   | Adds a line underneath it |

{{< double-view src="LatexMathAccentsTwo" lang="Latex" >}}
\usepackage{cancel}

\begin{document}
    $\not=  \quad  \cancel{XYZ}  \quad  \overline{XYZ}  \quad  \underline{XYZ}$
\end{document}
{{< /double-view >}}

## Two-Argument Commands

These accept two arguments of arbitrary length, and place the text from one of the arguments above or below the other. They are automatically centred, and the first two have their brace automatically stretched to the correct length.

| Command                       | Description |
| ----------------------------- | ------------- |
| `\overbrace{arg1}^{arg2}`    | Places *arg2* above *arg1*, using a brace to group *arg1* |
| `\underbrace{arg1}_{arg2}`   | Places *arg2* below *arg1*, using a brace to group *arg1* |
| `\overset{arg1}{arg2}`       | Places *arg1* above *arg2* |
| `\underset{arg1}{arg2}`      | Places *arg1* below *arg2* |

{{< double-view src="LatexMathAccentsThree" lang="Latex" >}}
\begin{gather*}
    \overbrace{a + \ldots + a}^{n \times a} \
    \underbrace{a + \ldots + a}_{n \times a} \
    a \overset{def}{=} b \
    a \underset{def}{=} b
\end{gather*}
{{< /double-view >}}