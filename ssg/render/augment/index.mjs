/* Get all required children for index pages */

const determine = (content, meta) => {

	const start = content.indexOf('<section class="posts">');
	if (start === -1) return;
	const end = content.indexOf('</main>');
	let i = start - 1;

	const getCards = (query) => {
		// const unIndexed = (index) => !index.path.startsWith('/series/') || index.path === '/series/';
		const unIndexed = (index) => index.path.split('/').length < 4 || index.path === '/about/about/';
		const unEgged = (index) => index.type !== 'Easter egg';
		const extra = (post) => post.className[2] === 'e';
		const thread = (post) => ['c-note', 'c-link'].includes(post.className);
		if (!query.filter) {
			let allEntries = [];
			query.toc.split(',').forEach((key) => allEntries = allEntries.concat(meta.toc[key]));
			return allEntries;
		} else if (query.filter === '[hidden]') {
			return meta.toc.indexes.filter(unIndexed).concat(meta.toc.pages.filter(unEgged));
		} else if (query.filter === '.c-extra') {
			return meta.toc.posts.filter(extra);
		} else if (query.filter === '.c-short') {
			return meta.toc.posts.filter((post) => !extra(post));
		} else if (query.filter === '.c-article') {
			return meta.toc.posts.filter((post) => !thread(post));
		} else if (query.filter === '.c-thread') {
			return meta.toc.posts.filter(thread);
		} else if (query.filter === '[href^="/series/"]:not([href="/series/"])') {
			return meta.toc.indexes.filter((index) => !unIndexed(index));
		} else if (query.filter.startsWith('[href')) {
			const match = query.filter.startsWith('[href$') ? 'endsWith' : 'startsWith';
			const href = query.filter.split('"')[1];
			return meta.toc.posts.filter((post) => post.path[match](href));
		} else if (query.filter.startsWith('.')) {
			const className = query.filter.slice(1);
			return meta.toc.posts.filter((post) => post.className === className);
		}
		console.warn(`No filter() for query '${query}' on index page ${meta.page.path} defined.`);
		return [];
	};

	meta.page.sections = [];
	while (i < end) {
		if (content[i += 1] === '<section class="posts">') {
			const section = {};
			section.id = content[i += 1].match(/id="([^"]+)"/)[1];
			section.query = { toc: 'posts' };
			const curated = !content[i += 2].endsWith('-->');
			for (const selector of content[i].split(' ').slice(1, curated ? undefined : -1)) {
				const split = selector.indexOf('=');
				section.query[selector.slice(0, split)] = selector.slice(split + 1);
			}
			if (curated) {
				const paths = [];
				const remove = i;
				while (content[i += 1] !== '-->') {
					paths.push(content[i].trim());
				}
				section.cards = paths.map((path) => {
					const pathFound = meta.toc.byPath[path];
					if (!pathFound) console.warn(`Index page ${meta.page.path} contains section.posts with unknown page '${path}'.`);
					return pathFound;
				});
				section.total = section.cards.length;
				content.splice(remove, i - remove);
				i = remove;
				content[i] = '<!-- :is(curated) -->';
			} else {
				section.cards = getCards(section.query);
				section.total = section.cards.length;
				if (section.query.limit) {
					section.limit = Number(section.query.limit);
					section.cards = section.cards.slice(0, section.limit);
				}
			}
			section.offset = i - start;
			meta.page.sections.push(section);
		}
	}

	if (!meta.page.revised) {
		const setRevised = (latest) => {
			const ts = latest.published || latest.revised;
			meta.page.revised = ts;
			meta.toc.byPath[meta.page.path].revised = ts;
		};
		const query = meta.page.sections[0].query;
		const cards = meta.page.sections[0].cards;
		if (meta.page.path === '/') {
			setRevised({ revised: meta.date.build });
		} else if (meta.page.path === '/about/about/') {
			setRevised(cards.slice(2).sort((a, b) => (b.published || b.revised) < (a.published || a.revised) ? -1 : 1)[0]);
		} else if (meta.page.sections.length === 1) {
			const byRevisionDesc = (a, b) => b.revised < a.revised ? -1 : 1;
			if (query.sort) cards.sort(byRevisionDesc);
			if (query.latest === 'last') {
				setRevised(cards[cards.length - 1]);
			} else if (query.latest === 'somewhere') {
				setRevised([].concat(cards).sort(byRevisionDesc)[0]);
			} else {
				setRevised(cards[0]);
			}
		} else {
			console.warn(`Index page ${meta.page.path} contains ${meta.page.sections.length} sections, but no revised date.`);
		}
	}

};

export default determine;
