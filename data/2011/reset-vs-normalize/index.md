---
layout: article.pug
type: c-essay
title: "Reset vs. Normalize"
description: "How normalize.css differs from the traditional CSS reset."
thumbnail: {type: image/png}
published: 2011-07-17T21:55:12Z
origin: http://cssence.wordpress.com/2011/07/17/reset-vs-normalize/?draft
---

# Reset vs. Normalize
^ Switching to normalize.css

## It’s all your (de)fault

Browsers have a default way of rendering when it comes to presenting HTML to their audience. That’s why we see bullets on unordered lists in case no style sheet is applied. Needless to say, looking at this default in various browsers, the result looks slightly different. In order to iron out browser inconsistencies, web developers got rid of these defaults, e.g. by using [CSS reset](http://developer.yahoo.com/yui/reset/), something Eric Meyer [came up with in 2004](http://meyerweb.com/eric/thoughts/2004/09/15/emreallyem-undoing-htmlcss/).

So, instead of worrying about defaults, these days many web developers simply override them and build their styles on top of _CSS reset_. As do I. In fact, the lines of code from the original reset.css have been an inspiration when designing the background for the header logo of this weblog.

Over the years, reset.css has been tweaked, more directives have been added, most importantly because HTML5’s new elements and attributes [were desperate to join the party](http://html5doctor.com/html-5-reset-stylesheet/).

<p><img src="/2011/reset-vs-normalize/vs.png" alt=""></p>

## Normalization

Not too long ago, overriding defaults got challenged. The predator being normalization. How does it differ from the brute force method of resetting all defaults? Well, the approach is more gentle. The goal of normalization is to make use of meaningful defaults. Therefore, normalization targets anomalies in certain browsers and provides a fix, in order to achieve a consistent default.

Or, to quote [the normalize.css website](http://necolas.github.com/normalize.css/):

> Normalize.css is a customisable CSS file that makes browsers render all elements more consistently and in line with modern standards. We researched the differences between default browser styles in order to precisely target only the styles that need normalizing.

When I first looked at normalize.css, the attention to detail that has been woven into it immediately meet the eye. On top of it, browser-specific features have been documented really well.

### Pros

* In tools like Firebug you’ll see fewer overrides of overrides.
* Fewer overrides lead to better performance (but these differences might be minuscule).

### Cons

* Even minified it is way bigger than reset.css.
* Does not validate out of the box, with all the included Internet Explorer hacks.

I’m already using normalize.css for my most recent projects. I hesitated at first, but when [HTML5boilerplate](http://html5boilerplate.com) switched from reset to normalization, I was All Systems Go. _Course laid in, captain!_

## How to end up with valid CSS?

Depending on the how you aid Internet Explorer, you can either 1. extract all hacks from normalize.css and put it in a separate file you include with conditional comments, or 2. replace underscore hack and star hack with [IE specific classes](/2011/farewell-css-hacks/).

To clarify: In the first approach, you’ll move all invalid CSS to an additional file only IE users will get. So the second file does not validate, since the hacks are still there.

I myself use a combination of both approaches. I do not want to send IE specific crap to users of standard compliant browsers, and I have no troubles penalizing IE users with an additional HTTP request. In case you are wondering, yes, I’m aware of the issues that might come with those conditional comments.

## No copy/paste

No matter what technique you’ll end up with, both files - reset.css and normalize.css - are not meant to be copied and pasted. If you really want to do it well, you have to extract only the parts you’ll need for your site. Although it takes lots of effort, in doing so you only deliver CSS data to your client that is actually needed.

In the meantime, I’ll be thinking about whether or not to update the background of my main logo.
