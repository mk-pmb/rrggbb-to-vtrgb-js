
<!--#echo json="package.json" key="name" underline="=" -->
rrggbb-to-vtrgb
===============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Transform HTML-style color codes into three lines of comma-separated decimal
numbers, suitable for vtrgb. (man 1 setvtrgb)
<!--/#echo -->


* [man page of setvtrgb][man-setvtrgb]

  [man-setvtrgb]: http://manpages.ubuntu.com/manpages/trusty/man1/setvtrgb.1.html


API
---

This module exports one function:

### vtrgb(colors)

`colors` should be an array or string with color codes in RRGGBB
hexadecimal format.
Color codes may optionally be prefixed with `#` (U+0023 number sign).
The string can use space and/or comma as separator.

Returns an array `[r, g, b]`, where `r` is a string that consists of
each color's red component, glued together with commas.
`g` is likewise for the green components, and `b` for the blue components.




Usage
-----

see [the tests](test/).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
