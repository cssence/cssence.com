---
layout: index.pug
type: c-default
title: "Popular Posts"
description: "Popularity contest: Most read, most controversial, or simply handpicked by the author."
thumbnail: {type: image/jpeg}
revised: 2021-10-03T21:20:00Z
sections:
  - id: featured
    name: "Featured posts"
    posts:
      - /2020/css-variables-in-style-attributes/
      - /2019/just-launch/
      - /2017/accessibility-for-everyone/
  - id: most-read
    name: "Most read posts"
    posts:
      - /2018/maintaining-aspect-ratio-with-css-grid/
      - /2016/the-javascript-wars/
      - /2017/mix-blend-mode-overflow-issue/
  - id: most-controversial
    name: "Most controversial posts"
    posts:
      - /2016/beyond-progressive-web-apps/
      - /2018/no-webfont-no-cry/
      - /2019/leaving-social-sites/
---

# Popular Posts
^ The popularity contest on CSSence.com

Why not do rankings? Here are the [most read](#most-read) and the [most controversial](#most-controversial) posts from this site; and also some of [my favorites.](#featured)

<style media="screen">.posts li::before{position:absolute;left:5rem;top:0;line-height:1}
.posts li:nth-child(1)::before{content:"🥇"}
.posts li:nth-child(2)::before{content:"🥈"}
.posts li:nth-child(3)::before{content:"🥉"}
</style>
