---
title: "Code Formatting"
weight: 10
type: "article"
codemirror: true
---

Once you try to format something related to _computers_ or _code_, you run into an issue. Your webpage is code, but its content is _also_ code. 

How does the computer know which one it should _execute_, and which one it should _display_? How do we clearly signal that something is regular text, and another thing is computer code?

For example, if I type `<p>`, how does the computer know I don't want to start a new paragraph? How do I tell it I want to _display_ the text, instead of use it as HTML?

That's the first reason why we have quite a few tags related to computer code. The second reason is that the internet started as a network for universities to share their research. In the early days, the internet mainly contained mathematics, code, and similar programs. As such, the earliest tags were built to support that.

The third reason is that we have another issue. Remember how HTML collapsed whitespace? That's nice and all when we have natural text. There's no reason to add multiple spaces between words, for example.

But when it comes to code, and perhaps something like poetry, whitespace _matters_. And it matters a lot. We want to preserve it.

All those reasons led to the tags mentioned below.

## Code

To display an _inline_ code element, use `<code>`.

To display a _block_ code element, use `<pre>` ( = preformatted text).

Both elements will turn the content into a monospaced font. (Such a font is always used when programming, as it makes the code look consistent and easier to read. Monospaced means all symbols have the exact same height and width.)

They'll also turn off that rule about "collapsing whitespace".

However, they **don't** "ignore" tags. If you type a tag inside an HTML document, it will recognize it and use it. To avoid that, convert the brackets to their entity: `&lt;` (lower than = "<") and `&gt;` (greater than = ">").

{{< playful-code lang="html" >}}
<p>I want to display the <code>&amp;lt;p&amp;gt;</code> tag!</p>
<pre>
Whatever I type here
    Is displayed exactly
        As I typed it
</pre>
{{< /playful-code >}}

{{% remark %}}
Don't worry, you'll learn about the other two components of HTML soon: attributes and entities.
{{% /remark %}}

_But isn't that a visual thing? Shouldn't you do that with CSS, as you've been telling us?_ Good question.

First of all, it also has meaning. The tag `<code>` clearly indicates that it contains, well, _code_. The tag `<pre>` indicates the same thing, but slightly more generally.

Secondly, this is my only exception. Collapsing whitespace is such a _core_ element of HTML, that a tag that turns it off is a big deal. These days, you can also do this through CSS, but that wasn't the case for a long time. Even so, I've had projects where the CSS solution just didn't work, and using the original tag for how it kept the content unmodified was the only way.

## Other tags

Tag | Description |
--- | ----------- |
`<kbd>` | For keyboard input. |
`<output>` | For output of a computer program or procedure. |
`<samp>` | For a sample of a bigger computer script or output. (Not deprecated, but usage is very rare.) |
`<var>` | For a variable within a program or procedure. |
`<template>` | Hides and doesn't parse its content, but does keep it on the page. |

The `<template>` tag might feel silly. If you want something hidden, just remove it entirely, right? Or use CSS to make it invisible?

Yes, you are right, and it's good to realize that. You're getting an intuition for semantics---for what HTML should do, and what CSS should do. It'd take too much time to properly explain a use case for it here, but know that they exist.

{{< playful-code lang="html" >}}
<p>Press <kbd>Ctrl+C</kbd> to perform magic. The algorithm should spit out: <output>Magic unsupported, please upgrade your PC.</output></p>
{{< /playful-code >}}