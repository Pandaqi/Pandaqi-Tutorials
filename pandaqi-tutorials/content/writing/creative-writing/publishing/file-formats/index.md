---
title: "File Formats"
type: "article"
weight: 11
---

When it comes to publishing, services generally accept or output 4 formats.

* Word documents (`.doc` or `.docx`)
* PDF documents (`.pdf`)
* EPUB documents (`.epub`, maybe `.mobi`)

## Microsoft Word

Many writers, especially those that just start out, simply create their novels in Word. This is fine. Unless you have special requirements, this is all you need. 

Its **advantages** are ...

* Because it's so common, most services have _great_ support for reading and modifying word documents---better than any other format.
* This is has been the standard for many years and I don't see that changing any time soon.
* Word has a very friendly user interface and _lots_ of functionality
* Most people are familiar with it and most other text editors can also open it.

The **disadvantages** are ...

* Things might look different on another person's computer (or the server of a publisher). It's easy to make a mistake here. Maybe you used a special font which wasn't transferred with the file, or you used images on your local computer which weren't baked into the document.
* Some quite common operations are hard to do or downright impossible.
* Your content is "locked" inside this Word format. For example, you can't do a "find and replace" across multiple Word documents, but you can if they're simple text documents.

Another common file format is RTF (_Rich Text Format_; `.rtf`). This is basically a text file, but with small bits of markup that allow you to add extra styling. Hence "rich text". 

I personally love this, because it removes some disadvantages listed above. (You can use any text editor and nothing is locked inside some format.) But it's pretty unknown and requires some knowledge of computer languages, so I'd recommend most writers to just ignore it.

## PDF 

It stands for _Portable Document Format_. It was literally designed to ensure a document looked _exactly the same_ everywhere.

That's why I prefer to export things to PDF and submit that. (Most services seem to prefer that as well.)

You should **not**, however, actually _write_ the novel as a PDF file! I've studied the code behind PDF documents for a bit, and it's a _mess_. PDFs are notoriously hard to scrape or "read from", as everything is baked into it.

Use any other software. Use any editor you like. Then _export_ it to PDF at the end.

That's the **advantage**: you are certain that it will look exactly the same everywhere. (And it's hard to tamper with PDFs later by malicious actors.)

The **disadvantage** is, of course, that you don't want this fixed layout when it comes to _ebooks_. A PDF can't resize or adjust to screen dimensions. (Although some more advanced ereaders _try_ to understand the PDF and help with this, it usually fails and isn't something to rely on.)

## EPUB

This is the format for ereaders. Behind the scenes ... it is just a website! Yes, an epub is just a bunch of webpages packaged into a single book file. (With a _table of contents_ and some other book-specific files included.)

Why? Because webpages were designed to display text and images in a dynamic way. To resize the content of a page to whatever screen the visitor is using. So they reused the same languages and format for ebooks.

Again, most software can _export_ to an EPUB file. You don't want to create all the webpages by hand and bundle it yourself!

The **advantage** is that it's a small file that will look great on any ereader. Additionally, you can use software like Calibre to go _into_ the ebook and adjust anything. Website languages are _powerful_---with one line of code, you can do cool stuff to the layout of your _whole_ book. (If you know what you're doing, of course.)

The **disadvantage** is that the EPUB format only supports a _small subset_ of what browsers can do and automatic conversion usually messes up some things. It's just really inconsistent and everything uses a different _version_ and ... honestly, it's a mess.

But it's the mess we got to work with if we want to self-publish!

If possible, pick a service that has a built-in editor for turning your existing (Word) document into an EPUB. They'll usually have templates and settings for what 99% of books need, and because it's handled by them, _they_ make sure all the formatting and versions are correct.

The second best option is to do it yourself. Export your book to EPUB. Learn a little about how it works behind the scenes, so you can go in and fix issues yourself.

This is a very hands-on, risk-free learning path. You can open any EPUB file (even those by other authors) in Calibre and choose "Edit Book". Then you can click on files, make changes to them, and immediately see (in the live preview) how this changes your book.

Play with this for a few days, and you'll understand the basics of the file format and how the code bits work. Then you can troubleshoot issues, solve them, and before you know it you can deliver amazing EPUBS _all by yourself_!

### Specific Tips

**Go for EPUB 2.** Yes, EPUB 3 has been out for a while, but it's barely supported and any time I tried to use it, I received messages that basically told me "hey, you can do this, but you probably just want to downgrade to EPUB 2 and save yourself the hassle".

{{% remark %}}
Amazon uses their own `.mobi` format. For a while now, however, they also fully supported EPUB. If needed, most services will automatically generate the MOBI from your EPUB anyway, if it's needed at all.
{{% /remark %}}

**Keep it simple.** Yes, you can add custom fonts to an EPUB (for example), but it will most likely be a pain and break the document on half the ereaders. I've tried it numerous times, in different ways, and it's just not worth it. The same is true for anything else sufficiently advanced (interactive parts, very unique layout or design, etcetera).

**Use proper margins and font size.** Although these can usually be adjusted on the ereader, you don't want to rely on readers to do that extra work. Make sure there's ample whitespace around your paragraphs and that the font size is nice, big and readable.

**Make sure images scale.** Don't use images that are too big (and thus don't fit on one screen) or too small (simply unreadable). Pick a size that should fit nicely on any ereader, by default. Even then, make sure the images _resize_ to fit the width of the current screen.

**It uses XHTML.** For the programmers among us: EPUB uses old XHTML. This means self-closing tags must end with `/>`. This means named HTML entities (such as `&amp;` for an ampersand) _do not exist_. Use the numerical variant or the actual symbol itself. This means many "modern" browser features (say anything from the past 10+ years) simply do not exist.

I won't go into detail on actual formatting or layout here. It's another topic entirely, related to graphic design and typography. It's also something that depends on your book and personal preferences.

## My workflow

Below is my personal workflow. It's very specific to my needs and my skillset, so I guess it won't be suitable for 99% of you. I still wanted to give it as a practical example.

I create my books as **websites**. I know how to program them. I use the _Hugo_ system to automatically _generate_ a whole website from just some simple lines of code.

This is how it works.

* Each chapter is just one MarkDown file. (That's a file that reads just like normal text, but with easy ways to make it rich text. For example, typing `_some text_` will _italicize_ that text.)
* I have one page that builds the PDF. It's a simple piece of code that loads all the chapters (in order), plus some layout (such as page numbers), in my browser window. I simply press CTRL+P (the _print_ functionality of every browser) and save that as a PDF.
* I can also actually "build" (or "generate") the website. When I do, it automatically combines all the content and puts it into the EPUB structure for me. Once bundled, there's my EPUB.

Why is this my workflow?

* The whole story resides in simple text files. Low file size, can be opened anywhere, and I can do large operations across whole books (or even multiple books) with ease.
* But with simple lines of code, I have _full control_ over the layout and content. What is nearly impossible in Word, might take me just five seconds.
* My stories often try to do something different. (Many images, choose-your-own-adventure, etcetera.) Again, with website code, I can easily accomplish such unique structures, whereas Microsoft Word just isn't build for it.

This requires a lot of computer knowledge, however. When I first set up this system, I certainly made many mistakes and wasted days tracking down weird bugs or specific EPUB issues. (Again, that file format is a _mess_.)

That said, many of my earlier books used a much simpler structure. They were written in Word, uploaded to the service (which created an EPUB version of it as well), and that was that. In many ways, especially for simpler or more straightforward books, that was a much faster and easier publishing system.

## Conclusion

If your needs are simple ...

* Work in Microsoft Word
* Potentially export to PDF when submitting
* Automatically export to EPUB (either in Word or using your online service)

If you have more advanced needs, it really pays off to work in more simple text file (more control, faster editing) and learn about the code behind EPUB's. It might be a steep road, but it will allow you to do _anything_ and keep total control.

Even then, I firmly believe our current EPUB format is _extremely flawed_. I expect it to vanish into obscurity _or_ see drastic changes in the coming ten years (that basically turn ebooks into websites). Because, as it stands now, an actual _website_ is a much better and more suitable way to present a book than, you know, the _ebook format_. If possible, stay away from messing with EPUB!

{{% remark %}}
This is partially why my [Saga of Life](https://thesagaoflife.com) project _is_ an actual website. It's just the most comfortable and user friendly way to present this large collection of short stories. It's also the easiest for me to work with. And, as explained above, I can turn it into PDF or EPUB with one line of code.
{{% /remark %}}