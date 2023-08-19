---
title: "Transitions & Animations"
weight: 26
type: "article"
codemirror: true
---

@TODO: Transition property (the easy, quick way)

@TODO: Animations => two steps: 1) define; 2) use


* Counters => RESPOND
* Variables => RESPOND
* Math Functions => RESPOND
* Advanced Selectors (combinators, attr-selectors, ...)
* Media Queries (also @supports?) => RESPOND
* Web to Print (@page, paged.js, widows, orphans, break-before, ...)
  * Pseudo => :left, :right 
* Forms 
  * About the weird default styling for input elements
  * Pseudo-Classes: focus, checked, disabled/enabled, valid/invalid, required/optional, in-range/out-of-range, read-only/read-write 
  * Pseudo-Elements: placeholder, file-selector-button, the messy multitude of other elements
* Tables (same as forms)
  * Pseudo-Classes: nth-child, nth-of-type 
* Text III  => `text-overflow`, `writing-mode`, `text-transform`, `text-shadow` 
  * ::spelling-error/::grammar-error?  (though unsupported right now)
  * Text-Shadow: give example on how to set outlines or improve legibility that way
* Interactivity
  * Media (Images, Video & Audio?) => Pseudo-Classes: paused, playing 
  * user-select, cursor, pointer-events
  * ::backdrop, modals/popups, fullscreen?
* Conclusion
  * Clearly mention and recommend CSS preprocessors.



@TODO: Explain CSS comments early on + add `transparent` as the "invisible color" or "no color" option

@TODO: Where to explain that images are displayed at FULL SIZE by default? + The "margin: auto" trick for centering?

@TODO: Where to explain `box-sizing` (and the universal selector `*`)?? Feels like it should be early on, as it's a big deal. At the box model?

@TODO: Unexplained = declaring the four sides separately (padding-left, padding-right, shorthands). It's just messy and not that useful at this moment.

  Maybe move the explanation of "we're not going to do shorthand declarations in this tutorial" more to the start?

@TODO: Grid Complete Article




### Advanced Selector

_What if I want to select a different element than first or last?_ You can! But it requires a pseudo-class with an extra value, which needs some explanation.

* `nth-child(formula)` = selects children according to the given formula
* `nth-of-type(formula)` = selects children according to the given formula

