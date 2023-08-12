---
title: "Lists"
weight: 8
type: "article"
codemirror: true
---

Most people think of lists as a _visual_ thing. They think about bullet points in a PowerPoint presentation, or a grocery list with an arrow in front of each item.

Yes, their visual representation is a large part of their importance. But this is a course about HTML, so I'm mainly interested in their _meaning_.

What _is_ a list?

> A list represents a group of similar items that belong to the same category

You guessed it: _any time_ you want to list multiple pieces of content that belong together, use a list. (You can change the visuals later, to make it look like ... not-a-list, if you want.)

To test if something needs to be list, try to "introduce" the content. If you can write one sentence (a question, a statement, a topic) and respond to it with all these items, they should be a list.

For example, an introduction could be "5 reasons to learn HTML". Those 5 reasons are all an answer to the same question, so they should be a _list_.

If you look at the source code of well-programmed websites, you'll see that many elements are a list. Even if they don't _look_ like one. The most common application is **navigation**. The menus at the top of a website are usually a _list_ in HTML. Because all the links belong together and perform the same function: "how do I navigate to all parts of this website?"

## Three types of lists

There are three types of lists, each with their own tag(s).

* Unordered
* Ordered
* Named (or Labeled)

{{% remark %}}
See what I did there? I introduced something, "the three types of lists", and then gave the answer with a _list_ ;)
{{% /remark %}}

All of them need two steps.

* A tag to indicate "hey, here comes a list"
* A tag for each individual _item_ inside the list

## Unordered

This groups items without _order_ or _hierarchy_. Each list item is equally important. The lists above (in this chapter) are unordered, with their default visual being a _bullet_ (or _disc_) in front of each item.

To create this list, use the `<ul>` ( = unordered list) tag. For each individual item, use `<li>` ( = list item).

Try adding or removing elements from the example below.

{{< playful-code >}}
<ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
</ul>
{{< /playful-code >}}

## Ordered

As expected, this is for elements with a clear order. For example, a "top 10 most streamed songs". Each song has a rank, so it gets a _number_ in front.

To create such a list, use `<ol>` ( = ordered list). For each individual item, you still use `<li>`.

{{< playful-code >}}
<ol>
    <li>Never Gonna Give You Up by Rick Astley</li>
    <li>Africa by Toto</li>
    <li>Bohemian Rhapsody by Queen</li>
</ol>
{{< /playful-code >}}

There is a way to change what appears in front of list items, or to start from a different number. However, that's a _visual_ thing! So I'm not even going to explain it, because HTML should only add meaning. If you want that, do it through CSS.

## Named

In HTML, this is called a description list. I think this is a terrible name, which is why I call it a _labeled_ or _named_ list. Using it for description is only _one_ use case out of many.

The lists above are for lists with _no_ relation, or lists with a _numerical_ order. This list is for the third type of relationship: items alternate between a _name_ or _label_, and the content that belongs to it.

It's comparable to the _head_ and _body_. Each item has some content, and a label that says something _about_ that content.

To start one, use `<dl>` ( = description list). Labels use the tag `<dt>` ( = description term), content uses the tag `<dd>` ( = description ... description?)

{{< playful-code lang="html" >}}
<dl>
    <dt>Pandaqi Tutorials</dt>
    <dd>A website with free, playful tutorials about almost anything.</dd>
    <dt>Pandaqi Blog</dt>
    <dd>A blog where I talk about the process of creating all these projects (and updates).</dd>
    <dt>Pandaqi</dt>
    <dd>My game studio website, filled with boardgames and videogames, both free and paid.</dd>
</dl>
{{< /playful-code >}}

This tag is rare. If it fits your content, it's great. But most of the time, you're better off adding elements _inside_ a regular `<li>` tag. It provides a little more flexibility when adding the visuals later.

## Nesting

As with everything in HTML, lists can be nested. It's easy to make a silly mistake here, however. (Which I---erm---certainly didn't do repeatedly, what are you talking about?)

Remember the rule about nesting. The inner element must be _inside_ the outer element, before it's closing tag.

As such, to nest a list, add another list _inside_ the `<li>` tag.

{{< playful-code lang="html" >}}
<p>Here are 2 reasons why pandas are cute.</p>
<ul>
    <li>They are soft. Which is great, because ...
        <ul>
            <li>They are huggable.</li>
            <li>They can fall from trees without hurting themselves.</li>
        </ul>
    </li>
    <li>Their name even sounds funny.</li>
</ul>
{{< /playful-code >}}

## Navigation

Navigation is a very common element within any document. (Webpages, books, papers, ...)

As expected, it has its own tag: `<nav>`. Within, add a list, where each item is one possible page to which you can navigate.

{{% example %}}
If you've ever read an ebook with a Table of Contents, this is certainly how they did it. A navigation tag, with nested lists inside, probably ordered.
{{% /example %}}

This structure is also well understood by search engines and screen readers. If you do it like this, they will understand the content of your web page much better. (Google might even display extra snippets to other pages when people search for your website!)

There are situations in which your navigation is just a single link, maybe two. Even then, wrap it in a list, and a `<nav>` tag. It's still a _block_ on the webpage with one or more pieces of content meant to _navigate_.

This is not the same as [links](https://pandaqi.com/tutorials). Those are inline elements and have their own tag, which you'll learn soon. (I'm delaying them on purpose, as you need to understand _attributes_ to use them. I, however, didn't want to overwhelm you by explaining new ideas too soon.)

{{< playful-code lang="html" >}}
<nav>
    <ul>
        <li>Homepage</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
        <li>Forum</li>
    </ul>
</nav>
{{< /playful-code >}}
