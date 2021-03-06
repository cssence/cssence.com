---
indicator: "Editorial"
title: "Re: Design - Superfluous and Advanced"
description: "JavaScript. The optional enhancement."
thumbnail: {url: "/2020/redesign.png"}
published: 2020-11-20T21:40:00Z
syndication:
  - url: "https://twitter.com/cssence/status/1330096143758454786"
    published: 2020-11-21T10:30:07Z
---

# Superfluous & Advanced
^ Redesign pt.3

<div class="passage"><style>
@media (min-width: 40em){.passage{display:grid;gap:0 1.75rem;grid-template-areas:'intro list' 'note note';grid-template-columns:1fr 1fr;align-items:start}}
.passage ol{counter-reset:part;list-style-type:square;grid-area:list;margin-top:.5rem;padding:1.25rem .875rem .5rem;border:1px solid var(--color-bg-subtle);border-radius:var(--border-radius)}
.passage li::before{counter-increment:part;content:"Part " counter(part) ": ";font-variant-numeric:lining-nums tabular-nums;font-weight:600}
.passage p{grid-area:note}
.passage style+p{grid-area:intro}
</style>

This is the Final Part of a <strong id="3-part-blog-series">Three Part Blog Series.</strong> Although the focus of this Editorial series is an in-depth look at the [latest redesign of this site](/2019/just-launch), you may read these posts as letters of appreciation to the [Basics of the Web.](/2016/webdesign-basics)

<ol aria-labelledby="3-part-blog-series">
<li><a href="/2020/redesign-structure-and-semantics">Structure &amp; Semantics</a></li>
<li><a href="/2020/redesign-style-and-delight">Style &amp; Delight</a></li>
<li>Superfluous &amp; Advanced</li>
</ol>

The order of the three parts is not random, the most important one came first. You are reading part 3, which deals with the superfluous and advanced stuff, i.e. JavaScript.

</div>

## Without further ado

In 2016, I had this to say [about JavaScript:](/2016/the-javascript-wars)

> Granted, it can do amazing things, but it also breaks easily if things go awry, and unlike HTML and CSS it does not come with a fail-safe mechanism. Which is why we need JavaScript even less than CSS.

No change of mind in those last four years. With that attitude, and this final part of my redesign series being all about JavaScript, it seems we can keep it short. Is there any JavaScript on this site?

Surprise, yes. For starters, the whole thing [is generated by a static site generator](/2017/metalsmith-io) written in JavaScript. But this blog series is about the visitor’s experience, so we’re talking client-side JavaScript. Is there any?

Again, yes. I wrote a little script that does some feature detection, primarily to ensure support for CSS variables. This is the fork in the road.

* For browsers that don’t, the regular stylesheets will be replaced with supercharged print styles. (Why? Well, if a piece of paper can handle it, maybe Internet Explorer can too.)
* For capable browsers on the other hand I start the progressive enhancement. But so far, the only enhancement is adding [PrismJS](https://prismjs.com/) to apply syntax highlighting.

What I’ve just described has been true even before the redesign, with only minor differences. More recently I came up with quite a few ideas [how to make use of JavaScript on my site,](/settings) if I ever find the time. But none of them are essential, so I wouldn’t mind if they never see the light of day.

## One more thing

Also in 2016, [I did not answer](/2016/twitter-comment-system) how I add **Twitter conversations as comments** to my articles. [Nor did I last year.](/2019/just-launch#comment-5) How about I use this opportunity to give you the harsh truth?

If you print (or remove all styles from) the home page of this site, you’ll notice it says in the footer that I am the curator of this site. Among all other things, I get to decide how comments are presented on every page. Now imagine multiple comments being written in a short period of time for a particular topic. If they belong to different threads, the threads will be presented one after the other, instead of comments being added individually in chronological order. Sounds like something a threaded commenting system can handle, right? Sure, but there’s no such thing here. No system whatsoever. Comments come exclusively from remote sources, mainly Twitter. What’s going on over there can at best be described as chaotic. And let’s not forget, sometimes a series of comments may be a response to an article I’ve written, but at other times a single comment or thread may be it’s _own_ article.

Granted, tweets can be retrieved automatically, and even some of the things I’ve just mentioned can be automated, e.g. by looking at in-reply-to links, but let’s face it: Full control is only possible with manual labor, which is exactly what I’m doing.

_\*Awkward silence.\*_

Let’s get this straight, the <q>manual labor</q> is assigning and grouping comments? No, to this day I haven’t found the time to do even [the fundamentals.](https://indieweb.org/Webmention) Basically everything is done manually, including retrieval from the remote sources. Apologies to those hoping for an open-sourced miracle.

Needless to say, this does not scale well (or at all), but for now I keep it this way.
