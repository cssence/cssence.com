---
layout: "article.pug"
group: "essay"
title: "Beyond Progressive Web&nbsp;Apps"
description: "My personal thoughts in response to “Regressive Web Apps” by Jeremy Keith."
thumbnail: {type: "image/png"}
published: 2016-05-27T16:57:00Z
deprecatedUrl: "/blog/2016-05-beyond-progressive-web-apps"
syndication:
  - url: "https://medium.com/@cssence/beyond-progressive-web-apps-54eb2b1969e0"
    published: 2016-05-31T15:51:00Z
  - url: "https://twitter.com/cssence/status/736240598861160448"
    published: 2016-05-27T17:00:12Z
conversation:
  - url: "https://adactio.com/links/10735"
    text: "Matthias Beitl takes a stab at trying to tackle the tricky UI problem of exposing the URLs of Progressive Web Apps. [This stuff is hard](http://www.brucelawson.co.uk/2016/on-urls-in-progressive-web-apps/)."
    author: {url: "https://adactio.com/about/", name: "Jeremy Keith"}
    posted: 2016-05-30T12:37:24Z
  - url: "https://twitter.com/Lucid00/status/737301910043144192"
    text: "[@cssence](https://twitter.com/cssence) [@adactio](https://twitter.com/adactio) I think on Android a quiet persistent notification is the best way to go today.<br>Where you just tap and it displays the URL"
    author: {url: "https://twitter.com/Lucid00", name: "Hugh Isaacs II"}
    posted: 2016-05-30T15:17:28Z
  - url: "https://twitter.com/Lucid00/status/737302965904498690"
    text: "[@cssence](https://twitter.com/cssence) [@adactio](https://twitter.com/adactio) like how The Physical Web works in Chrome today<br>Except the notification only shows up for a standalone progressive web app"
    author: {url: "https://twitter.com/Lucid00", name: "Hugh Isaacs II"}
    posted: 2016-05-30T15:21:40Z
  - url: "https://twitter.com/cssence/status/737543328816734208"
    text: "[@Lucid00](https://twitter.com/Lucid00) [@adactio](https://twitter.com/adactio) I hear you. As long as those URLs remain URLs, as opposed to acting more like Android intents."
    posted: 2016-05-31T07:16:47Z
  - url: "https://twitter.com/Lucid00/status/737612848486965250"
    text: "[@cssence](https://twitter.com/cssence) [@adactio](https://twitter.com/adactio) my thought is it’d be a “chat heads”-like experience. Where a floating URL input box pops up on press of that notification"
    author: {url: "https://twitter.com/Lucid00", name: "Hugh Isaacs II"}
    posted: 2016-05-31T11:53:01Z
  - url: "https://twitter.com/cssence/status/737660086173175809"
    text: "[@Lucid00](https://twitter.com/Lucid00) Oh, so this was about revealing the URL. I thought you were talking about getting to the app/site in the first place."
    posted: 2016-05-31T15:00:44Z
  - url: "https://twitter.com/Lucid00/status/737666344489979905"
    text: "[@cssence](https://twitter.com/cssence) oh nah. Sorry, I thought the context was obvious<br>But yeah, I think a quiet notification that shows when a PWA is open is the answer"
    author: {url: "https://twitter.com/Lucid00", name: "Hugh Isaacs II"}
    posted: 2016-05-31T15:25:36Z
  - url: "https://twitter.com/julianmartinez/status/737586258235400192"
    text: "[@cssence](https://twitter.com/cssence) [@adactio](https://twitter.com/adactio) we managed to make our app [selio.com](https://selio.com/) be as responsive as the native app. So we do believe in PWA"
    author: {url: "https://twitter.com/julianmartinez", name: "Julian Martinez"}
    posted: 2016-05-31T10:07:22Z
  - url: "https://twitter.com/cssence/status/737656335563644928"
    text: "[@julianmartinez](https://twitter.com/julianmartinez) [@adactio](https://twitter.com/adactio) So do I. Unless we mess it up, PWA will become the norm. Same way responsive web design is today."
    posted: 2016-05-31T14:45:50Z
  - url: "https://twitter.com/cssence/status/737550572522373124"
    text: "Well-fitting thoughts from [@sil](https://twitter.com/sil) [kryogenix.org/days/2016/05/24/the-importance-of-urls](https://www.kryogenix.org/days/2016/05/24/the-importance-of-urls/)"
    posted: 2016-05-31T07:45:34Z
  - url: "https://twitter.com/cssence/status/737880399884525568"
    text: "And that is that. [twitter.com/jaffathecake/status/737774402436255744](https://twitter.com/jaffathecake/status/737774402436255744)"
    posted: 2016-06-01T05:36:11Z
---

# Beyond Progressive Web&nbsp;Apps
^ Web & native live happily ever after

After this year’s Google I/O event, [Jeremy](https://twitter.com/adactio) took a closer look. In his aptly named article “[Regressive Web Apps](https://adactio.com/journal/10708)” he couldn’t help but notice the latest development that seems to pull the plug on URLs. If you haven’t read it yet, do it now.

Two things come to mind.

1. URLs are great.
2. Seams are great too.

I completely agree with Jeremy, that’s the bottom line. So we are done? Not entirely.

## Getting rid of the benefits of the web is wrong

On top of the overall agreement, I have a tiny issue. The address bar consumes space in my browser. On devices that fit in one’s pocket, screen estate is precious. Browser makers thought about that, so these days the address bar hides and reappears in accordance to the user’s scrolling behavior. That changes the height of the viewport, which may cause annoyance when a website does stuff based on the `vh` unit. From [viewport-sized typography](https://css-tricks.com/viewport-sized-typography/) to background images with `background-size: cover` or `contain`. If only the address bar behaved more like an overlay, we wouldn’t have those issues. Hold that thought, we’ll get back to that in a moment.

Let me assure you, I like all the **features** that come with the address bar. Which leaves me in need of being able to access those features. Consequently, I would like to be in charge of showing and hiding the address bar. And no _manifest file_ should stop me from doing that. Why does it contain a `display` property in the first place? We should not make a choice on behalf of the user. The user should be able to do all the things. Display the URL? Go ahead. Immerse in a fullscreen experience? Be my guest.

## Being able to do everything &hellip;

&hellip; the address bar has to offer, without having to stare at it. Open a new tab. Reload the current tab. Navigate the history. Enter a new URL. Display, copy or bookmark the current URL. The list goes on. To reiterate, not having the address bar in plain sight means we need to give the user the possibility to access it. How to reveal it with no visual cue on the screen? The user could pull the address bar into view, maybe by swiping from the top edge of the screen.

This is where things collide with existing functionality. Swiping from the top is already tied to the <abbr title="operating system">OS</abbr>, not the current app. Well, this is how things are today, we can find ways to make it work. Not just for URLs, who says there is no common ground for a slide-from-top menu that works for both apps and URLs. All implementation details aside, browsers can only go so far, the operating system must be designed to take care of those needs.

## BrowserOS to the rescue

When I first saw Palm’s WebOS I was delighted. It did not last. Firefox&nbsp;OS was another exciting step in the right direction. Too soon. Technology wasn’t ready. Users were less than ready. But at some point, despite all the money being made in App Stores, we will have a (mobile) operating system that no longer needs to distinguish between web and native. Think about it, installed apps and URLs living side by side, in harmony. I’ve never used ChromeOS, but there could be similarities. The browser should be something that no longer needs to be launched. Being able to choose your favorite browser continues to be important. Once the browser is woven into the OS, we will simply choose the OS we like the most.

Having a BrowserOS in place, we no longer need criteria for Progressive Web Apps. Whatever you want to open, a website, a “web app,” an app, BrowserOS should simply open it for you. Hopefully without making too many assumptions when doing so.

<figure><img src="/2016/beyond-progressive-web-apps.android.png" alt="The (hypothetical) state of web-versus-native on Android."><figcaption>The mockup on the right hand side shows a hypothetical Chrome browser on Android, where the address bar functionality slides in from the top. The screenshot on the left is a reminder that web and native already found a friendly way to coexist: The App Overview. <abbr title="By the way">BTW</abbr>, only one of the three, i.e.,&nbsp;Amazon Kindle, is an installed app.</figcaption></figure>

Okay, full disclosure: I do not like apps. With every new mobile phone, first I have to install three to four additional apps. Then disable over a dozen of the preinstalled ones. (As a finishing touch, I disable all notifications, so [once again I agree with Jeremy](https://adactio.com/journal/8658), but that goes beyond the scope of this article.)

So yes, I still use some apps. To give you an idea, I use the alarm for waking up, the camera for taking pictures, Kindle for reading, and Google Maps for navigation. Not to forget a File Manager and a Password Manager. Turns out my mobile phone is also a phone, so I have apps for phone calls and text messaging. Everything else lives inside the browser. My list of _frequently <del>used web apps </del><ins>opened URLs</ins>_ includes Gmail, YouTube, Twitter and various news sites.

## Way to go, browser

Right now I don’t know which way the folks over at Google/Android are heading with their latest development. Bleak scenarios aside, I can still imagine ways to settle the web&nbsp;<abbr title="versus">vs.</abbr>&nbsp;native dispute. It could be a long and bumpy road until we get there. If the destination is worth it, I don’t mind.
