---
title: "Advanced Selectors"
weight: 28
type: "article"
codemirror: true
---

At the start of this course, I mentioned that I only explained the _basic_ selectors to you. As a quick refresher, here they are again.

* Grabbing an element by id (`#id`) or class (`.class`)
* Or tag name (`p`)
* Or through the hierarchy (`article p a`)

This chapter will finally explain the more advanced selectors. Those can be incredibly useful from time to time. So why didn't I explain them earlier? 

* Because they might overwhelm people new to CSS. (They're less simple than the basic ones.)
* Because people tend to rely on them too much and overcomplicate their CSS. 

You really only need these in very specific situations. If you need them all the time, rethink what you're doing. For example, consider the fact that I _haven't used any of these_ in all the examples in the course so far. Did you miss them? Did I miss them? Nope. (Though, admittedly, these examples are always simple and tiny.)

They come in three flavors: **glue selectors**, **attribute selectors**, and **combinators**.

## Glue Selectors

You can **glue** multiple ID or class selectors together (against each other or a tag name). To do so, you literally just type them _without_ a space in between.

For example, the selector `p.some-class` would select all paragraphs that _also_ have class `some-class`. 

Similarly, `h1.some-class.some-other-class` selects all headings that _also_ have class `some-class` _and_ `some-other-class`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
<p class="different-color">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: red;
}
&nbsp;
p.different-color {
  color: blue;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

As you see, this is great for getting a more _specific_ version of an earlier selector. Especially if that earlier selector is a very broad one with many matches (there are usually many _paragraphs_ on a single page), this is how you can narrow it down for certain elements. 

But ... you can usually get away with just assigning a unique _class_ to elements that should be styled in a unique way. As such, most of the time, you don't need a glue selector---you just need to give an element its own (well-named) class and style that.

## Attribute Selectors

An **attribute selector** will only select elements that have a certain HTML attribute. 

The syntax `[attr="value"]` matches all elements where attribute _attr_ is equal to _value_. Note the quotes (`"`) around the value.

The most common use case is probably to style input elements. (Because almost all input, no matter how wildly different, uses the same `<input>` tag. You really need an attribute selector to hone in on one specific type.)

But it works for everything. This is a very efficient way to select a subset of elements that share an attribute. (Something which you can, obviously, control. In a sense, by handing out attributes then selecting for them, you can "group" any set of elements on the page.)

In the example below, notice how only one of the input elements is styled (thanks to our attribute selector).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<input type="text">
<input type="number">
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
input[type="text"] {
  width: 100%;
  padding: 1em;
  border: 2px solid gray;
  margin-bottom: 1em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Instead of the equals sign (`=`)---which wants an _exact match_ with the value---you can use a handful of other symbols.

* `~=`: selects if attribute is NOT equal to value
* `^=`: selects if attribute _starts_ with value (`^=te` matches `text`)
* `$=`: selects if attribute _ends_ with value (`$=xt` matches `text`)
* `*=`: selects if attribute _contains_ the value (`*=ex` matches `text`)
* `|=`: selects if attribute matches value _or_ values with a hyphen (`-`) after it

This is another case, however, of "do you really need it?" It's nice that CSS supports this, but if you use more than one or two of these, you either have a _very_ special project or need to simplify your approach.

## Combinators

You ... already know one of these!

The "hierarchy selector" I explained at the start is actually also a _combinator_ and officially called the "descendant selector". 

They are called **combinators** because they, well, _combine_ multiple selectors. In this case, they are combined with a space in-between, which signals they are children of each other. (For example, `article p` selects all paragraphs that are a child of an article tag.)

Three more of its kind exist.

* **Direct child selector**: use `>` to select only direct children. (So no other element/parent in between, in the hierarchy.)
* **General sibling selector**: use `~` to select only elements at the same level of the hierarchy. (It should have the same _parent_ node, hence why they're called _sibling_ elements)
* **Adjacent sibling selector**: use `+` to select only siblings that come _immediately_ after the element before it.

In the example below, try to rewrite the CSS to select the _second_ paragraph instead. (Try to come up with as many possible valid selectors as you can!)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div>
  <p>A direct child of a div, hence styled.</p>
  <span class="remark-or-something">
    <p>Not a direct child, as there's another element in-between (in the hierarchy), hence not selected.</p>
  </span>
</div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div > p {
  color: red;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## In Practice: book formatting

A common use case for a combinator appears when you're styling _books_. 

As mentioned before, books like to have their paragraphs glued together (zero `margin`). To signal the start of a new one, the text is indented (with `text-indent`).

But ... what must we do with the very _first_ paragraph? It looks ugly to indent it, so you make an exception for that one---and that one only. It should just start at the edge.

How do we select all paragraphs in a row _except_ the first one?

Well, by only selecting paragraphs that are a direct _sibling_ of a paragraph before it. We use the `+` combinator!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  margin-bottom: 0;
  margin-top: 0;
}
&nbsp;
p + p {
  text-indent: 2em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}
