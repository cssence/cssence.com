/* Get innerHTML for RSS feeds */

const extractFeedContent = (content, meta) => {

	if (!meta.page.isPostByYear) return;

	const urlPath = meta.page.path;

	const standaloneThread = content.indexOf('<h2 class="visually-hidden" id="comments">Message thread</h2>');
	const from = (standaloneThread === -1 ? content.indexOf('<div>') : standaloneThread) + 1;
	const to = content.indexOf('<section aria-labelledby="contribute">');
	let rssContent = content.slice(from, to);

	if (standaloneThread === -1) {
		const hr = rssContent.indexOf('<aside aria-labelledby="comments">');
		rssContent[hr - 1] = '';
		rssContent[hr] = '<hr>';
	}

	if (meta.page.className === 'c-extra') {
		for (let i = rssContent.length - 1; i >= 0; i -= 1) {
			if (rssContent[i].startsWith('<div class="figure standout codepen">')) {
				rssContent[i] = rssContent[i].split('\n').slice(1, -1).join('\n');
				break;
			}
		}
	}

	rssContent = rssContent.join('\n');

	rssContent = rssContent.replaceAll(/ href="([^"]+)"/g, (found, href) => {
		if (href.startsWith('#')) {
			return ` href="${meta.getPermalink(urlPath)}${href}"`;
		} else if (href.startsWith('/')) {
			return ` href="${meta.getPermalink(href)}"`;
		} else {
			return found;
		}
	});
	rssContent = rssContent.replaceAll(/ src="([^"]+)"/g, (found, href) => {
		if (href.startsWith('/')) {
			return ` src="${meta.getPermalink(href)}"`;
		} else {
			return found;
		}
	});

	meta.toc.byPath[urlPath].rssDescription = rssContent;
};

export default extractFeedContent;
