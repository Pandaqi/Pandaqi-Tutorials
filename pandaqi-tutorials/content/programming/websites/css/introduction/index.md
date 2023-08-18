---
title: Introduction
overview: true
weight: 1
type: "article"
codemirror: true
---

Welcome to this course about CSS or _Cascading Style Sheets_. It's the language used to _style_ websites. To give them a certain visual design and appearance. Without it, all websites would just be a blank white page with black text in a default font.

You want a different font? CSS!

You want an image in the background? CSS!

You want to play an animation when somebody hovers over a button? CSS!

A few chapters from now, you'll understand what _cascading_ means and why it's important. For now, just remember that CSS means "writing code that tells website elements what they should look like".

As you might have noticed, websites have become a lot prettier (and more complex) over the years! This means that CSS has become a language of considerable size---and new elements are still being added every year. This course is one of the longest on this website.

As such, reading through this course and trying to memorize it all ... is pretty impossible. And overwhelming. 

It's also not the best way to learn! Learning should be fun, fueled by our natural curiosity or desire to achieve a goal.

## Course Structure

Instead, I structured this course a little differently (when compared to the many other CSS tutorials).

* The elements are taught from BIG to SMALL. In other words, within a few chapters, you can already do 90% of the styling of your website. The _first_ chapters are about the first questions you should always ask yourself in any visual design. The _last_ chapters are about tiny, advanced things.
* Regularly, I give you a little challenge. A project to figure out yourself. Actually _doing_ something with the material is the only way it will stick and become second nature. (It helps if you have your own project or goal that you slowly work towards. Probably your own reason for reading this course in the first place!)

I see too many tutorials that start with telling you how to change the color of your text to red or purple, or how to style a link that has been visited. But those are tiny things! Things you might not even need to change in a project! 

This course starts with the big things; the first decisions you'll probably make whenever you work on a design.

## Playful Examples

Additionally, as always, my code examples are interactive! Whenever I present a piece of code, you can immediately edit and change it, right from the page! As such, you don't even need your own website or software to follow along with this course.

Below is an example of such a code block.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
    color: blue;
    border: 2px solid black;
    padding: 5px;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## CSS is always evolving

Finally, there is no "latest version" of CSS. (If you want, you can imagine that we're still on the last "version" from a decade ago, which was CSS3.) The language is constantly being improved and grown. New "modules" are regularly proposed, tested, then finalized.

It is up to _browsers_, however, to implement these modules. Some CSS code might work in one browser, but not in another. Maybe Google Chrome already supports a new idea, but nobody else does. (Apple's Safari is notorious for being five years late to every CSS party.)

Anything included in this course is implemented _everywhere_ (and usually for quite some time now). 

This has two consequences.

* There are options within CSS that this course does _not_ talk about! You can always find the full reference at [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS).
* Whenever unsure, visit [Can I Use?](https://caniuse.com) and type the thing you wanted to use. It clearly shows you if it's supported or not.

This course is _not_ a documentation or reference. Again, check out the MDN Docs for that. 

This course is a practical guide to help you learn CSS, from scratch. Once you understand the different ideas and syntaxes, you'll probably never visit these pages again. Whenever in doubt about something, you'd just Google it or read the details in the docs.

Let's get started!