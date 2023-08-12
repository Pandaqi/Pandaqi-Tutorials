---
title: "Rhythm I"
weight: 5
type: "article"
midi: true
---

I know what you're thinking. _Rhythm? Really? That's where you want to start?_ Yes, no doubt about it. We're all so focused on pitches, but rhythm is actually king.

Think about it. We don't really have that many pitches. In Western music, most songs stay within their scale of 11 notes. Even then, they don't use all of them. When given a pitch, you have only three options going forward: stay the same, go up and go down.

This means that the number of unique melodies---just by looking at pitch---is very small and limited. Many songs have the same notes or very similar ones. We all know a million songs in which the melody just walks up or down the tone ladder: up to build tension and get a big chorus, down to close off the chorus and reduce energy. 

It's hard to differentiate from that. What are you going to do? Walk up/down after every note? Sounding like a confused broken record? You can't go down _the whole song_, as there's a lowest note you can sing. 

If you were to create a list of popular songs and remove the _timing_ from the pitches, I am certain you will find it hard to differentiate all the songs---or even recognize them.

## A test

In fact, let's do that. Below is a somewhat popular pop song from a few years ago. First without rhythm. (Tempo is "common time" of 120 BPM.)

{{< midi tempo="120" >}}
F3/1 F3/1 F3/1 A#3/1 A3/1 F3/1 F3/1 A#3/1 A3/1 F3/1 F3/1 A#3/1 A3/1 G3/1 F3/1 F3/1 F3/1 C4/1 C4/1 A3/1
{{< /midi >}}

Now, without pitch.

{{< midi tempo="225" >}}
C4/1 C4/1 C4/1 C4/2 C4/4 C4/1 C4/1 C4/2 C4/3 C4/1 C4/1 C4/1 C4/2 C4/1 C4/2 C4/1 C4/1 C4/1 C4/1 C4/1 C4/4
{{< /midi >}}

Notice how the **pitches** follow a very predictable pattern. Jump up, walk down, jump, walk down. And yet, the song I chose is one of the more _varied_ and _creative_ pop songs (in my eyes).

The duration of the notes when you only have **rhythm** ( = the width of the rectangles in the visual) is all over the place. Sometimes one or two quick notes, sometimes a lot of quick notes, sometimes a long note. In my opinion, it's more unique and recognizable.

What was the song? "Somebody you loved" by Lewis Capaldi.

{{% remark %}}
I didn't pick extremely famous or rhythmic songs on purpose---like "We Will Rock You"---as _anybody_ would instantly recognize that. It felt like cheating.
{{% /remark %}}

Forget pitch---for now. The unique identifier, the real juice of music, is the _timing_ of those notes. 

## Rhythm is uniquely human

As far as we know, we're the only ones who understand rhythm. Other animals can hear and produce _pitch_ fine, but none have a "feeling" for rhythm like we do.

It's probably because we have such a gift for **pattern recognition**. 

Because, what _is_ rhythm? It's the natural feeling that music can be subdivided into bars and beats. Whenever we hear music, we immediately do that in our heads. We subdivide the tempo into smaller and smaller parts, following some pattern.

{{% remark %}}
It's probably no coincidence either that our most common rhythm is similar to our heartrate and our walking speed. And that it's a multiple of 2 or 4, which is, you know, the amount of limbs we have. (And use while dancing.)
{{% /remark %}}

Because of this, a song immediately sounds _bad_ if the rhythm is bad. Because it is fighting our natural instinct. Because it _feels_ wrong to us. If we skip a beat, we feel like something is missing. If we try to cram a beat too many in there, it feels like we're rushed and out of breath. 

Both of those can be a stylistic choice, of course. The music for films usually messes with rhythm to give us this sense of "tension" and "rush".

{{% example %}}
The *Mission Impossible* theme is very rhythmic. It has an extra beat (it's in 5/4), which makes you feel rushed and like you're going faster than you're able to follow. The *Ant Man* theme has the same idea, but this time it misses a beat (it's in 7/8). If this means nothing to you, keep reading and find out!
{{% /example %}}

And that's the point of this guide: to help you _use_ rhythm to its full potential when composing. To give you some rules, but also when to break them.

## How do we think about rhythm?

The story above explains how humans think about rhythm: as _subdivisions_. 

We don't calculate note lengths in seconds or milliseconds. We don't assign absolute units. It would be annoying! It wouldn't be practical at all! ("This note is 1.25 second, followed by a 733 millisecond note, and then ...")

Instead, we divide any music into smaller and smaller parts.

* A song
* Has different sections (verse, chorus, ...)
* In which each vocal line, or instrument solo, is a **phrase**
* Which are subdivided using **measures**
* Which contain a consistent number of **beats**

That's our starting point: the "beat".

The length of that beat is determined by the tempo. _You_ choose the tempo! This is usually done in BPM: "Beats Per Minute". Common time is 120 BPM. Energetic pop/rock songs are usually 180 BPM, while a slow waltz approaches 60 BPM.

You can test this yourself. 120 BPM means 2 beats per second. So count on your fingers: one two, one two, one two. Or listen to this example:

{{< midi tempo="120" caption="Single beats played at 120 BPM." >}}
C3/1 C3/1 C3/1 C3/1 C3/1 C3/1 C3/1 C3/1
{{< /midi >}}

Any other notes are measured compared to that one beat. We might have "half a beat" or "a quarter beat". Or a long, held note might run for many beats.

For this guide, I keep all explanations and examples in "common time": 4/4. There are four beats per measure. 

{{% remark %}}
In my examples, the thick vertical line is the start of a new measure. The thin vertical lines are the beats within that measure.
{{% /remark %}}

_How to use this?_ When writing a rhythm, only think in multiples. If a note feels too long, break it in two. If a note is too short, make it twice as long, or three times as long. This way, you'll always have a solid _structure_ that humans will pick up on. Don't create rhythm using absolute time units.

And, in the end, all those beats combined need to perfectly match the length of your song. (It will likely sound very ugly if you end the song 25% through a measure.)

This will often happen naturally. Otherwise it's a fun puzzle.

The example below only has three different note lengths, all a multiple of each other. But it already sounds usable.

{{< midi tempo="300" caption="It also only has three pitches, showing how much you can do with just rhythm." >}}
C3/4 E3/2 E3/2 C3/8 G2/1 G2/1 G2/2 G2/2 G2/2 C3/4 
{{< /midi >}}

Rhythm is most important (and varied) in dance music, rap and accompaniments (such as film scores). Pop songs are usually more focused on pitch than doing something special with rhythm. But it's at least "important" in every style!

Next chapter will give specific tips and principles about rhythm.