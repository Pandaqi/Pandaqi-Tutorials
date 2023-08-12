---
title: "Gain Staging"
weight: 13
type: "article"
---

There's an annoying side-effect from converting analog sound ( = physical audio in the real world) to digital sound ( = on your computer). In the real world? Sound can get as loud as it wants! There's no limit to how many decibels something can produce!

But digital sound obviously needs a limit. There are only so many bytes of data it's allowed to store on your computer. It can't be infinitely loud, as that would crash the system. 

What does this mean?

* If you record something _too softly_, you might miss some detail. Because it only writes a few bytes of data and the rest is silence.
* If you record something _too loudly_, it might **clip**. It wants to store more data than it can. So it throws away some data and becomes distorted.

Both situations are undesirable. The first is recoverable, but will just sound dull or noisy. The second is unrecoverable---unless you want that distorted grunge sound. (In which case there are better ways to get it.)

How do you prevent this? How do you record at a volume that is "loud enough"? One that will never clip, but also contain enough detail?

Through the process of **gain staging**. Which simply means "setting everything in your audio chain to just the right volume".

## Head room

In the old days, it was standard to record everything **hot**: as loud as you can without clipping. 

{{% example %}}
Physical audio equipment also has such a limit on volume. A transformer or amplifier can only reproduce what its circuitry allows. But in most cases, the equipment was designed to make this distortion "pleasant" (when applied in small doses). That's why older or expensive gear "colors" the sound and work best if you record "hot". A bit of clipping was expected---and fine.
{{% /example %}}

Nowadays, that's not needed anymore. We have enough definition---enough bytes---to record everything in high detail and volume.

Instead, it's recommended to leave enough head room. Enough "air" that you could raise the volume of your recording _later on_ without clipping. Enough "safe zone" in case you suddenly go much louder with a recording. (Or forget to gain stage again after moving the microphone closer :p)

What is that safe zone? What are we aiming it?

Some people simply look at their standard level meters. They check if their sound is generally around `-12 dB`, and peaks absolutely no higher than `-6 dB`. This is the "eyeball method". It's not recommended if you want to consistently get (professional) work done.

{{% remark %}}
I once saw a really funny lecture on "eyeball statistics". How most people look at a graph or table and make these wildly inaccurate assumptions about the data. Because actually calculating or investigating the statistics is too hard. Don't be an eyeballer :p
{{% /remark %}}

Most software comes with a **VU Meter**, either built-in or as a plugin. They calculate loudness in a better and more general way. (By looking at intensity and power over longer periods of time.) If you can't find it, it might be under the "mastering" area, rather than "mixing" or "recording".

With this, you want your average level around `-18 dBFS`, with peaks absolutely no higher than `-10 dBFS`.

## How to find my peaks?

Just play the thing you want to record and look at the meters. The peaks will be the hardest hits, the starts of a note or chord---the loudest "transients". Those are the biggest issue. They will cause clipping, not your average sustained note.

This is a fine test. But most people go _louder_ during an actual performance than while gain staging. Or they move much _closer_ to the microphone.

If you know you do this---or your performer does this---take it into account. Go lower with your volume, ensure the peaks have more than enough space to grow.

## Keep gain staging

Obviously, these volumes _change_ as the _setup changes_. Different instrument, different performer, different microphone placement.

Yes, gain stage once at the start of a session. But keep checking the chain of volumes any time you make _any_ change.

This doesn't even need to be a big one. Guitar _chords_ are much louder (especially when low) than subtly plucking on that same guitar. Even if everything else stays the same, just playing a different part on the same guitar can cause our your volumes to be completely wrong.

{{% remark %}}
Yes, I have wasted many a guitar take on this issue. I'd play a complex solo, then mindlessly go to the supporting chords and clip the hell out of it.
{{% /remark %}}

In the [Takes](../takes/) chapter, I will tell you to critically evaluate each take after doing it. This is one of the main reasons for that. To check if your volumes are still at proper levels, and modify if not. 

Otherwise, you'll be a train that slowly races towards a cliff of either "recordings that are too soft to hear anything" or "recordings that clip everywhere". Because you _will_ change your position slightly, you _will_ vary how loud you play, and you _will_ move microphones here and there.

## Warning: the right order

When I just started, I encountered many clipping issues. And I did "the naïve fix": just lower the volume on the master fader. (That's the big fader that controls volume of the _whole track_, in every DAW>)

This is wrong. That's the _last_ thing you should ever touch.

Why? If it clips, that means it's too loud _earlier_ in the process. Data is thrown away somewhere before that point. You're not getting that data back by lowering the final volume.

Instead, lower the volume as early as possible: on the individual recordings. If all your recordings have enough "head room", they can stack and combine without clipping. 

It should only rarely be needed to lower the volume of a whole _track_ or _group of tracks_. If a sound clips when it reaches your master fader, you're already too late.

In general, I think you should err more on the safe side. When in doubt, give yourself _more_ head room and record at _lower_ volumes. We have the technology and quality to deal with that, even in cheap equipment. 

We will never find technology that can magically retrieve bits of data that were never saved :p