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
				conversation.hook = comment;
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
	const shareLink = `<a href="mailto:?subject=${encodeURIComponent(meta.page.title)}%20-%20CSSence.com&body=${encodeURIComponent(meta.getPermalink(meta.page.path))}">share this ${postType}.</a>`;
	const contributeSection = [
		'<section aria-labelledby="contribute">',
		`<h3 id="contribute">Get involved</h3>`,
		`<p>Feel free to ${shareLink}</p>`,
		'</section>'
	];
	const postAge = meta.date.getAgeInYears(meta.page.published);
	if (postAge >= 3) {
		contributeSection[2] = `<p>Feel free to ${shareLink} But keep in mind, it was published more than ${meta.number.format(postAge).toLowerCase()} years ago, so comments are closed.</p>`;
	} else if (conversation.hook) {
		const remoteUrl = conversation.hook.urls[0];
		if (remoteUrl.startsWith('https://twitter.com/')) {
			// TODO remove by the end of 2025, last problematic entries are in /2022/ folder
			contributeSection[2] = `<p>Comments are closed, but feel free to ${shareLink}</p>`;
		} else {
			contributeSection[2] = `<p><a href="${remoteUrl}">Have your say on Mastodon,</a> or simply ${shareLink}</p>`;
		}
	}

	const insertBefore = conversation.end;
	delete conversation.start;
	delete conversation.end;
	content.splice(insertBefore, 0, ...contributeSection);

};

export default modify;
