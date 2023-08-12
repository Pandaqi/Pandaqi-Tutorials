---
title: "Figures"
weight: 15
type: "article"
codemirror: true
---

The next few chapters will all explain essential elements for displaying media (images, audio, video, ...). Though not required---nothing is "required" in HTML---it's recommended to nest all such elements inside a `<figure>` element.

If you've ever written a formal document (for school, university, business), you know what a figure is. It's a ...

* Self-contained piece of content
* To which other content can refer
* And which can move around (it doesn't break the document if it's not in a specific location)

It's similar to the division between `<head>` and `<body>`, which started this whole course. A figure is like the head: it provides _metadata_ about its content. 

* Perhaps the content is an _image_, then the figure can provide a _caption_ for it.
* Perhaps the content is a piece of code. You want to refer to that code at a later point, so you wrap it inside a figure, and add an _anchor_ inside (remember, from last chapter?).

Providing such data through attributes, or less specific tags, would both be harder and ruin your semantics.

A figure is _not_ needed if the content doesn't fulfill any of the rules above. 

{{% example %}}
Some of my websites have a big header image at the top of every page. This isn't a figure, as nothing refers to that content and it's not moving around. So that is a simple image and nothing more.
{{% /example %}}

## Using a figure

It's a very simple element. Use `<figure>` to create on, use `<figcaption>` inside for the caption.

{{< playful-code lang="html" >}}
<figure>
    <img src="panda_image.png">
    <figcaption>An icon of a panda, the old Pandaqi logo.</figcaption>
</figure>
{{< /playful-code >}}

Just like before, this course goes from the biggest element to the smallest. That's why I'm telling you about figures now. In the coming chapters, I'll introduce all sorts of elements that go _inside_ of it. Now that you already know it exists, you can start building good habits immediately.

{{< playful-code lang="html" >}}
<figure>
    <pre>
    function executeCode()
    {
        console.log("Doing stuff!");
    }
    </pre>
    <figcaption>A highly advanced algorithm written in JavaScript.</figcaption>
</figure>
{{< /playful-code >}}