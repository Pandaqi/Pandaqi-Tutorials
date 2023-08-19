---
title: "Links"
weight: 23
type: "article"
codemirror: true
---

Links are another element that receives quite some styling by default. When you learned HTML, you probably noticed that _(hyper)links_ automatically get a border underneath them. An "underline". 

In fact, it's so common that people automatically assume that links have this underline, and anything without it isn't registered as "a link I can click".

This isn't an actual border. It's not set via the `border` property, though it _does_ work using the same values (thickness, style and color).

## Text-Decoration

As expected, there's another CSS property that controls this. It's called `text-decoration`.

What's the difference with `border`? This property takes the text into account. It will not show the border if it overlaps with a letter. (Usually letters with something sticking out at the bottom, such as the "j" or "p".)

In the example below, notice how the text decoration doesn't overlap the letters, while the border has no qualms doing so.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>
  <a href="#">A juicy link!</a> And here is some text, then <span>a pretty fake link</span>.
</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
a {
  text-decoration-thickness: 2px;
  text-decoration-style: solid;
  text-decoration-color: currentcolor;
  /* text-decoration: 2px solid currentcolor; */
}
&nbsp;
span {
  border-bottom: 2px solid currentcolor;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Also notice how the link automatically receives a blue color. (And, once clicked or "visited", it becomes purple.)

This is simply a default for the `color` property, which means you can override it by setting a different color yourself.

You can turn off text decoration with the `none` value. 

_Why do that? You just said people EXPECT this for a link?_ Well ...

## In Practice: Block Links

By default, links were made for _inline text_. A link is just a few words in line with the text around it.

These days, however, anything might be a link. You might click an image to see it at full size. A website might contain big buttons, or tiles, or whatever that---when clicked---leads to a different webpage.

In other words, links often aren't necessarily inline or populated by simple text.

In such cases, 

* You really want to turn _off_ the defaults. Otherwise everything inside will become blue and receive underlines.
* You want to change the `display` property to something that is _block_ level.
* And make sure the _link_ fills its entire container.

There's nothing more frustrating than hovering over a big button ... but clicking it does nothing. What's the problem? The actual _link_---the actual clickable element---is still inline and thus as small as it can be. So only when you click the actual text inside the button, will the link actually work.

Try it in the example below. Because the button has some padding inside, before the actual link starts, it isn't actually clickable if you click far away from the text (near the edge).

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<div>
  <a href="https://pandaqi.com">
    <img src="/tutorials/programming/websites/css/links/panda_image.png">
    <p>Woah, click this amazing button!</p>
  </a>
</div>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
div {
  background-color: #88FF88;
  font-size: 1.25em;
  padding: 1em;
}
&nbsp;
div:hover {
  filter: drop-shadow(0 0 5px #333);
}
&nbsp;
a {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: black;
}
&nbsp;
img {
  max-height: 1em;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Remove the padding, make sure the link fills the entire space, and you're good.
{{% /remark %}}

_Wait, what's that `:hover`?_ Ah, glad you asked!

That ... is the topic of our next two chapters. The only _other_ bit of syntax in CSS, which I've intentionally withheld because it spooks newcomers and isn't that useful until later on.

Let's talk about it now.