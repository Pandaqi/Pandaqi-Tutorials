---
title: "Reverb & Delay"
weight: 17
type: "article"
daw: true
---

Delay and Reverb are related effects. But they're certainly not the same or interchangeable. After many failed attempts at using it, I finally learned the one true lesson!

If you remember anything from this chapter, make it the following rule.

> Reverb pushes something further back, Delay pushes something more to the front

Instruments that should be in the back---that should be "support"---usually receive copious amount of reverb. Without it, they'd compete with the main sound (likely the vocals) to be at the forefront. This doesn't sound "bad" to us, because this reverberated sound is mixed with the rest.

Conversely, most engineers use a delay on the vocals. A so-called "slap-back delay", which is a short one-time delay. This is a very simple technique that brings the vocal more to the _front_. One that adds attention and aggressiveness.

That's the main difference between these two effects. Now let's dive into the details.

## Delay

This one is far simpler than reverb. All it does is _repeat_ a sound, but delayed. 

**Feedback**: this determines how loud every subsequent repetition will be. If set to 100%, the repetitions will all be at the same volume at the original sound. At 50%, every repetition will be half the volume of the previous. The lower this number, the faster this effect "dies" (because it becomes inaudible).

**Repeat**: how often the delay repeats. You can also control this with feedback or automation, which is why this option is sometimes missing.

**Time**: the time between repetitions. Many DAWs allow you to set this in _beats_ (relative to the tempo of the song). That's usually what you want: to time the delays exactly on the beat.

**Stereo**: how the delay moves in stereo space. This often has settings like "ping-pong" (which means every delayed repetition alternates between left and right ear) or "mono" (to keep all repetitions in the center).

**Dry/Wet**: sometimes called "mix" or "blend". This determines how much of the delay is mixed back into the original signal. If completely dry (0%), the delay can't be heard at all! If completely wet (100%), you only hear the delay and nothing of the original sound.

Try it in the example below. Crank up the "feedback" or "wet" to hear more of the delay. If you time it well with the audio, it sounds awesome (and probably not even noticeable to the average listener). Time it wrong, and it sounds like stuttering. Once the audio stops, you'll hear the delay continues for a bit.

{{< daw duration="17" >}}
    {{< daw-track effects="delay" id="Guitar" >}}
        {{< daw-track-part source="../how-to-use-a-daw/keeping_the_sunset_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

So, how do you achieve that slap-back delay? Create a delay that does _one_ repetition, the next beat, at maximum feedback.

### Usage

Other use cases are,

* To bring something to the front, as mentioned. It works on anything.
* To enhance the stereo image of your song. Play an instrument in your left ear, then play a delayed version in the right ear. Or ping-pong that sound.
* To create a more open, sparkly, "full" atmosphere in your song. This is mostly true if you delay many _high_ notes, as it fills the mix with a sort of "sky full of stars".
* To enhance or emphasize the rhythm of your song. 

{{% example %}}
A rapid delay on percussive instruments sounds awesome, if you time it to the tempo. It adds many sounds that fall perfectly on the beat, making the drum bigger and more "stereo", while emphasizing the rhythm. I also like delays on fast, high parts---like high piano notes or a harp.
{{% /example %}}

## Reverb

At first, reverb may seem the same as delay. When a sound reverberates, it bounces off the walls and returns to your ear _delayed_. When deflected, sound becomes softer, until it dies. That's the same as delay, right?

Yes, it _can_ be. But reverb aims to simulate more specific or complex deflections. Instead of just "repeat the thing, but maybe softer", it works through so-called _impulse responses_ (IR).

Given a sound, it feeds it through the IR, and gets back the new version of the sound. It "simulated" a room with nice acoustics.

This allows much more realistic and varied reverbs. Among the most popular types are,

* Room Reverb
* Hall Reverb
* Plate Reverb
* Spring Reverb
* Convolution Reverb

All of them simulate your sound bouncing around inside a 3D space. But they all do it in different ways, producing different results. 

{{% example %}}
Room/Hall Reverb are "natural reverbs". They try to simulate the sound as naturally as possible, like it would soon inside a _room_.

The others are "artificial reverbs". _Plate_ simulates the sound being reflected by a single, straight metal plate. _Spring_ emulate mechanical reverbs for a metallic sound. _Convolution_ reverbs can load any impulse file that defines any characteristics.
{{% /example %}}

Most DAWs have a standard built-in room reverb. It's _fine_ for everything. First learn to use that, before you jump to other reverbs. But know that there are many types! Some fit better with your particular instrument / voice, some worse.

This extra precision allows you to place sound more accurately in your 3D mix than with delay. Remember, reverb pushes things _back_. The more reverb you add, the more it sounds like something is far away, or the listener is standing inside a giant hall way.

Try it in the example below. Play around with all the different impulses and how they make the guitar sound. Move the slider towards "wet" to more prominently hear the reverb. (And if you leave it more dry, you'll notice you can't actively hear the reverb. But it's still improving the sound---that's often the setting you want.)

{{< daw duration="17" >}}
    {{< daw-track effects="reverb" id="Guitar" >}}
        {{< daw-track-part source="../how-to-use-a-daw/keeping_the_sunset_guitar" >}}
    {{< /daw-track >}}
{{< /daw >}}

### Properties

It mostly has the same properties as delay. Though they might be named differently.

**Size / Decay**: same as feedback. Determines how fast the sound decays. The longer this takes, the bigger the simulated room is. Long decay times are _great_ for solo instruments or if you want a very spaced-out sound. Otherwise, it gets muddy fast and you should stick to much smaller sizes. 

**Dry / Mix**: how much reverb is added to the original sound.

**Pre-delay (Pre):** how long it waits before the first reverberations start. This one is often overlooked, but maybe the most important! If left at 0, the reverb will clash with the original sound. This usually puts something _too_ far back and makes it hard to hear the original sound. The reverb kicks in too fast!

### Usage

As stated, it moves things further back. This is ideal for support instruments, background sounds, tracks that are merely there for "atmosphere". On their own, they will sound muddy (with that much reverb). But when blended with the rest of the mix, it sounds just right. They're not fighting for attention at the front of your mix.

It also adds space to instruments. Giving an instrument its own reverb will clearly put it inside _a 3D space_ and set it apart from other tracks.

But when you add a reverb to the whole _track_ (or a whole _bus_), it puts everything inside into the same room.

That's how people use it most often.

* A little reverb here and there on individual instruments. Especially if the original recording is too "dry" or too "aggressive".
* A little reverb (a different one) on the whole _mix_ or _group_ (all tracks that belong to the same instrument)

This puts everything in its own space, yet in the same space.

It's easy to apply too much reverb. That's also apparent from my "golden rules" below. When working with reverb, often switch to a different song, or give your ears a rest. It's easy to get used to all the echo and "space", thinking it sounds amazing. Then, when you get back the next day, you're suddenly hit with a mix that's drowning in delay.

## Dry recordings?

_What do you mean with a recording that's too "dry"_? I discuss this further in my [Recording](../../recording/) course. It's an important part of that skill. But as a mixing engineer, you _work_ with those recordings, so I still want to mention it here.

It's recommended to record things as "dry" as possible. Improve the acoustics of your room to sound as dead as possible. Only capture the true sound from an instrument (or vocal), as close and pure as possible. 

{{% remark %}}
All recordings I use for my examples are "dry". That's why they sound okay, but not something you can immediately use---without changing---in a final mix.
{{% /remark %}}

Why? Otherwise, each recording gets the real-life reverb baked into it. Most likely, this makes it impossible to edit later. Ten different recordings have ten different "echoes" from your room, and it's all impossible to recover, because the reverb is _a permanent part of the recording_.

Recording dry definitely gives you the most flexibility and the easiest time when mixing.

This does mean, however, that the recordings sound ... "dry". Good recordings sound a bit unnatural, a bit overly aggressive by default. This means adding a tiny bit of reverb to _everything_ is usually necessary. 

So, it's not bad to apply a lot of reverb plugins. In fact, don't shy away from it, as most (proper) recordings _need_ it. But it's bad to apply a reverb with way too much intensity on a single track.

{{% remark %}}
Though, to make you work faster and more efficiently, apply the reverb plugin to whole groups or busses. It's highly unlikely that you need a completely different reverb for every single guitar track you have.
{{% /remark %}}

### Golden rules

The rules below apply to both delay and reverb, though more strictly to the latter.

> Use a nonzero pre-delay that fits the tempo. 

An easy starting point is the formula `60 000 / TEMPO`. The result, in milliseconds, is how long a beat lasts in your song. Pick a multiple of that, so the reverb works _in keeping with the tempo_. It can make the difference between reverb destroying your mix and reverb actually helping it. Making this too large, though, will create the "standing in a giant church"-effect again.

> Apply the effect until you consciously hear it ... then back down slightly.

In other words, keep increasing the "wetness" (or volume) of the reverb until you clearly hear its effect. Then take it down a few notches.

This usually results in a good balance. The effect is clearly there and _doing something_. But you don't actively notice it. It's _supporting_ the recordings, rather than drawing attention to itself.

This rule can obviously be ignored if you _want_ the reverb / delay to be noticed. For example, dance tracks that use delay for a nice groove will make them loud and easy to discover.

> Use a High-Pass filter and Low-Pass filter before it

In other words, only send frequencies around the midrange into the plugin. (Don't remove them from the original sound. This is only about what you sent into the effect. Some reverbs have buttons to add these filters themselves. Otherwise, just add an EQ before you add the Reverb.)

Why? Well, what does a reverb do? It takes the sound, then moves it up in pitch (and lowers the volume), then plays it back some milliseconds later.

This means that low frequencies become ... midrange frequencies. They will clash with the important midrange of your original sound!

And this means that high frequencies become ... so high that it's unnatural. 

So just don't send them into the reverb. This is often called the "Abbey Road Trick". It's the technique they used at the famous Abbey Road studios to apply reverb _without_ causing the mix to swim in echoes.

> One reverb setting for the whole song is usually not enough.

Instead, use automation. During the verse, back down on all the reverb, scale back the sound. During the chorus, throw up the intensity! The more tracks are playing, the more they all need reverb. Because they need their own depth (in the 3D space of mixing), because all those tracks need to sound like they're in the same room.

In most of my tracks, a reverb is very soft (or completely disappears) during more silent sections. But at that final chorus, with thirty tracks competing? Yeah, the reverb numbers go up a lot.