---
title: Data Manipulation II
weight: 22
type: "article"
bamboo: true
---

In the [Strings](../strings/) chapter, I promised some more "bag-like" operations to do on strings. They can be _extremely important_ or not important at all, depending on your project. Still, all languages support them, and I wanted to end the course with these.

{{% remark %}}
Next chapter talks about where to go next, but won't introduce any more ideas or syntax.
{{% /remark %}}

I've explained how strings are sort-of "bags of characters". The string `panda` is also `p`, `a`, `n`, `d`, `a`. 

But it goes even further than that! Because what's stopping us from grouping the characters in a different way? Why not `pan` and `da`?

These are called **substrings**. Even short strings---like panda---have _many_ different ways to select characters.

{{% example %}}
This example has 5 characters. This means it has 5 + 4 + 3 + 2 + 1 = 15 substrings you can get from it. That's like 15 different bags just from one short word!
{{% /example %}}

### Finding substrings

Let's think back to our example from the original strings chapter. You're running a website with a comments section. 

But now you receive hundreds of _spam_ comments every day! How to detect them? 

You would have to

* Determine what words you consider "spam"
* Search the comment for those words as a _substring_

Sometimes, you just want to know if a substring _exists_. If a smaller word is inside another word. But more often than not, you're more interested in _where_ it is.

You want to receive the _index_ where that substring starts. Just like the index for bags. The first character has index 0, the second index 1, and so forth.

> To get the index of a substring in a string, use `STRING's SUBSTR`

{{% data-trans from="String" to="Number" %}}

Remember that a substring can be _one_ character or several characters---any string no larger than the original string.

What if the string isn't there? The convention is to return the number `-1`. Other languages might return a "nothing" value.

{{% remark %}}
I haven't discussed nothing values in this course. Because I recommend coding as if they don't exist---and the original inventor of the `null` does so as well! Watch their lecture "NULL: The Billion Dollar Mistake" if you're interested.
{{% /remark %}}

So let's see what we can do about those spam comments.

{{< bamboo >}}
machine handleSpam wants text
  now spamWord means "buy"
  now idx means (text's spamWord)
  if idx is -1
    say "Not spam!"
    unplug
  say "Spam word found at index: " plus idx
&nbsp;
now someComment means "Hey buy our product now at ... "
give someComment to handleSpam
{{< /bamboo >}}

### Selecting substrings (one char)

Let's start with the simplest version. Most languages have a special syntax for this, as it's so common. You just want to know what symbol is _at a given index_ inside a string.

> To get the symbol at an index ( = number), use `STRING's IDX`

{{% data-trans from="String" to="String" %}}

For example, take that famous guessing game children play. You say a word. The next player must say a word that _starts_ wit the final letter of your word. (I actually implemented something like this in a word guessing game once. This has a real use case in coding!)

How might you check if a word is valid?

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now word means "giraffe"
now nextWord means "eagle"
&nbsp;
now lastIndex means (word's size - 1)
now lastLetter means word's lastIndex
now firstLetter means nextWord's 0
&nbsp;
if lastLetter is firstLetter
  say "Yes! That's a valid word!"
{{< /bamboo >}}

Try it. Try changing the words. Maybe change the rules of the game: the second letter has to match the second to last of the previous word. Or the new word has to be the same _size as the previous one.

You cannot _set_ ( = change) the character this way. I didn't allow this, because no language allows this. It's a tough thing to implement and it has many nasty side effects. Instead, strings are **immutable** by default: you can't change them. Instead, if you want a changed version, you always create a _new_ string the way you like. 

{{% remark %}}
Remember that `replace` statement from the earlier Strings chapter? It did not change _the original string_. It can't, it won't. It creates a new string---with your substring replaced---and gives that back. This will be true for all string operations in any language.
{{% /remark %}}

### Selecting substrings (substring)

This is perhaps the most complex string transformation. To select exactly the _substring_ you want from a bigger string. If you have to do this a lot, you're most likely coding something the wrong way. But sometimes, once in a while, this is crucial to solving a problem.

> To get only part of a bigger string, use `select IDX1 to IDX2 from STRING`

{{% data-trans from="String" to="String" %}}

For example, I've used functions like these _a lot_ while building my Bamboo language. (The one used in these examples.) Because what _is_ a programming language? It's just something that accepts one big string ( = your code) and chops it into pieces that it understands. All my system does is break your code into smaller and smaller strings, until I can select the parts I need to execute.

But let's use a ... smaller and simpler example than that.

## Example: dense data

In online multiplayer games, you send information to a server (over the internet) and receive it while playing. This means there's a time delay between _doing_ something and your action _reaching the server_. This is called "latency".

You obviously want this to be as low as possible. To achieve this, games don't send _everything_ over the internet. They don't even send raw data.

Instead, they package the information into one tight _string_ and send that. For example, `user123/58/4,2,3`

What does this mean?

* The player `user123`
* With health `58`
* Is at coordinates `X = 4`, `Y = 2` and `Z = 3`

All that information densely packed into a small string. 

This is also used in many other applications where speed or latency are important.

{{% example %}} 
My code to execute these examples runs on a separate "thread". So you can keep typing on the page, while it calculates your code off-screen, somewhere else. Communication between threads, however, is **expensive**. You can't just send everything you want. That's like using fifty people on bicycles to send boxes of information to the other side of town. Instead, I convert the examples to one string (as short as possible) and send that to the other thread.
{{% /example %}}

The exercise here will not be surprising. Write a piece of code ...

* To accept the string `user123/58` 
* And break it into its pieces: username and health.

{{% data-trans from="String" to="Two Values" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now msg means "user123/58"
now msgSize means (msg's size)
now slashIndex means (msg's "/")
&nbsp;
now username means (select 0 to slashIndex from msg)
now health means (select (slashIndex + 1) to msgSize from msg)
&nbsp;
say "Username: " + username
say "Health: " + health
{{< /bamboo >}}

Notice how we select the health starting from `slashIndex + 1`. Otherwise, we'd also select the actual slash (`/`) symbol.

{{% remark %}}
In this particular case, you'd likely want the `split` and `join` functions a full programming language provides. They do what they say. **Split** a string into pieces (based on a separator symbol), or **join** pieces of a bag into one string. But I decided that was outside this course's scope.
{{% /remark %}}