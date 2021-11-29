/* Add link to `html.c-code articles` */

const modify = (content, meta) => {

	if (meta.page.path !== '/archive/') return;

	meta.toc.byPath['/archive/'].revised = meta.page.revised = meta.toc.posts[0].published;

	const SUM = 'ALL';
	const stats = {};
	for (const className of ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', SUM]) {
		stats[className] = {};
		stats[className][SUM] = 0;
		for (let year = meta.date.year; year >= 2010; year -= 1) {
			stats[className][year] = 0;
		}
	}
	for (const post of meta.toc.posts) {
		const year = post.published.split('-')[0];
		stats[post.className][year] += 1;
		stats[post.className][SUM] += 1;
		stats[SUM][year] += 1;
		stats[SUM][SUM] += 1;
	}

	const tableContent = ['<tbody>'];
	for (let year = meta.date.year; year >= 2010; year -= 1) {
		const cols = [`<th scope="row"><a href="/${year}/">${year}</a></th>`];
		for (const className of ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', SUM, 'c-articles']) {
			const value = className === 'c-articles' ? stats[SUM][year] - stats['c-note'][year] : stats[className][year];
			cols.push(`<td><data value="${value}">${value}</data></td>`);
		}
		tableContent.push(`<tr>${cols.join('')}</tr>`);
	}
	tableContent.push('</tbody>');
	tableContent.push('<tfoot>');
	const lastRowCols = [`<th scope="row">All</th>`];
	for (const className of ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', SUM, 'c-articles']) {
		const value = className === 'c-articles' ? stats[SUM][SUM] - stats['c-note'][SUM] : stats[className][SUM];
		lastRowCols.push(`<td><data value="${value}">${value}</data></td>`);
	}
	tableContent.push(`<tr>${lastRowCols.join('')}</tr>`);
	tableContent.push('</tfoot>');

	const insertBefore = content.indexOf('</table>');
	const total = insertBefore + 2;
	content[total] = content[total].replace('<!-- articles: -->The number of', stats[SUM][SUM] - stats['c-note'][SUM]);
	content[total] = content[total].replace('<!-- notes: -->the number of', stats['c-note'][SUM]);
	content[total] = content[total].replace('<!-- posts: -->many', meta.toc.posts.length); // should be equal to stats[SUM][SUM]
	content[total] = content[total].replace('<!-- all: -->even more', meta.toc.posts.length + meta.toc.indexes.length + meta.toc.pages.length);
	content.splice(insertBefore, 0, tableContent.join('\n'));

};

export default modify;
