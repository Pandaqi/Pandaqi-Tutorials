---
title: "Comments"
weight: 11
type: "article"
codemirror: true
---

Like any computer language, HTML provides the ability to leave _comments_. Such comments are are completely ignored by the computer---they are for _you_, the programmer. They might be a reminder about "hey, you still need to improve this part". They might explain what you did to somebody else using your code later. They might help add even more structure.

To create a comment, use two special tags: `<!--` and `-->`

{{< playful-code lang="html" >}}
<!-- @TODO: Split this into MULTIPLE paragraphs -->
<p>
Hello, today we're going to talk about web languages. Bla bla, bla bla. Lots of text, lots of text.
</p>
{{< /playful-code >}}

When the file is displayed, these comments don't do anything. (And if you use a different system and then export to HTML, the comments are completely stripped away in most cases. I do that as well, which is why you won't find comments in the source code of this website.)

Another common use case is to quickly remove a part of the web page. Place it between the comment tags, and it will be ignored. It allows you to rapidly see what the page looks like _without_ that HTML. (Without the need to copy-paste, potentially lose it, or create multiple versions of the file.)

Try it in the example below. Removing the comment tags should bring back our paragraph!

{{< playful-code lang="html" >}}
<!-- 
<p>
Hello, today we're going to talk about web languages. Bla bla, bla bla. Lots of text, lots of text.
</p>
-->
{{< /playful-code >}}

Now I've taught you everything I can without explaining what _attributes_ are. (The second component of HTML, which I mentioned at the start, remember?)

It is time. Let's see what an attribute is.