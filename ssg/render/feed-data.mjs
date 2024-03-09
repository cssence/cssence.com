/* Create RSS feed */

import { storePageData } from './data/page.mjs';
import indexCards from './augment/index.mjs';
import addSourceCode from './augment/source.mjs';
import addCodepen from './augment/codepen.mjs';
import modifyConversation from './augment/conversation.mjs';

const getFeedData = async (urlPath, html, meta, isIndex) => {
	let content = html.split('\n');
	storePageData(urlPath, meta);

	if (isIndex) {
		indexCards(content, meta);
		return;
	}

	await addSourceCode(content, meta);
	addCodepen(content, meta, true);
	modifyConversation(content, meta);

	const standaloneThread = content.indexOf('<h2 class="visually-hidden" id="comments">Message thread</h2>');
	const from = (standaloneThread === -1 ? content.indexOf('<div>') : standaloneThread) + 1;
	const to = content.indexOf('<section aria-labelledby="contribute">');
	content = content.slice(from, to);
	if (standaloneThread === -1) {
		const hr = content.indexOf('<aside aria-labelledby="comments">');
		content[hr- 1] = '';
		content[hr] = '<hr>';
	}
	content = content.join('\n');

	content = content.replaceAll(/ href="([^"]+)"/g, (found, href) => {
		if (href.startsWith('#')) {
			return ` href="${meta.getPermalink(urlPath)}${href}"`;
		} else if (href.startsWith('/')) {
			return ` href="${meta.getPermalink(href)}"`;
		} else {
			return found;
		}
	});
	content = content.replaceAll(/ src="([^"]+)"/g, (found, href) => {
		if (urlPath === '/all/') console.log(href);
		if (href.startsWith('/')) {
			return ` src="${meta.getPermalink(href)}"`;
		} else {
			return found;
		}
	});
	return content;
};

export default getFeedData;
