---
title: "What is HTML?"
weight: 2
type: "article"
codemirror: true
---

HTML means **H**yper**T**ext **M**arkup **L**anguage. Well, what does that mean?

It's a _markup language_, not a _coding language_. That means it structures content you give it, but doesn't add "logic" or "style". 

It tells the computer that this piece of text is a "paragraph", while this other piece of text should be a "heading". It doesn't do calculations or interactivity.

This is where all content starts. Adding _structure_ and _meaning_ to all elements inside. If the computer has _no clue_ what your headings are, how can you style them to be bigger? If the computer has _no clue_ what your buttons are, how can it make them clickable?

If you were to read inside a file created in Microsoft Word, you'd see the same thing: all parts of your document are marked as one thing or another. Heck, ebooks are _literally_ websites! They use HTML to mark headings, paragraphs, images, links, etcetera. 

{{% remark %}}
Since a few years ago, all my published novels are built as websites. This allows me to easily edit them and view them in the browser, but exporting to "ebook" literally means ... just bundling the website into a `.zip` file.
{{% /remark %}}

As such, the language is extremely straightforward and small. It doesn't do anything by itself, it just helps transform your content into something with structure. Within a few hours, you have learned 99% of the HTML you're ever going to use.

## How do I write it?

All examples on this website are _interactive_. This means you can simply pick an example, change it, and see what happens. You don't need anything else. Check it out below!

{{< playful-code lang="html" >}}
<h1>This is a heading!</h1>
<p>Wow, a paragraph. See if you can change it.</p>
{{< /playful-code >}}

Most browsers do add some default styling, such as making headings bigger. I've added a similar thing to my examples on purpose. Without that, it's hard to see if your HTML is working correctly (because everything looks the same).

Once you move towards building your own website, though, you don't want to do that through my tiny code examples :p Instead, you need a **text editor** of some sort.

* I've used Sublime Text in the past
* I use Visual Studio Code now

It really doesn't matter. Search for "HTML editor" or "code editor with support for HTML" and pick the one you like the most.

When you code HTML, save the file with the extension `.html`

## How do I view it?

Simply open the HTML file in your browser! You can ...

* Right-click > Open with > your browser
* Sometimes this is the default, so you can just double-click
* You can _drag_ the actual file onto the tab bar of your browser
* You can copy the path to the file and paste it in the URL bar

A website is nothing more than a bunch of these files on a server.

{{% remark %}}
And a server is just a computer. With no screen, which is always on, and which accepts connections from all over the world. Your personal computer _could_ be a server, if you simply configured it to work that way. But by default, personal computers block anybody who tries to connect with them, and should not be on 24/7.
{{% /remark %}}

As stated, you can write the website in a different framework first. But in the end it will be exported to HTML (and the other web languages). There's no exception. In fact, if a browser receives an "empty file", it will add a basic HTML structure _by default_.

{{% example %}}
All my websites are created in something called Hugo. It allows me to do fancy stuff very easily, such as automatically adding that interactive code editor to any article that needs it. But when I'm done with my changes, I _export_ my website. Hugo turns it into a huge folder with `.html` files, and I simply drag-and-drop that folder onto my server.
{{% /example %}}

## About "HTML5"

You might often encounter the term "HTML5". As you might expect, it refers to the fifth version of the language. When I was younger, this was a _big deal_. Browsers were getting even more powerful! HTML was getting all these extra features!

Once we reached this point, however, people decided that versioning was a bad idea. We should just continually upgrade HTML and keep improving it. (The same thing happened to both CSS and Javascript. Even people who work in these languages every day, wouldn't be able to tell you what "version" they're at. It's just one language that's constantly evolving and changing.)

So, for practical purposes, just remember that "HTML5" means "the current version of HTML" at all times.

The downside of this system, is that support between browsers varies. Whenever in doubt about using something, check which browsers actually _support_ it with [Can I Use](https://caniuse.com).