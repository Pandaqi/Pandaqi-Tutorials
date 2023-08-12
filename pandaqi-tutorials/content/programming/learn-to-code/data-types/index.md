---
title: Data Types
weight: 3
type: "article"
bamboo: true
---

Data types will always be your first step into any programming language---or any problem. That's not surprising: you already know that coding is just "changing data". So it obviously all starts with data! Pieces of information of a certain _type_.

But ... you already know that. The three examples from the previous chapter introduced them all! You have ...

* A yes/no value (`true` or `false`)
* A number (`3`, `5.2`, ...)
* A piece of text (`"hello"`)

This is all you get---and this is all you need. Let's go over each one and show how they work.

## Boolean

A true/false is called a **boolean** (value). I often abbreviate it to `bool` (like many others).

This one is the simplest. It can literally be one of only two things! That's why we start here.

It's also very cheap for the computer to calculate. Booleans are stored as a `0` (false) or `1` (true). That means they are just one "bit": the absolute tiniest piece of memory a computer has.

Why do I tell you this? You'll see ... very soon.

To create a bool, type `true` or `false`. That's it. 

{{% data-trans from="Nothing" to="Bool" %}}

Do note, though, that capitalization matters. Computers are precise creatures. It will understand `true` 100% of the time. But if you type `True` instead? It crashes and looks at you funny. 

This might feel like an annoying hurdle. But it's actually _good_. It makes the computer faster (it only needs to check one word) and it encourages you to be more precise. You will appreciate this in the long run.

{{< bamboo >}}
now weAreCoding means true
now weAreSad means false
{{< /bamboo >}}

## Number

The second simplest. Just write the number as usual! If you want fractional digits, type a dot (`.`)

{{% data-trans from="Nothing" to="Number" %}}

{{< bamboo >}}
now ten means 10
now ten means 5 plus 5
now weirdNumber means 9009.31893893
{{< /bamboo >}}

I designed my language (for this course) to read like normal (English) sentences. As you see in the examples, that means you can already calculate anything by just typing it.

Keep in mind the _order_ of calculations. You've probably learned this at school, but here it is again.
  
* Brackets first: `( a )`
* Then multiplication: `a times a` or `a divide a`
* Then addition: `a plus a` or `a minus a`

Try it yourself! Let the computer calculate some things for you.

{{< bamboo >}}
now longFormula means 5 plus 5 times 2 minus 12
now weirdOrder means (5 plus 5) times (2 minus 12) 
{{< /bamboo >}}

For this tutorial, a number is just a number. Other languages might specify this further. It might be an `integer` (no fraction) or a `float` (with a fraction). Or even more types, but that's less common.

Notice how these famous operators from math ... are just data transformations! You put in two numbers, and get _one_ new number out. You put in 5 and 5 (with operator `+`), and get out 10. Hopefully, you slowly realize just how _everything_ in coding is just a change of data.

## Did you notice?

The computer just steps through our code from top to bottom. It breaks the code into separate _statements_---one per line. Then it starts with the first and continues until the end.

_All_ programming languages in the world do this. There's no reason to do anything else. A computer will always start at the first statement and go down from there, line by line. (Why would it start from the bottom and then go up? :p)

_Not_ all languages separate statements by line. Some use symbols, which allows many statements on one line (if you want). I chose not to do this, as it feels less accessible to newcomers. 

Conclusion? 

> New statement to make? Do it on a new line!

## String

A piece of text is called a **string**. Because in English you say "a string of text" or "a string of characters".

To create one, put any text you want inside **double quotes** (`"`). Some languages also allow single quotes (`'`).

{{% data-trans from="Nothing" to="String" %}}

{{< bamboo >}}
now myName means "Tiamo"
now thisWebsite means "Pandaqi"
now thisLanguage means "BAMBOOOO"
{{< /bamboo >}}

Try it yourself! In fact, why don't you try adding a string that contains the `"` character inside it ...

The computer will produce an error. 

Why? Because it saw your second quote and thought the text ended! More characters appeared after it, which confused the computer. 

Again, they are precise creatures. If you stick to their simple rules, you'll be rewarded. Any deviation and the computer becomes as dumb as that shoe.

## In practice

I told you before that computers only know _numbers_. And that's still true! The bool is just a `0` or `1` (as I said), a string is converted to something called "unicode" behind the scenes. 

{{% example %}}
Long ago, people decided to map each character to a number, so computers could handle text. For example, capital "A" is 41 and "Spacebar" is 20. This is how such a game engine converts keys being pressed to numbers it can use!
{{% /example %}}

So why these different types? When do you use each one in practice?

* A **bool** tells code to do something (yes) or not (no). Often, you only want to execute code _some_ of the time---when a certain condition is met.
* A **number** does the actual calculations! In the end, they do all the hard work!
* A **string** is used to make something readable, for you or the user. It's easier to save a number under a name like "price of one pizza", than to remember what the number represents.

## Example

Let's see this in practice. We want to display a "good morning"  message to the user of our website. But only, you know, if it's _actually_ morning.

How do we do it? Find your input and output. Then assign the best data type to each part.

I would say,

* **Input**: Get the current _hour_ ( = number)
* **Change**: Check if it's morning ( = yes/no, so a bool)
* **Output**: If "yes", give the _message_ ( = string)

{{< bamboo >}}
now hour means 10
now isMorning means hour below 12
if isMorning
    say "Good Morning!"
{{< /bamboo >}}

Play with this example! Change the hour, change what morning means, change the message.

## But what if ...

Now you might be wondering: "_but what if we mix these types_?" What if we multiply a number by a string? What if we add a bool and a number?

This depends on the language. Programming languages are either _statically typed_ or _dynamically typed_.

* Static: you just _can't do that_. It will immediately error if you try to do it.
* Dynamic: it will try to convert the types and do something meaningful with it.

My language is the second. Because most beginner languages are. It prevents you from hitting a wall of tiny errors when you start coding.

{{% example %}}
Remember how I told you booleans were just `0` and `1`? Yeah, dynamic languages will convert them to those numbers when needed. Conversely, any number other than `0` is often automatically "true". Because zero is the only number that literally means nothing---so false.
{{% /example %}}

But I actually don't recommend it. Once you're more comfortable, move to a statically typed language. It gives you safety. You prevent silly errors (every second of your coding life) like accidentally multiplying two completely different data types.

Nevertheless, during this course ... play with it :) 

{{< bamboo >}}
say 5 times "Hello!"
say true plus true
say "Netherlands" - "land"
{{< /bamboo >}}

Try combining different data types in all sorts of ways and see what happens. 

Once you've had your fun, let's take the next step.