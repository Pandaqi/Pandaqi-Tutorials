---
title: "Variables"
weight: 27
type: "article"
codemirror: true
---

You have written (or studied) a lot of CSS by now. And you might have noticed an annoying issue: a lot of repetition. A copy-pasting of the same values, usually for colors or sizes. 

Maybe you have a color scheme for your website, which means the same ~5 colors are used for all elements. You have no choice but to repeat them everywhere. And what if the color scheme changes? Then you have to change these values _everywhere_.

Surely, there's a better way, right?

There is: **CSS Variables**. 

## What are variables?

If you've ever done any programming, you know the general idea. I, however, still recommend you read this chapter, as CSS does things slightly differently.

> A variable is a **piece of data** saved under a **name invented by you**. Instead of copy-pasting the actual data, you can just use that _name_ throughout your stylesheet.

In other words, I can save a _color_ under the name "highlight-color". Then I reuse that name in my stylesheet, whenever I need that color. And if it ever changes? I only need to change that _one_ variable in _one_ place!

## Declaring variables

Variables in CSS can be **global** (accessible everywhere) or **local** (only available in one specific element).

In both cases, the syntax for ...

* **Creating** a variable is `--varname: value`
* **Using** a variable is `var(--varname)`

## Global

To declare global variables, you use `:root` pseudo-class (selector) and put the variables beween its brackets.

{{< playful-code deftab="css" nopreview="true" >}}
{{< playful-code-tab lang="css" >}}
:root {
  --main-color: red;
  --highlight-color: blue;
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

Now, I can simply _use_ those variables anywhere in the stylesheet.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
:root {
  --main-color: red;
  --highlight-color: blue;
}
&nbsp;
p {
  color: var(--main-color);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

{{% remark %}}
Try creating your own variables and using them for other properties!
{{% /remark %}}

Pretty powerful, right? I can declare common data (such as color scheme and fonts) as global variables, then use those for clean CSS.

## Local

You can actually declare variables in _any_ selector. But when you do so, it becomes a local variable. It's only available within the same selector.

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p id="para-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p id="para-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
#para-1 {
  --text-color: red;
  color: var(--text-color);
}
&nbsp;
#para-2 {
  color: var(--text-color); /* doesn't work, variable not available here */
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

There's another common, practical use case that I want to highlight here.

Often, you have one-off elements. Elements that just need a slightly different styling, or maybe a custom styling that the users of your website can enable. (This is common on websites that allow creating custom user or home pages, which you can style yourself.)

You don't want to create a thousand tiny classes for all the options.

Instead, you can use local variables from the HTML.

* You declare the CSS variable _on the element itself_ with the `style` attribute.
* Then use those variables in your stylesheet!

{{< playful-code deftab="css" >}}
{{< playful-code-tab lang="html" >}}
<p style="--main-color: red;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<p style="--main-color: blue;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
{{< /playful-code-tab >}}
{{< playful-code-tab lang="css" >}}
p {
  color: var(--main-color);
}
{{< /playful-code-tab >}}
{{< /playful-code >}}

## Conclusion

CSS variables are an amazing tool to keep your CSS _clean_ and _efficient_. Try to use them as much as possible. 

Even when uncertain if you're going to repeat some piece of data, I'd always opt for turning it into a variable anyway. More often than not, you end up thanking yourself for that down the line.