---
indicator: "Essay"
title: "The JavaScript Wars"
description: "In one corner, we have die-hard NoScripters. And then there are “The Others”."
thumbnail: {type: "image/jpeg"}
published: 2016-11-01T20:17:00Z
deprecatedUrl: "/blog/2016-11-the-javascript-wars"
syndication:
  - url: "https://medium.com/@cssence/the-javascript-wars-6852ff3de371"
    published: 2016-11-13T19:37:00Z
  - url: "https://twitter.com/cssence/status/794219334847660032"
    published: 2016-11-03T16:46:59Z
conversation:
  - url: "https://twitter.com/cssence/status/794668908875804673"
    text: "A follow-up to [nolanlawson.com/2016/10/13/progressive-enhancement-isnt-dead-but-it-smells-funny](https://nolanlawson.com/2016/10/13/progressive-enhancement-isnt-dead-but-it-smells-funny/) by [@nolanlawson](https://twitter.com/nolanlawson)"
    posted: 2016-11-04T22:33:26Z
  - url: "https://twitter.com/css/status/797611536919515136"
    text: "“There is another building block for the web, one more important than HTML, CSS &amp; JS combined … URLs.”<br>[cssence.com/blog/2016-11-the-javascript-wars](https://cssence.com/2016/the-javascript-wars)"
    author: {id: "@css", name: "CSS-Tricks"}
    posted: 2016-11-13T01:26:23Z
  - url: "https://twitter.com/cssence/status/797740191230423040"
    text: "<a href=\"/2016/viewport-unit-zoom-issue\" aria-label=\"First part of this comment.\">[…]</a> [@css](https://twitter.com/css) thanks for sharing"
    posted: 2016-11-13T09:57:37Z
  - url: "https://twitter.com/k0deh4mst3r/status/797840749169639424"
    text: "[@css](https://twitter.com/css) Hi there! That’s an amazing article really, informative, bitterly truthful &amp; awakening! In this scenario what one should do?!"
    author: {id: "@k0deh4mst3r"}
    posted: 2016-11-13T16:37:12Z
  - url: "https://medium.com/@alpha_hydrae/the-thing-is-the-web-is-competing-with-native-mobile-apps-now-b0b5de56c656"
    text: "The thing is, the web is competing with native mobile apps now. It’s in the interest of web developers that the web isn’t falling behind and is instead growing. The competition with rich native apps and the growing expectations from users is why the javascript ecosystem is exploding."
    author: {id: "@alpha_hydrae", url: "https://medium.com/@alpha_hydrae"}
    posted: 2016-11-13T21:54:06Z
  - url: "https://twitter.com/RonaldDiemicke/status/797620962363637760"
    text: "[@cssence](https://twitter.com/cssence) data/content is the starting point, which is JSON’s appeal. It’s raw data that can be formatted in any way. HTML is structure."
    author: {id: "@RonaldDiemicke", name: "Ronald Diemicke"}
    posted: 2016-11-13T02:03:51Z
  - url: "https://twitter.com/RonaldDiemicke/status/797621570856435712"
    text: "[@cssence](https://twitter.com/cssence) we almost need a way to map urls to HTML (structure) and to data (json) so browsers decide what to use in a PWA fashion"
    author: {id: "@RonaldDiemicke", name: "Ronald Diemicke"}
    posted: 2016-11-13T02:06:16Z
  - url: "https://twitter.com/RonaldDiemicke/status/797621708203159552"
    text: "[@cssence](https://twitter.com/cssence) is your entry point to the app gives you the structure and initial data and subsequent hits only return the raw data"
    author: {id: "@RonaldDiemicke", name: "Ronald Diemicke"}
    posted: 2016-11-13T02:06:48Z
  - url: "https://twitter.com/RonaldDiemicke/status/797621933588312064"
    text: "[@cssence](https://twitter.com/cssence) In theory, if you did that, and you turn JS off, you should still be able to use the whole thing."
    author: {id: "@RonaldDiemicke", name: "Ronald Diemicke"}
    posted: 2016-11-13T02:07:42Z
  - url: "https://twitter.com/cssence/status/798037864059699200"
    text: "[@RonaldDiemicke](https://twitter.com/RonaldDiemicke) That would be efficient. Until browsers can do that HTML=base. Will be interesting to see where PWAs take us."
    posted: 2016-11-14T05:40:28Z
  - url: "https://twitter.com/robalexclark/status/798521376357289985"
    text: "[@cssence](https://twitter.com/cssence) If every day a new framework appears shows how poor JS is as a productive language.We need to start again. WebAssembly?"
    author: {id: "@robalexclark"}
    posted: 2016-11-15T13:41:46Z
  - url: "https://twitter.com/cssence/status/798535266323599360"
    text: "[@robalexclark](https://twitter.com/robalexclark) Or it shows how exiting JS is. I use it in a productive manner, but right now JS is all over the place #FindTheBalance"
    posted: 2016-11-15T14:36:58Z
---

# The JavaScript Wars
^ How did we get here?

Remember the building blocks of the world wide web? HTML, CSS, JavaScript. Does ring a bell, right?

We know what HTML does. HTML is the foundation, it delivers the content to you. Sure, RSS also does the content talk, most APIs respond with a JSON full of content, but let’s face it, HTML is the big deal. It gets you started.

Then there is CSS. It can make HTML look [and sound](https://www.w3.org/TR/css3-speech/) good, but it’s optional. Since browsers have a default way of styling certain things, you can get all the information you need by staring at the HTML with no CSS in place. If the developer took additional care, you should even be able get a gist of what those referenced images are about. All thanks to HTML. While CSS helps to make sites nice to look at, it is not mandatory. Oh the irony, the author of [cssence.com](https://cssence.com/) called CSS _optional_.

Let’s move on to JavaScript. In charge of interactivity and advanced stuff. Granted, it can do amazing things, but it also breaks easily if things go awry, and unlike HTML and CSS it does not come with a fail-safe mechanism. Which is why we need JavaScript even less than CSS. That’s my opinion. An opinion that seems to be challenged more than anything else lately.

## The fuss about JavaScript

When I browse my twitter feed these days, it seems JavaScript-wise we have become a bipartisan community. While everyone admits it has become hard to keep up with all the development going on in the JavaScript world, one party seems to be rooting for the good old days where web development was easy and [days&#8203;since&#8203;last&#8203;javascript&#8203;framework.com](https://dayssincelastjavascriptframework.com) didn’t exist. The other party opposes that not using JavaScript holds us back, hence overframeworking doesn’t bother them much. The web is moving fast, deal with it.

<figure><img src="/2016/the-javascript-wars.dayssincelastjavascriptframework.png" alt="The answer is zero."><figcaption>According to days&#8203;since&#8203;last&#8203;javascript&#8203;framework.com, it has been zero days since the last new JavaScript framework came out.</figcaption></figure>

The whole situation is becoming a joke. You might be interested in the long version [“How it feels to learn JavaScript in 2016,”](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f) a witty article by [Jose Aguinaga](https://hackernoon.com/@jjperezaguinaga), but you can take the shortcut with [this tweet](https://twitter.com/iamdevloper/status/787969734918668289) by [@iamdevloper](https://twitter.com/iamdevloper):

> &dash; hey how did your hackathon go?  
> &dash; not too bad, we got Babel set up  
> &dash; yep…  
> &dash; yep.

## Paradigm shift

To me, commuting to and from work means not having a reliable internet connection. These are the times when I experience first-hand what it feels like when you wait for something to load that has been created without thinking about users and the circumstances they are in while browsing the web. Mobile-first gave us a break, websites had to be rethought to make sense of the smaller form factor. But the bloat and all the crappiness is coming back. Bloat and bad implementation can make any site slow, so you’ll have to wait for the initial rendering to happen. Getting something on the screen is key. I’ve become less patient nowadays and simply give up when it takes too long.

A stable internet connection cannot be taken for granted. Let’s take a look at [this article](https://nolanlawson.com/2016/10/13/progressive-enhancement-isnt-dead-but-it-smells-funny/), in which [Nolan Lawson](https://twitter.com/nolanlawson/) concludes that _progressive enhancement_ needs to be redefined, because …

> […] the network is now the bottleneck, [… so] you should be focusing on [offline-first](http://offlinefirst.org/), i.e. treating the network as an enhancement.

In his clear-cut article, Nolan describes how it could be done, and it ain’t going to be easy. We need to put in additional effort to get there. You might think that in this cost-cutting world of ours, companies consider not to bother. But in reality they have an obligation to do things right, and we as developers need to convey the message to them. And companies will like the message, because people will be drawn to well-made websites, higher engagement and all. When creating such sites, we also avoid a future where people have to stare at blank screens.

## Overtime

This article should have ended at the last paragraph, but here we are. There is this one bit where I disagree with Nolan’s message, and that is the part where he argues that we no longer need to consider those who lack JavaScript. Sure, cost-cutting companies might agree, after all, that would be one less thing to think about. But I won’t let them get away with it, similar to the way [Jeremy Keith won’t let us get away with it](https://adactio.com/journal/11354).

There is another building block for the web, one that is more important than HTML, CSS and JavaScript combined. It all starts with URLs. Those things uniquely identify some piece of information on the web. It should not be that hard or expensive to have a server dump this information into HTML, whatever that information might be; some content, a list of URLs to some more content, you name it. Let’s keep it really simple, just the content, without replicating any of the site’s chrome. (Though one additional link that brings you back to the homepage wouldn’t hurt.)
