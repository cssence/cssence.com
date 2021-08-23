---
layout: article.pug
type: c-code
title: "::first-letter Test Page"
description: "You think it’s easy to determine the first letter of a sentence? Think again!"
thumbnail: {type: image/png}
published: 2018-07-19T08:41:00Z
deprecatedUrl: /code/2018-07-19-first-letter-test-page
syndication:
  - url: https://codepen.io/cssence/pen/yqaGqB
---

# ::first-letter Test Page
^ Chasing Unicode Characters

I made a test page for `::first-letter` many years ago, but I couldn’t find it. Which is why I created this revised page. Needless to say, after I finished it I found the original, so this time I [put it on CodePen](https://codepen.io/cssence/pen/yqaGqB) for my future self and everybody else.

My initial test page used floats to create large drop caps, but they accounted for additional problems, which is why I tried to keep things simple.

<figure><img src="/2018/first-letter-test-page/comparison.png" alt="Chrome, Firefox, Internet Explorer and Safari have different approaches when it comes to selecting the first letter."><figcaption>Comparing how different browsers target the first letter of a paragraph. No problem when it comes to letters and punctuation, but once you reach some of the more special Unicode ranges, browser behavior starts to differ.</figcaption></figure>

You’d think that handling something as old as this pseudo-element would have been sorted by now, but on top of inconsistencies I might have even found bugs. Granted, selecting the first letter is [quite challenging.](https://developer.mozilla.org/en-US/docs/Web/CSS/%3A%3Afirst-letter)

Without going into detail here, I’d say Firefox and Safari drew the same conclusions from the specification.
