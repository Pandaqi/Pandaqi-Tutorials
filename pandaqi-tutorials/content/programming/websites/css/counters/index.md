---
title: "Counters"
weight: 30
type: "article"
codemirror: true
---

We are now entering the territory of CSS functionality that you might or might not need. Depending on your designs and content, these chapters might be _crucial_ to you ... or mean nothing. (You have no idea how much trouble I had finding a good _order_ for these chapters, because there just isn't a clear argument for what is the most important topic.)

First up are **counters**. In general, they allow you to style an element differently based on its **location on the page**.

In practice, though, they are almost always used to automatically **number** headings, lists or figures on a webpage.

> A counter is just a numbered variable that CSS can maintain and change as the stylesheet is applied.

There are three steps to using counters.

* **Declare** a counter with `counter-reset`
* **Change** it whenever applicable with `counter-increment`
* Then **display** it whenever you want with `counter(<counter-name>)`

## Declaring a counter

Use the `counter-reset` property, which accepts a name and a starting value. 

As always, you can invent the name yourself. Though keep it "kebab-case". (Also because this automatically prevents you from adding spaces inside the name, which isn't allowed.)

If you leave out the starting value, it defaults to `0`. You can also declare multiple counters in a spaced list.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
h1 {
  counter-reset: sub-level-headings;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

_Why is it called "reset"?_ Because _setting_ and _resetting_ is the same thing. In the end, there's a counter, and it has this new value you assigned.

So yes, you can add multiple of these statements to the stylesheet and "reset" the counter back to zero at certain points.

## Changing a counter

Use the `counter-increment` property, which accepts a name and a number.

If you leave out the number, it defaults to `1`. (So, by default, this property increments the counter by one.)

Negative numbers are allowed.

You might wonder where to place this. After all, CSS isn't "executed". It's a stylesheet applied to a page, once. So when would you increment a counter?

The best way to view it, to me, is that CSS _parses_ HTML pages from top to bottom. In other words, it encounters elements in that order, and applies styles in that order.

As such, if you add the `counter-increment` property to all `h2` elements (for example), it will execute _every time CSS encounters a `<h2>` on the page_.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
h1 {
  counter-reset: sub-level-headings;
}
&nbsp;
h2 {
  counter-increment: sub-level-headings 1;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Displaying a counter

Still, CSS is _not_ a "programming language". It's not executed and stores nothing in memory. As such, this _counter_ value is only available within CSS itself.

This limits its usability (99% of the time) to displaying it inside a **pseudo-element**. Most commonly, a `::before` or `::after` pseudo-element.

To display a counter, use `counter(<name>)` within the `content` property.

In the example below, check the HTML to see that the "section" parts aren't actually included in the HTML! It's completely handled through simple CSS counters.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<h1>Main heading!</h1>
<h2>Sub heading</h2>
<p>Lorem ipsum dolor sit amet.</p>
<h2>Sub heading again</h2>
<p>Lorem ipsum dolor sit amet.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
h1 {
  counter-reset: sub-level-headings;
}
&nbsp;
h2 {
  counter-increment: sub-level-headings 1;
}
&nbsp;
h2::before {
  content: "Section " counter(sub-level-headings) ": "; 
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Conclusion

Counters are a great way to track _hierarchy_ through CSS. They're most useful in longer, more formal (or traditional) documents. It can automatically number headings, figures, appendices, references, etcetera.

Another use case is to control how lists are displayed and numbered (in some advanced way).

If the counters are really important, though, this isn't enough. It's merely a _visual_ change. If you actually need the hierarchy for something else (such as manipulating it with JavaScript), you will need actual attributes that contain these numbers. Which CSS counters can't do, because again, it's just a _visual style_.

{{% example %}}
My board game website contains "playful rulebooks". Some time ago, I realized that rules explanations for games would be way easier and more fun if they were a _web page_ with which you could interact. As you'd expect, I divide my rules into neat sections with headings and reference.

At first, I used CSS counters, which was simple and great. Until I wanted more functionality. I wanted to add a link to "read this section", which, when clicked, would automatically scroll to that section. That requires the sections to be numbered _in the HTML_! Just CSS counters can't achieve that.
{{% /example %}}