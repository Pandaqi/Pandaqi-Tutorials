---
title: "Page Structure: Head & Body"
weight: 5
type: "article"
codemirror: true
---

Every piece of content has two major parts: the content itself, and information _about_ the content. For example, a video has the video itself, but also a title, thumbnail, upload date, etcetera.

The content is called the **body**. The information about it is the **head**. (Sometimes _header_, _frontmatter_ or _metadata_.)

If HTML is meant for dividing your content into meaningful elements, well, this is the first and biggest division you'll make! What is actual content? And what is information _about_ the content?

For example, you probably know that tabs in your browser have a _title_ and show a little _icon_. How do you think these are defined? How do you think the programmer sets these elements? They aren't part of the page itself, so ... they go into the head.

## The basic template

Below is the basic template from which every `.html` file starts.

{{< playful-code lang="html" raw="true" >}}
<!DOCTYPE html>
<html>
    <head>
        <!-- Metadata goes here ... -->
        <title>My Website</title>
    </head>
    <body>
        <!-- Content goes here ... -->
        <p>Ya see me?</p>
    </body>
</html>
{{< /playful-code >}}

As you see, the `<head>` part isn't displayed on the page. It's only for information _about_ the page, which is used in other ways. In fact, _anything_ outside the `<body>` tag won't be displayed.

The other tags (`DOCTYPE` and `<html>`) might feel superfluous. They are necessary when you intend to use a different version of HTML. If your document uses the default, latest version ("HTML5")---then yes, it feels silly to add this, but do it anyway.

It's all about _semantics_ again. The `<html>` tag clearly states that whatever is inside represent an HTML document :)

{{% remark %}}
In my interactive examples, I sneakily add this template behind the scenes. If I don't spot a head or body tag, I just add them for you, so you don't have to type all that every time. But they're still there, because they have to be!
{{% /remark %}}

## The Head tag

Its primary uses are to ...

* Set the title of the page
* Set its icon (called a _favicon_)
* Load external resources, such as a CSS file (that determines what the page should look like)
* Set a whole bunch of data that a search engine or robot might want. (Description, keywords, tags, which technologies you require or support, etcetera.)

We won't deal with this anymore until the _end_ of this course. It's not that important now.

## The Body tag

This is the majority of every webpage and the place where this course will spend most of its time. Almost all HTML tags are only usable in the _body_, not the head.

As expected, elements are laid out in order, from _top_ to _bottom_.

Again, remember semantics! (I promise I will stop using that word soon.)

Define your elements in the most _logical_ order. You can always change their position on the page _later_, using CSS. Your HTML documents should be understandable, even in raw form (inside the text editor).
