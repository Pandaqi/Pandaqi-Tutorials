---
title: "Automation"
weight: 13
type: "article"
daw: true
---

Automation. The magical sauce that nobody wants to use when they just start out. The practical tip that everybody ignores until they realize it's the truth.

The idea is simple.

> Automation means you _animate_ properties of a track or plugin

Instead of picking one value for the whole song, you can tell it to _automatically_ change and modify the value at specific timestamps.

Yes, all my previous tips are still true. You _don't_ want to start with automation. You start by getting the general concepts right: timing, volumes, panning. Your mix should already sound _decent_ and _publishable_ before you start automation.

{{% remark %}}
That's why some view using automation like you screwed up. "Oh, you can't find the right settings? So you just started telling the mix what to do every second, by hand?" But they're only right if you apply automation to soon, or you _need_ it to produce something that doesn't destroy your ears.
{{% /remark %}}

But when you're ready, automation will be where you spent most of your time. In your average song, there are 10+ instruments playing for 3+ minutes. The likelihood that one setting will do the trick is slim. You likely want to change volumes here and there, increase panning to make the chorus bigger, turn a plugin on/off for specific sections.

## How does it work?

In general, there'll be a track or a space in which you can _draw_. Hold the mouse-button down and draw lines/curves for how the value should change.

Try it in the example below! Draw anything in the automation track. Play it, and you'll see the volume knob follows your automation. Try creating a slow fade-in or fade-out. Or maybe reduce the volume _only_ on that big peak at the end.

{{< daw duration="17" >}}
    {{< daw-track hide="effects" id="Guitar" >}}
        {{< daw-track-part source="hey_miss_guitar" >}}
    {{< /daw-track >}}
    {{< daw-track type="automation" out="Guitar/control/volume" >}}
        {{< daw-track-part start="0" source="1.0" >}}
        {{< daw-track-part start="17" source="1.0" >}}
    {{< /daw-track >}}
{{< /daw >}}

If you want, you can even change what it animates. Click the "Guitar/control/volume" and type something else. Like "Guitar/control/pan" to animate panning, or "Guitar/control/mute" to animate muting.

{{% example %}}
In Studio One, I can right-click anything and click the option "Automate". A new track appears, underneath the one I'm editing, in which I can draw and change everything.
{{% /example %}}

For more finetuned control, you can do this in two steps.

* Click the cursor to add a new point
* Now drag that point to where you want

For even _more_ finetuned control, you can "ride the fader". Usually, there's a button (or right-click option) to turn this on. It allows you to

* Play the song
* And make adjustments _while it's playing_
* Those adjustments will be recorded and saved

{{% example %}}
Many engineers recommend automating a vocal this way. Vocals usually need a _lot_ of automation, to ensure they are the same volume throughout and always cut through the mix. This speeds up the process, if you do it well.
{{% /example %}}

{{% example %}}
In Studio One, you can set a track from "read" to "write". That's a rather intuitive way to do it, I think. By default, tracks _read_ their audio and automation. Set it to write, and you _write_ to it during playback.
{{% /example %}}

## When do I use this?

Whenever you feel like one setting isn't enough for the whole song. Automate it to be what it should be, at any point in time.

That's a bit vague, though, isn't it? Below is a (not exhaustive) list of ways to apply automation.

**Consistent Volume**: only very experienced musicians can record something at a steady volume all the way through. Especially vocal recordings can jump up and down in volume. (The singer moves one inch to the right, during their performance, and suddenly you lost half your volume.) 

With automation, you can boost the soft parts and reduce the peaks, making the sound more consistent. Although it's faster to use [Compression](../compression/) for that, which we'll discuss soon.

**Panning**: keep things narrow and mostly center during quieter parts. Make panning more extreme during powerful, energetic parts.

Similarly, you can create fun effects and wide mixes with some ping-pong. Play a sound, but move it around between left-right-left-right-and so on. (Again, because it's such a common use case, default plugins exist for this.)

This kind of "play" or "animation", especially between left and right ear, can really make a mix stand out.

**Riffs & Ear Candy**: these are added on top of the rigid structure most songs have. I mean, a verse usually repeats the same melodic line a few times in the same way, before the chorus starts. That can become boring or repetitive. Use automation to prevent this. 

During silences, boost the guitar volume and add a quick riff. When the vocal sings a certain word, boost the supporting instrument to emphasize that word. Or crank up some plugin / effect _only on that word_.

**Soft Drop**: in the [Timing](../timing/) chapter, I talked about the drop. A complete silence, for a few beats, to make what comes after it more exciting. The soft drop has the same idea. But we don't move towards complete silence, just a lower volume.

Before a big section starts, fade out the instruments. Automate them to become slower or softer (gradually). When it feels like the song is winding down---that's when you explode into the next section!

**Reverb**: adding more reverb makes something wider, more "stereo". But as explained before, we don't always want that. Hence, reverb is often turned down (or completely off) on quieter sections. 

Additionally, too much reverb overwhelms the original sound. If a track has to stand on its own (not much support, not many doubles), reverb is usually brought down to a minimum. Then, when the chorus starts, it's pulled all the way up again!

## Conclusion

As you see, automation is mostly used for 

* One-off effects (for surprise and variation) 
* Changing what track gets the spotlight. 

A song where one recording is loudest and most important _the whole way through_ can quickly become boring. By weaving other instruments in and out---sometimes giving a guitar or drum the spotlight for a second---you can fix this problem. And you did it in a way that is simple and probably completely unnoticeable to listeners.

Maybe you see now why so much time is spent here. If you have a good recordings, and follow the simple steps I explained before, a mix will quickly sound "okay". But there'll be issues, both major and minor. There'll be boring sections or opportunities for more.

Automation allows you to animate properties to pick specific moments to "fix" or to "improve".