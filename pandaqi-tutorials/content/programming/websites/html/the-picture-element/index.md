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

## The Source element

@TODO: figure this out and provide a clear explanation

  => https://stackoverflow.com/questions/35099471/how-to-use-srcset-and-sizes-for-responsive-images


A source element can have these attributes.

* `type`: the image format. (`image/webp` for webp, `image/png` for png, etcetera)
* `media`: a restriction for when this image should be used. (A CSS media query, so out of scope for this course.)
* `srcset`: one or multiple urls, separated by commas, to the source images
* `sizes`: 

The example below tries to load the `.webp` version first. If it fails, it falls back on the `.png`. Whatever it loads, however, the attributes of the `<img>` tag are applied.



_Why srcset? Why supply multiple urls per source?_ An image might be displayed at many different resolutions. For a user on their tiny phone, you don't want to load your huge, high-resolution version. You want to load a much smaller version.

If you supply multiple URLs, you therefore must add a size to each. After each url, type `number` + `w` (to set the ideal width in pixels) or `number` + `h` (to set the ideal height in pixels).

This is quite advanced and annoyingly complicated, so I don't want to dwell on it. If you really need this, visit the official documentation, and figure it out through trial-and-error.