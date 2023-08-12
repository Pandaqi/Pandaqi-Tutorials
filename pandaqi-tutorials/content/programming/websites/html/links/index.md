---
title: "Links"
weight: 14
type: "article"
codemirror: true
---

The internet isn't called the _world wide web_ for no reason. From the start, it was designed to be an _inter_ connected _network_ of servers. Links between different web pages were the first things supported. It's even hard to imagine an internet _without_ this common feature! Imagine websites ignoring each other's existence entirely. Imagine having to visit all websites by typing the full URL in the address bar :p 

You might expect a `<link>` tag now ... but that's not it. (It does exist, but has a different purpose.)

To _users_ of the internet, links are "the thing you click to go to another page". But they can do much more. A link can also refer to a _part_ of a page, maybe even the _same_ page. 

{{% example %}}
Longer blog articles usually get a Table of Contents at the top. It's made of links to sections on that same page! My table of contents is to the side, on wider screens only. Those links also use the technique I will teach you now.
{{% /example %}}

That's why, in HTML, they're called **anchors** instead. A link can go to a new page, no problem. But you can also add _anchors_ within the page, and jump to those specific points. The tag is, therefore, the `<a>` tag.

## Default Use: another page

The content of the anchor element is simply the text that you click. Where it should _go_, must be supplied through the `href` attribute.

{{< playful-code lang="html" >}}
Hey, here's a <a href="https://pandaqi.com">link to Pandaqi</a>!
{{< /playful-code >}}

The attribute `href` stands for _hyperlink reference_. Other tags with URL references will use the same attribute.

## Advanced Use: linking part of a page

This is a two-step process.

* First, give your target a (unique) `id`. (Whatever you want, though preferably something that succinctly describes this part of the page.)
* Second, add a clickable link that points to `#id`. (If the part is on the same page, this is enough, as it's a relative URL. If it's on another page, you need to add the URL to that other page _before_ the `#`.)

See the example below.

{{< playful-code lang="html" keepbase="true" >}}
<p>Welcome. Jump to <a href="#css">the section about CSS</a> immediately, if you want.</p>
<section id="html">
    <h2>About HTML</h2>
    <p>Wow, HTML, what a language, let me tell you about it.</p>
</section>
<section id="css">
    <h2>About CSS</h2>
    <p>Let me tell you about the wonderful world of CSS.</p>
</section>
{{< /playful-code >}}

For years, linking happened using the `name` attribute on another `a` element. However, people realized that ...

* `id` and `name` were doing the same thing, so let's simplify and only use the first
* allowing you to jump to _any_ element on the page was easier to use and more powerful

These days, the `name` attribute is (mostly) deprecated. It's only available on elements related to user input, and serves a different purpose there. (We'll talk about those at [Forms](../forms/) and subsequent chapters.)

## Target

The `target` attribute is named a bit confusingly, I must admit. When I started out, I swapped its meaning with `href`, thinking _this_ needed the URL!

But that's not what it does. The `target` attribute states _how_ it should visit the linked page. 

The default "context" of a page is its own tab. But you can add pages inside pages, and browsers can group tabs into groups, and that's how you get a whole list of different "contexts" in which a page can be opened. I show all options for completeness' sake.

* `_self` (default): visit it within the same tab
* `_blank`: visit it in a new tab (or a new window, depending on the browser)
* `_parent`: visits it in the parent context
* `_top`: visits it in the top-most context

{{< playful-code lang="html" >}}
<a href="pandaqi.com" target="_blank">This link</a> should open in a new context.
{{< /playful-code >}}

## Download

You can also tell the browser that it should _download_ whatever is at the URL, instead of visiting it. For that, use the `download="filename"` attribute. (You can minimize it and leave out the filename. It will generate a sensible filename for you instead.)

{{< playful-code lang="html" >}}
<a href="some/file/somewhere.pdf" download="my-amazing-ebook">This link</a> would download some PDF file, if it existed.
{{< /playful-code >}}

## Conclusion

I suggest creating a few quick web pages now, and linking them. Add `<a>` tags inside them that, when clicked, lead to another page. With your knowledge so far, you might even try creating a menu to navigate your website! (You know about the `<nav>` tag, lists, and links.)