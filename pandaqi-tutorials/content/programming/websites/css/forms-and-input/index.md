---
title: "Forms & Input"
weight: 34
type: "article"
codemirror: true
---

Forms and input are tricky. Most of it is completely handled by browsers: their functionality, checking input validity, even what they look like. All of that, and I just need to type `<input type="text">`!

It's very nice. The downside, however, is that input elements receive a lot of _default styling_ that gets in the way. And if you want to change that, you have to rely on more specific selectors, because `input` would just select everything equally.

In this chapter, I will explain the default styles (and how to get rid of them). Then I'll give the pseudo-classes and pseudo-elements you can use to target specific parts of input elements.

## Default Styles

By default, input elements stick to their _own default font_ (at a small size). They get a border and that's it. (No padding, no margin, a small fixed size.)

In the example below, notice how setting a font family or size does _nothing_ for the input elements. Similarly, notice how they're quite small, displayed inline, with a tiny border.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="text">
  <input type="submit">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  font-family: "Comic Sans MS", cursive;
  font-size: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Using Comic Sans just to make it obvious. Don't use this on your website!
{{% /remark %}}

I like to turn all input elements into full-width elements and inherit the properties they're missing. Additionally, I prefer replacing the border with a background-color or (inset) shadow and using round corners.

It's still not amazing, but it's more friendly and more usable. Not only is it in line with the rest of the design, you can easily adjust size and location of the elements with flexboxes or grids.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="text" spellcheck="false">
  <input type="submit">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
body {
  font-family: "Dosis", fantasy;
  font-size: 20px;
}
&nbsp;
input {
  font-family: inherit;
  font-size: 1em;
  border: none;
  width: 100%;
  box-shadow: inset 0 0 2px 1px #666;
  border-radius: 0.33em;
  margin-bottom: 0.33em;
  padding: 0.33em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Pseudo-Classes

Hopefully you remember that pseudo-classes were for styling a specific _state_ of an element.

Well, input elements can be in **many** states! And there's a pseudo-class for each of them.

{{% remark %}}
The examples below don't apply my extra styling to override the default, just to make the example code shorter.
{{% /remark %}}

### Focus

The `:focus` pseudo-element selects the element that currently has focus. This means the user last clicked on it, or when they type, the text will interact with that element. 

Only _one_ element can have focus on a web page. Usually, you can press TAB to switch focus between input elements as well.

In the example below, try clicking inside the different input boxes to focus on them.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="text" spellcheck="false">
  <input type="text" spellcheck="false">
  <input type="submit">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input:focus {
  outline: 2px solid red;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Notice how I use the `outline` property. By default, browsers modify the `outline` to show focus, not the `border`.

### Disabled/Enabled

Use the `:disabled` pseudo-class to target disabled input elements. The `:enabled` pseudo-element targets everything else.

By default, disabled elements become "greyed out". How? The browser sets their `color`, `background-color` and `border` properties to some transparent gray.

As such, to counteract that, set these values to something else.

In the example below, try removing your own properties, or target enabled elements instead.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="text" spellcheck="false">
  <input type="submit" disabled>
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input:disabled {
  color: pink;
  background-color: darkred;
  opacity: 0.66;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Valid/Invalid

The `:valid` psuedo-class targets elements with a valid input. The `:invalid` pseudo-class targets elements with invalid input.

The input below, for example, expects a valid email. But it doesn't have one, so the pseudo-class styles are triggered.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="email" value="this is not an email">
  <input type="submit">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input:invalid {
  outline: 2px solid red;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Required/Optional

The `:required` pseudo-class targets input elements that are required. (The `required` HTML attribute is set.) The `:optional` pseudo-class targets everything else.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  Username (required): <input type="text" required><br/>
  Favorite Animal (optional): <input type="text"><br/>
  <input type="submit">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input:required {
  outline: 2px solid red;
}
&nbsp;
input:optional {
  outline: 2px solid green;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Range

The `:in-range` selects input elements whose value is within the range defined by the input element itself. As expected, `:out-of-range` selects those outside of this range.

In the example below, try changing the number to something in or out of range.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="number" value="2" min="0" max="5">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input:in-range {
  outline: 2px solid green;
}
&nbsp;
input:out-of-range {
  outline: 2px solid red;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Checked

Finally, use `:checked` to select all checkboxes that are, well, _checked_.

In the example below, check some boxes!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="checkbox">Option 1<br/>
  <input type="checkbox">Option 2<br/>
  <input type="checkbox">Option 3<br/>
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input {
  transition: transform 0.3s;
}
&nbsp;
input:checked {
  transform: scale(1.33);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Pseudo-Elements

This is where everything breaks down. Input elements add a lot of pseudo-elements. (Things not defined in the HTML, by you, but added to the page later by the browser.)

How do you style these? Different browsers use different words. Some require a prefix (such as `-moz-`), some don't. You just have to look it up when you need it.

There are two common ones that are well-supported, though.

* `::placeholder` styles the placeholder text 
* `::file-selector-button` styles the button for a file upload input field.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<form>
  <input type="text" placeholder="file name here ..."><br/>
  <input type="file">
</form>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input::placeholder {
  font-style: italic;
}
&nbsp;
input::file-selector-button {
  border-radius: 0.33em;
  background-color: green;
  color: white;
  border: none;
  padding: 0.33em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}