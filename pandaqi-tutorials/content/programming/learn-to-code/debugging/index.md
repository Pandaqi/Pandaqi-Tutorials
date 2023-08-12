---
title: Debugging
weight: 20
type: "article"
bamboo: true
---

Here's a secret. As a programmer, you actually **don't** spend most of your time programming. Instead, most of the time you are _reading_ or _fixing_ code in a process called **debugging**.

Why? Again, because the hard part of programming is _not_ the syntax. You can look up what words you have to use in five seconds. Every language only has a handful of syntax rules.

The hard part is solving problems. Solving them with logical, infallible steps along the way. Hence, writing the meat of your code will always be the fastest part. But that's like a "first draft" of a book. Along the way, you will have introduced some errors.

Maybe your code thinks something is a string, but it's actually a number. Maybe you thought you could _unplug_ a machine early, but you forgot about a certain exception that needs to run the whole machine. Maybe you're making a game, and you thought the Y-axis was up (positive numbers), but it's actually down. So now, when you press SPACE, your character jumps ... down?

See the pattern here. You _thought_ something was true, but it turns out something _else_ was happening in the computer.

## Step 1: logging

Therefore, the first step to all debugging is **logging** or **printing to the console**. To check what's going on, you ask the computer to _tell_ you what it's doing along the way.

For example, let's say you're transforming a bag of numbers to the _average_. That involves a few steps: 

* You calculate the total number
* You calculate the size of the bag
* You divide the first by the second

{{% data-trans from="Bag" to="Number" %}}

Debugging usually means you print the intermediate value at each step. Because you'll immediately find the one step that apparently isn't correct.

{{< bamboo fbresult="false" fbvalue="false" fbparser="false" fbcomment="false" fbkeyword="false" >}}
machine average wants someBag
  now total means "0"
  now size means someBag's size
  say "Size is: " + size
  &nbsp;
  search someBag's items
    change total by (bamboo value)
    say "Total is: " + total
  &nbsp;
  now avg means (total / size)
&nbsp;
bag numbers holds
  1
  5
  2
  3.5
  3
&nbsp;
say (give numbers to average)
{{< /bamboo >}}

By printing the intermediate results, you see that it's not adding numbers---it's adding strings! This gives you the info needed to "fix" or "debug" this program. (Try it!)

You've already seen this. The examples have used the simple `say` keyword all the time. Additionally, I programmed this language to give you as much feedback as possible _by default_. (Though you can toggle feedback on/off with the settings icon in the top right.) In a sense, I already sneakily explained this right from the start.

But other languages won't do this by default, of course. (It would be a _mess_ to tell you _everything_ that happens, once you start writing longer code than this!) So you must add these logging statements yourself. Just remember the process.

* When something doesn't work in your program
* Log information about every step
* Until you find the step that gives back the wrong data

Sometimes, you have absolutely no clue where it goes wrong. I see many programmers cast a _very_ wide net in those cases: they start logging everything across their code. They start "globally" and work their way towards the problem.

I don't recommend this. Instead, start "locally" (as small as possible) and include bigger chunks of code as you go. 

You've found a problem. This means you know _one specific location_ where the data is wrong. Start there. Start in the few statements around it. Only if that yields no error, log some more statements that are further away. Continue until you've found the place where data is corrupted.

This way, you'll usually have to print (and search) far less. Because you start small and go big, not the other way around.

## Step 2: use extremes

Many programs, when given "regular" input, will not crash completely. There might be bugs that give the wrong output or introduce mistakes, but it won't be "obvious".

So make it obvious.

Feed _extreme_ data into your code. Extreme situations. Things that won't appear in real life, but the code _should_ be able to handle (logically).

This makes it more likely that the bug in your code becomes "obvious" to spot.

In the example above, you might try feeding an _empty_ bag, or one with fifty elements.

When debugging a website, you might ...

* Make your browser window extremely small (to check if the layout adjusts accordingly)
* Write a script to create a thousand temporary accounts (if this process has a rare bug, you're more likely to bring it out in one of the registrations.)
* Make a button that doesn't want to be clicked absolutely _huge_ (in size) => if you can't click it now, something else is surely wrong.

When debugging a game, you might ...

* Spawn 100 players to test if their creation and placement is flawless
* Spawn the most powerful powerup in the game when you press "P", so you can immediately test battles when the player is near the end of the game. (That's why games have "cheat codes", by the way. They're actually used by developers during development. They leave them in for fun.)
* Make gravity 100x as strong, or your jump 100x as strong. If still nothing happens when you press SPACE, you know the problem is not in this part of the code (calculating force/velocity) but somewhere else.

That's the idea. Find your problem, pull it towards _extremes_, so it reveals the obvious bug hiding there.

## Step 3: visualize it

Some things are best explained with text, or by reading. Most things, however, are more obvious when you see a _picture_ or a _graph_. Humans are visual beings.

So try to make your code visual.

For example, say you want to determine _where_ a user clicked on your website. But for some reason, your code isn't working. You could _log_ all the steps in between and read through that.

Or you simply place a _big red circle_ where the mouse is.

If the circle is underneath the mouse, your code works. If something's wrong, the circle will show up some other place. Maybe you see that the circle is always exactly 100 pixels to the _right_ of the real mouse position.

The point is that you can immediately _see_ this. If you only had numbers, you'd waste a lot more time figuring out this pattern.

With each new project I make, I spend more time on "visualizers". Code that allows me to draw boxes, circles, lines, graphs about any part of the project. Whenever there's a bug, I turn these on. At least 90% of the time, I can immediately _see_ what happens and what goes wrong.

{{% remark %}}
At some point, I considered adding a "canvas" to all code examples and allowing you to draw stuff right from chapter 1. Maybe even make tiny "games" with this. In the end, though, I decided against this. Computer graphics are actually _very hard_. I needed way to much explanation to allow you to draw anything meaningful, at which point it defeats the purpose.
{{% /remark %}}

## Step 4: test it

This may sound obvious. _"Duh, if I want to know if my code works, I need to test it!"_

But what _is_ testing? 

For most (new) programmers, this simply means ...

* Run the program (or piece of code)
* Check what happens
* Is that alright with you? Great, test succeeded.
* Don't feel great about it? Test failed.

That's a bit ... vague, is it not? Not very precise or objective. Not very useful. 

Because code is just many machines chained together, a bug in _one machine_ might introduce bugs in other machines. So just testing if that one machine does what you want, might mean you miss errors in other parts of your code.

Instead, you need a button you can click that says: "test if all my machines are in working order".

These are called **unit tests**. And they sound boring and unnecessary when you first hear of them. Give it a few years and you will never do a project _without_ them.

Because what are they? 

> A unit test is a piece of code that _tests_ if one of your machines works.

It _runs the machine_ and then checks if the _result is as expected_.

Many languages have built-in functionality for this. Otherwise, you can easily write it yourself.

Try writing a test machine that checks if two results match or not.

{{% data-trans from="Machine & Two Values" to="Bool" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
machine test wants a and b
  if not a is b
    say "Test failed!"
    unplug
  say "Test succeeded!"
&nbsp;
now result means 5 * 5 + 10 / 2
now expectedResult means 30
give result and expectedResult to test
{{< /bamboo >}}

Write these unit tests and put them in one file, so you can run them _all_ at the press of a button.

At the end of each day (of coding), run them! If they all pass, it means you are _certain_ your code works. If not, you know there are bugs (and _where_ they are).

This is, obviously, a much bigger topic. But that's outside of the scope of this course.

## Step 5: write readable code

This is why I mentioned how to write _readable_ code throughout the whole course.

What's the main cause for "thinking something works like X, but it's actually Y"? Yes, it's the labeling butterflies as spiders all over again. The main waste of time and effort when coding is because you _cannot immediately understand_ what an older piece of code does.

This leads to wrong assumptions, wrong data types, wrong logical thinking.

You can't solve a puzzle if the _actual_ shape of the puzzle pieces is different than what you can see.

As such, many programmers report fixing bugs "by accident" by simply rewriting the code. The aim is not to change what code _does_, but what it _looks like_. This is called **refactoring**.

Why?

Humans aren't perfect beings. We can't invent a solution to a problem, write it once, and it will work 100%. We make mistakes. We _learn_ from writing that first draft---we learn how we can do it better.

Therefore, as you program more, you'll constantly have this feeling:

* You write code
* It works ... but now you know a _better_ way to code this
* So you refactor and rewrite, because you feel ashamed of your older code 😉

This is normal. In fact, there's a famous quote both about writing and coding.

> All writing is rewriting

Time spent rewriting code to make it more readable or less prone to errors is _never_ a waste. 

{{% example %}}
Just last week, I completely rewrote the code for my free hybrid board game [Wondering Witches](https://pandaqi.com/wondering-witches). The old code worked. It was online for three years. But it was messy, ugly, hard to modify or upgrade when minor issues were found. So I spent a whole day---about 8 hours---just rewriting from scratch. But because I had already made it once, I knew exactly how to write it better the next time. So the new code is both shorter, more readable, and more powerful.
{{% /example %}}

Do remember to keep a backup of the old code, though. Sometimes, the rewrite is worse or does something you don't want. Sometimes, you forget how you implemented something before. You want the old code, unmodified, as a backup.

## Step 6-ish: go around the problem

This isn't preferable. It's the "nuclear option" if all the above don't work. And you have a deadline---or are simply out of ideas.

You can solve problems in many different ways. As such, if _one approach_ isn't working (the code is buggy or doesn't do what you want) ... simply try _another_ approach.

You haven't found the root cause, the actual problem. But you have found a way _around it_. In the end, we code to solve problems in the real world. Sometimes, that requires a band-aid instead of proper medicine.

This happens more often than you might think. There are more than enough stories about huge software companies (or web companies) crashing or hitting a weird bug they didn't understand. They had a strict deadline, they had requirements to meet, so they never solved the problem: they just wrote their way around it. (Sometimes this comes back to bite them in the ass years later, sometimes not.)

{{% example %}}
On my games website, when I generated a new map it would often scroll the page to the top. Why? I don't know! I checked my code, I checked everything, there's absolutely _no_ reason for the page to do it. I couldn't waste more time on this, I had to publish the games and continue. As such, I ended up writing code that saves our old position (on the page), then generates the board, then forcefully resets us to the old position. This "solves" my problem, without really solving it.
{{% /example %}}

## Conclusion

These are the three main ways to debug a program. We often talk about "cleaning" the code, or "writing clean code". There's no solid definition, but the idea is to write code that is ...

* Easily readable (it says exactly what it does and no more)
* Easy to change or extend in the future
* Solid and robust (it should be able to handle anything you throw at it, even extremes)
* Easy to visualize
* Tested (so you actually _know_ if everything works, all the time)

This is most certainly an experience thing. Your code will become cleaner and cleaner as you write more of it. You'll be ashamed of your old code in two years time---no, just one month after you wrote it. That's fine. That's growth.

I have some open source projects online, from when I was younger, with coding styles I certainly would **not** recommend today. But those projects brought me where I am. They taught me the skills to _invent my own programming language_. All of that without paying for an expensive---and mostly useless---university degree in computer science.

So keep writing code. Realize that only 5% of the time you're actually _writing new code_. The other 95% you're reading older code, modifying it, and tracking down bugs.