---
title: Machines I
weight: 16
type: "article"
bamboo: true
---

Congratulations! You've arrived at the final boss of programming. Not necessarily because it's hard, but because it's the most important and powerful tool.

I've explained how a computer just executes exactly what you type, no more and no less. I've explained how you can tell it to _repeat_ a block of code as often as you need. The computer will oblige---without fault. Finally, I've shown you how to collect values into a bag, and that any complex program is just bags within bags.

What comes next? What more could we do? We can take the final step towards a "full program". 

All the code examples so far did _one thing_. They calculated a value. They printed all usernames. They converted highscores to a better value. 

In a sense, we created small "machines" for one purpose. 

* We feed _input_ to our machine
* It will change it (in the same way every time)
* And then spit back some _output_. 

Because that's what a machine does. A coffee machine doesn't refuse to work because it "doesn't feel like it today". It also doesn't suddenly want _oil_ instead of _coffee beans_ as input. A machine always wants the same input and produces the same output.

To get a full program ... you simply create many machines and chain them together!

One machine to log in users. Another machine to display their account details. Another machine to load the web page, add interactive buttons, change the colors, etcetera. Every tiny thing your code must do, is a tiny machine that calls other machines.

{{% remark %}}
Hey, what a coincidence, these machines do exactly the same thing as a "data transformation" ...
{{% /remark %}}

## Define a machine

As always, we need to _tell_ the computer where a machine starts and ends. Like if-statements and loops, we ...

* Write a header (with the name of the machine)
* And then _indent_ the code to form a block below it

{{< bamboo >}}
machine sayHi
  say "Hi!"
{{< /bamboo >}}

This ... does nothing.

Of course not, because we merely _created_ the machine. Just like buying a coffee machine and placing it on your table does _not_ automatically make coffee appear 😉

To execute it, we need to turn it on and press its buttons. In other words, we need to ...

## Use a machine

> To execute a machine, write `use MACHINENAME`

Now you can see the power of machines. We can call them from anywhere! We can execute them as often as we want, from any location in the code. We never need to repeat ourselves again!

{{< bamboo >}}
machine sayHi
  say "Hi!"
  say "My name is ..."
  say "Pandaqi"
&nbsp;
use sayHi
{{< /bamboo >}}

Just by starting the machine, it happily executes everything inside. And we can call it anywhere, anytime, just by saying its name.

Hopefully, you see the consequences of this. While coding, you can ...

* Create very simple machines that do one simple thing. (Which reduces mistakes and makes code easy to read.)
* Call them when needed to get complex behavior

## Exercise

Rewrite the loop below to use a machine instead.

{{< bamboo >}}
now val means 0
repeat 5 times
  change val by 1
  if val mod 2 is 0
    say "Even number!"
{{< /bamboo >}}

Try it yourself first. You can just edit the code block directly. When ready, view my solution below.

{{< bamboo folded="true" >}}
machine sayEven
  say "Even number!"
&nbsp;
now val means 0
repeat 5 times
  change val by 1
  if val mod 2 is 0
    use sayEven
{{< /bamboo >}}

## Getting output from a machine

When you use a coffee machine, what output do you get? Coffee. When do you get it? At the end.

Programming machines are no different. They do their magic, transforming some data, until they get a _final result_. This result is given back to whoever called the machine. That's the output.

This means it is just a _value_ we can play with! We can store the result of a machine in a variable, use it in calculations, whatever.

{{% data-trans from="Machine Name" to="Value" %}}

{{< bamboo >}}
machine twoSquared
  2 * 2
&nbsp;
now myNumber means (use twoSquared)
say "Two squared is " + myNumber
{{< /bamboo >}}

This is how you chain machines together. You call one and save the result, then use it however you like. Later on, somebody else might call _that machine_ and use its final output.

Many languages do not "automatically" output the last value. Instead, you must type something like `return VAL`.

Why? This **explicitly** _returns_ a value from the machine. 

Again, this might feel strict and annoying, but it's actually _good_. Forcing programmers to type something fully is often done on purpose. To ensure you don't accidentally ask the code to do something you didn't intend. 

{{% remark %}}
I decided to leave this out in my simple introductory language, but would not do so in a serious language.
{{% /remark %}}

## Functional programming

This may all sound obvious now. 

* "Of course you want code to be small and simple!"
* "Of course you never want to repeat yourself and type code twice!"

But many programmers only learn the value of this after _years_ of messing around. They spent years writing bad, slow, hard to read code. (I was one of them. That's why I'm telling you this now.) 

Experienced programmers will tell you that they create machines for everything, all the time. If you code well, every machine is "obvious".

In other languages, these are called a `function` or a `definition`. I chose the word "machine" because it's more descriptive and intuitive. It explains exactly what it does and how you use it.

This practice is, therefore, called **functional programming**. Instead of putting your code in _one long file_, you split it into many tiny "functions" ( = machines). Sometimes, crucial parts of your code are just 5 simple lines of code.

But just using machines isn't enough. 

Notice how we haven't given _input_ yet. The machines just do the _exact_ same thing every time now! Our machine `twoSquared` will, as expected, always output the square of two. What if we want to square any number? 

Yes, we still need two things:

* A way to provide input
* One extra principle for actually using machines _well_.

Let's talk about that in the next chapter ...