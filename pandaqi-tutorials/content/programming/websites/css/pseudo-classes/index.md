---
title: "Pseudo-Classes"
weight: 24
type: "article"
codemirror: true
---

The word "pseudo-class" is, in my eyes, needlessly convoluted and intimidating. Its application and syntax are actually very simple.

A pseudo-class is part of the **selector** in a CSS rule. (The part that selects which element to style.)

It doesn't select a different _element_ (or class of elements), however, but a different _state_ of an already selected element. If you ask me, you can call them **state selectors** your whole life. Maybe **condition selectors** if you want to be more precise.

They simply say: "I want element X ... but only if it's in _this state_ or _this condition is met_."

## Syntax

To add a pseudo-class to a selector, place it at the _end_, with a double colon (`:`) in-between.

For example, to select the `hover` state of the `a` element, you'd write `a:hover`. To select all paragraphs that are the first child (of their parent), you'd write `p:first-child`.

Try it out in the example below! If you hover your mouse over the paragraph, it should apply the new CSS rules.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
/* select all paragraphs ... over which the user currently hovers (with their mouse) */
p:hover {
  /* and apply these styles to them */
  color: blue;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

The [list of possible pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) is very long! This chapter only discusses the **most common** ones. Later chapters will mention a few more of them---when most applicable---but not all.

## Links

Perhaps the most common application is to control how _links_ are styled. Links have four total states in which they can be:

* `link` = an unvisited link
* `visited` = a visited link (the exact address is in your browser history)
* `hover` = you hover over the link
* `active` = your currently click the link

In the example, notice how the link becomes black _while_ you're clicking on it. Once you've visited the address to which it points, it's displayed as a different color (to remind you of that).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<a href="https://tiamopastoor.com">This is a link to my author website!</a>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
a:hover { color: green; }
a:visited { color: turquoise; }
a:active { color: black; }
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Tree Traversal

Earlier in the course, I showed how important _inheritance_ and _hierarchy_ are to CSS. When writing selectors, this is how you're able to select more and more specific elements: first by mentioning the parent, then the child.

Pseudo-Classes can help out even more. 

Maybe you want the introductory paragraph of your blog articles to have a bigger font size. How do you select the _first_ paragraph? Use a pseudo-class. (In this case, `first-child`.)

Or maybe you created a design for elements that looks great ... except when the element is empty (no content). How do you select such elements? Use a pseudo-class! (In this case, `:empty`)

Below is a list of pseudo-classes that only select an element if it has a specific place in the hierarchy.

* `first-child` = it's the first child of its parent
* `last-child` = it's the last child of its parent
* `only-child` = it's the only child; its parent has no other elements
* `first-of-type` = it's the first appearance of _this specific tag_ inside the parent
* `last-of-type` = it's the last appearance of _this specific tag_ inside the parent
* `only-of-type` = it's the only appearance of _this specific tag_ inside the parent
* `empty` = this element has no children

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<article>
  <p>Hey, this introductory paragraph should be bigger. To attract attention and show that the article starts here!</p>
  <p>From that moment, though, we can just return to regular font size.</p>
  <p>For all subsequent paragraphs, that is.</p>
</article>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p:first-child {
  font-size: 1.5em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

_What if I want to select a different element than first or last?_ You can!

But I am going to purposely withhold that information until the moment I can give much better examples. Explaining it now would just be needlessly complicated. Stay tuned for the chapter on [Tables](../tables/)!

## Language

Another common use case is to style elements differently if they're in a different _language_. (Without different styling, it easily becomes confusing for readers when language suddenly switches.)

For that, use `lang(language-code)`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This is a paragraph in English.</p>
<p lang="nl-NL">Deze paragraaf is daarentegen geschreven in het Nederlands.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p:lang(nl-NL) {
  font-style: italic;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Pretty Selectors

Now that you've been writing CSS for a while, you might have noticed that you sometimes need a lot of duplicate selectors.

For example, maybe you want to apply a certain style to _links_ within **three different possible parents**: a paragraph, a list item, and the footer. 

How'd you write that?

{{< playful-code nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
p a, li a, footer a {
  /* ... styles here ... */
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

It's a lot of repetition. With more specific or advanced rules, this can grow messy quite quickly.

Pseudo-classes to the rescue again!

* `is(selector-list)` matches any element from the list of selectors
* `where(selector-list)` does the same

_Wait, so what's the difference? Why two syntaxes?_

The first (`is`) _adds_ to the specificity. It's counted as an extra element in the selector, increasing specificity of the rule. (And remember that a higher specificity means it overwrites other rules.)

The other (`where`) does _not_ add to the specificity.

The list of selectors can be anything, as long as they're separated by commas (`,`).

This allows us to rewrite the example to ...

{{< playful-code nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
:is(p, li, footer) a {
  /* ... styles here ... */
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Inverse Selector

And finally, we can do the inverse. We can select all elements that do **not** match a specific condition.

As expected, this uses the `:not(selector-list)` pseudo-class.

The example below selects the first paragraph, but not the second. Because the second has the class `.dont-select`, so our inverse pseudo-class tells us to avoid it. (Check the HTML to see what I mean.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
<p class="dont-select">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p:not(.dont-select) {
  font-style: italic;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}