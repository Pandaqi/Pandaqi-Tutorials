---
title: "Pseudo-Elements"
weight: 25
type: "article"
codemirror: true
---

Last chapter, I remarked how I found the name _pseudo-classes_ a bit unhelpful. This chapter, however, might shed some light on why they chose that name.

Because **pseudo-elements** is a good name for what this chapter will discuss. A pseudo-element is a **visual element added to the page** that isn't actually **part of the original HTML**. 

In other words, a "fake element". A "pseudo-element."

_What does that mean?_ For example, think back to the chapter about _lists_. By default, lists receive a bullet (or number) in front of them. This is a visual element ... which isn't part of the original HTML! They're a pseudo-element that the browser adds automatically.

How would you style those? Exactly, you'd use the correct pseudo-element to target them in a selector.

## Syntax

You can use the same syntax as pseudo-classes, although the "correct" syntax is to use **two** double colons (`::`) instead.

For example, to select the first letter of a paragraph, you'd use `p::first-letter`. Or see the example below to style the `first-line`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p::first-line {
  font-variant: small-caps;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Again, the complete [list of Pseudo-Elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) is extremely long. There are _many_ little visual elements that browsers add by default, especially when it comes to media or input/forms. 

Even worse, they all decided to name them differently, requiring different prefixes. (Such as `-webkit-` for Google Chrome and `-moz-` for Mozilla Firefox.)

This chapter talks about the **most common and most useful ones**. For more advanced styling, you'll always have to reference the latest status of the docs and browser compatibility.

## Marker

Earlier, I gave the example of styling the list bullets. 

How do you style these? By selecting them with the `::marker` pseudo-element, then changing their content.

_But wait_, you might say, _how do I add content inside something that doesn't exist in the HTML?_

Ah, good question! Pseudo-elements have a unique property that can't be used anywhere else: `content`. It accepts any string. 

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<ul>
  <li>He's making a list ...</li>
  <li>He's checking it twice ...</li>
  <li>Gonna find out ...</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
li::marker {
  content: "🎅";
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## The content property

This property is even more powerful than it might seem (at first glance).

You can also _combine_ multiple strings, simply by typing them with a space in between. 

_When would I need that?_ Well, for example, what if you need the content to be _dynamic_? Some part of it is fixed (typed by you), but another part should be updated as the page is loaded? 

You can use the `attr(<attribute>)` keyword!

This reads the value of the given _attribute_ on the HTML element and places it in the `content`. 

See the example below. Part of the content is a string typed by us, the other part reads an attribute (which we invented ourselves) from the element being styled.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<ul>
  <li marker="🎅">He's making a list ...</li>
  <li marker="🎄">He's checking it twice ...</li>
  <li marker="🛷">Gonna find out ...</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
li::marker {
  content: attr(marker) " | ";
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Selection

Users can _select_ parts of a webpage. (By tapping and then moving their mouse/finger.) When they do, the elements get a different color, to indicate that it's selected.

You guessed it: the browser creates a _pseudo-element_ to display this!

And you can control that with the `::selection` pseudo-element.

Try selecting a part of the paragraph in the example below!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p::selection {
  color: white;
  background-color: black;
  font-style: italic;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

You'll notice that my last rule (about `font-style`) doesn't do anything. Why's that?

Well, pseudo-elements are still _fake elements_. They don't support everything. In fact, they only support very little of the full might of CSS. Don't expect them to work magic---and if a rule doesn't seem to be applied, it's probably not an error on your part, but simply unsupported.

## Before & After

These two pseudo-elements are the most versatile. They _insert_ an extra element into the visual design. As expected, `::before` inserts itself _before_ the actual element, whereas `::after` inserts itself _after_ the actual element.

{{% example %}}
You might've noticed that many buttons on this website have an _arrow_ attached to them. (Which animates when you hover over the button.) With a few exceptions, this is done using a `::before` element! There isn't an actual arrow HTML element, nor did I manually add the arrow to each button.

By using a pseudo-element, I am able to insert a new visual element before all buttons, without cluttering the HTML document.
{{% /example %}}

See the example below. It automatically inserts a label before each paragraph, which isn't actually present in the HTML.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p::before {
  content: "Remark!";
  margin-right: 0.5em;
  font-style: italic;
  text-decoration: underline;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}