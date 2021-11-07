/* Augment _Table Of Contents_ (TOC) data */

const storeTocData = (meta, toc) => {

	toc.byPath = {};

	const assign = (card, defaults = {}) => {
		for (const key of Object.keys(defaults)) {
			card[key] = defaults[key];
		}
		if (!card.className) card.className = 'c-default';
		if (!card.thumbnail) card.thumbnail = '/404/index.png';
		toc.byPath[card.path] = card;
	};

	for (const index of toc.indexes) assign(index, { isIndex: true });
	for (const page of toc.pages) assign(page);
	for (const post of toc.posts) assign(post, { isPostByYear: true });

	meta.toc = toc;
};

export default storeTocData;
