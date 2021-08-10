---
layout: "article.pug"
group: "essay"
title: "head {display:block}"
description: "Content inside &lt;head&gt; is usually hidden, but it doesn’t need to be."
thumbnail: {type: "image/jpeg"}
published: 2015-10-02T06:27:00Z
deprecatedUrl: "/blog/2015-10-head-display-block"
syndication:
  - url: "https://medium.com/@cssence/head-display-block-da4cd2ff71cf"
  - url: "https://twitter.com/cssence/status/657455868473155584"
    published: 2015-10-23T07:17:48Z
---

# head {display:block}

Remember the day when we assigned high level class names to the document body? They served as document-wide qualifiers, so we could style child elements in accordance. At some point we moved those high level declarations up a notch, from `body` to `html`. Probably around the time when the [root em](/2011/rem-root-em-a-unit-introduced-with-css3) (`rem`) unit kicked in. When those declarations finally arrived at the topmost element, we could ultimately speak of being applicable for the whole document.

Which brings us to the `head` element. One sometimes overlooked fact, you may style the document head and all the elements found within in the same way you style everything else.

The following code will make the title of your web page visible.

```css
head,
title {
  display: block;
}
```

## Is this in any way useful?

Not really, certain edge cases aside, like [a website focusing on CSS where the text of some inline CSS is used as a wallpaper background](https://cssence.com/). In addition, most elements in the head of an HTML file, think `meta` and `link`, simply do not have content, so there is nothing to display in the first place. But feel free to play around. And read along.

## Visual debugging

I have tested the following code in the latest version of Chrome, Firefox, IE, Edge, Safari, including a number of mobile browsers I could get my hands on. And it works, even though it should not, as I’m about to explain.

```css
head,
meta[name="viewport"] {
  display: block;
}
meta[name="viewport"]::before {
  content: attr(content);
}
```

On a mobile-friendly site, something along the lines of <code>width=device-width, [initial-scale=1](https://css-tricks.com/probably-use-initial-scale1)</code> will appear in your browser window. I do not write the standards, but `meta` tags are standalone tags in the same way as `img`. In the specification they are referred to as [void elements](https://www.w3.org/TR/html5/syntax.html#void-elements), and as such are not allowed to have pseudo-generated content. [Subject to debate](https://stackoverflow.com/questions/26633229/to-what-self-closing-elements-can-before-and-after-pseudo-elements-be-applie) or not, being of little practical value I assume no one will complain. While we’re at it, I am among the people who would appreciate being able to add generated content to all elements, specifically to images and input fields, but this is another story.

## Cross-browser consistency

Overall, it is nice to see that browser makers do not treat the document head differently. Instead they use the same web mechanisms, in this case CSS, for dealing with this portion of the HTML file. But the real lesson here is, you get consistent results across browsers, even on a seemingly irrelevant feature. This couldn’t have been said a few years ago. Progress. I like the sound of that.
