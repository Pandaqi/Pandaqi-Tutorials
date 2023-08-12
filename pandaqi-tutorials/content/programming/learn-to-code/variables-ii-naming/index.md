---
title: "Variables II: Naming"
weight: 5
type: "article"
bamboo: true
---

Previous chapter introduced you to the wonderful world of giving _names_ to everything. But can you use _any_ name for your variable? The answer is **no**, but it's close.

The same key rules exist in all programming languages. Because they are a direct result of how a computer works.

How does it know you're typing variable? And not a calculation? Or a number? Or one of those keywords (like `say`)?

It can only decipher this (quickly) by establishing a few rules. Variables **can't** ...

* ... start with a number. (But can use them later on.)
* ... contain a special symbol, like a _space_. (Some languages might have a few exceptions.)
* ... be named _exactly_ like an existing keyword. (Try it. Try creating a variable named "say".)

This is how the computer knows the difference between "this text is a variable" and "this text is something else".

In general, just use regular letters (lowercase or uppercase) and you're fine.

### Cases

But if you can't add spaces, how do you keep things readable? We often want multiple words or parts in our variable names.

For this, we invented several different "cases".

* **camelCase** = capitalize every word except the first
* **PascalCase** = capitalize every word
* **snake_case** = add an underscore (`_`) between words, all lowercase
* **kebab-case** = add a dash (`-`) between words, all lowercase

The last one is rare, as the minus sign is usually reserved for subtraction. For my language, I thought camelCase was the best, so that's what my examples use.

## In practice

Once named, you can use your variable everywhere and however you want. As you saw in the examples, whenever we type the name again, it _recognized_ it. The computer just grabs its current value and uses that.

What does this mean for the practical world? How would you use variables? 

In this course, I also want to nudge you towards _good_ programming habits. That's why I'm telling you this now:

> Naming variables is the most important skill in coding

Or _one of_ the most important. I mean that in all seriousness. 

Think back to the analogy. If your code is filled with jars labeled "Butterfly" while they could actually contain _any other insect_, your code will crash and burn. Working on it becomes a confusing chore. What is where? What's the latest value of this one thing?

You might say: "_well then, I'll just give everything a generic name!_" All jars are labeled "insect".

The computer can only have one jar called insect. Each variable name can only appear once. When re-used, it overwrites the previous value. So what, you're going to call them "insect1", "insect2", and so on?

Now you might say: "_well then, I'll give everything an extremely specific name!_" This jar is called "Butterfly with red wings and long antennas caught on September 3rd".

I wish you good luck writing that in camelCase---every single usage 😉

As usual, the solution is down the middle. 

> Use many variables that say---in one to three words---exactly what they contain.

### Example: bad

Let's do an exercise. Look at the code below. The variables have short names with simple English words. Nice, right? But do you have any idea what the data actually _means_?

{{% data-trans from="Two Numbers" to="Number" %}}

{{< bamboo >}}
now players means 12
now group means 4
now amount means players divide group
{{< /bamboo >}}

Now I'll explain the context. This code is for an online multiplayer game. Each game is played on a new _server_ with a _group_ of 4 players: 2 versus 2.

The problem it tries to solve: how many servers do we need to keep online?

Without my explanation, you'd have never known this. Updating the code---when new problems arise---is impossible.

### Example: better

Try to rewrite this. Try to make the variables specific and meaningful, but not overly long.

Whenever I give you a challenge (or "exercise"), I'll provide an empty code field and my solution below it. The solution, however, is hidden so you're less tempted to peek 😉 Click it to unfold it. Do remember that I give _my_ solution, but there are many ways to solve any problem.

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now numPlayers means 12
now groupSize means 4
now numServers means numPlayers divide groupSize
{{< /bamboo >}}

As you code more, you'll create your own shorthands. Like `num` for number. Or `ev` for event. As long as they are clear and unique, that's a good idea.

Naming variables also depends on personal preference or your project. For example, you might change the first variable to `numPlayersOnline` if your game also supports _offline_.

It's easy to accidentally steer the wrong way here. 

{{% example %}}
You might think `players` is enough. But it's not. Players could mean _anything_! Is it a list with all the players? Is it the username of each player? No, we want the _number_ of players.
{{% /example %}}

{{% example %}}
Similarly, `groupSize` is better than just `group`. Without "size", you might assume it holds an actual _group_ of things. Not just its _size_. 
{{% /example %}}

{{% example %}}
Some people add the type into the name. If your code converts a string to a number, you might have two variables: `resultString` and then `resultNumber`. However, only do this when _necessary_. Most of the time, a variable is clearly one type at a glance.
{{% /example %}}

Be as specific as needed, but not more.

Now, if you change the number of players to, say, `10`, your code will run fine. But the output is actually bad. How do you activate ... 2 and a half server?

Next chapters talk about common keywords for manipulating data even further. Such as _rounding_ that sad half server to a whole one!