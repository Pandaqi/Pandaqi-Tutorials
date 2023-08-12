---
title: Introduction
overview: true
weight: 1
type: "article"
---

Since its inception some decades ago, the internet has grown into a huge (and complicated) place. To create even a basic website, you need to learn multiple "computer languages". 

The course you're reading right now, about HTML, is certainly where you should start. But learning happens best when you know where you're going and understand _why_ things are the way they are.

As such, let's quickly create an overview of those "languages" and how internet works (very roughly).

## Languages of the web

The main languages on the internet are ...

* **HTML**: adds structure to a piece of content. Like saying "this is a paragraph" or "this is a side note". (Without it, the computer would just see a long string of stuff it doesn't know how to use.)
* **CSS**: adds visual design to that content. Like saying "display this paragraph at a big font size and a nice font". (Without it, all web pages would be a white background with black text in default font.)
* **JavaScript**: adds interactivity to that content. Like saying "if the user clicks this button, play a nice animation and calculate this other thing". (Without it, many websites are simply impossible, and others less fun to use.)
* **Databases**: adds persistence or memory to the content. For example, if you allow users to create an _account_ on your website, you need a database to _store_ all that info. 

The web has two more major ways to create styling or graphics: Canvas and SVG. I have separate courses for each. Besides that, your graphics can obviously come from anywhere! You can create _images_ however you like and use them on your website.

Databases are a different beast entirely. There are _countless_ languages and systems for keeping a database, which is why there's no "one language" for it. 

That's why people often talk about "front-end" web developers and "back-end" web developers.

* "Front" means the public, visible side of the website (so HTML, CSS, JavaScript)
* "Back" means the hidden architecture underneath (so databases, server management, ...)

The distinction is important, as they are _very_ different skillsets.

## An important realization

HTML, CSS and JS (JavaScript) aren't just the "main" language of the web ... they are the _only_ languages.

Many frameworks exist that allow you to build websites in other languages. Maybe you've heard of them: Python, Ruby, Java, Rust. Classic programming languages which are also used for serious applications and video games. (For example, Ruby on Rails and Django for Python are popular frameworks for building _websites_.)

In fact, all major game engines support exporting your game to the web. You can code your game in whatever way you like, and then _export_ it so people can just play it in their browser.

The word "export" is important here. When you use such a system, the final output will always be HTML + CSS + JS. That final website has _no_ other language inside it, because there is no other language browsers understand.

My website courses teach you how to write the "web languages" directly. How they work, how to code them yourself, how to use them. I think this is always the best place to start and an invaluable skill. 

In the case of the internet, it's also the simplest place to start! HTML, CSS and JS are among the _easiest_ languages to learn.

But know that this isn't the only way. If you're familiar with a different language, or framework, or just want to use a game engine, go for it. This can feel simpler, because you're using _one_ language instead of _three_. Check if it's able to "export" your work to the web languages, and code away!

_So why don't we have ONE language for the web?_ A common rule among game developers is to "completely separate logic and graphics". There is no reason to mix them, and it only leads to pain and more pain down the road. The part of your code that calculates if your player should score a point, has _nothing_ to do with the part of your code that displays the background. So keep them separate. It's easier, it's cleaner, it prevents issues.

That's why I _like_ the fact that we have three languages. Each has its own, clear purpose. Need to design your website? You only need CSS. Need to structure the text of an article? You only need HTML.

## Final remark

I always make this remark at the start of a course.

> Learning happens through _doing_---making mistakes and learning from them---never reading or memorizing. 

See this guide as a starting point and help when you get stuck. But the only way to really learn how to build websites, and become very good at it, is by _building a lot of websites_. Start small, go bigger. Try new stuff with each project.

If you only read articles or books, you might think you're being productive, but you rarely are. The information doesn't stick and is forgotten the next day. You might memorize the exact _word_ to type, but don't really know _why_ or _when_.

So read a few chapters, build a webpage, don't try to memorize any of this.

Let's get this party started!