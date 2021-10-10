---
layout: note.pug
type: c-note
title: "On Using aria-labelledby for Images"
description: "Gunnar Bittersmann asks about the effect on the alt text."
published: 2021-09-05T18:47:50Z
origin: https://twitter.com/cssence/status/1434589105044795394
conversation:
  - url: https://twitter.com/g16n/status/1434439119850123266
    text: "#a11y question: When the text alternative to an image is implemented using <code>aria-labelledby</code>, there’s no need for <code>alt=&quot;&quot;</code>, is it?"
    author: {url: https://twitter.com/g16n, name: "Gunnar Bittersmann"}
    posted: 2021-09-05T08:51:51Z
  - url: https://twitter.com/cssence/status/1434589105044795394
    text: "Good question, I’d also like to know. Maybe this is similar to an image inside a figure which has a <code>&lt;figcaption&gt;</code> that is already “verbose” enough that the image needs no additional alt. <abbr title=\"If I remember correctly,\">IIRC,</abbr> even in this case you specify <code>alt=&quot;&quot;</code>."
    posted: 2021-09-05T18:47:50Z
---

# On Using aria-labelledby for Images
^ Are we allowed to omit the `alt` tag in this case?
