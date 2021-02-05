---
indicator: "Event"
title: "We Are Web Clerks 2020 #ViennaCalling"
description: "Attending a meetup/conference hybrid, completely remote."
thumbnail: {type: "image/jpeg"}
published: 2020-07-29T16:54:59Z
revised: 2020-07-30T06:43:01Z
syndication:
  - url: "https://twitter.com/cssence/status/1288751274809327617"
    published: 2020-07-30T08:20:22Z
conversation:
  - url: "https://twitter.com/cssence/status/1288527511597584398"
    text: "Listening to [@cassiecodes](https://twitter.com/cassiecodes) at #ViennaCalling … takeaways so far:<br>1. Yay Progressive Enhancement!<br>2. Yay Accessibility! #a11y<br>3. [makefrontendshitagain.party](https://makefrontendshitagain.party) is a thing.<br>[@wearewebclerks](https://twitter.com/wearewebclerks) [@CssVienna](https://twitter.com/CssVienna)"
    posted: 2020-07-29T17:31:13Z
  - url: "https://twitter.com/g16n/status/1288526930090885121"
    text: "What’s the point of setting transition-duration to a very small time value with <code>@⁠media (prefers-reduced-motion: reduce)</code> instead of removing the transition altogether?<br>[@cassiecodes](https://twitter.com/cassiecodes) #ViennaCalling"
    author: {id: "@g16n", name: "Gunnar Bittersmann"}
    posted: 2020-07-29T17:28:54Z
  - url: "https://twitter.com/cssence/status/1288528523884462088"
    text: "[@g16n](https://twitter.com/g16n) [@cassiecodes](https://twitter.com/cassiecodes)<br>You’ll end up at the desired end state of the transition, so your page will look like the animations ran (because they did), i.e. no difference to running the transition at “regular” speed."
    posted: 2020-07-29T17:35:14Z
  - url: "https://twitter.com/g16n/status/1288532535262183424"
    text: "[@cssence](https://twitter.com/cssence) [@cassiecodes](https://twitter.com/cassiecodes)<br>Hm, with or without transitions, don’t you end up in the end state anyway? (I’m not talking about animations here.)"
    author: {id: "@g16n", name: "Gunnar Bittersmann"}
    posted: 2020-07-29T17:51:10Z
  - url: "https://twitter.com/g16n/status/1288533504599490561"
    text: "I see the difference in transition* events which won’t fire with transitions switched off, but apart from that?"
    author: {id: "@g16n", name: "Gunnar Bittersmann"}
    posted: 2020-07-29T17:55:01Z
  - url: "https://twitter.com/cassiecodes/status/1288534637938171905"
    text: "[@g16n](https://twitter.com/g16n) [@cssence](https://twitter.com/cssence)<br>Keeping the transition duration makes sure that any functionality tied to a transition e.g. a menu sliding in will still work."
    author: {id: "@cassiecodes", name: "Cassie Evans"}
    posted: 2020-07-29T17:59:32Z
  - url: "https://twitter.com/cssence/status/1288535842588426247"
    text: "[@cassiecodes](https://twitter.com/cassiecodes) [@g16n](https://twitter.com/g16n)<br>Thanks, I’ve been struggling to come up with a meaningful example. Menus are a great one, them sliding in might affect a huge part of the viewport, so that kind of transition might be a trigger."
    posted: 2020-07-29T18:04:19Z
  - url: "https://twitter.com/g16n/status/1288567561337163777"
    text: "[@cssence](https://twitter.com/cssence) [@cassiecodes](https://twitter.com/cassiecodes)<br>My menu solution works without tiny transition duration (but uses a class set on transitionrun and removed on transitionend).<br>[codepen.io/gunnarbittersmann/pen/abdMLKJ](https://codepen.io/gunnarbittersmann/pen/abdMLKJ)<br>I add the transition with MQ rather than taking it away. (Better no transition than a transition for all users in older browsers.)"
    author: {id: "@g16n", name: "Gunnar Bittersmann"}
    posted: 2020-07-29T20:10:21Z
  - url: "https://twitter.com/g16n/status/1288568166365507587"
    text: "This is still work in progress. To do: focus management, focus trap. Comments welcome."
    author: {id: "@g16n", name: "Gunnar Bittersmann"}
    posted: 2020-07-29T20:12:45Z
  - url: "https://twitter.com/cassiecodes/status/1288575901345746945"
    text: "[@g16n](https://twitter.com/g16n) [@cssence](https://twitter.com/cssence)<br>Sure… Seems like more effort to do the same thing, but to each their own."
    author: {id: "@cassiecodes", name: "Cassie Evans"}
    posted: 2020-07-29T20:43:30Z
  - url: "https://twitter.com/cssence/status/1288719934017560577"
    text: "[@g16n](https://twitter.com/g16n) [@cassiecodes](https://twitter.com/cassiecodes)<br>👍 Doing it this way around is closer to progressive enhancement. But on animation-heavy sites you might still be better off using the star selector and set all durations to a tiny value at once, as shown here: [css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/](https://css-tricks.com/revisiting-prefers-reduced-motion-the-reduced-motion-media-query/)<br><br>Don’t we all love how versatile CSS is? 🙂"
    posted: 2020-07-30T06:15:50Z
  - url: "https://twitter.com/cssence/status/1288536666521706496"
    text: "First [@cassiecodes](https://twitter.com/cassiecodes), now a lightning talk by [@MicheBarks](https://twitter.com/MicheBarks) at #ViennaCalling - how is it possible that this amount of great content is free of charge?"
    posted: 2020-07-29T18:07:35Z
  - url: "https://twitter.com/cssence/status/1288549728414838784"
    text: "#CSS should be about “providing guides and rules for layout, instead of micromanaging the browser.” [@hankchizljaw](https://twitter.com/hankchizljaw) at the #ViennaCalling [@wearewebclerks](https://twitter.com/wearewebclerks) meetup"
    posted: 2020-07-29T18:59:30Z
  - url: "https://twitter.com/cssence/status/1288751274809327617"
    text: "👏 Thanks to all the speakers and the organizers, [@wearewebclerks](https://twitter.com/wearewebclerks) and [@CssVienna](https://twitter.com/CssVienna) pulled off a truly wonderful #ViennaCalling meetup last night."
    posted: 2020-07-30T08:20:22Z
---

# We Are Web Clerks
^ @WeAreWebClerks @CssVienna #ViennaCalling Meetup 2020

After last year’s first-ever [WeAreWebClerks Community Conference](/2019/we-are-web-clerks), [@wearewebclerks](https://twitter.com/wearewebclerks) teamed up with [@CssVienna](https://twitter.com/CssVienna) and delivered the [#ViennaCalling meetup](https://webclerks.at/vienna-calling/) straight to our homes via Twitch. I’ve been truly impressed. I would not have had the time to attend the meetup on location, but thanks to the current virtual-only-ness the world is going through, I’ve been able to join the [live stream.](https://www.twitch.tv/videos/694348922) Similarly, the line-up would have been different too, because these great speakers might not have able to visit Vienna “just” for a meetup.

But let’s face it, with such amazing talks it felt like an actual conference. Or, as [Max Böck put it,](https://twitter.com/mxbck/status/1288034544805871616) <q>This is not your grandma’s meetup.</q>

<h2 id="talks">Talks &amp; Speakers</h2>

- [“Making the web more whimsical with SVG”](https://twitter.com/cassiecodes/status/1288538565438246915) by [Cassie Evans](https://twitter.com/cassiecodes)
- [“Zig-Zag Gradient Lab”](https://twitter.com/wearewebclerks/status/1288537432435163137) by [Michelle Barker](https://twitter.com/MicheBarks)
- [“Clapping Machine”](https://twitter.com/wearewebclerks/status/1288541978490212352) by [Ramón Huidobro](https://twitter.com/hola_soy_milk)
- [“Accessible SVGs - Inclusiveness Beyond Patterns”](https://twitter.com/cariefisher/status/1288554906945716225) by [Carie Fisher](https://twitter.com/cariefisher)
- [“CUBE CSS”](https://twitter.com/hankchizljaw/status/1288560424997322753) by [Andy Bell](https://twitter.com/hankchizljaw)
