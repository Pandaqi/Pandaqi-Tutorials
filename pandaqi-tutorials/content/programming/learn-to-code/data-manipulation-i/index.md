---
title: Data Manipulation I
weight: 21
type: "article"
bamboo: true
---

In these two chapters, I want to give a few slightly more "advanced" ways for manipulating data. Again, every programming language will have these. And you will use them a lot.

I also want to show how programming is mostly mathematics. Because most of the time your data are _numbers_, and math is 100% about how to _make numbers do what you want_.

## Mixing data types

Maybe you already tried this. Maybe you understood the result---maybe not. I'm talking about using an operator (such as `+`) on _bags_.

### Bag and non-bag

What happens if you multiply a bag of numbers by one number?

{{< bamboo fbvalue="false" fbresult="false" >}}
bag numbers holds
  5
  10
  12
&nbsp;
say 5 * numbers
{{< /bamboo >}}

The result is a new bag. With _every element_ multiplied by 5. 

{{% data-trans from="Bag & Number" to="Bag" %}}

In math, the 5 would be called a **scalar** and the bag a **vector**. This is called _scalar multiplication_. Most people won't learn this in school (or anywhere else). 

But it's very useful in coding. Some languages support this by default. Otherwise, you want to create (or find) support for "vector math".

For example, in _games_, vectors are everywhere. Maybe you have a bunch of enemies. When you grab a powerup, _all_ the enemies become weaker. This is a scalar multiplication! We want to multiply a whole _list_ of values (enemy health) with one value.

{{< bamboo fbvalue="false" fbresult="false" >}}
bag enemies holds
  40.0
  23.30
  59.50
&nbsp;
now healthReduction means 0.5
say healthReduction times enemies
{{< /bamboo >}}

The same rule is true for other operators. If you **add** `5` to a bag, for example, it will add five to all elements inside it.

### Bag and Bag

Okay, cool. What happens when you multiply a _bag_ with another _bag_? Then both elements are a **vector**. Hence, _vector multiplication_. Again, this works for all operators.

{{% data-trans from="Bag & Bag" to="Bag" %}}

Games are still a great example. How do you save where the player is in a 3D world? You need to save their X, Y and Z coordinates. You _could_ do that with separate variables. But they are obviously related, so let's put them in a bag called "position".

What if we want to make the player jump? It should change the position. But only on the Y-axis! This means we can _add_ another bag to the position, where we only set the Y and leave all other values at 0.

{{< bamboo fbvalue="false" fbresult="false" >}}
bag position holds
  X means 1
  Y means 3
  Z means 2
&nbsp;
bag jumpChange holds
  X means 0
  Y means 5
  Z means 0
&nbsp;
say position plus jumpChange
{{< /bamboo >}}

Tada! With one line of code, you've transformed the whole position to the correct new position.

This is often called a _piecewise_ operation. Because you apply the operation to each _piece_ ( = element) separately.

Understanding these data transformations (scalar and piecewise) will help you a lot, especially in game development. They provide fast and easy ways to change bags of data (such as coordinates, lists of enemies, powerups or 3D models) into what you want.

## Random

Another generally useful thing is the **random** function.

> To get a random number between 0 and 1 (non-inclusive), use `bamboo random`.

{{% data-trans from="Nothing" to="Number" %}}

Non-inclusive means that 1 itself isn't included. Only all values just below it, like `0.99` and `0.999`.

_Why 0 and 1? Wouldn't you often need a random number in another range?_ 

Yes ... but all random numbers can be created just from the range `0` to `1`!

It's similar to what I explained earlier about the `round`, `floor` and `ceiling` functions. Most languages support all, but you actually only need _one_ to get them all.

Some languages support something like `rand_range` to get random numbers inside another range. But most don't, and that's totally fine.

Think about it. How could you use this data (a number between 0 and 1) to get _any_ random number? 

## Exercise 1: dice roll

This is another great exercise that will broaden your understanding of code and data transformation.

Say I'm writing a game in which you roll dice. I want random numbers between 1 and 6. Moreover, they must be integers of course. (I can't very well roll a `2.23` with a die!)

{{% data-trans from="Nothing" to="Number between 1 and 6" %}}

How do you achieve this?

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo caption="Add/remove characters to make the computer execute the code again. You'll get different results!" folded="true" >}}
say round (1 + (bamboo random) * (6 - 1))
{{< /bamboo >}}

That's the power of a random number _between 0 and 1_. By multiplying it with some value `X`, you can turn this into a number between _0 and X_. To change where we start, just add or subtract a number from it.

But remember that we moved the whole range by adding 1 to it. So saying `random * 6` would _overshoot_ us: we'd be able to get `1 + 6 = 7` as a result. Which a die doesn't have!

So after moving the whole range up, move the upper bound down by the same amount

### Improving the code

Now rewrite the code above to be more _readable_. To actually explain itself and where the numbers come from.

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now lowDiceRoll means 1
now highDiceRoll means 6 - lowDiceRoll
now rand means (bamboo random)
now result means round (lowDiceRoll + rand * highDiceRoll)
say "You rolled: " + result
{{< /bamboo >}}

### Fixing a ninja flaw

Finally, this code isn't entirely correct. This issue, though, is much harder to spot (unless you're a mathematician).

Have you found the issue?

> The lowest and highest number (1 and 6) are _less likely_ to be picked.

Think about it. Our randomness generates any value between 1 and 6. Then we _round_ it. This means that ...

* 1.49 and lower becomes 1
* 1.5 until 2.49 becomes 2
* 2.5 until 3.49 becomes 3
* 3.5 until 4.49 becomes 4
* 4.5 until 5.49 becomes 5
* 5.5 and higher becomes 6

See that? The 1 and 6 are _half_ as likely to be picked as any other number. That's why experienced programmers rarely use `round`: they use `floor` instead.

Rewrite the dice roll code to be _fair_ using floor.

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
now lowDiceRoll means 1
now highDiceRoll means 6
now rand means (bamboo random)
now result means floor (lowDiceRoll + rand * highDiceRoll)
say "You rolled: " + result
{{< /bamboo >}}

Notice how we don't need to subtract 1 from the high bound anymore. It can just be 6.

Why? Remember that the `1` is non-inclusive: we never actually reach that value (6 + 1 = 7). We come very close, but never reach it. So `rand * 6`, will at most be `0.999999 * 6`, which will at most be 5 (when floored).

Which means calling `floor` will keep our values between 1 and 6. And now they are picked fairly:

* 1.99 and lower are 1
* 2.99 and lower are 2
* 3.99 and lower are 3
* 4.99 and lower are 4
* 5.99 and lower are 5
* 6.99 and lower are 6

## Exercise 2: random element

Knowing this, write code to select a _random_ element from a bag. Make it fair. 

{{% data-trans from="Bag" to="Value (Random)" %}}

Make sure you never access elements that don't exist:

* Either negative (below the first index of 0)
* Or too large (larger than the bag's size)

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo caption="Again, remove+add characters to execute the code again and get a new result." folded="true" >}}
bag workplace holds
  "Desk"
  "Pen"
  "Paper"
&nbsp;
now rand means (bamboo random)
now numItems means workplace's size
now randIndex means floor (rand * numItems)
say workplace's randIndex
{{< /bamboo >}}

_Shouldn't it be (numItems + 1)? If we floor it?_

No. Something sneaky happens here. You might have bumped into that while trying these exercises yourself.

Because bags start at `0`, the highest index is always `size of the bag - 1`. 

Yes, this is one of the reasons why programming languages start their indices at 0. It's because it makes writing code such as the one above (to select a random element) cleaner. We can just use the bag's size and floor it. Because the bag size is already "highest index + 1".

This is another piece of code you'll write a thousand times. Or you choose a system/language that has a built-in function for it 😉