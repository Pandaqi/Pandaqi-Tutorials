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
If you want, you can view the _grid_ as _two flexboxes at once_: both vertical and horizontal at the same time. That indicates both how powerful and how complex it is. In fact, if you haven't read the chapter on [Flexbox](../flexbox/) yet, **I highly recommend you do so first**. It provides an easier introduction to many ideas described below
{{% /remark %}}

## Starting a grid

Turning a container into a grid is still as easy as before: 

* Use `display: grid;` (block-level element)
* Or `display: inline-grid;` (inline element)

All its direct children are now "grid items" and behave as such.

Now the fun starts.

## This is not a documentation

As stated before, this course is not a documentation. If you look up the _full_ reference on CSS grid, you'll be absolutely _overwhelmed_ by the hundreds of options, properties, values and concepts.

The whole point of this course is to narrow it down to only the most practical, most common and simplest elements. To never overwhelm and to gently let you into the world of CSS.

As such, if you want the **full** run-down, [this article by CSS tricks is great](https://css-tricks.com/snippets/css/complete-guide-grid/).

This chapter leaves out most shorthands (as always), the lesser-used properties, and lumps together properties that apply to both the _grid (container)_ and the _grid items_.

Let's start by explaining that last point.

## Grid Container vs Grid Items

Most of the concepts below apply to both the _container_ and individual _grid items_, although the property names are slightly different for each.

Why? 

* If you set it on the container, it automatically applies to _all_ grid items.
* If you set it on a grid item, it only applies to the specific ones you selected.

This is the recurring pattern of CSS. You want to set the _general_ properties---true for 90+% of the design---on the containers. But it's always possible, with a slightly different property, to make exceptions for specific elements lower on the hierarchy.

If you view it like this, the number of properties shrinks to a more manageable size.

As always, _play around_ with the examples below! Try all the values, try changing properties, try modifying the grid. It's an extremely fun and fast way to learn all the concepts.

## Rows & Columns

The first thing to decide are a grid's **dimensions**.

To set the distribution for the **whole grid**, use

* `grid-template-rows` for the rows
* `grid-template-columns` for the columns

To set what space a **single item** should take up, use

* `grid-row-start` and `grid-row-end` (for rows)
* `grid-column-start` and `grid-column-end` (for columns)

As you see, the properties are similarly named for the whole grid and individual items. But there's a small difference in naming to clearly indicate this difference.

{{% example %}}
For the whole grid, it's called "grid template". Because this clarifies that you're setting a template for all grid items to follow. If you're merely changing one individual grid item, the "template" part is removed.
{{% /example %}}

{{% remark %}}
The shorthand property to set _all_ of this at once, is simply `grid`.
{{% /remark %}}

### Grid Template

How do you define a grid? You define a "template". You say "the columns should be sized like this and this".

Once set, CSS figures out how to follow those rules and fill the whole area with this grid.

Of course, the whole power of grids is that they are _responsive_. No matter the space, the grid follows the template. To do so, we need to define the columns/rows in a responsive way!

The simplest approach is to use the `auto` keyword. It says "add one entry and _automatically_ resize it". 

Check the example below. It simply repeats `auto` two times, to add two _columns_ that automatically (fairly) resize to fill the whole space.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: auto auto;
}
&nbsp;
div {
    background-color: #FFAAAA;
    width: 100%;
    height: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Grid Row/Column

You can set these properties to an exact **number**. For example, `grid-column-start: 2` means the item starts at column 2.

But you can also use them to set only a **size**, by adding the `span` keyword in front. For example, `grid-column-end: span 2` doesn't care at what column we end, as long as the item takes up the space of 2 columns.

In the example below, notice how the first element takes up _two_ columns. And the fourth element is forced to start at column 2 (although it would naturally fall on column 1).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div id="div-1">1</div>
    <div>2</div>
    <div>3</div>
    <div id="div-4">4</div>
    <div>5</div>
    <div>6</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: auto auto;
}
&nbsp;
div {
    background-color: #FFAAAA;
    width: 100%;
    height: 20px;
}
&nbsp;
#div-1 {
    grid-column-end: span 2;
}
&nbsp;
#div-4 {
    grid-column-start: 2;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Units & Functions

Of course, we can go further than the simple `auto` keyword.

### The `fr` unit

Within grids, you can use the special `fr` unit. It stands for **fraction**. It's similar to the `flex-grow` and `flex-shrink` properties mentioned in the [Flexbox](../flexbox/) chapter. With it, you decide what fraction of the empty space is given to this specific row/column.

For example, `2fr 1fr` means ...

* We want two columns.
* But the first should fill _twice_ as much space as the second.

In the example below, notice how the fractions control the uneven sizing for the elements.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: 3fr 2fr 1fr;
}
&nbsp;
div {
    background-color: #FFAAAA;
    width: 100%;
    height: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}


### Minmax

The `minmax(a,b)` is the magic wand you'll need most of the time. It tells CSS: "you're allowed to resize this column/row, but its size has to stay above `a` and below `b`".

It allows responsiveness, while setting clear boundaries.

In the example below, notice how the middle column is bigger than the others. Why? It tries to be the same size as others and fill the same fraction (`1fr`), but the `minmax()` says "nope, you can't go lower than 300px". So it stops at 300 pixels, while the others continue shrinking.

Hopefully, you're starting to see how much control you have over the resizing and responsiveness of CSS grids.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: 1fr minmax(300px, 1fr) 1fr;
}
&nbsp;
div {
    background-color: #FFAAAA;
    height: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Related values to research are `min-content`, `max-content`, `fit-content()`, `min()` and `max()`
{{% /remark %}}

### Repeat

The `repeat(num, unit)` function simply saves you some typing.

For example, `repeat(4, 1fr)` is just `1fr 1fr 1fr 1fr`.

But it can do a bit more. Instead of a number, you can supply.

* `auto-fill` to say "fill as many items as you can, even if some are empty"
* `auto-fit` to say "fit the items we have, prefer expanding those over adding more items"

In the example below, the current code expands the items to fill the area (keeping the maximum into account). Change it to `auto-fill`, and you'll see how they all shrink to their minimum, filling the row with many empty grid items.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
}
&nbsp;
div {
    background-color: #FFAAAA;
    height: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Alignment

To align the **rows** (horizontal alignment),

* Use `justify-content` for the whole grid.
* Use `justify-self` for a single grid item.

To align the **columns** (vertical alignment),

* Use `align-content` for the whole grid.
* Use `align-self` for a single grid item.

You might have noticed that these properties are _named_ similarly to those for [Flexbox](../flexbox/), which also do the same. Thus, they also take the same _values_. 

* For aligning a single item, you have `start`, `end`, `center` and `stretch`.
* For aligning the whole grid, you have _additional_ values `space-between`, `space-around` and `space-evenly`.

In the example below, notice how the _whole grid_ is moved to "end". But the first item, which has a smaller height, is set to center align within its own box.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div id="div-1">1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: auto auto;
    align-content: end;
    height: 100px;
}
&nbsp;
div {
    background-color: #FFAAAA;
    width: 100%;
    height: 40px;
}
&nbsp;
#div-1 {
    height: 20px;
    align-self: center;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
The shorthand to set both at once is `place-content` and `place-self`.
{{% /remark %}}

## Gap

This is the only styling that **only** applies the the whole **grid container**.

Why? Because it's about the gaps _between_ grid items. (So you can never set it on a grid item on its own, as it's about spacing _between_ grid items.)

The gap determines the amount of empty space between all the grid items. You can set gap for the two axes seperately, with `grid-row-gap` and `grid-column-gap`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
    display: grid;
    grid-template-columns: auto auto;
    grid-row-gap: 1em; /* play around with this! */
    grid-column-gap: 1em;
}
&nbsp;
div {
    background-color: #FFAAAA;
    width: 100%;
    height: 20px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
The shorthand to set both at once is `grid-gap`.
{{% /remark %}}

## What I left out

### Areas

Instead of defining the grid as lines (rows and columns), you can define it as _areas_. For example, you could reserve a 2x2 block somewhere and call it "header", which is then filled with a single grid item.

The `grid-template-areas` property defines the areas. To assign a grid item to one, you'd use the `grid-area` property on it.

### Subgrids

You can already create a grid within a grid. Simply set a grid item (or something inside it) to `display: grid;` as well, and you can nest as many grids as you want!

What do subgrids add? It allows you to create a grid in a grid, while automatically _copying_ all those great properties you set on the bigger grid.

This is a **value** for the template. (For example: `grid-template-columns: grid;`.)

_An experimental property, only implemented in Firefox at the time of writing._

### Masonry

A masonry grid is a very common grid layout for homepages and tiled designs. Instead of sticking to strict rows and columns, it allows elements to move _up_ to fill any empty space left in their column.

Think of your typical Pinterest or tiled gallery of images.

This is another **value** for the template. (For example: `grid-template-columns: masonry;`.)

_An experimental property, barely implemented at the time of writing._

### Auto-Placement

In the examples above, we neatly set a _template_ for our grid and allowed items to fill it.

But what if we had a rogue item? What if we set an item to use "column 4" ... while we only have two columns?

The "auto" properties can be used to control how the grid deals with that. (They are `grid-auto-rows`, `grid-auto-columns` and `grid-auto-flow`. All of them set on the whole container, as this is, again, an issue that is unrelated to individual grid items.)

_In general, it's recommended to define a clear structure and stay within it. This quickly feels like putting a band-aid on an ill thought-out design._

## Conclusion

For most use cases, a grid is really simple.

* Turn the container into a grid (with `display: grid;`)
* Set the size/number of columns (or rows) that you want (with the template)
* Add styles to individual grid items to make it look how you want it to.

It's recommended to go from big to small. First set properties on the _whole_ grid that work for most situations. Only then set the same style on individual _grid items_ that need it. 

{{% example %}}
First set `grid-template-columns` to give your grid 3 columns. But if one item wants to be special and take up two of them, set `grid-column-end` on just that one element. 

The other way around, focusing on small styles and exceptions first, usually means a lot more work and issues later on.
{{% /example %}}

But if you want more advanced designs, you can surely achieve it using all the other properties. You can align, space, reflow, etcetera any way you need.

Hopefully this article gave a short and gentle _introduction_ to what grids can do, and give you the tools to construct the type of grid you'll need 90% of the time.