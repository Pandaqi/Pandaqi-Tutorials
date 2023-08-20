---
title: "Math Functions"
weight: 31
type: "article"
codemirror: true
---

Let me tell you a secret. Throughout this course, you've already seen that CSS has many _functions_. Any time a syntax involved parentheses (`()`), you were calling some built-in CSS function. 

For example, you might remember the chapter on gradients (`linear-gradient(...)`) or grids (`repeat(...)`). And maybe you already figured out that using variables (`var(...)`) is also a function!

A function is nothing more than something that requires _input_ (the numbers or values that you put in), executes some predictable action with it, then gives you the _output_ (the end result).

For example, the `linear-gradient()` function requires those "color stops" as input, then transforms them and outputs the actual _gradient_ image.

Functions can accept any input, so also the output of _another_ function. You can nest functions within functions as much as you want---though that's obviously not recommended for readability.

Anything remotely complex (both in programming and in the real world, actually) will be described by a _function_ of some sort. CSS is no different. If you want to achieve something complicated, chances are that there's some obscure function that will do exactly what you want. (If you spend some time crawling through the docs.)

This chapter, therefore, only explains the most common and useful **math functions**. Other functions are explained in the chapter where they belong (as you know now) or left behind.

_Why do I need math? I thought we were designing!_ These functions are mostly useful for **responsive design**. They allow you to easily adapt to different screen sizes or box dimensions, by _calculating_ values in a smart way. They also help implement fail-safes (or thresholds) against ugly situations you _never_ want to happen in your design.

{{% remark %}}
Though some of them are surely just fun additions to add spice to a creative design, instead of a crucial CSS feature.
{{% /remark %}}

## Calc

The `calc()` function allows you to perform any _calculation_ on multiple values. This is often used to ...

* Combine different values with different units (which you somehow can't fix by getting your units straight).
* Undo or add extra spacing you do not want. 

{{% example %}}
Maybe the padding/margin pushes an element to be _just_ a little wider than the screen, even though you set `width: 100%`. You can compensate for this space you don't want with `calc`.
{{% /example %}}

The example below shows this as well. See what happens when you just set `left: 100%`. It pushes the circle out of frame, because the "origin" of CSS boxes is at the top left. So if we truly want the circle pushed to the right edge, we need to compensate. 

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div></div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: red;
  left: calc(100% - 100px);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Of course, this is a contrived example. In this specific case, you'd just do `right: 0;` instead/
{{% /remark %}}

### In Practice: scaling font size

I'll explain a great practical application that almost all my websites use. 

A common issue with responsive design is _font size_. Text is most readable when the width of each line is around 50 to 75 characters. Too wide and it becomes an overwhelming wall of text. Too short and it just becomes a column of words underneath each other.

So ... how do we make sure our text has a nice size _regardless_ of the user's screen size?

By implementing a simple calculation that automatically resizes our text.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  font-size: calc(15px + 0.390625vw);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

The text never becomes smaller than `15px`, which is a nice baseline for readability. But the wider the screen gets, the bigger the font becomes. 

If you set this property and then use relative units (`em`, `rem`, `%`) throughout, you're already 90% towards a completely responsive design.

{{% remark %}}
This isn't mine. I found this online a long time ago and have learned it's the holy grail ever since ;)
{{% /remark %}}

## Min/Max

Like my example above, you often want values to be responsive, but to stick within their lane. Font size should never become _too big_ or _too small_. An element's width should dynamically resize, but never become _too small_.

These two functions help to set nice _boundaries_ for your values. 

* The `min(value, value, ...)` function outputs the _lowest_ of all values.
* The `max(value, value, ...)` function outputs the _highest_ of all values.

You can supply as many values as you want, as long as they're separated by a comma (`,`).

The example below shows a font size that automatically scales (with viewport width), but never goes outside the range of `14px` to `20px`. To test this, resize your own browser window to resize the examples.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  font-size: min(20px, max(14px, 3vw));
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Clamp

The example above has a faster way to write it: the `clamp(min, val, max)` function. As expected, it **clamps** a value between two boundaries, never allowing it to go lower or higher than that.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  font-size: clamp(14px, 3vw, 20px);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Round

Near the start, I mentioned how relative units can have an issue with _sharpness_. If their number ends up being `14.5px` (for example), then the browser doesn't know what to do. How could it display _half_ a pixel? So you might end up with blurriness or unexpected behavior.

The `round(val)` function can help with that. It rounds the input to the nearest whole integer.

It also allows styling things in "steps" or "levels", instead of a smooth transition.

It also allows a second argument that determines how the rounding happens. (You can also round to the nearest _multiple of 10_, for example.)

_At the time of writing (late 2023), this isn't implemented anywhere yet. But I expect that to be the case relatively soon, and I think it's a useful function, which is why I mention it._

## Abs & Sign

These two functions help deal with (potentially) negative numbers. Those are usually bad, because almost all CSS values (dimensions, lengths, time) should always be _positive_---otherwise they don't make sense.

* The `abs(val)` function returns the _absolute value_ of its input. What's that? If the number is _negative_, it removes the minus sign.
* The `sign(val)` function returns 1 for positive numbers and -1 for negative numbers. (And 0 for 0.)

In other words, absolute value ensures your number is positive, while sign _tells you_ if the number is negative.

I know use cases for these, but explaining them would make this chapter needlessly convoluted. Just know that they exist.

{{% remark %}}
Yes, I choose brevity and withholding information over "explain everything in-depth". After years of teaching and researching how people learn most efficiently, this is one of my main take-aways. The biggest obstacle to learning is trying to do too much of it (at once).
{{% /remark %}}

## Trigonometry

CSS also supports all the trigonometric functions. These all take an _angle_ as input. (Which is a number with unit `deg` for degrees or `rad` for radians.)

* `sin` and `asin`
* `cos` and `acos`
* `tan` and `atan`

Moreover, it supports power functions.

* `pow(base, number)` for exponentials.
* `exp(number)` for exponentials with Euler's number (`e`) as the base.
* `sqrt(val)` for the square root.
* `log(val, base)` for logarithms. The second input is optional; when left out, Euler's number is assumed.

Below is a very convoluted example. But it's there to show you the power of all these functions and how they can be combined.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div id="circle-1"></div>
<div id="circle-2"></div>
<div id="circle-3"></div>
<div id="circle-4"></div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div {
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: red;
}
&nbsp;
#circle-1 {
  left: calc(cos(0) * 25px + 50px);
  top: calc(sin(0) * 25px + 50px);
}
&nbsp;
#circle-2 {
  left: calc(cos(90deg) * 25px + 50px);
  top: calc(sin(90deg) * 25px + 50px);
}
&nbsp;
#circle-3 {
  left: calc(cos(180deg) * 25px + 50px);
  top: calc(sin(180deg) * 25px + 50px);
}
&nbsp;
#circle-4 {
  left: calc(cos(270deg) * 25px + 50px);
  top: calc(sin(270deg) * 25px + 50px);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}