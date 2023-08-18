---
title: "Values II: Colors"
weight: 7
type: "article"
codemirror: true
---

In a language all about _(visual) design_, color obviously plays a huge role. I considered leaving this for later, using only basic color names like "red" and "blue" in all my examples. But as I continued writing, I realized you really _needed_ this knowledge to do anything in CSS.

If you've never designed (digitally) before, you most likely have _no idea_ how color works. How on earth do you tell a computer which exact color you want? Really, it's wonderful to see people completely _blown away_ by something as simple as how to represent color on a computer :)

To show this in action, I'll use the `color` and `background-color` properties. (The first sets text color, the second background color.)

## Named

In the examples before now, I only used names of common colors (such as `red`). CSS has a _long_ list of color names you can just type (and the computer knows what to do).

Check the [full list of named colors in CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here full of text with all sorts of colors.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: white;
  background-color: darkgreen;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

These are, however, usually not the _exact_ color you're looking for. (On top of that, searching through a long list like that isn't much fun, and other design software usually doesn't have such handy named colors.)

Instead, let's see how we can arrive at any color ourselves.

## RGB

By mixing **red, green and blue**, we can get any color we want. As such, to define a color, we tell the computer _how much_ we want of each. (How much red, how much green, how much blue.)

The minimum value is obviously 0. The maximum value is 255. 

The first syntax is to set these directly: `rgb(red, green, blue)`

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here full of text with all sorts of colors.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: rgb(255, 255, 255);
  background-color: rgb(0, 130, 40);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Hex

The second syntax is to use **hexadecimal** numbers. This means a number system with 16 options, not 10.

How? After the 9, we keep counting using _letters_. In other words: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.

Now we can represent any number from 0 to 255 with just _two symbols_. For example, `05` just means five. `FF` means 255.

To write a hex number, use this syntax: `#rrggbb`

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here full of text with all sorts of colors.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: #ffffff;
  background-color: #008228;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## HSL

Lastly, there's another popular way of looking at color. Instead of red, green and blue, we have the channels **hue, saturation and luminosity**.

Hue refers to the pure _color_. If you know the famous color circle, then you know hue. It's on a scale from 0 to 360 (degrees), where 0 is pure red.

Saturation means _how pure_ the color is. (High saturation = very red, low saturation = a muted red.)

Luminosity means _how bright_ the color is. (High luminosity = very bright red, low luminosity = dark red.)

To define a color this way, use `hsl(hue, saturation%, luminosity%)`

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here full of text with all sorts of colors.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: hsl(120, 50%, 90%);
  background-color: hsl(120, 50%, 25%);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Designers tend to prefer this method. (I do too.) It makes it very _easy_ to create variations on a color (that surely look good together).

* You want a red header? Just the hue to the right value.
* You want the text to be a light red? Keep the same hue, increase luminosity.
* You want the background to be a dark red? Keep the same hue, decrease luminosity.

Most code editors provide a nice tooltip for picking these values. I don't expect you to know what _hue_ leads to what _color_ off the top of your head! You can also find many websites with "CSS color pickers" online.

## The Alpha Addition

All of these options have a variant that adds a fourth part: _alpha_. This is another word for opacity or translucency. 

An alpha of `1.0` means the object is fully opaque (the default). You can't see through it, you can't see what's behind it.

An alpha of `0.0` means the object is invisible! It's completely see-through.

As such, you also have ...

* `rgba(red, green, blue, alpha)`
* `#rrggbbaa`
* `hsla(hue, sat%, lum%, alpha)`

{{% remark %}}
Note that alpha is a value between `0` and `1`, with no unit. Because it is a ratio: 0.5 means 50% of this element should be visible, and 50% of whatever is behind it.
{{% /remark %}}

In general, you don't need this. They are more unpredictable (because now your design depends on the colors that happen to be _behind_ elements) and harder for the browser to calculate.

When I just started out, for example, I used `rgba` for EVERYTHING. Why? I thought it was an easy way to get different shades of the same color. If I had a green background, I could just do `rgba(255,255,255,0.77)` to get _light green_ text on top.

Now I'm older and wiser. And I tell you: it looks _much better_ to handpick the colors yourself. Using opacity to generate shades of a color leads to more _muted_ and _bland_ colors, as well as less contrast.

That said, there are certainly situations in which this is the fast and pretty solution to your problem. (Such as adding _shadow_ to objects.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here full of text with all sorts of colors.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: rgba(255, 255, 255, 0.75);
  background-color: darkgreen;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Current Color

When no default value is given (by you or the browser), color defaults to the value `currentcolor`. This takes on the same value as the _text color_ of the element. (As that will always be set to some value.)

You can use this value yourself, if you want to reuse the _text color_ of an element within other properties. But this will be rare, as I just explained how CSS already does this by default for you.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A paragraph here where the border is the same as our text color.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: blue;
  border: 1px solid currentcolor;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}