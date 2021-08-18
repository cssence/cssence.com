---
layout: "note.pug"
group: "opinion"
title: "Labeling Icon-Only Links"
description: "My response to “Accessible SVG Icons” on CSS-Tricks."
published: 2020-12-29T19:00:19Z
syndication:
  - url: "https://css-tricks.com/accessible-svg-icons"
conversation:
  - url: "https://css-tricks.com/accessible-svg-icons/#comment-1766740"
    text: "Is there any difference between:<br><code>&lt;a href=&quot;/&quot; aria-label=&quot;Good Label&quot;&gt;&lt;svg aria-hidden=&quot;true&quot; … &gt;&lt;/svg&gt;&lt;/a&gt;</code><br>and<br><code>&lt;a href=&quot;/&quot;&gt;&lt;svg aria-label=&quot;Good Label&quot; role=&quot;img&quot; … &gt;&lt;/svg&gt;&lt;/a&gt;</code><br><br>And why not use <code>&lt;title&gt;</code> in this case?"
    author: {name: "Barry"}
    posted: 2020-12-29T09:21:40Z
  - url: "https://css-tricks.com/accessible-svg-icons/#comment-1766761"
    text: "In theory they are the same, see [html5accessibility.com/stuff/2020/11/07/not-so-short-note-on-aria-label-usage-big-table-edition/,](https://html5accessibility.com/stuff/2020/11/07/not-so-short-note-on-aria-label-usage-big-table-edition/) but …<br><br>… the second form is more verbose in VoiceOver, because SVG with aria-label is announced as a group, so rather go with aria-label on the link."
    posted: 2020-12-29T19:00:19Z
---

# Labeling Icon-Only Links
^ A response to [“Accessible SVG Icons” on CSS-Tricks.](https://css-tricks.com/accessible-svg-icons/)
