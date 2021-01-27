---
indicator: "Code"
title: "Changing CSS with CSS?"
description: "tl;dr pseudo styles are not really a thing."
thumbnail: {type: "image/png"}
published: 2021-01-27T07:52:13Z
syndication:
  - url: "https://codepen.io/cssence/pen/MWjNZaj"
  - url: "https://twitter.com/cssence/status/1354542417282801665"
    published: 2021-01-27T21:30:53Z
conversation:
  - url: "https://twitter.com/cssence/status/1354547160977702915"
    text: "I’m using ol’ trusty [@prismjs](https://twitter.com/prismjs) for syntax highlighting on my blog, and even it has troubles with my questionable early morning ideas."
    image:
      url: "/2021/changing-css-with-css.prismjs.png"
      alt: "Putting valid CSS code in the CSS content property will trick even the best syntax highlighter into thinking the text within quotes is code."
    posted: 2021-01-27T21:49:44Z
---

# Changing CSS with CSS?
^ Would a browser reevalute its creation?

I woke up today wondering if I could add CSS code with CSS.

This idea requires **inline** styles. They flourish between the opening and closing tag of the `<style>` element. Contrary to the [void](https://html.spec.whatwg.org/multipage/syntax.html#void-elements) `<link rel="stylesheet">` element, we can add pseudo-generated content to inline styles. Let’s put valid CSS in the `content` declaration, like so.

```css
style::after {
  content: 'span { color: red; }';
}
```

My gut feeling was <q>No, this couldn’t possibly work!</q>, but I had to put it to the test. So I tried it out on CodePen. Spoiler alert: In all the browsers I’ve tested, the answer is …

No.
