---
layout: "article.pug"
group: "essay"
title: "Ask the User"
description: "You could make assumptions about what your users want. Or you could just ask them."
thumbnail: {type: "image/png"}
published: 2019-06-19T05:54:00Z
deprecatedUrl: "/blog/2019-06-ask-the-user"
syndication:
  - url: "https://twitter.com/cssence/status/1141233622915174400"
    published: 2019-06-19T06:37:53Z
conversation:
  - url: "https://twitter.com/cssence/status/1141234646614794241"
    text: "[As mentioned,] This happens to be a late follow-up blog post on this excellent article by [@rem](https://twitter.com/rem) [remysharp.com/2019/04/09/code-highlighting-server-or-client](https://remysharp.com/2019/04/09/code-highlighting-server-or-client)"
    posted: 2019-06-19T06:41:57Z
---

# Ask the User
^ When it comes to one versus the other, there might be a third option

On Twitter, I rarely vote when a poll shows up in my timeline. But I did participate when [Remy Sharp](https://twitter.com/rem) asked if we should do [Syntax Highlighting on the client or server side.](https://twitter.com/rem/status/1112821258259922950) Client, sure thing. It’s what I do on my blog. Otherwise I would have to teach [my static site generator](/2017/on-using-static-site-generators/) to prepare everything upfront.

It got even more interesting when [Remy wrote a follow-up blog post](https://remysharp.com/2019/04/09/code-highlighting-server-or-client) on the subject, where instead of relying on gut feeling he went trough the trouble of creating tests for both cases. Concluding that pre-rendering pages, i.e. adding Syntax Highlighting on the server, is the way to go these days. Initially he too thought otherwise, but the tests revealed this wasn’t the case. At least not anymore, back in the day the client was the only option. Alas, time changes everything. My situation is not so different, I’ve also been doing this thing [for a long time.](/2017/being-online-for-20-years/) We should challenge old assumptions every once in a while.

## How about a third option?

From Remy’s test we can derive that, once compressed, the already enhanced HTML performs better than sending an accompanying JavaScript library like [PrismJS](https://prismjs.com/) to do the job. While I won’t argue with the facts, I am still reluctant to go ahead and inject tons of `<span>`s in my code blocks. Maybe I wanted the client to win after all. Should I go ahead and create tests to figure out if the playing field would level for recurring visitors, i.e. those who have the JavaScript library already in cache?

No. Instead, I considered an alternative to find a way out of the dilemma. Needless to say, on technical blogs Syntax Highlighting makes a lot of sense. But let’s not forget that it is still an enhancement, not a requirement. So get the best of both worlds, how about we start off with plain code inside a `<pre>` tag, and give the user a choice. Said choice would be another job for the client. All I need to do is add a script that supplements each code block with a toggle to enable Syntax Highlighting. This means users will only get the highlighting library once they actively ask for it. But when they do, I will of course persist the user’s choice. As I [do not use cookies on my site](/about/privacy/), the user preference will be stored in `localStorage`.

I could simply enhance an existing script that already defers loading of PrismJS, because what it does is check upfront if there are code blocks on a page, so even today the library will only be added to a page if needed. Many server-side fans commented in Remy’s poll that they did not like _flash of unstyled content (FOUC)._ Well, Highlighting on my blog does not cause any reflow by adding line numbers, nor do I use a handwriting font for comments or anything else that would. It only changes the text color, and I find those color flashes to be acceptable. Accessibility-wise I need to do a bit of research, simply hiding the toggle with `aria-hidden` crossed my mind, but that might not be ideal.

<figure><img src="/2019/ask-the-user/syntax-highlighting.png" alt="This mockup shows how the enhancement could look like on this site."><figcaption>Running the script will add a syntax highlighting toggle on top of each code block.</figcaption></figure>

We could even go beyond a boolean toggle, and instead present a list of different color schemes to the user. E.g., one option that plays nicely with the colors of the blog, but also some schemes from popular <abbr title="Integrated Development Environment">IDE</abbr>s.

When I find the time, I will add just that to my blog.

Addendum: If enhancing each code block is not your thing, you could just add one central toggle and bury it somewhere under “settings”, but doing so would most likely mean that visitors to your site will never see the toggle and its options.
