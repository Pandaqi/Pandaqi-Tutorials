---
title: Where to go now?
weight: 23
type: "article"
bamboo: true
---

Well done! You've read and worked through the whole course. The hard part is over.

Why? Because any language you'll use in the future will have the things I mentioned. They might change the name, or the symbol, or some detail.

But they _all_ have these ideas and concepts. My recommendations and "good principles" hold true in all of them.

* You have the basic data types (boolean, number, string)
* You get functionality to transform that data (rounding, substrings, conditionals)
* You can save them in variables
* You can decide what to execute with if-statements
* You can repeat code with loops
* You can collect many values inside a bag (of some sort)
* And finally, you can put all that code inside a machine, which you can call any time you need that code

My course is just a scaffolding. It introduced you to the world of programming---"solving puzzles with code"---in a friendly way. Hopefully, you agree. No overwhelming syntax. No endless list of symbols to memorize or theory without practical examples.

If you understand most of this course, you'll understand most of _any_ coding project you tackle in the future.

Other programming languages have some things they do better (than others), some things they do worse. Pick the right one for the job. Barring some exceptions, no language is clearly superior to others. Mostly because they aren't that _different_ from one another.

## Other languages are less verbose

You _will_ notice how "real" programming languages use way fewer space/words than my Bamboo language. Instead of writing commands as full (English) sentences, they all use symbols. Now that you understand programming better, you are ready to switch to those symbols.

I'll give an example. Below is a simple program written in Bamboo and then another language.

{{< bamboo fbresult="false" fbvalue="false" fbkeyword="false" >}}
bag players holds
    "Santa Claus"
    "Harry Potter"
    "Devil"
    "Teddy Bear"
&nbsp;
bag powerups holds
    "Free Presents"
    "Magic"
    "Eternal Fire"
&nbsp;
now numPlayers means players's size
now numPowerups means powerups's size
repeat numPlayers times
    now i means (bamboo iterator)
    if i above (numPowerups minus 1)
        skip
    now player means players's i
    now powerup means powerups's i
    say player + " has powerup " + powerup
{{< /bamboo >}}

Here's the same thing in JavaScript. (One of many ways to write it.)

{{< highlight javascript >}}
const players = 
{
    "Santa Claus": { powerup: "Free Presents" },
    "Harry Potter": { powerup: "Magic" },
    "Devil": { powerup: "Eternal Fire" },
    "Teddy Bear": {}
}

for(const [name,data] of Object.entries(players))
{
    if(!data.powerup) { continue; }
    console.log(name + " has powerup " + data.powerup);
}
{{< /highlight >}}

All those symbols and extra syntax make it shorter and faster. And by now you _know_ the ideas they represent. 

* `const` means defining a _constant_ variable (a piece of data that will not change again)
* They just use `=` to assign a variable.
* The braces `{}` denote a bag or group of code. 
* The parentheses `()` are required here to interpret if-statements properly.
* `Object.entries` is the same as getting `bag's items` or `bag's values`.
* The `!` is short for `not`. 
* The keyword `continue` is our `skip`. 
* And `console.log` is our `say`

## Data transformations (as always)

Because in the end, it's all just **data transformations** :)

Whenever you have a new problem, think about

* The input you already have (or need)
* The specific output you want (data type, format, etcetera)

Knowing the start and end, programming is about finding the _change_ in between. The code that actually brings you from A to B.

The specific symbols you type? That's just the last 1% of programming. In fact, the best coding teachers I know will usually remove laptops from the classroom until you're already 4-8 weeks into the program. Because coding is **not** about computers or syntax. It's about logical thinking and problem solving.

## General recommendations

I've mentioned these throughout the course. Here they are, collected in one list.

* Prefer a **statically typed** language. You lose the ability to play "fast and loose" with your data types. But in return you completely _eliminate_ a whole area of bugs and errors for free. (Because the program stops you from accidentally writing code that uses the wrong data.)
* Prefer an **explicit** language. Many programming languages "market" themselves as being easy and accessible because they do a lot of things for you. That's all it is: marketing. Because you _really_ don't want this if you're serious about programming. You want a language that _you_ need to tell what to do, explicitly. Yes, it's more work for you and leads to slightly longer code. In return---again---you eliminate 99% of bugs that might appear.
* Pick a **free** toolchain. More on this below. You simply _do not_ need to pay anything to learn to code or produce professional software.
* Prefer **deep knowledge** (experience and problem solving) over **superficial knowledge** (the words and symbols to type in one specific language)

That last one is most important, so let's start with that.

## Get experience

Getting better at _problem solving_ (and data transformations) can only come from experience.

Make lots of projects. Make lots of mistakes. Spend a day tracking down one weird bug---it will feel like a waste of time, but you’ll learn hundreds of small lessons.

As you gain experience, you ...

* Learn your own pitfalls and (subjective) assumptions. So you can circumvent them and think more logically
* Learn the tiny details and quirks of computers.
* Create a database---in your head---of the many algorithms and approaches one can use to tackle a problem.

If you ask me to code a certain game mechanic for you, my head will immediately know ten ways to do it. Not because I'm smart---I am _not_---but because I've coded that thing ten times before. I simply remember what I did then. What worked and what didn't work.

Most programmers will tell you that they don't know much _syntax_ off the top of their head. They just Google the specific word they need. Instead, programmers are valuable and skillful because they know _how to solve problems_ off the top of their head.

If you jump to a new programming language (or new coding software) every week, you spend more time learning syntax than learning how to solve problems. Don't do that. Pick one thing, stick with it for a good while.

Learning programming languages is the same as learning regular languages. Your first language is hard. Your second language is slightly easier, but still tough. But once you know 2 or 3 languages? Any new language will be easy, because it's just a "slight variation" on the ones you already know.

## Specific recommendations

I've written a more in-depth course about [Programming Principles](../../programming-principles/). It uses my Bamboo language again and focuses exclusively on how to code _well_ and how to maintain large projects (without it becoming a mess).

This means, however, that it's probably too advanced right now. I recommend you ignore that course until you've created fifty projects of your own.

So, where _do_ you start?

* For web development, start with **JavaScript**
* For game development, I recommend the **Godot Engine**.
* For pure coding or software development, I recommend **Rust**
* For actually writing the code, I recommend **Visual Studio Code**

{{% remark %}}
Honorable mentions are some languages that clearly inspired my Bamboo language: **Python**, **Lua**, or **Go**. A honorable mention for text editor is **Sublime Text**.
{{% /remark %}}

### JavaScript is king

When in doubt, go with the first option. Why?

* You get JavaScript for free with a browser! You can visit any number of websites that allow you to write JavaScript and see the results immediately. 
* Almost all apps and software these days _are_ a website. (Perhaps packaged later as a mobile app.) 
* Similarly, you can create games with website code as well. (Look at the **Phaser** framework, which I use to power my games website.)
* The internet is huge and it's not getting smaller.
* JavaScript is quite beginner friendly and "loose" with what it allows you to do.
* Once you know JavaScript, you can smoothly transition to TypeScript. It's a strict version that forces you to use the right _data types_, similar to those "static languages" I mentioned.

The other options are more advanced, but will suit you in the long run. Godot is already amazing and only gets better. Rust is clearly the language of the future, even if it would take a new coder longer to grasp its basic ideas.

In any case, do **not** start with languages like C(++) or Java. They might be recommended a lot. Many universities have a "Programming 101" course (often required) that uses Java.

But the summary is: these languages are not _easier_ or _more useful_ than other languages, regardless of how you want to use them. I can accept a lot from a programming language ... and I hate Java with a passion. Just like everybody else with whom I studied. It used to be king---just like C---but time moves on and technologies innovate.

### Practice problem solving (most of all)

There are some _great_ websites that give you random challenges to solve. You can choose the language, the difficulty, the topic. I regularly try to practice a few of these problems, and still learn a _lot_ from it.

I'd recommend [CodeWars](https://www.codewars.com/). But there are more websites like it.

Websites like these allow you to spend all your energy improving your **problem solving**. They remove the boring or repetitive aspects of coding. They remove the complexity of one big project (like creating a whole website or game). You only get tiny puzzles to solve---no strings attached. And for every one you solve, your programming muscle strengthens.

### Be flexible and free

All my recommendations are free and open source. I highly recommend _never_ investing in a paid or closed source coding product. Why?

* It's not needed. The tools I mention above are widely regarded as the best of the best, and they're completely free in every way.
* You don't want a project you've worked on for years to become obsolete or crash because your paid product decided to change. And you can't do anything about it. (Or need to pay more to continue being allowed to code!)
* It's therefore, inherently, not future proof.
* It slows down your computer and workflow.

{{% example %}}
I've created almost all my professional work on a 10-year-old laptop. I tried some more "advanced" software first ... but it just installed things I didn't need or required an internet connection for everything. This slowed me _and_ my laptop down to a halt.
{{% /example %}}

## Conclusion

In general, pick a workflow that makes you **fast**. That's all you should care about. The biggest enemy of productivity or skill is _not_ the quality of your tool, your money, or how many programming languages you know. 

It's **motivation**. 

When in doubt, pick a language or software that you think is **fun**. One that boots quickly on your device. One that gets you out of bed in the morning because you _want_ to do more coding. 

As I said, all writing is rewriting. You'll never write "the perfect code" first try. You will never find "the perfect language" for you. So don't hold yourself back, don't doubt. 

Just _write a lot of code_ and _keep rewriting_ :)