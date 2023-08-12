---
title: "Conditionals II"
weight: 7
type: "article"
bamboo: true
---

Last chapter introduced turning everything into a _bool_. And then using that to determine if we want to execute a group of code or not. 

It also explained `both ... and` to combine two conditionals. This chapter introduces a few more keywords like that. Once done, you'll have seen them all! (There aren't many options for our simple bools.) 

And at the end, we discover what happens if you ask a computer if a number is equal to a string 😉

## Or

The `and` keyword is true if both of its values are true, and false otherwise.

There's also a middle ground.

> Ask if one of the two is true with `either VAL1 or VAL2`

{{% data-trans from="Two Bools" to="Bool" %}}

It's actually more powerful than this. The logical "or" operator is also happy if _both_ are true. As such, it's an inverted `and`: it only returns false if _all_ its values are false.

{{< bamboo >}}
now hasGamepad means true
now hasKeyboard means false
if either hasGamepad or hasKeyboard
    say "You can play this game!"
{{< /bamboo >}}

The player can play the game if it has _some_ input device. We don't care if it's a gamepad ( = controller) or a keyboard. As long as _one_ of them is true, the player can play the game!

Try changing them both to false. Or both to true.

## Above/Below

Similarly, there's a middle ground between "check if a _is_ b" (very specific) and "check if a _is not_ b" (very broad). 

You might know these as "less than" (`<`) or "greater than" (`>`). That's how most languages parse them. But, as usual, my language also supports just writing them out.

> Use `above` to ask if the first value is greater than the other

> Use `below` to ask if the first value is less than the other

{{% data-trans from="Two Numbers" to="Bool" %}}

These are mostly used to create _limits_ on code. For example, 

{{< bamboo >}}
now usersOnline means 256
now maxCapacity means 240
if usersOnline above maxCapacity
    say "Sorry, we're full!"
{{< /bamboo >}}

Try changing the numbers on purpose to make the conditional true or false.

## A note about "else"

Almost all languages support a few more conditional statements than just `if`.

Take the previous example. What if we also want to display a message to welcome new users (if we're not full)? We'd need to write a whole new statement, which is just the first one with _minor_ changes.

{{< bamboo >}}
now usersOnline means 256
now maxCapacity means 240
&nbsp;
if usersOnline above maxCapacity
    say "Sorry, we're full!"
&nbsp;
if usersOnline below maxCapacity
    say "Welcome!"
{{< /bamboo >}}

That's why languages support a faster way: the `else` statement. It executes if the previous statement is _not_ true. Therefore, if you create an if-else, you're sure one of the code blocks is executed. Either the first (if true) or the second (if false).

For example, this is how you'd write my example in **JavaScript**. That language powers interactivity in browsers, and therefore also this website.

{{< highlight Javascript >}}
const usersOnline = 256
const maxCapacity = 240

if(usersOnline >= maxCapacity) { 
    console.log("Sorry, we're full!"); 
} else { 
    console.log("Welcome!");
}
{{< /highlight >}}

I decided not to support this in my language. 

Why? 

* If you code well, you'll almost _never_ need this. 
* Conversely, knowing it exists can easily destroy how legible (or "accessible") your code is.

Right now, you probably won't see how to avoid it. I haven't explained the crucial parts yet. But by the end of the course, you will see!

## Mixing types

Well, see for yourself. Try comparing two values of any type you like and see the results.

{{< bamboo >}}
say 5 is "notanumber"
say true above -5
say "what" is 0 
{{< /bamboo >}}

The rules here are usually the same as operating on two different data types (like multiplying a number and a string).

A static language simply forbids this. It crashes and tells you the two values should be the same type.

A dynamic language applies **type coercion**. It tries to force or "coerce" both values to the same type. 

This differs per language. But the following rule is generally agreed upon.

> It tries to make everything a _number_ and then compare _that_.

Why?

* Computers like numbers the most. They are the "default", so to speak.
* Numbers are easily mapped to bools: `false` = 0, `true` = 1
* Strings are easily converted to numbers (if possible). A computer understands that the string `"3.41"` is the number `3.41`

That will explain 99% of type coercion. It's most likely to fail when comparing a *number* and a *string* (that is not a number).

In general, though, **do not rely on this**. That's also why I recommend a static language with "type safety" in the end. Relying on type coercion is like telling the computer: "do whatever you want with my code, I hope things turn out alright!"

Take control into your own hands. _You_ decide the data type and _you_ fully control what your code does. When combining two values into a conditional, make sure they are always the same type.

## Conclusion

This ends the chapters about bools and conditionals. 

In this section, I just want to repeat the most important part. To make sure you recognize how _all_ of coding is just data transformations.

**You've just learned how to convert anything to a bool.**

That was the point of these two chapters. Now you can ...

* Convert multiple bools to one bool with `and` or `or`
* Convert any two values to a bool with `is`
* Convert two numbers to a bool with `above` or `below`
* Invert any bool with `not`

Once you have the value, you can use it for conditionals. To determine which part of the code to execute or to ignore.

Now let's see how we can turn everything into another _number_!