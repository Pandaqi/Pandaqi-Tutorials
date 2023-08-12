\- id: 319 title: "Guide to (HTML5) Canvas" post: "

When HTML5 came around the corner, a new and very powerful element was introduced. I'm talking about the `canvas` element, which does exactly what you'd expect: create an empty canvas within a webpage, for you to paint your pretty pictures on. The element itself, just like the rest of HTML, doesn't have any complexity to it; all you need to do is type it, and your canvas is ready to be used. To do anything meaningful with it, though, JavaScript is used. JavaScript has lots of objects and methods designed specifically for the canvas, and those are what this course will teach you. Therefore, before you start, make sure you know the basics of HTML and JavaScript. The first chapter will take you by the hand and remind you of everything, but I subsequently keep the examples clean and simple.

Because JavaScript is used to create, draw and modify the canvas, there's a lot more to it than just *creating a picture*. For example, the main use of the canvas is for creating games right in your web browser. This course will not really focus on that particular aspect, but I just wanted to tell you what you could use all this information for.

Have fun!

## Table of Contents

1.  The canvas Element
2.  Paths
3.  Lines & Curves
4.  Stroke Styles
5.  Shapes
6.  Fill Styles
7.  Text
8.  Transformations
9.  Images
10. Composites
11. Animation

" slug: "guide-html5-canvas" cat: "Website" subcat: "Canvas" video: "" diff: 1 quiz: "" - id: 320 title: "\[Canvas\] The canvas Element" post: "

From an HTML perspective, creating a canvas is nothing special. It's just a regular tag with no extraordinary attributes or syntax. To create a canvas, use:

``{.longsyntax}

*fallback text*

The *fallback text* is displayed only if a user's browser doesn't support this element.

Unlike the rest of HTML, you shouldn't use CSS to set the width and height of the canvas. The canvas defaults to a size of `300px` (width) by `150px` (height), and if you set a width or height with CSS, it simply *stretches* or *shrinks* the original canvas image to be this size. Sometimes you want that, but more often than not you don't. If you want your canvas to be a specific size, set the `width` and `height`
*attributes* on the canvas element itself.

And last but not least, we need to set an `id` if we want to be able to access the canvas element with JavaScript. Of course, there are other ways to select elements, but this is by far the easiest.

## Timing

One of the common issues with JavaScript is that you need to wait for elements to finish loading before you can access them. Therefore, any code that wants to manipulate the canvas needs to be executed at the right time. There are two common ways to do so: by placing your code
*after* the canvas element within the body of the page, or by placing it inside a function that is called after the page has been loaded.

Accessing the canvas can be done in the same way you'd access any other element, with `getElementById()`, but that is not enough if we want to draw something on it. We need to access the part of the element that is responsible for drawing, which is done with `getContext('2d')`. Any time I refer to the *context* in this course, I mean this 2D context of the canvas. Any and every canvas method should be applied to its context, and not the element itself.

::: sideImagePreview
``` {data-lang="html"}
  Sorry, your browser doesn't support the CANVAS element.


var canvas = document.getElementById('myCanvas'); var ctx = canvas.getContext('2d');

//Perform canvas operations with the context stored in the ctx variable
//For example, creating a rectangle! ctx.fillRect(10,10,100,100);
```

<div>

</div>
:::

I will leave out this important bit of JavaScript in the examples from now on, but never forget to include it yourself!

## Coordinate System

Before we continue our journey into the world of canvas, I need to clear up one thing. The coordinate system used is not like in traditional mathematics (*Cartesian coordinates*).

In the traditional system, moving *upwards* from the origin increases values on the y-axis. In the canvas system, the origin is at the top left corner, and moving *downwards* increases values on the y-axis.

![](media/CanvasCoordinateSystem.png)

" slug: "html5-canvas-element" cat: "Website" subcat: "Canvas" video: "" diff: 2 quiz: "" - id: 321 title: "\[Canvas\] Paths" post: "

Essentially, every shape you draw is a bunch of points connected with lines, which we call a **path**. A path has to start somewhere, and can be closed when we've created all the necessary parts. For example, a rectangle is a path of four points with straight lines connecting them.

To create a path, use

`beginPath();     any path methods closePath();`{.longsyntax}

Closing the path is not strictly necessary, as beginning a new path automatically tells JavaScript that the previous one should be closed
(we can't nest paths inside paths). The `closePath()` method therefore connects the first and last point with a straight line, literally closing the path.

## Displaying Paths

Creating a path, however, is not enough to display it. Now JavaScript has a bunch of points connected in certain ways, but it doesn't know, for example, what colour to use. There are two different components of a path that can be styled, which is the **stroke** and the **fill**.

The *stroke* is the actual path, or outline of the path. When you draw a straight line between two points, you can display the line by displaying the stroke of the path.

\> To stroke the last shape you created, use `stroke()`

The *fill* is how a path is filled. When you draw a rectangle, you can make it a blue rectangle by changing the fill to be blue.

\> To fill the last shape you created, use `fill()`

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.drawRect(10,10,100,100);
//At this point, nothing is displayed yet ctx.stroke(); ctx.fill();
//Now the rectangle is filled and outlined with black
//Because the rectangle already is a closed shape, closePath() is not needed
```

<div>

</div>
:::

As you might have noticed, we still haven't said anything about the colours or techniques to use for stroking/filling, in which case the canvas defaults to black. Throughout this course you'll learn ways to do that, but for now I want to focus on those *path methods* that actually create the shapes you want.

" slug: "html5-canvas-paths" cat: "Website" subcat: "Canvas" video: "" diff: 3 quiz: "" - id: 322 title: "\[Canvas\] Lines & Curves" post: "

Let's start with the most basic path elements of them all: straight and curved lines.

## Straight Lines

A straight line needs two things: a starting point, and subsequent points of the line.

Use `moveTo(x, y)` to set the starting point to (*x,y*).

Use `lineTo(x, y)` to create a line from the previous point to (*x,y*). You can put as many of these methods as you want after each other, but the order in which you supply them matters a lot; the line it creates uses the last coordinates as starting point.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(10,10) ctx.lineTo(20,50); ctx.lineTo(50,20); ctx.stroke();
```

<div>

</div>
:::

## Quadratic Curve

A quadratic curve is a curved line between two points, which needs one extra control point to determine how exactly it is curved. The only difference from straight lines, therefore, is that instead of
`lineTo()`, it uses:

`quadraticCurveTo(controlX, controlY, x, y) `{.longsyntax}

![](media/CanvasQuadraticCurveTo.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(10,10) ctx.quadraticCurveTo(30,30,50,10); ctx.stroke();
```

<div>

</div>
:::

## Bezier Curve

The Bezier curve goes one step further, and needs two control points. This way, you make more complicated curves, going in two different directions between two points. Instead of `lineTo()`, it uses:

`bezierCurveTo(controlX1, controlY1, controlX2, controlY2, x, y)`{.longsyntax}

![](media/CanvasBezierCurveTo.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(10,10) ctx.bezierCurveTo(30,10,60,30,80,10); ctx.stroke();
```

<div>

</div>
:::

## Arc

An arc is a (part of a) circle. It allows you to create perfectly round paths from one point to another, without doing difficult things with control points. The syntax is:

`arc(x, y, r, startAngle, endAngle, direction)`{.longsyntax}

![](media/CanvasArc.png)

Basically, the arc draws a circle with centre point (*x,y*) and radius
*r*, but then only takes the part between *startAngle* and *endAngle*.

The last parameter, *direction*, can be either `true` or `false`. In the first case, the arc is drawn *clockwise*. In the second case,
*counterclockwise*.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.arc(30,30,20,0,Math.PI); ctx.stroke();
```

<div>

</div>
:::

## Arc Lines

Now you might be wondering: wouldn't it be great if we could not only use arcs as standalone paths, but also as part of a path? Well you're in luck, because instead of `lineTo()`, you can use

`arcTo(x1, y1, x2, y2, r)`{.longsyntax}

![](media/CanvasArcTo.png)

Instead of using angles, it uses two points to set the size and direction of the arc.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,20); ctx.arcTo(60,30,60,60,20); ctx.stroke();
```

<div>

</div>
:::

NOTE: Such arcs are commonly used to create round corners for shapes.

" slug: "html5-canvas-lines-curves" cat: "Website" subcat:
"Canvas" video: "" diff: 3 quiz: "" - id: 323 title: "\[Canvas\] Stroke Styles" post: "

Last chapter introduced lots of ways to create fancy lines, but their default black, thin stroke is already becoming quite boring. Not only can we use certain properties to make our lines bigger and in different colour, but there are also subtle changes to be made which can have a big impact

## Line Width

The size of the line. The default is `1`, which makes a stroke only
`1px` wide. To change this, use

`lineWidth = number`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,20); ctx.lineTo(80,20); ctx.lineWidth = 10; ctx.stroke();
```

<div>

</div>
:::

## Stroke Colour

The colour of the line. The default is black, to change this use

`strokeStyle = value`{.longsyntax}

The *value* can be any valid CSS colour code, but also a variable that contains a gradient or pattern. You'll learn how to create those later.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,20); ctx.lineTo(80,20); ctx.strokeStyle = "red"; ctx.stroke();
```

<div>

</div>
:::

## Line Cap

The *line cap* determines how the two end points of a line are styled. The syntax is:

`lineCap = value`{.longsyntax}

There are three possible values: `butt` (default), `round` and `square`.

![](media/CanvasLineCap.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,20); ctx.lineTo(80,20); ctx.lineWidth = 30; ctx.lineCap = 'round'; ctx.stroke();
```

<div>

</div>
:::

## Line Join

This property determines how a point\-\--one where two lines meet or
*join*\-\--is styled. The syntax is:

`lineJoin = value`{.longsyntax}

There are three possible values: `miter` (default), `round` and `bevel`. Especially on thicker lines, this can make a huge difference.

![](media/CanvasLineJoin.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,60); ctx.lineTo(60,20); ctx.lineTo(100,60); ctx.lineWidth = 30; ctx.lineJoin = "bevel"; ctx.stroke();
```

<div>

</div>
:::

## Miter Limit

The default method for joining lines has the nasty side-effect that it creates very large, sharp corners if the angle between two lines is very small. You can tell the canvas to cut off this so-called *miter* if it gets too long using an upper bound:

![](media/CanvasMiterLimit.png)

`miterLimit = number`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,60); ctx.lineTo(30,20); ctx.lineTo(40,60); ctx.lineWidth = 10; ctx.miterLimit = 3; ctx.stroke();
```

<div>

</div>
:::

## Dashed Lines

Dashed lines are lines consisting of dashes with gaps between them. They deviate a bit from the standard syntax we've been using thus far, because they require a method to set the line dash, instead of a property. The syntax is:

`setLineDash([dash, gap, …, dash, gap])`{.longsyntax}

You can put as many of those *dash-gap* pairs as want in there. They basically create a pattern of stroke and no-stroke that is repeated all over the path.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.moveTo(20,60); ctx.lineTo(60,20); ctx.lineTo(100,60); ctx.lineTo(140,20); ctx.lineWidth = 5;
//The pattern is short stroke (2), gap (3), long stroke (5), gap (3) ctx.setLineDash([2,3,5,3]); ctx.stroke();
```

<div>

</div>
:::

" slug: "html5-canvas-stroke-styles" cat: "Website" subcat:
"Canvas" video: "" diff: 3 quiz: "" - id: 324 title: "\[Canvas\] Shapes" post: "

Now that we've discussed everything that has to do with lines and stroking, it's time for shapes and their filling.

## Rectangle

To quickly create a rectangle, use

`rect(x, y, width, height)`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.rect(20,20,100,100); ctx.stroke();
```

<div>

</div>
:::

## Quick Rectangles

Because rectangles are so important, there are three methods that simplify the process of creating, stroking and filling a rectangle.

To create a filled rectangle (using the current fill settings), use

`fillRect(x, y, width, height)`{.longsyntax}

To create a stroked rectangle (using the current stroke settings), use

`strokeRect(x, y, width, height)`{.longsyntax}

To erase part of the canvas\-\--setting all pixels to *transparent* black\-\--use

`clearRect(x, y, width, height)`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.strokeStyle="green"; ctx.strokeRect(20,20,100,100);
```

<div>

</div>
:::

## Circles

To create a circle, or semi-circle, one can simply use the `arc` method. If you create a semi-circle, don't forget to close off the path once you're done.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.fillStyle="green"; ctx.arc(50,50,30,0,2*Math.PI); ctx.fill();

ctx.beginPath(); ctx.fillStyle="red"; ctx.arc(100,100,30,0,Math.PI); ctx.closePath(); ctx.fill();
```

<div>

</div>
:::

## Custom Shapes

We can create any custom shape we want simply by using a series of straight/curved lines, and then *closing* the path. There's no magic involved here!

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.fillStyle="green"; ctx.moveTo(20,20); ctx.lineTo(60,20); ctx.lineTo(80,50); ctx.lineTo(60,80); ctx.lineTo(20,80); ctx.lineTo(0,50); ctx.closePath(); ctx.fill();
```

<div>

</div>
:::

" slug: "html5-canvas-shapes" cat: "Website" subcat: "Canvas" video: "" diff: 3 quiz: "" - id: 325 title: "\[Canvas\] Fill Styles" post: "

Fortunately, there aren't as many different ways to *fill* a shape as there are to *stroke* it. Unfortunately, most of these ways are a little more complex. The four ways to fill a path are: **solid colour**,
**linear gradient**, **radial gradient**, and **pattern**.

## Changing the Fill Style

The same property is used for all four ways. Not surprisingly, the syntax is:

`fillStyle = value`{.longsyntax}

## Solid Colour

To fill a shape with a solid colour, simply use any valid CSS colour code as value.

::: sideImagePreview
``` {data-lang="javascript"} ctx.beginPath(); ctx.fillStyle="blue"; ctx.rect(20,20,100,100); ctx.fill();
```

<div>

</div>
:::

## Gradients

To fill a shape with a gradient, you need to go through several steps. First you need to create your gradient and save it inside a variable, then you use this variable as the *value* for the fill style.

NOTE: I assume you have some gradient knowledge from CSS. If you don't, I strongly recommend learning CSS in the first place.

### Colour Stops

As you know from CSS, gradients use colour stops to set points at which the colour should be changed, and it's not different with our canvas.

To set a colour stop, use

`addColorStop(position, colour)`{.longsyntax}

A *position* of `0` is the start of the gradient, and `1` the end of it.

### Linear Gradient

To create a **linear gradient**, use

`createLinearGradient(startX, startY, endX, endY)`{.longsyntax}

This creates a gradient that moves along an imaginary line with starting point (*startX, startY*), and end point (*endX, endY*).

::: sideImagePreview
``` {data-lang="javascript"} var grad = ctx.createLinearGradient(0,0,100,0); grad.addColorStop(0,"red"); grad.addColorStop(1,"orange");

ctx.beginPath(); ctx.fillStyle=grad; ctx.rect(20,20,100,100); ctx.fill();
```

<div>

</div>
:::

### Radial Gradient

To create a **radial gradient**, use

`createRadialGradient(startX, startY, startR, endX, endY, endR)`{.longsyntax}

Radial gradients are defined as an area between two circles. The inner circle has centre point (*startX, startY*) and radius *startR*. The outer circle has centre point (*endX, endY*) and radius *endR*.

::: sideImagePreview
``` {data-lang="javascript"} var grad = ctx.createRadialGradient(50,50,10,50,50,100); grad.addColorStop(0,"red"); grad.addColorStop(1,"orange");

ctx.beginPath(); ctx.fillStyle = grad; ctx.rect(20,20,100,100); ctx.fill();
```

<div>

</div>
:::

## Patterns

A pattern can be used to fill a shape with an image, or the contents of another canvas. If the pattern is smaller than the shape, it can be repeated, similar to the CSS `background-image` property.

To create a pattern, use

`createPattern(image, repetition)`{.longsyntax}

The first parameter requires a variable holding an image or canvas
*context*. (You'll learn about loading images later.)

The second parameter can have one of these four values:

  --------------- ----------------------------------------------
  Value           Description
  `"repeat"`      Repeats pattern in both directions (default)
  `"repeat-x"`    Repeats pattern only in x-direction
  `"repeat-y"`    Repeats pattern only in y-direction
  `"no-repeat"`   Doesn't repeat the pattern at all
  --------------- ----------------------------------------------

One tricky thing is that, if you load an image within the canvas itself, you'll need to wait for it to finish loading before you can assign it to a pattern. You'll learn everything about image loading soon.

::: sideImagePreview
``` {data-lang="javascript"} var imageObj = new Image(); imageObj.onload = function() {
    var pat = ctx.createPattern(imageObj,"repeat");
    ctx.beginPath();
    ctx.fillStyle = pat;
    ctx.rect(20,20,100,100);
    ctx.fill();
} imageObj.src = 'image.png';
```

<div>

</div>
:::

As stated earlier, these patterns and gradients can also be used on the
*stroke* instead of fill. This doesn't require any extra syntax. Yay!

" slug: "html5-canvas-fill-styles" cat: "Website" subcat:
"Canvas" video: "" diff: 4 quiz: "" - id: 326 title: "\[Canvas\] Text" post: "

Because HTML and CSS provide lots of ways to easily display and customize text, you might think you could just overlay your canvas with another element if you want text displayed there. This is true, and might sometimes be a good method, but using native text methods within the canvas is often much easier. They can be positioned exactly at the right spot, and styled by setting the right properties.

## Displaying Text

To display the phrase *text* at position (*x,y*), use

`fillText(text, x, y)`{.longsyntax}

The default colour for text is, as always, *black*, and the default font the same as the default font for CSS.

::: sideImagePreview
``` {data-lang="javascript"} ctx.fillText("Hello Whale!", 10, 10);
```

<div>

</div>
:::

## Styling Text

If you want to style this text, you need to set a few properties
*before* you call the `fillText()` method. Just as everything else, text is considered a shape, which means the colour can be determined with the
`fillStyle` property. Similarly, the text can be stroked using the properties and methods you've already learned.

## Font Family & Size

Both the font and its display size are set with the same property:

`font = "size font-family"`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.font = "36pt Calibri"; ctx.fillText("Hello Whale!", 10, 50);
```

<div>

</div>
:::

## Aligning Text Horizontally

To align the text, use:

`textAlign = value`{.longsyntax}

The possible values are: `left`, `center` and `right`. Additionally, if your document uses a specified text direction you can use `start` and
`end` to refer to the start and end of lines. For instance, if your document uses `rtl` (for right-to-left), the start of the line actually means aligning it to the right.

::: sideImagePreview
``` {data-lang="javascript"} ctx.textAlign = "right";

ctx.font = "36pt Calibri"; ctx.fillText("Hello Whale!", 10, 50);
```

<div>

</div>
:::

## Aligning Text Vertically

To align the text horizontally, we change where the *baseline* is located. The baseline is, normally, the imaginary line that all letters sit on, and used for the y-position of the text. The syntax is:

`textBaseline = value`{.longsyntax}

The possible values are best displayed with a picture:

![](media/CanvasTextBaselines.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.font = "36pt Calibri"; ctx.fillText("Hello", 10, 50);

ctx.textBaseline = "bottom";

ctx.fillText("Whale!", 120,50);
```

<div>

</div>
:::

## Text Wrapping & Metrics

What's important to notice, is that text within the canvas doesn't naturally wrap\-\--you can't set a width, which means text will extend horizontally, infinitely.

If you want to measure the current width of text, use

`measureText(text).width`{.longsyntax}

At the time of writing this method only returns width, but there are plans to make it calculate more than that.

This width can then, for example, be used to create a custom function that enables text wrapping.

::: sideImagePreview
``` {data-lang="javascript"}
  /** @param ctx (Context we're drawing in)
    @param text (The text to wrap)
    @param x (x-position to place the text block)
    @param y (y-position to place the text block)
    @param maxWidth (Maximum length of a line, in pixels)
    @param lineHeight (height of one line)
  */ function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    var words = text.split(' ');
    var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
      var metrics = ctx.measureText(testLine);
      var testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
}

wrapText(ctx,"This is a very long sentence trying to showcase a function designed to wrap text.",10,10,80,16);
```

<div>

</div>
:::

" slug: "html5-canvas-text" cat: "Website" subcat: "Canvas" video: "" diff: 3 quiz: "" - id: 327 title: "\[Canvas\] Transformations" post: "

Transformations, in CSS at least, are what you'd apply to a complete element to move, rotate or scale it. Transformations work that way in nearly all languages\-\--but not canvas. You can't transform individual elements, but only the complete canvas. This allows you to modify multiple shapes (in the same way) at once, and add lots of transforms on top of each other. The obvious question here is: what if we want to reset all those transforms we've chained together, or just want to modify only a single shape at a time? For this, there is the **state stack**.

## State Stack

The state stack is simply a list of states you saved, in a certain order, that canvas keeps track of.

To save the current state of the canvas, which means the current set of transforms applied, use `save()`. This adds the current state on top of the state stack.

To restore the last state you saved, use `restore()`. This reads the state on top of the state stack, and resets the canvas to that state. Once that's done, this state is removed from the state stack.

::: sideImagePreview
``` {data-lang="javascript"}
//Save inital state of canvas ctx.save();

//Rotate the canvas, created filled rectangle ctx.rotate(0.2*Math.PI); ctx.fillRect(0,0,30,30);

//Restore the initial canvas state, without rotation ctx.restore(); ctx.fillRect(35,35,20,20);
```

<div>

</div>
:::

The reason I wanted to start with this is because it becomes *very* important once you start using multiple transforms. Now let's look at all the available transforms!

NOTE: Even though the focus is on transforms here, the state of a canvas also saves all the currently set properties, such as *fillStyle* or
*strokeStyle*. So, if you're working with canvasses with lots of objects, you'll still need to make heavy use of the state stack, even if you don't use transform operations.

## Translate

To translate means to move the canvas. The syntax is

`translate(xOffset, yOffset)`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.fillRect(5,5,20,20); ctx.translate(30,30); ctx.fillRect(5,5,20,20);
```

<div>

</div>
:::

## Rotate

To rotate means, well, rotating the entire canvas around its origin. The syntax is

`rotate(radians)`{.longsyntax}

Note that the angle must be set in radians, not degrees.

::: sideImagePreview
``` {data-lang="javascript"}
//Note that it uses the upper left corner as centre of rotation ctx.rotate(0.1*Math.PI); ctx.fillRect(50,50,30,30);
```

<div>

</div>
:::

## Scale

To scale means making the canvas larger/smaller, using the origin as the centre point. The syntax is

`scale(xScale, yScale)`{.longsyntax}

The default scale is 1, which means a value smaller than that makes everything smaller, and a value larger makes everything larger. Negative values are also allowed, and mirror/flip the canvas.

::: sideImagePreview
``` {data-lang="javascript"}
//Scale canvas 150% both directions, flip everything vertically ctx.scale(1.5,-1.5);

//Draw rectangle pointing upwards. 
//Note that we draw it above the canvas, as the scaling transformation uses the top of the canvas as its origin. ctx.beginPath(); ctx.moveTo(20,-40); ctx.lineTo(40,-80); ctx.lineTo(60,-40); ctx.closePath();

ctx.stroke();
```

<div>

</div>
:::

## Custom Transforms

With custom transforms you can easily perform multiple transform operations at the same time. That's why the method takes no less than six parameters:

`transform(scaleX, skewX, skewY, scaleY, translateX, translateY)`{.longsyntax}

As you can see, rotation isn't easily achieved with this method. Another tiny problem is that things can behave unexpectedly, because you're applying so many transforms at the same time, *on top of* all the existing transforms.

To solve this, one extra method exists that removes all current transforms, before applying the new one you supply:

`setTransform(scaleX, skewX, skewY, scaleY, translateX, translateY)`{.longsyntax}

::: sideImagePreview
``` {data-lang="javascript"} ctx.transform(1,5,5,1,30,30);

ctx.fillRect(0,0,50,50);
```

<div>

</div>
:::

## An Example: Ellipses

One very basic shape we haven't seen yet are *ellipses*. Well, now we can make them with the help of some nifty transformations!

::: sideImagePreview
``` {data-lang="javascript"}
//Save state ctx.save();

//Translate ctx ctx.translate(20,20);

//Scale ctx horizontally ctx.scale(2, 1);

//Draw circle which will be stretched into an oval ctx.beginPath(); ctx.arc(20,20,10, 0, 2 * Math.PI, false);

//Restore to original state ctx.restore();

//Apply styling ctx.fillStyle = '#8ED6FF'; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = 'green'; ctx.stroke();
```

<div>

</div>
:::

" slug: "html5-canvas-transformations" cat: "Website" subcat:
"Canvas" video: "" diff: 4 quiz: "" - id: 328 title: "\[Canvas\] Images" post: "

Using images within canvas is not as straightforward as you'd expect from HTML. But, just as with text, it's even more complex if you were to overlay your canvas with HTML images, which is why I recommend learning how to use images within canvas.

NOTE: Everything described in this chapter requires an image to be present on the server the code is hosted on. If you use links to external images (hosted on other servers), you get a security error.

To display an image, you need to load it, then *wait for it to load*, and only once it's retrieved you can display it. Let's look at how this plays out in code:

`var imageObj = new Image(); imageObj.onload = function() {     //draw actual image }  imageObj.src = "linkToImage";`{.longsyntax}

All it does is load an image object, point it to an image, and attach an event listener that executes once it has loaded.

## Actually Drawing the Image

To draw the image, you only need to use a single method. This method, however, has quite a lot of parameters:

`drawImage(imageObj, sourceX, sourceY, sourceWidth, sourceHeight, X, Y, Width, Height)`{.longsyntax}

The last four parameters are what determine the position and size of the image within the canvas.

The parameters with *source* in front are used to `crop` the original image.

![](media/CanvasCropImages.png)

::: sideImagePreview
``` {data-lang="javascript"} var imageObj = new Image(); imageObj.onload = function() {
    //Cropped version
    ctx.drawImage(imageObj, 10, 10, 20, 20, 40, 40, 20, 20);
    //Full version
    ctx.drawImage(imageObj, 0, 0, 40, 40, 80, 40, 40, 40);
} imageObj.src = 'image.png';
```

<div>

</div>
:::

## Changing Images: Pixel by Pixel

While most graphical programming languages gives us *filters* to modify images, the canvas gives us something more fundamental: we can access every pixel individually and change it. To access a certain rectangle of the canvas (which can contain anything), use

`getImageData(x, y, width, height).data`{.longsyntax}

This returns the pixel data within that rectangle as an array. This array starts at the upper left corner, and works through all pixels row by row. Every pixel has 4 elements within the array; one for the *red*,
*blue*, *green* and *alpha* channel, respectively. We can just loop through this data array like we'd loop through any array, and assign new values (between 255 and 0) to every element.

Then, we can put this new pixel data back into the canvas with

`putImageData(data, x, y)`{.longsyntax}

Normally, you'd use the same *x* and *y* coordinates you used when getting the data, as you want to replace the same rectangle you extracted from the canvas.

::: sideImagePreview
``` {data-lang="javascript"}
/** Example that inverts the image you just saw about how to crop images.
*/ function drawInverted(imageObj) {
    var x = 10;
    var y = 10;

    //Draw original image
    ctx.drawImage(imageObj, x, y, 225, 100);

    //Access current pixel data
    var imageData = ctx.getImageData(x, y, imageObj.width, imageObj.height);
    var data = imageData.data;

    for(var i = 0; i < data.length; i += 4) {
      //Red
      data[i] = 255 - data[i];
      //Green
      data[i + 1] = 255 - data[i + 1];
      //Blue
      data[i + 2] = 255 - data[i + 2];
    }

    //Overwrite original image
    ctx.putImageData(imageData, x, y);
  }
   var imageObj = new Image(); imageObj.onload = function() {
    drawInverted(this);
}; imageObj.src = 'image.png';
```

<div>

</div>
:::

## Saving Images: Data URLs

Last but not least, there might be times when you want to save or copy the contents of a canvas. To do so, you need to convert a canvas to an image, and canvas uses PNG images for that. These are just strings of characters saved in a file, which means all we need to do to save an image, is get the *string* or *data URL* that represents it. To access this data URL of a canvas context, use

`toDataURL()`{.longsyntax}

NOTE: This is the only method that works on the canvas itself, *not* the drawing context - we're not drawing anything, just accessing the canvas as a whole.

::: sideImagePreview
``` {data-lang="javascript"} ctx.fillStyle = 'red'; ctx.fillRect(10,10,50,50);
//Should show the string of characters the makes up this specific canvas in the console: console.log(canvas.toDataURL());
```

<div>

</div>
:::

" slug: "html5-canvas-images" cat: "Website" subcat: "Canvas" video: "" diff: 4 quiz: "" - id: 329 title: "\[Canvas\] Composites" post: "

Though the title of the chapter may be daunting, composites are a simple concept. A composite is a shape consisting of two shapes. In other words, they determine what happens when two shapes are composed together. There are four main topics: **shadows**, **clipping**,
**global alpha** and **global operations**.

## Shadows

Drop shadows are very popular, and can be used to add a sense of depth or detail. As always, the canvas doesn't distinguish between different objects, which means you need to set the shadow properties before calling `fill()`. Four properties regarding shadows can be set:

  ----------------- ----------------- -------------------------------------------------------------------
  Syntax            Possible Value    Description
  `shadowColor`     Any colour        The colour of the shadow
  `shadowBlur`      Positive number   How blurred the shadow is. A lower value means a sharper shadow.
  `shadowOffsetX`   Number            Shadow offset in x-direction relative to top-left corner of shape
  `shadowOffsetY`   Number            Shadow offset in y-direction relative to top-left corner of shape
  ----------------- ----------------- -------------------------------------------------------------------

Remember that, just like any other property, these stay in effect until you reset them or restore a canvas state.

::: sideImagePreview
``` {data-lang="javascript"} ctx.rect(10, 10, 50, 50);

ctx.shadowColor = '#999'; ctx.shadowBlur = 15; ctx.shadowOffsetX = 10; ctx.shadowOffsetY = 10;

ctx.fillStyle = 'red'; ctx.fill();
```

<div>

</div>
:::

## Clipping

Clipping means showing only that part of a shape that's inside another shape. To turn everything that's inside the canvas at that certain moment into a clip path, use the `clip()` method. Now, everything you draw afterwards will be clipped to that path, and only the parts inside the clip path displayed. However, you probably don't want everything to be clipped, which is why it's wise to save the state of the canvas before calling the `clip()` method, and restoring the previous state when you're done.

::: sideImagePreview
``` {data-lang="javascript"}
//Save original state of canvas ctx.save();

//Set clip path to a circle (the path itself is not displayed) ctx.arc(50,50,30,0,2*Math.PI,false); ctx.clip();

//Draw a rectangle that will automatically be clipped ctx.fillRect(30,30,50,50);

//Restore original canvas state to get us out of the clipping path ctx.restore();
```

<div>

</div>
:::

## Global Alpha

You can set certain shapes to an alpha level other than 1 (fully opaque), simply by assigning it a transparent fill colour. But, you can also set the whole canvas to a certain opacity level, and everything you draw afterwards will have that alpha. To do so, set the `globalAlpha` property to a value between 0 and 1.

::: sideImagePreview
``` {data-lang="javascript"} ctx.globalAlpha = 0.5;

ctx.fillRect(10,10,40,40);

ctx.arc(50,50,40,0,2*Math.PI,false); ctx.fill();
```

<div>

</div>
:::

## Global Operations

Like the global alpha, we can set a global composite operation to be applied to everything from there on. Not surprisingly, the property to change is `globalCompositeOperation`. Lots of values for operations are available, which this image will demonstrate:

![](media/CanvasGlobalCompositeOperations.png)

::: sideImagePreview
``` {data-lang="javascript"} ctx.globalCompositeOperation = 'xor';

ctx.fillRect(10,10,40,40); ctx.fillRect(40,10,40,40); ctx.fillRect(25,30,40,40);
```

<div>

</div>
:::

" slug: "html5-canvas-composites" cat: "Website" subcat: "Canvas" video: "" diff: 4 quiz: "" - id: 330 title: "\[Canvas\] Animation" post: "

Because canvas doesn't work with individual objects, it doesn't have support for animations in the usual way. With CSS, for example, you can select an element and change one of its properties over time, and you have an animation. With canvas, you have to constantly *redraw* the canvas with the next frame of the animation. This means that you need two things:

-   A function containing a set of methods that draw what you want,
    depending on which frame you're on.
-   A loop that calls this function at regular intervals

Luckily, JavaScript doesn't leave you in the dark completely, and has a special method for calling a function at regular intervals:

`requestAnimationFrame(function)`{.longsyntax}

This tries to call *function* at 60 FPS (frames per second), or every
1/60^th^ of a second. It's perfectly possible though that your function is too heavy for the computer and can't be executed that quick, in which case the JavaScript just tries to call the function as quickly as possible. Another great advantage of this method is that it stops executing if you're not focused on the canvas. So, if you move to another tab, it stops wasting resources on keeping the animation running.

::: sideImagePreview
``` {data-lang="javascript"} var canvas = document.getElementById('myCanvas'); var ctx = canvas.getContext('2d');

requestAnimationFrame(animate); var frame = 0; var box = {x:0, y:20, colour:'red', width:30, height:30};

function animate() {
    //Clear whole canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //Increase frame count
    frame++;

    //Make box slide to the right
    box.x += 0.5;

    //Redraw the box using new settings
    drawBox();

    //After 120 frames, reset the box
    if(frame == 120) {
        box.x = 0;
        frame = 0;
    }

    //Request our next frame!
    requestAnimationFrame(animate);
}

function drawBox() {
    ctx.beginPath();
    ctx.rect(box.x, box.y, box.width, box.height);
    ctx.fillStyle = box.colour;
    ctx.fill();
}
```

<div>

</div>
:::

The example is really just an example in this case; it's up to you how you animate things. But, the usual practice is to update a set of global variables each frame, and use those variables to determine what must be drawn (and how) every frame.

If you want to learn more about this method of animating and creating a dynamic canvas, I suggest looking at the course on HTML5 games.

" slug: "html5-canvas-animation" cat: "Website" subcat: "Canvas" video: "" diff: 4 quiz: "" 