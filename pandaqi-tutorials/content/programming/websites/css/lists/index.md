---
title: "Lists"
weight: 22
type: "article"
codemirror: true
---

One element that receives a _lot_ of default styling is the **list**. Without doing anything, browsers will add bullets in front of items and shift them a bit to the right.

This chapter explains the CSS properties that make this possible. Once done, you know how to _disable_ or _change_ this default look for lists.

Now you might think: why would I want to? I don't even use that many lists!

I want to remind you of "semantic" HTML. The meaning of a list is to _group or enumerate related items_. As such, a list element shouldn't only be used within articles. It should also be used for a header that _lists_ different pages on the website you can visit. It should also be used for a comment section that _lists_ the comments in order.

When you write HTML like that, this default styling gets in the way. You don't want bullet points in front of every link in your header!

That's why this chapter is important and it comes relatively early in the course. (I know we're 20 chapters into this course, that's why I said _relatively_.)

## List Style Type

To change what's displayed in front of list items, use the `list-style-type` property.

It supports a _load_ of named values. Below is a list of the most common ones.

* disc ( = the default "bullet")
* circle ( = an _open_ bullet)
* square
* decimal
* decimal-leading-zero
* lower-roman
* upper-roman
* lower-alpha
* upper-alpha

It also supports any string, such as `"-"`. Most importantly, set it to `none` to turn it off.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
li {
  list-style-type: none;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### Symbols & Images

If you want total control, you can set the list style to any image using the `list-style-image` property. (With, as expected, a _url_ to a valid image as the value.)

If you want _different_ bullets per item, use the `symbols(sym1 sym2 ...)` value. You can provide any number of symbols (separated by space) and it will use those.

_Beware! At time of writing (late 2023), this value isn't supported everywhere yet! Try it in Firefox, for now._

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
li {
  list-style-type: symbols("* - @");
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## List Style Position

The default behavior is to place these bullets _outside_ the list item's "box". If you want to move it _inside_ the element, use the `list-style-position` property. It allows two values: `outside` or `inside`.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Some text to contrast the list.</p>
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
li {
  list-style-type: lower-alpha;
  list-style-position: inside;
  border: 2px solid gray;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Removing the Defaults

Besides this, lists automatically add _margin_ and _padding_ to shift the list items to the right. These are set on the `<ul>` (or `<ol>`) element, **not** the `<li>` ( = the list items themselves).

As such, to fully disable the default list styling, use the following.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Some text to contrast the list.</p>
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
ul {
  list-style-type: none; /* inheritance will copy this to its children <li> */
  margin: 0;
  padding: 0;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## In Practice: Header

Now, let's see if we can make a header for a website. 

We want to use a proper HTML structure, which means we use a **list** (inside a **nav** tag).

But it obviously shouldn't look like a list! So we need to style it a little differently.

Below is one approach.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<nav>
  <ul>
    <li>Homepage</li>
    <li>Blog</li>
    <li>Contact</li>
    <li>About</li>
    <li>News</li>
  </ul>
</nav>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
nav {
  background-color: #558888;
  padding: 0.5em;
}
&nbsp;
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
}
&nbsp;
li {
  background-color: #AAFFFF;
  padding: 0.5em;
  border-radius: 0.33em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}
