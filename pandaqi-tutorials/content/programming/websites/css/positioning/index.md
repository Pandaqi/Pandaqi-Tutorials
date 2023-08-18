---
title: "Positioning"
weight: 10
type: "article"
codemirror: true
---

Last chapter explained how CSS boxes automatically grow, but also how you can control those dimensions (to some extent). Let's now move on to the second important design decision: where to _place_ these elements.

This chapter will explain how to do so **per element**. Often, though, positioning is about the distances between **many elements**. For that, we have other CSS concepts that the upcoming chapters will explain.

## Position

As you've seen numerous times now, by default elements flow horizontally first, then vertically. Whenever you add a new element, it's just placed right after the previous one. That's how those CSS "boxes" slowly fill up the page.

The `position` property can change that. It can take these values.

* `static`: default option, explained above.
* `fixed`: the element is positioned relative to the _browser window_.
* `relative`: you can move the element _relative_ to its original position.
* `absolute`: the element is positioned relative to its _parent's_ container box.

The `relative` value is used for small tweaks to an element's position. 

Why? Because the element _visually_ moves, but behind the scenes it stays where it is. This means that other elements will flow around its _original position_, not where it ends up. In other words, the element's original box is still part of the "page flow".

Thus, moving an element too far (this way) creates a weird gap in the layout.

The `absolute` value gives absolute control over the placement. The element is removed from the page flow, so no gap is created. This, however, also means that it's entirely _your responsibility_ to place the element well.

Crucially, this positioning only works if its _parent_ has `relative` positioning! Don't ask me why. Just remember this whenever you're confused about why it's not working.

Finally, the `fixed` value is often used for those headers/menus that stay at the top of the page, even if you scroll down. The element is removed from page flow as well.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<header>Even as you scroll down, this header remains at the top.</header>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
header {
  position: fixed;
  background-color: #CCCCCC;
}
&nbsp;
p {
  max-width: 150px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## The position properties

But _how_ do you change the position?

By adjusting the distance from the box to every edge: `left`, `right`, `top` or `bottom`. These take any number---and don't forget the unit behind it.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<header>Even as you scroll down, this header remains where it is.</header>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
/* distance 5px to the bottom = the header now sticks to the bottom of the screen! */
header {
  position: fixed;
  bottom: 5px; 
  background-color: #CCCCCC;
}
&nbsp;
p {
  max-width: 150px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Remember the differences between the position types.

* When `fixed`, the "edges" are the browser window.
* When `absolute`, the "edges" are the parent's box.
* When `relative`, the "edges" are the original element's position. (So `bottom: 10px;` means the bottom has a distance of `10px` to the old position. In other words, the new position is `10px` _above_ where it used to be.)

Try it in the example above! Change the position type, then see what happens when you add different edges and distances.

## Float

The `position` property moves the whole box around. Besides relative, which is uncommon anyway, they all _remove_ the element from page flow.

But what if we want it to stay? What if we want to move it, yet use its correct location in the page flow? What if we want to move an element around, then let the other elements (usually text) _wrap around it_ nicely?

Use the `float` property, which takes `left` or `right`. This moves an element all the way to the _left_ or _right_ edge of its container. Crucially, any other elements will nicely _wrap_ around this new position. This is most commonly used for images with text around them.

In the example below, see how the image is moved around, yet the text respects its box.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p><img src="/tutorials/programming/websites/css/positioning/panda_image.png"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
img { 
  float: right;
  max-width: 120px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Z-Index

So far, we talked about positioning in the x-axis (horizontally) and the y-axis (vertically). But there is a third axis!

Imagine the z-axis as one that's coming _out of your screen_ (towards you). It determines the order in which elements are rendered. An element with a higher z-index is "further forward" and thus displays _above_ other elements behind it.

Use the `z-index` property for this, which takes a number (with no unit). 

By default, the z-index simply counts up from 0. So, the _later_ an element appears on the page, the _higher_ its default index will be. This is fine for most cases.

Elements with their `position` set get a bump to their z-index. (Because they're taken out of the page flow, they are rendered later.)

Sometimes, however, elements overlap and you need to control which one displays _on top_. (Or, in some cases, the order in which your elements are laid out is _not_ necessarily the order in which they are rendered on the page.)

You can invent your z-index values yourself! It is, however, recommended to stick to a few simple values (10, 50, 100), and to write them down somewhere in a design document. Nothing as frustrating as seventeen different z-index values floating around your stylesheet.

Beware! You can also set them to a **negative** number. This does what you expect (moves it backward), but it also disables any pointer interactivity: you can't hover or click it anymore.

In the example below, play with the `z-index` property and see how that changes what's displayed first (the image or the paragraph).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<img src="/tutorials/programming/websites/css/positioning/panda_image.png">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
img { 
  position: absolute;
  right: 0;
  max-width: 120px;
  z-index: 10;
}
&nbsp;
p {
  position: relative;
  z-index: 5;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}