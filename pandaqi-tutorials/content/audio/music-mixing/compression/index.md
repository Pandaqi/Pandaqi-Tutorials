---
title: "Compression"
weight: 15
type: "article"
daw: true
---

Every recording has a certain **dynamic range**. That's the range between the _lowest volume_ and the _highest volume_. Changes in volume are, therefore, also often called _dynamics_.

This is both a good thing and a bad thing. Things in the real world are also dynamic, so this property sounds natural to us. At the same time, this makes mixing hard. How can you make a mix sound consistent? When all your recordings keep changing their volume?

To make matters worse, _different_ recordings will have a _different_ dynamic range. So even the unpredictable changes in volume are unpredictable!

To combat this, we use our first effect: the **compressor**. It _compresses_ the dynamic range, shrinking it.

How? Well, there are multiple types.

## Downward Compression

This is the default type that built-in compressors will execute.

> Volumes above a certain **threshold** are brought down

In other words, the lower volumes are preserved and the extremes (loudest parts) are tamed. 

This reduces the average volume of the track, of course! Because you lowered volumes left and right. That's why a compressor usually has a **gain** button as well. Use it to bring the average volume back to where it was before you applied compression. (Alternatively, just do this by changing the track volume using the default control for that.)

Try it! Open the compression effect. See what happens if you apply it in an extreme way.

{{< daw duration="17" >}}
    {{< daw-track effects="compressor" id="Guitar" >}}
        {{< daw-track-part source="../automation/hey_miss_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

### What do I aim for?

A compressor will show how _much_ it reduced the volume. A good rule of thumb is,

* The compressor should not _always_ be working. The reduction should be 0 a lot of the time
* When it is working, aim for roughly `3 dB` reduction on average

I learned these rules of thumb from interviews with famous engineers. They have never failed me on my own projects.

Try it in the example above. Try to get roughly 3 dB of compression, then use the gain to keep the general volume the same as before.

### What if I need more?

Don't crank up the compressor settings. Instead, _add a second compressor plugin_. The same rules hold (should be 0 often, `-3 dB` on average).

Using multiple compressors results in a more smooth and natural result. Also something I learned from others and applied with success myself.

This isn't unexpected. If _one_ compressor has to work very hard, it will jank your audio in all sorts of directions to achieve that. Instead, use two or three compressors that do _subtle work_.

In the example below, I've added two compressors. Hear the difference between compressing heavily here, and compressing heavily in the example above.

{{< daw duration="17" >}}
    {{< daw-track effects="compressor,compressor" id="Guitar" >}}
        {{< daw-track-part source="../automation/hey_miss_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

### Other settings

You've seen the threshold: any signal above this volume is brought down. 

But there are many ways to "lower a volume". How fast? Immediately? Is this a hard cutoff or a smooth one?

As usual, audio sounds better when edits and plugins are _smooth_. Compressing based on a harsh cutoff will sound ... harsh. 

That's when the other settings kick in.

**Ratio** determines how much the volume is lowered. A ratio of "1:1" means a hard cutoff: for every decibel above the threshold, the volume is lowered by one decibel. 

A ratio of "2:1" means: for every 2 decibels above the threshold, the volume is lowered by 1 decibel. Volumes are compressed, but in a more subtle way, as they're allowed to go a bit above the threshold.

In general, a ratio somewhere between "2:1" and "5:1" is fine. Lower ratios give a warmer and thicker feeling to instruments. Higher ratios might be necessary if your source is _really_ dynamic.

**Attack** determines how fast the compressor kicks in. Remember, the compressor only does something if it detects a note that is _too loud_. But what then? It has to bring the note down. Does it do so immediately? How long does it take?

The attack is a _time_ (in milliseconds). It dictates how _long_ it takes before the compressor has completely "compressed" a volume that's too loud.

A higher attack time will let the first note (or "transient") through, so you retain some of that punchiness. A lower attack time makes the recording more consistent and monotone. An attack that's too short will produce artifacts, as the compressor has to work harder than the audio allows.

**Release** is the opposite. It dictates how long it takes before the compressor "lets go". 

_Why doesn't it just let go once it's done?_ Remember, audio edits should be smooth! If not, it introduces clicks and pops that our ears don't like. So even "letting go" needs to happen in a smooth way. (Now you also know what happens if you set this time too short: a pumping, robotic, clicky sound.)

The default settings are usually fine, though. I've rarely had to change this value. 

To me, there's only one clear "rule" here.

> Never, ever, do a low threshold with a high ratio.

It means the compressor reduces _everything_ by a _huge amount_. Audio can't withstand such pressure.

Play around with these settings in the examples!

## Upward compression

Upward compression is more of a technique. It still uses the same (downward) compressor plugin, just in a different way.

It's also often called **parallel compression**, and it's a good name.

Instead of applying the plugin to the track itself, you _copy_ the track and apply it to the _copy_. Then you play the original and the copy in parallel---at the same time.

The effect is compression, but in the opposite direction. The loudest volumes stay the same, but the _lower_ ones are brought up.

Think about it. You copied the track, so the whole sound just became twice as loud. But the copied track is compressed, which means the loudest volumes are brought down. The result? Only the lowest volumes are actually _twice as loud_, while the higher volumes didn't become louder.

An added benefit is that you can easily blend the compression. Simply change the volume on this _second track_: a higher volume means more compression, a lower volume means less.

Try it! The lower track can be quite heavily compressed, then blended (using the volume slider) with the other track. Try to to hear the difference with downward compression.

{{< daw duration="17" >}}
    {{< daw-track volume="-10" id="Guitar" >}}
        {{< daw-track-part source="../automation/hey_miss_guitar" >}}
    {{< /daw-track >}}
    {{< daw-track volume="-30" effects="compressor" id="Guitar Compressed" >}}
        {{< daw-track-part source="../automation/hey_miss_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

### When to use which one?

Downward compression can tame a sound too much. It removes all the peaks and biggest transients. It brings your recording in line ... but now everything sounds a bit the same.

Upward compression doesn't have this problem. The high volumes and peaks are maintained! You simply bring up the floor. The _downside_ of that is, of course, that noise and "bad notes" become an issue. A soft click on the recording, will become a loud click when parallel compressed.

As such, I---like most---recommend parallel compression _if your audio quality supports it_. If your recording is clean and loud enough. Parallel compression is just more aggressive, more immediate, more "punchy".

Otherwise, regular compression is safer. If you're worried about noise. If you don't care about being "attention-grabbing", perhaps because your song is mellow or slow. If your recordings have lots of very soft notes.

## Different compressor plugins

Your biggest choice, when it comes to compressing, is perhaps which plugin to use. The built-in plugin will usually be neutral. But there are many great compressors that _color_ your sound slightly. When compressing, they apply some filtering or modification, which can make the sound prettier or smoother.

When you just start out, ignore that. Use the basic, neutral compressor. Once you can use and understand _that_ ... expand your horizons.

## Conclusion

I'll say the same as always: every tool becomes a bad one when overused or abused. You don't _need_ to compress every source.

Your highlight instruments (maybe vocal, maybe the guitar supporting the whole song) can keep a large dynamic range. That makes them interesting and alive.

Your supporting instruments benefit more from a compressed range. They need to be a consistent and structured backdrop. That sounds better if their volume is relatively consistent, through compressing.

And even then, don't use very low thresholds or very high ratios. If you need a lot, apply multiple subtle compressors after each other. Or, even better, compress by hand through _automation_.