---
title: Loops I
weight: 11
type: "article"
bamboo: true
---

A crucial principle in programming is "DRY": Don't Repeat Yourself. That's the beauty of a computer: it doesn't mind executing the same task 1000 times for you. In a sense, that's all programming is. You give a computer a _pattern_ it can repeat as much as you want.

For example, let's say you run a newsletter. You want to send a new email to all your 100 subscribers. It would be annoying to manually send each mail one by one, wouldn't it? Instead, code helps _generalize_ this process. So you can just tell the computer: "hey, send that email 100 times"

The first step towards this is a **loop**.

Like the if-statement, it needs a code block after it. It simply **repeats** ("loops") that code endlessly.

> To repeat code, use the `repeat` keyword.

One execution of the whole code block is called an "iteration".

I could show you true repetition ... but your browser would crash. It would loop, and loop, and loop, and never stop. We call that an endless loop or an **infinite loop**. 

That's why my code examples have a (rather low) maximum number of loops. Try it out!

{{< bamboo >}}
repeat
  say "Looping!"
{{< /bamboo >}}

## Stopping the infinite loop

Okay, we don't want it to go on forever. Just as much as needed. How do we do that?

> To stop a loop, call the `stop` keyword (from within)

{{< bamboo >}}
repeat
  comment send an email
  stop
{{< /bamboo >}}

But ... it only looped once? That's not a loop! Because we call `stop` at the end of each iteration, it, well, stops after the very first iteration.

That's why you always see the following pattern: a _conditional_ inside a loop that tests if we want to stop or not.

For example, we have 5 subscribers. We want the loop to stop once it has send an email to all of them. So we check that, every iteration. Have we crossed our threshold? Should we stop? Only if true, execute the stop statement after it.

{{< bamboo fbvalue="false" fbparser="false" >}}
now numSubs means 5
now sentEmails means 0
repeat
  if sentEmails above numSubs
    stop
  say "Send an email!"
  change sentEmails by 1
{{< /bamboo >}}

It's a common mistake to forget to stop a loop. Even experienced coders still do it from time to time. The result will always be that your software "hangs" due to that infinite loop. (Because the loop blocks any other code on your machine from executing, it becomes unresponsive or sluggish. And it only stops once your whole machine crashes.)

Therefore, write your code in such a way that infinite loops will never happen---even if everything goes wrong.

{{% remark %}}
Many languages use the word `break` for this. This comes from "breaking out of the loop". I thought stop was more intuitive and direct for new programmers.
{{% /remark %}}

## Iterators

That variable `sentEmails` (from the previous example) does nothing more than _count_. It counts the number of iterations, so we know when to stop. 

This is such a common pattern that we ...

* Call it an **iterator** 
* Commonly call that variable `i` (because it's very short)
* Provide special syntax for this occasion. (Because there are many loops for which we _know_ exactly how many times we want to loop.)

In our example, we _know_ the number of subscribers beforehand. We know how many times we want to repeat before the loop even starts.

> To repeat a fixed number of times, use `repeat NUM times`

> To get the current value of the iterator, use `bamboo iterator`

{{< bamboo >}}
now numSubs means 5
repeat numSubs times
  say "Sending email " + (bamboo iterator)
{{< /bamboo >}}

If your code doesn't recognize a certain expression, try adding parentheses (`()`) around it. I mentioned this at the start, but I feel like I should mention it again. The computer _tries_ to figure out what order you meant. But if it can be ambiguous, it can't choose---or might choose the wrong one. It might think you wanted to do "sending email" + "bamboo" (a variable).

Anytime you want to be sure, group values with parentheses. Other languages, with more symbols and syntax, might allow more freedom. But _never_ lean on that. You determine what your code should do, not the computer.

{{% remark %}}
I decided to remove that freedom, on purpose. Because it forces you to write simpler and shorter code. The ability to group things with parentheses has caused many a coder to write terribly long one-liners 😉
{{% /remark %}}

Other languages usually call this construct a `for` loop. From the phrase: "for \<some values\>, do this". 

That syntax is more powerful, but also way more involved and complex. That's why I renamed and simplified it for my course. Once you learn more advanced languages, you'll find this syntax and understand what I mean.

What I explained above is all you need in 99% of the situations. You either stop based on a condition or loop a known number of times.

Other syntaxes are just "fancier" ways to do the same things. As you know by now, I like to keep things simple and basic. Fancy extras just make it harder to learn or understand something.

A loop repeats a block of code, until you tell it to stop. _That's it._

### Exercise

Additionally, understanding how to accomplish anything with basic syntax is a great exercise. Our iterator, so far, starts at `0`. A logical place to start, of course.

But let's say we want something else. We have a ranking of some sort---maybe high scores, donations, activity on a platform, whatever. We only want to select those _outside_ of the top 10. In other words, we want to loop through the people from "number 11" until "the last one".

How do you do it? Using only what I told you?

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now numPeople means 20
now topTen means 10
repeat (numPeople minus topTen) times
  now i means bamboo iterator
  say "Rank #" + (i plus topTen)
{{< /bamboo >}}

This is one way to do it. 

* Only loop as many times as needed, calculated with `total - 10`
* But when printing the rank, add that `10` back again

But there's another way (see next chapter) ...