---
layout: "article.pug"
group: "essay"
title: "CSS3 is Dead"
description: "Designing for the lowest common denominator is no longer the way to go."
summary: "»CSS3 is dead!« is a call for action. In 2011, designing for the lowest common denominator is no longer the way to go. In addition, it explains why CSS3 doesn’t want to be called CSS3 anymore. That way the title makes sense. Sort of."
thumbnail: {type: "image/jpeg"}
published: 2011-01-26T19:23:37Z
syndication:
  - url: "http://cssence.wordpress.com/2011/01/26/css3-is-dead/"
  - url: "https://twitter.com/cssence/status/32197793019863040"
    published: 2011-01-31T22:05:26Z
---

# CSS3 is Dead

So this is it. The first of [a series of articles](/about/) about <abbr title="Cascading Style Sheets">CSS</abbr>. Pure CSS. No digressions. But instead of frolicking with our shiny new CSS3 features, the headline says: CSS3 is dead! WTF?

## The tipping point

Here we are in 2011, starting another decade. Behind us lies the best decade for CSS so far. Unlike in the old millennium, where CSS has been mainly [an idea on (electronic) paper](http://www.w3.org/TR/REC-CSS1/), browser makers started to implement CSS. CSS1. And later CSS2. And/or CSS2.1. Maybe something in between. At least they thought they did after reading the <abbr title="World Wide Web Consortium">W3C</abbr> specs. Sure, it’s also been a decade with cross-browser implementation issues and hacks. But that came along with the adoption, i.e., the browser support.

Back to the present. CSS has become an integral part of web design. HTML specifications have been designed in order to allow styling mechanisms other than CSS to eventually emerge and coexist, but no dice. Today, thanks to HTML5, whenever you refer to a stylesheet, you no longer need to specify that the type is text/css.

```html
<!-- old: -->
<link rel="stylesheet" type="text/css" href="myfile.css">
<!-- new: -->
<link rel="stylesheet" href="myfile.css">
```

The relationship (`rel="stylesheet"`) says it all. What else would it be? CSS is _the_ standard for styling HTML. Or, as [this graffiti](#figure-1) puts it, CSS is the Godfather of Style.

<figure id="figure-1"><img src="/2011/css3-is-dead/godfather-of-style.jpg" alt="A graffiti I found in Vienna with big letters that say “Godfather of Style”."><figcaption>Maybe the artist wasn’t referring to CSS. Well, anyway.</figcaption></figure>

Nice way to state the status quo, but is there a point here? Patience, I’m getting there.

## CSS3 doesn’t want to be called CSS3 anymore

The other day, I’ve been reading [this blog post](http://sixrevisions.com/css/3-advanced-css3-techniques-you-should-learn/). It shows some nice examples for what the author calls “Advanced CSS3 Techniques”. [CSS3 selectors](http://www.w3.org/TR/css3-selectors/#selectors) being one of these techniques. Made me think. Sure, Internet Explorer up to a certain number has issues dealing with most of these selectors, nevertheless I’ve been using many of them for quite a while now. In fact, I’ve gotten so used to them, how can they be CSS3? Well, not all of them are, but for example `:last-child` is. And I’ve been using that one long before CSS3 had the chance to become a buzzword.

I didn’t immerse myself in the details. Instead, I read [another post](http://www.webdesignerdepot.com/2009/08/5-css3-design-enhancements-that-you-can-use-today/). So what? Stumbling upon blog posts is not uncommon when you browse the web. Right. But then, the craziest thing happened. You’re not going to believe this. Hold on to your mousepads. I read [a third post](http://gizmodo.com/5740244/html-5-just-wants-to-be-html-from-now-on). This one tells us why HTML5 no longer wants to be called HTML5. Because there is only one HTML.

That’s when it hit me. The same is true for CSS3. Why should we care about the version? Of course, right now everybody is shouting from the rooftops: Start implementing CSS3! And that’s a good thing. To create awareness. But I’m glad I didn’t wait for rooftop-noise in order to start using CSS3 selectors. I’ve read about them, some browsers already supported them, they looked neat and powerful. I liked them, so I started using them. Rounded corners? Same thing. Well, there may be special cases. Take the `text-shadow` property. It was introduced in the CSS2 specification. Dropped in version 2.1. And now reintroduced in version 3. So? Was there any browser support in between? It doesn’t matter, it’s just another example that shows us why we couldn’t care less about the CSS version.

What really matters is what browser makers have implemented. Wanna know the best part? All it takes is one browser. If the last decade told us one thing, it’s that waiting for all browsers to implement a CSS feature (correctly) makes no sense&thinsp;—&thinsp;unless you love procrastination. So at this point, it all boils down to the one thing: <abbr title="Lowest Common Denominator">LCD</abbr>.

## Designing for the LCD is a thing of the past

<figure><img src="/2011/css3-is-dead/ie-left-behind.png" alt="Happy browser logos, but Internet Explorer left alone."><figcaption>Yes, LCD, the Lowest Common Denominator (*cough* IE6). It is the single most quoted excuse why someone cannot start using new CSS features. Designing web pages for the LCD suppresses creativity when it comes to CSS.</figcaption></figure>

I’ve been&thinsp;–&thinsp;and I still am&thinsp;–&thinsp;an advocate of [graceful degradation](http://en.wikipedia.org/wiki/Graceful_degradation). Every new project I did start in a modern browser. Granted, it was painful to realize later, how difficult it is to get a desirable result for the less capable browsers. So I used hacks. And I threw in additional tags to my once clean markup. Knowing that later on this will make maintaining the site more traumatizing. These days, the use of powerful CSS properties results in even cleaner markup and even better maintenance. Naturally, the gap to less capable browsers is widening. Therefore, designing for the LCD is no longer the way to go, especially with the attention to detail (read: pixel-perfect).

We must cast off the shackles of the lowest common denominator, and move on. No one blames IE6 for not being state of the art, that browser is about to celebrate its 10th birthday.

Don’t get me wrong, I adhere to the principle that [basic content should be accessible to all browsers](http://en.wikipedia.org/wiki/Progressive_enhancement#Core_principles). But design isn’t content. Sometimes, I go as far as to suggest that IE6 should embrace CSS Naked Day the whole year and display only the text version. Sadly, not a single client accepted this. What to do? Personally, I proceed by simply telling the truth. If you put a price tag on it, clients will start to understand how much of their budget is blown on trying to get pixel-perfect websites for IE6. This must be a thing of the past.

## Conclusion

Now that the lowest common denominator is no longer holding us back, let us go out there and use the freshest CSS available. Use it with vendor prefixes. Use it.

Forget the version number. CSS3 is dead. Long live CSS!
