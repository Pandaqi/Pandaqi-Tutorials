# Roadmap / To-Do

## Courses / Tutorials

@TODO: I'm currently tracking this in a different roadmap (a general one for _all_ my websites at once). Should move that information into here.

## Blocks / Styling

Can I easily **extend** the colored blocks the full width of the page? Will that look better?

More control over navigation button colors. Create "get-most-contrasting" function (maybe SASS has this by default?)

Split Critical and Style css more efficiently (and test).

**Arrows:** Now I use a hacky 2-element trick to get the arrows. If I ever find a cleaner way (using before, or within the same element), use that. => Can't use *before* now, as the buttons are *masked*, so the arrow would just be cut out

> Because of that, with arrows + masked images, the arrow does *not* automatically color with the hover filter on masks
>
> At the same time, it works wonderfully in all situations?

**Decoration:** Some simple decoration with faded hexagons along the background and footer and stuff?

**Side Notes:** Find a way to keep the "side-note" element positioned correctly on the biggest screen sizes

**Once CSS container units/queries are implemented (everywhere):** I can simplify and improve the hexagon grid spacing rules. Solve any issues neatly.

## Features

- **VIDEO SUPPORT:** Add back support for YouTube videos at the top of tutorials, might use that soon.


## Navigation / Marketing

Better general design and navigation:

-   Really think about *how will people find and use this website?*
-   Add dark mode? Allow switching?
-   On mobile, permanently (softly?) show label on grid tiles
-   Now it can be quite hard to use these as *documentation/reference*, due to pagination and large blocks of styling. For example, I really like the simplicity of <https://javascript.info> => small numbers, all sections on a single page in small links
-   Place remarks in the side-line instead? I really like the simple look of <https://gameprogrammingpatterns.com> => text is also smaller there, while my text is HUGE.

## Quizzes

-   Allow multiple replacements, because often I need *two* parts to change, to get a proper sentence. (\<X1>, \<X2>, ...) (or #1, #2, #3 ...)
-   The formatting is now sometimes a bit clunky. But I don't really know how to work with strong/italic/quotes consistently with dynamic content ...
-   "Scroll into view" with offset, methods I tried now don't work for me somehow?

## Syntax Highlighting

-   Use Hugo's built-in thing, but generate my own colors again. (DID I ALREADY DO THIS?)
-   Use the grainy-blocky-texture as the background. (Like the Phaser website does.)