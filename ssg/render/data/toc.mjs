/* Augment _Table Of Contents_ (TOC) data */

import { getFileContent } from '../../utils/files.mjs';

import getPageData from './page.mjs';

const getToc = async (folder, meta) => {

	const toc = {indexes: [], pages: [], posts: [], byPath: {}};

	// create individual decks

	for (const urlPath of meta.indexHtmlList) {
		const file = `${folder}${urlPath}index.html`;
		const html = await getFileContent(file);
		const content = html.split('\n');
		const { page, isIndex, isPostByYear } = getPageData(urlPath, content, meta);
		const deck = isIndex ? 'indexes' : (isPostByYear ? 'posts' : 'pages');
		toc[deck].push(page);
	}

	// sort entries in individual decks

	const getIndexWeight = (page) => {
		const weight = [2, page.path];
		if (page.path.startsWith('/series/')) {
			weight[0] = 4;
		} else if (page.path.match(/^\/[0-9]{4}\//)) {
			if (page.path.length > 6) {
				weight[0] = 5;
			} else {
				weight[0] = 3;
				weight[1] = `/${9999 - Number(page.path.slice(1, -1))}/`;
			}
		} else if (['/', '/about/about/', '/all/', '/latest/', '/popular/'].includes(page.path)) {
			weight[0] = 0;
		} else if (['/articles/', '/threads/'].includes(page.path)) {
			weight[0] = 1;
		}
		return weight.join('');
	};
	toc.posts.sort((a, b) => b.published < a.published ? -1 : 1);
	toc.pages.sort((a, b) => a.path < b.path ? -1 : 1);
	toc.indexes.sort((a, b) => getIndexWeight(a) < getIndexWeight(b) ? -1 : 1);

	// map individual decks content to toc.byPath

	const assign = (card, cardDefaults = {}) => {
		for (const key of Object.keys(cardDefaults)) {
			card[key] = cardDefaults[key];
		}
		toc.byPath[card.path] = card;
	};
	for (const index of toc.indexes) assign(index, { isIndex: true });
	for (const page of toc.pages) assign(page);
	for (const post of toc.posts) assign(post, { isPostByYear: true });

	return toc;
};

export default getToc;
