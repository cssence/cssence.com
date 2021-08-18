---
layout: "article.pug"
group: "essay"
title: "The ‹u› in Group"
description: "A proposal to give the &lt;u&gt; element an additional purpose."
thumbnail: {type: "image/jpeg"}
published: 2015-11-22T08:07:00Z
deprecatedUrl: "/blog/2015-11-the-u-in-group"
syndication:
  - url: "https://medium.com/@cssence/the-u-in-group-c0fb4faf9e06"
    published: 2015-11-22T09:24:00Z
  - url: "https://twitter.com/cssence/status/674881260037283841"
    published: 2015-12-10T09:20:05Z
---

# The ‹u› in Group
^ Sometimes you have to bend the standards

Not a day goes by without learning something new. I have only found out recently that one lesser used single-letter HTML element is still alive and well. I am talking about an inline element that has been with us for a long time, initially to underline text: `<u>`.

Given that CSS took over a long time ago and purely presentational elements <del>were doomed </del><ins>made no longer sense</ins>, I got curious why this one made the cut. Comparable single-letter elements like `<b>` and `<i>` did so because a new purpose has been assigned to them. I assumed this had to be true for `<u>` too, simply because we can still find our underlining friend in the [HTML&nbsp;5.1 working draft](https://www.w3.org/TR/html51/semantics.html#the-u-element).

Indeed it got repurposed, and in quite a specific way. According to [WHATWG](https://www.whatwg.org/),

> [the] _u_ element represents a span of text with an unarticulated, though explicitly rendered, non-textual annotation, such as labeling the text as being a proper name in Chinese text (a Chinese proper name mark), or labeling the text as being misspelt.
> <footer>— <cite><a href="https://www.whatwg.org/specs/web-apps/current-work/complete/text-level-semantics.html#the-u-element">WHATWG HTML5 specification</a></cite></footer>

In case you think the quote above might as well be written in Chinese, because you did not get it, do not fret. It took me some time and [this article on HTML5 doctor](https://html5doctor.com/u-element/) to understand what was going on. So head over there and read for yourself, I am going to wait for you to get back.

Cool, right? The thing is, I blog about Web Design in English, so I don’t need this, do I?

## Degrouping a span of text

The proper markup for a date would be the `<time>` element. Also for time, but never mind. It should contain human readable text representing a date. Quite often that date is not just a month or year, but a combination of these things. In other words, the `<time>` element forms a group, and the members of that group are individual parts of a date.

Now let me suggest the following: On top of the stuff mentioned in the specification, let us use `<u>` for degrouping text. Degrouping, is that even a thing?

Consider the following example, something I use in a similar fashion on my own site.

```html
<time datetime="2015-11-22T08:07:00Z">
  <u class="month">November</u>
  <u class="day">21</u>,
  <u class="year">2015</u>
</time>
```

This is neither Chinese nor misspelt. I need this markup because I am using those elements as hooks, so I can do some nifty styling for the different parts of the date. To be honest, at the time of writing my code is even more complex and I am using `<i>` instead of `<u>`. But I am going to change that, as I would like to argue that the code above makes more sense.

## Reasoning

Why go with `<u>`? Let us look at the alternatives first.

* Sure, I could simply continue to use `<i>`, but starting with HTML&nbsp;5 its purpose is to label a span of text in an alternate voice or mood. No, that’s not what we have here.
* Then we have `<b>`, but semantically speaking this would mean we want to draw attention to that specific text. Again, no.
* Without emphasis on importance, we can also rule out `<em>` &hellip;
* &hellip; and `<strong>`.
* We can always resort to `<span>`. That would even be recommended if style hooks were the sole purpose for this HTML bloat.

My case in point, style hooks are not the sole purpose. Splitting a date into its parts _conveys semantic meaning_, not unlike an <q>unarticulated, though explicitly rendered, non-textual annotation</q>, which is why I have brought `<u>` to the table.

<figure><img src="/2015/the-u-in-group/be-careful.jpg" alt="A reminder to be careful."><figcaption>The author is torn when it comes to whether the sample code used in this article is conform with the specs or not. If you consider reuse, do so at your own risk, as some standardistas might haunt you afterwards.</figcaption></figure>

## Footnote

All semantics aside, in many cases adding that kind of markup won’t be necessary as soon as it can be handled simply by using just CSS. Which is why I support [the call for :nth-everything](https://css-tricks.com/a-call-for-nth-everything/).

Then again, selectors like `:nth-letter` and `:nth-word`, once implemented, might only work for simpler stuff, the moment you are dealing with variable length and the likes it can still be useful to degroup using. So why not let `<u>` do it.
