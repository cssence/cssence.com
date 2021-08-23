---
layout: article.pug
type: c-code
title: "CSS Variables in Style Attributes"
description: "HTML for content, CSS for styling. What about the HTML style attribute?"
thumbnail: {type: image/png}
published: 2020-01-24T15:23:07Z
syndication:
  - url: https://codepen.io/cssence/pen/wvBOGjQ
  - url: https://twitter.com/cssence/status/1220733127670345728
    published: 2020-01-24T15:40:32Z
conversation:
  - url: https://twitter.com/mmatuzo/status/1220735951787347968
    text: "[@cssence](https://twitter.com/cssence) Thanks for the shoutout! 🤗"
    author: {url: https://twitter.com/mmatuzo, name: "Manuel Matuzović"}
    posted: 2020-01-24T15:51:45Z
  - url: https://twitter.com/shadeed9/status/1220738538230157313
    text: "[@cssence](https://twitter.com/cssence) Thanks for the link!"
    author: {url: https://twitter.com/shadeed9, name: "Ahmad Shadeed"}
    posted: 2020-01-24T16:02:02Z
---

# CSS Variables in Style Attributes
^ For increased separation of concerns.

I use CSS variables, also called custom properties, a lot lately. Even more so, with the [latest redesign of my site](/2019/just-launch/), they became my benchmark for [Cutting the Mustard](https://responsivenews.co.uk/post/18948466399/cutting-the-mustard). Browsers that do not support CSS variables&#8202;&ndash;&#8202;I’m looking at you, Internet Explorer&#8202;&ndash;&#8202;will get raw HTML with (almost) no CSS applied. As a result, IE users would be better off [printing my site,](/2015/print-first/) but I digress.

## What if stylesheets do not load, or you do not want them to load?

I started giving workshops on accessibility not too long ago, and when I do, I always refer them to this handy [Six Things Guide](https://www.matuzo.at/blog/beyond-automatic-accessibility-testing-6-things-i-check-on-every-website-i-build/) by [Manuel Matuzović](https://twitter.com/mmatuzo). One of the things he recommends is removing all styles. If this trick is already part of your tool belt, you most likely have a bookmarklet or browser plugin that does this for you. If not, a quick way would be to open developer tools, and remove the document `<head>`. This should already give you a raw HTML document with only browser default styling applied, unless there are a lot of `<style>` declarations inside the document body (something that is getting more common these days), in which case you would have to hunt down those elements and delete them too. But doing all this won’t eliminate the declarations that have been set directly with `style` attributes.

In an ideal world, there are no style attributes. We only want external stylesheets, to achieve content and style separation. But let’s take a look at reality instead.

Even this site uses style attributes. [Articles filed under Code](/code/) (including this one) end with [a link to the demo on CodePen.](#showcase) Back in the day each link served as a hook and got replaced by the actual demo running inside an `<iframe>`, but [I’ve removed the CodePen script that does that.](/2018/data-protection-rules/) To make the now untouched link more prominent (and to increase visual appeal), I add the article’s thumbnail image via style attribute. But the way I do this has changed.

## Setting CSS variables directly in the style attribute

[“Weird but cool,”](https://twitter.com/css/status/1194673806264152064) CSS-Tricks wrote when they featured [this article about setting CSS variables inline](https://ishadeed.com/article/css-variables-inline-styles/) by [Ahmad Shadeed.](https://twitter.com/shadeed9)

I assume you already know how my thumbnail image handling has changed. Let’s apply the knowledge from the aforementioned article and replace the inline `background-image` directive with a custom property.

```html
<!-- OLD, background image is applied directly. -->
<p class="codepen" style="background-image:url(/thumbnail.png)">…</p>

<!-- NEW, "background-image: var(…);" must be set in stylesheet. -->
<p class="codepen" style="--url-thumbnail:url(/thumbnail.png)">…</p>
```

What difference does it make? Not a lot, but the latter gets us closer to having styles only in CSS. With this approach, removing all stylesheets from the document leaves you with style attributes that do not style anything.

If you view this page as raw HTML, with no stylesheets applied, nowadays everything is fine because the background image is specified using custom properties. Before the change (shown on the left in the image below), the dark background of the image made it hard to read the link text.

<p class="standout"><img src="/2020/css-variables-in-style-attributes/before-after.png" alt="Deactivating stylesheets in the old approach does not eliminate all the styling, because things that are set in style attributes are still applied."></p>

Tempting to think we handed ourselves a neat little accessibility improvement, but usually stylesheets _do_ load, so this is really more for debugging purposes. In other words, going the extra mile on **HTML for Content, CSS for Style** is all we got from this? Not quite, bonus point #1 described below is a genuine advantage.

### Bonus points

&#49;. If we use custom properties, we are no longer limited to the HTML element with the style attribute itself. We can let the pseudo-generated content do the styling, e.g. `::before`.

```css
.element-with-style-attribute::before {
  content: var(--url-thumbnail);
}
```

&#50;. We could even use the presence of the inline style variable to apply the additional styling, like so.

```css
[style*='--url-thumbnail'] {
  background-image: var(--url-thumbnail);
}
```

&#51;. To achieve the ultimate separation of concerns, ideally we should set data attributes and refer to them in our stylesheets, but the following is not (yet) possible. Let’s go crazy another time.

```css
/* This is invalid CSS at the time of writing! */
[data-thumbnail] {
  background-image: attr(data-thumbnail);
}
```
