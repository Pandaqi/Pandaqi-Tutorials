---
title: "Head II"
weight: 26
type: "article"
codemirror: true
---

I've mentioned the other web languages, CSS and JavaScript, many times during this course. I never mentioned how you actually _include_ those other languages in your webpage, once you've written code for them.

Until now!

The header provides information _about_ the page. It is, therefore, also the place to list any external files or languages upon which it depends.

## CSS

To link a CSS file, use the `<link>` tag, with relationship `stylesheet`. (That's what the `rel` attribute stands for.)

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <link rel="stylesheet" type="text/css" href="path/to/your/stylesheet.css">
</head>
{{< /playful-code >}}

To add CSS right into your document (instead of an external file), use the `<style>` element. This is allowed both in the head and the body!

{{< playful-code lang="html" >}}
<head>
    <style type="text/css">
    p {
        color: purple;
    }
    </style>
</head>
<body>
    <p>This should be a purple paragraph.</p>
</body>
{{< /playful-code >}}

## JavaScript

To link a JS file, use the `<script>` tag. 

{{< playful-code lang="html" nopreview="true" >}}
<head>
    <script src="path/to/your/script.js"></script>
</head>
{{< /playful-code >}}

Notice that `<script>` is not a void element. That's because you can put code _inside_ the element, instead of linking an external file. This is also allowed both in the head and the body!

Open the webtools console (F12) and check if it printed the message below!

{{< playful-code lang="html" >}}
<p>This is a paragraph.</p>
<script>
    console.log("It's a-me, Mario!");
</script>
<p>Let's continue writing paragraphs, after JS so rudely interrupted us.</p>
{{< /playful-code >}}

Is this inconsistent? Why doesn't it use two different elements like CSS?

Yes, yes, yes, this is a byproduct of the evolution of the internet in unexpected ways.

The designers of HTML didn't know how the internet would turn out, so they allowed more options. They required attributes (such as `rel` and `type`) to specify what exactly you were referring to. 

But nowadays, CSS and JS are the only other languages, and that will probably never change again.

In fact, I remember the days when you were _required_ to add `type="text/javascript"` to the script element! Many older tutorials and websites probably still include it or tell you to use it.

Those days are long gone. Just use a blank `<script>` tag and you're good. You can probably get away by leaving out the attributes on the `<link>` tag as well. It all defaults to CSS and JS.

This is an idiosyncrasy you simply have to accept and remember. (In the future, it might be simplified, and the `<style>` tag can be used for both external CSS and inline CSS. At least, that seems like a good simplification to me.)

* JavaScript happens with the `<script>` tag, which is not void. It can take an `src` attribute for external scripts.
* CSS happens with the `<link>` tag and the `href` attribute. But if you want to write CSS in the page itself, use the `<style>` element.

Both of these can be placed _anywhere_, both in the head and the body.

However ...

## About performance

Anything put into the `<head>` is completely loaded _before_ the `<body>`. As such, if you add a few external files, they will be downloaded and added to the page _before_ any of its actual content is loaded or displayed. The webpage has to wait for a second, displaying nothing, before the content appears.

For years, this was fine. Web pages were very _light_, with only a tiny bit of styling or coding. People were fine with waiting a few seconds until stuff loaded.

As the internet matures, however,

* We've seen a huge increase in the size of stylesheets and scripts. (Developers joke about their website being held together by 99% JavaScript, 1% HTML.)
* While seeing an increased attention to details such as optimization and speed. (When's the last time you were content to wait 5 seconds for a page to load?)

In response, people started placing these elements at the _bottom_ of their page (in the `<body>`). This meant 99% of the webpage would already be loaded and displayed, and only _then_ the webpage would freeze for a bit while loading all those external files. (I did this for years as well, thinking I was being exceptionally smart.)

Hopefully you already see the issue. It doesn't make sense, semantically. You have things that are _not_ HTML, you have external files _describing_ the content ... and you're putting them as part of the HTML body? As part of the actual content? (Also, it looks ugly in code and doesn't _really_ solve our problem.)

Keep them in the head, if you can. It's their proper place.

Nowadays, we have two (minimized) attributes that solve our problems. Add these to the externally linked files.

* `async`: loads the file asynchronously. In other words, it doesn't block everything else from loading. The other elements continue being downloaded, while this one is loaded in the background.
* `defer`: automatically defers loading of the file until the main content is done.

{{< playful-code lang="html" >}}
<script async defer src="some/path/to/script.js"></script>
{{< /playful-code >}}

Also, prefer external files over putting CSS/JS _on the page itself_. Why?

* Keep HTML pages completely HTML, if possible. It's cleaner, it prevents issues.
* If it's on the page itself, it must be loaded _every time_ somebody requests the page. If it's an external file, however, the user only has to load it once. It is saved ( = "cached") in their browser. So the second time they visit the page, they just grab that file they already have.

Lastly, consider splitting your CSS into "critical" and "the rest". Critical CSS should be loaded immediately, to ensure your page has the right general size and colors. All the other CSS, which you might call "extra" or "ornamental", is only loaded after the whole page is done.

## Conclusion

Maybe you think this is not important. Maybe you think this is only relevant for huge websites or projects. I thought so too, and it bit me in the ass many times.

* People are very impatient these days. Absolutely make your websites as fast as possible. (I've seen my mother use her phone countless times, clicking a page that absolutely had the information she needed, but clicking away in frustration once it took 1+ second to load.)
* Coding projects quickly become a _mess_. Any way to reduce the mess is welcome, especially if you plan on keeping the website online for longer than a few months. (So, cleanly put your CSS and JS into _separate files_, with clear names, etcetera.)
* Search engines hugely favor websites that load fast and clearly indicate what they are (semantically).
* Basically the whole internet relies on that _caching_ I just mentioned. Without it, everything would fall apart :p Websites would slow to a crawl, servers would be overloaded. (I save _gigabytes_ of bandwidth each month with tiny tweaks like this.)

Perhaps the best summary of these two chapters is: search engines have a lot of power. Give them no reason to hurt your website, by setting the right metadata and complying with modern standards.