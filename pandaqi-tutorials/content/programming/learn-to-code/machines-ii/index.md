---
title: Machines II
weight: 17
type: "article"
bamboo: true
---

You've learned how to _define_ (or "create") a machine and how to tell it to do something. But just like our coffee machine needs _beans_ to create coffee, most machines you write will need some _input_.

How do you provide this input? You need to _give_ it to the machine.

But that's not enough. The machine needs to accept the input. It needs some hole, container, area labeled "place your coffee beans here and nowhere else!"

As such, there are _two_ steps to making a machine accept input.

* When defining the machine, also define _what it wants_
* When calling it, also _give it what it needs_

## Define what it wants

Let's start with _one_ input first. That's the simplest.

> To make a machine want one input, add `wants NAME` to the definition

As always, you can invent the name yourself. Make it something descriptive and clear.

{{< bamboo >}}
machine square wants num
  num * num
{{< /bamboo >}}

This machine squares any number you give it, as you'd expect.

## Give it what it needs

Now you know: "this machine wants one input". By the name, you also know it should be a number. Coding this way is like telling your future self what to do.

> To give a machine input, use `give VALUE to MACHINE`

{{% data-trans from="Name & Value" to="Value" %}}

{{< bamboo >}}
machine square wants num
  num * num
&nbsp;
say (give 5 to square)
{{< /bamboo >}}

Magic! It calculated the square of 5!

Try it with different values. Give your machine whatever you want. Once you're ready, we can move to _multiple inputs_.

## Multiple inputs

All the rules stay the same. It's just that you need _some_ way to separate the inputs. To tell the computer where one input stops and another starts.

As usual, I chose to write this like a sentence.

> To give a list of inputs, separate them with `and`

{{% data-trans from="Name & Values" to="Value" %}}

{{< bamboo >}}
machine add wants num1 and num2
  num1 + num2
&nbsp;
say (give 1 and 2 to add)
{{< /bamboo >}}

Magic again! You can give as many inputs as you like.

Try it. Create something that adds 3 numbers. Or maybe a more complex machine.

Of course, this becomes a bit annoying to type if you give _lots of inputs_. That's why you want to keep your machines as _small_ and _simple_ as possible. Once you start giving it 3, 4, or more inputs ... you should split it into smaller machines.

{{% remark %}}
The inputs a function wants are called `parameters`. The actual values you give it are called `arguments`.
{{% /remark %}}

In dynamic languages (like mine), you can be loose with it. You can give too few arguments, or too many, and it won't complain. (It's not recommended, but you _can_ do it.) More strict languages require you to give exactly the inputs specified and nothing else.

## Stopping early

So far, a machine will run its whole process ( = all its code) and output the end result. You might not want that. 

Remember the `stop` and `skip` keywords I introduced in [Loops](../loops/)? I explained how you can use them for "guard clauses": to exit early if you don't want code to execute.

Yes, a similar thing exists for machines! You can tell a machine to immediately stop working at any point.

> To stop a machine, call `unplug` or `output`

I noticed some people understood the first keyword, others the second, so I allowed them both. But they are identical: you immediately unplug the machine. Whatever its last value was, that's all you get from it.

Why use this? For the same reason you'd stop or skip a loop. It's a short and easy way to prevent executing code you don't want.

Look at the example below. The code becomes quite complex with all the nested statements. (Adding more and more indentation in front of lines!) This is a "very simple" example. If you're writing real code, this becomes annoying and unreadable quickly.

{{< bamboo >}}
now totalScore means 0.0
repeat 5 times
  change totalScore by 1.0
  if totalScore below 3
    say "Better luck next time!"
  if totalScore above 2
    say "Well done!"
{{< /bamboo >}}

### Exercise: rewrite

We can rewrite this. Using a machine that stops early.

First, try it yourself. You can modify the code block above, or use the empty one below.

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo folded="true" >}}
machine commentOnScore wants score
  if score below 3
    say "Better luck next time!"
    unplug
  say "Well done!"
&nbsp;
now totalScore means 0.0
repeat 5 times
  change totalScore by 1.0
  give totalScore to commentOnScore
{{< /bamboo >}}

Look at that! We now have ...

* A simpler loop
* A machine we can reuse all across the project
* Code that is easier to read

## Exercises

### Logging in

To log into an account, you need to provide two things: a username and a password.

Let's try to write a (very barebones and unsafe) login system.

* Create a bag with usernames and passwords
* Write a machine that accepts these things
* And only returns true if they match

{{% data-trans from="Machine & Two Strings" to="Bool" %}}

{{< bamboo >}}
{{< /bamboo >}}

{{< bamboo disabled="scopeBlock" folded="true" >}}
bag users holds
  Timmy means "timmyboy07"
  Zara means "zaraflower"
  Berta means "1234"
&nbsp;
machine login wants name and pass
  users's name is pass
&nbsp;
if (give "Timmy" and "timmyboy07" to login)
  say "Timmy logs in!"
{{< /bamboo >}}

Try different names! Try a wrong password!

Similarly, many websites allow multiple ways to log in. (Using your Google account, your email address, a QR code, whatever.)

It would be annoying to copy-paste the login code for each different type! Instead, they'll use one machine called `login` that accepts some input (like a username). Where that username comes from doesn't matter to the machine---as it shouldn't! They only have one job: take the input and log that person in.

As such, websites will have one `login` machine that handles each case. Once written, they don't need to worry about it anymore.

### Mafia

Mafia (or Werewolf) is a popular party game. In it, a few members get a secret role: the mafia (or werewolf). They have to stay alive until the end, secretly killing innocent members of the town.

Let's say we make a digital version of that. 

Given a player name, the machine should tell us whether they are evil or not.

{{% data-trans from="Machine & Two Strings" to="Bool" %}}

{{< bamboo >}}
{{< /bamboo >}}

Below is my solution---one way to do it. Try changing the names or the roles and see if it still works.

{{< bamboo disabled="scopeBlock" folded="true" >}}
bag roles holds
  Lisa means "Mafia"
  Jason means "Innocent"
  James means "Innocent"
  Bella means "Mafia"
&nbsp;
machine isEvil wants name
  roles's name is "Mafia"
&nbsp;
if give "Lisa" to isEvil
  say "Lisa is evil!"
{{< /bamboo >}}

## Using machines well

### Replacing comments

Machines can replace those dreaded [Comments](../comments-and-space/) I talked about earlier. 

Instead of writing "this code adds two numbers" ... turn it into a machine called `addTwoNumbers`!

Instead of writing "this code saves the highscore" ... turn it into a machine called `saveHighscore`!

Whenever you feel compelled to _explain_ what a piece of code does---don't. Instead, pull it into its own machine, and give that a descriptive name.

### Pure machines

In functional programming, there's this "ideal" called a pure function. The idea is simple---applying it is harder.

> A pure machine does **not** depend on any external factors. Given the same input, it _always_ gives the same output.

While I'm not a strict person, I'd still recommend _trying_ to adhere to this. Write your machines to be 100% predictable with their data transformation. 

It will eliminate maybe the biggest (frustrating) source of errors (for new and experienced programmers alike): your code does something radically different _some of the time_! And you don't know why! Weren't computers supposed to be logical and consistent?

At least 99% of the time, this error is caused by a machine that uses more than just its inputs inside its calculations.

If you do that, using a machine will not improve your code, it will actually make it worse. Because now you've created a huge instability, and you've "hidden" it inside a machine somewhere.

Most languages **know this**. Why? Because of something called **function scope**. Within a function, most languages only allow access to that function's inputs, and nothing else. If you need input, you have to _give it_ to the machine. It's not allowed to access any other variables.

So, if a function _can_ access some data, it is said to be "within scope". All other data is "out of scope".

I did this as well. But I turned it off for my examples above, to make things simpler. When I turn it back on, the earlier example will error.

{{< bamboo >}}
bag roles holds
  Lisa means "Mafia"
  Jason means "Innocent"
  James means "Innocent"
  Bella means "Mafia"
&nbsp;
machine isEvil wants name
  roles's name is "Mafia"
&nbsp;
if give "Lisa" to isEvil
  say "Lisa is evil!"
{{< /bamboo >}}

Why? Because the machine has no clue what "roles" is. It was defined _outside_ of the machine, out of its scope. So it has no access to it. 

{{% remark %}}
To fix this, you pass that bag as an _input_ to the machine. This is great, because now your code **tells you** that it depends on that bag. It has become a pure machine, without hidden dependencies.
{{% /remark %}} 

## Conclusion

As always, it's about data transformations. You put some data _into_ a machine, it changes it, then you get some other data _out_ of the machine.

That's all coding is. Changing data into other data, to get beautiful end results.

And machines are _the_ way to do it. Supported by every language. Any moderately complex code project heavily relies on a large set of tiny machines. 

Knowing this, you can tackle larger problems. You know how to structure your program.

* Every time you want to do something
* Identify what data should go in, and what data should go out
* Write one machine that does exactly that
* (Call it when needed, with the right input values.)

This basically concludes this course on programming. You have all the building blocks. You have all the tools, you've played with them, you know _why_ or _how_ they are applied.

But I won't leave you hanging. There's more I can do to help! These last few chapters are filled with ...

* Lots of practical, real-life examples on how to tackle problems
* Slightly more advanced syntax or coding ideas
* And finally, a conclusion that discusses where to go next.