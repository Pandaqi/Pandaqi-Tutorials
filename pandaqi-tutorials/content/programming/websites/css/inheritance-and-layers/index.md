---
title: Inheritance & Layers
weight: 5
type: "article"
codemirror: true
---

The previous chapters explained how to select a specific element. It also taught the basic syntax for adding styles to them, although we haven't really explored that part yet. 

This chapter teaches you the other side of this equation: what happens if you don't style an element ... and what happens if you style an element multiple times in different places (which _will_ happen as your stylesheet grows).

## Inheritance

Your first question now is probably: _But what if I don't add styles for something? What happens then? Is it invisible!?_

First of all, browsers add a handful of default styles. Just to make sure you're looking at _something_ if the CSS fails. (For example, headings will be larger than paragraphs, and the default text color is black.)

Secondly, properties are **inherited**. 

> Elements inherit the styling from their parent, if something isn't set on themselves.

If the browser can't find a property on an element, it looks at its parent. Then _its_ parent. Then the parent of _that_ element. And so forth, until it finds an element with that property set to something. (And if it doesn't, it uses the browser default I just talked about.)

In other words, if you change the font color on an element, it also changes the color on all _children_ of that.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<section>
  <p>Woah, this is still affected, even though we didn't style paragraphs? Must be inheritance!</p>
</section>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
section {
  font-style: italic;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

When starting out, this might sometimes seem like an annoying rule that works against you. You just wanted one element to have a certain color, but now all children copy it too!

Instead, learn to view it as a useful _tool_. Think a bit longer about your design and find a way to use inheritance for good. If you have to fight it, you're probably doing something wrong. When done well, it allows you to write only a few lines of CSS ... and suddenly your whole website looks great.

## Cascades

Your second question is probably the opposite situation: _What if there are clashing rules? Multiple CSS rules want to say something about the same thing?_

That's when **cascading** comes in. (You know, the first "C" in CSS.)

> CSS gives preference to the more **specific** rule.

You can view CSS rules as a _hierarchy_. There are simple selectors at the top, such as `p`. It just grabs all paragraph elements. It styles all of these _first_.

But then there might be more specific selectors, such as `#some-id`. This only grabs _one_ specific element with the given ID! So they come second in the hierarchy. Any rule here will _overwrite_ a rule set in a previous cascade.

This continues until all rules have been applied. An even more specific selector might be `section p .some-class-name`. It only elements with a specific class, inside a paragraph, inside a _section_ element! This comes third in the hierarchy. Any rule here will _overwrite_ a rule set in a previous cascade.

By choosing the right "specificity" of your selector, you can tell CSS which rules should overwrite which other rules.

What does this mean in practice?

* Use high-level selectors for styles that are true for 99% of your website.
* Then use more specific selectors for tweaks and changes to specific elements or parts of the design.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<a href="https://pandaqi.com/tutorials"><h1>A clickable heading</h1></a>
<p>A paragraph underneath that heading, with <a href="https://tiamopastoor.com">a link</a>.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
/* These settings (text color and size) will be true for most of the web page */
/* So use a global, simple selector for the whole body */
body {
  color: #212121;
  font-size: 20px;
}
&nbsp;
/* These settings are only true for heading1 = more specific = overwrites the previous */
h1 {
  font-size: 40px;
}
&nbsp;
/* These settings are only true for a LINK within a PARAGRAPH = overwrites the previous */
/* (But we DON'T want these styles applied to the link that contains the heading too!) */
p a {
  color: green;
  font-weight: bold;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

### What if I can't?

Sometimes, the specificity of two selectors is the same. In that case, overwriting still takes place, which means it picks the rule that's mentioned _later_ in the stylesheet. 

That's why it's common to put a `body` selector all the way at the top of the stylesheet. Anything that comes after it will, if specificity matches, overwrite the body rules anyway. Because the code comes _later_ in the stylesheet.

And sometimes you simply can't construct a new selector with the right specificity. In some weird or difficult situations, this is just hard to do. What then? You can add `!important` behind the value. This, well, bumps its importance to the maximum, overwriting any other rules.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A really important paragraph that should be italicized.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  font-style: italic !important;
}
&nbsp;
p {
  font-style: normal;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

But this is a **worst case scenario**! This should, preferably, never happen. In fact, it's such an issue that a better solution for it has been invented in recent times ...

## Layers

Any visual design software in the world will use "layers". By grouping elements into layers, you can decide the order in which things are drawn, simply by rearranging said layers. (Instead of having to move around or change _all_ the elements one by one.)

Finally, CSS supports them as well!

This process has two steps.

1. Declare your layers and their order at the top of your document: `@layer layer1, layer2, ...`
2. Put your CSS inside said layers. Use the `@layer <name> { }` statement and place your CSS between the brackets.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>A really important paragraph that should be italicized.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
/* Layers mentioned LATER take precedence over EARLIER ones */
@layer normal-text, slanted-text;
&nbsp;
@layer slanted-text {
  p {
    font-style: italic;
  }
}
&nbsp;
@layer normal-text {
  p {
    font-style: normal;
  }
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

In the example, try removing the top statement, or switching the order. See what happens!

{{% remark %}}
You can leave out the first step, in which case layers are arranged based on the order in which they appear in your stylesheet. This is prone to errors, however, and makes rearranging later a hassle. I prefer the two-step approach in which you explicitly introduce your layer order first.
{{% /remark %}}