---
layout: article.pug
type: c-essay
title: "Farewell CSS Hacks"
description: "It is time to remove all CSS hacks that target Internet Explorer."
thumbnail: {type: image/png}
published: 2011-06-30T21:48:11Z
syndication:
  - url: http://cssence.wordpress.com/2011/06/30/farewell-css-hacks/?draft
---

# Farewell CSS Hacks

Let’s face, Internet Explorer is the browser we need to work our way around the most.

Getting some JavaScript to work in IE is one thing, styles being applied in the way you want is another. To do the latter, we have CSS hacks to target specific version of IE, by exploiting some weird behavior that only occurs in a that exact version. We even named those hacks. Underscore hack, star hack, the list goes on.

The problem with all those CSS hacks: They generate CSS that simply does not validate.

## A better way

Take a look at [this short post on CSS Tricks](https://css-tricks.com/snippets/html/add-body-class-just-for-ie/). It explains how to add class names to either `<html>` or `<body>`. With those class names in place, you can now select any version of Internet Explorer. All thanks to Microsoft’s Conditional Comments, pure HTML, no need to use a script that does some User Agent string sniffing.

```html
<!--[if IE ]>
   <body class="ie">
<![endif]-->
<!--[if !IE]>-->
   <body>
<!--<![endif]-->
```

The only downside: If you add such a class names in front of your regular selector, it will increase specificity, but that is also true for some of the CSS hacks.

That being said, …

I, for one, welcome our root class overlords.

## In favor of hack elimination

Not sold? Still fancy the old hacky way? Here are a few things that should tip the scale in favor for this approach:

* Hacks can backfire in the future. While not highly likely, Microsoft might deliver a fresh version of IE that reintroduces an already fixed bug. And by doing so, a hack meant to target IE6 or IE7 all of a sudden applies to IEx, where x stands for said fresh version.
* Even if you know by heart which hack applies to which version of IE, using classes instead of hacks is way more descriptive. The class name already tells you which IE version each fix is for.
* You can play around by e.g. temporarily setting class `ie7` in IE8 or even Firefox, which might come in handy for debugging purposes. In contrast, the hack itself does not give you this option. Ever tried to tell Google Chrome to fire the underscore hack?
