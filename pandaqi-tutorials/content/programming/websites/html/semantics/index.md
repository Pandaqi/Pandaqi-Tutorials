---
title: "Semantics"
weight: 4
type: "article"
codemirror: true
---

Many courses on HTML don't talk about this, or leave it until the end. I put it at the start because it's absolutely the most important thing to learn right now.

> Semantics means that things _are_ what they _say they are_.

You should use tags that fit the content as precisely as possible. If you have an article with five paragraphs, mark each of them individually as a _paragraph_. Don't throw them all into _one_ paragraph. Don't pick a more generic tag, such as the `<article>` you saw previous chapter.

Similarly, HTML provides multiple headings: `h1` up to and including `h6`. The number behind them is for their priority or weight. An `h1` should be the _most important thing on your page_. It's the first heading, the biggest one! 

Unfortunately, many (beginning) web developers only see "hey, that's a heading tag and it makes text BIG and BOLD, let's use that whenever I want BIG and BOLD text". This destroys its meaning, making the markup of your page ... worthless. There can only be _one_ "most important thing", right?

{{< playful-code lang="html" >}}
<h1>Hey, I'm a very important heading</h1>
<p>Blabla.</p>
<h1>I want to be BIG!</h1>
<p>Well, this is confusing. Which of the two headings is actually the most important heading?</p>
<h1>Look at this large font size</h1>
<p>Stop it!</p>
{{< /playful-code >}}

Why does this matter?

**It helps you** (and anyone working on the website with you). If everything is labeled clearly and correctly, you will prevent many issues (or wasted time searching for what something is supposed to represent). Compare it to food inside your refrigerator. If all the food is labeled with something you thought "sounded cool", instead of what's actually inside, you're going to have a hard time finding the food you're looking for.

**It helps the computer.** Search engines (such as Google) rely on your HTML to _understand_ your website. If it's incorrect, your website won't be found by people searching for its content. Similarly, code editors will help you with coding if they understand the structure of your document.

## An example of semantics

In the old days, people didn't care about semantics. We're still feeling the effects of those old, messy websites to this day :p

For example, one of the earliest HTML tags was `<i>`. It made text _italic_ (like the word you just read). 

Hopefully you see the issue. This has no _meaning_. It's purely a _visual_ thing. As such, people would use this tag all over the place just because of how it _looked_, destroying the structure of their page. 

Is this text in italics because it's important? Because it's not important? Because it's an email address and you think they look better when slanted?

We don't know! The tag tells us nothing!

Let's pick one of the use cases: we want to emphasize that a piece of text is important. (As I often do while writing.) Nowadays, people would use the `<em>` tag. You can style it however you want! You can still make it _italic_!

But the HTML doesn't care. All it cares about, is marking your document. The `<em>` tag stands for _emphasized_, and thus has meaning. This element is (slightly) more important than the text around it.

Even so ... to this day ... if you look up HTML tutorials, you might just stumble upon articles using that dreaded `<i>` tag ...

## Whitespace

Maybe you already noticed something strange while playing with the examples. You added multiple empty lines, but they were somehow ignored. When you added multiple spaces after each other, they were reduced to just one. 

If you hadn't noticed, see the example below. When executed, all that empty space is just removed.

{{< playful-code lang="html" >}}
H
e
l
l
o
t
h
e
r
e
{{< /playful-code >}}

Why?

> HTML collapses whitespace.

HTML asks you to use _tags_ to divide your content into elements. Empty space, such as a new line or pressing the spacebar, is not a tag. So it throws all of that away and reduces it ("collapses" it) to only a single space character.

If you really need multiple empty spaces, use the proper HTML tags for that. Actually, the second on is an "entity", which you'll also learn soon.

* `<br>` creates a new line ("line <strong>br</strong>eak")
* `&nbsp;` adds a single space (<strong>n</strong>on-<strong>b</strong>reaking <strong>sp</strong>ace)

{{< playful-code lang="html" >}}
<p>Hello&nbsp;&nbsp;&nbsp;there.<br><br/>This should be on a new line.</p>
{{< /playful-code >}}

However, remember about _semantics_. What do these elements say? What meaning do they have? **Nothing**! 

They are purely visual. They add whitespace to push text further apart.

That's not what HTML was made for. (For that, you should use CSS, which is the course I recommend after this one.) Adding stuff inside your HTML which does _not_ convey meaning, is bad.

Yes, it is tempting. Yes, it is sometimes faster than doing it the proper way. But after you've made a few webpages, you'll intuitively understand why semantics matter.

For example, what would be the proper way to add line breaks? You probably wanted a line break because a new piece of content started, like ... a new paragraph.

{{< playful-code lang="html" >}}
<p>Hello there.</p>
<p>This should be on a new line.</p>
{{< /playful-code >}}

{{% remark %}}
As you see, I often add whitespace around elements to make code prettier to look at. Now you also know that this isn't necessary: it's a personal choice for readability. You could throw all the HTML on a single line, or add copious amounts of whitespace---HTML would collapse all of that anyway.
{{% /remark %}}

## Conclusion

Make it a good habit to use tags that describe their content, as specifically as possible. You'll be rewarded with ... fewer issues in the future, and better results in search engines.

When unsure, look up all the tags available and pick the best one. It also isn't too hard to change a few tags later, if you realize you need something else.
