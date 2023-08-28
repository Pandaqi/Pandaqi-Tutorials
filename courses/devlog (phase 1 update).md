---
title: "Pandaqi Tutorials Update (Web I)"
---

Recently I launched a huge update for my [Pandaqi Tutorials](https://pandaqi.com/tutorials) website. I call it the "Web 1 update", because it mostly added courses about web design.

The first version of the website stems from 2015. I created a lot of content back then ... which had both good and bad parts. When I created the new (and improved) version, I had the monumental task of copying all those old courses and changing them where needed.

That's why I decided to split the work into multiple "phases". This article talks about the changes and other interesting developments with the latest phase. (After this one, I only have two more to go!)

## Web Dev

### General improvements

For this phase, I wanted to bring back three old courses: **HTML, CSS, and JavaScript** (Though originally the last one was split into JavaScript and Advanced JavaScript. Why I did that is beyond me ...)

However, a lot has changed in the meantime.

* My expertise increased (for all languages).
* The languages changed and the internet matured.
* My quality of writing and teaching increased. (Which showed me that my previous method of teaching wasn't optimal.)

For example, these courses often have huge tables with keywords or syntax. "Look, these are the 15 keywords you can use to achieve stuff related to X"

This is ugly, overwhelming, and ... pointless.

We have multiple _amazing_ resources for the web, such as MDN Docs. They have a clear, concise, always up-to-date overview of all the keywords and functionality of each language.

Why on earth would I try to do the exact same thing? (With my inferior resources?)

No, when I rewrite the courses, they should be light on the syntax or details. In fact, I might leave out entire chunks of each language, if I deem them too advanced/niche.

The important part is _teaching_ skills and intuition. The courses should explain how to get started, how the language works in general, how to build practical projects with it. 

When I removed the old version of Pandaqi Tutorials, I obviously made backups and transformed those into Markdown as well as possible. But honestly ... I barely use 5% of the old course, if that. The writing is subpar, and it doesn't know if it wants to focus on being _documentation_/_reference_ or _a practical guide_.

After years of teaching, and thinking about education in general, I know this to be an important difference. My courses should be _practical_. They should be hands-on, easy introductions, for building intuition and skill.

As stated, the documentation with the details can be found elsewhere.

### Interactive Coding

These courses being _web courses_, I obviously have the opportunity to make them interactive. Such opportunities should always be taken!

Whenever I give code examples, I should use the best editor I can find (with syntax highlighting, suggestions, etcetera), and _execute_ the result on the page itself.

After some research, I discovered that the latest version of CodeMirror (v6) just officially launched (out of beta). It looked amazing, it seemed easy enough to use, so I went with that.

After some struggles with Node and its overly convoluted module system, and outdated documentation on CodeMirror, I got it working.

I used a very barebones implementation for the HTML course. Once that was done, I realized this wasn't enough. I needed multiple _tabs_ (HTML / CSS / JS) if I want to provide proper examples for the CSS/JS courses.

In the end, I created two shortcodes for my Hugo website.

* One that designates a code environment
* One that designates a _tab_ (and must be placed inside such environment)

Together, they create the HTML needed to provide tabs and the example output.

When the page loads, a small piece of JavaScript

* Checks for any editors
* If found, transforms them into a CodeMirror editor
* Which has a simple "onchange" event that executes the code inside, which it places inside an `<iframe>`
* For multi-tabbed examples, it puts each language in the right spot, basically building a HTML page to feed to that `<iframe>`. (HTML goes in the body, CSS in a `<style>` tag in the head, JS in a `<script>` tag in the head.)

### HTML

Man, time flies.

This course talks about HTML5 as "new" and "not supported everywhere". The elements that are now the backbone of many websites (including my own), are left until the final chapter called "New HTML5 Elements".

Nowadays, everything in that list has been supported for a _loooong_ time, and should just be part of the course.

Similarly, the original version still has "self-closing elements". When an element had no closing tag, you had to self-close it: `<img />` instead of `<img>` or `<img></img>`. This was true _until_ HTML5, and still true in XHTML and similar versions.

But in modern times, this is actually incorrect. You just completely leave out the closing tag. These are called _void elements_, for they have nothing inside.

The old course was inaccurate or outdated like this in many parts. As mentioned, it also often just _listed_ all the tags or attributes, with a brief explanation. There was no general explanation of what was happening, no guide on how to apply this knowledge in _practice_, nothing like that.

Yeah, I basically did a complete rewrite on this one.

{{% remark %}}
Also, Flash was still a thing :p In several places, I mention how you might use Flash to provide interactivity later, or how websites can host Flash games with this tag and that. Well, Flash has been dead a while. 
{{% /remark %}}

### CSS

@TODO

### JavaScript

Like the other courses, this one was confused about its focus. It tried to be documentation, but also practical, but also a general "how to program (well)".

In the previous phase, I wrote a tutorial called "Learn to Code". It uses my _own_ (tiny, simple) language to teach the general skills and intuition for coding well, which can be applied anywhere.

I did that precisely to avoid this issue. Now, at the start of this course, I can just say: "New to coding? First follow my Learn to Code, then come back to learn how JavaScript does the things I mentioned there." (And if you're already a programmer, obviously ignore and continue.)

With that change, large sections can be trimmed from basically every chapter, shrinking the course length. (The basic course + the "advanced" one had 40 chapters combined.)

Now that I know I don't want to be a _documentation_, I can also remove some tables or syntax here and there. I merely included them to say "hey, these 5 things also exist". Which is completely pointless, especially without an example, and never having used those things myself.

Finally, like with HTML and CSS, many things that were considered "new and unstable" in 2015, are now "completely supported and native functionality". Things such as Promises are now a _vital_ part of JavaScript I'd want to teach quite early, as opposed to leaving it as a half-baked chapter at the end of "Advanced JavaScript".

The past 4 years, I also spent much more time actually programming in JavaScript and delivering serious projects with it. This means I have greater insight into its strengths and weaknesses, and what I actually want to teach in this course.

{{% example %}}
Almost all my board games, on [Pandaqi](https://pandaqi.com), use a digital component in some way or another. Maybe they generate random boards to play with, maybe they are an app that helps while playing the game, whatever. All of that is obviously coded in JavaScript, and I recently upgraded most of the codebases to faster and more modern versions. JS is probably my most-used language since _after_ writing the original course!
{{% /example %}}


@TODO

## Other updates

I also try to improve the website in other ways with each update. This time, I ...

* Made the MIDI player for the [Songwriting](https://pandaqi.com/tutorials/audio/songwriting/) interactive. So you can actually change the melody or add a new one yourself with each example.
* Added a simple drawing tool for the [Drawing](https://pandaqi.com/tutorials/visual/drawing/) course. It's very easy, in modern browsers, to just create a canvas and allow somebody to draw on it. A simple tool like this improves the experience _a lot_, allowing you to instantly test ideas, no need to switch to some other material or app.
* Made the colored blocks the _full_ width of the page on wider pages.
* Added a _dark mode_.
* Added proper banners and imagery, mostly to make the front page more inviting (and less barebones/simplistic), but they also show up in other places.
* Lots of bug fixes or tiny improvements that were on my list

@TODO: Images, a bit more info

## Conclusion

I keep forgetting how huge this website used to be, and still is. I should stop treating this like a side-project that "might be useful to five people on the internet, I dunno".

These courses are huge. And especially now, after multiple revisions, with my current skills as a writer/educator/programmer, they feel like professional offerings.

I have to spread out updates like these over long stretches of time, because it just takes that much work. Hopefully, it pays off.

Hopefully, my tutorials give others a (free and fun) path towards a new skill or career. If not that, I still hope they might serve as marketing for my other projects :p

The next phase will contain all the other web tutorials (PHP, databases, SASS, ...). I'm not entirely sure what to do with those. Making them interactive is a _huge_ task I probably don't want to execute. (I'd either have to build some environment for people to test the example and interact with a database, or create a "fake" JavaScript tool to do this.)

Until the next update,

Pandaqi