---
title: "Head I"
weight: 25
type: "article"
codemirror: true
---

At the start of this course, twenty chapters ago, I introduced the `<head>` and the `<body>`. Everything after that only handled elements for the _body_. Those are most prevalent, most important, and honestly, most fun. 

Because now we're going to talk about the head. Everything you put here will _not_ be visible on the page. It's for information _about_ the page. It's for information used in all sorts of places: a title to show in the browser tab, something to tell search engines what your page is about, general hints about how devices should download or display your webpage.

This chapter does **not** list everything that can go in here. Most elements (or their attributes) are very, very specific (and very, very optional). Most web developers will never have heard of them, let alone used them. If you want to see that, check out the MDN Docs.

I only provide the essentials that you should probably use. Once you've seen them, you can forget all about the `<head>` again and go back to the fun stuff in the `<body>` ;)

## Title

The content of the `<title>` tag is displayed in the browser tab. (And any other place where a page might be saved or viewed, like bookmarks.)

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <title>My Awesome Website</title>
</head>
{{< /playful-code >}}

## Linking

The `<link>` element has many uses. I explain the two most important ones here, and another crucial one next chapter.

### Favicon

Firstly, use it to link a **favicon** with your page. (This is displayed next to the title in browser tabs. It should be the icon or logo of your website)

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <link rel="icon" type="image/png" href="/link/to/favicon/png">
</head>
{{< /playful-code >}}

The most common types are `.png` and `.ico`. Make sure to set the `type` attribute according to the filetype you chose. Others _might_ be supported, but that's inconsistent across browsers.

### Canonical URLs

Secondly, use it to set **canonical URLs**. What's that? Well, it can happen that the same webpage is available under multiple URLs.

For example, remember my chapter about [URLs](../urls/) and how they're resolved. I explained that browsers default to `index.html` when you write a URL pointing to a folder. In other words ...

* /some/url
* /some/url/
* /some/url/index.html

... are _all_ the same webpage.

Search Engines do not like this. They want you to mark one URL as _the_ one: the canonical URL. Add that information to all duplicate pages.

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <link rel="canonical" href="/the/canonical/url">
</head>
{{< /playful-code >}}

Yes, search engines _try_ to find the canonical url if they see duplicates. But they'll still penalize you for not setting this yourself, or maybe even refrain from indexing your page completely!

I can know. I once made a website, wondered why it barely had visitors for a few months, until I discovered that almost all pages were being "ignored" by Google. Why? Because there were multiple URLs pointing to the same page, and I hadn't set a canonical URL. There was literally nothing else to complain about, but still Google saw this as enough reason to make my website near unfindable.

_Why are search engines such bullies?_ First of all, because they can. They have huge power and basically decide, with their algorithms, how the internet works and which website lives or dies.

Secondly, because when a system has power, people will abuse it. For example, you can set a _description_ or _keywords_ about your page in the head element. In the early days, Google would look at that and consider it, maybe even display it.

Guess what? People started putting stuff in there that had nothing to do with their content, but was great for ranking up and getting more visitors.

For 10+ years, search engines have completely ignored this data. They analyze your webpage themselves and determine good keywords or descriptions on their own. All in an effort to prevent abuse, and to force you to write _great, unique content_.

## Base

The `<base>` tag sets the default location used for resolving URLs on your page. If you really _need_ it, that's probably a sign you're doing something complicated and unnecessary. A good folder structure for your website will make most URLs easy and short.

But there are certainly use cases. For example: the code examples in this course! When I execute the code you type, I do so in a boxed-off, safe environment. (To make sure it only executes what you wrote, and nothing else. No styling from my website, no other scripts, nothing.)

That also means, though, that the environment defaults URLs to the root level. That's wrong. And I don't want to type _really long absolute URLs_ in the examples. 

So I add a base element to make sure it starts looking for images/media in the same folder as the tutorial itself.

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <base href="/tutorials/programming/websites/html/head-i/">
</head>
{{< /playful-code >}}

## The Meta Element

All other (essential) head data comes from the `<meta>` element, short for, unsurprisingly, _metadata_.

I'll give them all at once, as there's not much to them.

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Pandaqi">
    &nbsp;
    <!-- These are the old description/keywords tags mentioned above -->
    <meta name="description" content="Free playful tutorials for everyone.">
    <meta name="keywords" content="Pandaqi, tutorials, free, programming, html">
</head>
{{< /playful-code >}}

The `charset` stands for character set. Maybe this is a surprise to you, but computers are _not_ magic :p They don't know, out of nowhere, what each symbol on your keyboard means. You have to _tell_ them. You must pick a specific character set that you used for creating the page, and tell the computer to read the page with that knowledge.

The most common set is `UTF-8`. It supports the most common symbol sets and languages, for both natural language as well as programming. 

I always set this, just to be sure. If a browser loads your page with the wrong character set, it probably produces a garbled mess that looks like your computer just crashed.

The `viewport` one is a piece of standard code that everybody includes on _all_ pages. It should just be standard behavior at this point, but it's not, so here we are. Without it, your page will have the wrong zoom/resolution on non-desktop screens. The font will be _tiny_ on smartphones. 

Because, remember, there was a time without smartphones, when the internet would only be visited using bulky computers.

## Conclusion

That's it for the essential tags in the head. Next chapter talks about another very important feature: linking external files, mostly to add that CSS and JS code I've been talking about.

I moved it into a new chapter to keep chapters short. But also because those elements can actually be placed _both_ in the head and the body. Let's continue!