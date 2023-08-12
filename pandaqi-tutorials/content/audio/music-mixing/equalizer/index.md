---
title: "Equalizer (EQ)"
weight: 16
type: "article"
daw: true
---

In a way, last chapter (about compression) was about the equalizer of _volume_. The compressor reduces the range from the lowest to highest volume, making the recording a little more equal in terms of power.

What's the next step after volume? What else can you equalize? **Pitch**, or **frequencies**.

But there's a subtle difference. A reason why we call this the _equalizer_ (or "EQ"). The point of this plugin is **not** to compress the range of frequencies: to make the recording produce a smaller range of frequencies. That'd be pointless, to reduce every recording to only one pitch :p

No, the name is a leftover from the original purpose of this plugin. Old audio equipment was terrible at reproducing sounds. It often included all sorts of frequencies that shouldn't be there, while making the crucial frequencies inaudible. As such, the "equalizer" was meant to "equalize" all the different frequencies in volume. To compensate for wild frequencies: those that were too loud or too soft. 

In the modern day, we often use it more subtly and for more specific purposes.

{{% example %}}
Let's say you record a guitar. At first, everything seems fine. But then you double the guitar, or maybe even quadruple it. Once all four guitars are playing ... you notice there's way too much low end. You barely hear the higher frequencies, the high strings, the "shimmer" a guitar gives. Instead, you only hear low rumble and strumming.

That's when you grab your equalizer! Find the low frequencies that are too loud---reduce them. Find the high frequencies you miss---boost them.
{{% /example %}}

I discuss these effects in order of importance and how they are generally applied. Often, you'll compress a track first (if needed), and then add the EQ (if needed).

## How does it work?

Older equalizers had a clear limit on what they could do. They only gave you a few "bands", a few "ranges of frequencies", which you could control. Usually, these were,

* Low (LF)
* Low-Mid (LMF)
* Mid (MF)
* High-Mid (HMF)
* High (HF)

You could boost or dampen the volume of each area (individually).

Today, there's no such limit. You can add as many bands you want. You can boost loads of specific frequencies. Software is unlimited!

But ... I don't recommend that. I think the old limited approach is helpful. It's easier to make decisions, it simplifies equalizing. And those five bands is really all you need.

When you hear a problem, you don't think: "man, the 127 Hz on this track is killing me!" You think "hmm that sounds like too many _low_ frequencies, let's cut some of that".

{{% remark %}}
The true enemy of getting stuff done is _doubt_ and _too many options_. Restricting yourself in ways like these, during creative processes, is often extremely helpful.
{{% /remark %}}

## Other properties

Okay, so you can pick a _frequency_ and how much you want to _change its volume_.

As you know by now, however, changes to audio should always happen smoothly. So you're not changing one frequency, you're changing a _range_ of frequencies. The plugin draws a smooth curve around the frequency you chose and also changes those near it.

This is controlled by the **Q**. A higher Q, means a more narrow (and less smooth) range. If you boost the frequency 100 Hz, 

* A **low** Q might also nudge the frequencies 50 Hz-150 Hz in that direction
* While a **high** Q would only touch the 90 Hz-110 Hz frequencies.

Boosting or cutting frequencies changes the overall volume. Hence, most equalizers have a **gain** knob. Just like with the compressor, use it to keep the average volume consistent (even after changes).

Play around with the example below. Increase / decrease a frequency range (significantly) and hear what it does with the sound. Try to make the guitar sound fuller, or more "in your face", or more far away. If you don't like a part of the sound, try to cut it away.

The equalizer probably has the most knobs and sliders of all effects. Don't worry if it feels like a lot. Just _play_ with it. Nothing can go wrong, and it trains your ears.

{{< daw duration="17" >}}
    {{< daw-track effects="equalizer" id="Guitar" >}}
        {{< daw-track-part source="../automation/hey_miss_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

Some EQ plugins allow enabling/disabling your bands quickly. If yours does that, don't forget to turn _on_ the band you want to use. This is a great way to check if your changes are actually working. Listen to your song with and without the change. 

{{% remark %}}
Although, honestly, it takes a lot of experience to even know what you're looking for. When I first got this advice, it was pretty useless to me. Because I was like: "eh it sounds different ... but is it better? I don't know!"
{{% /remark %}}

## Filters

Most EQ plugins also have shortcut buttons for two crucial types of filters

* High-Pass Filter (or Low Cut)
* Low-Pass Filter (or High Cut)

Their name says it all. The High-Pass filter only lets _high frequencies through_. The Low-Pass filter only lets _low frequencies through_.

Most recordings contain rumble in the low end that you don't need. (It provides nothing for the song, it's just noise, people barely hear it anyway.) A High-Pass filter sweeps that away.

Similarly, many reverb plugins sound terrible when you feed a full signal into them. Instead, people recommend cutting away the low and high end beforehand, so you only send the crucial midrange frequencies to the reverb.

You can also achieve this by manually doing the setup. The filters are just a very common tool and therefore usually have their own button / shortcut.

{{% remark %}}
Many microphones have built-in High-Pass filters. That's how common the issue is. It also means, though, that most recordings you get will already have been filtered. So there's no need to do it yourself. As always, don't apply EQ to all tracks by default. Only reach for EQ if you _hear_ a specific problem frequency.
{{% /remark %}}

## When do I use it?

Either to fix issues within a track itself, or to fix issues _between_ tracks.

### Within a track

Take my earlier example. A recording of a guitar might have too many low frequencies, or a singer might sing with way too much "sibilance" (high frequencies created on plosives like "s" and "p"). You hear this problem frequency, you cut it away with EQ. 

This takes a trained ear. At first, you might only hear that "something is wrong", but don't know which exact frequency it is. If so, experiment! Create a big boosting band (so you basically only hear one range of frequencies from this track). Sweep it left to right. When you hear the "problem" getting _worse_---you've found the frequencies responsible for it!

### Between tracks

Even if tracks sound great on their own, they might not sound great when combined. If all your recordings have the same focus on midrange frequencies, this will become a major problem when combined. Your whole mix will sound like midrange! The other frequencies are nowhere to be found!

Instead, remember the 3D space of mixing. Each instrument should have its own space. That also means they get their own frequency range in which they shine.

{{% example %}}
Guitars are midrange instruments. They are loudest in those frequencies. Their characteristic sound comes from those frequencies. So if you add guitars, let them keep their midrange, but _cut_ it away from other instruments that have those frequencies.
{{% /example %}}

### Pink Noise Check (again)

Remember my talk about pink noise in the [Volume](../volume/) chapter?

It obviously applies here as well! Most good mixes will resemble a pink noise curve when done. (When you play the whole thing, all tracks combined. Tracks on their own do not necessarily look like it.)

This is an easy, safe check. Place an equalizer on your master track and check the frequencies. If it doesn't look like pink noise, you want to investigate the frequencies that are missing (or too abundant).

### General usage

Earlier I talked about "volume creep". The same is true for "frequency creep". Instead of _boosting_ frequencies you hear too little, it's often better to _lower_ frequencies you hear too much. By doing that, the nice frequencies automatically appear (by contrast). And you never run into that ceiling of "maximum volume on all frequencies" after which you can't do any more mixing!

The summary? Prefer cutting bad frequencies over boosting good ones.

## Practical Tips

I'll only give one here.

* When you **boost** frequencies, use a low **Q** (the boost area is wide and smooth)
* When you **cut** frequencies, use a high **Q** (the cut area is narrow and precise)

I have many more tips. So many, in fact, that they didn't fit in this chapter. It's a long list of _which frequencies matter per instrument_ and _how to handle the different ranges_.

I decided to move it to a sort of "appendix". If you want to read it now, check [EQ Cheat Sheet](../the-eq-cheat-sheet/). Otherwise, you'll find it at the end of the course, after the conclusion.