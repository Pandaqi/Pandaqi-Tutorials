---
title: "Text I"
weight: 19
type: "article"
codemirror: true
---

Perhaps this was the chapter you'd been waiting for. I can understand that, but hopefully you agree now that changing properties of the text is a _minor_ change, relatively speaking. It shouldn't be the first thing you consider in a design, nor the second, nor the third. There's no use finding the perfect font size ... if you haven't even blocked out the skeleton of your web page.

Additionally, as you read this chapter (and the next), you'll notice that these CSS properties mostly match the basic properties any [Typography](/tutorials/design/typography) course will teach you. As such, this chapter will be very quick and mostly just give you the right syntax to use for everything.

It will not teach you "good typography" or the in-depth application of these properties. That's a whole different creative area you should study some other time! (Or figure out through trial and error, as many web designers have done.)

## Text Color

Use the `color` property, which expects a color value.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: darkblue;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Font Size

Use the `font-size` property, which excepts a number value (including unit!)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  font-size: 32px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Alignment

Use the `text-align` property. It accepts four values: `left`, `right`, `center` and `justify`.

"Justify" means that the text fills the whole space (from left to right edge), even if that means it has to vary the gaps between words to do so. (More on this later.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  text-align: center;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Variations

The same font can appear in many variations, usually applied for contrast and emphasis.

If you've learned about HTML, then you've already seen this in action.

* The `<strong>` element automatically makes text inside bold. All the header tags (`h1` ... `h6`) do so as well.
* The `<em>` element automatically makes text inside _italic_.

This section teaches the hidden CSS properties that make these defaults happen. (And once you know that, you can also turn them off!)

* `font-weight`
* `font-style`
* `font-stretch`
* `font-variant`

To change the "thickness" or "boldness" of a font, use `font-weight`. It allows values `100` (thin) to `900` (bold), or named values (`lighter`, `normal`, `bolder`, `bold`).

To make the text slanted, use `font-style`. It allows values `normal`, `italic` and `oblique`. 

{{% remark %}}
The last one is just an artificial slant from the computer. The value "italic" will actually use the italic version of the font, if available, which almost always looks better.
{{% /remark %}}

To use a condensed or expanded version of the font, use `font-stretch`. It allows values `condensed`, `ultra-condensed`, `expanded`, `ultra-expanded`. Or any _percentage_.

{{% remark %}}
Again, if your font doesn't have a built-in variant for this value, the computer will artificially stretch the letters. Which usually doesn't look great.
{{% /remark %}}

Finally, the `font-variant` property is only used to create "small caps" (with the value `small-caps`). This means that the text is displayed as _capital letters_, but shrunk to the size of _lowercase letters_. 

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <span class="italic-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <span class="bold-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
.bold-text {
  font-weight: 900;
}
&nbsp;
.italic-text {
  font-style: italic;
}
&nbsp;
p:first-line {
  font-variant: small-caps;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
When used well, small caps are very stylish, though it's rare. The example shows a common use case: a special first line to an article.
{{% /remark %}}

## Spacing

### Line-height

One crucial property tightly related to _font size_ is the `line-height`. To keep text readable, you need enough space _between (vertical) lines_, otherwise the letters will overlap. As such, the line-height should be set _relative_ to the font size (not in absolute units), to some number greater than 100%.

In the example below, play around with the value to see what happens. (And what's readable and what's not.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  line-height: 2em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Letter & Word Spacing

Similarly, you can adjust the distance between _individual letters_ (`letter-spacing`) and _individual words_ (`word-spacing`).

The default values are usually fine. This is mostly useful if you have some special font that doesn't work by default, or if the text is supposed to "stand out" in some way (with increased spacing).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  letter-spacing: 5px;
  word-spacing: 2em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Indent

The `text-indent` property indents the _first line_ of a text ( = moves it to the right). It requires a number.

This is standard practice in books, especially novels. When all you have is _text_, this indent creates a nice way to signal the start of a new paragraph and keep the wall of text easy to read.

On websites, though, this is uncommon. Because screens have a lower resolution, and websites have more images or non-text elements floating around, people usually prefer text to be separated by whitespace.

Whatever you do, don't use _both_ an indent and whitespace! That's one of the deadly sins of typography ;)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  text-indent: 3em;
  margin: 0;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}