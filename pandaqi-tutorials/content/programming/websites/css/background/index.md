---
title: "Background"
weight: 17
type: "article"
codemirror: true
---

Over the years, the name `background` has become somewhat misleading. Yes, of course, these properties will help you set a _background_ (color or image) for your CSS element. 

But these days, it's used for _much more than that_. How so? Because we figured out that you can obviously set a pretty background for an element ... and then leave the element empty. Ta da! You've just created _anything you want_. 

As such, many elements on websites are actually designed using their `background` property, even though there isn't any text (or "foreground") inside those elements. I will give a very useful, practical example at the end of this chapter.

## Background Color

Use the `background-color` property, with any color as the value.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  background-color: #CCCCCC;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Of course, you can supply a color with an alpha channel (such as `rgba(255,255,255,0.5)`) to give an element a slightly transparent background. 

You also have the `opacity` property which might _seem_ to do the same. But I want to make an important distinction here! 

The background color, well, only applies to the background. If you make it slightly see-through, the content (such as text inside the element) will just stay opaque.

The `opacity` property, on the other hand, will turn the _whole_ element transparent. Whatever is inside, whatever border it has, however it looks like---all of it is made see-through by the same amount.

## Background Image

Instead of a solid color, you can also set an image. Like we saw with [Masks & Clipping](../masks-and-clipping/), this provides several properties to control the placement. The allowed values for 

* `background-image`: the image to display.
* `background-position`: position of the background image
* `background-size`: size of the background image
* `background-repeat`: whether it repeats or not (in x and y direction).

And just like the Masks chapter, these properties also take the same values. 

I did, however, leave out one bit of information in that chapter. (To prevent overwhelming the reader.)

The `-image` property accepts a URL to an image. But it also accepts a _gradient_, which is explained next chapter. And it accepts an SVG path, though this course doesn't explain what that is. In summary: there are many things that CSS can consider an "image", and you can provide them all to such a property.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  background-image: url(/tutorials/programming/websites/css/background/panda_image.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Try changing the amount of text in the paragraph and see what happens to the background image for this whole element!
{{% /remark %}}

## Combining what you know so far

Hopefully, you start to see the power of what you've learned so far.

You could ...

* Give an element a solid background color.
* Then use masks/clipping to cut the element into a certain shape.
* Tada! Now you have a shape in whatever color you desire, to use as you wish, with pure CSS.

In the example below, try changing the color or `div` dimensions. It all updates nicely and works just as well!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div></div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div {
  background-color: green;
  width: 100px;
  height: 100px;
  mask-image: url(/tutorials/programming/websites/css/background/panda_image.png);
  -webkit-mask-image: url(/tutorials/programming/websites/css/background/panda_image.png);
  mask-size: contain;
  -webkit-mask-size: contain;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Or you could ...

* Display a piece of text
* In an element with a certain background color
* With a slight, transparent pattern repeated across the background. (So it mostly takes over the color you already added through CSS)

You can change the background color anytime, and all this would look just as good. And this would simply _resize_ based on the text inside or the browser window, no problem. All with a few lines of CSS.

## CSS Sprites

This is a practical implementation of background images that many beginners miss: **CSS sprites**.

Here's the situation. 

Most websites have a lot of _icons_ or _images_ used repeatedly throughout the design. You _could_ add them all as separate image files, then use an HTML `<img>` element to display them everywhere.

But this isn't great.

* Lots of files means a cluttered filesystem _and_ more requests from the server.
* This is hardcoded: if you ever change anything, you need to update _all_ those images everywhere.
* For many purposes (not all) it's easier to control the size and look of _background images_ than regular image tags.

So, what do you do? You turn those icons into CSS sprites.

* Create _one_ image with all the icons lined up next to each other---the "spritesheet"
* Whenever you want to use an icon, load the spritesheet as the background image ...
* ... then modify the _position_ so it displays the correct one.

See the example below. It uses the spritesheet that powers my main [Pandaqi](https://pandaqi.com) website (the game studio). 

Try modifying the x-value of the `background-position` property to see different icons! You should move in increments of `64px` (as that's how large the icon is).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div></div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div {
  width: 64px;
  height: 64px;
  background-size: cover;
  background-position: -64px 0;
  background-image: url(/tutorials/programming/websites/css/background/pandaqi_icons.webp)
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

_Why is the x-position negative?_ Try to figure out what exactly we're doing here. We are _shifting_ the background image to show different icons. In other words, to show the second icon, we move the background image more to the _left_. To show the third icon, we'd need to move it even more to the left. As such, we're moving it in the _negative_ x direction, hence the minus sign.

With this simple trick, I can control my icons through CSS only (with just a few lines), and only need to load _one_ image on every page.

That's just one example of the power of backgrounds and how they're used on the modern web. I hope it gets your mind going about how you can use the simple tools of CSS to achieve great designs.