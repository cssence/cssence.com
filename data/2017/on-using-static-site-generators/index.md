---
layout: "article.pug"
group: "essay"
title: "On Using Static Site Generators"
description: "I wrote about static site generators, but went down the Vanilla-or-not rabbit hole."
thumbnail: {type: "image/jpeg"}
published: 2017-07-22T16:50:00Z
deprecatedUrl: "/blog/2017-07-on-using-static-site-generators"
syndication:
  - url: "https://medium.com/@cssence/on-using-static-site-generators-57879d215746"
    published: 2017-07-25T08:40:50Z
  - url: "https://twitter.com/cssence/status/889489356314091520"
    published: 2017-07-24T14:16:03Z
---

# On Using Static Site Generators
^ Vanilla, or not

Last year I spoke at [our local developer meetup (@ViennaHTML)](/2016/viennahtml/) about why you would want to create your own static site generator. Spoiler alert: You _wouldn’t_. Weirdly enough, at that meetup I’ve made the case for the exact opposite. Did I mention that I went through that kind of trouble three times to date. One time for personal use, as [one my own sites](https://cssence.com/) is powered by a self-written static site generator. Another spoiler alert: Not anymore. Even back then I anticipated that the time would come where I would ditch my own creation and switch to using [Metalsmith](https://metalsmith.io/) instead. Fast forward one year, I finally managed to get to it. I could have used something else, as there are [many alternatives](https://www.staticgen.com/) out there, including more popular ones. My only self-imposed limitation was that the generator itself had to be written in JavaScript. The fact that I’ve used Metalsmith for other projects and clients before made it the obvious choice. In case you have not heard of Metalsmith, [I’ve got you covered.](/2017/metalsmith-io/)

What follows are my revised thoughts on the subject.

## Reinventing the wheel

Rooting for vanilla, my reasoning always boiled down to being in charge, meaning

1. it can be a valuable lesson to do something on your own, but also
2. if you have written the code yourself, you are in control of what is actually going on under the hood.

Those arguments could be brought into play not just for building static site generators, but every time you are doing something the vanilla way, i.e. without libraries or frameworks.

But where to draw the line? Almost everything I’ve done in recent years would not have been possible without [Node.js](https://nodejs.org/), so am I going to create my own variant of Node.js for the sake of having gone through such an arduous undertaking? Of course not. No matter how much code I write myself, I am never going to be in charge of the _entire_ tech stack.

There are of course good reasons for doing something from scratch. Vanilla can make sense when we want to keep things lean, when we have to consider performance and bandwidth. The long-running discussion of [jQuery being a thing of the past](https://css-tricks.com/now-ever-might-not-need-jquery/) serves as a prominent example. But static site generators? Well, I had to call bullshit on my earlier arguments, and instead start reaping the benefits of building on top of existing solutions.

## On the shoulders of giants

Now that I’ve made the switch to Metalsmith, the biggest benefit is having fewer lines of code to maintain. For example, using my own approach, I had to deal with reading all the files and&#8202;&mdash;&#8202;after modifications have been performed on those files&#8202;&mdash;&#8202;writing them back, which is something all static site generators will do for you.

By the way, this is pretty much the only thing Metalsmith does, any kind of file manipulation is being delegated to plugins. And guess what, thanks to the community there are lots of those plugins out there. So unless you need something fancy, you could even end up with almost no code of your own, by simply using your generator of choice the way it is intended to be used.

## You can spell refactoring without boring

On the other hand, why bother making the switch in the first place? I’ve been using my own creation for almost three years, so it already accomplished what any off-the-shelf static site generator could do. Switching to Metalsmith meant refactoring the entire codebase, while ensuring that after all that work my site looks exactly the same as before.

With am eyebrow-raising goal like that, there had to be other benefits, so one would not lose track and actually follow through, right? In my case, not only do I now have less code to take care of, it also led to improved separation of concerns. Generator-related bits are now clearly distinguishable from the actual content. To top it off, the amount of content-related metadata got reduced, which makes updating the site a lot easier in the future.

## Vanilla, or not

Where do you draw the line?
