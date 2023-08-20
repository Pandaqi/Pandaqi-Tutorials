---
title: "Text III"
weight: 36
type: "article"
codemirror: true
---

You're nearing the end of this course. This chapter just has some minor properties related to _text_. The next one has even more properties that only apply in very specific situations. And then, before you know, this course has reached its conclusion.

## Writing Mode

This whole course, I've explained how page flow is "horizontal first" (left to right), then "vertical" (adding scrollbars).

Well ... you can actually change that. The number of situations in which you want to is _slim_, but hey, you _can_.

The `writing-mode` property accepts four values.

* `horizontal-tb` = horizontal top to bottom (default)
* `horizontal-bt` = horizontal bottom to top
* `vertical-lr` = vertical left to right
* `vertical-rl` = vertical right to left.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  writing-mode: vertical-lr;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

The example shows a paragraph that starts at the _left_ and flows towards the _right_. The text sits on a vertical baseline, instead of a horizontal one.

## Text Overflow

In the chapter [Text II](../text-ii/), we already discussed many ways to break text and handle overflows.

There's another property to help with this: `text-overflow`. 

What's the difference? What's the advantage? It allows you to set a custom string to _show_ that there's more content, but it's cut off.

Values are:

* `clip`: default, overflowing text is just cut off
* `ellipsis`: an ellipsis (`...`) is added at the end
* `<string>`: a custom string is added at the end

Of course, for this to show up, the text actually needs to _overflow_. As such, this only works if you force the container to a certain size and forbid text from extending out of bounds.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Beware! At time of writing, the custom string isn't supported everywhere yet!
{{% /remark %}}

{{% remark %}}
Similarly, I found the new pseudo-classes `:spelling-error` and `:grammar-error`, which seemed useful to me. But they're not supported _anywhere_ as of yet.
{{% /remark %}}

## Text Transform

The `text-transform` property transforms the _case_ of text. The value ...

* `uppercase` makes the whole content uppercase
* `lowercase` makes the whole content lowercase

Again, this is nice for separating _content_ from _styling_. Perhaps you have _categories_ on your blog. Behind the scenes, you want these to be regular text ('Thoughts' and 'News'). But in the design, they might look better in all capitals. So you merely _visually_ transform it on the page, with this property.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This is a normal sentence written in the usual way, with many lowercase characters.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  text-transform: uppercase;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Text Shadow

Finally, the `text-shadow` property adds any number of shadows to text, in a comma-separated list.

The shadows have the syntax: `offsetX offsetY shadowBlur color`.

Yes, the same syntax as the `drop-shadow()` effect from the `filter` element.

_So why use this? Isn't the filter enough?_ Good question. Yes, using the `filter` element is often what you want.

It is however _more expensive_ (for the computer to calculate) as it wasn't made specifically for text. Additionally, this property allows setting multiple shadows more easily.

This allows you ... to create an **outline** around text.

The example below shows this. The outline is "faked" by adding a copy of the text to the left, right, top, and bottom. (Experiment! Try keeping just one shadow and increasing its size, see what happens.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This text is outlined.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  background-color: #212121;
}
&nbsp;
p {
  font-weight: bold;
  font-size: 26px;
  --col: #EEEEEE;
  text-shadow: -1px -1px 0 var(--col), 1px -1px 0 var(--col), -1px 1px 0 var(--col), 1px 1px 0 var(--col);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### To better outlines and beyond!

It is, however, imperfect. Outlines work better around _thick_ fonts and capital letters.

Fortunately, CSS has proposed a `text-stroke` property that would do this natively (and properly!) 

At time of writing, it requires a prefix `-webkit-text-stroke` and isn't supported everywhere. Nevertheless, it's close enough that I want to show it.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This text is outlined.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  background-color: #212121;
}
&nbsp;
p {
  font-weight: bold;
  font-size: 26px;
  -webkit-text-stroke: 1px #EEEEEE;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

When done well, outlines greatly increase readability of text, especially over images or busy backgrounds. When done poorly, however, they make text _unreadable_.