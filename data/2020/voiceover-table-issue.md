---
layout: "article.pug"
group: "code"
title: "VoiceOver Table Issues"
description: "Do not feed an HTML table without display:table to VoiceOver (Mac)."
thumbnail: {type: "image/png"}
published: 2020-05-06T16:44:03Z
revised: 2020-05-07T05:04:55Z
syndication:
  - url: "https://codepen.io/cssence/pen/LYpQypY"
  - url: "https://twitter.com/cssence/status/1258101829222699009"
    published: 2020-05-06T18:30:25Z
conversation:
  - url: "https://twitter.com/cssence/status/1258102480182837249"
    text: "Yes, that last example in my CodePen I took from an MDN article, but it looks like it came straight from [@htm_hell](https://twitter.com/htm_hell) 😈<br>[developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Row_Role)"
    posted: 2020-05-06T18:33:00Z
  - url: "https://twitter.com/mmatuzo/status/1258112810476875776"
    text: "[@cssence](https://twitter.com/cssence) Yes 🙂<br>[adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html](https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html)"
    author: {url: "https://twitter.com/mmatuzo", name: "Manuel Matuzović"}
    posted: 2020-05-06T19:14:03Z
  - url: "https://twitter.com/cssence/status/1258114393453273088"
    text: "[@mmatuzo](https://twitter.com/mmatuzo) Thanks so much, Manuel. 🙌<br>Should have asked earlier. 😁"
    posted: 2020-05-06T19:20:20Z
---

# VoiceOver Table Issues
^ Do we have to say “Goodbye” to flex/grid table rows?

Today at work I’ve been debugging an accessibility issue with one of our more complex tables. After several hours I drew the conclusion that VoiceOver on Mac trips up on tables that have `display: table` taken from them. It might still recognize it as a table, but you can no longer navigate the cells inside.

I’ve tested VoiceOver on Mac (no iOS) in Safari, Chrome<ins><sup><a href="#update-1">[1]</a></sup></ins> and Firefox. Results are all pretty much the same across browsers.

While you should always have proper semantic HTML table markup, there are a lot of good reasons to apply styling so they end up looking less like tables, e.g. to create responsive tables on different screen sizes, or to have cells that can be expanded and collapsed. Especially table rows are good candidates for turning their cells into `flex` or even `grid` items.

That said, I still need VoiceOver users to be able to navigate the table content as intended. <del>So unless I made a mistake in my tests,</del> I guess I have to go back to `display: table` and `table-layout: fixed`.

If you have any experience in this regard, please let me know in the comments.

## Confirmation & Updates

<time id="update-1" class="update" datetime="2020-05-07">May 7, 2020:</time> First of all, thanks to Adrian Roselli and Manuel Matuzović I’ve got confirmation. According to the link [Manuel sent me](#comment-2), Adrian already wrote an [excellent article on the subject](https://adrianroselli.com/2018/02/tables-css-display-properties-and-aria.html), and now I also know that this is **not limited to VoiceOver.** NVDA on Windows is no different, because the browsers strip away the table information, leaving screen readers clueless.

Best of all, Adrian keeps adding additional information, in his most recent update he highlights that Chrome 80 fixed the issue. Bug is still there in Safari and Firefox, so if you are using one of them, you may head over to my CodePen for a test.
