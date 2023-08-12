---
title: "Images"
weight: 16
type: "article"
codemirror: true
---

Images are very straightforward. To add one, use the `<img>` tag (which is a void element). Without anything else, it obviously doesn't know _what_ image to load. 

To give it a source image, set the `src` attribute. It requires any URL. (See [URLs](../urls/), two chapters ago, for how those work.)

Additionally, it's recommended to always set the `alt` attribute. It stands for "alternative (content)". It provides a textual _explanation_ of what the image is, in case it doesn't load, or a computer tries to understand your page.

{{< playful-code lang="html" >}}
<figure>
  <img src="panda_image.png" alt="(Old) logo for Pandaqi, a cute Panda with a tie, in vector style.">
</figure>
{{< /playful-code >}}

## Remarks about size and speed

Images are displayed "full size" by default. The computer simply places the image on the page, at its original size, and that's that. It's usually not what you want. (And vector images, with the extension `.svg`, can scale infinitely large. Which means that they will blow up to fill your whole page.)

Images also take time to load. This means your webpage will load more slowly, and it might take a while before the user can start using it. Not great!

To make a page as fast as possible, add

* `loading="lazy"`: this means the image is only loaded once it is actually _visible_ on the screen
* `decoding="async"`: this means the image loads _asynchronously_. The rest of the webpage can already be used, while the image continues loading in the background.

This does introduce a new problem, though.

You've probably seen it happen: you visit a webpage, and while the text is already loaded (and you're reading it), images _pop into existence_ for a few seconds afterward. The layout of the webpage keeps changing, as images are loaded asynchronously.

It's annoying, isn't it?

That's why I---along with many others---recommend hardcoding a size for your image in the HTML. It's part styling, part semantics. (The size of an image still has _meaning_. You know whether it's a small icon, or a big hero image, for example.) If the page already knows the image size, it doesn't need to change/recalculate the layout as images get loaded.

Use the `width` and `height` attributes for that, which both receive a number (of pixels).

{{< playful-code lang="html" >}}
<figure>
  <img src="panda_image.png" width="16" height="16" loading="lazy" decoding="async">
</figure>
{{< /playful-code >}}

{{% remark %}}
There are cases in which lazy or async loading can't be used. For example, I have created board games with a digital rulebook. When I want to convert that webpage into a PDF to print, I need it to load all images inside the rulebook _before_ trying to print. I can't use these attributes, as that might lead to half the images not being loaded at time of conversion. (In 95% of cases, though, use them.)
{{% /remark %}}

## Image Formats

HTML doesn't say anything about which image formats to use. It's just a markup language, the implementation is up to the _browser_. Before using a format, check if all browsers support it.

The most common formats are `.jpg` and `.png`, well supported everywhere. The first is best for real photos, the second for everything else (icons, when you need transparency, ...)

As the previous section showed, however, _speed_ of the page is crucial. Making your webpage faster and smaller will mean a better user experience, more users, and a better placement in search engines.

Thus, new image formats were developed over time. Formats that allow you to keep the same quality, but sometimes reduce file size by more than 50%.

Last year, I switched to `.webp` for all my images (on all my websites). It was finally supported everywhere. It's a great middle-ground and large parts of the internet are switching now. 

Another famous format is the `.gif`, but nowadays it's recommended to ignore it. Turn your animated GIFs into `.webm` videos, which are much smaller (in file size) and have more support (from browsers).

All my websites combined, I managed to win ~63% disk space with this change! That's multiple gigabytes I don't have to store or send over the internet, just by picking smart and modern file formats.

{{% remark %}}
Admittedly, most of those projects had a lackadaisical approach to this. When I just started making websites, I didn't know about the importance of file size and speed, so never compressed my images or controlled their size.
{{% /remark %}}

Upcoming image formats are JPEG XL or AVIF, which claim to be even smaller and faster.

If you want to create and maintain websites, you'll have to regularly inform yourself about the latest developments. These technologies keep improving and improving. 

Always check, however, if browsers actually support what you want to do. That's the biggest issue with the web: new stuff keeps being added, while old stuff is removed, while browsers have different opinions about what to do with the internet---and it's all a bit of a mess sometimes.

Fortunately, there's a way to mitigate that.

Next chapter, you will learn about the `<picture>` element. A wrapper that gives better control over which images are loaded, and how.

## Image Maps (optional)

HTML has support for a feature called "image maps", through the `<map>` and `<area>` tags. It means you define _parts_ of an image, usually to make them clickable. 

{{% example %}} 
You provide a map of the world as a single image. Then you define areas for each country, so users can click on each individual country and visit their page.
{{% /example %}}

However, this is an old feature that is barely used. I've taught it numerous times ... and never used it myself. I had to look up if it wasn't already removed.

Nowadays, you can achieve better results (with more ease) using CSS and JavaScript. That's why I decided to remove this section of the course. Learning knowledge you probably won't use, and will forget within a day, just wastes precious brain capacity!