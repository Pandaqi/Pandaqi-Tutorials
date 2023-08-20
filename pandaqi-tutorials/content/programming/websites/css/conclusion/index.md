---
title: "Conclusion"
weight: 38
type: "article"
codemirror: true
---

Congratulations! You did it! This is the final chapter in the CSS course. You've learned the basic syntax, most of the properties, many gotchas and practical tips for building websites. Hopefully you feel ready to tackle any web (design) project.

In this conclusion, I will just stress a few key points (again) and give some recommendations for what to do next.

## Recap

First of all, true skill comes from _doing_ and _experimenting_ a lot. You will learn all the properties, all the values, all the little tricks or issues _by heart_ if you just ... make a lot of websites. Make a lot of _different_ websites. Try truly unique or creative designs, regularly, to challenge yourself.

Don't focus on superficial knowledge. Spend _no_ time on memorizing everything in this course or in the docs. Spend time solving problems and designing websites---use this course, other courses, and documentation as a great help when needed

Good CSS, to me, is about responsiveness and being smart with your names and selectors. Consider that _anybody_--- with any disability, device or screen size---might visit your website. Make sure it looks good and natural in all of those situations.

{{% remark %}}
Truth be told, I still have a lot to learn in that regard. Especially my older websites do some things that are terrible for accessibility. We live and we learn. Or, in my case, we write in-depth courses crossing the 40,000 word mark ... and perhaps learn a little ourselves.
{{% /remark %}}

But also spend time cleaning up the CSS code behind the scenes. Don't use too many "advanced" selectors, or pseudo-classes, or tricks. Don't think this new shiny CSS property that is _barely_ supported by browsers is what you need.

Basic properties, simple structure, clear design ... it's all you need. Name your CSS after what it _looks like_ (or what general visuals it changes). Clearly separate HTML from CSS (and JavaScript). Don't use the monolithic stylesheet---break it all down into manageable modules.

If even CSS doesn't have an answer for your styling problem ... your problem is probably ill-defined. Back to the drawing board!

## Preprocessors

The best solution to ... well, almost any problem really, is **preprocessors**.

What's that? That is a tiny tool, a piece of software, that _generates_ CSS for you. In other words, 

* The tool allows you to work faster and with more functionality. 
* (In the case of CSS, there are languages that _extend_ it by adding, for example, **nesting** for everything!)
* When you're done, you press a button and it converts all your work into _valid CSS_.
* Simply include this end result on your website!

For years now, I have used [Sass](https://sass-lang.com/) for this. It gives me very powerful programming tools for free. When I'm done, I ask it to generate the CSS from it and include that file on this website.

{{% example %}}
This website has 6+ different color schemes (for all the different categories). I'm not doing that by hand! I'm not copying all those properties or doing CSS wizardry!

Instead, Sass allows me to just create a _table_ with color schemes. Then I _loop_ through the table and print the same rules for each of them, just with the color values changed. It's only a few lines of code. And if I only need to change colors _once_, in one place, and the whole stylesheet updates automatically everywhere.
{{% /example %}}

To give another example, the syntax below is _valid_ in SASS. You can just nest elements and it works itself out.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
article {
  .related-posts {
    a {
      /* styles here */
      &:hover {
        /* styles here */
      }
    }
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

This simple example won't impress much. But imagine this across a whole design. No need for long lists of selectors, no problems with specificity, no repeating yourself because you just can't select something otherwise.

This has saved me _so much time_ and made working with CSS _so much easier_. I highly, highly recommend it.

_Then why did I learn CSS in the first place?_ You still need to know all this. Such preprocessors merely _extend_ the language. You still write valid CSS 95% of the time, just with extra functionality (such as tables, loops, and powerful variables) around it.

Other alternatives are LESS and Stylus, though I never used either.

## Go forth and make pretty things!

If you haven't already, I highly suggest doing the [JavaScript](../../javascript/) course now. Once you've learned HTML, CSS and JavaScript ... you know the trifecta of internet languages and have now become a web wizard. You can build the website of your dreams.

And now ... go forth and make cool projects! Keep making them, that's the best way to learn and to grow. 

If you made something awesome thanks to my courses, never hesitate to let me know with a quick email.

Keep learning,

Pandaqi




@TODO: Grid Complete Article => Functions: minmax, repeat

@TODO: Video example => pick some video and audio from my own marketing, then reuse that in my HTML course as well