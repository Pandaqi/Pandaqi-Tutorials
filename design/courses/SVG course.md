

" slug: "latex-math-graphics" cat: "Writing" subcat: "LaTeX Math" video: "" diff: 4 quiz: "" - id: 301 title: "Complete SVG Course" post: "

The acronym SVG stands for Scalable Vector Graphics, and has been a W3C recommendation for quite some time. This simply means that it is supported completely by all browsers, and integrates seamlessly with HTML. If you're looking to dynamically create graphics within the browser, this is probably just the thing for you!

The name says it all: with SVG, you can easily create *vector graphics*
(to be used) within webpages.

*What are Vector Graphics?* They are an alternative to the usual way images are created, which are what we call *bitmap images*. Bitmap images assign a colour to every pixel, and all pixels together create the image (if you don't look from too close).

Vector images don't do this. Instead, they consist of multiple lines of code, which generate certain shapes. When a vector image is to be displayed, the browser reads the lines of code and generates the image from that. This sounds hard and slow, but it's actually very easy and extremely fast. This has two huge advantages: the image can be scaled infinitely, and the different elements within the picture can be accessed. For example, we could add a line of code that tells the browser to display a circle of certain width and colour. After the circle has first appeared, we can still access it to dynamically change its properties\-\--we could, for instance, change the circle's colour when the user clicks a button.

![](media/SVGBitmapvsVector.png)

The word *scalable* is actually redundant\-\--the whole idea behind vector graphics is that they're infinitely scalable.

Of course, the circle from our little example could easily have been achieved with some basic HTML and CSS. That's why most vector graphics consist of lots of groups containing so-called *basic shapes*, which, combined together, can make the most beautiful pictures. Most of this course is about how to create and modify those basic shapes. Nevertheless, you still need some basic HTML and CSS knowledge to get started with SVG, and some advanced knowledge if you really want to enrich your vector graphics and script them.

NOTE: All icons on this website are SVG graphics. Most images within tutorials aren't, because they are often far too complex to transform into vector graphics, and I know the exact place and size I want to use them with. The icons, on the other hand, appear throughout the site at lots of different sizes and positions.

## Table of Contents

1.  Displaying SVGs
2.  Coordinates & Viewports
3.  Aspect Ratio & Grouping
4.  Rectangles
5.  Circles & Ellipses
6.  Lines, Polylines & Polygons
7.  Paths
8.  Definitions & Symbols
9.  Markers
10. Text
11. Switches, Links & Images
12. Gradients
13. Masks
14. Filters I
15. Filters II
16. Filters III
17. Scripting & Animation

" slug: "complete-svg-course" cat: "Website" subcat: "SVG" video:
"" diff: 1 quiz: "" - id: 302 title: "\[SVG\] Displaying SVGs" post: "

What's great about SVGs, is that they use *tags* for everything, exactly like HTML does. In fact, everything this course is going to discuss is simply an HTML tag with special, graphical function(s). There are only a few tags available in SVG, but each of them also accepts a multitude of *attributes*\-\--such as, for example, *x-position*,
*y-position* and *colour*\-\--that allow you to create nearly anything you want. And that's exactly the way this course will be set up: each chapter introduces new tags with their own special attributes until we've discussed everything there is to know.

NOTE: The idea of using tags comes from a more general language called XML: Extensible Markup Language, which is the foundation for most web-based markup languages. If you want to know more about tags, you could take a look at that.

## The svg Element

Because of this tags structure, we need an element to tell the browser an SVG element is coming. For this, we use the `` element, with the following standard syntax:

`     … svg objects …`{.longsyntax}

The two attributes in the starting tag are to tell the browser to parse whatever's inside as an SVG object, and not as regular XML. It's not always strictly necessary, but I recommend just including these attributes by default.

## Displaying

The three ways to display an SVG are: **inline**, **image** and
**background-image**.

### Inline

You can, whenever you want, just include the `` element inside your HTML document. It's an element, just like paragraphs or headings in HTML, and will be interpreted correctly. This way, the SVG is hardcoded into the HTML file, and will display like it was an image file. By default, it scales to the full width and height of its parent container.

The inline method has the advantage of allowing us access to the SVG with JavaScript, which we can use to make the graphic dynamic. It has the disadvantage that you can't reuse the code somewhere else without having to copy-paste it.

::: sideImagePreview
``` {data-lang="html"}
  
```

<div>

![](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iZ3JlZW4iPjwvcmVjdD4KPC9zdmc+)

</div>
:::

### Image

Alternatively, you can save your `` markup within a text file, with extension `.svg`.

Then, the regular `` tag can display this SVG file for you, which is nothing different from displaying any other image file. To remind you, the syntax is:

``{.longsyntax}

The advantage here is that we can reuse the same graphic throughout the whole project, but the disadvantage is that it's loaded as an image file, which means we can't access its individual tags.

::: sideImagePreview
``` {data-lang="html"}
```

<div>

![](icons/SVG.svg){style="max-height:50px !important;"}

</div>
:::

### Background-Image

Similar to the previous method, you can use the `background-image` CSS property on an element to set the vector graphic as the background. To remind you, the syntax is:

`background-image:url(yourFile.svg)`{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
```

::: {style="background-image:url(icons/SVG.svg);"}
:::
:::

NOTE: When you save your vector graphics inside a `.svg` file, you still need to put it inside an `` tag, because it needs to be interpreted as such. We'll also soon see that his tag has some very important attributes you'll often need.

## Content Type

If you ever plan on serving SVG content from a different file than
`.svg`, you need to set the Content-Type HTTP Header of the response to
`image/svg+xml`.

*What is this and why would I do that?* Well, it could happen that you have a PHP file reading data from a server, and generating a graphic based on that, which you need to display. The problem is that the browser doesn't interpret it correctly, because it comes from the wrong file type. This is fixed by telling the browser the type of content inside the file. Don't worry about it for now.

## Quick (Important) Note

In case you hadn't figured it out yet: because SVG are tags, you can also use CSS to style them. You, however, can't use the normal HTML tags within an SVG graphic\-\--the `` tag allows only its own special tags. It's also the other way around, as all the tags you'll learn here can *not* be used outside of an `` element.

" slug: "svg-displaying-vector-graphics" cat: "Website" subcat:
"SVG" video: "" diff: 2 quiz: "" - id: 303 title: "\[SVG\] Coordinates & Viewports" post: "

Before we can start doing anything in the world of vector graphics, there are two important concepts to understand. It might seem boring to kick off this course with some dull theory, but if I'd discussed them later, you'd problem run into quite a lot of problems you didn't know how to fix.

## Coordinates

The coordinate system from SVG is not like the one used in mathematics.

In math, when drawing the graph of some function, we'd use the
*Cartesian coordinate system*. This means that the origin (the point
`(0,0)`) is at the lower left corner, and if we move *upwards* we get higher y-values, and if we move to the right we get higher x-values.

In SVG, however, and most other computer graphics systems, we use a mirrored version. Our origin is at the top left corner, and if we move
*downwards* we get higher y-values.

![](media/SVGCoordinateSystem.png)

Within this coordinate system, we can use regular CSS units to specify the sizes and positions of objects.

Knowing this, we can see that negative values for position, be it the
*x* or *y* value, are always outside of the picture. The reason it's done this way, is because web pages (and articles in print) extend downwards. A webpage places its first paragraph at the top, and moves the next one below it, and the next one below that. Using this inverted coordinate system for SVGs, our graphics will be part of the team, and behave like all the other HTML elements.

If we were to use the Cartesian system for SVG graphics, we'd run into all sorts of problems. We'd need to calculate the height every time and offset it by that amount to prevent interfering with the text above, and we'd need to think exactly the other way around when designing graphics for our web page layout. That's why it's not done this way.

## What to Display?

I just stated that negative values are simply not within the picture frame, but, a vector graphic is infinitely scalable, so where *does* it end? How does the browser decide where to cut it off, and at what size to display it? Good questions!

By default, SVG strictly uses the axes\-\--which mark the transition between positive and negative numbers\-\--as the left and top borders. For the right and bottom borders, the graphic grows to whatever size is necessary to display everything. For example, if the only thing inside your SVG is a circle at position `(5px,5px)` with radius `5px`, then your graphic will have width and height `5+5 = 10px`. Because SVG cuts off the graphic that precisely, it's default behaviour is to scale to the full width and height of its container parent.

![](media/SVGElementSizing.png)

But, there will be times when you want full control over the width and height of the graphic, and what area to display. For this, we use something called a **viewport** and **viewbox**, respectively.

## Viewport

The viewport means the exact size of the SVG graphic itself. With the
`width="value"` and `height="value"` attributes we can set the size of the SVG element exactly. This doesn't scale the graphic to fit these dimensions, but it sets the element's dimensions within the webpage to this size, and displays only those objects that fall within this area. You can look at it as being the port through which you look into the SVG graphic's world.

![](media/SVGViewPort.png)

If you *do* want the graphic to scale to fit with a fixed width and height, you can just use the CSS `width` and `height` properties on the element.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCI+CiAgICA8Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxMCI+PC9jaXJjbGU+Cjwvc3ZnPg==)

</div>
:::

NOTE: If you don't specify units for these width/height *values*, it defaults to pixels.

## Viewbox

The determine what area we want to display, without saying anything about the element's dimensions, use the `viewbox` attribute. You need to specify a rectangle, which it uses to crop the graphic. Everything outside of the rectangle is discarded, and scaling the image (perhaps with CSS) simply means that everything inside the *viewbox rectangle* is scaled by that amount. You can look at it as putting a box underneath a specific part of the graphic, pushing everything above it in the box, and then forgetting the rest and only focussing on that box.

The syntax is:

`viewbox="origin-x origin-y width height"`{.longsyntax}

![](media/SVGViewBox.png)

Note that, using a negative origin, we can bring back negative values!

::: sideImagePreview
``` {data-lang="html"}

    
```

<div>

![](data:image/svg+xml;base64,PHN2ZyB2aWV3Ym94PSIyMCAyMCAyMCAyMCIgc3R5bGU9Im1pbi1oZWlnaHQ6MTBweDttaW4td2lkdGg6MTBweDttYXgtaGVpZ2h0OjUwcHg7Ij4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjEwIj48L2NpcmNsZT4KPC9zdmc+)

</div>

" slug: "svg-coordinates-viewports" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 304 title: "\[SVG\] Aspect Ratio & Grouping" post: "

Only one question remains now, which is about **aspect ratio**; the ratio between the width and height of the picture. All this reframing and scaling of vector graphics is great, but what if we (don't) want to maintain aspect ratio? How do we force an image to fill the entire width
*and* height, even if that means stretching it one way or another?

By default, SVG preserves this aspect ratio, which is often what you want\-\--at any size, the graphic looks good because the proportions are all correct. But we can turn it off, or customize this behaviour, using the `preserveAspectRatio` attribute. Its (very general) syntax is:

`preserveAspectRatio="align [meetOrSlice]"`{.longsyntax}

I'll provide the full explanation of the syntax here, but you don't need to understand or remember it all at the moment\-\--you haven't even created your first basic shape with SVG yet!

`align`

:   -   `none`: Do not preserve aspect ratio.
    -   `xY`: There are three values to fill in for ``; `min`, `mid` and
        `max`. The first aligns the smallest value of the viewbox with
        the smallest value of viewport. The second aligns the midpoint
        value of the viewbox with the midpoint value of the viewport.
        The third aligns the maximum value of the viewbox with the
        maximum value of the viewport.

`meetOrSlice`

:   -   Optional. The possible values are:
    -   `meet`: Default. Scale up the graphic as much as possible, while
        preserving aspect ratio and making the entire viewbox visible
        within the viewport.
    -   `slice`: Scale down the graphic as much as possible, while
        preserving aspect ratio and covering the entire viewport with
        the viewbox.

![](media/SVGPreserveAspectRatio.png)

## Grouping

If you haven't been scared off by the previous section, you're in for a treat\-\--things will all be much simpler from here on. Let's stop talking about that `` element, and introduce the simplest element of them all: the `` tag.

This tag has no predetermined properties (such as position or size), and groups everything inside it. This way, you can assign multiple objects to the same ID or class, and perform lots of operations on them all at the same time. This is easiest with CSS, but there's an attribute available to all SVG objects, which is especially useful for groups:
`transform="transformOperation"`.

The *transformOperation* follows the same syntax as standard CSS transforms, but with values separated by white space. To illustrate this, the next example rotates a group -45 degrees around the z-axis
(the imaginary axis coming out of the screen, straight at the reader).

::: sideImagePreview
``` {data-lang="html"}
    
        
        
        
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxnIHRyYW5zZm9ybT0icm90YXRlKC00NSAwIDApIj4KICAgICAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzMCIgc3R5bGU9ImZpbGw6Ymx1ZTsiPjwvcmVjdD4KICAgICAgICA8cmVjdCB4PSIxMCIgeT0iNTAiIHdpZHRoPSIxNSIgaGVpZ2h0PSIzMCI+PC9yZWN0PgogICAgICAgIDxyZWN0IHg9IjMwIiB5PSIxMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjMwIj48L3JlY3Q+CiAgICAgICAgPHJlY3QgeD0iMzAiIHk9IjUwIiB3aWR0aD0iMTUiIGhlaWdodD0iMzAiIHN0eWxlPSJmaWxsOnJlZDsiPjwvcmVjdD4KICAgIDwvZz4KPC9zdmc+)

</div>
:::

It's not mandatory to group all elements, but I recommend creating some general groups to keep the markup structured, and make it easy to add the same styles to multiple similar objects at the same time.

As the example demonstrated, there's quite a bit of overlap between CSS properties and SVG attributes. Some CSS properties, such as `transform`, can be used as attributes on SVG elements. But more importantly, there are lots of special SVG attributes which can all be used as CSS properties as well. For example, lines have the `stroke-width` attribute to set the line width, but you can also use it as a CSS property. In the previous example we see the same thing happening for the `fill` attribute/property. Keep in mind, however, that this only has effect on SVG objects.

" slug: "svg-aspect-ratio-grouping" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 305 title: "\[SVG\] Rectangles" post: "

This chapter, and the next six, will be about all the basic shapes in SVG. We'll start with the simplest of them all, the **rectangle**. The minimal syntax is:

``{.longsyntax}

Obviously, the first two attributes determine the position to place the rectangle at, while the last two determine its dimensions. I like to call these the *basic attributes*, as these four attributes are used on nearly every SVG element (sometimes with slight variation). And for a good reason of course: every element needs to be placed *somewhere*, and if you don't specify dimensions, it's invisible.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

## Vector Attributes

Now you know how to create a solid black rectangle, but that's boring. There's another set of attributes used on everything, which I like to call the *vector attributes*, because these are what make vector graphics the way they are.

Every vector graphic is essentially a path; a set of points connected with lines. You can *fill* this path with a certain colour, and/or
*stroke* the path with a certain colour, width and style. This stroking is very similar to borders in CSS. Lines, for example, are stroked paths. You can fill lines, but it wouldn't show anything, because there's no area to fill. Rectangles are paths of four points connected with straight lines, forming right angles.

The tables below show all vector attributes.

## Fill

  ---------------- ------------------------ -----------------------------------------------
  Attribute        Desciption               Values
  `fill`           Fill colour              Any valid CSS colour code, default is black
  `fill-opacity`   Opacity of fill colour   Numerical value between 0 and 1, default is 1
  ---------------- ------------------------ -----------------------------------------------

::: sideImagePreview
``` {data-lang="html"}
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IGZpbGw9ImJsdWUiIHg9IjEwIiB5PSIxMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIj48L3JlY3Q+CiAgICA8cmVjdCBmaWxsPSJncmVlbiIgZmlsbC1vcGFjaXR5PSIwLjciIHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

## Stroke

![](media/SVGStrokeAttributes.png)

+-----------------------+-----------------------+-----------------------+
| Attribute             | Description           | Values                |
+-----------------------+-----------------------+-----------------------+
| `stroke`              | Stroke colour         | Any valid CSS colour  |
|                       |                       | code, default is      |
|                       |                       | black                 |
+-----------------------+-----------------------+-----------------------+
| `stroke-width`        | Stroke width or size  | Numerical value,      |
|                       |                       | default is 0px        |
+-----------------------+-----------------------+-----------------------+
| `stroke-opacity`      | Opacity of stroke     | Numerical value       |
|                       | colour                | between 0 and 1,      |
|                       |                       | default is 1.         |
+-----------------------+-----------------------+-----------------------+
| `stroke-dasharray`    | Dashed stroke         | Two values, *dash     |
|                       |                       | length* and *gap      |
|                       |                       | length*, separated by |
|                       |                       | space or comma.       |
|                       |                       |                       |
|                       |                       | Default is no dashed  |
|                       |                       | stroke at all;        |
|                       |                       | `none`.               |
+-----------------------+-----------------------+-----------------------+
| `stroke-linecap`      | How to display stroke | Three possible        |
|                       | caps                  | values:               |
|                       |                       |                       |
|                       |                       | `butt`: Default, line |
|                       |                       | ends are immediately  |
|                       |                       | cut off straight.     |
|                       |                       |                       |
|                       |                       | `round`: Round        |
|                       |                       | endings\-\--half      |
|                       |                       | circles at both ends. |
|                       |                       |                       |
|                       |                       | `square`: Adds        |
|                       |                       | squares at the end.   |
|                       |                       | Same as default, but  |
|                       |                       | makes for a slightly  |
|                       |                       | extended line.        |
+-----------------------+-----------------------+-----------------------+
| `stroke-linejoin`     | How to join two lines | Three possible        |
|                       | at a point            | values:               |
|                       |                       |                       |
|                       |                       | `miter`: Default,     |
|                       |                       | pointy corner         |
|                       |                       |                       |
|                       |                       | `round`: Round corner |
|                       |                       |                       |
|                       |                       | `bevel`: Straight cut |
|                       |                       | off corner            |
+-----------------------+-----------------------+-----------------------+

::: sideImagePreview
``` {data-lang="html"}
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IHN0cm9rZT0iYmx1ZSIgeD0iMzAiIHk9IjMwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+CiAgICA8cmVjdCBzdHJva2U9ImdyZWVuIiBzdHJva2UtZGFzaGFycmF5PSIxMCA1IiB4PSIwIiB5PSIwIiB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9InRyYW5zcGFyZW50Ij48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

## Round Corners

Rectangles are known for their right angles, but SVG allows you to make those corners round. For this, you must use the `rx="radius"` and
`ry="radius"` attributes. These supply the x-radius and y-radius, respectively, essentially creating an ellipse of which each corner of the rectangle is one quadrant.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjEwIiByeD0iNSIgcnk9IjE1IiBmaWxsPSJvcmFuZ2UiIHg9IjMwIiB5PSIzMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-rectangles" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 306 title: "\[SVG\] Circles & Ellipses" post:
"

After the rectangle, the friendly circles and ellipses are the obvious basic shapes.

To create a circle, use

``{.longsyntax}

Instead of positioning a circle using its top left corner, it's much more convenient to position it using the centre or midpoint. That's why we don't use regular `x` and `y` attributes, but `cx` and `cy` attributes that define the position of the circle's centre. Furthermore, width and height are the same, which means we use the `r` attribute instead, to set the radius of the circle. To remind you, the radius is half the width or height.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjI1Ij48L2NpcmNsZT4KPC9zdmc+)

</div>
:::

## Ellipses

To create an ellipse, use

``{.longsyntax}

As you can see, the only difference is that the radius has been split into two seperate ones: `rx`, which is the radius in the x-direction, and `ry`, the radius in the y-direction.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxlbGxpcHNlIGN4PSI0MCIgY3k9IjI1IiByeD0iMzAiIHJ5PSIxNSI+PC9lbGxpcHNlPgo8L3N2Zz4=)

</div>
:::

" slug: "svg-circles-ellipses" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 307 title: "\[SVG\] Lines, Polylines & Polygons" post: "

Lines are nothing more than a stroked, straight path between two points. Therefore, the only thing a line needs is the position of the first and second point. The order doesn't matter. The syntax is:

``{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxsaW5lIHgxPSI1IiB5MT0iNSIgeDI9IjYwIiB5Mj0iNjAiIHN0cm9rZS13aWR0aD0iMTBweCIgc3Ryb2tlPSJyZWQiPjwvbGluZT4KPC9zdmc+)

</div>
:::

## Polylines

If you want a line with more than two points, which technically speaking isn't a line anymore, you need to use polylines. In this case, however, having to type two attributes for every point is a pain, which is why polylines use a single attribute that contains all the points, separated by a white space.

``{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxwb2x5bGluZSBwb2ludHM9IjUsNSA2MCw2MCAxMDAsNDAiIHN0cm9rZS13aWR0aD0iMTBweCIgc3Ryb2tlPSJyZWQiIGZpbGw9Im9yYW5nZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BvbHlsaW5lPgo8L3N2Zz4=)

</div>
:::

Note that polylines, unlike lines, *can* have a fill. If your polyline isn't a perfectly straight line, the fill property will draw an imaginary straight line from end to start point to close off the path, and fill that.

## Polygons

Now that we know about polylines, creating polygons\-\--such as triangles or stars\-\--only requires a different tag: ``. It does the same as polyline, but automatically closes the path for you by adding a
(non-imaginary) line between start and end point. This way you only have to supply every corner point of the polygon, and they'll *all* be automatically connected with straight lines.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxwb2x5Z29uIHBvaW50cz0iNSw1IDYwLDYwIDEwMCw0MCIgc3Ryb2tlLXdpZHRoPSIxMHB4IiBzdHJva2U9InJlZCIgZmlsbD0ib3JhbmdlIj48L3BvbHlnb24+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-lines-polylines-polygons" cat: "Website" subcat:
"SVG" video: "" diff: 3 quiz: "" - id: 308 title: "\[SVG\] Paths" post: "

All those nice basic shapes up until now are easy and quick, but they can't do everything. For example, points are all connected by straight lines, which means any type of curve is already out of the question.

This advanced functionality is provided by the **path** element, which has the following syntax:

``{.longsyntax}

The `d` here stands for *data*, as you'll be providing all the path's data to that attribute. This data, again, comes in the form of lots of points, separated by a whitespace. The difference with polylines, however, is that in front of every point you need to provide the method to use for connecting the previous point with this point. This is called the **specifier**, and is just a certain predefined letter. I'll provide them all in a table at the end of this chapter, but I first want to give you an idea of how it works before overwhelming you. So, let's look at an example.

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxwYXRoIGQ9Ik0xNSwxNSBMNjAsNjAgUTEyMCw0MCA0MCwxMCBaIiBzdHJva2U9InJlZCIgc3Ryb2tlLXdpZHRoPSI4IiBmaWxsPSJvcmFuZ2UiPjwvcGF0aD4KPC9zdmc+)

</div>
:::

When a path is drawn, it always starts at the point `(0,0)`, and simply moves through this list of points step by step, connecting them all together. The element relies on you completely to make sure the path turns out great\-\--it doesn't close off the path for you, nor does it automatically smoothen your path. Most paths start with the specifier
`M`, because quite often you don't want your path drawing a line between `(0,0)` and your first data point.

## Specifiers

Some specifiers also require more (or less) parameters than the two coordinates of the point it is attached to, which is why I'll provide which parameters it takes for every single one.

+-----------------+-----------------+-----------------+-----------------+
| Specifier       | Arguments       | Name            | Description     |
+-----------------+-----------------+-----------------+-----------------+
| `M`             | `x, y`          | Moveto          | Moves to        |
|                 |                 |                 | (*x,y*) without |
|                 |                 |                 | drawing a line  |
+-----------------+-----------------+-----------------+-----------------+
| `L`             | `x, y`          | Lineto          | Draws a line to |
|                 |                 |                 | (*x,y*)         |
+-----------------+-----------------+-----------------+-----------------+
| `H`             | `x`             | Horizontal      | Draws a         |
|                 |                 | Lineto          | horizontal line |
|                 |                 |                 | to *x* (keeping |
|                 |                 |                 | the same *y* as |
|                 |                 |                 | the previous    |
|                 |                 |                 | point)          |
+-----------------+-----------------+-----------------+-----------------+
| `V`             | `y`             | Vertical Lineto | Draws a         |
|                 |                 |                 | vertical line   |
|                 |                 |                 | to *y* (keeping |
|                 |                 |                 | the same *x* as |
|                 |                 |                 | the previous    |
|                 |                 |                 | point)          |
+-----------------+-----------------+-----------------+-----------------+
| `C`             | `x              | Curveto         | Draws cubic     |
|                 | 1,y1 x2,y2 x,y` |                 | Bezier curve to |
|                 |                 |                 | (*x,y*).        |
|                 |                 |                 |                 |
|                 |                 |                 | The points      |
|                 |                 |                 | (*x~1~,y~1~*)   |
|                 |                 |                 | and             |
|                 |                 |                 | (*x~2~,y~2~*)   |
|                 |                 |                 | are the start   |
|                 |                 |                 | and end control |
|                 |                 |                 | points.         |
+-----------------+-----------------+-----------------+-----------------+
| `S`             | `x2,y2 x,y`     | Smooth Curveto  | Draws cubic     |
|                 |                 |                 | Bezier curve to |
|                 |                 |                 | (*x,y*)         |
|                 |                 |                 |                 |
|                 |                 |                 | The point       |
|                 |                 |                 | (*x~2~,y~2~*)   |
|                 |                 |                 | is the end      |
|                 |                 |                 | control point.  |
|                 |                 |                 | The start       |
|                 |                 |                 | control point   |
|                 |                 |                 | is assumed the  |
|                 |                 |                 | same as the     |
|                 |                 |                 | previous curve. |
+-----------------+-----------------+-----------------+-----------------+
| `Q`             | `x1,y1 x,y`     | Quadratic       | Draws quadratic |
|                 |                 | Bezier Curveto  | Bezier curve to |
|                 |                 |                 | (*x,y*).        |
|                 |                 |                 |                 |
|                 |                 |                 | The point       |
|                 |                 |                 | (*x~1~,y~1~*)   |
|                 |                 |                 | is the control  |
|                 |                 |                 | point for       |
|                 |                 |                 | controlling how |
|                 |                 |                 | the curve       |
|                 |                 |                 | bends.          |
+-----------------+-----------------+-----------------+-----------------+
| `T`             | `x, y`          | Smooth          | Draws quadratic |
|                 |                 | quadratic       | Bezier curve to |
|                 |                 | Bezier Curveto  | (*x,y*).        |
|                 |                 |                 |                 |
|                 |                 |                 | Control point   |
|                 |                 |                 | is assumed to   |
|                 |                 |                 | be the same as  |
|                 |                 |                 | the last        |
|                 |                 |                 | control point   |
|                 |                 |                 | used.           |
+-----------------+-----------------+-----------------+-----------------+
| `A`             | `rx ry`         | Elliptical arc  | Draws arc to    |
|                 |                 |                 | the point       |
|                 | `x              |                 | (*x,y*)         |
|                 | -axis-rotation` |                 |                 |
|                 |                 |                 | The values *rx* |
|                 | `               |                 | and *ry* are    |
|                 | large-arc-flag` |                 | the radiuses of |
|                 |                 |                 | the ellipse.    |
|                 | `sweepflag`     |                 |                 |
|                 |                 |                 | The             |
|                 | `x, y`          |                 | *x              |
|                 |                 |                 | -axis-rotation* |
|                 |                 |                 | rotates the     |
|                 |                 |                 | ellipse the arc |
|                 |                 |                 | is created from |
|                 |                 |                 | (without        |
|                 |                 |                 | changing        |
|                 |                 |                 | start/end       |
|                 |                 |                 | point).         |
|                 |                 |                 |                 |
|                 |                 |                 | The             |
|                 |                 |                 | *               |
|                 |                 |                 | large-arc-flag* |
|                 |                 |                 | (0 or 1)        |
|                 |                 |                 | determines how  |
|                 |                 |                 | wide the arc    |
|                 |                 |                 | is.             |
|                 |                 |                 |                 |
|                 |                 |                 | The *sweepflag* |
|                 |                 |                 | (0 or 1)        |
|                 |                 |                 | determines      |
|                 |                 |                 | which way the   |
|                 |                 |                 | arc goes        |
|                 |                 |                 | (underneath or  |
|                 |                 |                 | above).         |
+-----------------+-----------------+-----------------+-----------------+
| `Z`             |                 | Closepath       | Closes the path |
|                 |                 |                 | by drawing a    |
|                 |                 |                 | straight line   |
|                 |                 |                 | from the        |
|                 |                 |                 | current point   |
|                 |                 |                 | to the first    |
|                 |                 |                 | point. Doesn't |
|                 |                 |                 | need an         |
|                 |                 |                 | argument.       |
+-----------------+-----------------+-----------------+-----------------+

Each of these also has a *lowercase* variation, which works exactly the same way, except for one major difference: the points you give as parameters are interpreted as *relative* to the previous point. The example will demonstrate this as well.

::: sideImagePreview
``` {data-lang="html"}
    
    
    
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxwYXRoIGQ9Ik0zMCwzMCBsNjAsNjAiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjgiPjwvcGF0aD4KICAgIDxwYXRoIGQ9Ik0xMjAsNTAgTDYwLDYwIiBzdHJva2U9Im9yYW5nZSIgc3Ryb2tlLXdpZHRoPSI4Ij48L3BhdGg+CiAgICA8cGF0aCBkPSJNMTIwLDEyMCBBMTAsMTAgNDUgMCAxIDIwMCwxNDAiIHN0cm9rZT0icmVkIiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9Im9yYW5nZSI+PC9wYXRoPgo8L3N2Zz4=)

</div>
:::

If you're wondering *what are Bezier curves?* I'm planning on creating an in-depth tutorial on these one day, as part of a complete vector graphics course, as the subject is too long and difficult to explain here. But, as long as it's not ready, Google it! For now, just know that they are smooth curves between two points.

Paths are powerful, but complex. I don't recommend trying to create those from the top of your head\-\--I think it's much faster and easier to use software that can output SVG files.

" slug: "svg-paths" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: "" - id: 309 title: "\[SVG\] Definitions & Symbols" post: "

If you want to reuse the same graphic throughout your project, you'll need to *define* it somewhere. It's common practice to do this at the top, but this can be anywhere. Such definitions are not displayed immediately, but only whenever you request them somewhere within the SVG element.

## Definitions versus Symbols

A group of definitions is put within the `` element. Such an element has no attributes or special functions at all, except for the fact that what's inside is *not* displayed. Inside of it can be anything, even CSS styling rules.

The `` element does the same, but is only allowed to contain shapes.

The difference is mostly for practical and semantical reasons. Within a
`` element you can place multiple definitions with their own names you can reference. Within a `` element you can only define that particular symbol, and the element itself has one id/name you can use as reference. For example, you can place as many `` elements as you want within a `` element, but not the other way around. *Symbols* can be referenced specifically and used throughout the graphic, while *definitions* are just wrapper or grouping elements for such symbols. We'll see later in the course that there are several other (important) SVG object types that must be placed inside a `` element.

::: sideImagePreview
``` {data-lang="html"}
    
        
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxzeW1ib2wgaWQ9ImJsdWVDaXJjbGUiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iYmx1ZSI+PC9jaXJjbGU+CiAgICAgICAgPC9zeW1ib2w+CiAgICA8L2RlZnM+Cjwvc3ZnPg==)

</div>
:::

## Actually Using Them

To use them, not surprisingly, we write this tag:

``{.longsyntax}

This instantiates the symbol with id *name* at position (*xPos*,
*yPos*).

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxzeW1ib2wgaWQ9ImJsdWVDaXJjbGUiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSI1IiBjeT0iNSIgcj0iNSIgZmlsbD0iYmx1ZSI+PC9jaXJjbGU+CiAgICAgICAgPC9zeW1ib2w+CiAgICA8L2RlZnM+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNibHVlQ2lyY2xlIiB4PSIxMCIgeT0iMTAiPjwvdXNlPgo8L3N2Zz4=)

</div>
:::

## Symbols Specialties

Because symbols are contained, standalone graphics, you could view them as their own SVG environment. We can instantiate them multiple times throughout the graphic, but what determines their size? Well, two things.

Firstly, we can set regular `width` and `height` attributes on the `` element. This does nothing in terms of scaling the symbol, but only sets a maximum width and height

Secondly, the symbols determine it themselves, the same way the global size of the SVG element is determined: using `viewbox` and
`preserveAspectRatio` attributes. These attributes can be used to set how the symbol should scale to fit the dimensions of the `` element that called it.

NOTE: The example below should scale the circle to the full width of the svg element, but doesn't want to work on this particular page for some reason. Try this one out for yourself, I'd say.

::: sideImagePreview
``` {data-lang="html"}
    
        
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxzeW1ib2wgaWQ9ImJsdWVDaXJjbGUiIHZpZXdib3g9IjAgMCAxMCAxMCI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjUiIGN5PSI1IiByPSI1IiBmaWxsPSJibHVlIj48L2NpcmNsZT4KICAgICAgICA8L3N5bWJvbD4KICAgIDwvZGVmcz4KICAgIDx1c2UgeGxpbms6aHJlZj0iI2JsdWVDaXJjbGUiIHg9IjEwIiB5PSIxMCI+PC91c2U+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-definitions-symbols" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 310 title: "\[SVG\] Markers" post: "

We've looked at filling and stroking elements as a whole, but what if we want to style individual points of the path? That's when **markers** come into play!

A marker can contain any type or amount of SVG content, and is a sort of
*minigraphic*. It's a small, contained graphic that you can use to mark individual path points. You need two building bricks for this to work: an element that defines and contains this marker, and an element\-\--with a path, of course\-\--that has a link to that marker.

## Creating a Marker

The syntax for creating a marker is

`     … svg content …`{.longsyntax}

The value inside the `id` attribute is the name of this marker, which is used by other elements to reference and use the marker. You can make up these names yourself.

The `markerWidth` and `markerHeight` attributes set the width and height of the *marker*. This doesn't change the content, but only the size at which the marker is displayed when referenced.

The `refX` and `refY` attributes set the *midpoint* or *origin*. This midpoint is what is actually aligned with the point on the path. The default value is `0` for both, which means the top left corner.

The `orient` attribute decides how the marker is oriented, or *rotated*. You can set it to a value to rotate the marker that amount of *degrees*, or you can set it to `auto` to make sure it's automatically set to the orientation of the point that it's on.

Additionally, the `markerUnits` attribute *can* be set, which has two possible values: `strokeWidth` scales the marker's size in accordance with the stroke-width of the path it's used on, while `userSpaceOnUse` prevents that behaviour.

::: sideImagePreview
``` {data-lang="html"}

    
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxtYXJrZXIgaWQ9ImJsdWVSZWN0YW5nbGUiIG1hcmtlcndpZHRoPSIzMCIgbWFya2VyaGVpZ2h0PSIzMCIgcmVmeD0iMTUiIHJlZnk9IjE1Ij4KICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsdWUiPjwvcmVjdD4KICAgIDwvbWFya2VyPgo8L3N2Zz4=)

</div>
:::

## Referencing a Marker

As stated earlier, the name you gave your marker in the `id` attribute will be used for referencing that marker\-\--just like with anchors in HTML, or ids in CSS. The notation is the same as well, which means a marker can be referenced with `url(#markerID)`.

There are, however, three different positions a marker can be used, and therefore three different *attributes* to which a marker can be supplied. These are `marker-start`, `marker-mid` and `marker-end`. The first determines what marker to use for the first point of the path, the third what to use for the last point of the path, and the second what to use for all points in between.

::: sideImagePreview
``` {data-lang="html"}
    
        
        
            
        
        
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDwhLS0gTm90aWNlIGhvdyB0aGUgcmVjdGFuZ2xlIGlzIG9yaWVudGVkIGluIHRoZSBzYW1lIGRpcmVjdGlvbiBhcyB0aGUgbGluZSAtLT4KICAgICAgICA8bWFya2VyIGlkPSJibHVlUmVjdGFuZ2xlIiBtYXJrZXJ3aWR0aD0iMzAiIG1hcmtlcmhlaWdodD0iMzAiIHJlZng9IjE1IiByZWZ5PSIxNSIgb3JpZW50PSJhdXRvIiBtYXJrZXJ1bml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9ImJsdWUiPjwvcmVjdD4KICAgICAgICA8L21hcmtlcj4KICAgICAgICA8IS0tIE5vdGljZSBob3cgdGhlIGNpcmNsZSBpcyBzY2FsZWQgYWNjb3JkaW5nIHRvIHRoZSBzdHJva2Utd2lkdGggb2YgdGhlIHBhdGggLS0+CiAgICAgICAgPG1hcmtlciBpZD0icmVkQ2lyY2xlIiBtYXJrZXJ3aWR0aD0iMzAiIG1hcmtlcmhlaWdodD0iMzAiIHJlZng9IjE1IiByZWZ5PSIxNSI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjE1IiBjeT0iMTUiIHI9IjE1IiBmaWxsPSJyZWQiPjwvY2lyY2xlPgogICAgICAgIDwvbWFya2VyPgogICAgPC9kZWZzPgogICAgPHBvbHlsaW5lIHBvaW50cz0iNDAsNDAgMTAwLDEwMCAyMDAsNTAiIG1hcmtlci1zdGFydD0idXJsKCNibHVlUmVjdGFuZ2xlKSIgbWFya2VyLW1pZD0idXJsKCNibHVlUmVjdGFuZ2xlKSIgbWFya2VyLWVuZD0idXJsKCNyZWRDaXJjbGUpIiBmaWxsPSJ0cmFuc3BhcmVudCIgc3Ryb2tlPSJvcmFuZ2UiIHN0cm9rZS13aWR0aD0iMyI+PC9wb2x5bGluZT4KPC9zdmc+)

</div>
:::

## Markers & Symbols

Maybe you've already noticed that markers and symbols are quite similar, in the sense that they are both a sort of minigraphic. It's always possible, and even highly recommended, to place markers inside a
`` element. It helps keep your code structured, because markers are essentially definitions to be used elsewhere later on. It isn't possible, however, to reference markers with the `` element from last chapter.

" slug: "svg-markers" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: "" - id: 311 title: "\[SVG\] Text" post: "

Even though the regular HTML tags aren't available within vector graphics, SVG makes up for that by supplying a set of special text elements. These have some disadvantages if you want to place long amounts of text within the graphic, but have numerous advantages if you just want a few beautiful lines. The biggest issue is that text doesn't naturally wrap and form paragraphs like with HTML, but you get much more text and letter customizability in return.

## Standard Text

To create some standard text, use

`     your text`{.longsyntax}

In the case of text, unlike other elements, the `x` and `y` refer to the bottom left corner.

To change this, use the `text-anchor` attribute. The possible values are
`start`, `middle` and `end`, which set what part of the text element the
`x` attribute refers to.

Just like all other SVG elements, you can *fill* and *stroke* the text in any way you like.

::: sideImagePreview
``` {data-lang="html"}

    
        Juan plays the guitar. 
        But he also likes playing with SVG.
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDx0ZXh0IHg9IjEwIiB5PSIyMCI+CiAgICAgICAgSnVhbiBwbGF5cyB0aGUgZ3VpdGFyLiAKICAgICAgICBCdXQgaGUgYWxzbyBsaWtlcyBwbGF5aW5nIHdpdGggU1ZHLgogICAgPC90ZXh0Pgo8L3N2Zz4=)

</div>
:::

## Vertical Text

To create vertical text, you can set the `writing-mode` attribute to
`tb` (top to bottom), which essentially only rotates the text. If you want letters to still stand upright, but just underneath instead of next to each other, you can undo this rotation of the letters or so-called
*glyphs*. To do so, use the `glyph-orientation-vertical` attribute, which accepts any number, and reads it as an amount of degrees.

::: sideImagePreview
``` {data-lang="html"}
    
        Juan plays the guitar. 
    
    
        But he also likes playing with SVG.
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMCIgd3JpdGluZy1tb2RlPSJ0YiI+CiAgICAgICAgSnVhbiBwbGF5cyB0aGUgZ3VpdGFyLiAKICAgIDwvdGV4dD4KICAgIDx0ZXh0IHg9IjYwIiB5PSIxMCIgd3JpdGluZy1tb2RlPSJ0YiIgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWw9IjAiPgogICAgICAgIEJ1dCBoZSBhbHNvIGxpa2VzIHBsYXlpbmcgd2l0aCBTVkcuCiAgICA8L3RleHQ+Cjwvc3ZnPg==)

</div>
:::

## Text Length

Instead of manually setting *font size* and *letter spacing* with CSS to make text fit certain dimensions, you can also let SVG do that for you. Use the `textLength` attribute to set a fixed width, and the
`lengthAdjust` attribute to determine *how* it will scale. This value could be `spacing` (which grows/shrinks spaces between words), or
`spacingAndGlyps` (which changes spacing, as well as glyph size).

::: sideImagePreview
``` {data-lang="html"}
    
        Juan plays the guitar. 
    
    
        Juan plays the guitar. 
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDx0ZXh0IHg9IjEwIiB5PSIyMCIgdGV4dGxlbmd0aD0iMzAwIj4KICAgICAgICBKdWFuIHBsYXlzIHRoZSBndWl0YXIuIAogICAgPC90ZXh0PgogICAgPHRleHQgeD0iMTAiIHk9IjQwIiB0ZXh0bGVuZ3RoPSIzMDAiIGxlbmd0aGFkanVzdD0ic3BhY2luZ0FuZEdseXBocyI+CiAgICAgICAgSnVhbiBwbGF5cyB0aGUgZ3VpdGFyLiAKICAgIDwvdGV4dD4KPC9zdmc+)

</div>
:::

## Text Wrapping

We've seen that the SVG `` element can only deal with single lines of text, but luckily, there's another element to simulate multiline text. The syntax is:

`     your text`{.longsyntax}

This element will position itself relative to the previous line of text. If you supply a single number as *xOffset* or *yOffset*, the `` element will offset all its content by that amount. If you supply multiple numbers, separated by spaces, it will apply these offsets to single glyphs.

::: sideImagePreview
``` {data-lang="html"}
    
        Juan plays the guitar. 
        
            He also plays with SVG 
        
        
            But mostly plays guitar, though.
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDx0ZXh0IHg9IjEwIiB5PSIyMCI+CiAgICAgICAgSnVhbiBwbGF5cyB0aGUgZ3VpdGFyLiAKICAgICAgICA8dHNwYW4gZHg9Ii0xMDAiIGR5PSIyMCI+CiAgICAgICAgICAgIEhlIGFsc28gcGxheXMgd2l0aCBTVkcgCiAgICAgICAgPC90c3Bhbj4KICAgICAgICA8dHNwYW4gZHg9Ii0yMDAiIGR5PSIyMCI+CiAgICAgICAgICAgIEJ1dCBtb3N0bHkgcGxheXMgZ3VpdGFyLCB0aG91Z2guCiAgICAgICAgPC90c3Bhbj4KICAgIDwvdGV4dD4KPC9zdmc+)

</div>
:::

## Text Spanning

Alternatively, you can use the `` element as the SVG equivalent of the HTML `` element\-\--to style parts of an element's content. When used this way, the `dx` and `dy` attributes are completely optional.

An extra attribute is also available, which is `baseline-shift`. It makes whatever is inside *superscript* or *subscript*. The possible values are, not surprisingly, `super` and `sub`.

::: sideImagePreview
``` {data-lang="html"}
    
        Juan plays the guitar. 
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDx0ZXh0IHg9IjEwIiB5PSIyMCI+CiAgICAgICAgSnVhbiBwbGF5cyB0aGUgPHRzcGFuIGJhc2VsaW5lLXNoaWZ0PSJzdWIiPmd1aXRhcjwvdHNwYW4+LiAKICAgIDwvdGV4dD4KPC9zdmc+)

</div>
:::

## Defining Text for Multiple Use

Similar to basic shapes, it's possible to define a piece of text somewhere, and instantiate it multiple times within the graphic. All you have to do is give a `` element a name, using the familiar `id` attribute, and place it inside a `` element. Now you have defined a text element you can access by using the name you gave it.

We can then use the familiar `` element to instantiate it.

::: sideImagePreview
``` {data-lang="html"}
    
        
            Juan is cool. He plays the guitar.
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDx0ZXh0IGlkPSJKVUFOIj4KICAgICAgICAgICAgSnVhbiBpcyBjb29sLiBIZSBwbGF5cyB0aGUgZ3VpdGFyLgogICAgICAgIDwvdGV4dD4KICAgIDwvZGVmcz4KICAgIDx1c2UgeGxpbms6aHJlZj0iI0pVQU4iIHg9IjIwIiB5PSIyMCI+PC91c2U+Cjwvc3ZnPg==)

</div>
:::

## Text along a Path

Perhaps one of the biggest advantages of SVG text over HTML tags, is that text can easily be laid out along a custom path. For this, two components are required: a definition of the path we want to use, and text placed within a special element that links to our path.

The first part is nothing special; just create a path the way inside a
`` element the way you're used to. And give it a name we can use, of course.

The second part requires a new element:

`               your text     `{.longsyntax}

Even though you'd think the `` already starts to display the text, it still needs to be within a `` element.

::: sideImagePreview
``` {data-lang="html"}
    
        
    
    
       
        This is text along a path!
      
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGlkPSJ0aGVQYXRoIiBkPSJNNSw1IGw4MCw4MCBsODAsLTgwIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8dGV4dD4KICAgICAgICA8dGV4dHBhdGggeGxpbms6aHJlZj0iI3RoZVBhdGgiPiAKICAgICAgICAgICAgVGhpcyBpcyB0ZXh0IGFsb25nIGEgcGF0aCEKICAgICAgICA8L3RleHRwYXRoPgogICAgPC90ZXh0Pgo8L3N2Zz4=)

</div>
:::

" slug: "svg-text" cat: "Website" subcat: "SVG" video: "" diff:
3 quiz: "" - id: 312 title: "\[SVG\] Switches, Links & Images" post:
"

Last chapter on text wrapped up the chapters on the most important parts of SVG, which means it might seem a bit unstructured from now on. The rest of this course still contains large and important components of SVG, but these aren't fundamental concepts. Instead, they use what you've already learned and add some variety and dynamics to your graphics.

## Switches

The ``

element contains groups of text and shapes, and switches between them based on the user's system language. This means that you could, for example, display a welcome message within your graphic, tailored to the user's native language. To determine which group belongs to which language, use the `systemLanguage="lang"` attribute. Languages use standard HTML codes, which means two-letter abbreviations.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
                Welcome!
            
        
        
            
                Wilkommen!
            
        
        
            
                Welkom!
            
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxzd2l0Y2g+CiAgICAgICAgPGcgc3lzdGVtbGFuZ3VhZ2U9ImVuIj4KICAgICAgICAgICAgPHRleHQgeD0iMTAiIHk9IjIwIj4KICAgICAgICAgICAgICAgIFdlbGNvbWUhCiAgICAgICAgICAgIDwvdGV4dD4KICAgICAgICA8L2c+CiAgICAgICAgPGcgc3lzdGVtbGFuZ3VhZ2U9ImR1Ij4KICAgICAgICAgICAgPHRleHQgeD0iMTAiIHk9IjIwIj4KICAgICAgICAgICAgICAgIFdpbGtvbW1lbiEKICAgICAgICAgICAgPC90ZXh0PgogICAgICAgIDwvZz4KICAgICAgICA8ZyBzeXN0ZW1sYW5ndWFnZT0ibmwiPgogICAgICAgICAgICA8dGV4dCB4PSIxMCIgeT0iMjAiPgogICAgICAgICAgICAgICAgV2Vsa29tIQogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9zd2l0Y2g+Cjwvc3ZnPg==)

</div>
:::

## Links

You know the `` element for links from HTML, and SVG is, in this respect, no different. To make something\-\--anything\-\--into a link, place it within this element:

` any content `{.longsyntax}

Fortunately, it also accepts the `target` attribute with the same possible values as in regular HTML.

::: sideImagePreview
``` {data-lang="html"}
    
<!-- Try clicking the rectangle! -->
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxhIHhsaW5rOmhyZWY9Imh0dHA6Ly9nb29nbGUuY29tIj4KICAgICAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+PC9yZWN0PgogICAgPC9hPgo8L3N2Zz4=)

</div>
:::

## Images

*Why would I place an image within an image?* Well, there are times when you want a regular, bitmap image in your vector graphic\-\--for example, when you have a picture you can't (or don't want to) transform into vector format. You can include it anywhere and at any size you like, but keep in mind that these bitmap images are not infinitely scalable; at a certain point, they *will* become pixelated. The syntax for placing an image is:

``{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxpbWFnZSB4PSIyMCIgeT0iMjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB4bGluazpocmVmPSJtZWRpYS9TVkdCaXRtYXB2c1ZlY3Rvci5wbmciPjwvaW1hZ2U+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-switches-links-images" cat: "Website" subcat: "SVG" video: "" diff: 3 quiz: "" - id: 313 title: "\[SVG\] Gradients" post: "

If you know about CSS, you probably already know a lot about gradients, so let me just give you a quick overview here.

Gradients fill a shape with an uneven colour\-\--this could be just multiple colours or a pattern, but people usually stick to a gradually changing colour. For these, we need to set a gradient direction and size in its main element, and we need to set so-called **colour stops** within it. These colour stops are just places within the gradient where the colour changes\-\--the previous colour stops there, and a new one begins.

Gradients are defined within the `` element, and applied to an element with `fill="url(#gradientName)"`.

## Colour Stops

A single colour stop is set with the syntax

``{.longsyntax}

The first two attributes determine the colour, while the third is a percentage that represents the spot at which to change into this colour. It is a percentage, where `0%` is the start point of the gradient, and
`100%` the end point.

## Linear vs Radial

A gradient can start at one edge of the shape, and extend in a direct line to the opposite edge. This is a **linear gradient**.

But, we can also start at some point within the shape, and extend in all directions to make a circle or ellipse. This is a **radial gradient**.

For *linear gradients*, the syntax is:

`     … colour stops …`{.longsyntax}

Here, the point `(x1, y1)` is the starting point, and `(x2, y2)` the end point. If one of these points is not at the edge of the gradient, this means there's still some space left to fill within the shape. The
`spreadMethod` attribute takes care of that, which has three possible values:

-   `pad`: the first and last colour step are extended towards the edges
    of the shape
-   `repeat`: the whole gradient is repeated as often as it takes to
    fill the shape
-   `reflect`: the gradient is repeated, but mirrored/reflected every
    time it does so

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJncmFkaWVudCBpZD0ibGluR3JhZCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSIgc3ByZWFkbWV0aG9kPSJwYWQiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZWQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0ib3JhbmdlIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhcmdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsaW5HcmFkKSI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

For *radial gradients*, the syntax is:

`     … colour stops …`{.longsyntax}

The coordinate (`cx`, `cy`) is the centre point of the gradient, or where it is placed. But, (`fx`,` fy`) is the focal point, which means the point at which the first colour stop starts. The `r` attribute sets the radius or size of the gradient.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxyYWRpYWxncmFkaWVudCBpZD0icmFkR3JhZCIgY3g9IjUwJSIgY3k9IjUwJSIgZng9IjIwJSIgZnk9IjIwJSIgc3ByZWFkbWV0aG9kPSJwYWQiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSJyZWQiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0ib3JhbmdlIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L3JhZGlhbGdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNyYWRHcmFkKSI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

## Patterns

Another way of customizing the *fill* of an object is by using patterns. A pattern is simply a group of shapes, which, when used on a shape, tile across the full width and height of the shape. For example, if wanted a dotted fill for an object, we'd create a pattern consisting of a single
(small) circle, which would then automatically fill the whole object with these dots.

A pattern must be created within a `` element, with the following syntax:

`     … your shapes …`{.longsyntax}

The `x` and `y` attributes set where the pattern starts, relative to the shape's top left corner. The `width` and `height` attributes set the size of a single tile within the pattern.

To use it on an element, set `fill="url(#name)"`. Notice the similarity with other `url(#name)` syntaxes here, which means you can also put patterns and gradients into another pattern!

One important thing to note here is that if you make a shape larger, the size of each tile stays the same, and more tiles are added to fill the available space.

The `patternContentUnits` attribute changes this. It has two possible values:

-   `userSpaceOnUse`: Default, does what I just described.
-   `objectBoundingBox`: Stretches the tiles instead, to make the
    pattern fit the object's dimensions exactly.

Similarly, the `patternUnits` attribute is for setting the coordinate system of the pattern. It has two possible values:

-   `objectBoundingBox`: Default, uses the bounding box of the object.
-   `userSpaceOnUse`: uses the coordinate system that was in place at
    the time the pattern was created.

::: sideImagePreview
``` {data-lang="html"}
    
        
          
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxwYXR0ZXJuIGlkPSJteVBhdHRlcm4iIHdpZHRoPSIwLjI1IiBoZWlnaHQ9IjAuMjUiIHBhdHRlcm5jb250ZW50dW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij4KICAgICAgICAgICAgPGNpcmNsZSBjeD0iMC4xMjUiIGN5PSIwLjEyNSIgcj0iMC4xIiBmaWxsPSJyZWQiPjwvY2lyY2xlPgogICAgICAgIDwvcGF0dGVybj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIxMjAiIGZpbGw9InVybCgjbXlQYXR0ZXJuKSIgc3Ryb2tlPSJibGFjayI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

" slug: "svg-gradients" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: "" - id: 314 title: "\[SVG\] Masks" post: "

An easy way to create very complex shapes, is using **clip paths** and
**masks**.

A *clip path* is a path which you can lay over another shape, or group of shapes, to cut off everything that is *not* inside the path. Essentially, it clips a graphic to a certain path.

First, define your path inside a `` element using:

`     … any path you want …`{.longsyntax}

You don't necessarily need to put a `` inside it; you can use any shape you want as a *clip path*, even text!

To apply this to a certain element, use `clip-path="url(#name)"`. That's it!

::: sideImagePreview
``` {data-lang="html"}
    
        
        
          
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxjbGlwcGF0aCBpZD0iY2xpcHBlciI+CiAgICAgICAgICAgIDxjaXJjbGUgY3g9IjMwIiBjeT0iMzAiIHI9IjMwIiBmaWxsPSJyZWQiPjwvY2lyY2xlPgogICAgICAgIDwvY2xpcHBhdGg+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBjbGlwLXBhdGg9InVybCgjY2xpcHBlcikiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

## Masks

Masks are a more advanced version of clip paths. Instead of fully showing a shape inside it, or not showing it outside it, masks can set
*to what extent* to display a shape. With a mask, for example, you can set a certain part of an element to be fully opaque, and another part to be slightly transparent.

First, again inside a `` element, define a mask using:

`     … any shapes you want …`{.longsyntax}

To apply the mask to a certain element, use the `mask="url(#name")` attribute.

Now, the important thing here, is that you can use the fill colours of the shapes within the mask, to set the transparency of the masked shape. If your mask is a rectangle with colour `#ffffff` (white), the masked shape will be fully opaque. If its fill colour is `#000000` (black), the masked shape is fully transparent.

::: sideImagePreview
``` {data-lang="html"}
    
        
          
          
          
          
          
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxtYXNrIGlkPSJtYXNrZXIiPgogICAgICAgICAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0icmVkIj48L3JlY3Q+CiAgICAgICAgICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSJ3aGl0ZSI+PC9yZWN0PgogICAgICAgICAgICA8cmVjdCB4PSI0MCIgeT0iNDAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgZmlsbD0iYmxhY2siPjwvcmVjdD4KICAgICAgICA8L21hc2s+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgbWFzaz0idXJsKCNtYXNrZXIpIiBmaWxsPSJibHVlIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-clip-path-masks" cat: "Website" subcat: "SVG" video:
"" diff: 3 quiz: "" - id: 315 title: "\[SVG\] Filters I" post: "

Filters are a very large part of SVG because they are very powerful. Applying a filter to any basic shape can subtly change it to make it look much better, but also transform an object to the point you can't recognize it anymore. There are lots of filters available, and every element can have one or multiple attached. If you hadn't noticed: by default, no filters are attached to anything.

One thing you should understand very well, is the fact that filters work on a pixel level. If you scale an SVG graphic, the filter will try to scale with it by recalculating the filter, but it will still just be a bunch of pixels. Filters read what you put into it as a bunch of pixels with the colour channels R, G, B and A - each with a value between 0 and
1 - and every action you perform is about changing the values of all pixels in one way or another. Now we can continue with the fun parts!

Filters work using the same two-step method as most other things in this course: define the filter somewhere inside a `` element, and use a special attribute on an element to use this filter. Filters, however, can be chained. This means that one filter can have multiple filter elements within it, which each build on the output the previous one produced. For example, I could first blur a shape, and then apply drop shadow to the blurred shape (instead of the original).

![](media/SVGFilterPipeline.png)

Because of this, we always need to group the steps of our filter within a `` element. The syntax is:

`     … all the filter elements you want …`{.longsyntax}

The `x` and `y` attributes position the filter relative to whatever graphic it's used on (default is `-10%`). For example, if you want a drop shadow to appear at the upper left corner, you'll need to offset the filter by a negative amount to make room for it. The `width` and
`height` attributes serve a similar purpose: most filters end up a different size than the graphic they're used on (default is `120%`).

To apply a filter to any shape, all you have to do is use this attribute:

`filter="url(#filterName)"`{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICAgICAgICAKICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXIpIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

## The Filter Primitives

As you've probably noticed, last example didn't do anything. That's because we've defined a filter container and given it a nice name, but there are no *filter primitives* inside it. These are the actual elements that have a certain effect on the graphic, which you can partly influence using special attributes.

There are a lot of them, and I think just throwing them in a list now wouldn't clear things up, which is why I'll first demonstrate their general working.

Every filter primitive has two standard attributes: `in` and `result`.

The `in` attribute determines what is put into the filter. The value
`SourceGraphic` simply uses the shape the filter is called upon as input, while `SourceAlpha` inputs the shape's alpha. Besides these standard values, you can also use the output of other filters as input.

The `result` attribute is used for exactly that: specifying the output of a filter. This way you can chain lots of filter primitives in any way you like, by using the output of a filter as the input for the next.

NOTE: The last filter primitive that is used within a filter, doesn't need the `result` attribute set. Its result is automatically used, no need to make up a name for it.

## Merging

It's very important to understand that a filter acts on the original graphic. You'll need to go through some effort if you want to maintain the original shape together with the filter. This is done by *merging* the original shape and its filter together, and that will be our first filter primitive!

The syntax is:

`          `{.longsyntax}

Of course, you can put many more nodes in there if you want, although it would make things quite complex.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
            
            
                
                
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICAgICAgICA8ZmVnYXVzc2lhbmJsdXIgc3RkZGV2aWF0aW9uPSIxNSIgcmVzdWx0PSJibHVyIj48L2ZlZ2F1c3NpYW5ibHVyPgogICAgICAgICAgICAKICAgICAgICAgICAgPGZlbWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVtZXJnZW5vZGUgaW49IlNvdXJjZUdyYXBoaWMiPjwvZmVtZXJnZW5vZGU+CiAgICAgICAgICAgICAgICA8ZmVtZXJnZW5vZGUgaW49ImJsdXIiPjwvZmVtZXJnZW5vZGU+CiAgICAgICAgICAgIDwvZmVtZXJnZT4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXIpIiBmaWxsPSJyZWQiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

## Blur

To blur a graphic around the edges, use

``{.longsyntax}

The *value* determines how wide the blur is\-\--a low value creates a slight glow around the graphic, while a high value almost makes it unrecognizable.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICAgICAgICA8ZmVnYXVzc2lhbmJsdXIgc3RkZGV2aWF0aW9uPSI1MCI+PC9mZWdhdXNzaWFuYmx1cj4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXIpIiBmaWxsPSJyZWQiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

## Drop Shadow

For a drop shadow, we'll need (at least) two primitives.

``{.longsyntax}

This simply offsets whatever is put into it by (*offsetX*, *offsetY*) amount.

``{.longsyntax}

This requires a second *in* attribure, `in2`, which it blends with the regular `in` attribute. This is very similar to merging, except for the fact that you can determine the way they are merged with *blendMode*. The possible values for this are: `normal`, `multiply`, `screen`,
`darken`, and `lighten`.

Usually, a drop shadow is also blurred, for which you can use the command from the previous section!

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgeD0iLTEwJSIgeT0iLTEwJSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgICAgICA8ZmVvZmZzZXQgZHg9IjE1IiBkeT0iMTUiIHJlc3VsdD0ib2Zmc2V0Ij48L2Zlb2Zmc2V0PgogICAgICAgICAgICA8ZmVnYXVzc2lhbmJsdXIgaW49Im9mZnNldCIgcmVzdWx0PSJzaGFkb3ciIHN0ZGRldmlhdGlvbj0iMTUiPjwvZmVnYXVzc2lhbmJsdXI+CiAgICAgICAgICAgIDxmZWJsZW5kIGluPSJzaGFkb3ciIGluMj0iU291cmNlR3JhcGhpYyI+PC9mZWJsZW5kPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcikiIGZpbGw9ImJsYWNrIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-filters-I" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: "" - id: 316 title: "\[SVG\] Filters II" post: "

Continuing on last chapter, I'll discuss all other filters available in SVG. I won't go into too much detail\-\--you'll need to experiment with these yourself to fully understand them, I think.

## Textures

To place an image within the graphic, use

``{.longsyntax}

To tile the result of another filter, for example the image from the previous one, across the entire graphic, use:

` `{.longsyntax}

To create a random noise texture, use

``{.longsyntax}

The first argument controls x and y pattern repetition. The second controls the level of detail, while the third represents the starting value for the randomness. These three mainly influence the algorithm for creating the noise.

The `stitchTiles` attribute has values `stitch` and `noStitch`; the first attempts to make the noise look smooth, while the second doesn't. The `type` can be either `fractalNoise` (which will output more of a sandy result), or `turbulence` (default).

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgICAgICA8ZmV0dXJidWxlbmNlIGJhc2VmcmVxdWVuY3k9IjAuMiIgbnVtb2N0YXZlcz0iMTAiIHNlZWQ9IjQiIGluPSJTb3VyY2VHcmFwaGljIiBzdGljaHRpbGVzPSJzdGl0Y2giPjwvZmV0dXJidWxlbmNlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXIpIiBmaWxsPSJyZWQiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

HTML SVG EXAMPLE

## Morphing & Displacing

To extrude or intrude a shape, use

``{.longsyntax}

The first argument has the values `erode` (shrink the edges of the shape) and `dilate` (enlarge the edges of the shape). The `radius` determines by what amount this operator is executed.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
        
            
        
    
    
        LIFE
    
    
        LIFE
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPGZlbW9ycGhvbG9neSBpbj0iU291cmNlR3JhcGhpYyIgb3BlcmF0b3I9ImVyb2RlIiByYWRpdXM9IjEiPjwvZmVtb3JwaG9sb2d5PgogICAgICAgIDwvZmlsdGVyPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91clNlY29uZEZpbHRlcjEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPGZlbW9ycGhvbG9neSBpbj0iU291cmNlR3JhcGhpYyIgb3BlcmF0b3I9ImRpbGF0ZSIgcmFkaXVzPSIyIj48L2ZlbW9ycGhvbG9neT4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDx0ZXh0IHg9IjIwIiB5PSI1MCIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcjEpIiBzdHlsZT0iZm9udC1zaXplOjYwcHg7IiBmaWxsPSJyZWQiPgogICAgICAgIExJRkUKICAgIDwvdGV4dD4KICAgIDx0ZXh0IHg9IjIwIiB5PSIxMjAiIGZpbHRlcj0idXJsKCNvdXJTZWNvbmRGaWx0ZXIxKSIgc3R5bGU9ImZvbnQtc2l6ZTo2MHB4OyIgZmlsbD0icmVkIj4KICAgICAgICBMSUZFCiAgICA8L3RleHQ+Cjwvc3ZnPg==)

</div>
:::

To morph two shapes together, use

``{.longsyntax}

It determines, using a certain operator, which alpha to assign to a pixel; a value of `0` means the pixel isn't displayed, a value of `1` means it's fully displayed. The last four arguments are only applicable if you choose the `arithmetic` operator. In that case, the result is calculated with the formula

`result = k1 * i1 * i2 + k2 * i1 + k3 * i2 + k4  (i = input)`{.longsyntax}

This way of using it is especially important when working with lighting, which you'll see next chapter. The other values for the `operator` are:

  -------- ------------------------------------------------------------------------------
  Value    Description
  `over`   Both images are displayed over each other
  `in`     The part of the first image that is within the second image is displayed
  `out`    The part of the first image that is outside of the second image is displayed
  `atop`   Same as in, but now both images are displayed
  `xor`    Both images are displayed, except for every overlapping pixel
  -------- ------------------------------------------------------------------------------

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
        
    
    
        LIFE
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjIiIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPGZlaW1hZ2UgeD0iMTAiIHk9IjIwIiB3aWR0aD0iOTAiIGhlaWdodD0iOTAiIHhsaW5rOmhyZWY9Im1lZGlhL1NWR0JpdG1hcHZzVmVjdG9yLnBuZyIgcmVzdWx0PSJpbWciPjwvZmVpbWFnZT4KICAgICAgICAgICAgPGZlY29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImltZyIgb3BlcmF0b3I9InhvciI+PC9mZWNvbXBvc2l0ZT4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDx0ZXh0IHg9IjIwIiB5PSI4MCIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcjIpIiBzdHlsZT0iZm9udC1zaXplOjYwcHg7IiBmaWxsPSJyZWQiPgogICAgICAgIExJRkUKICAgIDwvdGV4dD4KPC9zdmc+)

</div>
:::

Lastly, we can displace a graphic using information from another graphic. For that, use

``{.longsyntax}

The channel selectors each can have one of the values `R`, `G`, `B` or
`A`. They select one of these colour channels of the second graphic to use for *x* or *y* displacement. The `scale` attribute scales the displacement, which means `0` will undo any displacement, and `1` is the default scale.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
            
        
    
    
        LIFE
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjMiIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPCEtLSBUaGUgdGV4dCBpcyByZWQsIHdoaWNoIG1lYW5zIGl0J3MgZGlzcGxhY2VkIGEgbG90IGluIHRoZSB4IGRpcmVjdGlvbi4gLS0+CiAgICAgICAgICAgIDwhLS0gVGhlIHkgZGlyZWN0aW9uIGlzbid0LCBiZWNhdXNlIGl0IHVzZXMgYmx1ZSwgd2hpY2ggaXMgMCAtLT4KICAgICAgICAgICAgPGZlZGlzcGxhY2VtZW50bWFwIGluPSJTb3VyY2VHcmFwaWMiIGluMj0iU291cmNlR3JhcGhpYyIgc2NhbGU9IjMiIHhjaGFubmVsc2VsZWN0b3I9IlIiIHljaGFubmVsc2VsZWN0b3I9IkIiPjwvZmVkaXNwbGFjZW1lbnRtYXA+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8dGV4dCB4PSIyMCIgeT0iODAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXIzKSIgc3R5bGU9ImZvbnQtc2l6ZTo2MHB4OyIgZmlsbD0icmVkIj4KICAgICAgICBMSUZFCiAgICA8L3RleHQ+Cjwvc3ZnPg==)

</div>
:::

## 3D Transforms

There's only one element to transform shapes to be (seemingly) 3D, which means it has *lots* of attributes. The syntax is:

``{.longsyntax}

The `order` attribute sets the size of the matrix using two comma separated numbers. The matrix itself is supplied within the
`kernelMatrix` attribute. The matrix consists of numbers, separated by whitespace. You can view the size of the matrix as the depth of extrusion (4x4 means 4-pixel deep extrusion), and the placing of `1`s as the angle. The *div* value divides the values that come out of this matrix, while the *bias* value adds to all those values.

Furthermore, the `targetX` and `targetY` attributes set how to position the *matrix* relative to the target pixels. The default is at the centre, i.e., `floor(order/2);`

The `edgeMode` attribute determines how to extrude the input graphic. Possible values are:

-   `duplicate`: Default. Extends along each border, using the pixel
    value on the outside.
-   `wrap`: Extends along each border, using the pixel value on the
    inside.
-   `none`: Extends using a pixel value of `0` for R, G, B and A.

The `kernelUnitLength` can be set to assign a new value for how the distance in the graphic relates to the distance between two columns of the *matrix*. This means that the size of the *matrix* doesn't automatically determine the size of extrusion, but you can scale it yourself.

Lastly, the `preserveAlpha` attribute can be set to either `false` or
`true`. The first is default, and means the alpha channel is taken into account during all these matrix multiplications, while the latter means the matrix only applies to the colour channels.

NOTE: (Remind me, if you read this, that I need to explain this better one day if I have the time)

::: sideImagePreview
``` {data-lang="html"}
    
        
            
            
        
    
    
        LIFE IS LIFE
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjQiIHg9Ii0xMCUiIHk9Ii0xMCUiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPCEtLSBUZXh0IGlzIGV4dHJ1ZGVkIGJ5IDMvMC41ID0gNiBwaXhlbHMtLT4KICAgICAgICAgICAgPGZlY29udm9sdmVtYXRyaXggb3JkZXI9IjMsMyIga2VybmVsbWF0cml4PSIxIDAgMCAwIDEgMCAwIDAgMSIgZGl2aXNvcj0iMC41Ij48L2ZlY29udm9sdmVtYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8dGV4dCB4PSIyMCIgeT0iMjAiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXI0KSI+CiAgICAgICAgTElGRSBJUyBMSUZFCiAgICA8L3RleHQ+Cjwvc3ZnPg==)

</div>
:::

" slug: "svg-filters-II" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: "" - id: 317 title: "\[SVG\] Filters III" post: "

This last chapter on filters tries to explain the two biggest groups:
**colours** and **lighting**.

## Colours

To just flood fill the whole filter with a certain colour, use

``{.longsyntax}

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlciIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgICAgICA8ZmVmbG9vZCBmbG9vZC1jb2xvcj0iZ3JlZW4iPjwvZmVmbG9vZD4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxyZWN0IHg9IjEwIiB5PSIxMCIgd2lkdGg9IjcwIiBoZWlnaHQ9IjcwIiBmaWx0ZXI9InVybCgjb3VyRmlsdGVyKSI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

To transform any colour you put in, use

``{.longsyntax}

The possible types are

  -------------------- ---------------------------------------------------------------------------------------------------------------------------------
  Value                Description
  `matrix`             Sets the colour using matrix specified in `values`.
  `saturate`           Saturates the colour by the amount specified in `values`
  `hueRotate`          Changes the hue by the amount of degrees specified in `values`
  `luminanceToAlpha`   Uses the colour's luminance to set the alpha component of the colour, making it greyscale. Doesn't need a `values` attribute.
  -------------------- ---------------------------------------------------------------------------------------------------------------------------------

This matrix is essentially a 5x4 matrix of values separated by spaces. The first four values of each row multiply the current R, G, B and A value with their number. The fifth value is a constant, and is automatically multiplied by 1. The value that comes out of each row sets the value for the R, G, B and A channel of the new colour, respectively. This process is repeated for all pixels.

::: sideImagePreview
``` {data-lang="html"}
    
        
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjEiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPGZlY29sb3JtYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgNSAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC41Ij48L2ZlY29sb3JtYXRyaXg+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcjEpIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

To be able to transform colour channels *separately*, instead of all at the same time, use

``{.longsyntax}

The possible *values* are `linearRGB` (default) and `sRGB`. The second is a special form of RGB which can be used for very dark or light colours\-\--for others it doesn't work at all like you want it to.

Within the `` element, you can specify these child elements

`  `{.longsyntax}

Of course, you don't necessarily need to specify all of them\-\--only the colour channels you want changed.

Depending on the type, several other attributes must be specified.

+-----------------------+-----------------------+-----------------------+
| Value                 | Attributes            | Description           |
+-----------------------+-----------------------+-----------------------+
| `identity`            |                       | Changes               |
|                       |                       | nothing\-\--just      |
|                       |                       | passes on the input   |
|                       |                       | value as the output   |
|                       |                       | value.                |
+-----------------------+-----------------------+-----------------------+
| `linear`              | `intercept`, `slope`  | Applies a simple      |
|                       |                       | linear formula to     |
|                       |                       | each pixel:           |
|                       |                       |                       |
|                       |                       | output = intercept +  |
|                       |                       | slope\*input          |
+-----------------------+-----------------------+-----------------------+
| `gamma`               | `offset`,             | Applies the gamma     |
|                       | `amplitude`,          | function:             |
|                       | `exponent`            |                       |
|                       |                       | output = offset +     |
|                       |                       | amplitu               |
|                       |                       | de\*(input\^exponent) |
+-----------------------+-----------------------+-----------------------+
| `table`               | `tableValues`         | Divides the input     |
|                       |                       | range by the *amount* |
|                       |                       | of numbers specified  |
|                       |                       | in the attribute.     |
|                       |                       | These ranges are      |
|                       |                       | mapped to the         |
|                       |                       | corresponding ranges  |
|                       |                       | specified within the  |
|                       |                       | attribute.            |
+-----------------------+-----------------------+-----------------------+
| `discrete`            | `tableValues`         | Divides the input     |
|                       |                       | range by the *amount* |
|                       |                       | of numbers specified  |
|                       |                       | in the attribute.     |
|                       |                       | These ranges are      |
|                       |                       | mapped to the         |
|                       |                       | corresponding value   |
|                       |                       | within the attribute. |
+-----------------------+-----------------------+-----------------------+

::: sideImagePreview
``` {data-lang="html"}
    
        
            
                
                
                
                
            
        
        
            
            
        
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgICAgIDxmaWx0ZXIgaWQ9Im91ckZpbHRlcjIiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICAgICAgICAgICAgPGZlY29tcG9uZW50dHJhbnNmZXI+CiAgICAgICAgICAgICAgICA8IS0tIEEgYml0IG9mIHJlZCBpcyBhZGRlZCBldmVyeXdoZXJlLCBidXQgZXNwZWNpYWxseSBhdCB0aGUgb3JhbmdlIHNpZGUsIGJlY2F1c2UgaXQgYWxyZWFkeSBjb250YWluZWQgc29tZSByZWQgLS0+CiAgICAgICAgICAgICAgICA8ZmVmdW5jciB0eXBlPSJsaW5lYXIiIGludGVyY2VwdD0iMC4zIiBzbG9wZT0iMC40Ij48L2ZlZnVuY3I+CiAgICAgICAgICAgICAgICA8IS0tIFRoZSBhcmVhIGFyb3VuZCB0aGUgcmVjdGFuZ2xlIHdpdGggYWxwaGEgMCBpcyBtYXBwZWQgdG8gYWxwaGEgMC4zLiBUaGUgcmVjdGFuZ2xlIGl0c2VsZiBoYWQgYWxwaGEgMSwgc28gaXQncyBtYXBwZWQgdG8gMC44Li0tPgogICAgICAgICAgICAgICAgPGZlZnVuY2EgdHlwZT0iZGlzY3JldGUiIHRhYmxldmFsdWVzPSIwLjMgMC44Ij48L2ZlZnVuY2E+CiAgICAgICAgICAgIDwvZmVjb21wb25lbnR0cmFuc2Zlcj4KICAgICAgICA8L2ZpbHRlcj4KICAgICAgICA8bGluZWFyZ3JhZGllbnQgaWQ9ImxpbkdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSJvcmFuZ2UiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iZ3JlZW4iIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyZ3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI3MCIgaGVpZ2h0PSI3MCIgZmlsbD0idXJsKCNsaW5HcmFkKSIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcjIpIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

## Lighting

Lighting is usually viewed as a fundamental concept you need to master for 3D graphics, but it has its uses in 2D graphics as well. For example, there are lots of 2D games that create artificial lighting to create atmosphere, or numerous websites that simulate lighting to highlight certain parts or make them *seem* 3D. In SVG, two types of lighting are naturally supported.

### Specular vs Diffuse

To be able to use any lighting, you need to wrap it inside one of these elements:

` … your lights … `{.longsyntax}

` … your lights … `{.longsyntax}

The main difference is that *specular* lighting acts as if your graphic was a plain, smooth surface, while *diffuse* pretends it's a rough surface. In the first case, most light is reflected back at you, which leads to light, well-lit areas. In the second case, light waves fly in all directions, which generally leads to dark areas outside of the spot that the light focusses on. Diffuse lighting has a more subdued effect than specular.

With *specular*, you can set the attributes `specularExponent` and
`specularConstant`. The first determines the area of the falloff (how slowly light fades away), while the second sets a base level of lightness. With *diffuse*, two similar attributes `diffuseExponent` and
`diffuseConstant` exist.

Obviously, the `lighting-color` sets the colour of the light that is applied.

### Blending Light & Shape

To blend the created lighting and the original shape, it's best to use an `` element with the operator set to `algorithm`. It might be a good exercise to see for yourself why we should use the parameters given below\-\--or just ignore that and believe me these are the real deal:

For *specular* lighting, use `k1=0`, `k2=1`, `k3=1` and `k4=0`.

::: sideImagePreview
``` {data-lang="html"}
    
    
        
        
            
        
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgPGZpbHRlciBpZD0ib3VyRmlsdGVyMyIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgIDxmZWdhdXNzaWFuYmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZGRldmlhdGlvbj0iNCIgcmVzdWx0PSJibHVyMSI+PC9mZWdhdXNzaWFuYmx1cj4KICAgICAgICA8ZmVzcGVjdWxhcmxpZ2h0aW5nIHJlc3VsdD0ic3BlY091dCIgaW49ImJsdXIxIiBzcGVjdWxhcmV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiNiYmJiYmIiPgogICAgICAgICAgICA8ZmVwb2ludGxpZ2h0IHg9IjUwIiB5PSIxMDAiIHo9IjIwMCI+PC9mZXBvaW50bGlnaHQ+CiAgICAgICAgPC9mZXNwZWN1bGFybGlnaHRpbmc+CiAgICAgICAgPGZlY29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9InNwZWNPdXQiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMT0iMCIgazI9IjEiIGszPSIxIiBrND0iMCI+PC9mZWNvbXBvc2l0ZT4KICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iNzAiIGhlaWdodD0iNzAiIGZpbGw9Im9yYW5nZSIgZmlsdGVyPSJ1cmwoI291ckZpbHRlcjMpIj48L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

For *diffuse* lighting, use `k1=1`, `k2=0`, `k3=0` and `k4=0`.

::: sideImagePreview
``` {data-lang="html"}
    
    
        
        
            
        
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgPGZpbHRlciBpZD0ib3VyRmlsdGVyNCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgIDxmZWdhdXNzaWFuYmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZGRldmlhdGlvbj0iMTAiIHJlc3VsdD0iYmx1cjEiPjwvZmVnYXVzc2lhbmJsdXI+CiAgICAgICAgPGZlZGlmZnVzZWxpZ2h0aW5nIHJlc3VsdD0ic3BlY091dCIgaW49ImJsdXIxIiBkaWZmdXNlZXhwb25lbnQ9IjIwIiBkaWZmdXNlY29uc3RhbnQ9IjEwIiBsaWdodGluZy1jb2xvcj0iI2JiYmJiYiI+CiAgICAgICAgICAgIDxmZXBvaW50bGlnaHQgeD0iNTAiIHk9IjEwMCIgej0iMTAiPjwvZmVwb2ludGxpZ2h0PgogICAgICAgIDwvZmVkaWZmdXNlbGlnaHRpbmc+CiAgICAgICAgPGZlY29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9InNwZWNPdXQiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMT0iMSIgazI9IjAiIGszPSIwIiBrND0iMCI+PC9mZWNvbXBvc2l0ZT4KICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ib3JhbmdlIiBmaWx0ZXI9InVybCgjb3VyRmlsdGVyNCkiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

### Point Light

A point light can be viewed like a light bulb\-\--a small, round (local) area of lighting. The syntax is:

``{.longsyntax}

Note that the Z-axis is the imaginary axis pointing out of the screen, directly at the user. The previous two examples used point lights.

### Distant Light

A distant light can be viewed like the sun\-\--it shines from a certain direction and lights nearly everything in its path, except the few bits of graphic at the far end. The syntax is:

`                   `{.longsyntax}

The *angleXY* value determines the angle or direction of the light in the XY plane. The *angleZ* value determines the angle in the Z plane.

::: sideImagePreview
``` {data-lang="html"}
    
    
        
        
            
        
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgPGZpbHRlciBpZD0ib3VyRmlsdGVyNSIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgIDxmZWdhdXNzaWFuYmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZGRldmlhdGlvbj0iNCIgcmVzdWx0PSJibHVyMSI+PC9mZWdhdXNzaWFuYmx1cj4KICAgICAgICA8ZmVzcGVjdWxhcmxpZ2h0aW5nIHJlc3VsdD0ic3BlY091dCIgaW49ImJsdXIxIiBzcGVjdWxhcmV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiNiYmJiYmIiPgogICAgICAgICAgICA8ZmVkaXN0YW50bGlnaHQgYXppbXV0aD0iNDUiIGVsZXZhdGlvbj0iNDUiPjwvZmVkaXN0YW50bGlnaHQ+CiAgICAgICAgPC9mZXNwZWN1bGFybGlnaHRpbmc+CiAgICAgICAgPGZlY29tcG9zaXRlIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9InNwZWNPdXQiIG9wZXJhdG9yPSJhcml0aG1ldGljIiBrMT0iMCIgazI9IjEiIGszPSIxIiBrND0iMCI+PC9mZWNvbXBvc2l0ZT4KICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0icmVkIiBmaWx0ZXI9InVybCgjb3VyRmlsdGVyNSkiPjwvcmVjdD4KPC9zdmc+)

</div>
:::

### Spot Light

A spot light is some sort of compromise between the previous two types. It shines from a certain direction, but is contained within a circle. It's very similar to a spot light used in, for example, theatres in real life.

``{.longsyntax}

The `x`, `y` and `z` attributes determine the actual position of the spotlight, while the `pointsAtX`, `pointsAtY` and `pointsAtZ` attributes determine what it actually points towards.

Additionally, the `limitingConeAngle` attribute can be set to restrict the angle under which light is projected. No light is projected outside of this cone.

::: sideImagePreview
``` {data-lang="html"}
    
    
        
        
            
        
        
    
    
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxkZWZzPgogICAgPGZpbHRlciBpZD0ib3VyRmlsdGVyNiIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPgogICAgICAgIDxmZWdhdXNzaWFuYmx1ciBpbj0iU291cmNlQWxwaGEiIHN0ZGRldmlhdGlvbj0iNCIgcmVzdWx0PSJibHVyMSI+PC9mZWdhdXNzaWFuYmx1cj4KICAgICAgICA8ZmVzcGVjdWxhcmxpZ2h0aW5nIHJlc3VsdD0ic3BlY091dCIgaW49ImJsdXIxIiBzcGVjdWxhcmV4cG9uZW50PSIyMCIgbGlnaHRpbmctY29sb3I9IiNiYmJiYmIiPgogICAgICAgICAgICA8ZmVzcG90bGlnaHQgeD0iMTIwIiB5PSI2MCIgej0iMTAwIiBwb2ludHNhdHg9IjcwIiBwb2ludHNhdHk9IjYwIiBwb2ludHNhdHo9IjAiIGxpbWl0aW5nY29uZWFuZ2xlPSIyMCI+PC9mZXNwb3RsaWdodD4KICAgICAgICA8L2Zlc3BlY3VsYXJsaWdodGluZz4KICAgICAgICA8ZmVjb21wb3NpdGUgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0ic3BlY091dCIgb3BlcmF0b3I9ImFyaXRobWV0aWMiIGsxPSIwIiBrMj0iMSIgazM9IjEiIGs0PSIwIj48L2ZlY29tcG9zaXRlPgogICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiBmaWxsPSJyZWQiIGZpbHRlcj0idXJsKCNvdXJGaWx0ZXI2KSI+PC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

" slug: "svg-filters-III" cat: "Website" subcat: "SVG" video:
"" diff: 5 quiz: "" - id: 318 title: "\[SVG\] Scripting & Animation" post: "

Finally, the last chapter will fulfil the promise of *dynamic graphics* I made at the beginning. Because SVG seamlessly integrates with HTML and CSS, we can just use JavaScript to attach any sort of script to elements. Even better, we can change/animate all attributes by means of the regular JavaScript notation for accessing attributes. For simple animations and transitions, we can use CSS as well\-\--but, when things get complex, we'll need to rely on some special SVG animation elements.

## JavaScript

If you don't know JavaScript, or have forgotten how it works, here's a quick reminder.

By using `document.getElementById(someID)` we can access elements by their `id` attribute, which is what we've been using every time to assign names to elements.

Then, we can use the `setAttribute(name, newValue)` attribute on that element to set an attribute's value, and `getAttribute(name)` to get the current value of a certain attribute.

``` {data-lang="javascript"} var obj = document.getElementById("circly"); //Gets element with id "circly", which is a circle obj.setAttribute(r,50); //Changes the circle's radius to 50
```

## SVG Animation

CSS can do a lot for you in terms of animation, but its support for animations and transitions has to stop at some point, and that is when a few SVG-specific elements can step in. These are a bit more complex than simple CSS animations, but you get much more customizability in return. The four SVG animation elements are: ``, ``, `` and ``.

There's one thing these all have in common: they need to be placed
*within* the element they have an effect on. So, for example, if you want to animate a circle shape, you place one of these animation elements as a child element within the circle element.

## The set Element

Let's start simple. To set the value of an attribute after a certain amount of time\-\--which I like to call *delayed attribute assignment*\-\--use this:

``{.longsyntax}

The first argument is required for all animations of SVG attributes, because they are based on XML (as I briefly discussed at the start of the course).

This element changes *someAttribute* to *newValue*, and does so after waiting *time* amount of time.

::: sideImagePreview
``` {data-lang="html"}
    
        
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIwIj4KICAgICAgICA8c2V0IGF0dHJpYnV0ZXR5cGU9IlhNTCIgYXR0cmlidXRlbmFtZT0iciIgdG89IjQwIiBiZWdpbj0iNXMiPjwvc2V0PgogICAgPC9jaXJjbGU+Cjwvc3ZnPg==)

</div>
:::

## Time Units

SVG knows four units for time:

  ------- --------------
  Unit    Description
  `h`     hour
  `min`   minutes
  `s`     seconds
  `ms`    milliseconds
  ------- --------------

## Regular Animations

We can extend this concept of changing attributes after a certain time, and instead gradually change an attribute over time. For this, the syntax is:

``{.longsyntax}

This changes the attribute *attr* from *startVal* to *targetVal*, over the course of *duration* time. If you want, you can delay the start using the `begin` attribute. The `repeatCount` attribute determines how often the animation is repeated; a value of `indefinite` keeps the animation looping forever.

Additionally, the `fill="value"` attribute sets what to do when the animation is completed. The default value is `fill`, which resets the shape. The other value is `freeze`, which doesn't do anything on completion.

::: sideImagePreview
``` {data-lang="html"}
    
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIwIj4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGV0eXBlPSJYTUwiIGF0dHJpYnV0ZW5hbWU9ImN4IiBmcm9tPSIwIiB0bz0iMTAwIiBiZWdpbj0iMHMiIGR1cj0iMTBzIiByZXBlYXRjb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9jaXJjbGU+Cjwvc3ZnPg==)

</div>
:::

## Transform Animations

For some reason, to animate transforms we need another element. The syntax for this is:

``{.longsyntax}

The possible values for `type` are what you expect from CSS transforms:
`translate`, `rotate` and `scale`. Because these need multiple values as input, you can separate values by whitespace in the `from` and `to` attribute.

::: sideImagePreview
``` {data-lang="html"}
    
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KICAgICAgICA8YW5pbWF0ZXRyYW5zZm9ybSBhdHRyaWJ1dGV0eXBlPSJYTUwiIGF0dHJpYnV0ZW5hbWU9InRyYW5zZm9ybSIgdHlwZT0icm90YXRlIiBmcm9tPSIwIDYwIDcwIiB0bz0iMzYwIDYwIDcwIiBiZWdpbj0iMHMiIGR1cj0iNXMiIHJlcGVhdGNvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGV0cmFuc2Zvcm0+CiAgICA8L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

## Animations along Paths

To create an animation along a path, you'll need

`     `{.longsyntax}

Because these animations automatically influence the x and y position, you don't need to set an attribute. They also automatically start at the beginning of the path, and finish at the end of the path.

Additionally, you can set an extra `rotate="auto"` attribute to automatically rotate the shape to be oriented in the same direction as its current position on the motion path. You can also set this attribute to a specific value, to set the shape to a fixed amount of degrees.

::: sideImagePreview
``` {data-lang="html"}
  
    
        
            
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxwYXRoIGQ9Ik0yMCw0MCBMNjAsMjAgTDEyMCw4MCIgaWQ9InNvbWVQYXRoIiBzdHJva2U9ImdyZWVuIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9wYXRoPgogICAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4KICAgICAgICA8YW5pbWF0ZW1vdGlvbiBiZWdpbj0iMHMiIGR1cj0iNXMiIHJlcGVhdGNvdW50PSJpbmRlZmluaXRlIj4KICAgICAgICAgICAgPG1wYXRoIHhsaW5rOmhyZWY9IiNzb21lUGF0aCI+PC9tcGF0aD4KICAgICAgICA8L2FuaW1hdGVtb3Rpb24+CiAgICA8L3JlY3Q+Cjwvc3ZnPg==)

</div>
:::

## Combining & Chaining Animations

To combine animations, which means executing them at the same time, you just need to include multiple animation elements within the same shape. With `` elements, however, multiple animations cancel each other out. To prevent this, add an `additive="sum"` attribute to all of those elements.

To chain animations, however, we need to know when a certain animation stops. To do so, we first assign a name to an animation with the `id` attribute (like we're used to). Then, we use `name.begin` to get the time a certain animation begins, or `name.end` to get when the referenced animation ends. These just return values, which means we can also perform calculations with them to obtain the specific effect we want.

::: sideImagePreview
``` {data-lang="html"}
    
    
        
        
    
```

<div>

![](data:image/svg+xml;base64,PHN2Zz4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIzMCIgaGVpZ2h0PSIxNSI+CiAgICAKICAgICAgICA8YW5pbWF0ZSBpZD0ib25lIiBhdHRyaWJ1dGVuYW1lPSJ4IiBhdHRyaWJ1dGV0eXBlPSJYTUwiIGZyb209IjAiIHRvPSI1MCIgYmVnaW49IjBzIiBkdXI9IjNzIiBmaWxsPSJmcmVlemUiPjwvYW5pbWF0ZT4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVuYW1lPSJ5IiBhdHRyaWJ1dGV0eXBlPSJYTUwiIGZyb209IjAiIHRvPSI1MCIgYmVnaW49Im9uZS5lbmQiIGR1cj0iM3MiIGZpbGw9ImZyZWV6ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L3N2Zz4=)

</div>
:::

" slug: "svg-scripting-animation" cat: "Website" subcat: "SVG" video: "" diff: 4 quiz: ""
:::
