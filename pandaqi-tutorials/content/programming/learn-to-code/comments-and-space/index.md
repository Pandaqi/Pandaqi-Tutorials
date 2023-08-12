---
title: Comments & Space
weight: 10
type: "article"
bamboo: true
---

Human language uses a lot of space. We put a space between every word! We put space around text in a book. Because if it's pushed against the edge of the paper, it looks ugly and unreadable.

But the computer? It doesn't really care. It's dumb, but it also doesn't share our imperfect human eyes.

That's why most programming languages "collapse whitespace".

If you add an empty line, it just _ignores_ it. If you add way too many spaces between values ... it just ignores that. These statements below are exactly the same to a computer.

{{< bamboo >}}
5    * 5/     10
5*5/10
      5         +5.32    
{{< /bamboo >}}

That's why I recommend: prefer using **more space**. Use as much space as necessary to make your code _easy to read_. The computer won't care anyway---but _you_ will thank yourself later!

> Making code pretty and easy to read is **more important** than making it as fast or short as possible.

I'd even recommend learning the basics of [Graphic Design](../../../visual/graphic-design) or [Typography](../../../visual/typography/). Just to make your code a bit prettier and easier to parse for _you_.

### Example

The last example of the previous chapter showed this nicely. Or look at the one below:

{{< bamboo >}}
now attack means 5
now defense means 2
now powerup means 2.25
&nbsp;
now damage means powerup times (attack minus defense)
say "Damage: " plus damage
{{< /bamboo >}}

Notice how I add empty lines between different "parts" of the code. Notice how I provide space around numbers and symbols, even if that isn't strictly necessary. But also notice how I don't _always_ do that. It's a balance you need to find yourself: between readability and short code.

### When space matters

However, situations exist in which a space is _necessary_. The computer will retain it. It will even _depend_ on it!

You've already seen most of these situations.

* Within a **string**, spaces are maintained. (A string will just reproduce _exactly_ what you typed.)
* A computer can't know if something is a **variable** if there's no space behind it (for separation).
* The number of spaces _in front_ of a statement determine the **code block** that it's in.

## Comments

Similarly, every programming language allows you to write **comments**. These are lines of code that the computer completely ignores. They are for _you_. You can use them to explain what you're doing. To remind yourself what a line of code means.

{{% remark %}}
As such, you might also call them remarks, side notes or reminders.
{{% /remark %}}

So, how do you add them?

> Use `comment` (or `>`) to turn a line into comment 

{{< bamboo >}}
comment Hey, this line adds 5 to 5. Cool, right?
5 + 5  
{{< /bamboo >}}

Many courses _start_ by telling you this. Why didn't I do that? It seems useful, right? You can tell yourself exactly what each line is supposed to do! With as many words as you like!

Because we already have a way to tell us what code does. It's called _the code itself_. Adding comments simply means you write bad code twice (one for the computer, one with comments to yourself).

You should write code that explains itself. If a line doesn't _tell you_ what it does, rewrite it to something better. 

Additionally, remember the phrase: "comments are lies waiting to happen". Let's say you write a comment for a piece of code telling you exactly what it does and why. A few days later, your program changes, and you modify the code. You forget to update the comment. (Or simply don't want to do it, because it's extra work.)

Now the comment is a **lie**! It confidently says "this code does A", while the code actually does B. We're labeling butterflies as spiders all over again. But the computer won't give you an error, or a heads up, because it ignores comments altogether.

### A practical example

Instead, write code that shows _intent_. Write a line of code so it explains _what it's supposed to do_ on its own.

The two examples below show how most comments can be removed if you just write better code. First, how a typical (new) programmer might write it.

{{< bamboo >}}
comment Calculate the total score
now res means 5 * 20 + 2.3
&nbsp;
comment Check if we've exceeded the threshold to win
if res > 100.0
  say "We won!"
{{< /bamboo >}}

What is "res"? Where does the number 100 come from? We need to explain it with comments _because_ the code itself is vague. 

Try to rewrite it without comments. 

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now totalScore means 5 * 20 + 2.3
now winningThreshold means 100.0
now weWon means (totalScore above winningThreshold)
if weWon
  say "We won!"
{{< /bamboo >}}

### When to use them

_Then why add comments at all?_ Obviously, there are strong use cases for comments. 

* Computer systems often have exceptions and rough edges. If you hit such a "weird thing", write a comment to remind yourself about it. 
* If you need full documentation on your code, comments are often used to automatically "extract" what a piece of code is supposed to do (for the documentation).
* If you're still figuring out the algorithm, it helps to write the steps in comments first. (Although you can just as well write them on paper, in a Word document, etcetera.)

{{% example %}}
While writing this course, my code blocks would do ... weird things. Seemingly at random, lines would be removed, characters jumped to somewhere else, the Enter key stopped working.

As it turns out, browsers have some inconsistencies with how they implemented the system I use. There are weird quirks that I only found after hours of research. You bet there's a long comment in my code about that---explaining what happens and how it had to be solved!
{{% /example %}}