/* Get all required children for index pages */

const determine = (content, meta) => {

	const start = content.indexOf('<section class="posts">');
	if (start === -1) return;
	const end = content.indexOf('</main>');
	let i = start - 1;

	const filter = (query) => {
		// const unIndexed = (index) => !index.path.startsWith('/series/') || index.path === '/series/';
		const unIndexed = (index) => index.path.split('/').length < 4 || index.path === '/about/about/';
		if (query === '/all/') {
			return [].concat(meta.toc.posts);
		} else if (query === '/about/about/') {
			return meta.toc.indexes.filter(unIndexed).concat(meta.toc.pages);
		} else if (query === '/articles/') {
			return meta.toc.posts.filter((post) => post.className !== 'c-note');
		} else if (query === '/series/') {
			return meta.toc.indexes.filter((index) => !unIndexed(index));
		} else if (query.match(/^\/[0-9]{4}\/$/)) { // '/YYYY/'
			return meta.toc.posts.filter((post) => post.path.startsWith(query));
		}
		const queryTypeMap = {
			'/code/': 'c-code',
			'/editorials/': 'c-editorial',
			'/events/': 'c-event',
			'/essays/': 'c-essay',
			'/notes/': 'c-note'
		};
		if (queryTypeMap[query]) {
			return meta.toc.posts.filter((post) => post.className === queryTypeMap[query]);
		}
		console.warn(`No filter() for query '${query}' on index page ${meta.page.path} defined.`);
		return [];
	};

	meta.page.sections = [];
	while (i < end) {
		if (content[i += 1] === '<section class="posts">') {
			const section = {};
			section.id = content[i += 1].match(/id="([^"]+)"/)[1];
			if (!content[i += 2].endsWith('-->')) {
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
				content[i] = '<!-- (all) -->';
			} else {
				const limit = content[i].split(' ')[1];
				const query = section.id === 'overview' ? meta.page.path : `/${section.id.split('-')[1]}/`;
				section.cards = filter(query);
				section.total = section.cards.length;
				if (limit !== '(all)') {
					section.limit = Number(limit);
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
		const cards = meta.page.sections[0].cards;
		if (meta.page.path === '/') {
			setRevised({ revised: meta.date.build });
		} else if (meta.page.path === '/about/about/') {
			setRevised(cards.slice(2).sort((a, b) => (b.published || b.revised) < (a.published || a.revised) ? -1 : 1)[0]);
		} else if (meta.page.sections.length === 1) {
			setRevised(cards[0]);
		} else {
			console.warn(`Index page ${meta.page.path} contains ${sections.length} sections, but no revised date.`);
		}
	}

};	

export default determine;
