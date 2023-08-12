---
title: "Paragraphs & Headings"
weight: 7
type: "article"
codemirror: true
---

Most of the internet consists of _text_. Even primarily image or video based websites, like YouTube, still have loads of text. (Video title and description, comments, etcetera.)

Over years of human evolution, we've decided that the best way to structure that information is through _headings_ and _paragraphs_. It's a simple result of how a _hierarchy_ works.

* The headings indicate when new sections start.
* Different headings (such as subheadings) indicate relationships. What's most important? What's least important?
* Paragraphs cut content into bite-sized chunks, which are easier to digest.

Using this structure, information becomes much easier to understand for humans. We know where to start and where to go. We know what's important. If we're only looking for one bit of info---for example, we forgot which tag to use for something---we can immediately jump to that section only. All thanks to good hierarchy!

You've already seen glimpses of how to do this. Let's officially go over it one last time.

{{% example %}}
Like most kids, I started my writing career ignoring structure altogether. I wrote these stories that were just _one paragraph_ for _four pages_. Wall of text, no whitespace. I rarely added headings. Unsurprisingly, when I asked others to read these stories, they just stopped after one page, telling me it was hopeless.

Years later, I presented these stories again, but rewritten with good _hierarchy_. Short paragraphs, clear headings, emphasis where needed. Suddenly, the exact same story was _read_ and _liked_ a lot.
{{% /example %}} 

## Headings

There are 6 headings available: `h1` up to and including `h6`.

I maintain these general rules.

* There should only be _one_ `<h1>`, for the absolute most important heading on the page. (If it's a blog post, for example, this will be the title of the post.)
* The further you go, the more you can have. (You're allowed to have a number of `<h2>` elements, an even higher number of `<h3>` elements, etcetera.)
* Nesting further than 3 levels deep (`<h4>` and beyond) is basically a no-go. If you need to do this, rethink the structure of your page. Usually, you can create a better framework that doesn't need that much nesting.

{{< playful-code lang="html" >}}
<h1>Biggest heading</h1>
<h2>Subheading</h2>
<h3>Subsubheading</h3>
<h4>Questionable</h4>
<h5>Very questionable</h5>
<h6>Barely a heading anymore</h6>
{{< /playful-code >}}

As you see, browsers automatically scale headings based on importance, and make them bold. In my opinion, this usually isn't enough: you surely want to style them with CSS later, to make them even bigger and more "special".

{{% example %}}
You can easily see the structure on this website. Each article has several headings, with a hexagon besides them. A smaller hexagon means a higher heading number. Every block of text is a paragraph. And the `<h1>` is reserved for the big title of the chapter at the top.
{{% /example %}}

## Paragraphs

This element is so common, that it's the easiest and shortest of them all: `<p>`.

{{< playful-code lang="html" >}}
<p>This is a paragraph. Bla bla, lorum ipsum, bla bla.</p>
<p>This is another paragraph. Bla bla again, abracadabra.</p>
{{< /playful-code >}}

Paragraphs automatically get empty space around them. If you don't want that, fix it with CSS later. Don't put everything in _one_ paragraph, or start adding line breaks left and right to make it look like you want.

Besides that, they are "clean", so to speak. Browsers usually won't change anything about them, and their font size will be a neutral, default setting.