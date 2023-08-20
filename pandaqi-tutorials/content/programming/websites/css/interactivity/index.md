---
title: "Interactivity"
weight: 37
type: "article"
codemirror: true
---

Honestly, this chapter contains the leftovers. Things that I deem important _enough_ to explain and teach, but didn't really belong anywhere else. Fortunately, I managed to have leftovers that are all related to the same category: interactivity!

## Media Pseudo-Classes

Pseudo-Classes are meant to select an element in a certain _state_. 

You know what can be in multiple states? Interactive media! (More specifically, _video_ and _audio_.)

* Use the `:playing` pseudo-element to select media that is playing. 
* Use the `:paused` pseudo-element to select media that is paused.

@TODO: EXAMPLE?

## Cursor

Maybe you noticed in some examples that a clickable element ... didn't display that familiar hand cursor. The one that signals to everyone "hey, you can click this thing!"

Fortunately, you can enable this yourself with the `cursor` property. The value you're looking for is `pointer`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Hover over me and see the cursor change.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  cursor: pointer;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

You can check the [full list of cursor values](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor). There's a lot. Use the right one in the right situation to make your website much more user friendly.

If you want to be really fancy, you can even set an image! This only works, however, if you add a **fallback**. (Otherwise, if the image doesn't load, there is NO cursor, which is a forbidden situation.)

## Pointer Events

Once your designs get really fancy, you might end up with situations where elements overlap each other. 

{{% example %}}
On this website you can click any image to see it at full size. This is done by adding a `<div>` that is positioned absolutely and the _full size_ of the screen. I simply hide it whenever you haven't clicked on an image.
{{% /example %}}

By default, however, the element that's _at the front_ (highest z-index) will capture any input. In other words, my big overlay element steals all the input, making it impossible to click on whatever is behind it.

To turn this off, set the `pointer-events` property to `none`. 

Whenever you can't click on something, this should be the first thing you check: is some other element stealing the input? The second thing is to check if the `z-index` isn't negative.

See the example below. Normally, the button changes style when you hover over it or click it. But now it doesn't respond at all!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<button>Try to click me---you can't!</button>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
button {
  pointer-events: none;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## User Select

Finally, another thing that can get in the way is **text selection**. Especially if you're making a web app or a web game, you don't want every click to accidentally select some text.

{{% remark %}}
Some people also use it as a way to prevent "copying" or "stealing" the content of the web page. This is, of course, rubbish. Firstly, never limit functionality or reduce user experience without a good reason. Secondly, there are ten thousand other ways to copy the content of a web page.
{{% /remark %}}

Set the `user-select` property to `none` to do so.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Try to select me---you can't!</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  user-select: none;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}