---
title: Linking CSS & HTML
weight: 2
type: "article"
codemirror: true
---

CSS cannot stand on its own. It merely _styles_ something that already exists. As such, you need content first---something to style---and then connect the two.

For websites, this means creating **an HTML structure**. If you haven't read that course yet, do so now! Find it at [HTML Course (Pandaqi Tutorials)](../../html/).

Whenever I give an example, you can always press the "HTML" tab to see the underlying HTML structure that it styles. At the start, as you're just learning CSS, this is important to check and learn about. As you get more familiar, this becomes less important.

So, _how_ do you link the two? There are three ways:

* Inline
* Style Block (Internal)
* Stylesheet (External)

## Inline

Inline means that you put the styling information right there _on the element itself_. Using the `style` attribute, you can set any CSS rules on the starting tag.

{{< playful-code >}}
{{< playful-code-tab lang="html" >}}
<p style="color: blue;">This is a test paragraph.</p>
{{< /playful-code-tab >}}
{{< /playful-code >}}

Don't worry, we'll get into the specific syntax for CSS soon. (Although it's quite straightforward to infer what the `color` property does.) I wanted to explain linking to HTML first, because without that, you can't actually _see_ what you're doing!

## Style Block

But this is messy! Your document will slowly become a mess of HTML elements mixed with lots of CSS code. You want to separate the two: content and visuals.

{{% remark %}}
This is true for any project, by the way. If you're developing video games, for example, it's also the best practice to completely separate what something _is_ from how it should be _displayed_. Mixing the two become a mess of dependencies and makes it hard to change anything later.
{{% /remark %}}

So, instead, you can move your styling rules into a special `<style>` element. These can be placed anywhere on the page (even _after_ the things it is styling). Why? Because whenever a browser encounters this element, it _refreshes_ the display of the entire page. (It adds the new rules to those it already had, then calculates the visuals of the whole page again.)

It's best practice, therefore, to add _one_ of these in the `<head>`. This is the proper semantic location and prevents expensive refreshing of the document's styles.

{{< playful-code >}}
{{< playful-code-tab lang="html" >}}
<head>
  <style>
  p {
    color: blue;
  }
  </style>
</head>
<body>
  <p>This is a test paragraph.</p>
</body>
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Stylesheet

But this is still inefficient! Your CSS is still mixed with the HTML in the same document. 

The best option, always, is to move it to a separate stylesheet. A separate file that is merely _linked_ to the HTML document. 

This keeps your CSS and HTML nice and separate. It's also faster to load: after loading the stylesheet once, browsers will "cache" it and don't need to download it again for a given time.

To do this, use the `<link>` element with the correct `href` attribute.

{{< playful-code nopreview="true" >}}
{{< playful-code-tab lang="html" >}}
<head>
  <link rel="stylesheet" href="/path/to/sheet.css">
</head>
{{< /playful-code-tab >}}
{{< /playful-code >}}

Once linked, you can write all your CSS in that external file. **This is the preferred and recommended method!**

## Modular Stylesheets

I want to go one step further. A common beginner's mistake---which some people never solve---is the "gigantic CSS document of no return". Many don't even know the feature I'm about to explain exists!

They have _one_ stylesheet, one file, for their _whole website_. Usually, this file grows to over thousands of lines of code, after which it's impossible to work with.

Instead, create new stylesheet files for each different "part" of your website. (One file for the header, one file for the typography, one file for links and buttons, etcetera.)

Then, you can _combine_ all these into a single file to link with your HTML. Use the `@import url` syntax. 

{{< playful-code nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
/* import everything in one place; link only THAT file */
@import url("/modules/buttons.css");
@import url("/modules/header.css");
@import url("/modules/typography.css");
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Imports should always be the FIRST lines of your stylesheet. Nothing may come before them.
{{% /remark %}}

## Conclusion

Those are all the ways to link CSS to HTML. External stylesheets, split into neat little modules, are definitely the best way to go.

Now let's see how you actually write CSS.