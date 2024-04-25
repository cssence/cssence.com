/* Calculate BigTable in `/archive/` */

const modify = (content, meta) => {

	if (meta.page.path !== '/archive/') return;

	meta.toc.byPath['/archive/'].revised = meta.page.revised = meta.toc.posts[0].published;

	let newestYear = meta.date.year;
	if (!meta.toc.byPath[`/${newestYear}/`]) newestYear -= 1;

	const SUM = 'ALL';
	const COLS = ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', 'c-link', SUM, 'c-extra', 'c-short'];
	const stats = {};
	for (const className of COLS) {
		stats[className] = {};
		stats[className][SUM] = 0;
		for (let year = newestYear; year >= 2010; year -= 1) {
			stats[className][year] = 0;
		}
	}
	for (const post of meta.toc.posts) {
		const year = post.published.split('-')[0];
		const category = post.className[2] === 'e' ? 'c-extra' : 'c-short';
		stats[post.className][year] += 1;
		stats[post.className][SUM] += 1;
		stats[category][year] += 1;
		stats[category][SUM] += 1;
		stats[SUM][year] += 1;
		stats[SUM][SUM] += 1;
	}

	const tableContent = ['<tbody>'];
	for (let year = newestYear; year >= 2010; year -= 1) {
		const cols = [`<th scope="row"><a href="/${year}/">${year}</a></th>`];
		for (const className of COLS) {
			const value = stats[className][year];
			cols.push(`<td><data value="${value}">${value}</data></td>`);
		}
		tableContent.push(`<tr>${cols.join('')}</tr>`);
	}
	tableContent.push('</tbody>');
	tableContent.push('<tfoot>');
	const lastRowCols = [`<th scope="row"><a href="/all/">All</a></th>`];
	for (const className of COLS) {
		const value = stats[className][SUM];
		lastRowCols.push(`<td><data value="${value}">${value}</data></td>`);
	}
	tableContent.push(`<tr>${lastRowCols.join('')}</tr>`);
	tableContent.push('</tfoot>');

	const insertBefore = content.indexOf('</table>');
	const total = insertBefore + 2;
	content[total] = content[total].replace('<!-- extras: -->The number of', stats['c-extra'][SUM]);
	content[total] = content[total].replace('<!-- shorts: -->the number of', stats['c-short'][SUM]);
	content[total] = content[total].replace('<!-- posts: -->umpteen', meta.toc.posts.length); // should be equal to stats[SUM][SUM]
	content[total] = content[total].replace('<!-- all: -->even more', meta.toc.posts.length + meta.toc.indexes.length + meta.toc.pages.length);
	content[total] = content[total].replace('<!-- rss: -->many', meta.rssXmlList.length);
	content.splice(insertBefore, 0, tableContent.join('\n'));

};

export default modify;
