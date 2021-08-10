---
layout: "article.pug"
group: "essay"
title: "Data Protection Rules!"
description: "Turning regulations into something positive."
thumbnail: {type: "image/jpeg"}
published: 2018-12-30T08:08:00Z
deprecatedUrl: "/blog/2018-12-data-protection-rules"
syndication:
  - url: "https://medium.com/@cssence/data-protection-rules-3103c36f504c"
    published: 2019-01-06T06:35:06Z
  - url: "https://twitter.com/cssence/status/1079362372127653888"
    published: 2018-12-30T13:03:37Z
---

# Data Protection Rules!
^ My personal GDPR initiative

With great interest I read about [privacy enhancements](https://gettalong.org/blog/2018/privacy-enhancements.html) by [Thomas Leitner](https://twitter.com/_gettalong), where he explains how the [General Data Protection Regulation (GDPR)](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) by the _European Union_ inspired him to make some changes on his site. I thought about doing something similar, but this was not the kind of topic that makes you drop everything else. So nothing changed for several months. In October [Apple CEO Tim Cook chimed in](https://www.bbc.com/news/technology-45963935), and I finally took action during the Christmas Holidays.

## Turning regulations into something positive

General Data Protection Regulation? Sounds fun. Wrong.

But you can use such regulations to reflect on the innards of your site. In my case it was simple. I **do not** collect any data. No tracking. Nothing at all. But the way the web works, this does not mean I can stop here. Whenever you see source code on this site, [PrismJS](https://prismjs.com/) is used for syntax highlighting. PrismJS has always been part of this site, i.e. it is not loaded from a remote source. If no remote server is needed to fulfill your request, none of your data needs to be transferred there, so no problem. Which meant I had to find the parts that **do** point to a remote source.

My search revealed two culprits, 1. Google web fonts, and 2. that [CodePen script](https://blog.codepen.io/documentation/features/embedded-pens/) that turns links into `<iframe>`-embedded live demos. This is how I handled the situation:

1. **Web font:** Instead of hosting _Open Sans_ myself, I simply removed the font. It was only used for headings anyway, the body text already relied on whatever serif fallback font your browser offers.<!-- I had a serif web font in place, but I removed it some time after that [2016 redesign](/2016/redesign) improve the site performance.-->
2. **Live demos:** I’ve removed the script altogether, so each link to CodePen remains a link, but they now look like click-to-play rectangles with thumbnail background images.

Both measures led to increased performance, but you could quibble over the not-as-great experience. Well, it depends. If you use a browser extension like [Privacy Badger](https://www.eff.org/privacybadger), said CodePen script never got executed. And maybe you have [turned off web font loading, as I did](/2018/no-webfont-no-cry).

With these changes in place, no matter which page on cssence.com you look at, your IP address won’t be transferred to a third party location anymore. Sure enough, your IP address will be transferred to the server that hosts my site, which happens to be the awesome [Netlify](https://www.netlify.com), but if a regulation would forbid that, there won’t be a web anymore.

<figure><img src="/2018/data-protection-rules.farewell-fun-footer.png" alt="No stylesheets were harmed while making this website. Other assets were not so lucky. One font did suffer."><figcaption>The original fat footer on this website included a cheerful disclaimer stating that stylesheets were treated properly (and web fonts poorly). Now that I no longer use web fonts, I put the footer on a diet. Given how boring the current footer looks, you could conclude that Data Protection Initiatives suck the fun out of everything.</figcaption></figure>

## Privacy, center stage

Last year I proclaimed that [2017 was the year of accessibility](/2017/accessibility-for-everyone). If you consider everything that happened in 2018, from [Mark Zuckerberg’s testimony](https://www.nytimes.com/2018/04/10/us/politics/mark-zuckerberg-testimony.html) to the record number of people affected by [data breaches](https://www.businessinsider.de/data-hacks-breaches-biggest-of-2018-2018-12?op=1), then you’ll remember 2018 as the year of Privacy and Data Protection. Or the lack of those things.

At the very least, the topic got the deserved attention, so even average Joe should be more informed after everything that has happened. For all those companies out there (the one I work for included), it took enormous efforts to implement measures to follow the new Regulation. But it is a good thing in the right direction.

In case you ever wondered why you are never forced to consent to the use of cookies on cssence.com, nor any other annoyance the web has to offer, take a look at my [Privacy Policy](/about/privacy) page.
