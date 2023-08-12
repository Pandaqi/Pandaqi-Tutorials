---
title: "Mastering"
weight: 20
type: "article"
---

Some people call "mastering" an entirely different skill than "mixing". I think that's extreme. To me, it's just one part of the mixing toolset. One step in the workflow. And it's the final step.

Because what's mastering? It means two things.

* Convert a finished mix into its final, publishable sound file
* Ensure songs within the same album / project sound good together

It's that final step. You have a bunch of mixes---the eight songs that make your next album, for example. But they're all at slightly different average volumes. Some have a different general tone than others.

That's why you have that last "mastering" step. To bring all those mixes to the same **loudness** and the same **feel**.

You can do this in a regular project. Most DAWs, however, have a special "master project" or "master interface" for the mastering of a song or full album.

## Loudness?

Remember "volume creep"? If you lower volumes more than you raise them, your mix will generally end up at a rather low volume. Especially with your first few mixes, you might be surprised at how low the final volume is. 

This is _good_. It's better than hitting the ceiling all the time. It's certainly better than _clipping_!

Before you go to mastering, your mixes should have somewhat low volume. During mastering, you crank them all to the same loudness.

So what is that? It's measured in `LUFS`. Your software tracks the volume over the whole song, averages it, and gives a total. 

Every streaming website has its own target, but they're usually in the same range. I'll give the one for Spotify

* A total loudness of `-14 dB LUFS` 
* With a peak volume of `-1 dB`. (Called "1 dB head room")

If you don't comply with this, the software will apply their own effect to "remaster" your track. Usually, this is fine. But the more you take this into your own hands, the more you're _sure_ your music will transfer well to listeners.

These numbers are usually chosen to get _maximum loudness_ without _clipping_. Why is that preferable? Why must everything be as loud as possible?

Because of that rule of digital audio I mentioned. You can always go _softer_. You can always turn down the volume of your phone lower and lower. But if a song is too soft ... you can't magically get more volume or more data later on.

{{% remark %}}
Also because of the loudness wars. Humans automatically like a sound better if it's louder. So over the years, mixes became louder and louder, because it just attracted more listeners. And now we're pretty much at maximum loudness.
{{% /remark %}}

## How do we get there?

The first step is simply **cranking up the volume**. Increase gain for the whole track, until you're in the right ballpark.

However, this will often produce clipping. There will be a few "peaks" in your track that go over that maximum of `-1 dB`. 

What to do? Apply a little bit of gain, then a **compressor**. Smoothly reduce some of those peaks. Balance these two (add volume, compress more, ...) until you match the desired settings. Sometimes this requires multiple (subtle) compressors.

Some people like to be extra sure and apply a **hard limiter**. This is a type of compressor that just completely cuts off anything above the threshold, without mercy. This _ensures_ you stay below the maximum volume ... but you need to check if it doesn't ruin the song.

Mastering is the step where everything comes together. Once done, and you hear your song at maximum loudness, it _will_ sound better and more professional.

## Matching the feel or mood

This is a more subjective part. What _is_ the feel or mood of a song? It depends on your genre, your goals, everything.

For most, though, it means something like this:

* Do all songs roughly share the same frequency space? If not, apply an equalizer where needed.
* Do all songs match in range and tempo? (If all songs are slow, then one is very fast, this is most likely weird. If some of your songs use a huge range of volumes, and another stays almost constant, that might also be worth checking out)
* Do all songs feel "in the same 3D space"?

An easy way to bring the different songs (of an album) together, is by applying the same set of effects to all of them during mastering. 

But applying effects to _everything_ is obviously a big operation. So these effects must be very subtle and constrained, otherwise you ruin your mixing effort. 

{{% example %}}
Put the same reverb on all tracks. But make it a _very_ subtle reverb. Only audible to _you_, because you know what the song sounds like without it. But not consciously audible to the listener. Apply it to everything, and everything will feel more like it was performed in the same space.
{{% /example %}}

## Conclusion

As you see, mastering is just like mixing. But instead of arranging individual tracks and recordings, you're arranging full songs and mixes!

The most important part is learning how to match those loudness targets. It will take a few tries to find the right combination of "just make it louder" and "add more compression / limiting".