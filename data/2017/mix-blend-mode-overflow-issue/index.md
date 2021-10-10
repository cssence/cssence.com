---
layout: article.pug
type: c-code
title: "mix-blend-mode Overflow Issue"
description: "Chrome won’t repaint the overflow area after scrolling, so you end up with cut-off text."
thumbnail: {type: image/png}
published: 2017-12-30T10:59:00Z
revised: 2018-01-05T18:00:00Z
deprecatedUrl: /code/2017-12-30-mix-blend-mode-overflow-issue
codepen: https://codepen.io/cssence/pen/mpmMMO
---

# mix-blend-mode Overflow Issue

While trying to add color to background SVG images I noticed some weird behavior in the latest version of Google Chrome (63 at the time of writing) on Mac. While I haven’t fully figured what the issue is yet, for the time being I’ve got it boiled down to this: Whenever an element acts as a container that is constrained in size and you want the overflow to scroll, you better not have anything inside that uses `mix-blend-mode`, otherwise Chrome ~~on Mac~~<ins><sup><a href="#update-2">[2]</a></sup></ins> will choke~~, while Chrome on Windows is fine~~. This only seems to happen when the container in question creates a [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context), say by adding something like `transform` or when applying fixed or sticky positioning.

Somewhat simplified it may look like this …

```css
.parent {
	position: fixed;
	overflow: scroll;
}
.child {
	mix-blend-mode: overlay;
}
```

… but if you are using Chrome ~~on Mac~~, you can check out [the demo on CodePen.](https://codepen.io/cssence/pen/mpmMMO) ~~As mentioned, it does work in Chrome on Windows.~~ Other browsers I’ve tested are Firefox and Safari, and they seem to be fine, so I guess we don’t need to argue on how to interpret [the specification.](https://www.w3.org/TR/compositing-1/#propdef-mix-blend-mode)

## Updates

1. <time id="update-1" class="update" datetime="2017-12-30">December 30, 2017:</time> [Bug filed.](https://bugs.chromium.org/p/chromium/issues/detail?id=798148)
2. <time id="update-2" class="update" datetime="2018-01-05">January 5, 2018:</time> Folks over at Chromium were able to reproduce this on both Windows and Linux, which means [this is no longer limited to Mac.](https://bugs.chromium.org/p/chromium/issues/detail?id=798148#c3)
3. <time id="update-3" class="update" datetime="2018-01-25">January 25, 2018:</time> Bug has been fixed, will be part of an upcoming Chrome release.
