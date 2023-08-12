---
title: "Introduction"
type: "article"
overview: true
weight: 1
---

If you are _completely_ new to LaTeX, I *strongly* recommend first looking at the [LaTeX Basic Course](/tutorials/writing/latex). Many fundamental concepts will be used in this course, but not explained again.

Let's now start our journey into beautifully typesetting mathematical formulas. This course will 

* Teach you the environments to use for different mathematical concepts
* And the commands to use for certain mathematical operations. 

{{% remark %}}
Remember, LaTeX won't calculate things or run algorithms. It's only there to typeset the math.
{{% /remark %}}

If you have a pretty good understanding of LaTeX, learning the mathematical side won't be difficult. Some of the chapters will have little explanation or new concepts, and will just provide some tables with symbols, for you to reference as you're working. 

Lastly, I have good news and bad news.

The bad news? LaTeX can't typeset math and regular text without any extra help. Its default way of formatting anything is targeted at text only. To use math, we need to *always* put it inside a math environment. The first few chapters will discuss this.

The good news? These environments behave a lot like you're used to and can be created easily. Text and numbers are displayed regularly, just with a different font style. For example, these math characters can be typed right from the keyboard and automatically work beautifully:

{{< highlight Latex >}}
+  -  =  !  /  (  )  [  ]  <  >  |  '  :
{{< /highlight >}}

Most commands work inside these *math environments* well. This also means that the same restrictions apply as with regular text typesetting. 

Let's start!