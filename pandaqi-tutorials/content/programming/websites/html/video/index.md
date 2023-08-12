---
title: "Video"
weight: 19
type: "article"
codemirror: true
---

The video tag is very similar to the [Audio](../audio/) tag. That's why this chapter will be very short.

* Use a `<video>` tag
* Which contains `<source>` tags to list all possible video sources, which is a _void_ element.

{{< playful-code lang="html" >}}
<figure>
    <video>
        <source src="some_video.webm" type="video/webm">
        <source src="some_video.mp4" type="video/mp4">
        Sorry, could not load this video.
    </video>
</figure>
{{< /playful-code >}}

@TODO: Actually provide the video for this example

The types that are best supported are `.webm` and `.mp4`. Webm is newer and creates much smaller video files, so I recommend picking that.

## Attributes

The `<video>` element has the same standard attributes as the `<audio>` element, plus a few extra.

Attribute | Description |
--------- | ----------- |
`autoplay`| Plays the video automatically when loaded. |
`controls` | Shows controls for pause/play/stop/scroll. (Their layout is determined by the browser.) |
`muted` | Mutes the sound. (Can be unmuted through JavaScript, or using those controls.) |
`loop` | Infinitely repeats the video. (When done, it goes back to the start and plays again.) |
`poster` | URL to a thumbnail to display while the video loads. |
`width` | Sets the width of the video in pixels |
`height` | Sets the height of the video in pixels |

{{< playful-code lang="html" >}}
<figure>
    <video controls width="500" height="281">
        <source src="some_video.webm" type="video/webm">
        Sorry, could not load this video.
    </video>
</figure>
{{< /playful-code >}}

If you don't want the browser's default controls, you'll have to hide them and code a control interface yourself (using JavaScript).

Setting a default width/height is good to prevent the page from jumping around while loading. But 99% of the time, you'll want to use CSS to properly resize and scale the video based on the user's screen.

## Other objects

HTML still supports more "general" media tags, with `<object>` and `<embed>`. They were useful 10 years ago, but should be avoided now.

For example, when I wrote the first version of this course, **Flash** was still a big deal. Almost all interactive websites online, were build as a Flash game/application, and then _embedded_ into the webpage.

Well ... Flash is long dead. It's generally not recommended to embed stuff into your website that's not native to the browser. Use the _specific_ tag for what you want to do (audio, video, image, etcetera) and enjoy the easy life.