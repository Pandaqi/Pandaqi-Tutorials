---
title: "Text Formatting"
weight: 9
type: "article"
codemirror: true
---

Moving on, we've now reached pretty much the smallest elements you can give meaning. These are all inline elements, added around small pieces of content. As always, use them for their _meaning_, not for how they might _look_ by default.

## Formatting

These are your basic formatting elements. These are also the first thing you see in a text editor, such as Microsoft Office, and the things you'll use most often.

Tag | Description |
--- | ----------- |
`<strong>` | To heavily emphasize text. (**Bold** by default.) |
`<em>` | To emphasize text. (_Italic_ by default.) |
`<sup>` | For <sup>superscripted</sup> text. |
`<sub>` | For <sub>subscripted</sub> text. |

You probably know superscript/subscript from mathematics and science. But they're also used for footnotes or references, and sometimes even remarks about a specific word. In general, they provide some details or extra info _about_ the word to which they're attached.

{{< playful-code lang="html" >}}
<p>
    There's this <strong>famous formula</strong> and it goes like a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>.
</p>
{{< /playful-code >}}

## More specific tags

I'm honestly not sure why these tags were added early on (while HTML was being developed), but not others that you might expect (like an `<email>` tag). Anyway, here's the table.

Tag | Description |
--- | ----------- |
`<abbr>` | For acronyms or abbreviations. |
`<address>` | For contact information, both physical (like a location) or digital (email or social media). |
`<dfn>` | Specifies a word or term that will be defined inside the content. |

{{< playful-code lang="html" >}}
<p>
    It's called <dfn>Pythagorean's Theorem</dfn>, or <abbr>PT</abbr> for short.
</p>
{{< /playful-code >}}

## Quotes & Citations

Quotes are used when referring to something else, from another source, usually _literally_ (without changing anything). 

These are from "outside the flow" of the current text. For example, you can quote _yourself_ ... from ten paragraphs ago. Or you can cite the exact title of a book you're going to talk about.

Tag | Description |
--- | ----------- |
`<q>` | For referencing a specific term or name mentioned earlier. (Most browsers add quotes by default.) |
`<blockquote>` | For referencing an entire string of text from another source. (Indented by default.) |
`<cite>` | For citing the exact title of a work, place, person, whatever. (Italic by default.) |

{{< playful-code lang="html" >}}
<p>We asked Tony, the writer of <cite>The Life of a Panda</cite>, for comment.</p>
<blockquote>I believe this book will change the lives of many people and panda's alike, and I firmly deny any allegations that I don't actually have the faintest clue about how pandas work.</blockquote>
{{< /playful-code >}}

If you're not used to it, you might forget when to use one of these tags. Remember the general rule: it's for referencing _external_ things, outside the flow of the current content. (Often literally, but it doesn't need to be.)

## Editing

Most formatting standards arose from _editing_. As most writers know: "all writing is rewriting". It wouldn't surprise me if more time is spent on marking edits and changes for novels, than actually formatting the original novel.

This is still true for webpages, depending on your purpose. For example, you often see authors updating blog posts _after_ publishing them. They'll use these elements to signal what changed, so visitors know the original article was different, or that updates were added.

Tag | Description |
--- | ----------- |
`<del>` | For content that has been (or should be) deleted. |
`<ins>` | For content that has been (or should be) inserted. |
`<mark>` | For content that should be highlighted or marked for whatever reason. |

The `<mark>` tag can be used similarly to a real life (colored) marker, used to highlight passages of a text book.

{{< playful-code lang="html" >}}
<p><del>People suspect that pandas are related to penguins, as both are black and white.</del> Research has shown pandas and penguins are not related at all.</p>
{{< /playful-code >}}

## Conclusion

Next chapter will also talk about text formatting, but only tags related to _computer (code)_ content.

Why? Because it has many tags, including a few crucial ones related to that "whitespace collapsing" that HTML does. If you don't aim to markup content related to computers or code, you can skip it.

But I promise it's useful information, and I will explain _why_ there are so many computer-related tags.