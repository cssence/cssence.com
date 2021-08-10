---
layout: "article.pug"
group: "code"
title: "Inclusive Toggle Buttons"
description: "Tweaking the ones from “Inclusive Components” by Heydon Pickering."
thumbnail: {type: "image/png"}
published: 2019-12-20T13:14:12Z
syndication:
  - url: "https://codepen.io/cssence/pen/KKwWeze"
  - url: "https://twitter.com/cssence/status/1208024956447145986"
    posted: 2019-12-20T14:02:48Z
conversation:
  - url: "https://twitter.com/cssence/status/1213089975337664513"
    text: "Looking for #a11y research on <code>&lt;label for=&quot;button&quot;&gt</code>. Online search takes me to “labeling buttons”, which is not what I want (see link [twitter.com/cssence/status/1208024956447145986](https://twitter.com/cssence/status/1208024956447145986)). I’ve only been able to test Safari+VoiceOver and Chrome+ChromeVox, looks promising. /cc [@mmatuzo](https://twitter.com/mmatuzo) [@paciellogroup](https://twitter.com/paciellogroup)"
    posted: 2020-01-03T13:29:22Z
  - url: "https://twitter.com/aardrian/status/1213290511047569410"
    text: "[@cssence](https://twitter.com/cssence) [@mmatuzo](https://twitter.com/mmatuzo) [@paciellogroup](https://twitter.com/paciellogroup)<br>Much more context needed. Are you trying to apply <code>&lt;label&gt;</code> to a <code>&lt;button&gt;</code> element? What is “auxiliary labeling”?"
    author: {url: "https://twitter.com/aardrian", name: "Adrian Roselli"}
    posted: 2020-01-04T02:46:14Z
  - url: "https://twitter.com/cssence/status/1213372003085889537"
    text: "[@aardrian](https://twitter.com/aardrian) [@mmatuzo](https://twitter.com/mmatuzo) [@paciellogroup](https://twitter.com/paciellogroup)<br>Exactly. Based on what [@heydonworks](https://twitter.com/heydonworks) did in the new “Inclusive Components” book, where he uses <code>aria-labelledby</code> to add a description to Toggle Buttons, I tried the same but used a label for the button, as shown under [cssence.com/2019/inclusive-toggle-buttons](https://cssence.com/2019/inclusive-toggle-buttons)"
    posted: 2020-01-04T08:10:03Z
  - url: "https://twitter.com/cssence/status/1213383155622850561"
    text: "[@aardrian](https://twitter.com/aardrian) [@mmatuzo](https://twitter.com/mmatuzo) [@paciellogroup](https://twitter.com/paciellogroup)<br>And here is the direct link to the working example on CodePen: [codepen.io/cssence/pen/KKwWeze](https://codepen.io/cssence/pen/KKwWeze)<br>W3C HTML spec considers <code>&lt;button&gt;</code> and <code>&lt;input type=&quot;button&quot;&gt;</code> as labelable elements, hence the cross-browser-ness. A niche thing nonetheless, usually the button text <strong>is</strong> the label."
    posted: 2020-01-04T08:54:22Z
  - url: "https://twitter.com/aardrian/status/1213452010114179073"
    text: "[@cssence](https://twitter.com/cssence) [@mmatuzo](https://twitter.com/mmatuzo) [@paciellogroup](https://twitter.com/paciellogroup)<br>If you do not know which provides the accessible name then you will have to test.<br><br>Check what is exposed in the browser so you know which wins in which UA.<br><br>TalkBack and VoiceOver warrant a test as well.<br><br>Also, validate the page, just to be confirm it is cool."
    author: {url: "https://twitter.com/aardrian", name: "Adrian Roselli"}
    posted: 2020-01-04T13:27:58Z
---

# Inclusive Toggle Buttons
^ With a tweak.

The book [“Inclusive Components”](https://inclusive-components.design/) by [Heydon Pickering](https://twitter.com/heydonworks) has finally arrived and I immediately started reading. If you do not have a copy yet, you should [buy one asap,](http://book.inclusive-components.design/) it’s worth every penny.

Chapter One is about [_Toggle Buttons_](https://inclusive-components.design/toggle-button/). Heydon ends the chapter with switches that need “Auxiliary Labeling”. For those, he uses `aria-labelled-by` to tie a label to a button. Made me wonder, why not just use good ol’ `<label>` to do the job?

## Using `<label>` for auxiliary labeling

```html
<!-- Original implementation by Heydon Pickering -->
<span id="notify-email">Notify by email</span>
<button role="switch" aria-checked="true" aria-labelledby="notify-email"><span>on</span> <span>off</span></button>

<!-- Potential tweak, needs testing -->
<label for="notify-email">Notify by email</label>
<button role="switch" aria-checked="true" id="notify-email"><span>on</span> <span>off</span></button>
```

This comes with a bonus, clicking the label now also acts as a trigger for the button. Browsers are fine with this, but I haven’t been able to test screen readers yet. In general, am I missing something here?

To see Heydon’s [full example with my tweak added,](https://codepen.io/cssence/pen/KKwWeze) head over to CodePen.
