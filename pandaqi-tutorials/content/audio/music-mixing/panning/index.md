---
title: "Panning"
weight: 12
type: "article"
daw: true
---

Panning is the control that makes the difference between Mono and Stereo sound. By default, every track is panned to center (`C`). The same information is sent to both ears, at the same volume. By changing the panning, you can place tracks more to the left or right.

You can go all the way left (`L`) or right (`R`). In that case, this track's sound will only come out of that ear, and none out of the other.

Some people swear by this LCR mixing. All sounds are either center, completely left, or completely right. And yes, this is often all you need. Following this rule can simplify your process and remove tough decision making.

But you _can_ place them anywhere in between. If you place a track `50% L`, it will be mostly on the left, but also still on the right. More specifically, the sound will be sent at 1.5 volume to your left ear, and at 0.5 volume to your right. In our mind, we interpret this as the sound mostly coming from the left in 3D space.

Stereo tracks already send one sound to L and the other to R. But you can still pan them! How does that work? It simply applies this rule to both tracks. The one fully to the left, will stay fully to the left (it can't go further). The one on the right will move over to the left by 50%.

There's a lot to say about panning. But the basic principles are very intuitive and not so surprising.

## Balance

If you pan all your tracks to the left, and none to the right, your mix will obviously sound terrible. It's lopsided. It's like somebody is screaming in your left ear, while your right ear stopped working.

> Don't create lopsided mixes with panning.

The loudest tracks should be balanced in panning. If two guitar tracks are on the left, then two should be on the right by an equal amount. That's why things are usually recorded in multiples of two: half of them go left, the other half right. And otherwise multiples of three: center, left and right.

{{% example %}}
I've recorded a lot of tracks only supported by guitar. I usually record three parts: regular chords, a lower variant, and a higher variant. The regular chords are panned L and R. The lower variant, however, is often something like `25% L` and `25% R`. The higher variant sits in between with `60% L` and `60% R`. The final product is balanced, but it also places each guitar somewhere else and fills the whole spectrum.
{{% /example %}}

More soft or "special" tracks have more freedom. In fact, that freedom can make your mix stand out. Play a tiny riff only on the left. Balance a high violin on the right by a _different_ string instrument on the left. Ping-pong a sound: it starts louder in the left, then becomes louder on the right, then the left, and so forth.

## Doubling

I've mentioned a few times how people record the same thing multiple times. Why is that? It's a crucial concept called **doubling**. This is the second major trick that turns your mixes stereo and professional.

What is it?

> Doubling means recording the same thing twice. The first recording plays in your left ear, the second in your right.

It's that simple---and it's powerful.

You can test this. Record something. Now copy that recording to a second track. Pan the first track left, the second right.

What do you hear? It's still mono. Yes, you had two recordings panned L and R ... but it still doesn't sound like stereo. It sounds like one _louder_ recording in the center.

Our ears expect to hear _different_ things. Because they are in different locations! If you hear someone sing, your left ear hears it _slightly differently_ than your right ear. This is what allows us to guess where something is in 3D space. This is what makes sounds stereo in our head.

So what do we need? We need two similar recordings (of the same part), which are **not** exactly the same. Hence, doubling.

You play your guitar chords twice. Place one left, one right, and now your guitar sounds _massive_ in your ears.

This works for everything, with only that single rule: the recordings need to be _almost_ identical. If they're too different, the effect falls apart. If they are too similar---your guitar playing is too consistent!---it also doesn't work.

The two recordings below are _different_. If you listen to them on their own, you'll hear some mistakes here and there, timing issues, etcetera. (I just grabbed two random doubles from my latest project.) But play them at the same time? Panned left and right? It sounds great. 

Also play with the pan sliders. Perhaps set both tracks to the center. As opposed to that "trick" I mentioned earlier (Haas effect), the sound stays consistent and good.

{{< daw duration="12" >}}
    {{< daw-track hide="effects" id="Guitar L" pan="-100" >}}
        {{< daw-track-part source="happy_here_guitarL" >}}
    {{< /daw-track >}}
    {{< daw-track hide="effects" id="Guitar R" pan="100" >}}
        {{< daw-track-part source="happy_here_guitarR" >}}
    {{< /daw-track >}}
{{< /daw >}}

These two techniques will create 90% of your stereo image: panning and doubling.

It's simple. But many people don't realize this or aren't willing to put in the time for those extra takes. Which is a shame!

{{% example %}}
When I did my first mixes, I was always disappointed. My guitar sounded so _good_ in my room! When I played it live! Why does the recording sound dull and thin? Then I learned about doubling. I applied it. And suddenly thing started sounding great and professional. Simply by recording the same thing a few times and picking the best two takes.

Most importantly, I sent the final product to others. Sometimes, there were 6 or even 8 guitars playing. But none of them realized this. To them, even those that were musicians, it just sounded like "one beautiful guitar". All your favorite songs are doubled. The trick is to do it so well that no listener notices!
{{% /example %}}

{{% remark %}}
The nice thing is that you can always record doubles _later_. If you already have a mix and learn this for the first time, you can still do this! Panning is the easiest thing to change or improve on the fly.
{{% /remark %}}

## Guidelines for panning

As always, these are guidelines, not rules.

> Pan your tracks as if the listener is playing the instruments

> Prolonged highlights should be center. If something takes the spotlight for more than a few seconds (such as the vocal or the drum), it sounds odd to place it to the side.

In practice, 

* Kick drum and snare are dead center. The rest of the drum kit is spread out like a physical drum kit. Toms slightly left and right. Crashes, cymbals, etcetera can be all the way left or right.
* Bass should also be center.
* Vocals should be center. (Although they are often doubled, with all the other voices coming in from the sides.)
* A piano usually has the low notes left and the high notes right. (If it's important enough to record in stereo.)
* Guitars can do whatever they want :p They are unbalanced instruments and have too much variety for any general rules.
* The rest can be distributed left and right. Give each instrument (or "sound") its own position on the spectrum.

## Last tips

### Keep it simple, stupid

Panning and doubling are powerful tools. Which means, by default, that humans tempt to overuse or abuse them.

Not _everything_ needs to be doubled. Not _everything_ needs to be away from the center.

Your most important elements are usually center. Either because it's one recording (mono), or two recordings fully to the left and right (stereo).

If an element is just for background or support, doubling will just get in the way. You'll make the sound too loud, too important, too "wide". A song only sounds wide if it also has narrow parts to contrast it. Keeping a sound narrow and confined is a great tool to blend it in, instead of attracting attention.

Many great songs were recorded with just _one microphone_. They were made to sound a bit wider through simple effects (such as reverb), but not more. A great song is a great song. A great recording is a great recording. Use panning where needed, not by default.

{{% example %}}
The first song I can think of is "I'll Follow You Into the Dark" by Death Cab for Cutie. A nice song, loved by many. But it's just one mono recording with a default plugin to add a sprinkle of stereo image.
{{% /example %}}

### Don't forget automation

Automation can be used with everything. Volume, but also panning. Hopefully you're starting to get a feel for this.

* In your subtle, soft sections (e.g. verse), reduce panning.
* In your powerful, big sections (e.g. chorus), increase panning.

This shift, from a slight stereo image to a full one, is an _amazing_ boost to your chorus or bridge. Again, it's that contrast. If you don't keep your verse simple and mostly center, this boost cannot happen.

Now we can finally do a full chapter dedicated to automation!