---
layout: article.pug
type: c-code
title: "YouTube Play/Pause Animation"
description: "Using a simple border #hack to achieve what Youtube recently did. Kind of."
thumbnail: {type: image/png}
published: 2016-03-17T08:42:00Z
deprecatedUrl: /code/2016-03-17-youtube-play-pause-animation
syndication:
  - url: https://codepen.io/cssence/pen/bpgqjm
---

# YouTube Play/Pause Animation
^ Using a simple border #hack

I ended up with a rather weird approach while attempting to recreate the YouTube Play/Pause animation. This is a single element solution without fancy 2D/3D transforms, and as such, dare I say it, rather old school.

To keep things simple I’ve used a checkbox instead of JavaScript to toggle between states. This is how the borders look in their initial state.

```css
span::before {
  border: 0 solid transparent;
  border-left: 2em double #fff;
  transition: border .3s linear;
}
```

And then I essentially make a switch to …

```css
input:checked + span::before {
  border-width: 1em 0 1em 2em;
  border-style: solid;
}
```

Unsurprisingly, browsers perform the transition only for `border-width` but not `border-style`, so that part of the animation is abrupt. I’d like to say that no borders have been hurt while making this example, but I’ll let you be the judge on that one.
