---
title: "Volume"
weight: 11
type: "article"
daw: true
---

Volume is often called "gain". I, and many others, might use the terms interchangeably. But their meaning remains the same: how _loud_ a track will be played. This is the most important element in all of mixing! That's why this usually gets the _big fader_. The one you can't miss, the one you can change from _everywhere_ in the DAW.

The easiest way to start a mix well, is by setting every track to the right volume. That will do 90% of your job. A good volume balance will ensure the most important element (usually vocal) is loudest and easiest to hear, while background elements create a nice tapestry around it.

The easiest way to make your life a living hell, is by starting your mix somewhere else. Again, I did this when I just started. I'd immediately add that _cool plugin_ I just discovered. I'd immediately start panning things left and right, using other tricks to place instruments.

All of that is useless if your volumes are wrong. You'll discover that ... and then you need to remove all the work you did, because with different volumes, everything is different.

_But what is the right volume? Do I get any support in this sea of mixing decisions!?_ Like most, I often felt lost at the start of my mixing journey. But I've taught myself to always look for one thing when learning a new skill: objective, measurable ideas.

In other words: ways to _check_ if you're doing it right, removing inexperienced or subjective ears from the process. If I tell you to "pick volumes until everything sounds balanced"---that would be absolutely useless advice, wouldn't it?

Instead, give yourself a blueprint with ...

## The pink noise check

Mixes that sound great usually follow "pink noise". Lowest volumes are the loudest and they gradually become softer as you get to the higher frequencies. How _fast_ this happens ( = "how much volume you lose per frequency") determines the type of noise. 

![Visualization of different noise types. Especially remember Pink Noise.](noise_types.webp)

For mixes, you want pink noise. How do we target that?

* Grab yourself a recording of pink noise. (Or a plugin that generates it.)
* Play it continuously / on a loop

Now turn down all your tracks. Set all volumes to the minimum (usually minus infinity, which means the track is practically muted).

> One by one, raise the volume of each track until you can _just_ hear it above the pink noise.

Ta da! Once you've done all your tracks, your mix will be balanced and have reasonable volumes for everything. (Turn off the pink noise, don't leave it on in your final mix :p)

From here on, you can tweak. For each section of a song, there's one or two parts that must stand out. They are the highlight. (Like vocals during a verse, or an electric guitar doing a solo.) You'll want to push their volume slightly further. Similarly, if something was meant to be just "ear candy", you might want to lower its volume slightly further.

But in general, this technique is a _sure_ way to quickly get your volumes in the right ballpark. Try it in the example below. Mix each track individually to blend with the pink noise. Once done, _mute_ the noise track and listen to your balanced volumes!

{{< daw duration="20" >}}
    {{< daw-track hide="effects" id="Guitar" >}}
        {{< daw-track-part source="this_year_guitar" >}}
    {{< /daw-track >}}
    {{< daw-track hide="effects" id="Drums" >}}
        {{< daw-track-part source="this_year_drums" >}}
    {{< /daw-track >}}
    {{< daw-track hide="effects" id="Vocal" >}}
        {{< daw-track-part source="this_year_vocals" >}}
    {{< /daw-track >}}
    {{< daw-track effects="noise" id="Noise" >}}
    {{< /daw-track >}}
{{< /daw >}}

## The vocal check

Here's another check. If your mix has a vocal, it should be the loudest and clearest element. People usually don't realize just how _loud_ and _attention-grabbing_ vocals need to be to sound good. 

{{% example %}}
My first album with vocals received this feedback time and time again. "Your voice is too low!" So I pushed it higher. "It's still too low!" I raised it even further. I only accepted defeat until I listened critically to other songs I liked and realized: yes, vocals _should_ be that loud.
{{% /example %}}

How do you check this? 

* Play your mix at its lowest volume. One where you can barely hear it, but it's not silent.
* The _only_ element you should be hearing is the vocal.

At low volume, you should be able to make out the vocal pitch (and perhaps lyrics), but nothing else. It should be like it's an a capella performance.

Try it in the example above. Remove the noise track (click it + press `delete`). Now try to mix the vocal using the information above.

## The drum and bass check

My final check. Low frequencies (from drum or bass) should be **felt**, not heard. If you can actively hear the bass, it's probably too loud. This is usually accompanied by a "thumping" or "sucking" effect in the final song. The low frequencies just _overpower_ everything else.

Conversely, the high frequencies from the drum (hi-hats, crashes, cymbals) should be louder than you think. Like vocals, they are _loud_ on professional mixes. But somehow, we like that. 

In a way, 

* Kick drum/bass conquers the low frequencies
* Vocals conquer the midrange frequencies
* Percussive instruments conquer the high frequencies.

And I use the word "conquer" on purpose. One instrument should be the _clear loudest_ in each area, while others subtly fill in the gaps. If you make all instruments in a frequency range _equally loud_, this sounds like a mess or a mistake.

## Volume creep

The two tips above saved my life. They will give you good volumes for all tracks, and the perfect volume for the most important one (vocals). You're almost done!

In an earlier chapter, I explained how there's a _maximum_ volume that computers can store and reproduce. In digital audio, you can always go _lower_ in volume. That's why we start at 0 and work with negative decibels.

This has a clear consequence for volume control: **volume creep**. You want louder vocals, so you raise its volume. But now the guitar falls away, so let's raise that as well. Hmm, now the drum doesn't come through that well, let's raise it.

You raise, and raise, and raise, until you've hit the ceiling. _Everything_ is loud. And there's nowhere to go.

How to prevent this?

> Instead of raising something you want to be louder, opt for lowering _everything around it_.

By contrast, that thing will be louder. But you never hit that ceiling. The overall volume of your mix will roughly stay the same as the overall volume used for the recordings.

## Conclusion

If you can hear every part of the song, but there's still a clear highlight and support (without getting in each other's way), you've done your part. Volumes are good to go.

This doesn't mean the mix will sound _great_ by now. Or that instruments are already placed at their own spot in "the 3D space of mixing". Not yet---you'll probably need some more effects or controls to achieve that.

Most notably, you want _automation_. Just because the general track is at a good volume, doesn't mean it's at a perfect volume _at all times_. There will be specific words, phrases, or sections where you want to nudge the volumes slightly. Only for that part. Only for a little bit. That's what automation does: you "animate" properties---such as volume---over time. And the more you mix, the more time you'll spend here.

That chapter is coming up soon. But first, let's close our chapters about Controls with the last one: Panning.