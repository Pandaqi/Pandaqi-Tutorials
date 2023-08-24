---
title: "Audio"
weight: 18
type: "article"
codemirror: true
---

In the old days of the internet, adding audio or video was a pain in the behind. But for a good 10+ years now, these elements are supported everywhere and very, very simple to use.

Like we saw with the [Picture](../the-picture-element/) element, we need two parts.

* The `<audio>` tag
* Which contains `<source>` tags with possible sources

The browser picks the first source it can play. If something fails or it can't play anything, it displays whatever raw _text_ is inside the `<audio>` tag.

The source tag takes a `src` and `type` attribute. (Not `srcset`, like images in the `<picture>` element. That's an annoying but important distinction.)

{{< playful-code lang="html" >}}
<figure>
    <audio controls>
        <source src="sound.ogg" type="audio/ogg">
        <source src="sound.mp3" type="audio/mpeg">
        <source src="sound.wav" type="audio/wav">
        Sorry, can't play this audio!
    </audio>
</figure>
{{< /playful-code >}}

The `ogg`, `mp3` and `wav` file types are supported by all browsers. I ordered them based on file size; smallest first.

In general, `mp3` is a good middle-ground and a well-known file format. Wave files (`.wav`) are raw and uncompressed, which means they are HUGE, even for total SILENCE. Only use them if you know what you're doing.

It wouldn't surprise me if, in the future, HTML supports even more finetuned control over audio and video. Like images, you might want to load different versions based on the user's device. Maybe they're on a crappy mobile connection, so you decide to load a smaller version of the sound.

{{% remark %}}
Nowadays, this is done through JavaScript and custom systems. YouTube, for example, automatically adapts to your Wi-Fi connection quality. But the same was true for images: when the internet just started out, people had to write their own systems to smartly pick the right image ... and look where we are now!
{{% /remark %}}

## Attributes

The audio element has a few special attributes, all of which are _minimized_.

Attribute | Description |
--------- | ----------- |
`autoplay`| Plays the sound automatically when loaded. |
`controls` | Shows controls for pause/play/stop/scroll. (Their layout is determined by the browser.) |
`muted` | Mutes the sound. (Can be unmuted through JavaScript, or using those controls.) |
`loop` | Infinitely repeats the sound. (When done, it goes back to the start and plays again.) |

Note that `autoplay` might not work. Many browsers disallow automatically starting or playing something _unless_ the user has interacted with the website.

{{% example %}}
That's why almost all web games start with a simple menu that says "click anywhere to start!" That click is needed to tell the browser "hey, the users trusts us and wants to play, let us do what we want".

Console games do the same by the way, with "press any button to start!" They also do that to register what gamepad you're using.
{{% /example %}}

See the simple example below.

{{< playful-code lang="html" >}}
<figure>
    <audio controls loop>
        <source src="sound.ogg" type="audio/ogg">
        Problemo!
    </audio>
</figure>
{{< /playful-code >}}
