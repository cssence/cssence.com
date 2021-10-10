---
layout: article.pug
type: c-code
title: "Loading Spinner"
description: "Single color variant of popular alternate version."
thumbnail: {type: image/png}
published: 2016-04-06T05:39:00Z
deprecatedUrl: /code/2016-04-06-loading-spinner-currentcolor
codepen: https://codepen.io/cssence/pen/bpYQqv
---

# Loading Spinner

Single element solutions for a loading spinner are quite common. When using infinite rotation on an element that has a rounded border we usually change the color of one of the four borders, otherwise we would not see the rotation. Consider the following …

```css
@keyframes rotation {
  to { transform: rotate(1turn); }
}
.loading {
  display: block;
  position: relative;
  padding-top: 4.25em;
  color: rgba(0,0,0,.5);
  text-align: center;
}
.loading::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 50%;
  height: 4em;
  width: 4em;
  margin-left: -2em;
  border: .375em solid currentColor;
  border-right-color: rgba(0,0,0,.8);
  border-radius: 50%;
  animation: rotation .8s linear infinite;
}
```

In this example however I keep `border-color` as it is and change `border-style` instead.

```css
.loading::before {
  /* no border-right-color thank you */
  border-right-style: double;
}
```

What we get looks like a snake being trapped inside of a ring.
