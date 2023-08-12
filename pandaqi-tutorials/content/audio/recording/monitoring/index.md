---
title: "Monitoring"
weight: 8
type: "article"
---

Throughout this guide, I've mentioned the word **monitoring** multiple times. Now we can finally dive into what it is exactly and why it matters so much. 

The idea is simple: to monitor means simply to _observe_ or to _hear_. Monitoring means that you need to be able to _hear yourself properly_ when recording, otherwise you can't make any good decisions about the process.

This is applied in three ways.

* By constantly monitoring the sound, you can find ideal microphone placements. Keep listening to the sound (on speakers or headphones) as you experiment, to _hear_ what happens.
* Almost all music projects will have _multiple_ recordings. When recording something new, you need to hear to current song as a backing track. 
* Rules, principles or theory don't matter---it's all about music that _sounds good_. You can only know if you're recording things right by monitoring the results, constantly, without bias.

So yes, listen to what you're doing! Play old recordings as you're doing a new one, to stay in sync! 

The mix you use for this has many names, such as ...

* Cue mix
* Monitor mix
* Backing track
* Click track (although that just refers to the metronome, explained soon)

Is it really that simple? No, unfortunately not.

## How to do this?

Plug your headphones into your audio interface. Put them on your ears. (Obvious, yes, but I say it just to be sure.)

When your interface is connected, audio output doesn't go via the computer speakers, but goes through the interface. That's the whole idea! Your separate audio interface takes over the role of the built-in soundboard from your device.

This means you don't need to do anything else. Your headphones will now automatically give you whatever your DAW is playing.

{{% remark %}}
If this isn't the case, you can usually choose your "audio output" device in your DAW settings. Set it to your audio interface.
{{% /remark %}}

You'll hear whatever layers are turned on (in your project). Use this to compose your "cue mix":

* "Mute" any layers you don't want to hear.
* Or "solo" the few layers you _do_ want in your headphones.

To speed up this process, it helps to convert your cue mix into _one_ audio file. (By "bouncing" or "exporting" it.) This way, you only have to toggle ONE layer on/off to get your cue mix.

Some audio interfaces have a knob for the volume of the monitor output. Don't forget to rotate that, otherwise you still won't hear a thing! A midrange value is usually fine.

**Tip:** monitor in **mono**. This means both ears hear the same thing. Why? Yes, stereo would _sound_ better, but that's not what we're after. We're looking for the perfect backing track to help us record. And then the simplicity of mono comes to our aid. Both our hears the exact same thing. This allows us to take one headphone off without issue. This removes issues that arise if one of your ears hears less than the other. 

{{% example %}}
While playing guitar, our right ear is closer to the sound hole and will often hear less of the backing track. If right and left are different in our headphones, this means we don't properly hear the cue mix we're supposed to hear. In mono, both sides are the same and these problems don't exist.
{{% /example %}}

## Volume

Monitoring at different volumes has different effects.

> Humans automatically perceive _louder sounds_ as being _better_.

This means that you'll love what you're hearing when the volume is turned all the way up. Even if the recording isn't that great. Even if you're singing off-key. Additionally, such loudness can bleed from your headphones into the microphone.

Conversely, if the volume is too low, monitoring is useless. You don't actually _hear_ the thing you're supposed to hear. Usually, you start singing or playing _more softly_ (and with less confidence), because you're trying to hear that backing track.

So find the right volume. Set it loud enough that it actually works. But not so loud that _it_ overpowers your performance or bleeds into the mic.

## Feedback

Besides playing a fixed cue mix, you can also hear the signal _you're currently recording_. To turn this off, mute the track on which you're recording.

There'll be a slight delay, though, which is to be expected. The sound needs to travel from your source, to your microphone, through the cables, into your computer, until it can finally go to your headphones.

{{% remark %}}
Some interface have a "direct signal" or "live mix". This speeds up the process by bypassing the computer. When the sound reaches the interface, it immediately goes to your headphones. But it's _never enough_ to completely remove the delay.
{{% /remark %}}

Why would you want this? Usually, you **don't**. It would just confuse you. You hear the instrument in real life and then _again_ a split second later (at some other volume, probably). It's only useful if your headphones are really good and completely dampen any outside sound---in which case you wouldn't hear the _real_ sound from your instrument.

But it's crucial with vocals. It's so crucial, in fact, that the whole next chapter is about that.

No, besides volume, it's important to get the **rhythm** right. So let's talk about that ...

## Metronome

Unless your song has only _one_ recording, you want to establish a clear tempo and stick to it. Of course, a song can have multiple tempos. It can change during a song. For example, choruses are often _slightly_ faster than verses. 

Tempo is usually given in BPM: Beats Per Minute. A common tempo is 120, although pop / rock / upbeat songs will go towards 180, and slow ballads will be nearing 60 or 90.

But you can't change tempo _after_ recording. Speeding up or slowing down an audio file will always bring artefacts and ugly side-effects. And if one or two of your recordings are slightly off-tempo, it will ruin the whole song. Humans have a very strong sense of rhythm. If it's broken by some of the layers in your song, it doesn't matter how good the sound is: it will be unpleasant to listen to.

To prevent these problems, record to a _metronome_. In your [Arrangement](../arrangement/) (previous chapter), mark down the tempo for each section. Most DAWs will allow you to input these settings and then turn on the metronome.

While recording, put on you headphones and listen to this "click track". 

In theory, I could stop here. Record to a click track, make sure everything has the same tempo. But from my experience, a few practical tips are in order.

### Mistake 1: wrong tempo

Really take the time to find the perfect tempo before you record. I've had several projects where I _thought_ I had the right tempo. But when everything came together, when I listened to it a few days later, it was just too slow or too fast.

Our ears are very subjective. If you just listened to a fast song, any tempo will sound slow in comparison. Try a few different tempos. Try them at different _extremes_, to get a more objective look.

Because, as I said, changing tempo afterwards is a no-go.

### Mistake 2: the right volume again

I often make the mistake of setting the click track to a low volume. Too low. Once I start playing / singing along with it, this new sound completely drowns out the metronome. I've recorded plenty takes that sounded great ... but were completely off-beat.

So set it loud enough. But not so loud that _it_ overpowers your performance, nor that the sound bleeds into the microphone.

### My recommendation: drum track

Click tracks are lifeless and static. I've learnt that it's more useful to record a click track with another instrument, usually drums. This sounds more lively and human. It helps the performance, because it feels like playing along with a band, rather than some mechanical device.

You can create such a backing track easily.

* Create a new layer in your DAW
* Set it to a drum instrument (or whatever you want to use)
* Input MIDI notes exactly on the beats
* Set to repeat endlessly / until the end of the song

Once I did this, I felt more comfortable and stopped going off-rhythm all the time. Because ...

### Mistake 3: using imperfect takes as the backing track

My recommendation above comes with a warning. When I realized this, I ignored the whole metronome thing and just used my first recordings as the "beat" for newer ones. Maybe I recorded a strong set of guitar chords, with the correct groove / rhythm, and used that.

Guess what? It wasn't as perfect as I thought. Yes, it was close. Good enough. But the rhythm was _slightly_ off on those chords.

Which means the next recording had a rhythm that was _even more wrong_. And with each recording, with each layer added to the backing track, I drifted further off the right tempo.

So don't do this. If you're using a real instrument or recording as the "click track", absolutely _make sure_ it has perfect tempo before going further.

{{% remark %}}
A DAW will allow you to investigate the waveform. You can see if the big hits line up perfectly with the beats / measure bars. Additionally, they often have tools to forcefully align them. If the change is minimal, you can't hear the sound has been edited, but its tempo will be perfect.
{{% /remark %}}

### Mistake 4: using everything as the click track

A related mistake. Once you record more and more, you might be tempted to just keep those layers active. As the session continues, you play more to _the full band_ than a single click track. It might sound great while you do it.

Usually, it turns out to be a big mistake afterwards.

As I said, those recordings won't all be perfect. Their pitch or rhythm will mess with you.

But it's also overwhelming. Because there are many layers or instruments, it becomes _harder_ to pick out the correct rhythm or pitch. It becomes _harder_ to be absolutely certain about the beat. There's so much going on.

Instead, keep your click track as simple as possible. Preferably one instrument, maybe two. Perfectly on the beat---the backbone of your song.

As you record more, mute those other layers. Always keep the click track simple and consistent.

{{% remark %}}
In a way, it's better to make a _consistent_ mistake, than to make different mistakes every recording. So even if the click track isn't ideal, sticking to it throughout will make spotting and correcting errors later much easier.
{{% /remark %}}

In general, people find the right pitch (for singing) using **low to midrange** pitches. A very low bass line will mess with our perception of the real pitch we should sing. Similarly, a set of high violins or piano chords doesn't help as much. In the cue mix, it's best to have one instrument with those "low to midrange" notes which we use as an anchor when singing. This is usually a guitar or piano playing basic chords.

This is a general rule. We speak and sing in the midrange (of frequencies), so our ears are most attuned to that (by far).

## Technical remarks

When you pick your audio (out) channel, there are usually some settings. These influence 

* The delay time
* The audio quality
* The likelihood of freezes or pops (because it can't keep up)

Usually, they'll have sensible defaults. But I still recommend looking at them and trying out different configurations.

Digital sound works through _buffering_. The computer loads a buffer of a few seconds, and only plays it when that buffer is completed. Why? To keep the timing right. Otherwise, sounds would load "whenever they are ready", completely destroying timing of any song! Additionally, sounds that suddenly _cut off_ lead to an annoying click in our ears.

In these settings, you can change that buffer size. 

Make it smaller, and the delay will be _smaller_. But because the computer can't look ahead that much, it's less "safe". If it can't keep up, if it locks up, there'll be corruption (most likely pops and clicks) to your recording.

Make it bigger, and you have more security, but the delay is also _bigger_.

Find a nice middle ground. A monitoring delay that is short enough for you, but without sacrificing audio quality.

Why? Let's go to the next chapter. Vocal monitoring---or "singing with headphone and why it's dark magic".