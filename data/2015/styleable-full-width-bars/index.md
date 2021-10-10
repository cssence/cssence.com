---
layout: article.pug
type: c-code
title: "Style-able Full-Width Bars"
description: "Full-width backgrounds on individual regions, without additional elements."
thumbnail: {type: image/png}
published: 2015-08-10T11:40:10Z
revised: 2015-08-16T11:35:13Z
deprecatedUrl: /code/2015-08-10-styleable-full-width-bars
codepen: https://codepen.io/cssence/pen/oXVpWj
---

# Style-able Full-Width Bars

There are many ways to align page text in a centered column while still being able to apply full-width backgrounds on individual regions. How about one without the need for additional elements?

Instead of creating a centered  `.container` like this …

```css
.parent.container {
  width: 32em;
  margin: 0 auto;
}
```

…, which then contains one or more children breaking out from center so you can apply a full-width background on them, let us add ` .container` to every child. These children now no longer need a parent and you can use `padding` instead. To make this work we let `calc()` do the magic.

```css
.orphan.container {
  padding: 0 calc(50% - 16em); /* ½ of desired width, e.g. for 32em we have to use 16em */
}
```

Good to know:

* Requires no nested elements just for adding style hooks.
* The actual width is not specified anywhere but implied, see padding.
* Does not (need to) work in combination with min/max-width.
* Does **not** cause an accidental horizontal scrollbar.

So much for the overall concept. Make sure to check out the result where I added some media query goodness.
