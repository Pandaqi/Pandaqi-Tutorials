---
title: "The Picture Element"
weight: 17
type: "article"
codemirror: true
---

The `<picture>` element allows specifying _multiple_ versions of an image. The browser loads the best one, based on your requirements.

As stated in the previous chapter, you want your web page to be as _small_ and _fast_ as possible. If a user visits your website on their tiny phone, you don't want to load your huge, high-resolution version. You want to load a much smaller version of the same image.

You also want to support all browsers, even old ones, even ones that don't support a newer image format yet.

That's why, on modern websites, almost all images are wrapped inside such an element. It gives multiple versions of an image and when to use each one.

## How to use it

The rules are as follows.

* There should be one `<img>` element. This is the _fallback_ in case everything goes wrong. It should also have the attributes I mentioned above (controlling size, lazy loading, and whatever else)
* There can be any number of `<source>` elements. These provide alternative sources, and are _void elements_.

The browser checks the sources top to bottom, and picks the first one that matches.

{{< playful-code lang="html" >}}
<figure>
  <picture>
    <source srcset="panda_image.webp" type="image/webp">
    <img src="panda_image.png" width="64" height="64" loading="lazy" decoding="async" alt="A panda">
  </picture>
</figure>
{{< /playful-code >}}

{{% remark %}}
You can right-click > "open image in new tab", then check the URL to see which version it loaded for you!
{{% /remark %}}

Yes, the official recommendation is to place picture elements inside figure elements.

## The Source Element

The source element for _other_ media types (such as video and audio) is very simple and will be discussed in their respective chapters.

For images, however, it has a _lot_ of functionality. Why? So you can use _responsive_ images. 

Based on the screen size and resolution of the visitor, you load and display a different image. This way, you don't need to load unnecessarily large image files, but also never display a pixelated or tiny image to users with high-resolution screens. It also allows users to _zoom in_ (or out), and it loads new versions to match the new resolution.

{{% remark %}}
In the future, HTML will probably natively support responsive _audio_ and _video_ too. But for now, those formats are relatively new and more complicated than images. As such, everything explained below ONLY works in picture elements.
{{% /remark %}}

The `<source>` element can have these attributes.

* `type`: the image format. (`image/webp` for webp, `image/png` for png, etcetera)
* `srcset`: one or multiple urls to source images _plus_ their ideal display size, separated by commas.
  * After each url, type `number` + `w` (to set the ideal width in pixels) or `number` + `h` (to set the ideal height in pixels). 
* `media` (optional): a restriction for when this image should be used. (A [CSS media query](/tutorials/programming/websites/css/media-queries/), so out of scope for this course.)
* `sizes` (optional): the base size to display the source images. (The default is `100vw`: full width. If you want your `500px` image to be displayed at `250px`, for example, the value would be `50vw`.)

As mentioned, though, this is both complicated and advanced. My own websites use a lot of images, but aren't _extremely_ heavy on them, and I take great care to compress the images to tiny sizes anyway. As such, I have never actually needed to use these advanced HTML attributes.

If you _do_ decide you need this, [study the MDN docs for the full explanation, with examples](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source). Remember, this course is NOT a documentation :)