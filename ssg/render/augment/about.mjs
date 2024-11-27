/* Add `footer.metadata` */

const add = (content, meta) => {

	const nonIndexTypeMap = {'c-default': 'page', 'c-about': 'page', 'c-note': 'thread', 'c-link': 'thread'};
	const type = meta.page.isIndex ? (meta.page.path === '/' ? 'site' : 'index page') : (nonIndexTypeMap[meta.page.className] || 'article');

	const isStandaloneThread = meta.page.isPostByYear && content.includes('<h2 class="visually-hidden" id="comments">Message thread</h2>');
	const multipleAuthors = isStandaloneThread && meta.page.conversation?.thread.filter((comment) => !comment.own).length ? ' et al' : '';
	const footer = [
		'<footer class="metadata">',
		`<h2 id="about-post">About this ${type}</h2>`,
		'<address>',
		`<p>${meta.page.isIndex ? 'Curated' : 'Written'} by ${meta.date.getAuthor(meta.page.published || meta.page.revised)}${multipleAuthors}.</p>`,
		'</address>'
	];

	if (meta.page.published) {
		const origin = meta.page.className !== 'c-extra' ? meta.page.alternateUrl : null;
		if (origin) {
			const remote = origin.split('/')[2];
			const isResponseCurated = !['cssence.wordpress.com', 'medium.com', 'htmhell.dev'].includes(remote) && !meta.page.conversation?.thread[0]?.own;
			const isResponseElsewhere = content[content.indexOf('<header>') + 2].startsWith('<p>A response to');
			const isResponse = isResponseCurated || isResponseElsewhere;
			footer.push(`<p>Originally ${isResponse ? 'responded' : 'published'} on ${remote} on ${meta.date.format(meta.page.published)}.</p>`);
		} else {
			footer.push(`<p>Published on ${meta.date.format(meta.page.published)}.</p>`);
		}
	}
	if (meta.page.revised) {
		footer.push(`<p>Last revised on ${meta.date.format(meta.page.revised)}.</p>`);
	}
	footer.push(`<p><a href="${meta.getPermalink(meta.page.path)}">Permalink: ${meta.getPermalink(meta.page.path)}</a></p>`);
	footer.push('</footer>');

	const insertBefore = content.indexOf('</main>') - 1; // = `</article> || </div>`
	content.splice(insertBefore, 0, footer.join('\n'));

};

export default add;
