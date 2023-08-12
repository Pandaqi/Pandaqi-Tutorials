---
title: "Installation"
type: "article"
weight: 2
---

LaTeX is not a standalone language. It's built on top of **TeX**, one of the first systems created to mark up documents.

TeX is a programming language that contains a bunch of very general and complex functions, which is why LaTeX was invented to simplify it. Not surprisingly, it's often said to stand for **Layman's TeX**; TeX for the non-geniuses. 

LaTeX provides a larger set of specific functions that are easy to use and understand, which translate to something in TeX. 

As such, you don't need to know TeX. You only need install it on your computer to be able to do anything.

{{% remark %}}
If you want, of course, you can look into TeX, or other languages built on top of it. But LaTeX is by far the most popular one, and in my opinion easiest to use. So I recommend starting with it.
{{% /remark %}}

## Update: no installation needed

These days you can also write LaTeX completely online! For example, using **Overleaf** or **ShareLatex**.

It's a bit slower and error-prone, as you need to be online and constantly use their server for compilation. But I've written many complicated group reports (at my university) using these websites and can recommend them.

If you still want an offline, local installation, continue reading.

## Installing TeX

Installing TeX on your own is a tricky business. I recommend using so-called _TeX distributions_, which can install everything for you with a single click.

-   On Windows? [MikTex](https://miktex.org/)
-   On Mac OS? [Mac Tex](https://tug.org/mactex/)
-   On Linux? [Tex Live](https://www.tug.org/texlive/)

{{% remark %}}
This course was written while I was still at university. That's really not that long ago. But in the meantime, more distributions have popped up and started supporting all platforms.
{{% /remark %}}

## Choosing an Editor

TeX files are nothing more than simple text files. This is useful, because, unlike Word documents, you can open them with _any_ text editor to edit them or see what's inside.

To compile them into actual PDF files, however, you need a specialized editor. Such editors usually also provide 

* Syntax highlighting
* Quick buttons to set up certain environments (like tables or images)
* A symbol library from which you can pick any special characters.

The most popular (free) ones are **TeXmaker** and **TeXstudio**, which are supported on all platforms.

When I was at university, I used **WinEdit**. It was the nicest option ... but also paid software.

## That's all!

If both installations have succeeded, you should now be able to write and compile LaTeX files. Simply create a new file within the editor. Or create a new text file and give it the extension **.tex**.

How to compile documents depends on the chosen editor, but there's usually a big button you can search for.

As you compile a file, you'll notice that lots of other files are also created. These are not *essential* to your document---just the TeX file is enough for everything to work correctly. 

These files can add something extra once you get into the more advanced parts of LaTeX. Nothing to worry about now. These other files won't be mentioned again in this course.

Let's get started!