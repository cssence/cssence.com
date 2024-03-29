/* Augment _Table Of Contents_ (TOC) data */

import { getFileContent } from '../../utils/files.mjs';

import getPageData from './page.mjs';

const getToc = async (folder, indexHtmlList) => {

	const toc = {indexes: [], pages: [], posts: [], byPath: {}};

	// create individual decks

	for (const urlPath of indexHtmlList) {
		const file = `${folder}${urlPath}index.html`;
		const html = await getFileContent(file);
		const content = html.split('\n');
		const { page, isIndex, isPostByYear } = getPageData(urlPath, content);
		const deck = isIndex ? 'indexes' : (isPostByYear ? 'posts' : 'pages');
		toc[deck].push(page);
	}

	// sort entries in individual decks

	const getIndexWeight = (page) => {
		const weight = [3, page.path];
		if (['/', '/about/about/'].includes(page.path)) {
			weight[0] = 0;
		} else if (['/articles/', '/code/', '/editorials/', '/essays/', '/events/', '/notes/'].includes(page.path)) {
			weight[0] = 1;
		} else if (page.path.match(/^\/[0-9]{4}\//)) {
			if (page.path.length > 6) {
				weight[0] = 4;
			} else {
				weight[0] = 2;
				weight[1] = `/${9999 - Number(page.path.slice(1, -1))}/`;
			}
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
