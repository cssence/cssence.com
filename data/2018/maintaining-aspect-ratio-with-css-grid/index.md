---
layout: article.pug
type: c-code
title: "Maintaining Aspect Ratio with CSS&nbsp;Grid"
description: "Turns out there are multiple ways to maintain aspect ratio nowadays."
thumbnail: {type: image/png}
published: 2018-01-21T12:56:00Z
deprecatedUrl: /code/2018-01-21-maintaining-aspect-ratio-with-css-grid
codepen: https://codepen.io/cssence/pen/BJMwwN
conversation:
  - url: https://medium.com/@cssence/thanks-noam-for-the-inspiring-idea-it-gave-me-the-opportunity-to-explore-additional-options-f939f8ac10c1
    text: "Thanks Noam for the inspiring idea, it gave me the opportunity to explore additional options. While turning this into pure CSS by using generated content for the SVG (similar to what Chris did), I ran into some additional quirks such as the need to add <code>line-height:0</code> for certain browsers, but all in all, it works.<br><br>[cssence.com/code/2018-01-21-maintaining-aspect-ratio-with-css-grid](https://cssence.com/2018/maintaining-aspect-ratio-with-css-grid)"
    posted: 2018-01-21T16:45:47Z
  - url: https://medium.com/@realnoam/glad-to-see-the-idea-generate-more-creative-stuff-44508994a399
    text: "Glad to see the idea generate more creative stuff!"
    author: {url: https://medium.com/@realnoam, name: "Noam Rosenthal"}
    posted: 2018-01-21T21:01:00Z # %% WRONG TIMESTAMP
  - unavailable: "technical"
  - url: https://medium.com/@cssence/you-are-right-it-does-matter-in-the-sense-that-it-the-whole-thing-is-somehow-constrained-5e250a5d6179
    text: "You are right, it does matter, in the sense that the whole thing is somehow constrained (otherwise it gets unnecessarily large for demonstration purposes). Nevertheless, even if you remove the body width or specify a width for each container individually you should end up with 16:9 content boxes."
    posted: 2018-01-22T13:15:50Z
---

# Maintaining Aspect Ratio with CSS&nbsp;Grid
^ With the help of an empty SVG

Yesterday [this Medium post](https://medium.com/@realnoam/keeping-aspect-ratio-with-html-and-no-padding-tricks-40705656808b) by [Noam Rosenthal](https://twitter.com/realnoam) was brought to my attention when [CSS Tricks called it](https://twitter.com/Real_CSS_Tricks/status/954760435860873216) a <q cite="https://twitter.com/Real_CSS_Tricks/status/954760435860873216">clever aspect-ratio trick that involves using an inline SVG with a viewBox to push out the size, and CSS Grid to overlay the content.</q>

Before Noam came up with this neat idea, the [percentage padding hack](https://css-tricks.com/aspect-ratio-boxes/) was the only way to maintain the aspect ratio of anything but images. He on the other hand put an empty inline SVG in charge of maintaining the aspect ratio. Clever indeed! But in his solution, the SVG was part of the HTML, which is why I started playing around with it a bit more. I wanted to find out if it could all be done in CSS. Looking at some unused code in his [Pen](https://codepen.io/noamr/pen/mpamVN), I think Noam already tried to achieve something similar.

So here we go. When generating `::before` and `::after` pseudo-elements, we need the `content` CSS property. You probably know that this property [can also take a URL value,](https://developer.mozilla.org/en-US/docs/Web/CSS/content) so we can turn the SVG into a data URI. Doing so without any base64 encoding, we end up with some still readable code. If you take a close look on the `viewBox` attribute in the example below, you’ll notice the we are going to use this example to maintain a 16:9 aspect ratio. Need another aspect ratio? Simply adjust the `viewBox` attribute.

```css
.container::before {
	content: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 9' xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E");
}
```

Using these lines, I’ve been able to rewrite Noam’s example so that the SVG is no longer part of the HTML. If you kept up with CSS Grid, i.e. the work of [Rachel Andrew](https://twitter.com/rachelandrew) and [Jen Simmons,](https://twitter.com/jensimmons) you know that generated content pseudo-elements are treated as grid items. So now, if I simply use the `::before` pseudo-element, I can put the actual content on top of the generated SVG in the same way Noam did.

## Encore

Having done that, I asked myself why not use the original percentage-based approach, but with CSS Grid instead of absolute positioning? So I ended up adding [all three approaches for easy comparison on CodePen.](https://codepen.io/cssence/pen/BJMwwN)

## Now what?

I’d argue that the original approach will still be around for a little while, but it is good to have alternatives.

* Keep using the Percentage-Padding method for better control on how to handle the `overflow`.
* Use the SVG method if applying `position: relative` to your container is not an option, e.g. if your content has children that need to break out in a special way.
* Do some testing before using the CSS Grid + Percentage-Padding method, as there seem to be cross-browser issues. I’ve seen inconsistencies in Firefox and Safari, hopefully I’ll find the time to investigate further.

While researching for this example, I found a number of interesting articles [on the subject.](https://ramenhog.com/blog/2017/05/09/experiments-in-fixed-aspect-ratios) Maybe at some point we might no longer need hacks and we’ll be able to [maintain aspect ratios directly in CSS.](https://www.bram.us/2017/06/16/aspect-ratios-in-css-are-a-hack/)
