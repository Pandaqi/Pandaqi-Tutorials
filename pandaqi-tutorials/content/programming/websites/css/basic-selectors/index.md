---
title: The Basic Selectors
weight: 4
type: "article"
codemirror: true
---

Before we can style anything, we first need to _select_ the thing we want to style. This chapter explains a handful of basic selectors---the simplest ones that you'll use the most often---so we can quickly start with actually creating designs.

## Tag Selector

This selects all elements of a certain type. Simply type the tag name. (For example, a `<div>` element is selected with just `div`.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p { /* selects the paragraph tag */
  color: blue; 
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## ID selector

When you learned HTML, you hopefully also learned that every element can take an `id` attribute. This contains a _unique_ identifier (not used by any other element) for this element.

Target such an element with the syntax `#id`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p id="test">This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
#test { /* selects the element with ID test */
  color: blue; 
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Class selector

Similarly, you can assign any number of classes to an element using the `class` attribute. These don't need to be unique.

To style all elements of the same class, use `.class`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<h2 class="test">A heading</h2>
<p class="test">This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
.test { /* styles all elements with class test */
  border-bottom: 2px solid black;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Multiple Selectors

Sometimes, you have a set of styles that you want to apply to several different elements. Fortunately, you don't have to copy-paste it ten times. 

Chain multiple selectors into one by separating them with a comma (`,`).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<h2>A heading</h2>
<p>This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
h2, p { /* applies the rules below to both selectors */
  border-bottom: 2px solid black;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Nesting Selector

Finally, you can build a selector with nested parts.

Why? For example, a typical website has _paragraphs_ in many different locations. You probably want a paragraph in your main text (say your blog article) to look different from a paragraph that's just a remark in your sidebar.

You could assign classes or IDs to all of the different paragraphs. But an easier way is to use something you already have: the hierarchy of your page!

One paragraph will be the child of an `<article>` element (the blog article). The other paragraph will be a child of an `<aside>` element (the sidebar).

To create such a selector, add the parts separated by a space (` `). It should read _parent_ to _child_ from left to right. (So later elements are nested inside earlier ones.)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<article>
  <p>A paragraph inside a well-written blog article.</p>
</article>
<aside>
  <p>Just a quick aside here ...</p>
</aside>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
article p {
  font-size: 20px;
}
&nbsp;
aside p {
  font-size: 12px;
  color: gray;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Conclusion

There are more selectors, but they are (very) advanced and will be explained near the end.

I already doubted whether I should include the "nesting selector", but I choose to do so. Why? Because, next chapter, you will learn how _crucial_ (good) nesting and hierarchy are to CSS as a whole.