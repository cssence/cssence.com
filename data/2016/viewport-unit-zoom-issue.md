---
layout: "note.pug"
group: "opinion"
title: "The Trouble With Viewport Units"
description: "This thread started as a spin-off from my The JavaScript Wars article, deviating from the topic at hand."
published: 2016-11-07T14:08:41Z
revised: 2016-11-13T20:12:39Z
syndication:
  - url: "https://twitter.com/cssence/status/795629046881284096"
conversation:
  - url: "https://twitter.com/br0llercoaster/status/795614988962512901"
    text: "[@cssence](https://twitter.com/cssence) Hey, is your site supposed to have a font size of 52px on large displays? Not very comfortable to read an entire article like that."
    author: {url: "https://twitter.com/br0llercoaster", name: "@br0llercoaster"}
    posted: 2016-11-07T13:12:49Z
  - url: "https://twitter.com/cssence/status/795629046881284096"
    text: "[@br0llercoaster](https://twitter.com/br0llercoaster) Font size is viewport-based (2vw), so technically yes. But thanks for the feedback, I’ll give it a thought."
    posted: 2016-11-07T14:08:41Z
  - url: "https://twitter.com/KyleDavidE/status/797649226557751296"
    text: "[@css](https://twitter.com/css) Unrelated but the text scaling on this website is appalling."
    image:
      url: "https://pbs.twimg.com/media/CxHRjXgWEAEvGNE?format=jpg&name=small"
      alt: "Screenshot of the CSSence.com Javascript Wars article header on a large display."
      credit: {author: {name: "Kyle Ehrlich"}, via: {url: "https://twitter.com/", name: "Twitter"}}
    author: {url: "https://twitter.com/KyleDavidE", name: "Kyle Ehrlich"}
    posted: 2016-11-13T03:56:09Z
  - url: "https://twitter.com/cssence/status/797740191230423040"
    text: "[@KyleDavidE](https://twitter.com/KyleDavidE) yup, already working on that viewport-sized typography fix <a href=\"/2016/the-javascript-wars\" aria-label=\"Second part of this comment.\">[…]</a>"
    posted: 2016-11-13T09:57:37Z
  - url: "https://twitter.com/KyleDavidE/status/797829035103547393"
    text: "Nice! Since getting this monitor I have found a bunch of broken sites. You are the first to do anything."
    author: {url: "https://twitter.com/KyleDavidE", name: "Kyle Ehrlich"}
    posted: 2016-11-13T15:50:39Z
  - url: "https://twitter.com/cssence/status/797894967792267264"
    text: "[@KyleDavidE](https://twitter.com/KyleDavidE) [@css](https://twitter.com/css) Done by ditching the <code>vw</code> unit entirely. But I’ll look into this: [zellwk.com/blog/viewport-based-typography](https://zellwk.com/blog/viewport-based-typography/)"
    posted: 2016-11-13T20:12:39Z
---

# The Trouble With Viewport Units
