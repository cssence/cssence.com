/* Modify conversation `html.c-note,.c-link main > article > div, aside[aria-labelledby="comments"]` */

const modify = (content, meta) => {

	if (!meta.page.isPostByYear) return; // commenting not possible/allowed

	const isStandaloneThread = content.includes('<h2 class="visually-hidden" id="comments">Message thread</h2>');

	const conversation = {thread: []};
	if (isStandaloneThread) {
		conversation.start = content.indexOf('</header>') + 1;
		conversation.end = content.lastIndexOf('</article>') - 1;
	} else {
		conversation.start = content.indexOf('<h2 id="comments">Comments</h2>') - 1;
		conversation.end = conversation.start + content.slice(conversation.start).indexOf('</aside>');
		content[conversation.start] = '<aside aria-labelledby="comments">';
	}
	let commentIndex = 0;
	for (let i = conversation.start + 2; i < conversation.end; i += 1) {
		if (content[i].startsWith('<article')) {
			const comment = {
				id: content[i + 1].match(/id="([^"]+)"/)?.[1],
				urls: content[i + 1].match(/href="([^"]+)"/)?.[1]?.split(',') || [],
				own: content[i + 1].includes('<span'),
				offset: i - conversation.start,
			};
			if (content[i].includes('data-unavailable')) {
				comment.unavailable = content[i].match(/data-unavailable="([^"]+)"/)[1];
			}
			if (content[i].includes('data-hook')) {
				content[i] = content[i].replace(' data-hook', '');
				conversation.hook = comment;
			}
			if (!conversation.hook && comment.own && comment.urls.length) {
				if (comment.urls[0].startsWith('https://twitter.com') || comment.urls[0].startsWith('https://mas.to')) {
					conversation.hook = comment;
				}
			}
			if (content[i].includes('hidden')) {
				comment.id = 'comment-0';
				conversation.hidden = comment;
			} else {
				commentIndex += 1;
				if (comment.id && commentIndex !== parseInt(comment.id.split('-')[1], 10)) {
					console.warn(`Blog post ${meta.page.path} contains comment(s) with out-of-sync ID.`);
				}
				comment.id = `comment-${commentIndex}`;
				conversation.thread.push(comment);
			}
			content[i] = content[i].replace('<article', `<article aria-labelledby="${comment.id}"`);
			if (!content[i + 1].startsWith('<h3 id=')) content[i + 1] = content[i + 1].replace('<h3', `<h3 id="${comment.id}"`);
			content[i + 1] = content[i + 1].replace(/<time>([^<]+)<\/time>/g, (_, textContent) => meta.date.format(textContent, 'hh:mm'));
		}
	}
	meta.page.conversation = conversation;

	const postType = isStandaloneThread ? 'thread' : 'article';
	const shareUrlValue = encodeURIComponent(`“${meta.page.title}” ${meta.getPermalink(meta.page.path)} by @CSSence`);
	const shareUrl = `<a href="https://twitter.com/intent/tweet?text=${shareUrlValue}">share this ${postType} on Twitter/X.</a>`;
	const contributeSection = [
		'<section aria-labelledby="contribute">',
		`<h3 id="contribute">${conversation.thread.length ? 'Join' : 'Start'} the conversation</h3>`,
		`<p>Simply ${shareUrl}</p>`,
		'</section>'
	];
	if (conversation.hook) {
		const known = { 'mas.to': 'Mastodon', 'twitter.com': 'Twitter/X' };
		const knownRemotes = Object.keys(known);
		let andShare = ` or simply ${shareUrl}`;
		const replies = conversation.hook.urls.map((url, index) => {
			const remote = url.split('/')[2];
			const prefix = index === 0 ? 'Have your say on ' : 'reply on ';
			if (remote === 'twitter.com') {
				url = `https://twitter.com/intent/tweet?in_reply_to=${url.split('/').pop()}`;
				andShare = '';
			} else if (!knownRemotes.includes(remote)) {
				console.warn(`Blog post ${meta.page.path} contains unknown remote ${url}.`);
			}
			const isLast = !andShare && !conversation.hook.urls[index + 1];
			return `<a href="${url}">${prefix}${known[remote] || remote}${isLast ? '.' : ','}</a>`;
		});
		contributeSection[2] = `<p>${replies.join(' or ')}${andShare}</p>`;
	}

	const insertBefore = conversation.end;
	delete conversation.start;
	delete conversation.end;
	content.splice(insertBefore, 0, ...contributeSection);

};

export default modify;
