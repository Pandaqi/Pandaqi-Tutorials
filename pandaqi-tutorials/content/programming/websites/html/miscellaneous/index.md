---
title: "Miscellaneous"
weight: 28
type: "article"
codemirror: true
---

I wanted to talk about a few more elements that didn't fit anywhere else. (And which were too simple or short to get their own dedicated chapter.) That's why we end the course on this "miscellaneous" chapter that explains a few different, unrelated ideas.

## Iframes

In the [Head I](../head-i/) chapter, I explained how the code examples in this course needed a "boxed-off, different environment". What did I use to accomplish that? You guessed it: the `<iframe>` element.

It allows loading a different (web)page inside another. Like a framed painting that you hang on the wall, showing an entirely different landscape. 

In a sense, it allows combining two different HTML documents into one. In my case, it loads the HTML generated from the example box.

Use the `src` attribute to point towards the other page you want to load. The text inside this element is displayed if, for some reason, it can't load the frame.

{{< playful-code lang="html" >}}
<iframe src="https://pandaqi.com/tutorials">
    Sorry, can't display this iframe!
</iframe>
{{< /playful-code >}}

{{% remark %}}
The word stands for **inline frame**. Because, in older versions of HTML, there used to be a `<frame>` element that did something similar but different. That element has long since been deprecated, though.
{{% /remark %}}

In general, only use this element if you _really_ have to. Because of security concerns, browsers have severely restricted what this frame can do. If you need to combine different HTML sources, for some reason, it's better to do it at a lower level. To pick a system that _actually_ combines the pages into one HTML source, instead of using an iframe. 

Next chapter is the final one and concludes this course. In it, I give some hints about where to go now, and how to create more advanced websites.

## Creating your own tags

It's possible to invent your own elements! Yay! Isn't that cool?

If you're marking up a web page, and you just cannot find an existing element that describes the meaning of your content (very well), invent your own element.

There are, however, some rules.

* The element name must have a hyphen (`-`) in it. This is easy if you have multiple words (e.g. `book-shelf`). Otherwise, it's recommended to start this custom element with `x-` (e.g. `x-something`).
* It can't start with `data-`. As you might remember, that is reserved for custom _attributes_.
* All custom elements are _inline_ by default (not block level)

{{< playful-code lang="html" >}}
<p>Just a regular ... <x-whatever>Hey, my own element! Isn't that cool?</x-whatever> ... paragraph.</p>
{{< /playful-code >}}

## Advanced Tags

### Dialog

The `<dialog>` tag is for pop-up dialogs, modals or subwindows. Yes, we all hate the unwanted pop-up ads. But there are real use cases for pop-up elements. They allow the interface to be clean and minimal at first, but when a user clicks something (or hovers over something) more information is revealed.

{{< playful-code lang="html" >}}
<p onclick="document.getElementById('dialog-box').style.display='block';">Click on me to get more explanation</p>
<dialog id="dialog-box" style="display:none;">
    More explanation inside this dialog!
</dialog>
{{< /playful-code >}}

### Text Direction

Remember how you can set the reading direction of the text with the `dir` attribute? Well, there might be cases in which you want to make an exception to the general flow of the document. For that, we have ...

* `<bdo>` = bi-directional override, to override the text direction only for its content
* `<bdi>` = bi-directional isolation, to isolate the text inside from changes to text direction around it

{{< playful-code lang="html" >}}
<div dir="ltr">
    <p>This text should be read left to right.</p>
    <bdo dir="rtl">
        But this one right to left, except for <bdi>this part</bdi>.
    </bdo>
</div>
{{< /playful-code >}}

### Ruby

A Ruby annotation is a small piece of text to explain the pronunciation or meaning of the main text, often used for Japanese or Chinese characters. Use the `<ruby>` element. Inside, use `<rt>` for the explanation. Optionally, use `<rp>` to indicate which text a browser should show if it doesn't _support_ Ruby annotation.

I have never used this and do not speak Japanese. Therefore, I would urge you to seek a different source for stronger examples and explanation.

### Text formatting

Finally, three more inline elements for specific purposes.

* `<meter>` = takes the same attributes as number inputs, and shows a _range_
* `<progress>` = the same thing, but shows a progress bar
* `<time>` = for displaying time. Takes a `datetime` attribute with a properly formatted time

These are _not_ void elements. That's the whole point: you can put any text inside, but use the element (and attributes) to provide the correct numbers (or date) for the browser to parse.

{{< playful-code lang="html" >}}
<p>What are you doing on <time datetime="2023-02-14 12:00">Valentines day</time>?</p>
<p>I'm watching a movie with my partner. We've watched <progress id="movie" value="50" min="0" max="100">50%</progress> so far.</p>
{{< /playful-code >}}