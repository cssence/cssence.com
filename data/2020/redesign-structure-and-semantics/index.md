---
layout: "article.pug"
group: "editorial"
title: "Re: Design - Structure and Semantics"
description: "URLs and HTML. The foundation of every website."
thumbnail: {url: "/2020/redesign/index.png"}
published: 2020-05-14T19:27:00Z
revised: 2020-07-01T21:47:00Z
syndication:
  - url: "https://twitter.com/cssence/status/1261184022144847872"
    published: 2020-05-15T06:37:57Z
conversation:
  - url: "https://twitter.com/cssence/status/1261219566266527749"
    text: "Now that all pages on my site start right with the content, as hinted in [@vasilis](https://twitter.com/vasilis)’ thesis “Exclusive Design”, I wonder: People relying on assistive technology, did you get so used to website crap that not having to bypass a header/navigation with a lot of links seems weird? #a11y"
    posted: 2020-05-15T08:59:11Z
  - url: "https://twitter.com/cssence/status/1261220031054123008"
    text: "Maybe that’s a question I should ask the expert [@LeonieWatson](https://twitter.com/LeonieWatson) directly…<br>[twitter.com/cssence/status/1261219566266527749](https://twitter.com/cssence/status/1261219566266527749)<br>#HTML #a11y"
    posted: 2020-05-15T09:01:02Z
  - url: "https://twitter.com/cssence/status/1261346286835511296"
    text: "I’ve already mentioned it in the article, but to reiterate: [@netlify](https://twitter.com/netlify) redirects are *chef’s kiss*"
    posted: 2020-05-15T17:22:44Z
  - url: "https://twitter.com/cssence/status/1265588600885968898"
    text: "Yes! This is the kind of tweet I wanted to link to when I wrote [this].<br>I’ve updated the article to include the Sara&Bruce™ reference.<br>[twitter.com/brucel/status/1265577433199267840](https://twitter.com/brucel/status/1265577433199267840)"
    posted: 2020-05-27T10:20:10Z
---

# Structure & Semantics
^ Redesign pt.1

<div class="passage"><style>
@media (min-width: 40em){.passage{display:grid;gap:0 1.75rem;grid-template-areas:'intro list' 'note note';grid-template-columns:1fr 1fr;align-items:start}}
.passage ol{counter-reset:part;list-style-type:square;grid-area:list;margin-top:.5rem;padding:1.25rem .875rem .5rem;border:1px solid var(--color-bg-subtle);border-radius:var(--border-radius)}
.passage li::before{counter-increment:part;content:"Part " counter(part) ": ";font-variant-numeric:lining-nums tabular-nums;font-weight:600}
.passage p{grid-area:note}
.passage style+p{grid-area:intro}
</style>

This is Part One of a <strong id="3-part-blog-series">Three Part Blog Series.</strong> Although the focus of this Editorial series is an in-depth look at the [latest redesign of this site](/2019/just-launch/), you may read these posts as letters of appreciation to the [Basics of the Web.](/2016/webdesign-basics/)

<ol aria-labelledby="3-part-blog-series">
<li>Structure &amp; Semantics</li>
<li><a href="/2020/redesign-style-and-delight/">Style &amp; Delight</a></li>
<li><a href="/2020/redesign-superfluous-and-advanced/">Superfluous &amp; Advanced</a></li>
</ol>

The order of the three parts is not random, I wrote about the most important part first. While I did kick off the redesign of this site with a launch in late 2019, it has since turned into an ongoing incremental journey. But the structure and semantics&#8202;&mdash;&#8202;mainly URLs and HTML&#8202;&mdash;&#8202;won’t change a lot anymore, if at all.

</div>

## It all starts with URLs

Like I said years ago, in the aftermath of my [JavaScript Wars essay](/2016/the-javascript-wars/):

> There is another building block for the web, one that is more important than HTML, CSS and JavaScript combined. It all starts with URLs.

While my latest redesign did include lots of visual changes, the even bigger part has been a complete reorganisation of the content. Before the change, my posts were split up into the sections they belonged to, i.e. all essays have been served under `/blog`, while my tweets were located under `/gossip`. These folder names have also been used to serve the index pages, [nice hackable URLs.](https://adactio.com/journal/1197) But this approach wasn’t very flexible, and sometimes the lines between those sections were blurry.

After a lot of back and forth, I decided to use the year as the top-most (and only) way to structure the content. The URLs are still hackable, so `/2020` lists [posts from the year 2020.](/2020/) But years are just one type of index, I still have [sections](#navigation), even though I’m using new names. Then and now, sections list only the ten most recent posts. Contrary to that, the year-based index pages show all posts of that year, so the redesign neatly solved my _I need an archive_ issue.

### Link rot

<q>Link rot is the entropy of the web,</q> says Jeremy Keith, and he [even bet on it.](http://longbets.org/601/) People don’t live forever, nature has four seasons, there is always decay, which is a good thing. But when it comes to URLs, I think we have an obligation to keep them alive as long as possible and feasible.

Somewhere out there, web sites are still linking to my posts using those now deprecated URLs. This includes links in content I myself have created, but on other services that are out of my control, mainly Twitter. As I cannot update my tweets, old links to my site would reach [a dead end.](/404/) Luckily there are _redirects,_ and thanks to my host [Netlify](https://www.netlify.com/) I have an easy way to specify them, so old URLs remain intact. For example, my aforementioned »JavaScript Wars« essay can still be reached via the no longer used URL `/blog/2016-11-the-javascript-wars`; the browser gets instructions to forward the request to `/2016/the-javascript-wars`.

But enough about URLs.

## HTML

None of them fancy _Single Page Applications (SPA)_ would exist without at least a mouthful of HTML. SPAs typically give you an empty container, only to put a script in charge of getting your content. This site is no SPA, each request delivers a full page. FYI, that makes sense for a web log. Ah yes, the content, this is where it starts to get interesting.

### Heading level one

[»More death to more bullshit«](https://exclusive-design.vasilis.nl/more-death-to-more-bullshit/), a chapter in Vasilis van Gemert’s thesis »Exclusive Design«, has been my inspiration to try out something that websites did in the last century, but at some point stopped doing.

> Almost all webpages start with a navigation with all kinds of links that try to convince you to go to another page. If you think about this for a minute it sounds ridiculous. Why would you want to start a webpage with pointing people in other directions when they just followed a link to this specific page?

He argues that we should get our priorities straight, which I did. Now every page on this site starts right with the content, specifically with the page title.

As I will show you in [part 2](/2020/redesign-style-and-delight) of this series, this is not just about placing the navigation and other things further down, only to mess with source order later, using styles to rearrange content. No. I’ll let you know how I still got something that visually looks like a classic web site header.

Starting with the content means there is no need for skip links. I did add some, but they might not even count. They are at the end of each page and always visible. They take you back to the top or other places on the current page.

### Solved issues

Every so often, I encounter tweets that say something like <q>it is 2020 and there are still blog posts that do not show the **date of publication.**</q> [(Most prominently, Sara and Bruce told me so.)](https://twitter.com/brucel/status/1265577433199267840) Well, that was something [my 2016 redesign](/2016/redesign/) didn’t properly take care of. All my pages did show when they were published and/or last updated, but the information was placed after the page content, together with other metadata. I’ve decided to duplicate the date, so I can also show it up top, where it is more common.

Last but not least, I’ve added a proper heading (level 3) to each individual **comment**, a shortcoming I wasn’t even aware of, and ensured that all headings have unique IDs, so they can serve as anchor link targets.

### In closing

To get a really good grasp how each page is marked up, you should look at my site without any styles applied. You may have your own way to accomplish this, but this will even become a feature when I find the time to add this to my [Settings](/settings/) page.

<figure><img src="/2020/redesign-structure-and-semantics/x-ray.png" alt="The Inspector tab of Firefox’s developer tools, with some elements inside document body expanded."><figcaption>These are the outermost HTML elements of this page. Also depicted in this screenshot: One of the few <code>&lt;div&gt;</code> elements, never more than five per page.</figcaption></figure>
