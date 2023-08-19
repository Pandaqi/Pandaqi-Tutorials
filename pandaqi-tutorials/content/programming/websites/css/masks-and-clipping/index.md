---
title: "Masks & Clipping"
weight: 14
type: "article"
codemirror: true
---

A few chapters ago, I explained "the box model" and ways to change its dimensions. This is extremely useful ... but it still looks like a **box**. With just those tools, your CSS layout will always look like a bunch of perfect rectangles. This often isn't enough to achieve your desired look.

So, is there a way to _change_ the shape of the box? To turn it into a circle, or a hexagon, or _anything_ our design desires?

Yes, there is!

## Clip-Path

The `clip-path` property allows you to specify a _shape_ or _path_. Anything inside the shape is rendered; anything outside it is hidden.

There are a few built-in shapes:

* `circle(radius)`
* `ellipse(radiusX radiusY at centerX centerY)`
* `polygon(x1 y1, x2 y2, ...)`
* `inset(width, height)`

The last one is a rectangle, but phrased in a weird way. "Inset" means that it moves the edges of the original box _inward_ by the specified amount. (So `inset(0 0)` is the original rectangle, while `inset(100px 100px)` is a much smaller one.)

If you want something more advanced, you can input any shape by giving its path. (A set of points and lines that creates a polygon.) Feel free to ignore this if you have no idea what "SVG" is.

* `path("an SVG path")`
* `url(path.to.SVG#shape)`

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  clip-path: circle(100px);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Try the different values in the example and see what happens!

{{% remark %}}
There used to be a `clip` property as well. But it only supported _rectangles_ and has since been deprecated, which means it will be removed at some point from all browsers.
{{% /remark %}}

## More Clipping

We can also "clip" things the other way around. The original box stays the same, but we change how large we make the objects inside. (And anything that _overflows_ is clipped or hidden automatically, as we saw before.)

This only applies to something called "replaced elements", which you can remember as "external media" (such as images or video). These elements are loaded from outside the HTML document and have their own intrinsic size ( = the width and height of the image).

### Object-fit

The `object-fit` property basically tells CSS how to deal with the original size of the image (in relation to the box in which it's placed).

It takes these values:

* `fill`: the image resizes to fill the given space. It doesn't care if it squishes or stretches. (This is default.)
* `contain`: the image maintains aspect ratio, but is scaled such that it's fully _contained_. (It fits completely.)
* `cover`: the image maintains aspect ratio, but is scaled such that it fully _covers_ the whole available area.
* `none`: the image isn't resized at all.
* `scale-down`: the image is resized to whatever is smaller, `none` or `contain`.

In the example below, try the different values. Also try _removing_ `object-fit` entirely to see the horrendous result.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<img src="/tutorials/programming/websites/css/masks-and-clipping/panda_image.png">
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
img {
  width: 80px;
  height: 150px;
  background-color: #AAAAAA;
  object-fit: cover; 
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

These values are universal. **Whenever a property sets a _size_, you can supply these values.**

### Object-Position

Furthermore, use `object-position: posX posY` if you want to change the image's _location_. These can be numbers, but it ...

* Also allows setting _one_ number, which will be used for _both_ `posX` and `posY`
* Supports three named values: `left`, `center`, `right`

Again, these values are universal. **Whenever a property is used for setting both an X and Y value, you can supply these values**.

Try these variants in the example below!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<img src="/tutorials/programming/websites/css/masks-and-clipping/panda_image.png">
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
img {
  width: 80px;
  height: 150px;
  background-color: #AAAAAA;
  object-fit: cover; 
  object-position: 35px -35px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Mask

Okay, so `clip-path` allows clipping according to a _path_. A set of points and lines, connected perfectly.

What if we want something more detailed? Maybe we don't want a smaller rectangle, we want a rectangle with some part cut out, or some decoration at the bottom border.

In other words ... what if we want to clip according to an **image**?

Then use the `mask` properties.

A mask is an **image** with **transparency**. In other words, parts of the image should contain nothing. Those pixels? They are _hidden_ (or _masked_). Only the parts of the mask image that show something are used to render the box.

You can set all the properties at once with the `mask` property. When learning CSS, however, I think it's much more valuable to always set every individual property by hand. Otherwise you waste time memorizing the exact order and inputs---and whenever you read back old code, you have to look up (or think hard about) what every part meant.

Set each property explicitly, and your CSS literally _tells you_ what it does, which is much better for beginners.

* `mask-image`: the URL to the mask image.
* `mask-position`: where to place the mask within the element. (_This is a position, so you can supply the same values as explained at `object-position`!_)
* `mask-size`: the size of the mask image. (_This is a size, so you can supply the same values as explained at `object-fit`!_)
* `mask-repeat`: if the box is bigger than the mask image, whether to _repeat_ it or not to fill all space (x and y direction). Default is `repeat`, the alternative is `no-repeat`.

Unfortunately, here we get our first example of a property with different support in different browsers. Whenever this is the case, browsers will add their own "prefix": an extra bit _before_ the property name. In this case, you also need `-webkit-` before each property if you want support everywhere.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  mask-image: url(/tutorials/programming/websites/css/masks-and-clipping/panda_image.png);
  -webkit-mask-image: url(/tutorials/programming/websites/css/masks-and-clipping/panda_image.png);
  mask-size: contain;
  -webkit-mask-size: contain;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Notice how the text is masked by the Pandaqi image. By default, it repeats. I set it to `contain`, so the whole image is used. Try adding other properties or changing the values and see what happens.

{{% example %}}
I heavily rely on masking in my Pandaqi websites. They all have a shared "style", mostly recognizable through buttons that look a bit wonky ("not-exactly-perfect rectangles") and rectangles with wavy borders. This is all accomplished by a simple mask applied to these elements.
{{% /example %}}