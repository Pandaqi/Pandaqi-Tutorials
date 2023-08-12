---
title: "Tables"
weight: 20
type: "article"
codemirror: true
---

As expected, the `<table>` element is meant for content that is a _table_. Tables are complicated, however, so it requires a lot of other tags to add the proper structure.

When using them, remind yourself that this structure is _good_. It allows the computer (search engines, screen readers, ...) to understand your content perfectly, and it allows you to easily style the table later.

Tables are perhaps the best example of why semantics matter. In the old days, CSS wasn't good enough yet to easily place stuff in a _grid_. But grids are nice. Many websites wanted a home page with a grid of articles or images.

So what did people do? People started using HTML _tables_ to achieve this layout. 

The result was a confusing mess, both for the programmers as well as the search engines. The HTML clearly stated "this is a table", but the content wasn't a table at all! The element was only used for how it _looked_, not for its _meaning_.

Nowadays, creating grids or table-like visuals with CSS is _easypeasy_. So only use the `<table>` tag when displaying content that is actually a table.

> A table is the most efficient way to combine _multiple_ pieces of data and how they intersect.

For example, the columns are different models of smartphones, and the rows are different features. A table is the best way to present this crossing of information: for each smartphone, it can show whether the feature is present or not.

I use tables often in my courses, when I need to list multiple things at once. Such as "attribute" + "values it takes" + "what it does". (When only listing one thing ... use a list.)

## Head vs Body (again)

Hopefully, you see this recurring theme throughout the whole course. It's a valuable lesson to learn in general: when working with data (or "content"), you always have these two parts: the content itself, and information _about_ the content.

Tables are no different. Your first step is to create a `<thead>` and `<tbody>` element. The header will contain the names for the columns, the body the actual table. (A `<tfoot>` element also exists, for footnotes to the table.)

{{< playful-code lang="html" >}}
<table>
    <thead></thead>
    <tbody></tbody>
</table>
{{< /playful-code >}}

Well ... I don't see anything yet. Let's add some content to the table.

{{% remark %}}
These elements are optional. Remember, HTML is lenient, browsers will just **add** the head and body if you leave it out. But also remember how I warned you about this: don't rely on browsers, be precise and correct yourself.
{{% /remark %}}

## Rows & Columns

Tables in HTML are laid out vertically, then horizontally. In other words, 

* You first define the _rows_ (moving down)
* Inside each row, you define the different _cells_ (per column, moving left to right)

To create a row, use the `<tr>` tag. This is true for both the head and the body.

To create a header cell, use `<th>`. This refers to the cells in the first row and column, those that _describe_ the meaning of the row/column.

Otherwise, use `<td>` ( = table data) for all other cells.

{{< playful-code lang="html" >}}
<table>
    <thead>
        <tr>
            <td></td>
            <th>HTML</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Cool?</th><td>Yes</td>
        </tr>
        <tr>
            <th>Difficult?</th><td>No</td>
        </tr>
    </tbody>
</table>
{{< /playful-code >}}

Notice how the browser makes the headers **bold** and centered by default.

## Regular vs Irregular

Notice how I have to provide the same number of columns in each row. (Two for each, in the previous example.) Even if empty, you must make sure all rows have the same size. That's the basic, default, regular table.

But what if you want some cells to cover a larger area? What if you want a heading to span multiple columns? Then you create an irregular table through certain _attributes_.

* `colspan`: how many columns this cell should span (a number)
* `rowspan`: how many rows this cell should span (a number)

There's only one rule: the numbers still have to add up. In the end, all rows should have the same number of columns, and all columns the same number of rows. It is now upon _you_, the developer, to make sure this is true.

{{< playful-code lang="html" >}}
<table>
    <thead>
        <tr>
            <td></td>
            <th>HTML</th>
            <th>CSS</th>
            <th>JS</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Cool?</th>
            <td colspan="2">Yes</td>
            <td rowspan="2">Maybe</td>
        </tr>
        <tr>
            <th>Difficult?</th>
            <td colspan="2">No</td>
            <!-- no third column here, because the cell above has rowspan 2 -->
        </tr>
    </tbody>
</table>
{{< /playful-code >}}


## Caption

You can add a caption to your table with, unsurprisingly, the `<caption>` element. This must, however, be the _first_ element in the table.

{{< playful-code lang="html" >}}
<table>
    <caption>Table with features of HTML.</caption>
    <thead>
        <tr>
            <td></td>
            <th>HTML</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Cool?</th><td>Yes</td>
        </tr>
        <tr>
            <th>Difficult?</th><td>No</td>
        </tr>
    </tbody>
</table>
{{< /playful-code >}}

## Colgroups

You might have a table where multiple columns belong together. Perhaps you want to style them similarly. You can do this using the `<colgroup>` element. This element must come after the caption, but before the rest of the content.

_Why not use a `<div>` or something?_ Because a table will think the whole div is just _one cell_. Because, well, it is _one element_. It will ruin both the meaning of the table and how it's laid out.

No, tables should follow the regular structure I explained above. To group them ...

* Create a new `<colgroup>` element.
* Inside, add `<col>` elements (until you've described all columns). Each can take a `span` attribute, which is a number saying how many columns this group spans.

{{< playful-code lang="html" >}}
<table>
    <caption>Features of web languages</caption>
    <colgroup>
        <col>
        <col span="2" class="html-versions">
        <col span="2" class="css-versions">
    </colgroup>
    <thead>
        <tr>
            <td></td>
            <th>HTML4</th>
            <th>HTML5</th>
            <th>CSS2</th>
            <th>CSS3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Cool?</th>
            <td>A bit</td><td>Yes</td>
            <td>Slightly</td><td>Yes!</td>
        </tr>
        <tr>
            <th>Difficult?</th>
            <td>Not really</td><td>No</td>
            <td>Nah</td><td>Depends</td>
        </tr>
    </tbody>
</table>
&nbsp;
<!-- Don't worry! This is a bit of CSS, to make sure you can see the colgroups -->
<style type="text/css">
.html-versions {
    background-color: violet;
}
.css-versions {
    background-color: lawngreen;
}
</style>
{{< /playful-code >}}

The alternative is to manually assign the same class to all cells in the group. That way, you can grab the whole group easily using CSS or JS later. And you still communicate, to the computer, that these cells belong together.

Now we're finally ready for some more _interaction_!