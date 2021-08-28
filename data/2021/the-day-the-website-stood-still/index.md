---
layout: article.pug
type: c-essay
title: "The Day The Website Stood Still"
description: "On the intersection of progressive degradation and graceful enhancement."
thumbnail: {type: image/png}
published: 2021-08-28T13:25:00Z
syndication:
  - url: https://twitter.com/cssence/status/1432342867377336325
    published: 2021-08-30T14:02:05Z
conversation:
  - url: https://twitter.com/cssence/status/1432344525578686465
    text: "<p>If you haven’t heard of the <em>Cutting The Mustard</em> concept, [@adactio](https://twitter.com/adactio) covers it in his brilliant book “Resilient Web Design”:<br>[resilientwebdesign.com/chapter5/#cuttingthemustard](https://resilientwebdesign.com/chapter5/#cuttingthemustard)</p><p>Actually, read the whole book!</p>"
    posted: 2021-08-30T14:08:41Z
---

# The Day The Website Stood Still

It was more than a day. And it did not stand still.

But let me go back in time a bit.

## Proloque: Life.

Earlier this year my dear wife gave birth, again. So I am now a father of _two_ beautiful children, which brings an abundance of joy. But at the same time, more than ever this meant: All hands on deck. As there are still only 24 hours in a day, everything else had to decrease in importance. To say my blog became an afterthought was an understatement. Which explains the silence in the last couple of months.

During my much needed summer vacation, I found traces of spare time where I could `git commit` to the pet project that is my website. Little changes here and there, all in preparation of something bigger that lies ahead. Unlike my [last major upgrade](/2020/redesign), this time I do not need to hide what I am working on behind closed doors. I can make updates incrementally and deploy a useable state every now and then, which is nice.

## Part 1: Chaos.

After having made one of those incremental updates a couple of days ago, I sent what [worked on my machine](https://blog.codinghorror.com/the-works-on-my-machine-certification-program/) to GitHub. At this point [Netlify](https://www.netlify.com/) took over and got it out there. Usually I wait for it to deploy, then open a couple of pages to check if all is well. Not this time. It was late, so I went straight to bed.

It wasn’t until a few days later, when I realized that I haven’t looked at my site since. But surely it would still be up?

Kind of. My site should look like the right-most version in the [image below](#figure-1). But what I got was the one in the middle.

<figure id="figure-1"><img src="/2021/the-day-the-website-stood-still/versions.png" alt="Screenshots of three different versions of this article on cssence.com."><figcaption>From left to right: This article 1. without stylesheets, 2. on older browsers, 3. in it’s most enhanced form.</figcaption></figure>

This happens to be an alternate theme I’ve added for <del>older browsers</del><ins> Internet Explorer</ins>. Apparently the most essential part in my [Cutting the Mustard](/2020/css-variables-in-style-attributes/) script broke.

The check for CSS custom properties support all of a sudden returned false, so the fallback kicked in, which replaces the regular stylesheet with said alternate version. This is when things got weird, because my incremental update had nothing to do with that.

```js
if (!window.CSS.supports('--:1')) {
	fallback('Browser does not support CSS custom properties.');
	return;
}
```

To top it off, looking at my site on my phone revealed: In the mobile browser it displayed as if nothing had happened. After some debugging I learned that, thanks to a browser update, Firefox had a change of mind. The expression `--:1` is no longer good enough, a proper CSS custom property needs at least a single character after the two hyphens. That was easily fixed, and sure enough everything started working again.

But my site had been broken for a couple of days.

## Part 2: Phoenix.

But has my site been broken for a couple of days?

No.

It may not have been displayed as intended in every browser, but all visitors were still able to consume the content (HTML).

Your stylesheets (CSS) must never interfere with that. Even more important, your scripts (JS) must never interfere with that.

If you know the [progressive enhancement game](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) and play it well, a faulty line in your JavaScript&#8202;&mdash;&#8202;even if it is in your most important script&#8202;&mdash;&#8202;does not derail your whole site.

## Part 3: Revelation.

[“CSS3 Is Dead”](/2011/css3-is-dead/), my first essay, and the reason this site exists, is now more than ten years old. In it, I was still part of team “Graceful Degradation”, but at least I seem to have had already acknowledged the merits of “Progressive Enhancement”. How times have evolved, today I see [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement) as the web’s most important idea.

I’ve shown you my _fallback for less capable browsers_ earlier. Doesn’t that sound a lot like graceful degradation? I guess so.

In [“The State Of Mobile First and Desktop First”](https://www.ishadeed.com/article/the-state-of-mobile-first-and-desktop-first/), Ahmad Shadeed concludes:

> […] I prefer to not stick to a specific approach. Instead, I like to mix them both.

Not only am I with him when it comes to the mobile/desktop design debate, I like to give a similar answer when it comes to degradation and enhancement. No strict either/or, instead use the best tool for the job. (Also, swapping out stylesheets with Javascript might give you [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content), so doing it the other way around would punish those who use modern browsers.)

In hindsight, the _progressive degradation_ I am using for older browers turned out to be a _graceful enhancement_ on the day(s) my website stood still.

Yes, this is not a typo. Nor a pun. But intended.

## Epiloque: The End?

My dear reader, answer me this: How much can your site break, until it stops being useful?
