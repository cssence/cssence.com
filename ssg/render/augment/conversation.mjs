/* Modify conversation `html.c-note main > article > div, aside[aria-labelledby="comments"]` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear) return; // commenting not possible/allowed

	const isStandaloneThread = meta.page.isPostByYear && meta.page.className === 'c-note';

	const conversation = {thread: []};
	if (isStandaloneThread) {
		conversation.start = content.indexOf('</header>') + 1;
		conversation.end = content.lastIndexOf('</article>') - 1;
	} else {
		conversation.start = content.indexOf('<aside aria-labelledby="comments">');
		conversation.end = conversation.start + content.slice(conversation.start).indexOf('</aside>');
	}
	for (let i = conversation.start + 2; i < conversation.end; i += 1) {
		if (content[i].startsWith('<article')) {
			const comment = {
				id: content[i + 1].match(/id="([^"]+)"/)[1],
				url: content[i + 1].match(/wrote on <a href="([^"]+)"/)?.[1],
				own: content[i + 1].includes('rel="me author"'),
				offset: i - conversation.start,
			};
			if (content[i].includes('data-unavailable')) {
				comment.unavailable = content[i].match(/data-unavailable="([^"]+)"/)[1];
			}
			if (content[i].includes('data-hook')) {
				content[i] = content[i].replace(' data-hook', '');
				conversation.hook = comment;
			}
			if (!conversation.hook && comment.own && comment.url?.startsWith('https://twitter.com')) {
				conversation.hook = comment;
			}
			if (comment.id === 'comment-0') {
				conversation.hidden = comment;
			} else {
				conversation.thread.push(comment);
			}
			content[i + 1] = content[i + 1].replace(/<time>([^<]+)<\/time>/g, (_, textContent) => meta.date.format(textContent, 'hh:mm'));
		}
	}
	meta.page.conversation = conversation;

	const TWEET_URL = 'https://twitter.com/intent/tweet';
	const commentUrlKey = conversation.hook ? 'in_reply_to' : 'text';
	const commentUrlValue = conversation.hook ? conversation.hook.url.split('/').pop() : encodeURIComponent(`@cssence ${meta.getPermalink(meta.page.path)} `);
	const shareUrlValue = encodeURIComponent(`“${meta.page.title}” ${meta.getPermalink(meta.page.path)} by @cssence`);
	const contributeSection = [
		'<section>',
		`<h3 id="contribute">${conversation.thread.length ? 'Join' : 'Start'} the conversation</h3>`,
		`<p><a href="${TWEET_URL}?${commentUrlKey}=${commentUrlValue}">Have your say</a> on Twitter, or simply <a href="${TWEET_URL}?text=${shareUrlValue}">share this ${isStandaloneThread ? 'thread' : 'article'}.</a></p>`,
		'</section>'
	];
	const insertBefore = conversation.end;
	delete conversation.start;
	delete conversation.end;
	content.splice(insertBefore, 0, ...contributeSection)

};	

export default modify;
