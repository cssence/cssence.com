---
layout: article.pug
type: c-essay
title: "Accessibility for Everyone"
description: "When it comes to accessibility, webhint.io can help you walk the walk."
thumbnail: {type: image/jpeg}
published: 2017-12-10T11:37:00Z
revised: 2018-12-28T07:19:00Z
deprecatedUrl: /blog/2017-12-accessibility-for-everyone
syndication:
  - url: https://medium.com/@cssence/accessibility-for-everyone-47c471d941e3
    published: 2017-12-11T09:51:11Z
  - url: https://twitter.com/cssence/status/939825792531484672
    published: 2017-12-10T12:55:04Z
---

# Accessibility for Everyone

At last, it all came together.

“Accessibility for Everyone” is not only the title of this article, but also a book by [Laura Kalbag](https://twitter.com/laurakalbag) that I bought from [A Book Apart.](https://abookapart.com/) I’m glad I did.

I was pretty sure that 2017&#8202;&mdash;&#8202;for me&#8202;&mdash;&#8202;would be the year of progressive web apps. And it was, but I’ll write about that some other time. Even more so, it turned out to be about accessibility. Work-wise, two month ago I switched from technical consulting back to hands-on web development. Not only have I been offered to work on creating a design pattern library for a large web application, which is already great on its own. Even more important, accessibility finally got management attention. Although there is still no dedicated budget, at least we have in on the radar. Progress.

Where was I? Ah yes, Laura’s book. I read it. It’s awesome. My personal takeaway is that we should not treat accessibility as an add-on or something we **have** to do. Quite the opposite, accessibility is fundamental: Everyone benefits if we make websites accessible. If we start with semantic markup we usually get a site that’s accessible. Then we add more and more stuff and in doing so there is a great chance we screw it up. As a result, the accessibility of our site deteriorates. Which is why it is our job to make sure we don’t.

## Everyone benefits if we make websites accessible

Once this thought became ingrained in the back of my head, it really started to show in the work I did at the office.

What about outside the office? Well, I’ve always been keen on accessibility, and even though I’ve been reading up on the subject lately, this wasn’t news to me. Also, I’ve been digging web standards for [a really long time](/2017/being-online-for-20-years/) now, so for sure my personal pet projects must be accessible, right? Hold that thought for a moment.

Web geeks usually end the year with [24&nbsp;ways](https://24ways.org/), where 24&nbsp;articles help us shorten the wait for Christmas. The [second article this year](https://24ways.org/2017/lint-the-web-forward-with-sonarwhal/) was by [Stephanie Drescher](https://twitter.com/seaotta) about _[Sonarwhal](https://sonarwhal.com/)_<ins><sup><a href="#update-1">[1]</a></sup></ins>. Once you get past the cute logo (a narwhal named Nellie), you’ll notice this tool can help you find issues with your website. According to Stephanie, <q cite="https://24ways.org/2017/lint-the-web-forward-with-sonarwhal/">currently Sonarwhal checks for best practices in five categories.</q> Guess what, accessibility is among them. We’ll get back to that shortly.

Speaking of 24&nbsp;ways, Sonarwhal was not the end of it. The articles on December [4](https://24ways.org/2017/wcag-for-people-who-havent-read-them/) and [7](https://24ways.org/2017/automating-your-accessibility-tests/) have _accessibility_ in the title. Maybe we are on to something.

Granted, accessibility is a big topic, it’s easy to not know where to start. How about&hellip;

## Alt-text for images

Most of us know, images should **always** have an `alt` attribute, where you describe what the image is about. This way we provide an alternative for people who cannot make use of the image itself. Accessibility is just one aspect, adding a description can also be useful in case the image does not load. Leaving the attribute empty is an option if the image description is not essential, either because the image itself is ornamental or it has already been described elsewhere in the markup.

Maybe by now you know where this is going. I checked my own site using Sonarwhal’s web interface, and it was disheartening. While it was true that I did add proper alt-text to all the images in my blog posts, I was surprised to find out that I had forgotten about the images found in the comments of said blog posts. Commenting on my articles is only possible through third parties like Twitter, but I ensure that a copy of each comment is also [hosted on my site for longevity.](/2015/own-your-own-data/) So for the things I am in charge of, I was able to travel back in time to add alt-text where it was missing.

Depending on the amount of images under your control, this can be an arduous task. But even if you are not doing it for past images, how about starting today?

Consider the text I’ve added to an image found in the comments of [this post from last year:](/2016/cssday/#comment-10)

```html
<img src="https://pbs.twimg.com/media/ClJEnmkUYAAP1mE.jpg"
     alt="Yours truly together with web legend Jeremy Keith.
          While I’ve seen him at other conferences before,
          this time I actually talked to him.">
```

This should work, especially when&#8202;&mdash;&#8202;unlike above&#8202;&mdash;&#8202;it is not taken out of context. I am not an expert on what someone who is relying on image alt-text might want to read. For starters, something is better than nothing. In case you want to learn more, I found [Daniel Göransson](https://twitter.com/danielgoransson)’s _[Ultimate Guide](https://axesslab.com/alt-texts/)_ quite helpful.

Did I mention Twitter? [Zach Leatherman](https://twitter.com/zachleat)’s handy _[Twitter Guide](https://www.zachleat.com/web/twitter-guide/)_ reminds us that whenever we post images on Twitter we should also add alt-text for maximum accessibility. Zach also explains how to turn this feature on.

## In closing

So no more images without an `alt` attribute. But I’ve allowed myself to have empty alt-text. Kind of an exception to the rule, my article thumbnail images do not get preferential treatment, so their `alt` attributes remain empty, because I decided they are merely eye candy. On second thought, I admit that they are somewhat contributing to the story, so perhaps I’ll reconsider.

Alt-text is just one step, making and keeping your site accessible in an ongoing journey. Nevertheless, I am glad that I can finally say the following.

- I’ve added proper alt-text to all the non-ornamental images on my site.
- I will keep in touch with (and probably even automate the use of) Sonarwhal to not lose track when it comes to accessibility on my site.
- I’ve turned on image captions on Twitter.

If you have not done the last one yet, do it now. It’s a quick win. And while you are at it, follow [Léonie Watson](https://twitter.com/LeonieWatson) and [the Paciello Group](https://twitter.com/paciellogroup). And make sure Santa puts [Laura’s book](https://abookapart.com/products/accessibility-for-everyone) under the tree. Happy Holidays.

## Updates

1. <time id="update-1" class="update" datetime="2018-12-28">December 28, 2018:</time> Sonarwhal is now [webhint.io](https://webhint.io/).
