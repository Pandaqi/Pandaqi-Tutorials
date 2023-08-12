---
title: "Conclusion: what now?"
weight: 28
type: "article"
---

You've seen _all_ that HTML has to offer. (Barring some very specific and niche elements or ideas.) The language hasn't changed much over the past 10+ years. It doesn't need much more, nor can it lost much more. As such, once you have this basic grasp of HTML, you can safely move on and never look back.

As I mentioned at the start, however, simply reading about something doesn't teach much. You have to _do_ something with the knowledge, practice it, and use it in practical ways.

Most websites are _not_ built from scratch, by writing the HTML for each page, by hand. Fortunately not! Countless tools exist to simplify your life. They allow you to create a few _templates_ which are re-used across all websites. They allow you to write a little bit of code, which is then exported into a lot of (correct) HTML.

Some tools don't require you to know HTML, though you might need it for more advanced ideas.

Most tools _do_ require this knowledge of HTML, at least enough to use and debug the tool.

So don't think your time learning HTML is wasted. It is most certainly not. If you have any interest in web development, HTML is crucial knowledge, and now you have it.

Below I will list a few tools to build websites faster. Then I will end with a list of courses you should try next, which obviously starts with those languages CSS and JavaScript I've mentioned hundreds of times.

## Markdown

Most written content follows the same structure. You have headings, paragraphs, perhaps a few images or links, and that's it.

Writing a complete HTML page for each article would be annoying.

* It's slow and takes a lot of typing to get all the elements right.
* The articles are much harder to read, with all the HTML in the way.
* If you ever wanted to transform the articles to a different format, you'd need to waste even more time pulling out all the HTML you put in!

That's why Markdown was invented. (Or similar higher-level markup languages.)

All tutorials on this website, and probably 95% of the pages across all my websites, are written in Markdown.

It provides simple symbols to mark up text articles. Then, you can feed that into another tool, and it will quickly transform it into a correct HTML page. For example,

* `# Lala` means it is a `<h1>`
* `## Lala` means it is a `<h2>`
* Regular text automatically becomes paragraphs
* `[Pandaqi](https://pandaqi.com)` makes a link
* `![Some alt text](path/to/image.png)` adds an image

Markdown is so simple, that you've already learned it now. What if you need more? What if you need something else? 

Tada: you just use regular HTML! You've already learned everything you need to know. For basic articles, use fast and easy Markdown. If you need anything else, you now have the tools to write your own bit of HTML that does exactly what you want.

I'd highly recommend creating content in this format. In the end, these are just text files that are _very_ easy to read and digest. You can easily copy-paste them, reuse them in other tools down the road, or change them with any old text editor you can find.

{{% remark %}}
This comes from somebody who wrote his first tutorials, blog posts, and more in a variety of different formats. Think of Microsoft Word, a Wordpress Blog, and more. All of those mean that your content is embedded in their _system_. Which means it is EXCRUCIATINGLY hard to extract or re-use in a different way.
{{% /remark %}}

{{% remark %}}
In the future, I might create a (very) short course on how to use Markdown. But it's not a big priority, as there are many AWESOME websites that interactively teach you Markdown already.
{{% /remark %}}

## Static Site Generators

This is the next step. What do I use to transform that Markdown into this beautiful website you're seeing here? I use a _static site generator_.

There are many. Jekyll, Octopress, Pelican, Hugo, you can look them all up.

I use Hugo. It's---to me---by far the fastest, best maintained, and easiest to use.

* I create a few templates. These are HTML files with, for example, the header of the website, the footer, etcetera.
* Then I simply write my tutorials in Markdown. They are automatically placed inside the template for an "article". This means that all the HTML stuff gets out of my way. I only need to write it _once_, and it's used for _all pages_.
* I can also create "shortcodes". These are, again, HTML files that do one specific thing. For example, I have a shortcode for one code example on this website.
* Within my Markdown files, I can just type "hey, use that shortcode, and fill it with this example code" ... and it does all that for me.

As such, I only need to write HTML whenever I design a _new_ website and have to create all my templates and shortcodes. After that, I can focus 100% on the creation of content, knowing the system will export some beautiful HTML at the end.

At least, that's how "static" site generators work. You build the website on your PC. When you're ready, you _export_ it, and you get one folder filled with `.html` files. _That's_ the folder you upload to your server, whenever you want to update your website.

The "static" means that, once uploaded, your website doesn't _do_ anything anymore. 

The alternative is a website with a _database_. But that requires multiple other languages, which is why I'm not including that option in this conclusion.

## Where to go now?

I'd highly recommend following these courses, in this order.

* [CSS](../../css/): for styling your webpage. Add color, change font, position everything correctly, and so forth.
* [JavaScript](../../javascript): for interaction and execution on your webpage. Create games, web apps, animations, whatever.
* [PHP](../../php/): for a _dynamic_ (not static) website, which can change a page on the server before it is send to a user.
* [SQL](../../sql/): to be used in tandem with PHP, this language actually queries the database in useful ways.
* [Canvas](../../canvas/) and [SVG](../../svg/): these are used to dynamically create graphics on the web. For example, they are instrumental in the creation of web _games_.

In the future, I might focus more courses on that Hugo framework I explained, or similar frameworks. If I forgot to update this list, shoot me an email.

It might feel overwhelming that you need _multiple_ languages to build a modern, completely functional website. I get it. I want to remind you that the alternative would be that _everything_ (markup, styling, code, databases) was taught in ONE course, in the SAME language. Wouldn't that be even more overwhelming?

Building websites isn't easy. Like anything, it's hard enough to be worth learning and getting good at. But the fact that they split it into many smaller languages, actually makes it easier to digest. You can focus on one thing at a time. You can take a break after finishing a new course. 

You can already build 5 websites just using your HTML knowledge, and only start learning CSS once you're comfortable.

## Farewell

With that said, I bid thee farewell! 

That sounds dramatic. I guess I get overly attached to courses I'm writing, after spend _many hours_ on them :p

Anyway, that's it for HTML. I hope to see you at the CSS and JavaScript courses, or any other course here. If you've enjoyed this course, let me know. If you haven't enjoyed it, also let me know what you think could be improved.

As always, keep _building websites_ and _doing stuff_! That's how you learn. That's actually the fun part.

Keep learning,

Pandaqi