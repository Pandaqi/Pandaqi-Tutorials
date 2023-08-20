---
title: "Media Queries"
weight: 32
type: "article"
codemirror: true
---

Near the start of the course, I briefly mentioned the `@media` syntax for so-called **media queries**. I explained how they allow you to enable/disable CSS rules only for specific _media_. That is, a specific screen, a specific device, a specific method of viewing your page.

I gave you the most important one right at the start: writing styles that only take effect if the browser window is above or below a certain size.

This chapter will expand on that and also give many other ways in which you can use these media queries.

The main uses for media queries are ...

* Responsive design (react to screen size or device type)
* Accessibility (displaying the webpage differently for users with certain accessibility settings enabled)
* Different styling when targeting _screen_ and _print_ (see next chapter)

## Constructing a media query

A media query has multiple parts.

* First you type `@media`
* Then you add its target (optional): `screen`, `print` or `all`. (If left out, it defaults to `all`.)
* Then you add any number of **media selectors**, combined with **logical operators**.
* Finally, you type brackets (`{}`). And, as usual, any number of CSS rules can be inside those.

A media selector (also called a "media feature") must always be written between parentheses (`()`). The rest of this chapter explains the most common selectors to use.

Below is an example media query.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (min-width: 500px) and (max-width: 1000px) {
  /* your styles here */
  /* only applied if screen width is between 500 and 1000 pixels */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Logical Operators

But first, what are those "logical operators"? They tell the computer how to _combine_ the multiple media selectors you entered.

* `and`: the selection only happens if BOTH are true
* `or`: the selection happens if at least ONE is true
* `not`: the selection happens if what comes after is FALSE. (It _inverts_ the whole thing.)

For example, we could change the example above to trigger if either dimension (width OR height) is below 1000px.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (max-width: 1000px) or (max-height: 1000px) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

If you only supply one selector, of course, you don't need a logical operator. There is nothing to combine!

You can also _group_ these. Just like you were taught to group mathematical expressions with parentheses---probably---when you were in school. In the example below, see how the OR statement is grouped first, and _then_ combined with the `screen` target as AND.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media screen and ((max-width: 1000px) or (max-height: 1000px)) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

Logical operators and statements aren't something to discuss in-depth in a CSS course. It's a crucial element of computer programming, so it's easier to truly learn and experiment with them as you learn an actual programming language (such as JavaScript).

## Dimensions

### Concrete Size

You already saw this in the example. You can select for the dimensions of the _viewport_ ( = size of browser window that looks at your web page). The values of these are numbers (with unit).

* `min-width` and `min-height` are only true if the viewport size is GREATER than the size provided.
* `max-width` and `max-width` are only true if the viewport size is SMALLER than the size provided.
* `width` and `height` only apply if the viewport has this _exact_ size. (Which is obviously a rare use case.)

### Aspect Ratio

Instead of fixed numbers, you can also check against the **aspect ratio**. (The ratio between width and height.) This also has `min-aspect-ratio`, `aspect-ratio` and `max-aspect-ratio` selectors. 

The values of these are written as a fraction: `x/y`.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (aspect-ratio: 16/9) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Resolution

Similarly, you can check against a user's resolution. A higher resolution means more pixels to display something, which allows you to add more details (without them becoming blurry or distorted). A lower resolution, conversely, might force you to remove some of the finer styling.

Use the selectors `min-resolution`, `resolution` and `max-resolution`.

The value is a number with the unit `dpi`. Commonly, regular screens are `72dpi`, while print uses `300dpi`.

As such, this might feel like a convoluted check between "screen" and "print", but that's not the case. These days, there are _many_ different devices with _many_ different resolutions. 

I've been in a situation, many times, where my website would be beautiful on one device ... but everything looked wrong on an old phone with a low-resolution screen. It's usually the finer details or the very finetuned dimensions that get lost if a device simply doesn't have the _pixels_ to properly display them.

### Display Mode

The `display-mode` selector has multiple values, but by far the most useful one is `fullscreen`. This allows you to add CSS styles only for when your website is viewed fullscreen.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (display-mode: fullscreen) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Orientation

Finally, use the `orientation` selector to only apply styles when the website is in `portrait` (taller than wide) or `landscape` (wider than tall) mode.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (orientation: landscape) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Interactivity

These features check how the user can interact with your web page.

* `any-hover`: whether the device has a pointer that can hover over objects. (Not true for pure touchscreen devices, for example.)
* `hover`: same as `any-hover`, but only tests the _primary_ pointer used by the device.
* `pointer`: same as `hover`, but can also test how _precise_ this pointer device is. (Very rare and specific.)

Their values are `none` (if the user isn't able to hover) or `hover` (if they are).

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (hover: hover) {
  /* your styles here */
  /* which only apply if the user CAN hover over objects on the page */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

The `scripting` selector tests whether the user has **JavaScript enabled**. Possible values are `none` and `enabled`.

This is very useful, especially nowadays when each website has a pile of JavaScript that is crucial for how it displays and functions. If that JavaScript doesn't load ... your whole website might break or look ugly. With this selector, you can apply different styles to work around this issue, or perhaps show a special element that warns the user JavaScript should be enabled.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (scripting: enabled) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Accessibility

In general, for accessibility it's recommended to keep your design clean and uncluttered. To use relative units for font size and media queries. (Because all browsers have the option to manually make text bigger, and you don't want this to break your design.) To keep things simple and with high contrast.

Even so, what _your eyes_ see as a "harmless little animation", might be completely overwhelming to somebody else's eyes.

As such, the selectors below are mostly related to the color palette and the amount of activity on the page.

* `prefers-reduced-motion` is true if the user has enabled the setting that they want to reduce motion (no value needed)
* `prefers-contrast` checks whether the user wants `less` or `more` contrast, or has `no-preference` (default)
* `prefers-color-scheme` checks whether the user has prefers a `light` or `dark` color scheme.
* `monochrome` is true if the user has a screen with monochrome (grayscale) pixels (no value needed).
* `inverted-colors`: checks whether the user has `inverted` colors (and is `none` by default)
* `forced-colors`: checks whether it is `active` (and is `none`) by default. Forced colors means the browser forces its own color scheme on your webpage. (Check [this](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) to see all properties affected.)

What does _"no value needed"_ mean? Simply typing the selector (without `:` and a value) is enough to test its existence.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@media (prefers-reduced-motion) and (prefers-color-scheme: dark) {
  /* your styles here */
} 
{{< /playful-code-tab >}}
{{< /playful-code >}}

## @supports

The media queries above are all about checking what the _user_ prefers or has. What resolution do they have? Do they prefer light or dark colors? Are they able to hover over elements?

It's also important, however, to check what the _browser_ actually **supports**. As mentioned several times, CSS constantly evolves and grows, and it takes time for browsers to implement new features. Sometimes they won't implement them at all.

As such, whenever you use a new or experimental feature (that's not supported everywhere), you need to **test** if you can even use it. 

The `@supports` rule helps with this. It's _very_ similar to media queries.

* First you type `@supports`
* Then you type a list of **support conditions** (between parentheses), combined with **logical operators**
* Then you type brackets (`{}`) and put your styles in-between those.

What's a "support condition"? It's _any_ CSS rule. Any one of them. The condition checks if it understands _that specific rule_. And if so, the check returns true.

In the example below, the CSS rules to create a flexbox are only applied if the browser actually _supports_ flexbox.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@supports (display: flex) {
  div {
    display: flex;
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

This is a general, common application. But you can get as specific as you want. 

The example below is a bit silly, but it illustrates the point. It _only_ applies this border style, if the browser can actually _do that_.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@supports (border: 2px solid gray) {
  div {
    border: 2px solid gray;
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Nesting @-rules

Regular CSS selectors cannot nest. (Something that still haunts many CSS developers to this day. Though there is a solution, which I'll talk about at the Conclusion of this course.)

The following is **invalid**, for example. It won't parse, it won't do anything.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
div {
  p {
    color: red;
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

These special rules (the `@`-rules), however, can!

You can put a media query _inside_ a supports block. Or the other way around. These can be nested as much as you want. Which is nice, because you often need them together. (That's also the reason why I wanted to mention both in the same chapter.)

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
@supports (display: flex) {
  @media (max-width: 720px) {
    .tile-gallery {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}