---
title: "Strings"
weight: 9
type: "article"
bamboo: true
---

String transformations are more fun and specific than the ones for numbers. But they are also more varied, with a huge number of possible things you might want to do.

Why? Because a string isn't really just "one thing". It's a _collection_ of things, namely characters. The string `"Code"` is one value ... made from 4 values: `C`, `o`, `d`, `e`.

You can, therefore, transform a string in many ways. You might remove some characters, add some, capitalize it, and so forth.

That's why I think you should view strings in a completely different way. Their keywords, their transformations, they are all unique to _strings_.

This chapter doesn't cover all of them. You only need to know the most important ones. I've done a few examples about games, so let's do one about websites.

You want to create a website full of educational articles. (Hmm, wonder where I got _that_ idea for an example ... ) Moreover, you allow people to leave comments.

This means you're working with a lot of _text_. Let's see what kinds of problems arise.

## Long comments

You don't want people to break your page layout, or overwhelm your server, with _super long_ comments. You want to set a maximum number of characters. If a comment has more, it's refused.

> Get the number of characters in a string with `STRING's size`

{{% data-trans from="String" to="Number" %}}

Now try to implement this functionality. Think about input and output.

The input is a _string_: the user's comment. The output should be a bool. Refuse this comment? Yes or no.

You get something like,

{{< bamboo >}}
now someComment means "Here is my life story in a comment."
now maximum means 10
now refuseComment means false
if someComment's size above maximum
    now refuseComment means true
{{< /bamboo >}}

Here we have an opportunity to write the code in a _smarter_ way. Think about bools. Think about their power: you can turn any expression into a bool directly.

Which means ... we do not need the if-statement! We can directly save the conditional in a variable. Because it's just a bool---a value we can store.

{{< bamboo >}}
now someComment means "Here is my life story in a comment."
now maximum means 10
now refuseComment means (someComment's size above maximum)
{{< /bamboo >}}

That syntax with the possessive (`'s`) is new. It will become more important later in this course. Hopefully, it signals to you that `size` is a "property" of the string. It's something that the string _is_, like asking somebody their nationality or gender. Any string _possesses_ a certain size. Using this syntax, you request it.

{{% remark %}}
Other languages might use the word `length` for this. That's a good, descriptive word as well. I merely chose `size` because it is more consistent with the rest of my language.
{{% /remark %}}

## Misspelled

After writing fifty articles, you realize you've misspelled a word all that time. You groan. You _really_ don't want to go back in and change every---single---instance of that word!

Coding to the rescue! You write a little script. It gets the article content as a string, then you modify it however you like, then it puts the new article back.

You wrote "led", but the correct past-tense of leading is simply "lead". 

How would you write this code? This is such a common operation that most languages have a built-in syntax for it.

> Replace a string with another using: `replace STR1 with STR2 in STR`

{{% data-trans from="String" to="String" %}}

{{< bamboo >}}
now article means "Learning to code led to many opportunities ..."
now article means (replace "led" with "lead" in article)
say article
{{< /bamboo >}}

A common mistake is calling replace without storing the result. The butterfly flew away! The computer calculated something ... but you forgot to store it somewhere.

{{% remark %}}
Funnily enough, as I wrote this section, my doubt grew about whether it was actually "misspelled" or "misspelt". Turns out both are deemed correct. Though spelling it with a single "-s" is surely a mistake.
{{% /remark %}}

## Capitalize

You get feedback from your readers. They say that the "keywords" from your articles---the most important words to remember---are often missed. They need to stand out more.

You get an idea: make all those keywords UPPERCASE!

As usual, you don't want to sift through _all_ articles and change it by hand. You use code.

> Make a string uppercase with `uppercase STR`

> Make a string uppercase with `lowercase STR`

{{% data-trans from="String" to="String" %}}

Take a few breaths, then remember our steps for data transformation.

You have a problem: keywords need to be uppercase. How are you gonna solve it? 

* Input = an article and a keyword to change
* Change = make the keyword uppercase
* Output = the new article with the new keyword

Turn this into code to get ...

{{< bamboo >}}
now article means "Today we will talk about strings ..."
now word means "strings"
now wordUpper means (uppercase word)
now article means (replace word with wordUpper in article)
say article
{{< /bamboo >}}

As you see, the examples are slowly getting longer. We're nearing the edge into "advanced" territory. That's why this chapter will soon stop, before it becomes too complex 😉

{{% remark %}}
This is another "convenience function". All languages have this. Because you need it more often than you'd think. And coding it yourself is way more work than you'd think.
{{% /remark %}}

## Conversion

You try to set the _date_ of an article ... but it keeps changing! You just _can't_ set the date to June 1st: `01-06`. The computer keeps saving it as `1-6` instead.

Dumbfounded, you investigate what happens. Then you realize what happens. 

The computer removes that `0` before the numbers. Because to a computer, a number cannot start with a `0`. It's useless, so it's just removed. (Similar to trailing zeroes: `1.00000` is the same as `1`.)

How do you _keep_ that zero? You convert the numbers to strings first! Use `string` for that.

{{% data-trans from="Value" to="String" %}}

{{< bamboo >}}
now day means string 01
now month means string 06
say day plus "-" plus month
{{< /bamboo >}}

## Exercise

You also like _streaming_ yourself, giving live presentations about your amazing articles. But not everybody in your _chat_ is equally ... nice.

Write some code to check for a few bad words. You can pick them yourself.

* You remove the bad words.
* You tell the user they are banned.

{{% data-trans from="String & String" to="Bool & Output" %}}

Good luck!

{{< bamboo >}}
{{< /bamboo >}}

Below is my solution.

{{< bamboo folded="true" >}}
now badWord means "stupid"
now chatMsg means "You're stupid!"
&nbsp;
now originalSize means chatMsg's size
now newMsg means (replace badWord with "X" in chatMsg)
now newSize means newMsg's size
&nbsp;
now badWordUsed means (newSize below originalSize)
if badWordUsed
    say "You are banned!"
&nbsp;
say newMsg
{{< /bamboo >}}

Notice how I detect if the word was used. It's another trick, which you can find if you think a little longer about your data. If the word was replaced, what happened to the size of the string? It became shorter! Because an empty string (`""`) is certainly fewer characters than `stupid`.

So we know a bad word was used if the new string is shorter than the old one.

## Conclusion

Now you can also manipulate strings! 

* Convert bools or numbers to them
* Check their size ( = length)
* Replace parts with other parts. (Or cut them out entirely by replacing with an empty string.)
* Capitalize them (or not)

Of course, you haven't seen everything. In fact, I've left out a huge part of working with strings: the fact that they're lists of symbols. Once we get there, for example, you will learn a simple function that does what we did in the exercise. (Find if a string exists inside another string.)

But it's too soon to discuss that. That will be easy to understand once you've actually seen "lists".

Next chapter is a short one about tools to help you code. And the last few computer quirks to know. After that, we start with a whole new area of coding magic: loops.