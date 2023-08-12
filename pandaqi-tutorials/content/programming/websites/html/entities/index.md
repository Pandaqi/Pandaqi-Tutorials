---
title: "Entities"
weight: 27
type: "article"
---

You are almost at the end of the HTML course. Hopefully, you've already tried to built a few websites to test your skills and practice them. As stated at the start, you learn nothing by simply reading or memorizing---you learn by _doing_! So if you haven't, this is the time to try and imitate your favorite website, or build some silly webpage that practices forms.

Because now we're going to talk about that third component of HTML: **entities**. They are a much smaller, more niche part of the language. Some people build multiple websites without even learning they exist. (Or they use a few of them from memory, but don't really know what they mean or do.)

At the same time, in certain situations, they are crucial.

Let me give an obvious example.

What if ... you want to type a "less than" mark on your webpage (`<`)? It wouldn't work. Because HTML recognizes that and thinks: "hey, that's the start of a _tag_, let's consider the text after it a _tag_!"

Any computer language has these "reserved" symbols that require a different way of writing them (if you want to include the symbol itself, not its meaning to the language). HTML solves problems like these, and many others, with **entities**.

In this case, you'd type `&lt;` (lt = "less than"). The other one is, of course, `&gt;` (gt = "greater than").

{{< playful-code lang="html" >}}
<p>To create a paragraph, use a <code>&amp;lt;p&amp;gt;</code> tag.</p>
<p>To create a paragraph, use a <code><p></code> tag.</p><!-- Issues! -->
{{< /playful-code >}}

## Syntax

There are two ways to write an entity. In both cases, they start with an ampersand (`&`) and end with a semicolon (`;`)

* `&entity_name;`
* `&#entity_number;`

It's often easier to remember the entity by name. Other versions of HTML, however, don't recognize this and require the (unicode) number.

{{% example %}}
_Ebooks_ (at least so far) don't support named entities. You must write the number variant, or the ebook doesn't want to open. Yes, the ebook standard is an _outdated mess_. I've learned this fact, and many others, through hours of frustrated debugging of my first ebook.
{{% /example %}}

A logical consequence is, of course, that you also need an entity if you actually want to write an ampersand ;) Use `&amp;` for that.

At the start of this course, I also talked about whitespace and introduced the non-breaking space. Now you know that this is just another entity: `&nbsp;`

{{< playful-code lang="html" >}}
<p>I want to display an ampersand, so I do &amp; or &#38;. If I just did & and continued, HTML might think I wanted to start an entity.</p> 
{{< /playful-code >}}

## Where can I find these?

Just Google them. Many great websites exist that list all the entities in a clear (and easily searchable) way. 

Surely do **not** _memorize_ them. Look them up when needed, copy-paste, and you're good.

When in doubt, use an entity. They clearly communicate the symbol that's supposed to go there, and don't risk being mistaken by HTML for a tag or element. 

Last chapter also mentioned that the character set of your document matters. If an entity is supported, it will be identical in all character sets. This provides more certainty than typing the symbol directly and hoping for the best. (The fact that it displays fine on _your_ screen/editor, doesn't mean it will display that way on another.)

Finally, they allow an easy way to type things that a regular keyboard doesn't do, such as opening and closing quotes.

{{< playful-code lang="html" >}}
<p>&ldquo;You can't HANDLE the truth!&rdquo; he yelled.</p> 
{{< /playful-code >}}