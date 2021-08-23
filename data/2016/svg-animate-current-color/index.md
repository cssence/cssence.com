---
layout: article.pug
type: c-code
title: "SVG currentColor"
description: "A potential issue while transitioning to currentColor used in SVG fill."
thumbnail: {type: image/png}
published: 2016-06-02T09:19:00Z
revised: 2016-06-02T12:42:16Z
deprecatedUrl: /code/2016-06-02-svg-animate-current-color
syndication:
  - url: https://codepen.io/cssence/pen/RRNvQX
  - url: https://twitter.com/cssence/status/738350017669435392
    published: 2016-06-02T12:42:16Z
conversation:
  - url: https://twitter.com/cssence/status/738350017669435392
    text: "SVG fill + transition + currentColor: I’d happily file bugs, but which browser gets it right?<br>[codepen.io/cssence/pen/RRNvQX](https://codepen.io/cssence/pen/RRNvQX)<br>cc [@LeaVerou](https://twitter.com/LeaVerou)"
    posted: 2016-06-02T12:42:16Z
---

# SVG currentColor

Color transitions on SVG paths can be tricky, as browsers behave differently when it comes to transition property `color` and `fill`. Especially when `currentColor` is involved.

This was something I would have needed for the navigation on this site, but I ran into browser issues. In the end I used a slightly different solution and specified a handful of actual color values instead of using the `currentColor` shortcut. But I made this pen to check if browser behavior changes over time.
