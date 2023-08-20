---
title: "Tables"
weight: 35
type: "article"
codemirror: true
---

Last chapter talked about the endless default styling of forms and input, which needs a multitude of pseudo-classes and pseudo-elements to style yourself.

Tables are similar, but fortunately much simpler.

## Default Styles

The default styling for tables ...

* Makes cells a small, fixed size.
* Makes the table header (`<th>`) _bold_ and _center aligned_.
* Sneakily adds a bit of extra space around the cells.
* Adds nothing else. No border, no way to differentiate cells.

See the example below.

{{< playful-code >}}
{{< playful-code-tab lang="html" >}}
<table>
  <tr><th>Col 1</th><th>Col 2</th></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
</table>
{{< /playful-code-tab >}}
{{< /playful-code >}}

## A better default

Again, I personally like to make the tables full size and to add ample space.

Alignment depends on the data. Small bits of text likes to be center-aligned. Numbers are right-aligned (to make sure decimal places line up), otherwise choose simple left-aligned.

To remove the sneaky spacing and borders, change `border-collapse` and `border-spacing`. (Of course, if you like this look or need it, change their values to something else!)

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<table>
  <tr><th>Col 1</th><th>Col 2</th></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
</table>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
&nbsp;
td, th {
  padding: 0.5em;
  border: 1px solid gray;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
There used to be specific HTML attributes just for the border, color and spacing of a table. But those have all been deprecated. You should just handle tables as a regular box, containing lots more boxes ( = cells), and style them the usual way.
{{% /remark %}}

## Alternating Colors

The biggest issue, however, is a clear (and pretty!) separation of cells. The border in the example above is functional, but not exactly beautiful.

The best solution, for tables, is to use alternating colors. You pick two shades of the same color (say, red and a lighter red), then alternate between them as you color the rows.

For this, I need to introduce a new pseudo-element: `nth-child`. 

{{% remark %}}
There's also `nth-of-type`, but that's not used here.
{{% /remark %}}

This is a function: it requires input by you. 

Sure, you can give it a straight number. You want to color row 1, 3, 5, 7, etcetera? You could write a new rule for each of them ... and you'd be wasting your time writing terrible CSS.

Instead, you can also input a **formula that uses the variable** `n`. 

How does that work?

* CSS will fill in whole numbers for this `n` (0, 1, 2, 3, 4, 5, ...). 
* And use the result of applying this formula to select the children.

{{% example %}}
If your formula is `n - 1`, then it selects all children ... except the first. That one becomes `-1`, which is impossible to select, so CSS ignores it.
{{% /example %}}

So, how do you select all _even_-numbered rows? Use the formula `2n`. The resulting list is 0, 2, 4, 6, 8, and so on. In other words, `:nth-child(2n)` selects row number 0, row number 2, row number 4, etcetera.

Odd-numbered rows? Use the formula `2n + 1`. The resulting list is 1, 3, 5, 7, 9, and so on.

Now you can select alternating rows, as seen in the example below.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<table>
  <tr><th>Col 1</th><th>Col 2</th></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
  <tr><td>Val 1</td><td>Val 2</td></tr>
</table>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
tr:nth-child(2n) {
  background-color: #FAFAFA;
}
&nbsp;
tr:nth-child(2n+1) {
  background-color: #DDDDDD;
}
&nbsp;
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}
&nbsp;
td, th {
  padding: 0.5em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Try out different colors and styles. Experiment with the `nth-child` selector and funky formulas you can come up with. See if you can add a border and make that look good!