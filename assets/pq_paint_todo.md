# TODO

## General Tools

* Clear whole canvas
* Download image
* Undo?
* ??

## Brush

Actually make hardness and opacity do exactly as it says?

* Draw everything to ANOTHER subcanvas first? => paintCanvas maintains an "activeCanvas" for this
* It keeps two separate states: the old canvas, and the currently created line
* The currently created line is _redrawn_ on every change. (Stepped through from start to finish. It really only saves your points from each event; interpolation happens fully when drawing.)
* This allows NO overlap (ruining hardness and stuff) + proper OPACITY for all

## Interface

* Label everything properly, make much prettier
* Radio Button "turn everything else off" doesn't work?
* Change mouse cursor to indicate tool
* Use signals to properly update color and reflect changes
* "Preview" of what the brush currently looks like? (Would also help debugging, actually.)
* CSS styling: no figure margin, default white background, etcetera

## Swatches (Optional)

* Display a few default colors + brush settings
* When clicked, it uses those
* You can also save your current COLOR or BRUSH, and it will add it to the list. (Through localStorage, so it's persistent.)

## Polishing

* Add this all throughout the course + explain its existence at the start/overview
* Nicer defaults