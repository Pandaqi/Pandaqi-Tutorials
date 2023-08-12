---
title: Notation
weight: 17
type: "article"
---

In order to transcribe or analyse games, you have to know how to write down chess games in the correct form. I am assuming you're familiar with the pieces and how they move. I also assume you understand labeling of columns / files (`a-g`) and rows / ranks (`1-8`).

The basic structure of chess notation is like this:

1. d4 d5 
2. Nc3 Nf6 
3. ...

Every turn is a pair of two moves: one from white and one from black. Because both players always alternate turns, this format can continue perfectly until the end of the game.

What do we need to write down?

* Which piece was moved
* Where it went
* What it did there

## Which piece was moved?

Use a single capital letter

* **N** for the knight
* **B** for bishop
* **R** for rook
* **Q** for queen
* **K** for king. 

Pawns have no letter in front. They are moved the most, so this was the best one to leave out, to make notation more compact.

{{% remark %}}
*Why the N for the knight?* Because the K was already taken by the more important King.
{{% /remark %}}

## Where did it go?

Simply write down the square to which it went.

## To avoid confusion

There are cases where multiple pieces of the same type (e.g. two knights) could have moved to that square! 

So, which one was it? To solve this, include the file of the starting square in front of the end square.

{{% example %}}
`Nde5` means the knight on the `d` file moved to `e5`.
{{% /example %}}

{{% example %}}
`cd6` means the pawn from the `c` file moved to `d6`.
{{% /example %}} 

If both pieces are on the same file as well, simply include the whole square: `Nd3e5`.

## What did it do?

Most of the time, a piece just moved. Nothing special happened, so don't write anything special.

But there are some symbols to clarify a more unique ction.

-   An **x** in front of the target square means the piece *captured* something. (Example: `cxd6`)
-   A **+** behind the target square means the opponent is in *check* after this move. (Example: `Ne5+`)
-   A **\#** behind the target square means the opponent is *checkmated*. (Example: `Qf6#`)
-   `O-O` means the player castled *kingside*
-   `O-O-O` means castling *queenside*.

That's it!

In game analysis, you might ...

* Use an **!** (`Qf6!`) to emphasize a move, meaning it was very important to the game.
* Use a **?** (`Qf6?`) if you seriously question a player's move/decision. 
* Use the combination of the two (`Qf6!?`) to express you thought that move was absolutely bonkers