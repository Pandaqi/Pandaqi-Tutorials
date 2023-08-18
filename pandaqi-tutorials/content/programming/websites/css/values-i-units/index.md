---
title: "Values I: Units"
weight: 6
type: "article"
codemirror: true
---

When in school, you probably had an angry physics teacher at one point. You wrote down the answer to the question: "2". They wrote back "2 _what_? Kilogram? Joules? Seconds? Don't forget your units!"

The same is true for CSS. Something that trips up newcomers is the fact that they can't just write `font-size: 10;`, with no unit. The browser doesn't know what to do! 10 _what_? Meters? Pixels? Elephants? 

And when CSS doesn't understand you, it just pretends the rule doesn't exist. It won't crash; it will just ignore it.

## Numerical Units

In other words: any numerical value in CSS needs to have a unit. This unit is pushed against the number, with no space in-between.

{{% remark %}}
Except for `0`, because zero is always zero, regardless of the unit! And a few other CSS properties that use numbers as an index or ratio, which needs no unit. I'll explain when we get there.
{{% /remark %}}

A huge part of design is about the _dimensions_ and _placement_ of things. Hence, most of your CSS will involve some number or length.

It provides several different **units** to express yourself.

### Absolute Units

These are always the same size, no matter their environment (the device used, the screen size, ...).

| Unit | Description |
| ---- | ----------- |
| `px` | One _pixel_. |
| `pt` | One _point_. Common in print media, which has a higher resolution. (So one point is bigger than one pixel.) |
| `in`<br/>`cm`<br/>`mm` | One _inch_, _centimeter_ or _millimeter_. Useful if page is supposed to be printed. |

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  font-size: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

This units are pretty useless on a web page. You want the page to be _responsive_! If you wanted the layout completely fixed, you would've just made an image.

If you intend to _print_ it, however, you really want these units. Because a paper has a fixed size and you want everything to be in exactly the right place.

{{% remark %}}
My latest published novels were all created as a _website_ first, then turned into PDF/EPUB. The CSS units above are crucial to setting the right page size and element dimensions for a consistent output.
{{% /remark %}}

### Relative Units

Instead, you want the relative units. These automatically scale based on the size of its (parent) element. Set a nice value once, and you're guaranteed that it works on other screens.

| Unit | Description |
| ---- | ----------- |
| `em` | One _em_ is equal to the _font size_ of this element. |
| `rem` | One _rem_ is equal to the _font size_ of the root element of the page. |
| `ex` | One _ex_ is equal to the _x-height_ of the font in this element. (Roughly speaking, it's equal to the _height_ of your letters, instead of the _width_.) |
| `%` | Hundred _percent_ means this property is identical to the property's value in its _parent_ element. (100% width means it has the same width as its parent.) |

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body { 
  font-size: 16px;
}
&nbsp;
p {
  font-size: 1.5em; /* so, in this case, 24px */
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

The common approach is to set a good _fixed_ font-size for your major elements (in `px`, yes). Then use _relative units_ for everything below that, so they automatically scale based on that. To adapt your whole layout, you merely need to change one or two font-size properties near the top.

### Viewport Units

The relative units all depend on its own (parent) element. But the thing that forces websites to be responsive is the fact that _screen size_ differs between devices! 

So, we also have a set of units that scale based on the size of the browser window (or "viewport").

| Unit | Description |
| ---- | ----------- |
| `vw` | Hundred _vw_ is equal to the viewport _width_. |
| `vh` | Hundred _vh_ is equal to the viewport _height_. |
| `vmin` | Hundred _vmin_ is equal to the viewport's smallest dimension. |
| `vmax` | Hundred _vmax_ is equal to the viewport's biggest dimension. |

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Try resizing your browser window (far enough to make this example resize as well) to see me change size!</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  font-size: 4vw;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Most websites rely heavily on _text_, which is why relative units are usually preferred. However, there are certainly situations in which you'd reach for viewport units. (Such as a layout that mostly relies on images or video, not text.)

### About sharpness

Even though you can define _any_ size in CSS, as precise as you want, this doesn't mean a device can display it. If you set something to `0.5px`, for example, the browser will just round it to the nearest pixel. (It will probably display `1` pixel, but it might be `0` in other situations.) 

It can't display half a pixel! A single pixel is the smallest possible unit of a screen.

Be aware of this.

* Pick values that land precisely on (or near) whole pixel values.
* Don't pick values that are smaller than a single pixel.
* If you find your design lacking sharpness (looking just a little blurry), opt for the absolute `px` unit to set something to a precise value.

## Color

The second huge part of any design is **color**. This is so important and versatile, however, that I dedicate the entirety of the _next_ chapter to it!

## URLs

The third common element of any design is the usage of images (or external media in general). To link these, use the syntax `url(/actual/url.png)`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here with an ugly background image, just to show it in practice.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  background-image: url(/tutorials/programming/websites/css/values-i-units/css_syntax.webp);
  background-size: contain;
  height: 100px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Other values

Any other values are usually _custom_ ones, only usable with one specific property. 

{{% example %}}
The `visibility` property can take the value `hidden`. No other property can use that value!
{{% /example %}}

You will learn the custom values as you learn the properties to which they belong. Usually though, as my example illustrates, these are _named_ in a very straightforward way. Most values can be understood just by reading them once.

Now, let's go to the next chapter and learn all about _color_!