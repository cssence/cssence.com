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
		const cols = [`<th><a href="/${year}/">${year}</a></th>`];
		for (const className of ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', SUM]) {
			const value = stats[className][year];
			cols.push(`<td><data value="${value}">${value}</data></td>`);
		}
		tableContent.push(`<tr>${cols.join('')}</tr>`);
	}
	tableContent.push('</tbody>');
	tableContent.push('<tfoot>');
	const lastRowCols = [`<th>All</th>`];
	for (const className of ['c-essay', 'c-editorial', 'c-event', 'c-code', 'c-note', SUM]) {
		const value = stats[className][SUM];
		lastRowCols.push(`<td><data value="${value}">${value}</data></td>`);
	}
	tableContent.push(`<tr>${lastRowCols.join('')}</tr>`);
	tableContent.push('</tfoot>');

	const insertBefore = content.indexOf('</table>');
	content.splice(insertBefore, 0, tableContent.join('\n'));

};

export default modify;
