---
layout: article.pug
type: c-essay
title: "Diversity in Style"
description: "Looking for the transcript of my @dotCSS talk? Here you go."
thumbnail: {type: image/jpeg}
published: 2016-12-19T07:55:00Z
revised: 2016-12-30T15:45:00Z
deprecatedUrl: /blog/2016-12-diversity-in-style
conversation:
  - url: https://twitter.com/cssence/status/814863792249180161
    id: comment-0
    text: "Looking for the transcript of my [@dotCSS](https://twitter.com/dotCSS) talk? Here you go. [cssence.com/blog/2016-12-diversity-in-style](/2016/diversity-in-style/)"
    posted: 2016-12-30T16:00:42Z
---

# Diversity in Style
^ @dotCSS 2016 #talk #transcript

<style media="screen">
.standoff a[tabindex]{display:grid;grid-template:"▶️";place-items:center;}
.standoff a[tabindex]::before{content:"";grid-area:▶️;z-index:1;width:5rem;height:5rem;border:.25rem solid #fbfdffbb;border-radius:50%;}
.standoff a[tabindex]::after{content:"";grid-area:▶️;box-sizing:content-box;z-index:1;width:0;height:0;border:0 solid transparent;border-left-color:#fbfdffbb;border-width:1.25rem 2rem;margin-right:-2.5rem}
.standoff a[tabindex] img{grid-area:▶️}
</style>

<small>This is the transcript of a talk I gave at [dotCSS 2016](/2016/dotcss/). The [slides](https://cssence.github.io/slides-dotcss2016/) can be found on GitHub.</small>

<figure class="standoff"><a tabindex="-1" href="https://www.dotconferences.com/2016/12/matthias-beitl-diversity-in-style"><img src="/2016/diversity-in-style/index.jpg" alt="Matthias on stage at dotCSS."></a><figcaption>If reading the transcript is not your thing, you can watch the <a href="https://www.dotconferences.com/2016/12/matthias-beitl-diversity-in-style">video of the talk</a> on <a href="https://www.dotconferences.com/">dotConferences</a>.</figcaption></figure>

<h2 id="transcript" class="subtle">Transcript</h2>

Hello! This is nice.

<p class="h2">I want to invite all of you to bring back <em>Design&nbsp;Diversity.</em></p>

“Who is me?” I am Matthias, as you’ve been told, but I also go by [CSSence](https://twitter.com/cssence).

_Design Diversity_, what do I mean with that? Earlier this year, [this happened](https://twitter.com/SaraSoueidan/status/690214878578110464) on Twitter. And I was like, OK, yeah? Websites, boring? Sure!? Do we know about this, as a community? And I had to agree: Yes, websites are getting boring. And there is proof, because we are making fun of it. [Jeremy Karbowski](https://twitter.com/JeremyKarbowski) made [this project](http://adventurega.me/bootstrap/), and there is so much truth in that; if you scroll down all the way [and compare it to] major redesigns these days, they are all looking like that. I wouldn’t mind so much if the user experience would go up, but that’s not the case.

So how do we fix the **boring**? Consider [PolarPolls](https://twitter.com/polarpolls), a popular voting platform. Sadly they [stopped operations](https://web.archive.org/web/20160404060539/http://polarb.com/) a couple of months ago, but [this was their take on tablet screens](https://cssence.github.io/slides-dotcss2016/#/3). [Luke Wroblewski](https://twitter.com/lukew)&#8202;&mdash;&#8202;you all know him, he is <abbr title="Mister">Mr.</abbr> Data himself&#8202;&mdash;&#8202;is doing data-driven decisions on his designs. [According to the data, tablets are] usually held in a landscape orientation with two hands. So there you go, two-thumb operation: You can quickly browse through all the available polls [with your left thumb] and do the actual voting on the right. Cool, hah? But this is hard, it takes time getting used to it. We’ve been trained, the content goes in the center, and here we have this big almost unused space. Hmm?

I always wanted to show [my own site](https://cssence.com/) on a big screen. I’m using _visual imbalance_ on purpose. You have to be considerate of what you put towards your users, because it shouldn’t be too hard to figure things out. The thing with boring sites is we all know them well, so we know what to do. Here we have for example [slightly cut-off elements](https://cssence.github.io/slides-dotcss2016/#/4), and even first-time visitors [should have] a natural tendency&#8202;&mdash;&#8202;if something is slightly cut off&#8202;&mdash;&#8202;to scroll to reveal. So this should work.

Speaking of being considerate of what you [dump towards your users](https://cssence.github.io/slides-dotcss2016/#/5): I am [not showing this to mock](http://www.dpgraph.com/) them. Also, this is not like&hellip; it is now that&hellip; ahem, you all remember last century websites. [Though] they’ve been quite “diverse,” you know this is **not** a call for a Renaissance. Bringing back those sites? No, not at all.

The actual point I’m trying to make: It’s not so much about the final design, it’s more [about] the patterns, the _design patterns_ we have at our disposal. And this is where we seem to be stuck. We have the continuous long scroll on mobile, we have the hamburger menu. We need to expand our repertoire. And to do so, we need to innovate. And innovation can’t be done on localhost, innovation needs to be done out there, in the open&#8202;&mdash;&#8202;from small pet projects to high-traffic websites.

And I think we can do this. Yah, we can set course for a future beyond the boring, a future where [tweets like this](https://cssence.github.io/slides-dotcss2016/#/1) no longer show up, to make the web this great diverse place it was always meant to be, by design.

Thank you.
