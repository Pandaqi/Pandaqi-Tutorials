---
title: "Grid"
weight: 13
type: "article"
codemirror: true
---

The introduction of the CSS grid module was a major milestone. It is _extremely_ powerful, versatile and useful. It gives finetuned control over the _size_ and _position_ of all elements within the grid.

Basic website layout, with a main article and a sidebar? Grid!

Dynamic layout with tiles and images on the front page? Grid!

Intuitive UI that allows you to drag and drop images or elements around? Grid!

That also means, however, that I can't explain all of it in just one chapter. This chapter merely gives you the high-level overview and simple, practical syntax for the most common use cases. 

{{% remark %}}
If you want, you can view the _grid_ as _two flexboxes at once_: both vertical and horizontal at the same time. That indicates both how powerful and how complex it is.
{{% /remark %}}

Turning a container into a grid is still as easy as before: use `display: grid;`.

All its direct children are now "grid items" and behave as such.

Now the fun starts.

@TODO






@TODO: Explain CSS comments early on + add `transparent` as the "invisible color" or "no color" option

@TODO: Where to explain that images are displayed at FULL SIZE by default?

@TODO: Where to explain `box-sizing` (and the universal selector `*`)?? Feels like it should be early on, as it's a big deal. At the box model?

@TODO: Unexplained = declaring the four sides separately (padding-left, padding-right, shorthands). It's just messy and not that useful at this moment.


* Flexbox => Code Examples
* Grid => WHERE + HOW BIG
* Transform => WHERE + HOW BIG
* Masks / Clipping => HOW BIG
  * +Object-fit => HOW BIG
* Backgrounds => BACKGROUND
  * Opacity here? 
* Gradients => BACKGROUND
* Filter => OVERALL ... so where?
* Text & Fonts => FOREGROUND
  * Whitespace (use the old image) 
* Lists, Tables & Links => FOREGROUND
* Border (regular border, border radius, border images) => DECORATION
* Outline => DECORATION
* Pseudo-Classes => DECORATION
* Pseudo-Elements => DECORATION
* Shadows => DECORATION
* Transitions & Animations => RESPOND
* Counters => RESPOND
* Variables => RESPOND
* Math Functions => RESPOND
* Forms (bit of an exception/leftover) => mostly about the weird default styling for input elements
* Advanced Selectors I (combinators, attr-selectors, ...)
* Advanced Selectors II
* Media Queries (also @supports?) => RESPOND
* Web to Print (@page, paged.js, ...)
* Conclusion
