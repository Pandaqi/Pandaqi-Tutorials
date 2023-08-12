---
title: Loops II
weight: 12
type: "article"
bamboo: true
---

Last chapter introduced you to loops. It also teased a different way to play with how many (or which) iterations are executed. Let's dive into that here. 

I turned this into its own chapter. Not because it's difficult (it's just one simple word), but because there are consequences that I want to stress. Understanding these will make you a far better coder immediately.

Also, we'll continue our running example of a mailing list with subscribers!

## Skipping ahead

Just like stopping early, you can also jump to the next iteration early.

> To immediately jump to the next iteration, call `skip`

Maybe you already see how this relates to the previous exercise. Instead of restricting our loop, we can say the following:

* Are we inside the top 10? SKIP!
* Otherwise? Execute the rest of this code.

{{< bamboo >}}
now numPeople means 20
now topTen means 10
repeat numPeople times
  if (bamboo iterator) below topTen
    skip
  say "Rank: #" + (bamboo iterator)
{{< /bamboo >}}

This is even more powerful than you think.

Think back to when I explained the `if` statement. And then the `else` statement that I did _not_ include in my language. I told you it was because it's unnecessary and leads to less readable code. But I didn't yet show ways to replace those statements. 

Now you've see the first trick :)

Many courses on coding will teach you to use an else statement here. "If in top ten, do this, else (outside of top ten), do that". But we don't need to. If we just call skip before we do anything, we get the same functionality with fewer lines of code.

This is often called **guard clause**. Right now, that might not make a lot of sense yet. But I want to get the idea going. With that if statement, we "guard" the rest of the code against executing if a condition is not met. In this case, the log statement is guarded from saying anything if inside the top ten.

### Exercise

Let's say we only want to send an email to our "premium" subscribers. (Whatever that means. Maybe they get behind-the-scenes on your next secret project.)

You have 5 subscribers. All of them are premium, except subscriber 1 and 3. They are "regular".

How might you code this?

{{% data-trans from="Number & Numbers" to="Bool & Output" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now numSubs means 5
now regularSub1 means 1
now regularSub2 means 3
repeat numSubs times
  now i means bamboo iterator
  if i is regularSub1
    skip
  if i is regularSub2
    skip
  say "Sending an email!"
{{< /bamboo >}}

Of course, this is a simple example. But it's about the basic idea. Use loops for any task that needs to happen more than once. Then use smart "guard" skips and stops to ensure it only executes when needed (or on the right values).

At the same time, this example is quite contrived. You might have looked at it and cringed. It feels very long for something so basic. And even though it's a loop, we still violate the DRY-principle and repeat ourselves---with multiple similar if-statements.

_"Do I really need to write a new if-statement for every regular subscriber?!"_ 

Of course not. You're finally ready for another crucial part of every programming language: holding a list of values inside a variable, instead of just one.