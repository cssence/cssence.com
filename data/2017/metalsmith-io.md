---
layout: "article.pug"
group: "editorial"
title: "About Metalsmith.io"
description: "Behind the scenes: The Static Site Generator that renders this website."
thumbnail: {type: "image/jpeg"}
published: 2017-07-13T18:23:00Z
deprecatedUrl: "/about/metalsmith-io"
---

# About Metalsmith.io

## About static site generators

In the early days of web development, there were only static sites out there, and we had a fancy name for the static site generator; I remember it to be “author” or something similar.

Static sites have become fashionable again, albeit limited to smaller projects. Nowadays, static site generators are no longer human beings but lines of code. They let the still required actual humans focus on the content while ensuring that the look and feel of each individual page matches the overall site.

When I [relaunched this site in 2015](/2015/own-your-own-data) (and [again in 2016,](/2016/redesign) but this time for real), I had my own solution in place to render all the pages that make up this website. Eventually I [switched to using Metalsmith](/2017/on-using-static-site-generators) in 2017.

## About Metalsmith

[Metalsmith](https://metalsmith.io/) claims to be extremely simple, and I can vouch for that, as it only reads files from a directory and writes them to another. In between, the files can be manipulated in any way you see fit, but those manipulations are not part of the Metalsmith core, instead they are handled by plugins. And the community created loads of them already. Ideally, after chaining the right plugins together, you end up with all the files you want to publish on your website.

## Server-side simplicity

[Jaiden Mispy‏](https://twitter.com/m1sp) tweeted [this important observation:](https://twitter.com/m1sp/status/874422289420361728)

> Static sites are great for performance but they’re also important for longevity. Not having to maintain server-side code is a **huge** deal.

There are enough potential reasons why (parts of) my website might stop to function, including those where there is nothing I can do about it. But within my realm, it gives me peace of mind knowing that I did not miss an important security update for PHP, that I do not need to worry if the database is still up, and so on.

Whenever you see fresh content on this site, it first went through Metalsmith on my local machine. After that, everything got transferred to the server, where it sits and waits. Born ready. No additional rendering required. When you finally request said content, it will be served for your reading pleasure.
